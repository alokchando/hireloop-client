
import {
  LayoutDashboard,
  Briefcase,
  Bookmark,
  FileText,
  Users,
  Building2,
  Settings,
  CreditCard,
  PlusCircle,
} from "lucide-react";

export type Role = "seeker" | "recruiter" | "admin";

export const dashboardMenu = {
  seeker: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Jobs",
      url: "/dashboard/seeker/jobs",
      icon: Briefcase,
    },
    {
      title: "Saved Jobs",
      url: "/dashboard/seeker/saved-jobs",
      icon: Bookmark,
    },
    {
      title: "Applications",
      url: "/dashboard/seeker/applications",
      icon: FileText,
    },
    {
      title: "Billing",
      url: "/dashboard/seeker/billing",
      icon: CreditCard,
    },
    {
      title: "Settings",
      url: "/dashboard/seeker/settings",
      icon: Settings,
    },
  ],

 
recruiter: [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Add Job",
    url: "/dashboard/recruiter/jobs/new",
    icon: PlusCircle,
  },
  {
    title: "Manage Jobs",
    url: "/dashboard/recruiter/jobs",
    icon: Briefcase,
  },
  {
    title: "Applicants",
    url: "/dashboard/recruiter/applicants",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/dashboard/recruiter/company",
    icon: Building2,
  },
],


  admin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      url: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Companies",
      url: "/dashboard/admin/companies",
      icon: Building2,
    },
    {
      title: "Jobs",
      url: "/dashboard/admin/jobs",
      icon: Briefcase,
    },
    {
      title: "Payments",
      url: "/dashboard/admin/payments",
      icon: CreditCard,
    },
    {
      title: "Settings",
      url: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
};
