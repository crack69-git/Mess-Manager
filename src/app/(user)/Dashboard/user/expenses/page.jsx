"use client";

import { useMemo, useState } from "react";

import { Calendar } from "@gravity-ui/icons";

import { Button, Separator } from "@heroui/react";

import {
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiHome,
  FiMoreVertical,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
  FiWifi,
} from "react-icons/fi";

import { Search } from "lucide-react";

/* =========================================================
   MEMBER DATA
========================================================= */

const members = [
  {
    id: 1,
    name: "Rahim Ahmed",
    initials: "RA",
    email: "rahim@example.com",
    total: 4500,
    paid: 4500,
    due: 0,
    savings: 500,
    status: "Completed",
    month: "October",
    year: 2026,
  },
  {
    id: 2,
    name: "Sakib Hasan",
    initials: "SH",
    email: "sakib@example.com",
    total: 4500,
    paid: 3000,
    due: 1500,
    savings: 200,
    status: "Due",
    month: "October",
    year: 2026,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    initials: "NJ",
    email: "nusrat@example.com",
    total: 4500,
    paid: 4500,
    due: 0,
    savings: 750,
    status: "Completed",
    month: "October",
    year: 2026,
  },
  {
    id: 4,
    name: "Tanvir Hossain",
    initials: "TH",
    email: "tanvir@example.com",
    total: 4500,
    paid: 2500,
    due: 2000,
    savings: 100,
    status: "Due",
    month: "October",
    year: 2026,
  },
  {
    id: 5,
    name: "Mehedi Hasan",
    initials: "MH",
    email: "mehedi@example.com",
    total: 4500,
    paid: 4500,
    due: 0,
    savings: 900,
    status: "Saving",
    month: "October",
    year: 2026,
  },
  {
    id: 6,
    name: "Sadia Akter",
    initials: "SA",
    email: "sadia@example.com",
    total: 4500,
    paid: 4000,
    due: 500,
    savings: 300,
    status: "Due",
    month: "October",
    year: 2026,
  },
  {
    id: 7,
    name: "Fahim Rahman",
    initials: "FR",
    email: "fahim@example.com",
    total: 4500,
    paid: 4500,
    due: 0,
    savings: 650,
    status: "Completed",
    month: "September",
    year: 2026,
  },
  {
    id: 8,
    name: "Sadia Rahman",
    initials: "SR",
    email: "sadia.r@example.com",
    total: 4500,
    paid: 3500,
    due: 1000,
    savings: 250,
    status: "Due",
    month: "September",
    year: 2026,
  },
  {
    id: 9,
    name: "Arif Hossain",
    initials: "AH",
    email: "arif@example.com",
    total: 4500,
    paid: 4500,
    due: 0,
    savings: 850,
    status: "Saving",
    month: "August",
    year: 2026,
  },
  {
    id: 10,
    name: "Mim Akter",
    initials: "MA",
    email: "mim@example.com",
    total: 4500,
    paid: 4500,
    due: 0,
    savings: 600,
    status: "Completed",
    month: "July",
    year: 2026,
  },
];

/* =========================================================
   CATEGORY DATA
========================================================= */

const categoryData = [
  {
    name: "Mess",
    amount: 4500,
    icon: FiHome,
  },
  {
    name: "Utilities",
    amount: 800,
    icon: FiWifi,
  },
  {
    name: "Groceries",
    amount: 500,
    icon: FiShoppingBag,
  },
  {
    name: "Household",
    amount: 250,
    icon: FiShoppingBag,
  },
  {
    name: "Other",
    amount: 250,
    icon: FiDollarSign,
  },
];

/* =========================================================
   HELPERS
========================================================= */

function formatAmount(amount) {
  return `৳ ${Number(amount || 0).toLocaleString()}`;
}

/* =========================================================
   SUMMARY CARD
========================================================= */

function SummaryCard({
  title,
  amount,
  subtitle,
  icon: Icon,
  variant = "default",
}) {
  const styles = {
    default: "bg-gray-50 text-gray-700",
    success: "bg-green-50 text-green-700",
    warning: "bg-orange-50 text-orange-600",
    danger: "bg-red-50 text-red-600",
  };

  return (
    <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-gray-400">{title}</p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
            {amount}
          </p>

          <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
        </div>

        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${styles[variant]}`}
        >
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MEMBER TABLE ROW
========================================================= */

function MemberExpenseRow({ member }) {
  const statusStyles = {
    Completed: {
      dot: "bg-green-500",
      text: "text-green-700",
      badge: "bg-green-50",
    },

    Due: {
      dot: "bg-orange-500",
      text: "text-orange-700",
      badge: "bg-orange-50",
    },

    Saving: {
      dot: "bg-blue-500",
      text: "text-blue-700",
      badge: "bg-blue-50",
    },
  };

  const style = statusStyles[member.status] || statusStyles.Completed;

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-200 hover:border-green-100 hover:shadow-md hover:shadow-green-900/5">
      <div className="grid gap-4 md:grid-cols-[minmax(220px,1.6fr)_110px_110px_110px_110px_110px_40px] md:items-center">
        {/* MEMBER */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-sm font-bold text-green-800">
            {member.initials}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-gray-950">
              {member.name}
            </p>

            <p className="truncate text-xs text-gray-400">{member.email}</p>
          </div>
        </div>

        {/* TOTAL */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400 md:hidden">
            Total
          </p>

          <p className="text-sm font-bold text-gray-950">
            {formatAmount(member.total)}
          </p>
        </div>

        {/* PAID */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400 md:hidden">
            Paid
          </p>

          <p className="text-sm font-bold text-green-700">
            {formatAmount(member.paid)}
          </p>
        </div>

        {/* DUE */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400 md:hidden">
            Due
          </p>

          <p
            className={`text-sm font-bold ${
              member.due > 0 ? "text-orange-600" : "text-gray-400"
            }`}
          >
            {formatAmount(member.due)}
          </p>
        </div>

        {/* SAVINGS */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400 md:hidden">
            Savings
          </p>

          <p className="text-sm font-bold text-blue-700">
            {formatAmount(member.savings)}
          </p>
        </div>

        {/* STATUS */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400 md:hidden">
            Status
          </p>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-bold ${style.badge} ${style.text}`}
          >
            <span className={`size-1.5 rounded-full ${style.dot}`} />

            {member.status}
          </span>
        </div>

        {/* ACTION */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-50 hover:text-gray-700"
        >
          <FiMoreVertical className="size-4" />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   CATEGORY ROW
========================================================= */

function CategoryRow({ category, total }) {
  const Icon = category.icon;

  const percentage =
    total > 0 ? Math.round((category.amount / total) * 100) : 0;

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-600">
          <Icon className="size-4" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-gray-800">
              {category.name}
            </p>

            <p className="text-sm font-bold text-gray-950">
              {formatAmount(category.amount)}
            </p>
          </div>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-green-700"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ExpensesPage() {
  const [period, setPeriod] = useState("month");
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");

  const periodLabel = {
    month: "This Month",
    year: "This Year",
    all: "All Time",
  };

  /* =======================================================
     FILTER MEMBERS
  ======================================================= */

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesPeriod =
        period === "month"
          ? member.month === "October" && member.year === 2026
          : period === "year"
            ? member.year === 2026
            : true;

      const matchesStatus =
        status === "all" ||
        member.status.toLowerCase() === status.toLowerCase();

      const matchesSearch =
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.email.toLowerCase().includes(search.toLowerCase());

      return matchesPeriod && matchesStatus && matchesSearch;
    });
  }, [period, status, search]);

  /* =======================================================
     SUMMARY CALCULATIONS
  ======================================================= */

  const completedMembers = filteredMembers.filter(
    (member) => member.status === "Completed",
  );

  const dueMembers = filteredMembers.filter(
    (member) => member.status === "Due",
  );

  const savingMembers = filteredMembers.filter(
    (member) => member.status === "Saving",
  );

  const completedTotal = completedMembers.reduce(
    (total, member) => total + member.paid,
    0,
  );

  const dueTotal = dueMembers.reduce((total, member) => total + member.due, 0);

  const totalSavings = filteredMembers.reduce(
    (total, member) => total + member.savings,
    0,
  );

  const totalPaid = filteredMembers.reduce(
    (total, member) => total + member.paid,
    0,
  );

  const totalExpected = filteredMembers.reduce(
    (total, member) => total + member.total,
    0,
  );

  const collectionPercentage =
    totalExpected > 0 ? Math.round((totalPaid / totalExpected) * 100) : 0;

  const categoryTotal = categoryData.reduce(
    (total, category) => total + category.amount,
    0,
  );

  return (
    <main className="min-h-screen w-full bg-gray-50">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none fixed -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* =================================================
              HEADER
          ================================================== */}

          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-900">
                Expenses
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Know where your
                <span className="block text-green-800">money goes.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                Track every member's payment, due amount and savings across your
                mess expenses.
              </p>
            </div>
          </div>

          {/* =================================================
              PERIOD FILTER
          ================================================== */}

          <div className="mt-9 flex flex-col gap-4 rounded-[1.5rem] border border-gray-100 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between lg:p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                <Calendar className="size-4" />
              </div>

              <div>
                <p className="text-xs text-gray-400">Expense period</p>

                <p className="text-sm font-bold text-gray-950">
                  {periodLabel[period]}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                {
                  id: "month",
                  label: "This Month",
                },
                {
                  id: "year",
                  label: "This Year",
                },
                {
                  id: "all",
                  label: "All Time",
                },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant="flat"
                  onPress={() => setPeriod(item.id)}
                  className={`h-10 rounded-xl px-4 text-sm font-semibold transition ${
                    period === item.id
                      ? "bg-green-800 text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-green-800"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* =================================================
              SUMMARY CARDS
          ================================================== */}

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <SummaryCard
              title="Completed"
              amount={formatAmount(completedTotal)}
              subtitle={`${completedMembers.length} members paid`}
              icon={FiCheckCircle}
              variant="success"
            />

            <SummaryCard
              title="Due"
              amount={formatAmount(dueTotal)}
              subtitle={`${dueMembers.length} members have due`}
              icon={FiClock}
              variant="warning"
            />

            <SummaryCard
              title="Total Members"
              amount={filteredMembers.length}
              subtitle={`${collectionPercentage}% payment collected`}
              icon={FiUsers}
            />

            <SummaryCard
              title="Savings"
              amount={formatAmount(totalSavings)}
              subtitle={`${savingMembers.length} members saving`}
              icon={FiTrendingUp}
              variant="success"
            />
          </div>

          {/* =================================================
              COLLECTION PROGRESS
          ================================================== */}

          <div className="mt-6 rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs text-gray-400">Collection progress</p>

                <div className="mt-1 flex items-baseline gap-2">
                  <h2 className="text-xl font-bold text-gray-950">
                    {formatAmount(totalPaid)}
                  </h2>

                  <span className="text-xs text-gray-400">
                    of {formatAmount(totalExpected)}
                  </span>
                </div>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-800">
                {collectionPercentage}% collected
              </span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-green-700 transition-all duration-500"
                style={{
                  width: `${collectionPercentage}%`,
                }}
              />
            </div>

            <div className="mt-3 flex justify-between text-xs text-gray-400">
              <span>৳ 0</span>

              <span>{formatAmount(totalExpected)}</span>
            </div>
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <div className="mt-9 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* =================================================
                MEMBER TABLE
            ================================================== */}

            <section>
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                <div>
                  <h2 className="text-xl font-bold text-gray-950">
                    Member Expenses
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Check each member's payment, due amount and savings.
                  </p>
                </div>
              </div>

              {/* SEARCH + STATUS FILTER */}

              <div className="mt-5 flex flex-col gap-3 lg:flex-row">
                {/* SEARCH */}

                <div className="flex h-11 flex-1 items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 shadow-sm">
                  <Search className="size-4 shrink-0 text-gray-400" />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search member..."
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* STATUS */}

                <div className="flex gap-2 overflow-x-auto">
                  {[
                    {
                      id: "all",
                      label: "All",
                    },
                    {
                      id: "completed",
                      label: "Completed",
                    },
                    {
                      id: "due",
                      label: "Due",
                    },
                    {
                      id: "saving",
                      label: "Saving",
                    },
                  ].map((item) => (
                    <Button
                      key={item.id}
                      variant="flat"
                      onPress={() => setStatus(item.id)}
                      className={`h-11 shrink-0 rounded-xl px-4 text-xs font-bold ${
                        status === item.id
                          ? "bg-green-800 text-white"
                          : "bg-white text-gray-500 shadow-sm"
                      }`}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* TABLE HEADER */}

              <div className="mt-6 hidden grid-cols-[minmax(220px,1.6fr)_110px_110px_110px_110px_110px_40px] gap-4 px-4 text-[10px] font-bold uppercase tracking-wider text-gray-400 md:grid">
                <span>Member</span>
                <span>Total</span>
                <span>Paid</span>
                <span>Due</span>
                <span>Savings</span>
                <span>Status</span>
                <span />
              </div>

              {/* TABLE ROWS */}

              <div className="mt-2 space-y-3">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <MemberExpenseRow key={member.id} member={member} />
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-12 text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
                      <FiUsers className="size-5" />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-gray-900">
                      No members found
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                      Try changing your search or status filter.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="space-y-5">
              {/* CATEGORY BREAKDOWN */}

              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <div>
                  <p className="text-xs text-gray-400">Spending breakdown</p>

                  <h3 className="mt-1 text-lg font-bold text-gray-950">
                    By Category
                  </h3>
                </div>

                <Separator className="my-5" />

                <div className="space-y-5">
                  {categoryData.map((category) => (
                    <CategoryRow
                      key={category.name}
                      category={category}
                      total={categoryTotal}
                    />
                  ))}
                </div>
              </div>

              {/* PAYMENT STATUS */}

              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Member status</p>

                    <h3 className="mt-1 text-lg font-bold text-gray-950">
                      Payment Summary
                    </h3>
                  </div>

                  <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <FiDollarSign className="size-4" />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {/* COMPLETED */}

                  <div className="flex items-center justify-between rounded-xl bg-green-50 p-3">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-green-500" />

                      <span className="text-xs font-semibold text-green-800">
                        Completed
                      </span>
                    </div>

                    <span className="text-sm font-bold text-green-900">
                      {completedMembers.length}
                    </span>
                  </div>

                  {/* DUE */}

                  <div className="flex items-center justify-between rounded-xl bg-orange-50 p-3">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-orange-500" />

                      <span className="text-xs font-semibold text-orange-700">
                        Due
                      </span>
                    </div>

                    <span className="text-sm font-bold text-orange-800">
                      {dueMembers.length}
                    </span>
                  </div>

                  {/* SAVING */}

                  <div className="flex items-center justify-between rounded-xl bg-blue-50 p-3">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-blue-500" />

                      <span className="text-xs font-semibold text-blue-700">
                        Saving
                      </span>
                    </div>

                    <span className="text-sm font-bold text-blue-800">
                      {savingMembers.length}
                    </span>
                  </div>

                  {/* TOTAL */}

                  <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
                    <span className="text-xs font-semibold text-gray-500">
                      Total Members
                    </span>

                    <span className="text-sm font-bold text-gray-950">
                      {filteredMembers.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* SAVINGS */}

              <div className="rounded-[1.5rem] border border-green-100 bg-green-50/60 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-800 shadow-sm">
                    <FiTrendingUp className="size-4" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      Member savings
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {savingMembers.length} members are currently in the saving
                      category with total savings of{" "}
                      <span className="font-bold text-green-800">
                        {formatAmount(totalSavings)}
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* =================================================
              BOTTOM INSIGHT
          ================================================== */}

          <section className="mt-10">
            <div className="rounded-[1.75rem] border border-green-100 bg-green-50/60 p-6 sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-green-800 shadow-sm">
                    <FiCheckCircle className="size-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-950">
                      {periodLabel[period]} payment overview
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                      {completedMembers.length} members have completed their
                      payments, while {dueMembers.length} members still have
                      outstanding dues.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white px-4 py-3 text-center shadow-sm">
                    <p className="text-xs text-gray-400">Paid</p>

                    <p className="mt-1 text-lg font-bold text-green-800">
                      {completedMembers.length}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white px-4 py-3 text-center shadow-sm">
                    <p className="text-xs text-gray-400">Due</p>

                    <p className="mt-1 text-lg font-bold text-orange-600">
                      {dueMembers.length}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white px-4 py-3 text-center shadow-sm">
                    <p className="text-xs text-gray-400">Saving</p>

                    <p className="mt-1 text-lg font-bold text-blue-700">
                      {savingMembers.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
