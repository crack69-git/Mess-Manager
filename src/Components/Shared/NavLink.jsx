"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  console.log("active", isActive, href, window.location.pathname);
  return (
    <div>
      <Link
        href={href}
        className={`group flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 ${
          isActive
            ? "bg-green-800 text-white shadow-md shadow-green-900/10"
            : "text-gray-500 hover:bg-green-50 hover:text-green-900"
        }`}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
