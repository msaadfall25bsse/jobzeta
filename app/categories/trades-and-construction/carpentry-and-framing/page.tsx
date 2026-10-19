"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CarpentryAndFramingPage() {
  const [bookmarked, setBookmarked] = useState(false);
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSubDiscipline, setAlertSubDiscipline] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertEmail) {
      setAlertSuccess(true);
      setTimeout(() => setAlertSuccess(false), 5000);
      setAlertEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md text-body-md flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Sub-Header / Breadcrumbs & Identifiers Bar */}
          <section className="w-full px-margin py-space-sm bg-surface-container-low border-b border-surface-container-highest">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
              <nav
                aria-label="Breadcrumbs"
                className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant"
              >
                <Link
                  className="hover:text-primary transition-colors"
                  href="/"
                >
                  Home
                </Link>
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  chevron_right
                </span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories"
                >
                  Categories
                </Link>
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  chevron_right
                </span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/trades-and-construction"
                >
                  Trades &amp; Construction
                </Link>
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  chevron_right
                </span>
                <span className="text-on-surface font-semibold">
                  Carpentry &amp; Framing
                </span>
              </nav>
              <div className="flex items-center gap-space-sm">
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                  Directory Code:
                </span>
                <span className="inline-flex items-center px-space-xs py-0.5 rounded bg-surface-container-highest font-mono text-[12px] font-bold text-on-surface">
                  TC-CARP-FRAME-3120
                </span>
              </div>
            </div>
          </section>

          {/* Hero & Primary Discipline Overview */}
          <section className="w-full px-margin pt-space-lg pb-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              {/* Status Badges Bar */}
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Specialized Craft Sub-Discipline
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-sm font-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  Eurocode 5 &amp; Red Seal Timber Validated
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Live Exchange Feed
                </span>
              </div>

              {/* Main Headline & Subtitle */}
              <div className="flex flex-col gap-space-xs max-w-4xl">
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Structural Carpentry, Mass Timber &amp; Heavy Formwork Systems
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Engineered mass timber construction (CLT/Glulam), heavy civil concrete formwork systems, commercial steel stud framing, and architectural finish joinery across infrastructure mega-projects.
                </p>
              </div>

              {/* 3 Metric Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-xs">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-highest flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">
                        Active Requisitions
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        engineering
                      </span>
                    </div>
                    <div className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
                      1,920
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                    Global certified openings across 29 jurisdictions
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-highest flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">
                        Average Global Wage Band
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        payments
                      </span>
                    </div>
                    <div className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
                      €58k – €86k
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                    $64k - $94k eq. Shift differential, site lodge &amp; high-altitude allowances included
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-highest flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">
                        Compliance Standard
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        gavel
                      </span>
                    </div>
                    <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      ZVDH / Red Seal / OSHA 1926
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                    Pre-cleared mass timber &amp; structural framing registries active
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Search & Filter Bar */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto bg-surface-container-lowest rounded-xl p-space-md shadow-md border border-surface-container-highest">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-sm items-center">
                {/* Keyword Input */}
                <div className="lg:col-span-5 flex items-center bg-surface-container-low rounded-lg px-space-md py-2.5 border border-surface-container-highest">
                  <span className="material-symbols-outlined text-tertiary mr-space-sm text-[20px]">
                    search
                  </span>
                  <input
                    className="w-full bg-transparent text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none"
                    placeholder="Mass Timber CLT, Doka / Peri Formwork, Glulam, Heavy Framing..."
                    type="text"
                  />
                </div>
                {/* Region Dropdown */}
                <div className="lg:col-span-3 flex items-center bg-surface-container-low rounded-lg px-space-md py-2.5 border border-surface-container-highest">
                  <span className="material-symbols-outlined text-tertiary mr-space-sm text-[20px]">
                    location_on
                  </span>
                  <select className="w-full bg-transparent text-body-sm font-body-sm text-on-surface focus:outline-none cursor-pointer">
                    <option value="">Munich / Vancouver / Vienna...</option>
                    <option value="muc">Munich, Germany (DACH)</option>
                    <option value="yvr">Vancouver, Canada (BC Mass Timber)</option>
                    <option value="vie">Vienna, Austria (Eurocode Hub)</option>
                    <option value="lon">London &amp; SE England, UK</option>
                    <option value="sea">Seattle / Portland, USA (PNW)</option>
                  </select>
                </div>
                {/* Qualification Selector */}
                <div className="lg:col-span-3 flex items-center bg-surface-container-low rounded-lg px-space-md py-2.5 border border-surface-container-highest">
                  <span className="material-symbols-outlined text-tertiary mr-space-sm text-[20px]">
                    badge
                  </span>
                  <select className="w-full bg-transparent text-body-sm font-body-sm text-on-surface focus:outline-none cursor-pointer">
                    <option value="">Zimmermann Geselle / Red Seal / NVQ Level 3...</option>
                    <option value="dach">Zimmermann Gesellenbrief / Meister (ZVDH)</option>
                    <option value="ca-us">Red Seal Carpenter (Interprovincial / UBC)</option>
                    <option value="uk">NVQ Level 3 &amp; CSCS Gold Card Craft</option>
                    <option value="nordic">Fagbrev Tømrer / Byggnadsträarbetare</option>
                  </select>
                </div>
                {/* Submit Button */}
                <div className="lg:col-span-1">
                  <button className="w-full h-11 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center transition-all shadow-sm">
                    Filter Live
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Requisitions Section */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              {/* Section Header */}
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Featured Requisitions • 1,920 Active Openings
                  </h2>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-sm text-label-sm text-tertiary">
                    Sort By:
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1 cursor-pointer">
                    Highest Structural Rating
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </span>
                </div>
              </div>

              {/* PRIMARY FEATURED JOB CARD */}
              <article
                aria-label="Senior Mass Timber (CLT/Glulam) & Structural Carpenter Lead requisition"
                className="group relative w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                tabIndex={0}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left Column: Visual Media & Badges */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                    <div
                      className="w-full h-full min-h-[190px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRR4oQoHb_RBE2KZDk2R9SIsD3ptoMOMLnRz0yR5Vu6H1IJC6_G6Ijlcl_N6XHIkP75UA3JBwtqAcEsZ1nUFYfe-gtCDEjJfsoZwKHqxro9KCm_3_yfPJeznSUHM55zPvrQLJmf69B1UYOcD-_PcCd0AcPqVna9X8dTm8LtWfpqCOxmJBZ0EfCQ2FaSYywYdigmQ11vrCkkjIX6HrE0yTLWbZ0fkdXheZK1aM9Ib177wmYsms8qnzR0A')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30" />
                    
                    {/* Floating pill tags on media */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[13px]">carpenter</span>
                        Mass Timber &amp; Heavy Joinery
                      </span>
                    </div>

                    <button
                      aria-label="Bookmark position"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setBookmarked(!bookmarked);
                      }}
                    >
                      <span className="material-symbols-outlined text-[17px]">
                        {bookmarked ? "bookmark_added" : "bookmark"}
                      </span>
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
                            Züblin Timber &amp; Stora Enso JV
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
                            €62,000 – €79,000
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant"> / yr base</span>
                        </div>
                      </div>

                      {/* Main Job Title */}
                      <Link href="/jobs/senior-mass-timber-carpenter">
                        <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                          Senior Mass Timber (CLT/Glulam) &amp; Structural Carpenter Lead
                        </h3>
                      </Link>

                      {/* Meta Tags: Location, Shift, Type, Clearance */}
                      <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                          Munich, Germany (On-Site • High-Rise Hybrid Mass Timber Project)
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Full-Time Permanent
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                          Tier-1 Architectural Timber
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">shield</span>
                          EU Blue Card &amp; Relocation Support
                        </span>
                      </div>
                    </div>

                    {/* Skill Tags / Systems */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Cross-Laminated Timber (CLT)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Glulam Beam Erection
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Doka / Peri Formwork Systems
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Eurocode 5 (DIN EN 1995)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Hilti Anchor &amp; Rothoblaas Fasteners
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
                              Requires verified Zimmermann Gesellenbrief, Red Seal, or NVQ Level 3 with proven mass timber high-rise joinery and laser station alignment proficiency. Site Clearance: DIN EN 1995 Massivholz. Crane Rigging Coord: Included in Scope.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            <Link
                              className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-mass-timber-carpenter"
                            >
                              <span>View Details &amp; Specs</span>
                              <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                            </Link>
                            <Link
                              className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-mass-timber-carpenter"
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

              {/* Pagination Counter */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs text-body-sm font-body-sm text-on-surface-variant">
                <span>Showing 1 of 1,920 carpentry &amp; framing openings</span>
                <button className="font-label-md text-label-md text-primary font-semibold hover:underline flex items-center gap-1">
                  Load more open positions
                  <span className="material-symbols-outlined text-[16px]">
                    expand_more
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Core Technical Credentials Recognized Matrix (4 columns) */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Credential Authority Framework
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Core Technical Credentials Recognized
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Matrix 1: DACH */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-highest flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wide">
                        Germany, Austria &amp; CH
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        architecture
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Zimmermann / Zimmerer Gesellenbrief &amp; Meister
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      ZVDH / HWK certified, DIN EN 1995 Eurocode 5, high-altitude mass timber erection.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-surface-container-highest flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Recognition:
                    </span>
                    <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold">
                      Full Mutual Recognition
                    </span>
                  </div>
                </div>

                {/* Matrix 2: US & Canada */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-highest flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wide">
                        United States &amp; Canada
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        construction
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Red Seal Carpenter &amp; UBC Journeyman
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Interprovincial Red Seal Carpentry endorsement, OSHA 1926 Fall Protection, Mass Timber Specialist cert.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-surface-container-highest flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Status:
                    </span>
                    <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
                      Tier-1 Pre-Qualified
                    </span>
                  </div>
                </div>

                {/* Matrix 3: UK & Ireland */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-highest flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wide">
                        United Kingdom &amp; Ireland
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        handyman
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      NVQ Level 3 &amp; CSCS Gold Card
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Advanced Craft Structural Timber, CITB Timber Frame Construction validation, SSSTS site supervisor eligible.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-surface-container-highest flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Clearance:
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface text-[11px] font-bold">
                      Cross-Jurisdiction Clearance
                    </span>
                  </div>
                </div>

                {/* Matrix 4: Nordic */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-highest flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wide">
                        Nordic &amp; Scandinavian
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        cabin
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Fagbrev Tømrer / Byggnadsträarbetare
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Norwegian/Swedish certified structural timber builder, Byggkeramikrådet &amp; Massivtre mounting protocol.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-surface-container-highest flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Validation:
                    </span>
                    <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold">
                      Nordic Reciprocal Validated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Carpentry & Timber Specialization Systems Frequently Requisitioned (4 cards with counts) */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Engineering Sub-Systems
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Specialization Systems Frequently Requisitioned
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* System 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-surface-container-highest hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                        680 Roles
                      </span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">
                        domain
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Mass Timber &amp; CLT Hybrid Framing
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Binderholz, Stora Enso, KLH mass timber panels, multi-story glulam post-and-beam connections, Rothoblaas concealed connectors.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-space-md">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      Mass Timber
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      CLT Erection
                    </span>
                  </div>
                </div>

                {/* System 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-surface-container-highest hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                        540 Roles
                      </span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">
                        foundation
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Heavy Civil Concrete Formwork
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Doka Framax, Peri Trio, climbing formwork for core shafts, MEVA heavy-duty slab falsework, engineered shoring.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-space-md">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      Doka / Peri
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      Climbing Shoring
                    </span>
                  </div>
                </div>

                {/* System 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-surface-container-highest hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                        410 Roles
                      </span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">
                        grid_4x4
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Commercial Light Gauge Steel Framing
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Sadev framing, Dietrich steel studs, exterior curtain wall backer framing, seismic bracing, drywall assemblies.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-space-md">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      LGS Framing
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      Seismic Code
                    </span>
                  </div>
                </div>

                {/* System 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-surface-container-highest hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                        290 Roles
                      </span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">
                        carpenter
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Architectural Millwork &amp; Joinery
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      High-end acoustic panelling, fire-rated door sets (DIN 4102 / FD60), curved timber soffits, CNC-prefabricated assembly.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-space-md">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      Fire-Door Rated
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      Millwork
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Timber & General Contractor Hiring Partners (4 cards) */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Enterprise Timber &amp; General Contractor Hiring Partners
                </h2>
                <Link
                  href="/companies"
                  className="font-label-sm text-label-sm text-primary font-bold hover:underline cursor-pointer"
                >
                  View All 180+ Partners →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Partner 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-highest flex items-center gap-space-md hover:shadow-sm transition-all">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-black text-secondary shrink-0">
                    ZT
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface truncate">
                      Züblin Timber
                    </span>
                    <span className="text-body-sm font-body-sm text-primary font-semibold">
                      58 Openings Active
                    </span>
                    <span className="text-[12px] text-tertiary truncate">
                      Europe &amp; DACH Hubs
                    </span>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-highest flex items-center gap-space-md hover:shadow-sm transition-all">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-black text-secondary shrink-0">
                    SE
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface truncate">
                      Stora Enso Building
                    </span>
                    <span className="text-body-sm font-body-sm text-primary font-semibold">
                      46 Openings Active
                    </span>
                    <span className="text-[12px] text-tertiary truncate">
                      Nordic &amp; Central Europe
                    </span>
                  </div>
                </div>

                {/* Partner 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-highest flex items-center gap-space-md hover:shadow-sm transition-all">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-black text-secondary shrink-0">
                    LL
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface truncate">
                      Lendlease Mass Timber
                    </span>
                    <span className="text-body-sm font-body-sm text-primary font-semibold">
                      39 Openings Active
                    </span>
                    <span className="text-[12px] text-tertiary truncate">
                      Global High-Rise Projects
                    </span>
                  </div>
                </div>

                {/* Partner 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-highest flex items-center gap-space-md hover:shadow-sm transition-all">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-black text-secondary shrink-0">
                    BM
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface truncate">
                      BAM Construction
                    </span>
                    <span className="text-body-sm font-body-sm text-primary font-semibold">
                      52 Openings Active
                    </span>
                    <span className="text-[12px] text-tertiary truncate">
                      UK &amp; Ireland Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Alert Subscription Section */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto bg-inverse-surface text-inverse-on-surface rounded-2xl p-space-lg lg:p-space-xl shadow-xl">
              <div className="flex flex-col gap-space-md max-w-3xl">
                <span className="self-start px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-label-sm uppercase font-bold tracking-wider">
                  PRIORITY TIMBER REQUISITION ALERTS
                </span>
                <h2 className="font-headline-lg text-headline-lg text-white font-bold tracking-tight">
                  Receive Structural Carpentry &amp; Mass Timber Requisitions Instantly
                </h2>
                <p className="font-body-md text-body-md text-surface-container-highest">
                  Get immediate notifications for certified CLT erectors, heavy formwork specialists, and timber framing leads filtered by your specific Red Seal, ZVDH, or NVQ profile.
                </p>

                {alertSuccess ? (
                  <div className="p-space-md rounded-lg bg-primary-container text-on-primary-container font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Your alert subscription has been confirmed! You will receive high-priority carpentry notifications.
                  </div>
                ) : (
                  <form
                    onSubmit={handleAlertSubmit}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-space-sm pt-space-xs"
                  >
                    <div className="sm:col-span-5">
                      <input
                        required
                        value={alertEmail}
                        onChange={(e) => setAlertEmail(e.target.value)}
                        className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Verified Email or Trade License #"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-4">
                      <select
                        value={alertSubDiscipline}
                        onChange={(e) => setAlertSubDiscipline(e.target.value)}
                        className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                      >
                        <option value="">Target Sub-Discipline</option>
                        <option value="clt">Mass Timber CLT</option>
                        <option value="formwork">Commercial Formwork</option>
                        <option value="millwork">Architectural Joinery</option>
                      </select>
                    </div>
                    <div className="sm:col-span-3">
                      <button
                        type="submit"
                        className="w-full h-12 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg font-bold shadow-md transition-all flex items-center justify-center cursor-pointer"
                      >
                        Activate Free Alerts
                      </button>
                    </div>
                  </form>
                )}

                {/* Compliance Registry Badge */}
                <div className="flex items-center gap-2 pt-2 text-[12px] text-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">
                    verified_user
                  </span>
                  <span>
                    GDPR &amp; ISO 27001 Compliant Workforce Verification Registry
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
