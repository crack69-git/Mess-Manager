import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mess Buddy - Home",
  description: "Simplifying Mess Management for a Seamless Experience",
  icons: {
    icon: "/LOGO.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
