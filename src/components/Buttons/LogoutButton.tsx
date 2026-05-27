"use client";
import userLogout from "@/server/userLogout";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

const LogoutButton = () => {
  const { push } = useRouter();
  const logoutHandeler = async () => {
    const { isSuccess, message } = await userLogout();

    if (isSuccess) {
      toast.success(message);
      push("/login");
    } else {
      toast.error(message);
    }
  };

  return (
    <Button
      className="font-paragraph bg-red-500 text-white"
      onClick={logoutHandeler}>
      Logout
    </Button>
  );
};

export default LogoutButton;
