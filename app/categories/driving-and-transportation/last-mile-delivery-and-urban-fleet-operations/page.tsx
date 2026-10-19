"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LastMileDeliveryUrbanFleetOperationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [fleetType, setFleetType] = useState("");
  const [metroHub, setMetroHub] = useState("");
  const [licensure, setLicensure] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"apply" | "register">("apply");

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
        ? "Requisition #LM-5820-DE saved to your driver profile."
        : "Requisition removed from saved items."
    );
  };

  const handleFilterSearch = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      `Dispatches filtered: ${searchQuery ? `"${searchQuery}"` : "All routes"} • ${
        fleetType || "All Fleets"
      } • ${metroHub || "All Metros"}`
    );
  };

  const toggleTagFilter = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag(null);
      setSearchQuery("");
      showToast("Cleared trending filter.");
    } else {
      setActiveTag(tag);
      setSearchQuery(tag);
      showToast(`Filtering by: ${tag}`);
    }
  };

  const openActionModal = (mode: "apply" | "register", e?: React.MouseEvent) => {
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
                      Fast-Track Dispatch Apply
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Req #LM-5820-DE • EuroParcel TransLogistics SE
                    </p>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Submit your delivery profile for direct route assignment at Berlin-Mitte / Paketzentrum 04. Vetted intake with same-day depot clearance.
                </p>
                <div className="space-y-space-xs">
                  <label className="font-label-sm text-label-sm text-on-surface block font-semibold">
                    Full Courier Name &amp; Contact
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name, Mobile / WhatsApp"
                    className="w-full bg-surface-container-low px-space-md py-2.5 rounded-lg font-body-sm text-body-sm border border-outline-variant/40 focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="space-y-space-xs">
                  <label className="font-label-sm text-label-sm text-on-surface block font-semibold">
                    Driver License Class &amp; Points Status
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. EU Class B (Clean Record / Zero Points)"
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
                      showToast("Fast-Track Application dispatched to Berlin-Mitte Logistics Hub!");
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
                    <span className="material-symbols-outlined text-[24px]">assignment_ind</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Register Delivery Profile
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Category B / C1 Clean Intake Verification
                    </p>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Instantly match your profile with vetted urban courier depots, EV parcel contractors, and fast-track daily wage guarantees.
                </p>
                <div className="border-2 border-dashed border-outline-variant rounded-xl p-space-lg flex flex-col items-center justify-center text-center gap-space-xs bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-[32px] text-primary">
                    cloud_upload
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Click to browse or drop Driver License scan (PDF / JPG)
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Encrypted under EU GDPR &amp; DIN EN 12195 compliant protocols
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
                      showToast("Delivery profile submitted for certified intake verification!");
                    }}
                    className="px-space-lg py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition-colors cursor-pointer"
                  >
                    Submit Delivery Profile
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* MAIN CONTENT WRAPPER */}
      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Top Meta & Category Header Hero */}
          <section className="w-full bg-surface-container-low px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="w-full max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              {/* Breadcrumbs and Compliance Micro-Badges */}
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <nav aria-label="Breadcrumbs" className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant flex-wrap">
                  <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
                    <span>Home</span>
                  </Link>
                  <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                  <Link className="hover:text-primary transition-colors" href="/categories/driving-and-transportation">
                    Driving &amp; Transportation
                  </Link>
                  <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                  <span className="text-on-surface font-semibold">Last-Mile Delivery &amp; Urban Fleet Operations</span>
                </nav>
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      electric_bolt
                    </span>
                    Green Logistics &amp; EV Urban Transit Network
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[15px]">verified</span>
                    DIN EN 12195 &amp; City Emission Zone Compliant
                  </span>
                </div>
              </div>

              {/* Main Section Header & Continental Metric Block */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
                <div className="lg:col-span-8 flex flex-col gap-space-sm">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                      High-Density Urban Logistics Node
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-3xl sm:text-headline-xl text-on-surface font-bold tracking-tight">
                    Last-Mile Delivery, Urban Fleet Operations &amp; EV Commercial Van Logistics
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                    Connecting verified B/C1 commercial couriers, high-density multi-drop delivery specialists, and zero-emission electric fleet operators with leading European parcel carriers, grocery rapid dispatchers, and urban e-mobility logistics hubs.
                  </p>
                </div>
                {/* Metric Card */}
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <div className="w-full sm:w-auto min-w-[280px] bg-surface-container-lowest p-space-md rounded-xl shadow-md flex items-center justify-between gap-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Continental Metric
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">€42,500</span>
                        <span className="font-label-md text-label-md text-primary font-semibold">/ yr</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Avg. Continental Urban Fleet Yield
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed-dim/30 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined text-[28px]">electric_meter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Search & Structured Discovery Filter Module */}
          <section className="w-full bg-surface px-margin py-space-lg -mt-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md flex flex-col gap-space-md">
                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-sm" onSubmit={handleFilterSearch}>
                  {/* Text Query */}
                  <div className="lg:col-span-4 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px]">search</span>
                    <input
                      className="w-full h-11 pl-10 pr-3.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                      placeholder="Route, urban hub, eSprinter, MAN eTGE, DHL/DPD contractor..."
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  {/* Fleet Selection Dropdown */}
                  <div className="lg:col-span-2 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">local_shipping</span>
                    <select
                      aria-label="Fleet Type"
                      value={fleetType}
                      onChange={(e) => setFleetType(e.target.value)}
                      className="w-full h-11 pl-9 pr-7 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                      <option value="">Fleet: All Types</option>
                      <option value="ev">EV Urban Van (3.5t)</option>
                      <option value="box">3.5t Box Truck / Tail-Lift</option>
                      <option value="pharma">Temperature Cold-Chain</option>
                      <option value="bike">Cargo E-Bike / Micro-Hub</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 text-outline pointer-events-none text-[18px]">arrow_drop_down</span>
                  </div>
                  {/* Metropolitan Hub Dropdown */}
                  <div className="lg:col-span-2 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">location_on</span>
                    <select
                      aria-label="Metropolitan Hub"
                      value={metroHub}
                      onChange={(e) => setMetroHub(e.target.value)}
                      className="w-full h-11 pl-9 pr-7 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                      <option value="">Hub: All Metros</option>
                      <option value="berlin">Berlin-Brandenburg (DE)</option>
                      <option value="paris">Paris Île-de-France (FR)</option>
                      <option value="randstad">Randstad Megalopolis (NL)</option>
                      <option value="london">Greater London ULEZ (UK)</option>
                      <option value="munich">Munich / Southern Ring (DE)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 text-outline pointer-events-none text-[18px]">arrow_drop_down</span>
                  </div>
                  {/* Licensure & Clearance */}
                  <div className="lg:col-span-3 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">badge</span>
                    <select
                      aria-label="Licensure & Clearance"
                      value={licensure}
                      onChange={(e) => setLicensure(e.target.value)}
                      className="w-full h-11 pl-9 pr-7 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                      <option value="">Licensure: Category B / C1</option>
                      <option value="b">Class B EU (Standard Van)</option>
                      <option value="c1">Category C1 (Up to 7.5t)</option>
                      <option value="adr">ADR Limited Quantities (Haz)</option>
                      <option value="air">Air Cargo Security Status</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 text-outline pointer-events-none text-[18px]">arrow_drop_down</span>
                  </div>
                  {/* Apply Filter CTA */}
                  <div className="lg:col-span-1 flex items-center">
                    <button
                      type="submit"
                      aria-label="Search dispatches"
                      className="w-full h-11 bg-primary hover:bg-primary-container text-on-primary rounded-lg flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[22px]">tune</span>
                    </button>
                  </div>
                </form>
                {/* Rapid Filter Attributes */}
                <div className="flex flex-wrap items-center gap-space-xs pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
                  <span className="text-outline uppercase tracking-wider font-semibold mr-1">Trending:</span>
                  <button
                    type="button"
                    onClick={() => toggleTagFilter("Zero-Emission Low Emission Zone (LEZ)")}
                    className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm transition-colors cursor-pointer ${
                      activeTag === "Zero-Emission Low Emission Zone (LEZ)"
                        ? "bg-primary text-on-primary font-bold"
                        : "bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed"
                    }`}
                  >
                    Zero-Emission Low Emission Zone (LEZ)
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleTagFilter("Smart Telematics Scanner Handheld")}
                    className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm transition-colors cursor-pointer ${
                      activeTag === "Smart Telematics Scanner Handheld"
                        ? "bg-primary text-on-primary font-bold"
                        : "bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed"
                    }`}
                  >
                    Smart Telematics Scanner Handheld
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleTagFilter("High-Density 120+ Drop Routes")}
                    className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm transition-colors cursor-pointer ${
                      activeTag === "High-Density 120+ Drop Routes"
                        ? "bg-primary text-on-primary font-bold"
                        : "bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed"
                    }`}
                  >
                    High-Density 120+ Drop Routes
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleTagFilter("Morning Wave Sortation")}
                    className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm transition-colors cursor-pointer ${
                      activeTag === "Morning Wave Sortation"
                        ? "bg-primary text-on-primary font-bold"
                        : "bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed"
                    }`}
                  >
                    Morning Wave Sortation
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Core Specialized Last-Mile Disciplines */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-lg">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Specialized Dispatch Tracks
                  </span>
                  <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface font-semibold">
                    Operational Roles by Fleet Specialization
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Active roster across 18 European micro-fulfillment &amp; sorting terminals
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md">
                {/* Discipline 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">local_shipping</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                        164 Open Positions
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        High-Density Urban Multi-Drop Courier
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        High-volume route optimization within tight urban sectors, residential multi-dwelling units, and timed storefront drops.
                      </p>
                    </div>
                    <div className="space-y-1.5 pt-2 font-label-md text-label-md text-on-surface">
                      <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="text-on-surface-variant">License &amp; Hardware</span>
                        <span className="font-semibold">EU Cat B • Zebra TC57</span>
                      </div>
                      <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="text-on-surface-variant">Stop Cadence</span>
                        <span className="font-semibold">110 – 140 Stops / Shift</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      €36,000 – €48,000
                    </span>
                    <Link
                      className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold transition-colors"
                      href="/find-jobs"
                    >
                      Explore Routes <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Discipline 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[24px]">ev_station</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                        88 Open Positions
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        Zero-Emission Commercial EV Fleet Specialist
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Operating e-vans in ultra-low emission metropolitan centers with smart telemetry, charging depot turnaround, and eco-regenerative metrics.
                      </p>
                    </div>
                    <div className="space-y-1.5 pt-2 font-label-md text-label-md text-on-surface">
                      <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="text-on-surface-variant">Fleet Assignment</span>
                        <span className="font-semibold">eSprinter • MAN eTGE</span>
                      </div>
                      <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="text-on-surface-variant">Charging Protocol</span>
                        <span className="font-semibold">Combined CCS2 DC &amp; AC</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      €38,000 – €52,000
                    </span>
                    <Link
                      className="inline-flex items-center gap-1 font-label-lg text-label-lg text-secondary hover:text-on-secondary-fixed-variant font-semibold transition-colors"
                      href="/find-jobs"
                    >
                      Explore Routes <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Discipline 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">ac_unit</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                        72 Open Positions
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        Pharma &amp; Temperature-Controlled Cold-Chain Express
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Time-critical medical parcel distribution, pathology transport, and active refrigerated pharmaceuticals adhering to GDP standards.
                      </p>
                    </div>
                    <div className="space-y-1.5 pt-2 font-label-md text-label-md text-on-surface">
                      <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="text-on-surface-variant">Compliance Level</span>
                        <span className="font-semibold">EU Good Distribution Practice</span>
                      </div>
                      <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="text-on-surface-variant">Target Sector</span>
                        <span className="font-semibold">Hospitals, Clinics, Research</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      €42,000 – €56,000
                    </span>
                    <Link
                      className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold transition-colors"
                      href="/find-jobs"
                    >
                      Explore Routes <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spotlight Featured Job Card with Interactive Smooth Hover-Reveal Effect */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Priority European Requisition
                  </span>
                  <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface font-semibold">
                    Featured Fleet Mission
                  </h2>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span> Verified Contract Carrier
                </span>
              </div>

              {/* PRIMARY FEATURED JOB CARD */}
              <article
                aria-label="Senior Urban Fleet Courier & EV Multi-Drop Specialist (High-Density Hub) requisition"
                className="group relative w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                tabIndex={0}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left Column: Visual Media & Badges */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                    <div
                      className="w-full h-full min-h-[190px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnEqiaOdX7wXJA6p4Jjut9MLYP_VxXFBGa8AFxVShivbbiMYwwggOrxaDnWww6cMNFMGiG3RXmw-5FnHGOPsy7D42980pQZSNTeBh9bm8E6TmtS7NGrbO4__ypYrsOZg6uIQfqnBR2PXL02LOozLxiU43OK8lXzisBZZK7irZFRpf_wV7kHWhQs_j4vDB48vXE8Nui6MY-ma3X4HRiioBjdbv5kzHHLaMOeElXAjrlX2PAUr3L4WH_8Q')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-black/30" />
                    
                    {/* Floating pill tags on media */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-on-surface font-label-sm text-[11px] font-semibold shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[13px]">electric_car</span>
                        Urban Fleet &amp; EV Courier
                      </span>
                    </div>

                    <button
                      aria-label="Bookmark Requisition"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-on-surface flex items-center justify-center shadow transition-all hover:text-primary active:scale-95 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleBookmarkToggle(e);
                      }}
                    >
                      <span className={`material-symbols-outlined text-[17px] ${isBookmarked ? "text-primary" : ""}`}>
                        {isBookmarked ? "bookmark" : "bookmark_border"}
                      </span>
                    </button>

                    <div className="absolute bottom-2 left-2.5 hidden md:flex items-center gap-1 text-[11px] font-label-sm text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm group-hover:opacity-0 transition-opacity">
                      <span className="material-symbols-outlined text-[13px]">visibility</span>
                      <span>Hover for scope</span>
                    </div>
                  </div>

                  {/* Right Column: Requisition Content & Interactive Reveal */}
                  <div className="flex-1 p-space-md sm:p-space-lg flex flex-col justify-between gap-space-sm">
                    {/* Top row: Employer, Post Age, Verified & Compensation */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-label-md text-label-md text-secondary font-bold tracking-wide uppercase">
                            EuroParcel TransLogistics SE
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-primary font-medium">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Verified Carrier
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" />
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-outline">schedule</span>
                            Posted Today
                          </span>
                        </div>

                        {/* Salary Highlight */}
                        <div className="text-right">
                          <span className="font-headline-sm text-[18px] sm:text-headline-sm font-bold text-on-surface">
                            €38,500 – €52,000
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant"> / yr base</span>
                        </div>
                      </div>

                      {/* Main Job Title */}
                      <Link href="/jobs/senior-urban-fleet-courier">
                        <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                          Senior Urban Fleet Courier &amp; EV Multi-Drop Specialist (High-Density Hub)
                        </h3>
                      </Link>

                      {/* Meta Tags: Location, Shift, Type, Clearance */}
                      <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                          Berlin Metropolitan Hub / Potsdam Ring (Paketzentrum 04)
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Full-Time Permanent
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                          Tier-1 Urban Parcel
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">eco</span>
                          Zero-Emission LEZ Cleared
                        </span>
                      </div>
                    </div>

                    {/* Skill Tags / Systems */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        EU Category B / C1 License
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Mercedes-Benz eSprinter / MAN eTGE
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Zebra TC57 Handheld PDA
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        High-Density Drop Sequence
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                        Optical OCR POD
                      </span>
                    </div>

                    {/* Accordion Reveal Section on Group Hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-all duration-300 ease-out overflow-hidden">
                      <div className="min-h-0 pt-0 group-hover:pt-space-sm group-focus-within:pt-space-sm flex flex-col gap-space-sm">
                        <div className="w-full h-px bg-surface-container-high" />
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-low p-space-sm rounded-lg border border-outline-variant/30">
                          <div className="flex flex-col gap-0.5 text-on-surface font-body-sm text-body-sm max-w-2xl">
                            <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[15px]">insights</span>
                              Operational Scope &amp; Mission Brief
                            </span>
                            <p className="text-body-sm text-on-surface-variant">
                              Berlin-Mitte Hub ⇄ Prenzlauer Berg (110–140 stops/shift), geofenced courier parcel sequence, high-density drop dispatch. Pedestrian Zone Safe Speed (≤15 km/h) • Zebra TC57 Optical OCR POD, 100% engine/motor switch-off, contactless photo scan.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            <Link
                              className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-urban-fleet-courier"
                            >
                              <span>View Details &amp; Specs</span>
                              <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                            </Link>
                            <Link
                              className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-lg font-semibold transition-all shadow flex items-center gap-1 cursor-pointer"
                              href="/jobs/senior-urban-fleet-courier"
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

          {/* Urban Standards & Compliance Matrix */}
          <section className="w-full bg-surface-container-low px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="max-w-[1920px] mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1 max-w-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Standardized Framework
                </span>
                <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface font-semibold">
                  Urban Standards &amp; Compliance Matrix
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Strict regulatory conformity aligned with European clean air frameworks, vehicle safety covenants, and intelligent handheld proof-of-delivery protocol.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Matrix 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed-dim/40 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">energy_savings_leaf</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Zero-Emission LEZ / Clean Air Zones
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Full compliance with Crit&apos;Air, German Umweltplakette 4, and London ULEZ protocols. Seamless operation of BEV fleets inside restricted metropolitan centers.
                  </p>
                  <div className="mt-auto pt-2 font-label-sm text-label-sm text-primary font-bold">
                    EURO 6d / ELECTRIC CERTIFIED
                  </div>
                </div>
                {/* Matrix 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Digital Telematics &amp; Proof-of-Delivery
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Integration with Honeywell, Zebra, and proprietary carrier handhelds. Real-time geofenced photo POD, optical OCR, and high-frequency wave confirmation.
                  </p>
                  <div className="mt-auto pt-2 font-label-sm text-label-sm text-secondary font-bold">
                    ENCRYPTED SCANNING &amp; POD
                  </div>
                </div>
                {/* Matrix 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[24px]">shelves</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Safe Loading &amp; Cargo Restraint
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    DIN EN 12195 compliant racking, lashing systems, and load distribution. Bulkhead structural integrity checks and anti-slip composite cabin flooring.
                  </p>
                  <div className="mt-auto pt-2 font-label-sm text-label-sm text-on-surface-variant font-bold">
                    DIN EN 12195 VALIDATED
                  </div>
                </div>
                {/* Matrix 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">thermostat</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    GDP Cold-Chain Validation
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Precision cargo chambers supporting +2°C to +8°C and +15°C to +25°C envelopes with automated alert telemetry for clinical and sensitive biological assets.
                  </p>
                  <div className="mt-auto pt-2 font-label-sm text-label-sm text-primary font-bold">
                    GDP PHARMA REGULATION
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partner Carrier Consortiums */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-xl">
            <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-space-lg text-center">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">
                  Logistics Exchange Ecosystem
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  Accredited Fleet Networks &amp; Primary Contractors
                </h3>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-md items-center justify-items-center opacity-85">
                <div className="p-space-sm bg-surface-container rounded-lg w-full flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface-variant tracking-wider hover:bg-surface-container-high transition-colors">
                  DHL Express
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg w-full flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface-variant tracking-wider hover:bg-surface-container-high transition-colors">
                  DPD Network
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg w-full flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface-variant tracking-wider hover:bg-surface-container-high transition-colors">
                  Hermes Evri
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg w-full flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface-variant tracking-wider hover:bg-surface-container-high transition-colors">
                  GLS Group
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg w-full flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface-variant tracking-wider hover:bg-surface-container-high transition-colors">
                  Amazon DSP
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg w-full flex items-center justify-center font-headline-sm text-headline-sm font-bold text-on-surface-variant tracking-wider hover:bg-surface-container-high transition-colors">
                  PostNL
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Conversion Callout Banner */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl">
            <div className="max-w-[1920px] mx-auto">
              <div className="bg-primary text-on-primary rounded-2xl p-space-lg lg:p-space-xl shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg relative overflow-hidden">
                {/* Background decorative ambient accent */}
                <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary-container/40 blur-3xl pointer-events-none"></div>
                <div className="flex flex-col gap-space-sm relative z-10 max-w-2xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold uppercase tracking-wider w-max">
                    <span className="material-symbols-outlined text-[14px]">local_police</span> Verified Driver Intake
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-headline-xl font-headline-xl font-bold tracking-tight text-on-primary">
                    Hold a Category B or C1 Driver&apos;s License with Clean Points?
                  </h2>
                  <p className="font-body-md text-body-md text-on-primary-container/90 leading-relaxed">
                    Instantly match your profile with vetted urban courier depots, EV parcel contractors, and fast-track daily wage guarantees with certified zero-emission carriers.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-sm relative z-10">
                  <button
                    onClick={() => openActionModal("register")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-lg text-label-lg font-bold transition-all shadow-md cursor-pointer"
                  >
                    Register Delivery Profile &amp; Apply
                    <span className="material-symbols-outlined text-[20px]">assignment_ind</span>
                  </button>
                </div>
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
