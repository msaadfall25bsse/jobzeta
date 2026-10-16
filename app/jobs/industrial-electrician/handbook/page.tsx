"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JobInstructionsHandbookPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("Click to upload or drag files here");

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("DE");
  const [exp, setExp] = useState("3-5");
  const [tradeCert, setTradeCert] = useState("betr");
  const [euAuth, setEuAuth] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadStatus(e.target.files[0].name);
    } else {
      setUploadStatus("PDF, DOCX up to 25MB");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Top Navigation & Sticky Role Bar */}
          <section className="w-full bg-surface-container-lowest shadow-sm z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              {/* Breadcrumb & Back Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant"
                >
                  <Link className="hover:text-primary transition-colors" href="/">
                    Home
                  </Link>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <Link className="hover:text-primary transition-colors" href="/find-jobs">
                    Trades &amp; Construction
                  </Link>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <Link
                    className="text-secondary font-semibold hover:text-primary transition-colors"
                    href="/jobs/industrial-electrician"
                  >
                    Industrial Electrician &amp; Controls
                  </Link>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="text-primary font-bold">
                    Full Instructions &amp; Technical Handbook
                  </span>
                </nav>
                <Link
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-primary transition-colors font-semibold"
                  href="/jobs/industrial-electrician"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  Back to Job Overview &amp; Quick Apply
                </Link>
              </div>

              {/* Quick Snapshot Header Card */}
              <div className="bg-surface-container-low rounded-xl p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-surface-container-lowest p-2 shadow-sm flex items-center justify-center shrink-0">
                    <img
                      alt="Apex Automation & Power Solutions official verified partner mark"
                      className="w-full h-full object-contain"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1VremQOV3BPc1lkkLNuqo33iyB4rIDjrScrr0Qh6CUbBT7gUP7c18KkYjKbrbv_gQKYKaBnmIu_RI_ktvGJDR08TDsvzlDFu-Q_XjaIzBdBAkJCt6nB2v-JSOlOpI9DOtT-hx7FytNs62A7WMyEQYJkSu0BfKqAqhXqEGl6r60nuZOSs5nyeHcmDqHH8MBDHLQO0tYN280vpryE7wMvp5LG7fQCX_pbImzjdig3dA0wXlKpj7GGrgTUYwM9"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
                        Apex Automation &amp; Power Solutions
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                        Role ID: JOB-STUT-8842
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed-dim/30 text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Open for
                        Verification
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                      Industrial Electrician &amp; Controls Specialist
                    </h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        location_on
                      </span>
                      Stuttgart-Zuffenhausen Plant 4, Baden-Württemberg, Germany
                      <span className="text-outline-variant">•</span>
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        schedule
                      </span>{" "}
                      Full-time (38.5 hrs/week • IG Metall Framework)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:gap-6 self-start lg:self-auto border-t lg:border-t-0 pt-4 lg:pt-0 w-full lg:w-auto justify-between lg:justify-end">
                  <div className="text-left lg:text-right">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider block">
                      Standard Tariftreue Scale
                    </span>
                    <span className="font-headline-md text-headline-md text-primary font-bold">
                      €48,000 - €58,000
                      <span className="font-body-sm text-body-sm text-on-surface font-normal">
                        {" "}
                        / year
                      </span>
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary block font-medium">
                      + 13th Month &amp; Shift Bonuses
                    </span>
                  </div>
                  <a
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md transition-all shrink-0 cursor-pointer"
                    href="#application-form"
                  >
                    <span>Apply Now</span>
                    <span className="material-symbols-outlined ml-1.5 text-[18px]">bolt</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* High-Tech Plant Photo Banner & Spatial Anchors */}
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <div className="relative h-72 sm:h-96 lg:h-[420px] w-full">
                <img
                  alt="Automated manufacturing plant floor at Stuttgart Zuffenhausen with industrial robotic arms and Siemens SIMATIC control interfaces"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDamSGk4GqeA47p2-LMv1u0ZvrYAY-fE16-ItiPIp6a9ebTTM8THeRzSCL7A3F5QqaqgRwnYIHmZJ8RTHkNThq-Je0uzs_UUIpavT07w8KwDwoMAIwbZzjLlydK6TRKBja_ms9GT4mSRMnaDPhfKCFPCKxiPC1maDXWW8VI8qsgjwzwxXvg2OZcj01mOn7OAphq9yjkKEQDYmysuPCdx2T1PStPbAVeypco4l6JzjEjXtsjbT1HNj2dGA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Overlaid Facility Metric Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold">
                      Tier-1 Facility
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface font-medium">
                      DIN EN ISO 9001 &amp; 14001 Audited
                    </span>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-surface leading-snug font-bold">
                    Stuttgart-Zuffenhausen Plant 4 — High-Precision Automated Assembly &amp; Power
                    Generation Line
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Core equipment: Siemens S7-1500F Safety PLCs, 14 KUKA/Fanuc 6-axis robotic arms,
                    Beckhoff EtherCAT drives, and 400V 3-phase high-voltage power sub-assemblies.
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-3">
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg text-center">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold block">
                      99.84%
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Uptime Target
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg text-center">
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold block">
                      400V
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      HV Bus Rating
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg text-center">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                      SIL 3
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Safety Integration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Handbook Body & Specification Modules */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Primary Engineering Documentation */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                {/* Document Meta / Handbook Control Bar */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">menu_book</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider block">
                        Official Work Instruction Document
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Standard Operating Specification: SPEC-EL-2025-V4
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high flex items-center gap-1.5 transition-colors cursor-pointer"
                      onClick={() => {
                        if (typeof window !== "undefined") window.print();
                      }}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">print</span>
                      <span>Print Spec</span>
                    </button>
                    <a
                      className="px-3 py-1.5 rounded-lg bg-primary-fixed-dim/40 text-on-primary-fixed-variant font-label-md text-label-md font-semibold hover:bg-primary-fixed-dim/60 flex items-center gap-1.5 transition-colors cursor-pointer"
                      href="#application-form"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      <span>PDF Copy</span>
                    </a>
                  </div>
                </div>

                {/* 1. Complete Role Overview & Operating Context */}
                <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                      1
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                      Complete Role Overview &amp; Operating Context
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                    As an Industrial Electrician &amp; Controls Specialist at Apex Automation’s Plant
                    4 in Stuttgart, you operate at the direct intersection of heavy industrial
                    electrical distribution and high-precision cyber-physical automation. You are
                    responsible for ensuring uninterrupted lifecycle performance, diagnostic
                    troubleshooting, and compliance validation of complex synchronous manufacturing
                    cells.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-surface-container-low">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <span className="material-symbols-outlined text-[20px]">memory</span>
                        <span className="font-label-lg text-label-lg font-bold">
                          PLC Architectures
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Siemens TIA Portal v18/v19 environment, S7-1500F fail-safe processors,
                        distributed ET 200SP remote I/O islands.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-container-low">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <span className="material-symbols-outlined text-[20px]">hub</span>
                        <span className="font-label-lg text-label-lg font-bold">
                          Industrial Fieldbus
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        PROFINET real-time networks, PROFIsafe, Beckhoff EtherCAT drive
                        synchronizations, and IO-Link master integrations.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-container-low">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <span className="material-symbols-outlined text-[20px]">
                          verified_user
                        </span>
                        <span className="font-label-lg text-label-lg font-bold">
                          Regulatory Framework
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Strict adherence to DIN VDE 0100 low-voltage safety rules, DGUV Vorschrift 3
                        recurring testing, and ISO 13849 PLd/PLe safety circuits.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary-fixed/30 flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">
                      info
                    </span>
                    <div>
                      <span className="font-label-lg text-label-lg text-secondary font-bold block mb-0.5">
                        Operating Environment Shift Structure
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Stationed primarily in our environmentally controlled, clean industrial floor
                        (shown in documentation photograph above). Alternating 3-shift rotation with
                        comprehensive handover logs and dedicated control room workstation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2. Detailed Daily Operational Responsibilities & Safety Directives */}
                <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                      2
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                      Detailed Daily Operational Responsibilities &amp; Safety Directives
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Our technical staff follow structured standard operating procedures (SOPs)
                    designed to maximize uptime while eliminating electrical flash and mechanical
                    hazard exposure.
                  </p>
                  <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            cable
                          </span>
                          Control Panel Wiring &amp; Fieldbus Routing
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                          DIN EN 60204-1
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">
                        Execute cable loom routing, ferrule crimping, DIN-rail component integration,
                        and terminal labeling strictly conforming to German standard DIN EN 60204-1
                        (Safety of Machinery - Electrical Equipment of Machines). Maintain noise
                        separation between 24V DC sensor buses and 400V AC servo drive feeds.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs font-label-sm text-secondary">
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          Shielded Cat6A / Profinet Cables
                        </span>
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          Phoenix Contact Clipline
                        </span>
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          Ferrules to DIN 46228
                        </span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            insights
                          </span>
                          PLC Diagnostics &amp; Signal Tracing
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                          S7-1500 / EtherCAT
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">
                        Connect field PG/PC units directly to the machine backbone during fault
                        events. Utilize multi-channel digital storage oscilloscopes to isolate
                        intermittent signal degradation, diagnose short circuits on 24V PNP/NPN
                        safety interlocks, and replace defective optical transceivers or I/O modules
                        on active cells.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs font-label-sm text-secondary">
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          TIA Portal Diagnostic Buffer
                        </span>
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          Wireshark Fieldbus Analysis
                        </span>
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          Fluke 190 Series Scope
                        </span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                          <span className="material-symbols-outlined text-error text-[20px]">
                            lock_reset
                          </span>
                          Lockout / Tagout (LOTO) &amp; High-Voltage De-Energization
                        </span>
                        <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
                          5 Safety Rules (VDE)
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">
                        Enforce the 5 Electrical Safety Rules (Fünf Sicherheitsregeln): Complete
                        disconnection, securing against re-connection, verification of safe
                        isolation from supply using calibrated two-pole voltage testers (Duspol),
                        earthing and short-circuiting, and shielding neighboring live parts before
                        any internal transformer or motor bus maintenance.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs font-label-sm text-on-surface-variant">
                        <span className="bg-surface-container-lowest px-2 py-1 rounded font-bold text-error">
                          Zero Voltage Verification
                        </span>
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          Master Lock Safety Padlocks
                        </span>
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          PPE Category 4 Arc Flash
                        </span>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            speed
                          </span>
                          Preventative &amp; Predictive Maintenance
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                          SAP PM Integration
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">
                        Conduct weekly infrared thermographic surveys on switchgear breakers,
                        contactors, and variable frequency drive (VFD) busbars. Log vibration
                        anomalies and insulation resistance test findings into SAP Plant Maintenance
                        (PM) modules to preempt catastrophic line stoppages.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs font-label-sm text-secondary">
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          FLIR Thermal Cameras
                        </span>
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          Megger 1000V Insulation Check
                        </span>
                        <span className="bg-surface-container-lowest px-2 py-1 rounded">
                          Siemens SINAMICS S120 Drives
                        </span>
                      </div>
                    </div>

                    {/* Item 5 */}
                    <div className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            upgrade
                          </span>
                          Continuous Improvement &amp; Retrofits
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                          Industry 4.0
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">
                        Collaborate with automation software engineers to retrofit machine vision
                        cameras, smart energy monitoring meters, and safety light curtains onto
                        legacy stations, maintaining electrical schematics synchronization in EPLAN
                        Electric P8.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. Technical Qualifications & Regulatory Equivalence */}
                <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                      3
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                      Technical Qualifications &amp; Regulatory Equivalence
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Germany maintains high regulatory rigor for industrial installations. We welcome
                    applications from both German-trained tradespeople and international candidates
                    with recognized equivalent technical credentials.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold block mb-3">
                        Mandatory Trade Certifications (Any One Recognized)
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-4 rounded-lg bg-surface-container-low flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <div>
                            <span className="font-label-lg text-label-lg font-bold text-on-surface block">
                              Elektroniker für Betriebstechnik
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              German IHK/HWK dual apprenticeship or Meister credential.
                            </span>
                          </div>
                        </div>
                        <div className="p-4 rounded-lg bg-surface-container-low flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <div>
                            <span className="font-label-lg text-label-lg font-bold text-on-surface block">
                              EU Directive 2005/36/EC Equivalency
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Recognized industrial trade certifications from Austria, Poland,
                              Spain, etc.
                            </span>
                          </div>
                        </div>
                        <div className="p-4 rounded-lg bg-surface-container-low flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <div>
                            <span className="font-label-lg text-label-lg font-bold text-on-surface block">
                              Red Seal / City &amp; Guilds / Journeyman
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              North American / UK equivalent with certified BQ-Portal evaluation
                              support.
                            </span>
                          </div>
                        </div>
                        <div className="p-4 rounded-lg bg-surface-container-low flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <div>
                            <span className="font-label-lg text-label-lg font-bold text-on-surface block">
                              DGUV V3 Testing Certification
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Documented qualification to test stationary &amp; mobile electrical
                              equipment.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface block mb-2">
                        Schematic &amp; Diagnostic Literacy
                      </span>
                      <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          Fluency reading complex multi-sheet electrical schematics generated in
                          EPLAN Electric P8, WSCAD, or AutoCAD Electrical.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          Solid understanding of Piping &amp; Instrumentation Diagrams (P&amp;IDs)
                          and pneumatic valve manifold actuation logic.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          Minimum 2 years verifiable hands-on shop-floor troubleshooting experience
                          on automated conveyor or robotic cells.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold block mb-3">
                        Preferred Technical Accreditations (Strong Advantage)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            stars
                          </span>{" "}
                          Siemens TIA Portal Programmer Certification
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            stars
                          </span>{" "}
                          KUKA SafeOperation / Fanuc Dual Check Safety
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            stars
                          </span>{" "}
                          IPAF Scissor Lift / Cherry Picker License (PAL Card)
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            stars
                          </span>{" "}
                          German Language B1/B2 (English B2 fully supported on floor)
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. Complete Compensation, Allowances & Collective Bargaining Benefits */}
                <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                      4
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                      Complete Compensation, Allowances &amp; Collective Bargaining Benefits
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Apex Automation operates under the prestigious Baden-Württemberg Metal and
                    Electrical Industry collective bargaining agreement (IG Metall ERA framework),
                    guaranteeing exceptional security, transparent grading, and industry-leading
                    perks.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-5 rounded-xl bg-surface-container-low flex flex-col justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Base Monthly Remuneration
                        </span>
                        <div className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1 mb-2">
                          €4,000 – €4,833{" "}
                          <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                            / month
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          ERA Grade 8-10 designation depending on previous years of certified
                          industrial service. Annual wage equivalent of €48,000 – €58,000 base.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-surface-container-highest">
                        <span className="font-label-sm text-label-sm text-secondary font-semibold">
                          Includes 13th Month Salary (Weihnachtsgeld) &amp; Holiday Allowance
                          (Urlaubsgeld)
                        </span>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-surface-container-low flex flex-col justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                          Shift &amp; Overtime Premiums
                        </span>
                        <div className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1 mb-2">
                          +15% to +50%{" "}
                          <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                            tax-advantaged
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Night shift (+15%), Sunday operational support (+50%), and statutory
                          holiday cover (+100%). All overtime logged to personal flexitime accounts
                          with optional payout or compensatory time-off.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-surface-container-highest">
                        <span className="font-label-sm text-label-sm text-primary font-semibold">
                          Average active technician bonus adds €600–€900 monthly
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Relocation, Tools, Pension Package */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-surface-container-low text-center sm:text-left">
                      <span className="material-symbols-outlined text-primary text-[28px] mb-2">
                        flight_takeoff
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface block mb-1 font-semibold">
                        €3,500 Relocation
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Relocation allowance, flight coverage, and 30 days of furnished company
                        apartment in central Stuttgart while you settle.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low text-center sm:text-left">
                      <span className="material-symbols-outlined text-primary text-[28px] mb-2">
                        handyman
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface block mb-1 font-semibold">
                        €800 Tool Package
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Personalized Wera VDE insulated tool trolley, Fluke multimeter package, and
                        custom-molded UVEX safety footwear/PPE.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low text-center sm:text-left">
                      <span className="material-symbols-outlined text-primary text-[28px] mb-2">
                        beach_access
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface block mb-1 font-semibold">
                        30 Days Leave
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        30 full days paid annual leave + company pension plan (bAV) with 100%
                        employer contribution matching up to €180/mo.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5. Transparent 3-Step Selection & Onboarding Process */}
                <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                      5
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                      Transparent 3-Step Selection &amp; Onboarding Process
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    We respect technical professionals’ time. Our evaluation process is rapid,
                    objective, and focuses on actual hands-on craftsmanship.
                  </p>
                  <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-highest">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center ring-4 ring-surface-container-lowest">
                        1
                      </div>
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        Fast-Track Screening
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5 mb-1">
                        Submit Trade Profile &amp; Credentials
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Upload your CV and trade certifications. Our engineering recruitment panel
                        conducts a 24 to 48-hour compliance review. No generic automated rejection
                        algorithms.
                      </p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative">
                      <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full bg-secondary text-on-secondary font-bold text-xs flex items-center justify-center ring-4 ring-surface-container-lowest">
                        2
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
                        Engineering Dialogue
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5 mb-1">
                        20-Minute Technical Phone / Video Screening
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        A brief discussion directly with Plant 4’s Chief Electrical Supervisor. We
                        review your past fieldbus troubleshooting cases, electrical safety habits,
                        and timeline availability.
                      </p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative">
                      <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full bg-surface-tint text-on-primary font-bold text-xs flex items-center justify-center ring-4 ring-surface-container-lowest">
                        3
                      </div>
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        Final Validation
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5 mb-1">
                        On-Site Practical Assessment &amp; Plant Tour (Stuttgart)
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full 3-hour paid visit to Plant 4. Includes plant inspection, team lunch, and
                        a low-stress practical bench assessment on a simulated S7-1500 training bench
                        (isolating a deliberate sensor wiring bug). Travel and hotel 100% covered by
                        Apex Automation.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Quick Sticky Application & Credential Upload Module */}
              <aside className="lg:col-span-4 flex flex-col gap-6">
                {/* Application Form Card */}
                <div
                  className="bg-surface-container-lowest p-6 rounded-2xl shadow-md lg:sticky lg:top-24"
                  id="application-form"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">
                        assignment_turned_in
                      </span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold block">
                        Direct Plant Submission
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Fast-Track Application
                      </h3>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                    Submit your profile directly to Plant 4 Engineering Leads. Average response
                    time: <strong className="text-on-surface font-semibold">under 36 hours</strong>.
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                      <label
                        className="block font-label-md text-label-md text-on-surface mb-1 font-semibold"
                        htmlFor="full-name"
                      >
                        Full Legal Name *
                      </label>
                      <div className="relative">
                        <input
                          className="w-full h-11 px-3.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          id="full-name"
                          placeholder="e.g. Markus Weber / David Müller"
                          required
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                        <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[20px]">
                          badge
                        </span>
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          className="block font-label-md text-label-md text-on-surface mb-1 font-semibold"
                          htmlFor="email"
                        >
                          Email *
                        </label>
                        <input
                          className="w-full h-11 px-3.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          id="email"
                          placeholder="name@domain.com"
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="block font-label-md text-label-md text-on-surface mb-1 font-semibold"
                          htmlFor="phone"
                        >
                          Phone / WhatsApp *
                        </label>
                        <input
                          className="w-full h-11 px-3.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          id="phone"
                          placeholder="+49 170 000000"
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Country & Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          className="block font-label-md text-label-md text-on-surface mb-1 font-semibold"
                          htmlFor="country"
                        >
                          Country of Residence
                        </label>
                        <select
                          className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                          id="country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        >
                          <option value="DE">Germany (In-Country)</option>
                          <option value="EU">Other European Union</option>
                          <option value="CH">Switzerland / EEA</option>
                          <option value="UK">United Kingdom</option>
                          <option value="US">United States / Canada</option>
                          <option value="INT">International (Visa Required)</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="block font-label-md text-label-md text-on-surface mb-1 font-semibold"
                          htmlFor="exp"
                        >
                          Experience Level
                        </label>
                        <select
                          className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                          id="exp"
                          value={exp}
                          onChange={(e) => setExp(e.target.value)}
                        >
                          <option value="1-3">1-3 Years (Junior/Entry)</option>
                          <option value="3-5">3-5 Years (Mid-Level)</option>
                          <option value="5-10">5-10 Years (Senior Trades)</option>
                          <option value="10+">10+ Years (Lead / Meister)</option>
                        </select>
                      </div>
                    </div>

                    {/* Primary Trade Accreditation */}
                    <div>
                      <label
                        className="block font-label-md text-label-md text-on-surface mb-1 font-semibold"
                        htmlFor="trade-cert"
                      >
                        Primary Trade Qualification
                      </label>
                      <select
                        className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                        id="trade-cert"
                        value={tradeCert}
                        onChange={(e) => setTradeCert(e.target.value)}
                      >
                        <option value="betr">Elektroniker für Betriebstechnik (IHK)</option>
                        <option value="auto">Elektroniker für Automatisierungstechnik</option>
                        <option value="meister">Industriemeister Elektrotechnik</option>
                        <option value="eu">EU Equivalent Trade Certificate</option>
                        <option value="redseal">Red Seal / Journeyman / City &amp; Guilds</option>
                        <option value="other">
                          Other Technical Electrical Degree / Diploma
                        </option>
                      </select>
                    </div>

                    {/* Credential / CV Upload Field */}
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">
                        CV &amp; Trade Certificates (PDF / DOCX)
                      </label>
                      <div className="relative bg-surface-container-low rounded-xl p-4 text-center cursor-pointer hover:bg-surface-container transition-colors">
                        <input
                          accept=".pdf,.doc,.docx"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          id="file-upload"
                          type="file"
                          onChange={handleFileChange}
                        />
                        <span className="material-symbols-outlined text-[32px] text-primary mb-1 block">
                          cloud_upload
                        </span>
                        <span
                          className="font-label-md text-label-md text-on-surface font-semibold block"
                          id="upload-status"
                        >
                          {uploadStatus}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">
                          Certificates, Transcripts, CV (max 25MB)
                        </span>
                      </div>
                    </div>

                    {/* EU Work Authorization Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          checked={euAuth}
                          className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                          required
                          type="checkbox"
                          onChange={(e) => setEuAuth(e.target.checked)}
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                          I hold an EU Citizenship / EU Work Permit OR require company-sponsored
                          German Skilled Immigration Act Fast-Track visa.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      className="w-full h-12 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
                      type="submit"
                    >
                      <span>Submit Complete Application</span>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </button>
                  </form>

                  {/* Security & Compliance guarantee tag */}
                  <div className="mt-5 pt-4 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        lock
                      </span>
                      GDPR &amp; DSGVO Compliant
                    </span>
                    <span className="text-tertiary">Encrypted AES-256</span>
                  </div>
                </div>

                {/* Plant 4 Contact & Supervisor Badge */}
                <div className="bg-surface-container-low p-5 rounded-xl shadow-sm">
                  <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider block mb-2 font-semibold">
                    Hiring Technical Manager
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-headline-sm font-bold">
                      TH
                    </div>
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold block">
                        Torsten Hartmann
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Lead Automation &amp; Maintenance Director
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    "We run a modern, clean, and highly automated line with high safety standards. If
                    you take pride in tidy wiring and solid PLC diagnostics, you'll feel right at home
                    in Plant 4."
                  </p>
                </div>
              </aside>
            </div>
          </div>

          {/* Interactive Confirmation Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                <button
                  className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-lg cursor-pointer"
                  type="button"
                  onClick={() => setModalOpen(false)}
                >
                  <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
                <div className="w-14 h-14 rounded-full bg-primary-fixed-dim/40 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[32px]">task_alt</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                  Application Dossier Received
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1 mb-2">
                  Technical Profile Dispatched to Plant 4
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Your trade documentation has been assigned Tracking ID:{" "}
                  <span className="font-bold text-on-surface font-mono">
                    APX-STUT-8842-APP
                  </span>
                  . Lead Electrical Engineer Torsten Hartmann's team will review your qualifications
                  and contact you within 2 business days.
                </p>
                <div className="bg-surface-container p-4 rounded-xl mb-6">
                  <div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-bold mb-1">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      calendar_today
                    </span>
                    Preparation for Phone Interview
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Please have your schematic samples and recent project examples available. A
                    technical screening invite will be dispatched to your registered email.
                  </p>
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition-colors cursor-pointer"
                    type="button"
                    onClick={() => setModalOpen(false)}
                  >
                    Return to Technical Handbook
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
