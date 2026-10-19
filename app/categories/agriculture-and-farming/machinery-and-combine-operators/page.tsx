"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MachineryAndCombineOperatorsPage() {
  const [combineSpec, setCombineSpec] = useState(
    "High-Capacity Rotary / Draper Header (10-12m) / Tier 5"
  );
  const [harvestCorridor, setHarvestCorridor] = useState(
    "Magdeburg Börde, Hannover & Saxony-Anhalt"
  );
  const [licenseTelematics, setLicenseTelematics] = useState(
    "EU Category T + John Deere Gen 4 / CLAAS Cebis"
  );
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSubmitted, setAlertSubmitted] = useState(false);
  const [savedRole, setSavedRole] = useState(false);

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertEmail) {
      setAlertSubmitted(true);
      setTimeout(() => setAlertSubmitted(false), 4000);
      setAlertEmail("");
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md min-h-screen antialiased flex flex-col selection:bg-primary selection:text-on-primary">
      {/* Global Jobzeta Header */}
      <Header />

      <main className="w-full pt-16 sm:pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* SECTION 1: META BAR & BREADCRUMBS */}
          <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-3.5 px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant flex-wrap"
              >
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1"
                  href="/"
                >
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  <span>Home</span>
                </Link>
                <span className="text-outline">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories"
                >
                  Categories
                </Link>
                <span className="text-outline">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/agriculture-and-farming"
                >
                  Agriculture &amp; Farming
                </Link>
                <span className="text-outline">/</span>
                <span className="text-secondary font-semibold">
                  Machinery &amp; Combine Operators
                </span>
              </nav>

              <div className="flex flex-wrap items-center gap-2 font-label-sm text-label-sm">
                <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded font-mono font-semibold tracking-wide border border-outline-variant">
                  DIRECTORY: AG-COMBINE-8820
                </span>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                  <span>Live Harvest Telematics &amp; Field Status Active</span>
                </div>
                <span className="bg-teal-50 text-teal-800 border border-teal-200 px-2.5 py-1 rounded font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  CE Machinery Directive &amp; Cat T Pre-Cleared
                </span>
                <span className="bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded font-mono text-xs border border-outline-variant hidden sm:inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px] text-primary">speed</span>
                  Magdeburg-Hannover Hub Latency: 14ms
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 2: HERO TITLE & ACTION BAR */}
          <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-space-xl px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
              <div className="max-w-4xl flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-extrabold bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded">
                    COMMERCIAL AGRI-MACHINERY &amp; AUTONOMOUS HARVEST
                  </span>
                </div>
                <h1 className="font-headline-xl text-3xl sm:text-headline-xl text-secondary tracking-tight font-bold">
                  Combine Harvester, Tractor Fleet &amp; Autonomous Agritech Operations
                </h1>
                <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant leading-relaxed">
                  Certified European Category T and Global Precision Agriculture machinery operators managing dual-rotor combine harvesters, RTK GPS sub-2.5cm autosteer, ISOBUS section controls, and high-yield grain logistics corridors.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <button
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-outline text-secondary font-label-lg text-label-lg font-semibold hover:bg-surface-container-low transition-all shadow-xs cursor-pointer"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Combine Harvester, Tractor Fleet & Autonomous Agritech Operations",
                        url: window.location.href,
                      }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Harvest Feed link copied to clipboard!");
                    }
                  }}
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg">share</span>
                  <span>Share Harvest Feed</span>
                </button>
                <a
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-semibold hover:bg-primary-container shadow-sm hover:shadow-md transition-all cursor-pointer"
                  href="#harvest-alerts"
                >
                  <span className="material-symbols-outlined text-lg">notifications</span>
                  <span>Set Agri-Machinery Alerts</span>
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 3: 3 KPI / METRIC GAUGES GRID */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-lg">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* KPI 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      ACTIVE HARVEST REQUISITIONS
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">agriculture</span>
                    </div>
                  </div>
                  <div className="font-display-lg text-3xl sm:text-display-lg text-secondary tracking-tight font-extrabold">
                    4,250
                  </div>
                </div>
                <div className="pt-3 border-t border-outline-variant mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2 py-0.5 rounded">
                    <span className="material-symbols-outlined text-xs">trending_up</span> +18.2% MoM
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    Peak Harvest Surge (Magdeburg, East Anglia &amp; Danube)
                  </span>
                </div>
              </div>

              {/* KPI 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      AVERAGE GLOBAL WAGE BAND
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">payments</span>
                    </div>
                  </div>
                  <div className="font-display-lg text-2xl sm:text-display-lg text-secondary tracking-tight font-extrabold">
                    €42,000 – €68,000
                  </div>
                </div>
                <div className="pt-3 border-t border-outline-variant mt-3">
                  <p className="text-xs text-on-surface-variant">
                    €3,500–€5,600/mo gross equiv. • night-cut &amp; grain loss bonus
                  </p>
                </div>
              </div>

              {/* KPI 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      COMPLIANCE GATEWAYS
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">verified_user</span>
                    </div>
                  </div>
                  <div className="font-headline-md text-xl sm:text-headline-md text-secondary tracking-tight font-bold pt-1">
                    Führerschein T • RTK GPS • ISOBUS
                  </div>
                </div>
                <div className="pt-3 border-t border-outline-variant mt-3">
                  <p className="text-xs text-on-surface-variant">
                    Pre-clearance: Lower Saxony, East Anglia, Champagne, Canterbury
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: FILTER BAR (3-Dropdown + 1-Button Horizontal Bar) */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-lg">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-xs">
              <form
                className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Combine / Tractor Spec */}
                <div className="md:col-span-4 relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                    precision_manufacturing
                  </span>
                  <select
                    className="w-full pl-10 pr-8 py-2.5 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                    value={combineSpec}
                    onChange={(e) => setCombineSpec(e.target.value)}
                  >
                    <option value="High-Capacity Rotary / Draper Header (10-12m) / Tier 5">
                      High-Capacity Rotary / Draper Header (10-12m) / Tier 5
                    </option>
                    <option value="Conventional Walker Combines (6-8 Walkers)">
                      Conventional Walker Combines (6-8 Walkers)
                    </option>
                    <option value="Heavy High-HP Tracked Tractors (500HP+ Quadtrac/9RX)">
                      Heavy High-HP Tracked Tractors (500HP+ Quadtrac/9RX)
                    </option>
                    <option value="Self-Propelled Forage Choppers (800HP+ Dual-Drive)">
                      Self-Propelled Forage Choppers (800HP+ Dual-Drive)
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">
                    expand_more
                  </span>
                </div>

                {/* Harvest Corridors */}
                <div className="md:col-span-3 relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                    location_on
                  </span>
                  <select
                    className="w-full pl-10 pr-8 py-2.5 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                    value={harvestCorridor}
                    onChange={(e) => setHarvestCorridor(e.target.value)}
                  >
                    <option value="Magdeburg Börde, Hannover & Saxony-Anhalt">
                      Magdeburg Börde, Hannover &amp; Saxony-Anhalt
                    </option>
                    <option value="East Anglia, The Fens & Lincolnshire (UK)">
                      East Anglia, The Fens &amp; Lincolnshire (UK)
                    </option>
                    <option value="Champagne-Ardenne & Grand Est Grain Belt (FR)">
                      Champagne-Ardenne &amp; Grand Est Grain Belt (FR)
                    </option>
                    <option value="Red River Valley & Kansas Wheat Trail (US)">
                      Red River Valley &amp; Kansas Wheat Trail (US)
                    </option>
                    <option value="Western Australia Wheatbelt Corridor (AU)">
                      Western Australia Wheatbelt Corridor (AU)
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">
                    expand_more
                  </span>
                </div>

                {/* License & Telematics */}
                <div className="md:col-span-3 relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                    badge
                  </span>
                  <select
                    className="w-full pl-10 pr-8 py-2.5 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                    value={licenseTelematics}
                    onChange={(e) => setLicenseTelematics(e.target.value)}
                  >
                    <option value="EU Category T + John Deere Gen 4 / CLAAS Cebis">
                      EU Category T + John Deere Gen 4 / CLAAS Cebis
                    </option>
                    <option value="UK Category F + NPTC Combine Certificate">
                      UK Category F + NPTC Combine Certificate
                    </option>
                    <option value="US Ag Custom CDL Class A Exemption">
                      US Ag Custom CDL Class A Exemption
                    </option>
                    <option value="RTK Sub-2.5cm & ISOBUS Class 3 Certified">
                      RTK Sub-2.5cm &amp; ISOBUS Class 3 Certified
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">
                    expand_more
                  </span>
                </div>

                {/* Action Button */}
                <div className="md:col-span-2">
                  <button
                    className="w-full py-2.5 px-4 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg font-bold hover:bg-primary-container shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">filter_alt</span>
                    <span>Filter Harvest Runs</span>
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* SECTION 5: FEATURED REQUISITION CARD (Exact Screen 56 Architecture) */}
          <section className="w-full py-space-xl px-4 sm:px-6 lg:px-8 2xl:px-12 bg-surface">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Featured Requisitions
                    </span>
                    <span className="text-on-surface-variant font-label-sm">· 1,420 Active Openings</span>
                  </div>
                  <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-secondary tracking-tight font-bold">
                    Machinery &amp; Autonomous Harvest Openings
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    Standardized precision ag postings across dual-rotor combine harvesting, RTK autosteer, and autonomous machinery fleet logistics. Hover the card for technical certifications and direct application actions.
                  </p>
                </div>
                <div className="flex items-center gap-space-xs self-start md:self-auto">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Sorting:</span>
                  <button
                    className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm flex items-center gap-1 hover:bg-surface-container transition-colors"
                    type="button"
                  >
                    <span>Highest Precision Tier</span>
                    <span className="material-symbols-outlined text-[14px]">expand_more</span>
                  </button>
                </div>
              </div>

              {/* The Featured Card */}
              <div className="group relative w-full bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                  <div className="lg:col-span-8 flex flex-col sm:flex-row items-start gap-space-md">
                    <div className="relative w-full sm:w-52 md:w-56 h-48 sm:h-auto shrink-0 overflow-hidden rounded-xl bg-surface-container shadow-sm group/thumb self-stretch">
                      <img
                        alt="Professional combine harvester operators in golden wheat harvest field"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        src="https://lh3.googleusercontent.com/aida/AEtjO1UFJWQIWdMJpTMrS-400LZiwfOx7sjwfeKLIhFqEFqh_3_yePixwOD6n2gyhoqV0EL3EYAoFundUbXNE67UhOL73H71bbKPoHXpfgh2PxKvtzWN4NG5l6d2P0ABKSJ2nB5R2IBTuebNdziYG7hgs-Mu2vJ9CPdWpQFL9vx3Z7lAtuMMhnDsmSNwxx9sM0Ww2273hYRugHtu0Nl0RLKkg7SWWx6Aa_SPBQ2sAdAqfuq46yIDBP-LuRMQcXu7"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-secondary/80 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-secondary font-label-sm text-[11px] font-bold shadow-sm">
                          <span className="material-symbols-outlined text-primary text-[13px]">sensors</span>
                          GEN 4 RTK • CAT T
                        </span>
                      </div>
                      <button
                        aria-label="Bookmark this role"
                        className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center shadow transition-all active:scale-95 cursor-pointer ${
                          savedRole
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-on-surface hover:text-primary"
                        }`}
                        onClick={() => setSavedRole(!savedRole)}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[17px]">
                          {savedRole ? "bookmark_added" : "bookmark"}
                        </span>
                      </button>
                      <div className="absolute bottom-2 left-2.5 hidden sm:flex items-center gap-1 text-[11px] font-label-sm text-white bg-secondary/80 px-2 py-0.5 rounded backdrop-blur-sm group-hover:opacity-0 transition-opacity">
                        <span className="material-symbols-outlined text-[13px]">visibility</span>
                        <span>Hover for specs</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          ForwardFarming Agro-Holdings SE
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
                          <span className="material-symbols-outlined text-[12px] text-primary">verified</span>
                          Verified Employer
                        </span>
                        <span className="text-on-surface-variant text-xs">•</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">schedule</span>
                          Posted 2h ago
                        </span>
                      </div>

                      <h3 className="font-headline-md text-headline-md text-secondary group-hover:text-primary transition-colors tracking-tight font-bold cursor-pointer">
                        Senior Autonomous Combine &amp; Precision Farming Specialist
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                          Magdeburg Börde / Lower Saxony Corridor (On-Site • High-Yield Harvest Fleet)
                        </span>
                        <span className="flex items-center gap-1 text-primary font-bold">
                          <span className="material-symbols-outlined text-[16px]">payments</span>
                          €4,200 – €5,600 / mo gross (€50k – €67k eq.) + Night-cut per diem
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                          Full-Time Seasonal
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Agri-Enterprise On-Site
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-secondary border border-blue-200 font-label-sm text-label-sm font-semibold">
                          Relocation &amp; Lodging Supported
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 font-label-sm text-label-sm font-bold">
                          John Deere Gen 4 / CLAAS Cebis
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-medium">
                          EU Category T
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-medium">
                          StarFire RTK
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 font-label-sm text-label-sm font-medium">
                          ISOBUS Section Control
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between h-full bg-surface-container-low p-space-md rounded-xl border border-outline-variant">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">
                          HARVEST TELEMETRICS SPECIFICATION
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-teal-800 font-bold bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                          <span className="material-symbols-outlined text-[14px] text-primary">military_tech</span>
                          Grade A Fleet
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Requires Führerschein T, sub-2.5cm RTK autosteer calibration on 12.2m draper headers, and zero-loss threshing certification in Magdeburg Börde.
                      </p>
                    </div>

                    <div className="flex items-center gap-space-sm mt-space-md">
                      <button
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-container text-secondary font-label-lg text-label-lg font-semibold border border-outline-variant transition-colors cursor-pointer"
                        onClick={() => alert("Job Specifications: Model CLAAS Lexion 8900 / John Deere S790, Dual-Rotor, 12.2m Draper Header, RTK sub-2.5cm.")}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        <span>View Position</span>
                      </button>
                      <button
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-sm transition-all cursor-pointer"
                        onClick={() => alert("Quick Apply initiated for Senior Autonomous Combine & Precision Farming Specialist (ForwardFarming SE). Dispatch team notified.")}
                        type="button"
                      >
                        <span>Quick Apply</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination / Showing Counter */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-sm text-on-surface-variant font-label-sm text-label-sm">
                <span>Showing 1 of 1,420 machinery &amp; combine openings</span>
                <div className="flex items-center gap-space-md">
                  <button
                    className="flex items-center gap-1 text-primary font-semibold hover:underline cursor-pointer"
                    onClick={() => alert("All 1,420 machinery and combine openings are synced with the live EU/US agricultural dispatch network.")}
                    type="button"
                  >
                    <span>Load more open positions</span>
                    <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: AGRICULTURAL MACHINERY CERTIFICATION & FIELD ACCESS FRAMEWORKS */}
          <section className="w-full bg-surface-container-lowest border-y border-outline-variant py-space-xl px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              {/* Section Title & Subtitle Row */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div>
                  <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-extrabold">
                    Statutory Verification Framework
                  </span>
                  <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-secondary tracking-tight mt-1 font-bold">
                    Agricultural Machinery Certification &amp; Field Access Frameworks
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Direct clearance credentials across premier European and international agricultural harvest corridors.
                  </p>
                </div>
                <span className="bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold px-3 py-1.5 rounded-full self-start md:self-auto flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">settings_input_antenna</span>
                  ISOBUS &amp; RTK Telematics Interoperability
                </span>
              </div>

              {/* 4 Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Card 1: DE */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-xs flex flex-col justify-between hover:border-primary transition-colors">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        GERMANY &amp; DACH
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-base">agriculture</span>
                      </div>
                    </div>
                    <h3 className="font-headline-sm text-base font-bold text-secondary">
                      Führerschein Klasse T &amp; FQN
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Compulsory Category T tractor license up to 60 km/h, wide-vehicle agricultural transport clearance, and BVL plant protection Sachkundenachweis.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant mt-4 flex flex-col gap-1 text-[11px] text-on-surface-variant font-mono">
                    <span className="flex items-center gap-1 font-semibold text-emerald-700">
                      <span className="material-symbols-outlined text-xs">check_circle</span> Code 95 Ag: Exempt
                    </span>
                    <span className="text-outline">Telematics: JDLink / Cebis Active</span>
                  </div>
                </div>

                {/* Card 2: UK */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-xs flex flex-col justify-between hover:border-primary transition-colors">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        UNITED KINGDOM &amp; IRELAND
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-base">engineering</span>
                      </div>
                    </div>
                    <h3 className="font-headline-sm text-base font-bold text-secondary">
                      Category F + Lantra / NPTC
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      UK Category F agricultural tractor &amp; combine entitlement, NPTC combine proficiency certification, and BASIS/FACTS soil compaction minimization endorsement.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant mt-4 flex flex-col gap-1 text-[11px] text-on-surface-variant font-mono">
                    <span className="flex items-center gap-1 font-semibold text-emerald-700">
                      <span className="material-symbols-outlined text-xs">check_circle</span> UK Qualification: City &amp; Guilds L3
                    </span>
                    <span className="text-outline">Custom Ag: Fast-Track Roster</span>
                  </div>
                </div>

                {/* Card 3: US/CAN */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-xs flex flex-col justify-between hover:border-primary transition-colors">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        NORTH AMERICA (US/CAN)
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-base">verified_user</span>
                      </div>
                    </div>
                    <h3 className="font-headline-sm text-base font-bold text-secondary">
                      Custom Harvester CDL / Ag Exemption
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      US State Agricultural Exemption for self-propelled harvesters, Class A CDL with doubles/triples endorsement for grain haulage, and OSHA 1928 compliance.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant mt-4 flex flex-col gap-1 text-[11px] text-on-surface-variant font-mono">
                    <span className="flex items-center gap-1 font-semibold text-emerald-700">
                      <span className="material-symbols-outlined text-xs">check_circle</span> Federal Clearance: FMCSA H-2A Ag
                    </span>
                    <span className="text-outline">Driver License: CDL Class A / State Ag</span>
                  </div>
                </div>

                {/* Card 4: AU/NZ */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-xs flex flex-col justify-between hover:border-primary transition-colors">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        AUSTRALIA &amp; NEW ZEALAND
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-base">build</span>
                      </div>
                    </div>
                    <h3 className="font-headline-sm text-base font-bold text-secondary">
                      Heavy Rigid (HR) &amp; Ag Exemption
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Australian HR or Class 1 machinery endorsement, custom grain contract harvest validation, paired with Working Holiday Subclass 417/462 or NZ RSE harvest scheme.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant mt-4 flex flex-col gap-1 text-[11px] text-on-surface-variant font-mono">
                    <span className="flex items-center gap-1 font-semibold text-emerald-700">
                      <span className="material-symbols-outlined text-xs">check_circle</span> Aus Qualification: AgriSkills AU Grade 4
                    </span>
                    <span className="text-outline">Direct Link: Grain Harvest Portal</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: HARVEST CAPABILITIES & MACHINERY SPECIALIZATIONS */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div>
                  <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-extrabold">
                    Machine Profiles &amp; Fleet Disciplines
                  </span>
                  <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-secondary tracking-tight mt-1 font-bold">
                    Harvest Capabilities &amp; Machinery Specializations
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Explore dedicated machinery profiles requiring specialized cutterbars, telematics setups, and header transport.
                  </p>
                </div>
                <Link
                  className="text-primary hover:text-primary-container font-semibold text-sm flex items-center gap-1 transition-colors self-start md:self-auto"
                  href="/categories/agriculture-and-farming"
                >
                  <span>Explore All 24 Agricultural Sectors →</span>
                </Link>
              </div>

              {/* 4 Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Spec Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-primary flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-[22px]">agriculture</span>
                    </div>
                    <h3 className="font-headline-sm text-base font-bold text-secondary">
                      High-Capacity Rotary Combines (10-12m+)
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      High-acreage wheat, barley, canola threshing with CLAAS Lexion 8900 / John Deere S790, active machine sync unloader, and automated sieve adjustment.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant mt-4">
                    <Link
                      className="text-primary font-bold text-xs hover:underline flex items-center gap-1"
                      href="/find-jobs?spec=rotary-combines"
                    >
                      <span>1,820 Openings →</span>
                    </Link>
                  </div>
                </div>

                {/* Spec Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-secondary flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-[22px]">directions_boat</span>
                    </div>
                    <h3 className="font-headline-sm text-base font-bold text-secondary">
                      Heavy High-HP Tractors &amp; Tillage
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      High-draft primary tillage and deep ripping using Fendt 1050 Vario, John Deere 9RX, or Case Quadtrac with sub-2.5cm RTK autosteer.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant mt-4">
                    <Link
                      className="text-primary font-bold text-xs hover:underline flex items-center gap-1"
                      href="/find-jobs?spec=heavy-tractors"
                    >
                      <span>1,140 Openings →</span>
                    </Link>
                  </div>
                </div>

                {/* Spec Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-primary flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-[22px]">grain</span>
                    </div>
                    <h3 className="font-headline-sm text-base font-bold text-secondary">
                      Precision Spraying &amp; PWM Booms
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Liquid nitrogen and crop protection application with Horsch Leeb / Fendt Rogator 36m booms and ISOBUS PWM pulse-width nozzle control.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant mt-4">
                    <Link
                      className="text-primary font-bold text-xs hover:underline flex items-center gap-1"
                      href="/find-jobs?spec=precision-spraying"
                    >
                      <span>690 Openings →</span>
                    </Link>
                  </div>
                </div>

                {/* Spec Card 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-secondary flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                    </div>
                    <h3 className="font-headline-sm text-base font-bold text-secondary">
                      High-Density Baling &amp; Forage Harvesters
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      High-throughput silage chopping with Krone Big X and high-density square baling with integrated bale weighing and moisture sensors.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant mt-4">
                    <Link
                      className="text-primary font-bold text-xs hover:underline flex items-center gap-1"
                      href="/find-jobs?spec=forage-baling"
                    >
                      <span>600 Openings →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: ACCREDITED ENTERPRISE HARVEST PARTNERS */}
          <section className="w-full bg-surface-container-lowest border-y border-outline-variant py-space-xl px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-headline-sm text-lg font-bold text-secondary">
                    Accredited Harvest Fleets &amp; Agri-Enterprise Partners
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Direct Recruitment &amp; Seasonal Harvest Agreements
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary bg-teal-50 border border-teal-200 px-2.5 py-1 rounded">
                  Verified Enterprise Sponsoring Roster
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
                {/* Partner 1 */}
                <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant text-center flex flex-col items-center justify-center gap-1.5 hover:border-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary font-bold text-base shadow-2xs">
                    JD
                  </div>
                  <div className="font-bold text-xs text-secondary mt-1">John Deere Dealer Net</div>
                  <div className="text-[11px] text-primary font-medium">1,240 Open Dispatches</div>
                </div>

                {/* Partner 2 */}
                <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant text-center flex flex-col items-center justify-center gap-1.5 hover:border-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-secondary font-bold text-base shadow-2xs">
                    CL
                  </div>
                  <div className="font-bold text-xs text-secondary mt-1">CLAAS Harvest Centre</div>
                  <div className="text-[11px] text-primary font-medium">890 Open Dispatches</div>
                </div>

                {/* Partner 3 */}
                <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant text-center flex flex-col items-center justify-center gap-1.5 hover:border-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary font-bold text-base shadow-2xs">
                    FE
                  </div>
                  <div className="font-bold text-xs text-secondary mt-1">Fendt Global Fleets</div>
                  <div className="text-[11px] text-primary font-medium">750 Open Dispatches</div>
                </div>

                {/* Partner 4 */}
                <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant text-center flex flex-col items-center justify-center gap-1.5 hover:border-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-secondary font-bold text-base shadow-2xs">
                    FF
                  </div>
                  <div className="font-bold text-xs text-secondary mt-1">ForwardFarming SE</div>
                  <div className="text-[11px] text-primary font-medium">620 Open Dispatches</div>
                </div>

                {/* Partner 5 */}
                <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant text-center flex flex-col items-center justify-center gap-1.5 hover:border-primary transition-colors col-span-2 sm:col-span-1">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary font-bold text-base shadow-2xs">
                    BW
                  </div>
                  <div className="font-bold text-xs text-secondary mt-1">BayWa AG Agrar</div>
                  <div className="text-[11px] text-primary font-medium">580 Open Dispatches</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 9: CTA ALERT BANNER */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl" id="harvest-alerts">
            <div className="max-w-7xl 2xl:max-w-[1920px] mx-auto rounded-2xl bg-secondary text-on-primary p-8 md:p-12 relative overflow-hidden shadow-lg border border-secondary/20">
              <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary/10 pointer-events-none"></div>
              <div className="absolute right-12 top-10 opacity-10 pointer-events-none hidden md:block">
                <span className="material-symbols-outlined text-[180px]">satellite_alt</span>
              </div>

              <div className="relative z-10 max-w-2xl flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-teal-200 text-xs font-bold px-3 py-1 rounded-full w-max">
                  <span className="material-symbols-outlined text-xs">rss_feed</span>
                  <span>Automated Telematics Integration &amp; Dispatch Feeds</span>
                </div>

                <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold tracking-tight text-white">
                  Receive Instant Harvest Shift Alerts &amp; Grain Surge Rates
                </h2>

                <p className="font-body-md text-sm md:text-base text-slate-200 leading-relaxed">
                  Get instant mobile and WhatsApp alerts when harvest windows open, grain moisture drops below 14.5%, and weekend night-cutting bonuses trigger.
                </p>

                {/* Email Input Form */}
                <form className="flex flex-col sm:flex-row gap-2 mt-2 max-w-lg" onSubmit={handleAlertSubmit}>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-300 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                    placeholder="operator.harvest@agritech-fleet.de"
                    required
                    type="email"
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                  />
                  <button
                    className="shrink-0 px-6 py-3 bg-primary hover:bg-primary-container text-white font-bold text-sm rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                    type="submit"
                  >
                    <span>Activate Alerts</span>
                    <span className="material-symbols-outlined text-sm">notifications_active</span>
                  </button>
                </form>

                {alertSubmitted && (
                  <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-400 text-emerald-100 text-xs font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    <span>Harvest Telematics Alerts activated successfully! You will receive live shift broadcasts.</span>
                  </div>
                )}

                {/* Badges below form */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium pt-1">
                  <span className="flex items-center gap-1">✓ Zero Spam</span>
                  <span className="flex items-center gap-1">✓ Real-Time Agritech Sync</span>
                  <span className="flex items-center gap-1">✓ Unsubscribe Anytime</span>
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
