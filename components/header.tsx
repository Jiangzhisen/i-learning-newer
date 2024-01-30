import Image from "next/image";

import { Button } from "./ui/button";
import { logOut } from "@/lib/actions";
import { auth } from "@/auth";
import { cn } from "@/lib/utils";

export default async function Header({
  name,
}: {
  name: string | null | undefined;
}) {
  const session = await auth();
  console.log("session: ", session);

  return (
    <div className="flex justify-between w-full h-12 px-6 border-y-2 absolute top-0">
      <Image
        src="/CYCU-logo.jpg"
        sizes="100vw"
        style={{ height: "100%", width: "auto" }}
        width={100}
        height={60}
        alt="CYCU Logo"
      />
      <div className={cn("flex items-center", { hidden: !session })}>
        <p>{name}</p>
        <form action={logOut}>
          <Button>Logout</Button>
        </form>
      </div>
    </div>
  );
}
