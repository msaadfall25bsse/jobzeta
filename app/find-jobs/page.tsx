"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FindJobsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [keyword, setKeyword] = useState("All Trades & Specializations");
  const [location, setLocation] = useState("Global / All Jurisdictions");
  const [activeFilters, setActiveFilters] = useState(["Full-Time", "Verified Employers"]);
  const [workplace, setWorkplace] = useState("Hybrid");
  const [salary, setSalary] = useState("45000");
  const [datePosted, setDatePosted] = useState("Past Week");
  const [email, setEmail] = useState("");

  const removeFilter = (filterName: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filterName));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Top Command & Refinement Strip */}
          <section className="w-full bg-surface-container-low pb-space-lg px-margin">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-md pt-space-md">
              {/* Search Inputs Bar */}
              <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col lg:flex-row items-center gap-space-sm">
                {/* Keyword Input */}
                <div className="relative flex-1 w-full flex items-center">
                  <span className="material-symbols-outlined text-outline absolute left-space-md text-[20px]">
                    search
                  </span>
                  <input
                    className="w-full pl-11 pr-space-md py-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-low transition-colors"
                    placeholder="Job title, keywords, or occupation"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <div className="hidden lg:block w-px h-8 bg-surface-container-highest" />
                {/* Location Input */}
                <div className="relative flex-1 w-full flex items-center">
                  <span className="material-symbols-outlined text-outline absolute left-space-md text-[20px]">
                    location_on
                  </span>
                  <input
                    className="w-full pl-11 pr-space-md py-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-low transition-colors"
                    placeholder="City, state, territory, or remote"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                {/* Submit Button */}
                <button
                  className="w-full lg:w-auto px-space-xl py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all flex items-center justify-center gap-space-xs shrink-0 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                  <span>Update Search</span>
                </button>
              </div>

              {/* Active Filter Strip & Metrics Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider mr-space-xs">
                    Active Parameters:
                  </span>
                  {activeFilters.includes("Full-Time") && (
                    <button
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm hover:bg-secondary-fixed-dim transition-colors group cursor-pointer"
                      onClick={() => removeFilter("Full-Time")}
                    >
                      <span>Full-Time</span>
                      <span className="material-symbols-outlined text-[14px] text-on-secondary-fixed group-hover:scale-110">
                        close
                      </span>
                    </button>
                  )}
                  {activeFilters.includes("Verified Employers") && (
                    <button
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm hover:bg-primary-fixed-dim transition-colors group cursor-pointer"
                      onClick={() => removeFilter("Verified Employers")}
                    >
                      <span>Verified Employers</span>
                      <span className="material-symbols-outlined text-[14px] text-on-primary-fixed group-hover:scale-110">
                        close
                      </span>
                    </button>
                  )}
                  {activeFilters.length > 0 && (
                    <button
                      className="font-label-sm text-label-sm text-primary hover:text-primary-container underline underline-offset-4 ml-1 transition-colors cursor-pointer"
                      onClick={clearAllFilters}
                    >
                      Clear All
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Showing{" "}
                    <span className="font-bold text-on-surface font-headline-sm text-body-sm">
                      248
                    </span>{" "}
                    open positions across 42 jurisdictions
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Main Feed & Filter Canvas */}
          <section className="w-full px-margin py-space-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* Left Desktop Sidebar Filters (4 Columns) */}
              <aside className="hidden lg:flex flex-col lg:col-span-4 gap-space-md">
                {/* Filter Card Container */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        filter_list
                      </span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Filter Exchange
                      </h2>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium">
                      2 Active
                    </span>
                  </div>

                  {/* Primary Sector */}
                  <div className="flex flex-col gap-space-sm">
                    <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider flex items-center justify-between">
                      <span>Primary Sector</span>
                      <span className="text-tertiary font-body-sm text-[12px]">7 fields</span>
                    </label>
                    <div className="space-y-2.5 pt-1">
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            defaultChecked
                            className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">
                            Skilled Trades &amp; Civil
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">84</span>
                      </label>
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            defaultChecked
                            className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">
                            Freight &amp; Transportation
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">52</span>
                      </label>
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                            Agriculture &amp; Agritech
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">31</span>
                      </label>
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                            Healthcare &amp; Clinical
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">44</span>
                      </label>
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                            IT &amp; Systems Engineering
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">22</span>
                      </label>
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                            Manufacturing &amp; Plant Ops
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">15</span>
                      </label>
                    </div>
                  </div>

                  {/* Workplace Dynamics */}
                  <div className="flex flex-col gap-space-sm pt-2">
                    <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                      Workplace Dynamics
                    </label>
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <button
                        className={`py-2 px-1 text-center rounded-lg font-label-sm text-label-sm transition-colors cursor-pointer font-medium ${
                          workplace === "On-Site"
                            ? "bg-secondary-fixed text-on-secondary-fixed font-semibold shadow-sm"
                            : "bg-surface-container-high hover:bg-primary-fixed hover:text-on-primary-fixed text-on-surface"
                        }`}
                        onClick={() => setWorkplace("On-Site")}
                        type="button"
                      >
                        On-Site
                      </button>
                      <button
                        className={`py-2 px-1 text-center rounded-lg font-label-sm text-label-sm transition-colors cursor-pointer ${
                          workplace === "Hybrid"
                            ? "bg-secondary-fixed text-on-secondary-fixed font-semibold shadow-sm"
                            : "bg-surface-container-high hover:bg-primary-fixed hover:text-on-primary-fixed text-on-surface font-medium"
                        }`}
                        onClick={() => setWorkplace("Hybrid")}
                        type="button"
                      >
                        Hybrid
                      </button>
                      <button
                        className={`py-2 px-1 text-center rounded-lg font-label-sm text-label-sm transition-colors cursor-pointer font-medium ${
                          workplace === "Remote"
                            ? "bg-secondary-fixed text-on-secondary-fixed font-semibold shadow-sm"
                            : "bg-surface-container-high hover:bg-primary-fixed hover:text-on-primary-fixed text-on-surface"
                        }`}
                        onClick={() => setWorkplace("Remote")}
                        type="button"
                      >
                        Remote
                      </button>
                    </div>
                  </div>

                  {/* Engagement Type */}
                  <div className="flex flex-col gap-space-sm pt-2">
                    <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                      Engagement Type
                    </label>
                    <div className="space-y-2.5 pt-1">
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            defaultChecked
                            className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary">
                            Direct Full-Time
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">168</span>
                      </label>
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary">
                            Fixed Contract / Guild
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">42</span>
                      </label>
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary">
                            Seasonal Rotation
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">23</span>
                      </label>
                      <label className="flex items-center justify-between group cursor-pointer py-0.5">
                        <div className="flex items-center gap-space-sm">
                          <input
                            className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary">
                            Accredited Apprenticeship
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-tertiary">15</span>
                      </label>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div className="flex flex-col gap-space-sm pt-2">
                    <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                      Experience Level
                    </label>
                    <div className="space-y-2.5 pt-1">
                      <label className="flex items-center gap-space-sm cursor-pointer group py-0.5">
                        <input
                          className="accent-primary w-4 h-4"
                          name="exp_level"
                          type="radio"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface">
                          No Experience Required
                        </span>
                      </label>
                      <label className="flex items-center gap-space-sm cursor-pointer group py-0.5">
                        <input
                          className="accent-primary w-4 h-4"
                          name="exp_level"
                          type="radio"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface">
                          Entry Level (1-2 yrs)
                        </span>
                      </label>
                      <label className="flex items-center gap-space-sm cursor-pointer group py-0.5">
                        <input
                          defaultChecked
                          className="accent-primary w-4 h-4"
                          name="exp_level"
                          type="radio"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface font-semibold group-hover:text-on-surface">
                          Mid Level (3-5 yrs)
                        </span>
                      </label>
                      <label className="flex items-center gap-space-sm cursor-pointer group py-0.5">
                        <input
                          className="accent-primary w-4 h-4"
                          name="exp_level"
                          type="radio"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface">
                          Senior / Master Technician
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Min Annual Baseline */}
                  <div className="flex flex-col gap-space-sm pt-2">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                        Min Annual Baseline
                      </label>
                      <span className="font-label-md text-label-md text-primary font-bold">
                        ${Number(salary).toLocaleString()}+
                      </span>
                    </div>
                    <input
                      className="w-full accent-primary cursor-pointer mt-1"
                      max="150000"
                      min="20000"
                      step="5000"
                      type="range"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                    <div className="flex justify-between font-label-sm text-label-sm text-tertiary pt-0.5">
                      <span>$20k</span>
                      <span>$85k</span>
                      <span>$150k+</span>
                    </div>
                  </div>

                  {/* Date Posted */}
                  <div className="flex flex-col gap-space-sm pt-2">
                    <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                      Date Posted
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {["Past 24h", "Past Week", "Past Month", "Anytime"].map((item) => (
                        <button
                          key={item}
                          className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-colors cursor-pointer ${
                            datePosted === item
                              ? "bg-secondary text-on-secondary font-medium"
                              : "bg-surface-container-high text-on-surface hover:bg-secondary-fixed"
                          }`}
                          onClick={() => setDatePosted(item)}
                          type="button"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Global Compliance Micro-Bento Widget */}
                <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs shadow-sm">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wide">
                      Workforce Verification
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    All posted opportunities are pre-screened for multinational wage parity and
                    jurisdictional labor legality.
                  </p>
                </div>
              </aside>

              {/* Right Results Stream (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                {/* Controls & Ordering Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-md text-label-md text-tertiary">Sorted By:</span>
                    <div className="relative inline-block">
                      <select className="appearance-none bg-surface-container-low pl-3 pr-8 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface focus:outline-none cursor-pointer">
                        <option>Most Relevant</option>
                        <option>Newest First</option>
                        <option>Highest Compensation</option>
                        <option>Proximity / Verified Relocation</option>
                      </select>
                      <span className="material-symbols-outlined pointer-events-none absolute right-2 top-2 text-[18px] text-outline">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm self-end sm:self-auto">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Live updates enabled
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary-fixed-dim/40" />
                  </div>
                </div>

                {/* Job Card Feed */}
                <div className="flex flex-col gap-space-md">
                  {/* Card 1: Commercial Plumber */}
                  <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md group">
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-start gap-space-md min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 overflow-hidden">
                          <span className="material-symbols-outlined text-primary text-[28px]">
                            plumbing
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center gap-space-xs flex-wrap mb-1">
                            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                              Metro Infrastructure Ltd
                            </span>
                            <span
                              className="material-symbols-outlined text-primary text-[16px]"
                              title="Institutional Verified"
                            >
                              verified
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-semibold truncate leading-tight">
                            Commercial Plumber &amp; Pipefitter
                          </h3>
                          <div className="flex items-center gap-space-md flex-wrap mt-2 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px] text-outline">
                                location_on
                              </span>
                              London, United Kingdom
                            </span>
                            <span className="inline-flex items-center gap-1.5 font-semibold text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                payments
                              </span>
                              £38,000 - £46,000 / yr
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="text-outline hover:text-primary transition-colors p-1 shrink-0 rounded-lg cursor-pointer"
                        title="Save Job"
                      >
                        <span className="material-symbols-outlined text-[22px]">bookmark</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs border-t border-surface-container-highest">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm border border-transparent">
                          Full-time
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm border border-outline-variant">
                          On-site
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm border border-transparent font-medium">
                          NVQ Level 3 Req.
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <span className="font-label-sm text-label-sm text-tertiary">
                          1 day ago
                        </span>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors cursor-pointer font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </article>

                  {/* Card 2: International Freight Logistics */}
                  <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md group">
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-start gap-space-md min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 overflow-hidden">
                          <span className="material-symbols-outlined text-secondary text-[28px]">
                            forklift
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center gap-space-xs flex-wrap mb-1">
                            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                              TransWorld Cargo
                            </span>
                            <span
                              className="material-symbols-outlined text-primary text-[16px]"
                              title="Direct Partner"
                            >
                              verified
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-semibold truncate leading-tight">
                            International Freight Logistics Dispatcher
                          </h3>
                          <div className="flex items-center gap-space-md flex-wrap mt-2 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px] text-outline">
                                location_on
                              </span>
                              Rotterdam, Netherlands
                            </span>
                            <span className="inline-flex items-center gap-1.5 font-semibold text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                payments
                              </span>
                              €34,000 - €42,000 / yr
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="text-outline hover:text-primary transition-colors p-1 shrink-0 rounded-lg cursor-pointer"
                        title="Save Job"
                      >
                        <span className="material-symbols-outlined text-[22px]">bookmark</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs border-t border-surface-container-highest">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm border border-transparent">
                          Full-time
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm border border-transparent font-medium">
                          Hybrid
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm border border-outline-variant">
                          Multimodal
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <span className="font-label-sm text-label-sm text-primary font-bold">
                          3 hours ago
                        </span>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors cursor-pointer font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </article>

                  {/* Inline Rich Discovery Alert Callout */}
                  <div className="relative overflow-hidden bg-primary p-space-lg rounded-xl text-on-primary shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
                    <div className="flex items-start gap-space-md relative z-10 flex-1">
                      <div className="w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary-fixed text-[26px]">
                          notifications_active
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">
                          Fast-Track Notifications
                        </span>
                        <h4 className="font-headline-sm text-headline-sm text-on-primary font-bold leading-snug">
                          Get notified when similar positions emerge
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-primary/80 max-w-lg leading-relaxed">
                          Establish instantaneous notifications for trades, dispatching, and field
                          operations tailored to your jurisdictional preferences.
                        </p>
                      </div>
                    </div>
                    <form
                      className="flex items-center gap-2 w-full md:w-auto shrink-0 relative z-10"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        className="px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline w-full md:w-60 focus:outline-none shadow-sm"
                        placeholder="Enter career email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        className="px-space-md py-2.5 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg hover:bg-primary-fixed-dim transition-colors shrink-0 font-semibold cursor-pointer shadow-sm"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                    <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  </div>

                  {/* Card 3: Orchard Operations Supervisor */}
                  <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md group">
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-start gap-space-md min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 overflow-hidden">
                          <span className="material-symbols-outlined text-primary text-[28px]">
                            agriculture
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center gap-space-xs flex-wrap mb-1">
                            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                              AgriValley Farms
                            </span>
                            <span className="material-symbols-outlined text-primary text-[16px]">
                              verified
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-semibold truncate leading-tight">
                            Orchard Operations Supervisor
                          </h3>
                          <div className="flex items-center gap-space-md flex-wrap mt-2 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px] text-outline">
                                location_on
                              </span>
                              Sacramento, CA, USA
                            </span>
                            <span className="inline-flex items-center gap-1.5 font-semibold text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                payments
                              </span>
                              $52,000 - $60,000 / yr
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="text-outline hover:text-primary transition-colors p-1 shrink-0 rounded-lg cursor-pointer"
                        title="Save Job"
                      >
                        <span className="material-symbols-outlined text-[22px]">bookmark</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs border-t border-surface-container-highest">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm border border-transparent">
                          Full-time
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm border border-outline-variant">
                          On-site
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm border border-transparent font-medium">
                          Bilingual Preferred
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <span className="font-label-sm text-label-sm text-tertiary">
                          2 days ago
                        </span>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors cursor-pointer font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </article>

                  {/* Card 4: Certified Medical Assistant */}
                  <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md group">
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-start gap-space-md min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 overflow-hidden">
                          <span className="material-symbols-outlined text-secondary text-[28px]">
                            medical_services
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center gap-space-xs flex-wrap mb-1">
                            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                              Apex Health Clinic
                            </span>
                            <span className="material-symbols-outlined text-primary text-[16px]">
                              verified
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-semibold truncate leading-tight">
                            Certified Medical Assistant
                          </h3>
                          <div className="flex items-center gap-space-md flex-wrap mt-2 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px] text-outline">
                                location_on
                              </span>
                              Toronto, ON, Canada
                            </span>
                            <span className="inline-flex items-center gap-1.5 font-semibold text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                payments
                              </span>
                              CAD $48,000 - $55,000 / yr
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="text-outline hover:text-primary transition-colors p-1 shrink-0 rounded-lg cursor-pointer"
                        title="Save Job"
                      >
                        <span className="material-symbols-outlined text-[22px]">bookmark</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs border-t border-surface-container-highest">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm border border-transparent">
                          Full-time
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm border border-outline-variant">
                          On-site
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm border border-transparent font-medium">
                          Provincial Licensure
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <span className="font-label-sm text-label-sm text-primary font-bold">
                          5 hours ago
                        </span>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors cursor-pointer font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </article>

                  {/* Card 5: Heavy Equipment Operator */}
                  <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md group">
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-start gap-space-md min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 overflow-hidden">
                          <span className="material-symbols-outlined text-primary text-[28px]">
                            construction
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center gap-space-xs flex-wrap mb-1">
                            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                              BuildCorp Infra
                            </span>
                            <span className="material-symbols-outlined text-primary text-[16px]">
                              verified
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-semibold truncate leading-tight">
                            Heavy Equipment Operator (Excavator)
                          </h3>
                          <div className="flex items-center gap-space-md flex-wrap mt-2 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px] text-outline">
                                location_on
                              </span>
                              Melbourne, Australia
                            </span>
                            <span className="inline-flex items-center gap-1.5 font-semibold text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                payments
                              </span>
                              AUD $45 - $55 / hr
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="text-outline hover:text-primary transition-colors p-1 shrink-0 rounded-lg cursor-pointer"
                        title="Save Job"
                      >
                        <span className="material-symbols-outlined text-[22px]">bookmark</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs border-t border-surface-container-highest">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm border border-transparent">
                          Contract
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm border border-outline-variant">
                          On-site
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm border border-transparent font-medium">
                          High-Risk Work Licence
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <span className="font-label-sm text-label-sm text-tertiary">
                          1 day ago
                        </span>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors cursor-pointer font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </article>

                  {/* Card 6: Senior Cloud Infrastructure Engineer */}
                  <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md group">
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-start gap-space-md min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 overflow-hidden">
                          <span className="material-symbols-outlined text-secondary text-[28px]">
                            cloud
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center gap-space-xs flex-wrap mb-1">
                            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                              Nexus Tech Solutions
                            </span>
                            <span className="material-symbols-outlined text-primary text-[16px]">
                              verified
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-semibold truncate leading-tight">
                            Senior Cloud Infrastructure Engineer
                          </h3>
                          <div className="flex items-center gap-space-md flex-wrap mt-2 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px] text-outline">
                                public
                              </span>
                              Remote (Global Work Permit Ready)
                            </span>
                            <span className="inline-flex items-center gap-1.5 font-semibold text-on-surface">
                              <span className="material-symbols-outlined text-[16px] text-primary">
                                payments
                              </span>
                              $90,000 - $120,000 / yr
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="text-outline hover:text-primary transition-colors p-1 shrink-0 rounded-lg cursor-pointer"
                        title="Save Job"
                      >
                        <span className="material-symbols-outlined text-[22px]">bookmark</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs border-t border-surface-container-highest">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm border border-transparent">
                          Full-time
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm border border-transparent font-medium">
                          Remote
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm border border-outline-variant">
                          Terraform / AWS
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <span className="font-label-sm text-label-sm text-tertiary">
                          2 days ago
                        </span>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors cursor-pointer font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Systematic Pagination Controls */}
                <nav
                  aria-label="Pagination"
                  className="flex items-center justify-between bg-surface-container-lowest p-space-md rounded-xl shadow-sm mt-space-md"
                >
                  <button
                    className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md cursor-pointer disabled:opacity-40"
                    disabled
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                  <div className="flex items-center gap-1">
                    <button
                      className="w-9 h-9 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold transition-colors cursor-pointer"
                      type="button"
                    >
                      1
                    </button>
                    <button
                      className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors cursor-pointer"
                      type="button"
                    >
                      2
                    </button>
                    <button
                      className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors cursor-pointer"
                      type="button"
                    >
                      3
                    </button>
                    <button
                      className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors cursor-pointer"
                      type="button"
                    >
                      4
                    </button>
                    <span className="px-1 text-outline font-label-md text-label-md">...</span>
                    <button
                      className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors cursor-pointer"
                      type="button"
                    >
                      12
                    </button>
                  </div>
                  <button
                    className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md cursor-pointer"
                    type="button"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </nav>

                {/* Dynamic Relocation Assistance Module */}
                <div className="p-space-lg rounded-xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">flight_takeoff</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-tight">
                        Cross-Border Guild Relocation
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Looking to transfer skills across borders? Explore certified visa
                        sponsorship roles.
                      </p>
                    </div>
                  </div>
                  <button
                    className="px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-md text-label-md shadow-sm transition-colors whitespace-nowrap cursor-pointer font-semibold shrink-0"
                    type="button"
                  >
                    Explore Visa Roles
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* REUSABLE FOOTER */}
      <Footer />
    </>
  );
}
