"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Briefcase,
  ShieldCheck,
  Mail,
  Lock,
  Building,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

type Role = "seeker" | "recruiter";

export default function SignUpPage() {
  const [role, setRole] = useState<Role>("seeker");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const signUpData = {
      name,
      email,
      password,
      role: role === "recruiter" ? ("recruiter" as const) : ("seeker" as const),
      companyName: role === "recruiter" ? companyName : "",
    };
    const { data, error } = await authClient.signUp.email(signUpData);

    if (error) {
      console.error("Sign up failed:", error);
      return;
    }
    toast.success("Account created successfully!");
  };

  const handleGoogleSignUp = () => {
    // TODO: Trigger Google OAuth Sign Up flow
    console.log("Initiating Google Sign Up as:", role);
  };

  const roles = [
    { id: "seeker", label: "Job Seeker", icon: User },
    { id: "recruiter", label: "Recruiter", icon: Briefcase },
    // { id: "admin", label: "Admin", icon: ShieldCheck },
  ] as const;

  return (
    <div className="min-h-screen bg-[#090a0f] text-white flex flex-col items-center justify-center p-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <Link
            href="/"
            className="inline-block text-3xl font-extrabold tracking-tight"
          >
            <span className="text-sky-500">hire</span>
            <span className="text-orange-500">loop</span>
          </Link>
          <p className="text-xs text-zinc-400 mt-1">
            Create your account to get started.
          </p>
        </div>

        <Card className="bg-[#12141a]/90 border-zinc-800 text-white backdrop-blur-xl shadow-2xl">
          <CardHeader className="space-y-4 pb-2">
            <CardTitle className="text-xl font-bold text-center">
              Create Account
            </CardTitle>

            {/* Role Selector */}
            <div className="space-y-2">
              <Label className="text-xs text-zinc-400 font-medium">
                Select your role
              </Label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-900/80 rounded-xl border border-zinc-800">
                {roles.map((r) => {
                  const Icon = r.icon;
                  const isSelected = role === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRole(r.id)}
                      className={`flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{r.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 pt-4">
            {/* Google Sign Up Button */}
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignUp}
              className="w-full bg-zinc-900/80 border-zinc-700 hover:bg-zinc-800 text-white rounded-xl py-5 font-medium transition-all flex items-center justify-center gap-3"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.4 0 15.3c0 2.9.7 5.6 1.9 8l3.7-2.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
                />
              </svg>
              <span>Sign Up with Google</span>
            </Button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-2">
              <div className="border-t border-zinc-800 w-full" />
              <span className="bg-[#12141a] px-3 text-[10px] uppercase font-semibold text-zinc-500 absolute">
                Or continue with
              </span>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-xs text-zinc-300">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    className="pl-9 bg-zinc-900/60 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Conditional Recruiter-specific Field */}
              {role === "recruiter" && (
                <div className="space-y-2">
                  <Label
                    htmlFor="company-name"
                    className="text-xs text-zinc-300"
                  >
                    Company Name
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                    <Input
                      id="company-name"
                      type="text"
                      placeholder="Acme Corp"
                      className="pl-9 bg-zinc-900/60 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
                      required
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-xs text-zinc-300">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9 bg-zinc-900/60 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="signup-password"
                  className="text-xs text-zinc-300"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9 bg-zinc-900/60 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-5 font-medium shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>
                  Create {roles.find((r) => r.id === role)?.label} Account
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            {/* Navigation Link to Sign In */}
            <div className="text-center pt-2">
              <p className="text-xs text-zinc-400">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-indigo-400 font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
