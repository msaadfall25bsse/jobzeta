"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorIntermodalPortDrayageJobPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-background min-h-screen flex-1">
        <div className="flex flex-col w-full">
          {/* Top Navigation & Metadata Strip */}
          <section className="w-full px-margin py-space-md border-b border-outline-variant/20 bg-surface-container-low/60">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" data-path="home" href="/">
                  Home
                </Link>
                <span className="text-outline-variant">/</span>
                <Link className="hover:text-primary transition-colors" data-path="categories" href="/categories">
                  Categories
                </Link>
                <span className="text-outline-variant">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  data-path="categories"
                  href="/categories/driving-and-transportation"
                >
                  Driving &amp; Transportation
                </Link>
                <span className="text-outline-variant">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  data-path="categories"
                  href="/categories/driving-and-transportation/port-rail-intermodal-drayage"
                >
                  Port, Rail &amp; Intermodal Drayage
                </Link>
                <span className="text-outline-variant">/</span>
                <span className="text-secondary font-semibold">Technical Operational Manual &amp; Specs</span>
              </nav>

              {/* Utility Actions */}
              <div className="flex items-center gap-space-sm flex-shrink-0">
                <Link
                  className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors"
                  data-path="categories"
                  href="/categories/driving-and-transportation/port-rail-intermodal-drayage"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  <span>Back to Drayage Overview</span>
                </Link>
                <a
                  className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-sm"
                  href="#application-form"
                >
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span>Fast-Track Dispatch Application</span>
                </a>
              </div>
            </div>
          </section>

          {/* Live Corridor Indicators */}
          <div className="w-full bg-surface-container-lowest px-margin py-space-sm border-b border-outline-variant/15">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-sm text-label-sm">
              <div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant">
                <span className="font-mono font-bold tracking-wider text-secondary px-space-sm py-0.5 rounded bg-secondary-fixed/40">
                  ROLE ID: BY-MSC-DRAY-8841
                </span>
                <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-emerald-50 text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  ACTIVE DEEP-SEA TERMINAL CORRIDOR
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant">
                  <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                  MSC Intermodal &amp; ECT Verified Fleet
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">format_image_left</span>
                  Portbase &amp; Alfapass Compliant
                </span>
              </div>
              <div className="flex items-center gap-space-md text-on-surface-variant font-mono">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">sensors</span> GATE OCR LIVE
                </span>
                <span className="text-outline-variant hidden sm:inline">|</span>
                <span className="text-on-surface font-semibold hidden sm:inline">TURN TIME AVG: 24 MIN</span>
              </div>
            </div>
          </div>

          {/* Hero Showcase Photographic Container */}
          <section className="w-full px-margin pb-space-xl pt-space-md">
            <div className="max-w-7xl mx-auto">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-on-secondary-fixed">
                <img
                  alt="Modern European container drayage Volvo FH truck with semi-trailer chassis standing in Port of Rotterdam container terminal with massive ship-to-shore gantry cranes and stacked ocean shipping containers in the background, with two safety-geared port logistics specialists reviewing dispatch manifests on a ruggedized tablet, crisp daylight lighting with industrial steel aesthetic, teal and deep navy highlights."
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-85 brightness-95 contrast-105"
                  src="/intermodal-drayage-hero.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed via-on-secondary-fixed/80 to-on-secondary-fixed/60 backdrop-blur-[1px]"></div>
                <div className="relative z-10 p-space-lg md:p-space-xl flex flex-col justify-between gap-space-lg min-h-[440px]">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-space-lg">
                    <div className="space-y-space-sm max-w-3xl">
                      <div className="flex flex-wrap items-center gap-space-xs">
                        <span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-primary-fixed/30 text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold backdrop-blur-md border border-primary-fixed/20">
                          <span className="material-symbols-outlined text-[16px]">anchor</span> Deep-Sea Port Terminal Drayage &amp; Intermodal Rail Shuttle
                        </span>
                        <span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface/10 text-white/90 font-label-sm text-label-sm backdrop-blur-md border border-white/10">
                          <span className="material-symbols-outlined text-[14px] text-primary-fixed">hub</span> Port of Rotterdam Maasvlakte &amp; Antwerp-Bruges Intermodal Corridor
                        </span>
                      </div>
                      <h1 className="font-headline-xl text-headline-xl text-white tracking-tight font-bold drop-shadow-sm">
                        Senior Intermodal Port Drayage &amp; Rail Container Operator
                      </h1>
                      <p className="font-body-md text-body-md text-surface-container-high/90 max-w-2xl leading-relaxed drop-shadow">
                        Port of Rotterdam Maasvlakte (ECT Delta &amp; Euromax) / Port of Antwerp-Bruges • Full-Time Permanent (4-on/2-off or Standard Mon-Fri Shift) • Port Logistics Collective Agreement (CAO Havenvervoer) Tier 5
                      </p>
                      <div className="flex flex-wrap items-center gap-space-xs pt-1">
                        <span className="px-space-md py-space-xs rounded-full bg-surface/90 backdrop-blur-md text-on-surface font-label-md text-label-md flex items-center gap-1.5 shadow-sm">
                          <span className="material-symbols-outlined text-primary text-[16px]">badge</span> Terminal Gate Endorsement: Alfapass &amp; Portbase
                        </span>
                        <span className="px-space-md py-space-xs rounded-full bg-surface/90 backdrop-blur-md text-on-surface font-label-md text-label-md flex items-center gap-1.5 shadow-sm">
                          <span className="material-symbols-outlined text-secondary text-[16px]">security</span> Safety Protocol: Terminal Operating System (TOS) Level 2
                        </span>
                        <span className="px-space-md py-space-xs rounded-full bg-surface/90 backdrop-blur-md text-on-surface font-label-md text-label-md flex items-center gap-1.5 shadow-sm">
                          <span className="material-symbols-outlined text-primary text-[16px]">local_shipping</span> Fleet Telematics: Volvo FH 460 LNG &amp; Smart Chassis RFID
                        </span>
                        <span className="px-space-md py-space-xs rounded-full bg-emerald-500 text-white font-label-md text-label-md flex items-center gap-1.5 shadow-md font-semibold">
                          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span> Immediate Gate Placement Available
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-start bg-on-secondary-fixed/70 backdrop-blur-xl p-space-md rounded-2xl shadow-xl border border-white/15 min-w-[300px] max-w-sm text-white space-y-2">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">
                          Approved Port Drayage CAO Tariff
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/10">
                          Tier A1 Rate
                        </span>
                      </div>
                      <div className="font-headline-lg text-headline-lg text-white tracking-tight font-bold">
                        €48,000 – €72,000 <span className="font-body-md text-body-md text-white/80 font-normal">/ year</span>
                      </div>
                      <div className="flex items-center gap-1 font-label-sm text-label-sm text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/30">
                        <span className="material-symbols-outlined text-[16px]">add_circle</span>
                        <span>+ €55.00/day Night Gate Differential</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-surface-container-high/90">
                        Terminal Turnaround Allowance &amp; Collective Pension Coverage
                      </p>
                      <div className="pt-1 border-t border-white/15 w-full flex items-center justify-between text-[11px] font-mono text-white/70">
                        <span>Pay Scale: CAO Havenvervoer Schaal 5</span>
                        <span className="text-primary-fixed">Guaranteed Baseline</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md border-t border-white/10 flex flex-wrap items-center justify-between gap-space-md font-label-sm text-label-sm text-white/80">
                    <div className="flex flex-wrap items-center gap-space-md font-mono">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary-fixed text-[16px]">terminal</span> SPEC: ROT-PORT-DRAY-2025-V2
                      </span>
                      <span className="text-white/30 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-emerald-400 text-[16px]">verified</span> Verified Port Logistics Protocol
                      </span>
                      <span className="text-white/30 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1.5 text-primary-fixed">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Portbase Cleared
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <button
                        className="inline-flex items-center gap-1 px-space-sm py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-label-sm text-label-sm transition-colors border border-white/10 cursor-pointer"
                        onClick={() => window.print()}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">print</span>
                        <span>Print Manifest</span>
                      </button>
                      <button
                        className="inline-flex items-center gap-1 px-space-sm py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-label-sm text-label-sm transition-colors border border-white/10 cursor-pointer"
                        onClick={() => alert("Downloading PDF Copy...")}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        <span>PDF Copy</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Two-Column Technical Content Grid (8 Col Left + 4 Col Right) */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* Left Column (8 cols): 5 Structured Technical Modules */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* Module 01: Role Overview & Terminal Operating Protocol */}
                <article className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-2xl shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm font-bold">
                        01
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Role Overview &amp; Terminal Operating Protocol
                      </h2>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed/50 px-space-sm py-0.5 rounded-full">
                      ISO 14001 &amp; ISPS Code
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Jobzeta Exchange, in direct partnership with premier multinational carrier Mediterranean Shipping Company (MSC) and ECT Rotterdam, is deploying certified Class CE Port Drayage Operators for specialized Maasvlakte II deep-sea container shuttles. The assignment centers on swift, high-precision turnarounds between maritime berths (ECT Delta, APM Terminals Medport, DP World Antwerp) and inland trimodal rail interchanges.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                      <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg">
                        <span className="material-symbols-outlined text-[20px]">chevron_forward</span>
                        <span>Container Handling Directives</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Managing ISO standard 20ft, 40ft High Cube, and 45ft dry freight configurations; ISO tank containers; and active Genset-powered refrigerated boxes requiring continuous 380V power sync &amp; temperature logging.
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                      <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg">
                        <span className="material-symbols-outlined text-[20px]">pin_invoke</span>
                        <span>Customs &amp; Pin Lock Execution</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Direct verification of electronic customs green lights via Portbase Cargo Controller. Ensuring 4-corner chassis twist-lock engagement, kingpin security seals, and EDI status handoffs before out-gate transit.
                      </p>
                    </div>
                  </div>
                  {/* Critical Terminal Safety Warning Box */}
                  <div className="p-space-md rounded-xl bg-amber-50 text-amber-950 flex gap-space-md items-start">
                    <span className="material-symbols-outlined text-amber-700 text-[24px] flex-shrink-0 mt-0.5">warning</span>
                    <div className="space-y-1">
                      <h4 className="font-label-lg text-label-lg text-amber-900 font-bold">Critical Terminal Safety Directive</h4>
                      <p className="font-body-sm text-body-sm text-amber-900/90 leading-relaxed">
                        Zero-tolerance terminal safety corridor policy: Speed limit strictly capped at 30 km/h in terminal aprons. Compulsory Class 3 hi-vis orange/yellow gear, steel-toe composite boots, and EN397 safety helmet required immediately upon exiting vehicle cab. Automatic Straddle Carriers (AGVs &amp; ASCs) maintain 100% unconditional right-of-way.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Module 02: Daily Terminal Turnaround, Rail & Inland Shuttle Protocol */}
                <article className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-2xl shadow-sm space-y-space-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm font-bold">
                        02
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Daily Dispatch Chronology &amp; Rail Shuttle Protocol
                      </h2>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-mono font-bold bg-primary-fixed/40 px-space-sm py-0.5 rounded">
                      TOS SLOT TIMED
                    </span>
                  </div>
                  {/* 5-Step Chronological Sequence */}
                  <div className="relative pl-6 space-y-space-lg before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/40">
                    {/* Step 1 */}
                    <div className="relative flex flex-col gap-1">
                      <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></span>
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-mono text-primary font-bold">STEP 01 • 06:00 – 07:15</span>
                        <span className="font-label-xs text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                          Terminal Yard Depots
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Pre-Trip Rig, Chassis Twist-Lock &amp; Portbase Pre-Notification
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Conduct walk-around inspection on Volvo FH LNG tractor and gooseneck container chassis. Verify pneumatic brake pressure, ABS cable lines, and LED signal banks. Log on to the Trimble CarCube terminal telematic unit to authenticate the Portbase TAR (Terminal Access Realtime) reservation slot.
                      </p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex flex-col gap-1">
                      <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></span>
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-mono text-primary font-bold">STEP 02 • 07:15 – 09:30</span>
                        <span className="font-label-xs text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                          Maasvlakte Pier In-Gate
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        In-Gate OCR Lane Clearance &amp; Straddle Carrier Loading
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Enter ECT Delta or Euromax automated OCR recognition gate. Swipe certified Alfapass biometric card at driver totem. Drive directly to designated terminal yard block (Stack Lane 14-B). Remain stationary in safety bay while automated straddle carrier safely lowers 40ft High Cube container onto chassis pins.
                      </p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex flex-col gap-1">
                      <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></span>
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-mono text-primary font-bold">STEP 03 • 09:30 – 13:00</span>
                        <span className="font-label-xs text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                          Corridor A15 Freight Axis
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        A15 Inland Transit to Venlo / Duisburg Intermodal Hub
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Perform manual 4-corner twist-lock engagement, inspect container door seal serials against bill of lading, and exit through outbound gate scales. Cruise the designated A15 Betuwe heavy freight corridor maintaining fuel-optimized speeds towards inland intermodal dry port terminals.
                      </p>
                    </div>
                    {/* Step 4 */}
                    <div className="relative flex flex-col gap-1">
                      <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></span>
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-mono text-secondary font-bold">STEP 04 • 13:00 – 13:45</span>
                        <span className="font-label-xs text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                          EU Tachograph Compliance
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Mandatory 45-Min Break &amp; Digital Tachograph Sync
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Pull into secure, guarded intermodal rest plaza. Switch Gen-2 smart tachograph to statutory rest mode. Enjoy the onboard luxury sleeper parking cooler and pre-heated galley amenities while dispatch logs customs clearance status for the rail exchange.
                      </p>
                    </div>
                    {/* Step 5 */}
                    <div className="relative flex flex-col gap-1">
                      <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></span>
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-mono text-primary font-bold">STEP 05 • 13:45 – 16:30</span>
                        <span className="font-label-xs text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                          Inland Rail Terminal
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Rail Crane Lift, Empty Return &amp; Electronic EIR Sign-Off
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Position rig under the reach stacker gantry at the inland rail siding for seamless container transfer onto flatbed rail cars. Collect pre-cleared empty return container, verify tare weight, and finalize Equipment Interchange Receipt (EIR) digitally on the fleet tablet.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Module 03: Vocational Licenses & Gate Pass Equivalencies */}
                <article className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-2xl shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm font-bold">
                        03
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Licensing &amp; Gate Pass Equivalencies
                      </h2>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Global Equivalency Matrix</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Jobzeta actively processes expedited credential conversions for qualified international commercial transport operators entering Western European port drayage routes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    {/* EU & Benelux */}
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-primary">EUROPEAN UNION / BENELUX</span>
                        <span className="material-symbols-outlined text-primary text-[20px]">flag</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">EU Category CE + Code 95</h4>
                      <ul className="text-on-surface-variant font-body-sm text-body-sm space-y-1 list-disc list-inside">
                        <li>Active Driver Qualification Card (Code 95).</li>
                        <li>Digital Tachograph Card Gen-2.</li>
                        <li>Alfapass (Antwerp) &amp; Portbase Secure Access ID.</li>
                      </ul>
                    </div>
                    {/* Germany & Baltic */}
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-secondary">GERMANY &amp; BALTIC</span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">public</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Führerschein CE + Sz 95</h4>
                      <ul className="text-on-surface-variant font-body-sm text-body-sm space-y-1 list-disc list-inside">
                        <li>Schlüsselzahl 95 professional endorsement.</li>
                        <li>Brematic / Hamburg Port GATE Card equivalency.</li>
                        <li>ADR Dangerous Goods Tanker endorsement a plus.</li>
                      </ul>
                    </div>
                    {/* United States & Canada */}
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-secondary">UNITED STATES &amp; CANADA</span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">flight_land</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">CDL Class A + TWIC Port Card</h4>
                      <ul className="text-on-surface-variant font-body-sm text-body-sm space-y-1 list-disc list-inside">
                        <li>Valid Commercial Driver License Class A.</li>
                        <li>Transportation Worker Identification Credential (TWIC).</li>
                        <li>Fast-track conversion to Dutch Code 95 sponsored.</li>
                      </ul>
                    </div>
                    {/* United Kingdom */}
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-primary">UNITED KINGDOM</span>
                        <span className="material-symbols-outlined text-primary text-[20px]">local_police</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">HGV Class 1 (C+E) + DQC</h4>
                      <ul className="text-on-surface-variant font-body-sm text-body-sm space-y-1 list-disc list-inside">
                        <li>Driver CPC Qualification Card.</li>
                        <li>Port of Felixstowe RHIDES / London Gateway card.</li>
                        <li>Visa sponsorship provided for qualified applicants.</li>
                      </ul>
                    </div>
                  </div>
                </article>

                {/* Module 04: Compensation, Allowances & Port CAO Tariff */}
                <article className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-2xl shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm font-bold">
                        04
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Tariff Structure, Benefits &amp; Fleet Allocation
                      </h2>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-bold bg-primary-fixed/40 px-space-sm py-0.5 rounded">
                      CAO HAVENLOGISTIEK
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    All positions operate under the highly protective and well-compensated Dutch Port Transport Collective Labor Agreement (CAO Beroepsgoederenvervoer &amp; Havenoverslag), offering superior pay security, overtime multipliers, and comprehensive medical coverage.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-1">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">TAX-FREE GATE PER DIEM</span>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold">€40 – €60 / day</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Untaxed terminal waiting time and daily subsistence stipend paid weekly.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-1">
                      <span className="font-label-sm text-label-sm text-primary font-bold">ASSIGNED FLEET UNIT</span>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold">Dedicated Late-Model Rig</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Volvo FH 460 LNG or Scania R500 with integrated parking cooler, microwave &amp; telematics.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-1">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">EFFICIENCY BONUS</span>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold">€400 / month</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Awarded for zero-demurrage gate performance and optimal turnaround times.
                      </p>
                    </div>
                  </div>
                  {/* Extra perks grid */}
                  <div className="pt-space-sm grid grid-cols-1 sm:grid-cols-2 gap-space-sm font-label-md text-label-md text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">event_available</span>
                      <span>30 Days Paid Vacation + Statutory Bank Holidays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">cottage</span>
                      <span>Predictable Home Time: Daily or 4-on/2-off Rotation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">savings</span>
                      <span>Port Industry Defined Collective Pension Scheme</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">medical_services</span>
                      <span>Comprehensive Health, Dental &amp; Disability Coverage</span>
                    </div>
                  </div>
                </article>

                {/* Module 05: Structured 3-Stage Selection & Onboarding Process */}
                <article className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-2xl shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm font-bold">
                        05
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Structured 3-Stage Selection &amp; Onboarding
                      </h2>
                    </div>
                    <span className="font-label-sm text-label-sm text-emerald-800 bg-emerald-50 px-space-sm py-0.5 rounded-full">
                      FAST-TRACK DISPATCH
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs relative">
                      <span className="text-primary font-mono font-bold text-label-sm">STAGE 01</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Gate Pass &amp; Credential Audit</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Within 24 hours of submission, Jobzeta safety officers verify EU CE license, Code 95 validity, tachograph history, and existing Alfapass/Portbase clearance.
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs relative">
                      <span className="text-primary font-mono font-bold text-label-sm">STAGE 02</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Yard Coupling &amp; Dock Assessment</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Half-day practical evaluation at Maasvlakte logistics academy: blind-side chassis parking, 40ft High Cube alignment, and automated twist-lock protocols.
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs relative">
                      <span className="text-primary font-mono font-bold text-label-sm">STAGE 03</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Safety Induction &amp; Rig Handover</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full ECT terminal security badge provisioning, CarCube telematics training, and assignment of your permanent dedicated Volvo or Scania rig.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Right Column (4 cols): Sticky Application & Terminal Sidebar */}
              <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
                {/* Fast-Track Drayage Requisition Application Form */}
                <div
                  className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-lg border border-outline-variant/30 space-y-space-md"
                  id="application-form"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold uppercase">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                      <span>Priority Terminal Requisition</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Fast-Track Drayage Application</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Direct placement to MSC Intermodal Fleet Rotterdam Maasvlakte • Response within 24h.
                    </p>
                  </div>
                  <form
                    className="space-y-space-md"
                    id="drayage-app-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                  >
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="fullName">
                        Full Legal Name
                      </label>
                      <input
                        className="w-full h-11 px-space-md rounded-lg bg-surface border border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-body-sm transition-all"
                        id="fullName"
                        placeholder="e.g. Johannes van der Berg"
                        required
                        type="text"
                      />
                    </div>
                    {/* Email & Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-space-md">
                      <div className="space-y-1">
                        <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="email">
                          Official Email
                        </label>
                        <input
                          className="w-full h-11 px-space-md rounded-lg bg-surface border border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-body-sm transition-all"
                          id="email"
                          placeholder="driver@domain.com"
                          required
                          type="email"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="mobile">
                          Mobile / WhatsApp
                        </label>
                        <input
                          className="w-full h-11 px-space-md rounded-lg bg-surface border border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-body-sm transition-all"
                          id="mobile"
                          placeholder="+31 6 12345678"
                          required
                          type="tel"
                        />
                      </div>
                    </div>
                    {/* Port Gate Access Passes */}
                    <div className="space-y-1.5">
                      <label className="block font-label-md text-label-md text-on-surface font-semibold">
                        Active Port Gate Credentials
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-body-sm text-on-surface-variant">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant/60" type="checkbox" />
                          <span>Alfapass</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant/60" type="checkbox" />
                          <span>Portbase ID</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input className="w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant/60" type="checkbox" />
                          <span>TWIC Card</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input className="w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant/60" type="checkbox" />
                          <span>Hamburg GATE</span>
                        </label>
                      </div>
                    </div>
                    {/* Experience Level */}
                    <div className="space-y-1">
                      <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="experience">
                        Port Drayage Experience
                      </label>
                      <select
                        defaultValue="5-10"
                        className="w-full h-11 px-space-md rounded-lg bg-surface border border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-body-sm transition-all cursor-pointer"
                        id="experience"
                      >
                        <option value="3-5">3 - 5 Years (Commercial CE)</option>
                        <option value="5-10">5 - 10 Years (Senior Intermodal)</option>
                        <option value="10+">10+ Years (Master Drayage Specialist)</option>
                        <option value="relocation">Overseas Driver Requiring EU Conversion</option>
                      </select>
                    </div>
                    {/* Document Upload Box */}
                    <div className="space-y-1">
                      <label className="block font-label-md text-label-md text-on-surface font-semibold">
                        Driver License &amp; Gate Credentials
                      </label>
                      <div className="border-2 border-dashed border-outline-variant/50 hover:border-primary rounded-xl p-space-md text-center bg-surface cursor-pointer transition-colors group">
                        <span className="material-symbols-outlined text-primary text-[28px] group-hover:scale-110 transition-transform">
                          upload_file
                        </span>
                        <p className="font-label-md text-label-md text-on-surface mt-1">Upload Driver License (CE) &amp; Port Card</p>
                        <p className="font-label-xs text-[11px] text-on-surface-variant">PDF, JPG, PNG up to 15MB total</p>
                      </div>
                    </div>
                    {/* Agreement Checkbox */}
                    <div className="flex items-start gap-2 pt-1">
                      <input className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant/60 cursor-pointer" id="consent" required type="checkbox" />
                      <label className="font-body-sm text-[12px] leading-tight text-on-surface-variant cursor-pointer" htmlFor="consent">
                        I certify that I hold an unencumbered Commercial Driver License and agree to automated safety background check across ECT and Portbase gate registries.
                      </label>
                    </div>
                    {/* Submit CTA */}
                    <button
                      className="w-full py-space-sm px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                      <span>Submit Certified Drayage Application</span>
                    </button>
                  </form>
                  {/* Feedback Toast Message */}
                  {formSubmitted && (
                    <div className="p-space-md rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 space-y-1" id="form-feedback">
                      <div className="flex items-center gap-1 font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-emerald-700 text-[20px]">check_circle</span>
                        Application Transmitted!
                      </div>
                      <p className="font-body-sm text-body-sm text-emerald-800">
                        Your credentials have been securely routed to MSC Intermodal Logistics Fleet Operations. Direct dispatch assessment contact within 24 hours.
                      </p>
                    </div>
                  )}
                </div>

                {/* Endorsement Quote Card */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-outline-variant/30 space-y-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        alt="Vincent De Graaf, senior intermodal fleet manager"
                        src="/vincent-degraaf.jpg"
                      />
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Vincent De Graaf</h4>
                      <p className="font-label-sm text-label-sm text-secondary">Intermodal Fleet Lead, MSC Northern Europe</p>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                    &ldquo;Our Maasvlakte-to-Venlo rail shuttle operations demand drivers of highest professional caliber. In return, we provide unmatched equipment comfort, strict adherence to tachograph rest rules, and guaranteed turnaround speeds.&rdquo;
                  </p>
                </div>

                {/* Corridor Technical Parameters Widget */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-outline-variant/30 space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wider">
                      Corridor Specifications
                    </h4>
                    <span className="material-symbols-outlined text-primary text-[20px]">route</span>
                  </div>
                  <div className="space-y-space-xs font-body-sm text-body-sm">
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">Primary Hubs</span>
                      <span className="font-semibold text-on-surface">Maasvlakte II • Venlo • Duisburg</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">One-Way Distance</span>
                      <span className="font-mono font-semibold text-on-surface">182 km via A15 Corridor</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">Max Gross Train Weight</span>
                      <span className="font-mono font-semibold text-on-surface">Up to 44,000 kg (ISO std)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-outline-variant/20">
                      <span className="text-on-surface-variant">Chassis Configuration</span>
                      <span className="font-semibold text-on-surface">Gooseneck Multi-Pneumatic</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-on-surface-variant">Terminal Gate Clearance</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Pre-Cleared OCR Auto
                      </span>
                    </div>
                  </div>
                  {/* Live Port Mini Map */}
                  <div className="pt-space-xs">
                    <div
                      className="w-full h-36 bg-cover bg-center rounded-xl overflow-hidden relative shadow-inner"
                      data-location="Port of Rotterdam Maasvlakte"
                      style={{
                        backgroundImage: "url('/rotterdam-ect-map.jpg')",
                      }}
                    >
                      <div className="absolute inset-0 bg-on-secondary-fixed/30 flex items-center justify-center">
                        <span className="px-space-md py-space-xs rounded-full bg-surface/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 shadow">
                          <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                          Rotterdam ECT Maasvlakte Gate 3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
