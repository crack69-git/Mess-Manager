"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Dropdown,
  Header,
  Kbd,
  Label,
  Popover,
  Separator,
  Switch,
} from "@heroui/react";
import { FaHome } from "react-icons/fa";
import {
  MdEmojiFlags,
  MdOutlineCall,
  MdOutlineFeaturedPlayList,
} from "react-icons/md";
import { BsPatchQuestionFill } from "react-icons/bs";
import { Bars, Moon, Sun } from "@gravity-ui/icons";
import { Ellipsis } from "lucide-react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const icons = {
    darkMode: {
      off: Moon,
      on: Sun,
      selectedControlClass: "",
    },
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Dropdown>
            <Button
              isIconOnly
              aria-label="Menu"
              variant="ghost"
              className="hidden max-[1127px]:flex"
            >
              <Bars className="outline-none" />
            </Button>
            <Dropdown.Popover className="min-w-[220px]">
              <Dropdown.Menu
                disabledKeys={["delete-file"]}
                onAction={(key) => console.log(`Selected: ${key}`)}
              >
                <Dropdown.Section>
                  <Header>Menu</Header>

                  <Dropdown.Item id="home" textValue="Home">
                    <div className="flex flex-col">
                      <Link href="/">
                        <Label className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-green-900">
                          <FaHome />
                          Home
                        </Label>
                      </Link>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="features" textValue="Features">
                    <div className="flex flex-col">
                      <Link href="/">
                        <Label className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-green-900">
                          <MdOutlineFeaturedPlayList />
                          Features
                        </Label>
                      </Link>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="why-us" textValue="Why Us">
                    <div className="flex flex-col">
                      <Link href="/">
                        <Label className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-green-900">
                          <BsPatchQuestionFill />
                          Why Us
                        </Label>
                      </Link>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="testimonials" textValue="Testimonials">
                    <div className="flex flex-col">
                      <Link href="/">
                        <Label className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-green-900">
                          <MdEmojiFlags />
                          Testimonials
                        </Label>
                      </Link>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="contact" textValue="Contact">
                    <div className="flex flex-col">
                      <Link href="/">
                        <Label className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-green-900">
                          <MdOutlineCall />
                          Contact
                        </Label>
                      </Link>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Section>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
          <div className="relative h-9 w-9 overflow-hidden rounded-xl">
            <Image
              src="/logo1.png"
              alt="Mess Buddy"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold tracking-tight text-gray-900">
              Mess Buddy
            </h1>
            <p className="text-[10px] font-medium tracking-wide text-gray-500">
              SIMPLE • SMART • ORGANIZED
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="items-center gap-1 flex max-[1127px]:hidden">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900 flex items-center gap-1"
          >
            <FaHome />
            Home
          </Link>

          <Link
            href="/features"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900 flex items-center gap-1"
          >
            <MdOutlineFeaturedPlayList />
            Features
          </Link>

          <Link
            href="/why-us"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900 flex items-center gap-1"
          >
            <BsPatchQuestionFill />
            Why Us
          </Link>

          <Link
            href="/testimonials"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900 flex items-center gap-1"
          >
            <MdEmojiFlags />
            Testimonials
          </Link>

          <Link
            href="/contact"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900 flex items-center gap-1"
          >
            <MdOutlineCall />
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <div className="flex gap-3">
            {Object.entries(icons).map(([key, value]) => (
              <Switch key={key} defaultSelected aria-label={key} size="lg">
                {({ isSelected }) => (
                  <Switch.Content>
                    <Switch.Control
                      className={isSelected ? value.selectedControlClass : ""}
                    >
                      <Switch.Thumb>
                        <Switch.Icon>
                          {isSelected ? (
                            <value.on className="size-3 text-inherit opacity-100" />
                          ) : (
                            <value.off className="size-3 text-inherit opacity-70" />
                          )}
                        </Switch.Icon>
                      </Switch.Thumb>
                    </Switch.Control>
                  </Switch.Content>
                )}
              </Switch>
            ))}
          </div>
          <Separator orientation="vertical" />
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-gray-700 transition hover:text-green-900 sm:block"
          >
            Login
          </Link>

          <Button
            href="/dashboard"
            radius="lg"
            className="bg-green-900 px-5 font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md rounded-lg"
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
