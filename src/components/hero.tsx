"use client";

import {
  Search,
  MapPin,
  Briefcase,
  Building2,
  Users,
  Trophy,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const trendingTags = [
    "Product Designer",
    "AI Engineer",
    "DevOps Engineer",
    "Frontend Dev",
  ];

  const stats = [
    { icon: Briefcase, value: "50K+", label: "Active Jobs" },
    { icon: Building2, value: "12K+", label: "Companies" },
    { icon: Users, value: "2M+", label: "Job Seekers" },
    { icon: Trophy, value: "97%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#090a0f] text-white overflow-hidden flex flex-col items-center justify-between pt-12 pb-16 px-4">
      {/* Dynamic Background Glows & Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[250px] bg-sky-500/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Header & Search Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-8">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/80 text-xs font-medium text-zinc-300 shadow-xl mb-8 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-orange-400" />
          <span>50,000+ NEW JOBS THIS MONTH</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Find Your{" "}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-orange-400 bg-clip-text text-transparent">
            Dream Job
          </span>{" "}
          Today
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar Container */}
        <div className="w-full max-w-2xl bg-[#12141a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 shadow-2xl shadow-indigo-950/20 flex flex-col sm:flex-row items-center gap-2 mb-6">
          {/* Job Title Input */}
          <div className="flex items-center gap-3 px-4 py-3 w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r border-zinc-800">
            <Search className="h-4 w-4 text-zinc-400 shrink-0" />
            <input
              type="text"
              placeholder="Job title, skill, or company"
              className="bg-transparent border-none outline-none text-sm text-white placeholder-zinc-500 w-full"
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center gap-3 px-4 py-3 w-full sm:w-1/2">
            <MapPin className="h-4 w-4 text-zinc-400 shrink-0" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="bg-transparent border-none outline-none text-sm text-white placeholder-zinc-500 w-full"
            />
          </div>

          {/* Search Button */}
          <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-7 py-6 shrink-0 font-medium shadow-lg shadow-indigo-600/30 transition-all">
            Search Jobs
          </Button>
        </div>

        {/* Trending Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400 mb-16">
          <span className="font-medium text-zinc-500 mr-1">Trending:</span>
          {trendingTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 hover:text-white transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Sub-heading & Stats Section */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <p className="text-xl sm:text-2xl font-bold text-zinc-200">
            Assisting over 15,000 job seekers
          </p>
          <p className="text-lg sm:text-xl font-medium text-zinc-400 mt-1">
            find their dream positions worldwide.
          </p>
        </div>

        {/* Stats Grid */}

        <div className="grid grid-cols-4 gap-2 sm:gap-5 w-full">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <div
                key={index}
                className="group relative bg-[#12141a]/60 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 rounded-xl sm:rounded-2xl p-2 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg min-w-0"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <div className="p-1.5 sm:p-3 bg-zinc-900/90 border border-zinc-800 rounded-lg sm:rounded-xl text-indigo-400 group-hover:text-orange-400 transition-colors">
                    <IconComponent className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                  </div>

                  <span className="text-[8px] sm:text-xs font-semibold px-1 sm:px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live
                  </span>
                </div>

                <h3 className="text-lg sm:text-3xl font-extrabold text-white tracking-tight truncate">
                  {stat.value}
                </h3>

                <p className="text-[9px] sm:text-xs text-zinc-400 mt-1 font-medium truncate">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
