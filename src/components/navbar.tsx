"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { label: "Browse Jobs", href: "#" },
    { label: "Company", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto px-4 py-4">
      <nav className="flex items-center justify-between rounded-2xl bg-[#121316] px-6 py-3 border border-white/5 shadow-lg">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="HireLoop"
            width={150}
            height={45}
            priority
          />
        </Link>

        {/* Desktop Navigation Links & Actions */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="h-4 w-[1px] bg-gray-700" />

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Sign In
            </Link>
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl px-5 py-2 transition-all shadow-md shadow-indigo-600/30">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger className="inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#121316] text-white border-zinc-800"
            >
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/logo.png"
                    alt="HireLoop"
                    width={150}
                    height={45}
                    priority
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 px-5 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="border-zinc-800 my-2" />
                <Link
                  href="/signin"
                  className="text-lg font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Sign In
                </Link>
                <Button className="w-full  flex justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl py-2.5">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
