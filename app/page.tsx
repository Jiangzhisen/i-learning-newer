// src/app/page.tsx
import { auth } from "@/auth";
import { Course, columns } from "@/components/columns";
import CourseTable from "@/components/course-table";
import { courses } from "@/lib/definitions";

async function getData(): Promise<Course[]> {
  // Fetch data from your API here.
  return courses;
}

export default async function Home() {
  console.log("Server Side Rendering");
  const session = await auth(); // calling session
  console.log(session); // console log to read session

  const data = await getData();

  return (
    <main>
      <CourseTable columns={columns} data={data} />
    </main>
  );
}
