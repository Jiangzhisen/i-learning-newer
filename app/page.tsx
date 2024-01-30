// src/app/page.tsx
import { auth } from "@/auth";
import { columns } from "@/components/columns";
import CourseTable from "@/components/course-table";
import { courses } from "@/lib/definitions";

async function getData() {
  // Fetch data from your API here.
  const url = "http://localhost:3000/api/course";
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

type Course = {
  id: number;
  uuid: string;
  title: string;
  code: string;
  department: string;
  professorId: number;
};

export default async function Home() {
  // console.log("Server Side Rendering");
  const session = await auth(); // calling session
  // console.log(session); // console log to read session

  const data = await getData();

  return (
    <main>
      <CourseTable columns={columns} data={data.data} />
    </main>
  );
}
