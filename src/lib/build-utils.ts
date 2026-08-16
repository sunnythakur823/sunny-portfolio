/**
 * Build-time utilities that should not be imported in client-side code.
 * These are optimized for use during build and static generation.
 */

import fs from "fs";
import path from "path";

import { RESUME_HREF } from "@/lib/constants";

/**
 * Check if resume file exists. This is safe to use during build time
 * and will be evaluated once during static generation.
 */
export function checkResumeExists(): boolean {
  try {
    const resumePath = path.join(process.cwd(), "public", RESUME_HREF.replace(/^\//, ""));
    return fs.existsSync(resumePath);
  } catch {
    return false;
  }
}
