"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorADRTankerDriverJobPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    class3: true,
    class61: true,
    class8: true,
    experience: "5 – 9 Years (ADR Liquid Bulk Specialists)",
    certifiedAgreement: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-[#f7fafe] font-sans text-[#181c1f] min-h-screen flex flex-col antialiased">
      <Header />

      <main className="w-full pt-16 flex-1 bg-[#f7fafe]">
        <div className="flex flex-col w-full">
          {/* Top Bar & Breadcrumbs */}
          <div className="w-full bg-[#f1f4f8] py-2 px-4 md:px-6 border-b border-[#e0e3e7]">
            <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex items-center flex-wrap gap-2 text-[#3d4947] text-xs font-medium">
                <Link className="hover:text-[#00685f] transition-colors" href="/">Home</Link>
                <span className="text-[#bcc9c6] font-normal">/</span>
                <Link className="hover:text-[#00685f] transition-colors" href="/categories">Categories</Link>
                <span className="text-[#bcc9c6] font-normal">/</span>
                <Link className="hover:text-[#00685f] transition-colors" href="/categories/driving-and-transportation">Driving &amp; Transportation</Link>
                <span className="text-[#bcc9c6] font-normal">/</span>
                <Link className="hover:text-[#00685f] transition-colors" href="/categories/driving-and-transportation/dangerous-goods-and-hazmat-tanker">Dangerous Goods &amp; Hazmat</Link>
                <span className="text-[#bcc9c6] font-normal">/</span>
                <span className="text-[#00685f] font-semibold">Technical Operational Manual &amp; Specs</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#e5e8ec] text-[#181c1f] text-xs font-semibold">
                  ROLE ID: BY-ANT-HAZMAT-4412
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#89f5e7]/40 text-[#00201d] text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#00685f] animate-pulse"></span>
                  ACTIVE BULK CHEMICAL HAZMAT CORRIDOR
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#d5e3ff]/60 text-[#001c3b] text-xs font-semibold">
                  DSV &amp; BASF Verified Fleet
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#e0e3e7] text-[#3d4947] text-xs font-medium">
                  SQAS &amp; ADR Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Action Subheader */}
          <div className="w-full bg-white shadow-sm py-3.5 px-4 md:px-6 border-b border-[#e0e3e7]">
            <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3f5f8d] hover:text-[#00685f] transition-colors"
                href="/categories/driving-and-transportation/dangerous-goods-and-hazmat-tanker"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Back to Hazmat Overview
              </Link>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => alert("Corridor Specifications saved to your profile dashboard.")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ebeef2] text-sm font-semibold text-[#181c1f] hover:bg-[#e5e8ec] transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#3f5f8d]">bookmark</span>
                  Save Corridor Specs
                </button>
                <a
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#00685f] text-white text-sm font-bold hover:bg-[#008378] shadow-sm transition-all hover:shadow-md cursor-pointer"
                  href="#application-form"
                >
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  Fast-Track Dispatch Application
                </a>
              </div>
            </div>
          </div>

          {/* Showcase Hero Banner */}
          <section className="w-full px-4 md:px-6 py-4">
            <div className="max-w-[1360px] mx-auto">
              <div
                className="relative w-full rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end p-6 md:p-8 bg-cover bg-center min-h-[460px] md:min-h-[500px]"
                style={{ backgroundImage: "url('/adr-antwerp-hero.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#181c1f]/95 via-[#181c1f]/65 to-[#181c1f]/40"></div>

                <div className="relative z-10 flex flex-col gap-4 w-full text-white">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex flex-col gap-1.5 max-w-4xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#00685f] text-white text-xs uppercase tracking-widest font-bold">
                          <span className="material-symbols-outlined text-[16px]">alt_route</span>
                          ARA CHEMICAL CORRIDOR PACKAGE 04
                        </span>
                        <span className="px-3 py-1 rounded bg-white/20 backdrop-blur-md text-white text-xs uppercase font-semibold">
                          ANTWERP ⇄ LUDWIGSHAFEN &amp; ROTTERDAM
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#abcbff]/30 backdrop-blur-md text-white text-xs font-semibold">
                          <span className="material-symbols-outlined text-[15px]">verified</span>
                          CEFIC / SQAS Petrochemical Tier 7
                        </span>
                      </div>

                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mt-1">
                        Senior ADR Tanker Driver - Petrochemical &amp; Liquid Chemicals{" "}
                        <span className="text-[#89f5e7] block sm:inline text-xl sm:text-2xl font-bold">
                          (Bulk Stainless Steel Road Tanker 316L Class 3, 6.1 &amp; 8)
                        </span>
                      </h1>

                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-gray-200 text-xs sm:text-sm pt-1">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[#89f5e7] text-[18px]">location_on</span>
                          <span>Port of Antwerp Chemical Cluster (Belgium / Netherlands / Germany Cross-Border)</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[#89f5e7] text-[18px]">schedule</span>
                          <span>Full-Time (3/1 Roster or 2/2 Flexible Rotation)</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[#89f5e7] text-[18px]">shield_person</span>
                          <span>ATEX Level 2 Operational Clearance</span>
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 backdrop-blur-xl bg-white/20 border border-white/30 p-4 sm:p-5 rounded-xl shadow-lg flex flex-col justify-center items-start lg:items-end">
                      <div className="flex items-center justify-between gap-2 w-full">
                        <span className="text-xs uppercase tracking-wider text-gray-200 font-bold">Approved Petrochemical CAO</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#00685f] text-white text-xs font-bold">Tier A1 Rate</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        €58,000 – €88,000 <span className="text-xs sm:text-sm text-gray-200 font-normal">/ year</span>
                      </div>
                      <span className="text-xs text-[#89f5e7] mt-1 flex items-center gap-1 font-medium">
                        <span className="material-symbols-outlined text-[15px]">night_shelter</span>
                        + €75.00/day ADR Per Diem + Night Cabin Allowance
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/20">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs">
                        <span className="material-symbols-outlined text-[#89f5e7] text-[15px]">local_gas_station</span>
                        ADR 3, 6.1, 8 (Bulk Tankers)
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs">
                        <span className="material-symbols-outlined text-[#89f5e7] text-[15px]">shield</span>
                        SQAS &amp; CEFIC BBS Audited
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs">
                        <span className="material-symbols-outlined text-[#89f5e7] text-[15px]">hub</span>
                        Smart Tachograph Gen 2 &amp; ATEX GPS
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00685f]/50 backdrop-blur-sm text-[#89f5e7] text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#89f5e7] animate-pulse"></span>
                        Immediate Roster Placement Available
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold transition-colors cursor-pointer"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">print</span>
                        Print Safety Manifest
                      </button>
                      <button
                        onClick={() => alert("Downloading Hazmat Technical Specifications Document...")}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold transition-colors cursor-pointer"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">description</span>
                        Hazmat Specs PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content 2-Column Grid */}
          <div className="w-full px-4 md:px-6 pb-12">
            <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: 8 Columns Width (Technical Modules) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Module 01: Overview & Governance */}
                <section className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-[#e0e3e7]">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e5e8ec]">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-[#00685f] px-2.5 py-0.5 rounded bg-[#89f5e7]/30">
                        MODULE 01
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-black">
                        Role Overview &amp; Chemical Cargo Governance
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-[#3f5f8d]">science</span>
                  </div>
                  <p className="text-sm sm:text-base text-black mb-3 leading-relaxed">
                    As a Senior ADR Tanker Driver within our Chemical Logistics division, you will operate top-tier ADR-certified tractor units (Volvo FH 500 / Scania R500 V8) hauling specialized multi-compartment insulated stainless steel (316L) pressure tankers. You will be responsible for the cross-border carriage of bulk liquid petrochemicals—including flammable solvents (Class 3), high-hazard toxic industrial precursors (Class 6.1), and concentrated corrosive acids/alkalis (Class 8).
                  </p>
                  <p className="text-xs sm:text-sm text-[#3d4947] mb-5 leading-relaxed">
                    Routes span the vital ARA (Antwerp-Rotterdam-Amsterdam) chemical cluster and the Rhine-Ruhr chemical basin, serving flagship production facilities at BASF Ludwigshafen, Covestro Leverkusen, and Ineos Antwerp. The position requires mastery of closed Vapor Recovery Systems (VRS), nitrogen blanketing techniques during high-purity product loading, and ATEX-certified bottom-loading valve telemetry.
                  </p>

                  {/* Critical Safety Directive Callout */}
                  <div className="bg-[#ebeef2] p-4 sm:p-5 rounded-xl border border-[#e0e3e7]">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#00685f] text-[26px] mt-0.5 shrink-0">warning</span>
                      <div>
                        <h3 className="text-base font-bold text-black mb-1">Critical Chemical Safety Directive</h3>
                        <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                          Strict zero-tolerance safety protocol applies to all chemical transfers. Drivers must execute compulsory Level B/C chemical PPE donning, establish verified earthing/bonding interlocks prior to manifold connection, verify automated overfill sensor circuits, and adhere strictly to EU ADR Chapter 8.5 S2/S21 security regulations regarding hazardous cargo surveillance during transits.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Module 02: 5-Step Operational Timeline */}
                <section className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-[#e0e3e7]">
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#e5e8ec]">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-[#00685f] px-2.5 py-0.5 rounded bg-[#89f5e7]/30">
                        MODULE 02
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-black">
                        Chemical Loading, Transit &amp; Discharge Protocol
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-[#3f5f8d]">alt_route</span>
                  </div>

                  <div className="space-y-4 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#e5e8ec]">
                    {/* Step 1 */}
                    <div className="relative flex items-start gap-4 pl-9">
                      <div className="absolute left-1 top-1 w-6 h-6 rounded-full bg-[#00685f] text-white text-xs flex items-center justify-center font-bold">1</div>
                      <div className="flex-1 bg-[#f1f4f8] p-4 rounded-xl border border-[#e0e3e7]">
                        <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                          <h4 className="text-sm sm:text-base font-bold text-black">Pre-Trip Inspection, ADR Kit &amp; Tank Integrity</h4>
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#e0e3e7] text-[#3d4947]">05:30 – 07:00</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                          Verification of mandatory ADR equipment trunk: intrinsically safe lighting, wheel chocks, eye wash stations, Class-specific chemical spill kits, and dual 9kg dry-powder fire extinguishers. Inspection of tank pressure relief valves, emergency shear foot-valves, and seal certificates.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start gap-4 pl-9">
                      <div className="absolute left-1 top-1 w-6 h-6 rounded-full bg-[#00685f] text-white text-xs flex items-center justify-center font-bold">2</div>
                      <div className="flex-1 bg-[#f1f4f8] p-4 rounded-xl border border-[#e0e3e7]">
                        <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                          <h4 className="text-sm sm:text-base font-bold text-black">Terminal Loading &amp; Nitrogen Blanketing</h4>
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#e0e3e7] text-[#3d4947]">07:00 – 08:30</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                          Terminal check-in at Antwerp Port petrochemical gantry. Grounding interlock clamp attachment, dry-break coupler mating, vapor return arm connection, and tank purging with inert nitrogen blanket prior to bottom loading of Class 3 volatile chemical compounds.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-start gap-4 pl-9">
                      <div className="absolute left-1 top-1 w-6 h-6 rounded-full bg-[#00685f] text-white text-xs flex items-center justify-center font-bold">3</div>
                      <div className="flex-1 bg-[#f1f4f8] p-4 rounded-xl border border-[#e0e3e7]">
                        <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                          <h4 className="text-sm sm:text-base font-bold text-black">Cross-Border Transit Leg (Antwerp ⇄ Rhine-Ruhr)</h4>
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#e0e3e7] text-[#3d4947]">08:30 – 13:00</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                          Navigation via E313 / A44 corridor complying strictly with tunnel restrictions (Category B/D ADR routing). Real-time telemetry monitoring via Trimble onboard computer for surge dampening, tire pressure monitoring, and electronic seal validation.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-start gap-4 pl-9">
                      <div className="absolute left-1 top-1 w-6 h-6 rounded-full bg-[#00685f] text-white text-xs flex items-center justify-center font-bold">4</div>
                      <div className="flex-1 bg-[#f1f4f8] p-4 rounded-xl border border-[#e0e3e7]">
                        <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                          <h4 className="text-sm sm:text-base font-bold text-black">Mandatory 45-Min Rest at Guarded ADR Park</h4>
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#e0e3e7] text-[#3d4947]">13:00 – 13:45</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                          Tachograph-mandated break conducted only at accredited TAPA-TSR Level 1 secure parking facility equipped with hazardous goods containment zones, perimeter beam detection, and 24/7 manned security watch.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-start gap-4 pl-9">
                      <div className="absolute left-1 top-1 w-6 h-6 rounded-full bg-[#00685f] text-white text-xs flex items-center justify-center font-bold">5</div>
                      <div className="flex-1 bg-[#f1f4f8] p-4 rounded-xl border border-[#e0e3e7]">
                        <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                          <h4 className="text-sm sm:text-base font-bold text-black">Customer Site Discharge &amp; Tank Cleaning Handover</h4>
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#e0e3e7] text-[#3d4947]">13:45 – 16:30</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                          Receiver verification, sampling lab sign-off, pneumatic pump discharge or pressure-drop offload, chemical line blowdown, manifold blank flanging, and EFTCO European Cleaning Document (ECD) generation at authorized wash bay.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Module 03: Vocational Licenses & Hazmat Equivalency */}
                <section className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-[#e0e3e7]">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e5e8ec]">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-[#00685f] px-2.5 py-0.5 rounded bg-[#89f5e7]/30">
                        MODULE 03
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-black">
                        Vocational Licenses &amp; Cross-Border Equivalencies
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-[#3f5f8d]">badge</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Germany & DACH */}
                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-base font-bold text-black">Germany &amp; DACH</h3>
                          <span className="px-2 py-0.5 rounded bg-[#e0e3e7] text-[#181c1f] text-xs font-semibold">EU Standard</span>
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#3d4947]">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            Klasse CE Commercial Heavy Combination
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            ADR-Bescheinigung Tank (Klassen 3, 6.1, 8)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            FQN Schlüsselzahl 95 (BKrFQG compliance)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            Digitale Fahrerkarte (Smart Tacho Gen 2)
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#e5e8ec] text-xs text-[#3f5f8d] font-bold">
                        Direct Conversion via BAM &amp; BAG Framework
                      </div>
                    </div>

                    {/* United Kingdom & Ireland */}
                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-base font-bold text-black">United Kingdom &amp; Ireland</h3>
                          <span className="px-2 py-0.5 rounded bg-[#e0e3e7] text-[#181c1f] text-xs font-semibold">BBS Verified</span>
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#3d4947]">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            UK / Irish Category C+E (Articulated Rig)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            ADR Tank Driver Training Certificate
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            Driver Qualification Card (DQC / CPC)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            Digital Tachograph Smart Card
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#e5e8ec] text-xs text-[#3f5f8d] font-bold">
                        Mutual Recognition Protocol (EU Transit Visa Supported)
                      </div>
                    </div>

                    {/* United States & Canada */}
                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-base font-bold text-black">United States &amp; Canada</h3>
                          <span className="px-2 py-0.5 rounded bg-[#e0e3e7] text-[#181c1f] text-xs font-semibold">Endorsement X</span>
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#3d4947]">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            Commercial Driver License (CDL Class A)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            Endorsement N (Tank Vehicle) &amp; H (Hazmat)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            Combined X Endorsement (Tanker + Hazmat)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            TSA Security Threat Assessment Clearance
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#e5e8ec] text-xs text-[#3f5f8d] font-bold">
                        Fast-Track EU ADR Practical Bridging Module
                      </div>
                    </div>

                    {/* European Union & Benelux */}
                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-base font-bold text-black">European Union &amp; Benelux</h3>
                          <span className="px-2 py-0.5 rounded bg-[#e0e3e7] text-[#181c1f] text-xs font-semibold">Primary Baseline</span>
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#3d4947]">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            EU Category CE + Code 95 Endorsement
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            ADR Tankers Specialization (Classes 2 to 9)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            BBS (Behavior-Based Safety) Training Certificate
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-[#00685f]">check_circle</span>
                            Port of Antwerp Port Security Badge (Alfapass)
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#e5e8ec] text-xs text-[#3f5f8d] font-bold">
                        Full Immediate Dispatch Authorization
                      </div>
                    </div>
                  </div>
                </section>

                {/* Module 04: Compensation, Allowances & Tariff Breakdown */}
                <section className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-[#e0e3e7]">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e5e8ec]">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-[#00685f] px-2.5 py-0.5 rounded bg-[#89f5e7]/30">
                        MODULE 04
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-black">
                        Compensation, Allowances &amp; Petrochemical CAO Tariff
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-[#3f5f8d]">payments</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl">
                      <span className="material-symbols-outlined text-[#00685f] text-[28px] mb-2 block">attach_money</span>
                      <div className="text-xs text-[#3d4947] font-semibold">Tax-Free Per Diem</div>
                      <div className="text-lg sm:text-xl font-extrabold text-black mt-1">€55 – €85 <span className="font-normal text-xs text-[#3d4947]">/ day</span></div>
                      <p className="text-xs text-[#3d4947] mt-1 leading-relaxed">Exempt hazardous cargo duty meal and incidentals stipend.</p>
                    </div>

                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl">
                      <span className="material-symbols-outlined text-[#00685f] text-[28px] mb-2 block">bed</span>
                      <div className="text-xs text-[#3d4947] font-semibold">Dedicated High-Spec Rig</div>
                      <div className="text-lg sm:text-xl font-extrabold text-black mt-1">Assigned Unit</div>
                      <p className="text-xs text-[#3d4947] mt-1 leading-relaxed">Flame-retardant sleeper cab, inverter, parking cooler, microwave.</p>
                    </div>

                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl">
                      <span className="material-symbols-outlined text-[#00685f] text-[28px] mb-2 block">hotel</span>
                      <div className="text-xs text-[#3d4947] font-semibold">Night Rest Allowance</div>
                      <div className="text-lg sm:text-xl font-extrabold text-black mt-1">€45.00 <span className="font-normal text-xs text-[#3d4947]">/ cabin night</span></div>
                      <p className="text-xs text-[#3d4947] mt-1 leading-relaxed">Plus company-booked hotel for full 45-hour weekend resets.</p>
                    </div>

                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl">
                      <span className="material-symbols-outlined text-[#00685f] text-[28px] mb-2 block">flight_takeoff</span>
                      <div className="text-xs text-[#3d4947] font-semibold">Rotation Flights</div>
                      <div className="text-lg sm:text-xl font-extrabold text-black mt-1">Fully Covered</div>
                      <p className="text-xs text-[#3d4947] mt-1 leading-relaxed">Round-trip airport shuttles and economy flights for 3/1 rotation.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#ebeef2] border border-[#e0e3e7] flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="text-sm sm:text-base font-bold text-black">32 Days Paid Annual Leave + Chemical Industry Pension Scheme</div>
                      <p className="text-xs text-[#3d4947] mt-0.5">Full social security coverage under Belgian/Dutch chemical logistics collective labor framework.</p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-white text-[#00685f] text-xs font-bold shadow-sm whitespace-nowrap border border-[#e0e3e7]">
                      CAO Scale 8 Verified
                    </span>
                  </div>
                </section>

                {/* Module 05: 3-Stage Selection Process */}
                <section className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-[#e0e3e7]">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e5e8ec]">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-[#00685f] px-2.5 py-0.5 rounded bg-[#89f5e7]/30">
                        MODULE 05
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-black">
                        Structured 3-Stage Selection &amp; Onboarding Process
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-[#3f5f8d]">fact_check</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl relative">
                      <div className="w-8 h-8 rounded-full bg-[#3f5f8d] text-white text-xs flex items-center justify-center font-bold mb-3">1</div>
                      <h3 className="text-base font-bold text-black mb-1">Credential Audit</h3>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        Instant verification of ADR tanker certs, tachograph card history, and clean driving abstract with national registries (BAM / RDW / DVLA).
                      </p>
                    </div>

                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl relative">
                      <div className="w-8 h-8 rounded-full bg-[#3f5f8d] text-white text-xs flex items-center justify-center font-bold mb-3">2</div>
                      <h3 className="text-base font-bold text-black mb-1">Practical Assessment</h3>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        Half-day terminal simulator: dry-break coupling, bottom-loading rack sequencing, vapor hookup, and spill containment emergency drills.
                      </p>
                    </div>

                    <div className="p-4 bg-[#f1f4f8] border border-[#e0e3e7] rounded-xl relative">
                      <div className="w-8 h-8 rounded-full bg-[#00685f] text-white text-xs flex items-center justify-center font-bold mb-3">3</div>
                      <h3 className="text-base font-bold text-black mb-1">Safety Brief &amp; Rig Handover</h3>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        Antwerp hub safety induction, issuance of Class PPE suite, Trimble telematics login, and keys to your assigned dedicated tractor unit.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: 4 Columns Width (Sticky Application & Hazmat Intelligence Sidebar) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Sticky Application Form Card */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-md border border-[#e0e3e7] lg:sticky lg:top-20" id="application-form">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00685f] animate-pulse"></span>
                    <span className="text-xs uppercase tracking-wider text-[#00685f] font-bold">Fast-Track Driver Portal</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1">Dispatch Requisition Application</h3>
                  <p className="text-xs sm:text-sm text-[#3d4947] mb-4 leading-relaxed">
                    Direct placement with certified chemical hauliers operating out of Antwerp and Rotterdam Europort.
                  </p>

                  {submitted ? (
                    <div className="p-4 rounded-xl bg-[#008378]/15 border border-[#00685f] text-center flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined text-[#00685f] text-3xl">check_circle</span>
                      <h4 className="font-bold text-black text-sm">Application Dispatched!</h4>
                      <p className="text-xs text-[#3d4947] leading-relaxed">
                        Application dispatched to Antwerp Fleet Ops. You will receive an SMS and WhatsApp confirmation shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-2 px-4 py-1.5 rounded-lg bg-[#00685f] text-white text-xs font-semibold hover:bg-[#008378] transition-colors"
                      >
                        Submit Another Requisition
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-3.5" onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">Full Legal Name (as on Driving License)</label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black placeholder:text-[#6d7a77] text-sm focus:outline-none focus:border-[#00685f] focus:bg-white"
                          placeholder="e.g. Marc Van Der Beek"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-black mb-1">Email Address</label>
                          <input
                            className="w-full h-11 px-3 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black placeholder:text-[#6d7a77] text-sm focus:outline-none focus:border-[#00685f] focus:bg-white"
                            placeholder="driver@logistics.com"
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-black mb-1">Mobile / WhatsApp</label>
                          <input
                            className="w-full h-11 px-3 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black placeholder:text-[#6d7a77] text-sm focus:outline-none focus:border-[#00685f] focus:bg-white"
                            placeholder="+32 490 00 00 00"
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-black mb-1">Active ADR Tanker Endorsement Classes</label>
                        <div className="grid grid-cols-3 gap-2">
                          <label className="flex items-center gap-1.5 p-2 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black text-xs font-semibold cursor-pointer hover:bg-[#ebeef2]">
                            <input
                              checked={formData.class3}
                              onChange={(e) => setFormData({ ...formData, class3: e.target.checked })}
                              className="accent-[#00685f] w-4 h-4"
                              type="checkbox"
                            />
                            Class 3
                          </label>
                          <label className="flex items-center gap-1.5 p-2 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black text-xs font-semibold cursor-pointer hover:bg-[#ebeef2]">
                            <input
                              checked={formData.class61}
                              onChange={(e) => setFormData({ ...formData, class61: e.target.checked })}
                              className="accent-[#00685f] w-4 h-4"
                              type="checkbox"
                            />
                            Class 6.1
                          </label>
                          <label className="flex items-center gap-1.5 p-2 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black text-xs font-semibold cursor-pointer hover:bg-[#ebeef2]">
                            <input
                              checked={formData.class8}
                              onChange={(e) => setFormData({ ...formData, class8: e.target.checked })}
                              className="accent-[#00685f] w-4 h-4"
                              type="checkbox"
                            />
                            Class 8
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-black mb-1">Years of Liquid Tanker Experience</label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full h-11 px-3 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black text-sm focus:outline-none focus:border-[#00685f] focus:bg-white"
                        >
                          <option>2 – 4 Years (General Chemical Tankers)</option>
                          <option>5 – 9 Years (ADR Liquid Bulk Specialists)</option>
                          <option>10+ Years (Senior Lead Tanker Captain)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-black mb-1">Upload ADR Certificate &amp; CV (PDF or JPG)</label>
                        <label
                          htmlFor="adr-file-upload"
                          className="p-4 rounded-xl bg-[#f1f4f8] border-2 border-dashed border-[#bcc9c6] text-center cursor-pointer hover:bg-[#ebeef2] hover:border-[#00685f] transition-colors flex flex-col items-center justify-center"
                        >
                          <span className="material-symbols-outlined text-[28px] text-[#00685f]">cloud_upload</span>
                          <p className="text-xs font-bold text-black mt-1">
                            {fileName ? fileName : "Click to upload or drag files here"}
                          </p>
                          <p className="text-[11px] text-[#4f5d70]">ADR Tanker Card, CE License, Code 95</p>
                          <input
                            id="adr-file-upload"
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>

                      <label className="flex items-start gap-2 cursor-pointer pt-1">
                        <input
                          checked={formData.certifiedAgreement}
                          onChange={(e) => setFormData({ ...formData, certifiedAgreement: e.target.checked })}
                          className="accent-[#00685f] w-4 h-4 mt-0.5"
                          required
                          type="checkbox"
                        />
                        <span className="text-xs text-[#3d4947] leading-relaxed">
                          I declare that my ADR Tanker Certificate is valid for minimum 6+ months and free of major infractions.
                        </span>
                      </label>

                      <button
                        className="w-full py-3 px-4 rounded-lg bg-[#00685f] text-white text-sm font-bold hover:bg-[#008378] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[20px]">send</span>
                        Submit ADR Certified Application
                      </button>
                    </form>
                  )}

                  <div className="mt-4 pt-3 border-t border-[#e5e8ec] flex items-center justify-between text-[#4f5d70] text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#00685f]">lock</span>
                      GDPR &amp; Safe2Transport Secure
                    </span>
                    <span>Response within 24 Hours</span>
                  </div>
                </div>

                {/* Terminal Dispatch Director Quote */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e0e3e7]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#e0e3e7] ring-2 ring-[#00685f]/30">
                      <img
                        className="w-full h-full object-cover"
                        src="/marc-vandevelde.jpg"
                        alt="Marc Van De Velde"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">Marc Van De Velde</div>
                      <div className="text-xs text-[#4f5d70] font-medium">Fleet Logistics Lead, DSV Chemical Europe</div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3d4947] italic leading-relaxed">
                    &quot;Operating in the Antwerp petrochemical basin requires elite operators who treat safety manuals as sacred. In return, we provide unmatched equipment, top-tier compensation, and respect for mandatory rest intervals.&quot;
                  </p>
                </div>

                {/* Corridor Technical Parameters Card */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e0e3e7]">
                  <h4 className="text-base font-bold text-black mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#3f5f8d] text-[20px]">analytics</span>
                    Corridor Technical Parameters
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-[#e5e8ec]">
                      <span className="text-[#4f5d70]">Corridor Length</span>
                      <span className="font-bold text-black">680 km (Antwerp ⇄ Ludwigshafen)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-[#e5e8ec]">
                      <span className="text-[#4f5d70]">Payload Capacity</span>
                      <span className="font-bold text-black">28.5 tonnes liquid bulk</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-[#e5e8ec]">
                      <span className="text-[#4f5d70]">Vessel Tank Type</span>
                      <span className="font-bold text-black">316L Stainless 4-Compartment</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-[#e5e8ec]">
                      <span className="text-[#4f5d70]">Sensor Telematics</span>
                      <span className="font-bold text-black">ATEX Zone 1 GPS &amp; Tank Pressure</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-[#4f5d70]">Port Security Alfapass</span>
                      <span className="font-bold text-[#00685f]">Issued Upon Sign-On</span>
                    </div>
                  </div>

                  {/* Location Map Visual */}
                  <div className="mt-4 rounded-xl overflow-hidden shadow-inner border border-[#e0e3e7]">
                    <div
                      className="w-full h-40 bg-cover bg-center flex items-end p-2.5"
                      style={{ backgroundImage: "url('/antwerp-map.jpg')" }}
                    >
                      <span className="px-2.5 py-1 rounded bg-white/95 backdrop-blur-md text-black text-xs font-bold shadow-sm flex items-center gap-1 border border-gray-200">
                        <span className="material-symbols-outlined text-[15px] text-[#00685f]">pin_drop</span>
                        Antwerp Europort Dock Hub
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
