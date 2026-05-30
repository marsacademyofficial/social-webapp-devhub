import z from "zod";

export const loginSchema = z.object({
  emailId: z.email(),
  password: z.string().min(8).max(72),
  rememberMe: z.boolean(),
});
