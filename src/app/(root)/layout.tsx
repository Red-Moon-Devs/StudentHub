import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import  Topsidebar  from "@/components/shared/Topbar";
import  Leftsidebar  from "@/components/shared/Leftsidebar";
import { Rightsidebar } from "@/components/shared/Rightsidebar";
import Bottomsidebar from "@/components/shared/Bottombar";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "StudentsHub",
  description: "A Next.js Students Social Network Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topsidebar />
          <main className="flex flex-row">
            <Leftsidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>
            <Rightsidebar />
          </main>
          <Bottomsidebar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
