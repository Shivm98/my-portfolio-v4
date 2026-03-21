/**
 * Career timeline starts January 1, 2021 (local calendar date).
 */
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export function getCareerStart() {
  return new Date(2021, 0, 1);
}

export function getCareerYearsElapsed(referenceDate = new Date()) {
  const elapsed = referenceDate.getTime() - getCareerStart().getTime();
  return Math.max(0, elapsed / MS_PER_YEAR);
}

/** e.g. 5.2+ for hero metrics */
export function formatYearsPlus(years) {
  const t = Math.floor(years * 10) / 10;
  return `${t}+`;
}

/** e.g. "5.2 years" or "5 years" for body copy */
export function formatYearsProse(years) {
  const t = Math.round(years * 10) / 10;
  const str = Number.isInteger(t) ? String(t) : t.toFixed(1);
  return `${str} years`;
}
