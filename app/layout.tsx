import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import SideNav from "@/components/sidenav";
import { cn } from "@/lib/utils";
import AuthWrapper from "@/auth_wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "i Learning Newer",
  description: "This is a learning website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <AuthWrapper> */}
        {/* Wrapping the entire app with AuthWrapper */}
        {/* {children} */}
        {/* </AuthWrapper> */}
        <div className="flex h-screen flex-col md:flex-row md:overflow-auto">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
