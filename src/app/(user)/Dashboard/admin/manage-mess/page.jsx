"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Magnifier,
  Ellipsis,
  Eye,
  TrashBin,
  ShoppingBag,
  CircleCheck,
  CircleXmark,
  ChevronDown,
} from "@gravity-ui/icons";
import { Users } from "lucide-react";

const initialMesses = [
  {
    id: 1,
    name: "Green View Mess",
    code: "GVM-1024",
    manager: "Ashutosh Tanchangya",
    members: 48,
    location: "Chittagong",
    status: "Active",
    created: "Sep 05, 2026",
  },
  {
    id: 2,
    name: "Sunrise Mess",
    code: "SRM-2048",
    manager: "Sakib Hasan",
    members: 36,
    location: "Chittagong",
    status: "Active",
    created: "Aug 28, 2026",
  },
  {
    id: 3,
    name: "Lake View Mess",
    code: "LVM-3072",
    manager: "Mehedi Hasan",
    members: 29,
    location: "Dhaka",
    status: "Active",
    created: "Aug 20, 2026",
  },
  {
    id: 4,
    name: "City Corner Mess",
    code: "CCM-4096",
    manager: "Tanvir Hossain",
    members: 21,
    location: "Chittagong",
    status: "Pending",
    created: "Sep 18, 2026",
  },
  {
    id: 5,
    name: "Green Garden Mess",
    code: "GGM-5012",
    manager: "Rahim Ahmed",
    members: 42,
    location: "Dhaka",
    status: "Active",
    created: "Aug 12, 2026",
  },
  {
    id: 6,
    name: "Royal Nest Mess",
    code: "RNM-6048",
    manager: "Fahim Rahman",
    members: 18,
    location: "Chittagong",
    status: "Inactive",
    created: "Jul 30, 2026",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-green-50 text-green-800",
    Pending: "bg-yellow-50 text-yellow-700",
    Inactive: "bg-gray-100 text-gray-500",
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

export default function MessTable() {
  const [messes, setMesses] = useState(initialMesses);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [openAction, setOpenAction] = useState(null);

  const [deleteModal, setDeleteModal] = useState({
    open: false,
    mess: null,
  });

  const filteredMesses = useMemo(() => {
    return messes.filter((mess) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        mess.name.toLowerCase().includes(searchValue) ||
        mess.code.toLowerCase().includes(searchValue) ||
        mess.manager.toLowerCase().includes(searchValue) ||
        mess.location.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || mess.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [messes, search, statusFilter]);

  const activeMesses = messes.filter((mess) => mess.status === "Active").length;

  const pendingMesses = messes.filter(
    (mess) => mess.status === "Pending",
  ).length;

  const totalMembers = messes.reduce((total, mess) => total + mess.members, 0);

  const openDeleteModal = (mess) => {
    setOpenAction(null);

    setDeleteModal({
      open: true,
      mess,
    });
  };

  const closeDeleteModal = () => {
    setDeleteModal({
      open: false,
      mess: null,
    });
  };

  const handleDelete = () => {
    if (!deleteModal.mess) return;

    setMesses((currentMesses) =>
      currentMesses.filter((mess) => mess.id !== deleteModal.mess.id),
    );

    closeDeleteModal();
  };

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

                <span className="text-green-800">Mess</span>
              </div>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950">
                Mess Management
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                View and manage all mess communities on the platform.
              </p>
            </div>

            <div className="flex size-12 items-center justify-center rounded-2xl bg-green-800 text-white shadow-lg shadow-green-900/10">
              <ShoppingBag className="size-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Messes"
            value={messes.length}
            icon={ShoppingBag}
          />

          <StatCard
            label="Active Messes"
            value={activeMesses}
            icon={CircleCheck}
          />

          <StatCard
            label="Pending Approval"
            value={pendingMesses}
            icon={CircleXmark}
          />

          <StatCard label="Total Members" value={totalMembers} icon={Users} />
        </section>

        {/* Table */}
        <section className="mt-7 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          {/* Table Header */}
          <div className="border-b border-gray-100 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-950">All Messes</h2>

                <p className="mt-1 text-sm text-gray-400">
                  {filteredMesses.length} messes found
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
                    placeholder="Search mess..."
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
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Inactive">Inactive</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70">
                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Mess
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Manager
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Members
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Location
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Created
                  </th>

                  <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredMesses.map((mess) => (
                  <tr
                    key={mess.id}
                    className="border-b border-gray-50 transition hover:bg-green-50/30 last:border-0"
                  >
                    {/* Mess */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                          <ShoppingBag className="size-5" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {mess.name}
                          </p>

                          <p className="mt-0.5 text-xs font-medium text-gray-400">
                            {mess.code}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Manager */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-gray-700">
                        {mess.manager}
                      </p>
                    </td>

                    {/* Members */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                          <Users className="size-4" />
                        </div>

                        <span className="text-sm font-semibold text-gray-700">
                          {mess.members}
                        </span>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-5">
                      <p className="text-sm text-gray-500">{mess.location}</p>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <StatusBadge status={mess.status} />
                    </td>

                    {/* Created */}
                    <td className="px-6 py-5">
                      <p className="text-sm text-gray-500">{mess.created}</p>
                    </td>

                    {/* Action */}
                    <td className="relative px-6 py-5 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenAction(openAction === mess.id ? null : mess.id)
                        }
                        className="inline-flex size-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition hover:border-green-100 hover:bg-green-50 hover:text-green-800"
                      >
                        <Ellipsis className="size-5" />
                      </button>

                      {openAction === mess.id && (
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
                              href={`/Dashboard/admin/mess/${mess.id}`}
                              onClick={() => setOpenAction(null)}
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-green-50 hover:text-green-800"
                            >
                              <Eye className="size-4" />
                              View Details
                            </Link>

                            {/* Delete */}
                            <button
                              type="button"
                              onClick={() => openDeleteModal(mess)}
                              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
                            >
                              <TrashBin className="size-4" />
                              Delete Mess
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
            {filteredMesses.length === 0 && (
              <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
                  <ShoppingBag className="size-7" />
                </div>

                <h3 className="mt-4 text-base font-bold text-gray-900">
                  No messes found
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
                {filteredMesses.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-600">
                {messes.length}
              </span>{" "}
              messes
            </p>

            <p className="text-xs text-gray-400">Mess management</p>
          </div>
        </section>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal.open && deleteModal.mess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/40 px-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <TrashBin className="size-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-950">
              Delete mess?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Are you sure you want to permanently delete{" "}
              <span className="font-semibold text-gray-800">
                {deleteModal.mess.name}
              </span>
              ? This action cannot be undone.
            </p>

            <div className="mt-4 rounded-2xl bg-red-50 p-4">
              <p className="text-xs font-medium leading-5 text-red-600">
                Warning: deleting this mess may also affect its associated
                members, payments and history.
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={closeDeleteModal}
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Delete Mess
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
