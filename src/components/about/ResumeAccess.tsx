"use client";

import { useState } from "react";

export function ResumeAccess() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="button-base border-border bg-secondary px-5 py-3 text-sm text-foreground"
      >
        View Resume
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-access-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-caption font-medium tracking-[0.16em] text-muted-foreground">
              RESUME ACCESS
            </p>

            <h2
              id="resume-access-title"
              className="mt-3 text-h3 text-foreground"
            >
              Resume Unavailable
            </h2>

            <p className="mt-3 text-small leading-6 text-muted-foreground">
              To protect my personal information and prevent unauthorized
              copying, my resume is not publicly available.
            </p>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="button-base bg-primary px-5 py-2.5 text-sm text-white"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
