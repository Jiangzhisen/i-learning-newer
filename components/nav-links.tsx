"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "My Courses", href: "/", target: "_self" },
  { name: "My Assignments", href: "/assignments", target: "_self" },
  { name: "My Tests", href: "/tests", target: "_self" },
  { name: "Message Center", href: "/message-center", target: "_self" },
  { name: "My Profile", href: "/profile", target: "_self" },
  { name: "Calendar", href: "/calendar" },
  { name: "Learning History", href: "/learning-history", target: "_self" },
  { name: "Notebook", href: "/notebook", target: "_self" },
  { name: "News", href: "/news", target: "_self" },
  { name: "School Calendar", href: "/school-calendar", target: "_self" },
  {
    name: "Course Inquiry System",
    href: "https://itouch.cycu.edu.tw/active_system/CourseQuerySystem/",
    target: "_blank",
  },
  {
    name: "Chung Yuan Mailbox",
    href: "https://mail.cycu.edu.tw/indexi2.html",
    target: "_blank",
  },
  {
    name: "Intellectual Property Reference Materials",
    href: "https://lcms.cycu.edu.tw/unit/view/9078",
    target: "_blank",
  },
  {
    name: "Intellectual Property Advocacy",
    href: "https://www.tipo.gov.tw/tw/mp-1.html",
    target: "_blank",
  },
  {
    name: "Holistic Development Site",
    href: "https://terms.naer.edu.tw/download/",
    target: "_blank",
  },
  {
    name: "Library Inquiries",
    href: "https://www.lib.cycu.edu.tw/cycu/Index.action?lang=zh_TW",
    target: "_blank",
  },
  {
    name: "C-learning",
    href: "https://clearningplus.cycu.edu.tw/",
    target: "_blank",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[40px] grow items-center justify-center gap-1 rounded-xl border bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
            target={link.target}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
