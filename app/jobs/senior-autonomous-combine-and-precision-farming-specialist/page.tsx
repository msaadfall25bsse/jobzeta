"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorAutonomousCombineSpecialistPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    hasPermit: true,
    hasHours: true,
    availableFullSeason: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md min-h-screen antialiased flex flex-col selection:bg-primary selection:text-on-primary">
      {/* Global Jobzeta Header */}
      <Header />

      <main className="w-full pt-16 sm:pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Meta Bar & Breadcrumbs */}
          <section className="w-full bg-surface-container-low px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-sm border-b-0 shadow-sm">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-sm">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center flex-wrap gap-x-space-xs text-label-md font-label-md text-on-surface-variant"
              >
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1"
                  href="/"
                >
                  <span className="material-symbols-outlined text-[15px]">home</span>
                  <span>Home</span>
                </Link>
                <span className="text-outline-variant font-bold">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories"
                >
                  Categories
                </Link>
                <span className="text-outline-variant font-bold">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/agriculture-and-farming"
                >
                  Agriculture &amp; Farming
                </Link>
                <span className="text-outline-variant font-bold">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/agriculture-and-farming/machinery-and-combine-operators"
                >
                  Machinery &amp; Combine Operators
                </Link>
                <span className="text-outline-variant font-bold">/</span>
                <span className="text-primary font-bold">Technical Specs</span>
              </nav>

              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary text-label-sm font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-ping"></span>
                  ACTIVE HARVEST CORRIDOR: MAGDEBURG / HANNOVER (GERMANY)
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-secondary text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-[13px] text-primary">verified</span>
                  TRACTOR LICENSE CAT T (EU VERIFIED)
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-label-sm font-label-sm">
                  DIRECT HARVEST ENTERPRISE REQUISITION
                </span>
              </div>
            </div>

            {/* Institutional Operational Bar */}
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto mt-space-sm pt-space-xs grid grid-cols-1 md:grid-cols-3 gap-space-xs text-label-sm font-label-sm text-tertiary">
              <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">factory</span>
                <span>
                  <strong className="text-on-surface">Harvest Facility ID:</strong> DE-AGRI-MAG-08
                </span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
                <span>
                  <strong className="text-on-surface">Protocol:</strong> ISO 11783 ISOBUS / CE 2006/42/EC
                </span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">agriculture</span>
                <span>
                  <strong className="text-on-surface">Field Capacity:</strong> 180 Hectares / 24h Window
                </span>
              </div>
            </div>
          </section>

          {/* Photographic Hero Header with Direct Overlay */}
          <section className="relative w-full overflow-hidden bg-on-secondary-fixed">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transform hover:scale-100 transition-transform duration-1000"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoEFqTPAtSX5ae4YkNNWDl31lAFakjo7Jm3xt_Bz-ZQvMH-kfj-WPKhRsDNrW6hQhCFHyJ3XqkIHhDb0vh-PtOMtIRfQ30WlFiBDURCv3W1DPdXIcOf4pZXqEPfPxqV_XsPSSp823gOe-dLztnJJ7XdKRlU6hHo1SoEWdgLlffXeCM1_rN4DqxXtapOeGqI6RFETwrJ-A_56AyP1R8LQ6DhjCirhYC0gk1zivAOO3SsnOvh22Pz9qHiw')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-on-secondary-fixed via-on-secondary-fixed/90 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed via-transparent to-transparent z-10"></div>

            <div className="relative z-20 max-w-7xl 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                {/* Hero Left Column */}
                <div className="lg:col-span-8 flex flex-col gap-space-md">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-md">
                      <span className="material-symbols-outlined text-[14px]">shield_with_heart</span>
                      Agrar-Tarifvertrag Verified
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">satellite_alt</span>
                      RTK Precision Telemetry
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/20 text-surface backdrop-blur-md font-label-sm text-label-sm">
                      Seasonal Deployment 2025
                    </span>
                  </div>

                  <h1 className="font-headline-xl text-3xl sm:text-headline-xl text-surface tracking-tight leading-tight font-bold">
                    Senior Autonomous Combine &amp; Precision Farming Specialist
                  </h1>

                  <p className="font-body-lg text-base sm:text-body-lg text-surface-variant max-w-2xl leading-relaxed">
                    Dual-Rotor Combine Harvester (John Deere S780i / CLAAS Lexion 8800 - 12.2m Draper) • Precision RTK Yield Mapping, Grain Loss Minimization &amp; High-Capacity Fleet Telematics (Agrar-Tarifvertrag / Category T Specialist).
                  </p>

                  <div className="flex flex-wrap gap-2 pt-space-xs">
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-surface text-label-sm font-label-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">badge</span>
                      Category T Driving Permit (60 km/h)
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-surface text-label-sm font-label-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">gps_fixed</span>
                      John Deere StarFire 7000 RTK (&lt;2.5cm)
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-surface text-label-sm font-label-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">settings_input_component</span>
                      ISO 11783 ISOBUS Terminal
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-surface text-label-sm font-label-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-fixed">grain</span>
                      Grain Loss Sensor Calibration (&lt;0.5%)
                    </span>
                  </div>
                </div>

                {/* Floating Right Tariff Card */}
                <div className="lg:col-span-4">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xl relative overflow-hidden flex flex-col gap-space-md">
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 pointer-events-none"></div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                        Standard Remuneration
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm font-bold">
                        Grade V
                      </span>
                    </div>

                    <div>
                      <div className="text-label-md font-label-md text-tertiary uppercase">
                        AGRI-TARIFF LEVEL V (HARVEST SPECIALIST)
                      </div>
                      <div className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mt-1 flex items-baseline gap-1 font-bold">
                        <span>€4,200 – €5,600</span>
                        <span className="font-body-sm text-body-sm text-tertiary font-normal">/ mo gross</span>
                      </div>
                      <div className="text-label-sm font-label-sm text-outline mt-0.5">
                        Estimated €42,000 – €58,000 annualized base
                      </div>
                    </div>

                    <div className="space-y-space-xs bg-surface-container-low p-space-sm rounded-lg">
                      <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[18px]">payments</span>
                        <span>
                          <strong>+ €20.00 / Day</strong> Tax-Free Harvest Shift Allowance
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[18px]">airline_seat_recline_extra</span>
                        <span>Grammer Climate Air-Suspended Cab Included</span>
                      </div>
                      <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[18px]">holiday_village</span>
                        <span>Furnished Agrar-Residence Accommodation</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs pt-space-xs">
                      <a
                        className="w-full h-11 bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center gap-2 font-bold cursor-pointer"
                        href="#fast-track-form"
                      >
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        <span>Apply for Dispatch</span>
                      </a>
                      <div className="grid grid-cols-2 gap-space-xs">
                        <button
                          className="h-10 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          onClick={() => window.print()}
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px] text-tertiary">download</span>
                          <span>Technical PDF</span>
                        </button>
                        <button
                          className="h-10 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: "Senior Autonomous Combine & Precision Farming Specialist",
                                url: window.location.href,
                              }).catch(() => {});
                            } else {
                              navigator.clipboard.writeText(window.location.href);
                              alert("Requisition Link copied to clipboard!");
                            }
                          }}
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px] text-tertiary">share</span>
                          <span>Share Requisition</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Technical Specifications Content */}
          <section className="max-w-7xl 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              {/* Left Column: 5 Structured Operational Modules (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* Module 01: Primary Scope */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant">
                  <div className="flex items-center justify-between border-b-0 pb-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        01
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">
                          Operational Mechanics
                        </span>
                        <h2 className="font-headline-md text-xl sm:text-headline-md text-on-surface font-bold">
                          Primary Scope: Combine Harvester Mechanics &amp; Telematics Navigation
                        </h2>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm hidden sm:inline-block">
                      Fleet Class: Ultra-High Tier
                    </span>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The Senior Autonomous Combine Specialist leads autonomous and semi-autonomous harvesting execution across a concentrated 3,500-hectare rotation comprising winter wheat, winter malting barley, grain maize, and oilseed rape (canola) in the Magdeburger Börde and Hannover agri-corridors.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
                        <span className="material-symbols-outlined">memory</span>
                        <span className="font-label-lg text-label-lg text-on-surface font-bold">
                          Precision Guidance &amp; Telemetry
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full-spectrum configuration of John Deere StarFire 7000 / Trimble RTX RTK navigation rigs providing sub-2.5cm repeatability. Dynamic A-B contour line management, automated headland turns with AutoTrac Turn Automation, and dual-frequency field boundary sync.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                      <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
                        <span className="material-symbols-outlined">sync_alt</span>
                        <span className="font-label-lg text-label-lg text-on-surface font-bold">
                          High-Capacity Auger Synchronization
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Execution of uninterrupted grain cart loading on the fly via John Deere Machine Sync or CLAAS Machine2Machine radio links. Dynamic positioning control of tandem 25-tonne chaser bins at sustained 8.5 km/h field speeds.
                      </p>
                    </div>
                  </div>

                  {/* Critical Operational Mandate Callout */}
                  <div className="bg-surface-container-high/60 p-space-md rounded-xl shadow-sm flex items-start gap-space-md">
                    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">warning</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                        Zero-Fire &amp; Grain Loss Threshold Mandate
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Strict adherence to pre-shift radiator and engine chaff cleanouts with high-pressure air blowers; grain loss must not exceed 0.5% at harvesting speeds between 6.5 km/h and 9.0 km/h. Optical and acoustic drop sensors must undergo recalibration after each crop shift change.
                      </p>
                    </div>
                  </div>

                  {/* Telematics Data Bar Inline */}
                  <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm border border-outline-variant">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-md text-label-md text-on-surface font-bold">
                        Harvester Operational Efficiency Metrics (JD S780i / CLAAS 8800)
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Telemetry Live Feed
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-label-sm text-tertiary mb-1">
                          <span>Grain Loss Threshold (Limit: 0.50%)</span>
                          <span className="font-bold text-on-surface">0.28% Loss Factor</span>
                        </div>
                        <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "56%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-label-sm text-tertiary mb-1">
                          <span>Engine Load Optimization (625 HP Tier 5 Engine)</span>
                          <span className="font-bold text-on-surface">88% Continuous Efficiency</span>
                        </div>
                        <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                          <div className="bg-secondary h-2 rounded-full" style={{ width: "88%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-label-sm text-tertiary mb-1">
                          <span>RTK Pass-to-Pass Accuracy Drift (&lt;2.5 cm target)</span>
                          <span className="font-bold text-on-surface">1.4 cm Active Deviation</span>
                        </div>
                        <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                          <div className="bg-primary-container h-2 rounded-full" style={{ width: "72%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Module 02: Daily Timetable */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                      02
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">
                        Operational Timeline
                      </span>
                      <h2 className="font-headline-md text-xl sm:text-headline-md text-on-surface font-bold">
                        Daily Timetable: Harvest Shift Chronology
                      </h2>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    During peak summer harvest campaign (July through September), specialists follow a strict 5-stage protocol to maximize threshing yield before dew thresholds return.
                  </p>

                  <div className="relative pl-6 space-y-space-md before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-high">
                    {/* Step 1 */}
                    <div className="relative flex flex-col gap-1">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary shadow-sm"></div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-label-lg text-label-lg text-primary font-bold">06:30 – 07:30</span>
                        <span className="font-label-md text-label-md uppercase text-tertiary tracking-wider font-bold">
                          Phase 1: Diagnostic &amp; Safety
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Pre-Harvest Machine Inspection, Stone Trap Clear &amp; Air Blower Chaff Purge
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full 360-degree walkaround. Lubrication of high-speed bearings, concave gap physical measurement, stone trap dumping, inspection of knife sections on 12.2m draper table, and compressed-air radiator blowdown to clear straw dust.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col gap-1">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-secondary shadow-sm"></div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-label-lg text-label-lg text-secondary font-bold">07:30 – 12:30</span>
                        <span className="font-label-md text-label-md uppercase text-tertiary tracking-wider font-bold">
                          Phase 2: Transition &amp; Sector Run
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Morning High-Moisture Transition &amp; Main Threshing Run (Wheat Field Sector A)
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Commencement of harvest as relative air humidity declines below 60%. Continuous calibration of rotor speed and fan airflow. Immediate field sample test using handheld Dickey-John moisture tester to corroborate ISOBUS moisture readout.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col gap-1">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary shadow-sm"></div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-label-lg text-label-lg text-primary font-bold">12:30 – 17:00</span>
                        <span className="font-label-md text-label-md uppercase text-tertiary tracking-wider font-bold">
                          Phase 3: Golden Window Peak
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Peak Golden Hour Full-Speed Threshing &amp; Synchronous Chaser Bin Offloading
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Maximized throughput window (&lt;14.5% moisture target). Combine operating at peak 75 tonnes/hour rate. Uninterrupted non-stop harvesting with active machine-to-machine radio synchronization for offloading to chaser haulers.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex flex-col gap-1">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-tertiary shadow-sm"></div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-label-lg text-label-lg text-tertiary font-bold">17:00 – 17:45</span>
                        <span className="font-label-md text-label-md uppercase text-tertiary tracking-wider font-bold">
                          Phase 4: Telemetry Sync &amp; Refuel
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Mandatory Field Rest, Li-ion Device Sync &amp; Evening Moisture Audit
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Mandatory operator fatigue relief. Mobile fuel bowser replenishment (1,250L diesel + DEF), upload of high-definition yield maps to John Deere Operations Center / CLAAS TELEMATICS cloud, grain moisture re-check.
                      </p>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex flex-col gap-1">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-on-surface shadow-sm"></div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-label-lg text-label-lg text-on-surface font-bold">17:45 – 22:30</span>
                        <span className="font-label-md text-label-md uppercase text-tertiary tracking-wider font-bold">
                          Phase 5: Night Operation &amp; Securing
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Dew Point Night Harvesting, Field Closure &amp; High-Pressure Machine Cleanout
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Night harvest utilizing 360-degree LED package until straw toughness or dew point exceeds limits (&gt;16% moisture). Header detachment onto transport trailer, road safety lighting deployment, return to farm staging center.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Module 03: Compliance Matrix */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                      03
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">
                        Regulatory Equivalencies
                      </span>
                      <h2 className="font-headline-md text-xl sm:text-headline-md text-on-surface font-bold">
                        Compliance Matrix: Licensing, Permits &amp; International Equivalencies
                      </h2>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Jobzeta provides cross-border license harmonization and visa fast-tracking for qualified global combine operators entering the German harvest campaign.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    {/* DE / EU Base */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Germany / EU Base
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                          Standard
                        </span>
                      </div>
                      <div className="font-label-md text-label-md text-primary font-bold">
                        Führerschein Klasse T
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Self-propelled combines, foragers, and tractors with top design speed up to 60 km/h. Includes trailers and wide-vehicle compliance certificates for combinations exceeding 3.00m transport width.
                      </p>
                    </div>

                    {/* United Kingdom */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          United Kingdom
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                          Direct Conversion
                        </span>
                      </div>
                      <div className="font-label-md text-label-md text-secondary font-bold">
                        Category F + Lantra / C&amp;G Combine Cert
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        UK Category F Agricultural Tractor entitlement accompanied by City &amp; Guilds NPTC or Lantra Certified Harvester credentials. Recognized under German reciprocal seasonal agricultural fast-track protocols.
                      </p>
                    </div>

                    {/* North America */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          North America (US / Canada)
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm font-bold">
                          Equivalent
                        </span>
                      </div>
                      <div className="font-label-md text-label-md text-tertiary font-bold">
                        CDL Class A / State Ag + OSHA 1928
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Custom Harvester verification or CDL Class A license with documented 1,000+ hours on Class 8/9 rotary combines across US Custom Harvest trails or Canadian prairie operations.
                      </p>
                    </div>

                    {/* Australia / NZ */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Australia &amp; New Zealand
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm font-bold">
                          Equivalent
                        </span>
                      </div>
                      <div className="font-label-md text-label-md text-tertiary font-bold">
                        Heavy Rigid (HR) / Agri Machinery Exemption
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Australian HR or Class 1 driver license with grain harvesting contractor validation, paired with Working Holiday Visa (Subclass 417 reciprocal) or German short-term agricultural visa sponsor.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Module 04: Total Rewards Package */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                      04
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">
                        Benefits &amp; Equipment
                      </span>
                      <h2 className="font-headline-md text-xl sm:text-headline-md text-on-surface font-bold">
                        Total Rewards Package: Compensation, Allowances &amp; Benefits
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[28px] mt-0.5">
                        restaurant
                      </span>
                      <div>
                        <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                          Daily Harvest Shift Stipend
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          €20.00 / day tax-free field catering &amp; night shift subsistence allowance disbursed weekly directly onto corporate pre-loaded stipend debit card.
                        </p>
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[28px] mt-0.5">
                        airline_seat_recline_normal
                      </span>
                      <div>
                        <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                          Assigned Ergonomic Cab
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Grammer Active Dual-Motion air-suspension leather seat, refrigerated 40L coolbox, 360° LED harvest floodlighting, Bluetooth premium hands-free telemetry system.
                        </p>
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[28px] mt-0.5">
                        savings
                      </span>
                      <div>
                        <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                          Zero-Breakage &amp; Fuel Bonus
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Quarterly performance payout up to €1,000 for zero rock/metal ingestion damage to threshing cylinders and maintaining under 16.5 liters/ha diesel consumption.
                        </p>
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[28px] mt-0.5">
                        school
                      </span>
                      <div>
                        <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                          Ag-Tech Career Progression
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Full enterprise sponsorship for John Deere Connected Support certification and Level 3 Autonomous Field Robotics qualification after completed campaign.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Module 05: Fast-Track Harvest Hiring Funnel */}
                <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                      05
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">
                        Recruitment Process
                      </span>
                      <h2 className="font-headline-md text-xl sm:text-headline-md text-on-surface font-bold">
                        Fast-Track Harvest Hiring Funnel (4-Day Turnaround)
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2 relative">
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Stage 01 • 24 Hours
                      </span>
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                        Credentials &amp; License Vetting
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Verification of Category T / CDL / Class F permit, background verification, and review of prior combine acreage logbooks.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2 relative">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">
                        Stage 02 • 45 Mins
                      </span>
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                        Simulator &amp; Maneuvering Test
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Draper header coupling evaluation, RTK A-B line lock benchmark, and narrow rural gate transit maneuvering assessment.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2 relative">
                      <span className="font-label-sm text-label-sm text-on-surface font-bold">
                        Stage 03 • Shift 1
                      </span>
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                        Live Combine Shadowing
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Paired in-cab operation with Farm Operations Director for 1 full harvest cycle; immediate independent dispatch upon sign-off.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Right Sticky Column: Dispatch Telematics, Fast-Track Form & Quote (4 cols) */}
              <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                {/* Application Form Card */}
                <div
                  className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md sticky top-20 border border-outline-variant"
                  id="fast-track-form"
                >
                  <div className="flex items-center justify-between border-b-0 pb-1">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                        Fast-Track Intake
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Submit Dispatch Dossier
                      </h3>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </div>

                  <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-bold mb-1">
                        Full Legal Name
                      </label>
                      <input
                        className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors"
                        placeholder="e.g. Lukas Meyer"
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-bold mb-1">
                        Email Address
                      </label>
                      <input
                        className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors"
                        placeholder="l.meyer@agri-network.eu"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-bold mb-1">
                        Mobile / WhatsApp (Dispatch Alert)
                      </label>
                      <input
                        className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors"
                        placeholder="+49 170 829 4410"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2 pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          checked={formData.hasPermit}
                          className="w-4 h-4 rounded mt-0.5 text-primary accent-primary"
                          required
                          type="checkbox"
                          onChange={(e) => setFormData({ ...formData, hasPermit: e.target.checked })}
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          I hold an active EU Category T, UK Cat F, or CDL heavy ag machinery permit.
                        </span>
                      </label>

                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          checked={formData.hasHours}
                          className="w-4 h-4 rounded mt-0.5 text-primary accent-primary"
                          required
                          type="checkbox"
                          onChange={(e) => setFormData({ ...formData, hasHours: e.target.checked })}
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Verified 500+ hours combine harvester operation with GPS RTK autosteer.
                        </span>
                      </label>

                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          checked={formData.availableFullSeason}
                          className="w-4 h-4 rounded mt-0.5 text-primary accent-primary"
                          required
                          type="checkbox"
                          onChange={(e) =>
                            setFormData({ ...formData, availableFullSeason: e.target.checked })
                          }
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Available for full duration of Lower Saxony harvest (July 15 - Sept 25).
                        </span>
                      </label>
                    </div>

                    {/* Upload Zone */}
                    <div
                      className="mt-2 p-space-md rounded-lg bg-surface-container-low text-center flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container transition-colors"
                      onClick={() => alert("Upload dialog opened. Please select your Driving License, Code 95 or Acreage Logbook.")}
                    >
                      <span className="material-symbols-outlined text-primary text-[28px]">upload_file</span>
                      <span className="font-label-md text-label-md text-on-surface font-bold mt-1">
                        Attach Driving License &amp; Acreage Log
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary">
                        PDF, JPG, PNG up to 15MB
                      </span>
                    </div>

                    <button
                      className="w-full h-11 mt-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 font-bold cursor-pointer"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span>Transmit Application</span>
                    </button>
                  </form>

                  {formSubmitted && (
                    <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span>Application Dossier securely transmitted to ForwardFarming AG Dispatch Team.</span>
                    </div>
                  )}

                  {/* Telematics Quick Stats Panel */}
                  <div className="bg-surface-container-low p-space-md rounded-xl mt-space-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-tertiary">
                        Telematics Profile
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Harvester Hub
                      </span>
                    </div>
                    <div className="space-y-2 text-label-sm font-label-sm">
                      <div className="flex justify-between items-center py-1">
                        <span className="text-tertiary">Agricultural Hub</span>
                        <span className="font-bold text-on-surface">Lower Saxony (Magdeburg)</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-tertiary">Avg Hectares / Shift</span>
                        <span className="font-bold text-on-surface">45 – 60 Hectares</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-tertiary">Primary Machine</span>
                        <span className="font-bold text-on-surface">JD S780i / CLAAS 8800</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-tertiary">Header Width</span>
                        <span className="font-bold text-on-surface">12.2m (40 ft) Draper</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-tertiary">Field Speed</span>
                        <span className="font-bold text-on-surface">7.2 km/h avg</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-tertiary">Crop Distribution</span>
                        <span className="font-bold text-on-surface">Wheat 55% • Bar 25% • Can 20%</span>
                      </div>
                    </div>
                  </div>

                  {/* Farm Operations Director Quote */}
                  <div className="bg-surface-container-high/60 p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[28px]">format_quote</span>
                    <p className="font-body-sm text-body-sm text-on-surface italic leading-relaxed">
                      “Operating a 600hp combine requires precision agronomy instincts, meticulous eye for grain loss, and deep mastery of satellite telemetry. We provide top-tier machinery and premium housing for skilled operators.”
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-label-sm">
                        JH
                      </div>
                      <div>
                        <div className="font-label-md text-label-md font-bold text-on-surface">
                          Jens Hagemann
                        </div>
                        <div className="font-label-sm text-label-sm text-tertiary">
                          Chief Ag Operations, ForwardFarming AG
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* Interactive Map Anchor Section */}
          <section className="max-w-7xl 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl w-full">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Harvester Deployment Zone
                  </span>
                  <h3 className="font-headline-md text-xl sm:text-headline-md text-on-surface font-bold">
                    Magdeburger Börde &amp; Hannover Agricultural Corridor
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-label-sm font-label-sm">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Soil Index: 95-102 (Black Earth Chernozem)
                  </span>
                </div>
              </div>

              {/* Map Element adhering to data-location constraint */}
              <div
                className="w-full h-80 bg-cover bg-center rounded-xl shadow-inner relative overflow-hidden"
                data-location="Magdeburg, Germany"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGrduWEpD7D-3gNnUWE55U7ZzOasWu3rYalctTnlJw336X8HO2qde7u2XK5QaiLkFKANQpv1MO_RTuQMFE6vD4XJ9iaOIksPw0v4o6FvQvOeiZz-z_-ZkkIn7j3HCtUP_xSTKON_NTW-rz-ssrnn6mG990zfa2keLRLlmzWn1Y-Tp_Vojh5Tvmwz2y24Jfvo6taNyuF1pRL8f5iFcBFBnBEtJEvCrEYdCVXktj42BtJH7EHB_r-6FvdQ')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/70 via-transparent to-transparent flex items-end p-space-md">
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-sm rounded-lg shadow-md flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-primary text-[24px]">pin_drop</span>
                    <div>
                      <div className="font-label-md text-label-md text-on-surface font-bold">
                        Central Grain Depot &amp; Staging Center 08
                      </div>
                      <div className="font-label-sm text-label-sm text-tertiary">
                        39104 Magdeburg, Saxony-Anhalt • 15 Combine Fleet Bay
                      </div>
                    </div>
                  </div>
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
