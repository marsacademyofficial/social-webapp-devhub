import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import prisma from "./database/dbClient";
import { serverEnv } from "./env/serverEnv";
export const auth = betterAuth({
  secret: serverEnv.BETTER_AUTH_SECRET,
  baseURL: serverEnv.BETTER_AUTH_URL,

  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),

  plugins: [nextCookies()],

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  user: {
    additionalFields: {
      firstName: {
        type: "string",
        input: true,
        required: true,
      },

      surName: {
        type: "string",
        input: true,
        required: true,
      },

      gender: {
        type: "string",
        input: true,
        required: false,
      },

      phoneNumber: {
        type: "string",
        input: true,
        required: false,
      },
    },
  },
});
