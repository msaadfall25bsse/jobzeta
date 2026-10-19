"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MachineryAndCombineOperatorsPage() {
  const [keyword, setKeyword] = useState("High-Capacity Rotary / Draper Header (10-12m) / Tier 5");
  const [location, setLocation] = useState("magdeburg");
  const [certification, setCertification] = useState("cat-t");
  const [sortBy, setSortBy] = useState("Highest Precision Tier");
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
      badge: "GEN 4 RTK • CAT T",
      badgeIcon: "sensors",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1UFJWQIWdMJpTMrS-400LZiwfOx7sjwfeKLIhFqEFqh_3_yePixwOD6n2gyhoqV0EL3EYAoFundUbXNE67UhOL73H71bbKPoHXpfgh2PxKvtzWN4NG5l6d2P0ABKSJ2nB5R2IBTuebNdziYG7hgs-Mu2vJ9CPdWpQFL9vx3Z7lAtuMMhnDsmSNwxx9sM0Ww2273hYRugHtu0Nl0RLKkg7SWWx6Aa_SPBQ2sAdAqfuq46yIDBP-LuRMQcXu7",
      company: "ForwardFarming Agro-Holdings SE",
      verified: true,
      posted: "Posted 2h ago",
      salary: "€4,200 – €5,600",
      salaryPeriod: " / mo gross (€50k – €67k eq.) + Night-cut per diem",
      title: "Senior Autonomous Combine & Precision Farming Specialist",
      location: "Magdeburg Börde / Lower Saxony Corridor (On-Site • High-Yield Harvest Fleet)",
      type: "Full-Time Seasonal",
      tier: "Agri-Enterprise On-Site",
      sponsorship: "Relocation & Lodging Supported",
      skills: [
        "John Deere Gen 4 / CLAAS Cebis",
        "EU Category T",
        "StarFire RTK",
        "ISOBUS Section Control",
      ],
      scope:
        "Requires Führerschein T, sub-2.5cm RTK autosteer calibration on 12.2m draper headers, and zero-loss threshing certification in Magdeburg Börde.",
      detailsLink: "/jobs/senior-autonomous-combine-and-precision-farming-specialist",
      applyLink: "/jobs/senior-autonomous-combine-and-precision-farming-specialist#fast-track-form",
    },
  ];

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md">
      {/* 1. REUSABLE GLOBAL HEADER */}
      <Header />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Sub-Discipline Breadcrumb Navigation & Institutional Status Bar */}
          <section className="w-full px-margin py-space-sm bg-surface-container-low border-b border-surface-container-highest">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant flex-wrap"
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
                  href="/categories/agriculture-and-farming"
                >
                  Agriculture &amp; Farming
                </Link>
                <span className="text-outline-variant font-label-md">/</span>
                <span className="text-primary font-label-lg text-label-lg font-semibold">
                  Machinery &amp; Combine Operators
                </span>
              </nav>

              <div className="flex flex-wrap items-center gap-2 font-label-sm text-label-sm">
                <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded font-mono font-semibold tracking-wide border border-outline-variant/40">
                  DIRECTORY: AG-COMBINE-8820
                </span>
                <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse"></span>
                  <span>Live Harvest Telematics &amp; Field Status Active</span>
                </div>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 rounded font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  CE Machinery Directive &amp; Cat T Pre-Cleared
                </span>
              </div>
            </div>
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
                    agriculture
                  </span>
                  COMMERCIAL AGRI-MACHINERY &amp; AUTONOMOUS HARVEST
                </span>
                <span className="inline-flex items-center gap-1 px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  ISO 11783 ISOBUS &amp; RTK Sub-2.5cm Validated
                </span>
              </div>

              {/* Main Title & Description & Top Action Buttons */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-sm max-w-4xl">
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                    Combine Harvester, Tractor Fleet &amp; Autonomous Agritech Operations
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Certified European Category T and Global Precision Agriculture machinery operators managing dual-rotor combine harvesters, RTK GPS sub-2.5cm autosteer, ISOBUS section controls, and high-yield grain logistics corridors.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0 flex-wrap">
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-outline-variant/40 text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-low transition-all shadow-xs cursor-pointer"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: "Combine Harvester, Tractor Fleet & Autonomous Agritech Operations",
                          url: window.location.href,
                        }).catch(() => {});
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Harvest Feed link copied to clipboard!");
                      }
                    }}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-lg">share</span>
                    <span>Share Harvest Feed</span>
                  </button>
                  <a
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-semibold hover:bg-primary-container shadow-sm hover:shadow-md transition-all cursor-pointer"
                    href="#harvest-alerts"
                  >
                    <span className="material-symbols-outlined text-lg">notifications</span>
                    <span>Set Agri-Machinery Alerts</span>
                  </a>
                </div>
              </div>

              {/* Key Discipline Stat Indicators (3 Metric Cards Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
                {/* Metric 1 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-md border border-outline-variant/30">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      agriculture
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      4,250
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Active Harvest Requisitions
                    </span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-md border border-outline-variant/30">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      payments
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      €42,000 – €68,000
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Average Global Wage Band
                    </span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-md border border-outline-variant/30">
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed-dim/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      verified_user
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Führerschein T • RTK • ISOBUS
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Standardized Compliance Gateways
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
                  {/* Combine / Tractor Spec input */}
                  <div className="md:col-span-4 flex items-center gap-space-xs bg-surface-container-low px-space-md py-2.5 rounded-lg border border-outline-variant/30">
                    <span className="material-symbols-outlined text-outline text-[20px]">
                      precision_manufacturing
                    </span>
                    <select
                      className="w-full bg-transparent text-on-surface text-body-sm font-body-sm focus:outline-none cursor-pointer"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    >
                      <option value="High-Capacity Rotary / Draper Header (10-12m) / Tier 5">
                        High-Capacity Rotary / Draper (10-12m)
                      </option>
                      <option value="Conventional Walker Combines (6-8 Walkers)">
                        Conventional Walker Combines (6-8 Walkers)
                      </option>
                      <option value="Heavy High-HP Tracked Tractors (500HP+ Quadtrac/9RX)">
                        Heavy Tracked Tractors (500HP+ Quadtrac)
                      </option>
                      <option value="Self-Propelled Forage Choppers (800HP+ Dual-Drive)">
                        Self-Propelled Forage Choppers (800HP+)
                      </option>
                    </select>
                  </div>

                  {/* Harvest Corridors Dropdown */}
                  <div className="md:col-span-3 flex items-center gap-space-xs bg-surface-container-low px-space-md py-2.5 rounded-lg border border-outline-variant/30">
                    <span className="material-symbols-outlined text-outline text-[20px]">
                      location_on
                    </span>
                    <select
                      className="w-full bg-transparent text-on-surface text-body-sm font-body-sm focus:outline-none cursor-pointer"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="magdeburg">Magdeburg Börde, Hannover (DE)</option>
                      <option value="uk">East Anglia, The Fens (UK)</option>
                      <option value="fr">Champagne-Ardenne Grain Belt (FR)</option>
                      <option value="us">Red River Valley Wheat Trail (US)</option>
                      <option value="au">Western Australia Wheatbelt (AU)</option>
                    </select>
                  </div>

                  {/* License & Telematics Filter */}
                  <div className="md:col-span-3 flex items-center gap-space-xs bg-surface-container-low px-space-md py-2.5 rounded-lg border border-outline-variant/30">
                    <span className="material-symbols-outlined text-outline text-[20px]">
                      badge
                    </span>
                    <select
                      className="w-full bg-transparent text-on-surface text-body-sm font-body-sm focus:outline-none cursor-pointer"
                      value={certification}
                      onChange={(e) => setCertification(e.target.value)}
                    >
                      <option value="cat-t">EU Category T + JD Gen 4 / CLAAS Cebis</option>
                      <option value="cat-f">UK Category F + NPTC Combine Cert</option>
                      <option value="cdl-ag">US Ag Custom CDL Class A Exemption</option>
                      <option value="rtk-isobus">RTK Sub-2.5cm &amp; ISOBUS Class 3</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2">
                    <button
                      className="w-full h-[42px] px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer font-semibold"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        filter_list
                      </span>
                      <span>Filter Runs</span>
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
                      1,420 Active Openings
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    Machinery &amp; Autonomous Harvest Openings
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Standardized modular precision ag postings across dual-rotor combine harvesting, RTK autosteer, and autonomous machinery fleet logistics. Hover the card for technical certifications and direct application actions.
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
                        sortBy === "Highest Precision Tier"
                          ? "Highest Compensation"
                          : "Highest Precision Tier"
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
                            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95 cursor-pointer"
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
                            <Link href={job.detailsLink}>
                              <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                                {job.title}
                              </h3>
                            </Link>

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
                                    Operational Scope &amp; Harvest Telematics
                                  </span>
                                  <p className="text-body-sm text-on-surface-variant">
                                    {job.scope}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                                  <Link
                                    className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                                    href={job.detailsLink}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <span>View Details &amp; Specs</span>
                                    <span className="material-symbols-outlined text-[15px]">
                                      arrow_outward
                                    </span>
                                  </Link>
                                  <Link
                                    className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1 cursor-pointer"
                                    href={job.applyLink}
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
                <span>Showing 1 of 1,420 machinery &amp; combine openings</span>
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
                  Statutory Verification Framework
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Agricultural Machinery Certification &amp; Field Access Frameworks
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Jobzeta matches verified operators and custom harvesters directly against multilateral civil agricultural qualification registries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Cert Card 1: DE */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/30">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">agriculture</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Führerschein Klasse T &amp; FQN
                    </h3>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      Germany &amp; DACH
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Compulsory Category T tractor license up to 60 km/h, wide-vehicle agricultural transport clearance, and BVL plant protection Sachkundenachweis.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-medium">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    Code 95 Ag: Exempt
                  </span>
                </div>

                {/* Cert Card 2: UK */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/30">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        engineering
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Category F + Lantra / NPTC
                    </h3>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      United Kingdom &amp; Ireland
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      UK Category F agricultural tractor &amp; combine entitlement, NPTC combine proficiency certification, and BASIS soil compaction minimization.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-medium">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    City &amp; Guilds L3 Verified
                  </span>
                </div>

                {/* Cert Card 3: US/CAN */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/30">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        verified_user
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Custom Harvester CDL / Ag
                    </h3>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      North America (US / CAN)
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      US State Agricultural Exemption for self-propelled harvesters, Class A CDL with doubles/triples endorsement for grain haulage, and OSHA 1928 compliance.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-medium">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    FMCSA H-2A Ag Clearance
                  </span>
                </div>

                {/* Cert Card 4: AU/NZ */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/30">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        build
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Heavy Rigid (HR) &amp; Ag
                    </h3>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      Australia &amp; New Zealand
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Australian HR or Class 1 machinery endorsement, custom grain contract harvest validation, paired with Working Holiday Subclass 417/462 scheme.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-medium">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    AgriSkills AU Grade 4
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Machine Profiles & Fleet Disciplines Matrix */}
          <section className="w-full px-margin py-space-xl bg-surface-container-low">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Machine Profiles &amp; Fleet Disciplines
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Harvest Capabilities &amp; Machinery Specializations
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Explore dedicated machinery profiles requiring specialized cutterbars, telematics setups, and header transport.
                  </p>
                </div>
                <Link
                  className="font-label-lg text-label-lg text-primary hover:underline flex items-center gap-1 font-semibold"
                  href="/categories/agriculture-and-farming"
                >
                  Explore All 24 Agricultural Sectors
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Spec 1: Rotary Combines */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-mono font-semibold">
                        ROTARY
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        1,820 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      High-Capacity Rotary Combines (10-12m+)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      High-acreage wheat, barley, canola threshing with CLAAS Lexion 8900 / John Deere S790, active machine sync unloader, and automated sieve adjustment.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex flex-wrap gap-1 border-t border-surface-container-high">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      CLAAS Lexion
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      JD S790
                    </span>
                  </div>
                </div>

                {/* Spec 2: Heavy Tractors */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-mono font-semibold">
                        500HP+
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        1,140 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Heavy High-HP Tractors &amp; Tillage
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      High-draft primary tillage and deep ripping using Fendt 1050 Vario, John Deere 9RX, or Case Quadtrac with sub-2.5cm RTK autosteer.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex flex-wrap gap-1 border-t border-surface-container-high">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      Fendt 1050
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      9RX Quadtrac
                    </span>
                  </div>
                </div>

                {/* Spec 3: Precision Spraying */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-mono font-semibold">
                        ISOBUS PWM
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        690 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Precision Spraying &amp; PWM Booms
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Liquid nitrogen and crop protection application with Horsch Leeb / Fendt Rogator 36m booms and ISOBUS PWM pulse-width nozzle control.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex flex-wrap gap-1 border-t border-surface-container-high">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      Horsch Leeb
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      Rogator 36m
                    </span>
                  </div>
                </div>

                {/* Spec 4: Forage Harvesters */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-mono font-semibold">
                        FORAGE
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        600 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      High-Density Baling &amp; Forage Harvesters
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      High-throughput silage chopping with Krone Big X and high-density square baling with integrated bale weighing and moisture sensors.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex flex-wrap gap-1 border-t border-surface-container-high">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      Krone Big X
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                      Moisture Sensor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Agri-Enterprise Employers & Fleet Partners */}
          <section className="w-full px-margin py-space-xl bg-surface">
            <div className="max-w-6xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Accredited Harvest Fleets
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Accredited Harvest Fleets &amp; Agri-Enterprise Partners
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Direct recruitment and seasonal harvest agreements across verified sponsoring enterprises.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-space-md">
                {/* Partner 1 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-sm border border-outline-variant/30 hover:border-primary/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold text-base shadow-xs">
                    JD
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      John Deere Dealer Net
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-medium">
                      1,240 Open Dispatches
                    </span>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-sm border border-outline-variant/30 hover:border-primary/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-secondary font-bold text-base shadow-xs">
                    CL
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      CLAAS Harvest Centre
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-medium">
                      890 Open Dispatches
                    </span>
                  </div>
                </div>

                {/* Partner 3 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-sm border border-outline-variant/30 hover:border-primary/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold text-base shadow-xs">
                    FE
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Fendt Global Fleets
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-medium">
                      750 Open Dispatches
                    </span>
                  </div>
                </div>

                {/* Partner 4 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-sm border border-outline-variant/30 hover:border-primary/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-secondary font-bold text-base shadow-xs">
                    FF
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      ForwardFarming SE
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-medium">
                      620 Open Dispatches
                    </span>
                  </div>
                </div>

                {/* Partner 5 */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-sm border border-outline-variant/30 hover:border-primary/40 transition-colors col-span-2 md:col-span-1">
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold text-base shadow-xs">
                    BW
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      BayWa AG Agrar
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-medium">
                      580 Open Dispatches
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Alert Signup Banner */}
          <section className="w-full px-margin py-space-xl bg-surface-container" id="harvest-alerts">
            <div className="max-w-4xl mx-auto rounded-2xl bg-secondary text-on-secondary p-space-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg relative overflow-hidden">
              {/* Decorative background accent */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col gap-space-xs max-w-lg relative z-10">
                <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider font-semibold">
                  Automated Telematics Integration &amp; Dispatch Feeds
                </span>
                <h3 className="font-headline-lg text-headline-lg text-on-secondary font-bold">
                  Receive Instant Harvest Shift Alerts &amp; Grain Surge Rates
                </h3>
                <p className="font-body-sm text-body-sm text-secondary-fixed">
                  Get notified instantly when harvest windows open, grain moisture drops below 14.5%, and weekend night-cutting bonuses trigger.
                </p>
                {alertSubmitted && (
                  <span className="text-primary-fixed font-label-md font-semibold pt-1">
                    ✓ Harvest Telematics Alerts activated successfully!
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
                    placeholder="operator.harvest@agritech-fleet.de"
                    required
                    type="email"
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                  />
                  <button
                    className="w-full sm:w-auto px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-md transition-all shrink-0 font-semibold cursor-pointer"
                    type="submit"
                  >
                    Activate Alerts
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
