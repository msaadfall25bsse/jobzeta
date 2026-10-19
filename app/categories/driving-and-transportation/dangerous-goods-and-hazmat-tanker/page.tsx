"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DangerousGoodsHazmatTankerPage() {
  const [tankerSpec, setTankerSpec] = useState("Tanker Spec: Stainless 316L Pressurized");
  const [corridor, setCorridor] = useState("Corridor: Antwerp & Rotterdam Europort");
  const [adrCert, setAdrCert] = useState("ADR Certificate: All Classes in Tanks (2-9)");

  return (
    <div className="bg-[#f7fafe] font-sans text-[#181c1f] min-h-screen flex flex-col antialiased">
      <Header />

      <main className="w-full pt-16 flex-1 bg-surface">
        <div className="flex flex-col w-full">
          {/* Status & Directory Meta Bar */}
          <div className="w-full bg-[#f1f4f8] px-4 sm:px-6 lg:px-8 2xl:px-12 py-2.5">
            <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-space-sm text-[#3d4947] font-label-sm text-label-sm">
              <div className="flex items-center gap-space-sm flex-wrap">
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
              <div className="flex items-center gap-space-md">
                <span className="inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#4f5d70]">sensors</span>
                  ARA Corridor Telemetry: 99.4% Latency Clear
                </span>
                <span className="font-mono text-[#4f5d70]">UTC 08:42:19</span>
              </div>
            </div>
          </div>

          {/* Breadcrumbs & Category Hero Area */}
          <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 2xl:px-12 pt-space-lg pb-space-xl">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-[#3d4947] flex-wrap">
                <Link className="hover:text-[#00685f] transition-colors" href="/">Home</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-[#00685f] transition-colors" href="/categories">Categories</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-[#00685f] transition-colors" href="/categories/driving-and-transportation">Driving &amp; Transportation</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-black font-bold">Dangerous Goods &amp; Hazmat Tanker (ADR)</span>
              </nav>

              {/* Title & Action Split Row */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="max-w-4xl flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="px-2.5 py-1 rounded bg-[#3f5f8d]/10 text-[#3f5f8d] font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Vocational Sector: ADR &amp; Industrial Bulk
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#00685f]/10 text-[#00685f] font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Critical Supply Chain
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-black tracking-tight">
                    Dangerous Goods, Petrochemical &amp; Hazmat Tanker Operations (ADR / Class 1-9)
                  </h1>
                  <p className="font-body-lg text-body-lg text-[#3d4947] leading-relaxed">
                    Certified Class CE and CDL Class A hazmat bulk chemical, cryogenic gas, and fuel tanker drivers operating across European chemical clusters (ARA ports, Ruhr, Rhône valley) and North American corridors.
                  </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-space-sm flex-shrink-0">
                  <button className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-[#e5e8ec] text-[#181c1f] font-label-lg text-label-lg hover:bg-[#e0e3e7] transition-colors shadow-sm" type="button">
                    <span className="material-symbols-outlined text-[18px]">share</span>
                    Share Hazmat Stream
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-[#00685f] text-white font-label-lg text-label-lg hover:bg-[#008378] transition-colors shadow-sm" type="button">
                    <span className="material-symbols-outlined text-[18px]">notifications_active</span>
                    Set ADR Dispatch Alerts
                  </button>
                </div>
              </div>

              {/* KPI Statistics Cards (3 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-sm">
                {/* Metric Card 1 */}
                <div className="p-space-lg rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-[#3d4947] uppercase tracking-wider">Active Hazmat Requisitions</span>
                      <span className="font-headline-xl text-headline-xl text-black font-bold tracking-tight">3,180</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">local_shipping</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#00685f] font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    <span>+22.4% MoM Specialized Chemical Fleet Demand</span>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="p-space-lg rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-[#3d4947] uppercase tracking-wider">Average Global Wage Band</span>
                      <span className="font-headline-xl text-headline-xl text-[#3f5f8d] font-bold tracking-tight">€58k – €92k</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#3f5f8d]/10 text-[#3f5f8d] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">payments</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#3d4947]">
                    $64,000 – $102,000 USD eq. with danger pay multiplier, tank wash bonuses, and ADR night per diem.
                  </p>
                </div>

                {/* Metric Card 3 */}
                <div className="p-space-lg rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-[#3d4947] uppercase tracking-wider">Compliance Gateways</span>
                      <span className="font-headline-xl text-headline-xl text-black font-bold tracking-tight">ADR &amp; US (H/X)</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">verified_user</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#3d4947]">
                    ADR Tanker Certification (Classes 2-9) &amp; US Hazmat Endorsement (H/X) with FMCSA Background Check.
                  </p>
                </div>
              </div>

              {/* Advanced Technical Filter Strip */}
              <div className="p-space-md rounded-xl bg-[#ebeef2] shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center gap-space-sm border border-[#e0e3e7]">
                <div className="relative flex-1 min-w-[220px]">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#3d4947] text-[20px]">propane_tank</span>
                  <select
                    value={tankerSpec}
                    onChange={(e) => setTankerSpec(e.target.value)}
                    className="w-full h-11 pl-10 pr-8 bg-white text-black font-body-sm text-body-sm rounded-lg appearance-none cursor-pointer focus:outline-none border border-[#e0e3e7]"
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
                    className="w-full h-11 pl-10 pr-8 bg-white text-black font-body-sm text-body-sm rounded-lg appearance-none cursor-pointer focus:outline-none border border-[#e0e3e7]"
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
                    className="w-full h-11 pl-10 pr-8 bg-white text-black font-body-sm text-body-sm rounded-lg appearance-none cursor-pointer focus:outline-none border border-[#e0e3e7]"
                  >
                    <option>ADR Certificate: All Classes in Tanks (2-9)</option>
                    <option>ADR Certificate: Class 3 Flammables Exclusively</option>
                    <option>ADR Certificate: Class 2 Gases (Cryo + Compressed)</option>
                    <option>ADR Certificate: Class 6.1 Toxic &amp; Class 8 Corrosive</option>
                    <option>US CDL: Hazmat Endorsement (H) + Tanker (N)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#3d4947] pointer-events-none text-[18px]">arrow_drop_down</span>
                </div>

                <button className="h-11 px-space-lg rounded-lg bg-[#00685f] text-white font-label-lg text-label-lg hover:bg-[#008378] transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap" type="button">
                  <span className="material-symbols-outlined text-[18px]">search</span>
                  Filter Corridors
                </button>
              </div>
            </div>
          </section>

          {/* Featured Technical Requisition Section (Interactive Reveal Mechanism) */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-[#f1f4f8]">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-[#00685f] uppercase font-bold tracking-wider">Priority Enterprise Dispatch</span>
                  <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-black">Featured Primary Requisition</h2>
                </div>
                <div className="flex items-center gap-2 text-[#3d4947] font-label-md text-label-md">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00685f]"></span>
                  Direct Dispatch from Tier-1 Chemical Terminal
                </div>
              </div>

              {/* Primary Requisition Card Styled exactly like Industrial Electrician Card */}
              <article
                aria-label="Senior ADR Tanker Driver - Petrochemical & Liquid Chemicals at DSV Road & Panalpina Tanker Division"
                className="group relative w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                tabIndex={0}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Industrial Visual Thumbnail Canvas */}
                  <div className="relative w-full md:w-72 h-56 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                    <div
                      className="w-full h-full min-h-[220px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCplvXiMgD4Xs15BHHLwEOqg381z309Dt0oA6EUxGVihXbuLbItqVf-fe2iVqYfRUof2mTtRaSH0JoAbKURRZ_zwwtxdynnC-CMPxqgLWqfXDZy5Vz6nF8qleRtCCqaHgJ0VGtE1chtRJ6u3-7OTF_dua6sJCDEZ7SLf7FPHt8TwaYBeLSdcspiFn6tuwmKXF9LjnIZS3f6gYX6UqqV0PoONKG1cnqsVmAOFkZ4o0m7poc5SZsVV2judA')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30" />

                    {/* Top Badges on Thumbnail */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[13px]">
                          local_fire_department
                        </span>
                        ADR Chemical &amp; Petrochemical
                      </span>
                    </div>

                    {/* Bookmark Action */}
                    <button
                      aria-label="Bookmark this role"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[17px]">
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

                  {/* Main Card Body */}
                  <div className="flex-1 p-space-md sm:p-space-lg flex flex-col justify-between gap-space-sm">
                    {/* Default Information State */}
                    <div className="flex flex-col gap-2">
                      {/* Employer Brand & Metas */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-label-md text-label-md text-secondary font-bold tracking-wide uppercase">
                            DSV Road &amp; Panalpina Tanker Division
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-primary font-medium">
                            <span className="material-symbols-outlined text-[14px]">
                              verified
                            </span>
                            Verified Employer
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-outline">
                              schedule
                            </span>
                            Posted 2h ago
                          </span>
                        </div>

                        {/* Salary Band Badge */}
                        <div className="text-right">
                          <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                            €58,000 – €88,000
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {" "}/ year base
                          </span>
                        </div>
                      </div>

                      {/* Role Title */}
                      <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors">
                        Senior ADR Tanker Driver - Petrochemical &amp; Liquid Chemicals (Bulk Stainless Steel Road Tanker)
                      </h3>

                      {/* Key Meta Row */}
                      <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            location_on
                          </span>
                          Port of Antwerp / Rotterdam Europort Hub (Trans-European Chemical Corridors)
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Full-Time Permanent
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                          Tier-1 ADR Bulk Fleet
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            shield
                          </span>
                          Hazard Allowance Included (+ €55–€85/day)
                        </span>
                      </div>
                    </div>

                    {/* Tags Row */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        ADR Tankers Class 3, 6.1, 8
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Digital Tachograph Gen 2
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Euro VI Tanker Fleet
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        IMO-4 Certified
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        SQAS Driver Audit
                      </span>
                    </div>

                    {/* Smooth Interactive Hover Reveal Accordion (from industrial electrician page) */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-all duration-300 ease-out overflow-hidden">
                      <div className="min-h-0 pt-0 group-hover:pt-space-sm group-focus-within:pt-space-sm flex flex-col gap-space-sm">
                        <div className="w-full h-px bg-surface-container-high" />
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low p-space-sm rounded-lg border border-outline-variant/30">
                          <div className="flex flex-col gap-0.5 text-on-surface font-body-sm text-body-sm max-w-2xl">
                            <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[15px]">
                                insights
                              </span>
                              Operational Technical Directives &amp; Mission Brief
                            </span>
                            <p className="text-body-sm text-on-surface-variant">
                              Responsible for bulk chemical transport utilizing 3-compartment insulated 316L stainless steel pressure tankers (37,500L). Requires vapor recovery system (VRS) hookup protocols and closed-loop nitrogen purge loading at BASF Ludwigshafen, Dow Terneuzen, and Covestro Antwerp sites.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            <Link
                              className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1"
                              href="/jobs/senior-adr-tanker-driver-petrochemical"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Details &amp; Specs</span>
                              <span className="material-symbols-outlined text-[15px]">
                                arrow_outward
                              </span>
                            </Link>
                            <Link
                              className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1"
                              href="/jobs/senior-adr-tanker-driver-petrochemical"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Quick Apply</span>
                              <span className="material-symbols-outlined text-[15px]">
                                send
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Statutory Verification Framework — Hazardous Materials Licensing (4 Columns) */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-surface">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-[#00685f] uppercase font-bold tracking-wider">Global Regulatory Interoperability</span>
                <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-black">Statutory Verification Framework — Hazardous Materials Licensing</h2>
                <p className="font-body-md text-body-md text-[#3d4947] max-w-3xl">
                  Multi-jurisdiction driver verification protocols ensuring uninhibited cross-border passage across petrochemical transport networks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Jurisdiction 1: Germany & DACH */}
                <div className="p-space-lg rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col justify-between gap-space-md shadow-sm">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-mono text-[#3f5f8d] font-bold uppercase">DACH &amp; Central EU</span>
                      <span className="material-symbols-outlined text-[#3f5f8d]">verified</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-black">Germany &amp; DACH</h3>
                    <p className="font-body-sm text-body-sm text-[#3d4947]">
                      ADR-Bescheinigung Tank (GGVSEB / BAM approved) and Driver Card (Fahrerkarte Gen 2). Requires continuous SQAS terminal clearance.
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="px-2 py-1 rounded bg-[#e5e8ec] text-black font-label-sm text-label-sm">
                      Standard: GGVSEB / BAM
                    </span>
                  </div>
                </div>

                {/* Jurisdiction 2: United Kingdom & Ireland */}
                <div className="p-space-lg rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col justify-between gap-space-md shadow-sm">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-mono text-[#3f5f8d] font-bold uppercase">UK &amp; Ireland Hub</span>
                      <span className="material-symbols-outlined text-[#3f5f8d]">verified</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-black">United Kingdom &amp; IE</h3>
                    <p className="font-body-sm text-body-sm text-[#3d4947]">
                      UK ADR Driver Training Certificate covering Tanks &amp; Packages with Driver CPC and DfT Dangerous Goods Security verification.
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="px-2 py-1 rounded bg-[#e5e8ec] text-black font-label-sm text-label-sm">
                      Standard: DfT &amp; SQA Validated
                    </span>
                  </div>
                </div>

                {/* Jurisdiction 3: United States & Canada */}
                <div className="p-space-lg rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col justify-between gap-space-md shadow-sm">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-mono text-[#3f5f8d] font-bold uppercase">North America FMCSA</span>
                      <span className="material-symbols-outlined text-[#3f5f8d]">verified</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-black">United States &amp; Canada</h3>
                    <p className="font-body-sm text-body-sm text-[#3d4947]">
                      Commercial Driver’s License (CDL Class A) with HazMat (H) and Tanker (N) Endorsements (X Combination) and TSA Security Clearance.
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="px-2 py-1 rounded bg-[#e5e8ec] text-black font-label-sm text-label-sm">
                      Standard: TSA STA &amp; TWIC Card
                    </span>
                  </div>
                </div>

                {/* Jurisdiction 4: GCC & Middle East */}
                <div className="p-space-lg rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col justify-between gap-space-md shadow-sm">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-mono text-[#3f5f8d] font-bold uppercase">GCC Industrial Corridors</span>
                      <span className="material-symbols-outlined text-[#3f5f8d]">verified</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-black">GCC &amp; Middle East</h3>
                    <p className="font-body-sm text-body-sm text-[#3d4947]">
                      Saudi Aramco Hazmat Driver Card &amp; Sabic Petrochemical Transport Permit, plus regional civil defense bulk liquid certifications.
                    </p>
                  </div>
                  <div className="pt-space-sm">
                    <span className="px-2 py-1 rounded bg-[#e5e8ec] text-black font-label-sm text-label-sm">
                      Standard: Aramco &amp; Sabic Pass
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tanker Specializations & Cargo Types (4 cards) */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-[#f1f4f8]">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-[#00685f] uppercase font-bold tracking-wider">Specialized Cargo Protocols</span>
                  <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-black">Tanker Specializations &amp; Cargo Types</h2>
                </div>
                <span className="font-label-md text-label-md text-[#3d4947]">3,180 Total Active Requisitions</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Spec Card 1 */}
                <div className="p-space-lg rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#00685f]/10 text-[#00685f] flex items-center justify-center">
                      <span className="material-symbols-outlined">water_drop</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-black">Bulk Liquid Petrochemicals</h3>
                    <p className="font-body-sm text-body-sm text-[#3d4947]">
                      ADR Class 3 (Flammables) and Class 8 (Corrosives) in insulated 316L stainless single and multi-chamber tank barrels.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs font-label-md text-label-md">
                    <span className="text-[#00685f] font-bold">1,280 Roles Open</span>
                    <span className="material-symbols-outlined text-[#3d4947] text-[18px]">arrow_forward</span>
                  </div>
                </div>

                {/* Spec Card 2 */}
                <div className="p-space-lg rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#3f5f8d]/10 text-[#3f5f8d] flex items-center justify-center">
                      <span className="material-symbols-outlined">ac_unit</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-black">Cryogenic &amp; Industrial Gases</h3>
                    <p className="font-body-sm text-body-sm text-[#3d4947]">
                      ADR Class 2 specialized vacuum-insulated tanks carrying Liquid Nitrogen (LIN), Liquid Oxygen (LOX), Argon, and LNG.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs font-label-md text-label-md">
                    <span className="text-[#00685f] font-bold">820 Roles Open</span>
                    <span className="material-symbols-outlined text-[#3d4947] text-[18px]">arrow_forward</span>
                  </div>
                </div>

                {/* Spec Card 3 */}
                <div className="p-space-lg rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#00685f]/10 text-[#00685f] flex items-center justify-center">
                      <span className="material-symbols-outlined">science</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-black">Pharma &amp; Fine Intermediates</h3>
                    <p className="font-body-sm text-body-sm text-[#3d4947]">
                      High-purity chemical intermediates, high-viscosity coatings, and sterile GMP bulk chemical transit requirements.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs font-label-md text-label-md">
                    <span className="text-[#00685f] font-bold">640 Roles Open</span>
                    <span className="material-symbols-outlined text-[#3d4947] text-[18px]">arrow_forward</span>
                  </div>
                </div>

                {/* Spec Card 4 */}
                <div className="p-space-lg rounded-xl bg-white border border-[#e0e3e7] shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#3f5f8d]/10 text-[#3f5f8d] flex items-center justify-center">
                      <span className="material-symbols-outlined">local_gas_station</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-black">Compressed Gas &amp; Fuel Delivery</h3>
                    <p className="font-body-sm text-body-sm text-[#3d4947]">
                      High-pressure LPG bobtails, cryogenic methane distribution, and aviation kerosene multi-drop fleet logistics.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs font-label-md text-label-md">
                    <span className="text-[#00685f] font-bold">440 Roles Open</span>
                    <span className="material-symbols-outlined text-[#3d4947] text-[18px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Master Service Agreement Partners Banner */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-lg bg-surface">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm text-[#3d4947] uppercase tracking-wider text-center">
                Verified Global Fleet Operators &amp; Petrochemical MSA Partners
              </span>
              <div className="flex flex-wrap items-center justify-center gap-space-lg sm:gap-space-xl opacity-80">
                <span className="font-headline-sm text-headline-sm text-[#3f5f8d] font-bold tracking-tighter">BASF Logistics</span>
                <span className="font-headline-sm text-headline-sm text-[#3f5f8d] font-bold tracking-tighter">DSV Chemical</span>
                <span className="font-headline-sm text-headline-sm text-[#3f5f8d] font-bold tracking-tighter">Bertschi AG</span>
                <span className="font-headline-sm text-headline-sm text-[#3f5f8d] font-bold tracking-tighter">Hoyer Group</span>
                <span className="font-headline-sm text-headline-sm text-[#3f5f8d] font-bold tracking-tighter">Den Hartogh</span>
              </div>
            </div>
          </section>

          {/* Bottom Alert Subscription Box */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-white">
            <div className="max-w-[1920px] mx-auto p-space-md sm:p-space-xl rounded-2xl bg-[#3f5f8d] text-white shadow-lg flex flex-col lg:flex-row items-center justify-between gap-space-lg">
              <div className="max-w-2xl flex flex-col gap-space-sm text-center lg:text-left">
                <span className="font-label-sm text-label-sm text-[#d5e3ff] uppercase font-bold tracking-wider">Telematics &amp; Route Stream</span>
                <h2 className="text-2xl sm:text-3xl lg:text-headline-lg font-headline-lg text-white">
                  Get Instant Priority Alerts for ADR Tanker &amp; Petrochemical Routes
                </h2>
                <p className="font-body-md text-body-md text-white/80">
                  Subscribe directly to encrypted dispatch updates across Antwerp, Rotterdam, Ludwigshafen, and North American energy corridors matching your ADR class licenses.
                </p>
              </div>

              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-space-sm flex-shrink-0">
                <input
                  className="w-full sm:w-80 h-12 px-4 rounded-lg bg-white text-[#181c1f] font-body-sm text-body-sm focus:outline-none placeholder:text-[#3d4947]"
                  placeholder="Enter driver dispatch email or ID"
                  type="email"
                />
                <button
                  className="w-full sm:w-auto h-12 px-space-lg rounded-lg bg-[#00685f] text-white font-label-lg text-label-lg hover:bg-[#008378] transition-colors shadow-md whitespace-nowrap cursor-pointer"
                  type="button"
                >
                  Activate ADR Alerts
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
