"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorLongHaulCEDriverJobPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expTier: "5 – 10 Years CE",
    licenseType: "EU Cat CE (Code 95)",
    agreed: false,
  });

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)] flex-1">
        <div className="flex flex-col w-full">
          {/* Sub-Header & Global Fleet Metadata Ribbon */}
          <section className="w-full bg-surface-container-low px-margin py-space-md shadow-sm">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              {/* Left: Breadcrumb & Operational Badges */}
              <div className="flex flex-col gap-space-xs">
                <nav className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider flex-wrap">
                  <Link className="hover:text-primary transition-colors" href="/">Home</Link>
                  <span>/</span>
                  <Link className="hover:text-primary transition-colors" href="/categories">Categories</Link>
                  <span>/</span>
                  <Link className="hover:text-primary transition-colors" href="/categories/driving-and-transportation">Driving &amp; Transportation</Link>
                  <span>/</span>
                  <Link className="hover:text-primary transition-colors" href="/categories/driving-and-transportation/long-haul-and-intermodal-freight">Long-Haul &amp; Intermodal</Link>
                  <span>/</span>
                  <span className="text-on-surface font-bold">Operational Dispatch Handbook</span>
                </nav>
                <div className="flex items-center gap-space-sm flex-wrap pt-space-xs">
                  <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    ROLE ID: BY-ROT-FREIGHT-9821
                  </span>
                  <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[15px]">ac_unit</span>
                    ACTIVE HIGH-VALUE REEFER CORRIDOR
                  </span>
                  <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[15px]">verified_user</span>
                    DHL Global &amp; Freja JV Verified Carrier
                  </span>
                  <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-tertiary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[15px]">gavel</span>
                    EU Mobility Package &amp; CAO Compliant
                  </span>
                </div>
              </div>
              {/* Right: Action Bar */}
              <div className="flex items-center gap-space-sm shrink-0">
                <Link className="inline-flex items-center gap-1.5 px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant bg-surface-container-lowest shadow-sm hover:bg-surface-container transition-colors" href="/categories/driving-and-transportation/long-haul-and-intermodal-freight">
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  Back to Haulage Overview
                </Link>
                <a className="inline-flex items-center gap-1.5 px-space-md py-space-sm rounded-lg font-label-lg text-label-lg bg-primary text-on-primary hover:bg-primary-container shadow-sm transition-all transform active:scale-95" href="#apply-card">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  Fast-Track Dispatch Application
                </a>
              </div>
            </div>
          </section>

          {/* Title & Specification Summary Section */}
          <section className="w-full bg-surface-container-lowest px-margin py-space-lg shadow-sm">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-4xl">
                <div className="flex items-center gap-space-xs">
                  <span className="px-space-sm py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm uppercase font-bold tracking-widest">Job Specification Document 2025.4</span>
                  <span className="text-tertiary font-label-sm text-label-sm">•</span>
                  <span className="text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">Line-Haul Fleet Operations</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight leading-tight">
                  Senior International Long-Haul CE Driver <span className="text-secondary font-headline-lg block sm:inline">(Reefer &amp; High-Value European Corridors)</span>
                </h1>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
                    <span>Rotterdam Maasvlakte Intermodal Hub (On-Road Cross-Border)</span>
                  </div>
                  <span className="text-outline-variant">•</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-[18px]">calendar_today</span>
                    <span>Full-Time (3/1 Roster or 4/1 Custom Rotation)</span>
                  </div>
                  <span className="text-outline-variant">•</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-[18px]">badge</span>
                    <span>Dutch / EU Transport Tariff Tier 6</span>
                  </div>
                </div>
              </div>
              {/* Salary Pill Badge */}
              <div className="shrink-0 bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-center items-start lg:items-end">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">Approved Annualized Tariff</span>
                <div className="font-headline-lg text-headline-lg text-primary font-bold">
                  €54,000 – €74,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ year</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-[15px]">night_shelter</span>
                  + €65/day Per Diem + Night Cabin Allowance
                </span>
              </div>
            </div>
          </section>

          {/* Hero Visual Banner & Corridor Telemetry */}
          <section className="w-full px-margin py-space-md">
            <div className="max-w-[1440px] mx-auto">
              <div className="relative w-full h-[380px] md:h-[440px] rounded-2xl overflow-hidden shadow-md flex flex-col justify-end p-space-md md:p-space-xl">
                {/* Background Imagery with Scrim */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHkSPZDnV-ClwW_YTVSsJ9hPa6OduHjRB6vqiMWlEEzEf_3-dpPfJfgelfwogbLEb_PgK6wvFVUr2VoMkqtfvY9lzV8id5IT62O4FECzzxe8zCTFHm1WG4DmXM-Q0q9Ae4Lar6x2OO1gfN9jGrBrRJAUL5zVsqOGfxNsc8d7NI7jhcMN6oS1VQC6WU6w2xnm1AXZqaJYfuaQp46OpijKCzGD6vYniCXmfAEMwQEjC0xNdneoRUQFZi7Q')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/95 via-on-background/50 to-transparent"></div>
                {/* Banner Overlay Badges and Content */}
                <div className="relative z-10 flex flex-col gap-space-sm max-w-4xl text-surface-container-lowest">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">
                      <span className="material-symbols-outlined text-[16px]">alt_route</span>
                      TRANSEUROPEAN REEFER CORRIDOR PACKAGE 07
                    </span>
                    <span className="px-space-sm py-1 rounded bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-label-sm text-label-sm uppercase font-semibold">
                      ROTTERDAM ⇄ SCANDINAVIA &amp; RUHR VALLEY
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-surface-bright tracking-tight leading-snug">
                    Benelux, Nordic &amp; DACH Cold-Chain Line-Haul — High-Value Pharmaceutical GDP &amp; Temperature-Sensitive Freight Governance
                  </h2>
                  <p className="font-body-md text-body-md text-surface-container-high line-clamp-2 md:line-clamp-none max-w-3xl">
                    Lead cross-border line-haul operations across Benelux, Germany, Denmark, and Sweden. Supervise GPS telematics, dual-evaporator reefer integrity, and automated border customs corridors for priority pharmaceutical and high-tech cargo.
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-sm text-surface-bright font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-primary-fixed text-[15px]">verified</span> 100% On-Time Delivery Record
                      </span>
                      <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-sm text-surface-bright font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-primary-fixed text-[15px]">severe_cold</span> GDP Pharma Certified Trailer
                      </span>
                      <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-sm text-surface-bright font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-primary-fixed text-[15px]">speed</span> Smart Tachograph Gen 2
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <button onClick={() => window.print()} className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 backdrop-blur-md text-surface-bright font-label-sm text-label-sm font-semibold transition-colors cursor-pointer" type="button">
                        <span className="material-symbols-outlined text-[16px]">print</span> Print Manifest
                      </button>
                      <button onClick={() => alert("Downloading Specifications PDF...")} className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 backdrop-blur-md text-surface-bright font-label-sm text-label-sm font-semibold transition-colors cursor-pointer" type="button">
                        <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span> Specs PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Asymmetric Workspace (8 Cols Left / 4 Cols Right) */}
          <section className="w-full px-margin py-space-lg">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* LEFT COLUMN: Technical Specs & Operational Dossier (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* SECTION 01: Fleet Overview & Transit Governance */}
                <article className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">01</span>
                      <div>
                        <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Role Overview &amp; Transit Governance</h3>
                        <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Cross-Border Long-Haul Fleet Architecture</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-tertiary font-label-sm text-label-sm font-medium">
                      <span className="material-symbols-outlined text-[15px]">tune</span> Automated Telemetry
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    As a Senior International CE Driver within the collaborative DHL Global Forwarding &amp; Freja Transport line-haul division, you will steward cutting-edge Scania V8 500S/650S tractor units pulling high-cube Schmitz multi-temperature reefer trailers. Your primary freight corridors originate at the Port of Rotterdam Maasvlakte deep-sea terminals, connecting time-critical cold chain pharmaceutical, dry cargo, and consolidated air cargo lines straight to distribution centers throughout Germany (Ruhr Valley, Osnabrück, Hamburg), Denmark (Padborg, Taastrup), and Sweden (Malmö, Jönköping).
                  </p>
                  {/* 4 Key Structural Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    {/* Card 1 */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-[24px]">rv_hookup</span>
                        <h4>Fleet &amp; Engine Telemetry</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Scania V8 500S/650S Euro VI engines with Opticruise automatic shift, predictive terrain-reading cruise control, active lane assist, and live fuel consumption dashboards with Trimble CarCube integration.
                      </p>
                      <div className="mt-auto pt-2 flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Euro VI Step E Certified
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-space-xs text-secondary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-[24px]">thermostat</span>
                        <h4>Multi-Temp GDP Monitoring</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Thermo King SLXi / Carrier Vector dual-zone refrigeration with -25°C to +25°C continuous thermograph data logging, cellular temperature alarms, and integrated cab temperature display.
                      </p>
                      <div className="mt-auto pt-2 flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Pharma GDP Compliance
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-space-xs text-tertiary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-[24px]">lock</span>
                        <h4>High-Security Cargo &amp; TAPA TSR-1</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Armored box reefer trailers equipped with remote electronic slam-locks, geofenced corridor route tracking, and strict zero-unauthorized-stop protocols along European highways.
                      </p>
                      <div className="mt-auto pt-2 flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> TAPA Level 1 Compliant
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-space-xs text-primary-container font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-[24px]">directions_boat</span>
                        <h4>Cross-Border RoRo Logistics</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Seamless pre-booked ferry connections (Vlaardingen / Hoek van Holland to Gothenburg / Immingham) with dedicated tractor boarding, electric shore-power plug-in, and driver staterooms.
                      </p>
                      <div className="mt-auto pt-2 flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Shore Power Assured
                      </div>
                    </div>
                  </div>
                  {/* Red Warning Directive Box */}
                  <div className="mt-space-sm bg-error-container text-on-error-container p-space-md rounded-xl flex items-start gap-space-md shadow-sm">
                    <span className="material-symbols-outlined text-error text-[28px] shrink-0 mt-0.5">warning</span>
                    <div className="flex flex-col gap-1">
                      <span className="font-label-lg text-label-lg font-bold tracking-tight uppercase">
                        CRITICAL SAFETY &amp; COMPLIANCE DIRECTIVE: ZERO COLD-CHAIN BREAK &amp; STRICT TACHOGRAPH GOVERNANCE
                      </span>
                      <p className="font-body-sm text-body-sm">
                        Strict compliance with EU Regulation (EC) 561/2006 (maximum 9 hours daily driving extendable to 10h twice weekly; mandatory 45-hour uninterrupted weekly rest strictly housed in pre-arranged quality hotel accommodations — sleeping in the cab during regular weekly rest is rigorously prohibited and legally penalized). Tampering with Gen-2 smart tachograph seals or temperature thermographs results in immediate dismissal.
                      </p>
                    </div>
                  </div>
                </article>

                {/* SECTION 02: Transit Sequence & Dispatch Flow */}
                <article className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">02</span>
                      <div>
                        <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Transit Sequence &amp; Operational Protocol</h3>
                        <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Rotterdam Maasvlakte to Malmö Distribution Axis</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[15px]">schedule</span> Standard 24h Rotation
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-md pt-space-xs">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-space-sm py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">STEP 01</span>
                        <span className="font-label-md text-label-md font-bold text-on-surface">05:00 – 06:30</span>
                        <span className="text-tertiary font-label-sm text-label-sm">Terminal Prep</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          Pre-Trip Rig Audit, Digital Tachograph Card Insertion &amp; Reefer Pre-Cooling
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Perform visual walk-around inspection, automated pneumatic tire telemetry sync, and check Thermo King set-point (-20°C for frozen pharma or +4°C for chilled biologics). Insert driver digital card into Smart Tacho Gen 2 and verify electronic seal numbers on e-CMR manifest.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">Tire TPMS Check</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">Seal Integrity #78891</span>
                        </div>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-space-sm py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-bold">STEP 02</span>
                        <span className="font-label-md text-label-md font-bold text-on-surface">06:30 – 11:00</span>
                        <span className="text-tertiary font-label-sm text-label-sm">German Transit</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          Rotterdam to Osnabrück Transit Leg (Federal Highway A1 / A30)
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Initial 320 km transit across the Dutch-German border at Hengelo/Bad Bentheim. Automated Toll Collect (EETS onboard unit) logging, adherence to predictive Scania Opticruise 85 km/h eco-speed corridor, and live real-time Trimble telemetry reporting to central Freja dispatch.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">Toll Collect Active</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">4.5h Drive Clock</span>
                        </div>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-space-sm py-0.5 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm font-bold">STEP 03</span>
                        <span className="font-label-md text-label-md font-bold text-on-surface">11:00 – 11:45</span>
                        <span className="text-tertiary font-label-sm text-label-sm">Mandatory Rest</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          Mandatory 45-Minute Rest Cycle &amp; Telematics Temperature Sync
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Park at pre-booked TAPA-certified secure truck stop (Autohof Osnabrück). Physical check of diesel fuel levels for reefer auxiliary engine, visual scan of physical tamper seals, and direct wireless upload of thermograph telemetry packet to DHL Quality Assurance control room.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">Autohof Secure Park</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">GDP Log Uploaded</span>
                        </div>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-space-sm py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-bold">STEP 04</span>
                        <span className="font-label-md text-label-md font-bold text-on-surface">11:45 – 16:15</span>
                        <span className="text-tertiary font-label-sm text-label-sm">Danish Frontier</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          Osnabrück to Hamburg / Padborg Corridor
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Continuation along Autobahn A1 traversing the Elbe Tunnel corridor into Schleswig-Holstein. Cross Danish frontier at Frøslev/Padborg with automated pre-notified customs e-declaration clearing through Scandinavia line haul.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">Padborg Entry Verified</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">Border Green Channel</span>
                        </div>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="flex flex-col md:flex-row gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-space-sm py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">STEP 05</span>
                        <span className="font-label-md text-label-md font-bold text-on-surface">16:15 – 18:00</span>
                        <span className="text-tertiary font-label-sm text-label-sm">Final Handover</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          Nordic Hub Handover, Reefer Data Download &amp; Driver Hotel Check-In
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Arrival at Freja Logistics Terminal (Padborg / Taastrup). Driver performs dock positioning, connects shore electric cable, executes electronic proof-of-delivery (e-CMR signoff), and is chauffeured to the partner 4-star hotel for mandatory rest recovery.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">e-CMR Completed</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-semibold">Scandic Hotel Booking #4920</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* SECTION 03: Vocational Qualifications & Commercial License Equivalence */}
                <article className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">03</span>
                      <div>
                        <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Vocational Licenses &amp; International Equivalency</h3>
                        <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Multi-Jurisdictional Professional Driver Standard</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[15px]">verified</span> Mutual Recognition
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {/* German / DACH */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">DACH &amp; Germany</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-bold">Führerschein CE</span>
                      </div>
                      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>Klasse CE:</strong> Heavy tractor-trailer combinations (&gt;3,500 kg + trailer &gt;750 kg).</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>Schlüsselzahl 95 (FQN):</strong> Professional qualification card valid &gt; 12 months.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>Fahrerkarte:</strong> Valid German Smart Tachograph Gen 2 digital card.</span>
                        </li>
                      </ul>
                    </div>
                    {/* United Kingdom & Ireland */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">United Kingdom &amp; IRE</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-bold">HGV Class 1</span>
                      </div>
                      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>UK Category C+E:</strong> Full articulated vehicle commercial license.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>Driver CPC (DQC):</strong> Full 35 hours periodic driver CPC endorsement.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>Clean DVLA / DVA Record:</strong> Maximum 3 minor points; zero endorsements for tachograph fraud.</span>
                        </li>
                      </ul>
                    </div>
                    {/* US & Canada */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">United States &amp; CAN</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-bold">Class A CDL</span>
                      </div>
                      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>CDL Class A:</strong> Articulated tractor-trailer with Air Brakes endorsement.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>DOT Medical Card:</strong> Active medical examiner certificate (sponsorable for EU conversion).</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>FMCSA Clearinghouse:</strong> Verified clean alcohol and drug query status.</span>
                        </li>
                      </ul>
                    </div>
                    {/* European Union & Nordic */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">European Union &amp; Nordic</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-bold">EU Cat CE + Code 95</span>
                      </div>
                      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>EU Category CE:</strong> Standardized European heavy combination license.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>Nordic Winter Certificate:</strong> Chain fitting &amp; icy conditions training (Freja sponsored).</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-1">check_circle</span>
                          <span><strong>ADR Basic Certification:</strong> Packaged hazardous goods qualification (preferred).</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Mandatory Driver Profile Checklist */}
                  <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs mt-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-on-surface">Mandatory Minimum Prerequisites</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-on-surface-variant font-body-sm text-body-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <span>Minimum 2+ Years Heavy CE Line-Haul</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <span>Clean Driver Tachograph History</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <span>Working English or German Proficiency</span>
                      </div>
                    </div>
                  </div>
                </article>

                {/* SECTION 04: Compensation, Allowances & Collective Labor Agreement */}
                <article className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">04</span>
                      <div>
                        <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Compensation, Allowances &amp; Dutch CAO Tariff</h3>
                        <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Collective Labor Agreement Beroepsgoederenvervoer Tier 6</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-primary/15 text-primary font-label-sm text-label-sm font-bold">
                      <span className="material-symbols-outlined text-[15px]">payments</span> Direct Employment Contract
                    </span>
                  </div>
                  {/* Highlight Compensation Block */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div>
                      <span className="text-tertiary font-label-sm text-label-sm uppercase tracking-wider font-bold">Monthly Gross Base Salary</span>
                      <div className="font-headline-lg text-headline-lg font-bold text-on-surface">€4,500 – €6,160 <span className="font-body-md text-body-md text-on-surface-variant font-normal">/ month</span></div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Based on standard 40h regular contract + scheduled overtime at 130% / weekend standby at 150%.</p>
                    </div>
                    <div className="shrink-0 flex flex-col gap-1 md:text-right">
                      <span className="text-tertiary font-label-sm text-label-sm uppercase tracking-wider font-bold">Annual Target Package</span>
                      <span className="font-headline-md text-headline-md font-bold text-primary">€54,000 – €74,000</span>
                      <span className="text-tertiary font-label-sm text-label-sm">+ Performance &amp; Eco Bonus Up to €3,500</span>
                    </div>
                  </div>
                  {/* Benefits 4-Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-[20px]">local_atm</span>
                        <h4>Tax-Free Daily Per Diem</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        €45 to €65 per day tax-free out-of-pocket allowance according to Dutch and German tax treaties for nights spent on road and cross-border haulage duties.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-secondary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-[20px]">airline_seat_recline_extra</span>
                        <h4>Dedicated Scania V8 Rig</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        No hot-seating on core 3/1 rotation. Your allocated tractor includes factory microwave, dual-inverter parking air conditioner, leather seats, and high-density orthopedic mattress.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-tertiary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-[20px]">beach_access</span>
                        <h4>30 Days Paid Vacation &amp; Pension</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full mandatory pension fund enrollment (Pensioenfonds Vervoer), 8% annual holiday pay bonus, and comprehensive EU health coverage for you and direct dependents.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
                        <h4>Hotel Rest &amp; Rotation Flights</h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Freja &amp; DHL manage and pay for all 45h weekend hotel stays during rotation legs, along with sponsored return flights or shuttle connections back to your home country terminal.
                      </p>
                    </div>
                  </div>
                </article>

                {/* SECTION 05: Selection & Dispatch Induction Process */}
                <article className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">05</span>
                      <div>
                        <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Structured 3-Stage Selection Process</h3>
                        <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">From Digital Screening to European Fleet Keys</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[15px]">timer</span> Average: 6 Business Days
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center">1</span>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Tachograph &amp; License Verification</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Upload your CE license and previous 28-day digital tachograph logs. Compliance officers audit rest-break fidelity and clean driving records within 24-48 hours.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
                      <span className="w-7 h-7 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-bold flex items-center justify-center">2</span>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Maneuvering &amp; Telematics Practical</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Half-day practical evaluation at our Rotterdam Maasvlakte Driver Academy: docking tight refrigerated bays, blind-side reversing, and Trimble CarCube simulator drills.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
                      <span className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary font-label-md text-label-md font-bold flex items-center justify-center">3</span>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Corridor Briefing &amp; Fleet Handover</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Paid 3-day orientation covering cross-border customs paperwork, GDP reefer temperature calibration, fuel-saving eco-coaching, and receipt of dedicated Scania V8 tractor keys.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* RIGHT COLUMN: Application Fast-Track Form & Telemetry Hub (4 Columns) */}
              <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
                {/* FAST-TRACK APPLICATION FORM CARD */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-md flex flex-col gap-space-md" id="apply-card">
                  <div className="flex items-center gap-space-xs">
                    <span className="p-2 rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
                    </span>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Apply for Senior CE Driver Position</h3>
                      <p className="font-label-sm text-label-sm text-tertiary">Direct Carrier Dispatch Desk</p>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Submit your credentials directly to the DHL Global &amp; Freja JV dispatch division. Expedited compliance verification completed within 24 business hours.
                  </p>
                  <form className="flex flex-col gap-space-sm" onSubmit={(e) => { e.preventDefault(); alert("Application received. A DHL-Freja fleet coordinator will review your tachograph file and contact you via WhatsApp."); }}>
                    {/* Full Legal Name */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="driver-name">Full Legal Name</label>
                      <input
                        className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-colors"
                        id="driver-name"
                        placeholder="e.g. Erik Van Den Berg"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    {/* Email Address */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="driver-email">Email Address</label>
                      <input
                        className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-colors"
                        id="driver-email"
                        placeholder="erik.haulage@logistics.nl"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    {/* Mobile Phone with WhatsApp */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="driver-phone">Mobile / WhatsApp Number</label>
                      <div className="flex gap-2">
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-colors"
                          id="driver-phone"
                          placeholder="+31 6 1234 5678"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    {/* Experience Tier & Primary License Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="exp-tier">Experience Tier</label>
                        <select
                          className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container transition-colors"
                          id="exp-tier"
                          value={formData.expTier}
                          onChange={(e) => setFormData({ ...formData, expTier: e.target.value })}
                        >
                          <option>2 – 5 Years CE</option>
                          <option>5 – 10 Years CE</option>
                          <option>10+ Years Senior</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="license-type">License Type</label>
                        <select
                          className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container transition-colors"
                          id="license-type"
                          value={formData.licenseType}
                          onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                        >
                          <option>EU Cat CE (Code 95)</option>
                          <option>UK HGV Class 1 (CPC)</option>
                          <option>US / CAN CDL Class A</option>
                        </select>
                      </div>
                    </div>
                    {/* Document Upload Box */}
                    <div className="flex flex-col gap-1 pt-1">
                      <label className="font-label-md text-label-md font-bold text-on-surface">Upload Driver CV or Tachograph Scan</label>
                      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col items-center justify-center gap-1 text-center cursor-pointer hover:bg-surface-container transition-colors">
                        <span className="material-symbols-outlined text-primary text-[28px]">upload_file</span>
                        <span className="font-label-md text-label-md font-bold text-on-surface">Drop PDF, JPG or DDD File Here</span>
                        <span className="font-label-sm text-label-sm text-tertiary">Max file size 15MB (e-Tacho, Driver Card, or CV)</span>
                      </div>
                    </div>
                    {/* Agreement Checkbox */}
                    <div className="flex items-start gap-2 pt-space-xs">
                      <input
                        className="w-4 h-4 rounded text-primary mt-1 focus:ring-0"
                        id="eu-permit"
                        required
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      />
                      <label className="font-body-sm text-body-sm text-on-surface-variant leading-tight" htmlFor="eu-permit">
                        I hold a valid commercial driving license and certify that my Smart Tachograph history reflects zero severe violations.
                      </label>
                    </div>
                    {/* Submit CTA Button */}
                    <button className="w-full mt-space-xs py-3 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer" type="submit">
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Submit Certified Driver Application
                    </button>
                    {/* Trust Meta */}
                    <div className="flex items-center justify-center gap-2 pt-1 text-tertiary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">lock</span>
                      <span>GDPR Compliant • Data Encrypted via ISO 27001 Protocol</span>
                    </div>
                  </form>
                </div>
                {/* QUOTE CARD: Fleet Operations Director */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <img className="w-12 h-12 rounded-full object-cover shrink-0" alt="Lars Lindholm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVYBlLIzEnaJBSVvWnaz_UivoJGDnxkqFOJ-73i3zPPBdNa88gyATq-2B09DhO4sZ3G_s_PyAVWAAveoLz4NLiOp_6tFGwcsJmYSrAr_iRZYtTAo8uybrCAcDP257dqv6aj9vHXeToPESVD03YBY7LtP0BHXj04GrsFpMdFW08Nenr3K7-cPJLEolhRtPlblqmbhfpWteLi47cmkHGZ4TItC_Dn0JifxgapPJtrUUfLclF5ejtuv5NIQ"/>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">Lars Lindholm</span>
                      <span className="font-label-sm text-label-sm text-tertiary">Fleet Operations Director, Freja &amp; DHL JV</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                    &quot;Precision and temperature fidelity are everything when moving high-value cold chain freight across Europe. We equip our drivers with the newest Scania V8 rigs and respect their mandatory rest times unconditionally.&quot;
                  </p>
                </div>
                {/* CORRIDOR TECHNICAL PARAMETERS & MAP SNIPPET */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Corridor Technical Parameters</h4>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold">LANE #07</span>
                  </div>
                  <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="text-tertiary">Corridor Length</span>
                      <span className="font-bold text-on-surface">1,420 km (Rotterdam to Malmö)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="text-tertiary">Average Payload</span>
                      <span className="font-bold text-on-surface">24.5 Tonnes (Multi-Temp)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="text-tertiary">Equipment Assigned</span>
                      <span className="font-bold text-on-surface">Scania 500S V8 + Schmitz Reefer</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="text-tertiary">Refrigeration Window</span>
                      <span className="font-bold text-primary">-20°C to +4°C (Continuous GDP)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="text-tertiary">Telematics Suite</span>
                      <span className="font-bold text-on-surface">Trimble CarCube + BlueBox</span>
                    </div>
                  </div>
                  {/* Interactive Location Map Box */}
                  <div className="pt-space-xs flex flex-col gap-1.5">
                    <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">Key Dispatch Hub</span>
                    <div className="w-full h-40 bg-cover bg-center rounded-xl overflow-hidden relative shadow-inner" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYXkp-8sk5_sxNVdhQIx6uZDJVF0uLb1dcVvmz-mNQl9RPDHvc8OYCX9pbK-rdazoWak2FHfBQZmEZIA_mJoGU4rbm2naIqdVgfshvM-ATZspaD33LxCD0LFpSfhATHUYmaW_SqnjPpFFTCAl_a-8k36enY8t4W7ulV3VwNC5t4EZadH9jPwyd07aJ1oidW677iQmH_7kcDAM1LfN0PbBDkV1xHaQYkSKqLhanBAtlhHG_JshiwC_o_g')" }}>
                      <div className="absolute inset-0 bg-secondary/20 backdrop-blur-[1px]"></div>
                      <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[18px]">pin_drop</span>
                          <span className="font-label-sm text-label-sm font-bold text-on-surface">Rotterdam Maasvlakte Gate 3</span>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold">Live GPS</span>
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
