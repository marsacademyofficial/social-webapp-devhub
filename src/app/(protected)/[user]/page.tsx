import ToastButton from "@/components/Buttons/ToastButton";

type UserPageProps = {
  params: Promise<{ user: string }>;
};

const page = async ({ params }: UserPageProps) => {
  const { user } = await params;
  return (
    <div className="grid h-dvh place-items-center">
      <ToastButton name={user} />
    </div>
  );
};

export default page;
