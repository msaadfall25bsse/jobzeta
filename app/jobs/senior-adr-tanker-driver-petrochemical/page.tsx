"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorADRTankerDriverJobPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-16 flex-1 bg-surface">
        <div className="flex flex-col w-full">
          {/* Top Bar & Breadcrumbs */}
          <div className="w-full bg-surface-container-low py-space-sm px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center flex-wrap gap-2 text-on-surface-variant font-label-md text-label-md">
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
                <span className="text-outline-variant font-normal">/</span>
                <Link className="hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="text-outline-variant font-normal">/</span>
                <Link className="hover:text-primary transition-colors" href="/categories/driving-and-transportation">
                  Driving &amp; Transportation
                </Link>
                <span className="text-outline-variant font-normal">/</span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/categories/driving-and-transportation/dangerous-goods-and-hazmat-tanker"
                >
                  Dangerous Goods &amp; Hazmat
                </Link>
                <span className="text-outline-variant font-normal">/</span>
                <span className="text-primary font-semibold">Technical Operational Manual &amp; Specs</span>
              </div>
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                  ROLE ID: BY-ANT-HAZMAT-4412
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed/40 text-on-primary-fixed font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  ACTIVE BULK CHEMICAL HAZMAT CORRIDOR
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm">
                  DSV &amp; BASF Verified Fleet
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                  SQAS &amp; ADR Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Action Subheader */}
          <div className="w-full bg-surface-container-lowest shadow-sm py-space-md px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
              <Link
                className="inline-flex items-center gap-2 font-label-lg text-label-lg text-secondary hover:text-primary transition-colors"
                href="/categories/driving-and-transportation/dangerous-goods-and-hazmat-tanker"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Back to Hazmat Overview
              </Link>
              <div className="flex items-center gap-space-sm flex-wrap w-full sm:w-auto">
                <button
                  className="inline-flex items-center justify-center gap-2 px-space-md py-2 rounded-lg bg-surface-container font-label-lg text-label-lg text-on-surface hover:bg-surface-container-high transition-colors flex-1 sm:flex-none"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">bookmark</span>
                  Save Corridor Specs
                </button>
                <a
                  className="inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-sm transition-all hover:shadow-md flex-1 sm:flex-none text-center"
                  href="#application-form"
                >
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  Fast-Track Dispatch Application
                </a>
              </div>
            </div>
          </div>

          {/* Showcase Hero Banner */}
          <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-space-md">
            <div className="max-w-[1920px] mx-auto">
              {/* Immersive Photographic Hero Banner */}
              <div
                className="relative w-full rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-space-md md:p-space-lg bg-cover bg-center min-h-[480px] md:min-h-[520px]"
                style={{
                  backgroundImage: "url('/adr-antwerp-hero.jpg')",
                }}
              >
                {/* Scrim & Gradient Overlays for High Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/70 to-on-surface/40"></div>

                {/* Top Badges Row */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">
                      <span className="material-symbols-outlined text-[16px]">verified_user</span>
                      TIER-1 CHEMICAL LOGISTICS • SQAS &amp; CEFIC AUDITED
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-secondary-container/30 backdrop-blur-md text-surface-bright font-label-sm text-label-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
                      ROLE ID: BY-ANT-HAZMAT-4412 • ACTIVE BULK CHEMICAL HAZMAT CORRIDOR
                    </span>
                  </div>
                  <span className="px-space-sm py-1 rounded bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-label-sm text-label-sm uppercase font-semibold">
                    ANTWERP ⇄ LUDWIGSHAFEN &amp; ROTTERDAM
                  </span>
                </div>

                {/* Main Content Overlay: Title, Subtitle, Facility Tags & Right Compensation Glass Card */}
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-space-md my-auto pt-space-lg pb-space-sm text-surface-container-lowest">
                  {/* Left: Titles, Subtitle & Facility Meta */}
                  <div className="flex flex-col gap-space-xs max-w-4xl">
                    <h1 className="font-headline-xl text-headline-xl text-surface-bright font-bold tracking-tight leading-tight">
                      Senior ADR Tanker Driver - Petrochemical &amp; Liquid Chemicals
                    </h1>
                    <p className="text-primary-fixed font-headline-md font-semibold mt-0.5">
                      Bulk Stainless Steel Road Tanker (316L Class 3, 6.1 &amp; 8)
                    </p>
                    {/* Facility & Rotation Meta Badges */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-surface-container-high font-body-sm text-body-sm pt-space-xs">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">location_on</span>
                        <span>Port of Antwerp Chemical Cluster (Belgium / Netherlands / Germany Cross-Border)</span>
                      </div>
                      <span className="text-outline-variant/60">•</span>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">schedule</span>
                        <span>Full-Time (3/1 Roster or 2/2 Flexible Rotation)</span>
                      </div>
                      <span className="text-outline-variant/60">•</span>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">shield_person</span>
                        <span>ATEX Level 2 Operational Clearance</span>
                      </div>
                    </div>
                    {/* Key Metric Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-label-sm text-label-sm font-medium">
                        <span className="material-symbols-outlined text-[15px] text-primary-fixed">check_circle</span>
                        99.9% Zero-Spill Rating
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-label-sm text-label-sm font-medium">
                        <span className="material-symbols-outlined text-[15px] text-primary-fixed">science</span>
                        Class 3, 6.1, 8 Coded
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-label-sm text-label-sm font-medium">
                        <span className="material-symbols-outlined text-[15px] text-primary-fixed">sensors</span>
                        SIL-Level ATEX GPS
                      </span>
                    </div>
                  </div>
                  {/* Right: Glassmorphic Compensation & Tariff Card */}
                  <div className="shrink-0 backdrop-blur-xl bg-surface-container-lowest/20 border border-surface-container-lowest/30 p-space-md rounded-xl shadow-lg flex flex-col justify-center items-start lg:items-end min-w-[280px]">
                    <div className="flex items-center justify-between gap-2 w-full">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high font-bold">
                        Approved Petrochemical CAO
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">
                        Tier A1 Rate
                      </span>
                    </div>
                    <div className="font-headline-lg text-headline-lg text-surface-bright font-bold mt-0.5">
                      €58,000 – €88,000 <span className="font-body-sm text-body-sm text-surface-container-high font-normal">/ year</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary-fixed mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">night_shelter</span>
                      + €75.00/day ADR Danger Per Diem + Night Cabin Allowance
                    </span>
                  </div>
                </div>

                {/* Telematics & Endorsements Bottom Bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-space-md pt-space-xs border-t border-surface-container-lowest/20">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-sm text-surface-bright font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-primary-fixed text-[15px]">local_gas_station</span> Class Endorsements: ADR 3, 6.1, 8 (Bulk Tankers)
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-sm text-surface-bright font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-primary-fixed text-[15px]">shield</span> Safety Framework: SQAS &amp; CEFIC BBS Audited
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-sm text-surface-bright font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-primary-fixed text-[15px]">hub</span> Telematics Fleet: Smart Tachograph Gen 2 &amp; ATEX GPS
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary/40 backdrop-blur-sm text-primary-fixed font-label-sm text-label-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span> Immediate Roster Placement Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Clean Work Instruction / Spec Toolbar */}
              <div className="w-full mt-3 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high px-space-md py-2.5 flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm flex-wrap text-on-surface-variant font-label-sm text-label-sm">
                  <span className="px-2 py-0.5 rounded bg-surface-container-high font-semibold text-on-surface">SPEC-HAZ-ADR-2025-V2</span>
                  <span className="text-outline-variant">•</span>
                  <span>Verified Chem Logistics Protocol</span>
                  <span className="text-outline-variant">•</span>
                  <span>Port Alfapass Cleared</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-colors cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px] text-primary">print</span> Print Safety Manifest
                  </button>
                  <button
                    onClick={() => alert("Downloading PDF Copy...")}
                    className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-colors cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary">description</span> PDF Copy
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content 2-Column Grid */}
          <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              {/* Left Column: 8 Columns Width (Technical Modules) */}
              <div className="lg:col-span-8 space-y-space-lg">
                {/* Module 01: Overview & Governance */}
                <section className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-surface-container-high">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-bold text-primary px-2 py-0.5 rounded bg-primary-fixed/30">
                        MODULE 01
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Role Overview &amp; Chemical Cargo Governance
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary">science</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mb-space-md leading-relaxed">
                    As a Senior ADR Tanker Driver within our Chemical Logistics division, you will operate top-tier ADR-certified tractor units (Volvo FH 500 / Scania R500 V8) hauling specialized multi-compartment insulated stainless steel (316L) pressure tankers. You will be responsible for the cross-border carriage of bulk liquid petrochemicals—including flammable solvents (Class 3), high-hazard toxic industrial precursors (Class 6.1), and concentrated corrosive acids/alkalis (Class 8).
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                    Routes span the vital ARA (Antwerp-Rotterdam-Amsterdam) chemical cluster and the Rhine-Ruhr chemical basin, serving flagship production facilities at BASF Ludwigshafen, Covestro Leverkusen, and Ineos Antwerp. The position requires mastery of closed Vapor Recovery Systems (VRS), nitrogen blanketing techniques during high-purity product loading, and ATEX-certified bottom-loading valve telemetry.
                  </p>
                  {/* Critical Safety Directive Callout */}
                  <div className="bg-surface-container p-space-md rounded-xl">
                    <div className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">warning</span>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                          Critical Chemical Safety Directive
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Strict zero-tolerance safety protocol applies to all chemical transfers. Drivers must execute compulsory Level B/C chemical PPE donning, establish verified earthing/bonding interlocks prior to manifold connection, verify automated overfill sensor circuits, and adhere strictly to EU ADR Chapter 8.5 S2/S21 security regulations regarding hazardous cargo surveillance during transits.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Module 02: 5-Step Operational Timeline */}
                <section className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-surface-container-high">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-bold text-primary px-2 py-0.5 rounded bg-primary-fixed/30">
                        MODULE 02
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Chemical Loading, Transit &amp; Discharge Protocol
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary">alt_route</span>
                  </div>
                  <div className="space-y-space-md relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-surface-container-high">
                    {/* Step 1 */}
                    <div className="relative flex items-start gap-space-md pl-10">
                      <div className="absolute left-1.5 top-1 w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        1
                      </div>
                      <div className="flex-1 bg-surface-container-low p-space-md rounded-xl">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-headline-sm text-headline-sm text-on-surface">
                            Pre-Trip Inspection, ADR Kit &amp; Tank Integrity
                          </h4>
                          <span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                            05:30 – 07:00
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Verification of mandatory ADR equipment trunk: intrinsically safe lighting, wheel chocks, eye wash stations, Class-specific chemical spill kits, and dual 9kg dry-powder fire extinguishers. Inspection of tank pressure relief valves, emergency shear foot-valves, and seal certificates.
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex items-start gap-space-md pl-10">
                      <div className="absolute left-1.5 top-1 w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="flex-1 bg-surface-container-low p-space-md rounded-xl">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-headline-sm text-headline-sm text-on-surface">
                            Terminal Loading &amp; Nitrogen Blanketing
                          </h4>
                          <span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                            07:00 – 08:30
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Terminal check-in at Antwerp Port petrochemical gantry. Grounding interlock clamp attachment, dry-break coupler mating, vapor return arm connection, and tank purging with inert nitrogen blanket prior to bottom loading of Class 3 volatile chemical compounds.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex items-start gap-space-md pl-10">
                      <div className="absolute left-1.5 top-1 w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        3
                      </div>
                      <div className="flex-1 bg-surface-container-low p-space-md rounded-xl">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-headline-sm text-headline-sm text-on-surface">
                            Cross-Border Transit Leg (Antwerp ⇄ Rhine-Ruhr)
                          </h4>
                          <span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                            08:30 – 13:00
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Navigation via E313 / A44 corridor complying strictly with tunnel restrictions (Category B/D ADR routing). Real-time telemetry monitoring via Trimble onboard computer for surge dampening, tire pressure monitoring, and electronic seal validation.
                        </p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="relative flex items-start gap-space-md pl-10">
                      <div className="absolute left-1.5 top-1 w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        4
                      </div>
                      <div className="flex-1 bg-surface-container-low p-space-md rounded-xl">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-headline-sm text-headline-sm text-on-surface">
                            Mandatory 45-Min Rest at Guarded ADR Park
                          </h4>
                          <span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                            13:00 – 13:45
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Tachograph-mandated break conducted only at accredited TAPA-TSR Level 1 secure parking facility equipped with hazardous goods containment zones, perimeter beam detection, and 24/7 manned security watch.
                        </p>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="relative flex items-start gap-space-md pl-10">
                      <div className="absolute left-1.5 top-1 w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        5
                      </div>
                      <div className="flex-1 bg-surface-container-low p-space-md rounded-xl">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-headline-sm text-headline-sm text-on-surface">
                            Customer Site Discharge &amp; Tank Cleaning Handover
                          </h4>
                          <span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                            13:45 – 16:30
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Receiver verification, sampling lab sign-off, pneumatic pump discharge or pressure-drop offload, chemical line blowdown, manifold blank flanging, and EFTCO European Cleaning Document (ECD) generation at authorized wash bay.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Module 03: Vocational Licenses & Hazmat Equivalency */}
                <section className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-surface-container-high">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-bold text-primary px-2 py-0.5 rounded bg-primary-fixed/30">
                        MODULE 03
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Vocational Licenses &amp; Cross-Border Equivalencies
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary">badge</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {/* Germany & DACH */}
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">Germany &amp; DACH</h3>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
                            EU Standard
                          </span>
                        </div>
                        <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            Klasse CE Commercial Heavy Combination
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            ADR-Bescheinigung Tank (Klassen 3, 6.1, 8)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            FQN Schlüsselzahl 95 (BKrFQG compliance)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            Digitale Fahrerkarte (Smart Tacho Gen 2)
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 pt-2 border-t border-surface-container-high font-label-sm text-label-sm text-secondary font-medium">
                        Direct Conversion via BAM &amp; BAG Framework
                      </div>
                    </div>
                    {/* United Kingdom & Ireland */}
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">United Kingdom &amp; Ireland</h3>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
                            BBS Verified
                          </span>
                        </div>
                        <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            UK / Irish Category C+E (Articulated Rig)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            ADR Tank Driver Training Certificate
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            Driver Qualification Card (DQC / CPC)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            Digital Tachograph Smart Card
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 pt-2 border-t border-surface-container-high font-label-sm text-label-sm text-secondary font-medium">
                        Mutual Recognition Protocol (EU Transit Visa Supported)
                      </div>
                    </div>
                    {/* United States & Canada */}
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">United States &amp; Canada</h3>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
                            Endorsement X
                          </span>
                        </div>
                        <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            Commercial Driver License (CDL Class A)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            Endorsement N (Tank Vehicle) &amp; H (Hazmat)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            Combined X Endorsement (Tanker + Hazmat)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            TSA Security Threat Assessment Clearance
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 pt-2 border-t border-surface-container-high font-label-sm text-label-sm text-secondary font-medium">
                        Fast-Track EU ADR Practical Bridging Module
                      </div>
                    </div>
                    {/* European Union & Benelux */}
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">European Union &amp; Benelux</h3>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
                            Primary Baseline
                          </span>
                        </div>
                        <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            EU Category CE + Code 95 Endorsement
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            ADR Tankers Specialization (Classes 2 to 9)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            BBS (Behavior-Based Safety) Training Certificate
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                            Port of Antwerp Port Security Badge (Alfapass)
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 pt-2 border-t border-surface-container-high font-label-sm text-label-sm text-secondary font-medium">
                        Full Immediate Dispatch Authorization
                      </div>
                    </div>
                  </div>
                </section>

                {/* Module 04: Compensation, Allowances & Tariff Breakdown */}
                <section className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-surface-container-high">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-bold text-primary px-2 py-0.5 rounded bg-primary-fixed/30">
                        MODULE 04
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Compensation, Allowances &amp; Petrochemical CAO Tariff
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary">payments</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
                    <div className="p-space-md bg-surface-container-low rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[28px] mb-2">attach_money</span>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Tax-Free Per Diem</div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                        €55 – €85 <span className="font-normal text-body-sm text-on-surface-variant">/ day</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Exempt hazardous cargo duty meal and incidentals stipend.
                      </p>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[28px] mb-2">bed</span>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Dedicated High-Spec Rig</div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Assigned Unit</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Flame-retardant sleeper cab, inverter, parking cooler, microwave.
                      </p>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[28px] mb-2">hotel</span>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Night Rest Allowance</div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                        €45.00 <span className="font-normal text-body-sm text-on-surface-variant">/ cabin night</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Plus company-booked hotel for full 45-hour weekend resets.
                      </p>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[28px] mb-2">flight_takeoff</span>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Rotation Flights</div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Fully Covered</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Round-trip airport shuttles and economy flights for 3/1 rotation.
                      </p>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-space-md">
                    <div>
                      <div className="font-label-lg text-label-lg font-bold text-on-surface">
                        32 Days Paid Annual Leave + Chemical Industry Pension Scheme
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full social security coverage under Belgian/Dutch chemical logistics collective labor framework.
                      </p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-bold shadow-sm whitespace-nowrap">
                      CAO Scale 8 Verified
                    </span>
                  </div>
                </section>

                {/* Module 05: 3-Stage Selection Process */}
                <section className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-surface-container-high">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-bold text-primary px-2 py-0.5 rounded bg-primary-fixed/30">
                        MODULE 05
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Structured 3-Stage Selection &amp; Onboarding Process
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary">fact_check</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    <div className="p-space-md bg-surface-container-low rounded-xl relative">
                      <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary font-label-md text-label-md flex items-center justify-center font-bold mb-3">
                        1
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Credential Audit</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Instant verification of ADR tanker certs, tachograph card history, and clean driving abstract with national registries (BAM / RDW / DVLA).
                      </p>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl relative">
                      <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary font-label-md text-label-md flex items-center justify-center font-bold mb-3">
                        2
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Practical Assessment</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Half-day terminal simulator: dry-break coupling, bottom-loading rack sequencing, vapor hookup, and spill containment emergency drills.
                      </p>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl relative">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center font-bold mb-3">
                        3
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Safety Brief &amp; Rig Handover</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Antwerp hub safety induction, issuance of Class PPE suite, Trimble telematics login, and keys to your assigned dedicated tractor unit.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: 4 Columns Width (Sticky Application & Hazmat Intelligence Sidebar) */}
              <div className="lg:col-span-4 space-y-space-lg">
                {/* Sticky Application Form Card */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-md lg:sticky lg:top-20" id="application-form">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Fast-Track Driver Portal
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Dispatch Requisition Application</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Direct placement with certified chemical hauliers operating out of Antwerp and Rotterdam Europort.
                  </p>
                  <form
                    className="space-y-space-md"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                  >
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface mb-1">
                        Full Legal Name (as on Driving License)
                      </label>
                      <input
                        className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm"
                        placeholder="e.g. Marc Van Der Beek"
                        required
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                      <div>
                        <label className="block font-label-sm text-label-sm text-on-surface mb-1">Email Address</label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm"
                          placeholder="driver@logistics.com"
                          required
                          type="email"
                        />
                      </div>
                      <div>
                        <label className="block font-label-sm text-label-sm text-on-surface mb-1">Mobile / WhatsApp</label>
                        <input
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm"
                          placeholder="+32 490 00 00 00"
                          required
                          type="tel"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface mb-1">Active ADR Tanker Endorsement Classes</label>
                      <div className="grid grid-cols-3 gap-2">
                        <label className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm cursor-pointer hover:bg-surface-container">
                          <input defaultChecked className="accent-primary w-4 h-4" type="checkbox" /> Class 3
                        </label>
                        <label className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm cursor-pointer hover:bg-surface-container">
                          <input defaultChecked className="accent-primary w-4 h-4" type="checkbox" /> Class 6.1
                        </label>
                        <label className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm cursor-pointer hover:bg-surface-container">
                          <input defaultChecked className="accent-primary w-4 h-4" type="checkbox" /> Class 8
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface mb-1">Years of Liquid Tanker Experience</label>
                      <select
                        defaultValue="5 – 9 Years (ADR Liquid Bulk Specialists)"
                        className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm"
                      >
                        <option>2 – 4 Years (General Chemical Tankers)</option>
                        <option>5 – 9 Years (ADR Liquid Bulk Specialists)</option>
                        <option>10+ Years (Senior Lead Tanker Captain)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface mb-1">Upload ADR Certificate &amp; CV (PDF or JPG)</label>
                      <div className="p-space-md rounded-lg bg-surface-container-low text-center cursor-pointer hover:bg-surface-container transition-colors">
                        <span className="material-symbols-outlined text-[28px] text-primary">cloud_upload</span>
                        <p className="font-label-sm text-label-sm text-on-surface font-medium mt-1">Click to upload or drag files here</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">ADR Tanker Card, CE License, Code 95</p>
                      </div>
                    </div>
                    <label className="flex items-start gap-2 cursor-pointer pt-1">
                      <input className="accent-primary w-4 h-4 mt-0.5" required type="checkbox" />
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-[13px] leading-tight">
                        I declare that my ADR Tanker Certificate is valid for minimum 6+ months and free of major infractions.
                      </span>
                    </label>
                    <button
                      className="w-full py-3 px-space-md rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-container shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Submit ADR Certified Application
                    </button>
                    {/* Success Feedback Container */}
                    {formSubmitted && (
                      <div className="p-space-sm rounded-lg bg-primary-fixed/40 text-on-primary-fixed font-body-sm text-body-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                        Application dispatched to Antwerp Fleet Ops. You will receive an SMS confirmation.
                      </div>
                    )}
                  </form>
                  <div className="mt-space-md pt-space-sm border-t border-surface-container-high flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                      GDPR &amp; Safe2Transport Secure
                    </span>
                    <span>Response within 24 Hours</span>
                  </div>
                </div>

                {/* Terminal Dispatch Director Quote */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-space-sm">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        alt="Close-up professional portrait of Marc Van De Velde, Dutch senior terminal dispatch director in navy uniform with high-visibility accents, smiling confidently with maritime chemical storage terminal background in Antwerp harbor."
                        src="/marc-vandevelde.jpg"
                      />
                    </div>
                    <div>
                      <div className="font-label-lg text-label-lg font-bold text-on-surface">Marc Van De Velde</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Fleet Logistics Lead, DSV Chemical Europe</div>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                    &quot;Operating in the Antwerp petrochemical basin requires elite operators who treat safety manuals as sacred. In return, we provide unmatched equipment, top-tier compensation, and respect for mandatory rest intervals.&quot;
                  </p>
                </div>

                {/* Corridor Technical Parameters Card */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">analytics</span>
                    Corridor Technical Parameters
                  </h4>
                  <div className="space-y-space-sm text-body-sm">
                    <div className="flex justify-between items-center py-1 border-b border-surface-container-high">
                      <span className="text-on-surface-variant">Corridor Length</span>
                      <span className="font-semibold text-on-surface">680 km (Antwerp ⇄ Ludwigshafen)</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-surface-container-high">
                      <span className="text-on-surface-variant">Payload Capacity</span>
                      <span className="font-semibold text-on-surface">28.5 tonnes liquid bulk</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-surface-container-high">
                      <span className="text-on-surface-variant">Vessel Tank Type</span>
                      <span className="font-semibold text-on-surface">316L Stainless 4-Compartment</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-surface-container-high">
                      <span className="text-on-surface-variant">Sensor Telematics</span>
                      <span className="font-semibold text-on-surface">ATEX Zone 1 GPS &amp; Tank Pressure</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-on-surface-variant">Port Security Alfapass</span>
                      <span className="font-semibold text-primary">Issued Upon Sign-On</span>
                    </div>
                  </div>
                  {/* Location Map Visual */}
                  <div className="mt-space-md rounded-xl overflow-hidden shadow-inner">
                    <div
                      className="w-full h-40 bg-cover bg-center flex items-end p-2"
                      data-location="Port of Antwerp-Bruges, Belgium"
                      style={{
                        backgroundImage: "url('/antwerp-map.jpg')",
                      }}
                    >
                      <span className="px-2 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm font-semibold shadow-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-primary">pin_drop</span>
                        Antwerp Europort Dock Hub
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
