"use client";

import Link from "next/link";
import { Check, CircleCheck, Image } from "@gravity-ui/icons";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data:", data);

    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image,
      role: data.role,
    });
    if (res) {
      alert("Account created successfully! ");
      router.push("/login");
    }
    if (error) {
      alert("Error signing up: " + error.message);
      return;
    }
  };

  return (
    <main className="relative flex min-h-[calc(100vh-172px)] items-center overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-green-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-green-50/80 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-20 h-32 w-32 -translate-x-1/2 rounded-full bg-gray-50 blur-3xl" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* =====================================================
            SIGNUP CARD
        ====================================================== */}

        <div className="mx-auto w-full max-w-md lg:order-1">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:p-8 lg:p-10">
            {/* Mobile badge */}

            <div className="text-center lg:hidden">
              <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
                Get Started
              </span>
            </div>

            {/* Heading */}

            <div className="text-center lg:text-left">
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-950">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Join Mess Manager and simplify your everyday mess management.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <Form
              className="mt-8 flex w-full flex-col gap-5"
              onSubmit={onSubmit}
            >
              {/* ================= NAME ================= */}

              <TextField isRequired name="name" defaultValue="ashu">
                <Label className="text-sm font-semibold text-gray-700">
                  Full Name
                </Label>

                <Input
                  placeholder="John Doe"
                  className="text-sm text-gray-900"
                />

                <FieldError />
              </TextField>

              <TextField
                isRequired
                name="email"
                type="email"
                defaultValue="ashu@gmail.com"
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

              <TextField
                name="image"
                type="url"
                defaultValue="https://chatgpt.com/c/6aba9c68-d20c-83ee-b1fa-8d858435cf95"
                validate={(value) => {
                  if (value && !/^https?:\/\/.+/i.test(value)) {
                    return "Please enter a valid image URL";
                  }

                  return null;
                }}
              >
                <Label className="text-sm font-semibold text-gray-700">
                  Profile Image
                </Label>

                <Input
                  placeholder="https://example.com/profile.jpg"
                  className="text-sm text-gray-900"
                />

                <Description className="text-xs text-gray-400">
                  Optional. Add a URL for your profile image.
                </Description>

                <FieldError />
              </TextField>

              {/* ================= ROLE ================= */}

              <div className="flex flex-col gap-3">
                <Label className="text-sm font-semibold text-gray-700">
                  Account Role
                </Label>

                <RadioGroup
                  defaultValue="user"
                  name="role"
                  orientation="horizontal"
                  className="w-full"
                >
                  {/* User */}

                  <Radio
                    value="user"
                    className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all hover:border-green-300 hover:bg-green-50"
                  >
                    <Radio.Content>
                      <Radio.Control>
                        <Radio.Indicator />
                      </Radio.Control>

                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          User
                        </p>

                        <Description className="text-xs text-gray-400">
                          Manage your mess
                        </Description>
                      </div>
                    </Radio.Content>
                  </Radio>

                  {/* Admin */}

                  <Radio
                    value="admin"
                    className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all hover:border-green-300 hover:bg-green-50"
                  >
                    <Radio.Content>
                      <Radio.Control>
                        <Radio.Indicator />
                      </Radio.Control>

                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Admin
                        </p>

                        <Description className="text-xs text-gray-400">
                          Manage the entire mess
                        </Description>
                      </div>
                    </Radio.Content>
                  </Radio>
                </RadioGroup>
              </div>

              {/* ================= PASSWORD ================= */}

              <TextField
                isRequired
                name="password"
                type="password"
                defaultValue="ashu123456"
              >
                <Label className="text-sm font-semibold text-gray-700">
                  Password
                </Label>

                <Input
                  placeholder="Create a password"
                  className="text-sm text-gray-900"
                />

                <FieldError />
              </TextField>

              {/* ================= SUBMIT ================= */}

              <Button
                type="submit"
                size="lg"
                radius="lg"
                className="w-full bg-green-900 font-semibold text-white shadow-lg shadow-green-900/15 transition-all hover:bg-green-800"
              >
                <Check />
                Create Account
              </Button>
            </Form>

            {/* ================= DIVIDER ================= */}

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium text-gray-400">OR</span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* ================= LOGIN ================= */}

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-green-800 hover:text-green-700"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Terms */}

          <p className="mt-5 text-center text-xs leading-5 text-gray-400">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </p>
        </div>

        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}

        <div className="hidden lg:order-2 lg:block">
          <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
            Get Started
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-gray-950 xl:text-6xl">
            Everything Your
            <span className="block text-green-800">Mess Needs.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-500">
            Create your account and bring your members, meals, expenses, and
            mess activities together in one organized platform.
          </p>

          {/* Features */}

          <div className="mt-8 space-y-4">
            {[
              "Simple member management",
              "Track daily meals easily",
              "Monitor expenses clearly",
              "Keep your mess organized",
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
      </div>
    </main>
  );
}
