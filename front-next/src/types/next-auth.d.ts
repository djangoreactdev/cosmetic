import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { ObtainJsonWebToken } from "src/graphql/generated";

declare module "next-auth" {
  interface User extends ObtainJsonWebToken {
    token: string;
    tokenExpiresIn: number;
    username: string;
    email: string;
  }

  interface Session extends DefaultSession {
    token: string;
    username: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    username: string;
    email: string;
    tokenExpiresIn: number;
  }
}
