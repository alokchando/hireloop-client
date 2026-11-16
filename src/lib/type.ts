import { JobType } from "@/app/dashboard/recruiter/jobs/new/page";

export interface JobFormData {
  title: string;
  companyName: string;
  category: string;
  jobType: JobType;
  location: string;
  isRemote: boolean;
  deadline: string;
  minSalary: string;
  maxSalary: string;
  frequency: string;
  responsibilities: string;
  qualifications: string;
}