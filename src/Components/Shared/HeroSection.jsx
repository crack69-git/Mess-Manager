"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import {
  ArrowRight,
  Play,
  Utensils,
  Users,
  CalendarDays,
  Wallet,
  Home,
  Settings,
  MoreVertical,
  CheckCircle2,
  Coffee,
  Sun,
  Moon,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { BiPlayCircle } from "react-icons/bi";
import StatsSection from "./StatSection";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-272px)] overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
      {/* Background blobs */}
      <div className="pointer-events-none absolute left-[-180px] top-32 h-[430px] w-[430px] rounded-full bg-green-50 blur-3xl" />
      <div className="pointer-events-none absolute right-[-180px] top-40 h-[500px] w-[500px] rounded-full bg-green-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gray-50 blur-3xl" />

      {/* Decorative dots */}
      <div className="absolute left-[32%] top-40 hidden text-green-800 lg:block">
        <span className="text-2xl">✦</span>
      </div>

      <div className="absolute right-[30%] top-52 hidden text-green-800 lg:block">
        <span className="text-3xl">✦</span>
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* ================= LEFT DASHBOARD CARD ================= */}
        <div className="absolute left-0 top-20 hidden w-[330px] -rotate-6 xl:block 2xl:w-[370px]">
          <DashboardCard />
        </div>

        {/* ================= RIGHT MEAL CARD ================= */}
        <div className="absolute right-0 top-24 hidden w-[340px] rotate-6 xl:block 2xl:w-[380px]">
          <MealCard />
        </div>

        {/* ================= LEFT MEMBERS CARD ================= */}
        <div className="absolute bottom-[-40px] left-6 hidden w-[350px] rotate-3 xl:block 2xl:w-[390px]">
          <MembersCard />
        </div>

        {/* ================= RIGHT EXPENSE CARD ================= */}
        <div className="absolute bottom-[-30px] right-4 hidden w-[350px] -rotate-3 xl:block 2xl:w-[390px]">
          <ExpenseCard />
        </div>

        {/* ================= CENTER CONTENT ================= */}
        <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900 shadow-sm">
            <Utensils size={16} />
            <span>Smart Mess Management</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-gray-950 sm:text-6xl lg:text-7xl">
            Manage Your Mess{" "}
            <span className="block text-green-800">Effortlessly</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Keep track of members, meals, expenses and more — all in one place.
            Mess Manager makes group living simpler, fairer and more organized.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              as={Link}
              href="/dashboard"
              size="lg"
              radius="lg"
              className="h-14 bg-green-900 px-7 text-base font-semibold text-white shadow-lg shadow-green-900/15 transition-all hover:-translate-y-0.5 hover:bg-green-800"
              endContent={<ArrowRight size={18} />}
            >
              Get Started Free
            </Button>

            <Button
              as={Link}
              href="/demo"
              size="lg"
              radius="lg"
              variant="bordered"
              className="h-14 border-gray-200 bg-white px-7 text-base font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-900"
            >
              <BiPlayCircle size={18} />
              Watch Demo
            </Button>
          </div>

          {/* Trust text */}
          <div className="mt-7 flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle2 size={16} className="text-green-700" />
            No credit card required
          </div>
          <div></div>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="relative z-10 mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:hidden">
          <div className="rotate-[-2deg]">
            <DashboardCard />
          </div>

          <div className="rotate-[2deg]">
            <MealCard />
          </div>

          <div className="rotate-[1deg]">
            <MembersCard />
          </div>

          <div className="rotate-[-1deg]">
            <ExpenseCard />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   DASHBOARD CARD
============================================================ */

const DashboardCard = () => {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
      <div className="rounded-xl bg-gray-50 p-3">
        <div className="flex gap-3">
          {/* Sidebar */}
          <div className="hidden w-[75px] shrink-0 rounded-lg bg-white p-2 sm:block">
            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-900 text-white">
                <Utensils size={14} />
              </div>
            </div>

            <div className="space-y-2">
              <SidebarItem icon={<Home size={12} />} active />
              <SidebarItem icon={<Users size={12} />} />
              <SidebarItem icon={<Utensils size={12} />} />
              <SidebarItem icon={<Wallet size={12} />} />
              <SidebarItem icon={<Settings size={12} />} />
            </div>
          </div>

          {/* Main */}
          <div className="min-w-0 flex-1">
            <div className="mb-4">
              <p className="text-[9px] text-gray-400">Mess Manager</p>
              <h3 className="mt-1 text-sm font-bold text-gray-900">
                Welcome back, Admin 👋
              </h3>
              <p className="mt-1 text-[8px] text-gray-400">
                Here&apos;s what&apos;s happening in your mess today.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              <MiniStat value="8" label="Total Members" />
              <MiniStat value="5" label="Today's Meals" />
              <MiniStat value="৳2,450" label="Expenses" />
            </div>

            {/* Recent meals */}
            <div className="mt-3 rounded-lg bg-white p-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-semibold text-gray-800">
                  Recent Meals
                </p>

                <span className="rounded-full bg-green-50 px-2 py-0.5 text-[7px] font-medium text-green-800">
                  Today
                </span>
              </div>

              <MealRow
                title="Rice + Dal + Chicken"
                time="Today, 1:00 PM"
                icon="🍛"
              />

              <MealRow title="Roti + Sabzi" time="Today, 8:00 PM" icon="🥘" />

              <MealRow title="Khichuri + Egg" time="Yesterday" icon="🍚" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   MEAL CARD
============================================================ */

const MealCard = () => {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <CalendarDays size={17} className="text-green-800" />

              <h3 className="text-sm font-bold text-gray-900">Meal Schedule</h3>
            </div>

            <p className="mt-1 text-[9px] text-gray-400">
              Daily meal plan for the mess
            </p>
          </div>

          <MoreVertical size={15} className="text-gray-400" />
        </div>

        {/* Dates */}
        <div className="mt-5 grid grid-cols-7 gap-1">
          {["22", "23", "24", "25", "26", "27", "28"].map((day, index) => (
            <div
              key={day}
              className={`rounded-lg py-2 text-center ${
                index === 2
                  ? "bg-green-900 text-white"
                  : "bg-white text-gray-500"
              }`}
            >
              <p className="text-[7px]">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
              </p>

              <p className="mt-1 text-[10px] font-bold">{day}</p>
            </div>
          ))}
        </div>

        {/* Meals */}
        <div className="mt-4 space-y-2">
          <ScheduleRow
            icon={<Coffee size={15} />}
            title="Breakfast"
            description="Bread + Egg + Tea"
            time="8:00 AM"
            iconClass="bg-orange-50 text-orange-500"
          />

          <ScheduleRow
            icon={<Sun size={15} />}
            title="Lunch"
            description="Rice + Dal + Chicken"
            time="1:00 PM"
            iconClass="bg-green-50 text-green-700"
          />

          <ScheduleRow
            icon={<Moon size={15} />}
            title="Dinner"
            description="Roti + Sabzi"
            time="8:00 PM"
            iconClass="bg-blue-50 text-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   MEMBERS CARD
============================================================ */

const MembersCard = () => {
  const members = [
    "Ashutosh Tanchangya",
    "Rahim Uddin",
    "Sajib Ahmed",
    "Fahim Hasan",
  ];

  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Members</h3>

            <p className="mt-1 text-[9px] text-gray-400">
              Manage all mess members
            </p>
          </div>

          <button className="rounded-lg bg-green-900 px-3 py-1.5 text-[8px] font-semibold text-white">
            + Add Member
          </button>
        </div>

        <div className="mt-4 overflow-hidden rounded-lg bg-white">
          {/* Header */}
          <div className="grid grid-cols-[1.6fr_0.8fr_0.7fr] border-b border-gray-100 px-3 py-2 text-[8px] font-semibold text-gray-400">
            <span>Name</span>
            <span>Role</span>
            <span>Status</span>
          </div>

          {members.map((member, index) => (
            <div
              key={member}
              className="grid grid-cols-[1.6fr_0.8fr_0.7fr] items-center border-b border-gray-50 px-3 py-2 last:border-0"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-[8px] font-bold text-green-800">
                  {member.charAt(0)}
                </div>

                <span className="truncate text-[8px] font-medium text-gray-700">
                  {member}
                </span>
              </div>

              <span className="text-[8px] text-gray-400">Member</span>

              <span className="w-fit rounded-full bg-green-50 px-2 py-1 text-[7px] font-semibold text-green-700">
                Active
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   EXPENSE CARD
============================================================ */

const ExpenseCard = () => {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Expense Report</h3>

            <p className="mt-1 text-[9px] text-gray-400">
              Monthly expense breakdown
            </p>
          </div>

          <button className="rounded-lg border border-gray-100 bg-white px-2 py-1 text-[8px] text-gray-500">
            April 2025⌄
          </button>
        </div>

        <div className="mt-5 flex items-center gap-5">
          {/* Donut */}
          <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#176b4d_0deg_245deg,#e2bd31_245deg_306deg,#e56d6d_306deg_342deg,#8759dc_342deg_360deg)]">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gray-50">
              <span className="text-sm font-bold text-gray-900">৳2,450</span>

              <span className="text-[7px] text-gray-400">Total Expense</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-3">
            <ExpenseItem
              label="Food"
              amount="৳1,680"
              percentage="68%"
              className="bg-green-700"
            />

            <ExpenseItem
              label="Utilities"
              amount="৳420"
              percentage="17%"
              className="bg-yellow-500"
            />

            <ExpenseItem
              label="Household"
              amount="৳250"
              percentage="10%"
              className="bg-red-400"
            />

            <ExpenseItem
              label="Others"
              amount="৳100"
              percentage="5%"
              className="bg-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   SMALL COMPONENTS
============================================================ */

const SidebarItem = ({ icon, active }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-md p-1.5 ${
        active ? "bg-green-50 text-green-800" : "text-gray-400"
      }`}
    >
      {icon}
    </div>
  );
};

const MiniStat = ({ value, label }) => {
  return (
    <div className="rounded-lg bg-white p-2">
      <p className="text-xs font-bold text-gray-900">{value}</p>

      <p className="mt-1 text-[7px] text-gray-400">{label}</p>
    </div>
  );
};

const MealRow = ({ title, time, icon }) => {
  return (
    <div className="flex items-center gap-2 border-b border-gray-50 py-2 last:border-0">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-50 text-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[8px] font-medium text-gray-700">{title}</p>

        <p className="mt-0.5 text-[7px] text-gray-400">{time}</p>
      </div>

      <span className="rounded-full bg-green-50 px-2 py-1 text-[6px] font-medium text-green-700">
        Meal
      </span>
    </div>
  );
};

const ScheduleRow = ({ icon, title, description, time, iconClass }) => {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-white p-3">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${iconClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-semibold text-gray-800">{title}</p>

        <p className="mt-0.5 truncate text-[8px] text-gray-400">
          {description}
        </p>
      </div>

      <span className="text-[8px] font-medium text-gray-500">{time}</span>
    </div>
  );
};

const ExpenseItem = ({ label, amount, percentage, className }) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${className}`} />

      <span className="flex-1 text-[8px] text-gray-600">{label}</span>

      <span className="text-[8px] font-semibold text-gray-700">{amount}</span>

      <span className="w-6 text-right text-[7px] text-gray-400">
        {percentage}
      </span>
    </div>
  );
};

export default HeroSection;
