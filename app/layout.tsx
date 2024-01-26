import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
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
      <body
        className={cn(
          "flex justify-center items-center w-screen h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        {/* <AuthWrapper> */}
        {/* Wrapping the entire app with AuthWrapper */}
        {children}
        {/* </AuthWrapper> */}
      </body>
    </html>
  );
}
