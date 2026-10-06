"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Magnifier,
  Ellipsis,
  Eye,
  CircleCheck,
  CircleXmark,
  TrashBin,
  Shield,
  ChevronDown,
} from "@gravity-ui/icons";
import { Users } from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Ashutosh Tanchangya",
    initials: "AT",
    email: "ashutosh@example.com",
    mess: "Green View Mess",
    role: "Member",
    status: "Active",
    joined: "Sep 12, 2026",
  },
  {
    id: 2,
    name: "Rahim Ahmed",
    initials: "RA",
    email: "rahim@example.com",
    mess: "Green View Mess",
    role: "Member",
    status: "Active",
    joined: "Sep 08, 2026",
  },
  {
    id: 3,
    name: "Sakib Hasan",
    initials: "SH",
    email: "sakib@example.com",
    mess: "Sunrise Mess",
    role: "Member",
    status: "Blocked",
    joined: "Aug 27, 2026",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    initials: "NJ",
    email: "nusrat@example.com",
    mess: "Green View Mess",
    role: "Member",
    status: "Pending",
    joined: "Sep 30, 2026",
  },
  {
    id: 5,
    name: "Tanvir Hossain",
    initials: "TH",
    email: "tanvir@example.com",
    mess: "Sunrise Mess",
    role: "Member",
    status: "Active",
    joined: "Aug 21, 2026",
  },
  {
    id: 6,
    name: "Mehedi Hasan",
    initials: "MH",
    email: "mehedi@example.com",
    mess: "Lake View Mess",
    role: "Member",
    status: "Active",
    joined: "Aug 18, 2026",
  },
  {
    id: 7,
    name: "Sadia Akter",
    initials: "SA",
    email: "sadia@example.com",
    mess: "Lake View Mess",
    role: "Member",
    status: "Blocked",
    joined: "Aug 14, 2026",
  },
  {
    id: 8,
    name: "Fahim Rahman",
    initials: "FR",
    email: "fahim@example.com",
    mess: "Green View Mess",
    role: "Member",
    status: "Active",
    joined: "Aug 11, 2026",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-green-50 text-green-800",
    Blocked: "bg-red-50 text-red-600",
    Pending: "bg-yellow-50 text-yellow-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>

          <p className="mt-1 text-2xl font-bold text-gray-950">{value}</p>
        </div>

        <div className="flex size-11 items-center justify-center rounded-2xl bg-green-50 text-green-800">
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}

export default function UsersTable() {
  const [users, setUsers] = useState(initialUsers);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [openAction, setOpenAction] = useState(null);

  const [modal, setModal] = useState({
    open: false,
    type: null,
    user: null,
  });

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.mess.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || user.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [users, search, statusFilter]);

  const activeUsers = users.filter((user) => user.status === "Active").length;

  const blockedUsers = users.filter((user) => user.status === "Blocked").length;

  const pendingUsers = users.filter((user) => user.status === "Pending").length;

  const openModal = (type, user) => {
    setOpenAction(null);

    setModal({
      open: true,
      type,
      user,
    });
  };

  const closeModal = () => {
    setModal({
      open: false,
      type: null,
      user: null,
    });
  };

  const handleConfirm = () => {
    if (!modal.user) return;

    if (modal.type === "delete") {
      setUsers((currentUsers) =>
        currentUsers.filter((user) => user.id !== modal.user.id),
      );
    }

    if (modal.type === "block") {
      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === modal.user.id
            ? {
                ...user,
                status: user.status === "Blocked" ? "Active" : "Blocked",
              }
            : user,
        ),
      );
    }

    closeModal();
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                <Link href="/Dashboard/admin" className="hover:text-green-800">
                  Dashboard
                </Link>

                <span>/</span>

                <span className="text-green-800">Users</span>
              </div>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950">
                Users
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Manage platform users and their account access.
              </p>
            </div>

            <div className="flex size-12 items-center justify-center rounded-2xl bg-green-800 text-white shadow-lg shadow-green-900/10">
              <Users className="size-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Users" value={users.length} icon={Users} />

          <StatCard
            label="Active Users"
            value={activeUsers}
            icon={CircleCheck}
          />

          <StatCard
            label="Blocked Users"
            value={blockedUsers}
            icon={CircleXmark}
          />

          <StatCard label="Pending Users" value={pendingUsers} icon={Shield} />
        </section>

        {/* Table Card */}
        <section className="mt-7 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          {/* Table Header */}
          <div className="border-b border-gray-100 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-950">All Users</h2>

                <p className="mt-1 text-sm text-gray-400">
                  {filteredUsers.length} users found
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
                    placeholder="Search users..."
                    className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none transition focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-50 sm:w-64"
                  />
                </div>

                {/* Filter */}
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-11 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 pr-10 text-sm font-medium text-gray-600 outline-none transition focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-50 sm:w-36"
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                    <option value="Pending">Pending</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70">
                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    User
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Mess
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Role
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Joined
                  </th>

                  <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-50 transition hover:bg-green-50/30 last:border-0"
                  >
                    {/* User */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                          {user.initials}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-gray-900">
                            {user.name}
                          </p>

                          <p className="mt-0.5 truncate text-xs text-gray-400">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Mess */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-gray-700">
                        {user.mess}
                      </p>
                    </td>

                    {/* Role */}
                    <td className="px-6 py-5">
                      <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-semibold text-gray-600">
                        {user.role}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <StatusBadge status={user.status} />
                    </td>

                    {/* Joined */}
                    <td className="px-6 py-5">
                      <p className="text-sm text-gray-500">{user.joined}</p>
                    </td>

                    {/* Action */}
                    <td className="relative px-6 py-5 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenAction(openAction === user.id ? null : user.id)
                        }
                        className="inline-flex size-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition hover:border-green-100 hover:bg-green-50 hover:text-green-800"
                      >
                        <Ellipsis className="size-5" />
                      </button>

                      {openAction === user.id && (
                        <>
                          <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setOpenAction(null)}
                            className="fixed inset-0 z-10 cursor-default"
                          />

                          <div className="absolute right-6 top-16 z-20 w-48 overflow-hidden rounded-2xl border border-gray-100 bg-white p-1.5 text-left shadow-xl shadow-gray-900/10">
                            {/* View */}
                            <Link
                              href={`/Dashboard/admin/users/${user.id}`}
                              onClick={() => setOpenAction(null)}
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-green-50 hover:text-green-800"
                            >
                              <Eye className="size-4" />
                              View Details
                            </Link>

                            {/* Block / Unblock */}
                            <button
                              type="button"
                              onClick={() => openModal("block", user)}
                              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-yellow-50 hover:text-yellow-700"
                            >
                              {user.status === "Blocked" ? (
                                <CircleCheck className="size-4" />
                              ) : (
                                <CircleXmark className="size-4" />
                              )}

                              {user.status === "Blocked"
                                ? "Unblock User"
                                : "Block User"}
                            </button>

                            {/* Delete */}
                            <button
                              type="button"
                              onClick={() => openModal("delete", user)}
                              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
                            >
                              <TrashBin className="size-4" />
                              Delete User
                            </button>
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {filteredUsers.length === 0 && (
              <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
                  <Users className="size-7" />
                </div>

                <h3 className="mt-4 text-base font-bold text-gray-900">
                  No users found
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
                {filteredUsers.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-600">
                {users.length}
              </span>{" "}
              users
            </p>

            <div className="text-xs text-gray-400">User management</div>
          </div>
        </section>
      </div>

      {/* Confirmation Modal */}
      {modal.open && modal.user && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/40 px-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div
              className={`flex size-12 items-center justify-center rounded-2xl ${
                modal.type === "delete"
                  ? "bg-red-50 text-red-600"
                  : "bg-yellow-50 text-yellow-700"
              }`}
            >
              {modal.type === "delete" ? (
                <TrashBin className="size-6" />
              ) : (
                <CircleXmark className="size-6" />
              )}
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-950">
              {modal.type === "delete"
                ? "Delete user?"
                : modal.user.status === "Blocked"
                  ? "Unblock user?"
                  : "Block user?"}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {modal.type === "delete"
                ? `Are you sure you want to permanently delete ${modal.user.name}? This action cannot be undone.`
                : modal.user.status === "Blocked"
                  ? `Allow ${modal.user.name} to access the platform again?`
                  : `Block ${modal.user.name} from accessing the platform?`}
            </p>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirm}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold text-white transition ${
                  modal.type === "delete"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-800 hover:bg-green-900"
                }`}
              >
                {modal.type === "delete"
                  ? "Delete User"
                  : modal.user.status === "Blocked"
                    ? "Unblock User"
                    : "Block User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
