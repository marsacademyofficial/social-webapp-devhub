"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/database/dbClient";
import { RegisterSchemaType } from "@/lib/type";

const userRegister = async ({
  firstName,
  surName,
  emailId,
  gender,
  password,
  phoneNumber,
}: RegisterSchemaType) => {
  try {
    // Check existing user
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: emailId,
          },
          {
            phoneNumber,
          },
        ],
      },
    });

    if (existingUser) {
      return {
        isSuccess: false,
        message: "User Already exist !",
      };
    }

    const signup = await auth.api.signUpEmail({
      body: {
        name: `${firstName} ${surName}`,
        email: emailId,
        password,
        firstName,
        surName,
        gender,
        phoneNumber,
      },
    });

    if (signup) {
      return {
        isSuccess: true,
        message: "Registration Successful",
      };
    }
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      message: "Registration failed, please try again",
    };
  }
};

export default userRegister;
