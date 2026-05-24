import RegisterForm from "@/components/Forms/RegisterForm";
import { Button } from "@/components/shadcnui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevHub - Developer Community",
  description:
    "Connect with developers, share projects, explore tech trends and innovations.",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center px-6 md:px-0">
      <div className="grid max-w-112.5 gap-3 py-14 lg:max-w-140">
        {/* back to login page  */}
        <Link href={"/"}>
          <Button className="w-40">
            <ArrowLeftIcon /> Back to login
          </Button>
        </Link>

        {/* company barnding logo + Text */}
        <div className="flex items-center gap-2">
          <Image
            src="/dev-hub-logo.png"
            alt="dev-hub-trends"
            width={100}
            height={100}
            priority
            className="h-8 w-auto"
          />
          <span className="text-xl">Devhub</span>
        </div>
        <h1 className="text-3xl">Get started on Devhub</h1>
        <p className="text-sm text-white/78 md:text-lg">
          Create an account to connect with developers and communities where
          innovation meets the future.
        </p>

        {/* main  register form  */}
        <RegisterForm />

        {/* back to login page button  */}
        <Link href={"/"}>
          <Button
            variant={"outline"}
            className="w-full py-5">
            I already have an account
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default page;
