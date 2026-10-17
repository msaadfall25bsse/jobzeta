"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DrivingAndTransportationPage() {
  const [activeFilter, setActiveFilter] = useState("All Transport");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("Global (All Regions)");
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Record<number, boolean>>({});

  const toggleBookmark = (id: number) => {
    setBookmarkedJobs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const disciplines = [
    {
      icon: "local_shipping",
      jobs: "6,420 Jobs",
      title: "Long-Haul & Intermodal Freight (CDL A / CE)",
      desc: "Cross-border heavy articulated trucks, reefer units, container line-haul, and multi-drop transport.",
      band: "€52,000 - €78,000",
      href: "/categories/driving-and-transportation/long-haul-and-intermodal-freight",
    },
    {
      icon: "warning",
      jobs: "3,180 Jobs",
      title: "Dangerous Goods & Hazmat Tanker (ADR)",
      desc: "Petroleum, cryogenic gas, chemical bulk tankers with certified ADR tanks & Hazmat endorsement.",
      band: "€58,000 - €92,000",
      href: "/find-jobs",
    },
    {
      icon: "directions_boat",
      jobs: "4,250 Jobs",
      title: "Port, Rail & Intermodal Drayage",
      desc: "Deep-sea container transport, twist-lock chassis operations, terminal drayage, and twist-lock rail transfer.",
      band: "€48,000 - €74,000",
      href: "/find-jobs",
    },
    {
      icon: "rv_hookup",
      jobs: "1,890 Jobs",
      title: "Heavy Haulage & Oversized Abnormal Loads",
      desc: "Multi-axle low-loaders, pilot escort operations, turbine transport, and modular hydraulic platform steering.",
      band: "€62,000 - €96,000",
      href: "/find-jobs",
    },
    {
      icon: "directions_bus",
      jobs: "3,740 Jobs",
      title: "Passenger Transport & Commercial Coach / Bus",
      desc: "Class D / PCV licensed international coach captains, municipal transit, and VIP private touring.",
      band: "€44,000 - €65,000",
      href: "/find-jobs",
    },
    {
      icon: "local_shipping",
      jobs: "5,120 Jobs",
      title: "Last-Mile Delivery & Urban Fleet Operations",
      desc: "Multi-stop urban courier routes, refrigerated food distribution, sprinter van leads, and depot routing.",
      band: "€36,000 - €52,000",
      href: "/find-jobs",
    },
    {
      icon: "forklift",
      jobs: "2,980 Jobs",
      title: "Warehouse Material Handling & Reach Forklift",
      desc: "VNA, reach truck, rough terrain counterbalance, and high-bay automated warehouse logistics.",
      band: "€38,000 - €54,000",
      href: "/find-jobs",
    },
    {
      icon: "route",
      jobs: "1,900 Jobs",
      title: "Fleet Telematics, Safety & Dispatch Logistics",
      desc: "Tachograph compliance, route optimization, fleet safety superintendents, and CMR documentation.",
      band: "€55,000 - €82,000",
      href: "/find-jobs",
    },
  ];

  const jobsList = [
    {
      id: 1,
      badge: "DHL",
      company: "DHL Global Forwarding",
      posted: "Posted 1h ago",
      title: "International Long-Haul CE Driver (Reefer & High-Value Cargo)",
      location: "Rotterdam, Netherlands 🌐",
      salary: "€4,200 - €5,400 / mo (€50k-€65k gross)",
      desc: "Long-haul refrigerated freight between Benelux and Scandinavia. Modern Scania V8 fleet with advanced telematics. Full EU driving & rest compliance.",
      tags: [
        "International Haulage",
        "Code 95 CPC Certified",
        "CE Heavy Articulated",
        "Single Driver Cabin",
      ],
      tagStyles: [
        "bg-surface-container text-on-surface-variant",
        "bg-primary-fixed/40 text-on-primary-fixed-variant",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
      ],
      footerLeft: "Permanent • Direct Visa Processing",
      category: "CDL Class A / CE",
      hasVisa: true,
    },
    {
      id: 2,
      badge: "DSV",
      company: "DSV Panalpina",
      posted: "Posted 3h ago",
      title: "ADR Tanker Driver - Petrochemical & Liquid Chemicals",
      location: "Antwerp Port, Belgium 🌐",
      salary: "€4,800 - €6,200 / mo + Tanker Hazard Multiplier",
      desc: "Bulk chemical road transport across Western Europe. Mandatory ADR Tanks certification and min 3 years experience with stainless steel pressurised tankers.",
      tags: [
        "Hazardous Materials (ADR)",
        "ADR Tanks + Class 3/8",
        "Port & Petrochemical Hub",
        "Permanent Contract",
      ],
      tagStyles: [
        "bg-error-container text-on-error-container",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
      ],
      footerLeft: "Hazard Allowance • Cross-Border Medical",
      category: "ADR Hazmat Tanker",
      hasVisa: false,
    },
    {
      id: 3,
      badge: "KN",
      company: "Kuehne+Nagel Logistics",
      posted: "Posted 5h ago",
      title: "Senior Heavy Haul Low-Loader & Abnormal Load Operator",
      location: "Hamburg / Bremen, Germany 🌐",
      salary: "€58,000 - €76,000 / yr + Oversize Allowances",
      desc: "Specialized wind turbine component and modular industrial machinery transport across DACH region. Heavy low-bed Goldhofer trailers.",
      tags: [
        "Heavy & Abnormal Transport",
        "Bf3/Bf4 Escort Coordination",
        "Goldhofer Multi-Axle",
        "Overweight Permits",
      ],
      tagStyles: [
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
      ],
      footerLeft: "Overtime Accruals • Escort Accompaniment",
      category: "CDL Class A / CE",
      hasVisa: true,
    },
    {
      id: 4,
      badge: "FLX",
      company: "FlixBus European Transit",
      posted: "Posted 1d ago",
      title: "Long-Distance Passenger Coach Captain (Class D / PCV)",
      location: "Frankfurt / Munich Hub, Germany 🌐",
      salary: "€3,600 - €4,600 / mo + Overnight Stays",
      desc: "Scheduled cross-border express passenger services. High comfort Setra & Neoplan coaches. Digital tachograph driver card and clean driving record required.",
      tags: [
        "Passenger Transit Class D",
        "Digital Driver Card",
        "International Routes",
        "Accompanied Roster",
      ],
      tagStyles: [
        "bg-secondary-fixed/50 text-on-secondary-fixed",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
      ],
      footerLeft: "Hotel Accommodations • Roster Bonus",
      category: "Coach & Bus Class D",
      hasVisa: false,
    },
    {
      id: 5,
      badge: "MSC",
      company: "Mediterranean Shipping Co. Drayage",
      posted: "Posted 1d ago",
      title: "Port Terminal Container Drayage & Intermodal Trucker",
      location: "Hamburg Port Mega-Terminal, Germany 🌐",
      salary: "€44,000 - €58,000 / yr",
      desc: "Shuttle and drayage container movements between port terminals and inland dry ports. Predictable day-shifts and home daily schedule.",
      tags: [
        "Port Drayage & Rail",
        "Daily Home Roster",
        "Container Chassis",
        "Port Access Pass (ZAPP)",
      ],
      tagStyles: [
        "bg-surface-container text-on-surface-variant",
        "bg-primary-fixed/40 text-on-primary-fixed-variant",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
      ],
      footerLeft: "Home Every Night • Fixed 8h Shifts",
      category: "Port Drayage & Intermodal",
      hasVisa: true,
    },
    {
      id: 6,
      badge: "FDX",
      company: "FedEx Express Europe",
      posted: "Posted 2d ago",
      title: "Regional Line-Haul B-Double & Swap-Body Fleet Lead",
      location: "Paris Charles de Gaulle / Lille Hub, France 🌐",
      salary: "€46,000 - €60,000 / yr + Night Bonus",
      desc: "Night trunking swap-body operations between regional sorting hubs. B-double trailer maneuver proficiency and electronic proof of delivery management.",
      tags: [
        "Swap-Body (Wechselbrücke)",
        "Night Trunking",
        "Tachograph Master",
        "Hub-to-Hub Linehaul",
      ],
      tagStyles: [
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
        "bg-surface-container text-on-surface-variant",
      ],
      footerLeft: "Night Premium • Dedicated Modern Rig",
      category: "CDL Class A / CE",
      hasVisa: true,
    },
  ];

  const filteredJobs = jobsList.filter((job) => {
    if (activeFilter === "All Transport") return true;
    if (activeFilter === "Visa Sponsorship Available") return job.hasVisa;
    return job.category === activeFilter;
  });

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col font-body-md text-body-md">
      <Header />

      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Utility Sub-Header & Breadcrumb Bar */}
          <section className="w-full bg-surface-container-lowest shadow-sm">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-on-surface font-semibold">Driving &amp; Transportation</span>
              </nav>
              <div className="flex items-center gap-space-xs">
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary bg-primary-fixed/30 px-space-sm py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    sync
                  </span>
                  Live Exchange Rates • Updated 8m ago
                </span>
              </div>
            </div>
          </section>

          {/* Hero & Discovery Command Section */}
          <section className="w-full relative overflow-hidden bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg relative z-10">
              {/* Top Row Badges & Sector Status */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="inline-flex items-center gap-space-xs bg-primary/10 text-primary px-space-sm py-1 rounded-full w-fit">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span className="font-label-sm text-label-sm tracking-wider uppercase">
                    Global Mobility &amp; Logistics Exchange
                  </span>
                </div>
                <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-xs rounded-full shadow-sm w-fit">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                  <span className="font-label-lg text-label-lg font-bold text-on-surface">
                    29,480+ Verified Transport &amp; Logistics Vacancies
                  </span>
                </div>
              </div>

              {/* Main Headline Block */}
              <div className="flex flex-col gap-space-xs max-w-4xl">
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Driving, Logistics &amp; Commercial Transportation Jobs &amp; Career Pathways
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Find verified transport &amp; freight roles worldwide — from international long-haul CDL Class A / CE truck drivers and hazmat specialists to port container operators, delivery fleet leads, and cross-border logistics dispatchers.
                </p>
              </div>

              {/* Advanced Search Bar Multi-Part Card */}
              <div className="w-full bg-surface-container-lowest p-space-sm md:p-space-md rounded-xl shadow-md">
                <form
                  className="grid grid-cols-1 lg:grid-cols-12 gap-space-sm items-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Keyword input */}
                  <div className="lg:col-span-6 flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-sm rounded-lg">
                    <span className="material-symbols-outlined text-on-surface-variant text-[22px]">search</span>
                    <input
                      className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                      placeholder="Commercial driver, heavy vehicle, freight, ADR hazmat, CDL A, bus..."
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  {/* Location selector */}
                  <div className="lg:col-span-3 flex items-center justify-between bg-surface-container-low px-space-md py-space-sm rounded-lg cursor-pointer">
                    <div className="flex items-center gap-space-xs truncate">
                      <span className="material-symbols-outlined text-on-surface-variant text-[22px]">public</span>
                      <span className="font-body-md text-body-md text-on-surface truncate">{locationQuery}</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">expand_more</span>
                  </div>
                  {/* Submit Button */}
                  <div className="lg:col-span-3">
                    <button
                      className="w-full inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary py-space-sm px-space-md rounded-lg font-label-lg text-label-lg transition-all shadow-sm cursor-pointer"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">search</span>
                      <span>Find Transportation Jobs</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Trust Indicators strip */}
              <div className="flex flex-wrap items-center gap-y-space-xs gap-x-space-lg pt-space-xs text-on-surface-variant font-label-md text-label-md">
                <span className="flex items-center gap-1.5 text-on-surface font-semibold">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  29,400+ Active Transport Openings
                </span>
                <span className="flex items-center gap-1.5 text-on-surface font-semibold">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  100% CDL / Code 95 &amp; CPC Certified Compliance
                </span>
                <span className="flex items-center gap-1.5 text-on-surface font-semibold">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  Cross-Border License Mutual Recognition (EU / US / GCC / UK)
                </span>
              </div>
            </div>
          </section>

          {/* Sub-Specialties & Vocational Categories (4x2 Grid) */}
          <section className="w-full py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Specialized Sectors
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    Driving &amp; Fleet Disciplines
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  Explore specialized licenses, required endorsements, and compensation bands across global freight corridors.
                </p>
              </div>

              {/* 8-Card Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {disciplines.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                  >
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                          <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                        </div>
                        <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm">
                          {item.jobs}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mt-space-xs">
                        {item.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-sm mt-space-md pt-space-sm bg-surface-container-low p-space-xs rounded-lg">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Avg Base Band</span>
                        <span className="font-semibold text-on-surface">{item.band}</span>
                      </div>
                      <Link
                        className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-bold group-hover:translate-x-1 transition-transform"
                        href={item.href || "/find-jobs"}
                      >
                        <span>Explore Roles</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Live Dispatch Feed — Verified Openings in Driving & Transportation */}
          <section className="w-full py-space-xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
              {/* Section Header with Meta & Counter */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Live Dispatch Feed
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    Verified Openings in Commercial Driving &amp; Freight
                  </h2>
                </div>
                <div className="font-label-lg text-label-lg text-on-surface-variant bg-surface-container-lowest px-space-md py-space-xs rounded-full shadow-sm w-fit">
                  Showing <span className="text-on-surface font-bold">{filteredJobs.length}</span> of{" "}
                  <span className="text-primary font-bold">29,480+</span> Verified Positions
                </div>
              </div>

              {/* Filter Pills Bar */}
              <div className="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none">
                {[
                  "All Transport",
                  "CDL Class A / CE",
                  "ADR Hazmat Tanker",
                  "Port Drayage & Intermodal",
                  "Coach & Bus Class D",
                ].map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-space-md py-space-xs rounded-full font-label-sm text-label-sm whitespace-nowrap shadow-sm transition-colors cursor-pointer ${
                      activeFilter === category
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {category}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setActiveFilter(
                      activeFilter === "Visa Sponsorship Available"
                        ? "All Transport"
                        : "Visa Sponsorship Available"
                    )
                  }
                  className={`px-space-md py-space-xs rounded-full font-label-sm text-label-sm whitespace-nowrap shadow-sm flex items-center gap-1 transition-colors cursor-pointer ${
                    activeFilter === "Visa Sponsorship Available"
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-lowest text-primary hover:bg-primary-fixed/20"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
                  Visa Sponsorship Available
                </button>
              </div>

              {/* Job Cards 2x3 Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md"
                  >
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-start justify-between gap-space-sm">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface">
                            {job.badge}
                          </div>
                          <div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              {job.company} • {job.posted}
                            </div>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                              {job.title}
                            </h3>
                          </div>
                        </div>
                        <button
                          aria-label="Bookmark job"
                          onClick={() => toggleBookmark(job.id)}
                          className={`transition-colors cursor-pointer ${
                            bookmarkedJobs[job.id]
                              ? "text-primary"
                              : "text-outline hover:text-primary"
                          }`}
                        >
                          <span
                            className="material-symbols-outlined text-[24px]"
                            style={{
                              fontVariationSettings: bookmarkedJobs[job.id] ? "'FILL' 1" : "'FILL' 0",
                            }}
                          >
                            bookmark
                          </span>
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-space-md text-on-surface-variant font-label-md text-label-md pt-space-xs">
                        <span className="flex items-center gap-1 text-on-surface font-semibold">
                          <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-primary font-bold">
                          <span className="material-symbols-outlined text-primary text-[18px]">payments</span>
                          {job.salary}
                        </span>
                      </div>

                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {job.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-space-xs">
                        {job.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`px-space-xs py-0.5 rounded-full font-label-sm text-label-sm ${job.tagStyles[tIdx]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-space-sm bg-surface-container-low px-space-md py-space-xs rounded-lg">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {job.footerLeft}
                      </span>
                      <Link
                        className="inline-flex items-center gap-1 bg-primary hover:bg-primary-container text-on-primary px-space-md py-1.5 rounded-lg font-label-sm text-label-sm transition-colors cursor-pointer"
                        href="/find-jobs"
                      >
                        <span>View Position</span>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Action */}
              <div className="flex justify-center pt-space-md">
                <Link
                  href="/find-jobs"
                  className="inline-flex items-center gap-space-xs bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-lg text-label-lg px-space-xl py-space-sm rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <span>Load More Driving Positions</span>
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Global Commercial Driving License & Credential Equivalence (Dark Navy Banner) */}
          <section className="w-full bg-[#11243E] text-on-primary py-space-xl">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
              {/* Banner Title Block */}
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="font-label-sm text-label-sm text-primary-fixed tracking-wider uppercase font-bold">
                  Global Mobility &amp; Driver Licensing Framework
                </span>
                <h2 className="font-headline-xl text-headline-xl text-white">
                  International Commercial Driving License &amp; Code 95 Equivalence
                </h2>
                <p className="font-body-md text-body-md text-slate-300">
                  Jobzeta provides automated license mapping and statutory verification across major transportation authorities worldwide. Discover how your commercial credentials transfer across borders.
                </p>
              </div>

              {/* 4-Column Equivalence Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Region 1: North America */}
                <div className="bg-[#172F50] p-space-md rounded-xl flex flex-col justify-between gap-space-md shadow-sm">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary-fixed font-bold">NORTH AMERICA</span>
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">badge</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-white font-bold">
                      CDL Class A &amp; Endorsements
                    </h3>
                    <p className="font-body-sm text-body-sm text-slate-300">
                      Commercial Driver License with Air Brakes, Combination Vehicles, Hazmat (H/X), Tanker (N), and Doubles/Triples (T). FMCSA &amp; DOT Clearinghouse compliant.
                    </p>
                  </div>
                  <div className="pt-space-sm bg-[#1F3D66] px-space-sm py-1.5 rounded-lg">
                    <span className="font-label-sm text-label-sm text-primary-fixed font-semibold">
                      Equiv: EU Category CE / UK Class 1 (HGV)
                    </span>
                  </div>
                </div>

                {/* Region 2: EU & UK */}
                <div className="bg-[#172F50] p-space-md rounded-xl flex flex-col justify-between gap-space-md shadow-sm">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary-fixed font-bold">EUROPEAN UNION &amp; UK</span>
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">verified_user</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-white font-bold">
                      EU Category CE + Code 95 / CPC
                    </h3>
                    <p className="font-body-sm text-body-sm text-slate-300">
                      Driver Certificate of Professional Competence (Driver CPC / Code 95), Digital Tachograph Smart Card Gen 2, and ADR Dangerous Goods Vocational Training.
                    </p>
                  </div>
                  <div className="pt-space-sm bg-[#1F3D66] px-space-sm py-1.5 rounded-lg">
                    <span className="font-label-sm text-label-sm text-primary-fixed font-semibold">
                      Equiv: US CDL A + Hazmat / Australia MC
                    </span>
                  </div>
                </div>

                {/* Region 3: Australia & NZ */}
                <div className="bg-[#172F50] p-space-md rounded-xl flex flex-col justify-between gap-space-md shadow-sm">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary-fixed font-bold">AUSTRALIA &amp; NEW ZEALAND</span>
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">directions_subway</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-white font-bold">
                      Heavy Combination (HC) / Multi-Combination (MC)
                    </h3>
                    <p className="font-body-sm text-body-sm text-slate-300">
                      Road train, B-double, and heavy combination articulated vehicle heavy vehicle competency with BFM (Basic Fatigue Management) compliance.
                    </p>
                  </div>
                  <div className="pt-space-sm bg-[#1F3D66] px-space-sm py-1.5 rounded-lg">
                    <span className="font-label-sm text-label-sm text-primary-fixed font-semibold">
                      Equiv: US CDL A Doubles / EU CE Modular
                    </span>
                  </div>
                </div>

                {/* Region 4: GCC & Middle East */}
                <div className="bg-[#172F50] p-space-md rounded-xl flex flex-col justify-between gap-space-md shadow-sm">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary-fixed font-bold">GCC &amp; MIDDLE EAST</span>
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">fire_truck</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-white font-bold">
                      Heavy Vehicle &amp; Trailer Transport License
                    </h3>
                    <p className="font-body-sm text-body-sm text-slate-300">
                      Certified heavy articulated trailer operator credentials with Aramco / ADNOC industrial site clearance and defensive desert driving accreditation.
                    </p>
                  </div>
                  <div className="pt-space-sm bg-[#1F3D66] px-space-sm py-1.5 rounded-lg">
                    <span className="font-label-sm text-label-sm text-primary-fixed font-semibold">
                      Fast-Track Recognition on Jobzeta
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Callout */}
              <div className="bg-[#172F50] p-space-md rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-fixed">
                    <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
                  </div>
                  <p className="font-body-md text-body-md text-slate-200">
                    Holding a foreign commercial driving license? Our automated verification engine maps your driving experience and licenses to target country standards.
                  </p>
                </div>
                <Link
                  className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-lg whitespace-nowrap transition-colors cursor-pointer"
                  href="/find-jobs"
                >
                  <span>Verify Your Driving Credentials</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Top Hiring Employers in Commercial Transportation & Logistics */}
          <section className="w-full py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Enterprise Carriers
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    Top Logistics &amp; Transportation Employers Worldwide
                  </h2>
                </div>
                <Link
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-bold hover:underline"
                  href="/companies"
                >
                  <span>View All 650+ Transport Employers</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

              {/* 5 Employer Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
                {/* Employer 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface">
                      DHL
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        DHL Supply Chain
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Global Freight &amp; Contract Logistics
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pt-space-xs">
                    <span className="font-label-sm text-label-sm text-primary font-bold">420 Active Roles</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Relocation Support: Yes
                    </span>
                  </div>
                </div>

                {/* Employer 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface">
                      DSV
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        DSV Global
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Road Freight &amp; Intermodal
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pt-space-xs">
                    <span className="font-label-sm text-label-sm text-primary font-bold">315 Active Roles</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Relocation Support: Yes
                    </span>
                  </div>
                </div>

                {/* Employer 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface">
                      KN
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Kuehne+Nagel
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Overland &amp; Reefer Network
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pt-space-xs">
                    <span className="font-label-sm text-label-sm text-primary font-bold">280 Active Roles</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Relocation Support: Yes
                    </span>
                  </div>
                </div>

                {/* Employer 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface">
                      DBS
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        DB Schenker
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        European Linehaul &amp; Logistics
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pt-space-xs">
                    <span className="font-label-sm text-label-sm text-primary font-bold">240 Active Roles</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Relocation Support: Yes
                    </span>
                  </div>
                </div>

                {/* Employer 5 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface">
                      MSK
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Maersk Linehaul
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Intermodal &amp; Cold Chain
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pt-space-xs">
                    <span className="font-label-sm text-label-sm text-primary font-bold">195 Active Roles</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Relocation: Direct Sponsor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Candidate FAQs & Driver Licensing Accordions */}
          <section className="w-full py-space-xl bg-surface-container-low">
            <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
              <div className="flex flex-col items-center text-center gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Driver Career Guidance
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Vocational FAQs &amp; Cross-Border Driving Regulations
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  Clear answers on Code 95 periodic training, cross-border CDL conversions, tachograph rules, and living accommodations.
                </p>
              </div>

              {/* Clean Expandable Accordions */}
              <div className="flex flex-col gap-space-sm w-full">
                {/* Accordion 1 */}
                <details className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm group" open>
                  <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface cursor-pointer select-none list-none font-semibold">
                    <span>How does Jobzeta verify international CDL licenses and Code 95 / CPC qualifications?</span>
                    <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="pt-space-md font-body-md text-body-md text-on-surface-variant border-t border-surface-container mt-space-sm">
                    Jobzeta operates automated API integrations with statutory transportation databases, including the EU RESPER (European Driving Licence Network) registry and North American FMCSA Clearinghouse. Candidates submit high-resolution scans of their front and back commercial card, digital tachograph card, and Driver Qualification Card (DQC). Our credential integrity unit verifies validity dates, medical certifications, and periodic training compliance within 24 hours.
                  </div>
                </details>

                {/* Accordion 2 */}
                <details className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm group">
                  <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface cursor-pointer select-none list-none font-semibold">
                    <span>Can I secure an international long-haul truck driving position with employer visa sponsorship?</span>
                    <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="pt-space-md font-body-md text-body-md text-on-surface-variant border-t border-surface-container mt-space-sm">
                    Yes. Given acute shortages of heavy commercial drivers across North America, Western Europe, and the United Kingdom, certified heavy articulated vehicle operators qualify under critical skills shortage visa programs. Verified employer partners on Jobzeta regularly sponsor work permits (such as the UK Skilled Worker Visa or Canadian LMIA work permits) for drivers meeting national language and road competency standards.
                  </div>
                </details>

                {/* Accordion 3 */}
                <details className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm group">
                  <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface cursor-pointer select-none list-none font-semibold">
                    <span>What are the standard accommodation, rest periods, and equipment packages provided to drivers?</span>
                    <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="pt-space-md font-body-md text-body-md text-on-surface-variant border-t border-surface-container mt-space-sm">
                    Under international mobility regulations (such as the EU Mobility Package I), regular weekly rest periods of 45+ hours must be taken in certified hotel accommodation paid for by the transport carrier, rather than inside the vehicle cabin. Premium carriers featured on Jobzeta equip their long-haul linehaul rigs with stationary auxiliary air conditioning, independent sleeper heating, high-comfort berths, and paid cell roaming allowances.
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Employer Callout Banner */}
          <section className="w-full py-space-xl bg-surface-container-high">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg md:p-space-xl shadow-md flex flex-col lg:flex-row items-center justify-between gap-space-lg">
                <div className="flex items-center gap-space-md">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[36px]">local_shipping</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                      Are You a Freight Carrier or Logistics Operator Hiring Commercial Drivers?
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                      Dispatch urgent driver requisitions across 140+ countries. Screen verified CDL Class A, CE, and ADR hazmat drivers with pre-checked license compliance and background records.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0 w-full lg:w-auto">
                  <Link
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg transition-colors shadow-sm cursor-pointer"
                    href="/post-a-job"
                  >
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                    <span>Post a Driver Job</span>
                  </Link>
                  <Link
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg transition-colors cursor-pointer"
                    href="/companies"
                  >
                    <span>Enterprise Fleet Solutions</span>
                  </Link>
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
