"use client";

import {
  Users,
  Utensils,
  Wallet,
  BarChart3,
  Check,
  Plus,
  MoreVertical,
  CalendarDays,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Manage Members",
    highlight: "with Ease",
    description:
      "Keep track of everyone in your mess. Add members, assign roles, and monitor their current status from one simple dashboard.",
    icon: Users,
    points: [
      "Add and remove members",
      "Assign member roles",
      "Track member status",
    ],
    visual: <MembersVisual />,
  },
  {
    title: "Track Meals &",
    highlight: "Daily Schedule",
    description:
      "Plan breakfast, lunch, and dinner with a clear daily schedule so everyone knows what is being served and when.",
    icon: Utensils,
    points: ["Daily meal planning", "Meal history", "Custom meal schedule"],
    visual: <MealsVisual />,
  },
  {
    title: "Monitor Expenses",
    highlight: "in Real Time",
    description:
      "See exactly where your mess money is going with organized expense tracking and simple visual breakdowns.",
    icon: Wallet,
    points: [
      "Category-wise expenses",
      "Monthly expense reports",
      "Clear spending breakdown",
    ],
    visual: <ExpensesVisual />,
  },
  {
    title: "Get Insights with",
    highlight: "Smart Reports",
    description:
      "Understand your mess activity through clean reports and useful insights about meals, members, and expenses.",
    icon: BarChart3,
    points: ["Monthly summaries", "Expense trends", "Member insights"],
    visual: <ReportsVisual />,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="pointer-events-none absolute right-[-180px] top-[45%] h-[450px] w-[450px] rounded-full bg-green-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
            Everything you need
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.035em] text-gray-950 sm:text-5xl">
            Everything You Need for a
            <span className="block text-green-800">Well-Managed Mess</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            From tracking meals to managing expenses, Mess Manager gives you all
            the tools to keep your mess running smoothly — together.
          </p>
        </div>

        {/* Feature rows */}
        <div className="mt-20 space-y-28 lg:space-y-36">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const reversed = index % 2 !== 0;

            return (
              <div
                key={feature.title}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div className="max-w-lg">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                    {feature.title}
                    <span className="block text-green-800">
                      {feature.highlight}
                    </span>
                  </h3>

                  <p className="mt-5 text-base leading-7 text-gray-500">
                    {feature.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {feature.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm font-medium text-gray-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                          <Check size={12} strokeWidth={3} />
                        </span>

                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="relative">
                  {/* Background circle */}
                  <div className="absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-50/80 blur-2xl sm:h-[350px] sm:w-[350px]" />

                  <div
                    className={`transition-transform duration-500 hover:scale-[1.02] ${
                      reversed ? "-rotate-1" : "rotate-1"
                    }`}
                  >
                    {feature.visual}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   01 — MEMBERS VISUAL
========================================================= */

function MembersVisual() {
  const members = [
    ["Ashutosh Tanchangya", "Admin"],
    ["Rahim Uddin", "Member"],
    ["Sajib Ahmed", "Member"],
    ["Fahim Hasan", "Member"],
  ];

  return (
    <div className="rounded-3xl border border-gray-200/80 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:p-5">
      <div className="rounded-2xl bg-gray-50 p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-gray-900 sm:text-base">
              Members
            </h4>

            <p className="mt-1 text-xs text-gray-400">8 members in your mess</p>
          </div>

          <button className="flex items-center gap-1.5 rounded-lg bg-green-900 px-3 py-2 text-xs font-semibold text-white">
            <Plus size={13} />
            Add Member
          </button>
        </div>

        {/* Table */}
        <div className="mt-5 overflow-hidden rounded-xl border border-gray-100 bg-white">
          <div className="grid grid-cols-[1.6fr_0.8fr_0.7fr_auto] border-b border-gray-100 px-3 py-3 text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:px-4">
            <span>Name</span>
            <span>Role</span>
            <span>Status</span>
            <span />
          </div>

          {members.map(([name, role], index) => (
            <div
              key={name}
              className="grid grid-cols-[1.6fr_0.8fr_0.7fr_auto] items-center border-b border-gray-50 px-3 py-3 last:border-0 sm:px-4"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                  {name.charAt(0)}
                </div>

                <span className="truncate text-xs font-medium text-gray-700">
                  {name}
                </span>
              </div>

              <span className="text-[10px] text-gray-400">{role}</span>

              <span className="w-fit rounded-full bg-green-50 px-2 py-1 text-[9px] font-semibold text-green-700">
                Active
              </span>

              <MoreVertical size={14} className="text-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   02 — MEALS VISUAL
========================================================= */

function MealsVisual() {
  return (
    <div className="rounded-3xl border border-gray-200/80 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:p-5">
      <div className="rounded-2xl bg-gray-50 p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
              <CalendarDays size={19} />
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 sm:text-base">
                Meal Schedule
              </h4>

              <p className="mt-1 text-xs text-gray-400">Wednesday, April 24</p>
            </div>
          </div>

          <span className="hidden rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500 sm:block">
            This Week
          </span>
        </div>

        {/* Date selector */}
        <div className="mt-5 grid grid-cols-7 gap-1.5">
          {[
            ["Mon", "22"],
            ["Tue", "23"],
            ["Wed", "24"],
            ["Thu", "25"],
            ["Fri", "26"],
            ["Sat", "27"],
            ["Sun", "28"],
          ].map(([day, date], index) => (
            <div
              key={day}
              className={`rounded-xl py-2.5 text-center ${
                index === 2
                  ? "bg-green-900 text-white shadow-md"
                  : "bg-white text-gray-500"
              }`}
            >
              <p className="text-[9px]">{day}</p>
              <p className="mt-1 text-xs font-bold">{date}</p>
            </div>
          ))}
        </div>

        {/* Meal list */}
        <div className="mt-5 space-y-2.5">
          <MealItem
            emoji="☕"
            title="Breakfast"
            food="Bread + Egg + Tea"
            time="8:00 AM"
            bg="bg-orange-50"
          />

          <MealItem
            emoji="🍛"
            title="Lunch"
            food="Rice + Dal + Chicken"
            time="1:00 PM"
            bg="bg-green-50"
          />

          <MealItem
            emoji="🥘"
            title="Dinner"
            food="Roti + Sabzi"
            time="8:00 PM"
            bg="bg-blue-50"
          />
        </div>
      </div>
    </div>
  );
}

function MealItem({ emoji, title, food, time, bg }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg} text-lg`}
      >
        {emoji}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-gray-800">{title}</p>

        <p className="mt-0.5 truncate text-[10px] text-gray-400">{food}</p>
      </div>

      <span className="text-[10px] font-medium text-gray-500">{time}</span>
    </div>
  );
}

/* =========================================================
   03 — EXPENSE VISUAL
========================================================= */

function ExpensesVisual() {
  return (
    <div className="rounded-3xl border border-gray-200/80 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:p-5">
      <div className="rounded-2xl bg-gray-50 p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-sm font-bold text-gray-900 sm:text-base">
              Expense Overview
            </h4>

            <p className="mt-1 text-xs text-gray-400">April 2025</p>
          </div>

          <button className="rounded-lg bg-white px-3 py-2 text-[10px] font-medium text-gray-500 shadow-sm">
            Monthly
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* Donut */}
          <div className="flex justify-center sm:flex-1">
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#176b4d_0deg_245deg,#e4bd38_245deg_306deg,#e36c6c_306deg_342deg,#8458d6_342deg_360deg)]">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gray-50">
                <span className="text-xl font-bold text-gray-900">৳2,450</span>

                <span className="mt-1 text-[10px] text-gray-400">
                  Total Expense
                </span>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="flex-1 space-y-4">
            <ExpenseRow
              color="bg-green-700"
              title="Food"
              amount="৳1,680"
              percent="68%"
            />

            <ExpenseRow
              color="bg-yellow-500"
              title="Utilities"
              amount="৳420"
              percent="17%"
            />

            <ExpenseRow
              color="bg-red-400"
              title="Household"
              amount="৳250"
              percent="10%"
            />

            <ExpenseRow
              color="bg-purple-500"
              title="Others"
              amount="৳100"
              percent="5%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpenseRow({ color, title, amount, percent }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />

      <span className="flex-1 text-xs text-gray-600">{title}</span>

      <span className="text-xs font-semibold text-gray-700">{amount}</span>

      <span className="w-8 text-right text-[10px] text-gray-400">
        {percent}
      </span>
    </div>
  );
}

/* =========================================================
   04 — REPORTS VISUAL
========================================================= */

function ReportsVisual() {
  return (
    <div className="rounded-3xl border border-gray-200/80 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:p-5">
      <div className="rounded-2xl bg-gray-50 p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-gray-900 sm:text-base">
              Monthly Overview
            </h4>

            <p className="mt-1 text-xs text-gray-400">Your mess at a glance</p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-800">
            <TrendingUp size={17} />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <ReportStat value="8" label="Members" />

          <ReportStat value="5" label="Today's Meals" />

          <ReportStat value="৳2,450" label="Expenses" />

          <ReportStat value="৳1,230" label="Avg. Member" />
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-800">Expense Trend</p>

            <span className="flex items-center gap-1 text-[10px] font-medium text-green-700">
              +12.5%
              <ArrowUpRight size={12} />
            </span>
          </div>

          <div className="relative mt-6 h-32">
            {/* Grid */}
            <div className="absolute inset-0 flex flex-col justify-between">
              <span className="border-t border-dashed border-gray-100" />
              <span className="border-t border-dashed border-gray-100" />
              <span className="border-t border-dashed border-gray-100" />
              <span className="border-t border-dashed border-gray-100" />
            </div>

            {/* Fake chart */}
            <svg
              viewBox="0 0 500 120"
              className="absolute inset-0 h-full w-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#166534" stopOpacity="0.16" />

                  <stop offset="100%" stopColor="#166534" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M0 90 L70 90 L140 70 L210 80 L280 45 L350 65 L420 35 L500 20 L500 120 L0 120 Z"
                fill="url(#areaGradient)"
              />

              <path
                d="M0 90 L70 90 L140 70 L210 80 L280 45 L350 65 L420 35 L500 20"
                fill="none"
                stroke="#166534"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {[
                [0, 90],
                [70, 90],
                [140, 70],
                [210, 80],
                [280, 45],
                [350, 65],
                [420, 35],
                [500, 20],
              ].map(([x, y], index) => (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="white"
                  stroke="#166534"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          <div className="mt-2 flex justify-between text-[9px] text-gray-400">
            <span>Apr 1</span>
            <span>Apr 7</span>
            <span>Apr 14</span>
            <span>Apr 21</span>
            <span>Apr 28</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportStat({ value, label }) {
  return (
    <div className="rounded-xl bg-white p-3">
      <p className="text-sm font-bold text-gray-900">{value}</p>

      <p className="mt-1 text-[9px] text-gray-400">{label}</p>
    </div>
  );
}
