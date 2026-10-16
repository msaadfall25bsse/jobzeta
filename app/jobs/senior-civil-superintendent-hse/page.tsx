"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorCivilSuperintendentHseJobPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "12 – 18 Years (Lead)",
    credential: "SiGeKo (BaustellV)",
    visaRequired: true,
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)] flex-1">
        <div className="flex flex-col w-full">
          {/* Top Institutional Status Bar & Header Navigation */}
          <section className="w-full bg-surface-container-low py-space-sm px-margin-mobile lg:px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-xs">
              {/* Breadcrumb & Job ID Meta */}
              <div className="flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-space-xs flex-wrap">
                  <Link className="hover:text-primary transition-colors" href="/">
                    Home
                  </Link>
                  <span>/</span>
                  <Link className="hover:text-primary transition-colors" href="/categories">
                    Categories
                  </Link>
                  <span>/</span>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/categories/trades-and-construction"
                  >
                    Trades &amp; Construction
                  </Link>
                  <span>/</span>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/categories/trades-and-construction/site-supervision-and-safety"
                  >
                    Site Supervision &amp; Safety
                  </Link>
                  <span>/</span>
                  <span className="text-on-surface font-semibold">Full Operational Handbook</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-secondary shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    ROLE ID: JOB-HSE-FRK-9044
                  </span>
                  <span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary text-on-secondary">
                    <span className="material-symbols-outlined text-[14px]">shield</span>
                    ACTIVE HIGH-RISE SAFETY GATEWAY
                  </span>
                </div>
              </div>

              {/* Institutional Partnership Strip */}
              <div className="flex flex-wrap items-center justify-between gap-space-sm py-space-xs">
                <div className="flex items-center gap-space-sm flex-wrap">
                  <span className="font-label-md text-label-md text-secondary font-bold tracking-tight">
                    Hochtief &amp; Bouygues Construction JV
                  </span>
                  <span className="text-outline-variant font-light">•</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
                    Verified Infrastructure Partner
                  </span>
                  <span className="text-outline-variant font-light">•</span>
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    IG BAU Collective Agreement (Tarifvertrag Bau)
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <Link
                    className="inline-flex items-center gap-space-xs text-secondary hover:text-primary font-label-md text-label-md transition-colors"
                    href="/categories/trades-and-construction/site-supervision-and-safety"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    Back to Supervision Overview
                  </Link>
                  <a
                    className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-1.5 rounded-lg shadow-sm transition-colors"
                    href="#fast-track-apply"
                  >
                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                    Fast-Track Application
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Title & Compensation Header Bar */}
          <section className="w-full bg-surface-container-lowest shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] py-space-md px-margin-mobile lg:px-margin">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  Senior Civil Construction Superintendent &amp; Lead Site HSE Safety Director
                </h1>
                <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                    Frankfurt am Main, Germany (Financial District Tower Complex)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px]">schedule</span>
                    Full-Time (40 hrs/wk • German Construction Tariff)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">engineering</span>
                    Certified SiGeKo (BaustellV) &amp; Construction Director
                  </span>
                </div>
              </div>

              {/* Remuneration Card */}
              <div className="flex flex-col bg-surface-container-low px-space-md py-space-sm rounded-xl min-w-[280px]">
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Tariff Remuneration Scale
                </div>
                <div className="font-headline-md text-headline-md text-secondary font-bold">
                  €74,000 – €98,000{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                    / year gross base
                  </span>
                </div>
                <div className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">add_circle</span>
                  +18% Site Responsibility Multiplier • HSE Bonus • EV Fleet &amp; Apt
                </div>
              </div>
            </div>
          </section>

          {/* Mega-Project Architectural Banner */}
          <section className="w-full px-margin-mobile lg:px-margin py-space-md">
            <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden shadow-lg bg-inverse-surface">
              <div
                className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
                style={{ backgroundImage: "url('/frankfurt-highrise-hero.jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-on-background via-on-background/85 to-transparent"></div>
              <div className="relative z-10 p-space-lg lg:p-space-xl flex flex-col gap-space-md text-on-primary">
                <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">apartment</span>
                  MEGA-PROJECT INFRASTRUCTURE PACKAGE 04 — FRANKFURT FINANCIAL DISTRICT TOWER COMPLEX
                </div>
                <h2 className="font-headline-xl text-headline-xl font-bold max-w-4xl tracking-tight leading-tight">
                  Frankfurt Skyline 62-Story High-Rise Complex – Multi-Discipline Civil Superintendence &amp; Zero-Harm HSE Governance
                </h2>
                <p className="font-body-lg text-body-lg text-surface-container-highest max-w-3xl">
                  Lead structural execution across slipform concrete cores, deep diaphragm wall foundation monitoring, dual tower crane blind air corridors, and institutional BaustellV SiGeKo coordination for 850+ cross-border tradespeople.
                </p>

                {/* Metric Pills */}
                <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                  <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-lowest/10 backdrop-blur-md">
                    <span className="material-symbols-outlined text-primary-fixed text-[20px]">verified</span>
                    <span className="font-label-lg text-label-lg font-semibold">100% Zero-Harm Safety Audit Record</span>
                  </div>
                  <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-lowest/10 backdrop-blur-md">
                    <span className="material-symbols-outlined text-primary-fixed text-[20px]">rule</span>
                    <span className="font-label-lg text-label-lg font-semibold">
                      DIN 4107 &amp; DGUV Vorschrift 1 / ISO 45001
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-lowest/10 backdrop-blur-md">
                    <span className="material-symbols-outlined text-primary-fixed text-[20px]">badge</span>
                    <span className="font-label-lg text-label-lg font-semibold">
                      Level 4 Certified General Superintendent (SiGeKo)
                    </span>
                  </div>
                </div>

                {/* Banner Bottom SOP strip */}
                <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md mt-space-sm bg-surface-container-lowest/5 rounded-xl px-space-md py-space-xs">
                  <div className="flex items-center gap-space-xs font-label-md text-label-md text-surface-container-highest">
                    <span className="material-symbols-outlined text-primary-fixed text-[16px]">menu_book</span>
                    <span>
                      Standard Operating Procedure: <strong className="text-on-primary">SOP-HSE-TOWER-DE-2025-V3</strong> (Published Jan 2025)
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <button
                      className="inline-flex items-center gap-space-xs text-surface-container-highest hover:text-on-primary font-label-sm text-label-sm px-space-sm py-1 rounded transition-colors cursor-pointer"
                      onClick={() => window.print()}
                    >
                      <span className="material-symbols-outlined text-[16px]">print</span>
                      Print SOP
                    </button>
                    <a
                      className="inline-flex items-center gap-space-xs bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 text-on-primary font-label-sm text-label-sm px-space-sm py-1 rounded transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                      Technical PDF Copy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Layout: 2/3 Main Feed + 1/3 Right Application Gateway */}
          <section className="w-full px-margin-mobile lg:px-margin py-space-md">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* Left Column: Detailed Technical Manual (8 Cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* SECTION 01: Complete Role Overview & Operational Safety Governance */}
                <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        01
                      </span>
                      <h3 className="font-headline-md text-headline-md text-secondary font-bold">
                        Complete Role Overview &amp; Operational Safety Governance
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm bg-primary/10 text-primary px-space-sm py-0.5 rounded-full font-semibold">
                      MANDATORY SOP
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    As the Senior Civil Construction Superintendent and statutory Site HSE Safety Director (SiGeKo), you hold supreme operational field command over the vertical civil erection, slipform casting cycles, and joint-venture safety integrity across the 62-story Frankfurt skyline development. You directly coordinate structural concrete works, deep diaphragm slurry containment, four self-climbing tower cranes, and over 850 trade specialists adhering strictly to German Baustellenverordnung (BaustellV) and European occupational safety directives.
                  </p>

                  {/* 4 Technical Pillars Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="flex flex-col gap-space-xs bg-surface p-space-md rounded-xl">
                      <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm font-semibold">
                        <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
                        <h4>Digital BIM 360 Field &amp; 4D Scheduling</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Live coordinate alignment using Leica total stations and daily synchronization with Autodesk Construction Cloud. Real-time clash detection with Solibri models before pouring each 450m³ jumpform elevator core quadrant.
                      </p>
                    </div>

                    <div className="flex flex-col gap-space-xs bg-surface p-space-md rounded-xl">
                      <div className="flex items-center gap-space-xs text-secondary font-headline-sm text-headline-sm font-semibold">
                        <span className="material-symbols-outlined text-[20px]">gavel</span>
                        <h4>BaustellV SiGeKo &amp; Statutory DGUV Protocols</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Author and enforce the comprehensive Safety and Health Plan (SiGe-Plan). Manage multi-contractor joint risk assessments (Gefährdungsbeurteilungen nach ArbSchG) and BG BAU safety audits without operational delays.
                      </p>
                    </div>

                    <div className="flex flex-col gap-space-xs bg-surface p-space-md rounded-xl">
                      <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm font-semibold">
                        <span className="material-symbols-outlined text-[20px]">foundation</span>
                        <h4>Deep Basement Diaphragm &amp; Dewatering</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Continuous geotechnical telemetry supervision of four subterranean parking levels. Inclinometer and piezometer monitoring on 28m perimeter diaphragm walls against Frankfurt clay water tables.
                      </p>
                    </div>

                    <div className="flex flex-col gap-space-xs bg-surface p-space-md rounded-xl">
                      <div className="flex items-center gap-space-xs text-secondary font-headline-sm text-headline-sm font-semibold">
                        <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                        <h4>Heavy Tandem Crane Rigging Corridors</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Oversight of dual-crane simultaneous pick zones, luffing jib clearance zones, hook-block anti-collision radar systems, and radio telemetry communication between master riggers and crane operators.
                      </p>
                    </div>
                  </div>

                  {/* Critical Safety Directive Callout Box */}
                  <div className="mt-space-sm p-space-md rounded-xl bg-error/5 flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-error font-headline-sm text-headline-sm font-bold">
                      <span className="material-symbols-outlined text-[22px]">warning</span>
                      <span>
                        CRITICAL SAFETY DIRECTIVE: DUAL-CRANE RADIUS ZERO-TOLERANCE &amp; CONFINED DEEP SHAFT RESCUE
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      Under DGUV Regulation 52 and Hochtief JV High-Risk Rules, crane slewing within 15 meters of neighboring passenger rail assets or active public thoroughfares requires secondary dead-stop mechanical interlocks. Entry into subterranean pump pits and core slipform shafts requires continuous O2/CO gas monitoring, intrinsically safe intrinsically grounded communications, and a dedicated high-angle technical rescue team on standby.
                    </p>
                  </div>
                </div>

                {/* SECTION 02: Detailed Daily Site Superintendent Directives & Operational Sequence */}
                <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        02
                      </span>
                      <h3 className="font-headline-md text-headline-md text-secondary font-bold">
                        Detailed Daily Site Superintendent Directives &amp; Operational Sequence
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-space-sm py-0.5 rounded-full font-semibold">
                      DAILY EXECUTION FLOW
                    </span>
                  </div>

                  {/* Chronological Step Cards */}
                  <div className="flex flex-col gap-space-sm">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-space-md bg-surface p-space-md rounded-xl">
                      <div className="flex md:flex-col items-center md:items-start justify-between min-w-[140px] text-secondary">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Step 01
                        </span>
                        <span className="font-headline-sm text-headline-sm font-bold">06:00 – 07:15</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">CET Central Time</span>
                      </div>
                      <div className="flex flex-col gap-space-xs flex-1">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Pre-Shift Master Toolbox Safety Briefing &amp; High-Risk Permit Sign-Off
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Convene with trade sub-contractor foremen, lead structural engineers, and crane crews at the Site Logistics Command Trailer. Review German DWD wind shear forecasts for tower cranes (limit: 14 m/s for jumpform lifts), validate daily hot-work permits, and authorize confined-space entry permits for basement waterproofing.
                        </p>
                        <div className="flex flex-wrap gap-space-xs pt-1">
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Anemometer Log
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Hot Work Level III
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            TBT Sign-In Logs
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-space-md bg-surface p-space-md rounded-xl">
                      <div className="flex md:flex-col items-center md:items-start justify-between min-w-[140px] text-secondary">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Step 02
                        </span>
                        <span className="font-headline-sm text-headline-sm font-bold">07:15 – 11:30</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Active Operations</span>
                      </div>
                      <div className="flex flex-col gap-space-xs flex-1">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Active Core Slipform &amp; High-Strength Concrete QA/QC Walkthrough
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Ascend to leading edge deck (Level 42+). Inspect hydraulic self-climbing formwork jacks, rebar tie spacing according to DIN 1045-1 structural blueprints, and concrete cover block positioning. Supervise slump flow testing and fresh concrete temperature control (C50/60 concrete mix with silica fume additives) delivered via boom pumps.
                        </p>
                        <div className="flex flex-wrap gap-space-xs pt-1">
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            DIN 1045 Structural Proof
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Slump Test EN 12350-2
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Hydraulic Climb Check
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-space-md bg-surface p-space-md rounded-xl">
                      <div className="flex md:flex-col items-center md:items-start justify-between min-w-[140px] text-secondary">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Step 03
                        </span>
                        <span className="font-headline-sm text-headline-sm font-bold">11:30 – 13:45</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Cross-Discipline</span>
                      </div>
                      <div className="flex flex-col gap-space-xs flex-1">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Sub-Contractor Coordination Council &amp; 4D BIM Clash Verification
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Chair the daily site coordination council with facade contractors (unitized curtain wall installation), MEP shaft installers, and post-tensioning teams. Resolve vertical delivery hoist schedules to maintain continuous throughput without trade overlap in blind shaft spaces.
                        </p>
                        <div className="flex flex-wrap gap-space-xs pt-1">
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Navisworks 4D Field
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Material Hoist Slotting
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Facade Anchor Points
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row gap-space-md bg-surface p-space-md rounded-xl">
                      <div className="flex md:flex-col items-center md:items-start justify-between min-w-[140px] text-secondary">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Step 04
                        </span>
                        <span className="font-headline-sm text-headline-sm font-bold">13:45 – 15:30</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Subterranean &amp; Lab</span>
                      </div>
                      <div className="flex flex-col gap-space-xs flex-1">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Deep Foundation Dewatering &amp; Geotechnical Telemetry Audit
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Inspect perimeter diaphragm retaining walls and ground anchor tension loads. Review laser sensor telemetry against micro-settlement thresholds (&lt;1.5mm) on neighboring public transit tunnels. Sign off concrete 28-day cylinder compressive test reports.
                        </p>
                        <div className="flex flex-wrap gap-space-xs pt-1">
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Laser Inclinometers
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Hydrostatic Ground Head
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Tension Load Cells
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col md:flex-row gap-space-md bg-surface p-space-md rounded-xl">
                      <div className="flex md:flex-col items-center md:items-start justify-between min-w-[140px] text-secondary">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Step 05
                        </span>
                        <span className="font-headline-sm text-headline-sm font-bold">15:30 – 17:00</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Shift Close &amp; Handover</span>
                      </div>
                      <div className="flex flex-col gap-space-xs flex-1">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          End-of-Day Lockout/Tagout (LOTO) &amp; Storm Rigging Inspection
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Supervise release of tower crane slewing brakes into free-weathervaning position. Perform perimeter catch-fan netting inspections and confirm all temporary electrical switchboards are locked out (LOTO). Submit digital shift logbook to consortium executive directors.
                        </p>
                        <div className="flex flex-wrap gap-space-xs pt-1">
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Weathervane Unlock
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            DIN EN 1263-1 Safety Nets
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary">
                            Digital Baubuch Signing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 03: Vocational Qualifications & Statutory Licensing Equivalence */}
                <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        03
                      </span>
                      <h3 className="font-headline-md text-headline-md text-secondary font-bold">
                        Vocational Qualifications &amp; Statutory Licensing Equivalence
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm bg-secondary/10 text-secondary px-space-sm py-0.5 rounded-full font-semibold">
                      CROSS-BORDER VALIDATION
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Candidates may hold equivalent credentials from recognized European or international construction jurisdictions. Our internal legal team provides complimentary credential notarization under EU Professional Qualifications Directive 2005/36/EC:
                  </p>

                  {/* 4 Credential Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[20px]">flag</span>
                        <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                          Germany &amp; DACH
                        </span>
                      </div>
                      <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                        <li>
                          <strong className="text-on-surface">SiGeKo nach BaustellV</strong> (RAB 30 Anlage B/C certification)
                        </li>
                        <li>Diplom-Ingenieur / Master of Science Civil Engineering</li>
                        <li>Zertifizierter Leitender Bauleiter (Baukammer Hessen)</li>
                        <li>BG BAU Sachkunde im Hochbau &amp; Gerüstbau</li>
                      </ul>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">flag</span>
                        <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                          UK &amp; Ireland
                        </span>
                      </div>
                      <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                        <li>
                          <strong className="text-on-surface">NEBOSH National Diploma</strong> in Construction Health &amp; Safety
                        </li>
                        <li>NVQ Level 7 Diploma in Construction Senior Management</li>
                        <li>CSCS Black Card (Senior Construction Site Manager)</li>
                        <li>SMSTS (Site Management Safety Training Scheme)</li>
                      </ul>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[20px]">flag</span>
                        <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                          USA &amp; Canada
                        </span>
                      </div>
                      <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                        <li>
                          <strong className="text-on-surface">CSP (Certified Safety Professional)</strong> via BCSP
                        </li>
                        <li>OSHA 500 / OSHA 510 Authorized Construction Trainer</li>
                        <li>Gold Seal Certified (GSC) Superintendent (CCA)</li>
                        <li>PE (Professional Engineer) or Construction Management BS</li>
                      </ul>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">flag</span>
                        <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                          European &amp; Maritime
                        </span>
                      </div>
                      <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                        <li>
                          <strong className="text-on-surface">IOSH Chartered Member (CMIOSH)</strong> or Eur Ing status
                        </li>
                        <li>ISO 45001 / ISO 9001 Lead Auditor for Civil Infrastructure</li>
                        <li>Coordinateur SPS Niveau 1 (France - Conception &amp; Réalisation)</li>
                        <li>VCA-VOL Safety for Operational Supervisors (BeNeLux)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rigging & Safety Literacy Checklist */}
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
                    <h4 className="font-label-lg text-label-lg text-secondary font-bold uppercase tracking-wider">
                      Mandatory Technical Competency Baseline
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xs font-body-sm text-body-sm text-on-surface">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        <span>Minimum 8+ years leading commercial high-rise or civil mega-projects</span>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        <span>Documented incident-free leadership across &gt;500,000 project man-hours</span>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        <span>Advanced competence in German DIN 1045, DIN 4107, &amp; Eurocode 2</span>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        <span>Operational proficiency with Autodesk BIM 360 &amp; Procore Cloud</span>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        <span>German language minimum B2 level (Professional Technical German)</span>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        <span>English language minimum C1 level (Executive Joint Venture Reporting)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 04: Compensation, Allowances & German Construction Tariff */}
                <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        04
                      </span>
                      <h3 className="font-headline-md text-headline-md text-secondary font-bold">
                        Compensation, Allowances &amp; German Construction Tariff
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm bg-primary/10 text-primary px-space-sm py-0.5 rounded-full font-semibold">
                      VERIFIED BENEFITS
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md p-space-md rounded-xl bg-primary text-on-primary">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
                        Statutory Tarifvertrag Salary Range
                      </span>
                      <span className="font-headline-lg text-headline-lg font-bold">€6,160 – €8,160 / month</span>
                      <span className="font-body-sm text-body-sm text-on-primary-container">
                        €74,000 – €98,000 base annual + guaranteed 13th month bonus per IG BAU
                      </span>
                    </div>
                    <div className="bg-on-primary/15 px-space-md py-space-sm rounded-lg backdrop-blur-md text-right">
                      <span className="font-label-sm text-label-sm block text-primary-fixed">Site Multiplier</span>
                      <span className="font-headline-sm text-headline-sm font-bold">+18% High-Rise Risk Bonus</span>
                      <span className="font-label-sm text-label-sm block text-on-primary-container">
                        Up to €17,640 additional yearly
                      </span>
                    </div>
                  </div>

                  {/* Perk Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[24px]">home_work</span>
                      <h4 className="font-headline-sm text-headline-sm text-secondary font-semibold">
                        Executive Relocation &amp; Housing
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Furnished corporate executive apartment in Frankfurt Westend/Europaviertel for first 12 months, or €4,200 non-taxable relocation allowance and full family visa concierge.
                      </p>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[24px]">electric_car</span>
                      <h4 className="font-headline-sm text-headline-sm text-secondary font-semibold">
                        Company EV &amp; Mobility Pass
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Premium zero-emission company vehicle (Tesla Model Y or Audi Q4 e-tron) with private charging card or unlimited first-class Deutsche Bahn BahnCard 100 for all EU travel.
                      </p>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[24px]">beach_access</span>
                      <h4 className="font-headline-sm text-headline-sm text-secondary font-semibold">
                        30 Days Vacation &amp; SOKA-BAU Pension
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full 30 paid working days annual leave (excluding public holidays) backed by statutory German construction fund (SOKA-BAU) with portable pension reserves across the European Union.
                      </p>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[24px]">tablet_mac</span>
                      <h4 className="font-headline-sm text-headline-sm text-secondary font-semibold">
                        Field Kit &amp; Executive Masterclasses
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Industrial ruggedized Panasonic Toughbook / iPad Pro kit with 5G satellite uplink. 100% funded TÜV Rheinland &amp; BG BAU Senior Executive Safety Leadership certifications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SECTION 05: Transparent 3-Step Selection & Safety Competence Evaluation */}
                <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        05
                      </span>
                      <h3 className="font-headline-md text-headline-md text-secondary font-bold">
                        Transparent 3-Step Selection &amp; Safety Competence Evaluation
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-space-sm py-0.5 rounded-full font-semibold">
                      DIRECT PATHWAY
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs relative">
                      <span className="font-headline-md text-headline-md text-primary font-bold">01</span>
                      <h4 className="font-headline-sm text-headline-sm text-secondary font-semibold">
                        Fast-Track Verification
                      </h4>
                      <span className="font-label-sm text-label-sm text-primary font-bold">Within 24–48 Hours</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Jobzeta and Hochtief credential auditors verify your civil diploma, SiGeKo/NEBOSH credentials, and project safety logbooks.
                      </p>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs relative">
                      <span className="font-headline-md text-headline-md text-secondary font-bold">02</span>
                      <h4 className="font-headline-sm text-headline-sm text-secondary font-semibold">
                        Technical Case Study
                      </h4>
                      <span className="font-label-sm text-label-sm text-secondary font-bold">
                        45-Minute Remote Session
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Interactive interview with the JV Project Director and Chief Structural Engineer analyzing live wind shear telemetry and crane radius conflict scenarios.
                      </p>
                    </div>

                    <div className="p-space-md rounded-xl bg-surface flex flex-col gap-space-xs relative">
                      <span className="font-headline-md text-headline-md text-primary font-bold">03</span>
                      <h4 className="font-headline-sm text-headline-sm text-secondary font-semibold">
                        Frankfurt Site Walk
                      </h4>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Final Stage (Expenses Paid)
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        VIP site walk at the Frankfurt Tower project, core slipform observation, and simulated high-angle emergency incident response drill with local fire services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Application Gateway & Consortium Profile (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-lg">
                <div className="sticky top-24 flex flex-col gap-space-lg">
                  {/* Application Gateway Box */}
                  <div
                    className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-md"
                    id="fast-track-apply"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                        Fast-Track Direct Gateway
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                        Apply for Senior Civil Superintendent &amp; Lead HSE Director
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Direct submission into the Hochtief &amp; Bouygues Consortium executive portal. Priority review within 48 business hours.
                      </p>
                    </div>

                    {/* Application Form */}
                    <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Full Legal Name
                        </label>
                        <input
                          className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          placeholder="Dipl.-Ing. Markus Schmidt"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Work Email Address
                        </label>
                        <input
                          className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          placeholder="m.schmidt@civil-infrastructure.eu"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Phone / WhatsApp (with Country Code)
                        </label>
                        <input
                          className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          placeholder="+49 171 000 0000"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                        <div className="flex flex-col gap-1">
                          <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Experience Tier
                          </label>
                          <select
                            className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          >
                            <option>8 – 12 Years (Senior)</option>
                            <option>12 – 18 Years (Lead)</option>
                            <option>18+ Years (Executive Director)</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Primary Credential
                          </label>
                          <select
                            className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                            value={formData.credential}
                            onChange={(e) => setFormData({ ...formData, credential: e.target.value })}
                          >
                            <option>SiGeKo (BaustellV)</option>
                            <option>NEBOSH Diploma</option>
                            <option>CSP / OSHA 500</option>
                            <option>Chartered IOSH</option>
                            <option>Dipl.-Ing. Bauleiter</option>
                          </select>
                        </div>
                      </div>

                      {/* Upload CV / Portfolio */}
                      <div className="flex flex-col gap-1 pt-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Curriculum Vitae &amp; Project Track Record
                        </label>
                        <div className="p-space-md rounded-lg bg-surface text-center flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container transition-colors">
                          <span className="material-symbols-outlined text-primary text-[32px]">upload_file</span>
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Upload Technical CV &amp; Safety Certificates
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                            PDF, DOCX, ZIP up to 25MB
                          </span>
                        </div>
                      </div>

                      {/* Visa / Citizenship Statement */}
                      <div className="flex items-start gap-space-xs pt-1">
                        <input
                          className="mt-1 h-4 w-4 text-primary rounded focus:ring-primary"
                          id="work-auth"
                          required
                          type="checkbox"
                          checked={formData.visaRequired}
                          onChange={(e) => setFormData({ ...formData, visaRequired: e.target.checked })}
                        />
                        <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="work-auth">
                          I hold a valid EU/EEA citizenship OR require German skilled worker visa sponsorship (Provided free by Jobzeta Mobility Team).
                        </label>
                      </div>

                      <button
                        className="w-full mt-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-3 rounded-lg shadow-sm flex items-center justify-center gap-space-xs transition-colors cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[20px]">send</span>
                        Submit Certified Superintendent Application
                      </button>
                    </form>

                    <div className="flex items-center justify-center gap-space-xs pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-primary text-[16px]">lock</span>
                      <span>GDPR Compliant • Data Encrypted via ISO 27001 Protocol</span>
                    </div>
                  </div>

                  {/* Executive Endorsement Quote */}
                  <div className="p-space-md rounded-2xl bg-secondary text-on-secondary shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-on-secondary/20 flex-shrink-0">
                        <img
                          alt="Portrait of senior executive construction director Markus von Berg in white safety hard hat and navy business suit smiling confidently on Frankfurt skyline skyscraper site."
                          className="w-full h-full object-cover"
                          src="/markus-von-berg.jpg"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg font-bold">Markus von Berg</span>
                        <span className="font-label-sm text-label-sm text-secondary-fixed">
                          Executive Project Director, Frankfurt Financial District Tower
                        </span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-secondary-fixed-dim italic">
                      &quot;On a 62-story high-rise core casting cycle, uncompromising safety discipline is the only true accelerator of speed. We are seeking a superintendent whose presence commands respect on the jumpform deck and whose technical foresight prevents incidents before they exist.&quot;
                    </p>
                  </div>

                  {/* Site Technical Parameters Box */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                    <h4 className="font-label-lg text-label-lg text-secondary font-bold uppercase tracking-wider">
                      Site Technical Parameters
                    </h4>
                    <div className="flex items-center justify-between py-1 text-on-surface font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Building Height</span>
                      <span className="font-semibold text-secondary">228 Meters (62 Stories)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 text-on-surface font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Daily Trades Workforce</span>
                      <span className="font-semibold text-primary">850+ Personnel</span>
                    </div>
                    <div className="flex items-center justify-between py-1 text-on-surface font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Concrete Core Volume</span>
                      <span className="font-semibold text-secondary">94,000 m³ C50/60</span>
                    </div>
                    <div className="flex items-center justify-between py-1 text-on-surface font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Tower Crane Fleet</span>
                      <span className="font-semibold text-secondary">4x Liebherr 710 HC-L</span>
                    </div>
                    <div className="flex items-center justify-between py-1 text-on-surface font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Safety Record Standard</span>
                      <span className="font-semibold text-primary">Zero Lost-Time Incidents</span>
                    </div>

                    {/* Location Snapshot Map Trigger */}
                    <div
                      className="w-full h-36 bg-cover bg-center rounded-xl relative overflow-hidden mt-space-xs"
                      style={{ backgroundImage: "url('/frankfurt-sector-map.jpg')" }}
                    >
                      <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[1px] flex items-center justify-center">
                        <span className="inline-flex items-center gap-1 bg-surface-container-lowest/90 px-space-sm py-1 rounded-full text-secondary font-label-sm text-label-sm font-semibold shadow-sm">
                          <span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span>
                          Frankfurt Mainzer Landstraße Sector
                        </span>
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
                    Superintendent Application Transmitted
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Your credentials have been securely routed to the Hochtief &amp; Bouygues JV Executive Safety Committee under Reference #FRK-9044-HSE.
                  </p>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-xl text-left space-y-2">
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Priority Review Window:</span>
                    <strong className="text-primary">Under 48 Hours</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Review Lead:</span>
                    <strong>Markus von Berg (Executive Project Director)</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Status:</span>
                    <span className="inline-flex items-center gap-1 text-primary font-bold">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      Queued for Executive Screening
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
