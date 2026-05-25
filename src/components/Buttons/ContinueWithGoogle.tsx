"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../shadcnui/button";

const ContinueWithGoogle = () => {
  return (
    <Button
      variant="outline"
      className="font-paragraph py-4">
      <FcGoogle /> Continue With Google
    </Button>
  );
};

export default ContinueWithGoogle;
