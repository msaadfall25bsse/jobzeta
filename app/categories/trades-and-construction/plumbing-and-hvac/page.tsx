"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlumbingAndHVACPage() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("Germany (Frankfurt / Hessen) or DACH / Nordic");
  const [credential, setCredential] = useState("Meister / Geselle / EPA Universal / F-Gas Cat 1");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertEmail) {
      setAlertSuccess(true);
      setTimeout(() => setAlertSuccess(false), 5000);
    }
  };

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md">
      {/* 1. REUSABLE GLOBAL HEADER */}
      <Header />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* SECTION 1: Breadcrumb & Sub-discipline Header */}
          <section className="w-full px-margin py-space-lg bg-surface">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mb-space-md"
            >
              <Link className="hover:text-primary transition-colors" href="/">
                Home
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link className="hover:text-primary transition-colors" href="/categories">
                Categories
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link
                className="hover:text-primary transition-colors"
                href="/categories/trades-and-construction"
              >
                Trades &amp; Construction
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary font-bold">Plumbing &amp; HVAC</span>
            </nav>

            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-space-xs mb-space-md">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Specialized Craft Sub-Discipline
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                EPA Section 608 &amp; F-Gas Validated
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Live Exchange Feed
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm tracking-wide">
                Directory ID: TC-PLUMB-HVAC-2140
              </span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-4xl mb-space-lg">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-xs font-bold">
                Plumbing, Commercial Refrigeration &amp; HVAC Technical Roles
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Precision chilled water loops, industrial VRF systems, district heating hydronics,
                high-pressure medical gas piping, and critical data center environmental cooling
                worldwide.
              </p>
            </div>

            {/* 3 Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-space-lg">
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider font-semibold">
                    Active Requisitions
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">hvac</span>
                  </div>
                </div>
                <div>
                  <span className="font-display-lg text-display-lg text-on-surface tracking-tight font-bold">
                    2,140
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      trending_up
                    </span>
                    Global certified openings across 38 jurisdictions
                  </p>
                </div>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider font-semibold">
                    Average Global Wage Band
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[20px]">payments</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface font-bold">
                      €68k – €98k
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary">
                      ($74k – $106k eq.)
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    Shift differential, overtime &amp; hazmat allowances included
                  </p>
                </div>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider font-semibold">
                    Compliance Standard
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </div>
                </div>
                <div>
                  <span className="font-headline-lg text-headline-lg text-on-surface truncate block font-bold">
                    EPA / F-Gas / DIN 378
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      task_alt
                    </span>
                    Pre-cleared certification registries active
                  </p>
                </div>
              </div>
            </div>

            {/* Search & Multi-facet Filter Bar */}
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest">
              <form
                className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="md:col-span-5 flex items-center gap-space-sm px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">
                    search
                  </span>
                  <input
                    className="bg-transparent w-full text-body-sm placeholder:text-outline focus:outline-none"
                    placeholder="Industrial Chiller, VRF, Medical Gas, Ammonia NH3, Heat Pump..."
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <div className="md:col-span-3 flex items-center gap-space-sm px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">
                    location_on
                  </span>
                  <select
                    className="bg-transparent w-full text-body-sm text-on-surface focus:outline-none cursor-pointer"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option>Germany (Frankfurt / Hessen) or DACH / Nordic</option>
                    <option>United States (Gulf Coast / Midwest)</option>
                    <option>United Kingdom (London / Midlands)</option>
                    <option>Global Remote / Relocation</option>
                  </select>
                </div>
                <div className="md:col-span-3 flex items-center gap-space-sm px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">
                    card_membership
                  </span>
                  <select
                    className="bg-transparent w-full text-body-sm text-on-surface focus:outline-none cursor-pointer"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                  >
                    <option>Meister / Geselle / EPA Universal / F-Gas Cat 1</option>
                    <option>F-Gas Cat 1 (EN 378 / EU 517)</option>
                    <option>EPA Section 608 Universal</option>
                    <option>NFPA 99 Medical Gas Installer</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <button
                    className="w-full h-11 inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[20px]">tune</span>
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* SECTION 2: Featured Requisitions Section (EXACTLY 1 SINGLE FEATURED JOB) */}
          <section className="w-full px-margin py-space-xl bg-surface-container-low">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
              <div>
                <div className="flex items-center gap-2 mb-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                    Featured Requisitions • 2,140 Active Openings
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                  Standardized modular postings across industrial chilled water, district HVAC, and
                  commercial refrigeration plants. Hover any card for technical specifications and
                  direct application actions.
                </p>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <span className="font-label-sm text-label-sm text-tertiary uppercase font-semibold">
                  Filter View
                </span>
                <div className="px-space-md py-2 rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container-highest flex items-center gap-2 text-on-surface font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[18px] text-primary">sort</span>
                  <span>Sort by: Highest Precision Tier</span>
                </div>
              </div>
            </div>

            {/* SINGLE Featured Job Card */}
            <article
              aria-label="Senior Commercial Chiller & Industrial HVAC Lead Technician at CARRIER COMMERCIAL HVAC & REFRIGERATION"
              className="group relative w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
              tabIndex={0}
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Visual Thumbnail Canvas */}
                <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                  <div
                    className="w-full h-full min-h-[190px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-tjEIS0ElVtRpdm7WzWu8VzzXntR8jw5_Y6xXiJNFn5EHj8StP_rS37C64M4MCa4g7g9pVqWI4L636RCZV7lUQ5iIwxrEsQN9YaSW9UGPuqFyJIk4qApxVeaHSiqJ_ZngKbXUSW58mB-OFibGAtdQ6beKuxqZZu0giL01y3Wo5D9T-mFxmKfD7iTc5SeL6NQbnWc2KLyCOxfbREjVd_3UxonLIbQaJSzN9f7_DWT-YL016dufjrUvpw')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30" />

                  {/* Top Badges on Thumbnail */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                      <span className="material-symbols-outlined text-primary text-[13px]">
                        ac_unit
                      </span>
                      Industrial Chiller &amp; VRF
                    </span>
                  </div>

                  {/* Bookmark Action */}
                  <button
                    aria-label="Bookmark position"
                    className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95 cursor-pointer"
                    onClick={toggleBookmark}
                    type="button"
                  >
                    <span
                      className={`material-symbols-outlined text-[17px] ${
                        isBookmarked ? "text-primary" : ""
                      }`}
                    >
                      bookmark
                    </span>
                  </button>

                  {/* Subtle hover indicator */}
                  <div className="absolute bottom-2 left-2.5 hidden md:flex items-center gap-1 text-[11px] font-label-sm text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm group-hover:opacity-0 transition-opacity">
                    <span className="material-symbols-outlined text-[13px]">
                      visibility
                    </span>
                    <span>Hover for scope</span>
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="flex-1 p-space-md sm:p-space-lg flex flex-col justify-between gap-space-sm">
                  {/* Default Information State */}
                  <div className="flex flex-col gap-2">
                    {/* Employer Brand & Metas */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-label-md text-label-md text-secondary font-bold tracking-wide uppercase">
                          CARRIER COMMERCIAL HVAC &amp; REFRIGERATION
                        </span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-primary font-medium">
                          <span className="material-symbols-outlined text-[14px]">
                            verified
                          </span>
                          Verified Employer
                        </span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-outline">
                            schedule
                          </span>
                          Posted 3h ago
                        </span>
                      </div>

                      {/* Salary Band Badge */}
                      <div className="text-right">
                        <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                          €68,000 – €88,000
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {" "}
                          / yr
                        </span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <Link href="/jobs/senior-hvac-technician">
                      <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                        Senior Commercial Chiller &amp; Industrial HVAC Lead Technician
                      </h3>
                    </Link>

                    {/* Key Meta Row */}
                    <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-outline">
                          location_on
                        </span>
                        Frankfurt am Main, Germany (On-Site • Hyperscale Data Center Campus)
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                        Full-Time Permanent
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                        Tier-3 Facility
                      </span>
                      <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          shield
                        </span>
                        EU Blue Card Sponsorship
                      </span>
                    </div>
                  </div>

                  {/* Tags Row */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {[
                      "Ammonia (NH3) & CO2 Subcritical",
                      "Carrier AquaEdge Centrifugal",
                      "Trane Tracer SC+ BMS",
                      "F-Gas Cat 1 (EN 378)",
                      "VDI 6022",
                    ].map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Smooth Interactive Hover Reveal Accordion */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-all duration-300 ease-out overflow-hidden">
                    <div className="min-h-0 pt-0 group-hover:pt-space-sm group-focus-within:pt-space-sm flex flex-col gap-space-sm">
                      <div className="w-full h-px bg-surface-container-high" />
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low p-space-sm rounded-lg border border-outline-variant/30">
                        <div className="flex flex-col gap-0.5 text-on-surface font-body-sm text-body-sm max-w-2xl">
                          <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px]">
                              insights
                            </span>
                            FACILITY SPECIFICATION: Grade Tier-3 Campus
                          </span>
                          <p className="text-body-sm text-on-surface-variant">
                            Requires certified F-Gas Category 1 or EPA Universal license with proven large-tonnage centrifugal chiller maintenance and glycol loop commissioning.
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                          <Link
                            className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                            href="/jobs/senior-hvac-technician"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>View Details &amp; Specs</span>
                            <span className="material-symbols-outlined text-[15px]">
                              arrow_outward
                            </span>
                          </Link>
                          <Link
                            className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1 cursor-pointer"
                            href="/jobs/senior-hvac-technician"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Quick Apply</span>
                            <span className="material-symbols-outlined text-[15px]">
                              send
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Bottom Counter */}
            <div className="mt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-md text-on-surface-variant font-body-sm text-body-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span>Showing 1 of 2,140 plumbing &amp; HVAC openings</span>
              </div>
              <Link
                className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:underline font-semibold"
                href="/find-jobs"
              >
                <span>Load more open positions</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </Link>
            </div>
          </section>

          {/* SECTION 3: Core Technical Credentials Recognized */}
          <section className="w-full px-margin py-space-xl bg-surface">
            <div className="mb-space-lg">
              <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-bold mb-space-xs block">
                COMPLIANCE &amp; VALIDATION
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs font-bold">
                Core Technical Credentials Recognized
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                Jobzeta matches verified HVAC technicians and master pipefitters directly against
                multilateral international qualification registries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Credential Card 1 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary block mb-1 font-semibold">
                    Germany &amp; Austria (DACH)
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                    Meister / Anlagenmechaniker SHK
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    Dual vocational qualification in sanitary, heating, and air conditioning
                    technology with VDI 6022 and TRGI compliance.
                  </p>
                </div>
                <div className="pt-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    DIN EN 378 Validated
                  </span>
                </div>
              </div>

              {/* Credential Card 2 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary block mb-1 font-semibold">
                    United States &amp; Canada
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                    EPA Section 608 Universal &amp; NATE
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    Interprovincial and US federal certification for Type I, II, and III low-pressure
                    &amp; high-pressure refrigerants, commercial chillers, and RTU systems.
                  </p>
                </div>
                <div className="pt-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    EPA Universal Verified
                  </span>
                </div>
              </div>

              {/* Credential Card 3 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">policy</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary block mb-1 font-semibold">
                    European Union &amp; UK
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                    F-Gas Category 1 (EU 517/2014 &amp; 2024/573)
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    Full certification for leak testing, gas recovery, installation, maintenance of
                    stationary refrigeration, heat pumps, and ammonia cascade systems.
                  </p>
                </div>
                <div className="pt-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    EU F-Gas Certified
                  </span>
                </div>
              </div>

              {/* Credential Card 4 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary block mb-1 font-semibold">
                    International Healthcare Standard
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                    Medical Gas Installer (NFPA 99 &amp; HTM 02-01)
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    High-purity brazed copper piping, vacuum systems, manifold certification, and
                    dew point pipeline testing for hospital installations.
                  </p>
                </div>
                <div className="pt-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    NFPA 99 Level 1 Piping
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: Technology & Equipment Stacks Frequently Requisitioned */}
          <section className="w-full px-margin py-space-xl bg-surface-container-low">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
              <div>
                <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-bold mb-space-xs block">
                  SYSTEMS ECOSYSTEM
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs font-bold">
                  HVAC &amp; Thermal Plant Systems Frequently Requisitioned
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                  Browse requisitions grouped by industrial chilling architecture, hydronic loops,
                  and digital building management systems.
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:underline shrink-0 font-semibold"
                href="/find-jobs"
              >
                <span>Explore all HVAC filters →</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* System Card 1 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-bold">
                      840 Roles
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      compress
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                    Centrifugal &amp; Screw Chillers
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    Carrier AquaEdge, Trane CenTraVac, Daikin Magnitude magnetic bearing chillers,
                    and York YMC2 variable-speed water-cooled setups.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Carrier AquaEdge
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Trane CenTraVac
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Daikin Magnitude
                  </span>
                </div>
              </div>

              {/* System Card 2 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-bold">
                      620 Roles
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">air</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                    VRF &amp; Variable Refrigerant Flow
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    Daikin VRV IV, Mitsubishi Electric City Multi, multi-split VRF piping networks,
                    branch selector boxes, and heat recovery circuits.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Daikin VRV
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    City Multi
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Inverter Heat Recovery
                  </span>
                </div>
              </div>

              {/* System Card 3 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-bold">
                      410 Roles
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">water</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                    District Hydronics &amp; Steam Piping
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    High-pressure district heating heat exchangers, Grundfos multi-stage inline pumps,
                    thermodynamic steam traps, and PICV balancing.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Grundfos Magna
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Spirax Sarco
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Danfoss PICV
                  </span>
                </div>
              </div>

              {/* System Card 4 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-bold">
                      270 Roles
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">schema</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                    Building Management Systems (BMS)
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    Siemens Desigo CC, Honeywell WEBs N4 Niagara, BACnet IP/MSTP architectures, and
                    Johnson Controls Metasys plant controllers.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Siemens Desigo
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    Niagara N4
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm">
                    BACnet IP
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: Plant & Facility Hiring Partners */}
          <section className="w-full px-margin py-space-xl bg-surface">
            <div className="mb-space-lg">
              <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-bold mb-space-xs block">
                INDUSTRY NETWORK
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs font-bold">
                Enterprise Facility &amp; Plant Hiring Partners in HVAC
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                Global engineering providers and critical infrastructure facilities hiring certified
                refrigeration and plumbing technicians.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Partner Card 1 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0 font-headline-sm text-headline-sm font-bold">
                  CC
                </div>
                <div className="min-w-0">
                  <h3 className="font-label-lg text-label-lg text-on-surface truncate font-semibold">
                    Carrier Commercial
                  </h3>
                  <span className="font-body-sm text-body-sm text-primary font-medium block">
                    64 Openings
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary truncate block">
                    Europe &amp; DACH Hubs
                  </span>
                </div>
              </div>

              {/* Partner Card 2 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 font-headline-sm text-headline-sm font-bold">
                  DA
                </div>
                <div className="min-w-0">
                  <h3 className="font-label-lg text-label-lg text-on-surface truncate font-semibold">
                    Daikin Applied Europe
                  </h3>
                  <span className="font-body-sm text-body-sm text-primary font-medium block">
                    48 Openings
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary truncate block">
                    Multinational Plants
                  </span>
                </div>
              </div>

              {/* Partner Card 3 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0 font-headline-sm text-headline-sm font-bold">
                  JC
                </div>
                <div className="min-w-0">
                  <h3 className="font-label-lg text-label-lg text-on-surface truncate font-semibold">
                    Johnson Controls
                  </h3>
                  <span className="font-body-sm text-body-sm text-primary font-medium block">
                    56 Openings
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary truncate block">
                    Global Operations
                  </span>
                </div>
              </div>

              {/* Partner Card 4 */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-highest flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 font-headline-sm text-headline-sm font-bold">
                  EQ
                </div>
                <div className="min-w-0">
                  <h3 className="font-label-lg text-label-lg text-on-surface truncate font-semibold">
                    Equinix Critical Facilities
                  </h3>
                  <span className="font-body-sm text-body-sm text-primary font-medium block">
                    34 Openings
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary truncate block">
                    Data Center EMEA
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: Stay Ahead of Requisitions (Alerts Box) */}
          <section className="w-full px-margin py-space-xl bg-surface">
            <div className="rounded-2xl bg-secondary text-on-secondary p-space-xl relative overflow-hidden shadow-lg">
              <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-primary/20 pointer-events-none blur-3xl"></div>
              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed/20 text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider mb-space-md font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse"></span>
                  STAY AHEAD OF REQUISITIONS
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-secondary tracking-tight mb-space-xs font-bold">
                  Receive New Plumbing, Chiller &amp; HVAC Openings
                </h2>
                <p className="font-body-md text-body-md text-secondary-fixed mb-space-lg">
                  Get notified instantly when facilities post new central plant operations, ammonia
                  refrigeration, or critical VRF commissioning roles matching your credentials.
                </p>
                {alertSuccess && (
                  <div className="mb-4 p-3 rounded-lg bg-primary-fixed text-on-primary-fixed-variant font-label-md font-semibold">
                    ✓ Subscribed! You will receive new Plumbing &amp; HVAC job telemetry.
                  </div>
                )}
                <form
                  className="flex flex-col sm:flex-row gap-space-sm max-w-lg mb-space-xs"
                  onSubmit={handleAlertSubmit}
                >
                  <input
                    className="flex-1 px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-sm focus:outline-none"
                    placeholder="technician@plant.com"
                    required
                    type="email"
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                  />
                  <button
                    className="px-space-lg py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all whitespace-nowrap font-semibold"
                    type="submit"
                  >
                    Create Alert
                  </button>
                </form>
                <span className="font-label-sm text-label-sm text-secondary-fixed/70">
                  Zero-spam compliance • Unsubscribe anytime with 1 click
                </span>
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
