"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LivestockAndRoboticDairyPage() {
  const [platform, setPlatform] = useState("Lely Astronaut A5");
  const [corridor, setCorridor] = useState("Waikato, New Zealand");
  const [certification, setCertification] = useState("Lely Master Certified / DeLaval DelPro");
  const [sortBy, setSortBy] = useState("Highest Automation Tier");
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [alertEmail, setAlertEmail] = useState("");
  const [alertCorridor, setAlertCorridor] = useState("Waikato Corridor");
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

  // Requisitions Data
  const jobs = [
    {
      id: 1,
      badge: "Automated Rotary & VMS Fleet",
      badgeIcon: "rotate_right",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1VWjO4eYAa-3f09H4yvQZeqr2BvbEDowoK7_fH5ih7m-DqaA20WtHmk5cBFDGUQyzkV9sSSvEp1jUJz-44ilr2tYqz-0mLbeHIFwFJlTah74xvbVMLl7csyoeP9FfsP-2zuVLL4B0qcPXtmWsthwo4f-KR_BCQ8NMUgJiQPLvAP6A6diHYK9S18uE7-934aqt0Ck7-l3pluxJy5YM-RSOElz90BbxSQtIg4s4JhOCoteT4fYUQ8Ppnhdg88",
      company: "Fonterra Dairy Co-op & FrieslandCampina Alliance",
      verified: true,
      posted: "Posted 3h ago",
      salary: "€48,000 – €66,000",
      salaryPeriod: " / yr base + €450/mo SCC bonus + free farm cottage",
      title: "Lead Autonomous Robotic Milking & Dairy Herd Health Specialist",
      location: "Waikato, New Zealand / Leeuwarden Hub",
      type: "Full-Time Permanent",
      tier: "Tier-1 Auto",
      sponsorship: "Accredited Employer Work Visa",
      skills: [
        "Lely Astronaut A5",
        "DeLaval VMS V300",
        "CowManager Biometrics",
        "Automated TMR Feeding",
        "Global Animal Welfare Grade A",
      ],
      scope:
        "Direct supervision of 850-head automated herd across dual-box voluntary robotic stalls, laser teat scanners, real-time somatic cell & rumination collar telemetry, and automated pneumatic smart sorting gates.",
      detailsLink: "#",
      applyLink: "#",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-teal-100 selection:text-teal-900 font-body-md text-body-md">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="w-full flex-1 pt-16 sm:pt-20">
        {/* 2. Sub-Header Meta Bar & Corridor Breadcrumbs */}
        <div className="w-full bg-slate-50 border-b border-slate-200/70 py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-slate-600 font-medium">
              <Link className="hover:text-teal-700 transition-colors" href="/">
                Home
              </Link>
              <span className="material-symbols-outlined text-[13px] text-slate-400">chevron_right</span>
              <Link className="hover:text-teal-700 transition-colors" href="/categories">
                Categories
              </Link>
              <span className="material-symbols-outlined text-[13px] text-slate-400">chevron_right</span>
              <Link className="hover:text-teal-700 transition-colors" href="/categories/agriculture-and-farming">
                Agriculture &amp; Farming
              </Link>
              <span className="material-symbols-outlined text-[13px] text-slate-400">chevron_right</span>
              <span className="text-teal-700 font-bold bg-teal-50/80 px-2 py-0.5 rounded border border-teal-200/50">
                Livestock &amp; Robotic Dairy
              </span>
            </nav>

            {/* Live Telemetry Badges */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700 font-semibold border border-slate-300/50">
                <span className="material-symbols-outlined text-teal-700 text-[13px]">tag</span>
                DIRECTORY: AG-DAIRY-7740
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-200/60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                Live Herd Telematics &amp; Sensor Stream Active
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-200/60">
                <span className="material-symbols-outlined text-[13px] text-blue-600">verified</span>
                DeLaval / Lely Astronaut Pre-Cleared
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-200/50 text-slate-600">
                <span className="material-symbols-outlined text-[13px] text-teal-600">sensors</span>
                Waikato-Leeuwarden Corridor Latency: 12ms
              </span>
            </div>
          </div>
        </div>

        {/* 3. Hero Header Section */}
        <section className="w-full bg-white border-b border-slate-200/80 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-4xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-50 text-teal-800 font-bold text-xs uppercase tracking-wider border border-teal-200/70">
                  <span className="material-symbols-outlined text-[16px] text-teal-600">precision_manufacturing</span>
                  COMMERCIAL AGRI-LIVESTOCK &amp; PRECISION DAIRY AUTOMATION
                </span>
              </div>
              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-tight">
                Livestock Management, Robotic Milking &amp; Automated Herd Operations
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                High-precision robotic rotary management, Lely Astronaut A5 / DeLaval VMS V300 voluntary milking systems, real-time rumination biometrics, inline somatic cell count analytics, and automated TMR ration feeding infrastructure.
              </p>
            </div>
            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all shadow-sm cursor-pointer"
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined" && navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Herd Telematics Feed link copied to clipboard!");
                  }
                }}
              >
                <span className="material-symbols-outlined text-[18px] text-teal-600">share</span>
                Share Herd Telematics Feed
              </button>
              <a
                href="#alerts-section"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">notifications_active</span>
                Set Livestock Job Alerts
              </a>
            </div>
          </div>
        </section>

        {/* 4. 3-Column KPI & Benchmark Matrix */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* KPI 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-teal-200 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Active Requisitions
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">3,120</span>
                    <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                      +14.6% MoM
                    </span>
                  </div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                  <span className="material-symbols-outlined text-[24px]">smart_toy</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-4 leading-normal">
                Automated parlor &amp; rotary robot platform expansion across Oceania and Northern Europe.
              </p>
            </div>

            {/* KPI 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-teal-200 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Average Global Wage Band
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      €44,000 – €68,000
                    </span>
                  </div>
                  <span className="text-xs font-bold text-teal-700 mt-1">€3,650 – €5,650 / month base</span>
                </div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                  <span className="material-symbols-outlined text-[24px]">payments</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-4 leading-normal">
                Plus milk solids yield bonus, somatic cell count margins &amp; furnished private on-farm residence.
              </p>
            </div>

            {/* KPI 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-teal-200 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Compliance Gateways
                  </span>
                  <div className="text-lg font-bold text-slate-900 mt-2">
                    Lely Horizon • DelPro • DLG
                  </div>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">DLG Certified &amp; Mastitis Control</span>
                </div>
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-4 leading-normal">
                Pre-cleared regulatory frameworks covering EU Dairy Charters, PrimaryITO NZ, and US FARM Welfare.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Multi-Parameter Search & Filter Card */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-2">
          <div className="max-w-7xl mx-auto bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
              {/* Dropdown 1: Robotic Milking System */}
              <div className="md:col-span-3 flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 px-3.5 py-2.5 rounded-xl hover:border-slate-300 transition-colors">
                <span className="material-symbols-outlined text-teal-600 text-[20px]">smart_toy</span>
                <div className="flex flex-col w-full text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    System Platform
                  </label>
                  <select
                    className="w-full bg-transparent border-none p-0 text-slate-900 font-medium text-xs focus:ring-0 focus:outline-none cursor-pointer"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                  >
                    <option>Lely Astronaut A5</option>
                    <option>DeLaval VMS V300</option>
                    <option>GEA DairyRobot</option>
                    <option>BouMatic Robotic Stalls</option>
                  </select>
                </div>
              </div>

              {/* Dropdown 2: Milking Corridor */}
              <div className="md:col-span-3 flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 px-3.5 py-2.5 rounded-xl hover:border-slate-300 transition-colors">
                <span className="material-symbols-outlined text-blue-600 text-[20px]">location_on</span>
                <div className="flex flex-col w-full text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Milking Corridor
                  </label>
                  <select
                    className="w-full bg-transparent border-none p-0 text-slate-900 font-medium text-xs focus:ring-0 focus:outline-none cursor-pointer"
                    value={corridor}
                    onChange={(e) => setCorridor(e.target.value)}
                  >
                    <option>Waikato, New Zealand</option>
                    <option>Leeuwarden, Friesland NL</option>
                    <option>Bavaria, DACH Alpine Belt</option>
                    <option>Vermont &amp; Wisconsin, USA</option>
                  </select>
                </div>
              </div>

              {/* Dropdown 3: Certification */}
              <div className="md:col-span-4 flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 px-3.5 py-2.5 rounded-xl hover:border-slate-300 transition-colors">
                <span className="material-symbols-outlined text-indigo-600 text-[20px]">badge</span>
                <div className="flex flex-col w-full text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Statutory Certification
                  </label>
                  <select
                    className="w-full bg-transparent border-none p-0 text-slate-900 font-medium text-xs focus:ring-0 focus:outline-none cursor-pointer"
                    value={certification}
                    onChange={(e) => setCertification(e.target.value)}
                  >
                    <option>Lely Master Certified / DeLaval DelPro</option>
                    <option>PrimaryITO L5 Dairy Specialist</option>
                    <option>CAO Rundveehouderij Schaal VI</option>
                    <option>DLG Autonomous Dairy Master</option>
                  </select>
                </div>
              </div>

              {/* Submit Filter Button */}
              <div className="md:col-span-2">
                <button
                  className="w-full h-[46px] flex items-center justify-center gap-2 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">tune</span>
                  Filter Dairy Jobs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Featured Requisition Section — Industrial Electrician Master Structure */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-4">
            {/* Section Header */}
            <div className="flex flex-wrap items-center justify-between pb-1 gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
                <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider">
                  FEATURED REQUISITION
                </h2>
                <span className="text-slate-500 text-sm font-medium">• 3,120 Active Openings</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                <span>Sort by:</span>
                <button
                  className="font-bold text-teal-700 inline-flex items-center gap-0.5 hover:underline cursor-pointer"
                  onClick={() =>
                    setSortBy(
                      sortBy === "Highest Automation Tier" ? "Most Recent" : "Highest Automation Tier"
                    )
                  }
                  type="button"
                >
                  <span>{sortBy}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
                </button>
              </div>
            </div>

            {/* Stacked Master Requisition Cards (Industrial Electrician Structure) */}
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
                      {/* Media Column */}
                      <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                        <div
                          className="w-full h-full min-h-[190px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                          style={{ backgroundImage: `url('${job.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30" />

                        {/* Top Badges */}
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

                      {/* Right Content Column */}
                      <div className="flex-1 p-space-md sm:p-space-lg flex flex-col justify-between gap-space-sm">
                        <div className="flex flex-col gap-2">
                          {/* Company & Meta Strip */}
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
                                    Verified Co-op Alliance
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

                            {/* Salary Band */}
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
                          <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                            {job.title}
                          </h3>

                          {/* Location & Tags Strip */}
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

                        {/* Skill Chips */}
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

                        {/* Interactive Hover Reveal Accordion (Industrial-Electrician pattern) */}
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
                                <button
                                  className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                                  type="button"
                                >
                                  <span>View Details &amp; Specs</span>
                                  <span className="material-symbols-outlined text-[15px]">
                                    arrow_outward
                                  </span>
                                </button>
                                <button
                                  className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1 cursor-pointer"
                                  type="button"
                                >
                                  <span>Quick Apply</span>
                                  <span className="material-symbols-outlined text-[15px]">
                                    send
                                  </span>
                                </button>
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

            {/* Sub-Bar Pagination & Counter */}
            <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
              <span>
                Showing <strong className="text-slate-900 font-semibold">1</strong> of{" "}
                <strong className="text-slate-900 font-semibold">3,120</strong> precision dairy openings
              </span>
              <button
                className="inline-flex items-center gap-1 font-bold text-teal-700 hover:text-teal-800 hover:underline cursor-pointer"
                type="button"
              >
                <span>Load more open positions</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
            </div>
          </div>
        </section>

        {/* 7. Statutory Verification & Animal Welfare Frameworks (4 Jurisdictions Grid) */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
                MULTINATIONAL GOVERNANCE &amp; COMPLIANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Statutory Verification &amp; Animal Welfare Frameworks
              </h2>
              <p className="text-sm text-slate-600 max-w-3xl">
                All livestock specialists and autonomous dairy technicians hosted on Jobzeta are pre-vetted against regional collective labor agreements, veterinary safety mandates, and ISO animal welfare standards.
              </p>
            </div>

            {/* 4 Jurisdictions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* EU & Netherlands */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-xs border border-teal-200">
                      EU
                    </span>
                    <span className="material-symbols-outlined text-teal-600 text-[20px]">verified</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">Netherlands &amp; European Union</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Full alignment with <strong className="text-slate-800">CAO Rundveehouderij Schaal VI</strong> guidelines and <strong className="text-slate-800">DLG Certified Robotic Milker</strong> credentials for EU voluntary systems.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-teal-700 text-[11px] font-bold">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  Directive 98/58/EC Compliant
                </div>
              </div>

              {/* UK & Ireland */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs border border-blue-200">
                      UK
                    </span>
                    <span className="material-symbols-outlined text-blue-600 text-[20px]">verified</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">United Kingdom &amp; Ireland</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pre-validation of <strong className="text-slate-800">City &amp; Guilds L4 Dairy Husbandry</strong>, Red Tractor Livestock audits, and <strong className="text-slate-800">Lantra Milking Machine Systems</strong> certification.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-blue-700 text-[11px] font-bold">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  Defra Welfare Code Ready
                </div>
              </div>

              {/* New Zealand & Australia */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-800 flex items-center justify-center font-bold text-xs border border-indigo-200">
                      NZ
                    </span>
                    <span className="material-symbols-outlined text-indigo-600 text-[20px]">verified</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">New Zealand &amp; Australia</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Integration with <strong className="text-slate-800">PrimaryITO Level 5 Production</strong> records, DairyNZ standards, and <strong className="text-slate-800">Subclass 482 / AEWV</strong> pathways.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-indigo-700 text-[11px] font-bold">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  MPI Animal Welfare Code Certified
                </div>
              </div>

              {/* North America */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs border border-emerald-200">
                      NA
                    </span>
                    <span className="material-symbols-outlined text-emerald-600 text-[20px]">verified</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">North America (US &amp; Canada)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Certified under <strong className="text-slate-800">Professional Dairy Managers (PDMP)</strong> frameworks, National Dairy FARM Program, and <strong className="text-slate-800">Cattle Welfare Audit Standards</strong>.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-emerald-700 text-[11px] font-bold">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  FARM Certified Animal Care
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Specialized Vocations & Disciplines */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
                  SPECIALIZED VOCATIONS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Precision Dairy Disciplines
                </h2>
              </div>
              <Link
                className="text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 hover:underline inline-flex items-center gap-1"
                href="/categories/agriculture-and-farming"
              >
                <span>Explore all agri sectors</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Discipline 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    Automated Milking Boxes (VMS &amp; Astronaut)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Management and calibration of dual-box robotic stalls, laser teat scanners, milk flow sensors, and voluntary cow traffic gates.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-2 border-t border-slate-200/60">
                  <span className="text-xs font-extrabold text-teal-700">1,240 Openings</span>
                  <span className="material-symbols-outlined text-teal-600 text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Discipline 2 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">sensors</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    Rumination Biometrics &amp; Sensor Tech
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    CowManager and SCR sensor array operations tracking chewing cadence, heat detection, thermal stress, and early mastitis intervention.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-2 border-t border-slate-200/60">
                  <span className="text-xs font-extrabold text-blue-700">820 Openings</span>
                  <span className="material-symbols-outlined text-blue-600 text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Discipline 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-indigo-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100/70 text-indigo-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">conveyor_belt</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                    Automated TMR Rations &amp; Belt Feeding
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated total mixed ration (TMR) kitchens, automated rail-suspended feeders, and computerized silage delivery schedules.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-2 border-t border-slate-200/60">
                  <span className="text-xs font-extrabold text-indigo-700">590 Openings</span>
                  <span className="material-symbols-outlined text-indigo-600 text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Discipline 4 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">vital_signs</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Calf Automated Nursing &amp; Health Tracking
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Computerized colostrum and milk-feeding stations, RFID tag consumption logs, and neonatal pulmonary acoustic sensors.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-2 border-t border-slate-200/60">
                  <span className="text-xs font-extrabold text-emerald-700">470 Openings</span>
                  <span className="material-symbols-outlined text-emerald-600 text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Accredited Dairy Co-operatives & Agritech Partners */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col items-center text-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                TRUSTED ECOSYSTEM
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Accredited Dairy Co-operatives &amp; Agritech Partners
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Direct recruitment alliances with global dairy processing leaders and autonomous robotic manufacturing platforms.
              </p>
            </div>

            {/* Partner Logo Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-1 hover:border-teal-300 hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-teal-600 text-[30px]">grass</span>
                <span className="text-sm font-bold text-slate-900">Fonterra Co-op</span>
                <span className="text-[11px] text-slate-500 font-medium">New Zealand</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-1 hover:border-blue-300 hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-blue-600 text-[30px]">water_drop</span>
                <span className="text-sm font-bold text-slate-900">FrieslandCampina</span>
                <span className="text-[11px] text-slate-500 font-medium">Netherlands</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-1 hover:border-indigo-300 hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-indigo-600 text-[30px]">shield</span>
                <span className="text-sm font-bold text-slate-900">Arla Foods Global</span>
                <span className="text-[11px] text-slate-500 font-medium">Scandinavia / UK</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-1 hover:border-teal-300 hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-teal-600 text-[30px]">precision_manufacturing</span>
                <span className="text-sm font-bold text-slate-900">Lely Center</span>
                <span className="text-[11px] text-slate-500 font-medium">Global Network</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-1 hover:border-blue-300 hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-blue-600 text-[30px]">hub</span>
                <span className="text-sm font-bold text-slate-900">DeLaval Global</span>
                <span className="text-[11px] text-slate-500 font-medium">Sweden / US</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-1 hover:border-slate-300 hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-slate-700 text-[30px]">settings_input_component</span>
                <span className="text-sm font-bold text-slate-900">GEA Farm Tech</span>
                <span className="text-[11px] text-slate-500 font-medium">Germany</span>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Automated Telematics Integration & Dispatch Alert Banner */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-white" id="alerts-section">
          <div className="max-w-7xl mx-auto rounded-3xl bg-slate-900 text-white p-8 sm:p-10 relative overflow-hidden shadow-2xl">
            {/* Background Decorative Radial Gradient & Glow */}
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 font-mono text-xs font-bold w-fit border border-teal-400/30">
                  <span className="material-symbols-outlined text-[16px]">sensors</span>
                  INSTANT TELEMATICS &amp; REQUISITION DISPATCH
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Never Miss High-Yield Robotic Dairy Requisitions
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  Receive authenticated SMS and WhatsApp telegrams the moment voluntary milking hubs and automated farm estates in your selected corridor announce vacancies.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-slate-300 text-xs">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-teal-400 text-[16px]">check_circle</span>
                    Zero Recruitment Spam
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-teal-400 text-[16px]">check_circle</span>
                    Housing &amp; Relocation Verified
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-teal-400 text-[16px]">check_circle</span>
                    Instant Unsubscribe
                  </span>
                </div>
              </div>

              {/* Subscription Form */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 flex flex-col gap-3 shadow-inner">
                <span className="text-sm font-bold text-white">Create Instant Notification Hook</span>
                {alertSubmitted ? (
                  <div className="p-4 rounded-xl bg-teal-500/20 border border-teal-400/40 text-center space-y-1">
                    <span className="material-symbols-outlined text-teal-300 text-[28px]">check_circle</span>
                    <p className="text-sm font-bold text-white">Notification Hook Active!</p>
                    <p className="text-xs text-slate-300">
                      You are now subscribed to alerts for {alertCorridor}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleAlertSubmit} className="flex flex-col gap-2.5">
                    <input
                      className="w-full h-11 px-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-xs focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      placeholder="herdsman.lead@precision-dairy.com"
                      type="email"
                      required
                      value={alertEmail}
                      onChange={(e) => setAlertEmail(e.target.value)}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <select
                        className="h-10 px-3 rounded-xl bg-white text-slate-800 text-xs focus:ring-2 focus:ring-teal-400 focus:outline-none cursor-pointer"
                        value={alertCorridor}
                        onChange={(e) => setAlertCorridor(e.target.value)}
                      >
                        <option>Waikato Corridor</option>
                        <option>Leeuwarden Hub</option>
                        <option>Bavaria / Alps</option>
                        <option>North American Belt</option>
                      </select>
                      <button
                        className="h-10 flex items-center justify-center gap-1.5 rounded-xl bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[16px]">send</span>
                        Subscribe
                      </button>
                    </div>
                  </form>
                )}
                <span className="text-[11px] text-slate-400">
                  Protected under Jobzeta International Workforce Sovereign Privacy Charter.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Jobzeta Footer */}
      <Footer />
    </div>
  );
}
