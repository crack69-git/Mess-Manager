import {
  ChevronDown,
  LocationArrowFill,
  Magnifier,
  Person,
  ShoppingBag,
  Star,
} from "@gravity-ui/icons";
import { Filter } from "lucide-react";

const messData = [
  {
    id: 1,
    name: "Green View Mess",
    location: "GEC, Chittagong",
    members: 18,
    capacity: 25,
    rating: 4.8,
    monthlyCost: "৳ 4,500",
    meals: "3 Meals",
    type: "Bachelor",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    tags: ["Popular", "Clean"],
  },
  {
    id: 2,
    name: "Sunrise Mess",
    location: "2 No Gate, Chittagong",
    members: 14,
    capacity: 20,
    rating: 4.7,
    monthlyCost: "৳ 4,000",
    meals: "3 Meals",
    type: "Student",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    tags: ["Student Friendly"],
  },
  {
    id: 3,
    name: "Lake View Residence",
    location: "Khulshi, Chittagong",
    members: 11,
    capacity: 16,
    rating: 4.9,
    monthlyCost: "৳ 5,200",
    meals: "3 Meals",
    type: "Professional",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80",
    tags: ["Premium", "Quiet"],
  },
  {
    id: 4,
    name: "Campus Corner Mess",
    location: "Muradpur, Chittagong",
    members: 21,
    capacity: 25,
    rating: 4.6,
    monthlyCost: "৳ 3,800",
    meals: "3 Meals",
    type: "Student",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80",
    tags: ["Budget Friendly"],
  },
  {
    id: 5,
    name: "Green Garden Residence",
    location: "Panchlaish, Chittagong",
    members: 16,
    capacity: 22,
    rating: 4.8,
    monthlyCost: "৳ 4,800",
    meals: "2 Meals",
    type: "Student",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    tags: ["Peaceful", "Popular"],
  },
  {
    id: 6,
    name: "City Boys Mess",
    location: "Nasirabad, Chittagong",
    members: 19,
    capacity: 24,
    rating: 4.5,
    monthlyCost: "৳ 3,600",
    meals: "3 Meals",
    type: "Bachelor",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    tags: ["Affordable"],
  },
  {
    id: 7,
    name: "Comfort Nest",
    location: "O.R. Nizam Road",
    members: 9,
    capacity: 14,
    rating: 4.9,
    monthlyCost: "৳ 5,500",
    meals: "3 Meals",
    type: "Professional",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    tags: ["Premium", "Clean"],
  },
  {
    id: 8,
    name: "Unity Bachelor Mess",
    location: "Bahaddarhat, Chittagong",
    members: 17,
    capacity: 20,
    rating: 4.4,
    monthlyCost: "৳ 3,500",
    meals: "2 Meals",
    type: "Bachelor",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    tags: ["Budget Friendly"],
  },
  {
    id: 9,
    name: "Royal Heights Mess",
    location: "Jamal Khan, Chittagong",
    members: 12,
    capacity: 18,
    rating: 4.7,
    monthlyCost: "৳ 4,900",
    meals: "3 Meals",
    type: "Professional",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    tags: ["Premium", "Popular"],
  },
  {
    id: 10,
    name: "Home Sweet Mess",
    location: "Agrabad, Chittagong",
    members: 13,
    capacity: 18,
    rating: 4.6,
    monthlyCost: "৳ 4,200",
    meals: "3 Meals",
    type: "Student",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    tags: ["Home Like"],
  },
];

function MessCard({ mess }) {
  const availableSeats = mess.capacity - mess.members;

  return (
    <div className=" group overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-xl hover:shadow-green-900/5">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={mess.image}
          alt={mess.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />

        {/* Tags */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {mess.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 bg-white/90 px-3 py-1 text-[11px] font-bold text-green-900 shadow-sm backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-900">
          <Star className="size-3.5 text-yellow-500" />
          {mess.rating}
        </div>

        {/* Name */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-lg font-bold text-white">{mess.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <LocationArrowFill className="size-4 shrink-0 text-green-700" />

          <span>{mess.location}</span>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-gray-100 rounded-2xl bg-gray-50 py-3">
          <div className="text-center">
            <p className="text-xs text-gray-400">Members</p>

            <p className="mt-1 text-sm font-bold text-gray-900">
              {mess.members}/{mess.capacity}
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-400">Meals</p>

            <p className="mt-1 text-sm font-bold text-gray-900">{mess.meals}</p>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-400">Available</p>

            <p className="mt-1 text-sm font-bold text-green-800">
              {availableSeats}
            </p>
          </div>
        </div>

        {/* Price + Join */}
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-gray-400">Monthly cost</p>

            <p className="mt-0.5 text-xl font-bold text-gray-950">
              {mess.monthlyCost}

              <span className="ml-1 text-xs font-medium text-gray-400">
                /month
              </span>
            </p>
          </div>

          {/* Static button */}
          <button
            type="button"
            className="rounded-xl bg-green-800 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-green-900/10 transition hover:bg-green-900 active:scale-95"
          >
            Join Mess
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DiscoverMessPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-900">
              Discover Mess
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Find your perfect
              <span className="block text-green-800">mess community.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Explore different mess communities, compare their facilities and
              find a place that feels right for you.
            </p>
          </div>

          {/* Static Search / Filter UI */}
          <div className="mt-9 rounded-[1.75rem] border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row">
              {/* Search */}
              <div className="relative flex-1">
                <Magnifier className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search mess by name or location..."
                  className="h-12 w-full rounded-xl border border-gray-100 bg-gray-50 pl-12 pr-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-green-200 focus:bg-white focus:ring-4 focus:ring-green-50"
                />
              </div>

              {/* Location */}
              <button
                type="button"
                className="flex h-12 items-center justify-between gap-5 rounded-xl border border-gray-100 bg-gray-50 px-4 text-sm font-medium text-gray-600 lg:w-44"
              >
                <span className="flex items-center gap-2">
                  <LocationArrowFill className="size-4 text-green-700" />
                  All Areas
                </span>

                <ChevronDown className="size-4 text-gray-400" />
              </button>

              {/* Mess Type */}
              <button
                type="button"
                className="flex h-12 items-center justify-between gap-5 rounded-xl border border-gray-100 bg-gray-50 px-4 text-sm font-medium text-gray-600 lg:w-40"
              >
                <span className="flex items-center gap-2">
                  <Person className="size-4 text-green-700" />
                  All Types
                </span>

                <ChevronDown className="size-4 text-gray-400" />
              </button>

              {/* Filter */}
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-green-800 px-5 text-sm font-bold text-white"
              >
                <Filter className="size-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Results Header */}
          <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-950">
                Available Messes
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                10 mess communities available
              </p>
            </div>

            {/* Static Sort */}
            <button
              type="button"
              className="flex items-center gap-3 self-start rounded-xl border border-gray-100 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm sm:self-auto"
            >
              Recommended
              <ChevronDown className="size-4 text-gray-400" />
            </button>
          </div>

          {/* Mess Cards */}
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {messData.map((mess) => (
              <MessCard key={mess.id} mess={mess} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 rounded-[1.75rem] border border-green-100 bg-green-50/60 p-7 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-white text-green-800 shadow-sm">
              <ShoppingBag className="size-5" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-950">
              Find your new mess community
            </h3>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500">
              Choose a mess that matches your budget, location, lifestyle and
              meal preferences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
