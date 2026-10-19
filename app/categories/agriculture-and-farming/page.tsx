"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AgricultureAndFarmingCategoryPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [activeFilter, setActiveFilter] = useState("All Agriculture");

  // Filterable Live Dispatch Feed Job Listings
  const jobsData = [
    {
      id: 1,
      badge: "agriculture",
      badgeColor: "text-primary",
      employer: "John Deere / Bayer ForwardFarming",
      title: "Lead Autonomous Combine & Precision Farming Specialist",
      location: "Braunschweig / Hanover, Germany",
      salary: "€4,200 – €5,600 / mo",
      visaSupport: "EU Blue Card / Cat T Supported",
      desc: "Operate and orchestrate fleets of S700-series combines with active Gen 4 CommandCenter displays, StarFire RTK telemetry, and automated grain loss monitoring.",
      tags: ["GPS Autosteer", "CLAAS/Deere ISOBUS", "Full-Time", "Relocation Housing Incl."],
      tagStyles: [
        "bg-primary/10 text-primary font-semibold",
        "bg-surface-container text-on-surface",
        "bg-surface-container text-on-surface",
        "bg-secondary/10 text-secondary",
      ],
      posted: "Posted 2 hours ago • Verified Sponsor",
      category: "Machinery & Tractor",
      hasVisa: true,
    },
    {
      id: 2,
      badge: "energy_program_saving",
      badgeColor: "text-secondary",
      employer: "RedStar Tomato Agro",
      title: "Senior High-Tech Glasshouse Climate Manager",
      location: "Westland, Netherlands",
      salary: "€4,500 – €6,000 / mo",
      visaSupport: "Direct Work Permit Provided",
      desc: "Lead 18-hectare Venlo glasshouse computerized environmental controls. Manage CO2 enrichment, LED assimilation lighting, humidity balance, and biological pest controls.",
      tags: ["Priva Climate Computer", "IPM Bio-Protection", "Permanent Contract", "Westland Corridor"],
      tagStyles: [
        "bg-primary/10 text-primary font-semibold",
        "bg-surface-container text-on-surface",
        "bg-surface-container text-on-surface",
        "bg-secondary/10 text-secondary",
      ],
      posted: "Posted 4 hours ago • Fast-track Visa",
      category: "Greenhouse & CEA",
      hasVisa: true,
    },
    {
      id: 3,
      badge: "water_bottle",
      badgeColor: "text-primary",
      employer: "Fonterra Dairy Co-op",
      title: "Robotic Milking Facility & Automated Herd Supervisor",
      location: "Waikato, New Zealand / Ireland Hub",
      salary: "€52,000 – €68,000 / yr",
      visaSupport: "Accredited Employer Work Visa",
      desc: "Supervise 800-head dairy operation utilizing quad Lely Astronaut A5 milking systems. Oversee automated rumination monitoring, pasture rotation planning, and somatic cell quality.",
      tags: ["Lely Robotics", "Herd Management", "Family Accommodation", "Full Sponsorship"],
      tagStyles: [
        "bg-primary/10 text-primary font-semibold",
        "bg-surface-container text-on-surface",
        "bg-surface-container text-on-surface",
        "bg-secondary/10 text-secondary",
      ],
      posted: "Posted Yesterday • Dairy Excellence",
      category: "Livestock & Dairy",
      hasVisa: true,
    },
    {
      id: 4,
      badge: "eco",
      badgeColor: "text-secondary",
      employer: "Driscoll's Berry Network",
      title: "Commercial Berry Farm Superintendent & Cold-Chain Lead",
      location: "Huelva, Spain / Alentejo, Portugal",
      salary: "€3,800 – €5,000 / mo",
      visaSupport: "EU Seasonal & Annual Visas",
      desc: "Direct high-density strawberry and blueberry polytunnel harvesting across 120 hectares. Enforce GlobalG.A.P. compliance, forced-air precooling timelines, and 200+ picker crew logistics.",
      tags: ["GlobalG.A.P. IFA", "Cold Chain Quality", "Bilingual Leadership", "Annual Contract"],
      tagStyles: [
        "bg-primary/10 text-primary font-semibold",
        "bg-surface-container text-on-surface",
        "bg-surface-container text-on-surface",
        "bg-secondary/10 text-secondary",
      ],
      posted: "Posted Yesterday • Verified Partner",
      category: "Machinery & Tractor",
      hasVisa: true,
    },
    {
      id: 5,
      badge: "biotech",
      badgeColor: "text-primary",
      employer: "Syngenta Crop Science",
      title: "Senior Precision Agronomist & Soil Mapping Consultant",
      location: "Cambridge, UK",
      salary: "£48,000 – £65,000 / yr",
      visaSupport: "UK Skilled Worker Visa",
      desc: "Deliver variable-rate seed and fertilizer prescriptions for commercial cereal producers. Leverage multispectral UAV flights, EM38 soil conductance analysis, and digital field twins.",
      tags: ["BASIS & FACTS", "Drone NDVI", "Field Consultancy", "EV Vehicle Provided"],
      tagStyles: [
        "bg-primary/10 text-primary font-semibold",
        "bg-surface-container text-on-surface",
        "bg-surface-container text-on-surface",
        "bg-secondary/10 text-secondary",
      ],
      posted: "Posted 3 days ago • Enterprise Tier",
      category: "Agronomy & Soil",
      hasVisa: true,
    },
    {
      id: 6,
      badge: "hardware",
      badgeColor: "text-secondary",
      employer: "Agrial Group",
      title: "Heavy Agri-Machinery Fleet Field Service Technician",
      location: "Rennes, France",
      salary: "€3,600 – €4,800 / mo",
      visaSupport: "EU Relocation Mobility Pact",
      desc: "Execute rapid field diagnostics, CAN-bus troubleshooting, and hydrostatic transmission rebuilds for forage harvesters, seeders, and high-horsepower agricultural tractors.",
      tags: ["ISOBUS Certified", "High-Pressure Hydraulics", "Service Truck", "Permanent Role"],
      tagStyles: [
        "bg-primary/10 text-primary font-semibold",
        "bg-surface-container text-on-surface",
        "bg-surface-container text-on-surface",
        "bg-secondary/10 text-secondary",
      ],
      posted: "Posted 3 days ago • Co-op Network",
      category: "Machinery & Tractor",
      hasVisa: true,
    },
  ];

  const filteredJobs = jobsData.filter((job) => {
    if (activeFilter === "All Agriculture") return true;
    if (activeFilter === "Visa Sponsorship Available") return job.hasVisa;
    return job.category === activeFilter;
  });

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      {/* Global Jobzeta Header */}
      <Header />

      <main className="w-full pt-16 sm:pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Hero & Live Metadata Section */}
          <section className="relative w-full bg-surface-container-low overflow-hidden pb-space-xl border-b border-surface-container-high/40">
            {/* Ambient subtle background decorative gradients */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 -ml-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>

            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 pt-space-lg">
              {/* Breadcrumbs & Status Ticker */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-sm mb-space-lg">
                <nav className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md flex-wrap">
                  <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                    <span className="material-symbols-outlined text-[16px]">home</span>
                    <span>Home</span>
                  </Link>
                  <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                  <Link className="hover:text-primary transition-colors" href="/categories">
                    Categories
                  </Link>
                  <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                  <span className="text-secondary font-bold">Agriculture &amp; Farming</span>
                </nav>

                <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-highest shadow-sm">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Live Agricultural Labor Exchange
                  </span>
                  <span className="text-outline-variant font-bold">•</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    18,420+ Verified Openings Worldwide
                  </span>
                </div>
              </div>

              {/* Main Headline Block */}
              <div className="max-w-4xl space-y-space-md">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold tracking-wide">
                    GLOBAL AGRI-WORKFORCE EXCHANGE
                  </span>
                  <span className="px-space-sm py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-bold tracking-wide">
                    100% GAP &amp; GLOBALG.A.P. CERTIFIED WORKFORCE
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
                  Agriculture, Commercial Farming &amp; Agritech Careers Worldwide
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                  Find verified agricultural careers, precision farming roles, automated greenhouse positions, and commercial harvesting management across Europe, North America, Oceania, and global agricultural corridors.
                </p>
              </div>

              {/* Unified Search & Filter Component */}
              <div className="mt-space-xl bg-surface-container-lowest rounded-xl p-space-md shadow-md border border-surface-container-high/60">
                <form className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center" onSubmit={(e) => e.preventDefault()}>
                  {/* Keyword input */}
                  <div className="lg:col-span-6 flex items-center gap-space-sm px-space-md py-2.5 bg-surface-container-low rounded-lg">
                    <span className="material-symbols-outlined text-primary text-[22px]">agriculture</span>
                    <input
                      className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                      placeholder="Role, machinery (John Deere, CLAAS, combine), greenhouse, horticulture..."
                      type="text"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                  </div>
                  {/* Region Dropdown */}
                  <div className="lg:col-span-4 flex items-center gap-space-sm px-space-md py-2.5 bg-surface-container-low rounded-lg">
                    <span className="material-symbols-outlined text-secondary text-[22px]">public</span>
                    <select
                      className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer"
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                    >
                      <option value="all">Global (All Agricultural Regions)</option>
                      <option value="eu">Europe (Germany, Netherlands, France, Spain)</option>
                      <option value="na">North America (USA H-2A &amp; Canada Ag)</option>
                      <option value="oce">Oceania (Australia &amp; New Zealand)</option>
                      <option value="latam">Latin America &amp; Global South</option>
                    </select>
                  </div>
                  {/* Submit CTA */}
                  <div className="lg:col-span-2">
                    <button
                      className="w-full h-11 inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm transition-all cursor-pointer font-semibold"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">search</span>
                      <span>Find Jobs</span>
                    </button>
                  </div>
                </form>

                {/* Trust Signals under Search */}
                <div className="mt-space-md pt-space-sm flex flex-wrap items-center justify-between gap-space-md border-t border-surface-container-high/40">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">18,420+ Active Farm Openings</span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">handshake</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Seasonal &amp; Permanent Agronomy Contracts</span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">travel_explore</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Cross-Border Visa Support (H-2A, Seasonal Worker Schemes)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Disciplines Grid */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="max-w-[1920px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
                <div>
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-space-xs">
                    <span className="material-symbols-outlined text-[16px]">category</span>
                    <span>Core Domain Sectors</span>
                  </div>
                  <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-headline-lg text-on-surface font-bold">
                    Farming &amp; Agricultural Disciplines
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
                    Explore specialized agricultural roles, machinery certifications, and compensation across global farming corridors.
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-primary-container transition-colors group font-semibold"
                  href="#dispatch-feed"
                >
                  <span>Browse all agricultural vacancies</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>

              {/* 8 Grid Cards (2 rows of 4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {/* Card 1 */}
                <Link
                  className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/60 cursor-pointer block"
                  href="/categories/agriculture-and-farming/machinery-and-combine-operators"
                >
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                      </div>
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        4,250 Jobs
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Machinery &amp; Combine Operators
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                      John Deere, CLAAS Lexion, GPS Autosteer, ISOBUS telematics, and Tier 4 Final harvesting machinery.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high/50">
                    <div>
                      <span className="block font-label-sm text-label-sm text-tertiary">Avg. Base Salary</span>
                      <span className="font-label-lg text-label-lg text-secondary font-bold">€38k – €54k</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </Link>

                {/* Card 2 */}
                <Link
                  className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/60 cursor-pointer block"
                  href="/categories/agriculture-and-farming/horticulture-and-commercial-glasshouse"
                >
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined text-[26px]">nest_eco_leaf</span>
                      </div>
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        2,840 Jobs
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Horticulture &amp; High-Tech CEA
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                      High-tech hydroponic complexes, glasshouse climate controls (Priva, Hoogendoorn), and vertical farm ops.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high/50">
                    <div>
                      <span className="block font-label-sm text-label-sm text-tertiary">Avg. Base Salary</span>
                      <span className="font-label-lg text-label-lg text-secondary font-bold">€42k – €62k</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </Link>

                {/* Card 3 */}
                <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/60">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined text-[26px]">pets</span>
                      </div>
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        3,120 Jobs
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Livestock &amp; Robotic Dairy
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                      Lely Astronaut robotic milking, herd telemetry tracking, biosecurity protocols, and automated TMR feeding.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high/50">
                    <div>
                      <span className="block font-label-sm text-label-sm text-tertiary">Avg. Base Salary</span>
                      <span className="font-label-lg text-label-lg text-secondary font-bold">€36k – €52k</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/60">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined text-[26px]">wine_bar</span>
                      </div>
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        1,980 Jobs
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Vineyard &amp; Precision Viticulture
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                      Canopy microclimate management, mechanical grape harvesting, precision pruning, and drip fertigation systems.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high/50">
                    <div>
                      <span className="block font-label-sm text-label-sm text-tertiary">Avg. Base Salary</span>
                      <span className="font-label-lg text-label-lg text-secondary font-bold">€35k – €49k</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/60">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined text-[26px]">science</span>
                      </div>
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        2,450 Jobs
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Agronomy &amp; Soil Science
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                      Certified Crop Advisors (CCA), multispectral drone mapping, IPM biocontrols, and soil carbon verification.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high/50">
                    <div>
                      <span className="block font-label-sm text-label-sm text-tertiary">Avg. Base Salary</span>
                      <span className="font-label-lg text-label-lg text-secondary font-bold">€52k – €78k</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/60">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined text-[26px]">groups</span>
                      </div>
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        3,600 Jobs
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Harvesting &amp; Crew Supervision
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                      GlobalG.A.P. field audits, packinghouse sorting lines, seasonal crew welfare management, and cold chain handoff.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high/50">
                    <div>
                      <span className="block font-label-sm text-label-sm text-tertiary">Avg. Base Salary</span>
                      <span className="font-label-lg text-label-lg text-secondary font-bold">€34k – €48k</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>

                {/* Card 7 */}
                <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/60">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined text-[26px]">water_drop</span>
                      </div>
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        1,420 Jobs
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Irrigation Engineering &amp; Water Tech
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                      Center pivot control, soil moisture probe telemetry, brackish desalination, and precision pressure networks.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high/50">
                    <div>
                      <span className="block font-label-sm text-label-sm text-tertiary">Avg. Base Salary</span>
                      <span className="font-label-lg text-label-lg text-secondary font-bold">€44k – €65k</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>

                {/* Card 8 */}
                <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/60">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined text-[26px]">build_circle</span>
                      </div>
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                        1,760 Jobs
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Farm Fleet Mechanics &amp; Tech
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                      Hydrostatic drives, high-pressure diesel injection, electronic hydraulics troubleshooting, and field mobile service.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high/50">
                    <div>
                      <span className="block font-label-sm text-label-sm text-tertiary">Avg. Base Salary</span>
                      <span className="font-label-lg text-label-lg text-secondary font-bold">€42k – €58k</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Live Dispatch Feed / Verified Openings */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-surface-container-low" id="dispatch-feed">
            <div className="max-w-[1920px] mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
                <div>
                  <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-space-xs">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>Verified Dispatch Stream</span>
                  </div>
                  <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface font-bold">
                    Verified Openings in Modern Agriculture
                  </h2>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Showing {filteredJobs.length} of 18,420+ Verified Jobs
                  </span>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-space-xs overflow-x-auto pb-space-sm mb-space-lg">
                {[
                  "All Agriculture",
                  "Machinery & Tractor",
                  "Greenhouse & CEA",
                  "Livestock & Dairy",
                  "Agronomy & Soil",
                  "Visa Sponsorship Available",
                ].map((pill, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveFilter(pill)}
                    className={`px-space-md py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors cursor-pointer ${
                      activeFilter === pill
                        ? "bg-primary text-on-primary font-bold shadow-sm"
                        : pill === "Visa Sponsorship Available"
                        ? "bg-secondary-fixed text-on-secondary-fixed font-bold hover:bg-secondary-container"
                        : "bg-surface-container-lowest hover:bg-surface-container-high text-on-surface-variant font-semibold"
                    }`}
                  >
                    {pill}
                  </button>
                ))}
              </div>

              {/* Verified Job Cards (2-column grid) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/60"
                  >
                    <div className="space-y-space-md">
                      <div className="flex items-start justify-between gap-space-sm">
                        <div className="flex items-center gap-space-md">
                          <div className={`w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center ${job.badgeColor} font-bold`}>
                            <span className="material-symbols-outlined text-[28px]">{job.badge}</span>
                          </div>
                          <div>
                            <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider block">
                              {job.employer}
                            </span>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                              {job.title}
                            </h3>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline hover:text-primary cursor-pointer">
                          bookmark
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-tertiary">location_on</span>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-primary">payments</span>
                          {job.salary}
                        </span>
                        <span className="flex items-center gap-1 text-primary font-semibold">
                          <span className="material-symbols-outlined text-[16px]">verified</span>
                          {job.visaSupport}
                        </span>
                      </div>

                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {job.desc}
                      </p>

                      <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
                        {job.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`px-space-sm py-1 rounded-full font-label-sm text-label-sm ${job.tagStyles[tIdx]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high/50 flex-wrap gap-2">
                      <span className="font-label-sm text-label-sm text-tertiary">{job.posted}</span>
                      <Link
                        href="/find-jobs"
                        className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all shadow-sm"
                      >
                        View Position
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination / Load More button */}
              <div className="mt-space-xl flex flex-col items-center justify-center gap-space-sm">
                <Link
                  href="/find-jobs"
                  className="px-space-xl py-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-secondary font-label-lg text-label-lg font-bold shadow-sm transition-all flex items-center gap-space-xs border border-surface-container-high/60"
                >
                  <span className="material-symbols-outlined text-[20px]">sync</span>
                  <span>Load More Agricultural Positions (18,414 Remaining)</span>
                </Link>
                <span className="font-body-sm text-body-sm text-outline">
                  Updated hourly with direct farm and corporate agritech integrations
                </span>
              </div>
            </div>
          </section>

          {/* Cross-Border Framework: Credential Recognition & Ag Mobility */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="w-full max-w-[1920px] mx-auto bg-secondary text-on-secondary rounded-2xl p-space-lg sm:p-space-xl shadow-xl relative overflow-hidden">
              {/* Decorative background vector element */}
              <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary/20 blur-2xl pointer-events-none"></div>

              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-space-md">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Verified Labor Exchange Accord</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-headline-xl font-headline-xl text-white tracking-tight font-bold">
                  Global Agricultural Mobility &amp; Farm Credential Equivalencies
                </h2>
                <p className="font-body-lg text-body-lg text-secondary-fixed mt-space-sm max-w-2xl leading-relaxed">
                  Jobzeta bridges international labor standards with standardized skill harmonization, automated visa documentation, and verified machinery licensing.
                </p>

                {/* 4 Corridor Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-xl">
                  <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl border border-white/10">
                    <div className="flex items-center gap-space-xs mb-space-xs text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">public</span>
                      <h4 className="font-label-lg text-label-lg font-bold text-white">North America</h4>
                    </div>
                    <ul className="space-y-space-xs text-secondary-fixed font-body-sm text-body-sm">
                      <li className="flex items-center gap-1.5">• H-2A Temporary Ag Worker</li>
                      <li className="flex items-center gap-1.5">• OSHA Farm Machinery Standard</li>
                      <li className="flex items-center gap-1.5">• CDL Ag Custom Harvester</li>
                      <li className="flex items-center gap-1.5">• EPA Worker Protection (WPS)</li>
                    </ul>
                  </div>

                  <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl border border-white/10">
                    <div className="flex items-center gap-space-xs mb-space-xs text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">flag</span>
                      <h4 className="font-label-lg text-label-lg font-bold text-white">EU &amp; United Kingdom</h4>
                    </div>
                    <ul className="space-y-space-xs text-secondary-fixed font-body-sm text-body-sm">
                      <li className="flex items-center gap-1.5">• EU Cat T Tractor Licenses</li>
                      <li className="flex items-center gap-1.5">• GlobalG.A.P. Farm Assessor</li>
                      <li className="flex items-center gap-1.5">• PA1/PA2 Pesticide Certificate</li>
                      <li className="flex items-center gap-1.5">• BASIS / FACTS Agronomy</li>
                    </ul>
                  </div>

                  <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl border border-white/10">
                    <div className="flex items-center gap-space-xs mb-space-xs text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">wb_sunny</span>
                      <h4 className="font-label-lg text-label-lg font-bold text-white">Australia &amp; NZ</h4>
                    </div>
                    <ul className="space-y-space-xs text-secondary-fixed font-body-sm text-body-sm">
                      <li className="flex items-center gap-1.5">• Subclass 417 / 462 Ag Stream</li>
                      <li className="flex items-center gap-1.5">• NZ Recognized Seasonal (RSE)</li>
                      <li className="flex items-center gap-1.5">• ChemCert Australia Accredited</li>
                      <li className="flex items-center gap-1.5">• Dairy NZ Milking Specialist</li>
                    </ul>
                  </div>

                  <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl border border-white/10">
                    <div className="flex items-center gap-space-xs mb-space-xs text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">grain</span>
                      <h4 className="font-label-lg text-label-lg font-bold text-white">Latin America &amp; Gulf</h4>
                    </div>
                    <ul className="space-y-space-xs text-secondary-fixed font-body-sm text-body-sm">
                      <li className="flex items-center gap-1.5">• Controlled Env. Agriculture</li>
                      <li className="flex items-center gap-1.5">• Desert Drip Fertigation</li>
                      <li className="flex items-center gap-1.5">• SMETA Labor Ethics Audit</li>
                      <li className="flex items-center gap-1.5">• Certified Cold Chain Logistics</li>
                    </ul>
                  </div>
                </div>

                {/* Verified Credential CTA Banner */}
                <div className="mt-space-lg pt-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md bg-surface-container-lowest/15 p-space-md rounded-xl border border-white/10">
                  <div className="flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold shrink-0">
                      <span className="material-symbols-outlined text-[20px]">badge</span>
                    </div>
                    <div>
                      <p className="font-headline-sm text-headline-sm text-white font-bold text-base">
                        Are you a certified agricultural technician or machinery operator?
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary-fixed">
                        Pre-validate your license and get direct visa sponsorship alerts.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/find-jobs"
                    className="px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all whitespace-nowrap shadow-sm w-full sm:w-auto text-center"
                  >
                    Verify Your Agri-Credentials
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Global Agricultural Enterprise Employers Grid */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-surface-container-low">
            <div className="max-w-[1920px] mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-space-xs">
                  <span className="material-symbols-outlined text-[16px]">domain</span>
                  <span>Trusted By Global Producers</span>
                </div>
                <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface font-bold">
                  Top Agriculture &amp; Commercial Farming Employers
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Multinational agricultural cooperatives, precision machinery manufacturers, and global food systems rely on Jobzeta to staff mission-critical operations.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
                {/* Enterprise 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center border border-surface-container-high/60">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[32px]">agriculture</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base font-bold">John Deere Dealer Net</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Global Harvest Fleets</p>
                  <span className="mt-space-md px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    1,240 Open Roles
                  </span>
                </div>

                {/* Enterprise 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center border border-surface-container-high/60">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[32px]">nutrition</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base font-bold">Driscoll&apos;s Berry Net</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Americas &amp; Iberia Ops</p>
                  <span className="mt-space-md px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    980 Open Roles
                  </span>
                </div>

                {/* Enterprise 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center border border-surface-container-high/60">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[32px]">science</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base font-bold">Bayer Crop Science</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Agronomy &amp; Field Biotech</p>
                  <span className="mt-space-md px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    750 Open Roles
                  </span>
                </div>

                {/* Enterprise 4 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center border border-surface-container-high/60">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[32px]">water_bottle</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base font-bold">Fonterra Co-operative</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Robotic Dairying Facilities</p>
                  <span className="mt-space-md px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    890 Open Roles
                  </span>
                </div>

                {/* Enterprise 5 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center border border-surface-container-high/60">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[32px]">biotech</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base font-bold">Syngenta Global</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Crop Protection Research</p>
                  <span className="mt-space-md px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    620 Open Roles
                  </span>
                </div>

                {/* Enterprise 6 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center border border-surface-container-high/60">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[32px]">groups</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base font-bold">Agrial Group</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">European Agri-Cooperative</p>
                  <span className="mt-space-md px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    840 Open Roles
                  </span>
                </div>

                {/* Enterprise 7 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center border border-surface-container-high/60">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[32px]">warehouse</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base font-bold">BayWa AG</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Smart Farming Logistics</p>
                  <span className="mt-space-md px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    510 Open Roles
                  </span>
                </div>

                {/* Enterprise 8 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center border border-surface-container-high/60">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[32px]">nest_eco_leaf</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base font-bold">NatureFresh Farms</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">High-Tech CEA Greenhouse</p>
                  <span className="mt-space-md px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    430 Open Roles
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Vocational FAQs & Cross-Border Farm Employment */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="max-w-4xl mx-auto space-y-space-lg">
              <div className="text-center">
                <div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-space-xs">
                  <span className="material-symbols-outlined text-[16px]">help</span>
                  <span>Knowledge &amp; Compliance Hub</span>
                </div>
                <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface font-bold">
                  Vocational FAQs &amp; Cross-Border Farm Employment
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Everything you need to know about working internationally in commercial agriculture, certifications, and worker rights.
                </p>
              </div>

              <div className="space-y-space-md pt-space-md">
                {/* FAQ item 1 */}
                <details className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-surface-container-high/60" open>
                  <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface text-lg font-bold">
                    <span>How does Jobzeta verify tractor and machinery driving certifications?</span>
                    <span className="material-symbols-outlined text-tertiary group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    All candidates holding specialized equipment credentials (such as EU Category T tractor permits, UK PA1/PA2 chemical application spraying certifications, or US CDL Farm endorsements) undergo authenticated validation through national licensing APIs and institutional training bodies before their profiles are matched with verified sponsors.
                  </p>
                </details>

                {/* FAQ item 2 */}
                <details className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-surface-container-high/60">
                  <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface text-lg font-bold">
                    <span>What visa sponsorship routes are available for international farm managers and operators?</span>
                    <span className="material-symbols-outlined text-tertiary group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Employers on Jobzeta actively sponsor visas across primary corridors. In the United States, positions qualify under the H-2A Agricultural Guest Worker program with roundtrip transport included. In Europe, verified farm managers and precision technicians utilize EU Blue Card or national seasonal worker treaties (Germany, France, Spain). In New Zealand and Australia, candidates leverage the Accredited Employer Work Visa (AEWV) and Subclass 417/462 working holiday pathways.
                  </p>
                </details>

                {/* FAQ item 3 */}
                <details className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-surface-container-high/60">
                  <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface text-lg font-bold">
                    <span>Are farm accommodation, seasonal housing, and utility packages provided by employers?</span>
                    <span className="material-symbols-outlined text-tertiary group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Over 88% of verified farm positions on Jobzeta include employer-provided or subsidized living arrangements. Under standard compliance rules (including H-2A regulations in the US and GlobalG.A.P. labor audits in Europe), housing must satisfy strict hygiene, heating/cooling, and safety inspections at no cost or capped reasonable rental deductions from base pay.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* Employer Call-to-Action Banner */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl">
            <div className="w-full max-w-[1920px] mx-auto bg-surface-container-highest rounded-2xl p-space-lg sm:p-space-xl shadow-md flex flex-col lg:flex-row items-center justify-between gap-space-lg border border-surface-container-high">
              <div className="space-y-space-sm max-w-2xl text-center lg:text-left">
                <span className="inline-block px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  Enterprise &amp; Farm Cooperative Solutions
                </span>
                <h2 className="text-2xl sm:text-3xl font-headline-lg text-headline-lg text-on-surface font-bold">
                  Are You an Agricultural Enterprise or Commercial Greenhouse Hiring Verified Talent?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Tap into pre-screened international harvesters, agronomists, precision fleet mechanics, and greenhouse climate specialists with compliant cross-border contracts.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto">
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition-all shadow-sm cursor-pointer"
                  href="/find-jobs"
                >
                  Post an Agricultural Job
                </Link>
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-surface-container-lowest hover:bg-surface text-secondary font-label-lg text-label-lg font-semibold transition-all shadow-sm border border-surface-container-high cursor-pointer"
                  href="/find-jobs"
                >
                  Enterprise Agri-Recruiting Solutions
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Global Jobzeta Footer */}
      <Footer />
    </div>
  );
}
