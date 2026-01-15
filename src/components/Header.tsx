"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  phone: string;
}

export function Header({ phone }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        style={{
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
          // Sit under the promo bar rendered by StickyNote (now a top promo bar).
          top: "calc(var(--promo-bar-height) + env(safe-area-inset-top))",
        }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="border-b-2 border-[color:var(--accent)]/20 bg-white/90 shadow-lg backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            {/* Logo */}
            <a href="#top" className="flex items-center transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="ABT Dental Clinic"
                width={120}
                height={120}
                className="h-auto w-[120px] object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              <a
                href="#servicii"
                className="rounded-full px-4 py-2 text-sm font-light text-[color:var(--dark-accent)] transition hover:bg-[color:var(--accent)]/10 hover:text-[color:var(--accent)]"
              >
                Servicii
              </a>
              <a
                href="#despre"
                className="rounded-full px-4 py-2 text-sm font-light text-[color:var(--dark-accent)] transition hover:bg-[color:var(--accent)]/10 hover:text-[color:var(--accent)]"
              >
                Despre
              </a>
              <a
                href="#contact"
                className="rounded-full px-4 py-2 text-sm font-light text-[color:var(--dark-accent)] transition hover:bg-[color:var(--accent)]/10 hover:text-[color:var(--accent)]"
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTA Button */}
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="hidden items-center justify-center rounded-full border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-[color:var(--accent2)] hover:shadow-xl md:inline-flex"
            >
              Sună Acum
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-[color:var(--accent)] bg-[color:var(--accent)] text-white shadow-lg md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-[70] h-full w-[280px] border-l-2 border-[color:var(--accent)]/20 bg-white shadow-2xl md:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b-2 border-[color:var(--accent)]/20 p-4">
                  <Image
                    src="/logo.png"
                    alt="ABT Dental Clinic"
                    width={80}
                    height={80}
                    className="h-auto w-[80px] object-contain"
                  />
                  <button
                    onClick={closeMobileMenu}
                    className="grid h-10 w-10 place-items-center rounded-full border-2 border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 text-[color:var(--accent)] transition hover:bg-[color:var(--accent)]/20"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 p-4">
                  <a
                    href="#servicii"
                    onClick={closeMobileMenu}
                    className="rounded-2xl border-2 border-[color:var(--accent)]/20 px-4 py-3 text-base font-light text-[color:var(--dark-accent)] transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                  >
                    Servicii
                  </a>
                  <a
                    href="#despre"
                    onClick={closeMobileMenu}
                    className="rounded-2xl border-2 border-[color:var(--accent)]/20 px-4 py-3 text-base font-light text-[color:var(--dark-accent)] transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                  >
                    Despre
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="rounded-2xl border-2 border-[color:var(--accent)]/20 px-4 py-3 text-base font-light text-[color:var(--dark-accent)] transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                  >
                    Contact
                  </a>
                </nav>

                {/* CTA Button */}
                <div className="mt-auto p-4">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center rounded-2xl border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-6 py-4 text-base font-medium text-white shadow-lg"
                  >
                    Sună Acum
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
