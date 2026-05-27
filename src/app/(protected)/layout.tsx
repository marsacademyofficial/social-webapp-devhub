import Header from "@/components/Header/Header";
import { auth } from "@/lib/auth";
import { RootLayoutProps } from "@/lib/type";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: RootLayoutProps) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProtectedLayout;
