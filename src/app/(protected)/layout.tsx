import Header from "@/components/Header/Header";
import { RootLayoutProps } from "@/lib/type";
import getCurrentUserInfo from "@/server/getCurrentUserInfo";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: RootLayoutProps) => {
  const session = await getCurrentUserInfo();

  if (!session) {
    redirect("/login");
  }

  // Username not setup
  if (!session.user.userName) {
    redirect("/claimusername");
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProtectedLayout;
