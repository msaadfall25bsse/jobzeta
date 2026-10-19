"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WeldingAndFabricationPage() {
  const [keyword, setKeyword] = useState("TIG 6G, Orbital Welding, ASME Vessel, Subsea...");
  const [location, setLocation] = useState("Germany (Hamburg / Ruhrgebiet)");
  const [credential, setCredential] = useState("ISO 9606 / Coded Welder / Journeyman");
  const [sortBy, setSortBy] = useState("Highest Precision Tier");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [alertEmail, setAlertEmail] = useState("welder@fabrication.com");
  const [alertSuccess, setAlertSuccess] = useState(false);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertEmail) {
      setAlertSuccess(true);
      setTimeout(() => setAlertSuccess(false), 4000);
    }
  };

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md">
      {/* 1. REUSABLE GLOBAL HEADER */}
      <Header />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Top Context Breadcrumbs Bar */}
          <section className="w-full bg-surface-container-low py-space-sm px-margin border-b border-surface-container-highest">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <div className="flex items-center gap-space-xs overflow-x-auto py-1">
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1"
                  href="/"
                >
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  <span>Home</span>
                </Link>
                <span className="material-symbols-outlined text-[14px] text-outline-variant">
                  chevron_right
                </span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories"
                >
                  Categories
                </Link>
                <span className="material-symbols-outlined text-[14px] text-outline-variant">
                  chevron_right
                </span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/trades-and-construction"
                >
                  Trades &amp; Construction
                </Link>
                <span className="material-symbols-outlined text-[14px] text-outline-variant">
                  chevron_right
                </span>
                <span className="text-primary font-semibold">
                  Welding &amp; Fabrication
                </span>
              </div>
              <div className="hidden md:flex items-center gap-space-sm text-tertiary">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Live Exchange Feed
                </span>
                <span>Directory ID: TC-WELD-9606</span>
              </div>
            </div>
          </section>

          {/* Hero & Sub-discipline Header */}
          <section className="relative w-full bg-gradient-to-b from-surface-container-low to-surface pt-space-xl pb-space-xl px-margin overflow-hidden">
            {/* Ambient Technical Blueprint Grid Lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#181c1f_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">
              {/* Status Pills */}
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm uppercase tracking-wider shadow-sm font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    precision_manufacturing
                  </span>
                  Specialized Craft Sub-Discipline
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm tracking-wide shadow-sm font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  ISO 9606-1 &amp; ASME IX Validated
                </span>
              </div>

              {/* Main Headline Block */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
                <div className="lg:col-span-8 flex flex-col gap-space-sm">
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
                    Welding &amp; Heavy Fabrication Requisitions &amp; Certified Trades
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                    High-precision orbital TIG/MIG welding, ASME coded pressure vessel fabrication, structural steel fitting, and robotic subsea welding positions worldwide.
                  </p>
                </div>

                {/* Metric Stat Boxes */}
                <div className="lg:col-span-4 grid grid-cols-3 gap-space-sm">
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/30">
                    <span className="font-headline-md text-headline-md text-primary font-bold">
                      1,920
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                      Active Requisitions
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/30">
                    <span className="font-headline-md text-headline-md text-secondary font-bold">
                      €46k–72k
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                      Avg Global Wage
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/30">
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate font-bold">
                      ISO/ASME
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                      Metallurgical Certs
                    </span>
                  </div>
                </div>
              </div>

              {/* Advanced Job Filter Search Rig */}
              <div className="w-full bg-surface-container-lowest p-space-md rounded-2xl shadow-md mt-space-sm border border-outline-variant/30">
                <form
                  className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Text Keyword Search */}
                  <div className="md:col-span-4 flex items-center gap-space-sm px-space-md py-2.5 bg-surface-container-low rounded-lg text-on-surface border border-outline-variant/20">
                    <span className="material-symbols-outlined text-outline">search</span>
                    <input
                      className="w-full bg-transparent border-0 focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline"
                      placeholder="TIG 6G, Orbital Welding, ASME Vessel, Subsea..."
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>

                  {/* Location Selector */}
                  <div className="md:col-span-3 flex items-center gap-space-sm px-space-md py-2.5 bg-surface-container-low rounded-lg text-on-surface border border-outline-variant/20">
                    <span className="material-symbols-outlined text-outline">
                      location_on
                    </span>
                    <select
                      className="w-full bg-transparent border-0 focus:outline-none font-body-sm text-body-sm text-on-surface cursor-pointer"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option>Germany (Hamburg / Ruhrgebiet)</option>
                      <option>Sweden (Gothenburg &amp; Shipyards)</option>
                      <option>Norway (Stavanger Offshore)</option>
                      <option>United States (Gulf Coast / Texas)</option>
                      <option>United Kingdom (Aberdeen &amp; Teesside)</option>
                    </select>
                  </div>

                  {/* Technical Credential Filter */}
                  <div className="md:col-span-3 flex items-center gap-space-sm px-space-md py-2.5 bg-surface-container-low rounded-lg text-on-surface border border-outline-variant/20">
                    <span className="material-symbols-outlined text-outline">badge</span>
                    <select
                      className="w-full bg-transparent border-0 focus:outline-none font-body-sm text-body-sm text-on-surface cursor-pointer"
                      value={credential}
                      onChange={(e) => setCredential(e.target.value)}
                    >
                      <option>ISO 9606 / Coded Welder / Journeyman</option>
                      <option>ASME Section IX (6G All-Position)</option>
                      <option>AWS D1.1 Structural Certified</option>
                      <option>CSWIP 3.1 Certified Inspector</option>
                      <option>NDT Level II Ultrasonic/Radiographic</option>
                    </select>
                  </div>

                  {/* Action Submission CTA */}
                  <div className="md:col-span-2">
                    <button
                      className="w-full h-[44px] flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm transition-all duration-200 font-semibold"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        tune
                      </span>
                      <span>Filter Jobs</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Featured Requisitions Section (EXACTLY 1 SPECIFIED JOB CARD) */}
          <section className="w-full py-space-xl px-margin bg-surface">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Featured Requisitions
                    </span>
                    <span className="text-tertiary font-label-sm">
                      · 1,920 Active Openings
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                    Welding &amp; Heavy Fabrication Openings
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    Standardized modular postings across pressure vessel fabrication, offshore piping, and robotic welding. Hover the card for technical certifications and direct application actions.
                  </p>
                </div>
                <div className="flex items-center gap-space-xs self-start md:self-auto">
                  <span className="font-label-sm text-label-sm text-tertiary">
                    Sorting:
                  </span>
                  <button
                    className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm flex items-center gap-1 hover:bg-surface-dim transition-colors cursor-pointer font-semibold"
                    onClick={() =>
                      setSortBy(
                        sortBy === "Highest Precision Tier"
                          ? "Most Recent"
                          : "Highest Precision Tier"
                      )
                    }
                  >
                    {sortBy}
                    <span className="material-symbols-outlined text-[14px]">
                      expand_more
                    </span>
                  </button>
                </div>
              </div>

              {/* EXACTLY 1 FEATURED JOB CARD WITH INTERACTIVE SUMMARY & HOVER ACTIONS */}
              <article
                aria-label="Senior ASME IX & 6G Orbital TIG Pipe Welder at Nordic Metalworks & Marine Fab"
                className="group relative w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                tabIndex={0}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Visual Thumbnail Canvas */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                    <div
                      className="w-full h-full min-h-[190px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCscUQ45RAHRHmtQGxBV5z-EaNAyCfMMROwHLYimacIX8rn-j_PPQYrtQwUfk8-_iiUOUBWsRKM4q1exHzfF8IKNPcMK1XvAMkMqOMtQVFaFcxRJJds1nhU8h3Rq_9CPvEU2LjsRwpN6TTzcpozVuFT3cmtxB8TBxpMvorauCscqwDR0SgD3_Em9V_vfipakAsSDFFvgCii0Rk9JR-tY_DFjSdYoGOy7j2MsJZbI2sW6jqLpVEeb2DeAQ')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30" />

                    {/* Top Badges on Thumbnail */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[13px]">
                          mode_heat
                        </span>
                        TIG &amp; Pipe Welding
                      </span>
                    </div>

                    {/* Bookmark Action */}
                    <button
                      aria-label="Bookmark this role"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95"
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
                            Nordic Metalworks &amp; Marine Fab
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
                            Posted 4h ago
                          </span>
                        </div>

                        {/* Salary Band Badge */}
                        <div className="text-right">
                          <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                            Kr 420,000 – 480,000
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {" "}
                            / yr (€42k - €48k eq.)
                          </span>
                        </div>
                      </div>

                      {/* Role Title */}
                      <Link href="/jobs/senior-welder">
                        <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                          Senior ASME IX &amp; 6G Orbital TIG Pipe Welder
                        </h3>
                      </Link>

                      {/* Key Meta Row */}
                      <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            location_on
                          </span>
                          Gothenburg, Sweden (On-Site • Shipyard / Industrial)
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Full-Time Permanent
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                          Shipyard On-Site
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            shield
                          </span>
                          Relocation &amp; Visa Supported
                        </span>
                      </div>
                    </div>

                    {/* Tags Row */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      {["TIG 6G (GTAW)", "ASME Section IX", "ISO 9606-1", "Duplex & Titanium Piping"].map(
                        (skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium"
                          >
                            {skill}
                          </span>
                        )
                      )}
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
                              Operational Scope &amp; Mission Brief
                            </span>
                            <p className="text-body-sm text-on-surface-variant">
                              Requires 100% X-ray / Radiographic quality standard on pressurized super duplex piping. Must pass immediate 6G coupon test in Gothenburg test rig.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            <Link
                              className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-welder"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Details &amp; Specs</span>
                              <span className="material-symbols-outlined text-[15px]">
                                arrow_outward
                              </span>
                            </Link>
                            <Link
                              className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-welder"
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

              {/* Pagination & Secondary Discovery Hint */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-sm text-on-surface-variant font-label-sm text-label-sm">
                <span>Showing 1 of 1,920 welding &amp; fabrication openings</span>
                <div className="flex items-center gap-space-md">
                  <Link
                    className="flex items-center gap-1 text-primary font-semibold hover:underline"
                    href="/find-jobs"
                  >
                    <span>Load more open positions</span>
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Core Technical Credentials Recognized Section */}
          <section className="w-full py-space-xl px-margin bg-surface-container-low">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1 max-w-3xl">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Standardized Compliance Matrix
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                  Core Technical Credentials Recognized
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Cross-border credential reciprocity across major metallurgical verification bodies, civil infrastructure institutes, and offshore inspection standards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Credential 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                      <span className="material-symbols-outlined text-[26px]">
                        assignment_turned_in
                      </span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-tertiary">
                        European Union &amp; International
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                        ISO 9606-1 / EN 287-1
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Qualification testing of welders for fusion welding of steels, pressure vessels, and high-tensile aerospace alloy tubes.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-primary">
                      820 Requisitions
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      verified
                    </span>
                  </div>
                </div>

                {/* Credential 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
                      <span className="material-symbols-outlined text-[26px]">
                        gavel
                      </span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-tertiary">
                        North America &amp; Offshore
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                        ASME Section IX &amp; B31.3
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Boiler and pressure vessel code, process piping welding procedure specification (WPS) and procedure qualification (PQR).
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-primary">
                      640 Requisitions
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      verified
                    </span>
                  </div>
                </div>

                {/* Credential 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                      <span className="material-symbols-outlined text-[26px]">
                        architecture
                      </span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-tertiary">
                        Structural &amp; Bridge Welding
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                        AWS D1.1 &amp; D1.5
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      American Welding Society certified structural welding inspector and fabricator credential for bridges, high-rises, and crane systems.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-primary">
                      310 Requisitions
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      verified
                    </span>
                  </div>
                </div>

                {/* Credential 4 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface">
                      <span className="material-symbols-outlined text-[26px]">
                        biotech
                      </span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-tertiary">
                        Testing &amp; Quality Assurance
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                        CSWIP 3.1 &amp; NDT Level II
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Non-destructive testing (ultrasonic, radiographic, magnetic particle) for safety-critical weld integrity across plant installations.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-primary">
                      150 Requisitions
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Metallurgy & Welding Processes Ecosystem Section */}
          <section className="w-full py-space-xl px-margin bg-surface">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-1 max-w-2xl">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Process Classification
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                    Metallurgy &amp; Welding Processes Ecosystem
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Explore dedicated job categories classified by metal joining procedures, shield gas combinations, and robotic kinematic setups.
                  </p>
                </div>
                <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    speed
                  </span>
                  Real-time hiring demand index
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Process 1 */}
                <div className="bg-surface-container-low p-space-md rounded-2xl flex flex-col justify-between group hover:bg-surface-container transition-colors border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm font-bold">
                        740 Roles
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary">
                        GTAW 141
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      TIG / GTAW (6G Pipe)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      High-purity stainless steel, Inconel, and titanium piping for pharmaceutical, chemical, and nuclear facilities.
                    </p>
                  </div>
                  <div className="mt-space-md">
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "85%" }} />
                    </div>
                    <span className="text-[11px] text-tertiary mt-1 block">
                      Demand Index: Very High
                    </span>
                  </div>
                </div>

                {/* Process 2 */}
                <div className="bg-surface-container-low p-space-md rounded-2xl flex flex-col justify-between group hover:bg-surface-container transition-colors border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-bold">
                        610 Roles
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary">
                        GMAW 135
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      MIG / MAG / GMAW
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Heavy structural steel fabrication, automotive chassis welding, and robotic pulsed-arc welding systems.
                    </p>
                  </div>
                  <div className="mt-space-md">
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: "72%" }} />
                    </div>
                    <span className="text-[11px] text-tertiary mt-1 block">
                      Demand Index: High
                    </span>
                  </div>
                </div>

                {/* Process 3 */}
                <div className="bg-surface-container-low p-space-md rounded-2xl flex flex-col justify-between group hover:bg-surface-container transition-colors border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm font-bold">
                        320 Roles
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary">
                        SAW 121
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Submerged Arc (SAW)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Heavy pressure vessels, wind turbine monopiles, and longitudinal pipe seam submerged arc welding installations.
                    </p>
                  </div>
                  <div className="mt-space-md">
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div className="bg-tertiary h-full rounded-full" style={{ width: "48%" }} />
                    </div>
                    <span className="text-[11px] text-tertiary mt-1 block">
                      Demand Index: Moderate
                    </span>
                  </div>
                </div>

                {/* Process 4 */}
                <div className="bg-surface-container-low p-space-md rounded-2xl flex flex-col justify-between group hover:bg-surface-container transition-colors border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm font-bold">
                        250 Roles
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary">
                        Orbital CNC
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Robotic &amp; Orbital
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Automated Polysoude &amp; orbital welding heads, Fanuc welding cobots, and automated cladding systems.
                    </p>
                  </div>
                  <div className="mt-space-md">
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "60%" }} />
                    </div>
                    <span className="text-[11px] text-tertiary mt-1 block">
                      Demand Index: Surging
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Network: Plant & Shipyard Hiring Partners */}
          <section className="w-full py-space-xl px-margin bg-surface-container-low">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1 max-w-3xl">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Enterprise Mobility
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                  Plant &amp; Shipyard Hiring Partners in Fabrication
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Direct employer requisition lines with major maritime yards, oil &amp; gas engineering syndicates, and offshore constructors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Partner 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-secondary">
                        NM
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        46 Openings
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Nordic Metalworks
                      </h3>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Scandinavia &amp; Baltic Sea
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Offshore patrol craft, cryogenic vessel tanks, and heavy polar icebreaker superstructure fabrication.
                    </p>
                  </div>
                  <Link
                    className="mt-space-md font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1 font-semibold"
                    href="/find-jobs"
                  >
                    <span>View Requisitions</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>

                {/* Partner 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-secondary">
                        TF
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        38 Openings
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        TechnipFMC
                      </h3>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Offshore Global Hubs
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Subsea flowlines, rigid risers, deepwater manifolds, and hyperbaric hyper-alloy pipe welding.
                    </p>
                  </div>
                  <Link
                    className="mt-space-md font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1 font-semibold"
                    href="/find-jobs"
                  >
                    <span>View Requisitions</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>

                {/* Partner 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-secondary">
                        MW
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        52 Openings
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Meyer Werft Shipyards
                      </h3>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Papenburg &amp; Turku Yards
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mega-cruise vessel structural block fitting, automated laser-hybrid welding, and LNG tank integration.
                    </p>
                  </div>
                  <Link
                    className="mt-space-md font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1 font-semibold"
                    href="/find-jobs"
                  >
                    <span>View Requisitions</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>

                {/* Partner 4 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-secondary">
                        VL
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        29 Openings
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Vallourec Energy
                      </h3>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        France &amp; Middle East
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Seamless alloy tubular joints, geothermal downhole casing strings, and heavy industrial fabrication.
                    </p>
                  </div>
                  <Link
                    className="mt-space-md font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1 font-semibold"
                    href="/find-jobs"
                  >
                    <span>View Requisitions</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Job Alert CTA Subscription Box */}
          <section className="w-full py-space-xl px-margin bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="relative w-full rounded-3xl bg-secondary text-on-secondary p-space-xl overflow-hidden shadow-lg">
                {/* Abstract Industrial Decorative Watermark */}
                <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-[240px]">
                    manufacturing
                  </span>
                </div>
                <div className="relative z-10 max-w-2xl flex flex-col gap-space-md">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider font-bold w-fit">
                    <span className="material-symbols-outlined text-[16px]">
                      notifications_active
                    </span>
                    Stay Ahead of Requisitions
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-on-secondary tracking-tight font-bold">
                    Receive New Welding &amp; Heavy Fabrication Openings
                  </h2>
                  <p className="font-body-lg text-body-lg text-secondary-fixed-dim leading-relaxed">
                    Get instant telemetry for verified ASME IX, ISO 9606-1, and 6G orbital positions matching your certified metallurgical skillset and preferred geographical jurisdictions.
                  </p>
                  {alertSuccess && (
                    <span className="text-primary-fixed font-label-md font-semibold">
                      ✓ Subscribed to Welding &amp; Heavy Fabrication alerts!
                    </span>
                  )}
                  <form
                    className="flex flex-col sm:flex-row items-center gap-space-sm mt-2 max-w-lg"
                    onSubmit={handleAlertSubmit}
                  >
                    <div className="w-full relative flex items-center">
                      <span className="material-symbols-outlined text-outline absolute left-3">
                        mail
                      </span>
                      <input
                        className="w-full h-[48px] pl-10 pr-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary-fixed"
                        placeholder="welder@fabrication.com"
                        type="email"
                        value={alertEmail}
                        onChange={(e) => setAlertEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      className="w-full sm:w-auto shrink-0 h-[48px] px-space-lg rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-sm font-semibold"
                      type="submit"
                    >
                      Create Alert
                    </button>
                  </form>
                  <div className="flex items-center gap-space-md text-[12px] text-secondary-fixed-dim mt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        format_image_left
                      </span>
                      Zero-spam compliance
                    </span>
                    <span>•</span>
                    <span>Unsubscribe anytime with 1 click</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
}
