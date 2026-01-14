"use client";

import { useId, useState } from "react";
import { X, StickyNote as StickyNoteIcon } from "lucide-react";

const PHONE_HREF = "tel:0720088880";

export function StickyNote() {
  const [openMobile, setOpenMobile] = useState(false);
  const titleId = useId();
  const bodyId = useId();

  return (
    <div
      className={
        "fixed left-4 z-[60] bottom-[calc(env(safe-area-inset-bottom)+5rem)] sm:bottom-6 sm:left-6"
      }
      data-ui="sticky-note"
    >
      {/* Desktop: always visible */}
      <div className="hidden sm:block">
        <div className="w-[320px] rounded-2xl border-2 border-[color:var(--accent)]/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border-2 border-[color:var(--accent)]/20 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
              <StickyNoteIcon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium tracking-tight text-[color:var(--foreground)]">
                Concept demo
              </div>
              <div className="mt-1 text-xs font-light text-[color:var(--muted)]">
                Conținut orientativ • Dezvoltat de sky.ro
              </div>
            </div>
          </div>

          <a
            href={PHONE_HREF}
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-[color:var(--accent2)]"
          >
            Vreau varianta finală!
          </a>
        </div>
      </div>

      {/* Mobile: toggleable */}
      <div className="sm:hidden">
        <button
          type="button"
          aria-expanded={openMobile}
          aria-controls={bodyId}
          onClick={() => setOpenMobile(true)}
          className={
            "inline-flex items-center gap-2 rounded-2xl border-2 border-[color:var(--accent)]/20 bg-white/95 px-4 py-3 text-sm font-medium text-[color:var(--foreground)] shadow-2xl backdrop-blur-xl transition-transform active:scale-[0.98] " +
            (openMobile ? "pointer-events-none opacity-0" : "opacity-100")
          }
        >
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
            <StickyNoteIcon className="h-4 w-4" />
          </span>
          Concept demo
        </button>

        <div
          id={bodyId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className={
            "mt-2 w-[min(360px,calc(100vw-2rem))] origin-bottom-left rounded-2xl border-2 border-[color:var(--accent)]/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-200 " +
            (openMobile
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-2 scale-[0.98] opacity-0")
          }
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div
                id={titleId}
                className="text-sm font-medium tracking-tight text-[color:var(--foreground)]"
              >
                Concept demo
              </div>
              <div className="mt-1 text-xs font-light text-[color:var(--muted)]">
                Conținut orientativ • Dezvoltat de sky.ro
              </div>
            </div>
            <button
              type="button"
              aria-label="Închide"
              onClick={() => setOpenMobile(false)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border-2 border-[color:var(--accent)]/20 bg-white text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent)] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <a
            href={PHONE_HREF}
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-4 py-3 text-sm font-medium text-white shadow-lg transition-all active:scale-[0.98]"
          >
            Vreau varianta finală!
          </a>
        </div>
      </div>
    </div>
  );
}

