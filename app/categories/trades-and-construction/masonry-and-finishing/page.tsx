"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MasonryAndFinishingPage() {
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSubscribed, setAlertSubscribed] = useState(false);

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertEmail) {
      setAlertSubscribed(true);
      setTimeout(() => setAlertSubscribed(false), 5000);
      setAlertEmail("");
    }
  };

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Utility Context Bar / Breadcrumbs */}
          <section className="w-full bg-surface-container-low py-space-md">
            <div className="w-full px-margin flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center flex-wrap gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1"
                  href="/"
                >
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  Home
                </Link>
                <span className="text-outline-variant">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories"
                >
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
                <span className="text-primary font-bold">Masonry &amp; Finishing</span>
                <span className="ml-space-sm px-space-xs py-0.5 rounded bg-surface-container-high text-tertiary font-label-sm text-label-sm font-mono tracking-tight">
                  TC-MASON-FINISH-2850
                </span>
              </div>
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Specialized Craft Sub-Discipline
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                  DIN 1053 &amp; Red Seal Validated
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Live Exchange Feed
                </span>
              </div>
            </div>
          </section>

          {/* Title & High-Level Market Intelligence */}
          <section className="w-full bg-surface-container-lowest py-space-xl shadow-sm">
            <div className="w-full px-margin">
              <div className="max-w-5xl mb-space-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider mb-space-sm">
                  <span className="material-symbols-outlined text-[16px]">architecture</span>
                  Trowel Trades, Bricklaying &amp; Building Envelope Engineering
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-sm">
                  Structural Masonry, Architectural Brickwork &amp; Precision Finishing Systems
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-4xl">
                  Commercial bricklaying, structural blockwork, natural stone cladding, rainscreen facade systems, and architectural plaster/drywall finishing across tier-1 mega-projects.
                </p>
              </div>

              {/* Metric Grid (Uniform High-Density Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                      Active Requisitions
                    </span>
                    <span className="p-2 rounded-lg bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">handyman</span>
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mb-1">
                      1,680
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Global certified openings across 26 jurisdictions
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-2">
                    <span className="text-primary font-label-sm text-label-sm flex items-center font-bold">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span> +14.8%
                    </span>
                    <span className="font-body-sm text-body-sm text-tertiary">
                      MoM contractor demand
                    </span>
                  </div>
                </div>

                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                      Average Global Wage Band
                    </span>
                    <span className="p-2 rounded-lg bg-surface-container-lowest text-secondary shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">payments</span>
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mb-1">
                      €54k – €82k
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      $60k - $90k eq. Shift differential &amp; height allowances included
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-2">
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary-fixed/40 text-on-primary-fixed-variant font-bold">
                      Lodge Included
                    </span>
                    <span className="font-body-sm text-body-sm text-tertiary">
                      Overtime 1.5x standard
                    </span>
                  </div>
                </div>

                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                      Compliance Standard
                    </span>
                    <span className="p-2 rounded-lg bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">verified_user</span>
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-1 truncate">
                      DIN 1053 / Red Seal
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Pre-cleared structural masonry &amp; facade registries active
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      OSHA 1926 Verified
                    </span>
                    <span className="font-body-sm text-body-sm text-tertiary">
                      Reciprocal clearing active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Filter Panel Bar */}
          <section className="w-full bg-surface-container-lowest py-space-md shadow-sm -mt-2">
            <div className="w-full px-margin">
              <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col lg:flex-row items-center gap-space-md">
                <div className="relative flex-1 w-full">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline"
                    placeholder="Architectural Brick, Structural CMU, Natural Stone, Rainscreen Facade"
                    type="text"
                    defaultValue="Architectural Brick, Structural CMU, Natural Stone, Rainscreen Facade"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-space-sm w-full lg:w-auto">
                  <div className="relative min-w-[200px] flex-1 sm:flex-none">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                      location_on
                    </span>
                    <select
                      defaultValue="Berlin / London / Zurich / Toronto"
                      className="w-full appearance-none pl-9 pr-8 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                      <option value="Berlin / London / Zurich / Toronto">
                        Berlin / London / Zurich / Toronto
                      </option>
                      <option value="berlin">Berlin Metropolitan Area</option>
                      <option value="london">Greater London &amp; South East</option>
                      <option value="zurich">Zurich / Basel Canton</option>
                      <option value="toronto">Greater Toronto Area</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                  <div className="relative min-w-[210px] flex-1 sm:flex-none">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                      badge
                    </span>
                    <select
                      defaultValue="Maurer Geselle / Red Seal / NVQ 3"
                      className="w-full appearance-none pl-9 pr-8 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                      <option value="Maurer Geselle / Red Seal / NVQ 3">
                        Maurer Geselle / Red Seal / NVQ 3
                      </option>
                      <option value="dach">Maurer / Maurermeister Gesellenbrief</option>
                      <option value="na">Red Seal Bricklayer (BAC)</option>
                      <option value="uk">NVQ Level 3 Trowel Occupations</option>
                      <option value="nordic">Fagbrev Murer (Nordic)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all whitespace-nowrap w-full sm:w-auto cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">tune</span>
                    Filter Live
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Requisition Focus (2-Column Asymmetric High-Polish Card) */}
          <section className="w-full py-space-xl bg-surface">
            <div className="w-full px-margin">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm mb-space-lg">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    High Priority Opening
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Featured Requisitions • 1,680 Active Openings
                  </h2>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Sort by:</span>
                  <div className="relative">
                    <select
                      defaultValue="Highest Structural Rating"
                      className="appearance-none pl-3 pr-8 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm outline-none cursor-pointer"
                    >
                      <option value="Highest Structural Rating">Highest Structural Rating</option>
                      <option value="Highest Compensation">Highest Compensation</option>
                      <option value="Urgent Site Mobilization">Urgent Site Mobilization</option>
                      <option value="DACH Sovereign Projects">DACH Sovereign Projects</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[16px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              {/* Exactly ONE primary featured job card */}
              <div className="rounded-2xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Column 1: Image & Badge */}
                  <div className="lg:col-span-3 p-space-lg flex flex-col gap-space-xs">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-surface-container-low shadow-sm border border-outline-variant/30 group">
                      <img
                        alt="Certified commercial stone mason and architectural bricklayer laying klinker bricks and precast limestone facade"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        src="/masonry-facade-lead.jpg"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-1 rounded bg-on-background/80 backdrop-blur-sm text-on-primary font-label-sm text-[10px] font-bold tracking-wider uppercase shadow">
                        Architectural Masonry &amp; Facades
                      </span>
                      <span className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-on-background/75 backdrop-blur-sm text-surface-container-highest text-label-sm text-xs flex items-center gap-1.5 shadow-sm">
                        <span className="material-symbols-outlined text-[14px] text-primary-fixed">
                          visibility
                        </span>
                        Hover for scope
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-tertiary font-label-sm text-[11px] font-mono px-1 mt-1">
                      <span>Ref: BY-BER-MS-8842</span>
                      <span>Updated 2h ago</span>
                    </div>
                  </div>

                  {/* Column 2: Job Overview & Specs */}
                  <div className="lg:col-span-5 p-space-lg pl-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          PORR &amp; Implenia Facades JV
                        </span>
                        <span
                          className="inline-flex items-center text-primary text-[16px]"
                          title="Enterprise Cleared Employer"
                        >
                          <span className="material-symbols-outlined text-[18px]">verified</span>
                        </span>
                        <span className="text-tertiary font-label-sm text-label-sm">• Posted 2h ago</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight hover:text-primary transition-colors cursor-pointer mb-space-sm">
                        Senior Structural Mason, Stone Cladding &amp; Architectural Brickwork Lead
                      </h3>
                      {/* Badges & Location */}
                      <div className="flex flex-wrap items-center gap-space-xs mb-space-md">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px] text-primary">
                            location_on
                          </span>
                          Berlin, Germany (On-Site • High-End Government &amp; Cultural Complex)
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm">
                          Full-Time Permanent
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm">
                          Tier-1 Architectural Facade
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">flight_takeoff</span>
                          EU Blue Card &amp; Relocation Support
                        </span>
                      </div>
                      {/* Technical Masonry Sub-Discipline Tags */}
                      <div className="space-y-space-xs mb-space-md">
                        <span className="font-label-xs text-[11px] font-bold tracking-wider uppercase text-on-surface-variant block mb-1">
                          Critical Technical Disciplines:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                            Architectural Facing Brick (Klinker)
                          </span>
                          <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                            Natural Sandstone Cladding
                          </span>
                          <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                            DIN 1053-1 / Eurocode 6
                          </span>
                          <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                            Anchor &amp; Bracket Systems (Halfen)
                          </span>
                          <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                            Acoustic Cavity Wall Ties
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Wage Strip */}
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mt-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <span className="p-2 rounded-lg bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center">
                          <span className="material-symbols-outlined text-[22px]">euro</span>
                        </span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            €58,000 – €76,000{" "}
                            <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">
                              / yr base
                            </span>
                          </div>
                          <div className="font-label-sm text-label-sm text-secondary font-semibold">
                            + 18% Specialty Facade &amp; Height Multiplier + Per Diem Lodge
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
                        <span className="material-symbols-outlined text-[14px]">
                          format_image_left
                        </span>{" "}
                        Collective Agreement Tariff (IG BAU)
                      </span>
                    </div>
                  </div>

                  {/* Column 3: Action Box & Verification Panel */}
                  <div className="lg:col-span-4 bg-surface-container p-space-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-space-md">
                        <span className="px-2.5 py-1 rounded-md bg-secondary text-on-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                          TIER-1 COMPLEX
                        </span>
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-bold">
                          <span className="material-symbols-outlined text-[16px]">verified</span>{" "}
                          Validated
                        </span>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm mb-space-md">
                        <div className="font-label-md text-label-md text-on-surface font-bold mb-1">
                          Credential Assessment:
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Requires verified <strong className="text-on-surface">Maurer Gesellenbrief</strong>,{" "}
                          <strong className="text-on-surface">Red Seal Bricklayer</strong>, or{" "}
                          <strong className="text-on-surface">NVQ Level 3</strong> with proven track record in high-tolerance facing brickwork and dry-hung stone facades.
                        </p>
                      </div>
                      {/* Technical Site Requirements Table */}
                      <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                        <div className="flex items-center justify-between py-1 border-b border-surface-container-high">
                          <span>Site Clearance:</span>
                          <span className="font-semibold text-on-surface">DIN EN 771-1 Quality Class</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-surface-container-high">
                          <span>Facade Tolerance:</span>
                          <span className="font-semibold text-on-surface">±1.0mm per 3m span</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-surface-container-high">
                          <span>Scaffold Certification:</span>
                          <span className="font-semibold text-on-surface">TRBS 2121 Compliant</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span>Language Requirement:</span>
                          <span className="font-semibold text-on-surface">German A2 or English Professional</span>
                        </div>
                      </div>
                    </div>
                    {/* CTA Cluster */}
                    <div className="space-y-space-sm pt-space-md">
                      <Link
                        href="/jobs/senior-structural-mason"
                        className="w-full py-3.5 px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Quick Apply</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                      <Link
                        className="w-full py-2.5 px-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                        href="/jobs/senior-structural-mason"
                      >
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                        View Position
                      </Link>
                      <div className="text-center font-label-sm text-label-sm text-tertiary pt-1">
                        Direct Contractor Requisition • 4-Day Response Protocol
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Technical Credentials Recognized Matrix (4 clean grid cards) */}
          <section className="w-full py-space-xl bg-surface-container-lowest">
            <div className="w-full px-margin">
              <div className="max-w-3xl mb-space-lg">
                <div className="inline-flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-space-xs">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Institutional Regulatory Frameworks
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Core Technical Credentials Recognized Across Jurisdictions
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Jobzeta matches verified trade qualifications with national standard equivalents, permitting seamless cross-border site authorization without recertification friction.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Card 1: Germany / DACH */}
                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                        Germany, Austria &amp; CH
                      </span>
                      <span className="material-symbols-outlined text-outline text-[20px]">flag</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      Maurer / Maurermeister Gesellenbrief (HWK / ZDB)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      Full German dual-system masonry journey certificate. DIN 1053 &amp; Eurocode 6 verified for high-tolerance structural load-bearing masonry and intricate klinker brick facades.
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-surface-container-highest flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold text-primary">
                      Full Mutual Recognition
                    </span>
                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  </div>
                </div>

                {/* Card 2: North America */}
                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-bold">
                        United States &amp; Canada
                      </span>
                      <span className="material-symbols-outlined text-outline text-[20px]">public</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      Red Seal Bricklayer &amp; BAC Journeyman
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      Interprovincial Red Seal endorsement or BAC Trowel Trades journey card. OSHA 1926 compliant, CMU load-bearing cell grouting, and post-tensioned masonry certified.
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-surface-container-highest flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold text-secondary">
                      Tier-1 Pre-Qualified
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                  </div>
                </div>

                {/* Card 3: UK & Ireland */}
                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">
                        United Kingdom &amp; Ireland
                      </span>
                      <span className="material-symbols-outlined text-outline text-[20px]">domain</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      NVQ Level 3 &amp; CSCS Gold Card (Trowel Trades)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      Advanced Craft Brickwork. Specialization in heritage lime mortars, cavity wall insulation integrity, high-rise rainscreen brackets, and DPC waterproofing installation.
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-surface-container-highest flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">
                      Cross-Jurisdiction Clearance
                    </span>
                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  </div>
                </div>

                {/* Card 4: Nordic */}
                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">
                        Nordic &amp; Scandinavian
                      </span>
                      <span className="material-symbols-outlined text-outline text-[20px]">ac_unit</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      Fagbrev Murer / Murarbetare
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      Scandinavian certified mason with winterized building envelope focus. Sub-zero mortar curing techniques, thermal envelope sealing, and prefabricated brick veneer panel erection.
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-surface-container-highest flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold text-primary">
                      Nordic Reciprocal Validated
                    </span>
                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialization Systems Frequently Requisitioned (4 columns) */}
          <section className="w-full py-space-xl bg-surface">
            <div className="w-full px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                    Sub-Discipline Breakdown
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Specialization Systems Frequently Requisitioned
                  </h2>
                </div>
                <Link
                  className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:underline font-semibold"
                  href="/find-jobs"
                >
                  Explore all trade specializations
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Col 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[28px]">border_all</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Architectural Facing Brick &amp; Klinker
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-bold block mb-space-xs">
                      590 Open Roles
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      High-tolerance fair-faced masonry, decorative bonds (Flemish, English, Stretcher), pointing variations, and thermal insulation integration.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Klinker
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Facing Brick
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Flemish Bond
                    </span>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[28px]">view_quilt</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Structural CMU &amp; Load-Bearing Masonry
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold block mb-space-xs">
                      480 Open Roles
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Reinforced concrete masonry unit assemblies, high-lift grouting, vertical rebar placement, bond beams, and seismic shear wall execution.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      CMU Block
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Reinforced Core
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Grout Consolidation
                    </span>
                  </div>
                </div>

                {/* Col 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[28px]">crop_square</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Natural Stone Cladding &amp; Rainscreen
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-bold block mb-space-xs">
                      360 Open Roles
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Ventilated rear-drained facade brackets, granite/limestone panel anchor installations, Kerf cutting, and sub-structure adjustment systems.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Stone Facade
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Halfen Anchors
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Rainscreen
                    </span>
                  </div>
                </div>

                {/* Col 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[28px]">format_paint</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Interior Precision Finishing &amp; Stucco
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold block mb-space-xs">
                      250 Open Roles
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Level 5 skim coats, acoustic rendering, Venetian and lime plaster finishes, high-spec EIFS/WDVS exterior wall insulation integration.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      EIFS / WDVS
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Plastering
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Level 5 Finish
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Facade & Masonry Hiring Partners */}
          <section className="w-full py-space-xl bg-surface-container-lowest">
            <div className="w-full px-margin">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-lg">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                    Certified Employers
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Enterprise Facade &amp; Masonry Hiring Partners
                  </h2>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Vetted under ISO 9001 &amp; ISO 45001 safety frameworks
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex items-center gap-space-md hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold flex items-center justify-center shadow-sm shrink-0">
                    P
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-base">
                      PORR Construction
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Central &amp; Western Europe
                    </p>
                    <span className="font-label-sm text-label-sm text-primary font-bold mt-1 block">
                      48 Openings Active
                    </span>
                  </div>
                </div>

                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex items-center gap-space-md hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold flex items-center justify-center shadow-sm shrink-0">
                    I
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-base">
                      Implenia Facade Eng.
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      DACH &amp; Nordic Hubs
                    </p>
                    <span className="font-label-sm text-label-sm text-primary font-bold mt-1 block">
                      36 Openings Active
                    </span>
                  </div>
                </div>

                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex items-center gap-space-md hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold flex items-center justify-center shadow-sm shrink-0">
                    B
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-base">
                      Bouygues Construction
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      France &amp; UK Infrastructure
                    </p>
                    <span className="font-label-sm text-label-sm text-primary font-bold mt-1 block">
                      42 Openings Active
                    </span>
                  </div>
                </div>

                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex items-center gap-space-md hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold flex items-center justify-center shadow-sm shrink-0">
                    B
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-base">
                      BAM Construction
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      UK &amp; Ireland Projects
                    </p>
                    <span className="font-label-sm text-label-sm text-primary font-bold mt-1 block">
                      34 Openings Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Priority Requisition Alerts (Deep Institutional Navy Container) */}
          <section className="w-full py-space-xl bg-surface">
            <div className="w-full px-margin">
              <div className="rounded-2xl bg-on-background text-on-primary p-space-xl shadow-xl relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider mb-space-sm font-bold">
                    <span className="material-symbols-outlined text-[16px]">notifications_active</span>
                    Automated Exchange Dispatch
                  </span>
                  <h2 className="font-headline-xl text-headline-xl font-bold tracking-tight mb-space-xs text-on-primary">
                    Never Miss High-Spec Masonry &amp; Facade Contracts
                  </h2>
                  <p className="font-body-lg text-body-lg text-surface-container-highest max-w-2xl mb-space-lg">
                    Receive vetted structural and architectural requisition notifications filtered specifically by your DIN, Red Seal, or NVQ technical credentials and preferred wage parameters.
                  </p>

                  {alertSubscribed ? (
                    <div className="p-space-md rounded-lg bg-primary-container text-on-primary-container font-medium flex items-center gap-2">
                      <span className="material-symbols-outlined">check_circle</span>
                      Alert subscription active! You will receive high-spec masonry &amp; facade contracts.
                    </div>
                  ) : (
                    <form
                      onSubmit={handleAlertSubmit}
                      className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-space-sm"
                    >
                      <input
                        className="w-full px-4 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary placeholder:text-outline"
                        placeholder="Enter institutional or direct trade email"
                        required
                        type="email"
                        value={alertEmail}
                        onChange={(e) => setAlertEmail(e.target.value)}
                      />
                      <button
                        className="w-full sm:w-auto px-space-lg py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md transition-all whitespace-nowrap cursor-pointer"
                        type="submit"
                      >
                        Subscribe to Alerts
                      </button>
                    </form>
                  )}

                  <div className="flex items-center flex-wrap justify-center gap-space-md text-surface-variant font-label-sm text-label-sm mt-space-md">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">
                        check_circle
                      </span>{" "}
                      Instant notification on verified JV postings
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">
                        check_circle
                      </span>{" "}
                      One-click unsubscribe at any time
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">
                        check_circle
                      </span>{" "}
                      Zero recruitment spam guaranteed
                    </span>
                  </div>
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
