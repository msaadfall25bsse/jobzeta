"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorMassTimberCarpenterJobPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "8+ Years / Structural Timber Lead",
    credential: "Zimmermann Gesellenbrief (HWK Germany)",
    sponsorship: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Sub-Header Breadcrumb & Platform Protocol Nav */}
          <div className="w-full bg-surface-container-low px-margin py-space-sm border-b-0 shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant flex-wrap"
              >
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
                <span className="material-symbols-outlined text-outline text-[14px]">
                  chevron_right
                </span>
                <Link className="hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="material-symbols-outlined text-outline text-[14px]">
                  chevron_right
                </span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/trades-and-construction"
                >
                  Trades &amp; Construction
                </Link>
                <span className="material-symbols-outlined text-outline text-[14px]">
                  chevron_right
                </span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/trades-and-construction/carpentry-and-framing"
                >
                  Carpentry &amp; Framing
                </Link>
                <span className="material-symbols-outlined text-outline text-[14px]">
                  chevron_right
                </span>
                <span className="text-secondary font-bold">
                  Full Technical Instructions &amp; Operational Handbook
                </span>
              </nav>
              <div className="flex items-center gap-space-md">
                <div className="flex items-center gap-space-xs bg-surface px-space-sm py-1 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">
                    Role ID: JOB-CRPF-MUC-7821
                  </span>
                </div>
                <span className="hidden lg:inline text-outline text-[12px]">•</span>
                <span className="hidden lg:inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-bold">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  ACTIVE TIMBER FABRICATION GATEWAY
                </span>
              </div>
            </div>
          </div>

          {/* Role Identity Header Bar */}
          <section className="w-full bg-surface-container-lowest px-margin py-space-lg shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg">
              <div className="space-y-space-xs">
                <div className="flex items-center gap-space-sm flex-wrap">
                  <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">domain</span>
                    Züblin Timber &amp; Stora Enso JV
                  </span>
                  <span className="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">gavel</span>
                    IG BAU Collective Agreement (Tarifvertrag)
                  </span>
                  <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                    Institutional Verification #DE-CLT-984
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">
                  Senior Mass Timber (CLT/Glulam) &amp; Structural Carpenter Lead
                </h1>
                <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm pt-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      location_on
                    </span>
                    Munich, Germany (On-Site • High-Rise Hybrid Mass Timber Commercial Center)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      schedule
                    </span>
                    Full-Time (38.5 hrs/week • German Construction Tariff)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-primary font-bold">
                    <span className="material-symbols-outlined text-[18px]">engineering</span>
                    Lead Structural Carpenter
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm shrink-0">
                <a
                  className="inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-3 rounded-lg shadow-md transition-all hover:shadow-lg"
                  href="#application-desk"
                >
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                  Fast-Track Certified Application
                </a>
                <Link
                  className="inline-flex items-center justify-center gap-space-xs bg-surface-container-high hover:bg-surface-container-highest text-secondary font-label-lg text-label-lg px-space-md py-3 rounded-lg transition-colors"
                  href="/categories/trades-and-construction/carpentry-and-framing"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  Back to Carpentry Overview
                </Link>
              </div>
            </div>

            {/* Compensation Highlight Bar */}
            <div className="max-w-7xl mx-auto mt-space-md bg-secondary/5 rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">payments</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Negotiated Tariff Remuneration Scale
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    €62,000 – €79,000{" "}
                    <span className="font-body-md text-body-md text-on-surface-variant font-normal">
                      / year
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant flex-wrap">
                <span className="px-2.5 py-1 rounded bg-surface-container-lowest shadow-sm font-semibold text-secondary">
                  + Timber Assembly Allowance
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-container-lowest shadow-sm font-semibold text-secondary">
                  + Height Shift Multipliers
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-container-lowest shadow-sm font-semibold text-secondary">
                  + Fully Paid Munich Lodging Option
                </span>
              </div>
            </div>
          </section>

          {/* Hero Construction Project Banner */}
          <section className="w-full relative px-margin py-space-xl overflow-hidden bg-inverse-surface">
            {/* Image Backdrop with Deep Contrast Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                alt="Professional mass timber structural lead carpenter assembly on cross-laminated timber building framework"
                className="w-full h-full object-cover opacity-35"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRR4oQoHb_RBE2KZDk2R9SIsD3ptoMOMLnRz0yR5Vu6H1IJC6_G6Ijlcl_N6XHIkP75UA3JBwtqAcEsZ1nUFYfe-gtCDEjJfsoZwKHqxro9KCm_3_yfPJeznSUHM55zPvrQLJmf69B1UYOcD-_PcCd0AcPqVna9X8dTm8LtWfpqCOxmJBZ0EfCQ2FaSYywYdigmQ11vrCkkjIX6HrE0yTLWbZ0fkdXheZK1aM9Ib177wmYsms8qnzR0A"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10 text-inverse-on-surface space-y-space-lg">
              <div className="inline-flex items-center gap-space-xs bg-primary/20 backdrop-blur-md px-space-md py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
                <span className="font-label-sm text-label-sm text-primary-fixed tracking-widest uppercase font-bold">
                  MEGA-PROJECT TIMBER ARCHITECTURE 02 — MUNICH WOOD SCRAPER COMPLEX
                </span>
              </div>
              <div className="max-w-4xl space-y-space-sm">
                <h2 className="font-display-lg text-display-lg text-on-primary font-bold tracking-tight">
                  Munich Mass Timber High-Rise Hub – 14-Story Cross-Laminated Timber (CLT) &amp; Glulam Structural Framework
                </h2>
                <p className="font-body-lg text-body-lg text-surface-container-highest max-w-3xl leading-relaxed">
                  Core Construction &amp; Joinery: Stora Enso Sylva CLT Floor Slabs, Hasslacher Glulam Columns, Rothoblaas Spider &amp; Concealed Column Shoes, Leica 3D Laser Station Spatial Alignment.
                </p>
              </div>

              {/* 3 Telemetry Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
                <div className="bg-surface/10 backdrop-blur-md rounded-xl p-space-md flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/80 text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-primary-fixed font-bold leading-tight">
                      100%
                    </div>
                    <div className="font-label-sm text-label-sm text-surface-container-highest">
                      Zero Defect Joint Seal Audit
                    </div>
                  </div>
                </div>
                <div className="bg-surface/10 backdrop-blur-md rounded-xl p-space-md flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-secondary/80 text-on-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">rule</span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-secondary-fixed font-bold leading-tight">
                      DIN EN 1995
                    </div>
                    <div className="font-label-sm text-label-sm text-surface-container-highest">
                      Eurocode 5 &amp; DIN 1052 Standard
                    </div>
                  </div>
                </div>
                <div className="bg-surface/10 backdrop-blur-md rounded-xl p-space-md flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-primary/80 text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-primary-fixed font-bold leading-tight">
                      Level 4 Lead
                    </div>
                    <div className="font-label-sm text-label-sm text-surface-container-highest">
                      Certified Rigging &amp; Assembly Protocol
                    </div>
                  </div>
                </div>
              </div>

              {/* SOP Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md pt-space-sm border-t-0 bg-surface/5 backdrop-blur-md px-space-md py-space-sm rounded-xl">
                <div className="flex items-center gap-space-xs font-mono text-label-md text-surface-container-highest">
                  <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                    terminal
                  </span>
                  <span>
                    STANDARD OPERATING PROCEDURE (SOP) &amp; JOINERY SPECIFICATION:{" "}
                    <strong className="text-on-primary">SOP-TIMBER-CLT-DE-2025-V1</strong>
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface/15 hover:bg-surface/25 text-on-primary px-space-md py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">print</span> Print SOP
                  </button>
                  <button
                    onClick={() => alert("Downloading SOP Specification PDF...")}
                    className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-primary hover:bg-primary-container text-on-primary px-space-md py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>{" "}
                    PDF Copy
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Dual Layout Content Body */}
          <main className="w-full px-margin py-space-xl max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-space-xl items-start">
              {/* LEFT COLUMN: Technical Instructions & Operational Depth (68% width) */}
              <div className="w-full lg:w-[68%] space-y-space-xl">
                {/* SECTION 01: Complete Role Overview & Mass Timber Structural Engineering Dynamics */}
                <section className="space-y-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-mono text-label-md text-primary font-bold tracking-widest uppercase">
                      SECTION 01
                    </span>
                    <div className="h-0.5 flex-1 bg-surface-container-high"></div>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Mass Timber Structural Engineering Dynamics &amp; Assembly Management
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    As the Senior Mass Timber &amp; Structural Carpenter Lead, you take institutional command over the erection of high-precision prefabricated mass timber components for Munich&apos;s premier 14-story commercial wood skyscraper. You manage the precise spatial placement and fastening of Stora Enso Sylva Cross-Laminated Timber (CLT) diaphragm slabs, continuous multi-story Hasslacher Glulam shear columns, and engineered shear wall cores. Your role demands stringent acoustic decoupling, zero-tolerance weather envelope maintenance, continuous wood moisture content (<span className="font-bold text-on-surface">u &lt; 12.0%</span>) governance, and millimetric adherence using Leica 3D total stations.
                  </p>

                  {/* 4 Technical Engineering Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    {/* Card 1 */}
                    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-xs flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-sm">
                          <span className="material-symbols-outlined text-[24px]">forklift</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          CLT Diaphragm &amp; Crane Rigging Telemetry
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                          Directing multi-point vacuum lifters and self-locking threaded lifting clutch attachments for 4.5-tonne panel picks. Governing strict sling angle computations (≤ 60°), crane dynamic payload wind stow thresholds at 12 m/s, and rotational soft-tagline stability.
                        </p>
                      </div>
                      <div className="pt-space-sm font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Eurocode 5 Dynamic Lift Certified
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-xs flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center mb-space-sm">
                          <span className="material-symbols-outlined text-[24px]">build</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Rothoblaas &amp; Concealed Mechanics
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                          Torque-calibrated driving of Rothoblaas VGS/VGZ fully-threaded countersunk screws. Overseeing hidden steel column shoes, spider beam-to-column node plates, tight-tolerance dowel insertions, and non-shrink structural epoxy resin grouting.
                        </p>
                      </div>
                      <div className="pt-space-sm font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Calibrated Torque Quality Control
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-xs flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-sm">
                          <span className="material-symbols-outlined text-[24px]">water_drop</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Moisture &amp; Membrane Integrity
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                          Executing DIN 68800 moisture logging protocols using calibrated pin and continuous electrical resistance hygrometers. Rapid application of SIGA Majcoat self-adhesive breathers, butyl tape end-grain seals, and instant emergency storm tarpaulins.
                        </p>
                      </div>
                      <div className="pt-space-sm font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        DIN 68800 Wood Preservation Shield
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-xs flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center mb-space-sm">
                          <span className="material-symbols-outlined text-[24px]">square_foot</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Laser Alignment &amp; Micro-Tolerances
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                          Partnering with surveyor teams via Leica TS16 robotic stations to preserve ±2mm verticality over 14 storeys. Shimming and hydraulic screw-jack adjustment of column bases ensuring precise structural load transfer across timber splines.
                        </p>
                      </div>
                      <div className="pt-space-sm font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Millimetric Tolerance Audit Standard
                      </div>
                    </div>
                  </div>

                  {/* Critical Quality Banner */}
                  <div className="bg-error-container text-on-error-container p-space-md rounded-xl flex items-start gap-space-md mt-space-md shadow-sm">
                    <span className="material-symbols-outlined text-error text-[28px] shrink-0 mt-0.5">
                      warning
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-label-lg text-label-lg font-bold uppercase tracking-wider text-error">
                        Critical Safety &amp; Quality Directive: Moisture Exposure &amp; Fall Protection Zero-Tolerance
                      </h4>
                      <p className="font-body-sm text-body-sm leading-relaxed">
                        Continuous hygrometer logging is mandatory on all delivered Sylva slabs. Any timber recording a moisture content exceeding <strong>15.0%</strong> triggers immediate non-conformance quarantine and halting of upper diaphragm closures. During leading edge erection, strict 100% tie-off using certified overhead retractable lifelines is non-negotiable.
                      </p>
                    </div>
                  </div>
                </section>

                {/* SECTION 02: Detailed Daily Timber Framing Responsibilities */}
                <section className="space-y-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-mono text-label-md text-primary font-bold tracking-widest uppercase">
                      SECTION 02
                    </span>
                    <div className="h-0.5 flex-1 bg-surface-container-high"></div>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Daily Timber Framing Responsibilities &amp; Operational Sequence
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    A step-by-step operational breakdown representing standard 8-hour shift procedures for structural leads on the Munich Wood Scraper project.
                  </p>
                  <div className="space-y-space-sm">
                    {/* Step 1 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
                      <div className="flex items-start gap-space-md">
                        <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shrink-0">
                          01
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Pre-Shift Panel Inspection, Moisture Logging &amp; Rigging Audit
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Execute morning ultrasonic and pin-meter core moisture tests on delivered Stora Enso flatbed packs. Audit Rothoblaas lifting shoes and sling clutches according to DGUV and Eurocode 5 standards before crane clearance.
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 font-mono text-label-sm text-secondary bg-surface-container-low px-space-sm py-1 rounded">
                        06:30 – 07:45 CET
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
                      <div className="flex items-start gap-space-md">
                        <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shrink-0">
                          02
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Crane Tandem Rigging &amp; Panel Flight Coordination
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Coordinate live crane flight operations with the Liebherr 280 EC-H tower crane operator over encrypted VHF radio. Control taglines to steer 12-meter CLT diaphragm slabs over installed steel column headers amidst gusting drafts.
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 font-mono text-label-sm text-secondary bg-surface-container-low px-space-sm py-1 rounded">
                        07:45 – 11:30 CET
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
                      <div className="flex items-start gap-space-md">
                        <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shrink-0">
                          03
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Laser Station Alignment &amp; Micro-Jacking Setting
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Seat vertical Hasslacher glulam multi-story columns into concealed steel column feet. Fine-tune 3D coordinates using calibrated shims and mechanical hydraulic screw jacks to secure ±1.5mm plumb precision.
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 font-mono text-label-sm text-secondary bg-surface-container-low px-space-sm py-1 rounded">
                        11:30 – 13:45 CET
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
                      <div className="flex items-start gap-space-md">
                        <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shrink-0">
                          04
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            High-Torque Screw Fastening &amp; Structural Adhesive Injection
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Lead carpentry crews in driving hundreds of 400mm Rothoblaas VGZ screws at prescribed 45° inclinations with Milwaukee M18 FUEL high-torque drivers. Administer polyurethane acoustic dampening strips and structural sealants.
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 font-mono text-label-sm text-secondary bg-surface-container-low px-space-sm py-1 rounded">
                        13:45 – 15:30 CET
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
                      <div className="flex items-start gap-space-md">
                        <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shrink-0">
                          05
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            End-of-Day Weatherproofing, Tape Sealing &amp; Tarpaulin Enclosure
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Inspect and apply SIGA Wigluv vapour-tight tapes over all exposed CLT seams. Secure heavy-duty perimeter wind-break tarps, drain standing rain channels, and compile final QA telemetry into Züblin Project Cloud.
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 font-mono text-label-sm text-secondary bg-surface-container-low px-space-sm py-1 rounded">
                        15:30 – 16:30 CET
                      </div>
                    </div>
                  </div>
                </section>

                {/* SECTION 03: Technical Qualifications & Vocational Credential Equivalence */}
                <section className="space-y-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-mono text-label-md text-primary font-bold tracking-widest uppercase">
                      SECTION 03
                    </span>
                    <div className="h-0.5 flex-1 bg-surface-container-high"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                        Vocational Qualifications &amp; Jurisdictional Equivalence
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Züblin Timber &amp; Stora Enso formally recognize reciprocal heavy timber craft credentials across Germany, North America, the UK, and Scandinavia.
                      </p>
                    </div>
                    <span className="px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold shrink-0">
                      Direct Visa Sponsorship Eligible
                    </span>
                  </div>

                  {/* 4 Matrix Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {/* Germany & DACH */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                          Germany &amp; DACH (Primary)
                        </span>
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          verified
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Zimmermann / Zimmerer Gesellenbrief
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        HWK dual apprenticeship completion. Preferred holding of <em>Vorarbeiter</em>, <em>Werkpolier Holzbau</em>, or <em>Zimmermeister</em> qualification. Sachkunde Holzschutz certification valued.
                      </p>
                    </div>

                    {/* US & Canada */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                          USA &amp; Canada (Reciprocal)
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          public
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Red Seal Carpenter / UBC Journeyman
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Interprovincial Red Seal endorsement in Carpentry with documented mass timber / glulam heavy frame experience. OSHA 30 Construction or Canadian equivalent safety credential.
                      </p>
                    </div>

                    {/* UK & Ireland */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                          United Kingdom &amp; Ireland
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          public
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        NVQ Level 3 Wood Occupations &amp; CSCS Gold
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Advanced Structural Timber Framing diploma, Gold Supervisory CSCS Card, and SSSTS/SMSTS site safety training certification with minimum 5 years timber frame lead duties.
                      </p>
                    </div>

                    {/* Nordic */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                          Nordic &amp; Maritime
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          public
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Fagbrev Tømrer / Byggnadsträarbetare
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Norwegian, Swedish, or Finnish certified heavy timber journeyman with documented experience in multi-story glulam framework and Baltic mass timber building techniques.
                      </p>
                    </div>
                  </div>

                  {/* Literacy Checklist */}
                  <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                    <h4 className="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        checklist
                      </span>
                      Mass Timber Technical Literacy Checklist
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check
                        </span>
                        Timber moisture psychrometric equilibrium calculation
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check
                        </span>
                        Shear wall lateral resistance reading &amp; hold-down torque
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check
                        </span>
                        Crane pick point balance verification &amp; centre of gravity
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check
                        </span>
                        Eurocode 5 load duration factor (kmod) and fastener specs
                      </div>
                    </div>
                  </div>
                </section>

                {/* SECTION 04: Compensation, Allowances & German Construction Tariff */}
                <section className="space-y-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-mono text-label-md text-primary font-bold tracking-widest uppercase">
                      SECTION 04
                    </span>
                    <div className="h-0.5 flex-1 bg-surface-container-high"></div>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Tariff Grade Compensation &amp; Construction Subsidies
                  </h2>
                  <div className="bg-primary/10 rounded-2xl p-space-lg space-y-space-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          IG BAU Tariff Grouping
                        </span>
                        <h3 className="font-display-lg-mobile md:font-headline-xl text-display-lg-mobile md:text-headline-xl text-primary font-bold">
                          €5,160 – €6,580{" "}
                          <span className="font-body-lg text-body-lg text-on-surface font-normal">
                            / month
                          </span>
                        </h3>
                      </div>
                      <div className="text-left md:text-right">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          €62,000 – €79,000 / year base
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          + 20% Timber Assembly &amp; High-Rise Multipliers
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4 Benefit Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-md shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">apartment</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          €3,600 Relocation Grant
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Direct stipend covering Munich flight, transit, and initial month deposit. Furnished company staff apartments available upon request.
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-md shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">
                          home_repair_service
                        </span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          €1,200 High-Torque Tool Allowance
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Annual voucher for specialized Milwaukee M18 FUEL / Hilti timber fastener tools, laser gauges, and personal protective gear.
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-md shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">beach_access</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          30 Days Vacation &amp; SOKA-BAU
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Full statutory German holiday entitlement backed by mandatory SOKA-BAU German construction pension savings fund.
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-md shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">school</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Rothoblaas Academy Access
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Fully employer-sponsored certification courses in Cortaccia (Italy) for advanced mass timber connection design and acoustics.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SECTION 05: Transparent 3-Step Selection Process */}
                <section className="space-y-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-mono text-label-md text-primary font-bold tracking-widest uppercase">
                      SECTION 05
                    </span>
                    <div className="h-0.5 flex-1 bg-surface-container-high"></div>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Transparent 3-Step Selection &amp; Practical Evaluation
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
                      <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary font-bold flex items-center justify-center text-[14px]">
                        1
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Fast-Track Verification
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Logbook and vocational credential validation completed within 24 to 48 hours by our joint engineering recruitment desk.
                      </p>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
                      <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary font-bold flex items-center justify-center text-[14px]">
                        2
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Technical Engineering Call
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        30-minute structured video dialogue with Chief Engineer Matthias Lindner on Eurocode 5 joinery and crane pick planning.
                      </p>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-[14px]">
                        3
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Practical Joinery Assessment
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Half-day paid workshop at the Munich Pre-Assembly Yard demonstrating laser station calibration and heavy torque fastening.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* RIGHT COLUMN: Sticky Application Sidebar & Lead Verification (32% width) */}
              <aside className="w-full lg:w-[32%] space-y-space-lg lg:sticky lg:top-20">
                {/* Application Form Card */}
                <div
                  className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-md space-y-space-md"
                  id="application-desk"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                      <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                        Fast-Track Gateway
                      </span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Apply for Senior Mass Timber Lead
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Submit your credentials directly to Züblin Timber &amp; Stora Enso Engineering Desk.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-space-md rounded-xl bg-primary-container text-on-primary-container space-y-2">
                      <div className="flex items-center gap-2 font-bold font-headline-sm text-headline-sm">
                        <span className="material-symbols-outlined">check_circle</span> Application Transferred!
                      </div>
                      <p className="font-body-sm text-body-sm">
                        Thank you, {formData.fullName}. Your trade credentials have been securely routed to Matthias Lindner&apos;s Munich Wood Scraper project engineering registry.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-space-sm">
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold block">
                          Full Legal Name
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                          placeholder="e.g. Lukas Weber"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold block">
                          Work Email Address
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                          placeholder="lukas.weber@holzbau.de"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold block">
                          Phone / WhatsApp (+49 or International)
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                          placeholder="+49 170 9823412"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold block">
                          Experience Tier
                        </label>
                        <select
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        >
                          <option>8+ Years / Structural Timber Lead</option>
                          <option>5–8 Years / Journeyman Carpenter</option>
                          <option>10+ Years / Timber Superintendent &amp; Polier</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold block">
                          Primary Trade Credential
                        </label>
                        <select
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                          value={formData.credential}
                          onChange={(e) => setFormData({ ...formData, credential: e.target.value })}
                        >
                          <option>Zimmermann Gesellenbrief (HWK Germany)</option>
                          <option>Red Seal Carpenter (Canada / USA UBC)</option>
                          <option>NVQ Level 3 Wood Occupations &amp; CSCS Gold (UK)</option>
                          <option>Fagbrev Tømrer (Norway / Sweden / Finland)</option>
                          <option>Other Verified Heavy Timber Credential</option>
                        </select>
                      </div>
                      {/* Upload Box */}
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold block">
                          CV &amp; Structural Joinery Portfolio
                        </label>
                        <div className="w-full p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container text-center cursor-pointer transition-colors space-y-1">
                          <span className="material-symbols-outlined text-primary text-[28px]">
                            cloud_upload
                          </span>
                          <div className="font-label-sm text-label-sm text-on-surface font-bold">
                            Click to attach files or drop PDF
                          </div>
                          <div className="text-[12px] text-outline">
                            PDF, JPG up to 25MB (Include logbooks &amp; tickets)
                          </div>
                        </div>
                      </div>
                      {/* Visa / Residency Checkbox */}
                      <label className="flex items-start gap-space-xs cursor-pointer pt-1">
                        <input
                          checked={formData.sponsorship}
                          onChange={(e) => setFormData({ ...formData, sponsorship: e.target.checked })}
                          className="w-4 h-4 rounded text-primary mt-1 accent-primary"
                          type="checkbox"
                        />
                        <span className="font-body-sm text-[13px] text-on-surface-variant leading-tight">
                          I hold a valid EU/EEA citizenship OR require German skilled worker visa sponsorship via the fast-track mechanism.
                        </span>
                      </label>
                      {/* Submit Button */}
                      <button
                        className="w-full h-12 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-md transition-all cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          assignment_turned_in
                        </span>
                        Submit Certified Timber Application
                      </button>
                    </form>
                  )}

                  <div className="flex items-center justify-between text-outline text-[12px] pt-space-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">lock</span> TLS Encrypted 256-Bit
                    </span>
                    <span>GDPR Compliant Gateway</span>
                  </div>
                </div>

                {/* Project Engineering Lead Profile Card */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm space-y-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 font-headline-sm text-headline-sm font-bold">
                      ML
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Matthias Lindner
                      </h3>
                      <p className="font-label-sm text-label-sm text-primary font-bold">
                        Chief Structural Timber Engineer
                      </p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        Project Director, Munich Wood Scraper
                      </p>
                    </div>
                  </div>
                  <blockquote className="font-body-sm text-body-sm text-on-surface italic bg-surface-container-low p-space-md rounded-xl leading-relaxed">
                    &ldquo;Mass timber high-rises are the future of sustainable architecture. We require master carpenters who treat engineered glulam and CLT with the precision of fine joinery.&rdquo;
                  </blockquote>
                  {/* Live Site Telemetry Grid */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-space-xs">
                    <div className="bg-surface-container-low p-2 rounded-lg">
                      <div className="font-headline-sm text-headline-sm text-secondary font-bold">
                        62.5m
                      </div>
                      <div className="font-label-sm text-[11px] text-outline">Target Height</div>
                    </div>
                    <div className="bg-surface-container-low p-2 rounded-lg">
                      <div className="font-headline-sm text-headline-sm text-primary font-bold">
                        &lt;12%
                      </div>
                      <div className="font-label-sm text-[11px] text-outline">Moisture Limit</div>
                    </div>
                    <div className="bg-surface-container-low p-2 rounded-lg">
                      <div className="font-headline-sm text-headline-sm text-secondary font-bold">
                        6.2m/s
                      </div>
                      <div className="font-label-sm text-[11px] text-outline">Flight Velocity</div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </main>

      <Footer />
    </div>
  );
}
