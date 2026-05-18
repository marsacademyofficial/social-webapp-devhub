import { ReactNode } from "react";

type AuthLayoutProps = Readonly<{
  children: ReactNode;
}>;

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <>{children}</>;
};

export default AuthLayout;
