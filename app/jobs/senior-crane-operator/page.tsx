"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorCraneOperatorJobPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "10+ Years",
    license: "DGUV V 52 (DE)",
    sponsorship: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
      {/* 1. REUSABLE GLOBAL HEADER */}
      <Header />

      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Context & Status Bar */}
          <section className="w-full bg-surface-container-lowest shadow-sm py-space-md px-margin border-b border-surface-container-high">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-sm">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant overflow-x-auto whitespace-nowrap">
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
                <span className="material-symbols-outlined text-outline-variant text-[14px]">
                  chevron_right
                </span>
                <Link className="hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="material-symbols-outlined text-outline-variant text-[14px]">
                  chevron_right
                </span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/trades-and-construction"
                >
                  Trades &amp; Construction
                </Link>
                <span className="material-symbols-outlined text-outline-variant text-[14px]">
                  chevron_right
                </span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/trades-and-construction/heavy-plant-and-cranes"
                >
                  Heavy Plant &amp; Cranes
                </Link>
                <span className="material-symbols-outlined text-outline-variant text-[14px]">
                  chevron_right
                </span>
                <span className="text-on-surface font-bold">
                  Full Technical Instructions &amp; Operational Handbook
                </span>
              </nav>

              {/* Status Chips & Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm tracking-wider uppercase flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    ROLE ID: JOB-HPC-MUC-9102 • ACTIVE HEAVY LIFT GATEWAY
                  </span>
                  <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[13px] text-secondary">
                      verified
                    </span>
                    BAM &amp; Hochtief Infrastructure JV (Verified Infrastructure Partner)
                  </span>
                  <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                    IG BAU Collective Agreement / Tarifvertrag
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <Link
                    className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:text-on-surface transition-colors"
                    href="/categories/trades-and-construction/heavy-plant-and-cranes"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    <span>Back to Heavy Plant Overview</span>
                  </Link>
                </div>
              </div>

              {/* Main Headline line */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-xs">
                <div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
                    Senior Heavy Lift Tower Crane &amp; High-Capacity Luffing Jib Operator
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 flex flex-wrap items-center gap-x-space-md gap-y-1">
                    <span className="flex items-center gap-1 text-on-surface font-semibold">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        location_on
                      </span>
                      Munich, Germany (On-Site • High-Speed Rail &amp; Deep Underground Tunnel Terminal)
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        schedule
                      </span>
                      Full-Time (38.5 hrs/week • German Construction Tariff)
                    </span>
                    <span>•</span>
                    <span className="text-primary font-bold">
                      €72,000 - €94,000 / year (+ Site Lodge Allowance, Shift Differentials &amp; High-Altitude Bonus)
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <button
                    className="px-space-lg py-space-sm bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-all shadow-md flex items-center gap-2 font-semibold cursor-pointer"
                    onClick={() => {
                      document.getElementById("apply-box")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                    <span>Fast-Track Certified Application</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Hero Site Infrastructure & Plant Operations Banner */}
          <section className="w-full relative bg-surface-container-highest overflow-hidden">
            <div
              className="relative w-full h-[380px] lg:h-[440px] bg-cover bg-center flex flex-col justify-end"
              data-alt="Expansive urban construction zone in Munich with massive yellow tower cranes, lattice boom crawler cranes, deep excavation pit."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLMPh5wxWiJYfwWC8lPaiOWVpNxKcqGcB9c_tcDOWmZOsgMEq4z0imEdsLLPW7uEooWv_P9-O3xRg4B-UzV_qZTEMNChTu8kzhGVOENPq5mfdrD5jB8SDaAvDkwClsKqSexAavabdFmLQx77ALorYzfWGNSTYMNLrzzz8zboaVtzZ1eszz7I-0iZWHVx2GgGzBOafyyWinmXxF2g38aPZ7aXpXVVJXZW2Gx2whaqRAFZisZfpKx-OR6Q')",
              }}
            >
              {/* Dark industrial navy gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/80 to-transparent"></div>
              <div className="relative max-w-7xl mx-auto w-full px-margin pb-space-lg text-on-primary z-10">
                <div className="inline-flex items-center gap-2 px-space-sm py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-sm shadow-sm font-bold">
                  <span className="material-symbols-outlined text-[14px]">
                    precision_manufacturing
                  </span>
                  MEGA-PROJECT INFRASTRUCTURE PACKAGE 04 — MUNICH TRANSIT CORRIDOR • SHAFT 6 DEEP EXCAVATION
                </div>
                <h2 className="font-headline-lg text-headline-lg text-white max-w-4xl tracking-tight leading-snug font-bold">
                  Munich Central Transport Hub Expansion – Heavy Rigging &amp; Deep Shaft Tandem Lift Complex
                </h2>
                <p className="font-body-md text-body-md text-surface-container-highest max-w-3xl mt-space-xs mb-space-md">
                  Core Plant &amp; Equipment: Liebherr 710 HC-L 32/64 Litronic Luffing Jib Cranes,
                  Bauer BG 36 Piling Rigs, SMIE Anti-Collision Zoning System, Rayco-Wylie Rated
                  Capacity Indicators (RCI/SLI).
                </p>
                {/* Telemetry Badges & SOP Strip */}
                <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <div className="flex items-center gap-2 bg-on-surface/60 backdrop-blur-md px-space-md py-1.5 rounded-lg text-surface-bright font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        verified
                      </span>
                      <span>100% Zero-Incident Lifting Record</span>
                    </div>
                    <div className="flex items-center gap-2 bg-on-surface/60 backdrop-blur-md px-space-md py-1.5 rounded-lg text-surface-bright font-label-md text-label-md">
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                        gavel
                      </span>
                      <span>DGUV V 52 &amp; EN 13000 Standard</span>
                    </div>
                    <div className="flex items-center gap-2 bg-on-surface/60 backdrop-blur-md px-space-md py-1.5 rounded-lg text-surface-bright font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        group_work
                      </span>
                      <span>Certified Blind Tandem Protocol</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs bg-surface-container-lowest/15 backdrop-blur-lg px-space-md py-1 rounded-lg">
                    <span className="font-label-sm text-label-sm text-surface-container-high tracking-wider">
                      SOP-CRANE-LIFT-DE-2025-V2
                    </span>
                    <button
                      className="text-surface-bright hover:text-primary-fixed transition-colors text-[18px] p-1 flex items-center cursor-pointer"
                      onClick={() => window.print()}
                      title="Print Standard Operating Procedure"
                    >
                      <span className="material-symbols-outlined text-[16px]">print</span>
                    </button>
                    <button
                      className="text-surface-bright hover:text-primary-fixed transition-colors text-[18px] p-1 flex items-center cursor-pointer"
                      onClick={() =>
                        alert(
                          "Downloading Certified SOP Technical Rigging PDF specification: SOP-CRANE-LIFT-DE-2025-V2"
                        )
                      }
                      title="Download Official PDF Specification"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Body Grid: 8-Col Specification Stream + 4-Col Application & Telemetry Sidebar */}
          <div className="max-w-7xl mx-auto w-full px-margin py-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* LEFT 8-COLUMN TECHNICAL CONTENT */}
            <div className="lg:col-span-8 flex flex-col gap-space-xl">
              {/* SECTION 1: ROLE OVERVIEW & OPERATIONAL LIFTING DYNAMICS */}
              <section className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold font-headline-sm text-headline-sm">
                      01
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
                      Complete Role Overview &amp; Operational Lifting Dynamics
                    </h3>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                    Mandatory SOP
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  As our Senior Heavy Lift Crane Operator, you will assume command of high-capacity
                  luffing jib equipment deployed at Munich&apos;s core rail modernization terminus.
                  You will direct blind lowering protocols, manage tandem rig rotations with
                  sub-millimeter landing tolerances, and execute continuous telemetry assessments
                  under European DIN/EN safety mandates.
                </p>

                {/* 4 Technical Architecture Cards (Bento Style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                  {/* Card 1 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-xs hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-[24px]">architecture</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Luffing Jib Dynamics &amp; Load Radius Telemetry
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Precision operation of Liebherr 710 HC-L, steep boom angles (up to 85°),
                      high-velocity hoist drums, and variable frequency drive control across cramped
                      central urban air corridors.
                    </p>
                    <div className="mt-auto pt-2 flex items-center gap-2 text-outline font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[15px] text-primary">speed</span>
                      <span>Max Working Radius: 65.0m • Tip Load: 12.0t</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-xs hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-[24px]">sensors</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Blind Lift Protocols &amp; Radio Telemetry
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Two-way encrypted radio telemetry, certified banksman/slinger hand signals (BS
                      7121 / DGUV 52), hook-mounted CCTV video feeds, and synchronized multi-crane
                      airspace clearance.
                    </p>
                    <div className="mt-auto pt-2 flex items-center gap-2 text-outline font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        videocam
                      </span>
                      <span>Continuous Dual-Screen Hook Telemetry</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-xs hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-[24px]">terrain</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Geotechnical &amp; Outrigger Ground Pressure
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Monitoring mast anchor loads, crawler track pressure, outrigger steel matting,
                      wind shear limits (&gt;15 m/s auto-stow protocol), and seasonal freeze/thaw
                      foundation checks.
                    </p>
                    <div className="mt-auto pt-2 flex items-center gap-2 text-outline font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[15px] text-primary">air</span>
                      <span>Auto-Stow Threshold: 15.0 m/s Anemometer</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-xs hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-[24px]">graph_4</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Heavy Civil Underground Context
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Lowering 35-tonne precast concrete tunnel segments and slurry shield TBM
                      components directly into 42-meter deep underground ventilation and rail junction
                      shafts.
                    </p>
                    <div className="mt-auto pt-2 flex items-center gap-2 text-outline font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        south
                      </span>
                      <span>Shaft Depth: -42.0m Vertical Descent</span>
                    </div>
                  </div>
                </div>

                {/* Critical Safety Directive Box */}
                <div className="p-space-md rounded-xl bg-surface-container-high border border-surface-container-highest flex items-start gap-space-md mt-space-xs">
                  <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5">
                    security_update_warning
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wide font-bold">
                      Critical Safety Directive: Dual-Overload &amp; Proximity Zero-Tolerance
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Automated Safe Load Indicator (SLI) lockouts and SMIE anti-collision overrides
                      are strictly logged in real time. Bypassing safety limiters without written
                      Chief Lift Director authorization constitutes immediate license suspension under
                      German Berufsgenossenschaft (BG BAU) regulations.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 2: DETAILED DAILY LIFTING RESPONSIBILITIES & DIRECTIVES */}
              <section className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold font-headline-sm text-headline-sm">
                      02
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
                      Detailed Daily Lifting Responsibilities &amp; Operational Directives
                    </h3>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                    Execution Flow
                  </span>
                </div>

                {/* 5 Numbered Technical Cards */}
                <div className="flex flex-col gap-space-sm">
                  {/* Card 1 */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-8 h-8 rounded-full bg-surface-container text-primary flex items-center justify-center font-bold text-label-lg shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Pre-Shift Visual Inspection, Cable Reeving &amp; Limit Switch Testing
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                          Daily visual audit of hoist wire rope integrity, bridle slings, hook block
                          latching, electronic anemometer, emergency braking hydraulics, and primary
                          limit cut-offs under DGUV Vorschrift 52 / EN 13000.
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 px-space-sm py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full font-semibold">
                      T-07:00 Daily Gate
                    </span>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-8 h-8 rounded-full bg-surface-container text-primary flex items-center justify-center font-bold text-label-lg shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Tandem Heavy Lift Coordination &amp; Rigging Sling Calculations
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                          Synchronizing simultaneous crane hoisting for 45t+ pre-assembled steel truss
                          sections and TBM cutterhead shields in full compliance with DIN EN 12077-2 /
                          ISO 12480-1 rigging angle parameters.
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 px-space-sm py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full font-semibold">
                      Engineering Sign-off
                    </span>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-8 h-8 rounded-full bg-surface-container text-primary flex items-center justify-center font-bold text-label-lg shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          High-Altitude Cab Operations &amp; Luffing Angle Modulation
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                          Operating ergonomically heated, air-suspended Liebherr Litronic
                          high-visibility cabs at heights ranging from 55m to 85m. Fine-tuning stepless
                          joysticks with millimetric micro-speed control during critical concrete
                          placements.
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 px-space-sm py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full font-semibold">
                      Litronic VFD Precision
                    </span>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-8 h-8 rounded-full bg-surface-container text-primary flex items-center justify-center font-bold text-label-lg shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Anti-Collision Network Calibration &amp; Airspace Zoning
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                          Interfacing with the active SMIE 3D Anti-Collision telemetry network,
                          verifying 3D no-fly virtual boundaries over adjacent active Deutsche Bahn
                          rail tracks and overhead catenary electrical grids.
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 px-space-sm py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full font-semibold">
                      Active Mesh 2.4GHz
                    </span>
                  </div>

                  {/* Card 5 */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-8 h-8 rounded-full bg-surface-container text-primary flex items-center justify-center font-bold text-label-lg shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Post-Shift Mast Torque Checks, Storm Parking &amp; Weathervane Mode
                          Activation
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                          Full engagement of free-slewing windvane mode to allow 360° unrestricted
                          boom rotation according to Eurocode 3 / DIN 15018 storm security protocols,
                          followed by electronic digital logbook sign-off.
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 px-space-sm py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full font-semibold">
                      End-of-Shift Stowing
                    </span>
                  </div>
                </div>
              </section>

              {/* SECTION 3: TECHNICAL QUALIFICATIONS & CRANE LICENSING EQUIVALENCE */}
              <section className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold font-headline-sm text-headline-sm">
                      03
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
                      Technical Qualifications &amp; Crane Licensing Equivalence
                    </h3>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                    Cross-Border Validation
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We welcome high-capacity crane operators globally. Our engineering compliance
                  office conducts rapid equivalency translation across standard multinational crane
                  credentials:
                </p>

                {/* 4 Reciprocity Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-highest flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-lg text-label-lg text-on-surface font-bold">
                          Germany &amp; DACH Standard
                        </span>
                        <span className="px-space-xs py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                          Primary
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        TÜV / DGUV Vorschrift 52 Kranführerschein (Turmdrehkrane Oberdreher mit
                        Katfahr- und Nadelausleger / Luffing Jibs). Valid ArbMed G25 (Fahr- und
                        Steuertätigkeiten) &amp; G41 (Arbeiten mit Absturzgefahr) medical
                        certifications.
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-surface-container flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      <span>Instant Direct Authorization</span>
                    </div>
                  </div>

                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-highest flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-lg text-label-lg text-on-surface font-bold">
                          United Kingdom &amp; Ireland
                        </span>
                        <span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-secondary font-label-sm text-label-sm font-semibold">
                          Reciprocal
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        CPCS Blue Competent Operator Card A60 (Tower Crane - All types including
                        Luffing Jib) or CSCS equivalent with minimum 5+ verified years in commercial
                        heavy civil or infrastructure projects. A61 Appointed Person card highly
                        valued.
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-surface-container flex items-center gap-1 text-secondary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">sync</span>
                      <span>48h BG BAU Fast-Track Translation</span>
                    </div>
                  </div>

                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-highest flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-lg text-label-lg text-on-surface font-bold">
                          United States &amp; Canada
                        </span>
                        <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                          Reciprocal
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        NCCCO Tower Crane Operator (TWR) certification or Red Seal Mobile / Tower
                        Crane Operator with verified OSHA 1926 Subpart CC record and documented
                        high-capacity jib hours (&gt;500 hrs).
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-surface-container flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">sync_alt</span>
                      <span>Practical Simulator Equivalence Test</span>
                    </div>
                  </div>

                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-highest flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-lg text-label-lg text-on-surface font-bold">
                          European Maritime &amp; Offshore
                        </span>
                        <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                          Reciprocal
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        LEEA Lifting Engineer certification or OPITO Stage 3 Heavy Pedestal / Floating
                        Crane qualification with transitional civil conversion support sponsored by
                        the JV.
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-surface-container flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">school</span>
                      <span>On-Site Grounding Modules Included</span>
                    </div>
                  </div>
                </div>

                {/* Rigging & Schematics Literacy Checklist */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs border border-surface-container-high">
                  <span className="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">rule</span>
                    <span>Rigging &amp; Schematics Literacy Checklist (Evaluated During Practical Assessment)</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant font-body-sm text-body-sm mt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Load Chart de-rating for gust factor calculations
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Multi-leg wire rope &amp; synthetic web sling angle reduction
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Center of gravity offset identification on asymmetric cargo
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Ground bearing outrigger matting load distribution metrics
                    </span>
                  </div>
                </div>
              </section>

              {/* SECTION 4: COMPENSATION, ALLOWANCES & GERMAN CONSTRUCTION TARIFF (IG BAU) */}
              <section className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold font-headline-sm text-headline-sm">
                      04
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
                      Compensation, Allowances &amp; German Construction Tariff (IG BAU)
                    </h3>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                    Verified Benefits
                  </span>
                </div>

                {/* Salary Banner */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                      Full Collective Tariff Bracket (Lohngruppe 6 Spezialbaufacharbeiter)
                    </span>
                    <div className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
                      €6,000 – €7,830{" "}
                      <span className="text-on-surface-variant text-body-md font-normal">
                        / month
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      €72,000 - €94,000 base annual wage + 22% Night/Weekend Shift Multiplier + Per
                      Diem Site Lodge Allowance (€48/working day tax-free).
                    </p>
                  </div>
                  <div className="shrink-0 flex flex-col items-start md:items-end gap-1">
                    <span className="px-space-sm py-1 bg-primary/10 text-primary font-label-md text-label-md rounded-full font-bold">
                      38.5 Hours Standard Week
                    </span>
                    <span className="text-outline font-label-sm text-label-sm">
                      Overtime clocked at 125% - 150%
                    </span>
                  </div>
                </div>

                {/* 4 Key Packages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex items-start gap-space-sm">
                    <div className="p-2 rounded-lg bg-surface-container-low text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">apartment</span>
                    </div>
                    <div>
                      <h5 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        €3,800 Relocation &amp; Housing
                      </h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        Furnished, private partner-accredited corporate apartments in Munich metro
                        area during initial onboarding or monthly lodge stipend.
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex items-start gap-space-sm">
                    <div className="p-2 rounded-lg bg-surface-container-low text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">security</span>
                    </div>
                    <div>
                      <h5 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        €1,500 Heavy Weather Gear
                      </h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        Bespoke high-vis arc-flash rated thermal suits, heated cab outerwear, custom
                        fitted fall-arrest harness, and polarized optical filters.
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex items-start gap-space-sm">
                    <div className="p-2 rounded-lg bg-surface-container-low text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">flight_takeoff</span>
                    </div>
                    <div>
                      <h5 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        30 Days Paid Vacation &amp; SOKA-BAU
                      </h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        Fully paid leave funded under statutory German construction schemes plus
                        comprehensive employer-funded supplementary pension accumulation.
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex items-start gap-space-sm">
                    <div className="p-2 rounded-lg bg-surface-container-low text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">model_training</span>
                    </div>
                    <div>
                      <h5 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Liebherr Masterclass Upgrades
                      </h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        Annual paid training trips to Liebherr Ehingen and Biberach technical centers
                        for heavy luffing simulator recertification and tower climbing safety.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 5: TRANSPARENT 3-STEP SELECTION & SIMULATOR EVALUATION */}
              <section className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold font-headline-sm text-headline-sm">
                      05
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
                      Transparent 3-Step Selection &amp; Simulator Evaluation
                    </h3>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                    Direct Pathway
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  {/* Step 1 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-xs relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-xl text-headline-xl text-outline-variant font-bold">
                        01
                      </span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        24-48h
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Fast-Track License &amp; Logbook Verification
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Submit your active crane license, medical G41 clearance, and verified hoist
                      logbook for instant review by our Munich compliance officers.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-xs relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-xl text-headline-xl text-outline-variant font-bold">
                        02
                      </span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        30 Mins
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Technical Video Interview
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Discuss complex lift calculations, dynamic sling angles, and high-wind emergency
                      protocols directly with Jürgen Weimann (Chief Lift Director).
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-xs relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-xl text-headline-xl text-primary font-bold">
                        03
                      </span>
                      <span className="px-space-xs py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                        Final Stage
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      On-Site Simulator &amp; Practical Assessment
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Full expenses-paid trip to Munich for 2 hours in the Liebherr High-Fidelity 3D
                      simulator followed by accompanied cab operation at Shaft 6.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT 4-COLUMN STICKY SIDEBAR: FAST-TRACK APPLICATION & TELEMETRY */}
            <div className="lg:col-span-4 flex flex-col gap-space-lg sticky top-20" id="apply-box">
              {/* APPLICATION CARD */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-surface-container-highest flex flex-col gap-space-md">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Fast-Track Direct Gateway
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Apply for Senior Crane Position
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Submit your credentials directly to the BAM &amp; Hochtief JV Engineering
                    Operations Desk.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-space-md rounded-xl bg-primary-fixed/20 border border-primary/30 text-on-surface flex flex-col items-center text-center gap-2 py-8">
                    <span className="material-symbols-outlined text-primary text-[48px]">
                      check_circle
                    </span>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Application Dispatched!
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Thank you, {formData.fullName || "applicant"}. A Senior Lifting Technical
                      Evaluator at the Munich Mega-Project desk will review your dossier within 24
                      hours.
                    </p>
                    <button
                      className="mt-4 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container cursor-pointer"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Full Legal Name
                      </label>
                      <input
                        className="w-full h-11 px-space-sm rounded-lg bg-surface border border-outline-variant text-on-surface placeholder:text-outline font-body-sm text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        placeholder="e.g. Markus Lindner"
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Work Email Address
                      </label>
                      <input
                        className="w-full h-11 px-space-sm rounded-lg bg-surface border border-outline-variant text-on-surface placeholder:text-outline font-body-sm text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        placeholder="name@domain.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        className="w-full h-11 px-space-sm rounded-lg bg-surface border border-outline-variant text-on-surface placeholder:text-outline font-body-sm text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        placeholder="+49 170 0000000"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-space-xs">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Experience
                        </label>
                        <select
                          className="w-full h-11 px-space-xs rounded-lg bg-surface border border-outline-variant text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
                          value={formData.experience}
                          onChange={(e) =>
                            setFormData({ ...formData, experience: e.target.value })
                          }
                        >
                          <option>5 - 10 Years</option>
                          <option>10+ Years</option>
                          <option>15+ Years (Master)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Primary License
                        </label>
                        <select
                          className="w-full h-11 px-space-xs rounded-lg bg-surface border border-outline-variant text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
                          value={formData.license}
                          onChange={(e) =>
                            setFormData({ ...formData, license: e.target.value })
                          }
                        >
                          <option>DGUV V 52 (DE)</option>
                          <option>CPCS Blue A60 (UK)</option>
                          <option>NCCCO TWR (US)</option>
                          <option>Other Equivalent</option>
                        </select>
                      </div>
                    </div>
                    {/* Upload Dropzone */}
                    <div className="flex flex-col gap-1 mt-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        CV &amp; Crane Logbook / License Upload
                      </label>
                      <div
                        className="w-full p-space-md rounded-lg bg-surface-container-low border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-colors"
                        onClick={() => alert("Crane logbook uploader clicked")}
                      >
                        <span className="material-symbols-outlined text-secondary text-[28px]">
                          cloud_upload
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold mt-1">
                          Drop PDF / scan or Browse
                        </span>
                        <span className="font-body-sm text-[12px] text-outline">
                          PDF, JPG, PNG up to 25MB
                        </span>
                      </div>
                    </div>
                    {/* Checkbox */}
                    <div className="flex items-start gap-2 pt-1">
                      <input
                        checked={formData.sponsorship}
                        className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                        id="eu-visa"
                        type="checkbox"
                        onChange={(e) =>
                          setFormData({ ...formData, sponsorship: e.target.checked })
                        }
                      />
                      <label
                        className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer"
                        htmlFor="eu-visa"
                      >
                        I hold a valid EU/EEA citizenship OR require German skilled worker visa
                        sponsorship (Fast-Track provided).
                      </label>
                    </div>
                    <button
                      className="w-full py-space-sm bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-all shadow-md mt-2 flex items-center justify-center gap-2 font-semibold cursor-pointer"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>Submit Certified Crane Operator Application</span>
                    </button>
                  </form>
                )}
              </div>

              {/* ENGINEERING LEAD PROFILE CARD */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container shrink-0">
                    <img
                      alt="Portrait of Jürgen Weimann, Chief Lifting Director"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB46W70LnIvMH7UUHv6CN4rAQRln4J_WvxqTL8fs0uZ97xFaVypezG9Ut38WusmWDyJ14n_b0jqjf5oKb__JHQCBqlBmTJv975tQN6vUgcDc49jGjFZAXzIZwnXC709IV5l2_aD0SDkHGQAwEHYR00TaqW0T-Zk7iTAalbvSnwBGexkdEujDdCxNUu8ZFMyy1RihtSJ6YN-cmHUJfdxudFUkptQDnuxGCmJ3SFG4ZOS1NYsyPCl4v8Tg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">
                      Jürgen Weimann
                    </h5>
                    <span className="font-label-sm text-label-sm text-outline">
                      Senior Lifting Director &amp; Plant Operations Chief
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      Munich Mega-Project JV
                    </span>
                  </div>
                </div>
                <blockquote className="font-body-sm text-body-sm text-on-surface-variant italic pl-3 border-l-2 border-primary/40 my-1 leading-relaxed">
                  &ldquo;Precision is non-negotiable when swinging 35-tonne segments between live rail
                  tracks. We equip our operators with the finest machinery in Europe and back them
                  with total operational authority.&rdquo;
                </blockquote>
                {/* Live Site Telemetry Widget */}
                <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1.5 font-label-sm text-label-sm text-on-surface-variant border border-surface-container-high">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      Site Lift Availability SLA
                    </span>
                    <span className="font-bold text-on-surface">99.98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        height
                      </span>
                      Current Hook Height (Tower 02)
                    </span>
                    <span className="font-bold text-on-surface">68.5 m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">air</span>
                      Max Gust Speed (Munich Terminus)
                    </span>
                    <span className="font-bold text-primary">8.4 m/s (Safe Window)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Comprehensive Reusable Footer */}
      <Footer />
    </div>
  );
}
