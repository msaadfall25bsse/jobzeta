"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");



  const mainCategories16 = [
    {
      id: "cat-1",
      title: "Trades & Construction",
      jobs: "38,120 Jobs",
      desc: "Structural development, MEP systems, finishing, and site mechanics.",
      icon: "construction",
      iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary",
      tags: ["Electricians", "Plumbers", "Welders", "Carpenters", "Masons", "Painters", "Heavy Technicians"],
      meta: "Global & Regional",
      keywords: "trades construction electricians plumbers welders carpenters masons painters heavy technicians building masonry ironworker roofing",
      href: "/categories/trades-and-construction",
    },
    {
      id: "cat-2",
      title: "Driving & Transportation",
      jobs: "29,480 Jobs",
      desc: "Intermodal freight, regional routes, passenger transit, and express delivery.",
      icon: "local_shipping",
      iconBg: "bg-secondary-fixed text-on-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary",
      tags: ["Long-haul Truck Drivers", "Delivery Couriers", "Taxi & Chauffeur", "Bus Operators", "Logistics"],
      meta: "CDL / Licensing",
      keywords: "driving transportation long-haul truck drivers delivery couriers taxi chauffeur bus operators logistics freight fleet cdl transit",
      href: "/find-jobs",
    },
    {
      id: "cat-3",
      title: "Agriculture & Farming",
      jobs: "14,920 Jobs",
      desc: "Cultivation, agricultural machinery, herd care, and climate-controlled crops.",
      icon: "agriculture",
      iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary",
      tags: ["Field Workers", "Tractor Drivers", "Livestock Handlers", "Greenhouse Technicians"],
      meta: "Seasonal & Year-round",
      keywords: "agriculture farming field workers tractor drivers livestock handlers greenhouse technicians agritech harvest crops cattle dairy",
      href: "/find-jobs",
    },
    {
      id: "cat-4",
      title: "Household & Domestic Services",
      jobs: "11,830 Jobs",
      desc: "Private estate management, domestic assistance, meal prep, and personal care.",
      icon: "home_work",
      iconBg: "bg-tertiary-fixed text-on-tertiary-fixed group-hover:bg-tertiary group-hover:text-on-tertiary",
      tags: ["Housekeepers", "Caregivers", "Residential Cooks", "Domestic Helpers"],
      meta: "Live-in & Hourly",
      keywords: "household domestic services housekeepers caregivers residential cooks domestic helpers home assistance nanny cleaning au pair estate",
      href: "/find-jobs",
    },
    {
      id: "cat-5",
      title: "Hospitality & Food Services",
      jobs: "26,500 Jobs",
      desc: "Culinary arts, front-of-house guest relations, and international resort hospitality.",
      icon: "restaurant",
      iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary",
      tags: ["Executive Chefs", "Line Cooks", "Waitstaff", "Hotel Front Desk", "Housekeeping"],
      meta: "Luxury & High Volume",
      keywords: "hospitality food services executive chefs line cooks waitstaff hotel front desk housekeeping culinary restaurant resort banquet",
      href: "/find-jobs",
    },
    {
      id: "cat-6",
      title: "Warehouse & Manufacturing",
      jobs: "33,140 Jobs",
      desc: "High-throughput fulfillment, industrial assembly, quality assurance, and pallet operations.",
      icon: "precision_manufacturing",
      iconBg: "bg-secondary-fixed text-on-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary",
      tags: ["Forklift Operators", "Assembly Line Workers", "Inventory Packers", "QC Technicians"],
      meta: "Shift Flexibility",
      keywords: "warehouse manufacturing forklift operators assembly line workers inventory packers qc technicians factory distribution fulfillment material handling",
      href: "/find-jobs",
    },
    {
      id: "cat-7",
      title: "Healthcare & Nursing",
      jobs: "42,670 Jobs",
      desc: "Bedside clinical care, outpatient triage, pathology diagnostics, and imaging operations.",
      icon: "medical_services",
      iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary",
      tags: ["Registered Nurses", "Medical Assistants", "Caregivers", "Lab Technicians", "Radiologists"],
      meta: "Licensed Positions",
      keywords: "healthcare nursing registered nurses medical assistants caregivers lab technicians radiologists clinic hospital cna rn patient care",
      href: "/find-jobs",
    },
    {
      id: "cat-8",
      title: "Information Technology",
      jobs: "37,210 Jobs",
      desc: "Full-stack software engineering, infosec defense, server topology, and IT desk support.",
      icon: "terminal",
      iconBg: "bg-secondary-fixed text-on-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary",
      tags: ["Frontend/Backend", "Network Admins", "Cybersecurity", "Helpdesk Support"],
      meta: "Remote & Hybrid",
      keywords: "information technology it frontend backend developers network admins cybersecurity helpdesk support software coding cloud sysadmin devops",
      href: "/find-jobs",
    },
    {
      id: "cat-9",
      title: "Engineering & Technical",
      jobs: "19,450 Jobs",
      desc: "Infrastructure calculation, electro-mechanical design, modeling, and plant commissioning.",
      icon: "architecture",
      iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary",
      tags: ["Civil Engineers", "Electrical Engineers", "Mechanical Technicians", "CAD Drafters"],
      meta: "PE / Field Engineers",
      keywords: "engineering technical civil engineers electrical engineers mechanical technicians cad drafters blueprint design instrumentation",
      href: "/find-jobs",
    },
    {
      id: "cat-10",
      title: "Business, Finance & Administration",
      jobs: "22,890 Jobs",
      desc: "General ledgers, personnel operations, corporate governance, and executive support.",
      icon: "payments",
      iconBg: "bg-tertiary-fixed text-on-tertiary-fixed group-hover:bg-tertiary group-hover:text-on-tertiary",
      tags: ["Accountants", "HR Specialists", "Executive Assistants", "Bookkeepers"],
      meta: "Corporate & Enterprise",
      keywords: "business finance administration accountants hr specialists executive assistants bookkeepers payroll audit human resources clerical",
      href: "/find-jobs",
    },
    {
      id: "cat-11",
      title: "Education & Training",
      jobs: "13,740 Jobs",
      desc: "K-12 instruction, craft apprenticeships, multilingual training, and student mentorship.",
      icon: "school",
      iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary",
      tags: ["School Teachers", "Vocational Instructors", "Language Tutors", "Academic Aides"],
      meta: "All Credentials",
      keywords: "education training school teachers vocational instructors language tutors academic aides curriculum coaching teaching university esl",
      href: "/find-jobs",
    },
    {
      id: "cat-12",
      title: "Retail & Sales",
      jobs: "24,310 Jobs",
      desc: "Consumer showrooms, visual merchandising, branch management, and commercial pipeline growth.",
      icon: "storefront",
      iconBg: "bg-secondary-fixed text-on-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary",
      tags: ["Retail Associates", "Store Managers", "Cashiers", "Merchandisers", "B2B Sales Reps"],
      meta: "Base + Commission",
      keywords: "retail sales retail associates store managers cashiers merchandisers b2b sales reps storefront commercial point of sale",
      href: "/find-jobs",
    },
    {
      id: "cat-13",
      title: "Security & Safety",
      jobs: "15,620 Jobs",
      desc: "Perimeter control, continuous visual monitoring, emergency response, and safety compliance.",
      icon: "shield",
      iconBg: "bg-tertiary-fixed text-on-tertiary-fixed group-hover:bg-tertiary group-hover:text-on-tertiary",
      tags: ["Security Officers", "CCTV Monitoring Staff", "Safety Inspectors"],
      meta: "Certified Badges",
      keywords: "security safety security officers cctv monitoring staff workplace health safety inspectors patrol loss prevention compliance guard osha",
      href: "/find-jobs",
    },
    {
      id: "cat-14",
      title: "Customer Support",
      jobs: "21,430 Jobs",
      desc: "Multi-tier ticket resolution, voice inbound centers, client advocacy, and technical onboarding.",
      icon: "support_agent",
      iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary",
      tags: ["Call Center Agents", "Technical Support", "Helpdesk Operators", "Client Success"],
      meta: "Remote / On-prem",
      keywords: "customer support call center agents technical support helpdesk operators client success inbound bpo teleperformance omni-channel tickets",
      href: "/find-jobs",
    },
    {
      id: "cat-15",
      title: "Creative & Media",
      jobs: "11,040 Jobs",
      desc: "Brand communication, digital video post-production, multilingual translation, and editorial craft.",
      icon: "palette",
      iconBg: "bg-secondary-fixed text-on-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary",
      tags: ["Graphic Designers", "Video Editors", "Content Writers", "Translators"],
      meta: "Portfolio Matching",
      keywords: "creative media graphic designers video editors content writers translators design production multimedia copywriting animation localisation",
      href: "/find-jobs",
    },
    {
      id: "cat-16",
      title: "Public Services & Science",
      jobs: "9,870 Jobs",
      desc: "Ecosystem field samples, civil municipality support, institutional research, and urban utilities.",
      icon: "biotech",
      iconBg: "bg-tertiary-fixed text-on-tertiary-fixed group-hover:bg-tertiary group-hover:text-on-tertiary",
      tags: ["Field Researchers", "Environmental Assistants", "Municipal Service Staff"],
      meta: "Gov & NGO Affiliated",
      keywords: "public services science field researchers environmental assistants municipal service staff civil service government ecology urban laboratory biology",
      href: "/find-jobs",
    },
  ];

  // Filtering logic
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return mainCategories16;
    return mainCategories16.filter(
      (cat) =>
        cat.title.toLowerCase().includes(q) ||
        cat.desc.toLowerCase().includes(q) ||
        cat.keywords.toLowerCase().includes(q) ||
        cat.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md">
      {/* ============================================================== */}
      {/* 1. GLOBAL HEADER (Reusable Component)                          */}
      {/* ============================================================== */}
      <Header />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* ============================================================== */}
          {/* 2. TOP HERO HEADER & AMBIENT ACCENTS                           */}
          {/* ============================================================== */}
          <section className="relative w-full bg-surface-container-low px-margin py-space-xl overflow-hidden">
            {/* Ambient Luminous Accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto flex flex-col gap-space-lg">
              {/* Breadcrumb & Sector Badging */}
              <div className="flex flex-wrap items-center gap-space-sm text-tertiary">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Global Directory
                </span>
                <span className="text-outline-variant font-label-sm">/</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Classifications
                </span>
                <span className="text-outline-variant font-label-sm">/</span>
                <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  16 Industry Sectors
                </span>
              </div>

              {/* Main Titles with Crisp Editorial Contrast */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="max-w-3xl flex flex-col gap-space-sm">
                  <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                    Explore Job Categories Across All Industries
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Find opportunities matching your trade, profession, or craft. Jobzeta connects workers across all skill levels and vocations worldwide.
                  </p>
                </div>

                {/* Metric Pill Cluster */}
                <div className="flex sm:flex-row flex-col gap-space-sm shrink-0">
                  <div className="bg-surface-container-lowest px-space-md py-space-sm rounded-xl shadow-sm flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      work_history
                    </span>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface leading-none font-bold">
                        285,400+
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary mt-1">
                        Verified Vacancies
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest px-space-md py-space-sm rounded-xl shadow-sm flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[28px]">
                      public
                    </span>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface leading-none font-bold">
                        120+
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary mt-1">
                        Jurisdictions
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Search & Interactive Filter Bar */}
              <div className="mt-space-md bg-surface-container-lowest p-space-sm rounded-xl shadow-md flex flex-col md:flex-row gap-space-sm items-center">
                <div className="relative w-full flex items-center">
                  <span className="material-symbols-outlined absolute left-space-md text-outline">
                    search
                  </span>
                  <input
                    className="w-full h-11 pl-12 pr-space-md rounded-lg bg-surface-container-low text-on-surface placeholder-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                    id="category-search-input"
                    placeholder="Filter categories (e.g., Driving, Construction, Nursing)..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-space-xs w-full md:w-auto shrink-0 justify-between md:justify-start">
                  <div className="hidden sm:flex items-center gap-1.5 px-space-md py-2 text-on-surface-variant font-label-md text-label-md whitespace-nowrap">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      filter_alt
                    </span>
                    <span id="active-count-label">
                      Showing {filteredCategories.length} of 16 sectors
                    </span>
                  </div>
                  <button
                    className="px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shrink-0 cursor-pointer"
                    id="clear-filter-btn"
                    type="button"
                    onClick={() => setSearchQuery("")}
                  >
                    Reset Filter
                  </button>
                </div>
              </div>

              {/* Quick Jump Sector Chips */}
              <div className="flex items-center gap-space-xs overflow-x-auto pb-1 no-scrollbar text-on-surface-variant">
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider shrink-0 mr-space-xs">
                  Quick Focus:
                </span>
                <button
                  className="quick-chip px-space-sm py-1 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary font-label-sm text-label-sm transition-colors whitespace-nowrap cursor-pointer"
                  onClick={() => setSearchQuery("")}
                >
                  All Vocations
                </button>
                <button
                  className="quick-chip px-space-sm py-1 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary font-label-sm text-label-sm transition-colors whitespace-nowrap cursor-pointer"
                  onClick={() => setSearchQuery("Construction")}
                >
                  Trades &amp; Building
                </button>
                <button
                  className="quick-chip px-space-sm py-1 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary font-label-sm text-label-sm transition-colors whitespace-nowrap cursor-pointer"
                  onClick={() => setSearchQuery("Transportation")}
                >
                  Logistics &amp; Driving
                </button>
                <button
                  className="quick-chip px-space-sm py-1 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary font-label-sm text-label-sm transition-colors whitespace-nowrap cursor-pointer"
                  onClick={() => setSearchQuery("Healthcare")}
                >
                  Healthcare
                </button>
                <button
                  className="quick-chip px-space-sm py-1 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary font-label-sm text-label-sm transition-colors whitespace-nowrap cursor-pointer"
                  onClick={() => setSearchQuery("Technology")}
                >
                  Tech &amp; IT
                </button>
                <button
                  className="quick-chip px-space-sm py-1 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary font-label-sm text-label-sm transition-colors whitespace-nowrap cursor-pointer"
                  onClick={() => setSearchQuery("Farming")}
                >
                  Agriculture
                </button>
              </div>
            </div>
          </section>



          {/* ============================================================== */}
          {/* 4. VISUAL METRIC STRIP, DEMAND TRAJECTORY & SPOTLIGHT         */}
          {/* ============================================================== */}
          <section className="w-full px-margin py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
              {/* Visual Metric Strip & Chart Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
                <div className="lg:col-span-8 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md mb-space-md">
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        Demand Trajectory
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface mt-1 font-bold">
                        Cross-Sector Workforce Activity
                      </h3>
                    </div>
                    <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span> Updated Daily
                    </span>
                  </div>

                  {/* Clean Inline SVG Vector Chart: Distribution & Demand */}
                  <div className="w-full h-32 flex items-end gap-3 pt-4">
                    <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-full bg-primary/20 rounded-t-md relative flex items-end justify-center transition-all group-hover:bg-primary" style={{ height: "82%" }}>
                        <span className="font-label-sm text-label-sm text-on-surface font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">82k</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary truncate max-w-full">Trades</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-full bg-primary/20 rounded-t-md relative flex items-end justify-center transition-all group-hover:bg-primary" style={{ height: "68%" }}>
                        <span className="font-label-sm text-label-sm text-on-surface font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">68k</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary truncate max-w-full">Logistics</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-full bg-primary/20 rounded-t-md relative flex items-end justify-center transition-all group-hover:bg-primary" style={{ height: "94%" }}>
                        <span className="font-label-sm text-label-sm text-on-surface font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">94k</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary truncate max-w-full">Health</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-full bg-primary/20 rounded-t-md relative flex items-end justify-center transition-all group-hover:bg-primary" style={{ height: "54%" }}>
                        <span className="font-label-sm text-label-sm text-on-surface font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">54k</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary truncate max-w-full">Agri</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-full bg-primary/20 rounded-t-md relative flex items-end justify-center transition-all group-hover:bg-primary" style={{ height: "75%" }}>
                        <span className="font-label-sm text-label-sm text-on-surface font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">75k</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary truncate max-w-full">Tech</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-full bg-primary/20 rounded-t-md relative flex items-end justify-center transition-all group-hover:bg-primary" style={{ height: "61%" }}>
                        <span className="font-label-sm text-label-sm text-on-surface font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">61k</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary truncate max-w-full">Mfg</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-full bg-primary/20 rounded-t-md relative flex items-end justify-center transition-all group-hover:bg-primary" style={{ height: "48%" }}>
                        <span className="font-label-sm text-label-sm text-on-surface font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">48k</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary truncate max-w-full">Retail</span>
                    </div>
                  </div>

                  <div className="mt-space-md pt-space-sm flex items-center justify-between text-tertiary font-body-sm text-body-sm">
                    <span>High-velocity hiring across industrial, technical, and primary care sectors.</span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">Standardized Skill Mappings →</span>
                  </div>
                </div>

                {/* Editorial Spotlight Card */}
                <div className="lg:col-span-4 bg-secondary text-on-secondary p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10 flex flex-col gap-space-sm">
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">
                      Global Apprenticeship Pipeline
                    </span>
                    <h4 className="font-headline-sm text-headline-sm font-bold leading-tight">
                      Licensed &amp; Certified Guild Pathways
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-secondary/80">
                      Direct recruitment pipelines for certified welders, heavy crane mechanics, and specialized electrical linemen.
                    </p>
                  </div>
                  <div className="relative z-10 pt-space-md flex items-center justify-between">
                    <Link
                      className="inline-flex items-center gap-2 px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-colors shadow-sm"
                      href="/find-jobs"
                    >
                      <span>View Accredited Roles</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* ============================================================== */}
              {/* 5. MAIN CATEGORY GRID (16 INDUSTRIES)                          */}
              {/* ============================================================== */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter" id="category-grid">
                {filteredCategories.map((cat) => (
                  <article
                    key={cat.id}
                    className="category-card group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between relative"
                  >
                    <div className="flex flex-col gap-space-md">
                      <div className="flex items-center justify-between">
                        <Link href={cat.href} className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${cat.iconBg}`}>
                          <span className="material-symbols-outlined text-[28px]">{cat.icon}</span>
                        </Link>
                        <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container text-tertiary">
                          {cat.jobs}
                        </span>
                      </div>
                      <div>
                        <Link href={cat.href} className="block group-hover:text-primary transition-colors">
                          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                            {cat.title}
                          </h2>
                        </Link>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          {cat.desc}
                        </p>
                      </div>
                      {/* Subcategory Tags */}
                      <div className="flex flex-wrap gap-space-xs pt-space-xs">
                        {cat.tags.map((tag, tIdx) => (
                          <Link
                            key={tIdx}
                            className="px-2 py-1 rounded-md bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-colors"
                            href={cat.href}
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md flex items-center justify-between text-primary font-label-md text-label-md font-semibold">
                      <Link className="flex items-center gap-1.5 hover:gap-2.5 transition-all" href={cat.href}>
                        <span>Browse Jobs</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                      <span className="text-tertiary font-label-sm text-label-sm font-normal">
                        {cat.meta}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Zero State when search yields nothing */}
              {filteredCategories.length === 0 && (
                <div className="flex flex-col items-center justify-center p-space-xl bg-surface-container-lowest rounded-xl shadow-sm text-center" id="no-results-state">
                  <span className="material-symbols-outlined text-outline text-[48px] mb-space-sm">
                    manage_search
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    No Matching Industry Found
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-1">
                    We couldn&apos;t find a direct category matching your query. Try broad keywords like &quot;driving&quot;, &quot;care&quot;, or &quot;tech&quot;.
                  </p>
                  <button
                    className="mt-space-md px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-all cursor-pointer"
                    id="reset-empty-btn"
                    onClick={() => setSearchQuery("")}
                    type="button"
                  >
                    Clear Search Filter
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* ============================================================== */}
          {/* 6. EDITORIAL PHOTO FEATURE: SKILLED LABOR IN MOTION            */}
          {/* ============================================================== */}
          <section className="w-full px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="relative rounded-xl overflow-hidden shadow-sm h-64 group">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="A focused female electrical technician working carefully on a precision breaker panel"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ2mVqFnjUEfzK8vfRMKDg-Rr6JYNDPzV06NarcXBsPBRTsPVAxuANdubzSMmfqXBykYjzGUCxzgyDVuUKjNEB05CEkN8QvzVm2do8Tmo2mjmErvhYBx9sm7DcIaLNABUSHcUJowtlwnVFHwnb0Aes1na4WmKyndIfEypi2-W8davGN5W406jz4BdCV4dPZSHhSC-s0QPhZiKnrwG6IrKpRRx3xQXTY4mECMspMBie0BKv0uSpI_L2Ow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent p-space-md flex flex-col justify-end">
                  <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-bold">
                    Vocational Excellence
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                    Certified Technical Trades
                  </span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-sm h-64 group">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="A smiling registered nurse in clean surgical scrubs taking notes on a tablet computer in a bright hospital hallway"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABPA9JVrDABjxxhHQbCkOQtYN8dyjBtgEeCkYhPAZCHQeOH-Wrx3zS65Bbwlc4z6U0R6Uj3VWLtq6ZF66NAMpv4IrUYPKlhdWaIvS6TSXagQRGdNNOV1T_yXgqiTqJzwhbzhFUcthW1MOw9J7ytv9l0b89QZ0O6jLXKh022i06-TaNOuq1M1blh3Wqxj1ah3uLbcQ9NOGjh2Tgl-d5vCncrTelZGKcT2fe5RYRcfdydX1vnaIkaRxE4A"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent p-space-md flex flex-col justify-end">
                  <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-bold">
                    Global Frontline
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                    Clinical &amp; Critical Care
                  </span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-sm h-64 group">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="A professional commercial truck driver in a modern ergonomic cab checking digital route navigation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIQqKpXC0ZmvbZkfQgd4T6CAN9TOjgNB4qNafals4oAS1rEme9oXVlyjT3lSnDOKMa0rqFuqaVfLOZ8p8CL5po8tORZouI5J0dRw6ZVH7PQjkKGGRC3RoRl1M5ebZT1Byyjq-pEMvkcNx1HOWQjxmrJS44RwRO7ulT-WxgoWo7FTkvHZ5kkueUvVlAQQ1YEt1nyBP3jbcB0NCopBNpd-u6SCol4_XfWgI_RgubkWAmtBFLCj_RobccBw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent p-space-md flex flex-col justify-end">
                  <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-bold">
                    Intermodal Mobility
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
                    Cross-Border Transport
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 7. HIGH IMPACT CONVERSION CTA SECTION                          */}
          {/* ============================================================== */}
          <section className="w-full bg-surface-container-low px-margin py-space-xl">
            <div className="max-w-5xl mx-auto bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-lg">
              <div className="relative z-10 flex flex-col gap-space-xs max-w-xl text-left">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Bespoke Talent Alignment
                </span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                  Can&apos;t find your occupation?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Browse all jobs or set up a customized job alert to receive real-time updates as soon as employers in your sector publish new vacancies.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto shrink-0">
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-space-md rounded-lg bg-surface-container-high hover:bg-surface-dim text-on-surface font-label-lg text-label-lg transition-all"
                  href="/find-jobs"
                >
                  <span className="material-symbols-outlined text-[20px]">explore</span>
                  <span>Browse All Jobs</span>
                </Link>
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                  <span>Set Up Job Alert</span>
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
