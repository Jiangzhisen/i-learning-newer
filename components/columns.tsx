"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Course = {
  id: string;
  title: string;
  code: string;
  department: string;
  begin: string;
  end: string;
  assg: number;
  tests: number;
  qnr: number;
  level: string;
};

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: "Course Title",
  },
  {
    accessorKey: "code",
    header: "Course code",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "begin",
    header: "Course Begin",
  },
  {
    accessorKey: "end",
    header: "Course End",
  },
  {
    accessorKey: "assg",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Undone ASSG.
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "tests",
    header: "Undone Tests",
  },
  {
    accessorKey: "qnr",
    header: "Undone QNR.",
  },
  {
    accessorKey: "level",
    header: "Access Level",
  },
];
