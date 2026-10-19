"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorHighBayReachTruckAutomatedFulfillmentOperatorPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    certCheck: true,
    expCheck: true,
    recordCheck: true,
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
    showToast("Application submitted successfully to Hamburg Hub Dispatch!");
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
          title: "Senior High-Bay Reach Truck & Automated Fulfillment Operator",
          text: "Technical Specs & High-Bay Intralogistics Handbook - Jobzeta",
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Requisition link copied to clipboard!");
    }
  };

  const handleDownloadPdf = () => {
    showToast("Generating technical high-bay specification PDF...");
    setTimeout(() => {
      showToast("Technical PDF downloaded successfully (JZ-HAM-8842-ETV).");
    }, 1500);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-on-surface text-surface px-4 py-3 rounded-xl shadow-2xl border border-surface-container-high animate-in fade-in slide-in-from-bottom-5">
          <span className="material-symbols-outlined text-primary-fixed text-lg">info</span>
          <span className="font-label-md text-label-md">{toastMessage}</span>
        </div>
      )}

      {/* Global Jobzeta Header */}
      <Header />

      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Progress & Critical Telemetry Ribbon */}
          <div className="w-full bg-on-secondary-fixed text-on-secondary px-margin py-space-xs text-xs flex flex-wrap items-center justify-between gap-space-md border-none">
            <div className="flex items-center gap-space-md">
              <span className="inline-flex items-center gap-1.5 text-primary-fixed font-semibold tracking-wider uppercase font-label-sm text-label-sm">
                <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span> Live Node Dispatch
              </span>
              <span className="text-surface-variant font-body-sm text-body-sm">Facility ID: HH-BILL-09</span>
              <span className="hidden md:inline-block text-outline-variant">•</span>
              <span className="hidden md:inline-block text-surface-variant font-body-sm text-body-sm">
                WMS Protocol: SAP EWM 9.5 / Zebra TC8300 Mesh
              </span>
            </div>
            <div className="flex items-center gap-space-lg">
              <span className="text-surface-variant font-label-sm text-label-sm">
                Shift Quota: <strong className="text-on-secondary font-bold">140 Pallets/Shift</strong>
              </span>
              <span className="inline-flex items-center gap-1 text-primary-fixed font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-sm">lock</span> ISO 9001:2015 Verified Requisition
              </span>
            </div>
          </div>

          {/* Breadcrumb Navigation Bar */}
          <div className="w-full bg-surface-container-low px-margin py-3">
            <nav className="flex items-center flex-wrap gap-2 text-on-surface-variant font-label-sm text-label-sm">
              <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                <span className="material-symbols-outlined text-sm">home</span>
                <span>Home</span>
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <Link className="hover:text-primary transition-colors" href="/categories">
                Categories
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <Link className="hover:text-primary transition-colors" href="/categories/driving-and-transportation">
                Driving &amp; Transportation
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <Link
                className="hover:text-primary transition-colors"
                href="/categories/driving-and-transportation/warehouse-material-handling-and-reach-forklift"
              >
                Warehouse Material Handling &amp; Reach Forklift
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-on-surface font-semibold">Technical Specs</span>
            </nav>
          </div>

          {/* Photographic Hero Banner with Direct Title Overlay */}
          <section className="relative w-full bg-on-secondary-fixed text-on-secondary overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVSibbyszmeZtDxW4N-Ih0NLP7W6Ogz9zmgkGJ-kndx0Uwjk7Kn0P-A5lqv93cHxYZO7u49ibdQzdTQU7jU4D4daG-ixVfn5MuVEWrGZ_rR25ffPMikcJtofeCbfFSV8g7qQVP3_m5H-RFDhS8i7hQIjKO6QlqYAHlDLVB5mEzBJubgdY5OojOXsnsjG6X2lC2RJ9EoUYWsCdoe6EZ-kPZ4wz9Ajb8bzWicz6tHiVmLawGA2rewsFHmg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-on-secondary-fixed via-on-secondary-fixed/90 to-transparent"></div>
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
            <div className="relative w-full px-margin py-space-xl flex flex-col gap-space-lg">
              {/* Status Badges Row */}
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase shadow-sm">
                  <span className="material-symbols-outlined text-sm">warehouse</span>
                  ACTIVE HIGH-CUBE HUB: HAMBURG-BILLBROOK
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold tracking-wider uppercase shadow-sm">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  STAGE 2 / DGUV 308-001 CERTIFIED
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high/30 backdrop-blur-md text-surface-bright font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
                  DIRECT LOGISTICS REQUISITION
                </span>
              </div>

              {/* Main Title Block & Tariff Card Flex */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-8 flex flex-col gap-space-sm">
                  <h1 className="font-headline-xl text-headline-xl text-on-secondary font-bold tracking-tight leading-tight">
                    Senior High-Bay Reach Truck &amp; Automated Fulfillment Operator
                  </h1>
                  <p className="font-body-lg text-body-lg text-secondary-fixed max-w-3xl leading-relaxed">
                    Electric Reach Truck (Jungheinrich ETV 216i / Linde R14HD - 12.5m Lift) • Automated High-Cube Staging &amp; RFID Scan-to-Slot Chronology (CAO Beroepsgoederenvervoer / Logistiek Tier 3)
                  </p>
                  {/* System Tag Pills */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container-highest/20 text-on-secondary font-label-md text-label-md backdrop-blur-sm">
                      <span className="material-symbols-outlined text-sm text-primary-fixed">check_circle</span>
                      DGUV Vorschrift 68 / Stufe 2
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container-highest/20 text-on-secondary font-label-md text-label-md backdrop-blur-sm">
                      <span className="material-symbols-outlined text-sm text-primary-fixed">barcode_scanner</span>
                      Zebra TC8300 Wearable Scanner
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container-highest/20 text-on-secondary font-label-md text-label-md backdrop-blur-sm">
                      <span className="material-symbols-outlined text-sm text-primary-fixed">height</span>
                      Height Pre-Selection Telematics
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container-highest/20 text-on-secondary font-label-md text-label-md backdrop-blur-sm">
                      <span className="material-symbols-outlined text-sm text-primary-fixed">translate</span>
                      Bilingual German/English Warehouse Interface
                    </span>
                  </div>
                </div>

                {/* Frosted Tariff & Compensation Summary Card */}
                <div className="lg:col-span-4 bg-surface-container-lowest/10 backdrop-blur-xl rounded-xl p-space-lg text-on-secondary shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-semibold">
                        CAO Tariff Scale III
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/30 text-primary-fixed text-xs font-bold">
                        Standard Rate
                      </span>
                    </div>
                    <div className="my-2">
                      <span className="font-headline-lg text-headline-lg font-bold text-on-secondary tracking-tight">
                        €41,000 – €54,500
                      </span>
                      <span className="text-secondary-fixed text-sm font-label-md ml-1.5">/ year gross</span>
                    </div>
                    <div className="space-y-2 mt-3 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2 text-surface-bright font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-primary-fixed text-base">attach_money</span>
                        <span>
                          <strong>+ €16.00/Day</strong> Tax-Free Logistics Shift Allowance
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-surface-bright font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-primary-fixed text-base">airline_seat_recline_extra</span>
                        <span>Guaranteed Assigned Ergonomic Cabin &amp; Performance Bonus</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-lg pt-space-sm flex items-center gap-space-sm">
                    <button
                      onClick={handleDownloadPdf}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-2.5 px-4 rounded-lg shadow-md transition-all cursor-pointer font-semibold"
                    >
                      <span className="material-symbols-outlined text-lg">download</span>
                      <span>Download Technical PDF</span>
                    </button>
                    <button
                      onClick={handlePrint}
                      className="p-2.5 rounded-lg bg-surface-container-highest/20 hover:bg-surface-container-highest/40 text-on-secondary transition-colors cursor-pointer"
                      title="Print Specification"
                    >
                      <span className="material-symbols-outlined text-lg">print</span>
                    </button>
                    <button
                      onClick={handleShare}
                      className="p-2.5 rounded-lg bg-surface-container-highest/20 hover:bg-surface-container-highest/40 text-on-secondary transition-colors cursor-pointer"
                      title="Share Requisition"
                    >
                      <span className="material-symbols-outlined text-lg">share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Body Content Grid */}
          <div className="w-full px-margin py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* LEFT COLUMN: 5 Core Operational Modules (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* MODULE 01: High-Bay Intralogistics Protocol */}
                <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary-container font-headline-sm font-bold">
                        01
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Primary Scope
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                          Role Overview &amp; High-Bay Intralogistics Protocol
                        </h2>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-sm">precision_manufacturing</span> Mast 12.5m Max
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    As a Senior Reach Truck Operator at the Hamburg-Billbrook automated hub, you maintain continuous intralogistic momentum across 14 aisles of heavy industrial steel racking. You execute precision pick, replenishment, and drop sequences at heights up to 12.5 meters using advanced mast dampening and integrated optical cross-line laser positioning systems.
                  </p>
                  {/* Dual Specification Sub-Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-2">
                    {/* Sub-Card 1 */}
                    <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-xs">
                      <div className="flex items-center gap-2 text-primary font-semibold font-headline-sm text-base">
                        <span className="material-symbols-outlined text-xl">forklift</span>
                        <span>Reach Truck Telematics &amp; Mast Calibration</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Active control of Jungheinrich ETV 216i mast tilt dampening, automated residual capacity computation, and automated lift-height pre-selection to eliminate mast sway at Tier 6 (11.5m - 12.5m).
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-xs">Drive&amp;LiftPLUS</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-xs">Side-Shift Damper</span>
                      </div>
                    </div>
                    {/* Sub-Card 2 */}
                    <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-xs">
                      <div className="flex items-center gap-2 text-secondary font-semibold font-headline-sm text-base">
                        <span className="material-symbols-outlined text-xl">sensors</span>
                        <span>Automated WMS Integration &amp; Geofenced Staging</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Real-time task synchronization via terminal mount Zebra TC8300. Automated validation of SSCC barcodes, bin-location verification, and ultra-narrow aisle geofence braking controls.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-xs">SAP EWM Task Queues</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-xs">RFID Gate Logging</span>
                      </div>
                    </div>
                  </div>
                  {/* Critical Operational Mandate Box */}
                  <div className="bg-error-container/40 rounded-lg p-space-md flex items-start gap-space-sm mt-1">
                    <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">shield</span>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Critical Operational Mandate: Zero-Defect Drop Safety Protocol</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Strict adherence to UVV inspection norms. Mast creep tolerance cannot exceed 10mm in 10 minutes under rated load. In-aisle speeds capped at ≤8 km/h. Absolute requirement for continuous acoustic and visual warning signals at blind high-bay cross aisles.
                      </p>
                    </div>
                  </div>
                </section>

                {/* MODULE 02: Warehouse Dispatch & Shift Chronology */}
                <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary-container font-headline-sm font-bold">
                        02
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Daily Timetable
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                          Warehouse Dispatch &amp; Shift Chronology
                        </h2>
                      </div>
                    </div>
                    <span className="text-on-surface-variant font-label-sm text-label-sm font-medium">Standard Shift Alpha: 06:00 – 15:30</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Every movement inside the automated facility follows a rigorous, synchronized cycle. Below is the exact tactical schedule governing standard daily dispatch:
                  </p>
                  {/* 5-Step Visual Timeline */}
                  <div className="space-y-4 pt-2 relative">
                    <div className="absolute left-6 top-3 bottom-6 w-0.5 bg-surface-container-high -z-0"></div>
                    {/* Step 1 */}
                    <div className="relative z-10 flex items-start gap-space-md bg-surface-container-low p-space-md rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                        01
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h3 className="font-headline-sm text-base font-bold text-on-surface">Pre-Shift Safety &amp; Battery Telematics Audit</h3>
                          <span className="font-label-sm text-label-sm font-semibold px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">
                            06:00 – 06:45
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Daily visual walk-around inspection: fork tines micro-fracture audit, hydraulic line pressure check, 48V Li-ion quick-state verification, and telematics digital log sign-in via terminal.
                        </p>
                        <div className="mt-2 flex items-center gap-4 text-xs font-label-md text-primary">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">checklist</span> Digital DGUV Log Check
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">battery_charging_full</span> Li-ion 98% SoC
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative z-10 flex items-start gap-space-md bg-surface-container-low p-space-md rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold flex-shrink-0">
                        02
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h3 className="font-headline-sm text-base font-bold text-on-surface">Inbound High-Speed Unloading &amp; Putaway</h3>
                          <span className="font-label-sm text-label-sm font-semibold px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">
                            06:45 – 09:30
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Transfer of arrived intermodal trailer pallets from dock floor marshaling buffers to designated high-bay vertical slots (Level 3 to Level 7). Immediate scanning for FIFO stock registration.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="relative z-10 flex items-start gap-space-md bg-surface-container-low p-space-md rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold flex-shrink-0">
                        03
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h3 className="font-headline-sm text-base font-bold text-on-surface">Replenishment Wave 1 &amp; Urgent Cross-Dock Orders</h3>
                          <span className="font-label-sm text-label-sm font-semibold px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">
                            09:30 – 13:00
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Executing dynamic WMS drop calls to replenish ground-level picking funnels. Precision double-deep reach extraction of high-priority automotive and pharma containers.
                        </p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="relative z-10 flex items-start gap-space-md bg-surface-container-low p-space-md rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold flex-shrink-0">
                        04
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h3 className="font-headline-sm text-base font-bold text-on-surface">Mandatory Paid Rest &amp; Opportunity Charging</h3>
                          <span className="font-label-sm text-label-sm font-semibold px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
                            13:00 – 13:45
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Scheduled 45-minute paid operator rest in the ergonomic lounge. Reach truck automatically locked onto the 80kW fast-charging dock terminal for top-up boost.
                        </p>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="relative z-10 flex items-start gap-space-md bg-surface-container-low p-space-md rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold flex-shrink-0">
                        05
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h3 className="font-headline-sm text-base font-bold text-on-surface">Outbound Marshaling &amp; Shift Handover</h3>
                          <span className="font-label-sm text-label-sm font-semibold px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">
                            13:45 – 15:30
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Staging consolidate pallet runs for night line-haul departures. Shift debrief with Intralogistics Lead, dock terminal safety logs sign-off, and cabin turnover for Shift Beta.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* MODULE 03: Licensing, Permits & Intralogistics Equivalencies */}
                <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary-container font-headline-sm font-bold">
                        03
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Compliance Matrix
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                          Licensing, Permits &amp; Equivalencies
                        </h2>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">badge</span> EU Mutual Recognition
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Cross-border mobility is pre-validated on Jobzeta. The following certifications are officially recognized for immediate placement into this Tier 3 role:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-2">
                    {/* Germany */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-label-lg text-label-lg font-bold text-on-surface">Germany / EU Base</span>
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-xs font-bold">
                            Primary Standard
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-base font-semibold text-primary">Flurfördermittelschein / DGUV 308-001 Stufe 2</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                          Mandatory specialized module for high-bay reach trucks (Schubmaststapler) with specific training above 8m lift height.
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-surface-container-high flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm text-primary">verified</span> Valid across DACH territory
                      </div>
                    </div>
                    {/* Netherlands */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-label-lg text-label-lg font-bold text-on-surface">Netherlands / Benelux</span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs font-bold">
                            Direct Match
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-base font-semibold text-secondary">CCV Reachtruck Certificaat</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                          SSVV / CCV recognized certification conforming to Arbowet standards. Automatically reciprocal via Jobzeta fast-track clearing.
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-surface-container-high flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm text-secondary">check</span> Zero conversion latency
                      </div>
                    </div>
                    {/* UK */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-label-lg text-label-lg font-bold text-on-surface">United Kingdom / RTITB</span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-xs font-bold">
                            Reciprocal
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-base font-semibold text-on-surface">ABA Category D1 / D2 License</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                          RTITB or ITSSAR certified reach truck credential with verifiable NORS registration number. Includes legal Visa endorsement fast-track.
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-surface-container-high flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm text-primary">public</span> Skilled Visa sponsorship eligible
                      </div>
                    </div>
                    {/* United States */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-label-lg text-label-lg font-bold text-on-surface">United States / OSHA</span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-xs font-bold">
                            Reciprocal
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-base font-semibold text-on-surface">Powered Industrial Truck Class II</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                          OSHA 29 CFR 1910.178 Class II Narrow Aisle Electric Motor Truck qualification. 1-day German safety regulations familiarization provided.
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-surface-container-high flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm text-primary">school</span> Company-sponsored 1-day safety orientation
                      </div>
                    </div>
                  </div>
                </section>

                {/* MODULE 04: Compensation, Allowances & Benefits */}
                <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary-container font-headline-sm font-bold">
                        04
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Total Rewards Package
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                          Compensation, Allowances &amp; Benefits
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-2xl mt-1">receipt_long</span>
                      <div>
                        <h4 className="font-headline-sm text-base font-bold text-on-surface">Daily Shift Stipend</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          <strong>€16.00 / shift</strong> tax-free catering and logistics allowance directly credited to your gross paycheck. Up to €350/mo additional net value.
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-2xl mt-1">airline_seat_recline_normal</span>
                      <div>
                        <h4 className="font-headline-sm text-base font-bold text-on-surface">Assigned Ergonomic Equipment</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Dedicated reach truck per shift cycle with premium Grammer air-suspension climate-seat, panoramic overhead armor glass, and adjustable armrest controls.
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-2xl mt-1">military_tech</span>
                      <div>
                        <h4 className="font-headline-sm text-base font-bold text-on-surface">Zero-Damage Safety Bonus</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Quarterly safety and rack integrity performance incentive payout of up to <strong>€750 per quarter</strong> (€250/month) based on zero-incident logs.
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-2xl mt-1">upgrade</span>
                      <div>
                        <h4 className="font-headline-sm text-base font-bold text-on-surface">Career Upskilling Track</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Fully funded company training path toward VNA Turret Truck Certification (Stufe 3) or shift Intralogistics Supervisor certification within 12 months.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* MODULE 05: Structured 3-Stage Assessment & Onboarding */}
                <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary-container font-headline-sm font-bold">
                        05
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                          Fast-Track Hiring Funnel
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                          Structured 3-Stage Assessment &amp; Onboarding
                        </h2>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm bg-surface-container text-on-surface font-semibold px-3 py-1 rounded-full">
                      4-Day Average Turnaround
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-2">
                    {/* Stage 1 */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-label-sm text-label-sm font-bold text-primary">STAGE 01</span>
                          <span className="font-label-sm text-xs text-on-surface-variant">24 Hours</span>
                        </div>
                        <h4 className="font-headline-sm text-base font-bold text-on-surface">Credentials &amp; Forklift Audit</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                          Digital upload of Stufe 2 certificate, identity verification, and rapid safety track review via Jobzeta credentialing engine.
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 text-xs text-primary font-semibold">
                        <span className="material-symbols-outlined text-sm">task_alt</span> Automated Clearing
                      </div>
                    </div>
                    {/* Stage 2 */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-label-sm text-label-sm font-bold text-primary">STAGE 02</span>
                          <span className="font-label-sm text-xs text-on-surface-variant">45 Mins</span>
                        </div>
                        <h4 className="font-headline-sm text-base font-bold text-on-surface">High-Bay Maneuvering Test</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                          On-site or simulation dock evaluation: 12.5m pallet insertion, blind blind-corner docking, and optical scanner barcode workflow.
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 text-xs text-primary font-semibold">
                        <span className="material-symbols-outlined text-sm">settings_accessibility</span> Practical Evaluation
                      </div>
                    </div>
                    {/* Stage 3 */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-label-sm text-label-sm font-bold text-primary">STAGE 03</span>
                          <span className="font-label-sm text-xs text-on-surface-variant">Shift 1</span>
                        </div>
                        <h4 className="font-headline-sm text-base font-bold text-on-surface">Live Shift Shadowing</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                          One-on-one pair operation with a Senior Intralogistics Lead. Complete familiarization with hub traffic flows and battery charging protocols.
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 text-xs text-primary font-semibold">
                        <span className="material-symbols-outlined text-sm">group</span> Fully Paid Shift
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* RIGHT STICKY TECHNICAL SIDEBAR (4 cols) */}
              <aside className="lg:col-span-4 flex flex-col gap-space-lg sticky top-24">
                {/* Application Card */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-2 border-b border-surface-container-high">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                        Direct Application
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Fast-Track Requisition
                      </h3>
                    </div>
                    <span className="p-2 rounded-full bg-primary-fixed/20 text-primary">
                      <span className="material-symbols-outlined text-xl">bolt</span>
                    </span>
                  </div>
                  <form className="flex flex-col gap-space-md" id="fastTrackForm" onSubmit={handleSubmit}>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                        Full Legal Name
                      </label>
                      <input
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary border-none"
                        placeholder="e.g. Markus Lindemann"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                        Official Contact Email
                      </label>
                      <input
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary border-none"
                        placeholder="m.lindemann@logistics-network.eu"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                        Mobile Phone (with country code)
                      </label>
                      <input
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary border-none"
                        placeholder="+49 170 8923411"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Verification Checkboxes */}
                    <div className="space-y-2.5 pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary"
                          required
                          type="checkbox"
                          checked={formData.certCheck}
                          onChange={(e) => setFormData({ ...formData, certCheck: e.target.checked })}
                        />
                        <span className="font-body-sm text-xs text-on-surface-variant">
                          I hold a valid Forklift License (DGUV 308-001 Stufe 2 / Reachtruck or equivalent).
                        </span>
                      </label>
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary"
                          required
                          type="checkbox"
                          checked={formData.expCheck}
                          onChange={(e) => setFormData({ ...formData, expCheck: e.target.checked })}
                        />
                        <span className="font-body-sm text-xs text-on-surface-variant">
                          I have at least 12 months high-bay reach truck experience (&gt;8m mast height).
                        </span>
                      </label>
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary"
                          required
                          type="checkbox"
                          checked={formData.recordCheck}
                          onChange={(e) => setFormData({ ...formData, recordCheck: e.target.checked })}
                        />
                        <span className="font-body-sm text-xs text-on-surface-variant">
                          Clean background &amp; verifiable industrial safe-driving record.
                        </span>
                      </label>
                    </div>

                    {/* Upload Dropzone */}
                    <div
                      onClick={() => showToast("Upload file selector opened.")}
                      className="mt-1 p-space-md rounded-lg bg-surface-container-low border-dashed border-2 border-surface-container-highest text-center flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-surface-container-high transition-colors"
                    >
                      <span className="material-symbols-outlined text-2xl text-primary">upload_file</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        Drop CV or Stufe 2 Certificate
                      </span>
                      <span className="text-xs text-on-surface-variant">PDF, JPG or PNG up to 15MB</span>
                    </div>

                    <button
                      className="w-full py-3 px-space-md bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-md transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer font-bold"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-xl">send</span>
                      <span>Submit Certified Application</span>
                    </button>
                    <p className="text-center text-xs text-on-surface-variant font-body-sm">
                      Direct submission to Hamburg Logistics HR Operations
                    </p>
                  </form>
                </div>

                {/* Telematics & Fleet Specifications Card */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-2 pb-2 border-b border-surface-container-high">
                    <span className="material-symbols-outlined text-primary text-xl">insights</span>
                    <h3 className="font-headline-sm text-base font-bold text-on-surface">
                      High-Bay Telematics Profile
                    </h3>
                  </div>
                  <div className="space-y-3 font-body-sm text-body-sm">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-on-surface-variant">Hub Sector</span>
                      <span className="font-semibold text-on-surface">Hamburg-Billbrook Hub Alpha</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-on-surface-variant">Avg Moves / Shift</span>
                      <span className="font-semibold text-primary">140 Euro-Pallets</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-on-surface-variant">Assigned Reach Truck</span>
                      <span className="font-semibold text-on-surface">Jungheinrich ETV 216i</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-on-surface-variant">Max Mast Height</span>
                      <span className="font-semibold text-on-surface">12.5 meters</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-on-surface-variant">Aisle Geometry</span>
                      <span className="font-semibold text-on-surface">2,780 mm Narrow Aisle</span>
                    </div>
                  </div>

                  {/* Shift Allocation Distribution Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-xs font-label-sm text-on-surface-variant mb-1.5">
                      <span>
                        Inbound Putaway: <strong>45%</strong>
                      </span>
                      <span>
                        Outbound Picking: <strong>55%</strong>
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden flex">
                      <div className="h-full bg-primary" style={{ width: "45%" }}></div>
                      <div className="h-full bg-secondary" style={{ width: "55%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Operations Director Endorsement Card */}
                <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-sm relative overflow-hidden">
                  <div className="text-primary text-4xl leading-none font-serif select-none">“</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic -mt-3">
                    In our Hamburg-Billbrook hub, the reach truck operator is the backbone of cold-chain and automotive fulfillment. We invest heavily in the newest Jungheinrich chassis, climate-conditioned cabins, and continuous safety training so our certified operators work with absolute confidence at 12 meters.
                  </p>
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-surface-container-high">
                    <div className="w-10 h-10 rounded-full bg-on-secondary-fixed text-primary-fixed flex items-center justify-center font-bold text-sm">
                      TB
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md font-bold text-on-surface">Torsten Becker</h4>
                      <p className="font-label-sm text-xs text-on-surface-variant">
                        Intralogistics Operations Director, Hamburg Hub
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* Technical Verification Network Bottom Bar */}
          <section className="w-full bg-surface-container-high py-space-sm px-margin flex flex-wrap items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center gap-space-md">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">security</span>
                TLS 1.3 Certified Encrypted Dossier
              </span>
              <span className="hidden sm:inline-block">•</span>
              <span className="hidden sm:inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">verified</span>
                Jobzeta Intralogistics Verification Network
              </span>
            </div>
            <div className="flex items-center gap-space-md">
              <span>
                Requisition Ref: <strong>JZ-HAM-8842-ETV</strong>
              </span>
              <span className="text-primary font-semibold">Active Hiring Quota (4/6 Hired)</span>
            </div>
          </section>
        </div>
      </main>

      {/* Global Jobzeta Footer */}
      <Footer />
    </div>
  );
}
