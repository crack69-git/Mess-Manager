import {
  ArrowUpRightFromSquare,
  Calendar,
  ChevronRight,
  LocationArrowFill,
  Star,
} from "@gravity-ui/icons";

import { Button, Separator } from "@heroui/react";

import {
  FiCheck,
  FiClock,
  FiCoffee,
  FiCreditCard,
  FiDroplet,
  FiHome,
  FiMapPin,
  FiPhone,
  FiShield,
  FiShoppingBag,
  FiTrash2,
  FiUsers,
  FiWifi,
  FiZap,
} from "react-icons/fi";

const mess = {
  name: "Green View Mess",
  location: "GEC, Chittagong",
  address: "GEC Circle, O.R. Nizam Road, Chittagong",
  rating: 4.8,
  reviews: 42,
  members: 18,
  capacity: 25,
  availableSeats: 7,
  monthlyCost: "৳ 4,500",
  meals: "3 Meals",
  type: "Bachelor",
  established: "January 2024",
  image:
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85",
};

const facilities = [
  {
    icon: FiWifi,
    title: "High Speed Wi-Fi",
    description: "Reliable internet connection",
  },
  {
    icon: FiHome,
    title: "Furnished Rooms",
    description: "Bed, table and storage",
  },
  {
    icon: FiCoffee,
    title: "Dining Area",
    description: "Shared dining space",
  },
  {
    icon: FiZap,
    title: "24/7 Electricity",
    description: "Backup power available",
  },
  {
    icon: FiShield,
    title: "Secure Environment",
    description: "Safe and monitored",
  },
  {
    icon: FiClock,
    title: "Flexible Schedule",
    description: "Convenient meal timing",
  },
];

const meals = [
  {
    day: "Breakfast",
    time: "8:00 AM — 10:00 AM",
    menu: "Paratha, egg, vegetables & tea",
  },
  {
    day: "Lunch",
    time: "1:00 PM — 3:00 PM",
    menu: "Rice, dal, vegetables & chicken/fish",
  },
  {
    day: "Dinner",
    time: "8:00 PM — 10:00 PM",
    menu: "Rice/roti, vegetables & curry",
  },
];

const bills = [
  {
    icon: FiCoffee,
    title: "Meal & Grocery",
    description: "Monthly food and grocery expenses",
    amount: "৳ 2,200",
  },
  {
    icon: FiZap,
    title: "Electricity",
    description: "Shared electricity bill",
    amount: "৳ 700",
  },
  {
    icon: FiDroplet,
    title: "Water",
    description: "Monthly water bill",
    amount: "৳ 250",
  },
  {
    icon: FiWifi,
    title: "Internet",
    description: "Wi-Fi and internet connection",
    amount: "৳ 500",
  },
  {
    icon: FiHome,
    title: "Gas",
    description: "Cooking gas expense",
    amount: "৳ 350",
  },
  {
    icon: FiTrash2,
    title: "Cleaning & Maintenance",
    description: "Common area cleaning and supplies",
    amount: "৳ 300",
  },
  {
    icon: FiShoppingBag,
    title: "Other Shared Expenses",
    description: "Small repairs and household items",
    amount: "৳ 200",
  },
];

const rules = [
  "Keep shared spaces clean and organized.",
  "Monthly payment should be completed within the agreed date.",
  "Inform the manager before staying away for several days.",
  "Respect other members and maintain a peaceful environment.",
  "Follow the shared meal and working-day schedule.",
];

export default function MessDetailsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Discover Mess</span>

            <ChevronRight className="size-3" />

            <span className="font-semibold text-gray-700">{mess.name}</span>
          </div>

          {/* =========================================================
              HERO
          ========================================================== */}
          <section className="mt-6 overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[280px] overflow-hidden sm:h-[380px] lg:h-[430px]">
              <img
                src={mess.image}
                alt={mess.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent" />

              {/* Tags */}
              <div className="absolute left-5 top-5 flex flex-wrap gap-2 sm:left-7 sm:top-7">
                <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-green-900 shadow-sm backdrop-blur-md">
                  Popular
                </span>

                <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-green-900 shadow-sm backdrop-blur-md">
                  Clean
                </span>
              </div>

              {/* Rating */}
              <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-gray-900 shadow-sm sm:right-7 sm:top-7">
                <Star className="size-3.5 text-yellow-500" />

                {mess.rating}

                <span className="font-medium text-gray-400">
                  ({mess.reviews})
                </span>
              </div>

              {/* Hero content */}
              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-7 sm:right-7">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {mess.type} Mess
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {mess.name}
                    </h1>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/75">
                      <span className="flex items-center gap-2">
                        <LocationArrowFill className="size-4 text-green-300" />
                        {mess.location}
                      </span>

                      <span className="flex items-center gap-2">
                        <FiUsers className="size-4 text-green-300" />
                        {mess.members}/{mess.capacity} members
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-green-50 text-green-800">
                      <FiUsers className="size-4" />
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-400">
                        Available seats
                      </p>

                      <p className="text-sm font-bold text-green-800">
                        {mess.availableSeats} seats left
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
              MAIN CONTENT
          ========================================================== */}
          <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_350px]">
            {/* =======================================================
                LEFT CONTENT
            ======================================================== */}
            <div className="space-y-6">
              {/* About */}
              <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                <div>
                  <span className="inline-flex rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-green-800">
                    About this mess
                  </span>

                  <h2 className="mt-4 text-xl font-bold text-gray-950">
                    A comfortable place to live and grow together.
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    Green View Mess is a student-friendly shared living
                    community located in GEC, Chittagong. The mess focuses on
                    comfortable living, regular meals, a clean environment and a
                    friendly community atmosphere.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    With furnished rooms, shared dining facilities and essential
                    utilities, it is designed for students and bachelors looking
                    for a convenient place to stay.
                  </p>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <InfoBox label="Monthly Cost" value={mess.monthlyCost} />

                  <InfoBox label="Meal Plan" value={mess.meals} />

                  <InfoBox label="Mess Type" value={mess.type} />
                </div>
              </section>

              {/* =====================================================
                  FACILITIES
              ====================================================== */}
              <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                <SectionHeading
                  title="Facilities & Amenities"
                  subtitle="Everything you need for comfortable daily living."
                  icon={<FiHome className="size-4" />}
                />

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {facilities.map((facility) => {
                    const Icon = facility.icon;

                    return (
                      <div
                        key={facility.title}
                        className="group rounded-2xl border border-gray-100 p-4 transition hover:border-green-100 hover:bg-green-50/40"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800 transition group-hover:bg-green-100">
                            <Icon className="size-4" />
                          </div>

                          <div>
                            <h3 className="text-sm font-bold text-gray-900">
                              {facility.title}
                            </h3>

                            <p className="mt-0.5 text-xs text-gray-400">
                              {facility.description}
                            </p>
                          </div>

                          <FiCheck className="ml-auto size-4 text-green-600" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* =====================================================
                  MEAL PLAN
              ====================================================== */}
              <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                <SectionHeading
                  title="Daily Meal Plan"
                  subtitle="Regular meals are prepared for mess members."
                  icon={<FiCoffee className="size-4" />}
                />

                <div className="mt-6 space-y-3">
                  {meals.map((meal) => (
                    <div
                      key={meal.day}
                      className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-800 text-white">
                          <FiCoffee className="size-4" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-gray-950">
                            {meal.day}
                          </h3>

                          <p className="mt-1 text-xs text-gray-400">
                            {meal.menu}
                          </p>
                        </div>

                        <span className="w-fit rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-gray-600 shadow-sm">
                          {meal.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* =====================================================
                  MONTHLY BILL BREAKDOWN
              ====================================================== */}
              <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                <SectionHeading
                  title="Monthly Bill Breakdown"
                  subtitle="Estimated shared expenses for each month."
                  icon={<FiCreditCard className="size-4" />}
                />

                <div className="mt-6 space-y-3">
                  {bills.map((bill) => {
                    const Icon = bill.icon;

                    return (
                      <BillRow
                        key={bill.title}
                        icon={<Icon className="size-4" />}
                        title={bill.title}
                        description={bill.description}
                        amount={bill.amount}
                      />
                    );
                  })}
                </div>

                <Separator className="my-5" />

                {/* Total shared bills */}
                <div className="rounded-2xl bg-green-50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-500">
                        Estimated shared bills
                      </p>

                      <p className="mt-1 text-xl font-bold text-gray-950">
                        ৳ 2,300
                        <span className="ml-1 text-xs font-medium text-gray-400">
                          /month
                        </span>
                      </p>
                    </div>

                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-green-800 shadow-sm">
                      <FiCreditCard className="size-5" />
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-gray-400">
                    Bills are shared among current mess members and may vary
                    depending on actual monthly usage.
                  </p>
                </div>

                {/* Bill note */}
                <div className="mt-4 flex gap-3 rounded-xl border border-yellow-100 bg-yellow-50/50 p-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700">
                    <FiClock className="size-3.5" />
                  </div>

                  <p className="text-xs leading-5 text-gray-500">
                    Electricity, water and other utility expenses can change
                    from month to month depending on usage.
                  </p>
                </div>
              </section>

              {/* =====================================================
                  MEMBERS
              ====================================================== */}
              {/* <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                <SectionHeading
                  title="Mess Members"
                  subtitle={`${mess.members} people currently live in this mess.`}
                  icon={<FiUsers className="size-4" />}
                />

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {members.map((member, index) => (
                    <div
                      key={member.name}
                      className="flex items-center gap-3 rounded-2xl border border-gray-100 p-4 transition hover:border-green-100 hover:bg-green-50/30"
                    >
                      <div className="flex size-11 items-center justify-center rounded-xl bg-green-100 text-sm font-bold text-green-800">
                        {member.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-gray-900">
                          {member.name}
                        </p>

                        <p className="mt-0.5 text-xs text-gray-400">
                          {member.role}
                        </p>
                      </div>

                      {index === 0 && (
                        <span className="rounded-full bg-green-50 px-2.5 py-1 text-[9px] font-bold text-green-700">
                          Manager
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-5 flex items-center gap-2 text-xs font-bold text-green-800"
                >
                  View all members
                  <ChevronRight className="size-3.5" />
                </button>
              </section> */}

              {/* =====================================================
                  RULES
              ====================================================== */}
              <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                <SectionHeading
                  title="Mess Rules"
                  subtitle="A few simple guidelines for everyone."
                  icon={<FiShield className="size-4" />}
                />

                <div className="mt-6 space-y-3">
                  {rules.map((rule, index) => (
                    <div
                      key={rule}
                      className="flex gap-3 rounded-xl bg-gray-50/70 p-3.5"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-green-100 text-[10px] font-bold text-green-800">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-gray-500">{rule}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* =======================================================
                RIGHT SIDEBAR
            ======================================================== */}
            <aside className="space-y-5">
              {/* =====================================================
                  COST CARD
              ====================================================== */}
              <div className="sticky top-6 rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-xs text-gray-400">Estimated monthly cost</p>

                <div className="mt-1 flex items-end gap-1">
                  <span className="text-3xl font-bold text-gray-950">
                    ৳ 4,500
                  </span>

                  <span className="mb-1 text-xs font-medium text-gray-400">
                    / month
                  </span>
                </div>

                {/* Cost summary */}
                <div className="mt-5 rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs font-bold text-gray-700">
                    Cost summary
                  </p>

                  <div className="mt-4 space-y-3">
                    <CostRow title="Meal & Grocery" amount="৳ 2,200" />

                    <CostRow title="Electricity" amount="৳ 700" />

                    <CostRow title="Water" amount="৳ 250" />

                    <CostRow title="Internet" amount="৳ 500" />

                    <CostRow title="Gas" amount="৳ 350" />

                    <CostRow title="Cleaning & Maintenance" amount="৳ 300" />

                    <CostRow title="Other Expenses" amount="৳ 200" />
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-950">
                      Estimated Total
                    </span>

                    <span className="text-base font-bold text-green-800">
                      ৳ 4,500
                    </span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 p-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-white text-green-700">
                    <FiUsers className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-green-900">
                      {mess.availableSeats} seats available
                    </p>

                    <p className="text-[10px] text-green-700/60">
                      Current capacity: {mess.members}/{mess.capacity}
                    </p>
                  </div>
                </div>

                <Button className="mt-5 h-12 w-full rounded-xl bg-green-800 font-bold text-white shadow-sm shadow-green-900/10">
                  Request to Join
                </Button>

                <Button
                  variant="flat"
                  className="mt-2 h-11 w-full rounded-xl bg-gray-50 font-semibold text-gray-700"
                >
                  <FiPhone className="size-4" />
                  Contact Manager
                </Button>

                <p className="mt-4 text-center text-[10px] leading-5 text-gray-400">
                  Joining requests are reviewed by the mess manager.
                </p>
              </div>

              {/* =====================================================
                  LOCATION
              ====================================================== */}
              <div className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm">
                <SectionHeading
                  title="Location"
                  subtitle="Find us around GEC."
                  icon={<FiMapPin className="size-4" />}
                />

                <div className="mt-5 overflow-hidden rounded-2xl bg-gray-100">
                  <div className="flex h-40 items-center justify-center bg-green-50">
                    <div className="text-center">
                      <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-green-800 text-white shadow-sm">
                        <LocationArrowFill className="size-5" />
                      </div>

                      <p className="mt-3 text-xs font-bold text-gray-800">
                        GEC, Chittagong
                      </p>

                      <p className="mt-1 text-[10px] text-gray-400">
                        Approximate location
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
                    <FiMapPin className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-700">
                      Address
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      {mess.address}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 flex items-center gap-2 text-xs font-bold text-green-800"
                >
                  Open in Maps
                  <ArrowUpRightFromSquare className="size-3.5" />
                </button>
              </div>

              {/* =====================================================
                  MANAGER
              ====================================================== */}
              <div className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-xs text-gray-400">Mess manager</p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-green-100 text-sm font-bold text-green-800">
                    RH
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      Rakib Hasan
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">Mess Manager</p>
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-gray-500">
                    <FiPhone className="size-3.5" />
                    Contact available
                  </span>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-[9px] font-bold text-green-700">
                    Active
                  </span>
                </div>
              </div>

              {/* =====================================================
                  MESS STATS
              ====================================================== */}
              <div className="rounded-[1.75rem] bg-green-800 p-6 text-white">
                <p className="text-xs text-white/50">Mess overview</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Stat value={mess.members} label="Members" />

                  <Stat value={mess.capacity} label="Capacity" />

                  <Stat value={mess.rating} label="Rating" />

                  <Stat value="3" label="Meals / day" />
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                  <Calendar className="size-3.5" />
                  Established {mess.established}
                </div>
              </div>
            </aside>
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-col gap-2 text-center text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <span>Mess Buddy · Your mess management companion</span>

            <span>Green View Mess · GEC, Chittagong</span>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ===============================================================
   SECTION HEADING
================================================================ */

function SectionHeading({ title, subtitle, icon }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-lg font-bold text-gray-950">{title}</h2>

        <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
      </div>

      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
        {icon}
      </div>
    </div>
  );
}

/* ===============================================================
   INFO BOX
================================================================ */

function InfoBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4">
      <p className="text-xs text-gray-400">{label}</p>

      <p className="mt-1.5 text-sm font-bold text-gray-950">{value}</p>
    </div>
  );
}

/* ===============================================================
   BILL ROW
================================================================ */

function BillRow({ icon, title, description, amount }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-4 transition hover:border-green-100 hover:bg-green-50/30">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-gray-900">{title}</p>

        <p className="mt-0.5 text-xs text-gray-400">{description}</p>
      </div>

      <p className="text-sm font-bold text-gray-950">{amount}</p>
    </div>
  );
}

/* ===============================================================
   COST ROW
================================================================ */

function CostRow({ title, amount }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-xs text-gray-500">{title}</span>

      <span className="text-xs font-bold text-gray-800">{amount}</span>
    </div>
  );
}

/* ===============================================================
   STAT
================================================================ */

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/10 p-3">
      <p className="text-xl font-bold">{value}</p>

      <p className="mt-0.5 text-[10px] text-white/50">{label}</p>
    </div>
  );
}
