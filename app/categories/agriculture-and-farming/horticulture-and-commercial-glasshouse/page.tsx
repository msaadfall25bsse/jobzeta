"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HorticultureAndCEAPage() {
  const [keyword, setKeyword] = useState("Priva Connext, Hoogendoorn iGrow, Venlo Glasshouse, Substrate");
  const [location, setLocation] = useState("nl");
  const [certification, setCertification] = useState("priva");
  const [sortBy, setSortBy] = useState("Highest Capacity Rating");
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSpecialization, setAlertSpecialization] = useState("Priva Climate & Shading Specialist");
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
      badge: "Commercial Glasshouse & CEA",
      badgeIcon: "eco",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1Us5_uz7KJtkSt9_PtiMq5gSr0mDw-ntCFAva51-Cq7C20YbKd53rP28ZzyrSkIu1n6KogTwAGy7vOdg30wXsBNwZhWuILMygGpB4esrjPuwZ67jp4xRt39jx7K-wnt8fLJW_iYHZxmqKAVKkU4OfrKN3m1yl6BB334j_l0-Vd5xtrnx6KykiHiWeHmM3nIxdHZS_rCHXiQu2SAwV2MzeE0rqG7er1eu6gVhW6OvE2rc8nvfzeS1v4hCKYa",
      company: "RedStar Agro & Horti-Holdings JV",
      verified: true,
      posted: "Posted 2h ago",
      salary: "€58,000 – €74,000",
      salaryPeriod: " / yr base + 22% Shift Multiplier + Per Diem Lodge",
      title: "Senior High-Tech Glasshouse Climate & CEA Operations Manager",
      location: "Westland, Netherlands (On-Site • High-Wire Venlo & Autonomous CEA Project)",
      type: "Full-Time Permanent",
      tier: "Tier-1 CEA Infrastructure",
      sponsorship: "EU Blue Card & Relocation Support",
      skills: [
        "Priva Connext Level 3",
        "Hoogendoorn iGrow",
        "VPD / Pipe-Rail Heating",
        "Biological IPM Shield",
        "ToBRFV Protocol",
      ],
      scope:
        "Requires certified Priva Connext or Hoogendoorn climate license with proven experience in 15+ hectare Venlo glasshouse automation, VPD curve balancing, and closed-loop fertigation.",
      detailsLink: "#",
      applyLink: "#",
    },
  ];

  return (
    <div className="min-h-full bg-background font-body-md text-on-surface antialiased">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          {/* Sub-Header Directory Bar */}
          <div className="w-full bg-surface-container-low border-b border-surface-container-high px-margin py-2.5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-xs text-[13px] font-label-md">
              <div className="flex items-center gap-space-sm flex-wrap justify-center sm:justify-start">
                <Link
                  href="/categories/agriculture-and-farming"
                  className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest text-secondary font-semibold border border-surface-container-high shadow-sm hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                  <span>Agriculture &amp; Farming</span>
                </Link>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>
                  Priva / Hoogendoorn Climate Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-lowest text-on-surface-variant font-medium border border-surface-container-high shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Live Exchange Feed
                </span>
              </div>
              <div className="font-mono text-outline text-[12px] font-medium">
                DIRECTORY ID: AG-CEA-CLIMATE-9080
              </div>
            </div>
          </div>

          {/* Main Hero Section */}
          <section className="w-full bg-surface-bright px-margin pt-space-xl pb-space-lg">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-2 text-primary font-label-sm uppercase tracking-wider font-bold">
                <span className="material-symbols-outlined text-[16px]">nest_eco_leaf</span>
                <span>Specialized Craft Sub-Discipline</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-secondary tracking-tight font-bold">
                Horticulture, Commercial Glasshouse &amp; Controlled-Environment Agriculture (CEA) Operations
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
                High-precision climate computer management (Priva Connext, Hoogendoorn iGrow), vapor pressure deficit (VPD) regulation, closed-loop hydroponics, and multi-hectare Venlo automated glasshouse production.
              </p>
            </div>
          </section>

          {/* Top 3-Card KPI Metrics Grid */}
          <section className="w-full bg-surface-bright px-margin pb-space-lg">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {/* Metric Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-high shadow-sm flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    Active Requisitions
                  </span>
                  <span className="p-1.5 rounded-lg bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-[20px]">groups</span>
                  </span>
                </div>
                <div className="mt-space-sm">
                  <div className="font-headline-lg text-headline-lg font-bold text-secondary">1,840</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Global certified openings across 34 agritech jurisdictions
                  </p>
                </div>
              </div>

              {/* Metric Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-high shadow-sm flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    Average Global Wage Band
                  </span>
                  <span className="p-1.5 rounded-lg bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-[20px]">payments</span>
                  </span>
                </div>
                <div className="mt-space-sm">
                  <div className="font-headline-lg text-headline-lg font-bold text-secondary">€54k – €78k</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    $58k–$84k eq. Climate yield differential, site lodge &amp; harvest bonuses included
                  </p>
                </div>
              </div>

              {/* Metric Card 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-high shadow-sm flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    Compliance Standard
                  </span>
                  <span className="p-1.5 rounded-lg bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </span>
                </div>
                <div className="mt-space-sm">
                  <div className="font-headline-lg text-headline-lg font-bold text-primary truncate">
                    PRIVA / GLOBALG.A.P. / CAO LEVEL VI
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Pre-cleared horticultural automation &amp; biological IPM registries active
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Filter Bar */}
          <section className="w-full bg-surface-bright px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface-container-lowest rounded-xl p-space-sm border border-surface-container-high shadow-sm">
                <form
                  className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Keyword Input */}
                  <div className="md:col-span-5 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">
                      search
                    </span>
                    <input
                      className="w-full h-10 pl-9 pr-3 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder-outline focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-primary/40"
                      placeholder="Priva Connext, Hoogendoorn iGrow, Venlo Glasshouse, Substrate..."
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>

                  {/* Dropdown 2: Location */}
                  <div className="md:col-span-3 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">
                      location_on
                    </span>
                    <select
                      className="w-full h-10 pl-9 pr-8 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none appearance-none cursor-pointer border border-transparent focus:border-primary/40"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="all">Westland / Flanders / Almería / Leamington</option>
                      <option value="nl">Westland Agriport (NL)</option>
                      <option value="be">Flanders Horticulture (BE)</option>
                      <option value="es">Almería Sea of Plastic (ES)</option>
                      <option value="ca">Leamington Ontario (CA)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 pointer-events-none text-on-surface-variant text-[18px]">
                      expand_more
                    </span>
                  </div>

                  {/* Dropdown 3: License */}
                  <div className="md:col-span-2 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">
                      verified
                    </span>
                    <select
                      className="w-full h-10 pl-9 pr-8 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none appearance-none cursor-pointer border border-transparent focus:border-primary/40"
                      value={certification}
                      onChange={(e) => setCertification(e.target.value)}
                    >
                      <option value="all">Priva Level 3 / Hoogendoorn / GlobalG.A.P.</option>
                      <option value="priva">Priva Connext Level 3</option>
                      <option value="hoogendoorn">Hoogendoorn Growth Suite</option>
                      <option value="globalgap">GlobalG.A.P. Certified</option>
                      <option value="cao">CAO Glastuinbouw VI</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 pointer-events-none text-on-surface-variant text-[18px]">
                      expand_more
                    </span>
                  </div>

                  {/* Filter Button */}
                  <div className="md:col-span-2 flex items-center">
                    <button
                      className="w-full h-10 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[18px]">tune</span>
                      <span>Filter Requisitions</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Featured Requisitions Section — Standard Industrial-Electrician Layout */}
          <section className="w-full bg-background px-margin py-space-xl border-t border-surface-container-high">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
              {/* Header Row */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <h2 className="font-headline-sm text-headline-sm text-secondary font-bold">
                    Featured Requisitions
                  </h2>
                  <span className="text-outline">•</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    1,840 Active Openings
                  </span>
                </div>
                <button
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-secondary bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-surface-container-high transition-colors cursor-pointer"
                  onClick={() =>
                    setSortBy(
                      sortBy === "Highest Capacity Rating" ? "Most Recent" : "Highest Capacity Rating"
                    )
                  }
                  type="button"
                >
                  <span>Sort by: {sortBy}</span>
                  <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                </button>
              </div>

              {/* Stacked Master Requisition Cards (Matching Industrial-Electrician Structure) */}
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
                                      Verified Facility
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

                              {/* Salary */}
                              <div className="text-right">
                                <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                                  {job.salary}
                                </span>
                                <span className="font-label-sm text-label-sm text-on-surface-variant">
                                  {job.salaryPeriod}
                                </span>
                              </div>
                            </div>

                            {/* Job Title */}
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

              {/* Card Footer Line */}
              <div className="flex items-center justify-between text-body-sm text-on-surface-variant pt-1 px-1">
                <span>Showing 1 of 1,840 horticultural CEA openings</span>
                <button
                  className="inline-flex items-center gap-1 font-semibold text-secondary hover:text-primary transition-colors cursor-pointer"
                  type="button"
                >
                  <span>Load more open positions</span>
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </button>
              </div>
            </div>
          </section>

          {/* Core Technical Credentials Recognized Matrix */}
          <section className="w-full bg-surface-bright px-margin py-space-xl border-t border-surface-container-high">
            <div className="max-w-7xl mx-auto space-y-space-lg">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Standardized Licensing Frameworks
                </span>
                <h2 className="font-headline-lg text-headline-lg text-secondary font-bold">
                  Core Technical Credentials Recognized Matrix
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Cross-border validation protocols established across national safety &amp; operating authorities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Credential Card 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-sm">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        Netherlands &amp; DACH
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      CAO Glastuinbouw Schaal VI &amp; Priva Level 3
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Priva Academy Level 3 &amp; Hoogendoorn Climate Expert certification, VCA-VOL safety touchstone.
                    </p>
                  </div>
                  <div className="pt-space-xs">
                    <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                      Full Mutual Recognition
                    </span>
                  </div>
                </div>

                {/* Credential Card 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-sm">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        United Kingdom &amp; Ireland
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Lantra Level 4 Protected Crop Management
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Lantra Level 4 / BASIS Advanced Protected Agronomy with verified NVQ Level 3 and BASIS FACTS touchstone.
                    </p>
                  </div>
                  <div className="pt-space-xs">
                    <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                      Tier-1 Pre-Qualified
                    </span>
                  </div>
                </div>

                {/* Credential Card 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-sm">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        United States &amp; Canada
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      CEA Certified Professional &amp; OSHA 30
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Certified CEA Operator / Commercial Greenhouse Growers Association Tier-A, Red Seal Ag Machinery &amp; Climate endorsement compliant.
                    </p>
                  </div>
                  <div className="pt-space-xs">
                    <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                      Cross-Jurisdiction Clearance
                    </span>
                  </div>
                </div>

                {/* Credential Card 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-space-sm">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        International Civil Agritech
                      </span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      GlobalG.A.P. &amp; Biological IPM Standard
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Direct clearance under EU Directive 2009/128/EC &amp; Koppert biological control standard with phytosanitary passport validation.
                    </p>
                  </div>
                  <div className="pt-space-xs">
                    <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                      Maritime &amp; Agritech Validated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Operational Streams Section */}
          <section className="w-full bg-background px-margin py-space-xl border-t border-surface-container-high">
            <div className="max-w-7xl mx-auto space-y-space-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Specialized Deployment Streams
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-secondary font-bold">
                    Controlled-Environment Systems Frequently Requisitioned
                  </h2>
                </div>
                <div className="font-label-md text-label-md text-secondary font-semibold flex items-center gap-1">
                  <span>4 Specialized Operational Streams</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Stream Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-high shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-sm">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">640 Roles</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      High-Wire Venlo Climate &amp; Shading Screens
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Priva Connext v9.4, Hoogendoorn iGrow, Svensson double thermal screens, Ridder drive motors.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap pt-space-xs">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      High-Wire Vine
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      VPD Balancing
                    </span>
                  </div>
                </div>

                {/* Stream Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-high shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-sm">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">510 Roles</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">water_ph</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Automated Closed-Loop Fertigation &amp; UV Recycling
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Priva NutriFit, HortiMaX FertiMiX, 100% closed-loop drain water UV disinfection, EC/pH precision.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap pt-space-xs">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      Nutrient Loop
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      Drain Assay
                    </span>
                  </div>
                </div>

                {/* Stream Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-high shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-sm">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">420 Roles</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">lightbulb</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      TopLED Lighting &amp; Microclimate Dehumidification
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Signify Philips GreenPower TopLED 2200 µmol/s, active dehumidification, air movement fans.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap pt-space-xs">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      Supplemental LED
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      Vapor Control
                    </span>
                  </div>
                </div>

                {/* Stream Card 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-high shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-sm">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">270 Roles</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">smart_toy</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Autonomous Harvesting &amp; Robotic Gantry Systems
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Octinion tomato harvester, ridder pipe-rail trolleys, automated crop registration &amp; yield AI models.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap pt-space-xs">
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      Robotic Pickers
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      Yield Telemetry
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Hiring Partners */}
          <section className="w-full bg-surface-bright px-margin py-space-xl border-t border-surface-container-high">
            <div className="max-w-7xl mx-auto space-y-space-lg">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Tier-1 Agro-Enterprise Alliances
                </span>
                <h2 className="font-headline-lg text-headline-lg text-secondary font-bold">
                  Enterprise Facility &amp; Controlled-Ag Hiring Partners
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Active hiring pipelines for major commercial glasshouses, vertical farming hubs, and agritech mega-facilities.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Partner Card 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      RedStar Agro Holdings
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      52 Openings Active
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">domain</span>
                  </div>
                </div>

                {/* Partner Card 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      NatureFresh Farms Global
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      68 Openings Active
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">potted_plant</span>
                  </div>
                </div>

                {/* Partner Card 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Koppert Biological Systems
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      44 Openings Active
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">verified</span>
                  </div>
                </div>

                {/* Partner Card 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                      Priva Climate Alliances
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      39 Openings Active
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">factory</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Telematics Alert Subscription Banner */}
          <section className="w-full bg-background px-margin py-space-xl border-t border-surface-container-high">
            <div className="max-w-7xl mx-auto rounded-2xl bg-secondary text-on-secondary p-space-xl shadow-xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-space-md">
                  <h2 className="font-headline-xl text-headline-xl text-on-secondary font-bold leading-tight">
                    Receive High-Tech CEA &amp; Glasshouse Requisitions Instantly
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-secondary/85">
                    Get immediate match notifications for high-hectare climate managers, hydroponic fertigation specialists, and CEA automation leads filtered by your specific Priva or Hoogendoorn profile.
                  </p>
                  <div className="flex items-center gap-space-md flex-wrap pt-space-xs font-label-sm text-label-sm text-on-secondary/90">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">check</span>
                      Verified Tier-1 Projects
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">check</span>
                      Shift Differential Alerts
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">check</span>
                      Zero Spam Policy
                    </span>
                  </div>
                </div>

                {/* Right Form */}
                <div className="lg:col-span-5 bg-surface-container-lowest/10 backdrop-blur-md p-space-lg rounded-xl border border-white/10 space-y-space-sm">
                  {alertSubmitted ? (
                    <div className="p-space-md rounded-lg bg-primary/20 border border-primary/40 text-center space-y-1">
                      <span className="material-symbols-outlined text-primary-fixed text-[32px]">check_circle</span>
                      <p className="font-headline-sm text-headline-sm font-bold text-white">Alerts Activated!</p>
                      <p className="font-body-sm text-body-sm text-white/80">
                        You will receive instant alerts for {alertSpecialization}.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleAlertSubmit} className="space-y-space-xs">
                      <input
                        className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface placeholder-outline focus:outline-none"
                        placeholder="Enter your technical work email..."
                        type="email"
                        required
                        value={alertEmail}
                        onChange={(e) => setAlertEmail(e.target.value)}
                      />
                      <div className="relative flex items-center">
                        <select
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface focus:outline-none appearance-none cursor-pointer"
                          value={alertSpecialization}
                          onChange={(e) => setAlertSpecialization(e.target.value)}
                        >
                          <option value="Priva Climate & Shading Specialist">Priva Climate &amp; Shading Specialist</option>
                          <option value="Hoogendoorn iGrow Systems Lead">Hoogendoorn iGrow Systems Lead</option>
                          <option value="Closed-Loop Substrate Fertigation Agronomist">Closed-Loop Substrate Fertigation Agronomist</option>
                          <option value="Vertical Farm Automation Engineer">Vertical Farm Automation Engineer</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 pointer-events-none text-on-surface-variant text-[18px]">
                          expand_more
                        </span>
                      </div>
                      <button
                        className="w-full h-11 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                        type="submit"
                      >
                        <span>Activate Free Requisition Alerts</span>
                        <span className="material-symbols-outlined text-[18px]">notifications_active</span>
                      </button>
                    </form>
                  )}
                  <p className="font-label-sm text-[11px] text-center text-on-secondary/70 pt-1">
                    GDPR &amp; ISO 27001 Compliant Workforce Verification Registry
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
