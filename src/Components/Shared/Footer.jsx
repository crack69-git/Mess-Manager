"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronUp, Envelope } from "@gravity-ui/icons";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
  ],
  Resources: [
    { name: "Help Center", href: "#help" },
    { name: "Documentation", href: "#documentation" },
    { name: "FAQs", href: "#faq" },
    { name: "Community", href: "#community" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Security", href: "#security" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    href: "#",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "#",
  },
  {
    name: "Telegram",
    icon: <FaTelegram />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-100 bg-gray-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-green-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl  shadow-lg shadow-green-900/10">
                <Image
                  src="/logo1.png"
                  alt="Mess Manager"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              <span className="text-xl font-bold tracking-[-0.04em] text-gray-900">
                Mess<span className="text-green-700">Buddy</span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-gray-500">
              A smarter and simpler way to manage your mess, meals, members,
              expenses, and everyday tasks — all in one place.
            </p>

            {/* Email */}
            <Link
              href="mailto:hello@messmanager.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-green-700"
            >
              <Envelope className="size-4 text-green-700" />
              hello@messmanager.com
              <ArrowUpRight className="size-3.5" />
            </Link>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                >
                  <span className="size-4">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-900">
                  {category}
                </h3>

                <ul className="mt-5 space-y-3.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-green-700"
                      >
                        {link.name}

                        <ArrowUpRight className="size-3 -translate-y-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mess Manager. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs font-medium text-gray-400">
            <span>Made with</span>

            <span className="inline-flex items-center gap-1.5 text-green-700">
              <span className="size-1.5 rounded-full bg-green-600" />
              Simplicity
            </span>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-500 transition-all hover:border-green-200 hover:text-green-700"
            >
              Back to top
              <ChevronUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
