"use client";

import { useFormState, useFormStatus } from "react-dom";
import { addUser } from "@/actions/user";

export default function RegisterForm() {
  const initialState = { message: null, errors: {} };
  // TODO Need to fix.
  const [state, dispatch] = useFormState(addUser, initialState);

  return (
    <form action={dispatch} className="flex flex-col space-y-8">
      <label htmlFor="email">Email</label>
      <input
        className="border"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state.errors?.email &&
          state.errors.email.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <label htmlFor="password">Password</label>
      <input
        className="border"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state.errors?.password &&
          state.errors.password.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <label htmlFor="email">Name</label>
      <input
        className="border"
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <div
        className="flex h-3 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state.errors?.name &&
          state.errors.name.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <button
        className="border rounded-xl h-10 w-2/6 text-white bg-slate-900"
        type="submit"
      >
        Register
      </button>
    </form>
  );
}
