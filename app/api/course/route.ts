import { type NextRequest } from "next/server";

import { getCourse } from "@/actions/course";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  if (searchParams.has("code") || searchParams.has("title")) {
    const code = searchParams.get("code");
    console.log("code: ", code);
    return Response.json({ message: "has parameter" });
  } else {
    const courses = await getCourse();
    return Response.json({
      data: courses,
    });
  }
}

// try {
//   const coursesData = [
//     {
//       uuid: "3daa9b29-4337-1f23-19a7-b2674d34273f",
//       title: "Life and Character Exemplars(distance)",
//       code: "GE275A",
//       department: "延伸選修通識",
//       professorId: 1,
//     },
//     {
//       uuid: "7d4c7d1f-e56a-8811-b87f-8baadd1ccaeb",
//       title: "Business Ethics(distance)",
//       code: "GE517F",
//       department: "延伸選修通識",
//       professorId: 1,
//     },
//     {
//       uuid: "b550fd20-7dba-e803-2a86-cee8cfc978f0",
//       title: "CCNA Enterprise Network",
//       code: "MI410L",
//       department: "資管四甲",
//       professorId: 1,
//     },
//     {
//       uuid: "09962bb2-4a46-d631-af15-c8a91e4a0ff3",
//       title:
//         "Learning Power BI for Data Visualization and Analysis(distance)",
//       code: "CO003L",
//       department: "校際選課(大學部)",
//       professorId: 1,
//     },
//     {
//       uuid: "09759530-917a-937b-3a57-9247ee087859",
//       title: "Management Information Systems 2",
//       code: "MI652L",
//       department: "資管四甲",
//       professorId: 1,
//     },
//   ];

//   const newCourses = await prisma.course.createMany({
//     data: coursesData,
//   });

//   console.log("New courses created:", newCourses);
// } catch (error) {
//   console.error("Error creating courses:", error);
// }
