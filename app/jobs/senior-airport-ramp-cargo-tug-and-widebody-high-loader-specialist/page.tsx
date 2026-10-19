"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorAirportRampCargoTugJobPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    hasAdp: false,
    hasExperience: false,
    hasCleanBackground: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      {/* Global Jobzeta Responsive Header */}
      <Header />

      <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100vh-80px)] flex-1">
        <div className="flex flex-col w-full">
          {/* Operational Breadcrumbs & Telemetry Status Bar */}
          <section className="w-full bg-surface-container-low py-space-sm px-4 sm:px-6 lg:px-8 2xl:px-12 border-b border-surface-container-high/60">
            <div className="w-full max-w-[1920px] mx-auto flex flex-col xl:flex-row xl:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md flex-wrap">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  <span>Home</span>
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-primary transition-colors" href="/categories/driving-and-transportation">
                  Driving &amp; Transportation
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/driving-and-transportation/aviation-cargo-and-airport-ramp-ground-support"
                >
                  Aviation Cargo &amp; Airport Ground Support
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-bold">Technical Specs</span>
              </div>
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> LIVE AIRSIDE DISPATCH
                </span>
                <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  Facility ID: AMS-CARGO-C32
                </span>
                <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                  Protocol: IATA DGR Cat 6 / EASA Ramp 2024
                </span>
                <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm hidden md:inline-block">
                  Apron Yield: 180 ULDs/Shift
                </span>
                <span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm hidden lg:inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span> ICAO Annex 14 Verified
                </span>
              </div>
            </div>
          </section>

          {/* Photographic Hero Header Banner */}
          <section className="relative w-full overflow-hidden bg-on-secondary-fixed">
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHC3G4lsRnbve3PQI5jfsmwsbDT_-4LM8ICt_1S1PUNPnYDFeFPhwz-7Ce-72f8OMbR9YB6J-5KcU6ETSmQiLSTk4qnpspHvnWpUlSJraVKYmTovuxaQ2iEIgppSiZQef1wQYIgu-CNZ48XgOt3TIw-io_n1vbB5LBikgl8JPE3yf5tk5lrGKm7tNCYZtltFFZ-BjA09YEzehweDisZ3UF5UPyF7pOFd3vEY3iuUGrPgTmZ4Yf9yz5dw')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#001c3b]/95 via-[#00201d]/90 to-[#001c3b]/85"></div>

            <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                <div className="lg:col-span-8 flex flex-col gap-space-md text-on-primary">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm tracking-wide uppercase">
                      ACTIVE AIRPORT HUB: AMSTERDAM SCHIPHOL (AMS)
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-wide uppercase">
                      AIRSIDE DRIVER PERMIT (ADP TIER 3)
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-sm text-label-sm tracking-wide uppercase">
                      DIRECT GROUND HANDLER REQUISITION
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-headline-xl font-headline-xl text-on-primary font-bold tracking-tight">
                    Senior Airport Ramp Cargo Tug &amp; Widebody High-Loader Specialist
                  </h1>
                  <p className="font-body-lg text-body-lg text-inverse-on-surface max-w-3xl leading-relaxed">
                    Electric Apron Cargo Tow Tractor (Goldhofer / Charlatte / Linde P250) &amp; Widebody Main-Deck Loader (Trepel Champ 140/350) • High-Speed ULD Apron Dispatch &amp; Flight Turnaround Chronology (CAO Luchtvracht / IATA Tier 3)
                  </p>
                  <div className="flex flex-wrap gap-space-xs pt-space-xs">
                    <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/15 backdrop-blur-sm text-on-primary font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">badge</span> ADP Stage 3 (Ramp/Apron)
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/15 backdrop-blur-sm text-on-primary font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">precision_manufacturing</span> Trepel Champ 140 Dual-Platform
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/15 backdrop-blur-sm text-on-primary font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">warning</span> IATA DGR Cat 6 Dangerous Goods
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/15 backdrop-blur-sm text-on-primary font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">sensors</span> Aircraft Stand Safety Radar Telematics
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/15 backdrop-blur-sm text-on-primary font-label-md text-label-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">headset_mic</span> Bilingual English/Dutch Apron Radio
                    </span>
                  </div>
                </div>

                {/* Tariff Box (Top Right Overlay) */}
                <div className="lg:col-span-4 w-full">
                  <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-xl flex flex-col gap-space-md border border-surface-container-high/60">
                    <div className="flex items-center justify-between pb-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        CAO AIR CARGO TARIFF SCALE IV
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                        Standard Rate
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                        €42,500 – €56,800
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Annual Gross Base • 38-hour Shift Roster</span>
                    </div>
                    <div className="flex flex-col gap-1.5 bg-surface-container-low p-space-sm rounded-lg">
                      <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg font-bold">
                        <span className="material-symbols-outlined text-[18px]">payments</span>
                        <span>+ €18.50/Day Tax-Free Airside Apron Shift Allowance</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant pl-6">
                        Guaranteed Assigned High-Vis Acoustic Cabin &amp; Punctuality Bonus
                      </p>
                    </div>
                    <div className="grid grid-cols-4 gap-space-xs pt-space-xs">
                      <a
                        className="col-span-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary text-center font-label-lg text-label-lg hover:bg-primary-container transition-colors shadow-sm font-bold flex items-center justify-center"
                        href="#requisition-form"
                      >
                        Apply Directly
                      </a>
                      <button
                        className="col-span-1 p-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center cursor-pointer"
                        onClick={() => window.print()}
                        title="Print Specification"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">print</span>
                      </button>
                      <button
                        className="col-span-1 p-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center cursor-pointer"
                        title="Download Technical PDF"
                        type="button"
                        onClick={() => alert("Technical Manual & Aircraft Turnaround Schedule PDF downloaded.")}
                      >
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Two-Column Main Specification Body */}
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              {/* Left Column: 5 Operational Modules (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* MODULE 01 */}
                <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
                  <div className="flex items-center gap-space-sm">
                    <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">01</span>
                    <h2 className="text-xl sm:text-headline-md font-headline-md text-on-surface font-bold">
                      Primary Scope - Role Overview &amp; Airside Turnaround Protocol
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    As a Senior Ramp Cargo Tug &amp; High-Loader Specialist at Amsterdam Airport Schiphol Cargo Apron Zone C, you execute mission-critical freight transfers under tight aircraft slot windows. You are responsible for navigating high-power electric tow tractor trains conveying up to 4 Unit Load Devices (ULDs) across congested airside apron roadways and executing millimeter-precise cargo sill docking of Trepel Champ 140/350 main-deck loaders onto widebody freighters including Boeing 777F, 747-8F, and Airbus A330-200F.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm font-semibold">
                        <span className="material-symbols-outlined">rv_hookup</span>
                        <span className="font-headline-sm text-headline-sm">Ramp Telematics &amp; Apron Tug Navigation</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Active electronic control of Goldhofer/Charlatte tugs with automated brake testing, active dynamic stability on wet tarmac, maximum 25 km/h perimeter lane speed, and strict 5 km/h aircraft stand maneuvering envelope.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm font-semibold">
                        <span className="material-symbols-outlined">align_vertical_top</span>
                        <span className="font-headline-sm text-headline-sm">Automated Cargo Hold Staging &amp; ULD Locks</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Precision elevation alignment to freighter main cargo deck door (up to 5.6m), roller drive motor synchronization, cross-feed container transfer, and verification of mechanical lock engagement prior to aircraft pushback.
                      </p>
                    </div>
                  </div>
                  {/* Alert Box: Zero Fuselage Contact Protocol */}
                  <div className="p-space-md rounded-lg bg-error-container text-on-error-container flex items-start gap-space-sm border border-error/20">
                    <span className="material-symbols-outlined text-[24px] text-error flex-shrink-0 mt-0.5">report_problem</span>
                    <div className="flex flex-col gap-1">
                      <span className="font-label-lg text-label-lg font-bold">Critical Operational Mandate: Zero Fuselage Contact Protocol</span>
                      <p className="font-body-sm text-body-sm text-on-error-container">
                        Strict adherence to EASA 50cm buffer limit, mandatory marshaler hand signals, and zero-drop safety tolerance. Any contact between GSE bumper rubber and aircraft skin triggers immediate stand lockdown and technical re-inspection.
                      </p>
                    </div>
                  </div>
                </section>

                {/* MODULE 02 */}
                <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
                  <div className="flex items-center gap-space-sm">
                    <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">02</span>
                    <h2 className="text-xl sm:text-headline-md font-headline-md text-on-surface font-bold">
                      Daily Timetable - Airport Ramp Dispatch &amp; Flight Turnaround Chronology
                    </h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Standard 05:45 – 15:15 Early Turnaround Shift Schedule (Rotational 4-on / 2-off roster pattern).
                  </p>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    {/* Step 1 */}
                    <div className="flex flex-col sm:flex-row items-start gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="w-full sm:w-28 flex-shrink-0">
                        <span className="font-label-lg text-label-lg font-bold text-primary">05:45 - 06:30</span>
                        <span className="block font-label-sm text-label-sm text-on-surface-variant">Pre-Flight Ops</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Pre-Flight Safety, FOD Inspection &amp; Tow Tractor Telematics Audit
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Inspect electric tractor battery state of charge (SoC &gt; 90%), test hydraulic tow hooks, calibrate FOD radar sensors, and verify apron clearance across Stand C32.
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col sm:flex-row items-start gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="w-full sm:w-28 flex-shrink-0">
                        <span className="font-label-lg text-label-lg font-bold text-primary">06:30 - 09:15</span>
                        <span className="block font-label-sm text-label-sm text-on-surface-variant">Main Inbound</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Inbound Aircraft Docking &amp; High-Loader Main-Deck Offload (42 Main-Deck ULDs)
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Position Trepel Champ 140 to cargo door. Shuttle PMC/PAG pallets via 4-dolly container trains from aircraft stand to Schiphol Cargo City warehouse breakbulk facility.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col sm:flex-row items-start gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="w-full sm:w-28 flex-shrink-0">
                        <span className="font-label-lg text-label-lg font-bold text-primary">09:15 - 12:45</span>
                        <span className="block font-label-sm text-label-sm text-on-surface-variant">Outbound Build</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Outbound Air Cargo Marshaling &amp; Urgent Express/Pharma Aircraft Loading
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Stage temperature-sensitive Envirotainer active pharma units, cross-reference IATA Dangerous Goods Declarations (DGR Cat 6), and secure weight-and-balance loading order.
                        </p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex flex-col sm:flex-row items-start gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="w-full sm:w-28 flex-shrink-0">
                        <span className="font-label-lg text-label-lg font-bold text-primary">12:45 - 13:30</span>
                        <span className="block font-label-sm text-label-sm text-on-surface-variant">Recharge Rest</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Mandatory Paid Rest &amp; Airside Li-ion Opportunity Charging (120kW fast-charging)
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Vehicle docked at Apron Sector C fast-charging stall; driver lunch break in Airside Operations Canteen with full telemetry data upload to Schiphol Ground Command.
                        </p>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="flex flex-col sm:flex-row items-start gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="w-full sm:w-28 flex-shrink-0">
                        <span className="font-label-lg text-label-lg font-bold text-primary">13:30 - 15:15</span>
                        <span className="block font-label-sm text-label-sm text-on-surface-variant">Handover Shift</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Pushback Clearance, Apron FOD Sweeping &amp; Handover to Evening Dispatch
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Final locks verification on Boeing 777F, removal of ground chocks and high-loader, stand sweeping for foreign object debris, and handover to incoming Sector C supervisor.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* MODULE 03 */}
                <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
                  <div className="flex items-center gap-space-sm">
                    <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">03</span>
                    <h2 className="text-xl sm:text-headline-md font-headline-md text-on-surface font-bold">
                      Compliance Matrix - Licensing, Permits &amp; International Equivalencies
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Jobzeta automatically maps international civil aviation ramp permits to the Dutch Royal Marechaussee / Schiphol Airport Authority standards.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    {/* Card 1 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary uppercase font-bold">Netherlands / EU Standard</span>
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Airside Driver Permit (ADP) Tier 3</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full authority for Schiphol Apron, Service Roads &amp; Active Taxiway Crossing corridors (Zone C Cargo Apron authorization included).
                      </p>
                    </div>
                    {/* Card 2 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Germany / EU Equivalent</span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">sync_alt</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Vorfeldführerschein Klasse 3</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Directly transferable from FRA (Frankfurt), MUC (Munich) or LEJ (Leipzig Air Cargo Hub) with a 2-hour Schiphol local topography briefing.
                      </p>
                    </div>
                    {/* Card 3 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">United Kingdom (CAA)</span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">sync_alt</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">CAP 790 Red / Orange Apron Permit</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Accepted from London Heathrow (LHR) or East Midlands (EMA) under mutual recognition upon completion of European safety exam.
                      </p>
                    </div>
                    {/* Card 4 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">United States (FAA)</span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">sync_alt</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">FAA Part 139 Movement Area Endorsement</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Recognized baseline credentials. Expedited 3-day practical conversion through Schiphol Ground Operations Training Academy.
                      </p>
                    </div>
                  </div>
                </section>

                {/* MODULE 04 */}
                <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
                  <div className="flex items-center gap-space-sm">
                    <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">04</span>
                    <h2 className="text-xl sm:text-headline-md font-headline-md text-on-surface font-bold">
                      Total Rewards Package - Compensation, Allowances &amp; Benefits
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-1">
                        <span className="material-symbols-outlined text-[24px]">local_cafe</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Daily Airside Shift Stipend</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        €18.50 per shift tax-free catering &amp; inclement weather tarmac allowance, deposited directly on Dutch debit fuel/meal card weekly.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-1">
                        <span className="material-symbols-outlined text-[24px]">airline_seat_recline_extra</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Assigned All-Weather Ergonomic Cabin</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Guaranteed dedicated heated/air-conditioned cab with 360° roof glass, Grammer air-ride suspension seating, and Bluetooth telemetry comms.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-1">
                        <span className="material-symbols-outlined text-[24px]">military_tech</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Zero-Incident Safety &amp; Punctuality Bonus</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Quarterly merit bonuses up to €900 for spotless zero fuselage contact audit compliance and standard flight turnaround punctuality.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-1">
                        <span className="material-symbols-outlined text-[24px]">trending_up</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Aviation Career Progression Track</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Fully employer-sponsored heavy pushback tractor certification (Goldhofer AST-2) and ramp dispatcher licensing within 12 operational months.
                      </p>
                    </div>
                  </div>
                </section>

                {/* MODULE 05 */}
                <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
                  <div className="flex items-center gap-space-sm">
                    <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">05</span>
                    <h2 className="text-xl sm:text-headline-md font-headline-md text-on-surface font-bold">
                      Fast-Track Hiring Funnel - Structured 3-Stage Assessment &amp; Airside Pass Clearance
                    </h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Target turnaround: 7 business days from initial verification to active airside ramp access badge issuance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between pb-1">
                        <span className="font-label-sm text-label-sm uppercase font-bold text-primary">Stage 01</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">24 Hours</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Credentials &amp; VGB Vetting</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Verification of driving license, existing airside permits, and submission of Marechaussee VGB background documentation.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between pb-1">
                        <span className="font-label-sm text-label-sm uppercase font-bold text-primary">Stage 02</span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">45 Mins</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Apron Maneuvering Test</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Simulator check and live apron docking test: Trepel Champ 140 alignment to B777F cargo sill with 4-dolly reverse parking.
                      </p>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between pb-1">
                        <span className="font-label-sm text-label-sm uppercase font-bold text-primary">Stage 03</span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">Shift 1</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Live Flight Shadowing</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Paired on active apron with Senior Ramp Captain for one full cargo freighter turnaround cycle and telematics sign-off.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Sticky Sidebar (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
                {/* Requisition Application Form */}
                <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-high/60" id="requisition-form">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Fast-Track Application</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                      AMS Cargo Hub
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Apply directly to Swissport / Air Cargo Logistics Ground Command via verified candidate portal.
                  </p>

                  {formSubmitted ? (
                    <div className="p-space-md rounded-lg bg-primary/10 border border-primary/20 text-center flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined text-[36px] text-primary">check_circle</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Application Successfully Transmitted!
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Your profile has been queued with Schiphol Ground Command. A dedicated aviation recruiter will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form className="flex flex-col gap-space-md pt-space-xs" onSubmit={handleSubmit}>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Full Legal Name</label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-sm text-body-sm border border-surface-container-high/40"
                          placeholder="e.g. Lars van der Valk"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Official Contact Email</label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-sm text-body-sm border border-surface-container-high/40"
                          placeholder="lars.vandervalk@example.nl"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Mobile Phone (+31 / EU format)</label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-sm text-body-sm border border-surface-container-high/40"
                          placeholder="+31 6 1234 5678"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      {/* Verification Checklists */}
                      <div className="flex flex-col gap-space-sm pt-space-xs">
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            className="mt-1 w-4 h-4 accent-primary rounded cursor-pointer"
                            required
                            type="checkbox"
                            checked={formData.hasAdp}
                            onChange={(e) => setFormData({ ...formData, hasAdp: e.target.checked })}
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            I hold an active Airside Driver Permit (ADP Stage 2 or 3 / Vorfeldführerschein).
                          </span>
                        </label>
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            className="mt-1 w-4 h-4 accent-primary rounded cursor-pointer"
                            required
                            type="checkbox"
                            checked={formData.hasExperience}
                            onChange={(e) => setFormData({ ...formData, hasExperience: e.target.checked })}
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            I have at least 12 months experience operating airport tow tugs or high-loaders.
                          </span>
                        </label>
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            className="mt-1 w-4 h-4 accent-primary rounded cursor-pointer"
                            required
                            type="checkbox"
                            checked={formData.hasCleanBackground}
                            onChange={(e) => setFormData({ ...formData, hasCleanBackground: e.target.checked })}
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Clean 5-year verifiable employment background for aviation security badge (VGB).
                          </span>
                        </label>
                      </div>

                      {/* Document Upload Dropzone */}
                      <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors text-center cursor-pointer flex flex-col items-center justify-center gap-1.5 border border-dashed border-surface-container-highest">
                        <span className="material-symbols-outlined text-[28px] text-primary">cloud_upload</span>
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Upload CV or Airside Permit</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">PDF, JPG or PNG up to 15MB</span>
                      </div>

                      <button
                        className="w-full py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors shadow-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        <span>Submit Certified Application</span>
                      </button>
                    </form>
                  )}
                </div>

                {/* Airside Dispatch Telematics Profile Card */}
                <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-high/60">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Dispatch Profile
                    </span>
                    <span className="flex items-center gap-1 font-label-sm text-label-sm text-primary font-bold">
                      <span className="w-2 h-2 rounded-full bg-primary"></span> Live Stand C32
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
                    <div className="flex justify-between items-center py-1 bg-surface-container-low px-space-sm rounded">
                      <span className="text-on-surface-variant">Airport Hub</span>
                      <span className="font-semibold text-on-surface">AMS Cargo Zone C</span>
                    </div>
                    <div className="flex justify-between items-center py-1 bg-surface-container-low px-space-sm rounded">
                      <span className="text-on-surface-variant">Avg ULDs / Shift</span>
                      <span className="font-semibold text-on-surface">180 Units</span>
                    </div>
                    <div className="flex justify-between items-center py-1 bg-surface-container-low px-space-sm rounded">
                      <span className="text-on-surface-variant">Primary Loader</span>
                      <span className="font-semibold text-on-surface">Trepel Champ 140</span>
                    </div>
                    <div className="flex justify-between items-center py-1 bg-surface-container-low px-space-sm rounded">
                      <span className="text-on-surface-variant">Max Reach</span>
                      <span className="font-semibold text-on-surface">5.6m (Main Deck)</span>
                    </div>
                    <div className="flex justify-between items-center py-1 bg-surface-container-low px-space-sm rounded">
                      <span className="text-on-surface-variant">Apron Speed Limit</span>
                      <span className="font-semibold text-on-surface">25 km/h / 5 km/h</span>
                    </div>
                  </div>
                  {/* Inbound vs Outbound Proportion Bar */}
                  <div className="flex flex-col gap-1.5 pt-space-xs">
                    <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>Inbound Offload (52%)</span>
                      <span>Outbound Load (48%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden flex">
                      <div className="h-full bg-primary" style={{ width: "52%" }}></div>
                      <div className="h-full bg-secondary-container" style={{ width: "48%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Airport Ramp Operations Director Quote Card */}
                <div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col gap-space-sm border border-surface-container-high/60">
                  <div className="flex items-center gap-space-sm">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center flex-shrink-0"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAozcipY-K8gDQdeqlR4hM1LGcRZ5DC6VEI6tOhMR1O-GVgRZwoDgP2SvSca1u-HLswmlgNKnfz84WwnJ0ovxxLXEsTbfk2YnbzFfa6Otx3WoqYEzOARt-gt8TPqYBDpmBd5as7chr8KsfpuzfAdCKvlD7GtG3dqMkvqTM5dBJC3AyGrSXWp5W692kPLO2dFL8neHA10qbaRYC0KKBhhnRtpMCqQAxBFljvpgHcQC7m23Wdomd4NZbaQ')",
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">Sanne van den Berg</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Ramp Cargo Operations Director, Schiphol Hub
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic pt-1 leading-relaxed">
                    &ldquo;Operating a high-loader onto a widebody freighter in stormy North Sea weather demands true spatial mastery. We provide state-of-the-art electric GSE fleets and guaranteed safety bonuses for professionals who take pride in zero-contact precision.&rdquo;
                  </p>
                  <div className="flex items-center gap-1 text-primary font-label-sm text-label-sm pt-1 font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>Direct Hiring Authority Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Jobzeta Footer */}
      <Footer />
    </div>
  );
}
