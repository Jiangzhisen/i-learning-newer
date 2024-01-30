"use server";

import prisma from "@/lib/prismadb";

export const getCourse = async (filterOptions?: {
  uuid?: string;
  title?: string;
  code?: string;
  department?: string;
}) => {
  try {
    const courses = await prisma.course.findMany({
      where: {
        ...filterOptions,
      },
    });
    return courses;
  } catch (error) {
    return error;
  }
};
