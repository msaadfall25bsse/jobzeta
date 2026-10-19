"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorGlasshouseClimateManagerPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [privaCert, setPrivaCert] = useState(true);
  const [hectaresExp, setHectaresExp] = useState(true);
  const [seasonAvailability, setSeasonAvailability] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      {/* Global Jobzeta Header */}
      <Header />

      <main className="w-full pt-20 bg-background flex-1">
        <div className="flex flex-col w-full">
          {/* Top Breadcrumb & Metadata Strip */}
          <section className="w-full bg-surface-container-low px-margin py-space-sm shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-sm">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"
              >
                <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                  <span className="material-symbols-outlined text-[15px]">home</span>
                  <span>Home</span>
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-primary transition-colors" href="/categories/agriculture-and-farming">
                  Agriculture &amp; Farming
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/agriculture-and-farming/horticulture-and-commercial-glasshouse"
                >
                  Horticulture &amp; High-Tech CEA
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-on-surface font-semibold">Technical Specs</span>
              </nav>

              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  ACTIVE GLASSHOUSE FACILITY: WESTLAND (NETHERLANDS)
                </span>
                <span className="px-space-sm py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  PRIVA CONNEXT / HOOGENDOORN CERTIFIED
                </span>
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
                  DIRECT ENTERPRISE REQUISITION
                </span>
                <span className="hidden md:inline-flex px-space-sm py-space-xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                  FACILITY ID: NL-WST-AGRI-18
                </span>
                <span className="hidden lg:inline-flex px-space-sm py-space-xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                  PROTOCOL: ISO 22000 / GLOBALG.A.P. IFA v6
                </span>
                <span className="hidden xl:inline-flex px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  CAPACITY: 180,000 m² (18 Hectares Venlo Glass)
                </span>
              </div>
            </div>
          </section>

          {/* Full-Width Photographic Hero Header with Direct Title Overlay & Floating Tariff */}
          <section className="relative w-full overflow-hidden bg-inverse-surface text-on-primary">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFjofaYoGHE-4gEF7UaEts-zxV8YfNnbVbFxCJAEj8bN5VeRhHru3Y9VsNiQXXjrawDQBqp_YX-k7mghFB97nuJPe3O9w39f__jhXcZuOA9B47NQ2JcVZECLbqHpifLnFdleAbelQ7HPvUqb_4icEm7t-291y04o1U8kDdfciClWvHcferj-oC6FdKOLr3KBXpAq4AG9E3ewYPdqgVw90vS_Tieb-Tnvdg95hnKle5NKrhJ8JWmT6uOA')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/90 to-secondary/70"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-margin py-space-xl lg:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                {/* Left Hero Content */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="px-space-sm py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">tune</span>
                      Priva Master Telemetry
                    </span>
                    <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">water_drop</span>
                      Closed-Loop Hydroponics
                    </span>
                    <span className="px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      Year-Round Production 2025/2026
                    </span>
                  </div>

                  <h1 className="font-headline-xl text-headline-xl text-on-primary tracking-tight max-w-2xl font-bold">
                    Senior High-Tech Glasshouse Climate &amp; CEA Operations Manager
                  </h1>

                  <p className="font-body-lg text-body-lg text-inverse-on-surface/90 leading-relaxed max-w-2xl">
                    Automated Venlo Glasshouse Environmental Control (Priva Connext / Hoogendoorn iGrow - 18 Hectares) • Precision Vapor Pressure Deficit (VPD) Regulation, CO2 Enrichment, Hydroponic Closed-Loop Fertigation &amp; Biological Pest Management (Agrar-Glastuinbouw CAO / Level VI Specialist).
                  </p>

                  <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
                    <span className="inline-flex items-center gap-1 px-space-sm py-space-xs rounded-lg bg-surface-container-highest/30 backdrop-blur-md text-on-primary font-label-md text-label-md">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">verified</span> Priva Academy Level 3
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-space-xs rounded-lg bg-surface-container-highest/30 backdrop-blur-md text-on-primary font-label-md text-label-md">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">psychology</span> Hoogendoorn Climate Expert
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-space-xs rounded-lg bg-surface-container-highest/30 backdrop-blur-md text-on-primary font-label-md text-label-md">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">workspace_premium</span> GlobalG.A.P. Farm Assessor
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-space-xs rounded-lg bg-surface-container-highest/30 backdrop-blur-md text-on-primary font-label-md text-label-md">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">security</span> VCA-VOL Safety Certified
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-space-xs rounded-lg bg-surface-container-highest/30 backdrop-blur-md text-on-primary font-label-md text-label-md">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">sanitizer</span> ToBRFV Biosecurity Clearance
                    </span>
                  </div>
                </div>

                {/* Right Floating Tariff Card */}
                <div className="lg:col-span-5 w-full">
                  <div className="w-full bg-surface-container-lowest text-on-surface rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                    <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        Standard Remuneration: Grade VI
                      </span>
                      <span className="px-space-sm py-space-xs bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded-full font-bold">
                        Verified CAO Scale
                      </span>
                    </div>

                    <div className="mb-space-md">
                      <div className="flex items-baseline gap-space-xs">
                        <span className="font-headline-xl text-headline-xl font-bold text-primary">€4,500 – €6,000</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">/ month gross</span>
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                        Estimated €54,000 – €72,000 annualized base equivalent
                      </p>
                    </div>

                    <div className="space-y-space-xs mb-space-lg bg-surface-container-low p-space-md rounded-lg">
                      <div className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">add_circle</span>
                        <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                          + €25.00 / Day Tax-Free Climate Shift Allowance
                        </span>
                      </div>
                      <div className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">home</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Furnished Executive Agriport Residence Accommodation Included
                        </span>
                      </div>
                      <div className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">electric_car</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Company Electric Utility Vehicle &amp; Dutch Health Plan Included
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-space-sm">
                      <a
                        className="w-full sm:flex-1 py-3 px-space-md bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg rounded-lg text-center font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                        href="#intake-dossier"
                      >
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        <span>Apply for Dispatch</span>
                      </a>
                      <button
                        className="w-full sm:w-auto px-space-md py-3 bg-surface-container hover:bg-surface-container-high text-secondary font-label-lg text-label-lg rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        onClick={handlePrint}
                        title="Download Requisition PDF"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                        <span>Technical PDF</span>
                      </button>
                      <button
                        className="w-full sm:w-auto px-space-sm py-3 bg-surface-container hover:bg-surface-container-high text-secondary font-label-lg text-label-lg rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                        onClick={handleCopyLink}
                        title={copiedLink ? "Link Copied!" : "Share Requisition"}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {copiedLink ? "check" : "share"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Body Layout: Asymmetric 8-col Content vs 4-col Sticky Sidebar */}
          <section className="max-w-7xl mx-auto w-full px-margin py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              {/* Left Column: 5 Operational Modules & Map (8 Cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* MODULE 01 */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-surface-container-high">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        01
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Core Mandate
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                          Primary Scope: Glasshouse Climate Automation &amp; Hydroponic Substrate Dynamics
                        </h2>
                      </div>
                    </div>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The Senior Glasshouse Climate Manager directs 24/7 computerized environmental parameters across 180,000 m² of automated Venlo high-wire tomato and bell pepper production in the Westland agritech corridor. You will maintain microclimate balances between ambient solar radiation, double thermal screens, boiler waste heat, and nutrient feed cycles to ensure peak vegetative-to-generative crop steering.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    {/* Feature Box A */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">thermostat_auto</span>
                        <span>Precision VPD &amp; Photoperiod Optimization</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Dynamic regulation of double thermal energy screens, supplementary TopLED assimilation lighting (220 µmol/m²/s), and variable ridge ventilation to maintain target VPD between 0.8 and 1.2 kPa, preventing guttation and tip-burn.
                      </p>
                    </div>

                    {/* Feature Box B */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs text-secondary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">water_ph</span>
                        <span>Automated Substrate Fertigation &amp; Water Hygiene</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Multi-channel A/B fertilizer injection, automated EC (2.8–3.4 mS/cm) and pH (5.5–5.8) dosing via Priva NutriFit, and 100% closed-loop drain water recovery through high-capacity low-pressure UV disinfection units.
                      </p>
                    </div>
                  </div>

                  {/* Alert Box */}
                  <div className="p-space-md rounded-lg bg-surface-container-high flex items-start gap-space-sm border-l-4 border-error">
                    <span className="material-symbols-outlined text-error text-[24px] mt-0.5">gpp_maybe</span>
                    <div className="flex flex-col gap-1">
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">
                        Zero-Pathogen &amp; ToBRFV Biosecurity Mandate
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Strict enforcement of certified sanitation locks, forced chlorine hand-wash and shoe sterilization, and zero-tobacco policy to prevent Tobamovirus contamination across all grow zones. All internal carts and scissor lifts require daily quaternary sanitization logging.
                      </p>
                    </div>
                  </div>

                  {/* Live Telematics Widget Box */}
                  <div className="bg-surface-container p-space-md rounded-lg mt-space-xs">
                    <div className="flex items-center justify-between mb-space-sm flex-wrap gap-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Glasshouse Atmospheric Efficiency Metrics (Westland Zone 4A)
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Priva Telemetry Live Feed
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                      <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">
                          Average VPD Deviation
                        </span>
                        <span className="font-headline-sm text-headline-sm font-bold text-primary">0.04 kPa</span>
                        <span className="font-label-sm text-label-sm text-primary block mt-1">
                          Target: 1.0 kPa (Optimal)
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">
                          CO2 Injection Rate
                        </span>
                        <span className="font-headline-sm text-headline-sm font-bold text-secondary">985 ppm</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block mt-1">
                          1,000 ppm target buffer
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">
                          Substrate Moisture
                        </span>
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">99.4%</span>
                        <span className="font-label-sm text-label-sm text-primary block mt-1">
                          Dynamic Target Alignment
                        </span>
                      </div>
                    </div>

                    {/* Inline SVG Sparkline */}
                    <div className="mt-space-md pt-space-xs">
                      <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant mb-1">
                        <span>VPD 24h Trendline (Target Corridor: 0.8 - 1.2 kPa)</span>
                        <span>Active Feedback: Continuous</span>
                      </div>
                      <svg className="w-full h-12 text-primary" fill="none" viewBox="0 0 500 48">
                        <path
                          d="M 0,24 Q 40,20 80,26 T 160,22 T 240,16 T 320,28 T 400,20 T 480,24 L 500,22"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                        />
                        <path d="M 0,10 L 500,10" stroke="#bcc9c6" strokeDasharray="3 3" strokeWidth="1" />
                        <path d="M 0,38 L 500,38" stroke="#bcc9c6" strokeDasharray="3 3" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                </article>

                {/* MODULE 02 */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-surface-container-high">
                  <div className="flex items-center gap-space-sm pb-space-xs">
                    <span className="w-8 h-8 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                      02
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                        Operational Rhythm
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Daily Timetable: Glasshouse Microclimate Chronology (24-Hour Cycle)
                      </h2>
                    </div>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    CEA glasshouse crop production follows non-negotiable circadian biological demands. Below is the mandatory operational chronology governed by the Lead Climate Specialist across all 18 hectares.
                  </p>

                  <div className="relative pl-6 space-y-space-md before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-high">
                    {/* Phase 1 */}
                    <div className="relative flex items-start gap-space-md">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center -ml-6 mt-1 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg flex-1">
                        <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                          <span className="font-headline-sm text-headline-sm font-bold text-primary">05:30 – 07:00</span>
                          <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">
                            Phase 1: Pre-Dawn Solar Transition
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Pipe-rail heating pre-heat ramp (+1.5°C/hr), gradual screen de-shading to prevent condensation shock on tomato heads, and baseline leaf temperature infrared sensor verification.
                        </p>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative flex items-start gap-space-md">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center -ml-6 mt-1 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg flex-1">
                        <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                          <span className="font-headline-sm text-headline-sm font-bold text-primary">07:00 – 11:30</span>
                          <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">
                            Phase 2: Morning Assimilation &amp; Fertigation
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Initiation of high-intensity assimilation TopLED lighting. Boiler flue-gas CO2 purification and active injection to maintain 1,000 ppm. Triggering first pulse of Rockwool slab fertigation at 100 J/cm² accumulated radiation.
                        </p>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="relative flex items-start gap-space-md">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center -ml-6 mt-1 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg flex-1">
                        <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                          <span className="font-headline-sm text-headline-sm font-bold text-primary">11:30 – 15:30</span>
                          <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">
                            Phase 3: Solar Radiation Balancing &amp; Shading
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Automated deployment of diffuse shading screens when exterior radiation exceeds 650 W/m². Continuous roof vent angle optimization against leeward and windward gusts. Drain-to-injection ratio validation (target: 30–35% drain).
                        </p>
                      </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="relative flex items-start gap-space-md">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center -ml-6 mt-1 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg flex-1">
                        <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                          <span className="font-headline-sm text-headline-sm font-bold text-primary">15:30 – 18:00</span>
                          <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">
                            Phase 4: Drain Water UV Bio-Assay &amp; Scouting
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Final irrigation cut-off (2 hours before sunset). Sampling recirculated leachate for EC/pH drift. Biological control check: audit of Macrolophus pygmaeus and Encarsia formosa predator wasp distribution against whitefly.
                        </p>
                      </div>
                    </div>

                    {/* Phase 5 */}
                    <div className="relative flex items-start gap-space-md">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center -ml-6 mt-1 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg flex-1">
                        <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                          <span className="font-headline-sm text-headline-sm font-bold text-primary">18:00 – 22:30</span>
                          <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">
                            Phase 5: Night Climate Transition &amp; Humidity Purge
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Closing blackout and energy curtains. Brief crack-venting pulse to purge relative humidity spike below 82% RH. Settling night temperature setpoint to 16.5°C for optimal assimilate translocation into developing fruit trusses.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* MODULE 03 */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-surface-container-high">
                  <div className="flex items-center gap-space-sm pb-space-xs">
                    <span className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                      03
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">
                        Regulatory Framework
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Compliance Matrix: Licensing, Permits &amp; International Equivalencies
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                          NL / EU Primary
                        </span>
                        <span className="font-label-lg text-label-lg font-bold text-on-surface">
                          CAO Glastuinbouw Schaal VI
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full compliance with Collective Labour Agreement for Protected Horticulture. Requires Priva Certified Professional Level 3 or Hoogendoorn iGrow Master Accreditation, plus valid Dutch Spuitlicentie 2 (crop protection license).
                      </p>
                    </div>

                    <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                          United Kingdom
                        </span>
                        <span className="font-label-lg text-label-lg font-bold text-on-surface">
                          Lantra Level 4 / BASIS Endorsement
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Direct equivalence to UK Lantra Level 4 Protected Crop Management &amp; BASIS Advanced Greenhouse Agronomy certification. Eligible for reciprocal fast-track visa sponsorship under Skilled Agritechnologist provisions.
                      </p>
                    </div>

                    <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                          US / Canada
                        </span>
                        <span className="font-label-lg text-label-lg font-bold text-on-surface">
                          CEA Certified Professional / OSHA 30
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Recognized equivalent to North American CEA Certified Professional Horticulturist and Ontario Greenhouse Growers Association Tier-A Manager. Cross-border TN / H-2A executive technical waivers supported.
                      </p>
                    </div>

                    <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">
                          Australia / NZ
                        </span>
                        <span className="font-label-lg text-label-lg font-bold text-on-surface">
                          Diploma of Horticulture CEA
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Mapped to Australian Qualifications Framework (AQF) Level 5/6 Diploma of Production Horticulture. Qualifies for Subclass 482 Medium-Term Ag stream transfer without local credential bridging.
                      </p>
                    </div>
                  </div>
                </article>

                {/* MODULE 04 */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-surface-container-high">
                  <div className="flex items-center gap-space-sm pb-space-xs">
                    <span className="w-8 h-8 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                      04
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                        Benefits &amp; Allowances
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Total Rewards Package: Compensation, Allowances &amp; Benefits
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-1">
                        <span className="material-symbols-outlined text-[24px]">payments</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Daily Climate Shift Stipend
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        €25.00/day tax-free environmental monitoring and weekend on-call allowance under Dutch WKR fiscal arrangement, paid monthly on top of contractual base salary.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-1">
                        <span className="material-symbols-outlined text-[24px]">cottage</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Furnished Agriport Residence
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Fully furnished modern 2-bedroom company house located within 10 minutes of Westland facility, high-speed fiber internet and utilities package included for relocation candidates.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-1">
                        <span className="material-symbols-outlined text-[24px]">social_distance</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Zero-Pesticide &amp; Yield Quality Bonus
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Quarterly performance payout up to €1,350 for sustaining zero synthetic chemical detections and achieving target brix sweetness indexes on high-wire harvests.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-1">
                        <span className="material-symbols-outlined text-[24px]">school</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Agritech Career Progression
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Sponsored Priva Academy Master Architect accreditation &amp; annual Wageningen University &amp; Research (WUR) greenhouse physiology masterclasses paid in full.
                      </p>
                    </div>
                  </div>
                </article>

                {/* MODULE 05 */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-surface-container-high">
                  <div className="flex items-center gap-space-sm pb-space-xs">
                    <span className="w-8 h-8 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                      05
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                        Fast-Track Funnel
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Recruitment Process: Fast-Track CEA Hiring Funnel (5-Day Turnaround)
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                      <span className="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold self-start">
                        Stage 01 • 24 Hours
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Credentials &amp; Priva Vetting
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Verification of greenhouse operating certifications, software access logs, and prior hectare-scale references via Jobzeta secure validation engine.
                      </p>
                    </div>

                    <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                      <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold self-start">
                        Stage 02 • 1 Hour
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Climate Simulator Exam
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Interactive cloud scenario handling sudden solar drop, ventilation wind-cracking, and fertigation EC imbalance recovery within Priva Connext test sandbox.
                      </p>
                    </div>

                    <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold self-start">
                        Stage 03 • Shift 1
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Facility Walkthrough
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Onsite or live VR walkthrough with Horticultural Director Anouk van Dijk, reviewing gutter lines, biological locks, and dispatch contract signing.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Geographic Location Map Card */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-surface-container-high">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[28px]">explore</span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Operational Epicenter
                        </span>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                          Glasshouse Deployment Zone: Westland &amp; Agriport A7 Corridor (Netherlands)
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                      Coordinates: 51.9984° N, 4.2238° E
                    </span>
                  </div>

                  {/* Simulated Styled Map Container */}
                  <div className="relative w-full h-80 rounded-lg overflow-hidden bg-surface-container-highest shadow-inner">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYKdLujTT34hF3wsDoUk_Xkj2UJfcnd4hZZjWswzcxMfzdluuYGsBySH7r7ChgFQ6mXEZ6YKEigASSMLUfMoLnQbsQE8GFIb1SwhLd7JF0OUhusz7BK77dDjMhhCOTUqRS2tGlpCF16MmiFo6kSTX0lGq3LSrUvfCZhGqHuEIIJ7PZN69o5l0in6wJYZbHsShoT21TyfSCZZ3Ux5CSrBo92rEKaFFhKCihIewGSk8huPu3hi78izlW7w')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-secondary/15 backdrop-blur-[1px]"></div>

                    {/* Custom Pin UI */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                      <div className="px-space-md py-space-xs bg-surface-container-lowest text-on-surface rounded-lg shadow-xl font-label-sm text-label-sm font-bold flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                        <span>Facility Complex Westland 04B - RedStar Agro 18-Ha Glasshouse Hub</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg ring-4 ring-on-primary">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                      </div>
                    </div>

                    {/* Map Metadata Badges */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-space-xs bg-surface-container-lowest/90 backdrop-blur-md p-space-sm rounded-lg shadow-md">
                      <div className="flex items-center gap-space-sm">
                        <span className="font-label-sm text-label-sm font-bold text-on-surface">Logistics Corridors:</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Rotterdam Port (22 km) • Schiphol Cargo (55 km) • Agriport A7 Hub (90 km)
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        18 Hectares Continuous Venlo Complex
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Right Column: Sticky Fast-Track Intake Dossier & Company Dossier (4 Cols) */}
              <aside className="lg:col-span-4 w-full flex flex-col gap-space-lg lg:sticky lg:top-24">
                {/* Sticky Dossier Form Card */}
                <div
                  className="bg-surface-container-lowest p-space-lg rounded-xl shadow-lg flex flex-col gap-space-md border border-surface-container-high"
                  id="intake-dossier"
                >
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>Fast-Track Intake Portal</span>
                  </div>

                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                      Submit Glasshouse Dossier
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Direct transmission to RedStar Agro Operations Board &amp; Dutch Mobility Office.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="p-space-md rounded-lg bg-primary/10 border border-primary/30 text-center space-y-2">
                      <span className="material-symbols-outlined text-primary text-[36px]">check_circle</span>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Dossier Transmitted!</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        The RedStar Operations Board will review your credentials and contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold" htmlFor="full-name">
                          Full Legal Name
                        </label>
                        <input
                          className="w-full h-11 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline border border-outline-variant focus:outline-none focus:border-primary transition-all text-body-sm font-body-sm"
                          id="full-name"
                          placeholder="e.g. Martijn de Jong"
                          required
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold" htmlFor="email-address">
                          Work / Personal Email
                        </label>
                        <input
                          className="w-full h-11 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline border border-outline-variant focus:outline-none focus:border-primary transition-all text-body-sm font-body-sm"
                          id="email-address"
                          placeholder="m.dejong@cea-agri.nl"
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold" htmlFor="phone-number">
                          Mobile / WhatsApp (with country code)
                        </label>
                        <input
                          className="w-full h-11 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline border border-outline-variant focus:outline-none focus:border-primary transition-all text-body-sm font-body-sm"
                          id="phone-number"
                          placeholder="+31 6 12345678"
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      {/* Checkboxes */}
                      <div className="space-y-space-xs pt-space-xs">
                        <label className="flex items-start gap-space-xs cursor-pointer">
                          <input
                            checked={privaCert}
                            onChange={(e) => setPrivaCert(e.target.checked)}
                            className="mt-1 w-4 h-4 text-primary rounded border-outline-variant focus:ring-0 cursor-pointer"
                            required
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            I hold certified expertise in Priva Connext, Hoogendoorn, or Ridder climate computers.
                          </span>
                        </label>

                        <label className="flex items-start gap-space-xs cursor-pointer">
                          <input
                            checked={hectaresExp}
                            onChange={(e) => setHectaresExp(e.target.checked)}
                            className="mt-1 w-4 h-4 text-primary rounded border-outline-variant focus:ring-0 cursor-pointer"
                            required
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Verified 3+ years experience managing commercial glasshouse crops (minimum 5 hectares).
                          </span>
                        </label>

                        <label className="flex items-start gap-space-xs cursor-pointer">
                          <input
                            checked={seasonAvailability}
                            onChange={(e) => setSeasonAvailability(e.target.checked)}
                            className="mt-1 w-4 h-4 text-primary rounded border-outline-variant focus:ring-0 cursor-pointer"
                            required
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Available for immediate 2025/2026 Dutch growing season deployment in Westland.
                          </span>
                        </label>
                      </div>

                      {/* File Upload Dropzone */}
                      <div className="pt-space-xs">
                        <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">
                          Supporting Credentials
                        </label>
                        <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-high transition-colors border border-dashed border-outline-variant">
                          <span className="material-symbols-outlined text-primary text-[28px] mb-1">upload_file</span>
                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            Attach CEA Certification, Priva Credential &amp; CV
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                            PDF, DOCX, or JPG up to 15MB
                          </span>
                        </div>
                      </div>

                      <button
                        className="w-full py-3.5 px-space-md bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg rounded-lg font-bold shadow-md transition-all flex items-center justify-center gap-2 mt-space-xs cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[20px]">bolt</span>
                        <span>Transmit Application</span>
                      </button>

                      <span className="font-label-sm text-label-sm text-center text-on-surface-variant">
                        GDPR Compliant • Instant Direct Dispatch Protocol
                      </span>
                    </form>
                  )}
                </div>

                {/* Telematics Profile Box */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-surface-container-high">
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                      Facility Telematics Profile
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">Active Station</span>
                  </div>

                  <div className="space-y-space-xs text-body-sm font-body-sm">
                    <div className="flex justify-between py-1">
                      <span className="text-on-surface-variant">Agricultural Hub:</span>
                      <span className="font-semibold text-on-surface">Westland (Netherlands)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-on-surface-variant">Glasshouse Area:</span>
                      <span className="font-semibold text-on-surface">180,000 m² (18 Hectares)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-on-surface-variant">Primary Computer:</span>
                      <span className="font-semibold text-primary">Priva Connext v9.4</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-on-surface-variant">Crop Variety:</span>
                      <span className="font-semibold text-on-surface">High-Wire Vine Tomatoes &amp; Peppers</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-on-surface-variant">Irrigation Type:</span>
                      <span className="font-semibold text-on-surface">Closed-Loop Rockwool Hydroponics</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-on-surface-variant">Crop Distribution:</span>
                      <span className="font-semibold text-on-surface">Vine Tomato 65% • Sweet Pepper 35%</span>
                    </div>
                  </div>
                </div>

                {/* Director Quote Box */}
                <div className="bg-surface-container-high p-space-md rounded-xl flex flex-col gap-space-sm border border-surface-container-highest">
                  <span className="material-symbols-outlined text-primary text-[24px]">format_quote</span>
                  <p className="font-body-sm text-body-sm italic text-on-surface-variant leading-relaxed">
                    &quot;Operating an 18-hectare Venlo facility requires continuous synergy between computer algorithms and biological plant physiology. We provide cutting-edge climate automation and elite compensation for dedicated growers.&quot;
                  </p>
                  <div className="flex items-center gap-space-sm pt-space-xs">
                    <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-headline-sm">
                      AV
                    </div>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-on-surface block">Anouk van Dijk</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">
                        VP Horticultural Operations, RedStar Agro BV
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
