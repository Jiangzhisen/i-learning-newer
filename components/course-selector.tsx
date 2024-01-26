"use client";

import { useRouter } from "next/navigation";

const courses = [
  { name: "My Courses", href: "/" },
  { name: "CCNA", href: "/ccna" },
  { name: "Python", href: "/python" },
  { name: "IOS", href: "/ios" },
  { name: "JAVA", href: "/java" },
  { name: "C#", href: "/csharp" },
  { name: "Android", href: "/android" },
  { name: "JavaScripts", href: "/javascripts" },
  { name: "Power BI", href: "/powerbi" },
];

export default function CourseSelector() {
  const router = useRouter();

  const handleNavigate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectValue = e.target.value;
    const selectCourse = courses.find((course) => course.name === selectValue);
    const url = selectCourse?.href as string;
    router.push(url);
  };

  return (
    <select name="course" id="course" onChange={handleNavigate}>
      {courses.map((course) => {
        return (
          <option key={course.name} value={course.name}>
            {course.name}
          </option>
        );
      })}
    </select>
  );
}
