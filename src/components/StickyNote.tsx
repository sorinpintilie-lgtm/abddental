"use client";

const EMAIL = "dan.trifan@sky.ro";
const PHONE_DISPLAY = "+4 0720 088 880";
const PHONE_E164 = "+40720088880";

const EMAIL_HREF = `mailto:${EMAIL}`;
const PHONE_HREF = `tel:${PHONE_E164}`;
const WHATSAPP_HREF = `https://wa.me/40720088880`;

// Spec: 36–44px max.
const BAR_HEIGHT_PX = 44;

export function StickyNote() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-[55] border-b border-[#1F2933]/15 bg-[#F2B94B] text-[#1F2933]"
      style={
        {
          height: `calc(${BAR_HEIGHT_PX}px + env(safe-area-inset-top))`,
          paddingTop: "env(safe-area-inset-top)",
        } as React.CSSProperties
      }
      data-ui="promo-bar"
    >
      <div className="mx-auto flex h-[44px] max-w-6xl items-center gap-3 overflow-x-auto whitespace-nowrap px-4 text-xs sm:text-sm">
        <div className="min-w-0 flex-1 truncate font-normal">
          Concept demo • Conținut orientativ • Dezvoltat de sky.ro •{" "}
          <a href={EMAIL_HREF} className="underline underline-offset-2">
            {EMAIL}
          </a>
          {" "}•{" "}
          <a href={PHONE_HREF} className="underline underline-offset-2">
            {PHONE_DISPLAY}
          </a>
        </div>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#2F80ED] px-3 py-1.5 text-xs font-normal text-white transition-colors hover:bg-[#2569c7] sm:text-sm"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

