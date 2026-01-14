"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { Header } from "@/components/Header";
import {
  ToothIcon,
  DentalImplantIcon,
  SparkleIcon,
  MicroscopeIcon,
  SurgeryIcon,
  ShieldIcon,
  BracesIcon,
  AwardIcon,
  UsersIcon,
  HeartIcon,
  LightningIcon,
} from "@/components/DentalIcons";
import {
  Star,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services: Array<{
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    title: "Implantologie",
    description:
      "Soluții avansate de implant dentar pentru înlocuirea permanentă a dinților lipsă.",
    icon: DentalImplantIcon,
  },
  {
    title: "Estetică dentară",
    description:
      "Transformă-ți zâmbetul cu proceduri cosmetice adaptate trăsăturilor tale.",
    icon: SparkleIcon,
  },
  {
    title: "Endodonție",
    description:
      "Tratamente de canal radicular de precizie folosind tehnologie digitală avansată.",
    icon: MicroscopeIcon,
  },
  {
    title: "Chirurgie orală",
    description:
      "Intervenții chirurgicale experte pentru afecțiuni dentare complexe.",
    icon: SurgeryIcon,
  },
  {
    title: "Profilaxie",
    description:
      "Protocoale complete de prevenție pentru menținerea sănătății orale optime.",
    icon: ShieldIcon,
  },
  {
    title: "Ortodonție",
    description:
      "Corectarea dinților și maxilarelor dezaliniate cu tratamente moderne.",
    icon: BracesIcon,
  },
];

const contacts = {
  phone: "0733 525 544",
  email: "contact@abtdental.ro",
  address: "Matei Voievod 60-62, Bucharest, Romania",
  instagram: "@abtdental",
  tiktok: "@dr.claudiabutunoi",
} as const;

const testimonials = [
  {
    name: "Maria P.",
    text: "Servicii excepționale și atenție la detalii. Echipa m-a făcut să mă simt confortabil pe tot parcursul procesului.",
    rating: 5,
  },
  {
    name: "Ion I.",
    text: "Procedura de implant dentar a fost rapidă și fără durere. Echipă foarte profesionistă.",
    rating: 5,
  },
  {
    name: "Elena D.",
    text: "Clinică modernă cu tehnologie de ultimă generație. Rezultatele au depășit așteptările.",
    rating: 5,
  },
  {
    name: "Andrei P.",
    text: "Calitate excepțională a îngrijirii. Au rezolvat toate problemele mele dentare eficient.",
    rating: 5,
  },
];

const carouselItems = [
  { text: "Implantologie avansată" },
  { text: "Tehnologie digitală" },
  { text: "Laborator propriu" },
  { text: "Echipă expertă" },
  { text: "Rezultate garantate" },
  { text: "Tratamente moderne" },
  { text: "Consultații gratuite" },
  { text: "Prețuri competitive" },
];

const media = {
  heroVideo:
    "/dentist-does-a-surgery-in-modern-clinic-2025-12-17-08-25-50-utc.mov",
  images: [
    {
      src: "/dentist-and-patient-at-modern-medical-center-doct-2026-01-08-02-37-53-utc.jpg",
      alt: "Dentist și pacient în clinică modernă",
      label: "Consultație",
    },
    {
      src: "/portrait-of-smiling-dentist-standing-with-arms-cro-2026-01-11-10-31-41-utc.jpg",
      alt: "Portret medic dentist profesionist",
      label: "Expertiză",
    },
    {
      src: "/young-male-dentist-in-clinic-2026-01-09-00-45-51-utc.jpg",
      alt: "Medic dentist în clinică modernă",
      label: "Profesionalism",
    },
    {
      src: "/close-up-of-doctor-examining-patient-2026-01-09-08-41-13-utc.jpg",
      alt: "Examinare dentară",
      label: "Precizie",
    },
  ],
} as const;

const benefits = [
  {
    icon: AwardIcon,
    title: "Experiență vastă",
    description: "Peste 15 ani de practică în stomatologie modernă",
  },
  {
    icon: UsersIcon,
    title: "Echipă dedicată",
    description: "Specialiști certificați în toate domeniile dentare",
  },
  {
    icon: HeartIcon,
    title: "Abordare personalizată",
    description: "Fiecare pacient primește un plan de tratament individualizat",
  },
  {
    icon: LightningIcon,
    title: "Tehnologie avansată",
    description: "Echipamente de ultimă generație pentru rezultate optime",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentProcessStep, setCurrentProcessStep] = useState(0);

  const processSteps = [
    { step: "01", title: "Consultație inițială", desc: "Evaluare completă și plan personalizat de tratament" },
    { step: "02", title: "Planificare digitală", desc: "Scanare 3d și simulare a rezultatelor finale" },
    { step: "03", title: "Tratament expert", desc: "Proceduri moderne cu tehnologie avansată" },
    { step: "04", title: "Monitorizare", desc: "Urmărire continuă pentru rezultate optime" },
    { step: "05", title: "Îngrijire post-tratament", desc: "Suport complet și consultații de control" },
    { step: "06", title: "Garanție & suport", desc: "Asistență pe termen lung pentru zâmbetul tău" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextStep = () => {
    setCurrentProcessStep((prev) => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setCurrentProcessStep((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--background)]">
      <Header phone={contacts.phone} />
      
      {/* Background decorative elements */}
      <div className="pointer-events-none fixed left-0 top-[120vh] z-0 h-[600px] w-full opacity-20">
        <svg className="h-full w-full" viewBox="0 0 1920 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <circle cx="100" cy="300" r="200" stroke="#1BA5EE" strokeWidth="2" strokeDasharray="12 12" />
          <circle cx="100" cy="300" r="140" stroke="#1BA5EE" strokeWidth="1" opacity="0.5" />
          <rect x="1600" y="100" width="180" height="180" stroke="#1BA5EE" strokeWidth="1.5" rx="16" />
          <rect x="1700" y="350" width="120" height="120" stroke="#1BA5EE" strokeWidth="1" strokeDasharray="6 6" rx="12" opacity="0.6" />
        </svg>
      </div>
      
      <div className="pointer-events-none fixed left-0 top-[200vh] z-0 h-[600px] w-full opacity-15">
        <svg className="h-full w-full" viewBox="0 0 1920 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M 0 300 Q 480 100 960 300 T 1920 300" stroke="#1BA5EE" strokeWidth="2" fill="none" />
          <path d="M 0 350 Q 480 150 960 350 T 1920 350" stroke="#1BA5EE" strokeWidth="1" fill="none" strokeDasharray="8 8" opacity="0.5" />
          <circle cx="1700" cy="150" r="160" stroke="#1BA5EE" strokeWidth="1.5" strokeDasharray="15 15" />
        </svg>
      </div>

      {/* Hero section with video */}
      <section id="top" className="relative min-h-[100svh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={media.images[0].src}
        >
          <source src={media.heroVideo} type="video/mp4" />
          <source src={media.heroVideo} type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-4 text-center">
          <Reveal>
            <Image
              src="/logo.png"
              alt="ABT Dental Clinic"
              width={180}
              height={180}
              priority
              className="h-auto w-[180px] object-contain drop-shadow-2xl"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-20 max-w-3xl text-balance text-4xl font-light leading-tight tracking-tight text-[color:var(--dark-accent)] sm:text-6xl">
              Profesionalism în fiecare tratament
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-col gap-3 sm:flex-row">
              <motion.a
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:shadow-[color:var(--accent)]/30"
              >
                <span className="relative z-10">Programează-te</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[color:var(--accent2)] to-[color:var(--accent)] opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.98 }}
                href="#content"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[color:var(--accent)] bg-white px-8 py-3.5 text-sm font-light text-[color:var(--accent)] shadow-lg transition-all hover:bg-[color:var(--accent)]/5 hover:shadow-xl"
              >
                Descoperă mai mult
              </motion.a>
            </div>
          </Reveal>

          <motion.a
            href="#content"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8"
          >
            <div className="flex h-12 w-8 items-end justify-center rounded-full border-2 border-[color:var(--accent)] bg-white/90 p-2 shadow-lg backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-2 rounded-full bg-[color:var(--accent)]"
              />
            </div>
          </motion.a>
        </div>
      </section>

      <main id="content" className="relative">
        {/* Benefits section */}
        <section className="relative mb-20 overflow-hidden">
          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[color:var(--accent)]/5 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[color:var(--accent2)]/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10">
            <Reveal>
              <h2 className="text-center text-3xl font-light tracking-tight text-[color:var(--foreground)] sm:text-4xl">
                De ce să alegi <span className="font-normal text-[color:var(--accent)]">ABTdental</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, idx) => (
                <Reveal key={benefit.title} delay={idx * 0.05}>
                  <div className="group flex h-full flex-col rounded-3xl border-2 border-[color:var(--accent)]/20 bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-2 hover:border-[color:var(--accent)] hover:shadow-2xl hover:shadow-[color:var(--accent)]/20">
                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl border-2 border-[color:var(--accent)]/30 bg-gradient-to-br from-[color:var(--accent)]/10 to-[color:var(--accent)]/5 transition-all group-hover:scale-110 group-hover:border-[color:var(--accent)]">
                      <benefit.icon className="h-10 w-10 text-[color:var(--accent)]" />
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-[color:var(--dark-accent)]">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Infinite carousel */}
        <section className="mb-20">
          <InfiniteCarousel items={carouselItems} speed={40} />
        </section>

        {/* Team section */}
        <section id="despre" className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[color:var(--accent)]/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border-2 border-[color:var(--accent)]/20 bg-white shadow-2xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-96 w-full md:h-auto">
                    <Image
                      src={media.images[1].src}
                      alt={media.images[1].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent md:bg-gradient-to-r" />
                    <div className="absolute left-6 top-6 rounded-full border-2 border-[color:var(--accent)] bg-white/95 px-4 py-2 text-sm font-medium tracking-tight text-[color:var(--accent)] backdrop-blur-sm">
                      {media.images[1].label}
                    </div>
                  </div>
                  <div className="p-10 md:p-12">
                    <h2 className="text-4xl font-light tracking-tight text-[color:var(--foreground)]">
                      Echipă <span className="font-normal text-[color:var(--accent)]">dedicată</span>
                    </h2>
                    <p className="mt-6 text-lg font-light leading-relaxed text-[color:var(--muted)]">
                      Specialiștii noștri sunt experți în diverse domenii ale stomatologiei moderne, oferind consultații personalizate și tratamente adaptate nevoilor fiecărui pacient.
                    </p>

                    <div className="mt-8 grid gap-4">
                      {["Experiență vastă", "Abordare personalizată", "Tehnologie avansată"].map(
                        (b) => (
                          <div
                            key={b}
                            className="rounded-2xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/5 to-transparent px-6 py-4 text-center text-base font-light text-[color:var(--foreground)] transition-all hover:border-[color:var(--accent)] hover:shadow-lg"
                          >
                            {b}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Image showcase */}
        <section className="relative mb-20 overflow-hidden">
          <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-[color:var(--accent2)]/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="rounded-3xl border-2 border-[color:var(--accent)]/20 bg-white p-10 shadow-2xl md:p-12">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                  <div>
                    <h2 className="text-4xl font-light tracking-tight text-[color:var(--foreground)] md:text-5xl">
                      Clinică <span className="font-normal text-[color:var(--accent)]">modernă</span>
                    </h2>
                    <p className="mt-6 text-lg font-light leading-relaxed text-[color:var(--muted)]">
                      Combinăm tehnologia de ultimă generație cu precizia estetică într-un flux simplificat: consultație, planificare, tratament și urmărire.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {[
                        { k: "2500+", v: "Pacienți" },
                        { k: "15+", v: "Ani" },
                        { k: "98%", v: "Satisfacție" },
                      ].map((s) => (
                        <div
                          key={s.k}
                          className="flex h-full flex-col justify-center rounded-2xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/10 to-transparent p-5 text-center transition-all hover:border-[color:var(--accent)] hover:shadow-lg"
                        >
                          <div className="text-3xl font-normal tracking-tight text-[color:var(--accent)]">
                            {s.k}
                          </div>
                          <div className="mt-2 text-sm font-light text-[color:var(--foreground)]">{s.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[color:var(--accent)]/20 shadow-xl">
                    <div className="relative h-96 w-full">
                      <Image
                        src={media.images[0].src}
                        alt={media.images[0].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                    </div>
                    <div className="absolute left-4 top-4 rounded-full border-2 border-[color:var(--accent)] bg-white/95 px-4 py-2 text-sm font-medium tracking-tight text-[color:var(--accent)] backdrop-blur-sm">
                      {media.images[0].label}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process Section - Carousel */}
        <section className="relative mb-20 overflow-hidden">
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[color:var(--accent)]/5 blur-3xl" />
          <div className="absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-[color:var(--accent2)]/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <h2 className="text-center text-4xl font-light tracking-tight text-[color:var(--foreground)] sm:text-5xl">
                Procesul <span className="font-normal text-[color:var(--accent)]">nostru</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-light text-[color:var(--muted)]">
                De la prima consultație până la rezultatul final
              </p>
            </Reveal>

            <div className="mt-12 flex items-center gap-6">
              {/* Previous Arrow */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={prevStep}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-[color:var(--accent)] bg-white text-[color:var(--accent)] shadow-lg transition-all hover:bg-[color:var(--accent)] hover:text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              {/* Carousel Content */}
              <div className="flex-1 overflow-hidden">
                <motion.div
                  key={currentProcessStep}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -left-4 -top-4 text-9xl font-bold text-[color:var(--accent)]/5">
                    {processSteps[currentProcessStep].step}
                  </div>
                  <div className="relative rounded-3xl border-2 border-[color:var(--accent)]/20 bg-white p-12 shadow-lg">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent2)] text-2xl font-bold text-white shadow-lg">
                      {processSteps[currentProcessStep].step}
                    </div>
                    <h3 className="text-3xl font-medium text-[color:var(--dark-accent)]">
                      {processSteps[currentProcessStep].title}
                    </h3>
                    <p className="mt-4 text-lg font-light leading-relaxed text-[color:var(--muted)]">
                      {processSteps[currentProcessStep].desc}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Next Arrow */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-[color:var(--accent)] bg-white text-[color:var(--accent)] shadow-lg transition-all hover:bg-[color:var(--accent)] hover:text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Step Indicators */}
            <div className="mt-8 flex justify-center gap-2">
              {processSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProcessStep(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentProcessStep
                      ? 'w-8 bg-[color:var(--accent)]'
                      : 'w-2 bg-[color:var(--accent)]/30 hover:bg-[color:var(--accent)]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section - Full Width with Offset */}
        <section className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[color:var(--background-light)] to-white" />
          <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
          <div className="absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-[color:var(--accent2)]/10 blur-3xl" />
          
          <div className="relative py-20">
            <div className="mx-auto max-w-6xl px-4">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal direction="left">
                  <div className="relative">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-3xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/5 to-transparent" />
                    <div className="relative space-y-6">
                      <h2 className="text-4xl font-light tracking-tight text-[color:var(--foreground)] lg:text-5xl">
                        Tehnologie <span className="font-normal text-[color:var(--accent)]">avansată</span>
                      </h2>
                      <p className="text-lg font-light leading-relaxed text-[color:var(--muted)]">
                        Investim constant în cele mai noi tehnologii pentru a oferi tratamente precise, rapide și confortabile.
                      </p>
                      
                      <div className="space-y-4 pt-4">
                        {[
                          { icon: MicroscopeIcon, title: "Microscopie dentară", desc: "Precizie maximă în tratamente" },
                          { icon: SparkleIcon, title: "Scanare digitală 3d", desc: "Fără amprente tradiționale incomode" },
                          { icon: LightningIcon, title: "Laser dentar", desc: "Tratamente minim invazive" },
                          { icon: ToothIcon, title: "Cad/cam", desc: "Restaurări în aceeași zi" },
                        ].map((tech) => (
                          <div
                            key={tech.title}
                            className="group flex h-full items-start gap-4 rounded-2xl border-2 border-[color:var(--accent)]/10 bg-white p-5 transition-all hover:border-[color:var(--accent)] hover:shadow-lg"
                          >
                            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/10 to-transparent transition-all group-hover:border-[color:var(--accent)]">
                              <tech.icon className="h-6 w-6 text-[color:var(--accent)]" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-[color:var(--dark-accent)]">{tech.title}</h4>
                              <p className="mt-1 text-sm font-light text-[color:var(--muted)]">{tech.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="right">
                  <div className="relative lg:ml-12">
                    <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border-2 border-dashed border-[color:var(--accent)]/20" />
                    <div className="relative grid gap-6">
                      <div className="overflow-hidden rounded-3xl border-2 border-[color:var(--accent)]/20 shadow-2xl">
                        <Image
                          src={media.images[2].src}
                          alt={media.images[2].alt}
                          width={600}
                          height={400}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex h-full flex-col justify-center rounded-2xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/10 to-white p-6 text-center shadow-lg">
                          <div className="text-3xl font-normal text-[color:var(--accent)]">100%</div>
                          <div className="mt-2 text-sm font-light text-[color:var(--foreground)]">Digital</div>
                        </div>
                        <div className="flex h-full flex-col justify-center rounded-2xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent2)]/10 to-white p-6 text-center shadow-lg">
                          <div className="text-3xl font-normal text-[color:var(--accent)]">24/7</div>
                          <div className="mt-2 text-sm font-light text-[color:var(--foreground)]">Urgențe</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[color:var(--accent)]/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <h2 className="text-center text-4xl font-light tracking-tight text-[color:var(--foreground)] sm:text-5xl">
                Recenzii
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {testimonials.map((testimonial, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="flex h-full flex-col rounded-3xl border-2 border-[color:var(--accent)]/20 bg-white p-8 transition-all hover:border-[color:var(--accent)]">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-[color:var(--accent)] text-[color:var(--accent)]"
                        />
                      ))}
                    </div>
                    <p className="mt-5 flex-1 text-base font-light leading-relaxed text-[color:var(--muted)]">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="mt-5 font-medium text-[color:var(--foreground)]">
                      — {testimonial.name}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicii" className="relative mb-20 overflow-hidden">
          <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[color:var(--accent2)]/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <h2 className="text-center text-4xl font-light tracking-tight text-[color:var(--foreground)] sm:text-5xl">
                Servicii <span className="font-normal text-[color:var(--accent)]">stomatologice</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-light text-[color:var(--muted)]">
                Gamă completă de îngrijire dentară adaptată nevoilor tale
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, idx) => (
                <Reveal
                  key={s.title}
                  delay={idx * 0.05}
                >
                  <article className="group flex h-full flex-col rounded-3xl border-2 border-[color:var(--accent)]/20 bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:border-[color:var(--accent)] hover:shadow-2xl hover:shadow-[color:var(--accent)]/20">
                    <div className="flex flex-col items-center text-center">
                      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-2 border-[color:var(--accent)]/30 bg-gradient-to-br from-[color:var(--accent)]/10 to-[color:var(--accent)]/5 transition-all group-hover:scale-110 group-hover:border-[color:var(--accent)]">
                        <s.icon className="h-8 w-8 text-[color:var(--accent)]" />
                      </div>

                      <h3 className="mt-5 text-lg font-medium tracking-tight text-[color:var(--dark-accent)]">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-4 flex-1 text-center text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      {s.description}
                    </p>
                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      href="#contact"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[color:var(--accent2)] hover:shadow-lg"
                    >
                      Află mai mult →
                    </motion.a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Asymmetric Layout */}
        <section className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[color:var(--accent)]/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <h2 className="text-center text-4xl font-light tracking-tight text-[color:var(--foreground)] sm:text-5xl">
                Întrebări <span className="font-normal text-[color:var(--accent)]">frecvente</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                { q: "Cât durează un implant dentar?", a: "Procesul complet durează între 3-6 luni, dar rezultatul este permanent și natural." },
                { q: "Este dureros tratamentul?", a: "Folosim anestezie locală și tehnici moderne pentru confort maxim. Majoritatea pacienților raportează disconfort minim." },
                { q: "Acceptați asigurări?", a: "Da, colaborăm cu principalele companii de asigurări medicale. Contactați-ne pentru detalii." },
                { q: "Oferiți consultații gratuite?", a: "Prima consultație este gratuită și include evaluare completă și plan de tratament personalizat." },
                { q: "Care este timpul de recuperare?", a: "Depinde de procedură, dar majoritatea tratamentelor permit reluarea activităților normale în 24-48 ore." },
                { q: "Oferiți garanție?", a: "Da, toate tratamentele beneficiază de garanție și suport post-tratament complet." },
              ].map((faq, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className={`flex h-full flex-col rounded-3xl border-2 border-[color:var(--accent)]/20 bg-white p-8 transition-all hover:border-[color:var(--accent)] ${idx % 3 === 0 ? 'lg:col-span-2' : ''}`}>
                    <h3 className="text-lg font-medium text-[color:var(--dark-accent)]">
                      {faq.q}
                    </h3>
                    <p className="mt-4 flex-1 text-base font-light leading-relaxed text-[color:var(--muted)]">
                      {faq.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Full Width */}
        <section className="relative mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent2)]" />
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
              <circle cx="1720" cy="200" r="180" stroke="white" strokeWidth="1.5" strokeDasharray="15 15" />
              <rect x="800" y="50" width="320" height="320" stroke="white" strokeWidth="1" rx="160" />
            </svg>
          </div>
          
          <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
            <Reveal>
              <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
                Începe transformarea <span className="font-normal">zâmbetului tău</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/90">
                Programează o consultație gratuită și descoperă cum putem transforma zâmbetul tău cu tehnologie avansată și expertiză dedicată.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white bg-white px-10 py-5 text-base font-medium text-[color:var(--accent)] shadow-2xl transition-all hover:bg-white/90"
                >
                  <Phone className="h-5 w-5" />
                  Sună acum
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-transparent px-10 py-5 text-base font-light text-white transition-all hover:bg-white/10"
                >
                  Programează online
                </motion.a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact - Moved to bottom */}
        <section id="contact" className="relative mb-20 overflow-hidden">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[color:var(--accent)]/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <h2 className="text-center text-4xl font-light tracking-tight text-[color:var(--foreground)] sm:text-5xl">
                <span className="font-normal text-[color:var(--accent)]">Contactează-ne</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Reveal direction="left">
                <div className="flex h-full flex-col rounded-3xl border-2 border-[color:var(--accent)]/20 bg-white p-8">
                  <div className="grid gap-4">
                    <a
                      className="group rounded-2xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/5 to-transparent p-6 transition-all hover:border-[color:var(--accent)] hover:shadow-lg"
                      href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-[color:var(--accent)]" />
                        <div className="text-sm font-light text-[color:var(--accent)]">Telefon</div>
                      </div>
                      <div className="mt-2 text-xl font-medium text-[color:var(--foreground)]">
                        {contacts.phone}
                      </div>
                    </a>
                    
                    <a
                      className="group rounded-2xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/5 to-transparent p-6 transition-all hover:border-[color:var(--accent)] hover:shadow-lg"
                      href={`mailto:${contacts.email}`}
                    >
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-[color:var(--accent)]" />
                        <div className="text-sm font-light text-[color:var(--accent)]">Email</div>
                      </div>
                      <div className="mt-2 text-xl font-medium text-[color:var(--foreground)]">
                        {contacts.email}
                      </div>
                    </a>

                    <div className="rounded-2xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/5 to-transparent p-6">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-[color:var(--accent)]" />
                        <div className="text-sm font-light text-[color:var(--accent)]">Adresă</div>
                      </div>
                      <div className="mt-2 text-lg font-light leading-relaxed text-[color:var(--foreground)]">
                        {contacts.address}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[color:var(--accent)]/20 bg-white">
                  <div className="p-8">
                    <h3 className="text-2xl font-light text-[color:var(--foreground)]">
                      Găsește-ne
                    </h3>
                    <p className="mt-2 text-sm font-light text-[color:var(--muted)]">
                      Vizitează clinica noastră din București
                    </p>
                  </div>
                  <div className="relative h-[400px] w-full flex-1">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.8!2d26.1!3d44.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI0JzAwLjAiTiAyNsKwMDYnMDAuMCJF!5e0!3m2!1sen!2sro!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Redesigned */}
      <footer className="relative overflow-hidden border-t-2 border-[color:var(--accent)]/20 bg-gradient-to-b from-white via-[color:var(--background-light)] to-white">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-5">
          <svg className="h-full w-full" viewBox="0 0 1920 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="100" cy="100" r="200" stroke="#1BA5EE" strokeWidth="2" />
            <circle cx="1820" cy="700" r="250" stroke="#1BA5EE" strokeWidth="1.5" strokeDasharray="20 20" />
            <rect x="1400" y="100" width="300" height="300" stroke="#1BA5EE" strokeWidth="1" rx="150" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20">
          {/* Main Footer Content - Asymmetric Grid */}
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative">
                  <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl border-2 border-[color:var(--accent)]/10 bg-gradient-to-br from-[color:var(--accent)]/5 to-transparent" />
                  <div className="relative">
                    <Image
                      src="/logo.png"
                      alt="ABT Dental Clinic"
                      width={120}
                      height={120}
                      className="h-auto w-28 object-contain"
                    />
                    <h3 className="mt-6 text-3xl font-light text-[color:var(--foreground)]">
                      ABTdental <span className="font-normal text-[color:var(--accent)]">Clinic</span>
                    </h3>
                    <p className="mt-4 max-w-md text-base font-light leading-relaxed text-[color:var(--muted)]">
                      Excelență în stomatologie modernă. Transformăm zâmbete cu precizie, tehnologie avansată și grijă personalizată.
                    </p>
                    
                    {/* Newsletter */}
                    <div className="mt-8">
                      <h4 className="text-lg font-medium text-[color:var(--foreground)]">
                        Newsletter
                      </h4>
                      <p className="mt-2 text-sm font-light text-[color:var(--muted)]">
                        Primește sfaturi și oferte exclusive
                      </p>
                      <form className="mt-4 flex gap-2">
                        <input
                          type="email"
                          placeholder="Email"
                          className="flex-1 rounded-xl border-2 border-[color:var(--accent)]/20 bg-white px-4 py-3 text-sm font-light text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20"
                        />
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          type="submit"
                          className="rounded-xl border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-[color:var(--accent2)]"
                        >
                          →
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <Reveal delay={0.1}>
                <h4 className="text-lg font-medium text-[color:var(--foreground)]">
                  Navigare
                </h4>
                <ul className="mt-6 space-y-3">
                  {[
                    { label: "Acasă", href: "#top" },
                    { label: "Despre", href: "#despre" },
                    { label: "Servicii", href: "#servicii" },
                    { label: "Contact", href: "#contact" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 text-base font-light text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <Reveal delay={0.15}>
                <h4 className="text-lg font-medium text-[color:var(--foreground)]">
                  Servicii
                </h4>
                <ul className="mt-6 space-y-3">
                  {services.slice(0, 4).map((service) => (
                    <li key={service.title}>
                      <a
                        href="#servicii"
                        className="inline-flex items-center gap-2 text-base font-light text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Contact & Social */}
            <div className="lg:col-span-3">
              <Reveal delay={0.2}>
                <h4 className="text-lg font-medium text-[color:var(--foreground)]">
                  Contact
                </h4>
                <div className="mt-6 space-y-4">
                  <a
                    href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                    className="group flex items-start gap-3 rounded-xl border-2 border-[color:var(--accent)]/10 bg-white p-4 transition-all hover:border-[color:var(--accent)] hover:shadow-lg"
                  >
                    <Phone className="mt-0.5 h-5 w-5 text-[color:var(--accent)]" />
                    <div>
                      <div className="text-xs font-light text-[color:var(--muted)]">Telefon</div>
                      <div className="mt-1 text-base font-medium text-[color:var(--foreground)]">
                        {contacts.phone}
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href={`mailto:${contacts.email}`}
                    className="group flex items-start gap-3 rounded-xl border-2 border-[color:var(--accent)]/10 bg-white p-4 transition-all hover:border-[color:var(--accent)] hover:shadow-lg"
                  >
                    <Mail className="mt-0.5 h-5 w-5 text-[color:var(--accent)]" />
                    <div>
                      <div className="text-xs font-light text-[color:var(--muted)]">Email</div>
                      <div className="mt-1 text-sm font-medium text-[color:var(--foreground)]">
                        {contacts.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 rounded-xl border-2 border-[color:var(--accent)]/10 bg-white p-4">
                    <MapPin className="mt-0.5 h-5 w-5 text-[color:var(--accent)]" />
                    <div>
                      <div className="text-xs font-light text-[color:var(--muted)]">Adresă</div>
                      <div className="mt-1 text-sm font-light leading-relaxed text-[color:var(--foreground)]">
                        {contacts.address}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-6">
                  <h5 className="text-sm font-medium text-[color:var(--foreground)]">
                    Urmărește-ne
                  </h5>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={`https://instagram.com/${contacts.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-12 w-12 place-items-center rounded-xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/10 to-transparent transition-all hover:scale-110 hover:border-[color:var(--accent)] hover:shadow-lg"
                    >
                      <Instagram className="h-5 w-5 text-[color:var(--accent)]" />
                    </a>
                    <a
                      href={`https://tiktok.com/${contacts.tiktok.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-12 w-12 place-items-center rounded-xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/10 to-transparent transition-all hover:scale-110 hover:border-[color:var(--accent)] hover:shadow-lg"
                    >
                      <svg className="h-5 w-5 text-[color:var(--accent)]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${contacts.email}`}
                      className="grid h-12 w-12 place-items-center rounded-xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent)]/10 to-transparent transition-all hover:scale-110 hover:border-[color:var(--accent)] hover:shadow-lg"
                    >
                      <Mail className="h-5 w-5 text-[color:var(--accent)]" />
                    </a>
                  </div>
                  <div className="mt-3 space-y-1 text-xs font-light text-[color:var(--muted)]">
                    <p>Ig: {contacts.instagram}</p>
                    <p>Tt: {contacts.tiktok}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 border-t-2 border-[color:var(--accent)]/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-light text-[color:var(--muted)]">
                <a href="#" className="transition-colors hover:text-[color:var(--accent)]">
                  Termeni și condiții
                </a>
                <span className="h-1 w-1 rounded-full bg-[color:var(--muted)]" />
                <a href="#" className="transition-colors hover:text-[color:var(--accent)]">
                  Politică de confidențialitate
                </a>
                <span className="h-1 w-1 rounded-full bg-[color:var(--muted)]" />
                <a href="#" className="transition-colors hover:text-[color:var(--accent)]">
                  Gdpr
                </a>
              </div>

              <a
                href="https://sky.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-light text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
              >
                <span>Powered by</span>
                <Image
                  src="/skyro_logo_wide.png"
                  alt="sky.ro"
                  width={92}
                  height={20}
                  className="h-5 w-auto opacity-90"
                />
              </a>

              <div className="text-center text-sm font-light text-[color:var(--muted)] lg:text-right">
                © {new Date().getFullYear()} ABTdental Clinic. Toate drepturile rezervate.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile bottom CTA */}
      <div className={`fixed inset-x-0 bottom-0 z-50 border-t-2 border-[color:var(--accent)]/20 bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 sm:hidden ${
        isScrolled ? "translate-y-full" : "translate-y-0"
      }`}>
        <div className="mx-auto flex max-w-6xl gap-3 px-4 py-4">
          <motion.a
            whileTap={{ scale: 0.98 }}
            href={`tel:${contacts.phone.replace(/\s/g, "")}`}
            className="flex-1 rounded-2xl border-2 border-[color:var(--accent)] bg-[color:var(--accent)] py-4 text-center text-base font-medium text-white shadow-lg"
          >
            Sună
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="flex-1 rounded-2xl border-2 border-[color:var(--accent)] bg-white py-4 text-center text-base font-light text-[color:var(--accent)]"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </div>
  );
}
