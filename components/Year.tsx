"use client";

import { useEffect, useState } from "react";

// Year at build time, so the footer is never blank without JavaScript.
const BUILD_YEAR = 2026;

/** Current year, refreshed in the browser so the static build never goes stale. */
export default function Year() {
  const [year, setYear] = useState(BUILD_YEAR);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
