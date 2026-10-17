"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DangerousGoodsHazmatTankerPage() {
  const [tankerSpec, setTankerSpec] = useState("Stainless 316L Pressurized");
  const [corridor, setCorridor] = useState("Antwerp & Rotterdam Europort");
  const [adrCert, setAdrCert] = useState("All Classes in Tanks (2-9)");
  const [emailAlert, setEmailAlert] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [isHoveredDirectives, setIsHoveredDirectives] = useState(false);

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailAlert.trim()) {
      setAlertSuccess(true);
      setTimeout(() => setAlertSuccess(false), 5000);
      setEmailAlert("");
    }
  };

  return (
    <div className="bg-[#f7fafe] font-sans text-[#181c1f] min-h-screen flex flex-col antialiased">
      <Header />

      <main className="w-full pt-16 flex-1 bg-[#f7fafe]">
        <div className="flex flex-col w-full">
          {/* Status & Directory Meta Bar */}
          <div className="w-full bg-[#f1f4f8] px-4 md:px-6 py-2.5 border-b border-[#e0e3e7]">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[#3d4947] text-xs font-semibold">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono bg-[#e0e3e7] text-[#3f5f8d] px-2 py-0.5 rounded font-bold tracking-wider">
                  DT-HM-ADR-9140
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#e0e3e7] text-[#00685f] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#00685f] animate-pulse"></span>
                  Live Hazmat Dispatch &amp; Telematics Active
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[#181c1f]">
                  <span className="material-symbols-outlined text-[15px] text-[#00685f]">verified</span>
                  ADR Class 1-9 &amp; US HAZMAT (H/X) Endorsement Verified
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#4f5d70]">sensors</span>
                  ARA Corridor Telemetry: 99.4% Latency Clear
                </span>
                <span className="font-mono text-[#4f5d70]">UTC 08:42:19</span>
              </div>
            </div>
          </div>

          {/* Breadcrumbs & Category Hero Area */}
          <section className="w-full bg-[#f7fafe] px-4 md:px-6 pt-6 pb-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs md:text-sm text-[#3d4947] flex-wrap font-medium">
                <Link className="hover:text-[#00685f] transition-colors" href="/">Home</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-[#00685f] transition-colors" href="/categories">Categories</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-[#00685f] transition-colors" href="/categories/driving-and-transportation">Driving &amp; Transportation</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-black font-bold">Dangerous Goods &amp; Hazmat Tanker (ADR)</span>
              </nav>

              {/* Title & Action Split Row */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-4xl flex flex-col gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded bg-[#3f5f8d]/10 text-[#3f5f8d] text-xs font-bold uppercase tracking-wider">
                      Vocational Sector: ADR &amp; Industrial Bulk
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#00685f]/10 text-[#00685f] text-xs font-bold uppercase tracking-wider">
                      Critical Supply Chain
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight">
                    Dangerous Goods, Petrochemical &amp; Hazmat Tanker Operations (ADR / Class 1-9)
                  </h1>
                  <p className="text-base sm:text-lg text-[#3d4947] leading-relaxed">
                    Certified Class CE and CDL Class A hazmat bulk chemical, cryogenic gas, and fuel tanker drivers operating across European chemical clusters (ARA ports, Ruhr, Rhône valley) and North American corridors.
                  </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: "Dangerous Goods & Hazmat Tanker Operations (ADR / Class 1-9)",
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Page URL copied to clipboard!");
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#e5e8ec] text-black text-sm font-semibold hover:bg-[#e0e3e7] transition-colors shadow-sm cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                    Share Hazmat Stream
                  </button>
                  <a
                    href="#subscribe-alerts"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#00685f] text-white text-sm font-bold hover:bg-[#008378] transition-colors shadow-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">notifications_active</span>
                    Set ADR Dispatch Alerts
                  </a>
                </div>
              </div>

              {/* KPI Statistics Cards (3 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* Metric Card 1 */}
                <div className="p-6 rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-[#3d4947] font-semibold">Active Hazmat Requisitions</span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mt-1">3,180</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">local_shipping</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#00685f] text-xs font-bold">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    <span>+22.4% MoM Specialized Chemical Fleet Demand</span>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="p-6 rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-[#3d4947] font-semibold">Average Global Wage Band</span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#3f5f8d] tracking-tight mt-1">€58k – €92k</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#3f5f8d]/10 text-[#3f5f8d] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">payments</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                    $64,000 – $102,000 USD eq. with danger pay multiplier, tank wash bonuses, and ADR night per diem.
                  </p>
                </div>

                {/* Metric Card 3 */}
                <div className="p-6 rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-[#3d4947] font-semibold">Compliance Gateways</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mt-1">ADR &amp; US (H/X)</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">verified_user</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                    ADR Tanker Certification (Classes 2-9) &amp; US Hazmat Endorsement (H/X) with FMCSA Background Check.
                  </p>
                </div>
              </div>

              {/* Advanced Technical Filter Strip */}
              <div className="p-4 rounded-xl bg-[#ebeef2] border border-[#e0e3e7] shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
                <div className="relative flex-1 min-w-[220px]">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#3d4947] text-[20px]">propane_tank</span>
                  <select
                    value={tankerSpec}
                    onChange={(e) => setTankerSpec(e.target.value)}
                    className="w-full h-11 pl-10 pr-8 bg-white border border-[#e0e3e7] text-black text-sm rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-[#00685f]"
                  >
                    <option>Tanker Spec: Stainless 316L Pressurized</option>
                    <option>Tanker Spec: Cryogenic IMO-4 (LNG/Liquid N2)</option>
                    <option>Tanker Spec: Bitumen Heated Tanker (220°C)</option>
                    <option>Tanker Spec: Gas LPG/Butane High Bar</option>
                    <option>Tanker Spec: Rubber-Lined Corrosive Class 8</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#3d4947] pointer-events-none text-[18px]">arrow_drop_down</span>
                </div>

                <div className="relative flex-1 min-w-[220px]">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#3d4947] text-[20px]">hub</span>
                  <select
                    value={corridor}
                    onChange={(e) => setCorridor(e.target.value)}
                    className="w-full h-11 pl-10 pr-8 bg-white border border-[#e0e3e7] text-black text-sm rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-[#00685f]"
                  >
                    <option>Corridor: Antwerp &amp; Rotterdam Europort</option>
                    <option>Corridor: Rhine-Ruhr &amp; Ludwigshafen Hub</option>
                    <option>Corridor: Rhône Chemical Corridor (Lyon - Fos)</option>
                    <option>Corridor: US Gulf Coast (Houston - Baton Rouge)</option>
                    <option>Corridor: Jurong Island &amp; Johor Cross-Border</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#3d4947] pointer-events-none text-[18px]">arrow_drop_down</span>
                </div>

                <div className="relative flex-1 min-w-[220px]">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#3d4947] text-[20px]">shield</span>
                  <select
                    value={adrCert}
                    onChange={(e) => setAdrCert(e.target.value)}
                    className="w-full h-11 pl-10 pr-8 bg-white border border-[#e0e3e7] text-black text-sm rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-[#00685f]"
                  >
                    <option>ADR Certificate: All Classes in Tanks (2-9)</option>
                    <option>ADR Certificate: Class 3 Flammables Exclusively</option>
                    <option>ADR Certificate: Class 2 Gases (Cryo + Compressed)</option>
                    <option>ADR Certificate: Class 6.1 Toxic &amp; Class 8 Corrosive</option>
                    <option>US CDL: Hazmat Endorsement (H) + Tanker (N)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#3d4947] pointer-events-none text-[18px]">arrow_drop_down</span>
                </div>

                <button
                  className="h-11 px-6 rounded-lg bg-[#00685f] text-white text-sm font-bold hover:bg-[#008378] transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">search</span>
                  Filter Corridors
                </button>
              </div>
            </div>
          </section>

          {/* Featured Technical Requisition Section (Interactive Reveal Mechanism) */}
          <section className="w-full px-4 md:px-6 py-10 bg-[#f1f4f8] border-y border-[#e0e3e7]">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-[#00685f] uppercase font-bold tracking-wider">Priority Enterprise Dispatch</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black">Featured Primary Requisition</h2>
                </div>
                <div className="flex items-center gap-2 text-[#3d4947] text-sm font-medium">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00685f]"></span>
                  Direct Dispatch from Tier-1 Chemical Terminal
                </div>
              </div>

              {/* EXACTLY 1 Primary Job Card with Interactive Hover Text Reveal */}
              <article className="group relative rounded-2xl bg-white border border-[#e0e3e7] shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
                  {/* Left Media Container (Image + Frosted Pills) */}
                  <div className="relative lg:col-span-5 h-72 lg:h-auto overflow-hidden">
                    <img
                      alt="ADR certified chemical road tanker driver inspecting pressure valves and telematics in high-visibility protective gear at a petrochemical terminal in Port of Antwerp."
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src="/adr-hazmat-tanker-hero.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181c1f]/90 via-[#181c1f]/30 to-transparent"></div>
                    
                    {/* Frosted Meta Badges */}
                    <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-black text-xs font-bold shadow-sm">
                        ADR Chemical &amp; Petrochemical
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-[#3d4947] font-mono text-xs shadow-sm font-semibold">
                        Ref: BY-ANT-HAZMAT-4412
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-[#00685f] text-white text-xs font-bold flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                        IMO-4 &amp; ADR Certified Tanker
                      </span>
                      <span className="text-white text-xs bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                        Updated 15m ago
                      </span>
                    </div>
                  </div>

                  {/* Right Content & Directives Container */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-5">
                    {/* Header Meta */}
                    <div className="flex flex-col gap-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-9 h-9 rounded-lg bg-[#3f5f8d] text-white flex items-center justify-center font-bold text-sm">DSV</span>
                          <div>
                            <h3 className="text-sm font-bold text-black">DSV Road &amp; Panalpina Tanker Division</h3>
                            <p className="text-xs text-[#3d4947]">Tier-1 ADR Bulk Fleet Operations • Posted 2h ago</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#00685f]/10 text-[#00685f] text-xs font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">verified</span>
                          Direct Carrier Requisition
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-black group-hover:text-[#00685f] transition-colors leading-snug">
                        Senior ADR Tanker Driver - Petrochemical &amp; Liquid Chemicals (Bulk Stainless Steel Road Tanker)
                      </h2>

                      <div className="flex flex-wrap items-center gap-2 text-[#3d4947] text-xs sm:text-sm">
                        <span className="flex items-center gap-1 text-[#3f5f8d] font-bold">
                          <span className="material-symbols-outlined text-[18px]">location_on</span>
                          Port of Antwerp / Rotterdam Europort Hub (Trans-European Chemical Corridors)
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#bcc9c6]"></span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">schedule</span>
                          Full-Time Permanent
                        </span>
                      </div>

                      {/* Badges Strip */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="px-2.5 py-1 rounded-full bg-[#e5e8ec] text-black text-xs font-bold">
                          ADR Tankers Class 3, 6.1, 8
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-[#e5e8ec] text-black text-xs font-medium">
                          Digital Tachograph Gen 2
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-[#e5e8ec] text-black text-xs font-medium">
                          Euro VI Tanker Fleet
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-[#d5e3ff] text-[#001c3b] text-xs font-bold">
                          Hazard Allowance Included
                        </span>
                      </div>
                    </div>

                    {/* Compensation Band Banner */}
                    <div className="p-4 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs text-[#3d4947] uppercase tracking-wider block font-semibold">Total Compensation Structure</span>
                        <div className="text-xl sm:text-2xl font-extrabold text-[#00685f]">
                          €58,000 – €88,000 <span className="text-sm text-[#3d4947] font-normal">/ year base</span>
                        </div>
                      </div>
                      <div className="text-left sm:text-right text-xs sm:text-sm text-[#3f5f8d] font-semibold">
                        <span className="block">+ €55–€85/day ADR danger allowance</span>
                        <span className="text-[#00685f] font-bold block">+ €4,200 zero-spill safety bonus</span>
                      </div>
                    </div>

                    {/* Interactive Hover / Click Text Reveal Box */}
                    <div
                      onMouseEnter={() => setIsHoveredDirectives(true)}
                      onMouseLeave={() => setIsHoveredDirectives(false)}
                      onClick={() => setIsHoveredDirectives(!isHoveredDirectives)}
                      className="relative overflow-hidden rounded-xl bg-[#ebeef2] border border-[#e0e3e7] p-4 transition-all duration-300 cursor-pointer"
                    >
                      {/* Default State Hint */}
                      {!isHoveredDirectives && (
                        <div className="flex items-center justify-between text-[#3d4947]">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#00685f] text-[20px] animate-pulse">info</span>
                            <span className="text-xs sm:text-sm font-bold text-black">Hover / tap to reveal hazmat protocol &amp; technical directives</span>
                          </div>
                          <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </div>
                      )}

                      {/* Expanded Reveal State */}
                      {isHoveredDirectives && (
                        <div className="flex flex-col gap-2.5 transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#00685f] text-sm font-bold">
                              <span className="material-symbols-outlined text-[20px]">security</span>
                              <span>Operational Technical Directives &amp; Safety Mandate:</span>
                            </div>
                            <span className="material-symbols-outlined text-[18px] text-[#4f5d70]">expand_less</span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#181c1f] leading-relaxed">
                            Responsible for bulk chemical transport utilizing 3-compartment insulated 316L stainless steel pressure tankers (37,500L). Requires vapor recovery system (VRS) hookup protocols and closed-loop nitrogen purge loading at BASF Ludwigshafen, Dow Terneuzen, and Covestro Antwerp sites.
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#181c1f] text-xs pt-1">
                            <div className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[#00685f] text-[16px]">check_circle</span>
                              <span className="font-semibold">Class 8 Corrosives &amp; Class 3 Flammables</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[#00685f] text-[16px]">check_circle</span>
                              <span className="font-semibold">Compulsory Emergency Shower &amp; SCBA Drills</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[#00685f] text-[16px]">check_circle</span>
                              <span className="font-semibold">Pre-trip Valve &amp; Bursting Disc Inspection</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[#00685f] text-[16px]">check_circle</span>
                              <span className="font-semibold">Automated Fleet Spill Control Telematics</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action & Statutory Clearance Row */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-1">
                      <div className="flex flex-col">
                        <span className="text-xs text-[#3d4947] uppercase tracking-wider font-semibold">Statutory Clearance</span>
                        <span className="text-sm text-black font-bold">ADR Tanker Class 2-9 + SQAS Driver Audit</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Link
                          href="/jobs/senior-adr-tanker-driver-petrochemical"
                          className="px-4 py-2.5 rounded-lg bg-[#e5e8ec] text-black text-sm font-semibold hover:bg-[#e0e3e7] transition-colors text-center"
                        >
                          View Route &amp; Technical Specs
                        </Link>
                        <Link
                          href="/jobs/senior-adr-tanker-driver-petrochemical"
                          className="px-5 py-2.5 rounded-lg bg-[#00685f] text-white text-sm font-bold hover:bg-[#008378] transition-colors shadow-sm flex items-center justify-center gap-1.5 text-center"
                        >
                          <span>Quick Dispatch Apply</span>
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Statutory Verification Framework — Hazardous Materials Licensing (4 Columns) */}
          <section className="w-full px-4 md:px-6 py-12 bg-[#f7fafe]">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-[#00685f] uppercase font-bold tracking-wider">Global Regulatory Interoperability</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                  Statutory Verification Framework — Hazardous Materials Licensing
                </h2>
                <p className="text-sm sm:text-base text-[#3d4947] max-w-3xl leading-relaxed">
                  Multi-jurisdiction driver verification protocols ensuring uninhibited cross-border passage across petrochemical transport networks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Jurisdiction 1: Germany & DACH */}
                <div className="p-6 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#3f5f8d] font-bold uppercase">DACH &amp; Central EU</span>
                      <span className="material-symbols-outlined text-[#3f5f8d]">verified</span>
                    </div>
                    <h3 className="text-lg font-bold text-black">Germany &amp; DACH</h3>
                    <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                      ADR-Bescheinigung Tank (GGVSEB / BAM approved) and Driver Card (Fahrerkarte Gen 2). Requires continuous SQAS terminal clearance.
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="px-2.5 py-1 rounded bg-[#e5e8ec] text-black text-xs font-semibold">
                      Standard: GGVSEB / BAM
                    </span>
                  </div>
                </div>

                {/* Jurisdiction 2: United Kingdom & Ireland */}
                <div className="p-6 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#3f5f8d] font-bold uppercase">UK &amp; Ireland Hub</span>
                      <span className="material-symbols-outlined text-[#3f5f8d]">verified</span>
                    </div>
                    <h3 className="text-lg font-bold text-black">United Kingdom &amp; IE</h3>
                    <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                      UK ADR Driver Training Certificate covering Tanks &amp; Packages with Driver CPC and DfT Dangerous Goods Security verification.
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="px-2.5 py-1 rounded bg-[#e5e8ec] text-black text-xs font-semibold">
                      Standard: DfT &amp; SQA Validated
                    </span>
                  </div>
                </div>

                {/* Jurisdiction 3: United States & Canada */}
                <div className="p-6 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#3f5f8d] font-bold uppercase">North America FMCSA</span>
                      <span className="material-symbols-outlined text-[#3f5f8d]">verified</span>
                    </div>
                    <h3 className="text-lg font-bold text-black">United States &amp; Canada</h3>
                    <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                      Commercial Driver’s License (CDL Class A) with HazMat (H) and Tanker (N) Endorsements (X Combination) and TSA Security Clearance.
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="px-2.5 py-1 rounded bg-[#e5e8ec] text-black text-xs font-semibold">
                      Standard: TSA STA &amp; TWIC Card
                    </span>
                  </div>
                </div>

                {/* Jurisdiction 4: GCC & Middle East */}
                <div className="p-6 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#3f5f8d] font-bold uppercase">GCC Industrial Corridors</span>
                      <span className="material-symbols-outlined text-[#3f5f8d]">verified</span>
                    </div>
                    <h3 className="text-lg font-bold text-black">GCC &amp; Middle East</h3>
                    <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                      Saudi Aramco Hazmat Driver Card &amp; Sabic Petrochemical Transport Permit, plus regional civil defense bulk liquid certifications.
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="px-2.5 py-1 rounded bg-[#e5e8ec] text-black text-xs font-semibold">
                      Standard: Aramco &amp; Sabic Pass
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tanker Specializations & Cargo Types (4 cards) */}
          <section className="w-full px-4 md:px-6 py-12 bg-[#f1f4f8] border-t border-[#e0e3e7]">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs text-[#00685f] uppercase font-bold tracking-wider">Specialized Cargo Protocols</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black">Tanker Specializations &amp; Cargo Types</h2>
                </div>
                <span className="text-xs sm:text-sm text-[#3d4947] font-semibold">3,180 Total Active Requisitions</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Spec Card 1 */}
                <div className="p-6 rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2.5">
                    <div className="w-11 h-11 rounded-lg bg-[#00685f]/10 text-[#00685f] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">water_drop</span>
                    </div>
                    <h3 className="text-lg font-bold text-black">Bulk Liquid Petrochemicals</h3>
                    <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                      ADR Class 3 (Flammables) and Class 8 (Corrosives) in insulated 316L stainless single and multi-chamber tank barrels.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-xs sm:text-sm font-bold">
                    <span className="text-[#00685f]">1,280 Roles Open</span>
                    <span className="material-symbols-outlined text-[#3d4947] text-[18px]">arrow_forward</span>
                  </div>
                </div>

                {/* Spec Card 2 */}
                <div className="p-6 rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2.5">
                    <div className="w-11 h-11 rounded-lg bg-[#3f5f8d]/10 text-[#3f5f8d] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">ac_unit</span>
                    </div>
                    <h3 className="text-lg font-bold text-black">Cryogenic &amp; Industrial Gases</h3>
                    <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                      ADR Class 2 specialized vacuum-insulated tanks carrying Liquid Nitrogen (LIN), Liquid Oxygen (LOX), Argon, and LNG.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-xs sm:text-sm font-bold">
                    <span className="text-[#00685f]">820 Roles Open</span>
                    <span className="material-symbols-outlined text-[#3d4947] text-[18px]">arrow_forward</span>
                  </div>
                </div>

                {/* Spec Card 3 */}
                <div className="p-6 rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2.5">
                    <div className="w-11 h-11 rounded-lg bg-[#00685f]/10 text-[#00685f] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">science</span>
                    </div>
                    <h3 className="text-lg font-bold text-black">Pharma &amp; Fine Intermediates</h3>
                    <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                      High-purity chemical intermediates, high-viscosity coatings, and sterile GMP bulk chemical transit requirements.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-xs sm:text-sm font-bold">
                    <span className="text-[#00685f]">640 Roles Open</span>
                    <span className="material-symbols-outlined text-[#3d4947] text-[18px]">arrow_forward</span>
                  </div>
                </div>

                {/* Spec Card 4 */}
                <div className="p-6 rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2.5">
                    <div className="w-11 h-11 rounded-lg bg-[#3f5f8d]/10 text-[#3f5f8d] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">local_gas_station</span>
                    </div>
                    <h3 className="text-lg font-bold text-black">Compressed Gas &amp; Fuel Delivery</h3>
                    <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                      High-pressure LPG bobtails, cryogenic methane distribution, and aviation kerosene multi-drop fleet logistics.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-xs sm:text-sm font-bold">
                    <span className="text-[#00685f]">440 Roles Open</span>
                    <span className="material-symbols-outlined text-[#3d4947] text-[18px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Master Service Agreement Partners Banner */}
          <section className="w-full px-4 md:px-6 py-8 bg-[#f7fafe] border-b border-[#e0e3e7]">
            <div className="max-w-7xl mx-auto flex flex-col gap-4">
              <span className="text-xs text-[#3d4947] uppercase tracking-wider text-center font-bold">
                Verified Global Fleet Operators &amp; Petrochemical MSA Partners
              </span>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-85">
                <span className="text-lg sm:text-xl text-[#3f5f8d] font-extrabold tracking-tight">BASF Logistics</span>
                <span className="text-lg sm:text-xl text-[#3f5f8d] font-extrabold tracking-tight">DSV Chemical</span>
                <span className="text-lg sm:text-xl text-[#3f5f8d] font-extrabold tracking-tight">Bertschi AG</span>
                <span className="text-lg sm:text-xl text-[#3f5f8d] font-extrabold tracking-tight">Hoyer Group</span>
                <span className="text-lg sm:text-xl text-[#3f5f8d] font-extrabold tracking-tight">Den Hartogh</span>
              </div>
            </div>
          </section>

          {/* Bottom Alert Subscription Box */}
          <section className="w-full px-4 md:px-6 py-12 bg-white" id="subscribe-alerts">
            <div className="max-w-7xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#3f5f8d] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl flex flex-col gap-2 text-center lg:text-left">
                <span className="text-xs text-[#d5e3ff] uppercase font-bold tracking-wider">Telematics &amp; Route Stream</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Get Instant Priority Alerts for ADR Tanker &amp; Petrochemical Routes
                </h2>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  Subscribe directly to encrypted dispatch updates across Antwerp, Rotterdam, Ludwigshafen, and North American energy corridors matching your ADR class licenses.
                </p>
              </div>

              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
                {alertSuccess ? (
                  <div className="flex items-center gap-2 bg-[#00685f] text-white px-5 py-3 rounded-lg text-sm font-bold shadow-md">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    <span>Alerts Activated! Encrypted dispatch stream linked.</span>
                  </div>
                ) : (
                  <form onSubmit={handleAlertSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
                    <input
                      className="w-full sm:w-80 h-12 px-4 rounded-lg bg-white text-black text-sm focus:outline-none placeholder:text-gray-500 shadow-inner"
                      placeholder="Enter driver dispatch email or ID"
                      type="email"
                      required
                      value={emailAlert}
                      onChange={(e) => setEmailAlert(e.target.value)}
                    />
                    <button
                      className="w-full sm:w-auto h-12 px-6 rounded-lg bg-[#00685f] text-white text-sm font-bold hover:bg-[#008378] transition-colors shadow-md whitespace-nowrap cursor-pointer"
                      type="submit"
                    >
                      Activate ADR Alerts
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
