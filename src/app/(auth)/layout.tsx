import AuthHeader from "@/components/Header/AuthHeader";
import { RootLayoutProps } from "@/lib/type";

const AuthLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
};

export default AuthLayout;
