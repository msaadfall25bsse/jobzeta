"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LongHaulIntermodalFreightPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [corridor, setCorridor] = useState("");
  const [licensing, setLicensing] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [alertSubmitted, setAlertSubmitted] = useState(false);
  const [isHoveredScope, setIsHoveredScope] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailAlert) {
      setAlertSubmitted(true);
      setTimeout(() => setAlertSubmitted(false), 5000);
      setEmailAlert("");
    }
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-background flex-1">
        <div className="flex flex-col w-full">
          {/* SECTION 1: BREADCRUMB & CORRIDOR TELEMETRY HEADER */}
          <section className="w-full bg-surface-container-lowest shadow-sm py-space-lg px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
              {/* Breadcrumb & Realtime Verification Meta */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm pb-space-xs">
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant flex-wrap"
                >
                  <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                    <span className="material-symbols-outlined text-sm">home</span> Home
                  </Link>
                  <span className="text-outline-variant">/</span>
                  <Link className="hover:text-primary transition-colors" href="/categories">
                    Categories
                  </Link>
                  <span className="text-outline-variant">/</span>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/categories/driving-and-transportation"
                  >
                    Driving &amp; Transportation
                  </Link>
                  <span className="text-outline-variant">/</span>
                  <span className="text-on-surface font-semibold">
                    Long-Haul &amp; Intermodal Freight (CDL A / CE)
                  </span>
                </nav>
                <div className="flex flex-wrap items-center gap-space-sm font-label-sm text-label-sm">
                  <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full font-mono tracking-wider font-semibold">
                    DIR: DT-LH-CDL-8820
                  </span>
                  <div className="flex items-center gap-1.5 bg-primary-fixed/20 text-on-primary-fixed-variant px-3 py-1 rounded-full font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary-container inline-block animate-pulse"></span>
                    <span>Live Telematics &amp; Dispatch Active</span>
                  </div>
                  <span className="bg-secondary-fixed/40 text-secondary px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    EU Code 95 &amp; US CDL-A Verified
                  </span>
                </div>
              </div>

              {/* Main Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pt-space-xs">
                <div className="max-w-4xl flex flex-col gap-space-xs">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold">
                      CROSS-BORDER COMMERCIAL TRANSPORT &amp; INTERMODAL REGISTRY
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-black tracking-tight">
                    International Long-Haul, Line-Haul &amp; Intermodal Freight (CDL A / CE)
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Certified Class A and CE heavy combination drivers, reefer line-haul captains, and intermodal sea-rail container hauliers operating across European, North American, and GCC logistics corridors.
                  </p>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <button
                    className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-all shadow-sm cursor-pointer"
                    type="button"
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Route stream link copied to clipboard!");
                      }
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">share</span>
                    <span>Share Route Stream</span>
                  </button>
                  <a
                    className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-sm hover:shadow-md transition-all cursor-pointer"
                    href="#dispatch-alerts"
                  >
                    <span className="material-symbols-outlined text-lg">notification_add</span>
                    <span>Set Dispatch Alerts</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: TELEMETRY & COMPLIANCE METRIC GAUGES */}
          <section className="w-full px-margin -mt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* KPI 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-primary/5 pointer-events-none group-hover:scale-110 transition-transform"></div>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">
                    Active Requisitions
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-primary-fixed/30 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">local_shipping</span>
                  </span>
                </div>
                <div className="my-space-sm">
                  <div className="font-display-lg text-display-lg text-on-surface tracking-tight font-bold">6,420</div>
                  <div className="inline-flex items-center gap-1 text-primary font-label-md text-label-md font-semibold mt-1">
                    <span className="material-symbols-outlined text-base">trending_up</span>
                    <span>+18.2% MoM Demand Shortfall</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Severe cross-border articulated capacity deficit across Benelux, Germany, Scandinavia, and Trans-Pennine lanes.
                </p>
              </div>

              {/* KPI 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-secondary/5 pointer-events-none group-hover:scale-110 transition-transform"></div>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">
                    Average Global Wage Band
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-secondary-fixed/50 text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">payments</span>
                  </span>
                </div>
                <div className="my-space-sm">
                  <div className="font-display-lg text-display-lg text-on-surface tracking-tight font-bold">
                    €52k – €78k
                  </div>
                  <div className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold mt-1">
                    <span className="material-symbols-outlined text-base">savings</span>
                    <span>$58,000 – $86,000 USD Equivalent</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Calculated inclusive of daily net night-out per diem (€45–€65/day), reefer temp-care bonus, and ADR tanker supplements.
                </p>
              </div>

              {/* KPI 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-primary/5 pointer-events-none group-hover:scale-110 transition-transform"></div>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">
                    Compliance Gateways
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-primary-fixed/30 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">fact_check</span>
                  </span>
                </div>
                <div className="my-space-sm">
                  <div className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold pt-1">
                    EU 95 • CDL-A
                  </div>
                  <div className="inline-flex items-center gap-1 text-primary font-label-md text-label-md font-semibold mt-2">
                    <span className="material-symbols-outlined text-base">encrypted</span>
                    <span>Digital Driver Tachograph Gen 2</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Direct verification with 24 EEA member transport ministries and US FMCSA Drug &amp; Alcohol Clearinghouse.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: MULTI-FACET DISPATCH & CORRIDOR FILTER BAR */}
          <section className="w-full px-margin py-space-xl">
            <div className="max-w-7xl mx-auto bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <form
                className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Search Keyword */}
                <div className="md:col-span-4 relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder-on-surface-variant/60 transition-all"
                    placeholder="Scania 500S, Reefer Line-Haul, Intermodal Drayage, ADR..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                {/* Corridor Selector */}
                <div className="md:col-span-3 relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                    pin_drop
                  </span>
                  <select
                    className="w-full pl-10 pr-8 py-2.5 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                    value={corridor}
                    onChange={(e) => setCorridor(e.target.value)}
                  >
                    <option value="">All Corridors (Rotterdam, Duisburg, Antwerp)</option>
                    <option value="rot-sca">Rotterdam Maasvlakte ⇄ Gothenburg / Malmö</option>
                    <option value="rhine-alps">Rhine-Alpine Corridor (Rotterdam ⇄ Genoa)</option>
                    <option value="scan-med">Scandinavian-Mediterranean Corridor</option>
                    <option value="north-sea">North Sea-Baltic Corridor</option>
                    <option value="na-i95">North America: I-95 &amp; I-80 Freight Network</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">
                    expand_more
                  </span>
                </div>
                {/* Licensing Selector */}
                <div className="md:col-span-3 relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                    badge
                  </span>
                  <select
                    className="w-full pl-10 pr-8 py-2.5 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                    value={licensing}
                    onChange={(e) => setLicensing(e.target.value)}
                  >
                    <option value="">All Licenses (EU Category CE, US CDL-A)</option>
                    <option value="eu-ce-95">EU Category CE + Code 95 Cert</option>
                    <option value="us-cdl-a">US Class A CDL + Hazmat (H/X)</option>
                    <option value="uk-hgv-1">UK Category C+E (HGV Class 1 Driver CPC)</option>
                    <option value="adr-cert">ADR Hazardous Materials Certificate</option>
                    <option value="b-double">B-Double / High Capacity Transport Endorsement</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">
                    expand_more
                  </span>
                </div>
                {/* Filter Submit CTA */}
                <div className="md:col-span-2">
                  <button
                    className="w-full py-2.5 px-4 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg font-semibold hover:bg-primary-container shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">tune</span>
                    <span>Filter Dispatch</span>
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* SECTION 4: FEATURED REQUISITION (SINGLE RICH CARD WITH HOVER EXPANSION EFFECT) */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              {/* Section Title & Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <h2 className="font-headline-lg text-headline-lg text-black tracking-tight">
                    Featured Requisitions
                  </h2>
                  <span className="bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm px-2.5 py-1 rounded-full font-bold">
                    1 Active Primary Requisition
                  </span>
                </div>
                <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                  <span>Sort By:</span>
                  <span className="text-on-surface font-semibold underline decoration-primary decoration-2 underline-offset-4 cursor-pointer">
                    Highest Compensation / Corridor Distance
                  </span>
                </div>
              </div>

              {/* PRIMARY FEATURED JOB CARD */}
              <article
                aria-label="International Long-Haul CE Driver requisition"
                className="group relative w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                tabIndex={0}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left Column: Visual Media & Badges */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                    <div
                      className="w-full h-full min-h-[190px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url('/scania-longhaul-hero.jpg')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30" />
                    
                    {/* Floating pill tags on media */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[13px]">local_shipping</span>
                        Reefer &amp; High-Value Freight
                      </span>
                    </div>

                    <button
                      aria-label="Bookmark"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                    >
                      <span className="material-symbols-outlined text-[17px]">bookmark</span>
                    </button>

                    <div className="absolute bottom-2 left-2.5 hidden md:flex items-center gap-1 text-[11px] font-label-sm text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm group-hover:opacity-0 transition-opacity">
                      <span className="material-symbols-outlined text-[13px]">visibility</span>
                      <span>Hover for scope</span>
                    </div>
                  </div>

                  {/* Right Column: Requisition Content & Interactive Reveal */}
                  <div className="flex-1 p-space-md sm:p-space-lg flex flex-col justify-between gap-space-sm">
                    {/* Top row: Employer, Post Age, Verified & Compensation */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-label-md text-label-md text-secondary font-bold tracking-wide uppercase">
                            DHL Global Forwarding &amp; Freja Transport JV
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-primary font-medium">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Verified Employer
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-outline">schedule</span>
                            Posted 2h ago
                          </span>
                        </div>

                        {/* Salary Highlight */}
                        <div className="text-right">
                          <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                            €54,000 – €74,000
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant"> / yr base</span>
                        </div>
                      </div>

                      {/* Main Job Title */}
                      <Link href="/jobs/senior-international-long-haul-ce-driver">
                        <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                          International Long-Haul CE Driver (Reefer &amp; High-Value European Corridors)
                        </h3>
                      </Link>

                      {/* Meta Tags: Location, Shift, Type, Clearance */}
                      <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                          Rotterdam Maasvlakte, Netherlands (Rotterdam ⇄ Scandinavia ⇄ Ruhr Valley Hubs)
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Full-Time Permanent
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                          Tier-1 Cross-Border Logistics
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">shield</span>
                          EU Blue Card &amp; Driver Visa Package
                        </span>
                      </div>
                    </div>

                    {/* Skill Tags / Systems */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Code 95 Certified
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Digital Tachograph Gen 2
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Dedicated Modern Scania V8 Rig
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        GDP Pharma Temp-Logging
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        ADR Class 2-9
                      </span>
                    </div>

                    {/* Accordion Reveal Section on Group Hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-all duration-300 ease-out overflow-hidden">
                      <div className="min-h-0 pt-0 group-hover:pt-space-sm group-focus-within:pt-space-sm flex flex-col gap-space-sm">
                        <div className="w-full h-px bg-surface-container-high" />
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low p-space-sm rounded-lg border border-outline-variant/30">
                          <div className="flex flex-col gap-0.5 text-on-surface font-body-sm text-body-sm max-w-2xl">
                            <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[15px]">insights</span>
                              Operational Scope &amp; Mission Brief
                            </span>
                            <p className="text-body-sm text-on-surface-variant">
                              Scheduled international long-haul temperature-controlled transit across Benelux, Germany, and Scandinavia. Operates high-spec Scania V8 with advanced telematics, 3/1 roster, and guaranteed home rest cycles. EU Mobility Package 100% compliant with company-provided hotel accommodation.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            <Link
                              className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-international-long-haul-ce-driver"
                            >
                              <span>View Details &amp; Specs</span>
                              <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                            </Link>
                            <Link
                              className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-international-long-haul-ce-driver"
                            >
                              <span>Quick Apply</span>
                              <span className="material-symbols-outlined text-[15px]">send</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* SECTION 5: CORE RECOGNIZED DRIVER CREDENTIALS MATRIX */}
          <section className="w-full bg-surface-container-lowest py-space-xl px-margin shadow-xs">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  Statutory Verification Framework
                </span>
                <h2 className="font-headline-lg text-headline-lg text-black tracking-tight">
                  Recognized Commercial Driver Certifications
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Cross-jurisdictional licensing validation automatically authenticated prior to dispatch allocation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Card 1: Germany / DACH */}
                <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between hover:bg-surface-container transition-colors">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-2 text-secondary font-headline-sm text-headline-sm">
                      <span className="material-symbols-outlined text-primary">euro</span>
                      <span>Germany &amp; DACH</span>
                    </div>
                    <div className="font-label-md text-label-md text-primary font-semibold">
                      Führerschein Klasse CE (FQN 95)
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Fahrerqualifikationsnachweis (FQN / Schlüsselzahl 95) with digital driver tachograph card and medical checkup certification under German FeV regulations.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-bold">
                    <span className="material-symbols-outlined text-xs text-primary">verified</span>
                    BGL &amp; BAG Recognized
                  </div>
                </div>

                {/* Card 2: UK & Ireland */}
                <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between hover:bg-surface-container transition-colors">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-2 text-secondary font-headline-sm text-headline-sm">
                      <span className="material-symbols-outlined text-primary">public</span>
                      <span>United Kingdom &amp; Ireland</span>
                    </div>
                    <div className="font-label-md text-label-md text-primary font-semibold">
                      UK Category C+E (HGV Class 1)
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Driver CPC Qualification Card (DQC) with minimum 35 hours periodic training completed, valid digital tachograph smart card, and clean DVLA endorsement profile.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-bold">
                    <span className="material-symbols-outlined text-xs text-primary">verified</span>
                    DVSA &amp; RHA Compliant
                  </div>
                </div>

                {/* Card 3: US & Canada */}
                <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between hover:bg-surface-container transition-colors">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-2 text-secondary font-headline-sm text-headline-sm">
                      <span className="material-symbols-outlined text-primary">navigation</span>
                      <span>United States &amp; Canada</span>
                    </div>
                    <div className="font-label-md text-label-md text-primary font-semibold">
                      Commercial Driver License (Class A)
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Interstate Air Brakes endorsement, DOT Medical Examiner&apos;s Certificate, FMCSA Clearinghouse clean record, and optional HazMat / Tanker (X endorsement) capabilities.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-bold">
                    <span className="material-symbols-outlined text-xs text-primary">verified</span>
                    FMCSA &amp; CCMTA Integrated
                  </div>
                </div>

                {/* Card 4: GCC & Middle East */}
                <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between hover:bg-surface-container transition-colors">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-2 text-secondary font-headline-sm text-headline-sm">
                      <span className="material-symbols-outlined text-primary">share_location</span>
                      <span>GCC &amp; Middle East</span>
                    </div>
                    <div className="font-label-md text-label-md text-primary font-semibold">
                      Heavy Articulated Truck License
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      GCC Unified Heavy Combination license with Defensive Driving Certification, valid Aramco / ADNOC road safety clearance for petroleum and cross-desert arterial lanes.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-bold">
                    <span className="material-symbols-outlined text-xs text-primary">verified</span>
                    GCC Transport Authority Standard
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: SPECIALIZATION HAULAGE DISCIPLINES */}
          <section className="w-full px-margin py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
                <div className="flex flex-col gap-space-xs">
                  <span className="text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    Corridor Focus &amp; Equipment Types
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-black tracking-tight">
                    Explore Haulage Specializations
                  </h2>
                </div>
                <Link
                  className="inline-flex items-center gap-1 text-primary font-label-lg text-label-lg font-bold hover:underline"
                  href="/find-jobs"
                >
                  <span>View All 18 Equipment Categories</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Specialization 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl">ac_unit</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      Reefer &amp; Pharma Cold-Chain
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Temperature-sensitive deep-frozen food and certified GDP life-sciences line-haul with multi-temp telematics.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">2,150 Roles Open</span>
                    <span className="material-symbols-outlined text-primary text-base group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>

                {/* Specialization 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-2xl">train</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                      Intermodal Sea &amp; Rail Drayage
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Containerized marine drayage connecting Antwerp, Rotterdam, Hamburg, and Los Angeles/Long Beach docks to rail ramps.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">1,840 Roles Open</span>
                    <span className="material-symbols-outlined text-secondary text-base group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>

                {/* Specialization 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      Automotive JIT Mega-Trailers
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Tightly scheduled cross-border automotive just-in-time cycles operating 100m³ mega tautliners and low-deck units.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">1,390 Roles Open</span>
                    <span className="material-symbols-outlined text-primary text-base group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>

                {/* Specialization 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-error-container text-error flex items-center justify-center group-hover:bg-error group-hover:text-on-error transition-colors">
                      <span className="material-symbols-outlined text-2xl">warning</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-error transition-colors">
                      ADR Tanker &amp; Hazardous Cargo
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Specialized liquid chemical, liquefied cryogenic gas, and ADR Class 1-9 haulage with premium danger pay scales.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">1,040 Roles Open</span>
                    <span className="material-symbols-outlined text-error text-base group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: ENTERPRISE FLEET & LOGISTICS CARRIER PARTNERS */}
          <section className="w-full bg-surface-container-lowest py-space-xl px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
                <span className="text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  Enterprise Carrier Network
                </span>
                <h2 className="font-headline-lg text-headline-lg text-black tracking-tight">
                  Direct Master Service Agreement Partners
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Approved cross-border operators hiring verified Class A / CE line-haul operators through Jobzeta.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-gutter items-center pt-space-sm">
                <div className="bg-surface-container-low rounded-xl py-5 px-6 flex items-center justify-center text-center font-headline-sm text-headline-sm font-bold text-secondary tracking-tighter hover:bg-surface-container transition-colors">
                  DHL Freight
                </div>
                <div className="bg-surface-container-low rounded-xl py-5 px-6 flex items-center justify-center text-center font-headline-sm text-headline-sm font-bold text-secondary tracking-tighter hover:bg-surface-container transition-colors">
                  DSV Road
                </div>
                <div className="bg-surface-container-low rounded-xl py-5 px-6 flex items-center justify-center text-center font-headline-sm text-headline-sm font-bold text-secondary tracking-tighter hover:bg-surface-container transition-colors">
                  Kuehne+Nagel
                </div>
                <div className="bg-surface-container-low rounded-xl py-5 px-6 flex items-center justify-center text-center font-headline-sm text-headline-sm font-bold text-secondary tracking-tighter hover:bg-surface-container transition-colors">
                  Freja Transport
                </div>
                <div className="bg-surface-container-low rounded-xl py-5 px-6 flex items-center justify-center text-center font-headline-sm text-headline-sm font-bold text-secondary tracking-tighter hover:bg-surface-container transition-colors">
                  Girteka Group
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: PRIORITY DISPATCH ALERTS BANNER */}
          <section className="w-full px-margin py-space-xl" id="dispatch-alerts">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-secondary to-primary-container rounded-2xl p-space-xl text-on-primary shadow-lg relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-on-primary/10 pointer-events-none blur-2xl"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-7 flex flex-col gap-space-xs">
                  <div className="inline-flex items-center gap-2 bg-on-primary/20 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-label-sm font-bold uppercase tracking-wider w-fit">
                    <span className="material-symbols-outlined text-sm">notifications_active</span>
                    Automated Telematics Matching
                  </div>
                  <h2 className="font-headline-xl text-headline-xl tracking-tight text-on-primary">
                    Get Instant Priority Alerts for Cross-Border Line-Haul &amp; Intermodal Routes
                  </h2>
                  <p className="font-body-md text-body-md text-on-primary/90 max-w-xl">
                    Receive matched dispatch schedules directly matching your specific category endorsements, desired rest schedule (2/1, 3/1, or local daily), and corridor preferences.
                  </p>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-space-xs">
                  <form
                    className="flex flex-col sm:flex-row gap-2 bg-surface-container-lowest p-1.5 rounded-xl shadow-md"
                    onSubmit={handleAlertSubmit}
                  >
                    <input
                      className="w-full px-4 py-3 bg-transparent text-on-surface font-body-sm text-body-sm focus:outline-none placeholder-on-surface-variant"
                      placeholder="Enter your professional email address..."
                      required
                      type="email"
                      value={emailAlert}
                      onChange={(e) => setEmailAlert(e.target.value)}
                    />
                    <button
                      className="shrink-0 px-6 py-3 bg-primary text-on-primary font-label-lg text-label-lg font-bold rounded-lg hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
                      type="submit"
                    >
                      Activate Alerts
                    </button>
                  </form>
                  {alertSubmitted && (
                    <div className="bg-surface-container-lowest/90 text-primary font-semibold text-body-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      Priority alerts successfully activated for your email!
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-primary/80 px-2">
                    <span className="material-symbols-outlined text-xs">lock</span>
                    <span>Zero spam. Direct carrier contracts only. Unsubscribe at any time.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Apply Interactive Modal */}
          {applyModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm">
              <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl space-y-space-md">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[32px]">local_shipping</span>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Quick Dispatch Application
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Apply for <strong>International Long-Haul CE Driver</strong> with DHL &amp; Freja JV under Reference #BY-ROT-FREIGHT-9821.
                  </p>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-xl text-left space-y-2">
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Corridor Route:</span>
                    <strong className="text-primary">Rotterdam ⇄ Scandinavia Hubs</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Target Base:</span>
                    <strong>€54,000 – €74,000 + Per Diem</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Status:</span>
                    <span className="inline-flex items-center gap-1 text-primary font-bold">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      Direct Fast-Track Active
                    </span>
                  </div>
                </div>
                <form
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Application sent to DHL Global Forwarding & Freja Transport JV dispatch command!");
                    setApplyModalOpen(false);
                  }}
                >
                  <input
                    className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface font-body-sm text-body-sm border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Full Name"
                    required
                    type="text"
                  />
                  <input
                    className="w-full h-11 px-3 rounded-lg bg-surface text-on-surface font-body-sm text-body-sm border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Work Email or Phone"
                    required
                    type="text"
                  />
                  <div className="flex gap-2">
                    <button
                      className="flex-1 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold transition-colors cursor-pointer"
                      type="submit"
                    >
                      Confirm Dispatch Submission
                    </button>
                    <button
                      className="px-4 py-3 rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors cursor-pointer"
                      type="button"
                      onClick={() => setApplyModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
