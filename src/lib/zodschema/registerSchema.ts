import z from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(2, `What's your first name?`),
  surName: z.string().min(2, "What's your sur name?"),
  emailId: z.email("Enter a valid email address"),
  phoneNumber: z.string().length(10, "Enter a valid Phone Number"),
  gender: z.string().min(4, "Please choose a gender."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
      "Enter a combination of at least Eight numbers, letters and punctuation marks (such as ! and &).",
    ),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
