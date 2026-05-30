import { LightRays } from "@/components/shadcnui/light-rays";
import { RootLayoutProps } from "@/lib/type";
import getCurrentUserInfo from "@/server/getCurrentUserInfo";
import { redirect } from "next/navigation";

const UserNamePagelayout = async ({ children }: RootLayoutProps) => {
  const session = await getCurrentUserInfo();

  if (!session) {
    redirect("/login");
  }

  // Already has username
  if (session.user.userName) {
    redirect("/feed");
  }

  return (
    <section className="relative h-dvh w-full overflow-hidden border">
      <LightRays />
      {children}
    </section>
  );
};

export default UserNamePagelayout;
