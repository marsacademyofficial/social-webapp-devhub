import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const serverEnv = createEnv({
  server: {
    DATABASE_URL: z.url(),
    BETTER_AUTH_SECRET: z.string().min(32),
    BETTER_AUTH_URL: z.url(),
    ETTER_AUTH_TELEMETRY: z.string().optional(),
  },

  experimental__runtimeEnv: process.env,

  // Enable when deploying to production

  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRE,
  //   BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  //   ETTER_AUTH_TELEMETRY: process.env.ETTER_AUTH_TELEMETRY,
  // },
});
