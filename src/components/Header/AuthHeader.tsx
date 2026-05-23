import Image from "next/image";

const AuthHeader = () => {
  return (
    <header className="block border-b-2 py-2 lg:hidden">
      <Image
        src="/dev-hub-logo.png"
        alt="dev-hub-trends"
        width={100}
        height={100}
        priority
        className="mx-auto h-15 w-auto"
      />
    </header>
  );
};

export default AuthHeader;
