"use server";

import { auth } from "@/lib/auth";
import { LoginSchemaType } from "@/lib/type";
import { headers } from "next/headers";

const userLogin = async ({
  emailId,
  password,
  rememberMe,
}: LoginSchemaType) => {
  try {
    await auth.api.signInEmail({
      body: {
        email: emailId,
        password,
        rememberMe,
      },
      headers: await headers(),
    });

    return {
      isSuccess: true,
      message: "Login Successful",
    };
  } catch (error) {
    console.error(error);
    return {
      isSuccess: false,
      message: "The login information you entered is incorrect.",
    };
  }
};

export default userLogin;
