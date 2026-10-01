"use client";

import {
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Lock,
} from "@gravity-ui/icons";

import { Button, Separator, Input } from "@heroui/react";

import {
  FiArrowDownLeft,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiHome,
  FiMoreVertical,
  FiPhone,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";

const paymentMethods = [
  {
    id: "bkash",
    name: "bKash",
    description: "Pay securely with bKash",
    logo: "bK",
  },
  {
    id: "nagad",
    name: "Nagad",
    description: "Pay using your Nagad account",
    logo: "N",
  },
  {
    id: "bank",
    name: "Bank Transfer",
    description: "Transfer directly to mess account",
    logo: "৳",
  },
  {
    id: "cash",
    name: "Cash Payment",
    description: "Pay directly to mess manager",
    logo: "৳",
  },
];

const paymentHistory = [
  {
    id: 1,
    title: "October Mess Payment",
    date: "Oct 01, 2026",
    amount: "৳ 4,500",
    method: "bKash",
    status: "Paid",
  },
  {
    id: 2,
    title: "September Mess Payment",
    date: "Sep 01, 2026",
    amount: "৳ 4,500",
    method: "bKash",
    status: "Paid",
  },
  {
    id: 3,
    title: "August Mess Payment",
    date: "Aug 02, 2026",
    amount: "৳ 4,500",
    method: "Cash",
    status: "Paid",
  },
  {
    id: 4,
    title: "July Mess Payment",
    date: "Jul 01, 2026",
    amount: "৳ 4,500",
    method: "Nagad",
    status: "Paid",
  },
];

function PaymentMethod({ method, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
        selected
          ? "border-green-700 bg-green-50/60 shadow-sm shadow-green-900/5"
          : "border-gray-100 bg-white hover:border-green-100 hover:bg-gray-50"
      }`}
    >
      {/* Logo */}
      <div
        className={`flex size-11 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
          selected ? "bg-green-800 text-white" : "bg-gray-50 text-gray-600"
        }`}
      >
        {method.logo}
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-gray-950">{method.name}</p>

        <p className="mt-1 text-xs text-gray-400">{method.description}</p>
      </div>

      {/* Radio */}
      <div
        className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
          selected
            ? "border-green-700 bg-green-700"
            : "border-gray-300 bg-white"
        }`}
      >
        {selected && <Check className="size-3 text-white" />}
      </div>
    </button>
  );
}

function HistoryRow({ payment }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition hover:border-green-100 hover:shadow-sm">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
        <FiArrowDownLeft className="size-4" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-gray-950">
          {payment.title}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <span>{payment.date}</span>

          <span className="size-1 rounded-full bg-gray-300" />

          <span>{payment.method}</span>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm font-bold text-gray-950">{payment.amount}</p>

        <div className="mt-1 flex items-center justify-end gap-1">
          <FiCheckCircle className="size-3 text-green-600" />

          <span className="text-[10px] font-bold text-green-700">
            {payment.status}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="hidden size-9 items-center justify-center rounded-xl text-gray-400 hover:bg-gray-50 sm:flex"
      >
        <FiMoreVertical className="size-4" />
      </button>
    </div>
  );
}

export default function PaymentPage() {
  const selectedMethod = "bkash";

  return (
    <main className="min-h-screen w-full bg-gray-50">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div>
            <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-900">
              Payments
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Manage your
              <span className="block text-green-800">mess payments.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Pay your monthly mess bill securely and keep track of your
              previous payments in one place.
            </p>
          </div>

          {/* =====================================================
              CURRENT BILL
          ====================================================== */}
          <div className="mt-9 overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1fr_360px]">
              {/* Left */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-green-50 text-green-800">
                        <FiHome className="size-5" />
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Current Mess</p>

                        <h2 className="text-lg font-bold text-gray-950">
                          Green View Mess
                        </h2>
                      </div>
                    </div>

                    <p className="mt-5 text-xs text-gray-400">Payment for</p>

                    <h3 className="mt-1 text-xl font-bold text-gray-950">
                      October 2026 Mess Bill
                    </h3>
                  </div>

                  <span className="w-fit rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
                    Payment Due
                  </span>
                </div>

                <Separator className="my-7" />

                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-gray-400">Monthly Mess Cost</p>

                    <p className="mt-1 text-lg font-bold text-gray-950">
                      ৳ 4,500
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Due Date</p>

                    <p className="mt-1 text-lg font-bold text-gray-950">
                      October 05
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Member</p>

                    <p className="mt-1 text-lg font-bold text-gray-950">
                      Rakib Hasan
                    </p>
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div className="flex flex-col justify-between bg-green-800 p-6 text-white sm:p-8">
                <div>
                  <p className="text-sm text-white/60">Amount to pay</p>

                  <p className="mt-2 text-4xl font-bold">৳ 4,500</p>

                  <p className="mt-2 text-xs text-white/60">
                    October monthly mess payment
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-2 text-xs text-white/70">
                  <FiShield className="size-4" />
                  Secure payment
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              PAYMENT AREA
          ====================================================== */}
          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* ===================================================
                PAYMENT METHOD
            ==================================================== */}
            <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
              <div>
                <h2 className="text-xl font-bold text-gray-950">
                  Choose payment method
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Select how you want to pay your mess bill.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {paymentMethods.map((method) => (
                  <PaymentMethod
                    key={method.id}
                    method={method}
                    selected={method.id === selectedMethod}
                    onSelect={() => {}}
                  />
                ))}
              </div>

              {/* bKash details */}
              <div className="mt-6 rounded-2xl border border-green-100 bg-green-50/60 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-800 shadow-sm">
                    <FiSmartphone className="size-4" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      bKash payment
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Send the payment to the mess manager's bKash number and
                      enter your transaction ID below.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Input
                    label="bKash Number"
                    placeholder="01XXXXXXXXX"
                    variant="bordered"
                    labelPlacement="outside"
                    className={{
                      label: "text-xs font-semibold text-gray-500",
                      inputWrapper: "rounded-xl border-gray-200 bg-white",
                    }}
                  />

                  <Input
                    label="Transaction ID"
                    placeholder="Enter transaction ID"
                    variant="bordered"
                    labelPlacement="outside"
                    className={{
                      label: "text-xs font-semibold text-gray-500",
                      inputWrapper: "rounded-xl border-gray-200 bg-white",
                    }}
                  />
                </div>
              </div>

              {/* Confirm */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Lock className="size-3.5" />
                  Your payment information is secure.
                </div>

                <Button className="h-12 rounded-xl bg-green-800 px-7 font-bold text-white shadow-sm shadow-green-900/10">
                  Confirm Payment
                </Button>
              </div>
            </section>

            {/* ===================================================
                PAYMENT SUMMARY
            ==================================================== */}
            <aside className="space-y-5">
              {/* Summary */}
              <div className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-950">
                  Payment Summary
                </h2>

                <Separator className="my-5" />

                <div className="space-y-4">
                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-gray-500">
                      Mess monthly fee
                    </span>

                    <span className="text-sm font-semibold text-gray-900">
                      ৳ 4,500
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-gray-500">Service fee</span>

                    <span className="text-sm font-semibold text-gray-900">
                      ৳ 0
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-gray-500">Discount</span>

                    <span className="text-sm font-semibold text-green-700">
                      - ৳ 0
                    </span>
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="flex items-end justify-between">
                  <span className="text-sm font-bold text-gray-700">Total</span>

                  <span className="text-2xl font-bold text-gray-950">
                    ৳ 4,500
                  </span>
                </div>
              </div>

              {/* Due date */}
              <div className="rounded-[1.5rem] border border-orange-100 bg-orange-50/60 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-orange-600 shadow-sm">
                    <FiClock className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Payment deadline</p>

                    <p className="mt-1 text-sm font-bold text-gray-950">
                      October 05, 2026
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Please complete your payment before the due date.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment security */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <FiShield className="size-4" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      Secure payments
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Your payment details are only used to record your mess
                      payment.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* =====================================================
              PAYMENT HISTORY
          ====================================================== */}
          <section className="mt-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-xl font-bold text-gray-950">
                  Payment History
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Your previous monthly mess payments.
                </p>
              </div>

              <Button
                variant="flat"
                className="h-10 rounded-xl bg-white px-4 text-sm font-semibold text-gray-600 shadow-sm"
              >
                <Calendar className="size-4" />
                All Payments
                <ChevronDown className="size-4 text-gray-400" />
              </Button>
            </div>

            <div className="mt-5 space-y-3">
              {paymentHistory.map((payment) => (
                <HistoryRow key={payment.id} payment={payment} />
              ))}
            </div>

            <button
              type="button"
              className="mx-auto mt-5 flex items-center gap-2 text-sm font-bold text-green-800"
            >
              View complete payment history
              <ChevronRight className="size-4" />
            </button>
          </section>

          {/* =====================================================
              FOOTER INFO
          ====================================================== */}
          <div className="mt-10 rounded-[1.75rem] border border-green-100 bg-green-50/60 p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-green-800 shadow-sm">
                  <FiPhone className="size-4" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-950">
                    Need help with a payment?
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Contact your mess manager if you have a payment issue or
                    need to verify a transaction.
                  </p>
                </div>
              </div>

              <Button
                variant="flat"
                className="h-10 rounded-xl bg-white px-5 text-sm font-bold text-gray-700 shadow-sm"
              >
                Contact Manager
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
