import { ReactNode } from "react";
import z from "zod";
import { loginSchema } from "./zodschema/loginSchema";
import { registerSchema } from "./zodschema/registerSchema";
import { userNameSchema } from "./zodschema/userNameSchema";

export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export type RegisterSchemaType = z.infer<typeof registerSchema>;

export type UserNameSetupSchemaType = z.infer<typeof userNameSchema>;

export type LoginSchemaType = z.infer<typeof loginSchema>;
