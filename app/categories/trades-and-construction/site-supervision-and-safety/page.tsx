"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteSupervisionAndSafetyPage() {
  const [bookmarked, setBookmarked] = useState(false);
  const [alertEmail, setAlertEmail] = useState("");
  const [alertTarget, setAlertTarget] = useState("Target: Civil General Superintendence");
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
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Content Container with Standard Shell Margins */}
          <div className="w-full px-margin-mobile lg:px-margin py-space-lg flex flex-col gap-space-xl">
            {/* Top Breadcrumbs & Sub-Discipline Meta Badges */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <nav className="flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
                <span className="text-outline-variant">/</span>
                <Link className="hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="text-outline-variant">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/trades-and-construction"
                >
                  Trades &amp; Construction
                </Link>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface font-semibold">
                  Site Supervision &amp; Safety
                </span>
                <span className="ml-space-xs font-label-sm text-label-sm px-space-sm py-0.5 rounded bg-surface-container text-tertiary">
                  ID: TC-SITE-HSE-5020
                </span>
              </nav>
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Live Exchange Feed
                </span>
                <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    verified_user
                  </span>
                  NEBOSH &amp; SiGeKo Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm">
                  Specialized Craft Sub-Discipline
                </span>
              </div>
            </div>

            {/* Header & Core Requisition Metrics */}
            <div className="flex flex-col gap-space-lg">
              <div className="max-w-4xl flex flex-col gap-space-sm">
                <h1 className="font-headline-xl text-headline-xl text-secondary font-bold tracking-tight">
                  Site Supervision, Civil Superintendence &amp; Industrial HSE Safety Systems
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Certified civil site directors, general superintendents, NEBOSH environmental safety officers, and SiGeKo coordinators across major infrastructure and high-rise mega-projects.
                </p>
              </div>

              {/* Metrics Row (Flat structural containment with diffused navy shadow) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {/* Metric 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] flex flex-col justify-between gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-tertiary font-bold">
                      Active Requisitions
                    </span>
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      engineering
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-display-lg text-headline-xl font-bold text-secondary">
                        1,420
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full">
                        +12.4% MoM
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Global certified openings across 28 jurisdictions with urgent deployment calls.
                    </p>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] flex flex-col justify-between gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-tertiary font-bold">
                      Average Global Wage Band
                    </span>
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      payments
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-display-lg text-headline-xl font-bold text-secondary">
                        €68k – €98k
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        ($75k - $108k eq.)
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Site differential &amp; zero-incident bonus included. Lodge and mobility stipend provided.
                    </p>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] flex flex-col justify-between gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-tertiary font-bold">
                      Compliance Standard
                    </span>
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      fact_check
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-lg text-headline-lg font-bold text-secondary">
                        SiGeKo / NEBOSH / OSHA 30
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Pre-cleared European &amp; international construction safety registries active for fast-track mobilization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Requisition Search & Filter Bar */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
                {/* Search Keyword */}
                <div className="md:col-span-5 relative flex items-center">
                  <span className="material-symbols-outlined absolute left-space-md text-tertiary text-[20px]">
                    search
                  </span>
                  <input
                    className="w-full h-11 pl-11 pr-space-md rounded-lg bg-surface font-body-md text-body-md text-on-surface outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                    placeholder="Search craft title or qualification..."
                    type="text"
                    defaultValue="Civil Superintendent, SiGeKo, NEBOSH Diploma, HSE Safety Director"
                  />
                </div>
                {/* Location Dropdown */}
                <div className="md:col-span-3 relative flex items-center">
                  <span className="material-symbols-outlined absolute left-space-md text-tertiary text-[20px]">
                    location_on
                  </span>
                  <select
                    defaultValue="Frankfurt / Munich / London / Amsterdam"
                    className="w-full h-11 pl-11 pr-space-lg rounded-lg bg-surface font-body-sm text-body-sm text-on-surface appearance-none outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                  >
                    <option value="Frankfurt / Munich / London / Amsterdam">
                      Frankfurt / Munich / London / Amsterdam
                    </option>
                    <option value="london">Greater London &amp; Thames Estuary</option>
                    <option value="berlin">Berlin-Brandenburg Metro</option>
                    <option value="rotterdam">Rotterdam Industrial Harbour</option>
                    <option value="zurich">Zurich &amp; Basel High-Rise Hubs</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-space-sm pointer-events-none text-tertiary text-[18px]">
                    expand_more
                  </span>
                </div>
                {/* Credential Filter */}
                <div className="md:col-span-2 relative flex items-center">
                  <span className="material-symbols-outlined absolute left-space-md text-tertiary text-[20px]">
                    workspace_premium
                  </span>
                  <select
                    defaultValue="SiGeKo (BaustellV) / NEBOSH / CSP"
                    className="w-full h-11 pl-11 pr-space-lg rounded-lg bg-surface font-body-sm text-body-sm text-on-surface appearance-none outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                  >
                    <option value="SiGeKo (BaustellV) / NEBOSH / CSP">
                      SiGeKo (BaustellV) / NEBOSH / CSP
                    </option>
                    <option value="nebosh">NEBOSH International Diploma</option>
                    <option value="sigeko">SiGeKo RAB 30 Compliant</option>
                    <option value="osha">OSHA 30 / 500 Certified</option>
                    <option value="iosh">IOSH Managing Safely</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-space-sm pointer-events-none text-tertiary text-[18px]">
                    expand_more
                  </span>
                </div>
                {/* Filter Submit CTA */}
                <div className="md:col-span-2 flex justify-end">
                  <button
                    className="w-full h-11 inline-flex items-center justify-center gap-space-xs font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary-container rounded-lg shadow-sm transition-colors cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">tune</span>
                    Filter Live
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Requisition Section (3-Column Layout matching SCREEN_15) */}
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <h2 className="font-headline-md text-headline-md text-secondary font-bold">
                    Featured Requisitions • 1,420 Active Openings
                  </h2>
                </div>
                <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <span>Sort by:</span>
                  <button className="font-label-lg text-label-lg text-secondary font-bold flex items-center gap-0.5 cursor-pointer">
                    Highest Responsibility Rating
                    <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
                  </button>
                </div>
              </div>

              {/* PRIMARY FEATURED JOB CARD */}
              <article
                aria-label="Senior Civil Construction Superintendent & Lead Site HSE Safety Director requisition"
                className="group relative w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                tabIndex={0}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left Column: Visual Media & Badges */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                    <div
                      className="w-full h-full min-h-[190px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgl5g2dD1mpwjC9KotMp1ZrToIK0oz2Td92eu8FftIDusMG7TwSPBFRn1Ntix9cG5Dr69KDtCiUAt0F1rsoFLiMvxeCdIpNaqt3IWtERPjmrtSmzBZmoXtRiD-Cxxqp1M-_A0TgCYrj-2L8chVFeydcVNWAQGHDNu_VzI0oWV-YKvB17vNF1RQIZq2xLiXl68PddmAspMiKQvvim9C6Mn25vllHmmluhl6V9QRowypJRPQC0tt5Btz6g')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30" />
                    
                    {/* Floating pill tags on media */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[13px]">shield</span>
                        Site Superintendence &amp; HSE
                      </span>
                    </div>

                    <button
                      aria-label="Bookmark Requisition"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setBookmarked(!bookmarked);
                      }}
                    >
                      <span className="material-symbols-outlined text-[17px]">
                        {bookmarked ? "bookmark" : "bookmark_border"}
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
                            Hochtief Civil &amp; Bouygues Construction JV
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-primary font-medium">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Verified Employer
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-outline">schedule</span>
                            Posted 3h ago
                          </span>
                        </div>

                        {/* Salary Highlight */}
                        <div className="text-right">
                          <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                            €74,000 – €98,000
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant"> / yr base</span>
                        </div>
                      </div>

                      {/* Main Job Title */}
                      <Link href="/jobs/senior-civil-superintendent-hse">
                        <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                          Senior Civil Construction Superintendent &amp; Lead Site HSE Safety Director
                        </h3>
                      </Link>

                      {/* Meta Tags: Location, Shift, Type, Clearance */}
                      <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                          Frankfurt am Main, Germany (On-Site • High-Rise Financial Hub Mega-Project)
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Full-Time Permanent
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                          Tier-1 General Contracting
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">shield</span>
                          EU Blue Card &amp; Relocation Package
                        </span>
                      </div>
                    </div>

                    {/* Skill Tags / Systems */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        DIN 4107 / BaustellV SiGeKo
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        NEBOSH Construction Diploma
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        OSHA 30 Construction
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Digital BIM 360 Field / Solibri
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Zero-Incident HSE Protocols
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
                              Requires verified SiGeKo (BaustellV) certification or NEBOSH International Diploma with minimum 8+ years demonstrated zero-incident site governance on high-rise or major infrastructure builds. Clearance: DIN 4107 &amp; ISO 45001 Active.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            <Link
                              className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-civil-superintendent-hse"
                            >
                              <span>View Details &amp; Specs</span>
                              <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                            </Link>
                            <Link
                              className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-civil-superintendent-hse"
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

            {/* Core Technical Credentials Recognized Matrix (4 Cards) */}
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col gap-0.5">
                <h2 className="font-headline-sm text-headline-sm text-secondary font-bold">
                  Core Recognized Technical Credentials &amp; Statutory Licenses
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Validated cross-border competency standards accepted for automatic jurisdictional dispatch across Jobzeta.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Credential 1: Germany & DACH */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-bold text-tertiary uppercase tracking-wider">
                        Germany &amp; DACH
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      SiGeKo / Bauleiter
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Sicherheits- und Gesundheitsschutzkoordinator (BaustellV / RAB 30) active register certification for civil site directors.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                      Full Mutual Recognition
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary">Tier-1 Cleared</span>
                  </div>
                </div>

                {/* Credential 2: USA & Canada */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-bold text-tertiary uppercase tracking-wider">
                        United States &amp; Canada
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        military_tech
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      CSP &amp; OSHA 30 / 500
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Certified Safety Professional (BCSP) &amp; OSHA 30/500 Master Construction Trainer for heavy infrastructure safety leadership.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-secondary-fixed/50 text-secondary font-bold">
                      Tier-1 Pre-Qualified
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary">Reciprocal Direct</span>
                  </div>
                </div>

                {/* Credential 3: United Kingdom & Ireland */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-bold text-tertiary uppercase tracking-wider">
                        United Kingdom &amp; Ireland
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        assignment_turned_in
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      NEBOSH Dip &amp; NVQ L6
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      NEBOSH National Diploma in Construction Health &amp; Safety and NVQ Level 6 Construction Site Management black CSIS card.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                      Cross-Jurisdiction Clearance
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary">Exempt Audit</span>
                  </div>
                </div>

                {/* Credential 4: European & International */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-bold text-tertiary uppercase tracking-wider">
                        European &amp; International
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        policy
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      IOSH &amp; ISO 45001
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      IOSH Managing Safely &amp; certified ISO 45001 Lead Auditor credentials covering multi-contractor heavy engineering sites.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-secondary-fixed/50 text-secondary font-bold">
                      Reciprocal Validated
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary">All Sectors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialization Systems Frequently Requisitioned (4 Grid Cards) */}
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <h2 className="font-headline-sm text-headline-sm text-secondary font-bold">
                    Specialization Systems Frequently Requisitioned
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Core functional disciplines currently experiencing critical cross-border talent shortages.
                  </p>
                </div>
                <Link
                  className="hidden sm:inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold hover:underline"
                  href="/find-jobs"
                >
                  Explore All Disciplines
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Sub-spec 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] hover:shadow-[0_10px_15px_-3px_rgba(23,59,103,0.08)] transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">apartment</span>
                      </div>
                      <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-surface-container text-secondary font-bold">
                        510 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Civil Construction General Superintendence
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Crane zoning, core concrete pours, structural steel coordination, BIM clash resolution and daily multi-trade trade coordination.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-tertiary">
                      General Contracting
                    </span>
                    <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-tertiary">
                      BIM 360
                    </span>
                  </div>
                </div>

                {/* Sub-spec 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] hover:shadow-[0_10px_15px_-3px_rgba(23,59,103,0.08)] transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
                      </div>
                      <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-surface-container text-secondary font-bold">
                        430 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Health, Safety &amp; Environmental (HSE) Direction
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      BaustellV compliance, zero-harm audits, hazardous working permits, toxicological air monitoring, and statutory incident investigation.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-tertiary">
                      SiGeKo
                    </span>
                    <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-tertiary">
                      ISO 45001
                    </span>
                  </div>
                </div>

                {/* Sub-spec 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] hover:shadow-[0_10px_15px_-3px_rgba(23,59,103,0.08)] transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">checklist_rtl</span>
                      </div>
                      <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-surface-container text-secondary font-bold">
                        290 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Quality Assurance &amp; Structural Inspection
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Reinforcement placement verification, Eurocode compliance, concrete slump testing, and pre-cast tolerance sign-offs.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-tertiary">
                      QA/QC
                    </span>
                    <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-tertiary">
                      Eurocode 2
                    </span>
                  </div>
                </div>

                {/* Sub-spec 4 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.04)] hover:shadow-[0_10px_15px_-3px_rgba(23,59,103,0.08)] transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">carpenter</span>
                      </div>
                      <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-surface-container text-secondary font-bold">
                        190 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Temporary Works &amp; Scaffolding Coordination
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Heavy shoring sign-off, façade mast climber audits, excavation dewatering safety, and specialized heavy formwork authorization.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-tertiary">
                      BS 5975
                    </span>
                    <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-tertiary">
                      Deep Shoring
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Hiring Partners */}
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col gap-0.5">
                <h2 className="font-headline-sm text-headline-sm text-secondary font-bold">
                  Tier-1 General Contractors &amp; Infrastructure Partners
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Actively hiring validated site superintendents and HSE officers through Jobzeta&apos;s compliance dispatch pipeline.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
                {/* Partner 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary font-bold font-headline-sm">
                    HT
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg font-bold text-secondary">
                      Hochtief Infrastructure
                    </span>
                    <span className="font-body-sm text-body-sm text-primary font-semibold">
                      62 Openings Active
                    </span>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary font-bold font-headline-sm">
                    BY
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg font-bold text-secondary">
                      Bouygues Travaux Publics
                    </span>
                    <span className="font-body-sm text-body-sm text-primary font-semibold">
                      45 Openings Active
                    </span>
                  </div>
                </div>

                {/* Partner 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary font-bold font-headline-sm">
                    SB
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg font-bold text-secondary">
                      Strabag SE
                    </span>
                    <span className="font-body-sm text-body-sm text-primary font-semibold">
                      58 Openings Active
                    </span>
                  </div>
                </div>

                {/* Partner 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary font-bold font-headline-sm">
                    VC
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg font-bold text-secondary">
                      VINCI Construction
                    </span>
                    <span className="font-body-sm text-body-sm text-primary font-semibold">
                      41 Openings Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Alert Dispatch Banner */}
            <div className="bg-surface-container-high rounded-xl p-space-lg shadow-sm">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-space-lg">
                <div className="flex flex-col gap-space-xs max-w-xl">
                  <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md font-bold">
                    <span className="material-symbols-outlined text-[18px]">
                      notifications_active
                    </span>
                    REAL-TIME DISPATCH ALERTS
                  </div>
                  <h3 className="font-headline-md text-headline-md text-secondary font-bold">
                    Receive Site Supervision &amp; HSE Safety Requisitions Instantly
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Be notified first when Tier-1 infrastructure joint ventures issue immediate mobilization requisitions matching your specific SiGeKo, NEBOSH, or OSHA accreditations.
                  </p>
                </div>

                {/* Dispatch Input Form */}
                <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-space-xs flex-1 max-w-md">
                  {alertSuccess ? (
                    <div className="p-space-md rounded-lg bg-primary-container text-on-primary-container font-medium flex items-center gap-2 w-full">
                      <span className="material-symbols-outlined">check_circle</span>
                      Alerts activated! You will receive priority notifications.
                    </div>
                  ) : (
                    <form
                      onSubmit={handleAlertSubmit}
                      className="w-full flex flex-col sm:flex-row gap-space-xs"
                    >
                      <div className="flex-1 flex flex-col gap-space-xs">
                        <input
                          className="w-full h-11 px-space-md rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="superintendent@works.eu"
                          required
                          type="email"
                          value={alertEmail}
                          onChange={(e) => setAlertEmail(e.target.value)}
                        />
                        <select
                          value={alertTarget}
                          onChange={(e) => setAlertTarget(e.target.value)}
                          className="w-full h-9 px-space-sm rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface appearance-none outline-none cursor-pointer"
                        >
                          <option>Target: Civil General Superintendence</option>
                          <option>Target: Lead Site HSE Direction</option>
                          <option>Target: QA/QC Structural Inspection</option>
                          <option>Target: Temporary Works Engineering</option>
                        </select>
                      </div>
                      <div className="flex flex-col justify-start">
                        <button
                          className="h-11 px-space-md inline-flex items-center justify-center font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary-container rounded-lg shadow-sm whitespace-nowrap transition-colors cursor-pointer"
                          type="submit"
                        >
                          Activate Alerts
                        </button>
                        <div className="flex items-center gap-1 text-[11px] text-tertiary mt-2">
                          <span className="material-symbols-outlined text-[14px] text-primary">
                            verified
                          </span>
                          ISO 27001 Secure
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
