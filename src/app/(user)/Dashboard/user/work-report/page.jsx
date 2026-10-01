"use client";

import { useMemo, useState } from "react";

import {
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Plus,
} from "@gravity-ui/icons";

import { Button, Chip, Separator } from "@heroui/react";

import {
  FiCheckCircle,
  FiClock,
  FiDroplet,
  FiHome,
  FiMoreVertical,
  FiPlus,
  FiRefreshCw,
  FiShoppingBag,
  FiTrash2,
  FiUsers,
  FiWind,
  FiX,
} from "react-icons/fi";

const initialTasks = [
  {
    id: 1,
    title: "Sweep & mop common area",
    description: "Living room, hallway and entrance",
    category: "Cleaning",
    assignee: "Rakib",
    initials: "RH",
    time: "08:00 AM",
    duration: "30 min",
    status: "completed",
    icon: FiHome,
  },
  {
    id: 2,
    title: "Clean kitchen",
    description: "Counter, floor, sink and cooking area",
    category: "Kitchen",
    assignee: "Sakib",
    initials: "SH",
    time: "10:00 AM",
    duration: "40 min",
    status: "in-progress",
    icon: FiShoppingBag,
  },
  {
    id: 3,
    title: "Wash dishes",
    description: "Clean shared dishes and kitchen utensils",
    category: "Kitchen",
    assignee: "Tanvir",
    initials: "TA",
    time: "12:30 PM",
    duration: "20 min",
    status: "pending",
    icon: FiDroplet,
  },
  {
    id: 4,
    title: "Take out garbage",
    description: "Collect and dispose of household waste",
    category: "Cleaning",
    assignee: "Nayeem",
    initials: "NH",
    time: "05:00 PM",
    duration: "15 min",
    status: "pending",
    icon: FiTrash2,
  },
  {
    id: 5,
    title: "Clean bathroom",
    description: "Floor, basin, mirror and shower area",
    category: "Cleaning",
    assignee: "Rakib",
    initials: "RH",
    time: "07:00 PM",
    duration: "30 min",
    status: "pending",
    icon: FiDroplet,
  },
];

const upcomingDays = [
  {
    day: "Today",
    date: "Oct 01",
    person: "Rakib",
    initials: "RH",
    tasks: 5,
  },
  {
    day: "Tomorrow",
    date: "Oct 02",
    person: "Sakib",
    initials: "SH",
    tasks: 4,
  },
  {
    day: "Friday",
    date: "Oct 03",
    person: "Tanvir",
    initials: "TA",
    tasks: 5,
  },
  {
    day: "Saturday",
    date: "Oct 04",
    person: "Nayeem",
    initials: "NH",
    tasks: 4,
  },
];

const members = [
  {
    name: "Rakib Hasan",
    initials: "RH",
    tasks: 5,
    completed: 3,
  },
  {
    name: "Sakib Hossain",
    initials: "SH",
    tasks: 4,
    completed: 2,
  },
  {
    name: "Tanvir Ahmed",
    initials: "TA",
    tasks: 5,
    completed: 4,
  },
  {
    name: "Nayeem Hasan",
    initials: "NH",
    tasks: 4,
    completed: 3,
  },
];

function StatusBadge({ status }) {
  const config = {
    completed: {
      label: "Completed",
      className: "bg-green-50 text-green-700",
      icon: FiCheckCircle,
    },
    "in-progress": {
      label: "In Progress",
      className: "bg-blue-50 text-blue-700",
      icon: FiRefreshCw,
    },
    pending: {
      label: "Pending",
      className: "bg-orange-50 text-orange-700",
      icon: FiClock,
    },
  };

  const current = config[status];
  const Icon = current.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${current.className}`}
    >
      <Icon className="size-3" />
      {current.label}
    </span>
  );
}

function TaskCard({ task, onToggle }) {
  const Icon = task.icon;

  return (
    <div
      className={`group rounded-2xl border bg-white p-4 transition-all duration-200 ${
        task.status === "completed"
          ? "border-green-100 bg-green-50/20"
          : "border-gray-100 hover:border-green-100 hover:shadow-md hover:shadow-green-900/5"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Task icon */}
        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
            task.status === "completed"
              ? "bg-green-100 text-green-800"
              : "bg-gray-50 text-gray-600 group-hover:bg-green-50 group-hover:text-green-800"
          }`}
        >
          <Icon className="size-5" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={`text-sm font-bold ${
                task.status === "completed"
                  ? "text-gray-500 line-through"
                  : "text-gray-950"
              }`}
            >
              {task.title}
            </h3>

            <Chip
              size="sm"
              variant="flat"
              classNames={{
                base: "h-5 bg-gray-50",
                content: "px-1.5 text-[10px] font-semibold text-gray-500",
              }}
            >
              {task.category}
            </Chip>
          </div>

          <p className="mt-1 text-xs leading-5 text-gray-400">
            {task.description}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Clock className="size-3.5 text-gray-400" />
              {task.time}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <FiClock className="size-3.5 text-gray-400" />
              {task.duration}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex size-5 items-center justify-center rounded-full bg-green-100 text-[8px] font-bold text-green-800">
                {task.initials}
              </div>

              <span className="text-xs font-medium text-gray-500">
                {task.assignee}
              </span>
            </div>
          </div>
        </div>

        {/* Status / action */}
        <div className="flex shrink-0 flex-col items-end gap-2">
          <StatusBadge status={task.status} />

          <button
            type="button"
            onClick={() => onToggle(task.id)}
            className={`flex size-8 items-center justify-center rounded-lg border transition ${
              task.status === "completed"
                ? "border-green-700 bg-green-700 text-white"
                : "border-gray-200 bg-white text-gray-300 hover:border-green-600 hover:text-green-700"
            }`}
            title={
              task.status === "completed"
                ? "Mark as pending"
                : "Mark as completed"
            }
          >
            <Check className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function DayCard({ item, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-w-[135px] rounded-2xl border p-4 text-left transition-all ${
        selected
          ? "border-green-700 bg-green-800 text-white shadow-md shadow-green-900/10"
          : "border-gray-100 bg-white hover:border-green-100"
      }`}
    >
      <p
        className={`text-xs font-semibold ${
          selected ? "text-white/70" : "text-gray-400"
        }`}
      >
        {item.day}
      </p>

      <p className="mt-1 text-lg font-bold">{item.date}</p>

      <div className="mt-4 flex items-center gap-2">
        <div
          className={`flex size-7 items-center justify-center rounded-full text-[9px] font-bold ${
            selected ? "bg-white text-green-800" : "bg-green-50 text-green-800"
          }`}
        >
          {item.initials}
        </div>

        <span
          className={`text-xs font-semibold ${
            selected ? "text-white/80" : "text-gray-500"
          }`}
        >
          {item.person}
        </span>
      </div>

      <p
        className={`mt-3 text-[10px] ${
          selected ? "text-white/60" : "text-gray-400"
        }`}
      >
        {item.tasks} tasks
      </p>
    </button>
  );
}

export default function WorkingDayPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedDay, setSelectedDay] = useState("Today");
  const [showAddTask, setShowAddTask] = useState(false);

  const completedTasks = useMemo(
    () => tasks.filter((task) => task.status === "completed").length,
    [tasks],
  );

  const progress = Math.round((completedTasks / tasks.length) * 100);

  function toggleTask(id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "pending" : "completed",
            }
          : task,
      ),
    );
  }

  return (
    <main className="min-h-screen w-full bg-gray-50">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -right-40 -top-40 size-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-900">
                Working Day
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Keep the mess
                <span className="block text-green-800">running smoothly.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                Organize cleaning, kitchen and household duties so everyone
                knows what needs to be done.
              </p>
            </div>

            <Button
              onPress={() => setShowAddTask(true)}
              className="h-11 rounded-xl bg-green-800 px-5 font-bold text-white shadow-sm shadow-green-900/10"
            >
              <Plus className="size-4" />
              Add Task
            </Button>
          </div>

          {/* =====================================================
              TODAY OVERVIEW
          ====================================================== */}
          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-400">Today's Tasks</p>

                  <p className="mt-1 text-2xl font-bold text-gray-950">
                    {tasks.length}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">Household duties</p>
                </div>

                <div className="flex size-11 items-center justify-center rounded-xl bg-green-50 text-green-800">
                  <FiHome className="size-5" />
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-400">Completed</p>

                  <p className="mt-1 text-2xl font-bold text-green-800">
                    {completedTasks}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">Tasks finished</p>
                </div>

                <div className="flex size-11 items-center justify-center rounded-xl bg-green-50 text-green-800">
                  <FiCheckCircle className="size-5" />
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-400">Remaining</p>

                  <p className="mt-1 text-2xl font-bold text-gray-950">
                    {tasks.length - completedTasks}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">Still to do</p>
                </div>

                <div className="flex size-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <FiClock className="size-5" />
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-400">Progress</p>

                  <p className="mt-1 text-2xl font-bold text-gray-950">
                    {progress}%
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Today's completion
                  </p>
                </div>

                <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FiRefreshCw className="size-5" />
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              WEEK / DAY SELECTOR
          ====================================================== */}
          <section className="mt-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-950">
                  Working Schedule
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  See who is responsible for today's duties.
                </p>
              </div>

              <Button
                variant="flat"
                className="hidden h-10 rounded-xl bg-white px-4 text-sm font-semibold text-gray-600 shadow-sm sm:flex"
              >
                <Calendar className="size-4" />
                October
                <ChevronDown className="size-4 text-gray-400" />
              </Button>
            </div>

            <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
              {upcomingDays.map((item) => (
                <DayCard
                  key={item.date}
                  item={item}
                  selected={selectedDay === item.day}
                  onClick={() => setSelectedDay(item.day)}
                />
              ))}
            </div>
          </section>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}
          <div className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
            {/* ===================================================
                TASK LIST
            ==================================================== */}
            <section>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-gray-950">
                      {selectedDay}'s Duties
                    </h2>

                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-bold text-gray-500">
                      {tasks.length} tasks
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-gray-400">
                    Cleaning, kitchen and household responsibilities.
                  </p>
                </div>

                <Button
                  variant="flat"
                  className="h-10 rounded-xl bg-white px-4 text-sm font-semibold text-gray-600 shadow-sm"
                >
                  All Categories
                  <ChevronDown className="size-4 text-gray-400" />
                </Button>
              </div>

              {/* Progress */}
              <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-500">
                      Today's progress
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-950">
                      {completedTasks} of {tasks.length} tasks completed
                    </p>
                  </div>

                  <span className="text-sm font-bold text-green-800">
                    {progress}%
                  </span>
                </div>

                {/* <Progress
                  aria-label="Today's task progress"
                  value={progress}
                  className="mt-4"
                  classNames={{
                    track: "bg-gray-100",
                    indicator: "bg-green-700",
                  }}
                /> */}
              </div>

              <div className="mt-4 space-y-3">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} onToggle={toggleTask} />
                ))}
              </div>
            </section>

            {/* ===================================================
                SIDEBAR
            ==================================================== */}
            <aside className="space-y-5">
              {/* Today's person */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <p className="text-xs text-gray-400">Today's coordinator</p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                    RH
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      Rakib Hasan
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                      Working day coordinator
                    </p>
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Assigned duties</span>

                  <span className="text-sm font-bold text-gray-950">5</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Completed</span>

                  <span className="text-sm font-bold text-green-700">
                    3 / 5
                  </span>
                </div>
              </div>

              {/* Duty categories */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold text-gray-950">
                  Duty Categories
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-green-50 text-green-800">
                      <FiHome className="size-4" />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-700">
                        Cleaning
                      </p>

                      <p className="text-[10px] text-gray-400">2 tasks</p>
                    </div>

                    <span className="text-xs font-bold text-gray-700">40%</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                      <FiShoppingBag className="size-4" />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-700">
                        Kitchen
                      </p>

                      <p className="text-[10px] text-gray-400">2 tasks</p>
                    </div>

                    <span className="text-xs font-bold text-gray-700">40%</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <FiDroplet className="size-4" />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-700">
                        Maintenance
                      </p>

                      <p className="text-[10px] text-gray-400">1 task</p>
                    </div>

                    <span className="text-xs font-bold text-gray-700">20%</span>
                  </div>
                </div>
              </div>

              {/* Members */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      Member Progress
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                      This week's activity
                    </p>
                  </div>

                  <FiUsers className="size-4 text-gray-400" />
                </div>

                <div className="mt-5 space-y-4">
                  {members.map((member) => {
                    const memberProgress = Math.round(
                      (member.completed / member.tasks) * 100,
                    );

                    return (
                      <div key={member.name}>
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-8 items-center justify-center rounded-full bg-green-50 text-[9px] font-bold text-green-800">
                            {member.initials}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <p className="truncate text-xs font-semibold text-gray-700">
                                {member.name}
                              </p>

                              <span className="text-[10px] font-bold text-gray-500">
                                {memberProgress}%
                              </span>
                            </div>

                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                              <div
                                className="h-full rounded-full bg-green-700"
                                style={{
                                  width: `${memberProgress}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>

          {/* =====================================================
              UPCOMING WORKING DAYS
          ====================================================== */}
          <section className="mt-10">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-950">
                  Upcoming Working Days
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  See who is scheduled for the next few days.
                </p>
              </div>

              <button
                type="button"
                className="hidden items-center gap-2 text-sm font-bold text-green-800 sm:flex"
              >
                View full schedule
                <ChevronRight className="size-4" />
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {upcomingDays.slice(1).map((item) => (
                <div
                  key={item.date}
                  className="rounded-2xl border border-gray-100 bg-white p-4 transition hover:border-green-100 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-gray-950">
                        {item.day}
                      </p>

                      <p className="mt-1 text-[11px] text-gray-400">
                        {item.date}
                      </p>
                    </div>

                    <span className="rounded-full bg-gray-50 px-2.5 py-1 text-[10px] font-bold text-gray-500">
                      {item.tasks} tasks
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-full bg-green-50 text-[9px] font-bold text-green-800">
                      {item.initials}
                    </div>

                    <span className="text-xs font-semibold text-gray-600">
                      {item.person}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =====================================================
              QUICK ADD
          ====================================================== */}
          <section className="mt-10">
            <div className="rounded-[1.75rem] border border-green-100 bg-green-50/60 p-6 sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-green-800 shadow-sm">
                    <FiPlus className="size-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-950">
                      Need to add another duty?
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                      Add temporary cleaning, maintenance or household tasks to
                      today's working schedule.
                    </p>
                  </div>
                </div>

                <Button
                  onPress={() => setShowAddTask(true)}
                  className="h-11 rounded-xl bg-green-800 px-6 font-bold text-white"
                >
                  <FiPlus className="size-4" />
                  Add New Duty
                </Button>
              </div>
            </div>
          </section>

          {/* =====================================================
              STATIC MODAL
          ====================================================== */}
          {showAddTask && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/30 px-5 backdrop-blur-sm">
              <div className="w-full max-w-md rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-800">
                      New Duty
                    </span>

                    <h2 className="mt-2 text-xl font-bold text-gray-950">
                      Add working task
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      Create a duty for the mess schedule.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowAddTask(false)}
                    className="flex size-9 items-center justify-center rounded-xl bg-gray-50 text-gray-500 hover:bg-gray-100"
                  >
                    <FiX className="size-4" />
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600">
                      Task name
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. Clean balcony"
                      className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-green-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600">
                      Category
                    </label>

                    <select className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-green-700">
                      <option>Cleaning</option>
                      <option>Kitchen</option>
                      <option>Maintenance</option>
                      <option>Shopping</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-gray-600">
                        Time
                      </label>

                      <input
                        type="time"
                        className="mt-2 h-11 w-full rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-green-700"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-600">
                        Assign to
                      </label>

                      <select className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none focus:border-green-700">
                        <option>Rakib</option>
                        <option>Sakib</option>
                        <option>Tanvir</option>
                        <option>Nayeem</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    variant="flat"
                    onPress={() => setShowAddTask(false)}
                    className="h-11 flex-1 rounded-xl bg-gray-100 font-semibold text-gray-600"
                  >
                    Cancel
                  </Button>

                  <Button
                    onPress={() => setShowAddTask(false)}
                    className="h-11 flex-1 rounded-xl bg-green-800 font-bold text-white"
                  >
                    Add Duty
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
