"use server";

import { auth } from "@/lib/auth";
import { RegisterSchemaType } from "@/lib/zodschema/registerSchema";

const userRegister = async ({
  firstName,
  surName,
  emailId,
  gender,
  password,
  phoneNumber,
}: RegisterSchemaType) => {
  try {
    await auth.api.signUpEmail({
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

    return {
      isSuccess: true,
      message: "Registration Successful",
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      message: "Registration failed, please try again",
    };
  }
};

export default userRegister;
