"use client";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  LocationArrowFill,
  Person,
} from "@gravity-ui/icons";

import { Button, Chip, Separator } from "@heroui/react";

import {
  FiCoffee,
  FiEdit3,
  FiInfo,
  FiMoon,
  FiSun,
  FiUsers,
} from "react-icons/fi";

const weekDays = [
  {
    day: "MON",
    date: "28",
    month: "Sep",
    fullDate: "Monday, September 28",
  },
  {
    day: "TUE",
    date: "29",
    month: "Sep",
    fullDate: "Tuesday, September 29",
  },
  {
    day: "WED",
    date: "30",
    month: "Sep",
    fullDate: "Wednesday, September 30",
  },
  {
    day: "THU",
    date: "01",
    month: "Oct",
    fullDate: "Thursday, October 1",
    today: true,
  },
  {
    day: "FRI",
    date: "02",
    month: "Oct",
    fullDate: "Friday, October 2",
  },
  {
    day: "SAT",
    date: "03",
    month: "Oct",
    fullDate: "Saturday, October 3",
  },
  {
    day: "SUN",
    date: "04",
    month: "Oct",
    fullDate: "Sunday, October 4",
  },
];

const meals = [
  {
    id: 1,
    type: "Breakfast",
    icon: FiSun,
    time: "7:30 AM – 9:30 AM",
    status: "Served",
    description: "A simple and filling breakfast to start your day.",
    items: ["Paratha", "Egg Bhaji", "Vegetable Curry", "Tea"],
    calories: "520 kcal",
  },
  {
    id: 2,
    type: "Lunch",
    icon: FiCoffee,
    time: "1:00 PM – 2:30 PM",
    status: "Upcoming",
    description: "Freshly prepared lunch served at the mess dining area.",
    items: [
      "Steamed Rice",
      "Chicken Curry",
      "Mixed Vegetables",
      "Dal",
      "Salad",
    ],
    calories: "740 kcal",
  },
  {
    id: 3,
    type: "Dinner",
    icon: FiMoon,
    time: "8:00 PM – 9:30 PM",
    status: "Upcoming",
    description: "A balanced dinner with rice, protein and vegetables.",
    items: ["Rice", "Fish Curry", "Potato Bhaji", "Dal", "Cucumber Salad"],
    calories: "680 kcal",
  },
];

const previousMeals = [
  {
    day: "Wednesday",
    date: "30 Sep",
    meals: "3 meals",
    highlight: "Beef Curry",
  },
  {
    day: "Tuesday",
    date: "29 Sep",
    meals: "3 meals",
    highlight: "Chicken Roast",
  },
  {
    day: "Monday",
    date: "28 Sep",
    meals: "2 meals",
    highlight: "Egg Curry",
  },
];

function MealCard({ meal }) {
  const Icon = meal.icon;
  const isServed = meal.status === "Served";

  return (
    <div
      className={`group rounded-[1.5rem] border bg-white p-5 transition-all duration-200 ${
        isServed
          ? "border-gray-100"
          : "border-green-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-900/5"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex size-11 items-center justify-center rounded-xl ${
              isServed
                ? "bg-gray-100 text-gray-500"
                : "bg-green-50 text-green-800"
            }`}
          >
            <Icon className="size-5" />
          </div>

          <div>
            <h3 className="font-bold text-gray-950">{meal.type}</h3>

            <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
              <Clock className="size-3.5" />
              {meal.time}
            </div>
          </div>
        </div>

        <Chip
          size="sm"
          variant="flat"
          className={{
            base: isServed ? "bg-gray-100 h-7" : "bg-green-50 h-7",
            content: isServed
              ? "text-gray-500 px-2 font-bold text-[10px]"
              : "text-green-800 px-2 font-bold text-[10px]",
          }}
        >
          {meal.status}
        </Chip>
      </div>

      <p className="mt-5 text-sm leading-6 text-gray-500">{meal.description}</p>

      <Separator className="my-5" />

      {/* Food items */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Today's menu
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {meal.items.map((item) => (
            <span
              key={item}
              className="rounded-lg bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-gray-400">Estimated calories</span>

        <span className="text-sm font-bold text-gray-900">{meal.calories}</span>
      </div>
    </div>
  );
}

function DayButton({ day }) {
  return (
    <button
      type="button"
      className={`min-w-[72px] flex-1 rounded-2xl border px-3 py-3 text-center transition-all ${
        day.today
          ? "border-green-800 bg-green-800 text-white shadow-md shadow-green-900/10"
          : "border-gray-100 bg-white text-gray-600 hover:border-green-100 hover:bg-green-50/50"
      }`}
    >
      <p
        className={`text-[10px] font-bold tracking-wider ${
          day.today ? "text-white/70" : "text-gray-400"
        }`}
      >
        {day.day}
      </p>

      <p className="mt-1 text-lg font-bold">{day.date}</p>

      <p
        className={`text-[10px] ${
          day.today ? "text-white/70" : "text-gray-400"
        }`}
      >
        {day.month}
      </p>

      {day.today && (
        <span className="mx-auto mt-2 block size-1.5 rounded-full bg-white" />
      )}
    </button>
  );
}

export default function MealPlanPage() {
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
                Meal Plan
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                What's on the
                <span className="block text-green-800">menu today?</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                Check your daily meals, explore the weekly menu and keep track
                of what's being served at your mess.
              </p>
            </div>

            {/* Mess indicator */}
            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
              <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                <FiUsers className="size-4" />
              </div>

              <div>
                <p className="text-[11px] text-gray-400">Current Mess</p>

                <p className="text-sm font-bold text-gray-900">
                  Green View Mess
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              DATE NAVIGATION
          ====================================================== */}
          <div className="mt-9 rounded-[1.75rem] border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  This Week
                </p>

                <h2 className="mt-1 text-lg font-bold text-gray-950">
                  September 28 – October 4, 2026
                </h2>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <Button
                  isIconOnly
                  variant="flat"
                  className="size-10 min-w-10 rounded-xl bg-gray-50 text-gray-600"
                >
                  <ChevronLeft className="size-4" />
                </Button>

                <Button
                  variant="flat"
                  className="h-10 rounded-xl bg-gray-50 px-4 text-sm font-semibold text-gray-700"
                >
                  Today
                </Button>

                <Button
                  isIconOnly
                  variant="flat"
                  className="size-10 min-w-10 rounded-xl bg-gray-50 text-gray-600"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>

            {/* Days */}
            <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
              {weekDays.map((day) => (
                <DayButton key={day.date + day.month} day={day} />
              ))}
            </div>
          </div>

          {/* =====================================================
              TODAY HEADER
          ====================================================== */}
          <div className="mt-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-gray-950">
                  Thursday, October 1
                </h2>

                <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-800">
                  Today
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                <LocationArrowFill className="size-3.5 text-green-700" />
                GEC, Chittagong
              </div>
            </div>

            <Button
              variant="flat"
              className="h-10 rounded-xl bg-white px-4 text-sm font-semibold text-gray-600 shadow-sm"
            >
              <FiEdit3 className="size-4" />
              Edit Preferences
            </Button>
          </div>

          {/* =====================================================
              MAIN GRID
          ====================================================== */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
            {/* ===================================================
                MEALS
            ==================================================== */}
            <section className="space-y-4">
              {meals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </section>

            {/* ===================================================
                RIGHT SUMMARY
            ==================================================== */}
            <aside className="h-fit space-y-4">
              {/* Daily Summary */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Today's Summary</p>

                    <h3 className="mt-1 text-lg font-bold text-gray-950">
                      3 Meals
                    </h3>
                  </div>

                  <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <FiCoffee className="size-4" />
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Breakfast</span>

                    <span className="text-xs font-bold text-gray-500">
                      Served
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Lunch</span>

                    <span className="text-xs font-bold text-green-700">
                      Upcoming
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Dinner</span>

                    <span className="text-xs font-bold text-green-700">
                      Upcoming
                    </span>
                  </div>
                </div>
              </div>

              {/* Monthly Cost */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <p className="text-xs text-gray-400">Meal Plan Cost</p>

                <p className="mt-1 text-2xl font-bold text-gray-950">৳ 4,500</p>

                <p className="mt-1 text-xs text-gray-400">
                  Included in your monthly mess cost
                </p>

                <div className="mt-5 rounded-xl bg-green-50 p-3">
                  <div className="flex items-start gap-2">
                    <FiInfo className="mt-0.5 size-4 shrink-0 text-green-700" />

                    <p className="text-xs leading-5 text-green-900">
                      Your current plan includes breakfast, lunch and dinner
                      every day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Meal Preferences */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-950">
                    Meal Preferences
                  </h3>

                  <button
                    type="button"
                    className="text-xs font-bold text-green-800 hover:text-green-900"
                  >
                    Edit
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Breakfast</span>

                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-800">
                      Included
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Lunch</span>

                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-800">
                      Included
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Dinner</span>

                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-800">
                      Included
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* =====================================================
              PREVIOUS MEALS
          ====================================================== */}
          <section className="mt-10">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-950">
                  Previous Meals
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Recently served meals from your mess.
                </p>
              </div>

              <button
                type="button"
                className="hidden text-sm font-bold text-green-800 sm:block"
              >
                View all
              </button>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {previousMeals.map((item) => (
                <div
                  key={item.date}
                  className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {item.day}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        {item.date}
                      </p>
                    </div>

                    <span className="rounded-full bg-gray-50 px-2.5 py-1 text-[10px] font-bold text-gray-500">
                      {item.meals}
                    </span>
                  </div>

                  <Separator className="my-4" />

                  <p className="text-xs text-gray-400">Highlight meal</p>

                  <p className="mt-1 text-sm font-bold text-gray-800">
                    {item.highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* =====================================================
              BOTTOM CTA
          ====================================================== */}
          <div className="mt-8 rounded-[1.75rem] border border-green-100 bg-green-50/60 p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-green-800 shadow-sm">
                  <FiCoffee className="size-5" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-950">
                    Have a meal preference?
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Update your preferences so your mess manager knows what you
                    need.
                  </p>
                </div>
              </div>

              <Button className="h-11 rounded-xl bg-green-800 px-5 font-bold text-white shadow-sm">
                Update Preferences
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
