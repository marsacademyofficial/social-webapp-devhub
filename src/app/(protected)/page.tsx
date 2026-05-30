import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userName = session?.user.userName;
  return (
    <section className="grid h-dvh place-items-center">{userName} Feed</section>
  );
};

export default page;
