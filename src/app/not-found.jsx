import Link from "next/link";

import { ArrowLeft, ArrowUpRight, CircleQuestion } from "@gravity-ui/icons";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-172px)] items-center justify-center overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[430px] w-[430px] rounded-full bg-green-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-green-50/80 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-50 blur-3xl" />

      {/* Decorative dots */}
      <div className="pointer-events-none absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-green-300" />
      <div className="pointer-events-none absolute right-[15%] top-[30%] h-3 w-3 rounded-full bg-green-200" />
      <div className="pointer-events-none absolute bottom-[25%] left-[20%] h-3 w-3 rounded-full bg-gray-200" />
      <div className="pointer-events-none absolute bottom-[20%] right-[20%] h-2 w-2 rounded-full bg-green-300" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* 404 Card */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-green-100 bg-green-50 shadow-sm sm:h-28 sm:w-28">
          <CircleQuestion className="h-12 w-12 text-green-800 sm:h-14 sm:w-14" />
        </div>

        {/* Badge */}

        <div className="mt-8">
          <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
            Page Not Found
          </span>
        </div>

        {/* Heading */}

        <h1 className="mt-6 text-7xl font-bold leading-none tracking-[-0.06em] text-gray-950 sm:text-8xl lg:text-9xl">
          4<span className="text-green-800">0</span>4
        </h1>

        <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
          Looks like you took a wrong turn.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry, let's get you back to your Mess Manager dashboard.
        </p>

        {/* ================= BUTTON ================= */}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-900 px-6 text-sm font-semibold text-white shadow-lg shadow-green-900/15 transition-all hover:-translate-y-0.5 hover:bg-green-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-800"
          >
            Go to Dashboard
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ================= MINI CARD ================= */}

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-gray-200/80 bg-white p-3 text-left shadow-[0_25px_70px_rgba(15,23,42,0.10)]">
          <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
              <CircleQuestion className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Need help finding something?
              </p>

              <p className="mt-0.5 text-xs leading-5 text-gray-500">
                Head back home and explore everything Mess Manager has to offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
