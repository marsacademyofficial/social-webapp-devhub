"use client";

import { VscGithubInverted } from "react-icons/vsc";
import { Button } from "../shadcnui/button";
const ContinueWithGithub = () => {
  return (
    <Button
      variant="outline"
      className="font-paragraph py-4">
      <VscGithubInverted />
      Continue With Github
    </Button>
  );
};

export default ContinueWithGithub;
