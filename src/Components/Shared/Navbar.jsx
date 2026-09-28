import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl">
            <Image
              src="/logo1.png"
              alt="Mess Manager"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold tracking-tight text-gray-900">
              Mess Manager
            </h1>
            <p className="text-[10px] font-medium tracking-wide text-gray-500">
              SIMPLE • SMART • ORGANIZED
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900"
          >
            Home
          </Link>

          <Link
            href="/members"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900"
          >
            Members
          </Link>

          <Link
            href="/meals"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900"
          >
            Meals
          </Link>

          <Link
            href="/expenses"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900"
          >
            Expenses
          </Link>

          <Link
            href="/about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900"
          >
            About
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-gray-700 transition hover:text-green-900 sm:block"
          >
            Login
          </Link>

          <Button
            href="/dashboard"
            radius="lg"
            className="bg-green-900 px-5 font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md"
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
