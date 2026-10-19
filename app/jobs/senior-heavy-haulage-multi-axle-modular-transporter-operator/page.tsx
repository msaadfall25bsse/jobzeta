"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorHeavyHaulagePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f7fafe] font-sans text-[#181c1f] min-h-screen flex flex-col">
      {/* Standard Universal Jobzeta Header */}
      <Header />

      <main className="w-full pt-16 bg-[#f7fafe] flex-1">
        <div className="flex flex-col w-full">
          {/* Top Bar & Dispatch Metadata Strip */}
          <div className="w-full bg-[#f1f4f8] px-4 md:px-8 py-2 shadow-sm border-b border-[#bcc9c6]/20">
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-2">
              {/* Breadcrumb & Status */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] leading-5 text-[#3d4947]">
                <Link href="/" className="hover:text-[#00685f] cursor-pointer transition-colors">
                  Home
                </Link>
                <span className="text-[#bcc9c6]">/</span>
                <Link href="/categories" className="hover:text-[#00685f] cursor-pointer transition-colors">
                  Categories
                </Link>
                <span className="text-[#bcc9c6]">/</span>
                <Link href="/categories/driving-and-transportation/heavy-haulage-and-abnormal-loads" className="hover:text-[#00685f] cursor-pointer transition-colors">
                  Heavy Haulage
                </Link>
                <span className="text-[#bcc9c6]">/</span>
                <span className="text-[#181c1f] font-semibold truncate max-w-xs md:max-w-md">
                  Superload Dispatch &amp; Technical Specs
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#bcc9c6]"></span>
                <span className="font-mono text-[11px] uppercase text-[#3f5f8d] font-bold bg-[#d5e3ff]/60 px-2 py-0.5 rounded">
                  ROLE ID: BY-ROT-HEAVY-7721
                </span>
              </div>

              {/* Live Badges & Quick Action */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#89f5e7] text-[#00201d] text-[11px] font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#00685f] animate-pulse"></span>
                  ACTIVE SUPERLOAD CORRIDOR
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ebeef2] text-[11px] font-semibold text-[#3d4947]">
                  <span className="material-symbols-outlined text-[15px] text-[#00685f]">verified</span>
                  Mammoet &amp; ALE Verified
                </span>
                <span className="hidden xl:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ebeef2] text-[11px] font-semibold text-[#3d4947]">
                  <span className="material-symbols-outlined text-[15px] text-[#3f5f8d]">gavel</span>
                  STGO Cat 3 &amp; §70 StVZO
                </span>
                <a
                  className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg bg-[#00685f] hover:bg-[#008378] text-[#ffffff] text-[14px] font-semibold transition-colors shadow-sm"
                  href="#application-gateway"
                >
                  Fast-Track Dispatch
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Showcase Photographic Banner with Overlay Content */}
          <div className="w-full px-4 md:px-8 pt-4">
            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-[#2d3134]">
              {/* Full Image Background */}
              <div
                className="w-full h-[520px] md:h-[480px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/superload-banner.jpg')",
                }}
              ></div>

              {/* Heavy Scrim Overlay with Frosted Glass Detail Bar */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3134] via-[#2d3134]/75 to-transparent flex flex-col justify-end p-4 md:p-6 text-[#eef1f5]">
                <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                  <div className="flex flex-col gap-2 max-w-3xl">
                    {/* Badges Bar */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#00685f] text-[11px] text-[#ffffff] font-bold tracking-wide uppercase">
                        Corridor Package 09
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] text-[#eef1f5]">
                        100% Zero-Bridge Incident Rating
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] text-[#eef1f5]">
                        Hydraulic Bogie Remote Steered
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#abcbff] text-[#355583] text-[11px] font-semibold">
                        Police &amp; BF4 Escort Synchronized
                      </span>
                    </div>

                    <h1 className="text-[28px] md:text-[36px] font-bold text-[#eef1f5] leading-tight">
                      Senior Heavy Haulage Multi-Axle Transporter Operator
                    </h1>

                    <p className="text-[15px] text-[#eef1f5]/90 flex flex-wrap items-center gap-y-1 gap-x-3">
                      <span className="inline-flex items-center gap-1 font-semibold text-[#89f5e7]">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                        Port of Rotterdam Quay ⇄ Rhine-Ruhr Energy Corridor
                      </span>
                      <span className="text-[#eef1f5]/60">•</span>
                      <span>Full-Time Permanent (3/1 Roster or 4/2 Rotation)</span>
                      <span className="text-[#eef1f5]/60">•</span>
                      <span className="font-mono text-[12px] bg-[#2d3134]/80 px-2 py-0.5 rounded">
                        CAO Beroepsgoederenvervoer Tier 7
                      </span>
                    </p>
                  </div>

                  {/* Embedded Tariff Metric Card */}
                  <div className="bg-white/15 backdrop-blur-xl p-4 rounded-xl flex flex-col gap-1 min-w-[280px] border border-white/10">
                    <span className="text-[11px] text-[#89f5e7] uppercase tracking-wider font-bold">
                      Standard Approved Tariff
                    </span>
                    <div className="text-[28px] text-[#eef1f5] font-extrabold flex items-baseline gap-1">
                      €62,000 – €94,000
                      <span className="text-[14px] font-normal text-[#eef1f5]/80">/ year</span>
                    </div>
                    <p className="text-[12px] text-[#eef1f5]/85">
                      + €85.00/day Superload Convoy Per Diem &amp; Night Escort Bonus
                    </p>
                  </div>
                </div>

                {/* Banner Action Controls Strip */}
                <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#eef1f5]/80 font-medium">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#89f5e7]">check_circle</span> 148,000 kg Gross Weight
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#89f5e7]">check_circle</span> Goldhofer THP/SL 10-Axle
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#89f5e7]">check_circle</span> Direct Radio to Lead Pilot
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#2d3134]/70 hover:bg-[#2d3134] text-[#eef1f5] text-[12px] font-semibold transition-colors backdrop-blur-md cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">print</span>
                      Print Route Survey
                    </button>
                    <a
                      href="#application-gateway"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#2d3134]/70 hover:bg-[#2d3134] text-[#eef1f5] text-[12px] font-semibold transition-colors backdrop-blur-md cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      Abnormal Specs PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Body Architecture (8 Cols Left / 4 Cols Right) */}
          <div className="w-full px-4 md:px-8 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT COLUMN: 8 Columns Technical Directives */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                {/* Module 01: Role Overview & Axle Load Governance */}
                <section className="flex flex-col gap-4 bg-[#ffffff] p-6 rounded-xl shadow-sm border border-[#ebeef2]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold font-mono">
                        01
                      </span>
                      <h2 className="text-[20px] md:text-[22px] text-[#181c1f] font-bold">
                        Role Overview &amp; Axle Load Governance
                      </h2>
                    </div>
                    <span className="text-[11px] text-[#00685f] uppercase font-bold tracking-wider">
                      Engineering Directive
                    </span>
                  </div>

                  <p className="text-[15px] text-[#3d4947] leading-relaxed">
                    Jobzeta Exchange, in direct partnership with leading European heavy haulage conglomerates (Mammoet &amp; ALE Fleet Alliance), is currently commissioning accredited Senior Multi-Axle Transporter Pilots. This mission-critical posting commands 8x4 heavy ballast tractive units (Scania 770S V8 &amp; Mercedes-Benz Actros 4163 SLT Turbo-Retarder Clutch) linked with modular Goldhofer THP/SL and Scheuerle hydraulic platform configurations. You will spearhead transport of non-divisible 100+ metric tonne electrical generator stators, subsea transformers, and petrochemical cracking columns across the Netherlands, Germany, and Belgium corridors.
                  </p>

                  {/* 2 Sub Features Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="bg-[#f1f4f8] p-4 rounded-lg flex flex-col gap-1 border border-[#ebeef2]">
                      <div className="flex items-center gap-2 text-[#00685f] font-semibold text-[14px]">
                        <span className="material-symbols-outlined text-[20px]">tune</span>
                        Hydraulic Suspension &amp; Compensation
                      </div>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed">
                        Mastery of multi-circuit hydraulic compensation valves to equalize wheel group loads. Maintaining statutory 12-tonne per axle group constraints over cambered turns, bridge crests, and off-camber bypass ramps.
                      </p>
                    </div>

                    <div className="bg-[#f1f4f8] p-4 rounded-lg flex flex-col gap-1 border border-[#ebeef2]">
                      <div className="flex items-center gap-2 text-[#3f5f8d] font-semibold text-[14px]">
                        <span className="material-symbols-outlined text-[20px]">satellite_alt</span>
                        Swept-Path &amp; BF4 Escort Synchronization
                      </div>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed">
                        Adherence to CAD-calculated VOTRA swept-path software runs. Dual-channel UHF radio protocol coordination with front BF4 pilot cars, rear steer trailers, and regional traffic authority escorts.
                      </p>
                    </div>
                  </div>

                  {/* Critical Heavy Transit Safety Directive Callout */}
                  <div className="bg-[#e5e8ec] p-4 rounded-lg flex items-start gap-3 border-l-4 border-[#ba1a1a]">
                    <div className="w-10 h-10 rounded-full bg-[#ba1a1a] text-[#ffffff] flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">warning</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-bold text-[#181c1f]">
                        Zero-Tolerance Speed &amp; Critical Overpass Protocol
                      </span>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed">
                        Strict adherence to the 5 km/h walking-pace crawling threshold across designated structural spans. All hydraulic suspension interlocks must be engaged into rigid transport mode prior to bridge entry points. Deviation results in immediate license suspension under European abnormal transit treaties.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Module 02: Convoy Transit Chronology & Swept-Path Protocol */}
                <section className="flex flex-col gap-4 bg-[#ffffff] p-6 rounded-xl shadow-sm border border-[#ebeef2]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold font-mono">
                        02
                      </span>
                      <h2 className="text-[20px] md:text-[22px] text-[#181c1f] font-bold">
                        Convoy Transit Chronology &amp; Night Swept-Path
                      </h2>
                    </div>
                    <span className="text-[11px] text-[#3f5f8d] uppercase font-bold tracking-wider">
                      Night Dispatch Cycle
                    </span>
                  </div>

                  {/* Timeline */}
                  <div className="relative flex flex-col gap-4 mt-2 pl-4 md:pl-6">
                    {/* Continuous line indicator */}
                    <div className="absolute top-2 bottom-4 left-[23px] md:left-[31px] w-0.5 bg-[#e5e8ec]"></div>

                    {/* Step 1 */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#00685f] text-[#ffffff] flex items-center justify-center font-bold font-mono text-[12px] z-10 shadow-sm flex-shrink-0">
                        1
                      </div>
                      <div className="flex flex-col bg-[#f1f4f8] p-4 rounded-lg w-full border border-[#ebeef2]">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <span className="text-[14px] text-[#181c1f] font-bold">
                            Terminal Depot Rig Audit &amp; Lashing Certification
                          </span>
                          <span className="font-mono text-[11px] text-[#00685f] font-bold bg-[#ebeef2] px-2 py-0.5 rounded">
                            20:00 – 22:00
                          </span>
                        </div>
                        <p className="text-[13px] text-[#3d4947] leading-relaxed">
                          High-tensile Grade 100 chain lashings tension-meter validation, hydraulic steering manifold leak tests, wireless override pairing, and coordination briefing with Dutch &amp; German Federal Police escort units.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#00685f] text-[#ffffff] flex items-center justify-center font-bold font-mono text-[12px] z-10 shadow-sm flex-shrink-0">
                        2
                      </div>
                      <div className="flex flex-col bg-[#f1f4f8] p-4 rounded-lg w-full border border-[#ebeef2]">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <span className="text-[14px] text-[#181c1f] font-bold">
                            In-Gate Port Departure &amp; Arterial Counter-Flow Navigation
                          </span>
                          <span className="font-mono text-[11px] text-[#00685f] font-bold bg-[#ebeef2] px-2 py-0.5 rounded">
                            22:00 – 01:30
                          </span>
                        </div>
                        <p className="text-[13px] text-[#3d4947] leading-relaxed">
                          Controlled exit from Maasvlakte offshore terminals under flashing amber BF4 cordon. Traversing restricted roundabout bypasses using active rear-axle independent hydraulic counter-steering.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#3f5f8d] text-[#ffffff] flex items-center justify-center font-bold font-mono text-[12px] z-10 shadow-sm flex-shrink-0">
                        3
                      </div>
                      <div className="flex flex-col bg-[#f1f4f8] p-4 rounded-lg w-full border border-[#ebeef2]">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <span className="text-[14px] text-[#181c1f] font-bold">
                            A15/A3 Cross-Border Transit &amp; Rhine Span Crossing
                          </span>
                          <span className="font-mono text-[11px] text-[#3f5f8d] font-bold bg-[#ebeef2] px-2 py-0.5 rounded">
                            01:30 – 04:30
                          </span>
                        </div>
                        <p className="text-[13px] text-[#3d4947] leading-relaxed">
                          Center-straddling motorway transit at governed 40 km/h cruising. Full corridor shutdown for single-lane centered crossing of Rhine suspension bridges with real-time bridge-strain telemetry verification.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#e5e8ec] text-[#181c1f] flex items-center justify-center font-bold font-mono text-[12px] z-10 flex-shrink-0">
                        4
                      </div>
                      <div className="flex flex-col bg-[#f1f4f8] p-4 rounded-lg w-full border border-[#ebeef2]">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <span className="text-[14px] text-[#181c1f] font-bold">
                            Designated Superload Layby &amp; Thermal Brake Inspection
                          </span>
                          <span className="font-mono text-[11px] text-[#3d4947] font-bold bg-[#ebeef2] px-2 py-0.5 rounded">
                            04:30 – 05:30
                          </span>
                        </div>
                        <p className="text-[13px] text-[#3d4947] leading-relaxed">
                          Convoy clearance into heavy secure reserve prior to morning rush-hour curfew. FLIR thermal-gun scan on all 40 trailer hub bearings, tire pressures, and engine retarder cooling circuits.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#e5e8ec] text-[#181c1f] flex items-center justify-center font-bold font-mono text-[12px] z-10 flex-shrink-0">
                        5
                      </div>
                      <div className="flex flex-col bg-[#f1f4f8] p-4 rounded-lg w-full border border-[#ebeef2]">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <span className="text-[14px] text-[#181c1f] font-bold">
                            Substation Site Delivery &amp; Jack-and-Slide Uncoupling
                          </span>
                          <span className="font-mono text-[11px] text-[#3d4947] font-bold bg-[#ebeef2] px-2 py-0.5 rounded">
                            05:30 – 08:00
                          </span>
                        </div>
                        <p className="text-[13px] text-[#3d4947] leading-relaxed">
                          Precision alignment on industrial foundation plinths. Modular trailer hydraulic lowering to rest stanchions followed by handover to rigging team for skidding track transfer.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Module 03: Vocational Licenses & Abnormal Cross-Border Equivalencies */}
                <section className="flex flex-col gap-4 bg-[#ffffff] p-6 rounded-xl shadow-sm border border-[#ebeef2]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold font-mono">
                        03
                      </span>
                      <h2 className="text-[20px] md:text-[22px] text-[#181c1f] font-bold">
                        Vocational Licenses &amp; Cross-Border Endorsements
                      </h2>
                    </div>
                    <span className="text-[11px] text-[#6d7a77] uppercase font-bold tracking-wider">
                      Multi-Jurisdiction
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card 1: Germany / DACH */}
                    <div className="p-4 rounded-lg bg-[#f1f4f8] flex flex-col gap-1 border border-[#ebeef2]">
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-bold text-[#181c1f] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[20px]">flag</span>
                          Germany &amp; DACH (StVZO)
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#ebeef2] font-mono text-[11px] text-[#3f5f8d] font-bold">
                          Tier 1 Required
                        </span>
                      </div>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed mt-1">
                        Klasse CE with §70 StVZO individual exemption permits, §29 StVO road usage approval certification, and optional BF3/BF4 Escort Driver accreditation.
                      </p>
                    </div>

                    {/* Card 2: United Kingdom */}
                    <div className="p-4 rounded-lg bg-[#f1f4f8] flex flex-col gap-1 border border-[#ebeef2]">
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-bold text-[#181c1f] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#3f5f8d] text-[20px]">flag</span>
                          United Kingdom (STGO)
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#ebeef2] font-mono text-[11px] text-[#3f5f8d] font-bold">
                          Accepted Equivalent
                        </span>
                      </div>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed mt-1">
                        UK HGV Class 1 (C+E) license with Special Types General Order (STGO) Category 3 certification (up to 150,000 kg combination capacity).
                      </p>
                    </div>

                    {/* Card 3: United States & Canada */}
                    <div className="p-4 rounded-lg bg-[#f1f4f8] flex flex-col gap-1 border border-[#ebeef2]">
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-bold text-[#181c1f] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#4f5d70] text-[20px]">flag</span>
                          US &amp; Canada (FMCSA/CDL)
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#ebeef2] font-mono text-[11px] text-[#3d4947] font-bold">
                          Conversion Program
                        </span>
                      </div>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed mt-1">
                        Commercial Driver License (CDL Class A) with heavy oversize/overweight superload endorsement and 5+ years multi-axle lowbed verifiable experience.
                      </p>
                    </div>

                    {/* Card 4: European Union General */}
                    <div className="p-4 rounded-lg bg-[#f1f4f8] flex flex-col gap-1 border border-[#ebeef2]">
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-bold text-[#181c1f] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[20px]">flag</span>
                          European Union (EU Driver)
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#ebeef2] font-mono text-[11px] text-[#00685f] font-bold">
                          Standard
                        </span>
                      </div>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed mt-1">
                        EU Class CE Driving License, Driver Qualification Card (Code 95 verified), and ESTA European Abnormal Transport Certification.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Module 04: Compensation Structure & CAO Tariff */}
                <section className="flex flex-col gap-4 bg-[#ffffff] p-6 rounded-xl shadow-sm border border-[#ebeef2]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold font-mono">
                        04
                      </span>
                      <h2 className="text-[20px] md:text-[22px] text-[#181c1f] font-bold">
                        Compensation Package &amp; Collective Allowances
                      </h2>
                    </div>
                    <span className="text-[11px] text-[#00685f] uppercase font-bold tracking-wider">
                      CAO Compliant
                    </span>
                  </div>

                  <div className="bg-[#f1f4f8] p-4 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#ebeef2]">
                    <div>
                      <span className="text-[11px] text-[#3d4947] uppercase font-semibold">
                        Base Remuneration Bracket
                      </span>
                      <div className="text-[24px] md:text-[28px] text-[#181c1f] font-bold">
                        €5,160 – €7,830 <span className="text-[15px] font-normal text-[#3d4947]">/ month gross</span>
                      </div>
                      <p className="text-[13px] text-[#3d4947] mt-0.5">
                        Annual base: €62,000 – €94,000 depending on platform axle tier and heavy rigging capabilities.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 bg-[#ffffff] px-4 py-3 rounded-lg shadow-sm border border-[#ebeef2] flex-shrink-0">
                      <span className="material-symbols-outlined text-[#00685f] text-[28px]">payments</span>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-[#181c1f]">Tax-Free Per Diem</span>
                        <span className="text-[15px] text-[#00685f] font-bold">€65 – €85 / day</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-[#f1f4f8] flex flex-col gap-1 border border-[#ebeef2]">
                      <span className="material-symbols-outlined text-[#00685f] text-[24px]">local_shipping</span>
                      <span className="text-[14px] font-bold text-[#181c1f]">Assigned Heavy Cab</span>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed">
                        Mercedes Actros SLT sleeper cab with inverter, auxiliary AC, microwave, and memory mattress.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#f1f4f8] flex flex-col gap-1 border border-[#ebeef2]">
                      <span className="material-symbols-outlined text-[#3f5f8d] text-[24px]">hotel</span>
                      <span className="text-[14px] font-bold text-[#181c1f]">Hotel &amp; Flights</span>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed">
                        Single-occupancy 4-star hotel accommodations during multi-day terminal layovers and roster flight reimbursement.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#f1f4f8] flex flex-col gap-1 border border-[#ebeef2]">
                      <span className="material-symbols-outlined text-[#00685f] text-[24px]">health_and_safety</span>
                      <span className="text-[14px] font-bold text-[#181c1f]">Private Health &amp; Pension</span>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed">
                        Top-tier Dutch/German maritime transportation occupational pension and global medevac healthcare.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Module 05: Structured 3-Stage Selection & Heavy Rig Onboarding */}
                <section className="flex flex-col gap-4 bg-[#ffffff] p-6 rounded-xl shadow-sm border border-[#ebeef2]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold font-mono">
                        05
                      </span>
                      <h2 className="text-[20px] md:text-[22px] text-[#181c1f] font-bold">
                        Selection &amp; Rig Onboarding Protocol
                      </h2>
                    </div>
                    <span className="text-[11px] text-[#3f5f8d] uppercase font-bold tracking-wider">
                      Evaluation Process
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#f1f4f8] relative border border-[#ebeef2]">
                      <span className="font-mono text-[11px] text-[#00685f] font-bold">STAGE 01</span>
                      <h3 className="text-[14px] font-bold text-[#181c1f]">Credential &amp; Telematics Screen</h3>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed">
                        Fast document audit within 24 hours: CE license validation, tachograph cleanliness record, and past axle weight manifests.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#f1f4f8] relative border border-[#ebeef2]">
                      <span className="font-mono text-[11px] text-[#3f5f8d] font-bold">STAGE 02</span>
                      <h3 className="text-[14px] font-bold text-[#181c1f]">Rotterdam Yard Simulator &amp; Bogie Steer</h3>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed">
                        Half-day practical handling at the Rotterdam Heavy Training Facility with Goldhofer hydraulic multi-axle bogie test.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#f1f4f8] relative border border-[#ebeef2]">
                      <span className="font-mono text-[11px] text-[#181c1f] font-bold">STAGE 03</span>
                      <h3 className="text-[14px] font-bold text-[#181c1f]">Tractor Handover &amp; Shadow Convoy</h3>
                      <p className="text-[13px] text-[#3d4947] leading-relaxed">
                        Assignment to designated ballast tractor, radio comms orientation, and first live run paired alongside Master Pilot.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* RIGHT COLUMN: 4 Columns Sticky Fast-Track Gateway & Intelligence */}
              <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-20">
                {/* Application Gateway Card */}
                <div
                  className="bg-[#ffffff] p-6 rounded-xl shadow-md flex flex-col gap-4 border border-[#ebeef2]"
                  id="application-gateway"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-[#00685f] uppercase tracking-wide">
                        Direct Dispatch Requisition
                      </span>
                      <h3 className="text-[18px] text-[#181c1f] font-bold">Fast-Track Application</h3>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-[#89f5e7] flex items-center justify-center text-[#00201d]">
                      <span className="material-symbols-outlined text-[18px]">bolt</span>
                    </span>
                  </div>

                  <p className="text-[13px] text-[#3d4947]">
                    Mammoet &amp; ALE Joint Haulage Pool. Direct dispatch response guaranteed within 24 business hours.
                  </p>

                  {submitted ? (
                    <div className="p-4 rounded-lg bg-[#f4fffc] border border-[#00685f]/30 text-center">
                      <span className="material-symbols-outlined text-[#00685f] text-[36px]">check_circle</span>
                      <h4 className="font-bold text-[#00685f] text-[16px] mt-2">Application Transmitted</h4>
                      <p className="text-[13px] text-[#3d4947] mt-1">
                        Your application has been submitted directly to the Heavy Haul Dispatch Pool. You will receive telemetry confirmation within 24 business hours.
                      </p>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                      {/* Full Name */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[13px] text-[#181c1f] font-semibold">Full Legal Name</label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-[#f1f4f8] text-[#181c1f] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#00685f] border border-[#ebeef2] shadow-sm"
                          placeholder="e.g. Captain Willem van den Berg"
                          required
                          type="text"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[13px] text-[#181c1f] font-semibold">Official Email</label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-[#f1f4f8] text-[#181c1f] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#00685f] border border-[#ebeef2] shadow-sm"
                          placeholder="pilot@heavytransit.eu"
                          required
                          type="email"
                        />
                      </div>

                      {/* Phone / WhatsApp */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[13px] text-[#181c1f] font-semibold">
                          Mobile / WhatsApp (with country code)
                        </label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-[#f1f4f8] text-[#181c1f] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#00685f] border border-[#ebeef2] shadow-sm"
                          placeholder="+31 6 1234 5678"
                          required
                          type="tel"
                        />
                      </div>

                      {/* Active Certifications */}
                      <div className="flex flex-col gap-1.5 pt-1">
                        <label className="text-[13px] text-[#181c1f] font-semibold">
                          Active Endorsements (Select all)
                        </label>
                        <div className="grid grid-cols-2 gap-2 text-[13px] text-[#3d4947]">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input defaultChecked className="w-4 h-4 rounded text-[#00685f] focus:ring-[#00685f]" type="checkbox" />
                            <span>Klasse CE / Code 95</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input defaultChecked className="w-4 h-4 rounded text-[#00685f] focus:ring-[#00685f]" type="checkbox" />
                            <span>§70 StVZO Permit</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input className="w-4 h-4 rounded text-[#00685f] focus:ring-[#00685f]" type="checkbox" />
                            <span>STGO Cat 3 (UK)</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input className="w-4 h-4 rounded text-[#00685f] focus:ring-[#00685f]" type="checkbox" />
                            <span>SPMT Hydrostatic</span>
                          </label>
                        </div>
                      </div>

                      {/* Experience Dropdown */}
                      <div className="flex flex-col gap-1 pt-1">
                        <label className="text-[13px] text-[#181c1f] font-semibold">Heavy Transport Experience</label>
                        <select className="w-full h-11 px-3 rounded-lg bg-[#f1f4f8] text-[#181c1f] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#00685f] border border-[#ebeef2] shadow-sm">
                          <option>5 – 10 Years (Multi-Axle Modular Lowbed)</option>
                          <option>10+ Years (Master Superload Captain)</option>
                          <option>3 – 5 Years (Heavy Haul Transition Pilot)</option>
                        </select>
                      </div>

                      {/* Document Upload Box */}
                      <div className="flex flex-col gap-1 pt-1">
                        <label className="text-[13px] text-[#181c1f] font-semibold">
                          Attach CDL/CE &amp; Heavy Permits
                        </label>
                        <label className="w-full p-4 rounded-lg bg-[#f1f4f8] flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#ebeef2] transition-colors border border-dashed border-[#bcc9c6]">
                          <input type="file" className="hidden" />
                          <span className="material-symbols-outlined text-[#00685f] text-[28px]">cloud_upload</span>
                          <span className="text-[12px] text-[#181c1f] font-semibold mt-1">
                            Click to Upload PDF or Scans
                          </span>
                          <span className="text-[11px] text-[#3d4947]">Max 25MB (CE, Medical, Tachograph)</span>
                        </label>
                      </div>

                      {/* Declaration */}
                      <label className="flex items-start gap-2 pt-1 cursor-pointer">
                        <input className="w-4 h-4 mt-0.5 rounded text-[#00685f] focus:ring-[#00685f]" required type="checkbox" />
                        <span className="text-[11px] text-[#3d4947] leading-snug">
                          I verify that my commercial driving record contains zero structural bridge damage citations or tachograph infringements.
                        </span>
                      </label>

                      {/* Submit Button */}
                      <button
                        className="w-full mt-2 py-3 px-4 rounded-lg bg-[#00685f] hover:bg-[#008378] text-[#ffffff] text-[14px] font-bold flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        Submit Heavy Haul Application
                      </button>
                    </form>
                  )}
                </div>

                {/* Corridor Technical Parameters Card */}
                <div className="bg-[#ffffff] p-4 rounded-xl shadow-sm flex flex-col gap-3 border border-[#ebeef2]">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-bold text-[#181c1f] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#00685f] text-[20px]">engineering</span>
                      Corridor Technical Index
                    </span>
                    <span className="font-mono text-[11px] bg-[#ebeef2] px-2 py-0.5 rounded text-[#3d4947] font-bold">
                      LIVE TELEMETRY
                    </span>
                  </div>

                  <div className="space-y-1.5 text-[13px]">
                    <div className="flex items-center justify-between py-1 bg-[#f1f4f8] px-2.5 rounded">
                      <span className="text-[#3d4947]">Gross Combination Weight:</span>
                      <span className="font-mono font-bold text-[#181c1f]">Up to 148,000 kg</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-[#f1f4f8] px-2.5 rounded">
                      <span className="text-[#3d4947]">Tractor Unit:</span>
                      <span className="font-mono font-bold text-[#181c1f]">Scania 770S / Actros SLT</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-[#f1f4f8] px-2.5 rounded">
                      <span className="text-[#3d4947]">Axle System:</span>
                      <span className="font-mono font-bold text-[#181c1f]">10-Axle Goldhofer THP</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-[#f1f4f8] px-2.5 rounded">
                      <span className="text-[#3d4947]">Highway Max Speed:</span>
                      <span className="font-mono font-bold text-[#00685f]">40 km/h (Strict Gov)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-[#f1f4f8] px-2.5 rounded">
                      <span className="text-[#3d4947]">Bridge Crawl Speed:</span>
                      <span className="font-mono font-bold text-[#ba1a1a]">5 km/h (Locked Hyd)</span>
                    </div>
                  </div>

                  {/* Live Route Static Map Container */}
                  <div className="mt-1 rounded-lg overflow-hidden relative shadow-sm">
                    <div
                      className="w-full h-36 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/rotterdam-route-map.jpg')",
                      }}
                    ></div>
                    <div className="absolute bottom-2 left-2 right-2 bg-[#2d3134]/85 backdrop-blur-md px-2.5 py-1.5 rounded flex items-center justify-between text-[#eef1f5] text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#00685f] animate-ping"></span>
                        Route: Rotterdam Quay ⇄ Rhine-Ruhr
                      </span>
                      <span className="font-mono text-[#89f5e7] font-bold">214 KM</span>
                    </div>
                  </div>
                </div>

                {/* Fleet Lead Endorsement Quote */}
                <div className="bg-[#ffffff] p-4 rounded-xl shadow-sm flex flex-col gap-3 border border-[#ebeef2]">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover shadow-sm flex-shrink-0"
                      alt="Portrait photo of Klaus Heidemann"
                      src="/klaus-heidemann.jpg"
                    />
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-[#181c1f] leading-tight">
                        Klaus Heidemann
                      </span>
                      <span className="text-[12px] text-[#3d4947]">
                        Head of Heavy Logistics, Mammoet Northern Europe
                      </span>
                    </div>
                  </div>

                  <p className="text-[13px] text-[#3d4947] italic leading-relaxed">
                    “Oversized abnormal transit is pure precision engineering in continuous motion. We furnish the world’s most advanced multi-axle modular gear and back operators who prioritize meticulous planning and safety above everything else.”
                  </p>

                  <div className="flex items-center gap-1 text-[#00685f] text-[11px] font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Validated Carrier Operational Review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Standard Universal Jobzeta Footer */}
      <Footer />
    </div>
  );
}
