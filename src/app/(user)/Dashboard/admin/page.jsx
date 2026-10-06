"use client";

import Link from "next/link";

import {
  ArrowRight,
  ChartColumn,
  CircleCheck,
  CreditCard,
  House,
  ShoppingBag,
  Bell,
} from "@gravity-ui/icons";
import { History, Users } from "lucide-react";

const recentUsers = [
  {
    name: "Ashutosh Tanchangya",
    initials: "AT",
    email: "ashutosh@example.com",
    mess: "Green View Mess",
    status: "Active",
  },
  {
    name: "Rahim Ahmed",
    initials: "RA",
    email: "rahim@example.com",
    mess: "Green View Mess",
    status: "Active",
  },
  {
    name: "Sakib Hasan",
    initials: "SH",
    email: "sakib@example.com",
    mess: "Sunrise Mess",
    status: "Active",
  },
  {
    name: "Nusrat Jahan",
    initials: "NJ",
    email: "nusrat@example.com",
    mess: "Green View Mess",
    status: "Pending",
  },
];

const recentPayments = [
  {
    user: "Rahim Ahmed",
    initials: "RA",
    amount: "৳ 2,500",
    type: "Monthly Payment",
    status: "Completed",
    date: "Sep 30, 2026",
  },
  {
    user: "Ashutosh Tanchangya",
    initials: "AT",
    amount: "৳ 3,000",
    type: "Monthly Payment",
    status: "Completed",
    date: "Sep 29, 2026",
  },
  {
    user: "Sakib Hasan",
    initials: "SH",
    amount: "৳ 2,800",
    type: "Monthly Payment",
    status: "Pending",
    date: "Sep 29, 2026",
  },
];

const recentHistory = [
  {
    title: "New user registered",
    description: "Nusrat Jahan created an account",
    time: "10 min ago",
    icon: Users,
  },
  {
    title: "Payment received",
    description: "Rahim Ahmed paid ৳ 2,500",
    time: "42 min ago",
    icon: CreditCard,
  },
  {
    title: "Mess created",
    description: "Sunrise Mess was created",
    time: "1 hour ago",
    icon: ShoppingBag,
  },
  {
    title: "User joined mess",
    description: "Sakib Hasan joined Sunrise Mess",
    time: "2 hours ago",
    icon: House,
  },
];

function StatCard({ icon: Icon, label, value, description, trend }) {
  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5">
      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-green-50 text-green-800">
          <Icon className="size-5" />
        </div>

        {trend && (
          <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-800">
            {trend}
          </span>
        )}
      </div>

      <p className="mt-5 text-sm font-medium text-gray-500">{label}</p>

      <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-950">
        {value}
      </h3>

      <p className="mt-1 text-xs text-gray-400">{description}</p>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-xs font-medium text-gray-400">
              Wednesday, September 30, 2026
            </p>

            <h2 className="text-lg font-bold text-gray-950 sm:text-xl">
              Good morning, Admin 👋
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative flex size-10 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-500 transition hover:bg-green-50 hover:text-green-800"
            >
              <Bell className="size-5" />

              <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            <Link
              href="/Dashboard/admin/profile"
              className="flex size-10 items-center justify-center rounded-full bg-green-800 text-sm font-bold text-white ring-4 ring-green-50"
            >
              AD
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-green-50/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Welcome */}
          <section className="relative overflow-hidden rounded-[2rem] bg-green-900 p-7 text-white shadow-xl shadow-green-900/10 sm:p-9">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-green-50 backdrop-blur-sm">
                Administration Overview
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Keep your mess platform under control.
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-green-100 sm:text-base">
                Manage users, messes and payments while keeping track of
                everything happening across the platform.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/Dashboard/admin/users"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-green-900 transition hover:bg-green-50"
                >
                  Manage Users
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/Dashboard/admin/history"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  View History
                </Link>
              </div>
            </div>

            <div className="absolute -right-20 -top-24 size-72 rounded-full border-[40px] border-white/5" />

            <div className="absolute -bottom-32 right-20 size-72 rounded-full border-[35px] border-white/5" />

            <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 xl:block">
              <div className="flex size-32 items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-md">
                <ChartColumn className="size-16 text-green-200" />
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={Users}
              label="Total Users"
              value="248"
              description="Registered platform users"
              trend="+12 this month"
            />

            <StatCard
              icon={ShoppingBag}
              label="Total Messes"
              value="32"
              description="Active mess communities"
              trend="+3 this month"
            />

            <StatCard
              icon={CreditCard}
              label="Total Payments"
              value="৳ 2.84L"
              description="Payments collected"
              trend="+8.4%"
            />

            <StatCard
              icon={CircleCheck}
              label="Active Users"
              value="216"
              description="Currently active users"
              trend="87%"
            />
          </section>

          {/* Users + Payments */}
          <section className="mt-7 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
            {/* Recent Users */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                    Users
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-950">
                    Recent Users
                  </h3>
                </div>

                <Link
                  href="/Dashboard/admin/users"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-green-800 hover:text-green-950"
                >
                  View all
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[650px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-left">
                      <th className="pb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                        User
                      </th>

                      <th className="pb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                        Mess
                      </th>

                      <th className="pb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                        Status
                      </th>

                      <th className="pb-3 text-right text-xs font-bold uppercase tracking-wider text-gray-400">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentUsers.map((user) => (
                      <tr
                        key={user.email}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                              {user.initials}
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-gray-900">
                                {user.name}
                              </p>

                              <p className="truncate text-xs text-gray-400">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 text-sm text-gray-600">
                          {user.mess}
                        </td>

                        <td className="py-4">
                          <span
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                              user.status === "Active"
                                ? "bg-green-50 text-green-800"
                                : "bg-yellow-50 text-yellow-700"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>

                        <td className="py-4 text-right">
                          <Link
                            href="/Dashboard/admin/users"
                            className="text-xs font-bold text-green-800 hover:text-green-950"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                    Payments
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-950">
                    Payment Overview
                  </h3>
                </div>

                <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                  <CreditCard className="size-5" />
                </div>
              </div>

              <div className="mt-7">
                <p className="text-sm text-gray-500">Collected this month</p>

                <div className="mt-1 flex items-center justify-between">
                  <p className="text-3xl font-bold text-gray-950">৳ 2,84,650</p>

                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-800">
                    +8.4%
                  </span>
                </div>

                <div className="mt-7">
                  <div className="flex justify-between text-xs font-medium text-gray-400">
                    <span>Payment collection</span>
                    <span>82%</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[82%] rounded-full bg-green-800" />
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-green-50 p-4">
                    <p className="text-xs text-gray-500">Completed</p>

                    <p className="mt-1 font-bold text-green-900">৳ 2,42,300</p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs text-gray-400">Pending</p>

                    <p className="mt-1 font-bold text-gray-900">৳ 42,350</p>
                  </div>
                </div>

                <Link
                  href="/Dashboard/admin/payments"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-green-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-900"
                >
                  Manage Payments
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Mess Overview + History */}
          <section className="mt-7 grid gap-6 xl:grid-cols-[1fr_1fr]">
            {/* Mess Overview */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                    Communities
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-950">
                    Mess Overview
                  </h3>
                </div>

                <Link
                  href="/Dashboard/admin/mess"
                  className="text-sm font-semibold text-green-800 hover:text-green-950"
                >
                  Manage
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-xs font-medium text-gray-500">
                    Active Messes
                  </p>

                  <p className="mt-2 text-3xl font-bold text-green-900">27</p>

                  <p className="mt-1 text-xs text-green-700">
                    Currently active
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-xs font-medium text-gray-500">
                    Pending Approval
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">5</p>

                  <p className="mt-1 text-xs text-gray-400">Need attention</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-gray-100 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                      <ShoppingBag className="size-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Total Members
                      </p>

                      <p className="text-xs text-gray-400">Across all messes</p>
                    </div>
                  </div>

                  <p className="text-xl font-bold text-gray-950">248</p>
                </div>
              </div>
            </div>

            {/* History */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                    Activity
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-950">
                    Recent History
                  </h3>
                </div>

                <Link
                  href="/Dashboard/admin/history"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-green-800"
                >
                  View all
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 space-y-5">
                {recentHistory.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={`${item.title}-${item.time}`}
                      className="flex gap-3"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                        <Icon className="size-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-gray-900">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {item.description}
                        </p>

                        <p className="mt-1 text-[10px] font-medium text-gray-400">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mt-7 grid gap-4 pb-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/Dashboard/admin/users"
              className="group flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                <Users />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Manage Users</h4>

                <p className="mt-1 text-xs text-gray-400">
                  View and manage users
                </p>
              </div>

              <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-green-800" />
            </Link>

            <Link
              href="/Dashboard/admin/mess"
              className="group flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                <ShoppingBag />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Manage Mess</h4>

                <p className="mt-1 text-xs text-gray-400">
                  Control mess communities
                </p>
              </div>

              <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-green-800" />
            </Link>

            <Link
              href="/Dashboard/admin/payments"
              className="group flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                <CreditCard />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Payments</h4>

                <p className="mt-1 text-xs text-gray-400">
                  Monitor transactions
                </p>
              </div>

              <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-green-800" />
            </Link>

            <Link
              href="/Dashboard/admin/history"
              className="group flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                <History />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-900">History</h4>

                <p className="mt-1 text-xs text-gray-400">
                  View platform activity
                </p>
              </div>

              <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-green-800" />
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
