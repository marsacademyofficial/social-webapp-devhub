import AuthHeader from "@/components/Header/AuthHeader";
import { ReactNode } from "react";

type AuthLayoutProps = Readonly<{
  children: ReactNode;
}>;

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
};

export default AuthLayout;
