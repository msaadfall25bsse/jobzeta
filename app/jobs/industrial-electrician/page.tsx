"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ElectricalAndAutomationPage() {
  const [keyword, setKeyword] = useState("Siemens S7, KUKA Robotics");
  const [location, setLocation] = useState("de");
  const [experience, setExperience] = useState("certified");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSubmitted, setAlertSubmitted] = useState(false);

  const toggleBookmark = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertEmail) {
      setAlertSubmitted(true);
      setTimeout(() => setAlertSubmitted(false), 4000);
      setAlertEmail("");
    }
  };

  // Requisition Jobs Data
  const jobs = [
    {
      id: 1,
      badge: "Industrial Automation",
      badgeIcon: "bolt",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzFzh0tycfAP7VNGXv5Ah__aV2w4YtVh3aqBd2h1nCre5FsadLIxtcuKKzbvNwDl3k1LsT2gmbQekoFiwK-1kM1mIgBf8IgJoH8mLpiFAQsWMWp8scMkG66AIUZuO6aZNvAq1jzSLtQCbGJE2OMhHhuoBAKEyocxE_RbSrXUhsc-RYf5Z__WwyzVvLXCDhTIZfakOQe02s6uBPlRfMpUNHsSncJLFYdcWaFzAEtNYFKOp9nZ2vqVLgjw",
      company: "Apex Automation & Robotics",
      verified: true,
      posted: "Posted 3h ago",
      salary: "€58,000 – €72,000",
      salaryPeriod: " / yr",
      title: "Senior Industrial Automation & PLC Systems Engineer",
      location: "Stuttgart, Germany (On-Site • Plant 4)",
      type: "Full-Time Permanent",
      tier: "Tier-1 Plant",
      sponsorship: "EU Blue Card Sponsorship",
      skills: [
        "Siemens S7-1500",
        "TIA Portal v18",
        "KUKA Robotics",
        "DIN VDE 0100",
        "PROFINET",
      ],
      scope:
        "Commissioning & maintenance of automated assembly lines, PLC diagnostics (Siemens S7-1500), and industrial robotics integration. Fast-track EU Blue Card sponsorship available.",
      detailsLink: "/jobs/industrial-electrician/handbook",
    },
  ];

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md">
      {/* 1. REUSABLE GLOBAL HEADER */}
      <Header />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Sub-Discipline Breadcrumb Navigation */}
          <section className="w-full px-margin py-space-sm bg-surface-container-low border-b border-surface-container-highest">
            <nav
              aria-label="Breadcrumb"
              className="max-w-6xl mx-auto flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant flex-wrap"
            >
              <Link
                className="hover:text-primary transition-colors flex items-center gap-1"
                href="/"
              >
                <span className="material-symbols-outlined text-[16px]">home</span>
                <span>Home</span>
              </Link>
              <span className="text-outline-variant font-label-md">/</span>
              <Link
                className="hover:text-primary transition-colors"
                href="/categories"
              >
                Categories
              </Link>
              <span className="text-outline-variant font-label-md">/</span>
              <Link
                className="hover:text-primary transition-colors"
                href="/categories/trades-and-construction"
              >
                Trades &amp; Construction
              </Link>
              <span className="text-outline-variant font-label-md">/</span>
              <span className="text-primary font-label-lg text-label-lg font-semibold">
                Electrical &amp; Automation
              </span>
            </nav>
          </section>

          {/* Hero Header Section with Technical Stats & Quick Search */}
          <section className="w-full px-margin py-space-xl bg-surface relative overflow-hidden">
            {/* Ambient subtle illumination glow */}
            <div className="absolute -top-32 right-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col gap-space-lg relative z-10">
              {/* Discipline Category Pill */}
              <div className="flex items-center gap-space-xs flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md shadow-sm">
                  <span className="material-symbols-outlined text-[15px]">
                    precision_manufacturing
                  </span>
                  Specialized Craft Sub-Discipline
                </span>
                <span className="inline-flex items-center gap-1 px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  ISO 9001 &amp; DIN VDE Validated
                </span>
              </div>

              {/* Main Title & Description */}
              <div className="flex flex-col gap-space-sm max-w-4xl">
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Electrical &amp; Automation Requisitions &amp; Technical Roles
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Precision industrial control systems, PLC automation, high-voltage switchgear, robotics integration, and building electrical infrastructure positions worldwide.
                </p>
              </div>

              {/* Key Discipline Stat Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-md border border-outline-variant/30">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      dataset
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      2,840
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Active Requisitions
                    </span>
                  </div>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-md border border-outline-variant/30">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      payments
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      €72k – $110k
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Average Global Wage Band
                    </span>
                  </div>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-md border border-outline-variant/30">
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed-dim/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      policy
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      IEC / VDE / NEC
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Standardized Safety Compliance
                    </span>
                  </div>
                </div>
              </div>

              {/* Refined Discipline Search Filter Matrix */}
              <div className="mt-space-sm p-space-md rounded-xl bg-surface-container-lowest shadow-md border border-outline-variant/30">
                <form
                  className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Keyword input */}
                  <div className="md:col-span-4 flex items-center gap-space-xs bg-surface-container-low px-space-md py-2.5 rounded-lg border border-outline-variant/30">
                    <span className="material-symbols-outlined text-outline text-[20px]">
                      search
                    </span>
                    <input
                      className="w-full bg-transparent text-on-surface placeholder:text-outline text-body-sm font-body-sm focus:outline-none"
                      placeholder="Keywords: PLC, SCADA, Switchgear, Lineman"
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>

                  {/* Location Dropdown */}
                  <div className="md:col-span-3 flex items-center gap-space-xs bg-surface-container-low px-space-md py-2.5 rounded-lg border border-outline-variant/30">
                    <span className="material-symbols-outlined text-outline text-[20px]">
                      location_on
                    </span>
                    <select
                      className="w-full bg-transparent text-on-surface text-body-sm font-body-sm focus:outline-none cursor-pointer"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="">Global / Any Location</option>
                      <option value="de">Germany (Baden-Württemberg, Bavaria)</option>
                      <option value="us">United States (Midwest, Texas)</option>
                      <option value="ca">Canada (Ontario, Alberta)</option>
                      <option value="uk">United Kingdom (Midlands)</option>
                    </select>
                  </div>

                  {/* Experience Level Filter */}
                  <div className="md:col-span-3 flex items-center gap-space-xs bg-surface-container-low px-space-md py-2.5 rounded-lg border border-outline-variant/30">
                    <span className="material-symbols-outlined text-outline text-[20px]">
                      tune
                    </span>
                    <select
                      className="w-full bg-transparent text-on-surface text-body-sm font-body-sm focus:outline-none cursor-pointer"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    >
                      <option value="">Experience: All Levels</option>
                      <option value="certified">Meister / Geselle / Licensed</option>
                      <option value="senior">Senior Automation Lead (5+ yrs)</option>
                      <option value="apprentice">Apprentice / Entry Technician</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2">
                    <button
                      className="w-full h-[42px] px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        filter_list
                      </span>
                      <span>Filter Jobs</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Core Showcase: Single Master Card Architecture & Job Listings */}
          <section className="w-full px-margin py-space-xl bg-surface-container-low">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-lg">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Featured Requisitions
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                      2,840 Active Openings
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    Electrical &amp; Automation Openings
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Standardized modular postings across industrial automation, robotics, and electrical engineering. Hover any card for technical specifications and direct application actions.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Sort by:
                  </span>
                  <button
                    className="font-label-sm text-label-sm font-semibold text-on-surface flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
                    onClick={() =>
                      setSortBy(
                        sortBy === "Most Recent" ? "Highest Compensation" : "Most Recent"
                      )
                    }
                  >
                    {sortBy}
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </button>
                </div>
              </div>

              {/* Stacked Job Listings Container */}
              <div className="flex flex-col gap-space-md">
                {jobs.map((job) => {
                  const isBookmarked = bookmarkedIds.includes(job.id);
                  return (
                    <article
                      key={job.id}
                      aria-label={`${job.title} at ${job.company}`}
                      className="group relative w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                      tabIndex={0}
                    >
                      <div className="flex flex-col md:flex-row items-stretch">
                        {/* Industrial Visual Thumbnail Canvas */}
                        <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                          <div
                            className="w-full h-full min-h-[190px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                            style={{ backgroundImage: `url('${job.image}')` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30" />

                          {/* Top Badges on Thumbnail */}
                          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                              <span className="material-symbols-outlined text-primary text-[13px]">
                                {job.badgeIcon}
                              </span>
                              {job.badge}
                            </span>
                          </div>

                          {/* Bookmark Action */}
                          <button
                            aria-label="Bookmark this role"
                            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95"
                            onClick={(e) => toggleBookmark(job.id, e)}
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
                                  {job.company}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-outline-variant" />
                                {job.verified && (
                                  <>
                                    <span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-primary font-medium">
                                      <span className="material-symbols-outlined text-[14px]">
                                        verified
                                      </span>
                                      Verified Employer
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-outline-variant" />
                                  </>
                                )}
                                <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[14px] text-outline">
                                    schedule
                                  </span>
                                  {job.posted}
                                </span>
                              </div>

                              {/* Salary Band Badge */}
                              <div className="text-right">
                                <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                                  {job.salary}
                                </span>
                                <span className="font-label-sm text-label-sm text-on-surface-variant">
                                  {job.salaryPeriod}
                                </span>
                              </div>
                            </div>

                            {/* Role Title */}
                            <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors">
                              {job.title}
                            </h3>

                            {/* Key Meta Row */}
                            <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px] text-outline">
                                  location_on
                                </span>
                                {job.location}
                              </span>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                                {job.type}
                              </span>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                                {job.tier}
                              </span>
                              <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                                <span className="material-symbols-outlined text-[14px]">
                                  shield
                                </span>
                                {job.sponsorship}
                              </span>
                            </div>
                          </div>

                          {/* Tags Row (Default) */}
                          <div className="flex items-center gap-1.5 flex-wrap pt-1">
                            {job.skills.map((skill, sIdx) => (
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
                                    Operational Scope &amp; Mission Brief
                                  </span>
                                  <p className="text-body-sm text-on-surface-variant">
                                    {job.scope}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                                  <Link
                                    className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1"
                                    href={job.detailsLink}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <span>View Details &amp; Specs</span>
                                    <span className="material-symbols-outlined text-[15px]">
                                      arrow_outward
                                    </span>
                                  </Link>
                                  <Link
                                    className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1"
                                    href={job.detailsLink}
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
                  );
                })}
              </div>

              {/* Stack Bottom Pagination / Load More Affordance */}
              <div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-label-sm text-label-sm flex-wrap gap-2">
                <span>Showing 1 of 2,840 electrical &amp; automation openings</span>
                <Link
                  className="font-label-md text-label-md text-primary font-semibold hover:underline flex items-center gap-1"
                  href="/find-jobs"
                >
                  <span>Load more open positions</span>
                  <span className="material-symbols-outlined text-[16px]">
                    expand_more
                  </span>
                </Link>
              </div>
            </div>
          </section>

          {/* Technical Certifications & Jurisdictional Standards Matrix */}
          <section className="w-full px-margin py-space-xl bg-surface">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Compliance &amp; Validation
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Core Technical Credentials Recognized
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Jobzeta matches verified electricians and automation leads directly against multilateral international qualification registries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Cert Card 1 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/30">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">badge</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Meister / Geselle
                    </h3>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      Germany &amp; Austria (DACH)
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Dual vocational qualification in industrial electrical installation, high-power distribution, and automated control cabinets under IHK/HWK regulation.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-medium">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    DIN VDE 0100 Validated
                  </span>
                </div>

                {/* Cert Card 2 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/30">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        workspace_premium
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Red Seal &amp; Journeyman
                    </h3>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      United States &amp; Canada
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Interprovincial Standard Red Seal Endorsement (Construction / Industrial Electrician) and US State Master Electrical Licensure complying with NFPA 70 / NEC.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-medium">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    NEC / NFPA 70E Certified
                  </span>
                </div>

                {/* Cert Card 3 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/30">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        military_tech
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      NVQ Level 3 &amp; ECS
                    </h3>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      United Kingdom &amp; Ireland
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Electrotechnical Gold Card certification following BS 7671 18th Edition wiring regulations for commercial lines, substations, and robotics enclosures.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-medium">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    BS 7671 (18th Ed) Verified
                  </span>
                </div>

                {/* Cert Card 4 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/30">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        health_and_safety
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      DGUV V3 &amp; IEC 61508
                    </h3>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      International Industrial
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Statutory testing of electrical machinery, industrial functional safety systems (SIL ratings), and plant emergency stop loop validation.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-medium">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    Functional Safety SIL 3
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Automation Technology Stacks Matrix */}
          <section className="w-full px-margin py-space-xl bg-surface-container-low">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Automation Ecosystem
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Technology Stacks Frequently Requisitioned
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Browse requisitions grouped by industrial hardware architecture and logic controller ecosystems.
                  </p>
                </div>
                <Link
                  className="font-label-lg text-label-lg text-primary hover:underline flex items-center gap-1 font-semibold"
                  href="/find-jobs"
                >
                  Explore all tech filters
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Stack 1: Siemens */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-mono font-semibold">
                        SIEMENS
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        1,120 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      SIMATIC S7 &amp; TIA
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      S7-1200 / S7-1500 controllers, WinCC SCADA systems, SINAMICS variable frequency drives, and Safety Integrated networks.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex flex-wrap gap-1 border-t border-surface-container-high">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      TIA Portal v19
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      PROFINET
                    </span>
                  </div>
                </div>

                {/* Stack 2: Rockwell */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-mono font-semibold">
                        ROCKWELL
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        840 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Allen-Bradley ControlLogix
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Studio 5000 environment, FactoryTalk View ME/SE, Point I/O, Kinetix servo multi-axis drive synchronization.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex flex-wrap gap-1 border-t border-surface-container-high">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      Studio 5000
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      EtherNet/IP
                    </span>
                  </div>
                </div>

                {/* Stack 3: Beckhoff */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-mono font-semibold">
                        BECKHOFF
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        490 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      TwinCAT &amp; EtherCAT
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      PC-based automation, high-speed deterministic bus timing, structured text (IEC 61131-3), C++ real-time extensions.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex flex-wrap gap-1 border-t border-surface-container-high">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      TwinCAT 3
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      EtherCAT
                    </span>
                  </div>
                </div>

                {/* Stack 4: Robotics */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-mono font-semibold">
                        ROBOTICS
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        630 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      KUKA, ABB &amp; Fanuc
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Kinematics, automated spot welding, pick-and-place gantry systems, vision inspection cameras, and robotic path teaching.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex flex-wrap gap-1 border-t border-surface-container-high">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      KRL &amp; RAPID
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      Safety PLC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industrial Employers & Hiring Partners */}
          <section className="w-full px-margin py-space-xl bg-surface">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Industry Network
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Plant Hiring Partners in Automation
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Enterprise facilities hiring licensed electrical crews and automation engineers this week.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
                {/* Partner 1 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-sm border border-outline-variant/30 hover:border-primary/40 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[32px]">
                      factory
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Apex Automation
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      14 Openings • Germany
                    </span>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-sm border border-outline-variant/30 hover:border-primary/40 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[32px]">bolt</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Siemens Energy
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      86 Openings • Multinational
                    </span>
                  </div>
                </div>

                {/* Partner 3 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-sm border border-outline-variant/30 hover:border-primary/40 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[32px]">air</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Festo Engineering
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      32 Openings • Europe &amp; US
                    </span>
                  </div>
                </div>

                {/* Partner 4 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-sm border border-outline-variant/30 hover:border-primary/40 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[32px]">
                      settings_suggest
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Bosch Rexroth
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      51 Openings • Global Hubs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Alert Signup Banner */}
          <section className="w-full px-margin py-space-xl bg-surface-container">
            <div className="max-w-4xl mx-auto rounded-2xl bg-secondary text-on-secondary p-space-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg relative overflow-hidden">
              {/* Decorative background accent */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-space-xs max-w-lg relative z-10">
                <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider font-semibold">
                  Stay Ahead of Requisitions
                </span>
                <h3 className="font-headline-lg text-headline-lg text-on-secondary font-bold">
                  Receive New Electrical &amp; Automation Openings
                </h3>
                <p className="font-body-sm text-body-sm text-secondary-fixed">
                  Get notified instantly when plants post new PLC programming, robotic line commissioning, or high-voltage positions matching your certifications.
                </p>
                {alertSubmitted && (
                  <span className="text-primary-fixed font-label-md font-semibold pt-1">
                    ✓ Successfully subscribed to alerts!
                  </span>
                )}
              </div>
              <div className="w-full md:w-auto relative z-10">
                <form
                  className="flex flex-col sm:flex-row items-center gap-2"
                  onSubmit={handleAlertSubmit}
                >
                  <input
                    className="px-space-md py-3 rounded-lg bg-surface text-on-surface placeholder:text-outline text-body-sm font-body-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary-fixed"
                    placeholder="engineer@plant.com"
                    required
                    type="email"
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                  />
                  <button
                    className="w-full sm:w-auto px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-md transition-all shrink-0 font-semibold"
                    type="submit"
                  >
                    Create Alert
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* REUSABLE FOOTER */}
      <Footer />
    </div>
  );
}
