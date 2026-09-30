"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ChartColumn,
  CircleCheck,
  CreditCard,
  Receipt,
} from "@gravity-ui/icons";

const meals = [
  {
    name: "Breakfast",
    menu: "Paratha, Egg & Vegetables",
    status: "Served",
  },
  {
    name: "Lunch",
    menu: "Rice, Chicken & Dal",
    status: "Upcoming",
  },
  {
    name: "Dinner",
    menu: "Rice, Fish & Vegetables",
    status: "Upcoming",
  },
];

const expenses = [
  {
    title: "Monthly Grocery",
    category: "Groceries",
    date: "Sep 28, 2026",
    amount: "৳ 4,850",
  },
  {
    title: "Rice & Lentils",
    category: "Food",
    date: "Sep 25, 2026",
    amount: "৳ 2,400",
  },
  {
    title: "Gas Bill",
    category: "Utilities",
    date: "Sep 22, 2026",
    amount: "৳ 1,250",
  },
  {
    title: "Vegetables",
    category: "Groceries",
    date: "Sep 20, 2026",
    amount: "৳ 1,850",
  },
];

function StatCard({ icon: Icon, label, value, description }) {
  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5">
      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-green-50 text-green-800">
          <Icon className="size-5" />
        </div>

        <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-800">
          +12%
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-gray-500">{label}</p>

      <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-950">
        {value}
      </h3>

      <p className="mt-1 text-xs text-gray-400">{description}</p>
    </div>
  );
}

export default function MainDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 md:ml-34 w-11/12 mx-auto">
      {/* Topbar */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-xs font-medium text-gray-400">
              Wednesday, September 30, 2026
            </p>

            <h2 className="text-lg font-bold text-gray-950 sm:text-xl">
              Good morning, Ashu 👋
            </h2>
          </div>

          <Link
            href="/dashboard/profile"
            className="flex size-10 items-center justify-center rounded-full bg-green-800 text-sm font-bold text-white ring-4 ring-green-50"
          >
            AT
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-green-50/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Welcome Banner */}
          <section className="relative overflow-hidden rounded-[2rem] bg-green-900 p-7 text-white shadow-xl shadow-green-900/10 sm:p-9">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-green-50 backdrop-blur-sm">
                Your Mess Overview
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything is under control.
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-green-100 sm:text-base">
                Keep track of your meals, expenses, payments and everyday mess
                activities from one simple dashboard.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/dashboard/meals"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-green-900 transition hover:bg-green-50"
                >
                  View My Meals
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/dashboard/expenses"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  Add Expense
                </Link>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -right-20 -top-24 size-72 rounded-full border-[40px] border-white/5" />

            <div className="absolute -bottom-32 right-20 size-72 rounded-full border-[35px] border-white/5" />

            <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 xl:block">
              <div className="flex size-32 items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-md">
                <CircleCheck className="size-16 text-green-200" />
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={Calendar}
              label="Total Meals"
              value="48"
              description="Meals this month"
            />

            <StatCard
              icon={Receipt}
              label="Total Expense"
              value="৳ 12,450"
              description="Spent this month"
            />

            <StatCard
              icon={CreditCard}
              label="My Balance"
              value="৳ 2,850"
              description="Current payable balance"
            />

            <StatCard
              icon={CircleCheck}
              label="Attendance"
              value="92%"
              description="Meal attendance"
            />
          </section>

          {/* Meals + Expense Summary */}
          <section className="mt-7 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
            {/* Today's Meals */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                    Today's Meals
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-950">
                    Meal Schedule
                  </h3>
                </div>

                <Link
                  href="/dashboard/meals"
                  className="text-sm font-semibold text-green-800 hover:text-green-950"
                >
                  View all
                </Link>
              </div>

              <div className="mt-6 space-y-3">
                {meals.map((meal) => (
                  <div
                    key={meal.name}
                    className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-green-100 hover:bg-green-50/30"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                      <Calendar className="size-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-gray-900">
                        {meal.name}
                      </p>

                      <p className="mt-1 truncate text-xs text-gray-500">
                        {meal.menu}
                      </p>
                    </div>

                    <span
                      className={`hidden rounded-full px-3 py-1.5 text-xs font-semibold sm:block ${
                        meal.status === "Served"
                          ? "bg-green-50 text-green-800"
                          : "bg-gray-50 text-gray-500"
                      }`}
                    >
                      {meal.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Summary */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                    Monthly Overview
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-950">
                    Expense Summary
                  </h3>
                </div>

                <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                  <ChartColumn className="size-5" />
                </div>
              </div>

              <div className="mt-7">
                <p className="text-sm text-gray-500">Total spending</p>

                <div className="mt-1 flex items-center justify-between">
                  <p className="text-3xl font-bold text-gray-950">৳ 12,450</p>

                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-800">
                    +8.4%
                  </span>
                </div>

                <div className="mt-7">
                  <div className="flex justify-between text-xs font-medium text-gray-400">
                    <span>Budget used</span>
                    <span>68%</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[68%] rounded-full bg-green-800" />
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs text-gray-400">Food</p>

                    <p className="mt-1 font-bold text-gray-900">৳ 8,200</p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs text-gray-400">Utilities</p>

                    <p className="mt-1 font-bold text-gray-900">৳ 4,250</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Expenses */}
          <section className="mt-7 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                  Recent Activity
                </p>

                <h3 className="mt-1 text-xl font-bold text-gray-950">
                  Recent Expenses
                </h3>
              </div>

              <Link
                href="/dashboard/expenses"
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
                      Expense
                    </th>

                    <th className="pb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Category
                    </th>

                    <th className="pb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Date
                    </th>

                    <th className="pb-3 text-right text-xs font-bold uppercase tracking-wider text-gray-400">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {expenses.map((expense) => (
                    <tr
                      key={expense.title}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                            <Receipt className="size-4" />
                          </div>

                          <span className="text-sm font-semibold text-gray-900">
                            {expense.title}
                          </span>
                        </div>
                      </td>

                      <td className="py-4">
                        <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
                          {expense.category}
                        </span>
                      </td>

                      <td className="py-4 text-sm text-gray-500">
                        {expense.date}
                      </td>

                      <td className="py-4 text-right text-sm font-bold text-gray-900">
                        {expense.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mt-7 grid gap-4 pb-8 sm:grid-cols-3">
            <Link
              href="/dashboard/meals"
              className="group flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                <Calendar />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Manage Meals</h4>

                <p className="mt-1 text-xs text-gray-400">
                  Check your meal schedule
                </p>
              </div>

              <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-green-800" />
            </Link>

            <Link
              href="/dashboard/expenses"
              className="group flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                <Receipt />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Add Expense</h4>

                <p className="mt-1 text-xs text-gray-400">
                  Record a new expense
                </p>
              </div>

              <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-green-800" />
            </Link>

            <Link
              href="/dashboard/payments"
              className="group flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                <CreditCard />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Make Payment</h4>

                <p className="mt-1 text-xs text-gray-400">
                  Pay your current balance
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
