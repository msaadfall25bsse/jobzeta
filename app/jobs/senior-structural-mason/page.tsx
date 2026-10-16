"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorStructuralMasonJobPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "8-12 Years (Lead)",
    credential: "HWK Geselle/Meister",
    visaRequired: true,
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Operational Context Ribbon */}
          <section className="w-full bg-surface-container-low px-margin py-space-sm shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-md text-label-md">
              <div className="flex items-center flex-wrap gap-x-space-sm gap-y-1">
                <span className="inline-flex items-center gap-1.5 text-primary font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  ROLE ID: JOB-MASON-BER-8842
                </span>
                <span className="text-outline">/</span>
                <span className="tracking-wide uppercase text-secondary font-semibold">
                  Active Masonry &amp; Facade Gateway
                </span>
                <span className="text-outline">/</span>
                <span className="bg-surface-container-highest px-2 py-0.5 rounded-full text-on-surface">
                  Institutional Verification #DE-CLT-9842
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                  IG BAU Collective Agreement (Tarifvertrag)
                </span>
              </div>
            </div>
          </section>

          {/* Role Meta Header & Actions */}
          <section className="w-full bg-surface-container-lowest px-margin py-space-lg shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg">
              <div className="space-y-space-xs max-w-4xl">
                {/* Breadcrumbs */}
                <nav className="flex items-center flex-wrap gap-2 text-outline font-label-sm text-label-sm uppercase tracking-wider">
                  <Link className="hover:text-primary transition-colors" href="/">
                    Home
                  </Link>
                  <span>&gt;</span>
                  <Link className="hover:text-primary transition-colors" href="/categories">
                    Categories
                  </Link>
                  <span>&gt;</span>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/categories/trades-and-construction"
                  >
                    Trades &amp; Construction
                  </Link>
                  <span>&gt;</span>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/categories/trades-and-construction/masonry-and-finishing"
                  >
                    Masonry &amp; Finishing
                  </Link>
                  <span>&gt;</span>
                  <span className="text-secondary font-bold">Full Operational Handbook</span>
                </nav>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">
                  Senior Structural Mason (Brick/Block) &amp; Architectural Stone Cladding Lead
                </h1>
                <div className="flex flex-wrap items-center gap-x-space-md gap-y-2 pt-1 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-secondary">
                    <span className="material-symbols-outlined text-[18px] text-primary">domain</span>
                    PORR &amp; Implenia Facades JV
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      location_on
                    </span>
                    Berlin, Germany (Cultural Forum Complex)
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                    Full-Time (38.5 hrs/week • German Construction Tariff)
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="inline-flex items-center gap-1.5 bg-surface-container-high px-2 py-0.5 rounded-full font-label-sm text-label-sm text-on-surface font-semibold">
                    Master Guild Craftsman
                  </span>
                </div>
              </div>
              {/* Quick Action Buttons */}
              <div className="flex items-center gap-space-sm shrink-0">
                <Link
                  className="inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container-low text-secondary hover:bg-surface-container-high font-label-lg text-label-lg transition-all shadow-sm"
                  href="/categories/trades-and-construction/masonry-and-finishing"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  Back to Overview
                </Link>
                <a
                  className="inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-md"
                  href="#fast-track-apply"
                >
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  Fast-Track Certified Application
                </a>
              </div>
            </div>

            {/* Tariff Remuneration Bar */}
            <div className="max-w-7xl mx-auto mt-space-md pt-space-sm">
              <div className="bg-primary/5 rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">payments</span>
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                      Negotiated Tariff Remuneration Scale
                    </div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      €58,000 – €76,000{" "}
                      <span className="text-on-surface-variant font-body-md text-body-md font-normal">
                        / year gross base
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest shadow-sm text-primary font-semibold">
                    + Specialty Facade Multiplier (18%)
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest shadow-sm text-secondary font-semibold">
                    + Scaffold &amp; Height Allowance
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest shadow-sm text-on-surface font-semibold">
                    + Relocation Support &amp; Berlin Living Option
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Hero Visual Panel */}
          <section className="w-full px-margin pt-space-lg">
            <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden shadow-xl bg-inverse-surface min-h-[460px] flex flex-col justify-end p-space-xl">
              {/* Mega Project Background Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
                alt="Active commercial masonry site in Berlin with a master bricklayer in high visibility workwear inspecting high-tolerance dark klinker brick coursing with a precision level on suspended scaffolding against Berlin urban backdrop."
                src="/berlin-klinker-facade-hero.jpg"
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-transparent"></div>
              {/* Hero Header Content */}
              <div className="relative z-10 max-w-4xl space-y-space-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed-dim/20 backdrop-blur-md text-primary-fixed font-label-sm text-label-sm font-bold uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[16px]">apartment</span>
                  Mega-Project Architectural Facade 03 — Berlin Cultural Forum Complex
                </div>
                <h2 className="font-display-lg text-headline-xl lg:text-display-lg text-inverse-on-surface leading-tight font-bold tracking-tight">
                  12,000 m² High-Tolerance Klinker Brickwork &amp; Natural Sandstone Rainscreen
                </h2>
                <p className="font-body-lg text-body-lg text-surface-container-highest max-w-3xl leading-relaxed">
                  Lead structural craftspeople commanding multi-wythe cavity assemblies, precision Flemish and Wild bonds, dry-hung Saxon natural sandstone with Halfen anchor sub-structures, DIN 1053-1 structural reinforcement, and acoustic thermal decoupling.
                </p>
                {/* Metric Telemetry Badges */}
                <div className="flex flex-wrap items-center gap-space-sm pt-2">
                  <div className="px-3.5 py-2 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-lowest flex items-center gap-2 font-label-md text-label-md shadow-sm">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                      water_drop
                    </span>
                    100% Zero-Efflorescence Mortar Audit
                  </div>
                  <div className="px-3.5 py-2 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-lowest flex items-center gap-2 font-label-md text-label-md shadow-sm">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                      rule
                    </span>
                    DIN 1053 &amp; DIN EN 1996 (Eurocode 6 Standard)
                  </div>
                  <div className="px-3.5 py-2 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-lowest flex items-center gap-2 font-label-md text-label-md shadow-sm">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                      verified_user
                    </span>
                    Level 4 Lead Certified Master Mason &amp; Stone Setter
                  </div>
                </div>
              </div>
              {/* Bottom SOP Quick Bar */}
              <div className="relative z-10 mt-space-lg pt-space-md flex flex-wrap items-center justify-between gap-space-sm bg-inverse-surface/60 backdrop-blur-lg px-space-md py-space-sm rounded-xl">
                <div className="flex items-center gap-2 text-surface-container-highest font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-primary-fixed text-[16px]">
                    integration_instructions
                  </span>
                  <span>
                    STANDARD OPERATING PROCEDURE:{" "}
                    <strong className="text-inverse-on-surface tracking-wider">
                      SOP-MASON-KLINKER-DE-2025-V2
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <button
                    className="px-3 py-1.5 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-inverse-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors cursor-pointer"
                    onClick={() => window.print()}
                  >
                    <span className="material-symbols-outlined text-[16px]">print</span>
                    Print SOP
                  </button>
                  <button
                    className="px-3 py-1.5 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-inverse-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors cursor-pointer"
                    onClick={() => alert("Downloading Technical PDF Copy...")}
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    Technical PDF Copy
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Layout Grid */}
          <section className="w-full px-margin py-space-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              {/* Left Core Specifications (8 Columns) */}
              <div className="lg:col-span-8 space-y-space-xl">
                {/* SECTION 01: Engineering Assembly */}
                <div className="space-y-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-secondary text-on-secondary font-bold flex items-center justify-center font-headline-sm text-headline-sm">
                      01
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Structural Masonry Dynamics &amp; Facade Engineering Assembly
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    As the Senior Structural Mason &amp; Facade Craftsman, you lead a 16-person specialized masonry guild responsible for executing the signature architectural envelope of the Berlin Cultural Forum. Your direct purview combines centuries-old stonecraft precision with digital total-station coordinate tracking, hydrophobic polymer-modified mortar chemistries, and corrosion-resistant cavity anchoring mechanisms.
                  </p>
                  {/* 4 Technical Feature Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    {/* Card 1 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">view_in_ar</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Architectural Facing Brickwork (Klinker) &amp; Joint Precision
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Execution of extreme-density hard-fired architectural klinker bricks in authentic Flemish and bespoke wild bonds. Maintain uniform 10.0mm raked joint depths with zero-efflorescence hydrophobic binder formulations.
                      </p>
                      <div className="font-label-sm text-label-sm text-primary font-bold pt-1">
                        Tolerance: ±1.0mm per 3-meter coursing run
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">architecture</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Halfen Anchor Systems &amp; Sub-Structure Mechanics
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Direct installation of heavy-gauge austenitic stainless steel (A4/1.4571) Halfen brackets, slotted thermal decoupling shims, and high-tensile shear pins transferring 1.8kN deadweight per stone anchor assembly.
                      </p>
                      <div className="font-label-sm text-label-sm text-secondary font-bold pt-1">
                        Standard: DIN 18516-3 Cladding Rigidity
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">layers</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Cavity Wall Damp-Proofing &amp; Ventilation Integrity
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Dual-layer continuous EPDM damp-proof courses (DPC), weep-hole vent baffle arrays every 800mm, and ISO 14001 water-repellent non-combustible mineral wool insulation pinning without thermal breaks.
                      </p>
                      <div className="font-label-sm text-label-sm text-primary font-bold pt-1">
                        Air Cavity Clearance: Strictly ≥40mm clear gap
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">straighten</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Laser Total Station Alignment &amp; Micro-Tolerances
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Real-time geometric benchmark tracking using Leica TS16 robotic stations to preserve strict horizontal course levels and vertical plumbness across four multi-story atrium pavilions.
                      </p>
                      <div className="font-label-sm text-label-sm text-secondary font-bold pt-1">
                        Optical Verification: Daily story-pole benchmarks
                      </div>
                    </div>
                  </div>
                  {/* Critical Quality Directive Banner */}
                  <div className="bg-error-container text-on-error-container p-space-md rounded-xl shadow-sm flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-[24px] text-error shrink-0 mt-0.5">
                      warning
                    </span>
                    <div className="space-y-1">
                      <div className="font-label-lg text-label-lg font-bold uppercase tracking-wider text-error">
                        Critical Quality Directive: Mortar Hydrophobic Curing &amp; Zero-Efflorescence Protocol
                      </div>
                      <p className="font-body-sm text-body-sm leading-relaxed">
                        Mandatory daily aggregate moisture content verification before mixing. In accordance with DIN EN 998-2, all mortar must maintain a water-retention ratio above 85% with an ambient application envelope between +5°C and +30°C. Cold-joint formation or premature drying triggers immediate section rejection and teardown.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SECTION 02: Daily Operational Sequence */}
                <div className="space-y-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-secondary text-on-secondary font-bold flex items-center justify-center font-headline-sm text-headline-sm">
                      02
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Daily Facade Execution Responsibilities &amp; Operational Sequence
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Each working shift follows an uncompromising, institutionally documented workflow to guarantee structural longevity and pristine aesthetic alignment:
                  </p>
                  {/* Timeline Steps */}
                  <div className="space-y-space-sm">
                    {/* Step 1 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row gap-space-md items-start">
                      <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-label-md text-label-md font-bold shrink-0">
                        06:30 – 07:30 CET
                      </div>
                      <div className="space-y-1">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Step 01: Pre-Shift Mortar Chemistry &amp; Aggregate Batch Inspection
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Sample and test factory-blended M10 class trass lime mortar. Calibrate volumetric water ratio, test sand gradation curves, and sign off batch release for both tower cranes and mechanical silo pumping lines.
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row gap-space-md items-start">
                      <div className="px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary font-label-md text-label-md font-bold shrink-0">
                        07:30 – 11:30 CET
                      </div>
                      <div className="space-y-1">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Step 02: Story Pole Setup &amp; Laser Datum Benchmark Calibration
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Erect precision aluminum story-poles on primary corner leads. Shoot laser elevation pins across the 120-meter facade perimeter, tension guide-lines with Stabila dead-level gauges, and approve brick bonding coursing start.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row gap-space-md items-start">
                      <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-label-md text-label-md font-bold shrink-0">
                        11:30 – 13:45 CET
                      </div>
                      <div className="space-y-1">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Step 03: Natural Sandstone Rainscreen Rigging &amp; Bracket Fastening
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Supervise mechanical hoist rigging of 80kg dimensional sandstone panels. Verify anchor penetration depth (minimum 75mm in C30/37 reinforced concrete), calibrate torque wrenches to 45Nm, and seat vibration-dampening neoprene gaskets.
                        </p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row gap-space-md items-start">
                      <div className="px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary font-label-md text-label-md font-bold shrink-0">
                        13:45 – 15:30 CET
                      </div>
                      <div className="space-y-1">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Step 04: Structural CMU Grouting &amp; Seismic Reinforcement Placement
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Direct the continuous placement of Murfor ladder reinforcement every third course. Monitor core consolidation with high-frequency pencil vibrators to ensure 100% void-free embedment around rebar dowels.
                        </p>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row gap-space-md items-start">
                      <div className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold shrink-0">
                        15:30 – 16:30 CET
                      </div>
                      <div className="space-y-1">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Step 05: Joint Raking, Chemical Cleaning &amp; End-of-Day Weather Enclosure
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Tool all fresh mortar joints to the specified concave/raked profile using hardened carbide irons. Secure heavy-duty breathable tarpaulins over all open head joints and exposed cavity insulation against nocturnal precipitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 03: Vocational Qualifications & Jurisdictional Equivalence */}
                <div className="space-y-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-secondary text-on-secondary font-bold flex items-center justify-center font-headline-sm text-headline-sm">
                      03
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Vocational Qualifications &amp; Jurisdictional Equivalence
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Jobzeta provides certified bilateral wage harmonization and formal recognition of international masonry trade credentials. Applicants possessing any of the following credentials are pre-qualified for the German Tarif Level VI grade:
                  </p>
                  {/* Cross-Border Equivalence Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/* DACH */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                          Germany &amp; DACH (Primary)
                        </span>
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          workspace_premium
                        </span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Maurer / Maurermeister Gesellenbrief
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        HWK / ZDB dual vocational credential. Proof of DIN 1053 and Eurocode 6 masonry compliance. Minimum 5 years active site leadership on commercial facades.
                      </p>
                    </div>
                    {/* USA / Canada */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                          USA &amp; Canada (Reciprocal)
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          handshake
                        </span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Red Seal Bricklayer / BAC Journeyman
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Interprovincial Red Seal or Union BAC Card with Level 4 Journeyman standing. OSHA 1926 Subpart L (Scaffolds) and ASTM C270 / C1019 masonry familiarity.
                      </p>
                    </div>
                    {/* UK & Ireland */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                          United Kingdom &amp; Ireland
                        </span>
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          verified
                        </span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        NVQ Level 3 Trowel Occupations &amp; CSCS Gold
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        City &amp; Guilds Advanced Craft Bricklaying or Irish SOLAS National Craft Certificate. CITB Heritage Stone or cladding sub-structure endorsements preferred.
                      </p>
                    </div>
                    {/* Nordic & Maritime */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                          Nordic &amp; Maritime
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          ac_unit
                        </span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Fagbrev Murer / Murarbetare
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Norwegian Fagbrev or Swedish Yrkesbevis murning with cold-weather enclosure experience and sub-zero winter masonry execution certifications.
                      </p>
                    </div>
                  </div>
                  {/* Technical Skills Checklist */}
                  <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm">
                    <h4 className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wider mb-space-sm">
                      Required Technical Literacy Verification
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-space-md text-on-surface font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check_circle
                        </span>
                        <span>Mortar flow table and slump testing (DIN EN 1015)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check_circle
                        </span>
                        <span>Cavity moisture psychrometric calculation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check_circle
                        </span>
                        <span>Calibrated torque wrench verification for Halfen anchors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check_circle
                        </span>
                        <span>BIM 360 mobile plan reading &amp; 3D clash resolution</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 04: Tariff Compensation & Construction Subsidies */}
                <div className="space-y-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-secondary text-on-secondary font-bold flex items-center justify-center font-headline-sm text-headline-sm">
                      04
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Tariff Grade Compensation &amp; Construction Subsidies
                    </h3>
                  </div>
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm bg-surface-container-high/30 p-space-md rounded-lg">
                      <div>
                        <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                          IG BAU Tariff Grouping
                        </span>
                        <div className="font-headline-lg text-headline-lg text-secondary font-bold">
                          €4,850 – €6,330{" "}
                          <span className="font-body-md text-body-md text-on-surface-variant font-normal">
                            / month
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                          Total Annual Range
                        </span>
                        <div className="font-headline-md text-headline-md text-on-surface font-bold">
                          €58,000 – €76,000
                        </div>
                      </div>
                    </div>
                    {/* Benefits Mosaic */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex items-start gap-3 p-space-sm rounded-lg bg-surface-container-low">
                        <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[18px]">home</span>
                        </div>
                        <div>
                          <div className="font-label-lg text-label-lg font-bold text-on-surface">
                            €3,600 Relocation Grant
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            Paid directly upon registration. Subsidized furnished flat in Berlin-Mitte or Tiergarten for first 6 months.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-space-sm rounded-lg bg-surface-container-low">
                        <div className="w-8 h-8 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[18px]">handyman</span>
                        </div>
                        <div>
                          <div className="font-label-lg text-label-lg font-bold text-on-surface">
                            €1,200 High-Precision Tool Allowance
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            Annual allowance for premium Stabila digital spirit levels, Marshalltown stainless trowels, and safety harnesses.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-space-sm rounded-lg bg-surface-container-low">
                        <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[18px]">beach_access</span>
                        </div>
                        <div>
                          <div className="font-label-lg text-label-lg font-bold text-on-surface">
                            30 Days Vacation &amp; SOKA-BAU
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            Full statutory German construction holiday fund with 100% portable severance points across the EU.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-space-sm rounded-lg bg-surface-container-low">
                        <div className="w-8 h-8 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[18px]">school</span>
                        </div>
                        <div>
                          <div className="font-label-lg text-label-lg font-bold text-on-surface">
                            Master Craftsman (Meisterschule) Sponsorship
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            100% employer-sponsored tuition for candidates progressing to HWK Maurermeister or Restorator certification.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 05: Practical Evaluation Workflow */}
                <div className="space-y-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-secondary text-on-secondary font-bold flex items-center justify-center font-headline-sm text-headline-sm">
                      05
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Transparent 3-Step Selection &amp; Practical Evaluation
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden">
                      <span className="font-display-lg text-display-lg text-surface-container-highest/60 font-bold absolute -right-2 -bottom-4 select-none">
                        1
                      </span>
                      <div className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider mb-1">
                        Step 1 • 24-48 Hours
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                        Fast-Track Verification
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Institutional credential scan through Jobzeta gateway, verifying trade certificates, OSHA/CSCS badges, and site photos.
                      </p>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden">
                      <span className="font-display-lg text-display-lg text-surface-container-highest/60 font-bold absolute -right-2 -bottom-4 select-none">
                        2
                      </span>
                      <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider mb-1">
                        Step 2 • Technical Deep Dive
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                        Technical Interview
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        30-minute structured video dialogue with Chief Facade Engineer Albrecht Weber covering masonry bond math and anchor calculations.
                      </p>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden">
                      <span className="font-display-lg text-display-lg text-surface-container-highest/60 font-bold absolute -right-2 -bottom-4 select-none">
                        3
                      </span>
                      <div className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider mb-1">
                        Step 3 • Paid Mockup Assessment
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                        Berlin Mockup Wall
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Half-day paid test run at our Spandau yard: build a 2.4m klinker wall segment and mount two sandstone rainscreen slabs with laser check.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sticky Action & Sidebar (4 Columns) */}
              <div className="lg:col-span-4 space-y-space-lg">
                {/* Application Sticky Container */}
                <div className="sticky top-20 space-y-space-md" id="fast-track-apply">
                  {/* Certified Application Form Card */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-xl space-y-space-md">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                        Fast-Track Gateway
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Apply for Senior Structural Mason &amp; Facade Lead
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Direct submission into the PORR &amp; Implenia Consortium engineering review portal. Priority review within 48 business hours.
                      </p>
                    </div>
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-space-sm">
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1">
                          Full Legal Name
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          placeholder="e.g. Marcus Thorne"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1">
                          Work Email
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          placeholder="m.thorne@craftguild.org"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1">
                          Phone / WhatsApp (+49 or Intl)
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          placeholder="+49 152 9842109"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface mb-1">
                            Experience Tier
                          </label>
                          <select
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                            className="w-full h-11 px-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          >
                            <option>5-8 Years</option>
                            <option>8-12 Years (Lead)</option>
                            <option>12+ Years (Master)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md text-on-surface mb-1">
                            Primary Trade Credential
                          </label>
                          <select
                            value={formData.credential}
                            onChange={(e) => setFormData({ ...formData, credential: e.target.value })}
                            className="w-full h-11 px-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          >
                            <option>HWK Geselle/Meister</option>
                            <option>Red Seal / BAC</option>
                            <option>CSCS Gold / NVQ 3</option>
                            <option>Fagbrev Murer</option>
                            <option>Other Equivalent</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-1">
                          CV &amp; Portfolio of Previous Facades
                        </label>
                        <div className="h-24 rounded-lg bg-surface-container-low flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container transition-colors shadow-sm text-center px-4">
                          <span className="material-symbols-outlined text-[24px] text-primary">
                            upload_file
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface mt-1">
                            Drop PDF resume or logbook photos
                          </span>
                          <span className="font-body-sm text-[11px] text-outline">
                            Max 25MB (PDF, DOCX, ZIP)
                          </span>
                        </div>
                      </div>
                      <div className="pt-1">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input
                            checked={formData.visaRequired}
                            onChange={(e) => setFormData({ ...formData, visaRequired: e.target.checked })}
                            className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-[12px] text-on-surface-variant leading-snug">
                            I require EU Blue Card / Fast-Track German Skilled Work Visa legal sponsorship (Provided free by Jobzeta Mobility Team).
                          </span>
                        </label>
                      </div>
                      <button
                        className="w-full py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          assignment_turned_in
                        </span>
                        Submit Certified Application
                      </button>
                      <div className="text-center font-body-sm text-[12px] text-outline pt-1">
                        Zero fees for tradespeople. Encrypted via Jobzeta Protocol.
                      </div>
                    </form>
                  </div>

                  {/* Quote from Chief Project Director */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md space-y-space-xs">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-12 h-12 rounded-full object-cover shrink-0"
                        alt="Headshot of a senior German civil engineer in early 50s wearing white engineering hard hat and safety glasses on Berlin building site with blurred facade cranes."
                        src="/albrecht-weber.jpg"
                      />
                      <div>
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Albrecht Weber
                        </div>
                        <div className="font-label-sm text-label-sm text-secondary font-semibold">
                          Chief Facade Engineer &amp; Director, Berlin Cultural Project
                        </div>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm italic text-on-surface-variant pt-2 leading-relaxed">
                      &ldquo;The true soul of timeless architecture lies in the unyielding precision of the mason&apos;s plumb line. We are engineering a century-defining monument in the heart of Berlin and we welcome world-class craftspeople to lead our guilds.&rdquo;
                    </p>
                  </div>

                  {/* Project Telemetry Metrics Bar */}
                  <div className="bg-secondary text-on-secondary p-space-md rounded-xl shadow-md space-y-space-sm">
                    <div className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary-container">
                      Site Technical Parameters
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded bg-surface-container-lowest/10 backdrop-blur-sm">
                        <div className="font-headline-md text-headline-md font-bold">12,000</div>
                        <div className="font-label-sm text-label-sm text-secondary-container">
                          m² Total Area
                        </div>
                      </div>
                      <div className="p-2 rounded bg-surface-container-lowest/10 backdrop-blur-sm">
                        <div className="font-headline-md text-headline-md font-bold">&lt;1.0mm</div>
                        <div className="font-label-sm text-label-sm text-secondary-container">
                          Tolerance Limit
                        </div>
                      </div>
                      <div className="p-2 rounded bg-surface-container-lowest/10 backdrop-blur-sm">
                        <div className="font-headline-md text-headline-md font-bold">M10</div>
                        <div className="font-label-sm text-label-sm text-secondary-container">
                          Mortar Grade
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Submission Success Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm">
              <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl space-y-space-md">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[32px]">check_circle</span>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Trade Application Transmitted
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Your credentials have been securely routed to the PORR &amp; Implenia Facade JV engineering panel in Berlin under Reference #BER-8842-APP.
                  </p>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-xl text-left space-y-2">
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Priority Review Window:</span>
                    <strong className="text-primary">Under 48 Hours</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Lead Reviewer:</span>
                    <strong>Ing. Albrecht Weber (Chief Facade Lead)</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Status:</span>
                    <span className="inline-flex items-center gap-1 text-primary font-bold">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Queued for Verification
                    </span>
                  </div>
                </div>
                <button
                  className="w-full py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold transition-colors cursor-pointer"
                  onClick={() => setModalOpen(false)}
                >
                  Return to Operational Handbook
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
