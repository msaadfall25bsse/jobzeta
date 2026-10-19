"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AviationCargoAndAirportRampPage() {
  const [keyword, setKeyword] = useState("");
  const [equipmentType, setEquipmentType] = useState("All Apron & Ground Support Equipment");
  const [airportHub, setAirportHub] = useState("Airport Hub: All Gateways (AMS, FRA, CDG, LHR, LEJ)");
  const [certification, setCertification] = useState("Airside Driver Permit (ADP) / IATA DGR");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      {/* Interactive Style Helpers for Mission Hover Card Drawer */}
      <style jsx global>{`
        .mission-hover-card .mission-drawer {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 450ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mission-hover-card:hover .mission-drawer {
          max-height: 380px;
          opacity: 1;
        }
        .mission-hover-card:hover .arrow-rotate {
          transform: translateX(4px);
        }
      `}</style>

      {/* Global Jobzeta Responsive Header */}
      <Header />

      <main className="w-full pt-16 sm:pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* 1. Top Utility Header / Breadcrumbs & Live Pulse */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-sm bg-surface-container-lowest border-b border-surface-container-high/60">
            <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant flex-wrap"
              >
                <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  <span>Home</span>
                </Link>
                <span className="text-outline-variant">/</span>
                <Link className="hover:text-primary transition-colors" href="/categories/driving-and-transportation">
                  Driving &amp; Transportation
                </Link>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface font-bold text-primary">
                  Aviation Cargo &amp; Airport Ramp Ground Support Operations
                </span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm shadow-sm w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="font-bold text-on-surface">Live Sector Yields</span>
                <span className="text-outline-variant">•</span>
                <span>Requisitions Updated 3m Ago</span>
              </div>
            </div>
          </section>

          {/* 2. Header Section with Continental Benchmark */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-surface">
            <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row lg:items-start justify-between gap-space-xl">
              <div className="flex-1 flex flex-col gap-space-md">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/15 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px]">flight_land</span>
                    AIR CARGO LOGISTICS &amp; IATA RAMP SAFETY
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px]">verified_user</span>
                    ICAO ANNEX 14 &amp; EASA AIRPORT APRON COMPLIANT
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-headline-xl font-headline-xl text-on-surface tracking-tight font-bold max-w-4xl">
                  Aviation Cargo, Airport Ramp &amp; Air Freight Ground Support Operations
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                  Connecting certified airport apron tractor operators, widebody main-deck high-loader specialists, and dangerous goods air freight logistics handlers across Europe&apos;s leading international cargo hubs.
                </p>
                <div className="flex flex-wrap items-center gap-space-lg pt-space-xs text-on-surface-variant font-label-md text-label-md">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-body-lg">radar</span>
                    24/7 Apron Dispatches Active
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-body-lg">shield</span>
                    100% Background Check Validated
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-body-lg">local_shipping</span>
                    Main-Deck, Lower-Deck &amp; GSE Certified
                  </span>
                </div>
              </div>

              {/* Continental Benchmark Card */}
              <div className="w-full lg:w-80 shrink-0 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-high/60 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-space-sm">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    Continental Benchmark
                  </span>
                  <span className="p-1.5 rounded bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-body-md">trending_up</span>
                  </span>
                </div>
                <div>
                  <div className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                    €46,200 <span className="font-body-md text-body-md font-normal text-on-surface-variant">/ yr</span>
                  </div>
                  <p className="font-label-md text-label-md text-on-surface-variant mt-1">
                    Avg. Continental Aviation Cargo Yield
                  </p>
                </div>
                <div className="mt-space-md pt-space-md bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant">Ramp Airside Endorsement</span>
                    <span className="text-primary font-bold bg-primary-fixed/40 px-2 py-0.5 rounded-full">+19.2%</span>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant">Active Hub Openings</span>
                    <span className="text-on-surface font-bold">284 Posts</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Search & Multi-Facet Filter Bar */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl bg-surface">
            <div className="max-w-[1920px] mx-auto bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high/60">
              <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-sm" onSubmit={(e) => e.preventDefault()}>
                {/* Keyword Search */}
                <div className="flex items-center bg-surface-container-low rounded-lg px-space-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-body-lg">search</span>
                  <input
                    className="w-full bg-transparent border-0 px-2.5 py-3 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                    placeholder="Equipment type, Trepel High-Loader, Goldhofer Tug, Schiphol AMS..."
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                {/* Equipment Category Dropdown */}
                <div className="flex items-center bg-surface-container-low rounded-lg px-space-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-body-lg">forklift</span>
                  <select
                    className="w-full bg-transparent border-0 px-2.5 py-3 font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer"
                    value={equipmentType}
                    onChange={(e) => setEquipmentType(e.target.value)}
                  >
                    <option>All Apron &amp; Ground Support Equipment</option>
                    <option>Main-Deck Cargo High-Loaders (Champ 350 / 140)</option>
                    <option>Electric Baggage &amp; Cargo Tow Tractors</option>
                    <option>ULD Transporters &amp; Container Dollies</option>
                    <option>Aircraft Pushback Tugs (Flyer / Bison)</option>
                    <option>Belt Loaders &amp; Lower-Deck Conveyors</option>
                  </select>
                </div>
                {/* Airport Cargo Hub Dropdown */}
                <div className="flex items-center bg-surface-container-low rounded-lg px-space-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-body-lg">pin_drop</span>
                  <select
                    className="w-full bg-transparent border-0 px-2.5 py-3 font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer"
                    value={airportHub}
                    onChange={(e) => setAirportHub(e.target.value)}
                  >
                    <option>Airport Hub: All Gateways (AMS, FRA, CDG, LHR, LEJ)</option>
                    <option>Amsterdam Airport Schiphol (AMS)</option>
                    <option>Frankfurt Airport CargoCity (FRA)</option>
                    <option>Paris Charles de Gaulle (CDG)</option>
                    <option>London Heathrow Airport (LHR)</option>
                    <option>Leipzig/Halle Cargo Hub (LEJ)</option>
                    <option>Brussels Airport Brucargo (BRU)</option>
                  </select>
                </div>
                {/* Airside Certification Dropdown & Filter Submit */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-surface-container-low rounded-lg px-space-sm flex-1 min-w-0">
                    <span className="material-symbols-outlined text-on-surface-variant text-body-lg shrink-0">badge</span>
                    <select
                      className="w-full bg-transparent border-0 px-2 py-3 font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer truncate"
                      value={certification}
                      onChange={(e) => setCertification(e.target.value)}
                    >
                      <option>Airside Driver Permit (ADP) / IATA DGR</option>
                      <option>ADP Stage 3 (Apron &amp; Stand Manoeuvring)</option>
                      <option>IATA Dangerous Goods Cat 6 (Initial/Recurrent)</option>
                      <option>TSO C90c ULD Net Restraint Certification</option>
                      <option>EASA Part-145 Ramp Safety &amp; Pushback</option>
                    </select>
                  </div>
                  <button
                    className="px-space-md py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors flex items-center justify-center shadow-sm shrink-0 cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-body-lg sm:mr-1">tune</span>
                    <span className="hidden sm:inline">Filter Feed</span>
                  </button>
                </div>
              </form>
              {/* Trending Filter Badges */}
              <div className="flex items-center gap-2 mt-space-md pt-space-sm flex-wrap font-label-sm text-label-sm border-t border-surface-container-high/40">
                <span className="text-on-surface-variant font-bold">Trending Requisitions:</span>
                {[
                  "IATA Cargo DGR Cat 6",
                  "Airside Driver Permit (ADP)",
                  "Widebody Main-Deck Loader",
                  "ULD Pallet Rigging",
                  "EASA Part-145 Ramp Safety",
                ].map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setKeyword(tag)}
                    className="px-2.5 py-1 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Operational Disciplines (3 Specialized Cards) */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl bg-surface">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Airside Job Classifications
                  </span>
                  <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface font-bold">
                    Operational Ramp &amp; Cargo Disciplines
                  </h2>
                </div>
                <span className="hidden sm:inline-flex text-on-surface-variant font-label-md text-label-md">
                  Categorized by Equipment Rating &amp; Clearance Level
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg">
                {/* Discipline Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group border border-surface-container-high/60">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-headline-sm">vertical_align_top</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-primary-container/15 text-primary font-label-sm text-label-sm font-bold">
                        118 Open Positions
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Widebody Main-Deck High-Loader Operator
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Precision maneuvering of heavy self-propelled loader platforms (Trepel Champ 350 / 140 / Lödige) for Boeing 777F, 747-8F, and Airbus A330-200F main-deck and lower-deck cargo transfers up to 5.6m elevation.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between text-on-surface font-label-md text-label-md">
                      <span className="text-on-surface-variant">Annual Compensation Range:</span>
                      <span className="font-bold text-on-surface">€42,000 – €56,000</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-label-md text-primary">check_circle</span>
                      <span>Requires ADP Stage 3 + Heavy GSE Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Discipline Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group border border-surface-container-high/60">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-secondary-container/30 text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-headline-sm">electric_rickshaw</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm font-bold">
                        96 Open Positions
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors">
                      Electric Apron Tow Tractor &amp; ULD Tug Driver
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Ramp train towing operations using zero-emission heavy-duty tow tractors (Goldhofer, Charlatte, Linde P250). Maneuvering multi-dolly strings loaded with PMC/AKE containers along designated apron geofenced corridors.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between text-on-surface font-label-md text-label-md">
                      <span className="text-on-surface-variant">Annual Compensation Range:</span>
                      <span className="font-bold text-on-surface">€38,000 – €49,500</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-label-md text-primary">check_circle</span>
                      <span>ADP Stage 2/3 + Ramp Telemetry Safety Briefing</span>
                    </div>
                  </div>
                </div>

                {/* Discipline Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group border border-surface-container-high/60">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-tertiary-fixed/60 text-tertiary flex items-center justify-center">
                        <span className="material-symbols-outlined text-headline-sm">balance</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-tertiary-container/20 text-on-tertiary-container font-label-sm text-label-sm font-bold">
                        70 Open Positions
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-tertiary transition-colors">
                      Air Freight Ramp Dispatch &amp; Weight/Balance Lead
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Overseeing real-time turnarounds, cargo bay load sequencing, hazardous goods compatibility segregation (IATA DGR Cat 6), and center-of-gravity (CG) load sheet sign-off alongside airline flight operations officers.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between text-on-surface font-label-md text-label-md">
                      <span className="text-on-surface-variant">Annual Compensation Range:</span>
                      <span className="font-bold text-on-surface">€46,000 – €62,000</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-label-md text-primary">check_circle</span>
                      <span>IATA DGR 6 + Aircraft Trim &amp; Load Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Featured Intralogistics/Apron Mission Card (Interactive Hover-Reveal Drawer) */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl bg-surface">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    High Priority Requisition
                  </span>
                  <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface font-bold">
                    Featured Airside Ramp Mission
                  </h2>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-high px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Fast-Track Apron Pass Processing</span>
                </div>
              </div>

              {/* Main Mission Card with Hover & Click Interaction */}
              <div
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className="mission-hover-card bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-surface-container-high/60"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Hero Photo with Real-world Details */}
                  <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-[460px] overflow-hidden">
                    <img
                      alt="Aviation cargo ramp specialist standing in high-visibility safety clothing with headset next to a yellow Trepel electric tow tractor and widebody cargo freight airplane on Amsterdam Schiphol wet apron tarmac at dusk"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTurpMbPydb1FmosxTUq2i55GMq0RIDsKpNfRCsXHx6hKM7ZpjJy90GFedqE0gYtBi7Ixuhjv3wOrHWT8dyskvlRcCy2E9bZD8XSemBHnQMH9KWqPg3qsE-E25mOU_C6kyhcWirguJrRZ9hpKz4_4tXn9EksKXUNdL7cZcHBxRuAOdUI8eViK8BZkOKEskMu9yzD09kBncUwm2mtxYpbh6nmoR3HTzX9DAPoshyAb-Ag4jHVm3XLyljA"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/90 via-on-secondary-fixed/30 to-transparent"></div>
                    {/* Badges Floating Over Image */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-md">
                        <span className="material-symbols-outlined text-[14px]">flag</span>
                        FEATURED AIRSIDE MISSION
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm">
                        Tier-1 Ground Handler
                      </span>
                    </div>
                    {/* Airport Stamp Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
                      <div>
                        <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                          Amsterdam Schiphol Airport (AMS)
                        </p>
                        <p className="font-headline-sm text-headline-sm font-bold">Cargo Apron Stand C32</p>
                        <p className="font-body-sm text-body-sm opacity-85">Swissport / KLM Cargo Partner Ramp Operations</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary-fixed/40">
                        <span className="material-symbols-outlined text-primary-fixed text-headline-sm">flight</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Details Container */}
                  <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between">
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                          REQ #AMS-9140-AV • ACTIVE AIRSIDE DISPATCH
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                          Full-Time Shift Schedule
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
                        Senior Airport Ramp Cargo Tug &amp; Widebody High-Loader Specialist
                      </h3>
                      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                        <span className="material-symbols-outlined text-primary text-body-lg">apartment</span>
                        <span className="font-semibold text-on-surface">Swissport International AG</span>
                        <span>•</span>
                        <span>Amsterdam Airport Schiphol (AMS) Freight Terminal 3</span>
                      </div>
                      {/* Badges Array */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-space-xs">
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                          Airside Driver Permit (ADP Tier 3)
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                          Trepel Champ 140 &amp; Electric Tug
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                          IATA Cargo DGR Certified
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-primary-container/15 text-primary font-label-sm text-label-sm font-bold">
                          Aviation Security Screening Checked
                        </span>
                      </div>
                      {/* Compensation Matrix */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mt-space-sm bg-surface-container-low rounded-xl p-space-md">
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Approved Tariff</span>
                          <div className="font-headline-sm text-headline-sm font-bold text-on-surface">€42,500 – €56,800</div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Annual Base (CLA Parity)</span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Shift Premiums</span>
                          <div className="font-headline-sm text-headline-sm font-bold text-primary">+ €18.50 / day</div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Late &amp; night apron differential</span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Safety Incentive</span>
                          <div className="font-headline-sm text-headline-sm font-bold text-secondary">+ €300 / mo</div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Zero-aircraft-contact bonus</span>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Hover-Reveal Drawer */}
                    <div className={`mission-drawer mt-space-md ${mobileDrawerOpen ? "max-h-[500px]! opacity-100!" : ""}`}>
                      <div className="pt-space-md flex flex-col gap-space-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                          <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm border border-surface-container-high/60">
                            <span className="font-label-sm text-label-sm font-bold text-primary flex items-center gap-1 mb-1">
                              <span className="material-symbols-outlined text-label-md">straighten</span>
                              Airside Geometry &amp; Apron Corridor
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              AMS Schiphol Cargo Apron Zone C • 180 ULD Containers / Shift • High-speed apron roadway protocol (max 25 km/h, aircraft stand 5 km/h) &amp; geofenced tug routing.
                            </p>
                          </div>
                          <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm border border-surface-container-high/60">
                            <span className="font-label-sm text-label-sm font-bold text-secondary flex items-center gap-1 mb-1">
                              <span className="material-symbols-outlined text-label-md">health_and_safety</span>
                              Safety &amp; IATA Clearance Mandate
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              ICAO Annex 14 &amp; EASA Ramp Directives • Zero aircraft fuselage contact tolerance, FOD walkdown compliance &amp; acoustic pushback warning systems active.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-space-md pt-space-xs flex-wrap">
                          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-primary text-body-md">schedule</span>
                            <span>Shift: 4 Days On (05:30-14:30 / 14:00-23:00) / 2 Days Off</span>
                          </div>
                          <div className="flex items-center gap-space-sm flex-wrap w-full sm:w-auto">
                            <Link
                              href="/jobs/senior-airport-ramp-cargo-tug-and-widebody-high-loader-specialist#requisition-form"
                              className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg transition-colors flex-1 sm:flex-none text-center"
                            >
                              Fast-Track Dispatch Apply
                            </Link>
                            <Link
                              href="/jobs/senior-airport-ramp-cargo-tug-and-widebody-high-loader-specialist"
                              className="px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1 shadow-sm flex-1 sm:flex-none text-center"
                            >
                              <span>View Full Instructions &amp; Technical Specs</span>
                              <span className="material-symbols-outlined text-body-md arrow-rotate transition-transform">arrow_forward</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hint on non-hovered state */}
                    <div className="pt-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-body-sm text-primary">mouse</span>
                        <span>Hover over card to inspect operational apron parameters &amp; apply directly</span>
                      </span>
                      <span className="font-bold text-primary flex items-center gap-0.5">
                        <span>Details &amp; Clearance Protocol</span>
                        <span className="material-symbols-outlined text-label-md">expand_more</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Standardized Safety Frameworks: Verification & Compliance Matrix */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl bg-surface">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Standardized Safety Frameworks
                </span>
                <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface font-bold">
                  Verification &amp; Compliance Matrix
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                  All aviation cargo specialists in the Jobzeta dispatch network are pre-verified against mandatory airport authority credentialing protocols prior to airside placement.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Matrix Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between border border-surface-container-high/60">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-headline-sm">badge</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Airside Driving Permit (ADP Stage 3)</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Full unescorted apron &amp; aircraft stand driving endorsement. Covers runway perimeter roads, stand boundaries, and speed telemetry regulations.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-primary font-bold flex items-center gap-1 border-t border-surface-container-high/40">
                    <span className="material-symbols-outlined text-label-md">verified</span>
                    <span>EASA Annex IV Verified</span>
                  </div>
                </div>

                {/* Matrix Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between border border-surface-container-high/60">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-error-container/40 text-error flex items-center justify-center">
                      <span className="material-symbols-outlined text-headline-sm">warning</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">IATA DGR Category 6 Endorsement</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Certification for accepting, handling, and loading Dangerous Goods. Includes lithium battery pallets, radioactive isotopes, and cryogenic dry-ice consignments.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-on-surface font-bold flex items-center gap-1 border-t border-surface-container-high/40">
                    <span className="material-symbols-outlined text-label-md text-primary">verified</span>
                    <span>IATA Valid (24 Mo Recurrent)</span>
                  </div>
                </div>

                {/* Matrix Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between border border-surface-container-high/60">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container/40 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-headline-sm">pallet</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">ULD Restraint &amp; Net Rigging (TSO C90c)</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      FAA and EASA standardized locking mechanisms, pallet net tensioning, and corner-lock verification to prevent in-flight air cargo shift.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1 border-t border-surface-container-high/40">
                    <span className="material-symbols-outlined text-label-md">verified</span>
                    <span>TSO C90c Load Master Compliant</span>
                  </div>
                </div>

                {/* Matrix Card 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between border border-surface-container-high/60">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/60 text-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-headline-sm">cleaning_services</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Apron FOD &amp; High-Vis Protocols</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Foreign Object Debris (FOD) mitigation sweep protocols, hearing defense guidelines, and EN ISO 20471 Class 3 high-visibility safety integration.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1 border-t border-surface-container-high/40">
                    <span className="material-symbols-outlined text-label-md">verified</span>
                    <span>ICAO Doc 9137 Part 8 Valid</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Approved Ground Handling Partners Ecosystem */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl bg-surface">
            <div className="max-w-[1920px] mx-auto bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md border border-surface-container-high/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    Contracted Ground Handling Employers
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Approved Airport Ramp Networks
                  </h3>
                </div>
                <Link className="font-label-md text-label-md text-primary font-bold hover:underline flex items-center gap-1" href="/find-jobs">
                  <span>View All 42 Airport Operators</span>
                  <span className="material-symbols-outlined text-label-md">chevron_right</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm items-center">
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col items-center justify-center text-center shadow-sm h-24 hover:bg-surface-container-high transition-colors">
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">swissport</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Global Hubs</span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col items-center justify-center text-center shadow-sm h-24 hover:bg-surface-container-high transition-colors">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight">dnata</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Air Cargo Intl</span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col items-center justify-center text-center shadow-sm h-24 hover:bg-surface-container-high transition-colors">
                  <span className="font-headline-sm text-headline-sm font-bold text-secondary tracking-tight">WFS</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Worldwide Flight</span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col items-center justify-center text-center shadow-sm h-24 hover:bg-surface-container-high transition-colors">
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">MENZIES</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Aviation Logistics</span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col items-center justify-center text-center shadow-sm h-24 hover:bg-surface-container-high transition-colors">
                  <span className="font-headline-sm text-headline-sm font-bold text-on-secondary-container tracking-tight">Lufthansa</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Cargo AG</span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col items-center justify-center text-center shadow-sm h-24 hover:bg-surface-container-high transition-colors">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary-container tracking-tight">KLM Cargo</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Air France-KLM</span>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Verified Intake CTA Banner */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl bg-surface">
            <div className="max-w-[1920px] mx-auto bg-gradient-to-r from-on-secondary-fixed via-secondary to-on-secondary-fixed rounded-2xl p-space-lg sm:p-space-xl text-on-primary shadow-xl relative overflow-hidden">
              {/* Decorative Backdrop Circles */}
              <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
              <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-secondary-fixed/15 blur-2xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
                <div className="flex-1 flex flex-col gap-space-sm text-center lg:text-left">
                  <span className="inline-flex self-center lg:self-start items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed/20 text-primary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px]">verified</span>
                    Immediate Dispatch Fast-Track
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-headline-xl font-headline-xl font-bold tracking-tight text-on-primary">
                    Hold an Airside Driver Permit (ADP) with Valid Aviation Background Check?
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl leading-relaxed">
                    Upload your airside license, airport security clearance badge, and IATA qualifications. Get matched with leading cargo handlers across Amsterdam, Frankfurt, Paris, and London within 24 hours.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full lg:w-auto">
                  <Link
                    href="/find-jobs"
                    className="w-full sm:w-auto px-space-lg py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-body-lg">upload_file</span>
                    <span>Register Airside Profile &amp; Apply</span>
                  </Link>
                  <Link
                    href="/find-jobs"
                    className="w-full sm:w-auto px-space-lg py-3.5 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-lg text-label-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-body-lg">support_agent</span>
                    <span>Speak to an Aviation Logistics Recruiter</span>
                  </Link>
                </div>
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
