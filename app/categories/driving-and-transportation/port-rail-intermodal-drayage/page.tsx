"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortRailIntermodalDrayagePage() {
  const [bookmarked, setBookmarked] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSubmitted, setAlertSubmitted] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: "Jobzeta Intermodal & Drayage Telemetry Feed",
          text: "Live container terminal requisitions and verified gate dispatch opportunities.",
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  const handleScrollToAlerts = () => {
    const el = document.getElementById("alertsForm");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const input = el.querySelector("input");
      if (input) input.focus();
    }
  };

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alertEmail) return;
    setAlertSubmitted(true);
    setAlertEmail("");
    setTimeout(() => {
      setAlertSubmitted(false);
    }, 3500);
  };

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-background min-h-screen flex-1">
        <div className="flex flex-col w-full">
          {/* Top Live Intermodal Gate Telemetry Header & Sub-Discipline Overview */}
          <section className="w-full px-margin pt-space-lg pb-space-xl bg-surface-container-low">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-space-lg">
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant flex-wrap">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" data-path="home" href="/">
                  <span className="material-symbols-outlined text-[15px]">home</span> Home
                </Link>
                <span>/</span>
                <Link className="hover:text-primary transition-colors" data-path="categories" href="/categories">
                  Categories
                </Link>
                <span>/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  data-path="categories"
                  href="/categories/driving-and-transportation"
                >
                  Driving &amp; Transportation
                </Link>
                <span>/</span>
                <span className="text-secondary font-semibold">Port, Rail &amp; Intermodal Drayage</span>
              </nav>

              {/* Live Status & Telemetry Strip */}
              <div className="flex flex-wrap items-center justify-between gap-space-md p-space-md rounded-xl bg-surface-container shadow-sm">
                <div className="flex flex-wrap items-center gap-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm px-space-sm py-space-xs rounded-full bg-secondary text-on-secondary font-bold tracking-wider">
                      DIRECTORY
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface">DT-PR-DRAY-7740</span>
                  </div>
                  <div className="h-4 w-px bg-outline-variant/40 hidden sm:block"></div>
                  <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    <span className="font-bold">Live Terminal Gate Status &amp; TOS Active</span>
                  </div>
                  <div className="h-4 w-px bg-outline-variant/40 hidden md:block"></div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                    <span>Alfapass / Portbase &amp; US TWIC Pre-Cleared</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-surface-container-highest font-label-sm text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary text-[16px]">speed</span>
                    <span>
                      ARA Corridor Gate Latency: <strong className="text-primary font-bold">12m</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Headline & Global Intro */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
                <div className="lg:col-span-8 space-y-space-md">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px]">directions_boat</span> Commercial Intermodal &amp; Port Freight
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-secondary tracking-tight">
                    Port Terminal Drayage, Rail Intermodal &amp; Inland Container Logistics
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                    Certified European CE and North American CDL-A container transport operators managing deep-sea container chassis transfers, twist-lock operations, rail ramp exchanges, and bonded customs corridors.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-end items-stretch lg:items-end">
                  <div className="flex items-center gap-space-sm w-full sm:w-auto">
                    <button
                      onClick={handleShare}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg transition-colors shadow-sm cursor-pointer"
                      id="shareBtn"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">share</span>
                      <span>{shareCopied ? "Link Copied!" : "Share Terminal Feed"}</span>
                    </button>
                    <button
                      onClick={handleScrollToAlerts}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-sm cursor-pointer"
                      id="alertBtn"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">notifications_active</span>
                      <span>Set Port Drayage Alerts</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Telemetry KPI Metric Cards (3 Cards) */}
          <section className="w-full px-margin -mt-6">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {/* Metric 1: Requisitions */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                      Active Drayage Requisitions
                    </span>
                    <div className="font-headline-xl text-headline-xl text-secondary font-bold mt-1">4,250</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">local_shipping</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center gap-2 text-primary font-label-sm text-label-sm bg-surface-container-low px-space-sm py-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  <span className="font-bold">+15.4% MoM</span>
                  <span className="text-on-surface-variant truncate">Container Flow Surge (Maasvlakte &amp; Hamburg)</span>
                </div>
              </div>

              {/* Metric 2: Wage Band */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                      Average Global Wage Band
                    </span>
                    <div className="font-headline-lg text-headline-lg text-secondary font-bold mt-1">
                      €48,000 – €74,000
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">payments</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-1.5 rounded-lg leading-tight truncate">
                  $52k–$82k USD eq. • night differential &amp; demurrage wait pay
                </div>
              </div>

              {/* Metric 3: Compliance Gateways */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                      Compliance Gateways
                    </span>
                    <div className="font-headline-sm text-headline-sm text-secondary font-bold mt-1 tracking-tight">
                      Alfapass • TWIC • Portbase
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">shield_person</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-1.5 rounded-lg truncate">
                  <span className="material-symbols-outlined text-primary text-[16px]">task_alt</span>
                  <span>Pre-clearance: Rotterdam, Antwerp, Hamburg, US TSA</span>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Terminal Filter Bar */}
          <section className="w-full px-margin mt-space-lg">
            <div className="w-full max-w-7xl mx-auto p-space-md rounded-xl bg-surface-container shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-sm items-center">
                {/* Filter 1: Chassis / Spec */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                    Chassis / Terminal Spec
                  </label>
                  <div className="relative">
                    <select className="w-full h-11 px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                      <option>40ft ISO Gooseneck / High-Cube / 20ft Slider</option>
                      <option>45ft Extended Euro Palette Chassis</option>
                      <option>Reefer GenSet Active Clip-On</option>
                      <option>20ft Heavy Intermodal Tank Container</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-on-surface-variant text-[18px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Filter 2: Port Corridors */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                    Port Corridors
                  </label>
                  <div className="relative">
                    <select className="w-full h-11 px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                      <option>Rotterdam Maasvlakte &amp; Antwerp Haven</option>
                      <option>Hamburg Altenwerder &amp; Bremerhaven Gate</option>
                      <option>US West Coast: Los Angeles &amp; Long Beach</option>
                      <option>US East Coast: NY/NJ Port Elizabeth &amp; Savannah</option>
                      <option>UK Felixstowe &amp; London Gateway Intermodal</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-on-surface-variant text-[18px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Filter 3: License & Gate Pass */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                    License &amp; Gate Pass
                  </label>
                  <div className="relative">
                    <select className="w-full h-11 px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                      <option>EU Category CE + Alfapass (Code 95)</option>
                      <option>North American CDL-A + Active TWIC Card</option>
                      <option>HPA GATE Pass + Brematic Pass</option>
                      <option>UK Driver CPC + RHIDES Registered</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-on-surface-variant text-[18px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Filter Action Button */}
                <div className="flex flex-col justify-end pt-5 md:pt-0">
                  <button
                    className="w-full h-11 inline-flex items-center justify-center gap-space-xs rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-sm cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">filter_list</span>
                    <span>Filter Terminal Runs</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* PRIORITY ENTERPRISE DISPATCH - Single Featured Job Card */}
          <section className="w-full px-margin mt-space-xl">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                <div>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                    Direct Port Terminal Dispatch • Tier-1 Intermodal Operator
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-secondary">
                    Featured Primary Drayage Requisition
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Auto-matched with Alfapass Verified Roster
                  </span>
                </div>
              </div>

              {/* Single Interactive Featured Card */}
              <article
                aria-label="Senior Intermodal Port Drayage & Rail Container Operator at MSC Intermodal"
                className="group relative w-full rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                tabIndex={0}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Drayage Thumbnail Canvas */}
                  <div className="relative w-full md:w-64 h-44 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: "url('/msc-intermodal-drayage.jpg')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30"></div>
                    {/* Top Badges on Thumbnail */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[13px]">anchor</span>
                        Port Drayage &amp; Intermodal
                      </span>
                    </div>
                    {/* Bookmark Action */}
                    <button
                      aria-label="Bookmark this dispatch role"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setBookmarked(!bookmarked);
                      }}
                      type="button"
                    >
                      <span
                        className={`material-symbols-outlined text-[17px] ${
                          bookmarked ? "text-primary" : ""
                        }`}
                      >
                        bookmark
                      </span>
                    </button>
                    {/* Subtle hover indicator */}
                    <div className="absolute bottom-2 left-2.5 hidden md:flex items-center gap-1 text-[11px] font-label-sm text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm group-hover:opacity-0 transition-opacity">
                      <span className="material-symbols-outlined text-[13px]">visibility</span>
                      <span>Hover for scope</span>
                    </div>
                  </div>

                  {/* Main Card Body */}
                  <div className="flex-1 p-space-md sm:p-space-lg flex flex-col justify-between gap-space-sm">
                    {/* Default Information State */}
                    <div className="flex flex-col gap-2">
                      {/* Employer Brand & Metas */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-label-md text-label-md text-secondary font-bold tracking-wide uppercase">
                            MSC Intermodal
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant/40"></span>
                          <span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-primary font-medium">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Verified Carrier
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant/40"></span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-outline-variant/40">schedule</span>{" "}
                            Posted 2h ago
                          </span>
                        </div>
                        {/* Salary Band Badge */}
                        <div className="text-right">
                          <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                            €48,000 – €72,000
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant"> / yr</span>
                        </div>
                      </div>

                      {/* Role Title */}
                      <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors">
                        Senior Intermodal Port Drayage &amp; Rail Container Operator
                      </h3>

                      {/* Key Meta Row */}
                      <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                          Port of Rotterdam Maasvlakte / Antwerp Haven
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Full-Time Permanent
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
                          Tier-1 Port Fleet
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px]">shield</span> Alfapass &amp; Portbase Pre-Cleared
                        </span>
                      </div>
                    </div>

                    {/* Tags Row (Default) */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        EU Category CE
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Alfapass Gate
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Volvo FH / Scania Sleeper
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Night Shift Differential
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        ISO 40ft High-Cube
                      </span>
                    </div>

                    {/* Smooth Interactive Hover Reveal Accordion */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-all duration-300 ease-out overflow-hidden">
                      <div className="min-h-0 pt-0 group-hover:pt-space-sm group-focus-within:pt-space-sm flex flex-col gap-space-sm">
                        <div className="w-full h-px bg-surface-container-high"></div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low p-space-sm rounded-lg border border-outline-variant/30">
                          <div className="flex flex-col gap-0.5 text-on-surface font-body-sm text-body-sm max-w-2xl">
                            <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[15px]">dock</span>
                              Operational Scope &amp; Terminal Protocol
                            </span>
                            <p className="text-body-sm text-on-surface-variant">
                              Direct quay-side twist-lock container dispatch, expedited Portbase gate turn-time SLA (guaranteed 40m turnaround), and bonded customs rail transfer corridor.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            <Link
                              className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-intermodal-port-drayage-operator"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Details &amp; Specs</span>
                              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                            </Link>
                            <Link
                              className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold transition-all shadow-sm flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-intermodal-port-drayage-operator"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Quick Apply</span>
                              <span className="material-symbols-outlined text-[15px]">send</span>
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

          {/* Statutory Verification Framework — Port Terminal Gate Credentials (4 Multi-Jurisdiction Cards) */}
          <section className="w-full px-margin mt-space-xl">
            <div className="w-full max-w-7xl mx-auto space-y-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                    Security &amp; Regulatory Credentials
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-secondary">
                    Terminal Gate Access Frameworks
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    Direct clearance credentials across premier deep-sea maritime ports and inland intermodal ramp hubs.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-space-md py-2 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                  <span>TOS Biometric &amp; Smartcard Interoperability</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Jurisdiction 1: Rotterdam & Benelux */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-bold text-primary uppercase">
                        Rotterdam &amp; Benelux
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">contactless</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary">Alfapass &amp; Portbase</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Compulsory smartcard access for Port of Antwerp-Bruges and automated pre-notification via Portbase for Rotterdam Maasvlakte terminals (APMT, ECT Delta).
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-md bg-surface-container-low p-space-sm rounded-lg space-y-1 font-label-sm text-label-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span>Code 95 CE:</span> <strong className="text-primary">Mandatory</strong>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span>Biometric Gate ID:</span> <span>Alfapass Active</span>
                    </div>
                  </div>
                </div>

                {/* Jurisdiction 2: Germany & Baltic */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-bold text-primary uppercase">
                        Germany &amp; Baltic
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">badge</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary">Hamburg GATE &amp; Brematic</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Hamburg Port Authority (HPA) GATE pass certification and Brematic Card for Bremerhaven container terminals with slot booking confirmation (SBV).
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-md bg-surface-container-low p-space-sm rounded-lg space-y-1 font-label-sm text-label-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span>License Class:</span> <strong className="text-secondary">EU Klasse CE</strong>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span>TOS Gate Sync:</span> <span>HHLA / Eurogate</span>
                    </div>
                  </div>
                </div>

                {/* Jurisdiction 3: North America (US/CAN) */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-bold text-primary uppercase">
                        North America (US/CAN)
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">security</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary">TSA TWIC &amp; RFID Pass</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Federal Transportation Worker Identification Credential for unescorted maritime facility entry, clean truck RFID registry for LA/Long Beach and NY/NJ Port Authority.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-md bg-surface-container-low p-space-sm rounded-lg space-y-1 font-label-sm text-label-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span>Federal Clearance:</span> <strong className="text-primary">TSA TWIC Active</strong>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span>Driver License:</span> <span>CDL Class A w/ Tank/Haz</span>
                    </div>
                  </div>
                </div>

                {/* Jurisdiction 4: UK & Global Hubs */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-bold text-primary uppercase">
                        UK &amp; Global Hubs
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[24px]">vpn_key</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary">RHIDES &amp; London Gateway</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Radio Frequency Haulier Identification and Entry System (RHIDES) for Port of Felixstowe, Southampton container port, and DP World London Gateway automated access.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-md bg-surface-container-low p-space-sm rounded-lg space-y-1 font-label-sm text-label-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span>UK Qualification:</span> <strong className="text-secondary">Driver CPC HGV Class 1</strong>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span>Destin8 Link:</span> <span>Customs Clearance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intermodal Specializations & Drayage Fleet Types (4 Cards) */}
          <section className="w-full px-margin mt-space-xl">
            <div className="w-full max-w-7xl mx-auto space-y-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                    Fleet Capabilities &amp; Cargo Disciplines
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-secondary">
                    Intermodal Specializations &amp; Equipment
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    Explore dedicated freight profiles requiring specialized chassis setups, driver endorsements, and terminal handling.
                  </p>
                </div>
                <Link
                  className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold transition-colors"
                  data-path="categories"
                  href="/categories"
                >
                  <span>Explore All 24 Transportation Sectors</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Card 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[24px]">forklift</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary">Deep-Sea Pier Drayage (ISO 20/40/45ft)</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      High-frequency container shuttles between terminal crane stacks, quay-side berths, empty container depots, and bonded off-dock storage hubs.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                    <span>1,820 Openings</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[24px]">train</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary">Rail Intermodal Ramp Transfers</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Inland intermodal terminal operations shuttling well-car piggyback containers, dry van domestic 53ft boxes, and mega-combis to regional distribution hubs.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                    <span>980 Openings</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[24px]">ac_unit</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary">
                      Reefer GenSet Active Plug-In Transport
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Perishable cold chain temperature-controlled drayage requiring clip-on diesel generator sets (GenSets), active plug-in checks, and pre-trip temp logging.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                    <span>740 Openings</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[24px]">warning</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-secondary">
                      Dangerous Goods Hazmat Container Drayage
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      ADR tank container and IMDG-certified ISO tank intermodal moves requiring IMO dangerous goods declarations, fire suppression gear, and terminal segregation.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                    <span>710 Openings</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Terminal Carriers */}
          <section className="w-full px-margin mt-space-xl">
            <div className="w-full max-w-7xl mx-auto p-space-lg rounded-xl bg-surface-container shadow-sm space-y-space-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                    Enterprise Carrier Network
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-secondary">
                    Accredited Deep-Sea &amp; Rail Fleet Partners
                  </h3>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Direct Recruitment &amp; Drayage Agreements
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md pt-space-sm">
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col items-center text-center gap-2 hover:bg-surface-bright transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary font-bold font-headline-sm">
                    MSC
                  </div>
                  <div>
                    <div className="font-label-lg text-label-lg font-bold text-on-surface">MSC Intermodal</div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">142 Open Dispatches</span>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col items-center text-center gap-2 hover:bg-surface-bright transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary font-bold font-headline-sm">
                    ML
                  </div>
                  <div>
                    <div className="font-label-lg text-label-lg font-bold text-on-surface">Maersk Linehaul</div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">98 Open Dispatches</span>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col items-center text-center gap-2 hover:bg-surface-bright transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary font-bold font-headline-sm">
                    CGM
                  </div>
                  <div>
                    <div className="font-label-lg text-label-lg font-bold text-on-surface">CMA CGM Intermodal</div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">115 Open Dispatches</span>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col items-center text-center gap-2 hover:bg-surface-bright transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary font-bold font-headline-sm">
                    HL
                  </div>
                  <div>
                    <div className="font-label-lg text-label-lg font-bold text-on-surface">Hapag-Lloyd Transport</div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">84 Open Dispatches</span>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col items-center text-center gap-2 hover:bg-surface-bright transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary font-bold font-headline-sm">
                    ECT
                  </div>
                  <div>
                    <div className="font-label-lg text-label-lg font-bold text-on-surface">Hutchison Ports ECT</div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">160 Open Dispatches</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Telematics & Terminal Alerts CTA Banner */}
          <section className="w-full px-margin my-space-xl">
            <div className="w-full max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-on-secondary-fixed via-secondary to-on-secondary-fixed text-on-secondary p-space-xl shadow-xl relative overflow-hidden">
              {/* Ambient subtle decorative shape */}
              <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-7 space-y-space-sm">
                  <div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-on-secondary/10 backdrop-blur-md font-label-sm text-label-sm text-primary-fixed">
                    <span className="material-symbols-outlined text-[16px]">bolt</span> Automated TOS Integration &amp; Dispatch Feeds
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight text-white">
                    Receive Instant Intermodal Terminal Shift Alerts &amp; Surge Rates
                  </h2>
                  <p className="font-body-md text-body-md text-surface-container-highest max-w-xl">
                    Get instant mobile and email alerts when deep-sea port terminals trigger surge demurrage bonuses, night-gate differentials, and weekend chassis transfer runs across your certified corridors.
                  </p>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-space-sm">
                  <form
                    onSubmit={handleAlertSubmit}
                    className="flex flex-col sm:flex-row gap-space-xs bg-surface-container-lowest/10 p-1.5 rounded-xl backdrop-blur-md"
                    id="alertsForm"
                  >
                    <input
                      className="w-full h-12 px-space-md rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your terminal operator email..."
                      required
                      type="email"
                      value={alertEmail}
                      onChange={(e) => setAlertEmail(e.target.value)}
                    />
                    <button
                      className="shrink-0 h-12 px-space-lg rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                      type="submit"
                    >
                      {alertSubmitted ? (
                        <>
                          <span className="material-symbols-outlined text-[18px]">done</span>
                          <span>Registered!</span>
                        </>
                      ) : (
                        <>
                          <span>Activate Alerts</span>
                          <span className="material-symbols-outlined text-[18px]">notifications</span>
                        </>
                      )}
                    </button>
                  </form>
                  <div className="flex items-center gap-space-md text-surface-container-highest font-label-sm text-label-sm px-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check</span> Zero Spam
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check</span> Real-Time API Sync
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check</span> Unsubscribe Anytime
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
