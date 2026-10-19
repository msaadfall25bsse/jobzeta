"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PassengerTransportCommercialCoachPage() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [transitType, setTransitType] = useState("");
  const [hubCountry, setHubCountry] = useState("");
  const [licensure, setLicensure] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"apply" | "register" | "specs">("apply");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !isBookmarked;
    setIsBookmarked(nextState);
    showToast(
      nextState
        ? "Requisition #TX-8924-EU saved to your captain profile."
        : "Requisition removed from saved items."
    );
  };

  const handleFilterSearch = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      `Filters applied: ${searchQuery ? `"${searchQuery}"` : "All routes"} • ${
        transitType || "All Transit"
      } • ${hubCountry || "All Hubs"}`
    );
  };

  const toggleTagFilter = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag(null);
      setSearchQuery("");
      showToast("Cleared attribute filter.");
    } else {
      setActiveTag(tag);
      setSearchQuery(tag);
      showToast(`Filtering by attribute: ${tag}`);
    }
  };

  const openActionModal = (mode: "apply" | "register" | "specs", e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
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

      {/* ACTION DIALOG MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-on-surface/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl border border-surface-container flex flex-col gap-space-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            {modalMode === "apply" && (
              <>
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">bolt</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Fast-Track Dispatch Application
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Req #TX-8924-EU • EuroTrans Express Lines GmbH
                    </p>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Submit your credentials for instant roster dispatch matching. A verified fleet
                  coordinator from EuroTrans Express will review your driver card details within 2
                  hours.
                </p>
                <div className="space-y-space-xs">
                  <label className="font-label-sm text-label-sm text-on-surface block">
                    Full Name &amp; Contact Number
                  </label>
                  <input
                    type="text"
                    placeholder="Captain Name, +49 / +44 / +33..."
                    className="w-full bg-surface-container-low px-space-md py-2.5 rounded-lg font-body-sm text-body-sm border border-outline-variant/40 focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="space-y-space-xs">
                  <label className="font-label-sm text-label-sm text-on-surface block">
                    Driver Card / Tachograph ID
                  </label>
                  <input
                    type="text"
                    placeholder="EU Smart Tacho Card No. (Gen 2)"
                    className="w-full bg-surface-container-low px-space-md py-2.5 rounded-lg font-body-sm text-body-sm border border-outline-variant/40 focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="flex items-center justify-end gap-space-xs pt-space-xs">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-space-md py-2 rounded-lg bg-surface-container font-label-lg text-label-lg text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setModalOpen(false);
                      showToast("Fast-Track Application dispatched to EuroTrans Fleet Operations!");
                    }}
                    className="px-space-lg py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition-colors cursor-pointer"
                  >
                    Confirm Dispatch Apply
                  </button>
                </div>
              </>
            )}

            {modalMode === "register" && (
              <>
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">id_card</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Register Digital Driver Card
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Category D / Code 95 Cross-Border Registry
                    </p>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Upload your tachograph DDD export or driver licence scan to unlock private long-haul
                  touring assignments, pre-approved hotel lodging, and Schengen dispatch priority.
                </p>
                <div className="border-2 border-dashed border-outline-variant rounded-xl p-space-lg flex flex-col items-center justify-center text-center gap-space-xs bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-[32px] text-primary">
                    cloud_upload
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Click to browse or drop Driver Card (.DDD / PDF / JPG)
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Encrypted under EU GDPR &amp; ISO 27001 carrier regulations
                  </span>
                </div>
                <div className="flex items-center justify-end gap-space-xs pt-space-xs">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-space-md py-2 rounded-lg bg-surface-container font-label-lg text-label-lg text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setModalOpen(false);
                      showToast("Driver Card verification submitted successfully!");
                    }}
                    className="px-space-lg py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition-colors cursor-pointer"
                  >
                    Submit for Verification
                  </button>
                </div>
              </>
            )}

            {modalMode === "specs" && (
              <>
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Technical Specifications &amp; Fleet Roster
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Mercedes Tourismo 16 RHD &amp; Setra TopClass S 516 HD
                    </p>
                  </div>
                </div>
                <div className="space-y-space-xs text-on-surface font-body-sm text-body-sm max-h-[60vh] overflow-y-auto pr-1">
                  <div className="p-space-sm rounded-lg bg-surface-container-low">
                    <strong className="block text-primary font-semibold">Leg Schedule &amp; Tachograph Windows:</strong>
                    Berlin ZOB ⇄ Prague Florenc ⇄ Vienna Erdberg (680 km scheduled passenger leg, 2 drivers crew rotation, strict 4.5h EC 561/2006 compliance).
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low">
                    <strong className="block text-primary font-semibold">Vehicle Safety Suite:</strong>
                    Active Brake Assist 5 (ABA 5) with pedestrian recognition, Sideguard Assist, Predictive Powertrain Control (PPC), automated fire suppression system.
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low">
                    <strong className="block text-primary font-semibold">Allowances &amp; Lodging:</strong>
                    €45.00/day tax-free passenger meal per diem, single-occupancy 4-star crew hotel guaranteed on all overnight turnarounds.
                  </div>
                </div>
                <div className="flex items-center justify-end gap-space-xs pt-space-xs">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-space-md py-2 rounded-lg bg-surface-container font-label-lg text-label-lg text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    Close Specs
                  </button>
                  <button
                    onClick={() => {
                      setModalMode("apply");
                    }}
                    className="px-space-lg py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition-colors cursor-pointer"
                  >
                    Apply for this Requisition
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* BREADCRUMB & METADATA BAR */}
          <div className="w-full bg-surface-container-low px-margin py-space-sm">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
              <nav className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant flex-wrap">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  <span>Home</span>
                </Link>
                <span className="text-outline-variant">/</span>
                <Link className="hover:text-primary transition-colors" href="/categories/driving-and-transportation">
                  Driving &amp; Transportation
                </Link>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface font-semibold">Passenger Transport &amp; Commercial Coach</span>
              </nav>
              <div className="flex items-center gap-space-md">
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                  Live Corridors: 348 Verified Postings
                </span>
                <span className="hidden md:inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                  Updated 18 min ago
                </span>
              </div>
            </div>
          </div>

          {/* HERO SECTION */}
          <section className="w-full bg-surface-container-lowest px-margin py-space-xl relative overflow-hidden">
            <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-24 bottom-0 w-80 h-80 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
                  <span className="material-symbols-outlined text-[16px]">airport_shuttle</span>
                  European Cross-Border &amp; Intercity Transit Network
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  EC 561/2006 Standardized
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="max-w-3xl flex flex-col gap-space-sm">
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                    Passenger Transport, Commercial Coach &amp; High-Capacity Transit Operations
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    Connecting qualified D / D+E commercial coach captains and transit specialists with premier European intercity lines, airport express networks, VIP charter operators, and municipal transit authorities.
                  </p>
                </div>
                <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-headline-md text-headline-md font-bold">
                    <span className="material-symbols-outlined text-[28px]">directions_bus</span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-on-surface">€54,800</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">Avg. Continental Captain Yield</div>
                  </div>
                </div>
              </div>

              {/* SEARCH & FILTER CONSOLE */}
              <form onSubmit={handleFilterSearch} className="w-full bg-surface-container rounded-2xl p-space-md shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-sm">
                  {/* Keyword Search */}
                  <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl px-space-md py-space-xs flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-outline">search</span>
                    <input
                      className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                      placeholder="Route, operator, Mercedes Tourismo, Setra..."
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  {/* Transit Type */}
                  <div className="lg:col-span-3 bg-surface-container-lowest rounded-xl px-space-md py-space-xs flex items-center gap-2 shadow-sm relative">
                    <span className="material-symbols-outlined text-outline">commute</span>
                    <select
                      value={transitType}
                      onChange={(e) => setTransitType(e.target.value)}
                      className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none appearance-none cursor-pointer pr-6"
                    >
                      <option value="">Transit Type (All)</option>
                      <option value="Intercity Express">Intercity Express (Trans-Schengen)</option>
                      <option value="Airport Dedicated Shuttle">Airport Dedicated Shuttle</option>
                      <option value="International VIP Tour">International VIP Tour &amp; Charter</option>
                      <option value="Municipal BRT">Municipal BRT &amp; Articulated Regional</option>
                    </select>
                    <span className="material-symbols-outlined text-outline text-[18px] pointer-events-none absolute right-3">expand_more</span>
                  </div>
                  {/* Country / Corridor */}
                  <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl px-space-md py-space-xs flex items-center gap-2 shadow-sm relative">
                    <span className="material-symbols-outlined text-outline">public</span>
                    <select
                      value={hubCountry}
                      onChange={(e) => setHubCountry(e.target.value)}
                      className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none appearance-none cursor-pointer pr-6"
                    >
                      <option value="">Hub Country</option>
                      <option value="Germany">Germany (DACH)</option>
                      <option value="France">France (Schengen West)</option>
                      <option value="Benelux">Benelux Regional</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Austria">Austria &amp; CEE</option>
                    </select>
                    <span className="material-symbols-outlined text-outline text-[18px] pointer-events-none absolute right-3">expand_more</span>
                  </div>
                  {/* License Class */}
                  <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl px-space-md py-space-xs flex items-center gap-2 shadow-sm relative">
                    <span className="material-symbols-outlined text-outline">badge</span>
                    <select
                      value={licensure}
                      onChange={(e) => setLicensure(e.target.value)}
                      className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none appearance-none cursor-pointer pr-6"
                    >
                      <option value="">Licensure</option>
                      <option value="Category D">EU Category D</option>
                      <option value="Category D+E">EU Category D+E</option>
                      <option value="Code 95">Driver CPC / Code 95</option>
                      <option value="UK PCV">UK PCV Driver Card</option>
                    </select>
                    <span className="material-symbols-outlined text-outline text-[18px] pointer-events-none absolute right-3">expand_more</span>
                  </div>
                  {/* Submit CTA */}
                  <div className="lg:col-span-1">
                    <button
                      type="submit"
                      className="w-full h-full min-h-[44px] bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
                      title="Filter Postings"
                    >
                      <span className="material-symbols-outlined text-[20px]">filter_alt</span>
                    </button>
                  </div>
                </div>
                {/* Quick filter chips */}
                <div className="flex flex-wrap items-center gap-space-xs mt-space-sm pt-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant mr-1">Trending Attributes:</span>
                  <button
                    type="button"
                    onClick={() => toggleTagFilter("Double-Deck Neoplan Skyliner")}
                    className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm transition-colors shadow-sm cursor-pointer ${
                      activeTag === "Double-Deck Neoplan Skyliner"
                        ? "bg-primary text-on-primary font-bold"
                        : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Double-Deck Neoplan Skyliner
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleTagFilter("Airside Tarmac Badge")}
                    className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm transition-colors shadow-sm cursor-pointer ${
                      activeTag === "Airside Tarmac Badge"
                        ? "bg-primary text-on-primary font-bold"
                        : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Airside Tarmac Badge
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleTagFilter("Dual Captain Crew Rotations")}
                    className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm transition-colors shadow-sm cursor-pointer ${
                      activeTag === "Dual Captain Crew Rotations"
                        ? "bg-primary text-on-primary font-bold"
                        : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Dual Captain Crew Rotations
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleTagFilter("Night Express Sleepers")}
                    className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm transition-colors shadow-sm cursor-pointer ${
                      activeTag === "Night Express Sleepers"
                        ? "bg-primary text-on-primary font-bold"
                        : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Night Express Sleepers
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* TECHNICAL ROLES BREAKDOWN */}
          <section className="w-full bg-surface px-margin py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Fleet Operational Divisions</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Core Specialized Transportation Disciplines</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  Structured career paths segmented by vehicle configuration, driving regulation envelope, passenger manifest responsibility, and route topology.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[24px]">rv_hookup</span>
                      </div>
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-semibold">142 Open Positions</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        International Long-Distance Touring &amp; Intercity Express
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                        EU Code 95 certified cross-border Schengen passenger corridors aboard multi-axle long-distance cruisers. Dual-captain overnight transit protocols.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">EU Code 95</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Mercedes Tourismo</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Setra 500 HD</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Digital Tacho Gen 2</span>
                    </div>
                  </div>
                  <div className="mt-space-lg pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-2xl flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Typical Compensation</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">€44,000 – €62,000</span>
                    </div>
                    <Link className="inline-flex items-center gap-1 font-label-lg text-label-lg text-secondary hover:text-primary transition-colors font-semibold" href="/find-jobs">
                      Browse
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[24px]">flight_takeoff</span>
                      </div>
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">98 Open Positions</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        Airport Dedicated Inter-Terminal &amp; Express Shuttle
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                        Tarmac airside clearance, low-floor high-capacity articulated buses, and non-stop metropolitan rail-to-hub express routes on continuous rotation.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Tarmac Airside Badge</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Articulated 18m Fleet</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">IATA Compliance</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Fixed Shifts</span>
                    </div>
                  </div>
                  <div className="mt-space-lg pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-2xl flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Typical Compensation</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">€40,000 – €54,000</span>
                    </div>
                    <Link className="inline-flex items-center gap-1 font-label-lg text-label-lg text-secondary hover:text-primary transition-colors font-semibold" href="/find-jobs">
                      Browse
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-[24px]">military_tech</span>
                      </div>
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-semibold">108 Open Positions</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        VIP Corporate Charter &amp; Diplomatic Transit
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                        Executive sleeper coach deployments, multilingual crew standards (English/German/French), diplomatic convoy staging, and high-discretion hospitality.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Diplomatic Vetting</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Bilingual Protocol</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Executive Sleeper</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Premium Gratuities</span>
                    </div>
                  </div>
                  <div className="mt-space-lg pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-2xl flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Typical Compensation</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">€48,000 – €68,000</span>
                    </div>
                    <Link className="inline-flex items-center gap-1 font-label-lg text-label-lg text-secondary hover:text-primary transition-colors font-semibold" href="/find-jobs">
                      Browse
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INTERACTIVE FEATURED JOB REQUISITION (WITH HOVER REVEAL) */}
          <section className="w-full bg-surface-container-low px-margin py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[24px]">stars</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Spotlight Transit Assignment</h2>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">Direct Operator Requisition · Priority Dispatch</span>
              </div>

              {/* THE INTERACTIVE CARD */}
              <div
                className="group relative bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden cursor-pointer"
                id="interactive-coach-card"
                onClick={() => setMobileExpanded(!mobileExpanded)}
              >
                <div className="p-space-lg flex flex-col lg:flex-row gap-space-lg">
                  <div className="w-full lg:w-80 flex-shrink-0 flex flex-col justify-between relative rounded-xl overflow-hidden bg-surface-container min-h-[260px]">
                    <img
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-alt="A professional European coach captain in a crisp navy uniform standing proudly in front of a modern white high-capacity Setra touring coach at the Berlin Central Bus Terminal. The atmosphere is professional and energetic with bright overcast daylight illuminating the pristine vehicle and terminal tarmac."
                      alt="A professional European coach captain in a crisp navy uniform standing proudly in front of a modern white high-capacity Setra touring coach at the Berlin Central Bus Terminal. The atmosphere is professional and energetic with bright overcast daylight illuminating the pristine vehicle and terminal tarmac."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLS3aRr7-3fDwQ_o0zYPKHpW5_O_WEJyrGXOuimZKBK-eNfR5lXT5VvwhDYfB_wy6o8eHI3xPDtH1yP0-5aMB4jlz3haRL2B5fZoaiF3BYuH3QUNN83f6iB-eIK68eJABJOCTWoMtR7UGAqdVm-1QqZ6mNe8WpCyuIgBiSdfgZBllATHKgE_S2Cdo9pMCGfqmvReHJEHknUYLZoGWw05R34M_lNQaCAS4Xaiv4hVPiUPX422X_mdGXRA"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent"></div>
                    <div className="relative z-10 p-3 flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm">
                        FEATURED TRANSIT REQUISITION
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/90 text-on-surface font-label-sm text-label-sm font-semibold backdrop-blur-sm">
                        FLIXBUS / DEUTSCHE BAHN PARTNER
                      </span>
                    </div>
                    <div className="relative z-10 p-3 text-on-primary">
                      <span className="font-label-sm text-label-sm opacity-90 block">Departure Base</span>
                      <span className="font-headline-sm text-headline-sm font-bold">Berlin HBF / ZOB Central</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between gap-space-md">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                            Req #TX-8924-EU
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          <span className="font-label-sm text-label-sm text-primary font-bold">Active Rotation</span>
                        </div>
                        <button
                          onClick={handleBookmarkToggle}
                          className="text-outline hover:text-primary transition-colors p-1 cursor-pointer"
                          title={isBookmarked ? "Remove from bookmarks" : "Save Job"}
                        >
                          <span className={`material-symbols-outlined text-[22px] ${isBookmarked ? "text-primary" : ""}`}>
                            {isBookmarked ? "bookmark" : "bookmark_border"}
                          </span>
                        </button>
                      </div>
                      <h3 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs group-hover:text-primary transition-colors">
                        Senior International Touring Coach Captain (EU Trans-Corridor)
                      </h3>
                      <p className="font-body-md text-body-md text-secondary font-medium mt-0.5 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]">corporate_fare</span>
                        EuroTrans Express Lines GmbH • Frankfurt / Berlin / Prague Hub
                      </p>
                      <div className="flex flex-wrap gap-space-xs mt-space-md">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">id_card</span>
                          EU Category D + Code 95
                        </span>
                        <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
                          Mercedes Tourismo 16 RHD / Setra 516 HD
                        </span>
                        <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
                          Digital Tachograph Gen 2
                        </span>
                        <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-medium">
                          Cross-Border Schengen Rotation
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">
                          Standard Base &amp; Allowances
                        </span>
                        <div className="font-headline-md text-headline-md text-on-surface font-bold">
                          €46,000 – €64,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ year</span>
                        </div>
                      </div>
                      <div className="sm:text-right font-body-sm text-body-sm text-on-surface-variant">
                        <span className="font-semibold text-primary block">+ €45.00/day tax-free passenger meal per diem</span>
                        <span>+ €350/mo punctuality &amp; fuel efficiency bonus</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out bg-surface-container overflow-hidden ${
                    mobileExpanded
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100"
                  }`}
                >
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-[20px]">directions_bus_filled</span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wide">
                            Passenger Transit &amp; Route Mandate
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface mt-1">
                            Mercedes Tourismo / Setra TopClass S 516 HD, EC 561/2006 tachograph compliance, active 53+ passenger manifest sync, dual-captain rotation protocol.
                          </p>
                        </div>
                      </div>
                      <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-[20px]">alt_route</span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wide">
                            Corridor &amp; Schedule Rotation
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface mt-1">
                            Berlin ZOB ⇄ Prague Florenc ⇄ Vienna Erdberg (680 km scheduled passenger leg, 2 drivers crew rotation, strict 4.5h EC 561/2006 compliance).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-end gap-space-sm pt-space-xs">
                      <Link
                        href="/jobs/senior-touring-coach-captain"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full sm:w-auto px-space-md py-2.5 rounded-lg bg-surface-container-highest text-on-surface font-label-lg text-label-lg hover:bg-surface-variant transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">bolt</span>
                        <span>Fast-Track Dispatch Apply</span>
                      </Link>
                      <Link
                        href="/jobs/senior-touring-coach-captain"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full sm:w-auto px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        <span>View Full Instructions &amp; Technical Specs</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FLEET COMPLIANCE & PARTNER OPERATORS BENTO */}
          <section className="w-full bg-surface px-margin py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
              {/* Section Header */}
              <div className="max-w-3xl">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                  Continental Standards &amp; Network
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                  European Fleet Compliance &amp; Accredited Carriers
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Jobzeta transit postings verify tachograph authentication and cross-border passenger carrier status prior to captain onboarding.
                </p>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Tile 1: EC Regulation 561/2006 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">timer</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">EC 561/2006 Compliance</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Strict 4.5 hours driving limits followed by unbroken 45-minute rests. Automated calculation via smart tachographs to safeguard crew well-being and legal limits.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs">
                    <span className="font-label-sm text-label-sm text-primary font-semibold">100% Enforced Across Corridors</span>
                  </div>
                </div>

                {/* Tile 2: Gen 2 Tachographs */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">contactless</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Digital Tachograph Gen 2</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Support for GNSS automated border-crossing registration and DSRC remote enforcement capabilities required across all European transit fleets.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">Smart Driver Card Interoperability</span>
                  </div>
                </div>

                {/* Tile 3: Passenger Safety Briefing */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Safety &amp; Egress Standard</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Multi-lingual automated cabin briefings, escape hatch operation, active fire suppression monitoring, and automated defibrillator passenger readiness.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs">
                    <span className="font-label-sm text-label-sm text-primary font-semibold">Certified First Responder Ready</span>
                  </div>
                </div>

                {/* Tile 4: Airside Ground Safety */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">shield_with_heart</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Airside (IATA / EASA)</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Standardized airport perimeter clearance, high-visibility apron vehicle operation, FOD prevention training, and speed-governed airside transit.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs">
                    <span className="font-label-sm text-label-sm text-tertiary font-semibold">Airport Apron Certified</span>
                  </div>
                </div>
              </div>

              {/* Partner Operators Bar */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                  <span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">
                    Verified Partner Transit Consortiums &amp; Carrier Groups
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Over 1,200 active passenger coaches on Jobzeta
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">FlixBus</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Transit Partners</span>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">DB Regio Bus</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Deutsche Bahn AG</span>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Transdev</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Europe Mobility</span>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">National Express</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Intercity Express</span>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Keolis</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Urban &amp; Airport</span>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Voyages Weber</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Benelux VIP Tour</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* APPLICANT TALENT POOL / CAPTAIN CTA BANNER */}
          <section className="w-full bg-surface-container-lowest px-margin py-space-xl">
            <div className="max-w-7xl mx-auto rounded-3xl bg-secondary p-space-xl text-on-secondary shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-space-lg">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
                <span className="material-symbols-outlined text-[320px]">directions_bus</span>
              </div>
              <div className="max-w-2xl flex flex-col gap-space-sm relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  Captain Fast-Track Verification
                </span>
                <h3 className="font-headline-xl text-headline-xl text-on-secondary tracking-tight">
                  Hold a Category D License with Code 95?
                </h3>
                <p className="font-body-md text-body-md opacity-90 leading-relaxed">
                  Upload your digital driver card export and passenger endorsements to access unlisted international touring assignments, guaranteed lodging provisions, and verified cross-border per-diem packages.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto relative z-10">
                <button
                  onClick={() => openActionModal("register")}
                  className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold text-center transition-all shadow-md cursor-pointer"
                >
                  Register Driver Card &amp; Apply
                </button>
                <button
                  onClick={() => {
                    showToast("Opening Fleet Operator Registration & Charter Dispatch Console...");
                  }}
                  className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-on-secondary/10 hover:bg-on-secondary/20 text-on-secondary font-label-lg text-label-lg font-semibold text-center transition-all cursor-pointer"
                >
                  Fleet Operator Portal
                </button>
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
