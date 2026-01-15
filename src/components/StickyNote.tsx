"use client";

import { StickyNote as StickyNoteIcon } from "lucide-react";

const PHONE_HREF = "tel:0720088880";
const BAR_HEIGHT_PX = 44;

export function StickyNote() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-[55] border-b-2 border-[color:var(--accent)]/20 bg-white/90 backdrop-blur-xl"
      style={
        {
          height: `calc(${BAR_HEIGHT_PX}px + env(safe-area-inset-top))`,
          paddingTop: "env(safe-area-inset-top)",
          // Used by the header to position itself under the promo bar.
          ["--promo-bar-height" as never]: `${BAR_HEIGHT_PX}px`,
        } as React.CSSProperties
      }
      data-ui="promo-bar"
    >
      <div className="mx-auto flex h-[44px] max-w-6xl items-center justify-between gap-3 px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border-2 border-[color:var(--accent)]/20 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
            <StickyNoteIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <div className="truncate text-xs font-medium tracking-tight text-[color:var(--foreground)] sm:text-sm">
              Concept demo
            </div>
            <div className="hidden truncate text-[11px] font-light text-[color:var(--muted)] sm:block">
              Conținut orientativ • Dezvoltat de sky.ro
            </div>
          </div>
        </div>

        <a
          href={PHONE_HREF}
          className="inline-flex shrink-0 items-center justify-center rounded-xl border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-3 py-2 text-xs font-medium text-white shadow-lg transition-all hover:bg-[color:var(--accent2)] sm:px-4 sm:text-sm"
        >
          Vreau varianta finală!
        </a>
      </div>
    </div>
  );
}

