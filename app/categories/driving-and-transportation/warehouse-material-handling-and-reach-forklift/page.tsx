"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WarehouseMaterialHandlingReachForkliftPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [equipmentCategory, setEquipmentCategory] = useState("Equipment Category: All");
  const [warehouseHub, setWarehouseHub] = useState("Warehouse Hub: All Metros (Hamburg, Rotterdam, Frankfurt, Katowice)");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"apply" | "register" | "recruiter">("apply");
  const [mobileHoverExpanded, setMobileHoverExpanded] = useState(false);

  // Form states inside modal
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formLicense, setFormLicense] = useState("Stufe 2 (Schubmast / Reach Truck)");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleFilterSearch = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      `Filters Applied: ${searchQuery ? `"${searchQuery}"` : "All Equipment"} • ${equipmentCategory} • ${warehouseHub}`
    );
  };

  const toggleTagFilter = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag(null);
      setSearchQuery("");
      showToast("Cleared tag filter.");
    } else {
      setActiveTag(tag);
      setSearchQuery(tag);
      showToast(`Filtering feed by: ${tag}`);
    }
  };

  const openActionModal = (mode: "apply" | "register" | "recruiter", e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setModalMode(mode);
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
      setFormName("");
      setFormEmail("");
      setFormPhone("");
      showToast(
        modalMode === "recruiter"
          ? "Request received! A Senior Intralogistics Recruiter will call you within 2 hours."
          : modalMode === "register"
          ? "Profile & Forklift credentials submitted successfully! Welcome to Jobzeta Intralogistics."
          : "Fast-Track Application transmitted to EuroLogistics Hub SE (Hamburg Alpha)!"
      );
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
          {/* Sub-Discipline Breadcrumb Bar */}
          <div className="w-full bg-surface-container-low px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-sm shadow-sm">
            <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <nav className="flex items-center gap-space-xs flex-wrap">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                  <span className="material-symbols-outlined text-base">home</span>
                  <span>Home</span>
                </Link>
                <span className="material-symbols-outlined text-xs text-outline">chevron_right</span>
                <Link className="hover:text-primary transition-colors" href="/categories/driving-and-transportation">
                  Driving &amp; Transportation
                </Link>
                <span className="material-symbols-outlined text-xs text-outline">chevron_right</span>
                <span className="text-on-surface font-semibold tracking-wide">
                  Warehouse Material Handling &amp; Reach Forklift Operations
                </span>
              </nav>
              <div className="hidden lg:flex items-center gap-space-sm text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span> Live Sector Yields
                </span>
                <span>•</span>
                <span>Requisitions Updated 4m Ago</span>
              </div>
            </div>
          </div>

          {/* Hero Header & Technical Matrix */}
          <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 2xl:px-12 pt-space-xl pb-space-lg relative overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto relative z-10">
              {/* Regulatory / Compliance Badges */}
              <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
                <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold tracking-wider uppercase shadow-sm">
                  <span className="material-symbols-outlined text-sm">forklift</span>
                  INTRALOGISTICS &amp; HIGH-BAY WAREHOUSE NETWORK
                </span>
                <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                  <span className="material-symbols-outlined text-sm text-primary">verified</span>
                  FEM 4.004 &amp; EN 15635 RACK SAFETY COMPLIANT
                </span>
              </div>

              {/* Hero Grid with Asymmetric Metric Cluster */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                <div className="lg:col-span-8 flex flex-col">
                  <h1 className="font-headline-xl text-3xl sm:text-headline-xl text-on-surface font-bold tracking-tight mb-space-sm leading-tight">
                    Warehouse Material Handling, Reach Truck &amp; Automated Intralogistics
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                    Connecting certified Stage 2 &amp; 3 reach truck pilots, high-bay VNA turret operators, and multi-tier fulfillment logistics coordinators with Europe's top distribution hubs and automated cross-dock terminals.
                  </p>
                </div>

                {/* Continental Metric Card */}
                <div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-md relative overflow-hidden group">
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Continental Benchmark</span>
                    <span className="p-2 rounded-lg bg-surface-container text-primary">
                      <span className="material-symbols-outlined text-xl">inventory_2</span>
                    </span>
                  </div>
                  <div className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight mb-0.5">
                    €44,800 <span className="font-label-md text-label-md text-on-surface-variant font-normal">/ yr</span>
                  </div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold mb-space-sm flex items-center gap-1">
                    <span>Avg. Continental Intralogistics Yield</span>
                    <span className="material-symbols-outlined text-xs text-primary">trending_up</span>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container-low">
                    <span>Stage 2 Endorsement: +18.4%</span>
                    <span className="text-primary font-semibold">344 Active Hub Openings</span>
                  </div>
                </div>
              </div>

              {/* Search & Faceted Filter Anchor Bar */}
              <div className="mt-space-lg bg-surface-container-lowest p-space-md rounded-xl shadow-md">
                <form className="grid grid-cols-1 md:grid-cols-12 gap-space-sm" onSubmit={handleFilterSearch}>
                  {/* Query input */}
                  <div className="md:col-span-4 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-xl">search</span>
                    <input
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Equipment type, Jungheinrich reach truck, Linde VNA, Hamburg Hub..."
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Equipment Category */}
                  <div className="md:col-span-3 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-lg">precision_manufacturing</span>
                    <select
                      className="w-full pl-9 pr-8 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer transition-all"
                      value={equipmentCategory}
                      onChange={(e) => setEquipmentCategory(e.target.value)}
                    >
                      <option>Equipment Category: All</option>
                      <option>Reach Trucks (Stage 2 / Mast &gt; 8m)</option>
                      <option>VNA Inductive Turret Systems</option>
                      <option>Order Pickers (Stage 1 / High-Level)</option>
                      <option>Automated Guided Vehicles (AGV/AMR Tech)</option>
                      <option>Cold-Store Retractable (-30°C Cab)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 text-outline text-sm pointer-events-none">expand_more</span>
                  </div>

                  {/* Warehouse Metro Hubs */}
                  <div className="md:col-span-3 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-lg">warehouse</span>
                    <select
                      className="w-full pl-9 pr-8 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer transition-all"
                      value={warehouseHub}
                      onChange={(e) => setWarehouseHub(e.target.value)}
                    >
                      <option>Warehouse Hub: All Metros (Hamburg, Rotterdam, Frankfurt, Katowice)</option>
                      <option>Hamburg-Billbrook Logistics Ring</option>
                      <option>Port of Rotterdam Maasvlakte Intermodal</option>
                      <option>Frankfurt CargoCity South Hub</option>
                      <option>Silesia Logistics Corridor (Katowice/Gliwice)</option>
                      <option>Venlo European Logistics Crossroads</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 text-outline text-sm pointer-events-none">expand_more</span>
                  </div>

                  {/* Filter Submit Action */}
                  <div className="md:col-span-2">
                    <button
                      className="w-full py-2.5 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 font-semibold"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-lg">tune</span>
                      <span>Filter Feed</span>
                    </button>
                  </div>
                </form>

                {/* Dynamic Filter Tags */}
                <div className="flex items-center gap-space-xs mt-space-sm pt-space-xs overflow-x-auto text-on-surface-variant font-label-sm text-label-sm">
                  <span className="font-bold text-on-surface flex items-center gap-1 uppercase tracking-wider text-xs">
                    <span className="material-symbols-outlined text-sm text-primary">sell</span> Trending:
                  </span>
                  {[
                    "DGUV Vorschrift 68",
                    "Narrow Aisle VNA Turret",
                    "WMS RFID Scanning",
                    "Cold-Storage Reach Truck (-28°C)",
                    "License Endorsement: Stufe 2 / DGUV 308-001",
                  ].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTagFilter(tag)}
                      className={`px-space-xs py-1 rounded transition-colors whitespace-nowrap ${
                        activeTag === tag
                          ? "bg-secondary-fixed text-on-secondary-fixed font-bold shadow-sm"
                          : "bg-surface-container hover:bg-secondary-fixed hover:text-on-secondary-fixed"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Core Operational Disciplines (3 Pillar Cards) */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-surface-container-low">
            <div className="w-full max-w-[1920px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Specialized Machinery Categories</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mt-1">Operational Disciplines</h2>
                </div>
                <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-base">verified</span>
                  <span>Standardized DIN / FEM Classification System</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Pillar Card 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-2xl">forklift</span>
                      </span>
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">
                        182 Open Positions
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      High-Bay Reach Truck &amp; Cold-Storage Operator
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                      Precision high-lift maneuverability within deep-freeze and ambient high-bay facilities. Mast heights up to 12.5m using dual-pedal Linde, Jungheinrich, and Crown fleet technologies.
                    </p>
                    <div className="space-y-2 mb-space-lg">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Primary Chassis:</span>
                        <span className="font-semibold text-on-surface">Jungheinrich ETV 216i / Linde R14</span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Required Clearance:</span>
                        <span className="font-semibold text-primary">Stufe 2 (Schubmast)</span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Working Elevation:</span>
                        <span className="font-semibold text-on-surface">Up to 12.5 Meters</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-lg rounded-b-xl flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Continental Band</span>
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">€38,000 – €49,000</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openActionModal("apply")}
                      className="p-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary shadow-sm transition-colors cursor-pointer"
                      title="View Dispatches"
                    >
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Pillar Card 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-2xl">line_weight</span>
                      </span>
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">
                        94 Open Positions
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      Very Narrow Aisle (VNA) Turret Truck Specialist
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                      Wire and inductive rail-guided aisle maneuvering with rotating turret fork attachments. Working safely at extreme elevations up to 16m with integrated cab-lift systems.
                    </p>
                    <div className="space-y-2 mb-space-lg">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Primary Chassis:</span>
                        <span className="font-semibold text-on-surface">Linde K Series / Still EK-X</span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Required Clearance:</span>
                        <span className="font-semibold text-primary">Stufe 3 (Schmalgang Stapler)</span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Guidance Mode:</span>
                        <span className="font-semibold text-on-surface">Wire Guided / Optical Floor Track</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-lg rounded-b-xl flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Continental Band</span>
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">€42,000 – €55,000</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openActionModal("apply")}
                      className="p-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary shadow-sm transition-colors cursor-pointer"
                      title="View Dispatches"
                    >
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Pillar Card 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-2xl">conveyor_belt</span>
                      </span>
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">
                        68 Open Positions
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      Automated Sortation &amp; High-Cube Dispatch Lead
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                      Supervising seamless cross-dock pallet induction, automated conveyor in-feed, RFID pallet labeling, and SAP EWM terminal synchronization across high-velocity facilities.
                    </p>
                    <div className="space-y-2 mb-space-lg">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Infrastructure:</span>
                        <span className="font-semibold text-on-surface">Dematic / Swisslog AutoStore</span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Software Suite:</span>
                        <span className="font-semibold text-primary">SAP EWM / Manhattan WMS</span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Role Class:</span>
                        <span className="font-semibold text-on-surface">Supervisory Dispatch Coordinator</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-lg rounded-b-xl flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Continental Band</span>
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">€45,000 – €58,000</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openActionModal("apply")}
                      className="p-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary shadow-sm transition-colors cursor-pointer"
                      title="View Dispatches"
                    >
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Featured Interactive Mission Card (With Exact Hover Expand Interaction) */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-surface">
            <div className="w-full max-w-[1920px] mx-auto">
              <div className="flex items-center justify-between mb-space-md">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Priority Placement Engine</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mt-1">Featured Intralogistics Mission</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileHoverExpanded(!mobileHoverExpanded)}
                  className="font-label-md text-label-md px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface flex items-center gap-1.5 hover:bg-surface-container transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Interactive Dispatch File</span>
                  <span className="material-symbols-outlined text-sm lg:hidden">
                    {mobileHoverExpanded ? "expand_less" : "expand_more"}
                  </span>
                </button>
              </div>

              {/* Outer interactive mission card container with group-hover animation */}
              <div
                className="group relative bg-surface-container-lowest rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setMobileHoverExpanded(!mobileHoverExpanded)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Photographic Column */}
                  <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[340px] lg:min-h-[440px] overflow-hidden">
                    <img
                      alt="Professional European High-Bay Reach Truck and Warehouse Logistics Specialist"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVSibbyszmeZtDxW4N-Ih0NLP7W6Ogz9zmgkGJ-kndx0Uwjk7Kn0P-A5lqv93cHxYZO7u49ibdQzdTQU7jU4D4daG-ixVfn5MuVEWrGZ_rR25ffPMikcJtofeCbfFSV8g7qQVP3_m5H-RFDhS8i7hQIjKO6QlqYAHlDLVB5mEzBJubgdY5OojOXsnsjG6X2lC2RJ9EoUYWsCdoe6EZ-kPZ4wz9Ajb8bzWicz6tHiVmLawGA2rewsFHmg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-space-md left-space-md right-space-md flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-inverse-surface/85 backdrop-blur-md text-on-primary font-label-sm text-label-sm font-bold tracking-wider uppercase">
                        <span className="material-symbols-outlined text-sm text-primary-fixed">verified_user</span>
                        FEATURED INTRALOGISTICS MISSION
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold">
                        Tier-1 Contractor
                      </span>
                    </div>

                    {/* Bottom Hub Details */}
                    <div className="absolute bottom-space-md left-space-md right-space-md text-on-primary">
                      <div className="flex items-center gap-1 font-label-sm text-label-sm text-primary-fixed mb-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span>Hamburg-Billbrook High-Cube Logistics Hub</span>
                      </div>
                      <p className="font-headline-sm text-headline-sm font-bold leading-tight">
                        Amazon Fulfillment / Kuehne+Nagel Logistics Partner
                      </p>
                    </div>
                  </div>

                  {/* Right Content Column */}
                  <div className="lg:col-span-7 p-4 sm:p-space-lg flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-sm">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">
                          Req #WH-7410-DE • Active Dispatch
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-bold bg-primary/10 px-2.5 py-1 rounded-full">
                          <span className="material-symbols-outlined text-sm">bolt</span> Immediate Start Available
                        </span>
                      </div>

                      <h3 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface font-bold tracking-tight mb-1 group-hover:text-primary transition-colors">
                        Senior High-Bay Reach Truck &amp; Automated Fulfillment Operator
                      </h3>

                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-md flex-wrap">
                        <span className="material-symbols-outlined text-base text-primary">domain</span>
                        <span className="font-semibold text-on-surface">EuroLogistics Hub SE</span>
                        <span>•</span>
                        <span>Hamburg Metropolitan Logistics Ring</span>
                      </div>

                      {/* Attribute Badges */}
                      <div className="flex flex-wrap items-center gap-space-xs mb-space-md">
                        <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs text-primary">badge</span> DGUV 308-001 Stufe 2
                        </span>
                        <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">
                          Jungheinrich ETV 216i (12.5m Mast)
                        </span>
                        <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">
                          SAP EWM Barcode Scanner
                        </span>
                        <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">
                          Cold-Chain Certified
                        </span>
                      </div>

                      {/* Metric Callouts */}
                      <div className="bg-surface-container-low p-space-md rounded-lg mb-space-md">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-left">
                          <div>
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Approved Tariff</span>
                            <span className="font-headline-sm text-headline-sm font-bold text-primary">€41,000 – €54,500</span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant block">/ year base</span>
                          </div>
                          <div>
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Shift Premiums</span>
                            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">+ €16.00 / day</span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant block">Late &amp; night differential</span>
                          </div>
                          <div>
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Precision Incentive</span>
                            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">+ €250 / mo</span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant block">Zero-breakage bonus</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Accordion Expansion (Hover on desktop, Click toggle on mobile) */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        mobileHoverExpanded
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100"
                      }`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm bg-surface-container-low p-space-sm rounded-xl mb-space-sm">
                        <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-2 shadow-sm">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-[18px]">route</span>
                          </div>
                          <div>
                            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wide block">
                              Aisle Geometry &amp; Staging
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface mt-0.5">
                              Hamburg-Billbrook Hub Alpha (140 Euro-Pallets / Shift) • 2,780mm VNA narrow-aisle guidance &amp; RFID cross-dock slotting.
                            </p>
                          </div>
                        </div>

                        <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-2 shadow-sm">
                          <div className="w-8 h-8 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-[18px]">verified_user</span>
                          </div>
                          <div>
                            <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold tracking-wide block">
                              Safety &amp; Telematics Mandate
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface mt-0.5">
                              DGUV Vorschrift 68 &amp; FEM 4.004 • Mast dampening speed limiter (≤8 km/h), optical obstacle detection &amp; zero-drop safety tolerance.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="flex flex-col sm:flex-row items-center justify-end gap-space-sm pt-space-xs">
                        <Link
                          href="/jobs/senior-high-bay-reach-truck-operator"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full sm:w-auto px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5 shadow-sm font-semibold"
                        >
                          <span className="material-symbols-outlined text-[18px]">bolt</span>
                          <span>Fast-Track Dispatch Apply</span>
                        </Link>
                        <Link
                          href="/jobs/senior-high-bay-reach-truck-operator"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full sm:w-auto px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm font-semibold"
                        >
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                          <span>View Full Instructions &amp; Technical Specs</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Intralogistics Standards & Compliance Matrix (4 Cards) */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl bg-surface-container-low">
            <div className="w-full max-w-[1920px] mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Standardized Safety Frameworks</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mt-1">Verification &amp; Compliance Matrix</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Every candidate placed through the Jobzeta Intralogistics Network must verify operational competency under recognized European industrial workplace directives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/* Standard 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm">
                      <span className="material-symbols-outlined text-xl">license</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                      DGUV 308-001 / BGG 925
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Mandatory German &amp; EU industrial truck operator certification covering Stage 1 (Counterbalance), Stage 2 (Reach/Telescopic), and Stage 3 (VNA Turret).
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1 border-t border-surface-container-low">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Statutory Verification Required
                  </div>
                </div>

                {/* Standard 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm">
                      <span className="material-symbols-outlined text-xl">qr_code_scanner</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                      Digital WMS &amp; RFID Scan-to-Pallet
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Competence in vehicle-mounted terminals (VMTs), handheld Zebra barcode units, and direct SAP EWM / Blue Yonder warehouse management system inventory recording.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1 border-t border-surface-container-low">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Real-Time Telematics Sync
                  </div>
                </div>

                {/* Standard 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm">
                      <span className="material-symbols-outlined text-xl">shelves</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                      EN 15635 Pallet Racking Safety
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Rigorous inspection standards for static steel storage racking, prevention of beam deformation, upright collision reporting, and beam-deflection protocols.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1 border-t border-surface-container-low">
                    <span className="material-symbols-outlined text-sm">check_circle</span> 0-Damage Tolerated Standard
                  </div>
                </div>

                {/* Standard 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm">
                      <span className="material-symbols-outlined text-xl">ac_unit</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                      Deep-Freeze Cold Storage Protocol
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Specialized certification for heated reach truck operating cabs in sub-zero cold-chain facilities down to -28°C with strict battery thermal cycling management.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1 border-t border-surface-container-low">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Thermal Cab Regulation
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Accredited Intralogistics Operators & Employers */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-lg bg-surface">
            <div className="w-full max-w-[1920px] mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Approved Employers</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Accredited Logistics Ecosystem</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Over 480 automated distribution hubs recruit directly via Jobzeta Reach Truck clearing houses.</p>
                </div>
                <div className="flex flex-wrap items-center gap-space-lg text-on-surface-variant font-label-lg text-label-lg font-bold">
                  <span className="hover:text-primary transition-colors flex items-center gap-1"><span className="material-symbols-outlined text-lg">local_shipping</span> Kuehne+Nagel</span>
                  <span className="hover:text-primary transition-colors flex items-center gap-1"><span className="material-symbols-outlined text-lg">hub</span> DHL Supply Chain</span>
                  <span className="hover:text-primary transition-colors flex items-center gap-1"><span className="material-symbols-outlined text-lg">train</span> DB Schenker</span>
                  <span className="hover:text-primary transition-colors flex items-center gap-1"><span className="material-symbols-outlined text-lg">flight_land</span> DSV Logistics</span>
                  <span className="hover:text-primary transition-colors flex items-center gap-1"><span className="material-symbols-outlined text-lg">inventory</span> Dachser</span>
                  <span className="hover:text-primary transition-colors flex items-center gap-1"><span className="material-symbols-outlined text-lg">shopping_cart</span> Amazon Logistics</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Intake CTA Banner for Certified Forklift Operators */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl pt-space-sm bg-surface">
            <div className="w-full max-w-[1920px] mx-auto">
              <div className="bg-inverse-surface text-inverse-on-surface p-6 sm:p-space-xl rounded-xl relative overflow-hidden shadow-lg">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
                  <div className="lg:col-span-8 flex flex-col">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold tracking-wider uppercase mb-space-sm w-fit">
                      <span className="material-symbols-outlined text-sm">verified</span> Verified Intake Channel
                    </span>
                    <h2 className="font-headline-xl text-2xl sm:text-headline-xl font-bold tracking-tight mb-space-xs text-on-primary">
                      Hold a Forklift Certificate (Stufe 2) with Clean Record?
                    </h2>
                    <p className="font-body-md text-body-md text-outline-variant max-w-2xl leading-relaxed">
                      Upload your certified operator license (Staplerschein / DGUV 308-001) and equipment hours. Get matched within 24 hours to high-cube distribution hubs with guaranteed minimum tariff guarantees and shift allowances across Germany, Benelux, and Poland.
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-end">
                    <button
                      type="button"
                      onClick={() => openActionModal("register")}
                      className="w-full py-3.5 px-space-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-md transition-all flex items-center justify-center gap-2 font-bold text-center cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">upload_file</span>
                      <span>Register Forklift Profile &amp; Apply</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => openActionModal("recruiter")}
                      className="w-full py-3.5 px-space-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold text-center cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">call</span>
                      <span>Speak to an Intralogistics Recruiter</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Global Jobzeta Footer */}
      <Footer />

      {/* Interactive Modal for Applications & Registration */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-container-lowest rounded-2xl shadow-2xl max-w-lg w-full p-space-lg relative border border-surface-container-high">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {formSubmitted ? (
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <span className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 animate-bounce">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                  Submission Transmitted!
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
                  Your credentials have been logged in the Jobzeta Intralogistics Terminal. Dispatchers will review within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-xl">
                      {modalMode === "recruiter" ? "call" : modalMode === "register" ? "assignment_ind" : "bolt"}
                    </span>
                  </span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      {modalMode === "recruiter"
                        ? "Contact Intralogistics Recruiter"
                        : modalMode === "register"
                        ? "Register Certified Forklift Profile"
                        : "Fast-Track Requisition: Hamburg Hub"}
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      DGUV 308-001 / Stufe 2 &amp; 3 Certified Network
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">Full Legal Name</label>
                  <input
                    required
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Stefan Lindemann"
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container-high"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="s.lindemann@logistics.de"
                      className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container-high"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">Phone / WhatsApp</label>
                    <input
                      required
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="+49 170 9876543"
                      className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container-high"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">Primary Clearance / Certificate</label>
                  <select
                    value={formLicense}
                    onChange={(e) => setFormLicense(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container-high"
                  >
                    <option>Stufe 2 (Schubmast / Reach Truck)</option>
                    <option>Stufe 3 (VNA / Narrow Aisle Turret)</option>
                    <option>Stufe 1 (Counterbalance / Frontstapler)</option>
                    <option>Cold-Store Cab Specialist (-28°C)</option>
                    <option>High-Cube Automated Dispatch Lead</option>
                  </select>
                </div>

                <div className="p-3 rounded-lg bg-surface-container-low border border-dashed border-outline-variant flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-primary text-xl">upload_file</span>
                  <span className="font-label-sm text-label-sm font-semibold text-on-surface mt-0.5">
                    Upload Staplerschein / License Certificate (Optional)
                  </span>
                  <span className="text-[11px] font-label-sm text-on-surface-variant">PDF, JPG up to 10MB</span>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">check</span>
                  <span>Confirm &amp; Transmit Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
