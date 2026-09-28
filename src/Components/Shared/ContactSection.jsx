"use client";

import {
  ArrowUpRight,
  Clock,
  Envelope,
  LocationArrowFill,
} from "@gravity-ui/icons";
import { Input, TextArea, Button } from "@heroui/react";
import { Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Envelope />,
    title: "Email",
    value: "hello@messmanager.com",
    description: "Send us an email anytime",
  },
  {
    icon: <Phone />,
    title: "Phone",
    value: "+880 1234-567890",
    description: "Mon–Fri from 9am to 6pm",
  },
  {
    icon: <LocationArrowFill />,
    title: "Address",
    value: "Chattogram, Bangladesh",
    description: "Visit us at our office",
  },
  {
    icon: <Clock />,
    title: "Working Hours",
    value: "09:00 AM – 06:00 PM",
    description: "Saturday – Thursday",
  },
];

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-green-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-gray-950 sm:text-5xl">
            Let's Talk About
            <span className="block text-green-800">Your Mess</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Have a question, suggestion, or need help with Mess Manager? Send us
            a message and we'll be happy to help.
          </p>
        </div>

        {/* ================= SPLIT CONTENT ================= */}

        <div className="mt-14 grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[1.1fr_0.9fr]">
          {/* ==========================================
              CONTACT FORM
          =========================================== */}

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="max-w-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight text-gray-950">
                  Send us a message
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Your Name"
                    labelPlacement="outside"
                    placeholder="Enter your name"
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      label: "text-sm font-semibold text-gray-700",
                      input: "text-sm text-gray-900",
                      inputWrapper:
                        "border-gray-200 bg-gray-50 hover:border-green-300 focus-within:border-green-600",
                    }}
                  />

                  <Input
                    type="email"
                    label="Email Address"
                    labelPlacement="outside"
                    placeholder="you@example.com"
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      label: "text-sm font-semibold text-gray-700",
                      input: "text-sm text-gray-900",
                      inputWrapper:
                        "border-gray-200 bg-gray-50 hover:border-green-300 focus-within:border-green-600",
                    }}
                  />
                </div>

                {/* Subject */}
                <Input
                  label="Subject"
                  labelPlacement="outside"
                  placeholder="How can we help?"
                  variant="bordered"
                  radius="lg"
                  classNames={{
                    label: "text-sm font-semibold text-gray-700",
                    input: "text-sm text-gray-900",
                    inputWrapper:
                      "border-gray-200 bg-gray-50 hover:border-green-300 focus-within:border-green-600",
                  }}
                />

                {/* Message */}
                <TextArea
                  label="Message"
                  labelPlacement="outside"
                  placeholder="Tell us a little about your question..."
                  variant="bordered"
                  radius="lg"
                  minRows={6}
                  classNames={{
                    label: "text-sm font-semibold text-gray-700",
                    input: "text-sm text-gray-900",
                    inputWrapper:
                      "border-gray-200 bg-gray-50 hover:border-green-300 focus-within:border-green-600",
                  }}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  radius="lg"
                  size="lg"
                  className="w-full bg-green-900 font-semibold text-white shadow-sm transition-all hover:bg-green-800 sm:w-auto"
                  endContent={<ArrowUpRight />}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* ==========================================
              CONTACT DETAILS
          =========================================== */}

          <div className="relative overflow-hidden bg-green-900 p-6 text-white sm:p-8 lg:p-10">
            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-800/70" />

            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-green-800/60" />

            <div className="relative z-10">
              <span className="text-sm font-semibold text-green-300">
                Contact Information
              </span>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                We'd love to hear from you.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-green-100">
                Whether you have a question about the platform, need assistance,
                or simply want to share some feedback, our team is here to help.
              </p>

              {/* Contact items */}
              <div className="mt-10 space-y-6">
                {contactInfo.map((item) => (
                  <ContactItem
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                    description={item.description}
                  />
                ))}
              </div>

              {/* Bottom card */}
              <div className="mt-10 rounded-2xl border border-green-700 bg-green-800/60 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  Need quick help?
                </p>

                <p className="mt-1 text-xs leading-5 text-green-200">
                  Our support team is available during our regular working hours
                  to assist you.
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-green-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-300" />
                  Currently available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ icon, title, value, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800 text-green-200">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-green-300">
          {title}
        </p>

        <p className="mt-1 break-words text-sm font-semibold text-white">
          {value}
        </p>

        <p className="mt-0.5 text-xs text-green-200/70">{description}</p>
      </div>
    </div>
  );
}
