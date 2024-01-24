"use server";

import bcrypt from "bcrypt";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import prisma from "@/lib/prismadb";

export const getUser = async (filterOptions: {
  id?: number;
  email?: string;
}) => {
  const user = await prisma.user.findFirst({
    where: {
      ...filterOptions,
    },
  });
  return user;
};

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export const addUser = async (prevState: State, formData: FormData) => {
  // Validate form fields using Zod
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log("Missing Fields. Failed to Create User.");
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: validatedFields.data.email,
    },
  });

  if (exist) {
    console.log("Email already exists.");
    return {
      message: "Email already exists.",
    };
  }

  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        password: hashedPassword,
      },
    });
    console.log("user: ", user);
  } catch (error) {
    console.error("Error: ", error);
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create User.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath('/userlist');
  redirect("/login");
};
