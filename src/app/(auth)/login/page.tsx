import ContinueWithGithub from "@/components/Buttons/ContinueWithGithub";
import ContinueWithGoogle from "@/components/Buttons/ContinueWithGoogle";
import LoginForm from "@/components/Forms/LoginForm";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DevHub - Developer Community",
  description:
    "Connect with developers, share projects, explore tech trends and innovations.",
};
const page = () => {
  return (
    <section className="grid h-auto md:h-dvh lg:grid-cols-5">
      {/* text + image section  */}
      <div className="col-span-3 hidden items-center justify-center border-r-2 px-8 lg:flex">
        <div className="grid grid-cols-2">
          {/* text section  */}
          <div className="mt-14 grid gap-26">
            <Image
              src="/dev-hub-logo.png"
              alt="dev-hub-trends"
              width={256}
              height={303}
              priority
              className="h-20 w-auto object-contain"
            />

            <h2 className="font-heading text-5xl font-bold">
              Connect with <br />
              <span className="text-blue-600 dark:text-blue-400">
                Developers
              </span>
              <br />
              Share what matters.
            </h2>
          </div>

          {/* image section  */}
          <Image
            src="/login_page_img.png"
            alt="dev-hub-trends"
            width={1200}
            height={1200}
            priority
            className="h-170 w-auto object-contain"
          />
        </div>
      </div>

      {/* form  section  */}
      <div className="col-span-2 flex h-[90dvh] flex-col justify-center gap-4 px-6 md:px-16 lg:h-dvh">
        <h1 className="font-heading text-2xl font-bold">Login to Devhub</h1>

        {/* main login form  */}
        <LoginForm />

        <div className="grid grid-cols-3 place-items-center">
          <Separator />
          Or
          <Separator />
        </div>

        {/* Oauth Buttons  */}
        <div className="grid gap-4">
          <ContinueWithGoogle />
          <ContinueWithGithub />

          {/*Navigate to register page  */}
          <p className="font-heading text-center">
            Don&apos;t have an account ?{" "}
            <Link
              href={"/register"}
              className="font-paragraph text-blue-600 dark:text-blue-500">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
