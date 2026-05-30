"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const userLogout = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });

    return {
      isSuccess: true,
      message: "You have been logged out successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      message: "Unable to log out at the moment. Please try again.",
    };
  }
};

export default userLogout;
