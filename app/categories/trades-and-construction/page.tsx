"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TradesAndConstructionPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [region, setRegion] = useState("");

  const subSpecialties = [
    {
      title: "Electrical & Automation",
      jobs: "2,840 Jobs",
      icon: "electric_bolt",
      desc: "Industrial Electricians, Master Linemen, Automation & PLC Controls Technicians.",
      band: "$72,000 - $110,000",
      link: "/jobs/industrial-electrician",
    },
    {
      title: "Welding & Fabrication",
      jobs: "1,920 Jobs",
      icon: "precision_manufacturing",
      desc: "TIG/MIG Specialists, Orbital Pipe Welders, ASME Coded Pressure Vessel Fitters.",
      band: "€46,000 - €72,000",
      link: "/categories/trades-and-construction/welding-and-fabrication",
    },
    {
      title: "Plumbing & HVAC",
      jobs: "2,140 Jobs",
      icon: "hvac",
      desc: "Commercial Refrigeration Leads, Industrial Pipefitters, Certified Gas Engineers.",
      band: "$68,000 - $98,000",
      link: "/categories/trades-and-construction/plumbing-and-hvac",
    },
    {
      title: "Heavy Plant & Cranes",
      jobs: "1,680 Jobs",
      icon: "rv_hookup",
      desc: "Tower Crane Operators, Heavy Excavation Drivers, Riggers, Mining Mechanics.",
      band: "AUD 90k - 130k",
      link: "/categories/trades-and-construction/heavy-plant-and-cranes",
    },
    {
      title: "Carpentry & Framing",
      jobs: "1,350 Jobs",
      icon: "carpenter",
      desc: "Commercial Formworkers, Heavy Timber Framers, Architectural Joiners.",
      band: "$55,000 - $82,000",
      link: "/categories/trades-and-construction/carpentry-and-framing",
    },
    {
      title: "Masonry & Finishing",
      jobs: "980 Jobs",
      icon: "countertops",
      desc: "Stonemasons, Commercial Bricklayers, Facade Specialists, Industrial Tilers.",
      band: "£38,000 - £56,000",
      link: "#",
    },
    {
      title: "Site Supervision & Safety",
      jobs: "1,840 Jobs",
      icon: "shield",
      desc: "Site Foremen, OSHA / DGUV Safety Officers, Quality Inspectors, Cost Estimators.",
      band: "€60,000 - €95,000",
      link: "#",
    },
    {
      title: "Renewable Energy Trades",
      jobs: "2,050 Jobs",
      icon: "wind_power",
      desc: "Wind Turbine Techs (GWO Certified), Utility Solar Installers, Battery Storage Techs.",
      band: "$70,000 - $105,000",
      link: "#",
    },
  ];

  const jobOpenings = [
    {
      id: "job-1",
      initials: "AP",
      title: "Industrial Electrician & Controls Specialist",
      company: "Apex Automation & Power",
      location: "Stuttgart, Germany",
      salary: "€48,000 - €58,000 / yr",
      desc: "Responsible for high-precision wiring, Siemens S7 PLC diagnostic setups, and switchgear commissioning in automated factory environments. Fast-track EU Work Permit Support provided.",
      badges: [
        { text: "On-site", color: "bg-surface-container text-on-surface-variant" },
        { text: "Full-time", color: "bg-secondary-fixed text-on-secondary-fixed" },
        { text: "VDE 0100 / IHK Geselle Recognized", color: "bg-primary-fixed/30 text-on-primary-fixed-variant" },
      ],
      posted: "Posted 2 hours ago",
      href: "/jobs/industrial-electrician",
      filterTag: "electrician",
    },
    {
      id: "job-2",
      initials: "NM",
      title: "Senior TIG & Orbital Pipe Welder",
      company: "Nordic Metalworks & Marine Fab",
      location: "Gothenburg, Sweden",
      salary: "Kr 420,000 - 480,000 / yr",
      desc: "Executing heavy titanium and stainless pipe welds for marine propulsion systems. Must hold current ASME Section IX or ISO 9606-1 welder credentials.",
      badges: [
        { text: "Shipyard On-site", color: "bg-surface-container text-on-surface-variant" },
        { text: "Certified Trade", color: "bg-secondary-fixed text-on-secondary-fixed" },
        { text: "ISO 9606-1 / ASME IX", color: "bg-primary-fixed/30 text-on-primary-fixed-variant" },
      ],
      posted: "Posted 5 hours ago",
      href: "#",
      filterTag: "welder",
    },
    {
      id: "job-3",
      initials: "TG",
      title: "Commercial HVAC & Refrigeration Tech",
      company: "TransGlobal Facilities & Infra",
      location: "Chicago, IL, USA",
      salary: "$75,000 - $92,000 / yr",
      desc: "Preventative maintenance, VRF system integration, and commercial chiller overhauls across downtown commercial towers. Company service van and tool stipend included.",
      badges: [
        { text: "Field Service", color: "bg-surface-container text-on-surface-variant" },
        { text: "Journeyman Card", color: "bg-secondary-fixed text-on-secondary-fixed" },
        { text: "EPA Universal Required", color: "bg-primary-fixed/30 text-on-primary-fixed-variant" },
      ],
      posted: "Posted 1 day ago",
      href: "#",
      filterTag: "hvac",
    },
    {
      id: "job-4",
      initials: "GG",
      title: "High-Voltage Substation Lineman Lead",
      company: "Gulf Grid Energy & Infra",
      location: "Abu Dhabi, UAE",
      salary: "AED 18,000 - 24,000 / mo",
      desc: "Overseeing 132kV/400kV substation lines erection and high-tension cable pulling. Tax-free salary, single or family visa status, and fully furnished villa accommodation provided.",
      badges: [
        { text: "Tax-Free Expat", color: "bg-surface-container text-on-surface-variant" },
        { text: "Housing Provided", color: "bg-secondary-fixed text-on-secondary-fixed" },
        { text: "HV Certified / OSHA 30", color: "bg-primary-fixed/30 text-on-primary-fixed-variant" },
      ],
      posted: "Posted 1 day ago",
      href: "#",
      filterTag: "visa",
    },
    {
      id: "job-5",
      initials: "BT",
      title: "Civil Concrete & Formwork Superintendent",
      company: "BauTech Construction Group",
      location: "Munich, Germany",
      salary: "€54,000 - €66,000 / yr",
      desc: "Lead on-site concrete pour sequences, PERI formwork scaffolding setups, and rebar reinforcement checks for major high-rise infrastructure in Bavaria.",
      badges: [
        { text: "Major Project", color: "bg-surface-container text-on-surface-variant" },
        { text: "Permanent", color: "bg-secondary-fixed text-on-secondary-fixed" },
        { text: "Master Tradesperson (Meister) Track", color: "bg-primary-fixed/30 text-on-primary-fixed-variant" },
      ],
      posted: "Posted 2 days ago",
      href: "#",
      filterTag: "apprenticeship",
    },
    {
      id: "job-6",
      initials: "PI",
      title: "Heavy Industrial Equipment Mechanic",
      company: "Pacific Iron & Mining",
      location: "Perth / Pilbara, Australia",
      salary: "AUD $95,000 - $125,000 / yr",
      desc: "Overhaul Caterpillar 793 haul trucks, Komatsu excavators, and hydraulic drill rigs on a 2:1 FIFO roster out of Perth. Superannuation + completion bonus.",
      badges: [
        { text: "FIFO 2:1 Roster", color: "bg-surface-container text-on-surface-variant" },
        { text: "Full Mining Camp", color: "bg-secondary-fixed text-on-secondary-fixed" },
        { text: "Cert III Heavy Commercial / Red Seal", color: "bg-primary-fixed/30 text-on-primary-fixed-variant" },
      ],
      posted: "Posted 3 days ago",
      href: "#",
      filterTag: "visa",
    },
  ];

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md">
      {/* ============================================================== */}
      {/* 1. GLOBAL HEADER (Reusable Component)                          */}
      {/* ============================================================== */}
      <Header />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* ============================================================== */}
          {/* 2. BREADCRUMB & SECTOR HERO SECTION                            */}
          {/* ============================================================== */}
          <section className="relative w-full bg-surface-container-low px-margin py-space-xl overflow-hidden">
            {/* Subtle architectural blueprint pattern backdrop */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#173b67_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="relative max-w-7xl mx-auto flex flex-col gap-space-lg">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-body-sm font-body-sm text-tertiary">
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
                <span className="material-symbols-outlined text-[16px] text-outline-variant">
                  chevron_right
                </span>
                <Link className="hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="material-symbols-outlined text-[16px] text-outline-variant">
                  chevron_right
                </span>
                <span className="text-on-surface font-semibold">
                  Trades &amp; Construction
                </span>
              </nav>

              {/* Sector Header Content */}
              <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-space-lg">
                <div className="max-w-3xl flex flex-col gap-space-sm">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm w-fit uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[14px]">construction</span>
                    <span>Global Vocational Exchange</span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                    Trades &amp; Construction Jobs &amp; Vocational Opportunities
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Find verified skilled trade positions worldwide — from licensed industrial electricians and structural welders to site managers and HVAC specialists with certified cross-border credential pathways.
                  </p>
                </div>

                {/* Quick Trust Pill Counter */}
                <div className="hidden xl:flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-highest">
                  <div className="flex items-center gap-space-sm text-primary font-bold font-headline-sm text-headline-sm">
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      verified_user
                    </span>
                    <span>14,800+</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary">
                    Verified Live Trade Vacancies
                  </span>
                </div>
              </div>

              {/* Integrated Search & Filter Console */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md border border-surface-container-highest flex flex-col lg:flex-row items-stretch gap-space-md mt-space-sm">
                {/* Search Keyword */}
                <div className="flex-1 flex items-center gap-space-sm px-space-md py-space-sm bg-surface rounded-lg border border-surface-container-highest focus-within:border-primary transition-colors">
                  <span className="material-symbols-outlined text-outline">search</span>
                  <input
                    className="w-full bg-transparent border-0 text-on-surface placeholder:text-outline text-body-md font-body-md focus:outline-none"
                    placeholder="Trade role or certification (e.g. Electrician, Welder, Pipefitter, Meister)..."
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                {/* Search Location */}
                <div className="lg:w-80 flex items-center gap-space-sm px-space-md py-space-sm bg-surface rounded-lg border border-surface-container-highest focus-within:border-primary transition-colors">
                  <span className="material-symbols-outlined text-outline">location_on</span>
                  <select
                    aria-label="Select Target Region"
                    className="w-full bg-transparent border-0 text-on-surface text-body-md font-body-md focus:outline-none cursor-pointer"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value="">Global (All Regions)</option>
                    <option value="eu">European Union (DACH &amp; Nordics)</option>
                    <option value="na">North America (US &amp; Canada)</option>
                    <option value="gcc">Gulf Cooperation Council (GCC)</option>
                    <option value="aus">Australia &amp; New Zealand</option>
                  </select>
                </div>
                {/* Submit CTA */}
                <button
                  className="px-space-xl py-space-md bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm transition-all flex items-center justify-center gap-space-sm shrink-0"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">filter_alt</span>
                  <span>Find Trade Jobs</span>
                </button>
              </div>

              {/* Quick Sector Stat Chips Bar */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <span className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-surface-container-highest">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  14,800+ Verified Trade Openings
                </span>
                <span className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-surface-container-highest">
                  <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                  100% Licensed &amp; Apprenticeship Compliant
                </span>
                <span className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-surface-container-highest">
                  <span className="material-symbols-outlined text-[16px] text-secondary">public</span>
                  Cross-Border Credential Verification (EU / US / GCC)
                </span>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 3. SUB-SPECIALTIES & TRADE DISCIPLINES (INTERACTIVE GRID)      */}
          {/* ============================================================== */}
          <section className="w-full px-margin py-space-xl max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                  Discipline Directory
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Sub-Specialties &amp; Vocational Categories
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-tertiary max-w-md">
                Select a dedicated craft sector to discover standardized licensure criteria, credential equivalencies, and active wage benchmarks.
              </p>
            </div>

            {/* 8 Distinct Sub-Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {subSpecialties.map((sub, idx) => (
                <div
                  key={idx}
                  className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest hover:shadow-md hover:border-primary transition-all flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-primary-fixed/20 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[28px]">
                          {sub.icon}
                        </span>
                      </div>
                      <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                        {sub.jobs}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {sub.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {sub.desc}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-md border-t border-surface-container-highest flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-tertiary">
                        Avg. Base Band
                      </span>
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">
                        {sub.band}
                      </span>
                    </div>
                    <Link
                      className="inline-flex items-center text-primary font-label-lg text-label-lg hover:underline gap-1"
                      href={sub.link}
                    >
                      <span>Explore</span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================== */}
          {/* 4. VERIFIED LIVE TRADE OPENINGS                                */}
          {/* ============================================================== */}
          <section className="w-full bg-surface-container-low px-margin py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                    Live Dispatch Feed
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Verified Openings in Trades &amp; Construction
                  </h2>
                </div>
                <span className="font-label-md text-label-md text-tertiary">
                  Showing 6 of 14,800+ Verified Positions
                </span>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs no-scrollbar">
                {[
                  { id: "all", label: "All Trades" },
                  { id: "electrician", label: "Licensed Electrician" },
                  { id: "welder", label: "Structural Welder" },
                  { id: "hvac", label: "HVAC / Mechanical" },
                  { id: "visa", label: "Visa Sponsorship Available" },
                  { id: "apprenticeship", label: "Apprenticeship / Dual Track" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFilter(f.id)}
                    className={`px-space-md py-1.5 rounded-full font-label-sm text-label-sm shrink-0 transition-colors ${
                      selectedFilter === f.id
                        ? "bg-primary text-on-primary shadow-sm"
                        : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container border border-surface-container-highest"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Rich Job Openings Feed */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {jobOpenings
                  .filter((j) => selectedFilter === "all" || j.filterTag === selectedFilter)
                  .map((job) => (
                    <div
                      key={job.id}
                      className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-highest hover:shadow-md hover:border-primary/50 transition-all flex flex-col justify-between gap-space-md"
                    >
                      <div className="flex flex-col gap-space-sm">
                        <div className="flex items-start justify-between gap-space-sm">
                          <div className="flex items-center gap-space-sm">
                            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center font-bold text-secondary text-headline-sm shrink-0">
                              {job.initials}
                            </div>
                            <div>
                              <Link
                                href={job.href}
                                className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer block"
                              >
                                {job.title}
                              </Link>
                              <div className="flex items-center gap-1.5 text-body-sm font-body-sm text-tertiary">
                                <span>{job.company}</span>
                                <span
                                  className="material-symbols-outlined text-[16px] text-primary"
                                  title="Verified Employer"
                                >
                                  verified
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            aria-label="Bookmark"
                            className="p-1 rounded text-outline hover:text-primary transition-colors"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              bookmark_border
                            </span>
                          </button>
                        </div>

                        {/* Meta attributes */}
                        <div className="flex flex-wrap items-center gap-y-1 gap-x-space-md text-body-sm font-body-sm text-on-surface-variant">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-outline">
                              location_on
                            </span>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-on-surface">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              payments
                            </span>
                            {job.salary}
                          </span>
                        </div>

                        <p className="font-body-sm text-body-sm text-tertiary line-clamp-2">
                          {job.desc}
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-space-xs pt-1">
                          {job.badges.map((b, bIdx) => (
                            <span
                              key={bIdx}
                              className={`px-space-sm py-0.5 rounded-full text-label-sm font-label-sm ${b.color}`}
                            >
                              {b.text}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-space-md border-t border-surface-container-highest flex items-center justify-between">
                        <span className="text-label-sm font-label-sm text-tertiary">
                          {job.posted}
                        </span>
                        <Link
                          className="px-space-md py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors"
                          href={job.href}
                        >
                          View Position
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Pagination / Load more */}
              <div className="flex justify-center mt-space-md">
                <button className="px-space-xl py-space-md rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-lowest font-label-lg text-label-lg transition-colors flex items-center gap-space-sm shadow-sm">
                  <span>Load More Trade Positions</span>
                  <span className="material-symbols-outlined text-[18px]">
                    expand_more
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 5. INTERNATIONAL LICENSE EQUIVALENCE & CREDENTIAL GUIDE       */}
          {/* ============================================================== */}
          <section className="w-full px-margin py-space-xl max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="bg-gradient-to-br from-secondary to-[#102a4a] text-on-secondary rounded-2xl p-space-xl shadow-lg relative overflow-hidden">
              {/* Decorative geometric watermarks */}
              <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[280px]">
                  verified
                </span>
              </div>
              <div className="relative z-10 flex flex-col gap-space-lg">
                <div className="max-w-2xl flex flex-col gap-space-sm">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary text-on-primary text-label-sm font-label-sm w-fit uppercase">
                    <span className="material-symbols-outlined text-[14px]">
                      swap_horizontal_circle
                    </span>
                    <span>Global Portability Framework</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg tracking-tight">
                    International Trade License &amp; Credential Equivalence
                  </h2>
                  <p className="font-body-md text-body-md text-secondary-fixed">
                    Jobzeta provides automatic credential mapping for cross-border recruitment. Review how standard regional certifications match across top labor jurisdictions.
                  </p>
                </div>

                {/* Equivalence Matrix Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                  {/* Card 1: North America */}
                  <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl border border-white/10 flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">flag</span>
                      <span className="font-label-md text-label-md uppercase tracking-wider">
                        North America
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-white">
                      Red Seal &amp; Journeyman
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary-fixed">
                      Standard interprovincial standard in Canada and US State Licensing Boards with reciprocal 4-5 year formal apprenticeships.
                    </p>
                    <div className="mt-space-sm pt-space-xs border-t border-white/10 text-label-sm font-label-sm text-surface-container">
                      Equiv: EQF Level 4 / DGUV Geselle
                    </div>
                  </div>

                  {/* Card 2: Germany & DACH */}
                  <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl border border-white/10 flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">handyman</span>
                      <span className="font-label-md text-label-md uppercase tracking-wider">
                        Germany &amp; DACH
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-white">
                      IHK / HWK Meister &amp; Geselle
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary-fixed">
                      Rigorous Dual Vocational Training (Duale Ausbildung) credentials certified by German Chambers of Skilled Crafts.
                    </p>
                    <div className="mt-space-sm pt-space-xs border-t border-white/10 text-label-sm font-label-sm text-surface-container">
                      Meister: EQF Level 6 (Bachelors Equiv.)
                    </div>
                  </div>

                  {/* Card 3: UK & Commonwealth */}
                  <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl border border-white/10 flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">school</span>
                      <span className="font-label-md text-label-md uppercase tracking-wider">
                        UK &amp; Commonwealth
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-white">
                      NVQ / City &amp; Guilds L3
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary-fixed">
                      National Vocational Qualifications along with Gold CSCS Card clearance for structural site and engineering works.
                    </p>
                    <div className="mt-space-sm pt-space-xs border-t border-white/10 text-label-sm font-label-sm text-surface-container">
                      Equiv: Australian AQF Cert III/IV
                    </div>
                  </div>

                  {/* Card 4: Continental Testing */}
                  <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl border border-white/10 flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">health_and_safety</span>
                      <span className="font-label-md text-label-md uppercase tracking-wider">
                        Continental Testing
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-white">
                      DGUV, VDE &amp; VCA
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary-fixed">
                      Safety and electrical compliance testing recognized across Benelux, Scandinavia, and Central European infrastructure works.
                    </p>
                    <div className="mt-space-sm pt-space-xs border-t border-white/10 text-label-sm font-label-sm text-surface-container">
                      Mandatory EU Site Safety Standard
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md border-t border-white/10">
                  <span className="font-body-sm text-body-sm text-secondary-fixed">
                    Holding non-domestic credentials? Our credential verification engine maps your hours and coursework directly to target jurisdiction requirements.
                  </span>
                  <button className="px-space-lg py-space-sm bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0">
                    Verify Your Trade Credentials
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 6. TOP HIRING EMPLOYERS IN CONSTRUCTION & HEAVY INDUSTRY       */}
          {/* ============================================================== */}
          <section className="w-full bg-surface-container-low px-margin py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                    Enterprise Partners
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Top Hiring Employers in Construction &amp; Engineering
                  </h2>
                </div>
                <Link
                  className="text-primary font-label-lg text-label-lg hover:underline flex items-center gap-1"
                  href="#"
                >
                  <span>View All 850+ Employers</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
                {/* Employer 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-highest shadow-sm flex flex-col items-center text-center gap-space-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary text-headline-sm">
                    AP
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">
                      Apex Automation
                    </h4>
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Industrial &amp; Energy
                    </span>
                  </div>
                  <div className="w-full pt-space-xs border-t border-surface-container-highest flex flex-col gap-1 text-label-sm font-label-sm">
                    <span className="text-primary font-semibold">124 Active Projects</span>
                    <span className="text-secondary">Relocation Support: Yes</span>
                  </div>
                </div>

                {/* Employer 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-highest shadow-sm flex flex-col items-center text-center gap-space-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary text-headline-sm">
                    NM
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">
                      Nordic Metalworks
                    </h4>
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Marine &amp; Fabrication
                    </span>
                  </div>
                  <div className="w-full pt-space-xs border-t border-surface-container-highest flex flex-col gap-1 text-label-sm font-label-sm">
                    <span className="text-primary font-semibold">46 Active Projects</span>
                    <span className="text-secondary">Relocation Support: Yes</span>
                  </div>
                </div>

                {/* Employer 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-highest shadow-sm flex flex-col items-center text-center gap-space-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary text-headline-sm">
                    HC
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">
                      Hochtief Infra
                    </h4>
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Civil &amp; High-Rise
                    </span>
                  </div>
                  <div className="w-full pt-space-xs border-t border-surface-container-highest flex flex-col gap-1 text-label-sm font-label-sm">
                    <span className="text-primary font-semibold">310 Active Projects</span>
                    <span className="text-secondary">Relocation Support: Yes</span>
                  </div>
                </div>

                {/* Employer 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-highest shadow-sm flex flex-col items-center text-center gap-space-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary text-headline-sm">
                    GE
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">
                      Gulf Engineering
                    </h4>
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Power &amp; Utilities
                    </span>
                  </div>
                  <div className="w-full pt-space-xs border-t border-surface-container-highest flex flex-col gap-1 text-label-sm font-label-sm">
                    <span className="text-primary font-semibold">88 Active Projects</span>
                    <span className="text-secondary">Relocation Support: Yes</span>
                  </div>
                </div>

                {/* Employer 5 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-highest shadow-sm flex flex-col items-center text-center gap-space-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary text-headline-sm">
                    CF
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">
                      Cat Field Services
                    </h4>
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Heavy Equipment
                    </span>
                  </div>
                  <div className="w-full pt-space-xs border-t border-surface-container-highest flex flex-col gap-1 text-label-sm font-label-sm">
                    <span className="text-primary font-semibold">215 Active Projects</span>
                    <span className="text-secondary">Relocation Support: Direct FIFO</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 7. VOCATIONAL FAQS & CAREER ADVICE                             */}
          {/* ============================================================== */}
          <section className="w-full px-margin py-space-xl max-w-7xl mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col gap-space-xs text-center items-center">
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                Candidate Guidance
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Vocational FAQs &amp; Licensing Resources
              </h2>
              <p className="font-body-md text-body-md text-tertiary max-w-xl">
                Clear answers on licensing compliance, safety certifications, cross-border mobility, and employer provisions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto w-full flex flex-col gap-space-md">
              {/* FAQ 1 */}
              <details className="group bg-surface-container-lowest p-space-lg rounded-xl border border-surface-container-highest shadow-sm open:shadow-md transition-all">
                <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-[18px] text-on-surface cursor-pointer select-none">
                  <span>How does Jobzeta verify trade licenses and apprenticeship hours?</span>
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="mt-space-md pt-space-md border-t border-surface-container-highest font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-2">
                  <p>
                    Jobzeta operates direct API and registry integrations with national and regional certification authorities, including the Canadian Red Seal registry, state licensing boards in the USA, the German Chamber of Crafts (HWK/IHK), and the UK CITB/CSCS database.
                  </p>
                  <p>
                    When a candidate submits their journeyman ticket or certification number, our automated system validates active status, disciplinary records, and approved apprenticeship logbook hours within 48 business hours.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-surface-container-lowest p-space-lg rounded-xl border border-surface-container-highest shadow-sm open:shadow-md transition-all">
                <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-[18px] text-on-surface cursor-pointer select-none">
                  <span>Can I apply for overseas trade positions without having local national certification yet?</span>
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="mt-space-md pt-space-md border-t border-surface-container-highest font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-2">
                  <p>
                    Yes. Many multinational engineering contractors hire skilled professionals under provisional &quot;Equivalence Track&quot; arrangements. In countries such as Germany (under the Skilled Immigration Act - Fachkräfteeinwanderungsgesetz) and Australia (TSS 482 Visa), employers sponsor your visa while you undergo rapid localized safety testing (e.g. VDE, White Card) during your first 90 days.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-surface-container-lowest p-space-lg rounded-xl border border-surface-container-highest shadow-sm open:shadow-md transition-all">
                <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-[18px] text-on-surface cursor-pointer select-none">
                  <span>What personal safety gear (PPE) and tool packages are provided by employers?</span>
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="mt-space-md pt-space-md border-t border-surface-container-highest font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-2">
                  <p>
                    By law in the European Union (CE regulations) and North America (OSHA), all mandatory safety equipment—including ballistic eye protection, hard hats, high-voltage arc-flash suits, fall arrest harnesses, and steel-toe footwear allowances—must be supplied directly by the sponsoring employer.
                  </p>
                  <p>
                    Specialized calibrated measuring apparatus, power tools, and workshop equipment are universally provided on-site. Most roles offering relocation or FIFO rotations also offer a supplementary tooling allowance.
                  </p>
                </div>
              </details>
            </div>

            {/* EMPLOYER CONVERSION BANNER */}
            <div className="bg-surface-container p-space-xl rounded-2xl border border-surface-container-highest flex flex-col lg:flex-row items-center justify-between gap-space-lg mt-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-16 h-16 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[32px]">
                    engineering
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Are You a Contractor or Industrial Plant Looking for Certified Trades?
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
                    Dispatch urgent hiring requests across 120+ vocational networks. Screen verified journeymen, apprentices, and licensed crew leaders with automated compliance audits.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm shrink-0 w-full sm:w-auto">
                <Link
                  className="w-full sm:w-auto px-space-lg py-space-md rounded-lg bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg transition-colors text-center shadow-sm"
                  href="#"
                >
                  Post a Trade Job
                </Link>
                <Link
                  className="w-full sm:w-auto px-space-lg py-space-md rounded-lg border border-outline-variant hover:bg-surface-container-lowest text-on-surface font-label-lg text-label-lg transition-colors text-center"
                  href="#"
                >
                  Enterprise Workforce Solutions
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ============================================================== */}
      {/* 8. GLOBAL FOOTER (Reusable Component)                          */}
      {/* ============================================================== */}
      <Footer />
    </div>
  );
}
