"use client";

import { useState } from "react";
import {
  ArrowLeft,
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
  Globe,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { createJob } from "@/lib/actions/job";
import { JobFormData } from "@/lib/type";

export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";

export default function CreateJobPage() {
  const [jobType, setJobType] = useState<JobType>("Full-time");
  const [isRemote, setIsRemote] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const jobData: JobFormData = {
      title: formData.get("title")?.toString() ?? "",
      companyName: formData.get("companyName")?.toString() ?? "",
      category: formData.get("category")?.toString() ?? "",
      jobType,
      location: formData.get("location")?.toString() ?? "",
      isRemote,
      deadline: formData.get("deadline")?.toString() ?? "",
      minSalary: formData.get("minSalary")?.toString() ?? "",
      maxSalary: formData.get("maxSalary")?.toString() ?? "",
      frequency: formData.get("frequency")?.toString() ?? "",
      responsibilities: formData.get("responsibilities")?.toString() ?? "",
      qualifications: formData.get("qualifications")?.toString() ?? "",
    };
    const result = await createJob(jobData);



  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
              <span>Manage Jobs</span>
              <span>/</span>
              <span className="text-violet-400">Create New Listing</span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight">
              Post a New Job
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Fill in the details below to find the right candidate for your
              team.
            </p>
          </div>

          <Button
            type="submit"
            form="create-job-form"
            className="bg-violet-600 text-white hover:bg-violet-700"
          >
            Publish Job →
          </Button>
        </div>

        {/* Form Container */}
        <form
          id="create-job-form"
          onSubmit={handleSubmit}
          className="space-y-8 rounded-xl border border-white/10 bg-[#111113] p-5 sm:p-7"
        >
          {/* Section 1 */}
          <section className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-semibold text-violet-400">
                1
              </span>
              <h2 className="text-sm font-semibold">Basic Information</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Job Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. Frontend Developer"
                required
                className="border-white/10 bg-[#19191d]"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  placeholder="e.g. HireLoop Network"
                  required
                  className="border-white/10 bg-[#19191d]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Job Category *</Label>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                  className="h-10 w-full rounded-md border border-white/10 bg-[#19191d] px-3 text-sm text-white outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option>Engineering & Tech</option>
                  <option>Design & Creative</option>
                  <option>Marketing</option>
                  <option>Business & Finance</option>
                  <option>Sales</option>
                  <option>Customer Support</option>
                  <option>Human Resources</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Job Type */}
            <div className="space-y-2">
              <Label>Job Type *</Label>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {(
                  [
                    "Full-time",
                    "Part-time",
                    "Contract",
                    "Internship",
                  ] as JobType[]
                ).map((type) => (
                  <Button
                    key={type}
                    type="button"
                    variant="outline"
                    onClick={() => setJobType(type)}
                    className={`border-white/10 ${
                      jobType === type
                        ? "border-violet-500 bg-violet-500/10 text-violet-400"
                        : "bg-[#19191d] text-muted-foreground hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          <div className="border-t border-white/10" />

          {/* Section 2 */}
          <section className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-semibold text-violet-400">
                2
              </span>
              <h2 className="text-sm font-semibold">
                Location, Compensation & Timeline
              </h2>
            </div>

            {/* Remote Switch */}
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-[#19191d] p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-violet-500/10 p-2">
                  <Globe className="h-4 w-4 text-violet-400" />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Remote Work Allowed (Remote)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Enable worldwide or distributed candidate applications
                  </p>
                </div>
              </div>

              <Switch checked={isRemote} onCheckedChange={setIsRemote} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Job Location *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    name="location"
                    placeholder="New York, USA"
                    required={!isRemote}
                    className="border-white/10 bg-[#19191d] pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Application Deadline *</Label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    required
                    className="border-white/10 bg-[#19191d] pl-9 [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            {/* Salary */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="minSalary">Min Salary / Rate</Label>
                <Input
                  id="minSalary"
                  name="minSalary"
                  type="number"
                  min="0"
                  placeholder="$25"
                  className="border-white/10 bg-[#19191d]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxSalary">Max Salary / Rate</Label>
                <Input
                  id="maxSalary"
                  name="maxSalary"
                  type="number"
                  min="0"
                  placeholder="$40"
                  className="border-white/10 bg-[#19191d]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency">Frequency</Label>
                <select
                  id="frequency"
                  name="frequency"
                  defaultValue="per hour"
                  className="h-10 w-full rounded-md border border-white/10 bg-[#19191d] px-3 text-sm outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option>per hour</option>
                  <option>per day</option>
                  <option>per week</option>
                  <option>per month</option>
                  <option>per year</option>
                </select>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10" />

          {/* Section 3 */}
          <section className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-semibold text-violet-400">
                3
              </span>
              <h2 className="text-sm font-semibold">
                Responsibilities & Requirements
              </h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="responsibilities">Key Responsibilities *</Label>
              <Textarea
                id="responsibilities"
                name="responsibilities"
                required
                rows={5}
                placeholder="Describe the key responsibilities and daily tasks..."
                className="resize-y border-white/10 bg-[#19191d] leading-relaxed"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualifications">
                Qualifications & Requirements *
              </Label>
              <Textarea
                id="qualifications"
                name="qualifications"
                required
                rows={5}
                placeholder="• 3+ years of experience with React, TypeScript, and modern architecture&#10;• Strong understanding of component-driven design&#10;• Excellent communication and problem-solving skills"
                className="resize-y border-white/10 bg-[#19191d] leading-relaxed"
              />
            </div>
          </section>

          <div className="border-t border-white/10" />

          {/* Footer */}
          <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center">
            <Button
              type="button"
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-muted-foreground hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <Button
              type="submit"
              className="bg-violet-600 text-white hover:bg-violet-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Publish Job
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
