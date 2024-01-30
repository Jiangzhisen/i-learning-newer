"use client";

import { useFormState } from "react-dom";

import { authenticate } from "@/lib/actions";

export default function LoginForm() {
  const [errorMsg, dispatch] = useFormState(authenticate, undefined);
  return (
    <form className="flex flex-col space-y-5" action={dispatch}>
      <label htmlFor="email">Email</label>
      <input
        className="border rounded-lg"
        name="email"
        type="email"
        placeholder="Your Email"
        required
      ></input>
      <label htmlFor="password">Password</label>
      <input
        className="border rounded-md"
        name="password"
        type="password"
        placeholder="Your password"
        required
      ></input>
      <button className="border rounded-xl">Log In</button>
      <p>{errorMsg}</p>
    </form>
  );
}
