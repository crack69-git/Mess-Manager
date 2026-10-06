"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Magnifier,
  Ellipsis,
  Eye,
  CreditCard,
  CircleCheck,
  CircleXmark,
  Clock,
  ChevronDown,
  ArrowUp,
  ArrowDown,
} from "@gravity-ui/icons";

const initialTransactions = [
  {
    id: "TXN-2026-00124",
    user: "Rahim Ahmed",
    initials: "RA",
    email: "rahim@example.com",
    mess: "Green View Mess",
    type: "Monthly Payment",
    amount: 2500,
    method: "bKash",
    status: "Completed",
    date: "Sep 30, 2026",
    time: "10:42 AM",
  },
  {
    id: "TXN-2026-00123",
    user: "Ashutosh Tanchangya",
    initials: "AT",
    email: "ashutosh@example.com",
    mess: "Green View Mess",
    type: "Monthly Payment",
    amount: 3000,
    method: "Nagad",
    status: "Completed",
    date: "Sep 29, 2026",
    time: "04:18 PM",
  },
  {
    id: "TXN-2026-00122",
    user: "Sakib Hasan",
    initials: "SH",
    email: "sakib@example.com",
    mess: "Sunrise Mess",
    type: "Monthly Payment",
    amount: 2800,
    method: "bKash",
    status: "Pending",
    date: "Sep 29, 2026",
    time: "01:25 PM",
  },
  {
    id: "TXN-2026-00121",
    user: "Nusrat Jahan",
    initials: "NJ",
    email: "nusrat@example.com",
    mess: "Green View Mess",
    type: "Monthly Payment",
    amount: 2500,
    method: "Card",
    status: "Completed",
    date: "Sep 28, 2026",
    time: "09:11 AM",
  },
  {
    id: "TXN-2026-00120",
    user: "Tanvir Hossain",
    initials: "TH",
    email: "tanvir@example.com",
    mess: "Sunrise Mess",
    type: "Additional Payment",
    amount: 1200,
    method: "Rocket",
    status: "Completed",
    date: "Sep 27, 2026",
    time: "07:35 PM",
  },
  {
    id: "TXN-2026-00119",
    user: "Mehedi Hasan",
    initials: "MH",
    email: "mehedi@example.com",
    mess: "Lake View Mess",
    type: "Monthly Payment",
    amount: 2700,
    method: "bKash",
    status: "Failed",
    date: "Sep 27, 2026",
    time: "03:48 PM",
  },
  {
    id: "TXN-2026-00118",
    user: "Sadia Akter",
    initials: "SA",
    email: "sadia@example.com",
    mess: "Lake View Mess",
    type: "Monthly Payment",
    amount: 2600,
    method: "Nagad",
    status: "Completed",
    date: "Sep 26, 2026",
    time: "11:20 AM",
  },
  {
    id: "TXN-2026-00117",
    user: "Fahim Rahman",
    initials: "FR",
    email: "fahim@example.com",
    mess: "Green View Mess",
    type: "Monthly Payment",
    amount: 3000,
    method: "Card",
    status: "Completed",
    date: "Sep 25, 2026",
    time: "02:17 PM",
  },
];

function formatAmount(amount) {
  return `৳ ${amount.toLocaleString("en-BD")}`;
}

function StatusBadge({ status }) {
  const styles = {
    Completed: "bg-green-50 text-green-800",
    Pending: "bg-yellow-50 text-yellow-700",
    Failed: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status === "Completed" && <CircleCheck className="size-3.5" />}

      {status === "Pending" && <Clock className="size-3.5" />}

      {status === "Failed" && <CircleXmark className="size-3.5" />}

      {status}
    </span>
  );
}

function StatCard({ label, value, description, icon: Icon, type = "normal" }) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>

          <p className="mt-1 text-2xl font-bold tracking-tight text-gray-950">
            {value}
          </p>

          <p className="mt-1 text-xs text-gray-400">{description}</p>
        </div>

        <div
          className={`flex size-11 items-center justify-center rounded-2xl ${
            type === "danger"
              ? "bg-red-50 text-red-600"
              : type === "warning"
                ? "bg-yellow-50 text-yellow-700"
                : "bg-green-50 text-green-800"
          }`}
        >
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}

export default function PaymentsTable() {
  const [transactions] = useState(initialTransactions);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [openAction, setOpenAction] = useState(null);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        transaction.id.toLowerCase().includes(searchValue) ||
        transaction.user.toLowerCase().includes(searchValue) ||
        transaction.email.toLowerCase().includes(searchValue) ||
        transaction.mess.toLowerCase().includes(searchValue) ||
        transaction.method.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || transaction.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [transactions, search, statusFilter]);

  const completedTransactions = transactions.filter(
    (transaction) => transaction.status === "Completed",
  );

  const pendingTransactions = transactions.filter(
    (transaction) => transaction.status === "Pending",
  );

  const failedTransactions = transactions.filter(
    (transaction) => transaction.status === "Failed",
  );

  const totalCollected = completedTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0,
  );

  const pendingAmount = pendingTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0,
  );

  const failedAmount = failedTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0,
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                <Link
                  href="/Dashboard/admin"
                  className="transition hover:text-green-800"
                >
                  Dashboard
                </Link>

                <span>/</span>

                <span className="text-green-800">Payments</span>
              </div>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950">
                Payments
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Monitor all payment transactions across the platform.
              </p>
            </div>

            <div className="flex size-12 items-center justify-center rounded-2xl bg-green-800 text-white shadow-lg shadow-green-900/10">
              <CreditCard className="size-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
        {/* Payment Statistics */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Total Collected"
            value={formatAmount(totalCollected)}
            description="Successfully received"
            icon={ArrowUp}
          />

          <StatCard
            label="Transactions"
            value={transactions.length}
            description="Total transactions"
            icon={CreditCard}
          />

          <StatCard
            label="Pending Amount"
            value={formatAmount(pendingAmount)}
            description={`${pendingTransactions.length} pending transactions`}
            icon={Clock}
            type="warning"
          />

          <StatCard
            label="Failed Amount"
            value={formatAmount(failedAmount)}
            description={`${failedTransactions.length} failed transactions`}
            icon={ArrowDown}
            type="danger"
          />
        </section>

        {/* Transactions */}
        <section className="mt-7 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          {/* Table Header */}
          <div className="border-b border-gray-100 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-950">
                  Transactions
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  {filteredTransactions.length} transactions found
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="relative">
                  <Magnifier className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search transaction..."
                    className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none transition focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-50 sm:w-64"
                  />
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-11 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 pr-10 text-sm font-medium text-gray-600 outline-none transition focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-50 sm:w-36"
                  >
                    <option value="All">All Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70">
                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Transaction
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    User
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Mess
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Method
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Date
                  </th>

                  <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-gray-50 transition hover:bg-green-50/30 last:border-0"
                  >
                    {/* Transaction */}
                    <td className="px-6 py-5">
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          {transaction.id}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {transaction.type}
                        </p>
                      </div>
                    </td>

                    {/* User */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                          {transaction.initials}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-gray-900">
                            {transaction.user}
                          </p>

                          <p className="truncate text-xs text-gray-400">
                            {transaction.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Mess */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-gray-700">
                        {transaction.mess}
                      </p>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-gray-950">
                        {formatAmount(transaction.amount)}
                      </p>
                    </td>

                    {/* Method */}
                    <td className="px-6 py-5">
                      <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-semibold text-gray-600">
                        {transaction.method}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <StatusBadge status={transaction.status} />
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-gray-600">
                        {transaction.date}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        {transaction.time}
                      </p>
                    </td>

                    {/* Action */}
                    <td className="relative px-6 py-5 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenAction(
                            openAction === transaction.id
                              ? null
                              : transaction.id,
                          )
                        }
                        className="inline-flex size-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition hover:border-green-100 hover:bg-green-50 hover:text-green-800"
                      >
                        <Ellipsis className="size-5" />
                      </button>

                      {openAction === transaction.id && (
                        <>
                          <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setOpenAction(null)}
                            className="fixed inset-0 z-10 cursor-default"
                          />

                          <div className="absolute right-6 top-16 z-20 w-48 overflow-hidden rounded-2xl border border-gray-100 bg-white p-1.5 text-left shadow-xl shadow-gray-900/10">
                            <Link
                              href={`/Dashboard/admin/payments/${transaction.id}`}
                              onClick={() => setOpenAction(null)}
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-green-50 hover:text-green-800"
                            >
                              <Eye className="size-4" />
                              View Details
                            </Link>
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {filteredTransactions.length === 0 && (
              <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
                  <CreditCard className="size-7" />
                </div>

                <h3 className="mt-4 text-base font-bold text-gray-900">
                  No transactions found
                </h3>

                <p className="mt-1 max-w-sm text-sm text-gray-400">
                  Try changing your search or status filter.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col justify-between gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center">
            <p className="text-xs text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-600">
                {filteredTransactions.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-600">
                {transactions.length}
              </span>{" "}
              transactions
            </p>

            <p className="text-xs text-gray-400">Payment transaction history</p>
          </div>
        </section>
      </div>
    </main>
  );
}
