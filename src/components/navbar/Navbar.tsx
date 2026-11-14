"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import NavbarLinks from "./NavbarLinks";
import NavbarAuth from "./NavbarAuth";

export default function Navbar() {
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <NavbarLinks />
          </div>

          <div className="h-4 w-px bg-gray-700" />

          <NavbarAuth />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="p-2 text-gray-300 hover:text-white hover:bg-zinc-800 rounded-lg">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-[#121316] text-white border-zinc-800"
            >
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="HireLoop"
                      width={150}
                      height={45}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 px-5 flex flex-col gap-6">
                <NavbarLinks />

                <hr className="border-zinc-800" />

                {/* In JSX, when you provide a Boolean prop without assigning a value, its default value is true. */}

                <NavbarAuth mobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
