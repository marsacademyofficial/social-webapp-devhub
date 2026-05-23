import ContinueWithGithub from "@/components/Buttons/ContinueWithGithub";
import ContinueWithGoogle from "@/components/Buttons/ContinueWithGoogle";
import LoginForm from "@/components/Forms/LoginForm";
import { Separator } from "@/components/shadcnui/separator";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="grid h-auto md:h-dvh lg:grid-cols-5">
      <div className="col-span-3 hidden items-center justify-center border-r-2 px-8 lg:flex">
        <div className="grid grid-cols-2">
          <div className="mt-14 grid gap-26">
            <Image
              src="/dev-hub-logo.png"
              alt="dev-hub-trends"
              width={100}
              height={100}
              priority
              className="h-20 w-auto"
            />

            <h2 className="text-5xl">
              Connect with <br />
              <span className="text-blue-600 dark:text-blue-400">
                Developers
              </span>{" "}
              <br />
              Share what matters.
            </h2>
          </div>

          <Image
            src="/login_page_img.png"
            alt="dev-hub-trends"
            width={1200}
            height={1200}
            priority
            className="h-175 w-auto object-contain"
          />
        </div>
      </div>

      <div className="col-span-2 flex h-[90dvh] flex-col justify-center gap-4 px-6 md:px-16 lg:h-dvh">
        <h1 className="text-2xl font-bold">Login to Devhub</h1>
        <LoginForm />

        <div className="grid grid-cols-3 place-items-center">
          <Separator />
          Or
          <Separator />
        </div>

        <div className="grid gap-4">
          <ContinueWithGoogle />
          <ContinueWithGithub />
          <p className="text-center">
            Don&apos;t have an account ?{" "}
            <Link
              href={"/register"}
              className="text-blue-400">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
