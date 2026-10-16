"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ScaffoldingRiggingAndIndustrialAccessPage() {
  const [alertContact, setAlertContact] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertContact) {
      setAlertSuccess(true);
      setTimeout(() => setAlertSuccess(false), 5000);
      setAlertContact("");
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)] flex-1">
        <div className="flex flex-col w-full">
          {/* BREADCRUMB & METADATA BAR */}
          <section className="w-full bg-surface-container-low px-margin-mobile lg:px-margin py-space-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm text-on-surface-variant">
              <nav className="flex items-center gap-space-xs font-label-md text-label-md flex-wrap">
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
                <span className="text-outline-variant font-normal">/</span>
                <Link className="hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="text-outline-variant font-normal">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/trades-and-construction"
                >
                  Trades &amp; Construction
                </Link>
                <span className="text-outline-variant font-normal">/</span>
                <span className="text-on-surface font-semibold">
                  Scaffolding, Rigging &amp; Industrial Access
                </span>
              </nav>
              <div className="flex items-center gap-space-sm flex-wrap font-label-sm text-label-sm">
                <span className="px-space-sm py-0.5 rounded-full bg-surface-container font-mono tracking-tight text-secondary">
                  DIRECTORY CODE: TC-SCAFF-RIG-4410
                </span>
                <span className="hidden sm:inline text-outline-variant">•</span>
                <span className="inline-flex items-center gap-1 text-primary font-semibold">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  Verified EN 12810 / CISRS Advanced Scaffold
                </span>
                <span className="hidden sm:inline text-outline-variant">•</span>
                <span className="inline-flex items-center gap-1.5 text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Live Exchange Feed Active
                </span>
              </div>
            </div>
          </section>

          {/* PAGE HEADER & KEY PERFORMANCE METRICS */}
          <section className="w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-lg">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-secondary-fixed/50 text-secondary mb-space-sm font-label-sm text-label-sm tracking-wider uppercase">
                  <span className="material-symbols-outlined text-[16px]">domain_verification</span>
                  High-Risk Elevation &amp; Heavy Hoisting Registry
                </div>
                <h1 className="font-headline-xl text-headline-xl text-secondary tracking-tight">
                  Industrial Scaffolding, Heavy Rigging &amp; Rope Access Systems
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
                  Certified advanced scaffolders, industrial rigging supervisors, and IRATA rope access technicians across European offshore, petrochemical, and high-rise infrastructure.
                </p>
              </div>
              <div className="flex items-center gap-space-sm flex-shrink-0">
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert("Stream link copied to clipboard!");
                  }}
                  className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-secondary shadow-sm hover:bg-surface-container transition-colors font-label-lg text-label-lg cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">share</span>
                  Share Stream
                </button>
                <button
                  onClick={() => {
                    document.getElementById("dispatch-alerts")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary text-on-primary hover:bg-primary-container shadow-sm transition-colors font-label-lg text-label-lg cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">notifications_active</span>
                  Set Elevation Alerts
                </button>
              </div>
            </div>

            {/* 3 METRIC CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {/* Stat 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                  <span className="font-label-md text-label-md tracking-wider uppercase text-tertiary">
                    Active Requisitions
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">construction</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-headline-lg text-headline-lg font-bold text-secondary">
                    1,350
                  </span>
                  <span className="inline-flex items-center gap-0.5 font-label-md text-label-md font-semibold text-primary">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    +14.8% MoM
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  High demand in North Sea turnarounds &amp; Hamburg port terminals
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                  <span className="font-label-md text-label-md tracking-wider uppercase text-tertiary">
                    Average Global Wage Band
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[20px]">payments</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-headline-lg text-headline-lg font-bold text-secondary">
                    €56k – €84k
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    ($62k – $92k eq.)
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Shift differential, offshore &amp; extreme height allowances included
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                  <span className="font-label-md text-label-md tracking-wider uppercase text-tertiary">
                    Compliance Standards
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                    CISRS Adv. • EN 12810 • IRATA L3
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Pre-cleared high-risk access registries active across 14 EU/EEA zones
                </p>
              </div>
            </div>
          </section>

          {/* MULTI-FACET FILTER & SEARCH TOOLBAR */}
          <section className="w-full px-margin-mobile lg:px-margin pb-space-lg">
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center">
                {/* Search Input */}
                <div className="md:col-span-5 relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-tertiary text-[20px]">
                    search
                  </span>
                  <input
                    className="w-full h-11 pl-10 pr-4 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Layher Allround, Heavy Chain Hoist, IRATA Level 3, Tube &amp; Fitting..."
                    type="text"
                    defaultValue="Layher Allround, Heavy Chain Hoist, IRATA Level 3, Tube & Fitting..."
                  />
                </div>
                {/* Location Dropdown */}
                <div className="md:col-span-3 relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-tertiary text-[20px]">
                    location_on
                  </span>
                  <select
                    defaultValue="All Hubs (Rotterdam / Hamburg / Aberdeen / Antwerp)"
                    className="w-full h-11 pl-10 pr-8 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                  >
                    <option value="All Hubs (Rotterdam / Hamburg / Aberdeen / Antwerp)">
                      All Hubs (Rotterdam / Hamburg / Aberdeen / Antwerp)
                    </option>
                    <option value="hamburg">Hamburg Port &amp; Petrochem Corridor, DE</option>
                    <option value="rotterdam">Rotterdam Europort Access Terminal, NL</option>
                    <option value="aberdeen">Aberdeen Offshore Subsea Base, UK</option>
                    <option value="antwerp">Antwerp Chemical Cluster, BE</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-tertiary pointer-events-none text-[18px]">
                    expand_more
                  </span>
                </div>
                {/* Credential Filter */}
                <div className="md:col-span-2 relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-tertiary text-[20px]">
                    badge
                  </span>
                  <select
                    defaultValue="All Credentials"
                    className="w-full h-11 pl-10 pr-8 bg-surface rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                  >
                    <option value="All Credentials">All Credentials</option>
                    <option value="cisrs">CISRS Advanced Scaffolder</option>
                    <option value="gerust">Gerüstbauer Geselle / Meister</option>
                    <option value="irata">IRATA Level 3 Supervisor</option>
                    <option value="nccco">NCCCO Heavy Rigger II</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-tertiary pointer-events-none text-[18px]">
                    expand_more
                  </span>
                </div>
                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button className="w-full h-11 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm flex items-center justify-center gap-space-xs transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">tune</span>
                    Filter Live
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURED REQUISITION SECTION */}
          <section className="w-full px-margin-mobile lg:px-margin pb-space-xl">
            <div className="flex items-center justify-between pb-space-md">
              <div className="flex items-center gap-space-sm">
                <h2 className="font-headline-sm text-headline-sm font-bold text-secondary">
                  Featured Requisitions
                </h2>
                <span className="font-label-md text-label-md px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
                  1,350 Active Openings
                </span>
              </div>
              <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <span>Sort:</span>
                <button className="font-semibold text-secondary flex items-center gap-0.5 hover:text-primary transition-colors cursor-pointer">
                  Highest Working Height Rating
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </button>
              </div>
            </div>

            {/* PRIMARY FEATURED CARD (EXACT 3-COLUMN ARCHITECTURE) */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                {/* COLUMN 1: Image Container & Reference Code */}
                <div className="lg:col-span-4 flex flex-col gap-space-sm">
                  <div className="relative w-full h-64 lg:h-72 rounded-xl overflow-hidden shadow-sm group">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Certified high-angle industrial scaffolder standing securely on modular steel scaffolding framework with harness, lanyard, and tool belt overlooking industrial urban docklands and suspension bridge towers under clear skies, daylight structural engineering work."
                      src="/scaffolding-rigging-lead.jpg"
                    />
                    {/* Top-left frosted badge */}
                    <div className="absolute top-3 left-3 px-space-sm py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Heavy Scaffolding &amp; Rigging
                    </div>
                    {/* Bottom-right floating pill */}
                    <div className="absolute bottom-3 right-3 px-space-sm py-1 rounded-full bg-inverse-surface/85 backdrop-blur-md text-inverse-on-surface font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[14px] text-inverse-primary">
                        visibility
                      </span>
                      Hover for Scope
                    </div>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-tertiary px-1">
                    <span className="font-mono">Ref: BY-HAM-RIG-7712</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      Updated 45m ago
                    </span>
                  </div>
                </div>

                {/* COLUMN 2: Central Position Core & Compensation */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-xs">
                      <span className="font-semibold text-secondary">
                        Bilfinger Industrial Services &amp; Altrad Group JV
                      </span>
                      <span>•</span>
                      <span className="text-tertiary">Posted 2h ago</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface hover:text-primary transition-colors cursor-pointer mb-space-xs">
                      Senior Industrial Scaffolding Superintendent &amp; Lead Rigging Engineer
                    </h3>
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mb-space-md">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">
                        location_on
                      </span>
                      <span>
                        Hamburg Port Mega-Terminal &amp; Petrochemical Complex (On-Site • High-Risk Access &amp; Overwater Erection)
                      </span>
                    </div>
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-space-xs mb-space-md">
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                        Full-Time Permanent
                      </span>
                      <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                        Tier-1 Industrial Access
                      </span>
                      <span className="px-space-sm py-0.5 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                        EU Blue Card &amp; Height Differential Package
                      </span>
                    </div>
                    {/* Tech / Standard Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-space-md">
                      <span className="font-label-sm text-label-sm px-2 py-1 rounded bg-surface-container-low text-on-surface">
                        Layher Allround Modular Scaffolding
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-1 rounded bg-surface-container-low text-on-surface">
                        DIN EN 12810 / 12811
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-1 rounded bg-surface-container-low text-on-surface">
                        DGUV Information 201-011
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-1 rounded bg-surface-container-low text-on-surface">
                        CISRS Advanced Scaffolder
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-1 rounded bg-surface-container-low text-on-surface">
                        Heavy Tandem Chain Hoist (50t+)
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-1 rounded bg-surface-container-low text-on-surface">
                        IRATA Level 3 Rescue
                      </span>
                    </div>
                  </div>
                  {/* Total Compensation Structure Box */}
                  <div className="p-space-md bg-surface-container-low rounded-xl">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-md text-headline-md font-bold text-secondary">
                        €64,000 – €88,000
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">/ yr base</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      + 20% Extreme Height &amp; Confined Space Multiplier + Per Diem Lodge &amp; Transnational Mobility Retainer
                    </p>
                  </div>
                </div>

                {/* COLUMN 3: Right Column - Site Vetting & Direct Actions */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full bg-surface-container-low rounded-xl p-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm tracking-wide uppercase text-tertiary">
                        Site Vetting
                      </span>
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-primary">
                        <span className="material-symbols-outlined text-[16px]">verified</span>
                        Tier-1 Complex
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest rounded-lg p-space-sm text-on-surface-variant font-body-sm text-body-sm">
                      <p className="font-label-sm text-label-sm font-semibold text-secondary mb-1">
                        Supervisory Mandate:
                      </p>
                      Requires verified CISRS Advanced or German Gerüstbauermeister / Geselle with minimum 8+ years demonstrated zero-harm record on complex modular tube/system scaffolding exceeding 50m free-standing elevation.
                    </div>
                    <div className="flex flex-col gap-1.5 pt-space-xs font-label-sm text-label-sm text-tertiary">
                      <div className="flex items-center justify-between">
                        <span>Site Clearance:</span>
                        <span className="font-semibold text-on-surface">DIN EN 12810 &amp; ISO 45001 Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Working Height:</span>
                        <span className="font-semibold text-on-surface">Up to +82m Maritime Piers</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Workforce Crew:</span>
                        <span className="font-semibold text-on-surface">18 Scaffolders &amp; Riggers</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs mt-space-md">
                    <Link
                      href="/jobs/senior-scaffolding-superintendent"
                      className="w-full h-11 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm flex items-center justify-center gap-space-xs transition-colors cursor-pointer"
                    >
                      Quick Apply
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                    <Link
                      className="w-full h-11 bg-surface-container-lowest hover:bg-surface-container text-secondary font-label-lg text-label-lg rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                      href="/jobs/senior-scaffolding-superintendent"
                    >
                      View Position
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CORE RECOGNIZED TECHNICAL CREDENTIALS MATRIX */}
          <section className="w-full px-margin-mobile lg:px-margin pb-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
              <div>
                <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary-fixed/40 text-secondary font-label-sm text-label-sm uppercase mb-1">
                  Statutory Compliance
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-secondary">
                  Core Recognized Technical Credentials Matrix
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Standardized scaffolding certifications and cross-border statutory equivalencies recognized on Jobzeta.
                </p>
              </div>
              <Link
                className="font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold flex items-center gap-1 transition-colors"
                href="/categories"
              >
                Verify Your Credential Registry
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Card 1: DACH */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed/30 text-secondary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                    Germany &amp; DACH
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary mt-1 mb-space-sm">
                    Gerüstbauer Gesellenbrief &amp; Meister (HWK / Bundesinnung)
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    DIN EN 12810/12811 certified, DGUV 201-011 statutory assembly compliance. Certified structural calculation and complex facade scaffolding supervision.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md bg-surface-container-low rounded-lg px-space-sm py-space-xs flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Mutual Recognition
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    Full EU-Wide Valid
                  </span>
                </div>
              </div>

              {/* Card 2: UK & Ireland */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed/30 text-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">engineering</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                    United Kingdom &amp; Ireland
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary mt-1 mb-space-sm">
                    CISRS Advanced Scaffolder &amp; Rigging NVQ Level 3
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    CISRS Gold Card, advanced tube &amp; fitting, heavy cantilevers, suspended platforms, and TG20 compliant operational designs.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md bg-surface-container-low rounded-lg px-space-sm py-space-xs flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Jurisdiction
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    CISRS / ECITB Clearance
                  </span>
                </div>
              </div>

              {/* Card 3: US & Canada */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container text-tertiary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">architecture</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                    United States &amp; Canada
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary mt-1 mb-space-sm">
                    NCCCO Rigger II &amp; UBC Scaffolder Journeyman
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    OSHA 1926 Subpart L (Scaffolds) &amp; Subpart CC (Rigging), ASME B30 certified. Multi-point crane hoisting and specialized modular erection.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md bg-surface-container-low rounded-lg px-space-sm py-space-xs flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    ANSI / ASME Standard
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    Tier-1 Pre-Qualified
                  </span>
                </div>
              </div>

              {/* Card 4: Global Rope Access */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed/40 text-secondary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">height</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                    Global &amp; Rope Access
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary mt-1 mb-space-sm">
                    IRATA / SPRAT Level 3 Safety Supervisor
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Industrial rope access rescue team lead, tensioned lines, rigging for rescue, offshore wind and flare stack access, ISO 22846 compliant.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md bg-surface-container-low rounded-lg px-space-sm py-space-xs flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Offshore Readiness
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    Reciprocal Validated
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SPECIALIZATION SYSTEMS FREQUENTLY REQUISITIONED */}
          <section className="w-full px-margin-mobile lg:px-margin pb-space-xl">
            <div className="mb-space-lg">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary-fixed/40 text-secondary font-label-sm text-label-sm uppercase mb-1">
                Domain Taxonomy
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-secondary">
                Specialization Systems Frequently Requisitioned
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Explore active industrial scaffolding systems, engineering access methodologies, and heavy hoisting categories.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Specialization 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">grid_view</span>
                    </div>
                    <span className="font-label-sm text-label-sm font-bold text-primary px-space-sm py-1 rounded-full bg-surface-container-low">
                      580 Roles
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary mb-space-xs">
                    Heavy Industrial Modular Scaffolding
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Layher Allround, Peri UP, Cuplok, and HAKI system applications for chemical crackers, refineries, and complex shipyards.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md flex items-center justify-between text-tertiary group-hover:text-primary transition-colors">
                  <span className="font-label-sm text-label-sm font-semibold">
                    Explore System Openings
                  </span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>

              {/* Specialization 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">cable</span>
                    </div>
                    <span className="font-label-sm text-label-sm font-bold text-primary px-space-sm py-1 rounded-full bg-surface-container-low">
                      410 Roles
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary mb-space-xs">
                    Heavy Crane Rigging &amp; Tandem Hoisting
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Modular spreader beams, multi-crane tandem lifts, heavy chain blocks, hydraulic jacking, and heavy equipment landing.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md flex items-center justify-between text-tertiary group-hover:text-primary transition-colors">
                  <span className="font-label-sm text-label-sm font-semibold">
                    Explore System Openings
                  </span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>

              {/* Specialization 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">
                        vertical_align_top
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm font-bold text-primary px-space-sm py-1 rounded-full bg-surface-container-low">
                      220 Roles
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary mb-space-xs">
                    Suspended Cradles &amp; Mast Climbers
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Powered suspended platforms (MCWPs), high-rise facade cradles, building maintenance units (BMUs), and wire-rope hoist systems.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md flex items-center justify-between text-tertiary group-hover:text-primary transition-colors">
                  <span className="font-label-sm text-label-sm font-semibold">
                    Explore System Openings
                  </span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>

              {/* Specialization 4 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">sports_kabaddi</span>
                    </div>
                    <span className="font-label-sm text-label-sm font-bold text-primary px-space-sm py-1 rounded-full bg-surface-container-low">
                      140 Roles
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary mb-space-xs">
                    Industrial Rope Access &amp; Rescue
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Non-destructive testing (NDT) access, offshore wind jacket inspections, blade maintenance, and standby rescue supervisory teams.
                  </p>
                </div>
                <div className="pt-space-md mt-space-md flex items-center justify-between text-tertiary group-hover:text-primary transition-colors">
                  <span className="font-label-sm text-label-sm font-semibold">
                    Explore System Openings
                  </span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
            </div>
          </section>

          {/* TIER-1 HIRING PARTNERS & ENTERPRISE CONTRACTORS */}
          <section className="w-full px-margin-mobile lg:px-margin pb-space-xl">
            <div className="bg-surface-container-low rounded-2xl p-space-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-lg">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-secondary">
                    Tier-1 Scaffolding &amp; Industrial Access Hiring Partners
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Multinational infrastructure and specialty engineering contractors actively recruiting verified access crews.
                  </p>
                </div>
                <span className="font-label-md text-label-md text-tertiary">
                  Verified Master Service Agreements (MSAs)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Partner 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Bilfinger SE
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Industrial Services
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm font-bold text-primary bg-primary-fixed/30 px-space-sm py-1 rounded-full">
                    64 Roles
                  </span>
                </div>

                {/* Partner 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Altrad Group
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Access &amp; Scaffolding
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm font-bold text-primary bg-primary-fixed/30 px-space-sm py-1 rounded-full">
                    52 Roles
                  </span>
                </div>

                {/* Partner 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      KAEFER Group
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Access Solutions
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm font-bold text-primary bg-primary-fixed/30 px-space-sm py-1 rounded-full">
                    48 Roles
                  </span>
                </div>

                {/* Partner 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      BrandSafway
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Global Industrial Access
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm font-bold text-primary bg-primary-fixed/30 px-space-sm py-1 rounded-full">
                    39 Roles
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* REAL-TIME DISPATCH ALERTS CTA BANNER */}
          <section id="dispatch-alerts" className="w-full px-margin-mobile lg:px-margin pb-space-xl">
            <div className="bg-secondary rounded-2xl p-space-lg lg:p-space-xl text-on-secondary shadow-lg relative overflow-hidden">
              {/* Decorative background accent circle */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-on-secondary/10 text-primary-fixed font-label-sm text-label-sm uppercase mb-space-sm">
                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                    Instant Turnaround Mobilization
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-secondary">
                    Get Instant Priority Alerts for Offshore &amp; Refinery Turnarounds
                  </h2>
                  <p className="font-body-md text-body-md text-surface-container-high mt-space-sm">
                    Configure your working height rating, CISRS/IRATA level, and target jurisdiction to receive immediate SMS &amp; Exchange dispatch alerts within 120 seconds of publication.
                  </p>
                </div>

                {alertSuccess ? (
                  <div className="p-space-md rounded-xl bg-primary-container text-on-primary-container font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Elevation alert confirmed! You will receive immediate turnaround dispatch notifications.
                  </div>
                ) : (
                  <form
                    onSubmit={handleAlertSubmit}
                    className="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto"
                  >
                    <input
                      className="w-full sm:w-80 h-12 px-4 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-fixed"
                      placeholder="Enter work email or phone number"
                      required
                      type="text"
                      value={alertContact}
                      onChange={(e) => setAlertContact(e.target.value)}
                    />
                    <button
                      className="w-full sm:w-auto h-12 px-space-lg rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-space-xs whitespace-nowrap shadow-sm transition-colors cursor-pointer"
                      type="submit"
                    >
                      Activate Alerts
                      <span className="material-symbols-outlined text-[18px]">campaign</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
