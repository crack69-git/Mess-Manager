import MessOption from "@/Components/UserSection/MessOption";
import {
  Calendar,
  ChevronDown,
  LocationArrowFill,
  Person,
  Star,
} from "@gravity-ui/icons";

import { Button, Avatar, Chip, Separator } from "@heroui/react";

import {
  FiCoffee,
  FiHome,
  FiMoreVertical,
  FiPhone,
  FiUserPlus,
  FiUsers,
  FiWifi,
} from "react-icons/fi";

const messInfo = {
  name: "Green View Mess",
  location: "GEC, Chittagong",
  type: "Bachelor",
  monthlyCost: "৳ 4,500",
  meals: "3 Meals",
  members: 18,
  capacity: 25,
  rating: 4.8,
  joinedDate: "January 2026",
  image:
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
};

const members = [
  {
    id: 1,
    name: "Rakib Hasan",
    role: "Mess Manager",
    room: "Room 201",
    phone: "+880 1712-345678",
    avatar: "https://i.pravatar.cc/150?img=11",
    status: "Admin",
  },
  {
    id: 2,
    name: "Arif Rahman",
    role: "Member",
    room: "Room 202",
    phone: "+880 1812-456789",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "Active",
  },
  {
    id: 3,
    name: "Sakib Ahmed",
    role: "Member",
    room: "Room 203",
    phone: "+880 1912-567890",
    avatar: "https://i.pravatar.cc/150?img=13",
    status: "Active",
  },
  {
    id: 4,
    name: "Tanvir Islam",
    role: "Member",
    room: "Room 204",
    phone: "+880 1612-678901",
    avatar: "https://i.pravatar.cc/150?img=14",
    status: "Active",
  },
  {
    id: 5,
    name: "Fahim Chowdhury",
    role: "Member",
    room: "Room 205",
    phone: "+880 1512-789012",
    avatar: "https://i.pravatar.cc/150?img=15",
    status: "Active",
  },
  {
    id: 6,
    name: "Nayeem Hasan",
    role: "Member",
    room: "Room 206",
    phone: "+880 1812-890123",
    avatar: "https://i.pravatar.cc/150?img=16",
    status: "Active",
  },
  {
    id: 7,
    name: "Mahin Kabir",
    role: "Member",
    room: "Room 207",
    phone: "+880 1912-901234",
    avatar: "https://i.pravatar.cc/150?img=17",
    status: "Active",
  },
  {
    id: 8,
    name: "Rafiul Islam",
    role: "Member",
    room: "Room 208",
    phone: "+880 1612-012345",
    avatar: "https://i.pravatar.cc/150?img=18",
    status: "Active",
  },
];

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
        <Icon className="size-4" />
      </div>

      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function MemberRow({ member }) {
  return (
    <div className=" group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-200 hover:border-green-100 hover:shadow-md hover:shadow-green-900/5">
      {/* Avatar */}
      <Avatar
        src={member.avatar}
        name={member.name}
        className="size-12 shrink-0"
      />

      {/* Member information */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="truncate text-sm font-bold text-gray-950">
            {member.name}
          </h3>

          {member.status === "Admin" && (
            <Chip
              size="sm"
              variant="flat"
              className={{
                base: "h-5 bg-green-50",
                content: "px-1 text-[10px] font-bold text-green-800",
              }}
            >
              Admin
            </Chip>
          )}
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
          <span>{member.role}</span>

          <span className="size-1 rounded-full bg-gray-300" />

          <span>{member.room}</span>
        </div>
      </div>

      {/* Phone */}
      <div className="hidden items-center gap-2 text-xs text-gray-400 lg:flex">
        <FiPhone className="size-3.5" />
        {member.phone}
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

export default function MyMessPage() {
  const availableSeats = messInfo.capacity - messInfo.members;

  return (
    <main className="min-h-screen  bg-gray-50">
      {/* Decorative background */}
      <div className="pointer-events-none fixed -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* =====================================================
              PAGE HEADER
          ====================================================== */}
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-900">
                My Mess
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Your mess
                <span className="text-green-800"> community.</span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                Manage your mess information, view your roommates and keep track
                of your current mess community.
              </p>
            </div>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}
          <div className="mt-9 grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
            {/* ===================================================
                LEFT - MESS INFORMATION
            ==================================================== */}
            <section className="h-fit overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-sm">
              {/* Mess Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={messInfo.image}
                  alt={messInfo.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-950/10 to-transparent" />

                {/* Mess type */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-green-900 shadow-sm backdrop-blur-md">
                    {messInfo.type}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-900">
                  <Star className="size-3.5 text-yellow-500" />
                  {messInfo.rating}
                </div>

                {/* Name */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h2 className="text-2xl font-bold text-white">
                    {messInfo.name}
                  </h2>

                  <div className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
                    <LocationArrowFill className="size-3.5" />
                    {messInfo.location}
                  </div>
                </div>
              </div>

              {/* Mess details */}
              <div className="p-5">
                {/* Capacity */}
                <div className="rounded-2xl bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FiUsers className="size-4 text-green-700" />

                      <span className="text-sm font-semibold text-gray-800">
                        Mess Capacity
                      </span>
                    </div>

                    <span className="text-sm font-bold text-gray-950">
                      {messInfo.members}/{messInfo.capacity}
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-green-700"
                      style={{
                        width: `${
                          (messInfo.members / messInfo.capacity) * 100
                        }%`,
                      }}
                    />
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    {availableSeats} seats currently available
                  </p>
                </div>

                {/* Information */}
                <div className="mt-6 space-y-5">
                  <InfoItem
                    icon={FiHome}
                    label="Mess Type"
                    value={messInfo.type}
                  />

                  <InfoItem
                    icon={FiCoffee}
                    label="Meals"
                    value={messInfo.meals}
                  />

                  <InfoItem
                    icon={Calendar}
                    label="Joined Mess"
                    value={messInfo.joinedDate}
                  />

                  <InfoItem
                    icon={Person}
                    label="Monthly Cost"
                    value={`${messInfo.monthlyCost} / month`}
                  />

                  <InfoItem
                    icon={FiWifi}
                    label="Facilities"
                    value="WiFi, Kitchen, Dining"
                  />
                </div>

                <Separator className="my-6" />

                {/* Bottom actions */}
                <div className="flex gap-3">
                  <Button className="h-11 flex-1 rounded-xl bg-green-800 font-bold text-white shadow-sm shadow-green-900/10">
                    View Details
                  </Button>
                  <MessOption />
                </div>
              </div>
            </section>

            {/* ===================================================
                RIGHT - MEMBERS
            ==================================================== */}
            <section className="min-w-0">
              {/* Members header */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-gray-950">
                      Mess Members
                    </h2>

                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-800">
                      {messInfo.members}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-gray-400">
                    People currently living in {messInfo.name}
                  </p>
                </div>

                <Button className="h-11 rounded-xl bg-green-800 px-5 font-bold text-white shadow-sm shadow-green-900/10">
                  <FiUserPlus className="size-4" />
                  Invite Member
                </Button>
              </div>

              {/* Small stats */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                      <FiUsers className="size-4" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Members</p>
                      <p className="mt-0.5 text-lg font-bold text-gray-950">
                        {messInfo.members}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                      <FiHome className="size-4" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Rooms</p>
                      <p className="mt-0.5 text-lg font-bold text-gray-950">
                        8
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                      <FiCoffee className="size-4" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Meal Plan</p>
                      <p className="mt-0.5 text-lg font-bold text-gray-950">
                        3 Meals
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Members list */}
              <div className="mt-6 space-y-3">
                {members.map((member) => (
                  <MemberRow key={member.id} member={member} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
