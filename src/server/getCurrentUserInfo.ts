"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const getCurrentUserInfo = async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};

export default getCurrentUserInfo;
