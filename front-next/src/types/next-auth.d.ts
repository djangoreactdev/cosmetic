import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { ObtainJsonWebToken } from "src/graphql/generated";

declare module "next-auth" {
  interface User extends ObtainJsonWebToken {
<<<<<<< HEAD
    token: string;
    tokenExpiresIn: number;
    username: string;
    email: string;
=======
    isNewUser: boolean;
    tokenExpiresIn: number;
    username: string;
>>>>>>> 583e06f... add login
  }

  interface Session extends DefaultSession {
    token: string;
    username: string;
<<<<<<< HEAD
    email: string;
=======
    isNewUser: boolean;
>>>>>>> 583e06f... add login
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
<<<<<<< HEAD
    username: string;
    email: string;
=======
    refreshToken: string;
    username: string;
    isNewUser: boolean;
>>>>>>> 583e06f... add login
    tokenExpiresIn: number;
  }
}
