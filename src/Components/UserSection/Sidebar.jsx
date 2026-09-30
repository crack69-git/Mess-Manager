"use client";

import Link from "next/link";
import {
  ChartColumn,
  CreditCard,
  Gear,
  House,
  Person,
  Receipt,
  ShoppingBag,
  Calendar,
  Globe,
} from "@gravity-ui/icons";
import { FaSignOutAlt } from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    href: "/Dashboard/user",
    icon: House,
  },
  {
    title: "Discover Mess",
    href: "/Dashboard/user/discover-mess",
    icon: Globe,
  },
  {
    title: "My Meals",
    href: "/dashboard/meals",
    icon: Calendar,
  },
  {
    title: "Expenses",
    href: "/dashboard/expenses",
    icon: Receipt,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: ChartColumn,
  },
];

export default function Sidebar() {
  return (
    <aside className="sticky inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-gray-100 bg-white">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-gray-100 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-green-800 text-white shadow-lg shadow-green-900/10">
            <ShoppingBag className="size-5" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-gray-950">
              Mess Manager
            </h1>

            <p className="text-[11px] font-medium text-gray-400">
              Smart mess management
            </p>
          </div>
        </Link>
      </div>

      {/* User Profile */}
      <div className="px-4 pt-6">
        <div className="rounded-2xl bg-green-50/70 p-3">
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-800 text-sm font-bold text-white">
              AT
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-gray-900">
                Ashutosh Tanchangya
              </p>

              <p className="truncate text-xs text-gray-500">Mess Member</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-7">
        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">
          Main Menu
        </p>

        <div className="space-y-1.5">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = index === 0;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-green-800 text-white shadow-md shadow-green-900/10"
                    : "text-gray-500 hover:bg-green-50 hover:text-green-900"
                }`}
              >
                <span
                  className={`flex size-9 items-center justify-center rounded-xl transition-colors ${
                    active
                      ? "bg-white/10"
                      : "bg-gray-50 group-hover:bg-green-100"
                  }`}
                >
                  <Icon className="size-[18px]" />
                </span>

                {item.title}
              </Link>
            );
          })}
        </div>

        {/* Account */}
        <p className="mb-3 mt-9 px-3 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">
          Account
        </p>

        <div className="space-y-1.5">
          <Link
            href="/dashboard/profile"
            className="group flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-semibold text-gray-500 transition-all hover:bg-green-50 hover:text-green-900"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-gray-50 group-hover:bg-green-100">
              <Person className="size-[18px]" />
            </span>
            My Profile
          </Link>

          <Link
            href="/dashboard/settings"
            className="group flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-semibold text-gray-500 transition-all hover:bg-green-50 hover:text-green-900"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-gray-50 group-hover:bg-green-100">
              <Gear className="size-[18px]" />
            </span>
            Settings
          </Link>
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-gray-100 p-4">
        <button className="flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-semibold text-gray-500 transition-all hover:bg-red-50 hover:text-red-600">
          <span className="flex size-9 items-center justify-center rounded-xl bg-gray-50">
            <FaSignOutAlt className="size-[18px]" />
          </span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
