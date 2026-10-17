"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorLongHaulCEDriverJobPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experienceTier: "5 – 10 Years CE",
    licenseType: "EU Cat CE (Code 95)",
    agreed: false,
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
    <div className="bg-[#f7fafe] font-sans text-[#181c1f] antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-[#f7fafe] flex-1">
        <div className="flex flex-col w-full">
          {/* Sub-Header & Global Fleet Metadata Ribbon */}
          <section className="w-full bg-[#f1f4f8] px-4 md:px-8 py-4 border-b border-[#e0e3e7]">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Left: Breadcrumb & Operational Badges */}
              <div className="flex flex-col gap-1.5">
                <nav className="flex items-center gap-2 text-[#3d4947] text-xs uppercase tracking-wider flex-wrap font-semibold">
                  <Link href="/" className="hover:text-[#00685f] transition-colors">Home</Link>
                  <span className="text-gray-400">/</span>
                  <Link href="/categories" className="hover:text-[#00685f] transition-colors">Categories</Link>
                  <span className="text-gray-400">/</span>
                  <Link href="/categories/driving-and-transportation" className="hover:text-[#00685f] transition-colors">Driving &amp; Transportation</Link>
                  <span className="text-gray-400">/</span>
                  <Link href="/categories/driving-and-transportation/long-haul-and-intermodal-freight" className="hover:text-[#00685f] transition-colors">Long-Haul &amp; Intermodal</Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-black font-bold">Operational Dispatch Handbook</span>
                </nav>
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e0e3e7] text-black text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#00685f] animate-pulse"></span>
                    ROLE ID: BY-ROT-FREIGHT-9821
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#008378]/20 text-[#00685f] text-xs font-semibold">
                    <span className="material-symbols-outlined text-[15px]">ac_unit</span>
                    ACTIVE HIGH-VALUE REEFER CORRIDOR
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#abcbff]/30 text-[#355583] text-xs font-semibold">
                    <span className="material-symbols-outlined text-[15px]">verified_user</span>
                    DHL Global &amp; Freja JV Verified Carrier
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e0e3e7] text-[#4f5d70] text-xs font-medium">
                    <span className="material-symbols-outlined text-[15px]">gavel</span>
                    EU Mobility Package &amp; CAO Compliant
                  </span>
                </div>
              </div>

              {/* Right: Action Bar */}
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/categories/driving-and-transportation/long-haul-and-intermodal-freight"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold text-[#3d4947] bg-white border border-[#e0e3e7] shadow-sm hover:bg-[#ebeef2] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  Back to Haulage Overview
                </Link>
                <a
                  href="#apply-card"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs md:text-sm font-bold bg-[#00685f] text-white hover:bg-[#008378] shadow-sm transition-all transform active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  Fast-Track Dispatch Application
                </a>
              </div>
            </div>
          </section>

          {/* Title & Specification Summary Section */}
          <section className="w-full bg-white px-4 md:px-8 py-6 border-b border-[#e0e3e7] shadow-sm">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-4xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded bg-[#ebeef2] text-[#4f5d70] text-xs uppercase font-bold tracking-wider">Job Specification Document 2025.4</span>
                  <span className="text-[#4f5d70] text-xs">•</span>
                  <span className="text-[#00685f] text-xs font-bold uppercase tracking-wider">Line-Haul Fleet Operations</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight">
                  Senior International Long-Haul CE Driver{" "}
                  <span className="text-[#3f5f8d] text-xl sm:text-2xl block sm:inline font-bold">
                    (Reefer &amp; High-Value European Corridors)
                  </span>
                </h1>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[#3d4947] text-sm pt-1">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#3f5f8d] text-[18px]">location_on</span>
                    <span className="font-medium">Rotterdam Maasvlakte Intermodal Hub (On-Road Cross-Border)</span>
                  </div>
                  <span className="text-[#bcc9c6]">•</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#3f5f8d] text-[18px]">calendar_today</span>
                    <span className="font-medium">Full-Time (3/1 Roster or 4/1 Custom Rotation)</span>
                  </div>
                  <span className="text-[#bcc9c6]">•</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#3f5f8d] text-[18px]">badge</span>
                    <span className="font-medium">Dutch / EU Transport Tariff Tier 6</span>
                  </div>
                </div>
              </div>

              {/* Salary Pill Badge */}
              <div className="shrink-0 bg-[#f1f4f8] p-5 rounded-2xl border border-[#e0e3e7] shadow-sm flex flex-col justify-center items-start lg:items-end">
                <span className="text-xs uppercase tracking-wider text-[#4f5d70] font-bold">Approved Annualized Tariff</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00685f]">
                  €54,000 – €74,000 <span className="text-sm font-normal text-[#3d4947]">/ year</span>
                </div>
                <span className="text-xs text-[#3d4947] font-medium mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#00685f] text-[15px]">night_shelter</span>
                  + €65/day Per Diem + Night Cabin Allowance
                </span>
              </div>
            </div>
          </section>

          {/* Hero Visual Banner & Corridor Telemetry */}
          <section className="w-full px-4 md:px-8 py-6">
            <div className="max-w-[1440px] mx-auto">
              <div className="relative w-full min-h-[380px] md:min-h-[440px] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end p-6 md:p-10 border border-[#e0e3e7]">
                {/* Background Imagery with Scrim */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/rotterdam-reefer-hero.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#181c1f]/95 via-[#181c1f]/60 to-transparent"></div>

                {/* Banner Overlay Badges and Content */}
                <div className="relative z-10 flex flex-col gap-3 max-w-4xl text-white">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#00685f] text-white text-xs uppercase tracking-wider font-bold">
                      <span className="material-symbols-outlined text-[16px]">alt_route</span>
                      TRANSEUROPEAN REEFER CORRIDOR PACKAGE 07
                    </span>
                    <span className="px-3 py-1 rounded bg-white/20 backdrop-blur-md text-white text-xs uppercase font-semibold">
                      ROTTERDAM ⇄ SCANDINAVIA &amp; RUHR VALLEY
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                    Benelux, Nordic &amp; DACH Cold-Chain Line-Haul — High-Value Pharmaceutical GDP &amp; Temperature-Sensitive Freight Governance
                  </h2>
                  <p className="text-sm sm:text-base text-gray-200 line-clamp-3 md:line-clamp-none max-w-3xl leading-relaxed">
                    Lead cross-border line-haul operations across Benelux, Germany, Denmark, and Sweden. Supervise GPS telematics, dual-evaporator reefer integrity, and automated border customs corridors for priority pharmaceutical and high-tech cargo.
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium">
                        <span className="material-symbols-outlined text-[#89f5e7] text-[15px]">verified</span> 100% On-Time Delivery Record
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium">
                        <span className="material-symbols-outlined text-[#89f5e7] text-[15px]">severe_cold</span> GDP Pharma Certified Trailer
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium">
                        <span className="material-symbols-outlined text-[#89f5e7] text-[15px]">speed</span> Smart Tachograph Gen 2
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">print</span> Print Manifest
                      </button>
                      <button
                        onClick={() => alert("Downloading Technical Specification PDF...")}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span> Specs PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Asymmetric Workspace (8 Cols Left / 4 Cols Right) */}
          <section className="w-full px-4 md:px-8 py-6">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Technical Specs & Operational Dossier (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                
                {/* SECTION 01: Fleet Overview & Transit Governance */}
                <article className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#e0e3e7] flex flex-col gap-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold text-lg">01</span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black">Role Overview &amp; Transit Governance</h3>
                        <p className="text-xs text-[#4f5d70] uppercase tracking-wider font-semibold">Cross-Border Long-Haul Fleet Architecture</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#ebeef2] text-[#4f5d70] text-xs font-semibold">
                      <span className="material-symbols-outlined text-[15px]">tune</span> Automated Telemetry
                    </span>
                  </div>
                  <p className="text-base text-[#3d4947] leading-relaxed">
                    As a Senior International CE Driver within the collaborative DHL Global Forwarding &amp; Freja Transport line-haul division, you will steward cutting-edge Scania V8 500S/650S tractor units pulling high-cube Schmitz multi-temperature reefer trailers. Your primary freight corridors originate at the Port of Rotterdam Maasvlakte deep-sea terminals, connecting time-critical cold chain pharmaceutical, dry cargo, and consolidated air cargo lines straight to distribution centers throughout Germany (Ruhr Valley, Osnabrück, Hamburg), Denmark (Padborg, Taastrup), and Sweden (Malmö, Jönköping).
                  </p>

                  {/* 4 Key Structural Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Card 1 */}
                    <div className="bg-[#f1f4f8] p-5 rounded-xl border border-[#e0e3e7] flex flex-col gap-2 transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-2 text-[#00685f] font-bold text-lg">
                        <span className="material-symbols-outlined text-[24px]">rv_hookup</span>
                        <h4 className="text-black font-bold">Fleet &amp; Engine Telemetry</h4>
                      </div>
                      <p className="text-sm text-[#3d4947] leading-relaxed">
                        Scania V8 500S/650S Euro VI engines with Opticruise automatic shift, predictive terrain-reading cruise control, active lane assist, and live fuel consumption dashboards with Trimble CarCube integration.
                      </p>
                      <div className="mt-auto pt-3 flex items-center gap-1.5 text-xs text-[#3f5f8d] font-bold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Euro VI Step E Certified
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#f1f4f8] p-5 rounded-xl border border-[#e0e3e7] flex flex-col gap-2 transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-2 text-[#3f5f8d] font-bold text-lg">
                        <span className="material-symbols-outlined text-[24px]">thermostat</span>
                        <h4 className="text-black font-bold">Multi-Temp GDP Monitoring</h4>
                      </div>
                      <p className="text-sm text-[#3d4947] leading-relaxed">
                        Thermo King SLXi / Carrier Vector dual-zone refrigeration with -25°C to +25°C continuous thermograph data logging, cellular temperature alarms, and integrated cab temperature display.
                      </p>
                      <div className="mt-auto pt-3 flex items-center gap-1.5 text-xs text-[#3f5f8d] font-bold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Pharma GDP Compliance
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#f1f4f8] p-5 rounded-xl border border-[#e0e3e7] flex flex-col gap-2 transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-2 text-[#4f5d70] font-bold text-lg">
                        <span className="material-symbols-outlined text-[24px]">lock</span>
                        <h4 className="text-black font-bold">High-Security Cargo &amp; TAPA TSR-1</h4>
                      </div>
                      <p className="text-sm text-[#3d4947] leading-relaxed">
                        Armored box reefer trailers equipped with remote electronic slam-locks, geofenced corridor route tracking, and strict zero-unauthorized-stop protocols along European highways.
                      </p>
                      <div className="mt-auto pt-3 flex items-center gap-1.5 text-xs text-[#3f5f8d] font-bold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> TAPA Level 1 Compliant
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#f1f4f8] p-5 rounded-xl border border-[#e0e3e7] flex flex-col gap-2 transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-2 text-[#008378] font-bold text-lg">
                        <span className="material-symbols-outlined text-[24px]">directions_boat</span>
                        <h4 className="text-black font-bold">Cross-Border RoRo Logistics</h4>
                      </div>
                      <p className="text-sm text-[#3d4947] leading-relaxed">
                        Seamless pre-booked ferry connections (Vlaardingen / Hoek van Holland to Gothenburg / Immingham) with dedicated tractor boarding, electric shore-power plug-in, and driver staterooms.
                      </p>
                      <div className="mt-auto pt-3 flex items-center gap-1.5 text-xs text-[#3f5f8d] font-bold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Shore Power Assured
                      </div>
                    </div>
                  </div>

                  {/* Red Warning Directive Box */}
                  <div className="mt-2 bg-[#ffdad6] text-[#93000a] p-5 rounded-xl flex items-start gap-4 border border-red-200 shadow-sm">
                    <span className="material-symbols-outlined text-[#ba1a1a] text-[30px] shrink-0 mt-0.5">warning</span>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs sm:text-sm font-extrabold tracking-tight uppercase">
                        CRITICAL SAFETY &amp; COMPLIANCE DIRECTIVE: ZERO COLD-CHAIN BREAK &amp; STRICT TACHOGRAPH GOVERNANCE
                      </span>
                      <p className="text-xs sm:text-sm text-[#93000a] leading-relaxed">
                        Strict compliance with EU Regulation (EC) 561/2006 (maximum 9 hours daily driving extendable to 10h twice weekly; mandatory 45-hour uninterrupted weekly rest strictly housed in pre-arranged quality hotel accommodations — sleeping in the cab during regular weekly rest is rigorously prohibited and legally penalized). Tampering with Gen-2 smart tachograph seals or temperature thermographs results in immediate dismissal.
                      </p>
                    </div>
                  </div>
                </article>

                {/* SECTION 02: Transit Sequence & Dispatch Flow */}
                <article className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#e0e3e7] flex flex-col gap-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold text-lg">02</span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black">Transit Sequence &amp; Operational Protocol</h3>
                        <p className="text-xs text-[#4f5d70] uppercase tracking-wider font-semibold">Rotterdam Maasvlakte to Malmö Distribution Axis</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#ebeef2] text-[#4f5d70] text-xs font-semibold">
                      <span className="material-symbols-outlined text-[15px]">schedule</span> Standard 24h Rotation
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 pt-1">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-4 p-5 rounded-xl bg-[#f1f4f8] hover:bg-[#ebeef2] transition-colors border border-[#e0e3e7]">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-2.5 py-0.5 rounded bg-[#00685f] text-white text-xs font-bold">STEP 01</span>
                        <span className="text-sm font-extrabold text-black">05:00 – 06:30</span>
                        <span className="text-[#4f5d70] text-xs font-medium">Terminal Prep</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="text-base font-bold text-black">
                          Pre-Trip Rig Audit, Digital Tachograph Card Insertion &amp; Reefer Pre-Cooling
                        </h4>
                        <p className="text-sm text-[#3d4947] leading-relaxed">
                          Perform visual walk-around inspection, automated pneumatic tire telemetry sync, and check Thermo King set-point (-20°C for frozen pharma or +4°C for chilled biologics). Insert driver digital card into Smart Tacho Gen 2 and verify electronic seal numbers on e-CMR manifest.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">Tire TPMS Check</span>
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">Seal Integrity #78891</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-4 p-5 rounded-xl bg-[#f1f4f8] hover:bg-[#ebeef2] transition-colors border border-[#e0e3e7]">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-2.5 py-0.5 rounded bg-[#3f5f8d] text-white text-xs font-bold">STEP 02</span>
                        <span className="text-sm font-extrabold text-black">06:30 – 11:00</span>
                        <span className="text-[#4f5d70] text-xs font-medium">German Transit</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="text-base font-bold text-black">
                          Rotterdam to Osnabrück Transit Leg (Federal Highway A1 / A30)
                        </h4>
                        <p className="text-sm text-[#3d4947] leading-relaxed">
                          Initial 320 km transit across the Dutch-German border at Hengelo/Bad Bentheim. Automated Toll Collect (EETS onboard unit) logging, adherence to predictive Scania Opticruise 85 km/h eco-speed corridor, and live real-time Trimble telemetry reporting to central Freja dispatch.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">Toll Collect Active</span>
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">4.5h Drive Clock</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-4 p-5 rounded-xl bg-[#f1f4f8] hover:bg-[#ebeef2] transition-colors border border-[#e0e3e7]">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-2.5 py-0.5 rounded bg-[#4f5d70] text-white text-xs font-bold">STEP 03</span>
                        <span className="text-sm font-extrabold text-black">11:00 – 11:45</span>
                        <span className="text-[#4f5d70] text-xs font-medium">Mandatory Rest</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="text-base font-bold text-black">
                          Mandatory 45-Minute Rest Cycle &amp; Telematics Temperature Sync
                        </h4>
                        <p className="text-sm text-[#3d4947] leading-relaxed">
                          Park at pre-booked TAPA-certified secure truck stop (Autohof Osnabrück). Physical check of diesel fuel levels for reefer auxiliary engine, visual scan of physical tamper seals, and direct wireless upload of thermograph telemetry packet to DHL Quality Assurance control room.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">Autohof Secure Park</span>
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">GDP Log Uploaded</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row gap-4 p-5 rounded-xl bg-[#f1f4f8] hover:bg-[#ebeef2] transition-colors border border-[#e0e3e7]">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-2.5 py-0.5 rounded bg-[#3f5f8d] text-white text-xs font-bold">STEP 04</span>
                        <span className="text-sm font-extrabold text-black">11:45 – 16:15</span>
                        <span className="text-[#4f5d70] text-xs font-medium">Danish Frontier</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="text-base font-bold text-black">
                          Osnabrück to Hamburg / Padborg Corridor
                        </h4>
                        <p className="text-sm text-[#3d4947] leading-relaxed">
                          Continuation along Autobahn A1 traversing the Elbe Tunnel corridor into Schleswig-Holstein. Cross Danish frontier at Frøslev/Padborg with automated pre-notified customs e-declaration clearing through Scandinavia line haul.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">Padborg Entry Verified</span>
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">Border Green Channel</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col md:flex-row gap-4 p-5 rounded-xl bg-[#f1f4f8] hover:bg-[#ebeef2] transition-colors border border-[#e0e3e7]">
                      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 shrink-0 w-full md:w-36">
                        <span className="px-2.5 py-0.5 rounded bg-[#00685f] text-white text-xs font-bold">STEP 05</span>
                        <span className="text-sm font-extrabold text-black">16:15 – 18:00</span>
                        <span className="text-[#4f5d70] text-xs font-medium">Final Handover</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="text-base font-bold text-black">
                          Nordic Hub Handover, Reefer Data Download &amp; Driver Hotel Check-In
                        </h4>
                        <p className="text-sm text-[#3d4947] leading-relaxed">
                          Arrival at Freja Logistics Terminal (Padborg / Taastrup). Driver performs dock positioning, connects shore electric cable, executes electronic proof-of-delivery (e-CMR signoff), and is chauffeured to the partner 4-star hotel for mandatory rest recovery.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">e-CMR Completed</span>
                          <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">Scandic Hotel Booking #4920</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* SECTION 03: Vocational Qualifications & Commercial License Equivalence */}
                <article className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#e0e3e7] flex flex-col gap-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold text-lg">03</span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black">Vocational Licenses &amp; International Equivalency</h3>
                        <p className="text-xs text-[#4f5d70] uppercase tracking-wider font-semibold">Multi-Jurisdictional Professional Driver Standard</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#ebeef2] text-[#4f5d70] text-xs font-semibold">
                      <span className="material-symbols-outlined text-[15px]">verified</span> Mutual Recognition
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* German / DACH */}
                    <div className="bg-[#f1f4f8] p-5 rounded-xl border border-[#e0e3e7] flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-black">DACH &amp; Germany</span>
                        <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">Führerschein CE</span>
                      </div>
                      <ul className="flex flex-col gap-2 text-sm text-[#3d4947]">
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>Klasse CE:</strong> Heavy tractor-trailer combinations (&gt;3,500 kg + trailer &gt;750 kg).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>Schlüsselzahl 95 (FQN):</strong> Professional qualification card valid &gt; 12 months.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>Fahrerkarte:</strong> Valid German Smart Tachograph Gen 2 digital card.</span>
                        </li>
                      </ul>
                    </div>

                    {/* United Kingdom & Ireland */}
                    <div className="bg-[#f1f4f8] p-5 rounded-xl border border-[#e0e3e7] flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-black">United Kingdom &amp; IRE</span>
                        <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">HGV Class 1</span>
                      </div>
                      <ul className="flex flex-col gap-2 text-sm text-[#3d4947]">
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>UK Category C+E:</strong> Full articulated vehicle commercial license.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>Driver CPC (DQC):</strong> Full 35 hours periodic driver CPC endorsement.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>Clean DVLA / DVA Record:</strong> Maximum 3 minor points; zero endorsements for tachograph fraud.</span>
                        </li>
                      </ul>
                    </div>

                    {/* US & Canada */}
                    <div className="bg-[#f1f4f8] p-5 rounded-xl border border-[#e0e3e7] flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-black">United States &amp; CAN</span>
                        <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">Class A CDL</span>
                      </div>
                      <ul className="flex flex-col gap-2 text-sm text-[#3d4947]">
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>CDL Class A:</strong> Articulated tractor-trailer with Air Brakes endorsement.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>DOT Medical Card:</strong> Active medical examiner certificate (sponsorable for EU conversion).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>FMCSA Clearinghouse:</strong> Verified clean alcohol and drug query status.</span>
                        </li>
                      </ul>
                    </div>

                    {/* European Union & Nordic */}
                    <div className="bg-[#f1f4f8] p-5 rounded-xl border border-[#e0e3e7] flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-black">European Union &amp; Nordic</span>
                        <span className="px-2.5 py-0.5 rounded bg-[#e0e3e7] text-[#4f5d70] text-xs font-bold">EU Cat CE + Code 95</span>
                      </div>
                      <ul className="flex flex-col gap-2 text-sm text-[#3d4947]">
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>EU Category CE:</strong> Standardized European heavy combination license.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>Nordic Winter Certificate:</strong> Chain fitting &amp; icy conditions training (Freja sponsored).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px] shrink-0 mt-0.5">check_circle</span>
                          <span><strong>ADR Basic Certification:</strong> Packaged hazardous goods qualification (preferred).</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Mandatory Driver Profile Checklist */}
                  <div className="p-4 rounded-xl bg-[#ebeef2] flex flex-col gap-2 mt-2 border border-[#e0e3e7]">
                    <span className="text-xs uppercase tracking-wider font-bold text-black">Mandatory Minimum Prerequisites</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[#3d4947] text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00685f] text-[20px]">verified</span>
                        <span className="font-medium">Minimum 2+ Years Heavy CE Line-Haul</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00685f] text-[20px]">verified</span>
                        <span className="font-medium">Clean Driver Tachograph History</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00685f] text-[20px]">verified</span>
                        <span className="font-medium">Working English or German Proficiency</span>
                      </div>
                    </div>
                  </div>
                </article>

                {/* SECTION 04: Compensation, Allowances & Collective Labor Agreement */}
                <article className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#e0e3e7] flex flex-col gap-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold text-lg">04</span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black">Compensation, Allowances &amp; Dutch CAO Tariff</h3>
                        <p className="text-xs text-[#4f5d70] uppercase tracking-wider font-semibold">Collective Labor Agreement Beroepsgoederenvervoer Tier 6</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#00685f]/15 text-[#00685f] text-xs font-bold">
                      <span className="material-symbols-outlined text-[15px]">payments</span> Direct Employment Contract
                    </span>
                  </div>

                  {/* Highlight Compensation Block */}
                  <div className="p-5 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="text-[#4f5d70] text-xs uppercase tracking-wider font-bold">Monthly Gross Base Salary</span>
                      <div className="text-2xl sm:text-3xl font-extrabold text-black">
                        €4,500 – €6,160 <span className="text-sm font-normal text-[#3d4947]">/ month</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3d4947] mt-1">Based on standard 40h regular contract + scheduled overtime at 130% / weekend standby at 150%.</p>
                    </div>
                    <div className="shrink-0 flex flex-col gap-1 md:text-right">
                      <span className="text-[#4f5d70] text-xs uppercase tracking-wider font-bold">Annual Target Package</span>
                      <span className="text-2xl font-bold text-[#00685f]">€54,000 – €74,000</span>
                      <span className="text-[#4f5d70] text-xs font-medium">+ Performance &amp; Eco Bonus Up to €3,500</span>
                    </div>
                  </div>

                  {/* Benefits 4-Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="p-5 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-[#00685f] font-bold text-base">
                        <span className="material-symbols-outlined text-[20px]">local_atm</span>
                        <h4 className="text-black font-bold">Tax-Free Daily Per Diem</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        €45 to €65 per day tax-free out-of-pocket allowance according to Dutch and German tax treaties for nights spent on road and cross-border haulage duties.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-[#3f5f8d] font-bold text-base">
                        <span className="material-symbols-outlined text-[20px]">airline_seat_recline_extra</span>
                        <h4 className="text-black font-bold">Dedicated Scania V8 Rig</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        No hot-seating on core 3/1 rotation. Your allocated tractor includes factory microwave, dual-inverter parking air conditioner, leather seats, and high-density orthopedic mattress.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-[#4f5d70] font-bold text-base">
                        <span className="material-symbols-outlined text-[20px]">beach_access</span>
                        <h4 className="text-black font-bold">30 Days Paid Vacation &amp; Pension</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        Full mandatory pension fund enrollment (Pensioenfonds Vervoer), 8% annual holiday pay bonus, and comprehensive EU health coverage for you and direct dependents.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-[#00685f] font-bold text-base">
                        <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
                        <h4 className="text-black font-bold">Hotel Rest &amp; Rotation Flights</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        Freja &amp; DHL manage and pay for all 45h weekend hotel stays during rotation legs, along with sponsored return flights or shuttle connections back to your home country terminal.
                      </p>
                    </div>
                  </div>
                </article>

                {/* SECTION 05: Selection & Dispatch Induction Process */}
                <article className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#e0e3e7] flex flex-col gap-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center font-bold text-lg">05</span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black">Structured 3-Stage Selection Process</h3>
                        <p className="text-xs text-[#4f5d70] uppercase tracking-wider font-semibold">From Digital Screening to European Fleet Keys</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#ebeef2] text-[#4f5d70] text-xs font-semibold">
                      <span className="material-symbols-outlined text-[15px]">timer</span> Average: 6 Business Days
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                    <div className="p-5 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#00685f] text-white text-sm font-bold flex items-center justify-center">1</span>
                      <h4 className="font-bold text-base text-black">Tachograph &amp; License Verification</h4>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        Upload your CE license and previous 28-day digital tachograph logs. Compliance officers audit rest-break fidelity and clean driving records within 24-48 hours.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#3f5f8d] text-white text-sm font-bold flex items-center justify-center">2</span>
                      <h4 className="font-bold text-base text-black">Maneuvering &amp; Telematics Practical</h4>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        Half-day practical evaluation at our Rotterdam Maasvlakte Driver Academy: docking tight refrigerated bays, blind-side reversing, and Trimble CarCube simulator drills.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#f1f4f8] border border-[#e0e3e7] flex flex-col gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#4f5d70] text-white text-sm font-bold flex items-center justify-center">3</span>
                      <h4 className="font-bold text-base text-black">Corridor Briefing &amp; Fleet Handover</h4>
                      <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                        Paid 3-day orientation covering cross-border customs paperwork, GDP reefer temperature calibration, fuel-saving eco-coaching, and receipt of dedicated Scania V8 tractor keys.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* RIGHT COLUMN: Application Fast-Track Form & Telemetry Hub (4 Columns) */}
              <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
                
                {/* FAST-TRACK APPLICATION FORM CARD */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-lg border border-[#e0e3e7] flex flex-col gap-4" id="apply-card">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-[#00685f]/10 text-[#00685f]">
                      <span className="material-symbols-outlined text-[26px]">assignment_turned_in</span>
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-black">Apply for Senior CE Driver Position</h3>
                      <p className="text-xs text-[#4f5d70] font-medium">Direct Carrier Dispatch Desk</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3d4947] leading-relaxed">
                    Submit your credentials directly to the DHL Global &amp; Freja JV dispatch division. Expedited compliance verification completed within 24 business hours.
                  </p>

                  {submitted ? (
                    <div className="p-5 rounded-xl bg-[#008378]/15 border border-[#00685f] text-center flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined text-[#00685f] text-4xl">check_circle</span>
                      <h4 className="font-bold text-black text-base">Application Received!</h4>
                      <p className="text-xs text-[#3d4947] leading-relaxed">
                        A DHL-Freja fleet coordinator will review your tachograph file and contact you via WhatsApp / phone within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-2 px-4 py-1.5 rounded-lg bg-[#00685f] text-white text-xs font-semibold hover:bg-[#008378] transition-colors"
                      >
                        Submit Another Form
                      </button>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
                      {/* Full Legal Name */}
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-black" htmlFor="driver-name">Full Legal Name</label>
                        <input
                          className="h-11 px-3.5 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black placeholder:text-[#6d7a77] text-sm focus:outline-none focus:border-[#00685f] focus:bg-white transition-colors"
                          id="driver-name"
                          placeholder="e.g. Erik Van Den Berg"
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      {/* Email Address */}
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-black" htmlFor="driver-email">Email Address</label>
                        <input
                          className="h-11 px-3.5 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black placeholder:text-[#6d7a77] text-sm focus:outline-none focus:border-[#00685f] focus:bg-white transition-colors"
                          id="driver-email"
                          placeholder="erik.haulage@logistics.nl"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      {/* Mobile Phone with WhatsApp */}
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-black" htmlFor="driver-phone">Mobile / WhatsApp Number</label>
                        <input
                          className="h-11 px-3.5 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black placeholder:text-[#6d7a77] text-sm focus:outline-none focus:border-[#00685f] focus:bg-white transition-colors"
                          id="driver-phone"
                          placeholder="+31 6 1234 5678"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      {/* Experience Tier & Primary License Selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="flex flex-col gap-1">
                          <label className="text-xs font-bold text-black" htmlFor="exp-tier">Experience Tier</label>
                          <select
                            className="h-11 px-3 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black text-sm focus:outline-none focus:border-[#00685f] focus:bg-white transition-colors"
                            id="exp-tier"
                            value={formData.experienceTier}
                            onChange={(e) => setFormData({ ...formData, experienceTier: e.target.value })}
                          >
                            <option>2 – 5 Years CE</option>
                            <option>5 – 10 Years CE</option>
                            <option>10+ Years Senior</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-xs font-bold text-black" htmlFor="license-type">License Type</label>
                          <select
                            className="h-11 px-3 rounded-lg bg-[#f1f4f8] border border-[#e0e3e7] text-black text-sm focus:outline-none focus:border-[#00685f] focus:bg-white transition-colors"
                            id="license-type"
                            value={formData.licenseType}
                            onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                          >
                            <option>EU Cat CE (Code 95)</option>
                            <option>UK HGV Class 1 (CPC)</option>
                            <option>US / CAN CDL Class A</option>
                          </select>
                        </div>
                      </div>

                      {/* Document Upload Box */}
                      <div className="flex flex-col gap-1 pt-1">
                        <label className="text-xs font-bold text-black">Upload Driver CV or Tachograph Scan</label>
                        <label
                          htmlFor="file-upload"
                          className="p-5 rounded-xl bg-[#f1f4f8] border-2 border-dashed border-[#bcc9c6] flex flex-col items-center justify-center gap-1.5 text-center cursor-pointer hover:bg-[#ebeef2] hover:border-[#00685f] transition-colors"
                        >
                          <span className="material-symbols-outlined text-[#00685f] text-[32px]">upload_file</span>
                          <span className="text-xs sm:text-sm font-bold text-black">
                            {fileName ? fileName : "Drop PDF, JPG or DDD File Here"}
                          </span>
                          <span className="text-xs text-[#4f5d70]">Max file size 15MB (e-Tacho, Driver Card, or CV)</span>
                          <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png,.ddd"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>

                      {/* Agreement Checkbox */}
                      <div className="flex items-start gap-2.5 pt-1">
                        <input
                          className="w-4 h-4 rounded text-[#00685f] mt-0.5 focus:ring-[#00685f]"
                          id="eu-permit"
                          required
                          type="checkbox"
                          checked={formData.agreed}
                          onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        />
                        <label className="text-xs text-[#3d4947] leading-relaxed cursor-pointer" htmlFor="eu-permit">
                          I hold a valid commercial driving license and certify that my Smart Tachograph history reflects zero severe violations.
                        </label>
                      </div>

                      {/* Submit CTA Button */}
                      <button
                        className="w-full mt-2 py-3 px-4 rounded-lg bg-[#00685f] hover:bg-[#008378] text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[20px]">send</span>
                        Submit Certified Driver Application
                      </button>

                      {/* Trust Meta */}
                      <div className="flex items-center justify-center gap-1.5 pt-1 text-[#4f5d70] text-xs">
                        <span className="material-symbols-outlined text-[15px]">lock</span>
                        <span>GDPR Compliant • Data Encrypted via ISO 27001 Protocol</span>
                      </div>
                    </form>
                  )}
                </div>

                {/* QUOTE CARD: Fleet Operations Director */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e0e3e7] flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-[#00685f]/30"
                      src="/lars-lindholm.jpg"
                      alt="Lars Lindholm"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-base text-black leading-tight">Lars Lindholm</span>
                      <span className="text-xs text-[#4f5d70] font-medium">Fleet Operations Director, Freja &amp; DHL JV</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3d4947] italic leading-relaxed">
                    &quot;Precision and temperature fidelity are everything when moving high-value cold chain freight across Europe. We equip our drivers with the newest Scania V8 rigs and respect their mandatory rest times unconditionally.&quot;
                  </p>
                </div>

                {/* CORRIDOR TECHNICAL PARAMETERS & MAP SNIPPET */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#e0e3e7] flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-black">Corridor Technical Parameters</h4>
                    <span className="px-2 py-0.5 rounded bg-[#ebeef2] text-[#3f5f8d] text-xs font-bold">LANE #07</span>
                  </div>
                  <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#3d4947]">
                    <div className="flex items-center justify-between py-1.5 bg-[#f1f4f8] px-2.5 rounded border border-[#e0e3e7]">
                      <span className="text-[#4f5d70]">Corridor Length</span>
                      <span className="font-bold text-black">1,420 km (Rotterdam to Malmö)</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 bg-[#f1f4f8] px-2.5 rounded border border-[#e0e3e7]">
                      <span className="text-[#4f5d70]">Average Payload</span>
                      <span className="font-bold text-black">24.5 Tonnes (Multi-Temp)</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 bg-[#f1f4f8] px-2.5 rounded border border-[#e0e3e7]">
                      <span className="text-[#4f5d70]">Equipment Assigned</span>
                      <span className="font-bold text-black">Scania 500S V8 + Schmitz Reefer</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 bg-[#f1f4f8] px-2.5 rounded border border-[#e0e3e7]">
                      <span className="text-[#4f5d70]">Refrigeration Window</span>
                      <span className="font-bold text-[#00685f]">-20°C to +4°C (Continuous GDP)</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 bg-[#f1f4f8] px-2.5 rounded border border-[#e0e3e7]">
                      <span className="text-[#4f5d70]">Telematics Suite</span>
                      <span className="font-bold text-black">Trimble CarCube + BlueBox</span>
                    </div>
                  </div>

                  {/* Interactive Location Map Box */}
                  <div className="pt-1 flex flex-col gap-1.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#4f5d70]">Key Dispatch Hub</span>
                    <div
                      className="w-full h-40 bg-cover bg-center rounded-xl overflow-hidden relative shadow-inner border border-[#e0e3e7]"
                      style={{ backgroundImage: "url('/maasvlakte-map.jpg')" }}
                    >
                      <div className="absolute inset-0 bg-[#3f5f8d]/20 backdrop-blur-[1px]"></div>
                      <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-white/95 backdrop-blur-md flex items-center justify-between shadow-sm border border-gray-200">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#00685f] text-[18px]">pin_drop</span>
                          <span className="text-xs font-bold text-black">Rotterdam Maasvlakte Gate 3</span>
                        </div>
                        <span className="text-xs text-[#3f5f8d] font-bold">Live GPS</span>
                      </div>
                    </div>
                  </div>
                </div>

              </aside>

            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
