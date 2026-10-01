"use client";

import {
  Bell,
  Calendar,
  ChevronRight,
  Gear,
  Pencil,
  ShieldCheck,
} from "@gravity-ui/icons";

import { Button, Separator, Input, Switch } from "@heroui/react";

import {
  FiCamera,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiEdit3,
  FiHome,
  FiLogOut,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
  FiUsers,
} from "react-icons/fi";

export default function ProfilePage() {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div>
            <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-900">
              My Profile
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Your account,
              <span className="block text-green-800">all in one place.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Manage your personal information, mess details and account
              preferences.
            </p>
          </div>

          {/* =====================================================
              PROFILE HERO
          ====================================================== */}
          <section className="mt-9 overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-sm">
            <div className="h-32 bg-green-800 sm:h-40" />

            <div className="px-6 pb-7 sm:px-8">
              <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="flex size-24 items-center justify-center rounded-[1.5rem] border-4 border-white bg-green-100 text-2xl font-bold text-green-800 shadow-sm sm:size-28">
                      RH
                    </div>

                    <button
                      type="button"
                      className="absolute bottom-1 right-1 flex size-8 items-center justify-center rounded-xl border-2 border-white bg-green-800 text-white shadow-sm"
                    >
                      <FiCamera className="size-3.5" />
                    </button>
                  </div>

                  <div className="pb-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-2xl font-bold text-gray-950">
                        Rakib Hasan
                      </h2>

                      <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-700">
                        Active Member
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-gray-400">
                      Member since January 2026
                    </p>
                  </div>
                </div>

                <Button
                  variant="flat"
                  className="h-10 rounded-xl bg-gray-50 px-4 font-semibold text-gray-700"
                >
                  <FiEdit3 className="size-4" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </section>

          {/* =====================================================
              MAIN GRID
          ====================================================== */}
          <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_330px]">
            {/* ===================================================
                LEFT
            ==================================================== */}
            <div className="space-y-6">
              {/* Personal Information */}
              <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-950">
                      Personal Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      Your basic account information.
                    </p>
                  </div>

                  <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <FiUser className="size-4" />
                  </div>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Full Name"
                    defaultValue="Rakib Hasan"
                    variant="bordered"
                    labelPlacement="outside"
                    classNames={{
                      label: "text-xs font-semibold text-gray-500",
                      inputWrapper: "mt-1 rounded-xl border-gray-200 bg-white",
                    }}
                  />

                  <Input
                    label="Email Address"
                    defaultValue="rakib@example.com"
                    variant="bordered"
                    labelPlacement="outside"
                    startContent={<FiMail className="size-4 text-gray-400" />}
                    classNames={{
                      label: "text-xs font-semibold text-gray-500",
                      inputWrapper: "mt-1 rounded-xl border-gray-200 bg-white",
                    }}
                  />

                  <Input
                    label="Phone Number"
                    defaultValue="+880 1712 345678"
                    variant="bordered"
                    labelPlacement="outside"
                    startContent={<FiPhone className="size-4 text-gray-400" />}
                    classNames={{
                      label: "text-xs font-semibold text-gray-500",
                      inputWrapper: "mt-1 rounded-xl border-gray-200 bg-white",
                    }}
                  />

                  <Input
                    label="Student ID"
                    defaultValue="2026-01-024"
                    isReadOnly
                    variant="bordered"
                    labelPlacement="outside"
                    classNames={{
                      label: "text-xs font-semibold text-gray-500",
                      inputWrapper:
                        "mt-1 rounded-xl border-gray-200 bg-gray-50",
                    }}
                  />
                </div>

                <div className="mt-6 flex justify-end">
                  <Button className="h-10 rounded-xl bg-green-800 px-5 text-sm font-bold text-white">
                    Save Changes
                  </Button>
                </div>
              </section>

              {/* Mess Information */}
              <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-950">
                      Mess Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      Your current mess membership details.
                    </p>
                  </div>

                  <div className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <FiHome className="size-4" />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-green-800 text-white">
                      <FiHome className="size-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-950">
                        Green View Mess
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                          <FiMapPin className="size-3.5" />
                          Mirpur, Dhaka
                        </span>

                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                          <FiUsers className="size-3.5" />8 members
                        </span>
                      </div>
                    </div>

                    <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold text-green-700">
                      Member
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-gray-100 p-4">
                    <p className="text-xs text-gray-400">Room</p>

                    <p className="mt-1 text-sm font-bold text-gray-950">
                      Room 204
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 p-4">
                    <p className="text-xs text-gray-400">Joined</p>

                    <p className="mt-1 text-sm font-bold text-gray-950">
                      Jan 12, 2026
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 p-4">
                    <p className="text-xs text-gray-400">Role</p>

                    <p className="mt-1 text-sm font-bold text-gray-950">
                      Member
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact / Emergency */}
              <section className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-950">
                      Additional Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      Optional information for mess management.
                    </p>
                  </div>

                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <FiPhone className="size-4" />
                  </div>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Emergency Contact"
                    defaultValue="Abdul Hasan"
                    variant="bordered"
                    labelPlacement="outside"
                    classNames={{
                      label: "text-xs font-semibold text-gray-500",
                      inputWrapper: "mt-1 rounded-xl border-gray-200 bg-white",
                    }}
                  />

                  <Input
                    label="Emergency Phone"
                    defaultValue="+880 1812 987654"
                    variant="bordered"
                    labelPlacement="outside"
                    classNames={{
                      label: "text-xs font-semibold text-gray-500",
                      inputWrapper: "mt-1 rounded-xl border-gray-200 bg-white",
                    }}
                  />
                </div>
              </section>

              {/* Danger zone */}
              <section className="rounded-[1.75rem] border border-red-100 bg-white p-6 sm:p-7">
                <h2 className="text-lg font-bold text-gray-950">Account</h2>

                <p className="mt-1 text-sm text-gray-400">
                  Manage your account access.
                </p>

                <Separator className="my-5" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-950">Sign out</p>

                    <p className="mt-1 text-xs text-gray-400">
                      Sign out from this device.
                    </p>
                  </div>

                  <Button
                    variant="flat"
                    className="h-10 rounded-xl bg-red-50 px-5 font-semibold text-red-600"
                  >
                    <FiLogOut className="size-4" />
                    Sign Out
                  </Button>
                </div>
              </section>
            </div>

            {/* ===================================================
                RIGHT SIDEBAR
            ==================================================== */}
            <aside className="space-y-5">
              {/* Profile completion */}
              <div className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Profile completion</p>

                    <p className="mt-1 text-2xl font-bold text-gray-950">85%</p>
                  </div>

                  <div className="relative flex size-14 items-center justify-center rounded-full border-[5px] border-green-100">
                    <span className="text-xs font-bold text-green-800">
                      85%
                    </span>
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[85%] rounded-full bg-green-700" />
                </div>

                <p className="mt-3 text-xs leading-5 text-gray-400">
                  Add your remaining profile details to complete your account.
                </p>
              </div>

              {/* Activity */}
              <div className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-bold text-gray-950">
                  Your Activity
                </h2>

                <div className="mt-5 space-y-4">
                  <ActivityItem
                    icon={FiCheckCircle}
                    title="Working duties"
                    value="18 completed"
                  />

                  <ActivityItem
                    icon={FiCreditCard}
                    title="Mess payments"
                    value="9 payments"
                  />

                  <ActivityItem
                    icon={FiClock}
                    title="Meal attendance"
                    value="92% this month"
                  />

                  <ActivityItem
                    icon={FiUsers}
                    title="Mess membership"
                    value="Since Jan 2026"
                  />
                </div>
              </div>

              {/* Quick settings */}
              <div className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gray-50 text-gray-700">
                    <Gear className="size-4" />
                  </div>

                  <div>
                    <h2 className="text-sm font-bold text-gray-950">
                      Quick Settings
                    </h2>

                    <p className="text-xs text-gray-400">Account preferences</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Bell className="size-4 text-gray-400" />

                      <div>
                        <p className="text-xs font-semibold text-gray-700">
                          Notifications
                        </p>

                        <p className="text-[10px] text-gray-400">
                          Mess updates
                        </p>
                      </div>
                    </div>

                    <Switch
                      defaultSelected
                      size="sm"
                      color="success"
                      aria-label="Notifications"
                    />
                  </div>

                  <Separator />

                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="size-4 text-gray-400" />

                      <div>
                        <p className="text-xs font-semibold text-gray-700">
                          Security
                        </p>

                        <p className="text-[10px] text-gray-400">
                          Password & login
                        </p>
                      </div>
                    </div>

                    <ChevronRight className="size-4 text-gray-300" />
                  </button>

                  <Separator />

                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="size-4 text-gray-400" />

                      <div>
                        <p className="text-xs font-semibold text-gray-700">
                          Preferences
                        </p>

                        <p className="text-[10px] text-gray-400">
                          Meal & mess preferences
                        </p>
                      </div>
                    </div>

                    <ChevronRight className="size-4 text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Member card */}
              <div className="rounded-[1.75rem] bg-green-800 p-6 text-white">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                  <FiUsers className="size-5" />
                </div>

                <h3 className="mt-5 text-lg font-bold">Green View Mess</h3>

                <p className="mt-1 text-xs leading-5 text-white/60">
                  You're one of 8 members currently living in this mess.
                </p>

                <button
                  type="button"
                  className="mt-5 flex items-center gap-2 text-xs font-bold text-white"
                >
                  View mess members
                  <ChevronRight className="size-3.5" />
                </button>
              </div>
            </aside>
          </div>

          {/* =====================================================
              FOOTER
          ====================================================== */}
          <div className="mt-8 flex flex-col gap-2 text-center text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <span>Mess Buddy · Your mess management companion</span>

            <span>Account ID: MB-2026-024</span>
          </div>
        </div>
      </div>
    </main>
  );
}

function ActivityItem({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
        <Icon className="size-4" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-gray-700">{title}</p>

        <p className="mt-0.5 text-[10px] text-gray-400">{value}</p>
      </div>
    </div>
  );
}
