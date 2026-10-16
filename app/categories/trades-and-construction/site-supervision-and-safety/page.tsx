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

              {/* Master Featured Job Card */}
              <div className="bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(23,59,103,0.06)] hover:shadow-[0_10px_15px_-3px_rgba(23,59,103,0.08)] transition-all p-space-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
                  {/* Column 1: Left Landscape Photo with Badges */}
                  <div className="lg:col-span-4 flex flex-col justify-between relative rounded-xl overflow-hidden bg-surface-container min-h-[300px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgl5g2dD1mpwjC9KotMp1ZrToIK0oz2Td92eu8FftIDusMG7TwSPBFRn1Ntix9cG5Dr69KDtCiUAt0F1rsoFLiMvxeCdIpNaqt3IWtERPjmrtSmzBZmoXtRiD-Cxxqp1M-_A0TgCYrj-2L8chVFeydcVNWAQGHDNu_VzI0oWV-YKvB17vNF1RQIZq2xLiXl68PddmAspMiKQvvim9C6Mn25vllHmmluhl6V9QRowypJRPQC0tt5Btz6g')",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
                    </div>
                    {/* Top Left Floating Badge */}
                    <div className="relative z-10 p-space-md flex items-start justify-between">
                      <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-label-sm text-label-sm font-semibold tracking-wide">
                        <span className="material-symbols-outlined text-primary-fixed text-[14px]">
                          shield
                        </span>
                        Site Superintendence &amp; HSE
                      </span>
                      <button
                        onClick={() => setBookmarked(!bookmarked)}
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 flex items-center justify-center text-white transition-colors cursor-pointer"
                        title="Bookmark Requisition"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {bookmarked ? "bookmark" : "bookmark_border"}
                        </span>
                      </button>
                    </div>
                    {/* Bottom Floating Pill & Reference Bar */}
                    <div className="relative z-10 p-space-md flex flex-col gap-space-xs">
                      <div className="self-end">
                        <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm font-bold shadow-sm">
                          <span className="material-symbols-outlined text-primary text-[14px]">
                            visibility
                          </span>
                          Hover for scope
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-white/90 font-label-sm text-label-sm pt-space-xs border-t border-white/20">
                        <span>Ref: BY-FRK-HSE-9044</span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px] text-primary-fixed">
                            schedule
                          </span>
                          Updated 1h ago
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Center Scope & Position Spec */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-space-md py-1">
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-bold">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          verified
                        </span>
                        <span>Hochtief Civil &amp; Bouygues Construction JV</span>
                        <span className="text-tertiary font-normal">• Posted 3h ago</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight hover:text-primary transition-colors cursor-pointer">
                        Senior Civil Construction Superintendent &amp; Lead Site HSE Safety Director
                      </h3>
                      <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[18px] text-secondary">
                          location_on
                        </span>
                        <span>
                          Frankfurt am Main, Germany (On-Site • High-Rise Financial Hub Mega-Project)
                        </span>
                      </div>
                      {/* Pill Badges */}
                      <div className="flex flex-wrap items-center gap-space-xs pt-1">
                        <span className="px-space-sm py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-semibold">
                          Full-Time Permanent
                        </span>
                        <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed/40 font-label-sm text-label-sm text-secondary font-semibold">
                          Tier-1 General Contracting
                        </span>
                        <span className="px-space-sm py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">flight_takeoff</span>
                          EU Blue Card &amp; Relocation Package
                        </span>
                      </div>
                      {/* Tech Compliance Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-space-xs">
                        <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-on-surface-variant">
                          DIN 4107 / BaustellV SiGeKo
                        </span>
                        <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-on-surface-variant">
                          NEBOSH Construction Diploma
                        </span>
                        <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-on-surface-variant">
                          OSHA 30 Construction
                        </span>
                        <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-on-surface-variant">
                          Digital BIM 360 Field / Solibri
                        </span>
                        <span className="px-space-sm py-0.5 rounded bg-surface font-label-sm text-label-sm text-on-surface-variant">
                          Zero-Incident HSE Protocols
                        </span>
                      </div>
                    </div>
                    {/* Wage Display */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-0.5">
                      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wide font-bold">
                        Total Compensation Structure
                      </span>
                      <div className="flex flex-wrap items-baseline gap-space-xs">
                        <span className="font-headline-md text-headline-md font-bold text-primary">
                          €74,000 – €98,000
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          / yr base + 18% Project HSE Safety Completion Bonus + Per Diem Lodge
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Right Compliance Assessment Box */}
                  <div className="lg:col-span-3 bg-surface-container p-space-md rounded-xl flex flex-col justify-between gap-space-md">
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-tertiary">
                          Site Vetting
                        </span>
                        <div className="flex items-center gap-1 bg-surface-container-lowest px-space-sm py-0.5 rounded-full text-secondary font-label-sm text-label-sm shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Tier-1 Complex
                        </div>
                      </div>
                      <div className="p-space-sm bg-surface-container-lowest rounded-lg">
                        <span className="font-label-sm text-label-sm font-bold text-on-surface block mb-1">
                          Supervisory Mandate:
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Requires verified SiGeKo (BaustellV) certification or NEBOSH International Diploma with minimum 8+ years demonstrated zero-incident site governance on high-rise or major infrastructure builds.
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 text-on-surface-variant font-label-sm text-label-sm pt-1">
                        <div className="flex items-center justify-between">
                          <span className="text-tertiary">Site Clearance:</span>
                          <span className="font-semibold text-secondary">DIN 4107 &amp; ISO 45001 Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-tertiary">Regulatory Scope:</span>
                          <span className="font-semibold text-secondary">Total Site HSE &amp; Subcontractor Audit</span>
                        </div>
                      </div>
                    </div>
                    {/* Action CTAs */}
                    <div className="flex flex-col gap-space-xs">
                      <button
                        className="w-full h-11 inline-flex items-center justify-center font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary-container rounded-lg shadow-sm transition-colors cursor-pointer"
                        type="button"
                      >
                        Quick Apply →
                      </button>
                      <Link
                        className="w-full h-11 inline-flex items-center justify-center font-label-lg text-label-lg text-secondary bg-surface-container-lowest hover:bg-surface-container-high rounded-lg shadow-xs transition-colors cursor-pointer"
                        href="/find-jobs"
                      >
                        View Position
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
