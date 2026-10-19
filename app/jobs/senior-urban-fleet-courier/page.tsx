"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorUrbanFleetCourierTechnicalSpecsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    catB: true,
    vanExp: true,
    cleanRecord: true,
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Application submitted successfully to Berlin Fleet Dispatch!");
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: "Senior Urban Fleet Courier & EV Multi-Drop Specialist",
          text: "Technical Specs & Operational Dispatch Handbook - Jobzeta",
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Dispatch link copied to clipboard!");
    }
  };

  const handleDownloadPdf = () => {
    showToast("Generating technical vehicle & courier dispatch specification PDF...");
    setTimeout(() => {
      showToast("Technical PDF downloaded successfully.");
    }, 1500);
  };

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col font-body-md text-body-md">
      {/* GLOBAL HEADER */}
      <Header />

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-on-surface text-surface-container-lowest px-space-md py-space-sm rounded-xl shadow-2xl border border-surface-container-highest animate-bounce">
          <span className="material-symbols-outlined text-primary-fixed text-[20px]">
            check_circle
          </span>
          <span className="font-label-lg text-label-lg">{toastMessage}</span>
        </div>
      )}

      {/* MAIN BODY CONTENT */}
      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Breadcrumbs Navigation */}
          <section className="w-full bg-surface-container-low py-space-sm px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="w-full max-w-[1920px] mx-auto flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant flex-wrap">
              <Link className="hover:text-primary transition-colors" href="/">
                Home
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link className="hover:text-primary transition-colors" href="/categories">
                Categories
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link
                className="hover:text-primary transition-colors"
                href="/categories/driving-and-transportation"
              >
                Driving &amp; Transportation
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link
                className="hover:text-primary transition-colors"
                href="/categories/driving-and-transportation/last-mile-delivery-and-urban-fleet-operations"
              >
                Last-Mile Delivery &amp; Urban Fleet
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Technical Specs</span>
            </div>
          </section>

          {/* Photographic Hero Banner with Direct Title Overlay */}
          <section className="relative w-full overflow-hidden bg-on-surface">
            {/* Visual background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="Two professional logistics delivery couriers in reflective hi-vis vests standing alongside a high-roof Mercedes-Benz electric eSprinter parcel van connected to an ultra-fast commercial EV charging dock at the Berlin Paketzentrum depot, urban warehouse loading bays visible in clean morning light."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnEqiaOdX7wXJA6p4Jjut9MLYP_VxXFBGa8AFxVShivbbiMYwwggOrxaDnWww6cMNFMGiG3RXmw-5FnHGOPsy7D42980pQZSNTeBh9bm8E6TmtS7NGrbO4__ypYrsOZg6uIQfqnBR2PXL02LOozLxiU43OK8lXzisBZZK7irZFRpf_wV7kHWhQs_j4vDB48vXE8Nui6MY-ma3X4HRiioBjdbv5kzHHLaMOeElXAjrlX2PAUr3L4WH_8Q')",
              }}
            ></div>
            {/* Layered High-Contrast Institutional Dark Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001c3b]/95 via-[#0e1c2c]/90 to-[#00201d]/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2c] via-transparent to-black/40"></div>
            
            <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl min-h-[460px] flex flex-col justify-end">
              {/* Top Meta Chips */}
              <div className="flex items-center gap-space-sm flex-wrap mb-space-md">
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-primary/20 backdrop-blur-md text-primary-fixed font-label-sm text-label-sm border border-primary/30">
                  <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
                  ACTIVE URBAN FLEET CORRIDOR: BERLIN METRO
                </span>
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-lowest font-label-sm text-label-sm border border-white/10">
                  <span className="material-symbols-outlined text-[14px] text-primary-fixed">electric_bolt</span>
                  ZERO-EMISSION EV URBAN VAN
                </span>
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-lowest font-label-sm text-label-sm border border-white/10">
                  <span className="material-symbols-outlined text-[14px] text-secondary-fixed">verified</span>
                  DIRECT CARRIER REQUISITION
                </span>
              </div>

              {/* Main Title Block & Floating CAO Card Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
                <div className="lg:col-span-8">
                  <h1 className="font-headline-xl text-headline-xl text-surface-container-lowest mb-space-sm font-bold tracking-tight">
                    Senior Urban Fleet Courier &amp; EV Multi-Drop Specialist (High-Density Hub)
                  </h1>
                  <p className="font-body-md text-body-md text-tertiary-fixed max-w-3xl leading-relaxed mb-space-md">
                    Commercial Electric Cargo Van (Mercedes-Benz eSprinter / MAN eTGE 3.5t) • High-Density Multi-Stop Parcel Dispatch &amp; Geofenced Drop Chronology (CAO Koeriers- &amp; Pakketdiensten Tier 3)
                  </p>
                  {/* Technical Attributes Pills */}
                  <div className="flex items-center gap-space-xs flex-wrap">
                    <span className="px-space-sm py-space-xs rounded-lg bg-surface-container-highest/20 backdrop-blur-sm text-surface-container-lowest font-label-sm text-label-sm border border-white/10 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">badge</span> EU Category B / C1 License
                    </span>
                    <span className="px-space-sm py-space-xs rounded-lg bg-surface-container-highest/20 backdrop-blur-sm text-surface-container-lowest font-label-sm text-label-sm border border-white/10 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">qr_code_scanner</span> Zebra TC57X Handheld PDA
                    </span>
                    <span className="px-space-sm py-space-xs rounded-lg bg-surface-container-highest/20 backdrop-blur-sm text-surface-container-lowest font-label-sm text-label-sm border border-white/10 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">energy_savings_leaf</span> Regenerative Braking Eco-Drive
                    </span>
                    <span className="px-space-sm py-space-xs rounded-lg bg-surface-container-highest/20 backdrop-blur-sm text-surface-container-lowest font-label-sm text-label-sm border border-white/10 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">translate</span> Bilingual German/English Interface
                    </span>
                  </div>
                </div>

                {/* Floating CAO Tariff Card */}
                <div className="lg:col-span-4 w-full">
                  <div className="bg-surface-container-lowest/95 backdrop-blur-xl p-space-md rounded-xl shadow-xl flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Approved Parcel Tariff</span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">Class 3 Urban Fleet</span>
                    </div>
                    <div className="mt-1">
                      <div className="text-[11px] font-label-sm text-on-surface-variant uppercase font-medium">Standard Compensation Scale</div>
                      <div className="font-headline-lg text-headline-lg font-bold text-on-surface">
                        €38,500 – €52,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ year</span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                      + €18.50/Day Tax-Free Urban Lunch Stipend • Guaranteed Assigned EV Van &amp; Home Charging Wallbox Option
                    </p>
                    <div className="pt-space-xs flex items-center gap-space-xs">
                      <button
                        onClick={handleDownloadPdf}
                        className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-2.5 px-space-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">download</span> Technical PDF
                      </button>
                      <button
                        onClick={handlePrint}
                        className="p-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors cursor-pointer"
                        title="Print Specification"
                      >
                        <span className="material-symbols-outlined text-[20px]">print</span>
                      </button>
                      <button
                        onClick={handleShare}
                        className="p-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors cursor-pointer"
                        title="Share Dispatch Link"
                      >
                        <span className="material-symbols-outlined text-[20px]">share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Operational Grid: 8-Col Modules / 4-Col Interactive Sidebar */}
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* Left Column: 5 Structured Technical Modules */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* Module 01: Operating Directive */}
                <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-primary-fixed-dim text-on-primary-fixed font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                      01
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Operating Directive</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Role Overview &amp; Multi-Drop Urban Protocol</h2>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The Senior Urban Fleet Courier &amp; EV Multi-Drop Specialist is entrusted with commanding next-generation zero-emission commercial vehicles across dense Berlin metropolitan postal districts (Mitte, Tiergarten, Prenzlauer Berg). Operating from the regional high-throughput logistics center (Paketzentrum Berlin-Mitte), this role combines high-density parcel drop execution with active telematics stewardship, precision geofence navigation, and intelligent battery capacity conservation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">speed</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">EV Telematics &amp; Fleet Efficiency</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Mastery of predictive regenerative braking curves, real-time SoC (State of Charge) telematics, depot Smart-Charge orchestration, and dynamic heat-pump preconditioning.
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">qr_code_2</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Contactless POD &amp; Dynamic Manifest</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Sub-second barcode scanning using Zebra TC57X devices, optical safe-place geostamped photo validation, signature capture, and recipient PIN-verified delivery flows.
                      </p>
                    </div>
                  </div>
                  {/* Red Alert Callout Card */}
                  <div className="p-space-md rounded-lg bg-error-container text-on-error-container flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-[24px] text-error flex-shrink-0 mt-0.5">warning</span>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-error-container">Critical Operational Mandate: Zero-Defect Safety Protocol</h4>
                      <p className="font-body-sm text-body-sm text-on-error-container">
                        Strict adherence to urban pedestrian safety zones (speed governed to ≤15 km/h in shared thoroughfares), full 100% engine/motor switch-off at every multi-drop station, and rigorous acoustic warning sounder awareness for blind-spot cyclists.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Module 02: Timetable Execution & Chronology */}
                <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between flex-wrap gap-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-lg bg-primary-fixed-dim text-on-primary-fixed font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        02
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Timetable Execution</span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Urban Dispatch &amp; Multi-Stop Route Chronology</h2>
                      </div>
                    </div>
                    <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                      Standard 8.5h Single-Driver Shift
                    </span>
                  </div>
                  {/* Chronological Step Timeline */}
                  <div className="relative flex flex-col gap-space-md pl-4 ml-2 border-l-2 border-surface-container-high">
                    {/* Step 1 */}
                    <div className="relative pl-space-md">
                      <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
                      <div className="flex items-center justify-between flex-wrap">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">06:30 – 07:15 • Step 01</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Depot Hub Yard</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">Depot Arrival &amp; EV Pre-Trip Vehicle Audit</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Visual walkaround of Mercedes eSprinter chassis, tire pressure checks (4.2 bar cold), 100% battery pre-conditioning status confirmation from Smart Charge station, and login sync of route manifest into Android-powered Zebra scanner.
                      </p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative pl-space-md">
                      <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></div>
                      <div className="flex items-center justify-between flex-wrap">
                        <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">07:15 – 08:00 • Step 02</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Bay 4 Sorting Finger</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">High-Speed Bay Loading &amp; LIFO Route Sortation</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Receiving pre-sorted roll-containers, manual verification of DIN load security bars, weight distribution equalization, and chronological shelf placement according to LIFO (Last-In-First-Out) multi-drop stops. Verification of limited quantity hazardous parcels (ADR 1.1.3.6).
                      </p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative pl-space-md">
                      <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
                      <div className="flex items-center justify-between flex-wrap">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">08:15 – 12:30 • Step 03</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Mitte B2B Core Zone</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">Morning Wave 1: Commercial &amp; B2B Priority Deliveries</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Executing 45 time-critical business deliveries across Friedrichstraße, Unter den Linden, and Alexanderplatz retail corridors. Navigating loading bay bays, goods elevators, and concierge digital verification kiosks under strict appointment windows.
                      </p>
                    </div>
                    {/* Step 4 */}
                    <div className="relative pl-space-md">
                      <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-tertiary-container ring-4 ring-surface-container-lowest"></div>
                      <div className="flex items-center justify-between flex-wrap">
                        <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">12:30 – 13:15 • Step 04</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">DC Charging Hub Ost</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">Mandatory Rest &amp; 50kW CCS Fast-Charging Top-Up</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Statutory 45-minute paid rest break. Autonomous hookup to designated corridor 50kW CCS charging post, boosting van traction battery from 42% back above 85% to ensure full thermal battery reserve for afternoon residential runs.
                      </p>
                    </div>
                    {/* Step 5 */}
                    <div className="relative pl-space-md">
                      <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
                      <div className="flex items-center justify-between flex-wrap">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">13:15 – 16:30 • Step 05</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Prenzlauer Berg Urban</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">Afternoon Wave 2: Residential Multi-Drop &amp; Hub Return</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Completing 65 residential stops in dense multi-story apartment sectors. Geofenced smart locker drop-offs, automated customer arrival push triggers, undelivered parcel barcode reconciliation, depot re-docking, and overnight telemetry upload.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Module 03: Regulatory Compliance & Courier Equivalencies */}
                <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-primary-fixed-dim text-on-primary-fixed font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                      03
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Regulatory Compliance</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Licensing, Permits &amp; Courier Equivalencies</h2>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Cross-border recognition framework for multi-drop couriers operating commercial alternative fuel vans in the Federal Republic of Germany and across the Schengen economic area.
                  </p>
                  {/* Matrix Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">euro_symbol</span>
                        <h4 className="font-label-lg text-label-lg font-bold text-on-surface">European Union / Germany</h4>
                      </div>
                      <div className="text-[12px] font-label-md text-on-surface-variant">Class B (Fahrerlaubnis B)</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Eligible for electric vans up to 4.25t GVW under §6 Abs. 3b StVG (alternative drive weight derogation) with clean Flensburg register record (&lt;2 points).
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">flag</span>
                        <h4 className="font-label-lg text-label-lg font-bold text-on-surface">United Kingdom (DVLA)</h4>
                      </div>
                      <div className="text-[12px] font-label-md text-on-surface-variant">Category B Standard Car</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Direct statutory conversion to German Klasse B. Proof of at least 12 months commercial van delivery experience in London or major UK metropolitan core.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-tertiary">public</span>
                        <h4 className="font-label-lg text-label-lg font-bold text-on-surface">USA &amp; Canada Equivalency</h4>
                      </div>
                      <div className="text-[12px] font-label-md text-on-surface-variant">Class C / Class 5 Commercial</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Fast-track reciprocal conversion at Berlin Bürgeramt with certified DMV motor vehicle report translation and verified parcel courier employment history.
                      </p>
                    </div>
                  </div>
                  {/* Secondary Compliance Badges */}
                  <div className="flex items-center gap-space-sm flex-wrap pt-space-xs">
                    <span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">security</span> DIN EN 12195 Cargo Restraint Certified
                    </span>
                    <span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">science</span> ADR 1.1.3.6 Small Quantity Hazardous Goods
                    </span>
                    <span className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">health_and_safety</span> DGUV Vorschrift 70 Fleet Safety Protocol
                    </span>
                  </div>
                </section>

                {/* Module 04: Total Reward Package */}
                <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between flex-wrap gap-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-lg bg-primary-fixed-dim text-on-primary-fixed font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        04
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Total Reward Package</span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Compensation, Allowances &amp; Benefits</h2>
                      </div>
                    </div>
                    <span className="px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                      Tariff Bound Class 3
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[20px]">restaurant</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Urban Daily Stipend</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          €18.50 net per completed operational day in food, warm beverage, and hydration allowance, exempt from income tax and social withholding under German per diem standards.
                        </p>
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[20px]">electric_car</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Dedicated Clean EV Vehicle</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Permanent single-driver assignment to a late-model Mercedes-Benz eSprinter with heated ergonomic suspension seat, active lane keeping, and 360° top-down surround cameras.
                        </p>
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Productivity &amp; Eco-Bonus</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Up to €280 monthly supplement based on first-attempt delivery success (&gt;98.5%) and telematics safety score (smooth braking, zero curb strikes, zero speed violations).
                        </p>
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <div className="w-10 h-10 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[20px]">school</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Career Upskilling</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Fully funded company sponsorship for heavy vehicle license upgrade (C1/C), ADR certificate renewals, and progression pathways to Depot Shift Dispatcher or Lead Driver Trainer.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Module 05: Fast-Track Onboarding */}
                <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between flex-wrap gap-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-8 h-8 rounded-lg bg-primary-fixed-dim text-on-primary-fixed font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                        05
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Fast-Track Onboarding</span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Structured 3-Stage Selection &amp; Route Induction</h2>
                      </div>
                    </div>
                    <span className="px-space-sm py-1 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                      48-Hour Assessment Window
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-bold">STAGE 01</span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-[10px] font-bold text-on-surface">24 Hours</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Document &amp; Record Audit</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Electronic verification of EU/German driving license, police certificate of good conduct (Führungszeugnis), and digital work authorization check.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-bold">STAGE 02</span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-[10px] font-bold text-on-surface">On-Site Yard</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Van Maneuvering &amp; Docking</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Practical assessment of tight-space maneuvering, blind mirror reversing, loading bay docking accuracy, and CCS charging cable handling.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-bold">STAGE 03</span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-[10px] font-bold text-on-surface">Live Route</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Accompanied Route Shadowing</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full 4-hour live route co-pilot shift with a Senior Urban Courier Trainer mastering Zebra scanner shortcuts, multi-floor drop routing, and customer interaction.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Interactive Fast-Track Requisition & Telemetry Sidebar */}
              <aside className="lg:col-span-4 flex flex-col gap-space-lg sticky top-20">
                {/* Application Card */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Fast-Track Requisition</h3>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct carrier review by Paketzentrum Berlin-Mitte Logistics Board. Response within 2 business days.
                  </p>
                  <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">Full Legal Name</label>
                      <input
                        className="w-full h-11 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        placeholder="e.g. Lukas Meyer"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">Official Contact Email</label>
                      <input
                        className="w-full h-11 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        placeholder="l.meyer@courier-logistics.de"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">Mobile Phone (WhatsApp Verified)</label>
                      <input
                        className="w-full h-11 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        placeholder="+49 171 234 5678"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-space-xs pt-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">Driver Verification Checklist</label>
                      <label className="flex items-start gap-space-xs cursor-pointer">
                        <input
                          checked={formData.catB}
                          onChange={(e) => setFormData({ ...formData, catB: e.target.checked })}
                          className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                          required
                          type="checkbox"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">I hold a valid EU Category B driving license (min. 12 months).</span>
                      </label>
                      <label className="flex items-start gap-space-xs cursor-pointer">
                        <input
                          checked={formData.vanExp}
                          onChange={(e) => setFormData({ ...formData, vanExp: e.target.checked })}
                          className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                          type="checkbox"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">I have experience commanding high-roof or 3.5t commercial vans.</span>
                      </label>
                      <label className="flex items-start gap-space-xs cursor-pointer">
                        <input
                          checked={formData.cleanRecord}
                          onChange={(e) => setFormData({ ...formData, cleanRecord: e.target.checked })}
                          className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                          type="checkbox"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">I can present a clean background certificate (Führungszeugnis).</span>
                      </label>
                    </div>
                    {/* Upload Container */}
                    <div
                      onClick={() => showToast("File selector opened for driver credentials")}
                      className="mt-1 p-space-sm rounded-lg bg-surface-container border border-dashed border-outline-variant flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-high transition-colors"
                    >
                      <span className="material-symbols-outlined text-[24px] text-primary">cloud_upload</span>
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface mt-1">Upload CV / Driving License Scan</span>
                      <span className="text-[11px] font-label-sm text-on-surface-variant">PDF, JPG up to 12MB</span>
                    </div>
                    <button
                      className="w-full mt-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-3 px-space-md rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">send</span> Submit Certified Application
                    </button>
                  </form>
                </div>

                {/* Quote from Operations Lead */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden flex-shrink-0">
                      <span className="material-symbols-outlined text-[24px]">engineering</span>
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Markus Brandt</h4>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Urban Fleet Dispatch Director • Berlin-Mitte</div>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                    &quot;Operating in Berlin-Mitte requires acute spatial awareness, respect for pedestrian zones, and tactical battery management. Couriers who take pride in precision delivery find an exceptional career here with real equipment and tariff protection.&quot;
                  </p>
                </div>

                {/* Telematics & Route Profile Card */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="font-label-lg text-label-lg font-bold text-on-surface uppercase tracking-wider">Urban Telematics Profile</h4>
                    <span className="px-space-xs py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">Active Corridor</span>
                  </div>
                  <div className="flex flex-col gap-2 pt-1 font-body-sm text-body-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Route Sector:</span>
                      <span className="font-semibold text-on-surface">Berlin Mitte / Prenzlauer Berg</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Avg Drops / Shift:</span>
                      <span className="font-semibold text-on-surface">110 Drops Direct Line</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">EV Assigned Van:</span>
                      <span className="font-semibold text-on-surface">Mercedes eSprinter (113 kWh)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Range Efficiency:</span>
                      <span className="font-semibold text-primary font-mono">22.4 kWh / 100km</span>
                    </div>
                  </div>
                  {/* Micro Drop Distribution Visualization Bar */}
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="flex justify-between text-[11px] font-label-sm text-on-surface-variant">
                      <span>Wave 1: B2B Core (41%)</span>
                      <span>Wave 2: Residential (59%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden flex">
                      <div className="h-full bg-primary" style={{ width: "41%" }}></div>
                      <div className="h-full bg-secondary" style={{ width: "59%" }}></div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* Bottom Institutional Verification Bar */}
          <section className="w-full bg-surface-container-high py-space-md px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="w-full max-w-[1920px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left">
              <div className="flex items-center gap-space-xs flex-wrap justify-center sm:justify-start">
                <span className="material-symbols-outlined text-[20px] text-primary">verified_user</span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  Jobzeta International Verification Network • Verified Courier Requisition ID: #DE-BER-4921-EV
                </span>
              </div>
              <div className="flex items-center gap-space-md text-[12px] font-label-sm text-on-surface-variant flex-wrap justify-center sm:justify-end">
                <span>TLS 1.3 Encrypted Data Port</span>
                <span>Equal Opportunity Transport Employer</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
