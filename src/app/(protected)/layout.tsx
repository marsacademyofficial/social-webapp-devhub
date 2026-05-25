import Header from "@/components/Header/Header";
import { RootLayoutProps } from "@/lib/type";

const ProtectedLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProtectedLayout;
