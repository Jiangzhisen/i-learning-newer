"use client";

import { useFormState, useFormStatus } from "react-dom";
// import { authenticate } from "@/actions/auth";

export default function LoginForm() {
  //   const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={""} className="flex flex-col space-y-8">
      <label htmlFor="email">Email</label>
      <input
        className="border"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        className="border"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button
        className="border rounded-xl h-10 w-2/6 text-white bg-slate-900"
        type="submit"
      >
        Login
      </button>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )} */}
      </div>
    </form>
  );
}
