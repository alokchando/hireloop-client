
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";

type NavbarAuthProps = {
  mobile?: boolean;
};

export default function NavbarAuth({
  mobile = false,  //mobile default value is false
}: NavbarAuthProps) {
  const { data: session, isPending } = authClient.useSession();

  // Avoid showing incorrect buttons while checking session
  if (isPending) {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="h-4 w-4 animate-spin text-indigo-400" />
    </div>
  );
}

  // Logged-in user
  if (session?.user) {
    return (
      <div
        className={
          mobile
            ? "flex flex-col gap-4"
            : "flex items-center gap-4"
        }
      >
        <div className="text-sm text-gray-300">
          <p className="text-xs text-gray-400">
            Welcome back!
          </p>
          <p className="font-semibold text-white">
            {session.user.name}
          </p>
        </div>

        <Button
          variant="outline"
          className="border-zinc-700 text-white hover:bg-zinc-800"
          onClick={() => authClient.signOut()}
        >
          Sign Out
        </Button>
      </div>
    );
  }

  // Guest user
  return (
    <div
      className={
        mobile
          ? "flex flex-col gap-4"
          : "flex items-center gap-4"
      }
    >
      <Link
        href="/signin"
        className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
      >
        Sign In
      </Link>

      <Link href="/signup">
      <Button
        className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl"
      >
          Get Started
      </Button>
        </Link>
    </div>
  );
}
