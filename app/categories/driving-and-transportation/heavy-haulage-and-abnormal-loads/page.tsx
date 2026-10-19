"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HeavyHaulageAndAbnormalLoadsPage() {
  // Interactive state
  const [transporterSpec, setTransporterSpec] = useState(
    "Modular Hydraulic Platform (Goldhofer / Faymonville / Scheuerle)"
  );
  const [transitCorridor, setTransitCorridor] = useState(
    "Rotterdam Heavylift Quay ⇄ Ruhr Industrial ⇄ Scandinavia"
  );
  const [permitClass, setPermitClass] = useState(
    "Class 3 STGO (Up to 150 Tonnes Gross) / VOS Exceptional"
  );

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals state
  const [routeSpecsModalOpen, setRouteSpecsModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [alertsModalOpen, setAlertsModalOpen] = useState(false);

  // Subscription state
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);

  // Quick Dispatch Apply Form State
  const [applyForm, setApplyForm] = useState({
    fullName: "",
    email: "",
    licenseClass: "CE Articulated / Heavy Combination",
    stgoCategory: "STGO Cat 3 (Up to 150t)",
    experienceYears: "5+ Years Heavy Haul",
  });
  const [applySuccess, setApplySuccess] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertEmail) {
      setAlertSuccess(true);
      showToast("✓ Priority route notifications activated for " + alertEmail);
      setTimeout(() => {
        setAlertSuccess(false);
        setAlertEmail("");
      }, 5000);
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setApplyModalOpen(false);
      showToast("✓ Roster Application Dispatched to Mammoet Fleet Control!");
    }, 1800);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      showToast("✓ Heavy haul corridor link copied to clipboard!");
    }
  };

  const handleFilterSubmit = () => {
    showToast(
      `✓ Corridor Filtered: ${transporterSpec.split(" ")[0]} • ${transitCorridor.split(" ")[0]} (34 Available Dispatch Units)`
    );
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen flex flex-col antialiased">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[100] bg-on-surface text-surface px-space-md py-space-sm rounded-lg shadow-2xl flex items-center gap-2 text-label-lg font-semibold animate-bounce">
          <span className="material-symbols-outlined text-primary text-[20px]">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* REUSABLE GLOBAL HEADER */}
      <Header />

      {/* MAIN CONTAINER */}
      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* TOP LIVE TELEMETRY & CORRIDOR STATUS HEADER STRIP */}
          <section className="w-full bg-surface-container-low px-margin py-space-lg shadow-sm border-b border-surface-container">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
              {/* Breadcrumb & Telemetry Badges */}
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <nav
                  aria-label="Breadcrumbs"
                  className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant flex-wrap"
                >
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/"
                  >
                    Home
                  </Link>
                  <span className="material-symbols-outlined text-[14px]">
                    chevron_right
                  </span>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/categories"
                  >
                    Categories
                  </Link>
                  <span className="material-symbols-outlined text-[14px]">
                    chevron_right
                  </span>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/categories/driving-and-transportation"
                  >
                    Driving &amp; Transportation
                  </Link>
                  <span className="material-symbols-outlined text-[14px]">
                    chevron_right
                  </span>
                  <span className="text-on-surface font-semibold">
                    Heavy Haulage &amp; Abnormal Loads
                  </span>
                </nav>

                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      sensors
                    </span>
                    DT-HH-LOAD-6390
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Live Abnormal Route Escort &amp; Convoys Active
                  </span>
                  <span className="hidden md:inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">
                      verified_user
                    </span>
                    STGO Cat 3 &amp; VOS Verified
                  </span>
                  <span className="hidden lg:inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      alt_route
                    </span>
                    Corridor Swept-Path Clearance: 99.8%
                  </span>
                </div>
              </div>

              {/* Main Headline & Quick Action CTAs */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pt-space-xs">
                <div className="max-w-4xl space-y-space-xs">
                  <div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider font-bold">
                    <span className="material-symbols-outlined text-[16px]">
                      local_shipping
                    </span>
                    Specialized Heavy Haulage Transport Division
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-secondary font-bold tracking-tight">
                    Heavy Haulage, Multi-Axle Modular &amp; Abnormal Indivisible
                    Loads (STGO / Heavy Transit)
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                    Certified European CE and North American CDL-A heavy haulage
                    operators managing multi-axle modular transporters, SPMTs,
                    girder bridge sets, and high-mass oversize industrial plant
                    transports across international corridors.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-space-sm self-start lg:self-end">
                  <button
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors shadow-sm cursor-pointer"
                    type="button"
                    onClick={handleShare}
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      share
                    </span>
                    Share Heavy Haul Route Stream
                  </button>
                  <button
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg transition-colors shadow-sm cursor-pointer"
                    type="button"
                    onClick={() => {
                      const alertSection = document.getElementById(
                        "route-alert-section"
                      );
                      if (alertSection) {
                        alertSection.scrollIntoView({ behavior: "smooth" });
                      } else {
                        setAlertsModalOpen(true);
                      }
                    }}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      notification_add
                    </span>
                    Set Heavy Haul Alerts
                  </button>
                </div>
              </div>

              {/* 3 Key Metrics KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-md">
                {/* KPI Card 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-start justify-between gap-space-md border border-surface-container">
                  <div className="space-y-space-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block font-semibold">
                      Active Heavy Haul Requisitions
                    </span>
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-display-lg text-display-lg font-bold text-on-surface">
                        2,840
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-primary font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_upward
                        </span>
                        +18.2% MoM
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Surge in European &amp; US Superload and abnormal permits
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-secondary-fixed text-on-secondary-fixed flex-shrink-0">
                    <span className="material-symbols-outlined text-[26px]">
                      rv_hookup
                    </span>
                  </div>
                </div>

                {/* KPI Card 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-start justify-between gap-space-md border border-surface-container">
                  <div className="space-y-space-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block font-semibold">
                      Average Global Wage Band
                    </span>
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                        €62,000 – €98,000
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      $70k–$115k USD eq. + abnormal permit bonus, bridge escort
                      allowance, and overnight detention
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-primary-fixed text-on-primary-fixed flex-shrink-0">
                    <span className="material-symbols-outlined text-[26px]">
                      payments
                    </span>
                  </div>
                </div>

                {/* KPI Card 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-start justify-between gap-space-md border border-surface-container">
                  <div className="space-y-space-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block font-semibold">
                      Compliance Gateways
                    </span>
                    <div className="flex items-center gap-space-xs flex-wrap pt-1">
                      <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-md text-label-md font-bold text-secondary">
                        STGO Cat 3
                      </span>
                      <span className="text-outline">•</span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-md text-label-md font-bold text-primary">
                        SPMT
                      </span>
                      <span className="text-outline">•</span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-md text-label-md font-bold text-tertiary">
                        VOS Verified
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                      Multi-axle hydraulic steering endorsement, pilot car
                      escort protocol, bridge stress clearance
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex-shrink-0">
                    <span className="material-symbols-outlined text-[26px]">
                      shield_with_heart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FILTER BAR FOR SPECIALIZED CORRIDORS */}
          <section className="w-full bg-surface-container px-margin py-space-md">
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-space-md items-center border border-surface-container">
                {/* Transporter Spec */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      precision_manufacturing
                    </span>
                    Transporter Spec
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-space-sm py-2.5 appearance-none focus:outline-none focus:bg-surface-bright pr-8 cursor-pointer border border-transparent focus:border-primary"
                      value={transporterSpec}
                      onChange={(e) => setTransporterSpec(e.target.value)}
                    >
                      <option>
                        Modular Hydraulic Platform (Goldhofer / Faymonville /
                        Scheuerle)
                      </option>
                      <option>
                        Extendable Blade Semi-Trailer (Super-Wing 70m+)
                      </option>
                      <option>Hydrostatic SPMT Multi-Axle Bogies</option>
                      <option>Girder Bridge / Schnabel Transformer Rig</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[18px] text-outline pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Transit Corridor */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      route
                    </span>
                    Transit Corridor
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-space-sm py-2.5 appearance-none focus:outline-none focus:bg-surface-bright pr-8 cursor-pointer border border-transparent focus:border-primary"
                      value={transitCorridor}
                      onChange={(e) => setTransitCorridor(e.target.value)}
                    >
                      <option>
                        Rotterdam Heavylift Quay ⇄ Ruhr Industrial ⇄ Scandinavia
                      </option>
                      <option>
                        Antwerp Hub ⇄ Le Havre Industrial ⇄ Lyon Corridor
                      </option>
                      <option>
                        US Gulf Coast Transits (Houston ⇄ Permian Heavy Rigging)
                      </option>
                      <option>
                        UK North Sea Energy Corridor (Aberdeen ⇄ Teesside Port)
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[18px] text-outline pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Permit Classification */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      assignment_turned_in
                    </span>
                    Permit Classification
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-space-sm py-2.5 appearance-none focus:outline-none focus:bg-surface-bright pr-8 cursor-pointer border border-transparent focus:border-primary"
                      value={permitClass}
                      onChange={(e) => setPermitClass(e.target.value)}
                    >
                      <option>
                        Class 3 STGO (Up to 150 Tonnes Gross) / VOS Exceptional
                      </option>
                      <option>Class 2 STGO (Up to 80 Tonnes Gross)</option>
                      <option>
                        German §29/§70 StVZO Long-Term Transit Blanket
                      </option>
                      <option>
                        North American Superload &gt;200,000 lbs Special Route
                        Permit
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[18px] text-outline pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Filter Action Button */}
                <div className="flex items-end h-full pt-4 md:pt-0">
                  <button
                    className="w-full h-11 inline-flex items-center justify-center gap-space-xs rounded-lg bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg transition-colors shadow-sm cursor-pointer"
                    type="button"
                    onClick={handleFilterSubmit}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      filter_alt
                    </span>
                    Filter Heavy Corridors
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURED PRIMARY REQUISITION (EXACT 1 CARD WITH INTERACTIVE HOVER REVEAL & ACTIONS) */}
          <section className="w-full px-margin py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
              {/* Section Tag Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center px-space-sm py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-error mr-1.5 animate-pulse"></span>
                    PRIORITY ENTERPRISE DISPATCH
                  </span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm hidden sm:inline">
                    • Direct Dispatch from Tier-1 Project Heavy Hauler
                  </span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    schedule
                  </span>
                  Immediate Roster Selection
                </div>
              </div>

              {/* Main Split Feature Card */}
              <article
                aria-label="Senior Heavy Haulage Multi-Axle Transporter Operator at Mammoet"
                className="group relative w-full rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                tabIndex={0}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left Media Column */}
                  <div className="relative w-full md:w-64 h-56 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                    <div
                      className="w-full h-full min-h-[220px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url('/heavy-haul-hero.jpg')`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30"></div>

                    {/* Badge top-left */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-error text-[13px]">
                          warning
                        </span>
                        Abnormal Indivisible Load
                      </span>
                    </div>

                    {/* Bookmark top-right */}
                    <button
                      aria-label="Bookmark this dispatch role"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md hover:bg-surface-container-lowest text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsBookmarked(!isBookmarked);
                        showToast(
                          !isBookmarked
                            ? "✓ Requisition Ref: BY-ROT-HEAVY-7721 saved to your bookmarked dispatch list!"
                            : "Removed from bookmarks."
                        );
                      }}
                      type="button"
                    >
                      <span
                        className={`material-symbols-outlined text-[17px] ${
                          isBookmarked ? "text-primary" : ""
                        }`}
                      >
                        bookmark
                      </span>
                    </button>

                    {/* Bottom strip on image */}
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-label-sm text-on-surface bg-surface-container-lowest/90 px-2 py-0.5 rounded backdrop-blur-md shadow-sm">
                      <span className="font-mono text-outline text-[11px]">
                        Ref: BY-ROT-HEAVY-7721
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-primary font-semibold">
                        <span className="material-symbols-outlined text-[13px]">
                          verified
                        </span>
                        STGO Cat 3 Verified
                      </span>
                    </div>
                  </div>

                  {/* Right Details Column */}
                  <div className="flex-1 p-space-md sm:p-space-lg flex flex-col justify-between gap-space-sm">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-label-md text-label-md text-secondary font-bold tracking-wide uppercase">
                            Mammoet / ALE Heavy Transit
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant/40"></span>
                          <span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-primary font-medium">
                            <span className="material-symbols-outlined text-[14px]">
                              verified
                            </span>
                            Verified Heavy Carrier
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant/40"></span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-outline-variant/40">
                              schedule
                            </span>
                            Posted Today
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                            €62,000 – €94,000
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {" "}
                            / yr
                          </span>
                          <div className="font-label-sm text-[11px] text-on-surface-variant">
                            CAO Tier 7 + Convoy Per Diem
                          </div>
                        </div>
                      </div>

                      <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors">
                        <Link href="/jobs/senior-heavy-haulage-multi-axle-modular-transporter-operator">
                          Senior Heavy Haulage Multi-Axle Transporter Operator
                        </Link>
                      </h3>

                      <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            location_on
                          </span>
                          Port of Rotterdam Quay ⇄ Rhine-Ruhr
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Full-Time Permanent (3/1 Roster)
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                          148,000 kg Gross Weight
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            local_shipping
                          </span>
                          Goldhofer THP/SL 10-Axle
                        </span>
                      </div>
                    </div>

                    {/* Skill / Qualification Badges */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        STGO Cat 3 (UK)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        §70 StVZO Permit
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        SPMT Hydrostatic
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        BF4 Police Escort
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Hydraulic Bogie Steered
                      </span>
                    </div>

                    {/* Accordion / Drawer Revealed on Hover or Focus */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-all duration-300 ease-out overflow-hidden">
                      <div className="min-h-0 pt-0 group-hover:pt-space-sm group-focus-within:pt-space-sm flex flex-col gap-space-sm">
                        <div className="w-full h-px bg-surface-container-high"></div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low p-space-sm rounded-lg border border-surface-container-high">
                          <div className="flex flex-col gap-0.5 text-on-surface font-body-sm text-body-sm max-w-2xl">
                            <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[15px]">
                                route
                              </span>
                              Operational Scope &amp; Abnormal Transit Protocol
                            </span>
                            <p className="text-body-sm text-on-surface-variant">
                              Heavy Transport Technical Scope: Goldhofer 10-axle
                              hydraulic leveling, swept-path laser guidance, 5
                              km/h bridge crawling speed restriction, and
                              synchronized dual BF4 escort convoy.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            <Link
                              className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer font-semibold"
                              href="/jobs/senior-heavy-haulage-multi-axle-modular-transporter-operator"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Full Route &amp; Technical Specs</span>
                              <span className="material-symbols-outlined text-[15px]">
                                arrow_forward
                              </span>
                            </Link>
                            <Link
                              className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold transition-all shadow-sm flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-heavy-haulage-multi-axle-modular-transporter-operator#quick-apply"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Quick Dispatch Apply</span>
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

          {/* STATUTORY VERIFICATION FRAMEWORK — ABNORMAL LOAD LICENSING */}
          <section className="w-full bg-surface-container-low px-margin py-space-xl border-y border-surface-container">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
                <div>
                  <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    Regulatory Cross-Border Alignment
                  </span>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-secondary">
                    Statutory Verification Framework — Abnormal Load Licensing
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
                    Standard CDL-A or EU Category CE qualifications do not
                    suffice for abnormal indivisible load transport. Verified
                    drivers must hold country-specific corridor permits.
                  </p>
                </div>
                <button
                  className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold transition-colors cursor-pointer self-start sm:self-auto"
                  onClick={() =>
                    showToast(
                      "Corridor Compliance Index: 14 European, 50 US State & GCC transport jurisdictions loaded."
                    )
                  }
                  type="button"
                >
                  View Corridor Compliance Index
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>

              {/* 4 Cross-Jurisdictional Licensing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Licensing Card 1: DACH & Central EU */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md transition-all hover:shadow-md border border-surface-container">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-mono text-outline">
                        DACH &amp; Central EU
                      </span>
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Germany §29 / §70 StVZO Exceptional Permit
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      BAM / DEKRA axle load certificate and official BF3/BF4
                      escort driver qualification required for loads exceeding
                      40 tonnes or 3m width.
                    </p>
                  </div>
                  <div className="pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <div className="flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant">
                        VEMAGS Approvals:
                      </span>
                      <span className="font-semibold text-primary">
                        Mandatory Live Sync
                      </span>
                    </div>
                  </div>
                </div>

                {/* Licensing Card 2: UK & Ireland */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md transition-all hover:shadow-md border border-surface-container">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-mono text-outline">
                        UK &amp; Ireland
                      </span>
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Special Types General Order (STGO Cat 2 &amp; 3)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Highways England ESDAL abnormal notification protocol,
                      bridge owner clearances, and mandatory police escort
                      bookings up to 150 tonnes gross.
                    </p>
                  </div>
                  <div className="pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <div className="flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant">
                        ESDAL Protocol:
                      </span>
                      <span className="font-semibold text-secondary">
                        Pre-Notified Transit
                      </span>
                    </div>
                  </div>
                </div>

                {/* Licensing Card 3: North America */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md transition-all hover:shadow-md border border-surface-container">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-mono text-outline">
                        North America (US &amp; CA)
                      </span>
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Superload &amp; Oversize Combination (CDL-A)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Multi-state overweight blanket permits, steerable dolly
                      endorsement, TWIC port access, and lead/chase certified
                      pilot car operations.
                    </p>
                  </div>
                  <div className="pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <div className="flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant">
                        DOT Bridge Formula:
                      </span>
                      <span className="font-semibold text-primary">
                        Federal Compliant
                      </span>
                    </div>
                  </div>
                </div>

                {/* Licensing Card 4: Nordic & Scandinavia */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md transition-all hover:shadow-md border border-surface-container">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-mono text-outline">
                        Nordic &amp; Scandinavia
                      </span>
                      <span className="material-symbols-outlined text-[20px] text-tertiary">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Svensk Dispense &amp; Statens Vegvesen
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Heavy winter multi-axle traction endorsement, bridge
                      crossing night permits, and mountain tunnel oversize
                      convoy clearances.
                    </p>
                  </div>
                  <div className="pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <div className="flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant">
                        Winter Axle Traction:
                      </span>
                      <span className="font-semibold text-tertiary">
                        Class A Extreme
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HEAVY HAULAGE EQUIPMENT SPECIALIZATIONS & CARGO DISCIPLINES (4 CARDS WITH HOVER STATES) */}
          <section className="w-full px-margin py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
                <div>
                  <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    Specialized Fleets &amp; Transporters
                  </span>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-secondary">
                    Equipment Specializations &amp; Cargo Disciplines
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
                    Select an operational fleet discipline to view specialized
                    dispatch postings, equipment certifications, and carrier
                    assignments.
                  </p>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    Live Corridors: 2,840 Active Positions
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Discipline Card 1 */}
                <div
                  className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-surface-container hover:border-primary/30"
                  onClick={() => {
                    setTransporterSpec(
                      "Modular Hydraulic Platform (Goldhofer / Faymonville / Scheuerle)"
                    );
                    showToast(
                      "Selected: Multi-Axle Modular Transporters (840 Openings Filtered)"
                    );
                  }}
                >
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">
                        local_shipping
                      </span>
                    </div>
                    <div className="space-y-space-xs">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                        Multi-Axle Modular Transporters
                      </h3>
                      <p className="font-label-sm text-label-sm text-primary font-semibold">
                        Goldhofer • Scheuerle • Faymonville
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Hydraulic platform trailers, pendular axles, and
                        remote-steered bogies up to 250 tonnes for refinery
                        reactors and industrial drums.
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-surface-container">
                    <span className="font-label-lg text-label-lg font-bold text-secondary group-hover:text-primary transition-colors">
                      840 Openings
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>

                {/* Discipline Card 2 */}
                <div
                  className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-surface-container hover:border-secondary/30"
                  onClick={() => {
                    setTransporterSpec(
                      "Extendable Blade Semi-Trailer (Super-Wing 70m+)"
                    );
                    showToast(
                      "Selected: Wind Turbine Blade & Tower Haulage (960 Openings Filtered)"
                    );
                  }}
                >
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">
                        mode_fan
                      </span>
                    </div>
                    <div className="space-y-space-xs">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-secondary transition-colors">
                        Wind Turbine Blade &amp; Tower Haulage
                      </h3>
                      <p className="font-label-sm text-label-sm text-secondary font-semibold">
                        Extendable Super-Wing 75m+
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Extendable telescoping wing trailers, blade adaptors,
                        and hydraulic blade lifters for extreme mountain pass
                        and wind park installations.
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-surface-container">
                    <span className="font-label-lg text-label-lg font-bold text-secondary group-hover:text-secondary transition-colors">
                      960 Openings
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-secondary group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>

                {/* Discipline Card 3 */}
                <div
                  className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-surface-container hover:border-primary/30"
                  onClick={() => {
                    setTransporterSpec("Hydrostatic SPMT Multi-Axle Bogies");
                    showToast(
                      "Selected: Self-Propelled Modular Transporters (580 Openings Filtered)"
                    );
                  }}
                >
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">
                        forklift
                      </span>
                    </div>
                    <div className="space-y-space-xs">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                        Self-Propelled Modular Transporters (SPMT)
                      </h3>
                      <p className="font-label-sm text-label-sm text-primary font-semibold">
                        Hydrostatic Power Pack Systems
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Computer-synchronized hydrostatic drive units for
                        shipyards, offshore module yards, and plant
                        decommissioning.
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-surface-container">
                    <span className="font-label-lg text-label-lg font-bold text-secondary group-hover:text-primary transition-colors">
                      580 Openings
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>

                {/* Discipline Card 4 */}
                <div
                  className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-surface-container hover:border-tertiary/30"
                  onClick={() => {
                    setTransporterSpec(
                      "Girder Bridge / Schnabel Transformer Rig"
                    );
                    showToast(
                      "Selected: Transformer & Heavy Plant Girder Bridges (460 Openings Filtered)"
                    );
                  }}
                >
                  <div className="space-y-space-md">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">
                        electric_bolt
                      </span>
                    </div>
                    <div className="space-y-space-xs">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-tertiary transition-colors">
                        Transformer &amp; Heavy Plant Girder Bridges
                      </h3>
                      <p className="font-label-sm text-label-sm text-tertiary font-semibold">
                        Schnabel &amp; Drop-Deck Sets
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        High-mass electrical grid transformer moves with
                        specialized schnabel and drop-deck configurations under
                        rigorous bridge load distribution formulas.
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-surface-container">
                    <span className="font-label-lg text-label-lg font-bold text-secondary group-hover:text-tertiary transition-colors">
                      460 Openings
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-tertiary group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* VERIFIED GLOBAL HEAVY TRANSPORT OPERATORS & MSA PARTNERS */}
          <section className="w-full bg-surface-container px-margin py-space-lg border-y border-surface-container-high">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
              <div className="flex items-center gap-space-sm flex-shrink-0">
                <span className="material-symbols-outlined text-[24px] text-secondary">
                  handshake
                </span>
                <div>
                  <span className="font-label-md text-label-md font-bold text-secondary uppercase tracking-wider block">
                    Authorized Heavylift Partners
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Verified Master Service Agreement (MSA) Carriers
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-space-md md:gap-space-lg">
                <span className="px-space-md py-2 rounded-lg bg-surface-container-lowest font-headline-sm text-headline-sm font-bold text-secondary tracking-tight shadow-sm hover:scale-105 transition-transform cursor-pointer">
                  Mammoet
                </span>
                <span className="px-space-md py-2 rounded-lg bg-surface-container-lowest font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight shadow-sm hover:scale-105 transition-transform cursor-pointer">
                  ALE Heavylift
                </span>
                <span className="px-space-md py-2 rounded-lg bg-surface-container-lowest font-headline-sm text-headline-sm font-bold text-primary tracking-tight shadow-sm hover:scale-105 transition-transform cursor-pointer">
                  Sarens Global
                </span>
                <span className="px-space-md py-2 rounded-lg bg-surface-container-lowest font-headline-sm text-headline-sm font-bold text-secondary tracking-tight shadow-sm hover:scale-105 transition-transform cursor-pointer">
                  Collett &amp; Sons
                </span>
                <span className="px-space-md py-2 rounded-lg bg-surface-container-lowest font-headline-sm text-headline-sm font-bold text-tertiary tracking-tight shadow-sm hover:scale-105 transition-transform cursor-pointer">
                  Van der Vlist Heavy Haulage
                </span>
              </div>
            </div>
          </section>

          {/* PRIORITY ROUTE ALERT SUBSCRIPTION BOX */}
          <section
            id="route-alert-section"
            className="w-full px-margin py-space-xl"
          >
            <div className="max-w-7xl mx-auto">
              <div className="bg-secondary text-on-secondary rounded-2xl p-space-lg lg:p-space-xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
                <div className="space-y-space-xs max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                    Live Route Notification Stream
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-secondary">
                    Never Miss an Abnormal Convoy Dispatch or Superload
                    Assignment
                  </h2>
                  <p className="font-body-md text-body-md text-on-secondary-container">
                    Get instant mobile and email alerts when Tier-1 carriers post
                    multi-axle modular, SPMT, or oversize indivisible load
                    requisitions matching your license and endorsements.
                  </p>
                </div>

                <div className="w-full lg:w-auto flex-1 max-w-md">
                  <form
                    className="flex flex-col sm:flex-row gap-space-xs bg-surface-container-lowest p-1.5 rounded-xl shadow-md"
                    onSubmit={handleAlertSubmit}
                  >
                    <div className="relative flex-1">
                      <span className="material-symbols-outlined absolute left-3 top-3 text-[20px] text-outline">
                        mail
                      </span>
                      <input
                        className="w-full pl-10 pr-3 py-2.5 bg-transparent text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none"
                        placeholder="heavyhaul.driver@corridor.com"
                        required
                        type="email"
                        value={alertEmail}
                        onChange={(e) => setAlertEmail(e.target.value)}
                      />
                    </div>
                    <button
                      className="inline-flex items-center justify-center gap-1.5 px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        bolt
                      </span>
                      Activate Route Alerts
                    </button>
                  </form>
                  <div className="flex items-center justify-between text-on-secondary-container font-label-sm text-label-sm mt-2 px-1">
                    <span>✓ Zero spam • Direct carrier dispatch only</span>
                    <span>Unsubscribe anytime</span>
                  </div>
                  {alertSuccess && (
                    <div className="mt-2 text-center text-primary-fixed font-label-sm text-label-sm font-semibold">
                      ✓ Subscribed! You will receive daily convoy alerts.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* REUSABLE GLOBAL FOOTER */}
      <Footer />

      {/* MODAL 1: VIEW FULL ROUTE & TECHNICAL SPECS MODAL */}
      {routeSpecsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-lowest max-w-3xl w-full rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-space-lg border-b border-surface-container flex items-center justify-between bg-surface-container-low">
              <div className="flex items-center gap-space-sm">
                <span className="p-2 rounded-lg bg-primary-fixed text-on-primary-fixed">
                  <span className="material-symbols-outlined text-[22px]">
                    alt_route
                  </span>
                </span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Route Dossier &amp; Swept-Path Telemetry
                  </h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                    Transit Ref: BY-ROT-HEAVY-7721 • Goldhofer THP/SL 10-Axle
                  </p>
                </div>
              </div>
              <button
                className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface flex items-center justify-center cursor-pointer"
                type="button"
                onClick={() => setRouteSpecsModalOpen(false)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>

            <div className="p-space-lg overflow-y-auto space-y-space-md">
              {/* Corridor Route Details */}
              <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container space-y-space-xs">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                  Corridor Path Clearance
                </span>
                <div className="flex items-center gap-2 font-headline-sm text-[17px] font-bold text-on-surface">
                  <span>Port of Rotterdam (Maasvlakte 2 Heavylift Quay)</span>
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    arrow_forward
                  </span>
                  <span>Rhine-Ruhr Heavy Chemical Complex (Duisburg / Essen)</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Total distance: 238 km. Night travel schedule only (22:00 – 05:00 UTC). Dual police escorts with synchronized VEMAGS transponders.
                </p>
              </div>

              {/* Technical Spec Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
                <div className="p-space-sm rounded-lg bg-surface-container border border-surface-container">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase block">
                    Gross Mass
                  </span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    148,000 kg
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container border border-surface-container">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase block">
                    Total Axles
                  </span>
                  <span className="font-headline-sm text-headline-sm font-bold text-primary">
                    10 Pendular
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container border border-surface-container">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase block">
                    Axle Load
                  </span>
                  <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                    14.8t / Axle
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container border border-surface-container">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase block">
                    Swept Path
                  </span>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    99.8% Clear
                  </span>
                </div>
              </div>

              {/* Critical Convoy Directives */}
              <div className="space-y-space-xs">
                <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider block">
                  Mandatory Operational Escort Directives
                </span>
                <ul className="space-y-2 font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong>Bridge Crossing Speed Restriction:</strong> Maximum 5 km/h single-lane center-span crawling across Rhine River spans under structural monitoring.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong>Hydraulic Suspension Leveling:</strong> Remote active leveling control for counter-camber roundabouts and adverse gradient inclines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong>Escort Communications:</strong> VHF Channel 14 continuous secure broadcast between lead pilot, tractor unit, steering bogie pilot, and police squad.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-space-md border-t border-surface-container bg-surface-container-low flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Carrier: Mammoet Heavy Transit B.V.
              </span>
              <button
                className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold transition-all shadow-sm cursor-pointer"
                type="button"
                onClick={() => {
                  setRouteSpecsModalOpen(false);
                  setApplyModalOpen(true);
                }}
              >
                Proceed to Operator Application
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: QUICK DISPATCH APPLY MODAL */}
      {applyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden">
            <div className="p-space-lg border-b border-surface-container flex items-center justify-between bg-surface-container-low">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                  Mammoet Direct Dispatch
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Apply for Senior Heavy Haul Operator
                </h3>
              </div>
              <button
                className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface flex items-center justify-center cursor-pointer"
                type="button"
                onClick={() => setApplyModalOpen(false)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>

            <form className="p-space-lg space-y-space-md" onSubmit={handleApplySubmit}>
              <div>
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold block mb-1">
                  Full Legal Name
                </label>
                <input
                  className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-space-sm py-2 font-body-sm text-body-sm focus:outline-none focus:border-primary"
                  placeholder="e.g. Liam van den Berg"
                  required
                  type="text"
                  value={applyForm.fullName}
                  onChange={(e) =>
                    setApplyForm({ ...applyForm, fullName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold block mb-1">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-space-sm py-2 font-body-sm text-body-sm focus:outline-none focus:border-primary"
                  placeholder="operator@transport.com"
                  required
                  type="email"
                  value={applyForm.email}
                  onChange={(e) =>
                    setApplyForm({ ...applyForm, email: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-space-sm">
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold block mb-1">
                    Primary License
                  </label>
                  <select
                    className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-space-sm py-2 font-body-sm text-body-sm focus:outline-none focus:border-primary cursor-pointer"
                    value={applyForm.licenseClass}
                    onChange={(e) =>
                      setApplyForm({
                        ...applyForm,
                        licenseClass: e.target.value,
                      })
                    }
                  >
                    <option>CE Articulated / Heavy Combination</option>
                    <option>CDL Class A (US Oversize Endorsed)</option>
                    <option>Class 1 HGV (UK / NI)</option>
                  </select>
                </div>

                <div>
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold block mb-1">
                    STGO / VOS Endorsement
                  </label>
                  <select
                    className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-space-sm py-2 font-body-sm text-body-sm focus:outline-none focus:border-primary cursor-pointer"
                    value={applyForm.stgoCategory}
                    onChange={(e) =>
                      setApplyForm({
                        ...applyForm,
                        stgoCategory: e.target.value,
                      })
                    }
                  >
                    <option>STGO Cat 3 (Up to 150t)</option>
                    <option>STGO Cat 2 (Up to 80t)</option>
                    <option>German §70 StVZO Blanket</option>
                    <option>US Superload &gt;200,000 lbs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold block mb-1">
                  Years of Modular / Low-Loader Experience
                </label>
                <select
                  className="w-full bg-surface-container-low border border-surface-container-high rounded-lg px-space-sm py-2 font-body-sm text-body-sm focus:outline-none focus:border-primary cursor-pointer"
                  value={applyForm.experienceYears}
                  onChange={(e) =>
                    setApplyForm({
                      ...applyForm,
                      experienceYears: e.target.value,
                    })
                  }
                >
                  <option>3 - 5 Years Heavy Haul</option>
                  <option>5+ Years Heavy Haul</option>
                  <option>10+ Years Master Transporter</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  className="w-full py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  disabled={applySuccess}
                  type="submit"
                >
                  {applySuccess ? (
                    <>
                      <span className="material-symbols-outlined text-[20px] animate-spin">
                        progress_activity
                      </span>
                      <span>Submitting Dispatch Profile...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">
                        send
                      </span>
                      <span>Dispatch Roster Application to Mammoet</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
