"use client";

import { useMemo, useState } from "react";
import {
  Bell,
  Check,
  CircleCheck,
  CreditCard,
  Person,
  ShoppingBag,
  TrashBin,
} from "@gravity-ui/icons";
import { FaMagnifyingGlass } from "react-icons/fa6";

const initialNotifications = [
  {
    id: "NOT-00124",
    recipient: "Rahim Ahmed",
    email: "rahim@example.com",
    title: "Payment Successful",
    message: "Your payment of ৳2,500 was completed successfully.",
    type: "payment",
    status: "Unread",
    date: "Sep 30, 2026",
    time: "10:42 AM",
  },
  {
    id: "NOT-00123",
    recipient: "Ashutosh Tanchangya",
    email: "ashutosh@example.com",
    title: "Payment Successful",
    message: "Your payment of ৳3,000 was completed successfully.",
    type: "payment",
    status: "Read",
    date: "Sep 29, 2026",
    time: "04:18 PM",
  },
  {
    id: "NOT-00122",
    recipient: "Admin User",
    email: "admin@example.com",
    title: "New Payment Received",
    message: "Sakib Hasan paid ৳2,800 for the monthly mess payment.",
    type: "payment",
    status: "Unread",
    date: "Sep 29, 2026",
    time: "01:25 PM",
  },
  {
    id: "NOT-00121",
    recipient: "Nusrat Jahan",
    email: "nusrat@example.com",
    title: "Welcome to Green View Mess",
    message: "You have successfully joined Green View Mess.",
    type: "mess",
    status: "Read",
    date: "Sep 28, 2026",
    time: "09:11 AM",
  },
  {
    id: "NOT-00120",
    recipient: "Admin User",
    email: "admin@example.com",
    title: "New User Registered",
    message: "Tanvir Hossain has created a new account.",
    type: "user",
    status: "Unread",
    date: "Sep 27, 2026",
    time: "07:35 PM",
  },
  {
    id: "NOT-00119",
    recipient: "Mehedi Hasan",
    email: "mehedi@example.com",
    title: "Payment Failed",
    message: "Your payment of ৳2,700 could not be completed.",
    type: "payment",
    status: "Unread",
    date: "Sep 27, 2026",
    time: "03:48 PM",
  },
  {
    id: "NOT-00118",
    recipient: "Sadia Akter",
    email: "sadia@example.com",
    title: "Mess Membership Approved",
    message: "Your request to join Lake View Mess has been approved.",
    type: "mess",
    status: "Read",
    date: "Sep 26, 2026",
    time: "11:20 AM",
  },
  {
    id: "NOT-00117",
    recipient: "Admin User",
    email: "admin@example.com",
    title: "New Mess Created",
    message: "A new mess named Sunrise Mess has been created.",
    type: "mess",
    status: "Read",
    date: "Sep 25, 2026",
    time: "02:17 PM",
  },
  {
    id: "NOT-00116",
    recipient: "Fahim Rahman",
    email: "fahim@example.com",
    title: "Security Alert",
    message: "A new login was detected on your account.",
    type: "security",
    status: "Unread",
    date: "Sep 24, 2026",
    time: "08:15 PM",
  },
  {
    id: "NOT-00115",
    recipient: "Admin User",
    email: "admin@example.com",
    title: "User Account Blocked",
    message: "A user account has been blocked by the system administrator.",
    type: "system",
    status: "Read",
    date: "Sep 24, 2026",
    time: "01:42 PM",
  },
];

const typeConfig = {
  payment: {
    label: "Payment",
    icon: CreditCard,
    className: "bg-blue-50 text-blue-700",
  },
  user: {
    label: "User",
    icon: Person,
    className: "bg-purple-50 text-purple-700",
  },
  mess: {
    label: "Mess",
    icon: ShoppingBag,
    className: "bg-green-50 text-green-700",
  },
  security: {
    label: "Security",
    icon: Bell,
    className: "bg-orange-50 text-orange-700",
  },
  system: {
    label: "System",
    icon: Bell,
    className: "bg-gray-100 text-gray-700",
  },
};

export default function NotificationsTable() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const stats = useMemo(() => {
    return {
      total: notifications.length,
      unread: notifications.filter((item) => item.status === "Unread").length,
      read: notifications.filter((item) => item.status === "Read").length,
      payment: notifications.filter((item) => item.type === "payment").length,
    };
  }, [notifications]);

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        notification.id.toLowerCase().includes(searchValue) ||
        notification.recipient.toLowerCase().includes(searchValue) ||
        notification.title.toLowerCase().includes(searchValue) ||
        notification.message.toLowerCase().includes(searchValue);

      const matchesType =
        typeFilter === "All" || notification.type === typeFilter.toLowerCase();

      const matchesStatus =
        statusFilter === "All" || notification.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [notifications, search, typeFilter, statusFilter]);

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, status: "Read" }
          : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        status: "Read",
      })),
    );
  };

  const deleteNotification = (id) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id),
    );
  };

  const getTypeConfig = (type) => {
    return typeConfig[type] || typeConfig.system;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                <span>Admin</span>
                <span>/</span>
                <span className="text-gray-600">Notifications</span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-gray-950">
                Notifications
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                View and manage all notifications generated by the system.
              </p>
            </div>

            <button
              type="button"
              onClick={markAllAsRead}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-900"
            >
              <Check className="size-4" />
              Mark All as Read
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6 p-6 lg:p-8">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Notifications"
            value={stats.total}
            icon={Bell}
            iconClass="bg-green-50 text-green-800"
          />

          <StatCard
            title="Unread"
            value={stats.unread}
            icon={Bell}
            iconClass="bg-orange-50 text-orange-700"
          />

          <StatCard
            title="Read"
            value={stats.read}
            icon={CircleCheck}
            iconClass="bg-blue-50 text-blue-700"
          />

          <StatCard
            title="Payment Alerts"
            value={stats.payment}
            icon={CreditCard}
            iconClass="bg-purple-50 text-purple-700"
          />
        </div>

        {/* Main Table Card */}
        <section className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          {/* Filters */}
          <div className="border-b border-gray-100 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              {/* Search */}
              <div className="relative w-full xl:max-w-md">
                <FaMagnifyingGlass className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search notifications..."
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
                >
                  <option value="All">All Types</option>
                  <option value="Payment">Payment</option>
                  <option value="User">User</option>
                  <option value="Mess">Mess</option>
                  <option value="Security">Security</option>
                  <option value="System">System</option>
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
                >
                  <option value="All">All Status</option>
                  <option value="Unread">Unread</option>
                  <option value="Read">Read</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70">
                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Notification
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Recipient
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Type
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Date
                  </th>

                  <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => {
                    const config = getTypeConfig(notification.type);
                    const Icon = config.icon;

                    return (
                      <tr
                        key={notification.id}
                        className={`transition hover:bg-gray-50/70 ${
                          notification.status === "Unread"
                            ? "bg-green-50/20"
                            : ""
                        }`}
                      >
                        {/* Notification */}
                        <td className="px-6 py-5">
                          <div className="flex max-w-md items-start gap-3">
                            <div
                              className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${config.className}`}
                            >
                              <Icon className="size-[18px]" />
                            </div>

                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <p className="truncate text-sm font-bold text-gray-900">
                                  {notification.title}
                                </p>

                                {notification.status === "Unread" && (
                                  <span className="size-2 shrink-0 rounded-full bg-green-600" />
                                )}
                              </div>

                              <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                                {notification.message}
                              </p>

                              <p className="mt-1.5 text-[11px] font-medium text-gray-400">
                                {notification.id}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Recipient */}
                        <td className="px-6 py-5">
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              {notification.recipient}
                            </p>

                            <p className="mt-0.5 text-xs text-gray-400">
                              {notification.email}
                            </p>
                          </div>
                        </td>

                        {/* Type */}
                        <td className="px-6 py-5">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold ${config.className}`}
                          >
                            <Icon className="size-3.5" />
                            {config.label}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-5">
                          {notification.status === "Unread" ? (
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1.5 text-xs font-semibold text-orange-700">
                              <span className="size-1.5 rounded-full bg-orange-500" />
                              Unread
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-50 px-2.5 py-1.5 text-xs font-semibold text-green-700">
                              <Check className="size-3.5" />
                              Read
                            </span>
                          )}
                        </td>

                        {/* Date */}
                        <td className="px-6 py-5">
                          <p className="text-sm font-medium text-gray-700">
                            {notification.date}
                          </p>

                          <p className="mt-0.5 text-xs text-gray-400">
                            {notification.time}
                          </p>
                        </td>

                        {/* Action */}
                        <td className="px-6 py-5">
                          <div className="flex items-center justify-end gap-2">
                            {notification.status === "Unread" && (
                              <button
                                type="button"
                                onClick={() => markAsRead(notification.id)}
                                title="Mark as read"
                                className="flex size-9 items-center justify-center rounded-xl bg-gray-50 text-gray-500 transition hover:bg-green-50 hover:text-green-700"
                              >
                                <Check className="size-4" />
                              </button>
                            )}

                            <button
                              type="button"
                              onClick={() =>
                                deleteNotification(notification.id)
                              }
                              title="Delete notification"
                              className="flex size-9 items-center justify-center rounded-xl bg-gray-50 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                            >
                              <TrashBin className="size-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center">
                      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
                        <Bell className="size-6" />
                      </div>

                      <h3 className="mt-4 text-sm font-bold text-gray-900">
                        No notifications found
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Try changing your search or filter.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium text-gray-400">
              Showing{" "}
              <span className="font-bold text-gray-700">
                {filteredNotifications.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-gray-700">
                {notifications.length}
              </span>{" "}
              notifications
            </p>

            <p className="text-xs text-gray-400">
              Notifications are generated automatically by system events.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon: Icon, iconClass }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-gray-400">{title}</p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
            {value}
          </p>
        </div>

        <div
          className={`flex size-11 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}
