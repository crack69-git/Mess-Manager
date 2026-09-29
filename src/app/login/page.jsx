"use client";

import Link from "next/link";
import { ArrowRight, Check, CircleCheck } from "@gravity-ui/icons";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function LoginPage() {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log("Login Data:", data);
    alert(`Login submitted for ${data.email}`);
  };

  return (
    <main className="relative flex min-h-[calc(100vh-172px)] items-center overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-green-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-green-50/80 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-20 h-32 w-32 -translate-x-1/2 rounded-full bg-gray-50 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* ================= LEFT CONTENT ================= */}

        <div className="hidden lg:block">
          <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
            Welcome Back
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-gray-950 xl:text-6xl">
            Manage Your
            <span className="block text-green-800">Mess Smarter.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-500">
            Sign in to manage your members, meals, expenses, and everyday mess
            activities from one simple dashboard.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-4">
            {[
              "Manage members effortlessly",
              "Track meals and expenses",
              "Keep everything organized",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-green-800">
                  <CircleCheck className="h-4 w-4" />
                </span>

                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= LOGIN CARD ================= */}

        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:p-8 lg:p-10">
            {/* Mobile badge */}
            <div className="text-center lg:hidden">
              <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
                Welcome Back
              </span>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-950">
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Sign in to continue to your Mess Manager account.
              </p>
            </div>

            {/* ================= FORM ================= */}

            <Form
              className="mt-8 flex w-full flex-col gap-5"
              onSubmit={onSubmit}
            >
              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }

                  return null;
                }}
              >
                <Label className="text-sm font-semibold text-gray-700">
                  Email
                </Label>

                <Input
                  placeholder="john@example.com"
                  className="text-sm text-gray-900"
                />

                <FieldError />
              </TextField>

              {/* Password */}
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }

                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }

                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }

                  return null;
                }}
              >
                <Label className="text-sm font-semibold text-gray-700">
                  Password
                </Label>

                <Input
                  placeholder="Enter your password"
                  className="text-sm text-gray-900"
                />

                <Description className="text-xs text-gray-400">
                  At least 8 characters, 1 uppercase letter and 1 number
                </Description>

                <FieldError />
              </TextField>

              {/* Forgot password */}
              <div className="-mt-1 flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-semibold text-green-800 transition-colors hover:text-green-700"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                radius="lg"
                className="w-full bg-green-900 font-semibold text-white shadow-lg shadow-green-900/15 transition-all hover:bg-green-800"
              >
                <Check />
                Sign In
              </Button>
            </Form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium text-gray-400">OR</span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-green-800 hover:text-green-700"
              >
                Create an account
              </Link>
            </p>
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-gray-400">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}
