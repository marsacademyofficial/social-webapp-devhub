import Header from "@/components/Header/Header";
import { ReactNode } from "react";

type ProtectedLayout = Readonly<{
  children: ReactNode;
}>;

const ProtectedLayout = ({ children }: ProtectedLayout) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProtectedLayout;
