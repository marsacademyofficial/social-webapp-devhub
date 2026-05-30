import { z } from "zod";

export const userNameSchema = z.object({
  userName: z
    .string()

    // normalize
    .trim()
    .toLowerCase()
    // length
    .min(3, "Minimum 3 characters required")
    .max(39, "Maximum 39 characters allowed")

    // structure
    .regex(
      /^(?!-)(?!.*--)[a-z0-9-]+(?<!-)$/,
      "Only lowercase letters, numbers, and hyphens allowed",
    )

    // repeated letters
    .refine((value) => !/(.)\1\1\1/.test(value.replace(/[0-9-]/g, "")), {
      message: "No more than 3 repeated letters allowed",
    })

    // repeated numbers
    .refine((value) => !/(\d)\1\1\1\1/.test(value), {
      message: "No more than 4 repeated numbers allowed",
    })

    // reserved usernames
    .refine(
      (value) => {
        const reservedUsernames = [
          "admin",
          "root",
          "api",
          "support",
          "help",
          "login",
          "signup",
          "register",
          "dashboard",
          "settings",
          "system",
          "owner",
        ];

        return !reservedUsernames.includes(value);
      },
      {
        message: "This username is reserved",
      },
    ),
});
