import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import SideNav from "@/components/sidenav";
import AuthWrapper from "@/auth_wrapper";
import Header from "@/components/header";
import { auth } from "@/auth";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "i Learning Newer",
  description: "This is a learning website.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth(); // calling session
  console.log(session); // console log to read session

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <AuthWrapper> */}
        {/* Wrapping the entire app with AuthWrapper */}
        {/* {children} */}
        {/* </AuthWrapper> */}
        <div className="flex h-screen flex-col md:flex-row md:overflow-auto">
          <div className={cn({ hidden: !session }, "w-full flex-none md:w-64")}>
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12 md:flex md:flex-col items-center relative">
            <Header name={session?.user?.name} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
