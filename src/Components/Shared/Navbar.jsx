import Image from "next/image";
import Link from "next/link";
import {
  Avatar,
  Button,
  Dropdown,
  Header,
  Label,
  Separator,
} from "@heroui/react";
import { FaGlobeAmericas, FaHome } from "react-icons/fa";
import {
  MdEmojiFlags,
  MdOutlineCall,
  MdOutlineFeaturedPlayList,
} from "react-icons/md";
import { BsPatchQuestionFill } from "react-icons/bs";
import { ArrowRightFromSquare, Bars, Gear, Persons } from "@gravity-ui/icons";
import { TbLogin2 } from "react-icons/tb";
import DataThemeSection from "../data-theme/dataTheme";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
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
            href="#features"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900 flex items-center gap-1"
          >
            <MdOutlineFeaturedPlayList />
            Features
          </Link>

          <Link
            href="#why-us"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900 flex items-center gap-1"
          >
            <BsPatchQuestionFill />
            Why Us
          </Link>

          <Link
            href="#testimonials"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900 flex items-center gap-1"
          >
            <MdEmojiFlags />
            Testimonials
          </Link>

          <Link
            href="#contact"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-900 flex items-center gap-1"
          >
            <MdOutlineCall />
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <DataThemeSection />
          <Separator orientation="vertical" />
          {user ? (
            <Dropdown>
              <Dropdown.Trigger className="rounded-full">
                <Avatar>
                  <Avatar.Image
                    alt={user.name}
                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                  />
                  <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1 mt-3">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Image
                        alt={user.name}
                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                      />
                      <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col gap-0">
                      <p className="text-sm leading-5 font-medium">
                        {user.name}
                      </p>
                      <p className="text-xs leading-none text-muted">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item id="dashboard" textValue="Dashboard">
                    <Link href="/Dashboard/user">
                      <Label>Dashboard</Label>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="profile" textValue="Profile">
                    <Label>Profile</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="settings" textValue="Settings">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Settings</Label>
                      <Gear className="size-3.5 text-muted" />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="new-project" textValue="New project">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Create Team</Label>
                      <Persons className="size-3.5 text-muted" />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Log Out</Label>
                      <ArrowRightFromSquare className="size-3.5 text-danger" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
            <Link
              href="/login"
              className="text-sm font-semibold text-gray-700 transition hover:text-green-900 flex items-center gap-1 underline underline-offset-2 "
            >
              <TbLogin2 />
              Login
            </Link>
          )}

          <Button
            href="/dashboard"
            radius="lg"
            className="bg-green-900 px-5 font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md rounded-lg"
          >
            <FaGlobeAmericas />
            Developer
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
