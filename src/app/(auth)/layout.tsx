import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "StudentsHub",
  description: "A Next.js Students Social Network Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-dark-1 flex justify-center mt-10`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
