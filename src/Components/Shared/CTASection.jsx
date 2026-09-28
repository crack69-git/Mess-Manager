"use client";

import React from "react";
import { ArrowUpRight } from "@gravity-ui/icons";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-green-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-10 -z-10 h-48 w-48 rounded-full bg-green-100/60 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-green-900 px-6 py-14 text-center shadow-xl sm:px-10 sm:py-16 lg:px-20">
          {/* Decorative circles */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-800/70" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-green-800/50" />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center rounded-full border border-green-700 bg-green-800/70 px-4 py-1.5 text-sm font-medium text-green-100">
              Stay Updated
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Make Your Mess Management
              <span className="block text-green-300">Simple & Stress-Free</span>
            </h2>

            {/* Subheading */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-green-100 sm:text-lg">
              Get useful tips, product updates, and helpful resources to make
              managing your mess easier and more organized.
            </p>

            {/* Email Form */}
            <form
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl bg-white/10 p-2 backdrop-blur-sm sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="h-12 flex-1 rounded-xl border border-white/10 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-green-300"
              />

              <button
                type="submit"
                className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-green-900 transition-all duration-200 hover:bg-green-50"
              >
                Get Started
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>

            {/* Small text */}
            <p className="mt-4 text-xs text-green-200/80">
              No spam. Just useful updates and tips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
