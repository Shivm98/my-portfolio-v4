"use client";

import { formatYearsProse, getCareerYearsElapsed } from "@/lib/careerYears";

export default function ExperienceYearsNote() {
  return (
    <p className="text-on-surface-variant text-sm font-light tracking-wide max-w-xl mx-auto mt-4">
      {formatYearsProse(getCareerYearsElapsed())} of professional experience
      since January 2021.
    </p>
  );
}
