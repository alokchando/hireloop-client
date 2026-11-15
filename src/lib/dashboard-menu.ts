import {
  LayoutDashboard,
  Briefcase,
  Bookmark,
  FileText,
  Users,
  Building2,
  Settings,
  PlusCircle,
} from "lucide-react";

export type Role = "seeker" | "recruiter" | "admin";

export const dashboardMenu = {
  seeker: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Applications",
      url: "/dashboard/seeker/applications",
      icon: FileText,
    },
    {
      title: "Saved Jobs",
      url: "/dashboard/seeker/saved-jobs",
      icon: Bookmark,
    },
    {
      title: "My Profile",
      url: "/dashboard/seeker/profile",
      icon: Users,
    },
  ],

  recruiter: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Jobs",
      url: "/dashboard/recruiter/jobs",
      icon: Briefcase,
    },
    {
      title: "Post a Job",
      url: "/dashboard/recruiter/post-job",
      icon: PlusCircle,
    },
    {
      title: "Applicants",
      url: "/dashboard/recruiter/applicants",
      icon: Users,
    },
    {
      title: "Company",
      url: "/dashboard/recruiter/company",
      icon: Building2,
    },
  ],

  admin: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Users",
      url: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Manage Jobs",
      url: "/dashboard/admin/jobs",
      icon: Briefcase,
    },
    {
      title: "Companies",
      url: "/dashboard/admin/companies",
      icon: Building2,
    },
    {
      title: "Settings",
      url: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
};