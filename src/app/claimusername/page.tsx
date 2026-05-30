import UserNameForm from "@/components/AuthForms/UserNameForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import getCurrentUserInfo from "@/server/getCurrentUserInfo";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choose Username | DevHub",
  description:
    "Create your unique DevHub username and join the developer community.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = async () => {
  const session = await getCurrentUserInfo();
  const userId = session?.user.id;
  const userFullName = session?.user.name;
  const userGender = session?.user.gender;

  return (
    <section className="grid h-dvh place-items-center">
      <Card className="relative z-10 w-auto md:w-108">
        <CardHeader>
          <CardTitle className="font-heading text-xl font-bold md:text-2xl">
            Welcome to DevHub
          </CardTitle>
          <CardTitle className="font-heading text-xl font-semibold">
            {userGender === "female" ? "Ms" : "Mr"} {userFullName}
          </CardTitle>
          <CardDescription className="font-paragraph font-medium">
            Create your unique username to get started and join our developer
            community.
          </CardDescription>
        </CardHeader>

        <Separator />

        <CardContent>
          <UserNameForm userIdInfo={userId} />
        </CardContent>

        <CardFooter className="font-paragraph grid place-items-center gap-2 font-medium">
          <CardDescription className="text-muted-foreground text-xs">
            Secure • Fast • Community Driven
          </CardDescription>

          <CardDescription className="text-muted-foreground text-sm font-medium">
            © 2026 DevHub. All rights reserved.
          </CardDescription>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
