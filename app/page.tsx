// src/app/page.tsx
import { auth, signOut } from "@/auth";

export default async function Home() {
  console.log("Server Side Rendering");
  const session = await auth(); // calling session
  console.log(session); // console log to read session

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Unavailable without auth</h2>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Log Out</button>
      </form>
    </div>
  );
}
