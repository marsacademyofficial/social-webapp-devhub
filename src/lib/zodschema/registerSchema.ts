import z from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(2, "Enter your full name"),
    emailId: z.email("Enter a valid email address"),
    phoneNumber: z.string().length(10, "Enter a valid Phone Number"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
        "Password must include uppercase, lowercase, number, and special character",
      ),

    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Those passwords didn’t match. Try again",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
