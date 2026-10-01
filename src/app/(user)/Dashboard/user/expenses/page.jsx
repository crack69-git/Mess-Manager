"use client";

import { Calendar, ChevronDown, ChevronRight, Plus } from "@gravity-ui/icons";

import { Button, Chip, Separator } from "@heroui/react";

import {
  FiArrowDownLeft,
  FiArrowUpRight,
  FiCreditCard,
  FiDollarSign,
  FiEdit3,
  FiHome,
  FiMoreVertical,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
  FiWifi,
} from "react-icons/fi";

const expenseSummary = {
  total: "৳ 5,850",
  monthlyBudget: "৳ 7,000",
  remaining: "৳ 1,150",
  messCost: "৳ 4,500",
  otherExpenses: "৳ 1,350",
};

const expenses = [
  {
    id: 1,
    title: "Monthly Mess Payment",
    category: "Mess",
    description: "October monthly mess cost",
    amount: "৳ 4,500",
    date: "Oct 01, 2026",
    time: "09:30 AM",
    icon: FiHome,
    type: "payment",
    status: "Paid",
  },
  {
    id: 2,
    title: "Internet Bill",
    category: "Utilities",
    description: "Monthly WiFi contribution",
    amount: "৳ 350",
    date: "Sep 30, 2026",
    time: "07:20 PM",
    icon: FiWifi,
    type: "payment",
    status: "Paid",
  },
  {
    id: 3,
    title: "Grocery Contribution",
    category: "Groceries",
    description: "Shared grocery purchase",
    amount: "৳ 500",
    date: "Sep 29, 2026",
    time: "05:45 PM",
    icon: FiShoppingBag,
    type: "payment",
    status: "Paid",
  },
  {
    id: 4,
    title: "Cleaning Supplies",
    category: "Household",
    description: "Shared cleaning materials",
    amount: "৳ 250",
    date: "Sep 27, 2026",
    time: "04:10 PM",
    icon: FiShoppingBag,
    type: "payment",
    status: "Paid",
  },
  {
    id: 5,
    title: "Previous Balance",
    category: "Adjustment",
    description: "Previous month adjustment",
    amount: "৳ 250",
    date: "Sep 25, 2026",
    time: "11:15 AM",
    icon: FiCreditCard,
    type: "payment",
    status: "Paid",
  },
];

const categoryData = [
  {
    name: "Mess",
    amount: "৳ 4,500",
    percentage: 77,
    icon: FiHome,
  },
  {
    name: "Utilities",
    amount: "৳ 350",
    percentage: 6,
    icon: FiWifi,
  },
  {
    name: "Groceries",
    amount: "৳ 500",
    percentage: 9,
    icon: FiShoppingBag,
  },
  {
    name: "Household",
    amount: "৳ 250",
    percentage: 4,
    icon: FiHome,
  },
  {
    name: "Adjustment",
    amount: "৳ 250",
    percentage: 4,
    icon: FiCreditCard,
  },
];

function SummaryCard({
  title,
  amount,
  subtitle,
  icon: Icon,
  positive = false,
}) {
  return (
    <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400">{title}</p>

          <p className="mt-1 text-2xl font-bold text-gray-950">{amount}</p>

          <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
        </div>

        <div
          className={`flex size-11 items-center justify-center rounded-xl ${
            positive ? "bg-green-50 text-green-800" : "bg-gray-50 text-gray-600"
          }`}
        >
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}

function ExpenseRow({ expense }) {
  const Icon = expense.icon;

  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-200 hover:border-green-100 hover:shadow-md hover:shadow-green-900/5">
      {/* Icon */}
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition-colors group-hover:bg-green-50 group-hover:text-green-800">
        <Icon className="size-4" />
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="truncate text-sm font-bold text-gray-950">
            {expense.title}
          </h3>

          <Chip
            size="sm"
            variant="flat"
            classNames={{
              base: "h-5 bg-gray-50",
              content: "px-1.5 text-[10px] font-semibold text-gray-500",
            }}
          >
            {expense.category}
          </Chip>
        </div>

        <p className="mt-1 truncate text-xs text-gray-400">
          {expense.description}
        </p>
      </div>

      {/* Date */}
      <div className="hidden text-right md:block">
        <p className="text-xs font-medium text-gray-600">{expense.date}</p>

        <p className="mt-1 text-[11px] text-gray-400">{expense.time}</p>
      </div>

      {/* Amount */}
      <div className="text-right">
        <p className="text-sm font-bold text-gray-950">{expense.amount}</p>

        <div className="mt-1 flex items-center justify-end gap-1">
          <span className="size-1.5 rounded-full bg-green-500" />

          <span className="text-[10px] font-semibold text-green-700">
            {expense.status}
          </span>
        </div>
      </div>

      {/* Menu */}
      <button
        type="button"
        className="flex size-9 shrink-0 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-50 hover:text-gray-700"
      >
        <FiMoreVertical className="size-4" />
      </button>
    </div>
  );
}

function CategoryRow({ category }) {
  const Icon = category.icon;

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-gray-50 text-gray-600">
          <Icon className="size-4" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-gray-800">
              {category.name}
            </p>

            <p className="text-sm font-bold text-gray-950">{category.amount}</p>
          </div>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-green-700"
              style={{ width: `${category.percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpensesPage() {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-900">
                Expenses
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Keep track of your
                <span className="block text-green-800">mess expenses.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                Monitor your monthly mess payments, shared expenses and spending
                so you always know where your money goes.
              </p>
            </div>

            <Button className="h-11 rounded-xl bg-green-800 px-5 font-bold text-white shadow-sm shadow-green-900/10">
              <Plus className="size-4" />
              Add Expense
            </Button>
          </div>

          {/* =====================================================
              MONTH SELECTOR
          ====================================================== */}
          <div className="mt-9 flex flex-col justify-between gap-4 rounded-[1.5rem] border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                <Calendar className="size-4" />
              </div>

              <div>
                <p className="text-xs text-gray-400">Expense period</p>

                <p className="text-sm font-bold text-gray-950">October 2026</p>
              </div>
            </div>

            <Button
              variant="flat"
              className="h-10 rounded-xl bg-gray-50 px-4 text-sm font-semibold text-gray-600"
            >
              October 2026
              <ChevronDown className="size-4 text-gray-400" />
            </Button>
          </div>

          {/* =====================================================
              SUMMARY CARDS
          ====================================================== */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <SummaryCard
              title="Total Expenses"
              amount={expenseSummary.total}
              subtitle="This month"
              icon={FiDollarSign}
            />

            <SummaryCard
              title="Mess Payment"
              amount={expenseSummary.messCost}
              subtitle="Monthly mess cost"
              icon={FiHome}
            />

            <SummaryCard
              title="Other Expenses"
              amount={expenseSummary.otherExpenses}
              subtitle="Shared & personal"
              icon={FiShoppingBag}
            />

            <SummaryCard
              title="Remaining Budget"
              amount={expenseSummary.remaining}
              subtitle="From ৳ 7,000 budget"
              icon={FiTrendingUp}
              positive
            />
          </div>

          {/* =====================================================
              BUDGET PROGRESS
          ====================================================== */}
          <div className="mt-6 rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs text-gray-400">Monthly Budget</p>

                <div className="mt-1 flex items-baseline gap-2">
                  <h2 className="text-xl font-bold text-gray-950">৳ 5,850</h2>

                  <span className="text-xs text-gray-400">of ৳ 7,000</span>
                </div>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-800">
                84% used
              </span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-green-700"
                style={{ width: "84%" }}
              />
            </div>

            <div className="mt-3 flex justify-between text-xs text-gray-400">
              <span>৳ 0</span>
              <span>৳ 7,000</span>
            </div>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}
          <div className="mt-9 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* ===================================================
                TRANSACTIONS
            ==================================================== */}
            <section>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-xl font-bold text-gray-950">
                    Recent Expenses
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Your latest mess-related transactions.
                  </p>
                </div>

                <Button
                  variant="flat"
                  className="h-10 rounded-xl bg-white px-4 text-sm font-semibold text-gray-600 shadow-sm"
                >
                  All Expenses
                  <ChevronDown className="size-4 text-gray-400" />
                </Button>
              </div>

              <div className="mt-5 space-y-3">
                {expenses.map((expense) => (
                  <ExpenseRow key={expense.id} expense={expense} />
                ))}
              </div>

              {/* View all */}
              <button
                type="button"
                className="mx-auto mt-5 flex items-center gap-2 text-sm font-bold text-green-800 transition hover:text-green-900"
              >
                View all expenses
                <ChevronRight className="size-4" />
              </button>
            </section>

            {/* ===================================================
                SIDEBAR
            ==================================================== */}
            <aside className="space-y-5">
              {/* Expense breakdown */}
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
                    <CategoryRow key={category.name} category={category} />
                  ))}
                </div>
              </div>

              {/* Payment status */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Monthly payment</p>

                    <h3 className="mt-1 text-lg font-bold text-gray-950">
                      October Mess Bill
                    </h3>
                  </div>

                  <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <FiCreditCard className="size-4" />
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-green-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-900">Amount</span>

                    <span className="text-lg font-bold text-green-900">
                      ৳ 4,500
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-green-600" />

                    <span className="text-xs font-semibold text-green-800">
                      Paid on October 1
                    </span>
                  </div>
                </div>

                <Button
                  variant="flat"
                  className="mt-4 h-10 w-full rounded-xl bg-gray-50 text-sm font-semibold text-gray-600"
                >
                  View Payment
                </Button>
              </div>

              {/* Shared expenses */}
              <div className="rounded-[1.5rem] border border-green-100 bg-green-50/60 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-800 shadow-sm">
                    <FiUsers className="size-4" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      Shared expenses
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Track grocery, utility and household costs shared between
                      your mess members.
                    </p>
                  </div>
                </div>

                <Button className="mt-4 h-10 w-full rounded-xl bg-green-800 text-sm font-bold text-white">
                  View Shared Expenses
                </Button>
              </div>
            </aside>
          </div>

          {/* =====================================================
              MONTHLY INSIGHT
          ====================================================== */}
          <section className="mt-10">
            <div className="rounded-[1.75rem] border border-green-100 bg-green-50/60 p-6 sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-green-800 shadow-sm">
                    <FiTrendingUp className="size-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-950">
                      Your October spending
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                      You've used 84% of your monthly budget so far. Your
                      remaining budget is ৳ 1,150.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Remaining</p>

                    <p className="text-xl font-bold text-green-800">৳ 1,150</p>
                  </div>

                  <Button
                    variant="flat"
                    className="h-10 rounded-xl bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm"
                  >
                    <FiEdit3 className="size-4" />
                    Budget
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
