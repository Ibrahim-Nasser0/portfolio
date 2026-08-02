/**
 * Utility functions for dynamic experience duration and cumulative career calculation.
 */

export interface ExperienceDateConfig {
  startDate: string; // ISO date string e.g. "2026-05-01" or "2025-07-01"
  endDate?: string;  // ISO date string e.g. "2026-01-31" or undefined for Present
}

/**
 * Calculates human-readable duration for a single role (e.g., "4 mos", "1 yr 2 mos", "2 yrs").
 */
export function calculateRoleDuration(startDateStr: string, endDateStr?: string): string {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  if (isNaN(start.getTime())) return "";

  // Calculate year and month difference
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth() + 1; // inclusive of start month

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0 && months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  }

  return parts.join(" ") || "1 mo";
}

/**
 * Calculates cumulative total engineering experience across all roles in years relative to new Date().
 */
export function calculateTotalExperienceYears(experiences: ExperienceDateConfig[]): string {
  if (!experiences || experiences.length === 0) return "1+ Years";

  // Find earliest start date
  let earliestStart: Date | null = null;

  experiences.forEach((exp) => {
    const s = new Date(exp.startDate);
    if (!isNaN(s.getTime())) {
      if (!earliestStart || s < earliestStart) {
        earliestStart = s;
      }
    }
  });

  if (!earliestStart) return "1+ Years";

  const now = new Date();
  let totalYears = now.getFullYear() - (earliestStart as Date).getFullYear();
  const monthDiff = now.getMonth() - (earliestStart as Date).getMonth();

  if (monthDiff < 0) {
    totalYears -= 1;
  }

  const exactYears = Math.max(1, totalYears);
  return `${exactYears}+ Years`;
}
