"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HeavyPlantAndCranesPage() {
  const [keyword, setKeyword] = useState("Tower Crane, Liebherr LR Crawler, Telescopic Boom, Earthmoving...");
  const [location, setLocation] = useState("Munich / Frankfurt / Stockholm");
  const [cert, setCert] = useState("CPCS A60/A61 / TÜV Fahrerausweis / NCCCO");
  const [alertEmail, setAlertEmail] = useState("");
  const [alertCategory, setAlertCategory] = useState("Tower Cranes (Luffing / Saddle Jib)");
  const [alertSuccess, setAlertSuccess] = useState(false);

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
          {/* Top Global Context & Breadcrumb Bar */}
          <section className="w-full bg-surface-container-low px-margin py-space-sm border-b border-surface-container-highest">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"
              >
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1"
                  href="/"
                >
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  <span>Home</span>
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
                <span className="text-on-surface font-semibold">Heavy Plant &amp; Cranes</span>
              </nav>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-tertiary">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="uppercase tracking-wider">Directory ID: TC-PLANT-CRANE-4080</span>
              </div>
            </div>
          </section>

          {/* Hero Header & Institutional Sub-discipline Header */}
          <section className="w-full bg-surface-container-lowest px-margin pt-space-xl pb-space-lg shadow-sm border-b border-surface-container-highest">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
              {/* Compliance Tags */}
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    precision_manufacturing
                  </span>
                  Specialized Craft Sub-Discipline
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  CPCS Blue / TÜV Baumaschinen Validated
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">sensors</span>
                  Live Exchange Feed
                </span>
              </div>

              {/* Main Headline & Subtitle */}
              <div className="max-w-4xl flex flex-col gap-space-xs">
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
                  Heavy Plant Operations &amp; Crane Lifting Systems
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  High-capacity luffing jib tower cranes, hydraulic crawler rigs, deep foundation
                  piling, heavy earthmoving excavators, and complex tandem lift rigging operations
                  across global infrastructure mega-projects.
                </p>
              </div>

              {/* Quick Metrics Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-md">
                {/* Metric 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 shadow-sm border border-surface-container-high">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
                      Active Requisitions
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">engineering</span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
                      1,840
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Global certified openings across 34 jurisdictions
                    </p>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 shadow-sm border border-surface-container-high">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
                      Average Global Wage Band
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">payments</span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="font-headline-xl text-headline-xl text-primary font-extrabold tracking-tight">
                      €72k – €105k
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      $78k – $114k eq. Shift differential, site lodge &amp; high-altitude allowances
                      included
                    </p>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 shadow-sm border border-surface-container-high">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
                      Compliance Standard
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">gavel</span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                      CPCS / TÜV / OSHA 29 CFR
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Pre-cleared lifting &amp; earthmoving registries active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Filter & Fast Requisition Query Tool */}
          <section className="w-full px-margin py-space-lg bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md border border-surface-container-highest flex flex-col lg:flex-row items-center gap-space-sm">
                {/* Input 1 */}
                <div className="relative flex-1 w-full flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px]">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest shadow-sm transition-all border border-transparent focus:border-primary"
                    placeholder="Search keywords, machinery, models..."
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                {/* Location Dropdown */}
                <div className="relative w-full lg:w-72 flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px]">
                    location_on
                  </span>
                  <select
                    className="w-full pl-10 pr-8 py-2.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm appearance-none outline-none focus:bg-surface-container-lowest shadow-sm transition-all cursor-pointer border border-transparent focus:border-primary"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option>Munich / Frankfurt / Stockholm</option>
                    <option>London / Manchester / Dublin</option>
                    <option>Zurich / Vienna / Milan</option>
                    <option>Houston / Edmonton / Rotterdam</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 pointer-events-none text-on-surface-variant text-[18px]">
                    expand_more
                  </span>
                </div>
                {/* License / Certification Dropdown */}
                <div className="relative w-full lg:w-80 flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px]">
                    badge
                  </span>
                  <select
                    className="w-full pl-10 pr-8 py-2.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm appearance-none outline-none focus:bg-surface-container-lowest shadow-sm transition-all cursor-pointer border border-transparent focus:border-primary"
                    value={cert}
                    onChange={(e) => setCert(e.target.value)}
                  >
                    <option>CPCS A60/A61 / TÜV Fahrerausweis / NCCCO</option>
                    <option>DGUV 52 / Flurgestützte Krane</option>
                    <option>LEEA Rigging / OPITO Stage 3 Heavy Lift</option>
                    <option>CSCS Red / Blue / Gold Plant Operator</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 pointer-events-none text-on-surface-variant text-[18px]">
                    expand_more
                  </span>
                </div>
                {/* Submit Button */}
                <button
                  className="w-full lg:w-auto px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all flex items-center justify-center gap-space-xs shadow-sm shrink-0 font-semibold cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">tune</span>
                  <span>Filter Live</span>
                </button>
              </div>
            </div>
          </section>

          {/* Featured Feed Section */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
              {/* Section subhead with counter & sorting */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs">
                <div className="flex items-center gap-space-xs">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Featured Requisitions
                  </h2>
                  <span className="text-on-surface-variant font-body-sm text-body-sm">
                    • 1,840 Active Openings
                  </span>
                </div>
                <div className="flex items-center gap-space-sm font-label-md text-label-md">
                  <span className="text-on-surface-variant">Sort by:</span>
                  <button
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline cursor-pointer"
                    type="button"
                  >
                    <span>Highest Capacity Rating</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
                  </button>
                </div>
              </div>

              {/* PRIMARY FEATURED JOB CARD */}
              <article className="group relative rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-container-highest">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
                  {/* Column 1: Image & Badge */}
                  <div className="xl:col-span-3 flex flex-col gap-space-xs">
                    <div className="relative w-full h-52 rounded-lg overflow-hidden bg-surface-container-low shadow-inner">
                      <img
                        alt="Experienced crane operator in high-visibility safety coveralls and protective white helmet operating high above an expansive urban construction site."
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK8lbCa0yGivQc9xFiRUgmop1SFa0uiwHTyvX4AAkB2sxHPs_seng8Qp4FWErt9lcCMuHtiJ_j9EVXPOH6mYAPOuop7zAFieK_mE6PBujKQm5Vsji_3_v5B1Whvb9cHYrICHmBO3U19RKf0qdb3xVD8S1GAViTpbwArqV4n2si9vi4THi_bdNrAAtG9NX1eWlt5jkvWb9LiJxw_Qf7DvZGXNEMZstQ7TkipDInbpAD6j71HTisSzPNfg"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface font-label-sm text-label-sm font-semibold">
                        Tower Crane &amp; Heavy Rigging
                      </span>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm flex items-center gap-1 font-medium">
                        <span className="material-symbols-outlined text-[12px] text-primary">
                          visibility
                        </span>
                        <span>Hover for scope</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-tertiary font-label-sm text-label-sm px-1">
                      <span>Ref: BY-MUC-TC-9102</span>
                      <span>Updated 2h ago</span>
                    </div>
                  </div>

                  {/* Column 2: Job Overview & Specs */}
                  <div className="xl:col-span-6 flex flex-col gap-space-xs">
                    {/* Company & Verification */}
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                        BAM &amp; Hochtief Infrastructure JV
                      </span>
                      <span
                        className="inline-flex items-center gap-0.5 text-primary text-[14px]"
                        title="Verified Employer"
                      >
                        <span className="material-symbols-outlined text-[16px]">verified</span>
                      </span>
                      <span className="text-tertiary font-label-md text-label-md">• Posted 2h ago</span>
                    </div>

                    {/* Job Title */}
                    <Link
                      className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors font-bold"
                      href="/jobs/senior-crane-operator"
                    >
                      Senior Heavy Lift Tower Crane &amp; High-Capacity Luffing Jib Operator
                    </Link>

                    {/* Badges Bar */}
                    <div className="flex flex-wrap items-center gap-space-xs pt-1">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        Munich, Germany (On-Site • High-Speed Rail &amp; Tunnel Mega-Project)
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                        Full-Time Permanent
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                        Tier-1 Civil Infrastructure
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                        EU Blue Card &amp; Relocation Support
                      </span>
                    </div>

                    {/* Technical Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
                        Liebherr 710 HC-L Luffing Jib
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
                        Potain MDT 389
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
                        Tandem Blind Lift Protocol
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
                        CPCS Blue / TÜV Stufe 3
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
                        EN 13000 SLI/LMI
                      </span>
                    </div>

                    {/* Wage highlight */}
                    <div className="flex items-baseline gap-2 pt-2">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        €72,000 – €94,000
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        / yr base + 22% Night/Weekend Shift Multiplier + Per Diem Lodge
                      </span>
                    </div>
                  </div>

                  {/* Column 3: Facility Spec Card & Actions */}
                  <div className="xl:col-span-3 flex flex-col justify-between h-full bg-surface-container-low p-space-md rounded-xl border border-surface-container-high">
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                          Facility Specification
                        </span>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                          Tier-1 Complex
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-4 leading-snug">
                        Requires certified CPCS Blue Card or TÜV Stufe 3 heavy tower crane license with
                        proven experience in dense urban tandem lifts and deep caisson shaft
                        clearance. Safety Clearance: BGG 921 / OSHA 1926 Subpart CC. Shift Model: 4x10
                        Rotating Operational.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row xl:flex-col gap-space-xs pt-space-md">
                      <Link
                        className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg text-center transition-all shadow-sm font-semibold"
                        href="/jobs/senior-crane-operator"
                      >
                        Quick Apply
                      </Link>
                      <Link
                        className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg text-center transition-all font-medium border border-surface-container-highest"
                        href="/jobs/senior-crane-operator"
                      >
                        View Position
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              {/* Pagination / Feed Status */}
              <div className="flex flex-col sm:flex-row items-center justify-between py-space-sm px-1 text-on-surface-variant font-body-sm text-body-sm">
                <span>Showing 1 of 1,840 heavy plant &amp; crane openings</span>
                <Link
                  className="mt-2 sm:mt-0 font-label-lg text-label-lg text-primary hover:underline flex items-center gap-1 font-semibold"
                  href="/find-jobs"
                >
                  <span>Load more open positions</span>
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Core Technical Credentials Recognized Matrix (4 Cards) */}
          <section className="w-full bg-surface-container-low px-margin py-space-xl border-t border-surface-container-highest">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">
                  Standardized Licensing Frameworks
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                  Core Technical Credentials Recognized Matrix
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Cross-border validation protocols established across national safety &amp;
                  operating authorities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Matrix 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow border border-surface-container-highest">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-space-sm">
                      <span className="material-symbols-outlined text-[22px]">domain</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Germany &amp; DACH
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      TÜV / DGUV Vorschrift 52 &amp; 64
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Baumaschinen- &amp; Kranführerschein für Turmdrehkrane und Mobilkrane,
                      Flurgestützte Krane sowie Erdbaumaschinen-Befähigungsnachweis.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>Full Mutual Recognition</span>
                  </div>
                </div>

                {/* Matrix 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow border border-surface-container-highest">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-space-sm">
                      <span className="material-symbols-outlined text-[22px]">
                        workspace_premium
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      United Kingdom &amp; Ireland
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      CPCS Blue Competent Operator
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      A60 Tower Crane, A61 Appointed Person, A62 Slinger/Signaller with verified NVQ
                      Level 2/3 and CITB Health, Safety and Environment touchstone.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>Tier-1 Pre-Qualified</span>
                  </div>
                </div>

                {/* Matrix 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow border border-surface-container-highest">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center mb-space-sm">
                      <span className="material-symbols-outlined text-[22px]">construction</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      United States &amp; Canada
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      NCCCO / OSHA 29 CFR 1926
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Certified Crane Operator: Tower Crane (TWR) &amp; Lattice Boom Crawler (LBC).
                      Red Seal Heavy Equipment endorsement compliant.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>Cross-Jurisdiction Clearance</span>
                  </div>
                </div>

                {/* Matrix 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow border border-surface-container-highest">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-space-sm">
                      <span className="material-symbols-outlined text-[22px]">anchor</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      International Civil Maritime
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      LEEA &amp; OPITO Heavy Lift
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Offshore crane operator stage 3, rigging supervisor, LOLER 1998 lifting
                      operations, and dynamic barge position tethering credentials.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>Maritime &amp; Port Validated</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Plant & Machinery Systems Frequently Requisitioned (4 Ecosystem Cards) */}
          <section className="w-full px-margin py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-xs">
                <div>
                  <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">
                    Fleet Specialization
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                    Plant &amp; Machinery Systems Frequently Requisitioned
                  </h2>
                </div>
                <span className="font-label-lg text-label-lg text-secondary font-semibold">
                  4 Specialized Operational Streams
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Machinery 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-surface-container-highest">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">height</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                        640 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      High-Capacity Tower &amp; Luffing Cranes
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                      Liebherr 710 HC-L, Wolffkran 1250B, Potain MDT 809, and Comedil CTL high-rise
                      urban luffers.
                    </p>
                  </div>
                  <div className="pt-space-md flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded">
                      High-Rise Core
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded">
                      Blind Jib Ops
                    </span>
                  </div>
                </div>

                {/* Machinery 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-surface-container-highest">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[24px]">rv_hookup</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-bold">
                        510 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Heavy Crawler &amp; All-Terrain Cranes
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                      Liebherr LR 11000, Tadano CC 3800, Demag AC 1000, Grove GMK multi-axle superlift
                      configs.
                    </p>
                  </div>
                  <div className="pt-space-md flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded">
                      Bridge Placement
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded">
                      1,000t+ Lift
                    </span>
                  </div>
                </div>

                {/* Machinery 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-surface-container-highest">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">front_loader</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                        420 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Deep Excavation, Piling &amp; Tunneling
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                      Bauer BG 36 Drilling Rigs, CAT 395 Heavy Excavator, Komatsu D375A Bulldozer, and
                      micro-tunneling rigs.
                    </p>
                  </div>
                  <div className="pt-space-md flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded">
                      Caisson Shoring
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded">
                      Earthworks
                    </span>
                  </div>
                </div>

                {/* Machinery 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-surface-container-highest">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[24px]">speed</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                        270 Roles
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Crane Telemetry &amp; Anti-Collision
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                      Rayco-Wylie SLI, SMIE Anti-Collision, Trimble Groundworks, Topcon 3D-MC2
                      machine guidance integration.
                    </p>
                  </div>
                  <div className="pt-space-md flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded">
                      Telemetry
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded">
                      Zoning &amp; Radar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Facility & Infrastructure Hiring Partners */}
          <section className="w-full bg-surface-container-low px-margin py-space-xl border-t border-surface-container-highest">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="text-center max-w-2xl mx-auto flex flex-col gap-1">
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">
                  Tier-1 Contractor Alliances
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                  Enterprise Facility &amp; Infrastructure Hiring Partners
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Active hiring pipelines for major civil works, nuclear builds, rail transit, and
                  mega-tunnels.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Partner 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-xs border border-surface-container-highest">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-1">
                    <span className="material-symbols-outlined text-[32px]">apartment</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Hochtief Civil
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Civil Engineering &amp; Megastructures
                  </span>
                  <div className="mt-space-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    52 Openings Active
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-xs border border-surface-container-highest">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary mb-1">
                    <span className="material-symbols-outlined text-[32px]">architecture</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    VINCI Grands Projets
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Concessions &amp; Infrastructure Hubs
                  </span>
                  <div className="mt-space-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    68 Openings Active
                  </div>
                </div>

                {/* Partner 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-xs border border-surface-container-highest">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-1">
                    <span className="material-symbols-outlined text-[32px]">video_file</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    BAM Nuttall
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Heavy Plant &amp; Marine Operations
                  </span>
                  <div className="mt-space-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    44 Openings Active
                  </div>
                </div>

                {/* Partner 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-space-xs border border-surface-container-highest">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary mb-1">
                    <span className="material-symbols-outlined text-[32px]">foundation</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Skanska Infrastructure
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Europe Rail &amp; Energy Foundations
                  </span>
                  <div className="mt-space-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    39 Openings Active
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Alert Subscription Section (Deep Navy & Luminous Teal) */}
          <section className="w-full px-margin py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto rounded-2xl bg-on-secondary-fixed text-on-tertiary p-space-xl relative overflow-hidden shadow-xl">
              {/* Ambient decorative gradient blur */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                {/* Content */}
                <div className="lg:col-span-7 flex flex-col gap-space-xs">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary-fixed font-label-sm text-label-sm w-fit font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[14px]">
                      notifications_active
                    </span>
                    Priority Lifting Telemetry Alerts
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-tertiary tracking-tight mt-1 font-bold">
                    Receive Heavy Plant &amp; Crane Requisitions Instantly
                  </h2>
                  <p className="font-body-md text-body-md text-tertiary-fixed-dim max-w-xl">
                    Get immediate match notifications for high-tonnage crawler operators, luffing
                    tower crane pilots, and lift supervisors filtered by your specific CPCS, TÜV, or
                    NCCCO licensing profile.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-sm pt-space-xs text-secondary-fixed font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                        check_circle
                      </span>
                      <span>Verified Tier-1 Projects</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                        check_circle
                      </span>
                      <span>Shift Differential Alerts</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                        check_circle
                      </span>
                      <span>Zero Spam Policy</span>
                    </span>
                  </div>
                </div>

                {/* Form Box */}
                <div className="lg:col-span-5 bg-surface-container-lowest/10 backdrop-blur-md p-space-lg rounded-xl shadow-lg flex flex-col gap-space-sm border border-white/10">
                  {alertSuccess ? (
                    <div className="p-4 rounded-lg bg-primary/20 text-primary-fixed border border-primary/30 text-center flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined text-[36px]">check_circle</span>
                      <span className="font-headline-sm text-headline-sm font-bold text-white">
                        Alert Active!
                      </span>
                      <span className="font-body-sm text-body-sm text-tertiary-fixed-dim">
                        You will receive verified lifting telemetry directly to {alertEmail}.
                      </span>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-space-sm" onSubmit={handleAlertSubmit}>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-tertiary font-semibold">
                          Work Email or Verified CSCS/CPCS Number
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          placeholder="e.g. j.bauer@liebherr-operators.eu"
                          required
                          type="email"
                          value={alertEmail}
                          onChange={(e) => setAlertEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-tertiary font-semibold">
                          Target Machinery / Classification
                        </label>
                        <select
                          className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer"
                          value={alertCategory}
                          onChange={(e) => setAlertCategory(e.target.value)}
                        >
                          <option>Tower Cranes (Luffing / Saddle Jib)</option>
                          <option>Heavy Crawler Cranes (300t+ Superlift)</option>
                          <option>All-Terrain Telescopic Cranes</option>
                          <option>Piling, Shoring &amp; Caisson Rigs</option>
                          <option>Heavy Earthmoving / Excavator Rigs</option>
                        </select>
                      </div>
                      <button
                        className="w-full mt-2 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[18px]">add_alert</span>
                        <span>Activate Free Requisition Alerts</span>
                      </button>
                      <span className="text-center font-label-sm text-label-sm text-tertiary-fixed-dim">
                        GDPR &amp; ISO 27001 Compliant Workforce Verification Registry
                      </span>
                    </form>
                  )}
                </div>
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
