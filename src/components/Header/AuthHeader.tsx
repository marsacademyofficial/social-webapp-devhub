"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AuthHeader = () => {
  const path = usePathname();

  if (path === "/") {
    return (
      <header className="block border-b-2 py-2 lg:hidden">
        <Image
          src="/dev-hub-logo.png"
          alt="dev-hub-trends"
          width={256}
          height={303}
          priority
          className="mx-auto h-15 w-auto"
        />
      </header>
    );
  } else {
    return null;
  }
};

export default AuthHeader;
