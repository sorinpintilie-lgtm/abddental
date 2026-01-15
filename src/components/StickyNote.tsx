"use client";

const EMAIL = "dan.trifan@sky.ro";
const PHONE_DISPLAY = "+4 0720 088 880";
const PHONE_E164 = "+40720088880";

const EMAIL_HREF = `mailto:${EMAIL}`;
const PHONE_HREF = `tel:${PHONE_E164}`;
const WHATSAPP_HREF = `https://wa.me/40720088880`;

export function StickyNote() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-[9999] border-b border-[#1F2933]/15 bg-[#F2B94B] text-[#1F2933]"
      style={
        {
          height: `calc(var(--promo-bar-height) + env(safe-area-inset-top))`,
          paddingTop: "env(safe-area-inset-top)",
        } as React.CSSProperties
      }
      data-ui="promo-bar"
    >
      <div className="mx-auto flex h-[var(--promo-bar-height)] max-w-6xl items-center px-4 text-xs sm:text-sm">
        {/* Mobile: 3 aligned segments across the full bar width (one line). */}
        <div className="flex w-full items-center justify-between gap-2 sm:hidden">
          <div className="min-w-0 flex-1 truncate font-normal">Concept demo</div>

          <div className="shrink-0 whitespace-nowrap font-normal">Dezvoltat de sky.ro</div>

          <a
            href={PHONE_HREF}
            className="shrink-0 whitespace-nowrap font-normal text-[#2F80ED] underline underline-offset-2"
          >
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Tablet/Desktop: single line copy with clickable email + phone; show CTA. */}
        <div className="hidden w-full items-center gap-3 overflow-hidden whitespace-nowrap sm:flex">
          <div className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-normal">
            Concept demo • Conținut orientativ • Dezvoltat de sky.ro •{" "}
            <a
              href={EMAIL_HREF}
              className="font-normal text-[#2F80ED] underline underline-offset-2"
            >
              {EMAIL}
            </a>
            {" "}•{" "}
            <a
              href={PHONE_HREF}
              className="font-normal text-[#2F80ED] underline underline-offset-2"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#2F80ED] px-3 py-1.5 text-xs font-normal text-white transition-colors hover:bg-[#2569c7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]/40 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

