import { toast } from "sonner";
import { JobFormData } from "../type";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createJob = async (data: JobFormData) => {
  const res = await fetch(`${BASE_URL}/createJob`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();

  if (res.ok) {
    toast.success(result.message);
  } else {
    toast.error("Failed to create job");
  }
};
