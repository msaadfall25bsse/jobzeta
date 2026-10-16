"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeniorScaffoldingSuperintendentJobPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "8-12",
    credential: "meister",
    visaStatus: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setModalOpen(true);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)] flex-1">
        <div className="flex flex-col w-full">
          {/* Role Status Bar & Meta Ribbon */}
          <div className="w-full bg-surface-container-low py-space-sm px-margin-mobile lg:px-margin">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              {/* Breadcrumb navigation */}
              <nav className="flex items-center gap-space-xs text-on-surface-variant flex-wrap">
                <Link className="font-label-sm text-label-sm hover:text-primary transition-colors" href="/">
                  Home
                </Link>
                <span className="text-outline-variant font-label-sm text-label-sm">/</span>
                <Link className="font-label-sm text-label-sm hover:text-primary transition-colors" href="/categories">
                  Categories
                </Link>
                <span className="text-outline-variant font-label-sm text-label-sm">/</span>
                <Link
                  className="font-label-sm text-label-sm hover:text-primary transition-colors"
                  href="/categories/trades-and-construction"
                >
                  Trades &amp; Construction
                </Link>
                <span className="text-outline-variant font-label-sm text-label-sm">/</span>
                <Link
                  className="font-label-sm text-label-sm hover:text-primary transition-colors"
                  href="/categories/trades-and-construction/scaffolding-and-rigging"
                >
                  Scaffolding &amp; Rigging
                </Link>
                <span className="text-outline-variant font-label-sm text-label-sm">/</span>
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  Full Operational Handbook
                </span>
              </nav>

              {/* Operational Tags & Quick Link */}
              <div className="flex items-center gap-space-md flex-wrap">
                <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-space-xs rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-label-sm text-label-sm font-bold text-secondary">
                    ROLE ID: JOB-SCAFF-HAM-7712
                  </span>
                </div>
                <span className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                  IG BAU / BZB Collective Agreement (Tarifvertrag Gerüstbau)
                </span>
                <Link
                  className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-secondary hover:text-primary transition-colors"
                  href="/categories/trades-and-construction/scaffolding-and-rigging"
                >
                  <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                  Back to Overview
                </Link>
              </div>
            </div>
          </div>

          {/* Role Header Title & Remuneration Scale Bar */}
          <div className="w-full bg-surface-container-lowest py-space-lg px-margin-mobile lg:px-margin shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <div className="flex items-center gap-space-sm flex-wrap">
                  <span className="px-space-sm py-space-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    Active High-Risk Access Gateway
                  </span>
                  <span className="px-space-sm py-space-xs rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
                    DIN EN 12810 / 12811 Directives
                  </span>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                    DGUV 201-011 Freigabeschein
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">
                  Senior Industrial Scaffolding Superintendent &amp; Lead Rigging Engineer
                </h1>
                <div className="flex items-center gap-space-md flex-wrap text-on-surface-variant pt-space-xs font-body-sm text-body-sm">
                  <span className="inline-flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                    Hamburg Port Mega-Terminal &amp; Petrochemical Complex (On-Site)
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="inline-flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                    Full-Time (38.5 hrs/week - German Construction Tariff)
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="inline-flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">badge</span>
                    Certified Gerüstbauermeister / CISRS Advanced Supervisor
                  </span>
                </div>
              </div>

              {/* Top Right Salary Scale Box */}
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs lg:min-w-[320px] shadow-sm">
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">
                  Tariff Remuneration Scale
                </span>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-headline-lg text-headline-lg text-secondary font-bold">
                    €64,000 – €88,000
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/ yr gross</span>
                </div>
                <p className="font-label-md text-label-md text-primary font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">add_circle</span>
                  +20% Extreme Height &amp; Petrochemical Multiplier
                </p>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Includes fully-equipped field transit, relocation package &amp; SOKA-GERÜSTBAU benefits
                </span>
              </div>
            </div>
          </div>

          {/* Hero Mega-Project Operational Banner */}
          <div className="w-full px-margin-mobile lg:px-margin py-space-lg">
            <div className="max-w-7xl mx-auto relative rounded-xl overflow-hidden shadow-md">
              {/* Full-bleed photo banner with gradient overlay */}
              <div
                className="w-full bg-cover bg-center min-h-[440px] flex flex-col justify-end p-space-lg lg:p-space-xl relative"
                style={{ backgroundImage: "url('/hamburg-scaffolding-hero.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-md max-w-4xl text-on-primary">
                  <div className="inline-flex items-center gap-space-xs bg-primary/90 px-space-sm py-space-xs rounded-full w-max text-on-primary backdrop-blur-md">
                    <span className="material-symbols-outlined text-[16px]">domain</span>
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Mega-Project Industrial Access Package 08 – Hamburg Expansion
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold tracking-tight">
                    Hamburg 85m Industrial Petrochemical Column – Complex Cantilevered System Scaffolding &amp; 60t Vessel Rigging
                  </h2>
                  <p className="font-body-md text-body-md text-inverse-on-surface/90 leading-relaxed max-w-3xl">
                    Lead high-angle structural access execution across multi-tier Layher Allround modular scaffolding, heavy underslung bridge cradles, and dual-crane heavy rigging over tidal marine waterways adhering strictly to DIN EN 12810/12811, DGUV 201-011, and European working-at-heights directives.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <div className="flex items-center gap-space-xs bg-surface-container-lowest/20 backdrop-blur-md px-space-sm py-space-xs rounded-lg text-surface-bright font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">speed</span>
                      <span>100% Fall Arrest &amp; Anchor Pull-Test Audit</span>
                    </div>
                    <div className="flex items-center gap-space-xs bg-surface-container-lowest/20 backdrop-blur-md px-space-sm py-space-xs rounded-lg text-surface-bright font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">verified_user</span>
                      <span>DIN EN 12810 / 12811 &amp; DGUV 201-011</span>
                    </div>
                    <div className="flex items-center gap-space-xs bg-surface-container-lowest/20 backdrop-blur-md px-space-sm py-space-xs rounded-lg text-surface-bright font-label-md text-label-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">engineering</span>
                      <span>Level 4 Certified Rigging &amp; Access Director</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md pt-space-sm flex-wrap">
                    <span className="font-label-sm text-label-sm text-inverse-on-surface/70">
                      SOP Reference: SOP-SCAFF-HAM-DE-2025-V4
                    </span>
                    <span className="text-inverse-on-surface/50">•</span>
                    <button
                      className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary-fixed hover:underline cursor-pointer"
                      onClick={() => window.print()}
                    >
                      <span className="material-symbols-outlined text-[16px]">print</span>
                      Print Field SOP
                    </button>
                    <span className="text-inverse-on-surface/50">•</span>
                    <a
                      className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary-fixed hover:underline"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      Download Technical PDF (14.2 MB)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Content & Sticky Right Sidebar Layout */}
          <div className="w-full px-margin-mobile lg:px-margin pb-space-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              {/* Left Main Body Column (8 Cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* Section 01: Complete Role Overview & Operational Safety Governance */}
                <section className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                        01
                      </div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Complete Role Overview &amp; Operational Safety Governance
                      </h2>
                    </div>
                    <span className="hidden sm:inline-block font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                      Superintendent Directives
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    As the Senior Industrial Scaffolding Superintendent and Lead Rigging Engineer on Site Package 08, you command a dedicated site operations force of 24 licensed industrial scaffolders, advanced riggers, and crane slingers. You are statutorily responsible for the design integrity, statutory hand-over approvals (<span className="font-semibold text-on-surface">Freigabeschein / Scafftag</span>), and flawless structural load management across all elevated modular scaffold structures, suspended hanging gantries, and tandem vessel lifts.
                  </p>

                  {/* 4 Feature Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">air</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Digital Wind Telemetry &amp; Structural Load Modeling
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Live anemometer telemetry integration across the 85-meter vertical column, calculating dynamic wind gust pressures and tie load tolerances via RSTAB and digital structural calculation logs.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-lowest text-secondary flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        DGUV 201-011 &amp; Statutory German Protocols
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Strict adherence to the German statutory scaffolding health and safety directives, daily electronic green Freigabeschein logging, load class 4/5 zoning, and hazardous substance containment seals.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Anchor Pull-Testing &amp; Tie Integrity
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Calibrated hydraulic pull-tester proofing to 15kN per M16 tie-in anchor against concrete foundations and structural steel gusset clamps with 100% digital trace compliance logs.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-lowest text-secondary flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">crisis_alert</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        High-Angle Industrial Rescue Readiness
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Emergency evacuation leadership over tidal waterways, maintaining dedicated inertia reel descent kits, basket stretchers, and direct telemetry links with the Hamburg Harbour Fire Brigade.
                      </p>
                    </div>
                  </div>

                  {/* Critical Safety Alert Banner */}
                  <div className="bg-primary/10 rounded-xl p-space-md flex flex-col sm:flex-row items-start gap-space-md">
                    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <span className="font-label-lg text-label-lg text-primary font-bold uppercase tracking-wider">
                        Critical Safety Directive: Zero-Tolerance 100% Dual-Lanyard Tie-Off &amp; Tidal Water Rescue
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                        All scaffolders operating beyond 2.0m deck elevations or across external cantilevered spurs are mandated to maintain 100% continuous twin shock-absorbing lanyard attachment. Working above tidal quaysides triggers automatic deployment of certified self-inflating 275N ISO life vests with high-angle rescue winches on permanent continuous standby.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 02: Detailed Daily Site Rigging Directives & Operational Sequence */}
                <section className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                        02
                      </div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Detailed Daily Site Rigging Directives &amp; Operational Sequence
                      </h2>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">
                      Shift: 06:00 – 17:00 CET
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Standard operational shift breakdown for the Lead Rigging Superintendent across structural erection, marine vessel rigging, and daily handover approvals:
                  </p>

                  {/* Timeline Sequence Cards */}
                  <div className="flex flex-col gap-space-md">
                    {/* Step 01 */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-center gap-space-sm">
                          <span className="px-space-sm py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">
                            Step 01
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Pre-Shift Weather, Anemometer &amp; Anchor Pull-Test Validation
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">06:00 – 07:15 CET</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Conduct high-altitude anemometer calibration on the 85m column sensor. Confirm wind gusts remain strictly under 10.0 m/s for crane hoists and 15.0 m/s for general deck assembly. Perform 5% random hydraulic pull-testing on wall anchor ties installed during previous shift and inspect tidal swell forecasts.
                      </p>
                      <div className="flex items-center gap-space-xs pt-space-xs text-tertiary font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                        <span>Deliver safety toolbox talk to 24 crew members and inspect individual full-body harness CE markings.</span>
                      </div>
                    </div>

                    {/* Step 02 */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-center gap-space-sm">
                          <span className="px-space-sm py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">
                            Step 02
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Layher Allround Node Erection &amp; Cantilevered Outrigger Placement
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">07:15 – 11:30 CET</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Supervise modular standard connections from Level 12 to Level 18. Ensure rosettes are wedged with dead-blow mallets to exact mechanical lock torque. Position heavy lattice steel girder outriggers on exterior spurs to clear process pipe manifolds while preserving structural counterweight ballast.
                      </p>
                      <div className="flex items-center gap-space-xs pt-space-xs text-tertiary font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                        <span>Validate double-ledger clamp tightness and verify toe-board gap does not exceed 10mm.</span>
                      </div>
                    </div>

                    {/* Step 03 */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-center gap-space-sm">
                          <span className="px-space-sm py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">
                            Step 03
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            60-Tonne Petrochemical Vessel Rigging &amp; Tandem Hoist Coordination
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">11:30 – 13:45 CET</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Direct lead crane slingers and tandem 500t mobile crane operators. Verify spreader beam equalizer angles, shackle torque pins, synthetic round slings, and wireless load-cell readouts prior to primary lift off the quayside barge into the secondary scaffold support cradle.
                      </p>
                      <div className="flex items-center gap-space-xs pt-space-xs text-tertiary font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                        <span>Dedicated UHF radio channel lockout (Channel 4 Alpha) reserved exclusively for hoist director.</span>
                      </div>
                    </div>

                    {/* Step 04 */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-center gap-space-sm">
                          <span className="px-space-sm py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">
                            Step 04
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Suspended Cradle Dewatering &amp; Structural Deflection Audit
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">13:45 – 15:30 CET</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Perform optical laser total-station deflection surveys across underslung bridge cradles. Verify deck load distributions (maximum 4.5 kN/m² limit), ensure self-draining deck grates remain unobstructed, and inspect all secondary safety wire fall arrest backup blocks.
                      </p>
                      <div className="flex items-center gap-space-xs pt-space-xs text-tertiary font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                        <span>Ensure high-visibility windsock alignments match anemometer digital telemetry values.</span>
                      </div>
                    </div>

                    {/* Step 05 */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-center gap-space-sm">
                          <span className="px-space-sm py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">
                            Step 05
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Daily Scafftag (Freigabeschein) Inspection &amp; Storm LOTO Sign-Off
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">15:30 – 17:00 CET</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Inspect every active access portal across all 28 vertical scaffold decks. Sign and physically insert updated green <span className="font-semibold text-on-surface">Freigabeschein</span> tags into entry cassettes. Lockout non-commissioned ladders, anchor all hoist cables, and submit digital logs to the Bilfinger Project Cloud.
                      </p>
                      <div className="flex items-center gap-space-xs pt-space-xs text-tertiary font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                        <span>Final electronic verification transmitted directly to BG BAU and Hamburg Port Authority inspectors.</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 03: Vocational Qualifications & Statutory Licensing Equivalence */}
                <section className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                        03
                      </div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Vocational Qualifications &amp; Statutory Licensing Equivalence
                      </h2>
                    </div>
                    <span className="hidden sm:inline-block font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                      Cross-Border Directives
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Jobzeta provides certified license reciprocity for top-tier master riggers across European and global trade jurisdictions. Candidates possessing any of the following credentials qualify for fast-track mobilization:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {/* Germany / DACH */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg font-bold text-on-surface">Germany &amp; DACH</span>
                        <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                        Gerüstbauermeister / Geprüfter Gerüstbau-Kolonnenführer
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        HWK Master Craftsman Diploma or BG BAU certified scaffolding column leader with minimum 5 years verified large-scale industrial petrochemical or bridge experience.
                      </p>
                    </div>

                    {/* UK & Commonwealth */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg font-bold text-on-surface">UK &amp; Ireland</span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                        CISRS Advanced Scaffolder Gold Card &amp; Advanced Rigging NVQ L3
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Full CISRS Advanced ticket with accredited Scaffolding Supervisor Endorsement, Appointed Person A61 lifting qualification, and CCNSG Safety Passport.
                      </p>
                    </div>

                    {/* North America */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg font-bold text-on-surface">USA &amp; Canada</span>
                        <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                        NCCCO Certified Master Rigger &amp; UBC Journeyman Scaffolder
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        OSHA 1926 Subpart L (Scaffolds) &amp; Subpart CC Competent Person, NCCCO Advanced Rigging certification, and minimum 7 years complex industrial plant turnaround tenure.
                      </p>
                    </div>

                    {/* Global & Rope Access */}
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg font-bold text-on-surface">European &amp; International</span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                        IRATA / SPRAT Level 3 Safety Supervisor &amp; ISO 22846 Lead
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Master high-angle technician with deep rigging knowledge, confined space rescue certification (DGUV 113-004), and heavy lifting plan authoring mastery.
                      </p>
                    </div>
                  </div>

                  {/* Mandatory Technical Competencies */}
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
                    <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                      Mandatory Field Competency Matrix
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                      <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
                        <span>Layher Allround, Blitz &amp; TG 60 Falsework Systems</span>
                      </div>
                      <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
                        <span>Tandem 500-Tonne Crane Rigging &amp; Sling Angle Geometry</span>
                      </div>
                      <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
                        <span>German Technical Language Working Proficiency (B1/B2)</span>
                      </div>
                      <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
                        <span>High-Altitude Medical Clearance (G41 Arbeiten mit Absturzgefahr)</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 04: Compensation, Allowances & German Construction Tariff */}
                <section className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                        04
                      </div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Compensation, Allowances &amp; German Construction Tariff
                      </h2>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      Bundesrahmentarifvertrag Gerüstbau
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Full compliance with the statutory collective wage agreement (<span className="italic">Tarifvertrag für das Gerüstbauer-Handwerk</span>), structured to provide best-in-class security, per-diem allowances, and longevity benefits:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-semibold">
                        Monthly Tariff Base
                      </span>
                      <span className="font-headline-lg text-headline-lg text-secondary font-bold">
                        €5,330 – €7,330
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Gross base depending on certified Meister tenure
                      </span>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-semibold">
                        Height &amp; Hazard Multiplier
                      </span>
                      <span className="font-headline-lg text-headline-lg text-primary font-bold">+20% Gross</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Applied automatically for works exceeding 50m over water
                      </span>
                    </div>

                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-semibold">
                        Monthly Field Per Diem
                      </span>
                      <span className="font-headline-lg text-headline-lg text-on-surface font-bold">€1,450 Net</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Tax-exempt Auslösung allowance for living &amp; meals
                      </span>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                      <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">
                        flight_takeoff
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          Relocation Support &amp; Corporate Flat
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          €3,800 relocation grant plus 3 months of fully-serviced private accommodation in central Hamburg.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                      <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">
                        handyman
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          High-Angle Tooling Allowance
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          €1,200 annual budget for certified tethered spanners, Stabila levels, and Leica digital distance meters.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                      <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">
                        beach_access
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          30 Days Vacation &amp; SOKA-GERÜSTBAU
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Comprehensive statutory holiday pay protection and employer-funded sector retirement insurance.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                      <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">
                        school
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          Advanced Rigging Masterclasses
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Fully-paid annual training sponsorships including DGUV Prüfer, IRATA upgrade, and BIM Scaffolding software.
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 05: Transparent 3-Step Selection & Safety Evaluation */}
                <section className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                  <div className="flex items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                        05
                      </div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Transparent 3-Step Selection &amp; Safety Evaluation
                      </h2>
                    </div>
                    <span className="hidden sm:inline-block font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                      Fast-Track Onboarding
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    {/* Step 1 */}
                    <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                          1
                        </span>
                        <span className="font-label-sm text-label-sm text-tertiary font-semibold">24-48 Hours</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">
                        Fast-Track License Verification
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Our credential engineering team audits your Gerüstbauermeister, CISRS Gold, or NCCCO credentials via direct institutional verification APIs.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                          2
                        </span>
                        <span className="font-label-sm text-label-sm text-tertiary font-semibold">45-Minute Session</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">
                        Technical Rigging Deep Dive
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Live technical remote session with the Hamburg Construction Director reviewing 3D Layher models, tie spacing calculations, and complex tandem lift plans.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                          3
                        </span>
                        <span className="font-label-sm text-label-sm text-tertiary font-semibold">On-Site Hamburg</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">
                        Site Walk &amp; Mockup Erection Test
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        All-expenses-paid day visit to Hamburg Port for safety medical clearance (G41), site harbor inspection, and meeting with your future rigging crew leads.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Sticky Application Sidebar (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-lg" id="fast-track-apply">
                {/* Application Sticky Form Card */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm lg:sticky lg:top-24 flex flex-col gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <span className="px-space-sm py-space-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold w-max uppercase tracking-wider">
                      Priority Application
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Apply for Senior Industrial Scaffolding Superintendent
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Submit your vocational credentials for direct review by the Hamburg Project Operations Command. Fast-track feedback in under 24 hours.
                    </p>
                  </div>

                  {/* Application Form */}
                  <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="full-name">
                        Full Legal Name *
                      </label>
                      <input
                        className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm shadow-sm"
                        id="full-name"
                        placeholder="e.g. Marcus H. Weber"
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="work-email">
                        Work / Official Email *
                      </label>
                      <input
                        className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm shadow-sm"
                        id="work-email"
                        placeholder="m.weber@rigging-pro.de"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="phone-number">
                        Mobile / WhatsApp (with country code) *
                      </label>
                      <input
                        className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm shadow-sm"
                        id="phone-number"
                        placeholder="+49 171 000 0000"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="experience-tier">
                        Experience Tier *
                      </label>
                      <select
                        className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm shadow-sm"
                        id="experience-tier"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      >
                        <option value="5-8">5 - 8 Years Industrial Scaffolding Leadership</option>
                        <option value="8-12">8 - 12 Years Master Superintendent / Turnaround</option>
                        <option value="12+">12+ Years Lead Structural Access &amp; Heavy Rigging</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="primary-credential">
                        Primary Registered Credential *
                      </label>
                      <select
                        className="w-full h-11 px-space-sm rounded-lg bg-surface text-on-surface border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm shadow-sm"
                        id="primary-credential"
                        value={formData.credential}
                        onChange={(e) => setFormData({ ...formData, credential: e.target.value })}
                      >
                        <option value="meister">Gerüstbauermeister (HWK / Handwerkskammer)</option>
                        <option value="cisrs">CISRS Advanced Scaffolder Gold &amp; Supervisor</option>
                        <option value="nccco">NCCCO Master Rigger &amp; UBC Journeyman</option>
                        <option value="irata3">IRATA Level 3 Rope Access Supervisor</option>
                        <option value="other">Other European Reciprocal Certificate</option>
                      </select>
                    </div>

                    {/* CV Upload Zone */}
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                        CV &amp; Scaffolding License (PDF, max 15MB)
                      </label>
                      <div className="p-space-md rounded-xl bg-surface flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[28px] mb-space-xs">upload_file</span>
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Click to attach trade certificates
                        </span>
                        <span className="font-label-xs text-[11px] text-tertiary">
                          Accepted: PDF, DOCX, ZIP files up to 15MB
                        </span>
                      </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-space-xs pt-space-xs">
                      <input
                        className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-0 bg-surface shadow-sm"
                        id="visa-status"
                        required
                        type="checkbox"
                        checked={formData.visaStatus}
                        onChange={(e) => setFormData({ ...formData, visaStatus: e.target.checked })}
                      />
                      <label className="font-label-sm text-label-sm text-on-surface-variant leading-tight" htmlFor="visa-status">
                        I hold valid EU / EEA citizenship or a valid European Blue Card working permit for Germany.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      className="w-full py-space-sm px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-sm transition-colors mt-space-xs cursor-pointer"
                      type="submit"
                    >
                      <span>Submit Certified Application</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </button>
                  </form>

                  {/* Success Alert Message */}
                  {submitted && (
                    <div className="p-space-sm rounded-lg bg-primary/10 text-primary flex items-center gap-space-xs" id="apply-success-msg">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span className="font-body-sm text-body-sm font-semibold">
                        Credentials logged successfully! A recruiter will contact you within 24 hours.
                      </span>
                    </div>
                  )}

                  {/* Site Operations Director Quote Card */}
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm mt-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <div
                        className="w-12 h-12 rounded-full bg-cover bg-center flex-shrink-0 shadow-sm"
                        style={{ backgroundImage: "url('/jurgen-falkner.jpg')" }}
                      ></div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">Jürgen Falkner</span>
                        <span className="font-label-sm text-label-sm text-tertiary">
                          Executive Project Director, Hamburg Expansion
                        </span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                      &quot;Working 85 meters above the Elbe tidal basin requires uncompromising structural mastery and clear operational discipline. Our team provides the highest industry safety standards and top tariff remuneration across Europe.&quot;
                    </p>
                  </div>

                  {/* Site Technical Parameters Card */}
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                      Site Technical Parameters
                    </span>
                    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm py-space-xs">
                      <span>Maximum Scaffold Height:</span>
                      <span className="font-semibold text-on-surface">85 Meters</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm py-space-xs">
                      <span>Total Scaffold Steel:</span>
                      <span className="font-semibold text-on-surface">420 Tonnes</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm py-space-xs">
                      <span>Heavy Vessel Rigging Weight:</span>
                      <span className="font-semibold text-on-surface">60 Tonnes</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm py-space-xs">
                      <span>Safety Record Standard:</span>
                      <span className="font-semibold text-primary">Zero Lost-Time Incidents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Submission Success Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm">
              <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl space-y-space-md">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[32px]">check_circle</span>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Superintendent Application Transmitted
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Your credentials have been securely routed to the Hamburg Port Operations Command &amp; Bilfinger Consortium review panel under Reference #HAM-7712-SCAFF.
                  </p>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-xl text-left space-y-2">
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Priority Review Window:</span>
                    <strong className="text-primary">Under 24 Hours</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Lead Reviewer:</span>
                    <strong>Jürgen Falkner (Executive Project Director)</strong>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
                    <span>Status:</span>
                    <span className="inline-flex items-center gap-1 text-primary font-bold">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      Queued for Credential Audit
                    </span>
                  </div>
                </div>
                <button
                  className="w-full py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold transition-colors cursor-pointer"
                  onClick={() => setModalOpen(false)}
                >
                  Return to Operational Handbook
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
