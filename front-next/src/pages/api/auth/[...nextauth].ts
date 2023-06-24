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

        const user = res.data;

        // If no error and we have user data, return it
        if (user !== undefined) {
          const decoded: { exp: number; username: string } = jwtDecode(
            user.tokenAuth.token
          );
          console.log(decoded);
          return {
            ...user,
            isNewUser: false,
            tokenExpiresIn: decoded.exp,
            username: decoded.username,
          } as Awaitable<User>;
        }

        if (user?.errors) {
          const errorMessage =
            user.errors[Object.keys(user.errors)[0]][0].message;
          throw new Error(`${Object.keys(user.errors)[0]}: ${errorMessage}`);
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
          name: "password1",
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

        const user = res.data?.createAccount;

        console.log(user);

        // If no error and we have user data, return it
        if (user?.success) {
          const decoded: { exp: number; username: string } = jwtDecode(
            user.token!
          );

          return {
            ...user,
            isNewUser: true,
            tokenExpiresIn: decoded.exp,
            username: decoded.username,
          } as Awaitable<User>;
        }

        if (user?.errors) {
          const errorMessage =
            user.errors[Object.keys(user.errors)[0]][0].message;
          throw new Error(`${Object.keys(user.errors)[0]}: ${errorMessage}`);
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          accessToken: user.token || "",
          refreshToken: user.refreshToken || "",
          username: user.username || "",
          tokenExpiresIn: user.tokenExpiresIn,
          isNewUser: user.isNewUser,
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

          Client.mutate({
            mutation: RevokeTokenDocument,
            variables: {
              refreshToken: token.refreshToken,
            },
          });

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
      session.isNewUser = token.isNewUser;
      session.expires = `${token.tokenExpiresIn}`;
      return session;
    },
  },
};

export default NextAuth(authOptions);
