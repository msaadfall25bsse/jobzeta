"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorWelderJobPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "5 - 10 Years",
    country: "",
    qualification: "iso",
    sponsorship: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md">
      {/* 1. REUSABLE GLOBAL HEADER */}
      <Header />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Top Navigation Sub-Bar & Breadcrumbs */}
          <div className="w-full bg-surface-container-low px-margin py-space-sm border-b border-surface-container-highest">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
              <Link
                className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-primary-container transition-colors"
                href="/categories/trades-and-construction/welding-and-fabrication"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span>Back to Welding &amp; Fabrication Overview</span>
              </Link>
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline px-space-sm py-space-xs rounded-full bg-surface-container-high">
                  Role ID: JOB-NMMF-WEL-8821
                </span>
                <span className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Open for Certified Requisition • Urgent Crew Mobilization
                </span>
              </div>
            </div>
          </div>

          {/* Main Hero Card & Quick Specs Header */}
          <section className="w-full px-margin py-space-md">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
              {/* Title & Action Strip */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Nordic Metalworks &amp; Marine Fab
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      Verified Employer
                    </span>
                    <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      IF Metall Union Agreement
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                    Senior ASME IX &amp; 6G Orbital TIG Pipe Welder
                  </h1>
                  <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-tertiary">
                        location_on
                      </span>
                      Gothenburg, Sweden (On-Site • Shipyard / Industrial Fabrication Hall 3)
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-tertiary">
                        schedule
                      </span>
                      Full-time (38.5 hrs/week • Swedish Collective Standard)
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        payments
                      </span>
                      <strong className="text-on-surface">Kr 420,000 – 480,000 / year</strong> (€42k
                      – €48k eq.) + Shift Premiums
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <button
                    className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all font-semibold"
                    onClick={() => {
                      document
                        .getElementById("fast-track-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="material-symbols-outlined text-[20px]">bolt</span>
                    <span>Fast-Track Coded Application</span>
                  </button>
                </div>
              </div>

              {/* Hero Visual Display Card */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-inverse-surface min-h-[380px] lg:h-[420px] flex flex-col justify-end">
                <img
                  alt="A professional welder wearing a specialized PAPR helmet actively TIG welding an industrial cryogenic stainless steel pipe on an orbital guide track in a vast, modern European shipyard fabrication hall."
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2li11hKBMbB3bzIJ21w1BAPMaLsvIaiqGiOWkrNSHIiZfht-yKK-OOTaE8dQvxumfhVMKz-evn8sTLsD7rbvxfEXHWkY8ZgWwc4x5A4Y0SD8DYnZyteavS7r2REq4eyFVBlr6OkPn7P65AXsvjcm6J3RPy61ob0FP3SPxypDtzAM02LJXEnH86tv8lKa8JyJ_9JosDura1lU-G933M3BIRw3NIgYDTE-Y_5IejldHzMCfGiQHiST2_g"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent"></div>
                <div className="relative z-10 p-space-lg lg:p-space-xl flex flex-col gap-space-sm text-surface-bright">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
                      Tier-1 Marine &amp; Cryogenic Piping Hall • ISO 3834-2 &amp; EN 1090-2 EXC4
                      Audited
                    </span>
                    <span className="px-space-md py-space-xs rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-label-sm text-label-sm">
                      Hall 3: Duplex &amp; LNG Fuel Line Spooling
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-surface-bright max-w-3xl leading-tight font-bold">
                    Gothenburg Shipyard &amp; Offshore Plant 3 – High-Pressure Duplex &amp; Cryogenic
                    LNG Line Fabrication
                  </h2>
                  <p className="font-body-md text-body-md text-surface-container-high max-w-4xl">
                    Core equipment: Polysoude &amp; Arc Machines orbital TIG weld heads, Miller
                    Dynasty 400 GTAW inverters, purge gas oxygen monitoring (&lt;20 ppm O2), and
                    on-site radiographic testing bunker.
                  </p>
                  {/* Telemetry Badges Strip */}
                  <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                    <div className="flex items-center gap-2 px-space-md py-1.5 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-surface-bright font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        check_circle
                      </span>
                      <span>99.4% First-Pass Radiographic NDT Rate</span>
                    </div>
                    <div className="flex items-center gap-2 px-space-md py-1.5 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-surface-bright font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        verified_user
                      </span>
                      <span>ASME IX &amp; B31.3 Coded Criteria</span>
                    </div>
                    <div className="flex items-center gap-2 px-space-md py-1.5 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-surface-bright font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        biotech
                      </span>
                      <span>SIL-Level 100% X-Ray Validation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top WPS Spec Documentation Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container-high p-space-md rounded-xl text-on-surface">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    description
                  </span>
                  <span className="font-label-lg text-label-lg tracking-wide">
                    OFFICIAL WELDING PROCEDURE SPECIFICATION (WPS) &amp; WORK INSTRUCTION:{" "}
                    <span className="font-bold text-primary">SPEC-WPS-TIG-6G-2025-V2</span>
                  </span>
                </div>
                <div className="flex items-center gap-space-xs shrink-0">
                  <button
                    className="inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-dim font-label-sm text-label-sm transition-all shadow-sm"
                    onClick={() => window.print()}
                  >
                    <span className="material-symbols-outlined text-[16px]">print</span>
                    <span>Print WPS</span>
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-dim font-label-sm text-label-sm transition-all shadow-sm"
                    onClick={() =>
                      alert("Official WPS Spec PDF download initiated (SPEC-WPS-TIG-6G-2025-V2)")
                    }
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>PDF Copy</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Content Split Area: 70% Left Main Spec + 30% Right Sticky Fast-Track Application Form */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* LEFT COLUMN: Technical Instruction & Role Directives */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* SECTION 1 */}
                <article className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest">
                  <div className="flex items-center justify-between">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                      1. Complete Role Overview &amp; Operational Metallurgical Context
                    </h2>
                    <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                      Section 01
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Nordic Metalworks &amp; Marine Fab’s Plant 3 in Gothenburg is a premier European
                    heavy fabrication center executing mission-critical pressure piping for
                    liquefied natural gas (LNG) carriers, offshore hydrogen processing skids, and
                    subsea tie-in manifolds. Working within this specialized hall, the Senior Pipe
                    Welder is responsible for executing defect-free manual 6G GTAW root passes and
                    overseeing automated orbital TIG hot and capping passes across high-alloy tubular
                    systems. All welds are subject to stringent 100% volumetric Non-Destructive
                    Testing (NDT), necessitating impeccable craftsmanship, deep metallurgical
                    vigilance, and uncompromised purge containment.
                  </p>

                  {/* 4 Context Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    {/* Card A */}
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">
                          precision_manufacturing
                        </span>
                        <span>Welding Process &amp; Techniques</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        GTAW / TIG manual root pass + Orbital automatic hot/fill passes. Employs
                        high-frequency arc start, pulse TIG wave shaping, and calibrated trailing
                        gas shields for sensitive metallurgy.
                      </p>
                    </div>

                    {/* Card B */}
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">layers</span>
                        <span>Base &amp; Filler Metallurgy</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Super Duplex 2507 (UNS S32750), 316L/316LN stainless, Inconel 625 weld
                        overlays, and Grade 2 Titanium spools. Strict ferrite balance management
                        (35% to 65% target).
                      </p>
                    </div>

                    {/* Card C */}
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">rule</span>
                        <span>Quality &amp; Inspection Codes</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        ASME Boiler &amp; Pressure Vessel Code Sec IX, ASME B31.3 (Severe Cyclic
                        Conditions), ISO 9606-1, EN ISO 15614-1, and NORSOK M-601 standards with zero
                        allowable root concave/porosity.
                      </p>
                    </div>

                    {/* Card D */}
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">air</span>
                        <span>Operating Environment &amp; Bays</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Environmentally regulated pipe bays with localized fume source extraction,
                        pre-heat induction bands, calibrated purge analyzers, and a positive-pressure
                        titanium clean bay.
                      </p>
                    </div>
                  </div>

                  {/* Purge Integrity Strict Callout Box */}
                  <div className="flex items-start gap-space-md p-space-md rounded-xl bg-primary-fixed-dim/20 text-on-surface border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-label-lg text-label-lg text-on-primary-fixed-variant font-bold">
                        Purge Integrity Strict Requirement
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        All root runs in Super Duplex and austenitic alloys require residual oxygen
                        levels strictly below <strong>20 ppm (parts per million)</strong> prior to
                        striking the arc. Purge oxygen readings must be logged via calibrated optical
                        sensors into the plant’s digital QA weld log before ignition.
                      </p>
                    </div>
                  </div>
                </article>

                {/* SECTION 2 */}
                <article className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest">
                  <div className="flex items-center justify-between">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                      2. Detailed Daily Welding Responsibilities &amp; Quality Directives
                    </h2>
                    <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                      Section 02
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Every shift in Fabrication Hall 3 follows strict WPS work directives. Welders
                    operate with complete autonomy, executing joint preparation, root gap alignment,
                    purge dam seal verification, manual or robotic deposition, and post-weld NDT
                    tagging.
                  </p>

                  {/* 5 Structured Directives */}
                  <div className="flex flex-col gap-space-md pt-space-xs">
                    {/* Item 1 */}
                    <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl border border-surface-container-high">
                      <div className="flex flex-wrap items-center justify-between gap-space-xs">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Pipe Joint Fit-Up, Root Gap &amp; Purge Setup
                        </span>
                        <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                          ISO 13919-1 / ASME B31.3
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Verify bevel geometry (37.5° V-prep or J-prep compound bevels), check
                        internal bore hi-lo misalignment ensuring less than 1.0 mm tolerance.
                        Position water-soluble purge dams or mechanical silicone bladders, flow
                        99.999% high-purity argon backing gas, and record oxygen drop below 20 ppm.
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl border border-surface-container-high">
                      <div className="flex flex-wrap items-center justify-between gap-space-xs">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Manual 6G GTAW Root &amp; Hot Pass Execution
                        </span>
                        <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                          ASME IX / 6G Couplings
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Deposit root bead in 6G inclined 45° stationary test position using
                        high-frequency TIG torches with gas lens ceramic nozzles. Maintain steady
                        keyhole melt pool with continuous cold wire feeding, ensuring smooth uniform
                        internal root penetration, complete tie-ins at 6 and 12 o&apos;clock, and zero
                        oxidation or sugar formation.
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl border border-surface-container-high">
                      <div className="flex flex-wrap items-center justify-between gap-space-xs">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Orbital Welding Head Programming &amp; Automated Runs
                        </span>
                        <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                          Polysoude / Orbital CNC
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Clamp closed-chamber or open-track Polysoude/AMI orbital heads onto prepped
                        pipe joints. Select validated multi-pass programs, adjust pulse
                        peak/background currents, rotational velocity, AVC (arc voltage control), and
                        synchronized cold wire feed rates. Monitor real-time arc visual feed and data
                        logger.
                      </p>
                    </div>

                    {/* Item 4 */}
                    <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl border border-surface-container-high">
                      <div className="flex flex-wrap items-center justify-between gap-space-xs">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Interpass Temperature &amp; Heat Input Regulation
                        </span>
                        <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                          EN 1011-3 / NORSOK
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Strictly enforce heat input caps between 0.5 and 1.5 kJ/mm using
                        travel-speed timers and digital current loggers. Maintain interpass
                        temperatures strictly below 100°C for Super Duplex 2507 to prevent
                        deleterious sigma phase formation and preserve parent alloy pitting
                        resistance equivalent number (PREN ≥ 42).
                      </p>
                    </div>

                    {/* Item 5 */}
                    <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl border border-surface-container-high">
                      <div className="flex flex-wrap items-center justify-between gap-space-xs">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Pre-Inspection, Weld Bead Dressing &amp; NDT Handover
                        </span>
                        <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                          ISO 5817 Level B / EN ISO 17636
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Perform thorough visual inspection (VT) verifying cap reinforcement height
                        (≤ 2.5 mm), lack of undercut, and flawless edge blend. Lightly feather
                        start-stop transitions with stainless-dedicated burr cutters. Stamp unique
                        welder ID code and dispatch spool to Radiographic Testing (RT) and Phased
                        Array UT (PAUT).
                      </p>
                    </div>
                  </div>
                </article>

                {/* SECTION 3 */}
                <article className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest">
                  <div className="flex items-center justify-between">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                      3. Technical Qualifications &amp; Metallurgical Welder Certification
                      Equivalence
                    </h2>
                    <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                      Section 03
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Nordic Metalworks maintains bilateral reciprocity agreements with major
                    international classification societies (DNV, Lloyd&apos;s Register, Bureau
                    Veritas, ABS). Candidates holding valid qualifications in any of the following
                    standard frameworks are invited to apply:
                  </p>

                  {/* Reciprocity Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {/* Box 1 */}
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        <span>ISO 9606-1 Welder Qualification</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        Standard: H-L045 / 6G Position
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        GTAW Process 141, solid wire filler, covering material groups 8 (Austenitic)
                        and 10 (Duplex/Super Duplex stainless steel).
                      </p>
                    </div>

                    {/* Box 2 */}
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        <span>ASME Section IX Performance</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        Standard: 6G Pipe Test Coupon
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Qualified on 2-inch and 6-inch diameter Schedule 80/160 pipe specimens,
                        manual GTAW root + hot fill, backed by radiographic and side bend test
                        reports.
                      </p>
                    </div>

                    {/* Box 3 */}
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        <span>Nordic Welder License (SS-EN 287-1)</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        Standard: Shipyard Coded Card
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Accredited Swedish or Nordic offshore fabrication coded certificate with
                        continuous employer 6-month prolongation stamps.
                      </p>
                    </div>

                    {/* Box 4 */}
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        <span>AWS D1.1 / D1.6 Coded Certificate</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        Standard: American Welding Society
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Certified Stainless Steel Pipe Welder qualification with documented pipe
                        open-root experience and laboratory sound test approvals.
                      </p>
                    </div>
                  </div>

                  {/* Technical Literacy Checklist */}
                  <div className="flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-high/50 border border-surface-container-high">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold">
                      Blueprint &amp; WPS Literacy Requirements:
                    </span>
                    <ul className="flex flex-col gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[16px]">
                          check
                        </span>
                        Fluency reading complex isometric piping spools, P&amp;ID schematics, weld
                        mapping sheets, and dual-language WPS specifications.
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[16px]">
                          check
                        </span>
                        Solid grasp of weld symbols (AWS / ISO), joint geometry tolerances, and
                        metallurgical heat input calculations (kJ/mm).
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[16px]">
                          check
                        </span>
                        Minimum 3 years verifiable shop or yard experience in high-purity manual GTAW
                        or automated orbital pipe fabrication.
                      </li>
                    </ul>
                  </div>

                  {/* Preferred Accreditations Chips */}
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wide text-outline font-semibold">
                      Preferred Additional Certifications
                    </span>
                    <div className="flex flex-wrap gap-space-xs">
                      <span className="px-space-md py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm border border-surface-container-high">
                        CSWIP / PCN Visual Inspector Level 1/2
                      </span>
                      <span className="px-space-md py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm border border-surface-container-high">
                        Orbital Welding System Certificate (Polysoude / AMI)
                      </span>
                      <span className="px-space-md py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm border border-surface-container-high">
                        Hot Work Safety Passport (Heta Arbeten)
                      </span>
                      <span className="px-space-md py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm border border-surface-container-high">
                        English or Swedish Working Proficiency (Bays operate bilingual)
                      </span>
                    </div>
                  </div>
                </article>

                {/* SECTION 4 */}
                <article className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest">
                  <div className="flex items-center justify-between">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                      4. Complete Compensation, Allowances &amp; Swedish Collective Bargaining (IF
                      Metall)
                    </h2>
                    <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                      Section 04
                    </span>
                  </div>

                  {/* Base Salary Highlight Card */}
                  <div className="p-space-lg rounded-xl bg-gradient-to-r from-surface-container-low to-surface-container flex flex-col md:flex-row md:items-center justify-between gap-space-md border border-surface-container-high">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                        Standard Monthly Base Wage
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display-lg text-headline-xl text-on-surface font-bold">
                          Kr 35,000 – 40,000
                        </span>
                        <span className="font-body-md text-body-md text-on-surface-variant">
                          / month (~€3,500 – €4,000 base)
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Guaranteed under Swedish IF Metall National Collective Bargaining Agreement
                        (Teknikavtalet).
                      </span>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                        +20% to +60% Shift Premiums
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">
                        Evening +25% • Night/Weekend +50-100%
                      </span>
                    </div>
                  </div>

                  {/* 4 Benefit Highlight Tiles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
                        <span>€3,500 Relocation &amp; Housing Grant</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Full airfare reimbursement, shipping allowance, plus 30 days of free
                        furnished waterfront apartment accommodation near Gothenburg Harbor.
                      </p>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">masks</span>
                        <span>€900 PPE &amp; Custom Gear Package</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Personal 3M Speedglas G5-01 PAPR respiratory helmet, flame-resistant split
                        cowhide jacket, and precision Stäubli gas purge kits provided on Day 1.
                      </p>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">beach_access</span>
                        <span>33 Days Paid Vacation &amp; Pension</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Full Swedish statutory vacation pay guarantee (Semesterlag) plus
                        comprehensive employer-funded SAF-LO industrial supplementary pension.
                      </p>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">school</span>
                        <span>Recertification Sponsorship</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        100% employer-funded bi-annual welder performance renewals (ASME IX / ISO
                        9606-1 coupons, radiography tests, and accredited lab sign-offs).
                      </p>
                    </div>
                  </div>
                </article>

                {/* SECTION 5 */}
                <article className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest">
                  <div className="flex items-center justify-between">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                      5. Transparent 3-Step Selection &amp; Weld Coupon Assessment Process
                    </h2>
                    <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                      Section 05
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-md pt-space-xs">
                    {/* Step 1 */}
                    <div className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded-xl border border-surface-container-high">
                      <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm shrink-0">
                        1
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Fast-Track Trade Verification
                          </span>
                          <span className="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                            24 – 48 Hours
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Submit your CV and current Welder Performance Qualification Records (WPQR)
                          or test certificates via the online portal. Our Quality Coordination desk
                          validates stamping validity and weld process scope within 2 business days.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded-xl border border-surface-container-high">
                      <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-headline-sm shrink-0">
                        2
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            20-Minute Technical Interview with Welding Inspector
                          </span>
                          <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                            Video Call
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          A conversational screen with Magnus Holmström (IWE Quality Director)
                          reviewing root pass keyhole techniques, purge measurement practices,
                          interpass temperature control for Super Duplex, and blueprint
                          interpretations.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded-xl border border-surface-container-high">
                      <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold text-headline-sm shrink-0">
                        3
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            On-Site Coupon Test &amp; Shipyard Tour (Gothenburg)
                          </span>
                          <span className="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                            All Expenses Paid
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          We fly you to Gothenburg for a 1-day evaluation at Fabrication Hall 3. You
                          will execute a standard 4-inch Super Duplex 6G pipe test coupon under purge.
                          Instant radiographic evaluation in our on-site X-Ray bunker. Upon
                          successful sign-off, immediate formal contract mobilization is offered.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* RIGHT COLUMN: Sticky Application Form & Quality Supervisor Profile */}
              <div className="lg:col-span-4 flex flex-col gap-space-lg sticky top-24">
                {/* FAST TRACK APPLICATION CARD */}
                <div
                  className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-md border border-surface-container-highest flex flex-col gap-space-md"
                  id="fast-track-form"
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">bolt</span>
                      <span>Direct Shipyard Submission</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                      Fast-Track Coded Welder Application
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Priority mobilization for certified 6G &amp; orbital GTAW craftspeople. Response
                      guaranteed within 48 hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-space-md rounded-xl bg-primary-fixed/20 border border-primary/30 text-on-surface flex flex-col items-center text-center gap-2 py-8">
                      <span className="material-symbols-outlined text-primary text-[48px]">
                        check_circle
                      </span>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        Application Received!
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Thank you, {formData.fullName || "applicant"}. Your credentials and WPQR
                        package have been dispatched to Magnus Holmström (IWE Quality Director) at
                        Plant 3.
                      </p>
                      <button
                        className="mt-4 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container"
                        onClick={() => setSubmitted(false)}
                      >
                        Submit Another Form
                      </button>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                      {/* Full Name */}
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Full Legal Name *
                        </label>
                        <input
                          className="w-full h-11 px-space-md rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                          placeholder="e.g. Henrik Larsson"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Email Address *
                        </label>
                        <input
                          className="w-full h-11 px-space-md rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                          placeholder="henrik.welder@example.com"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Phone / WhatsApp *
                        </label>
                        <input
                          className="w-full h-11 px-space-md rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                          placeholder="+46 70 123 4567 or international"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>

                      {/* Experience & Country */}
                      <div className="grid grid-cols-2 gap-space-sm">
                        <div className="flex flex-col gap-1">
                          <label className="font-label-md text-label-md text-on-surface font-semibold">
                            Experience
                          </label>
                          <select
                            className="w-full h-11 px-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                            value={formData.experience}
                            onChange={(e) =>
                              setFormData({ ...formData, experience: e.target.value })
                            }
                          >
                            <option>3 - 5 Years Coded</option>
                            <option>5 - 10 Years</option>
                            <option>10+ Years Master</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-md text-label-md text-on-surface font-semibold">
                            Country
                          </label>
                          <input
                            className="w-full h-11 px-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                            placeholder="Sweden / EU / Other"
                            type="text"
                            value={formData.country}
                            onChange={(e) =>
                              setFormData({ ...formData, country: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      {/* Primary Welder Qualification */}
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Primary Qualification *
                        </label>
                        <select
                          className="w-full h-11 px-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                          required
                          value={formData.qualification}
                          onChange={(e) =>
                            setFormData({ ...formData, qualification: e.target.value })
                          }
                        >
                          <option value="iso">ISO 9606-1 6G (TIG / Stainless &amp; Duplex)</option>
                          <option value="asme">ASME IX 6G Pipe Qualification</option>
                          <option value="aws">AWS D1.1 / D1.6 Certified</option>
                          <option value="nordic">Nordic Welder License / Shipyard Card</option>
                          <option value="other">Other National Coded Stamp</option>
                        </select>
                      </div>

                      {/* File Upload Dropzone */}
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Upload CV &amp; Welder Certs (WPQR) *
                        </label>
                        <div
                          className="w-full p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col items-center justify-center text-center cursor-pointer border-2 border-dashed border-outline-variant/60"
                          onClick={() => alert("Certificate file uploader clicked")}
                        >
                          <span className="material-symbols-outlined text-primary text-[28px] mb-1">
                            upload_file
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Drop PDF / DOCX certificate file
                          </span>
                          <span className="font-body-sm text-label-sm text-outline">
                            Up to 25MB (Include test coupon reports)
                          </span>
                        </div>
                      </div>

                      {/* Sponsorship Checkbox */}
                      <label className="flex items-start gap-space-xs cursor-pointer">
                        <input
                          checked={formData.sponsorship}
                          className="w-4 h-4 mt-0.5 rounded text-primary focus:ring-primary accent-primary"
                          type="checkbox"
                          onChange={(e) =>
                            setFormData({ ...formData, sponsorship: e.target.checked })
                          }
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          I hold EU/EEA citizenship OR require Swedish skilled craftsperson visa
                          sponsorship.
                        </span>
                      </label>

                      {/* Submit Button */}
                      <button
                        className="w-full h-12 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-lg flex items-center justify-center gap-space-xs transition-all font-semibold"
                        type="submit"
                      >
                        <span>Submit Coded Welder Application</span>
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </button>

                      {/* Security & GDPR Footnote */}
                      <div className="flex items-center justify-center gap-space-xs text-outline font-label-sm text-label-sm pt-space-xs">
                        <span className="material-symbols-outlined text-[14px]">lock</span>
                        <span>GDPR Compliant • Encrypted AES-256</span>
                      </div>
                    </form>
                  )}
                </div>

                {/* TECHNICAL SUPERVISOR PROFILE CARD */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container-highest flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-headline-sm shrink-0">
                      MH
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Magnus Holmström
                      </span>
                      <span className="font-label-md text-label-md text-primary font-semibold">
                        IWE Welding Coordinator &amp; Quality Director
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">
                        Gothenburg Yard • Plant 3
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm italic relative border border-surface-container-high">
                    <span className="material-symbols-outlined text-primary/30 text-[32px] absolute top-1 right-2 pointer-events-none">
                      format_quote
                    </span>
                    “We pride ourselves on zero-defect metallurgical integrity for offshore and
                    cryogenic vessels. If you possess steady hands in 6G and understand purge purity,
                    you will thrive in our Gothenburg fabrication bays.”
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-space-xs">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Typically replies in &lt; 24h
                    </span>
                    <span
                      className="text-primary font-bold hover:underline cursor-pointer"
                      onClick={() => alert("Direct Plant Line: +46 31 555 0192 (Yard Bay 3 QA)")}
                    >
                      Direct Plant Line
                    </span>
                  </div>
                </div>

                {/* QUICK METRICS WIDGET */}
                <div className="bg-surface-container-low p-space-md rounded-2xl flex flex-col gap-space-sm text-on-surface border border-surface-container-high">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-outline font-semibold">
                    Fabrication Bay Telemetry
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm">Argon Purge Purity</span>
                    <span className="font-label-md text-label-md font-bold text-primary">
                      &lt; 15 ppm O2 Verified
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "94%" }}></div>
                  </div>
                  <div className="flex items-center justify-between text-label-sm text-outline">
                    <span>First-Pass Radiographic Yield</span>
                    <span className="text-on-surface font-bold">99.4% (Q1-Q4)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Global Comprehensive Reusable Footer */}
      <Footer />
    </div>
  );
}
