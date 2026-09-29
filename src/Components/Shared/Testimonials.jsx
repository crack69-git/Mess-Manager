"use client";

import Marquee from "react-fast-marquee";
import { Star } from "@gravity-ui/icons";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Mess Manager",
    initials: "RU",
    rating: 5,
    text: "Managing our mess used to be confusing because everything was written in notebooks. Mess Manager made it much easier to keep track of members and expenses.",
  },
  {
    name: "Sajib Ahmed",
    role: "University Student",
    initials: "SA",
    rating: 5,
    text: "I really like how simple the interface is. I can quickly check meal information and see our mess expenses without asking the manager every time.",
  },
  {
    name: "Nayeem Hasan",
    role: "Mess Member",
    initials: "NH",
    rating: 5,
    text: "The expense tracking feature is really useful for our mess. Everyone can understand where the money is going, which makes things much more transparent.",
  },
  {
    name: "Tanvir Hossain",
    role: "Mess Manager",
    initials: "TH",
    rating: 5,
    text: "Before using Mess Manager, maintaining member information and monthly calculations took a lot of time. Now everything is much more organized.",
  },
  {
    name: "Fahim Rahman",
    role: "University Student",
    initials: "FR",
    rating: 5,
    text: "The meal management system is simple and useful. Everyone in our mess can easily understand the daily meal plan.",
  },
  {
    name: "Arif Chowdhury",
    role: "Mess Member",
    initials: "AC",
    rating: 5,
    text: "What I like most is that all the important information is available in one place. It saves us from checking different messages and notebooks.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gray-50 py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-green-100/60 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
            What Our Users Say
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-gray-950 sm:text-5xl">
            Loved by People Who
            <span className="block text-green-800">
              Manage Messes Every Day
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            See how Mess Manager helps people simplify their daily mess
            management and keep everything organized.
          </p>
        </div>

        {/* Top Marquee */}
        <div className="mt-14">
          <Marquee
            speed={45}
            gradient={true}
            gradientColor="#f9fafb"
            gradientWidth={100}
            pauseOnHover={true}
            direction="left"
          >
            <div className="flex gap-5 pr-5">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </Marquee>
        </div>

        {/* Bottom Marquee - opposite direction */}
        <div className="mt-5">
          <Marquee
            speed={38}
            gradient={true}
            gradientColor="#f9fafb"
            gradientWidth={100}
            pauseOnHover={true}
            direction="right"
          >
            <div className="flex gap-5 pr-5">
              {[...testimonials].reverse().map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-reverse-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({ testimonial }) {
  return (
    <div className="group w-[330px] shrink-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-[0_15px_35px_rgba(22,101,52,0.08)] sm:w-[370px]">
      {/* Top */}
      <div className="flex items-start justify-between">
        {/* User */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
            {testimonial.initials}
          </div>

          <div>
            <p className="text-sm font-bold text-gray-900">
              {testimonial.name}
            </p>

            <p className="mt-0.5 text-xs text-gray-400">{testimonial.role}</p>
          </div>
        </div>

        {/* Quote */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-800">
          <Quote size={17} />
        </div>
      </div>

      {/* Rating */}
      <div className="mt-5 flex gap-1">
        {Array.from({
          length: testimonial.rating,
        }).map((_, index) => (
          <Star
            key={index}
            width={15}
            height={15}
            fill="currentColor"
            className="text-green-700"
          />
        ))}
      </div>

      {/* Testimonial */}
      <p className="mt-4 min-h-[90px] text-sm leading-6 text-gray-500">
        "{testimonial.text}"
      </p>

      {/* Bottom line */}
      <div className="mt-5 h-px bg-gray-100" />

      <div className="mt-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-green-600" />

        <span className="text-[11px] font-medium text-gray-400">
          Verified Mess Manager user
        </span>
      </div>
    </div>
  );
}
