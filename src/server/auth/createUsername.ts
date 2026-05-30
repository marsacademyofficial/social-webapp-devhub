"use server";

import prisma from "@/lib/database/dbClient";
import { userNameSchema } from "@/lib/zodschema/userNameSchema";

type createUsernameProps = {
  userName: string;

  userIdInfo: string | undefined;
};

const createUsername = async ({
  userName,
  userIdInfo,
}: createUsernameProps) => {
  try {
    // User authentication check
    if (!userIdInfo) {
      return {
        isSuccess: false,
        message: "Unauthorized user",
      };
    }

    const validData = userNameSchema.safeParse({
      userName,
    });

    if (!validData.success) {
      return {
        isSuccess: false,
        message: validData.error.issues[0].message,
      };
    }

    const corectUsername = validData.data.userName.toLowerCase();

    // Check username already exists
    const existUser = await prisma.user.findUnique({
      where: {
        userName: corectUsername,
      },
    });

    if (existUser) {
      return {
        isSuccess: false,
        message: "Username already taken",
      };
    }

    // Update username
    await prisma.user.update({
      where: {
        id: userIdInfo,
      },

      data: {
        userName,
      },
    });

    return {
      isSuccess: true,
      message: "Username created successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      message: "Something went wrong",
    };
  }
};

export default createUsername;
