"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorHvacTechnicianJobPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "5-10",
    qualification: "meister",
    sponsorship: false,
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
          {/* Top Operational Breadcrumb & Context Header */}
          <section className="w-full bg-surface-container-lowest border-b border-surface-container-high py-space-md">
            <div className="w-full px-margin flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <Link
                    className="hover:text-primary transition-colors flex items-center gap-1"
                    href="/"
                  >
                    <span className="material-symbols-outlined text-[16px]">home</span> Home
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
                    href="/categories/trades-and-construction/plumbing-and-hvac"
                  >
                    Plumbing &amp; HVAC
                  </Link>
                  <span>/</span>
                  <span className="text-on-surface font-label-md">
                    Full Technical Instructions &amp; Operational Handbook
                  </span>
                </div>
                <div className="flex items-center gap-space-sm font-label-sm">
                  <span className="px-space-sm py-1 bg-surface-container-high text-on-surface-variant rounded-full tracking-wider">
                    ROLE ID: JOB-CRHV-FRA-4912
                  </span>
                  <span className="flex items-center gap-1 text-primary font-bold">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                    ACTIVE RECRUITMENT GATEWAY
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg pt-space-xs">
                <div className="space-y-space-xs">
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        verified
                      </span>
                      Carrier Commercial HVAC &amp; Refrigeration
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">handshake</span>
                      IG Metall Industry Agreement
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                      Tier-3 Mission-Critical Facility • Fast-Track Certified Mobilization
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
                    Senior Commercial Chiller &amp; Industrial HVAC Lead Technician
                  </h1>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-space-lg text-body-sm text-on-surface-variant pt-1">
                    <span className="flex items-center gap-1 text-on-surface font-label-lg font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        pin_drop
                      </span>
                      Frankfurt am Main, Germany (On-Site • Hyperscale Data Center Campus)
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        schedule
                      </span>
                      Full-Time (38.5 hrs/week • German Collective Agreement)
                    </span>
                    <span className="flex items-center gap-1 text-primary font-label-lg font-semibold">
                      <span className="material-symbols-outlined text-[18px]">payments</span>
                      €68,000 – €88,000 / year (+ Shift Differentials &amp; On-Call Hazmat Allowances)
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm self-start lg:self-center">
                  <button
                    className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-md hover:shadow-lg font-semibold cursor-pointer"
                    onClick={() => {
                      document
                        .getElementById("application-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="material-symbols-outlined text-[20px]">bolt</span>
                    <span>Fast-Track Certified Application</span>
                  </button>
                  <Link
                    className="inline-flex items-center justify-center gap-1 px-space-md py-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg transition-colors border border-surface-container-highest"
                    href="/categories/trades-and-construction/plumbing-and-hvac"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    <span>Back to Overview</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Hero Plant & Environmental Cooling Facility Banner */}
          <section className="w-full px-margin py-space-lg">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-inverse-surface">
              <div
                className="bg-cover bg-center w-full min-h-[380px] lg:min-h-[440px] flex flex-col justify-end p-space-lg lg:p-space-xl relative"
                data-alt="A cutting-edge industrial hyperscale data center central cooling plant showing insulated heavy chiller piping, digital telemetry pressure gauges, Ammonia CO2 cascade manifold systems, and a professional HVAC lead technician inspecting flow meters in safety gear."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCswMNzzycd_M1yAQRy7j5kOtP1J-a1SSb2m5v9oZfe9wF2j4hnpVbfk5TCX5s3j8zFcHPtc1uzaYCrmVjGz18rcMytqGIBO0YS-smOxtz3sLmX5UwoE4X0bkYH7cp6a9myCl5GW6jZbYGhph3zm3RTcBYpY9m1FHqGTuyMZyRWxCCDcYzYXaDInGSLvfzaM9B9PjSDKivLTYumTL0eba7ZyJV9_oF0uqlSQ9-zSQgjEyLHlXsBu0phdg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/85 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-md max-w-5xl">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="px-3 py-1 rounded bg-primary/90 text-on-primary font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-md font-bold">
                      TIER-3 HYPERSCALE DATA CENTER &amp; AMMONIA (NH3) / CO2 CENTRAL CHILLER PLANT
                    </span>
                    <span className="px-3 py-1 rounded bg-secondary/80 text-on-secondary font-label-sm text-label-sm backdrop-blur-md font-semibold">
                      Hall 4: Low-GWP Centrifugal &amp; District Hydronics Loop
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface font-bold">
                    Frankfurt Metro Data Center Campus 02 – Critical Thermal Management &amp;
                    Chilled Water Loop Infrastructure
                  </h2>
                  <p className="font-body-md text-body-md text-surface-container-highest max-w-4xl">
                    <strong className="text-on-tertiary">Core equipment:</strong> Carrier 19DV
                    AquaEdge Water-Cooled Centrifugal Chillers (Ceramic Bearing, Low-GWP
                    R-1233zd(E)), Bitzer Ammonia/CO2 Subcritical Cascade Screw Compressors, Baltimore
                    Aircoil Cooling Towers, Trane Tracer SC+ &amp; Siemens Desigo CC BMS.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-sm pt-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-inverse-on-surface font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        verified
                      </span>
                      <span>99.999% Thermal Availability SLA</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-inverse-on-surface font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        thermostat
                      </span>
                      <span>F-Gas Cat 1 &amp; DIN EN 378 Certified Criteria</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-inverse-on-surface font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        shield_with_heart
                      </span>
                      <span>Zero-Leakage EPA &amp; ChemKlimaschutzV Protocol</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Document Strip */}
              <div className="w-full bg-inverse-surface/95 px-space-lg py-space-sm flex flex-col md:flex-row items-center justify-between gap-space-sm text-inverse-on-surface border-t border-surface-container-highest/10">
                <div className="flex items-center gap-2 font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                    menu_book
                  </span>
                  <span className="text-surface-container-highest">
                    OFFICIAL STANDARD OPERATING PROCEDURE (SOP) &amp; PLANT SPECIFICATION:
                  </span>
                  <span className="font-mono text-primary-fixed font-bold">
                    SOP-HVAC-CHILLER-DE-2025-V4
                  </span>
                </div>
                <div className="flex items-center gap-space-xs font-label-sm">
                  <button
                    className="px-3 py-1 rounded bg-surface-container-highest/20 hover:bg-surface-container-highest/30 text-surface-container-lowest flex items-center gap-1 transition-colors cursor-pointer"
                    onClick={() => window.print()}
                  >
                    <span className="material-symbols-outlined text-[16px]">print</span>
                    <span>Print SOP</span>
                  </button>
                  <button
                    className="px-3 py-1 rounded bg-surface-container-highest/20 hover:bg-surface-container-highest/30 text-surface-container-lowest flex items-center gap-1 transition-colors cursor-pointer"
                    onClick={() =>
                      alert("Official SOP Document Download: SOP-HVAC-CHILLER-DE-2025-V4")
                    }
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>PDF Copy</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Technical Spec Grid */}
          <section className="w-full px-margin pb-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* Left Column: Detailed Technical Manual Sections (~68%) */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* SECTION 01: Complete Role Overview */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        SECTION 01
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        1. Complete Role Overview &amp; Central Plant Thermodynamic Context
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      hvac
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The Frankfurt Metro DC-02 central energy plant is Germany&apos;s premier
                    hyperscale data center thermal management infrastructure, supplying continuous
                    chilled water loops to critical enterprise server halls. The Lead Technician is
                    directly responsible for uninterrupted thermodynamic stability, precision
                    chiller overhaul, refrigerant leak containment under strict European
                    regulations, and proactive predictive telemetry.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined text-[20px]">cyclone</span>
                        <h4 className="font-label-lg text-label-lg text-on-surface">
                          Thermodynamic &amp; Refrigeration Systems
                        </h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Water-cooled centrifugal chillers with magnetic/ceramic oil-free bearings,
                        dual-stage economizers, dry coolers, and adiabatic free-cooling heat
                        exchangers.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined text-[20px]">science</span>
                        <h4 className="font-label-lg text-label-lg text-on-surface">
                          Refrigerant Chemistry &amp; Containment
                        </h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        R-1233zd(E) ultra-low GWP, R-134a, R-513A transition loops, and
                        high-pressure subcritical CO2 (R-744) &amp; Ammonia (R-717) industrial
                        cascade systems.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined text-[20px]">gavel</span>
                        <h4 className="font-label-lg text-label-lg text-on-surface">
                          Compliance &amp; Plant Standards
                        </h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        DIN EN 378 (Refrigeration systems safety), VDI 2047-2 (Evaporative cooling
                        hygiene/Legionella), VDI 6022 (Air quality), F-Gas Regulation (EU)
                        2024/573, and ChemKlimaschutzV.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs border border-surface-container-high">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined text-[20px]">domain</span>
                        <h4 className="font-label-lg text-label-lg text-on-surface">
                          Mission-Critical Operating Environment
                        </h4>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Tier-3 fault-tolerant continuous uptime facility, 2N redundancy electrical
                        switchgear, acoustic sound attenuated compressor chambers, and dedicated
                        cleanroom air handling units (CRAH).
                      </p>
                    </div>
                  </div>
                  <div className="p-space-md rounded-lg bg-primary-fixed/20 text-on-primary-fixed-variant flex items-start gap-space-sm border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">
                      warning
                    </span>
                    <div className="space-y-1">
                      <h5 className="font-label-lg text-label-lg text-on-surface font-bold">
                        Critical Refrigerant Containment Directive
                      </h5>
                      <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                        Zero-tolerance threshold for halogenated and natural refrigerant release.
                        Monthly certified ultrasonic leak detection logs and automated infrared
                        refrigerant gas telemetry (Inficon/Bacharach sensors) must be validated in
                        accordance with EU F-Gas registers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SECTION 02: Daily HVAC Responsibilities & Operational Directives */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        SECTION 02
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        2. Detailed Daily HVAC Responsibilities &amp; Operational Directives
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      construction
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-md">
                    {/* Step 1 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start gap-space-md border border-surface-container-high">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-lg shrink-0 font-bold">
                        1
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                            Chilled Water Plant Telemetry &amp; Thermodynamic Loop Balancing
                          </h4>
                          <span className="font-mono text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded font-medium">
                            DIN EN 14336 / ASHRAE 90.4
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Monitor delta-T (7°C supply / 12°C return), variable primary pump frequency
                          modulation, and ultrasonic flow metering. Ensure hydraulic loop equilibrium
                          across multi-megawatt IT cooling modules under fluctuating server load
                          conditions.
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start gap-space-md border border-surface-container-high">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-lg shrink-0 font-bold">
                        2
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                            Centrifugal Compressor Teardown, Ceramic Bearings &amp; Motor Overhaul
                          </h4>
                          <span className="font-mono text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded font-medium">
                            OEM Carrier / York Tier-4
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Execute teardown, clearance verification with dial indicators, internal
                          vane actuator calibration, and oil-free magnetic levitation bearing
                          diagnostic inspections during programmed maintenance shut-down cycles.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start gap-space-md border border-surface-container-high">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-lg shrink-0 font-bold">
                        3
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                            Subcritical CO2 &amp; Ammonia Cascade Rig Diagnostic Profiling
                          </h4>
                          <span className="font-mono text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded font-medium">
                            DIN EN 378 / BGR 500
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Inspect high-pressure relief valves, trans-critical gas coolers, oil
                          separators, and automated emergency ammonia vapor scrubbing mechanisms.
                          Supervise annual pressure vessel recertification with TÜV Rheinland /
                          Hessen.
                        </p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start gap-space-md border border-surface-container-high">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-lg shrink-0 font-bold">
                        4
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                            BMS Controls Integration, BACnet IP &amp; Automated PID Tuning
                          </h4>
                          <span className="font-mono text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded font-medium">
                            Siemens Desigo / Trane Tracer
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Interface with central facility management via BACnet IP/Modbus, tune PID
                          heating/cooling control loops, and optimize predictive chiller sequencing
                          logic to maintain PUE (Power Usage Effectiveness) targets below 1.15.
                        </p>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start gap-space-md border border-surface-container-high">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-lg shrink-0 font-bold">
                        5
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                            Water Treatment, Glycol Loop Quality &amp; Legionella Testing
                          </h4>
                          <span className="font-mono text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded font-medium">
                            VDI 2047 Blatt 2
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Perform bi-weekly chemical dosing analysis, conductivity testing, biocidal
                          treatment of cooling towers, and closed-loop inhibited propylene glycol
                          refractometer titration to prevent biological fouling and system corrosion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 03: Technical Qualifications & Vocational Credential Equivalence */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        SECTION 03
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        3. Technical Qualifications &amp; Vocational Credential Equivalence
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      workspace_premium
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Cross-Border Vocational Equivalency Matrix: Candidates holding verified
                    credentials under European or international HVAC registries are eligible for
                    fast-track recognition.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md rounded-lg bg-surface-container-low border-l-4 border-primary flex flex-col gap-1">
                      <div className="font-label-lg text-label-lg text-on-surface font-bold">
                        Meister / Anlagenmechaniker SHK (Germany &amp; DACH)
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Dual vocational qualification in sanitary, heating, and air conditioning with
                        registered Meisterbrief or Gesellenbrief and VDI 6022 certification.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low border-l-4 border-primary flex flex-col gap-1">
                      <div className="font-label-lg text-label-lg text-on-surface font-bold">
                        F-Gas Category 1 (EU 517/2014 &amp; 2024/573)
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Full EU certification for leak testing, gas recovery, installation,
                        commissioning, and maintenance of all stationary refrigeration circuits
                        without charge limit.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low border-l-4 border-secondary flex flex-col gap-1">
                      <div className="font-label-lg text-label-lg text-on-surface font-bold">
                        EPA Section 608 Universal (USA/Canada)
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Federal Universal certification for low-pressure (Type III centrifugal) and
                        high-pressure commercial refrigeration systems with equivalent EU transfer
                        eligibility.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low border-l-4 border-secondary flex flex-col gap-1">
                      <div className="font-label-lg text-label-lg text-on-surface font-bold">
                        BOGK / Medical Gas &amp; Cryogenic Safety (NFPA 99 / HTM 02-01)
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        High-purity brazed refrigeration joint certification (DIN EN ISO 13585) and
                        specialized pressure equipment directive (PED 2014/68/EU).
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-high/60 rounded-lg p-space-md space-y-space-sm border border-surface-container-high">
                    <h4 className="font-label-lg text-label-lg text-on-surface flex items-center gap-2 font-bold">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        architecture
                      </span>
                      <span>Blueprint, Schematics &amp; Technical Literacy Criteria</span>
                    </h4>
                    <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>
                          Fluency in complex P&amp;ID engineering schematics, psychrometric Mollier
                          charts, and electrical control ladder logic diagrams.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>
                          Proven expertise in ultrasonic leak detection, digital manifold gauges
                          (Testo 557s / Fieldpiece), and oil acid test kits.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>
                          Minimum 4 years verifiable experience leading large commercial chiller plants
                          or industrial cold chain facilities.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* SECTION 04: Compensation, Allowances & Collective Agreement */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        SECTION 04
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        4. Complete Compensation, Allowances &amp; German Collective Agreement (IG
                        Metall / Tariff)
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      account_balance_wallet
                    </span>
                  </div>
                  {/* Salary Hero Card */}
                  <div className="p-space-lg rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md border border-surface-container-high">
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                        Base Salary Band
                      </div>
                      <div className="font-headline-lg text-headline-lg text-on-surface font-bold">
                        €5,660 – €7,330{" "}
                        <span className="font-body-md text-body-md font-normal text-on-surface-variant">
                          / month
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary font-label-lg mt-1">
                        Guaranteed under German IG Metall / Technical Crafts Collective Bargaining
                        Agreement (Tarifvertrag)
                      </p>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm flex items-center gap-2 shrink-0 font-semibold">
                      <span className="material-symbols-outlined text-[18px]">add_circle</span>
                      <span>+25% Night / +50% Sunday &amp; Hazmat On-Call Premium</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md rounded-lg bg-surface-container-low space-y-1 border border-surface-container-high">
                      <div className="flex items-center gap-2 text-primary font-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">
                          flight_takeoff
                        </span>
                        <span>€4,000 Relocation &amp; Housing Assistance</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Full flight and moving reimbursement, 45 days furnished serviced apartment
                        in Frankfurt / Rhein-Main metropolitan area.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low space-y-1 border border-surface-container-high">
                      <div className="flex items-center gap-2 text-primary font-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">handyman</span>
                        <span>€1,200 High-Tech Tool &amp; PPE Package</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Personal digital manifold set (Testo 557s with vacuum probes), arc-flash
                        PPE, and safety footwear allowance.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low space-y-1 border border-surface-container-high">
                      <div className="flex items-center gap-2 text-primary font-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">beach_access</span>
                        <span>30 Days Paid Vacation &amp; Pension</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Statutory German vacation pay, employer-funded bAV company pension scheme
                        with 100% matching.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low space-y-1 border border-surface-container-high">
                      <div className="flex items-center gap-2 text-primary font-label-lg font-bold">
                        <span className="material-symbols-outlined text-[20px]">school</span>
                        <span>Carrier University &amp; VDI Recertification</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        100% employer-funded continuing education, chillers manufacturer master
                        certifications, and ammonia safety passports.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SECTION 05: Transparent 3-Step Selection & Facility Verification Process */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm border border-surface-container-highest flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                        SECTION 05
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        5. Transparent 3-Step Selection &amp; Facility Verification Process
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      route
                    </span>
                  </div>
                  <div className="relative flex flex-col gap-space-lg pl-4 border-l-2 border-surface-container-high">
                    {/* Step 1 */}
                    <div className="relative flex flex-col gap-1">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-surface-container-lowest"></div>
                      <div className="font-label-lg text-label-lg text-on-surface font-bold">
                        Step 1: Fast-Track Technical Credential Screening (24–48 Hours)
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Submission of F-Gas / Meister certificates and CV. Verified against German
                        DIHK vocational database.
                      </p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex flex-col gap-1">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-surface-container-lowest"></div>
                      <div className="font-label-lg text-label-lg text-on-surface font-bold">
                        Step 2: 30-Minute Technical Interview with Chief Plant Engineer (Video Call)
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Review of thermodynamic troubleshooting cases, psychrometric calculations,
                        and chiller safety protocols.
                      </p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex flex-col gap-1">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-primary-container border-4 border-surface-container-lowest"></div>
                      <div className="font-label-lg text-label-lg text-on-surface font-bold">
                        Step 3: On-Site Practical Walkthrough &amp; Assessment (Frankfurt Campus)
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Paid return travel to Frankfurt campus for central plant inspection,
                        diagnostic panel assessment, and direct contract signing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Application Form & Engineering Lead Card (~32%) */}
              <div className="lg:col-span-4 flex flex-col gap-space-lg sticky top-20">
                {/* Application Form Card */}
                <div
                  className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md border border-surface-container-highest flex flex-col gap-space-md"
                  id="application-form"
                >
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">bolt</span>
                      Fast-Track Priority Intake
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Fast-Track Certified Chiller Technician Application
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Response guaranteed within 48 hours directly by Frankfurt DC-02 engineering
                      leadership.
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
                        Thank you, {formData.fullName || "Markus"}. Your certification dossier has
                        been forwarded directly to Stefan Becker (Chief Plant Engineer, DC-02
                        Frankfurt).
                      </p>
                      <button
                        className="mt-4 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container"
                        onClick={() => setSubmitted(false)}
                      >
                        Submit Another Form
                      </button>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Full Legal Name
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:border-primary text-body-sm text-on-surface"
                          placeholder="e.g. Markus Lindemann"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Work Email Address
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:border-primary text-body-sm text-on-surface"
                          placeholder="name@domain.com"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Phone / WhatsApp (+49 or Int.)
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:border-primary text-body-sm text-on-surface"
                          placeholder="+49 170 1234567"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Commercial / Industrial Experience
                        </label>
                        <select
                          className="w-full h-11 px-3 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:border-primary text-body-sm text-on-surface cursor-pointer"
                          value={formData.experience}
                          onChange={(e) =>
                            setFormData({ ...formData, experience: e.target.value })
                          }
                        >
                          <option value="5-10">5 – 10 Years Large Chiller / Refrigeration</option>
                          <option value="10+">10+ Years Senior / Master Level</option>
                          <option value="3-5">3 – 5 Years Journeyman Level</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Primary Qualification Category
                        </label>
                        <select
                          className="w-full h-11 px-3 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:border-primary text-body-sm text-on-surface cursor-pointer"
                          value={formData.qualification}
                          onChange={(e) =>
                            setFormData({ ...formData, qualification: e.target.value })
                          }
                        >
                          <option value="meister">
                            Meister SHK / Kältetechnik (Germany / DACH)
                          </option>
                          <option value="fgas">F-Gas Category 1 (EU 2024/573)</option>
                          <option value="epa">EPA Section 608 Universal (USA/Canada)</option>
                          <option value="other">Other International Equivalent</option>
                        </select>
                      </div>
                      {/* Upload Dropzone */}
                      <div className="space-y-1">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Upload CV &amp; Technical Certifications
                        </label>
                        <div
                          className="p-space-md rounded-lg border-2 border-dashed border-outline-variant bg-surface hover:bg-surface-container-low transition-colors flex flex-col items-center justify-center text-center cursor-pointer"
                          onClick={() => alert("CV & Technical Certification uploader clicked")}
                        >
                          <span className="material-symbols-outlined text-[28px] text-primary">
                            cloud_upload
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold mt-1">
                            Click to attach or drag &amp; drop
                          </span>
                          <span className="font-body-sm text-body-sm text-outline text-[11px]">
                            PDF, DOCX, ZIP up to 25MB (Include F-Gas/Certificates)
                          </span>
                        </div>
                      </div>
                      {/* Sponsorship Checkbox */}
                      <div className="pt-1 flex items-start gap-2">
                        <input
                          checked={formData.sponsorship}
                          className="mt-1 h-4 w-4 rounded accent-primary cursor-pointer"
                          id="eu-permit"
                          type="checkbox"
                          onChange={(e) =>
                            setFormData({ ...formData, sponsorship: e.target.checked })
                          }
                        />
                        <label
                          className="font-body-sm text-body-sm text-on-surface-variant text-[13px] leading-tight cursor-pointer"
                          htmlFor="eu-permit"
                        >
                          I require German EU Blue Card work visa sponsorship (Carrier provides legal
                          relocation support)
                        </label>
                      </div>
                      <button
                        className="w-full mt-2 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-md flex items-center justify-center gap-2 font-semibold cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          assignment_turned_in
                        </span>
                        <span>Submit Certified Technician Application</span>
                      </button>
                      <div className="flex items-center justify-center gap-2 font-body-sm text-[12px] text-outline pt-1">
                        <span className="material-symbols-outlined text-[14px]">lock</span>
                        <span>GDPR Compliant • 256-Bit Encrypted Submission</span>
                      </div>
                    </form>
                  )}
                </div>

                {/* Technical Plant Engineering Lead Card */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-highest flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-14 h-14 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline-sm font-bold shrink-0">
                      SB
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                        Stefan Becker
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px] leading-tight">
                        Chief Plant Engineer &amp; Critical Infrastructure Director, DC-02 Frankfurt
                        Campus
                      </p>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low italic font-body-sm text-body-sm text-on-surface-variant relative pl-7 border border-surface-container-high">
                    <span className="material-symbols-outlined text-primary text-[20px] absolute left-1 top-2">
                      format_quote
                    </span>
                    &ldquo;We maintain 99.999% thermal uptime for Europe&apos;s largest hyperscale
                    data infrastructure. If you possess deep technical mastery of large-tonnage
                    centrifugal loops and take pride in zero-leakage precision, you will thrive in our
                    Frankfurt central plant.&rdquo;
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-label-sm text-outline border-t border-surface-container-high pt-space-sm">
                    <span className="flex items-center gap-1 text-primary font-semibold">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Typically replies in &lt; 24h
                    </span>
                    <span
                      className="text-on-surface font-semibold hover:text-primary cursor-pointer"
                      onClick={() =>
                        alert("Direct Engineering Line: +49 69 9002 4912 (DC-02 Operations)")
                      }
                    >
                      Direct Engineering Line
                    </span>
                  </div>
                  {/* Real-Time Telemetry Badge Box */}
                  <div className="bg-surface-container-high rounded-lg p-space-sm flex flex-col gap-1 font-mono text-[11px] text-on-surface-variant">
                    <div className="flex items-center justify-between">
                      <span>Plant Thermal Stability:</span>
                      <span className="text-primary font-bold">99.999% SLA</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Primary Chilled Water Supply:</span>
                      <span className="text-on-surface font-bold">7.2°C (±0.1°C)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Refrigerant Circuit Pressure:</span>
                      <span className="text-on-surface font-bold">6.8 bar Normal</span>
                    </div>
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
