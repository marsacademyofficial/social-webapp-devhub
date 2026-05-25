"use client";

import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

type ToastButtonProps = {
  name: string;
};
const ToastButton = ({ name }: ToastButtonProps) => {
  return (
    <Button
      onClick={() => toast.success(`Hello ${name} 👋🏻`)}
      size={"lg"}>
      Click Me !
    </Button>
  );
};

export default ToastButton;
