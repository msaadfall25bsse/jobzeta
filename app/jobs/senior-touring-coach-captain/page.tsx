"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorTouringCoachCaptainTechnicalSpecsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    catD: true,
    code95: true,
    tachoGen2: true,
    airside: false,
    experience: "5-10 Years (Senior Touring Captain)",
    certified: true,
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
    showToast("Certified Application submitted to the European Fleet Dispatch Roster!");
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleDownloadPdf = () => {
    showToast("Generating technical operational specification PDF...");
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
      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Hero Photographic Banner with Dark Multi-Stop Gradient */}
          <section className="relative w-full bg-inverse-surface text-on-primary overflow-hidden shadow-md">
            {/* Background Image Asset with Multi-Stop Scrim */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeMWZSQHS5pjaBGLx9aGTt3AqrVTRM1sRuwlbWn5GTIKTveJHFesmgEO7s8hxgVkM5TQEm7oQGcffINMzrpyo5uI6uKLYSeLptDhVTjd-Q_UHpUtlxX2ucOdP1_T5tUlEi8byX81JS4ToDW2kPQ-pBRnLtxIhleAifLCEtxTt75NRCm4ngQk6QKbCcGxPthUa0Gn9MiYB56tocC3hO145JcwRh4QJjNBoIipgdcE3VVMOO_4EsksLvQg')",
              }}
            ></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-inverse-surface/40"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/70 to-transparent"></div>
            
            <div className="relative z-10 w-full px-margin py-space-xl flex flex-col gap-space-lg">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-space-xs text-outline-variant font-label-md text-label-md flex-wrap">
                <Link className="hover:text-primary-fixed transition-colors" href="/">
                  Home
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link className="hover:text-primary-fixed transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link
                  className="hover:text-primary-fixed transition-colors"
                  href="/categories/driving-and-transportation"
                >
                  Driving &amp; Transportation
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link
                  className="hover:text-primary-fixed transition-colors"
                  href="/categories/driving-and-transportation/passenger-transport-and-commercial-coach"
                >
                  Passenger Transport &amp; Commercial Coach
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary-fixed">Technical Specs</span>
              </nav>

              {/* Corridor & Status Chips */}
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase tracking-wide shadow-sm">
                  <span className="material-symbols-outlined text-[16px] animate-pulse">sync_alt</span>
                  ACTIVE TRANSIT CORRIDOR: BERLIN ⇄ PRAGUE ⇄ VIENNA
                </span>
                <span className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">departure_board</span>
                  EU SCHEDULED PASSENGER SERVICE
                </span>
                <span className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-highest/20 text-inverse-on-surface backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  DIRECT CARRIER ROSTER
                </span>
              </div>

              {/* Main Title Block & Subtitle */}
              <div className="flex flex-col gap-space-sm max-w-4xl">
                <h1 className="font-headline-xl text-headline-xl text-surface-container-lowest leading-tight tracking-tight">
                  Senior International Touring Coach Captain{" "}
                  <span className="text-primary-fixed font-normal">(EU Trans-Corridor)</span>
                </h1>
                <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
                  High-Capacity Luxury Passenger Coach (Mercedes-Benz Tourismo / Setra TopClass S 516 HD) • Permanent Cross-Border 2/2 or 3/1 Rotation (CAO Personenvervoer / BBO Tier 4)
                </p>
              </div>

              {/* Verification Specs Bar & Integrated Frosted CAO Tariff Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-sm">
                <div className="lg:col-span-7 flex flex-wrap gap-space-xs">
                  <span className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md text-surface-container-lowest font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-primary-fixed">badge</span>
                    EU Category D + Code 95
                  </span>
                  <span className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md text-surface-container-lowest font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-primary-fixed">credit_card</span>
                    Digital Tachograph Gen 2
                  </span>
                  <span className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md text-surface-container-lowest font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-primary-fixed">safety_check</span>
                    Active Brake Assist 5 (ABA 5)
                  </span>
                  <span className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md text-surface-container-lowest font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-primary-fixed">translate</span>
                    Bilingual German/English Passenger Interface
                  </span>
                </div>

                {/* Integrated Frosted Glass CAO Tariff Card */}
                <div className="lg:col-span-5 bg-surface-container-lowest/15 backdrop-blur-xl p-space-md rounded-xl shadow-xl flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-bold">
                      Approved Passenger Tariff
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">
                      Class 4 Rate
                    </span>
                  </div>
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-headline-lg text-headline-lg font-bold text-surface-container-lowest">
                      €46,000 - €64,000
                    </span>
                    <span className="font-body-sm text-body-sm text-surface-container-high">/ year</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-surface-container leading-snug">
                    + €45.00/Day Tax-Free Passenger Per Diem • Dual-Crew Overnight Hotel Subsidy
                  </p>
                  <div className="flex items-center gap-space-sm pt-space-xs">
                    <button
                      onClick={handleDownloadPdf}
                      type="button"
                      className="flex-1 inline-flex items-center justify-center gap-space-xs py-2 px-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary transition-all font-label-lg text-label-lg shadow-sm cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      Technical PDF
                    </button>
                    <button
                      onClick={handlePrint}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-lg bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 text-surface-container-lowest transition-colors cursor-pointer"
                      title="Print Transit Manifest"
                    >
                      <span className="material-symbols-outlined text-[20px]">print</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Body Content: Asymmetric 8-col / 4-col Desktop Grid */}
          <div className="w-full px-margin py-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* LEFT COLUMN: 5 Structured Technical Operational Modules (8-Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-space-xl">
              {/* Module 01: Role Overview & Passenger Transit Protocol */}
              <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between border-b pb-space-sm" style={{ borderBottom: "2px solid #f1f4f8" }}>
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary-container/15 text-primary flex items-center justify-center font-headline-sm">
                      01
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        Operating Directive
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Role Overview &amp; Passenger Transit Protocol
                      </h2>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary font-semibold">
                    <span className="material-symbols-outlined text-[16px]">groups</span> 53+ Passenger Manifest
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  The Senior International Touring Coach Captain commands premium long-distance touring liners on established cross-border corridors across Central Europe, operating express passenger segments between <strong className="text-on-surface">Berlin ZOB, Dresden Hbf, Prague Florenc</strong>, and <strong className="text-on-surface">Vienna Erdberg</strong>. Responsibilities require maintaining rigorous adherence to EC Regulation 561/2006 regarding driving intervals while delivering passenger comfort, dynamic scheduling reliability, and proactive cabin safety.
                </p>

                {/* 2 Structured Technical Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                  {/* Card 1 */}
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs shadow-sm">
                    <div className="flex items-center gap-space-xs text-primary mb-1">
                      <span className="material-symbols-outlined text-[20px]">radar</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Digital Telematics &amp; Safety Systems</h3>
                    </div>
                    <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">check_circle</span>
                        <span><strong>Active Brake Assist 5 (ABA 5):</strong> Radar/camera autonomous emergency response with moving pedestrian detection.</span>
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">check_circle</span>
                        <span><strong>Predictive Powertrain Control:</strong> Topographic satellite transmission cruise optimization reducing fuel draw by 4.5%.</span>
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">check_circle</span>
                        <span><strong>Sideguard Assist &amp; TPMS:</strong> Continuous blind-spot passenger clearance monitoring and live multi-axle pressure telemetry.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs shadow-sm">
                    <div className="flex items-center gap-space-xs text-secondary mb-1">
                      <span className="material-symbols-outlined text-[20px]">badge</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Manifest, Schengen &amp; Cargo Handling</h3>
                    </div>
                    <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">check_circle</span>
                        <span><strong>Contactless Passenger Scan:</strong> High-speed optical 2D barcode validation with real-time seat assignment synchronisation.</span>
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">check_circle</span>
                        <span><strong>Schengen Border Manifests:</strong> Maintenance of verified traveler rosters for Federal Police and Customs audits.</span>
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">check_circle</span>
                        <span><strong>Pneumatic Cargo Bay Logistics:</strong> Balanced lateral weight distribution and tag verification for passenger luggage stowage.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Critical Passenger Safety Alert */}
                <div className="bg-error-container/40 p-space-md rounded-xl flex items-start gap-space-md">
                  <span className="material-symbols-outlined text-error text-[28px] shrink-0 mt-0.5">warning</span>
                  <div className="flex flex-col gap-1">
                    <span className="font-label-lg text-label-lg font-bold text-on-error-container">Critical Operational Mandate: Zero-Tolerance Policy</span>
                    <p className="font-body-sm text-body-sm text-on-error-container leading-snug">
                      Absolute zero blood alcohol concentration (0.00‰ BAC) verified through mandatory depot breathalyzer ignition interlock. Drivers must execute verified onboard Automated External Defibrillator (AED) checks and perform the multi-lingual passenger seatbelt safety address prior to leaving platform gates.
                    </p>
                  </div>
                </div>
              </section>

              {/* Module 02: Convoy Dispatch & Scheduled Transit Chronology */}
              <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">
                <div className="flex items-center justify-between border-b pb-space-sm" style={{ borderBottom: "2px solid #f1f4f8" }}>
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary-container/15 text-primary flex items-center justify-center font-headline-sm">
                      02
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        Timetable Execution
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Convoy Dispatch &amp; Scheduled Transit Chronology
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-md text-label-md px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-medium">
                    Standard 10.5h Single-Duty Cycle
                  </span>
                </div>

                {/* 5-Stage Operational Timeline */}
                <div className="relative flex flex-col gap-space-md pl-6 before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-2.5 before:w-0.5 before:bg-surface-variant">
                  {/* Stage 1 */}
                  <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-space-xs p-space-sm bg-surface-container-low rounded-lg">
                    <div className="absolute -left-[27px] top-4 w-4 h-4 rounded-full bg-primary"></div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono font-bold">
                          06:00 - 06:45
                        </span>
                        <span className="font-label-md text-label-md text-primary font-bold">
                          Step 01 • Depot Departure Prep
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        Rig Walkaround, HVAC Pre-Conditioning &amp; Bay Lock Audit
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Perform walkaround tire percussion check, DEF fluid level audit, automated climate ramp-up to 21.5°C, and pneumatic baggage lock cycle tests at Berlin ZOB Depot.
                      </p>
                    </div>
                    <span className="shrink-0 text-outline-variant font-label-md text-label-md font-mono">Berlin Depot</span>
                  </div>

                  {/* Stage 2 */}
                  <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-space-xs p-space-sm bg-surface-container-low rounded-lg">
                    <div className="absolute -left-[27px] top-4 w-4 h-4 rounded-full bg-primary"></div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono font-bold">
                          06:45 - 07:15
                        </span>
                        <span className="font-label-md text-label-md text-primary font-bold">
                          Step 02 • Terminal Platform Boarding
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        Passenger Boarding, QR Ticket Validation &amp; Mobility Lift
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Docking at Berlin ZOB Platform 14. Validation of 53 passenger digital QR boarding passes, stowage of oversized transit baggage, and deployment of electro-hydraulic PRM wheelchair lift if required.
                      </p>
                    </div>
                    <span className="shrink-0 text-outline-variant font-label-md text-label-md font-mono">Platform 14</span>
                  </div>

                  {/* Stage 3 */}
                  <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-space-xs p-space-sm bg-surface-container-low rounded-lg">
                    <div className="absolute -left-[27px] top-4 w-4 h-4 rounded-full bg-secondary"></div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-mono font-bold">
                          07:15 - 11:30
                        </span>
                        <span className="font-label-md text-label-md text-secondary font-bold">
                          Step 03 • Corridor Cruise - Leg 01
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        Leg 01 Intercity Transit (A13 Dresden ⇄ Bad Gottleuba Border)
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Cruising speed locked at 100 km/h with Predictive Powertrain Control. Intermediate 10-minute passenger dispatch at Dresden Neustadt. Electronic border pre-clearance across Saxon/Czech border.
                      </p>
                    </div>
                    <span className="shrink-0 text-outline-variant font-label-md text-label-md font-mono">295 km Transit</span>
                  </div>

                  {/* Stage 4 */}
                  <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-space-xs p-space-sm bg-surface-container-low rounded-lg">
                    <div className="absolute -left-[27px] top-4 w-4 h-4 rounded-full bg-primary-fixed-dim"></div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono font-bold">
                          11:30 - 12:15
                        </span>
                        <span className="font-label-md text-label-md text-primary font-bold">
                          Step 04 • Statutory Regulation Break
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        Mandatory 45-Min Driver Rest &amp; Passenger Refreshment
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Prague Florenc Central Bus Station. Tachograph locked in rest status mode (EC 561 compliance audit). Lavatory holding tank rinse, waste recycling cycle, and cabin refresh.
                      </p>
                    </div>
                    <span className="shrink-0 text-outline-variant font-label-md text-label-md font-mono">Prague Florenc</span>
                  </div>

                  {/* Stage 5 */}
                  <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-space-xs p-space-sm bg-surface-container-low rounded-lg">
                    <div className="absolute -left-[27px] top-4 w-4 h-4 rounded-full bg-primary"></div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary-container text-on-primary font-mono font-bold">
                          12:15 - 16:30
                        </span>
                        <span className="font-label-md text-label-md text-primary font-bold">
                          Step 05 • Corridor Cruise - Leg 02 &amp; Final Handover
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        Leg 02 Trans-Czech/Austria Transit &amp; Vienna Terminal Deboarding
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Transit via D1/E59 highway into Austrian Republic. Final passenger deboarding at Vienna Erdberg (VIB). Execution of post-trip cabin sanitation inspection and digital tachograph session sign-off.
                      </p>
                    </div>
                    <span className="shrink-0 text-outline-variant font-label-md text-label-md font-mono">Vienna Erdberg</span>
                  </div>
                </div>
              </section>

              {/* Module 03: Licensing & Cross-Border Equivalencies */}
              <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between border-b pb-space-sm" style={{ borderBottom: "2px solid #f1f4f8" }}>
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary-container/15 text-primary flex items-center justify-center font-headline-sm">
                      03
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        Regulatory Compliance
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Licensing &amp; Cross-Border Equivalencies
                      </h2>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline">gavel</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Cross-border captains must hold valid commercial qualifications that satisfy European transport authorities (BAG Germany, MDCR Czech Republic, BMK Austria). Jobzeta facilitates reciprocal legal equivalency validation for experienced international operators:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">European Union / Schengen</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">public</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      • Category D Commercial Driving Licence<br/>
                      • Driver Qualification Card (Code 95) with all 5 mandatory modules up to date<br/>
                      • Digital Tachograph Smart Card Gen 2
                    </p>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">Germany / DACH Region</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">flag</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      • Führerschein Klasse D mit Schlüsselzahl 95<br/>
                      • Personenbeförderungsschein (FzF) for commercial transit<br/>
                      • Medical fitness certificate according to FeV Annex 5
                    </p>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">United Kingdom Reciprocity</span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">domain</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      • Full PCV Category D Driving Licence<br/>
                      • UK Driver Certificate of Professional Competence (CPC)<br/>
                      • UK Border Force Clandestine Civil Penalty accreditation
                    </p>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">US / Canada Conversions</span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">flight_takeoff</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      • Commercial Class B CDL with Passenger (P) Endorsement<br/>
                      • Valid Medical Examiner’s Certificate (DOT)<br/>
                      • Eligible for fast-track 3-week accelerated Code 95 bridge certification
                    </p>
                  </div>
                </div>
              </section>

              {/* Module 04: Compensation, Allowances & Benefits */}
              <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between border-b pb-space-sm" style={{ borderBottom: "2px solid #f1f4f8" }}>
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary-container/15 text-primary flex items-center justify-center font-headline-sm">
                      04
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        Total Reward Package
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Compensation, Allowances &amp; Benefits
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary px-3 py-1 bg-primary/10 rounded-full font-bold">
                    Tariff Bound (BBO Class 4)
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  {/* Box 1 */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-1">payments</span>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Per Diem &amp; Subsistence</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        €45.00 to €60.00 / calendar day untaxed international meal and daily incidental allowance paid bi-weekly alongside standard base remuneration.
                      </p>
                    </div>
                  </div>
                  {/* Box 2 */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-1">directions_bus</span>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Dedicated Premium Coach</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Permanent assignment to late-model 2023+ Mercedes Tourismo 16 RHD or Setra S 516 HD equipped with climate-controlled captain cabin, sleeper berth, and Grammer pneumatic air-ride seating.
                      </p>
                    </div>
                  </div>
                  {/* Box 3 */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-1">energy_savings_leaf</span>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Punctuality &amp; Eco-Bonus</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Up to €350 / month performance dividend based on telematics deceleration smoothness, low idle percentage, and maintaining an aggregate passenger app rating over 4.8 / 5.0.
                      </p>
                    </div>
                  </div>
                  {/* Box 4 */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-1">shield_with_heart</span>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Statutory Perks &amp; Recertification</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        30 days paid annual leave, full corporate contribution to EU mobility pension, premium health coverage, and 100% employer-funded Code 95 periodic refresher training.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Module 05: Structured 3-Stage Selection & Onboarding */}
              <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between border-b pb-space-sm" style={{ borderBottom: "2px solid #f1f4f8" }}>
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary-container/15 text-primary flex items-center justify-center font-headline-sm">
                      05
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        Fast-Track Onboarding
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Structured 3-Stage Selection &amp; Route Induction
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-md text-label-md text-primary font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">timer</span> 48h Assessment
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs relative">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">1</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Credential Audit</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Immediate verification of Category D license, Code 95 validity, digital tachograph clean record, and criminal background clearance within 24 hours.</p>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs relative">
                    <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center font-bold">2</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Sim &amp; Depot Maneuver</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">45-minute simulator trial followed by live 14-meter 3-axle terminal reversing, tight-clearance docking, and emergency wet-surface braking at the depot track.</p>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs relative">
                    <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">3</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Route Marshalling</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Dual-crew pairing on the Berlin-Prague-Vienna line with a Senior Route Instructor for live handover of charging, toll transponders, and border checkpoints.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: Sticky Operational Sidebar (4-Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-space-lg sticky top-24">
              {/* Card 1: Fast-Track Coach Driver Requisition Form */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between border-b pb-space-xs" style={{ borderBottom: "2px solid #f1f4f8" }}>
                  <div className="flex items-center gap-space-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Fast-Track Requisition</h3>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-primary font-bold">
                    24h Response
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Direct carrier placement roster for EuroTrans, RegioJet &amp; FlixBus European corridors. Applications reviewed directly by Fleet Chief Dispatchers.
                </p>
                
                <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">Full Legal Name</label>
                    <input
                      className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                      placeholder="Captain Stefan Brandt"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">Official Email Address</label>
                    <input
                      className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                      placeholder="stefan.brandt@mobility-eu.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  {/* Mobile / WhatsApp */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">Mobile / WhatsApp (+ Country Code)</label>
                    <input
                      className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                      placeholder="+49 170 8923412"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  {/* Endorsements Checkboxes */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">Current Qualifications &amp; Badges</label>
                    <div className="grid grid-cols-1 gap-2">
                      <label className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm cursor-pointer hover:text-on-surface">
                        <input
                          checked={formData.catD}
                          onChange={(e) => setFormData({ ...formData, catD: e.target.checked })}
                          className="w-4 h-4 accent-primary rounded cursor-pointer"
                          type="checkbox"
                        />
                        <span>EU Category D (Buses &gt;8 Passengers)</span>
                      </label>
                      <label className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm cursor-pointer hover:text-on-surface">
                        <input
                          checked={formData.code95}
                          onChange={(e) => setFormData({ ...formData, code95: e.target.checked })}
                          className="w-4 h-4 accent-primary rounded cursor-pointer"
                          type="checkbox"
                        />
                        <span>Valid Code 95 / CPC Card</span>
                      </label>
                      <label className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm cursor-pointer hover:text-on-surface">
                        <input
                          checked={formData.tachoGen2}
                          onChange={(e) => setFormData({ ...formData, tachoGen2: e.target.checked })}
                          className="w-4 h-4 accent-primary rounded cursor-pointer"
                          type="checkbox"
                        />
                        <span>Digital Tachograph Gen 2 Driver Card</span>
                      </label>
                      <label className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm cursor-pointer hover:text-on-surface">
                        <input
                          checked={formData.airside}
                          onChange={(e) => setFormData({ ...formData, airside: e.target.checked })}
                          className="w-4 h-4 accent-primary rounded cursor-pointer"
                          type="checkbox"
                        />
                        <span>Airside Airport Transit Permit</span>
                      </label>
                    </div>
                  </div>
                  {/* Experience Dropdown */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">Commercial Touring Experience</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="5-10 Years (Senior Touring Captain)">5-10 Years (Senior Touring Captain)</option>
                      <option value="3-5 Years (Mid-Level Intercity Coach)">3-5 Years (Mid-Level Intercity Coach)</option>
                      <option value="1-3 Years (Regional Passenger Transit)">1-3 Years (Regional Passenger Transit)</option>
                      <option value="> 10 Years (Fleet Master / Lead Instructor)">&gt; 10 Years (Fleet Master / Lead Instructor)</option>
                    </select>
                  </div>
                  {/* Document Upload */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">Upload Driving License &amp; Code 95 (PDF, JPG)</label>
                    <div
                      onClick={() => showToast("File selector opened for driver credentials")}
                      className="border-2 border-dashed rounded-lg p-3 text-center cursor-pointer hover:bg-surface-container-low transition-colors flex flex-col items-center gap-1"
                      style={{ borderColor: "#cbd5e1" }}
                    >
                      <span className="material-symbols-outlined text-outline text-[24px]">cloud_upload</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Click to browse or drop license scans</span>
                    </div>
                  </div>
                  {/* Certification Checkbox */}
                  <label className="flex items-start gap-space-xs text-outline font-label-sm text-label-sm pt-1 cursor-pointer">
                    <input
                      checked={formData.certified}
                      onChange={(e) => setFormData({ ...formData, certified: e.target.checked })}
                      className="w-4 h-4 accent-primary mt-0.5 rounded cursor-pointer"
                      required
                      type="checkbox"
                    />
                    <span>I certify holding an unencumbered commercial passenger license with no active suspensions and zero recorded driving disqualifications.</span>
                  </label>
                  {/* Submit Button */}
                  <button
                    className="w-full mt-2 py-3 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-space-xs cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    Submit Certified Application
                  </button>
                </form>
              </div>

              {/* Card 2: Fleet Director Quote Card */}
              <div
                className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm border-l-4"
                style={{ borderLeftColor: "#00685f" }}
              >
                <span className="material-symbols-outlined text-primary text-[32px] opacity-40">format_quote</span>
                <blockquote className="font-body-sm text-body-sm text-on-surface italic leading-relaxed">
                  “Our coach captains are ambassadors of European mobility. Operating a 14-meter tri-axle luxury touring liner demands exemplary defensive driving, clockwork punctuality, and unwavering devotion to passenger safety.”
                </blockquote>
                <div className="flex items-center gap-space-sm pt-1">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold font-headline-sm">
                    ME
                  </div>
                  <div>
                    <h5 className="font-label-lg text-label-lg font-bold text-on-surface">Markus Eder</h5>
                    <p className="font-label-sm text-label-sm text-outline">Fleet Transit Director • EuroTrans European Lines</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Transit Corridor Profile & Milestone Tracker */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Transit Corridor Profile</h4>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">Line C-404</span>
                </div>
                <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-1">
                  <div className="flex justify-between py-1 border-b" style={{ borderBottom: "1px solid #f1f4f8" }}>
                    <span className="text-outline">Scheduled Corridor</span>
                    <span className="font-semibold text-on-surface">Berlin ZOB ⇄ Vienna Erdberg</span>
                  </div>
                  <div className="flex justify-between py-1 border-b" style={{ borderBottom: "1px solid #f1f4f8" }}>
                    <span className="text-outline">One-Way Distance</span>
                    <span className="font-semibold text-on-surface">680 km Direct Line</span>
                  </div>
                  <div className="flex justify-between py-1 border-b" style={{ borderBottom: "1px solid #f1f4f8" }}>
                    <span className="text-outline">Standard Rig</span>
                    <span className="font-semibold text-on-surface">Setra S 516 HD / Tourismo (3-Axle)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b" style={{ borderBottom: "1px solid #f1f4f8" }}>
                    <span className="text-outline">Crew Structure</span>
                    <span className="font-semibold text-on-surface">Dual-Crew Co-Pilot Rotation</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-outline">EC 561 Limit</span>
                    <span className="font-semibold text-on-surface">4.5h Drive / 45m Rest Block</span>
                  </div>
                </div>

                {/* Inline Visual Milestone Sparkline/Tracker */}
                <div className="mt-space-xs pt-space-xs border-t flex flex-col gap-2" style={{ borderTop: "1px solid #f1f4f8" }}>
                  <span className="font-label-sm text-label-sm text-outline font-bold uppercase tracking-wider">
                    Transit Elevation &amp; Waypoint Map
                  </span>
                  <div className="w-full bg-surface-container-low p-2 rounded-lg flex items-center justify-between">
                    <div className="text-center">
                      <span className="block font-label-sm text-label-sm font-bold text-primary">BER</span>
                      <span className="block text-[10px] text-outline">0 km</span>
                    </div>
                    <div className="flex-1 px-2 flex items-center">
                      <div className="h-1 w-full bg-primary-fixed-dim relative">
                        <div className="absolute left-1/3 -top-1 w-3 h-3 rounded-full bg-secondary"></div>
                        <div className="absolute left-2/3 -top-1 w-3 h-3 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="block font-label-sm text-label-sm font-bold text-secondary">PRG</span>
                      <span className="block text-[10px] text-outline">350 km</span>
                    </div>
                    <div className="flex-1 px-2 flex items-center">
                      <div className="h-1 w-full bg-primary-fixed-dim relative">
                        <div className="absolute right-0 -top-1 w-3 h-3 rounded-full bg-primary-container"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="block font-label-sm text-label-sm font-bold text-on-surface">VIE</span>
                      <span className="block text-[10px] text-outline">680 km</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Persistent Compliance & Jobzeta Seal Sub-Footer */}
          <div className="w-full bg-surface-container-low px-margin py-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-inner">
            <div className="flex items-center gap-space-md">
              <span className="material-symbols-outlined text-[36px] text-primary">
                verified_user
              </span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm font-bold text-on-surface tracking-wider uppercase">
                  Jobzeta International Transit Verification Network
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Validated in alignment with Regulation (EC) No 1071/2009 for Passenger Transport Undertakings.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm">
                <span className="material-symbols-outlined text-primary text-[16px]">verified</span> Secure TLS Data Port
              </span>
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm">
                <span className="material-symbols-outlined text-primary text-[16px]">lock</span> GDPR Compliant Roster
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
