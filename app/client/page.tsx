"use client";

import { useSession } from "next-auth/react";

export default function Page() {
  console.log("Client Side Rendering");
  const { data: session } = useSession(); // useSession()
  console.log(session); // console.log

  return (
    <div>
      <h1>Client Side Rendeing Page</h1>
      <h2>Unavailable without auth</h2>
    </div>
  );
}
