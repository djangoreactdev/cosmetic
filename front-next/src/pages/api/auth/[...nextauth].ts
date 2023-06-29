import NextAuth, { AuthOptions, Awaitable, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { Client } from "@/graphql/apollo";
import { checkIsEmail } from "@/utils";
import {
  TokenAuthDocument,
  RefreshTokenDocument,
  CreateAccountDocument,
  AccountInput,
} from "@/graphql/generated";
import jwtDecode from "jwt-decode";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "login",
      name: "Email or Username",

      credentials: {
        id: {
          label: "Email address or username",
          type: "text",
          name: "id",
        },
        password: {
          label: "Password",
          type: "password",
          name: "password",
        },
      },
      authorize: async (credentials, req) => {
        const id: string = credentials?.id || "";
        const isEmail = checkIsEmail(id);

        let param:
          | { username: string; password: string }
          | { email: string; password: string };

        if (isEmail) {
          param = {
            email: id,
            password: credentials?.password || "",
          };
        } else {
          param = {
            username: id,
            password: credentials?.password || "",
          };
        }

        const res = await Client.mutate({
          mutation: TokenAuthDocument,
          variables: param,
        });

        const data = res.data;

        // If no error and we have user data, return it
        if (data !== undefined) {
          const decoded: { exp: number; email: string; username: string | "" } =
            jwtDecode(data.tokenAuth.token);

          return {
            ...data,
            token: data.tokenAuth.token,
            tokenExpiresIn: decoded.exp,
            email: decoded.email,
            username: decoded.username,
          } as Awaitable<User>;
        }

        if (data?.errors) {
          const errorMessage =
            data.errors[Object.keys(data.errors)[0]][0].message;
          throw new Error(`${Object.keys(data.errors)[0]}: ${errorMessage}`);
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
    CredentialsProvider({
      id: "register",
      name: "New Account",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          name: "username",
        },
        email: {
          label: "Email address",
          type: "email",
          name: "email",
        },
        lastName: {
          label: "Last Name",
          type: "text",
          name: "lastName",
        },
        firstName: {
          label: "First Name",
          type: "text",
          name: "firstName",
        },
        password: {
          label: "Password",
          type: "password",
          name: "password",
        },
      },

      authorize: async (credentials, req) => {
        const param: AccountInput = {
          username: credentials?.username || "",
          email: credentials?.email || "",
          lastName: credentials?.lastName || "",
          firstName: credentials?.firstName || "",
          password: credentials?.password || "",
        };

        const res = await Client.mutate({
          mutation: CreateAccountDocument,
          variables: param,
        });

        const data = res.data.createAccount.response;
        console.log(data);
        if (data.status === "success") {
          const decoded: { email: string; exp: number; username: string | "" } =
            jwtDecode(data.token);

          return {
            ...data,
            token: data.token,
            tokenExpiresIn: decoded.exp,
            username: decoded.username,
            email: decoded.email,
          } as Awaitable<User>;
        }

        if (data.status === "error") {
          console.error(data.message);
          const errorMessage = data.error(data.message);
          throw new Error(`${Object.keys(data.message)}: ${errorMessage}`);
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log(user, token);
      if (user) {
        return {
          accessToken: user.token || "",
          username: user.username || "",
          email: user.email || "",
          tokenExpiresIn: user.tokenExpiresIn,
        } as Awaitable<JWT>;
      } else if (Date.now() / 1000 < token.tokenExpiresIn) {
        return token;
      } else {
        try {
          const res = await Client.mutate({
            mutation: RefreshTokenDocument,
            variables: {
              refreshToken: token.refreshToken,
            },
          });

          // Client.mutate({
          //   mutation: RevokeTokenDocument,
          //   variables: {
          //     refreshToken: token.refreshToken,
          //   },
          // });
          console.log(res);
          const tokens = res.data?.refreshToken;

          if (!tokens?.success) throw tokens;

          const decoded: { exp: number } = jwtDecode(tokens.token!);

          return {
            ...token, // Keep the previous token properties
            accessToken: tokens.token,
            tokenExpiresIn: decoded.exp,
            refreshToken: tokens.refreshToken,
          } as Awaitable<JWT>;
        } catch (error: any) {
          console.error(error.errors[Object.keys(error.errors)[0]][0].message);
          throw new Error(
            `RefreshAccessTokenError: ${
              error.errors[Object.keys(error.errors)[0]][0].message
            }`
          );
        }
      }
    },
    session: async ({ session, token }) => {
      session.token = token.accessToken;
      session.username = token.username;
      session.email = token.email;
      session.expires = `${token.tokenExpiresIn}`;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
