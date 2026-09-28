"use client";

import {
  ArrowsRotateLeft,
  Box,
  ChevronDown,
  CreditCard,
  PlanetEarth,
  Receipt,
  ShoppingBag,
} from "@gravity-ui/icons";

import { Accordion } from "@heroui/react";

const items = [
  {
    icon: <ShoppingBag />,
    title: "Everything in one place",
    content:
      "Mess Manager brings members, meals, expenses, payments, and important mess information together in one organized platform. You don't need to depend on notebooks, spreadsheets, or multiple apps.",
  },
  {
    icon: <Receipt />,
    title: "Easy member management",
    content:
      "Managing a shared mess becomes easier when everyone's information is organized. Add members, manage their information, assign roles, and keep track of active members from one simple interface.",
  },
  {
    icon: <CreditCard />,
    title: "Simple expense tracking",
    content:
      "Keep your mess expenses organized and transparent. Record purchases, monitor spending, and understand where your money is going without manually calculating everything.",
  },
  {
    icon: <Box />,
    title: "Manage meals effortlessly",
    content:
      "Plan and organize breakfast, lunch, and dinner while keeping meal information accessible to everyone. Mess Manager helps reduce confusion around daily meal management.",
  },
  {
    icon: <PlanetEarth />,
    title: "Clear and organized information",
    content:
      "Instead of searching through messages or notebooks, find the information you need in one structured dashboard. Everything is designed to be simple and easy to understand.",
  },
  {
    icon: <ArrowsRotateLeft />,
    title: "Save time and reduce manual work",
    content:
      "Mess management involves many repetitive tasks. Mess Manager helps reduce unnecessary calculations and manual record keeping so you can spend less time managing the mess.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
            Why Choose Mess Manager?
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            A Better Way to
            <span className="block text-green-800">Manage Your Mess</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            From managing members to tracking expenses, Mess Manager gives you
            everything you need to keep your mess organized, simple, and
            stress-free.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-14 max-w-4xl">
          <Accordion className="w-full">
            {items.map((item, index) => (
              <Accordion.Item key={index}>
                <Accordion.Heading>
                  <Accordion.Trigger className="group rounded-2xl px-5 py-5 transition-all duration-300 hover:bg-green-50/50 sm:px-6">
                    {/* Number */}
                    <span className="mr-4 hidden text-xs font-bold tracking-widest text-green-700 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    {item.icon ? (
                      <span className="me-4 flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800 transition-colors duration-300 group-hover:bg-green-100">
                        {item.icon}
                      </span>
                    ) : null}

                    {/* Title */}
                    <span className="flex-1 text-left text-base font-semibold text-gray-900 sm:text-lg">
                      {item.title}
                    </span>

                    {/* Arrow */}
                    <Accordion.Indicator>
                      <span className="flex size-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-all duration-300 group-hover:bg-green-100 group-hover:text-green-800">
                        <ChevronDown className="transition-transform duration-300" />
                      </span>
                    </Accordion.Indicator>
                  </Accordion.Trigger>
                </Accordion.Heading>

                <Accordion.Panel>
                  <Accordion.Body>
                    <div className="ml-0 border-l-2 border-green-100 pb-5 pl-5 text-sm leading-7 text-gray-500 sm:ml-[5.5rem] sm:pl-6 sm:text-base">
                      {item.content}
                    </div>
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
