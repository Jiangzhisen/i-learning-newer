// src/app/page.tsx
import { auth, signOut } from "@/auth";
import { logOut } from "@/lib/actions";

export default async function Home() {
  console.log("Server Side Rendering");
  const session = await auth(); // calling session
  console.log(session); // console log to read session

  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
}
