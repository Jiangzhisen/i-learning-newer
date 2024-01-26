// src/app/login/page.tsx
"use client";

import { useFormState } from "react-dom";
import Link from "next/link";

import { authenticate } from "@/lib/actions";

export default function Page() {
  // authenticate() method will be declared later
  const [errorMsg, dispatch] = useFormState(authenticate, undefined);
  return (
    <div>
      <h1>Log in Page</h1>
      <form className="flex flex-col space-y-5" action={dispatch}>
        <label htmlFor="email">Email</label>
        <input
          className="border rounded-lg"
          name="email"
          type="email"
          placeholder="Your Email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="border rounded-md"
          name="password"
          type="password"
          placeholder="Your password"
        ></input>
        <button className="border rounded-xl">Log In</button>
        <p>{errorMsg}</p>
      </form>
    </div>
  );
}
