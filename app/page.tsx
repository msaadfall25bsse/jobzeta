"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchKeywords, setSearchKeywords] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [alertKeyword, setAlertKeyword] = useState("");
  const [alertEmail, setAlertEmail] = useState("");

  // Categories Carousel Data
  const categoriesData = [
    {
      id: "trades-construction",
      number: "01",
      badgeText: "High-Demand Global Craft",
      title: "Trades & Construction",
      tagline: "Building tomorrow's infrastructure with master craftsmen",
      description:
        "Industrial electricians, certified welders, plumbers, and heavy equipment operators shaping global physical infrastructure and energy facilities.",
      icon: "construction",
      openings: "14,840+ Active Roles",
      avgSalary: "€48,000 - €95,000 / yr",
      visaSponsorship: "64% Visa Sponsorship",
      specialties: [
        "Industrial Electrician",
        "Coded Welder",
        "Commercial HVAC",
        "Heavy Plant Rigger",
      ],
      badgeColor: "bg-primary/20 text-primary-fixed border border-primary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Skilled construction worker and welder working on modern industrial infrastructure with spark illumination",
      link: "/categories/trades-and-construction",
    },
    {
      id: "driving-logistics",
      number: "02",
      badgeText: "Cross-Border Supply Chain",
      title: "Driving & Logistics",
      tagline: "Keeping global trade moving on highways and intermodal corridors",
      description:
        "Long-haul CDL operators, route parcel couriers, and cold-chain freight specialists connecting global ports to domestic distribution hubs.",
      icon: "local_shipping",
      openings: "18,450+ Active Roles",
      avgSalary: "$58,000 - $88,000 / yr",
      visaSponsorship: "58% Visa Sponsorship",
      specialties: [
        "CDL-A Long Haul",
        "Fleet Route Drivers",
        "Cold-Chain Fleet",
        "Yard Hostlers",
      ],
      badgeColor:
        "bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Heavy commercial logistics truck driving on a modern highway at sunrise",
      link: "/find-jobs",
    },
    {
      id: "agriculture-farming",
      number: "03",
      badgeText: "Agri-Tech & Sustainable Food",
      title: "Agriculture & Farming",
      tagline: "Sustainable food systems, modern agri-tech, and seasonal harvests",
      description:
        "Commercial greenhouse technicians, precision GPS tractor operators, and agronomy leads advancing resilient food production worldwide.",
      icon: "agriculture",
      openings: "9,340+ Active Roles",
      avgSalary: "$32,000 - $55,000 / yr",
      visaSponsorship: "78% Visa Sponsorship",
      specialties: [
        "Hydroponics Tech",
        "Tractor Operators",
        "Agronomy Leads",
        "Irrigation Specialists",
      ],
      badgeColor: "bg-primary/20 text-primary-fixed border border-primary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Modern high-tech agricultural farm field with sustainable irrigation and tractors at golden hour",
      link: "/categories/agriculture-and-farming",
    },
    {
      id: "household-domestic",
      number: "04",
      badgeText: "Private Estate & Family Care",
      title: "Household & Domestic Services",
      tagline: "Trusted residential support, family care, and estate management",
      description:
        "Estate managers, domestic culinary chefs, executive housekeepers, and specialized caregivers delivering reliable and discreet in-home care.",
      icon: "home_repair_service",
      openings: "7,110+ Active Roles",
      avgSalary: "$35,000 - $65,000 / yr",
      visaSponsorship: "52% Visa Sponsorship",
      specialties: [
        "Estate Managers",
        "Private Caregivers",
        "Executive Chefs",
        "Housekeepers",
      ],
      badgeColor:
        "bg-tertiary-fixed/20 text-tertiary-fixed border border-tertiary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Professional domestic housekeeper maintaining high-end residential interiors",
      link: "/find-jobs",
    },
    {
      id: "healthcare-medical",
      number: "05",
      badgeText: "Critical Clinical Care",
      title: "Healthcare & Medical",
      tagline: "Compassionate bedside healing and clinical diagnostics",
      description:
        "ICU registered nurses, medical laboratory scientists, ultrasound technicians, and physical therapists filling vital healthcare needs.",
      icon: "medical_services",
      openings: "22,900+ Active Roles",
      avgSalary: "$70,000 - $115,000 / yr",
      visaSponsorship: "82% Visa Sponsorship",
      specialties: [
        "ICU & ER Nurses",
        "Radiology Techs",
        "Physical Therapists",
        "Lab Scientists",
      ],
      badgeColor: "bg-primary/20 text-primary-fixed border border-primary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Healthcare doctor and registered nurse in medical attire reviewing diagnostics",
      link: "/find-jobs",
    },
    {
      id: "warehouse-assembly",
      number: "06",
      badgeText: "Automated Fulfillment Systems",
      title: "Warehouse & Assembly",
      tagline: "Automated fulfillment, inventory control, and precision manufacturing",
      description:
        "High-reach forklift drivers, QA inspection technicians, and robotic cell operators ensuring continuous fulfillment velocity.",
      icon: "conveyor_belt",
      openings: "16,840+ Active Roles",
      avgSalary: "$38,000 - $54,000 / yr",
      visaSponsorship: "46% Visa Sponsorship",
      specialties: [
        "Forklift Operators",
        "Inventory Leads",
        "Robotics Staff",
        "Assembly Techs",
      ],
      badgeColor:
        "bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Modern logistics warehouse fulfillment center with workers handling automated goods packaging",
      link: "/find-jobs",
    },
    {
      id: "hospitality-food",
      number: "07",
      badgeText: "Global Culinary & Tourism",
      title: "Hospitality & Food Service",
      tagline: "Culinary artistry, luxury resort operations, and guest experiences",
      description:
        "Executive sous chefs, front-of-house hotel concierges, and luxury resort supervisors delivering distinguished culinary hospitality.",
      icon: "restaurant",
      openings: "13,290+ Active Roles",
      avgSalary: "$34,000 - $68,000 / yr",
      visaSponsorship: "61% Visa Sponsorship",
      specialties: [
        "Executive Chefs",
        "Hotel Concierges",
        "Banquet Leads",
        "Resort Supervisors",
      ],
      badgeColor: "bg-primary/20 text-primary-fixed border border-primary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Chef plating exquisite culinary dish in an upscale modern restaurant kitchen",
      link: "/find-jobs",
    },
    {
      id: "information-technology",
      number: "08",
      badgeText: "Next-Gen Software & Cloud",
      title: "Information Technology",
      tagline: "Cloud computing, cybersecurity, and full-stack software systems",
      description:
        "Cloud DevOps architects, full-stack engineers, and cybersecurity specialists engineering scalable global digital products.",
      icon: "terminal",
      openings: "31,400+ Active Roles",
      avgSalary: "$85,000 - $145,000 / yr",
      visaSponsorship: "71% Visa Sponsorship",
      specialties: [
        "DevOps & Cloud",
        "Full-Stack Engineers",
        "Cybersecurity",
        "Data Engineers",
      ],
      badgeColor:
        "bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Software developer writing code on multiple high-res monitors in tech office",
      link: "/find-jobs",
    },
    {
      id: "engineering-technical",
      number: "09",
      badgeText: "Advanced Engineering Solutions",
      title: "Engineering & Technical",
      tagline: "Mechanical innovation, civil structures, and renewable energy grids",
      description:
        "Civil structural engineers, electrical grid designers, and automation integrators engineering sustainable municipal infrastructure.",
      icon: "settings",
      openings: "11,620+ Active Roles",
      avgSalary: "$78,000 - $120,000 / yr",
      visaSponsorship: "68% Visa Sponsorship",
      specialties: [
        "Civil Structural",
        "Electrical Grids",
        "Automation Integrators",
        "CAD Designers",
      ],
      badgeColor: "bg-primary/20 text-primary-fixed border border-primary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Female robotics engineer calibrating advanced robotic hardware in high-tech laboratory",
      link: "/find-jobs",
    },
    {
      id: "business-admin-hr",
      number: "10",
      badgeText: "Corporate & Financial Operations",
      title: "Business, Admin & HR",
      tagline: "Corporate operations, talent strategy, financial stewardship",
      description:
        "Financial analysts, global recruitment leads, payroll directors, and operations managers leading cross-functional enterprise teams.",
      icon: "analytics",
      openings: "15,800+ Active Roles",
      avgSalary: "$60,000 - $105,000 / yr",
      visaSponsorship: "49% Visa Sponsorship",
      specialties: [
        "HR Business Partners",
        "Financial Analysts",
        "Operations Leads",
        "Compliance Officers",
      ],
      badgeColor:
        "bg-tertiary-fixed/20 text-tertiary-fixed border border-tertiary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Modern executive office boardroom with collaborative professionals working",
      link: "/find-jobs",
    },
    {
      id: "retail-support",
      number: "11",
      badgeText: "Customer Experience & Retail",
      title: "Retail & Customer Support",
      tagline: "Omnichannel customer care, visual merchandising, and client success",
      description:
        "Store managers, technical support specialists, and multilingual client service leads providing world-class customer satisfaction.",
      icon: "support_agent",
      openings: "19,250+ Active Roles",
      avgSalary: "$36,000 - $58,000 / yr",
      visaSponsorship: "39% Visa Sponsorship",
      specialties: [
        "Client Support",
        "Store Managers",
        "Bilingual Reps",
        "Helpdesk Leads",
      ],
      badgeColor:
        "bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Retail customer specialist interacting warmly with clients at clean modern service desk",
      link: "/find-jobs",
    },
    {
      id: "education-training",
      number: "12",
      badgeText: "Global Pedagogy & STEM",
      title: "Education & Training",
      tagline: "Inspiring knowledge, STEM pedagogy, and vocational mastery",
      description:
        "STEM educators, vocational apprenticeship trainers, and curriculum instructional designers empowering the global workforce.",
      icon: "school",
      openings: "8,700+ Active Roles",
      avgSalary: "$48,000 - $82,000 / yr",
      visaSponsorship: "75% Visa Sponsorship",
      specialties: [
        "STEM Teachers",
        "Vocational Trainers",
        "Curriculum Designers",
        "ESL Instructors",
      ],
      badgeColor: "bg-primary/20 text-primary-fixed border border-primary-fixed/30",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
      imageAlt:
        "Passionate teacher engaging diverse group of students in an inspiring modern classroom",
      link: "/find-jobs",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayIntervalTime = 4500; // 4.5 seconds continuous loop

  // Transition helper function
  const triggerTransition = (nextIdx: number, dir: "next" | "prev") => {
    if (nextIdx === currentIndex || isTransitioning) return;
    setPrevIndex(currentIndex);
    setDirection(dir);
    setCurrentIndex(nextIdx);
    setIsTransitioning(true);

    setTimeout(() => {
      setPrevIndex(null);
      setIsTransitioning(false);
    }, 1500); // 1.5s duration matching animation
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % categoriesData.length;
    triggerTransition(nextIdx, "next");
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + categoriesData.length) % categoriesData.length;
    triggerTransition(prevIdx, "prev");
  };

  const handleGoTo = (index: number) => {
    if (index === currentIndex || isTransitioning) return;
    const dir = index > currentIndex ? "next" : "prev";
    triggerTransition(index, dir);
  };

  // Auto-advance slideshow: continuously runs without stopping on hover
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const nextIdx = (currentIndex + 1) % categoriesData.length;
      triggerTransition(nextIdx, "next");
    }, autoPlayIntervalTime);
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, isTransitioning, categoriesData.length]);

  const currentCat = categoriesData[currentIndex];
  const previousCat = prevIndex !== null ? categoriesData[prevIndex] : null;

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md">
      {/* ============================================================== */}
      {/* 1. HEADER (Reusable Component)                                */}
      {/* ============================================================== */}
      <Header />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* ============================================================== */}
          {/* 2. HERO SECTION WITH INTEGRATED SEARCH                         */}
          {/* ============================================================== */}
          <section className="relative w-full bg-surface overflow-hidden pt-space-xl pb-space-xl">
            {/* Subtle luminous background ambiance */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
            <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1920px] mx-auto relative z-10">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary/10 text-primary mb-space-md">
                  <span className="material-symbols-outlined text-[16px]">workspaces</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Multi-Sector Global Exchange</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline-xl text-on-surface font-extrabold tracking-tight mb-space-md leading-tight">
                  Find the Right Job. <span className="block mt-space-xs text-primary">Build Your Future.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  Explore opportunities across industries, discover employers, and find work that matches your skills, experience, and goals.
                </p>
              </div>

              {/* Search Component Panel */}
              <div className="w-full bg-surface-container-lowest rounded-xl shadow-xl p-space-md md:p-space-lg mb-space-lg">
                <form className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center" onSubmit={(e) => e.preventDefault()}>
                  {/* Keyword Input */}
                  <div className="md:col-span-5 flex items-center bg-surface-container-low px-space-md py-space-sm rounded-lg">
                    <span className="material-symbols-outlined text-outline mr-space-sm text-[22px]">search</span>
                    <div className="flex flex-col w-full text-left">
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="search-keywords">
                        Role or Specialty
                      </label>
                      <input
                        className="w-full bg-transparent font-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                        id="search-keywords"
                        placeholder="Electrician, Driver, Nurse, Developer..."
                        type="text"
                        value={searchKeywords}
                        onChange={(e) => setSearchKeywords(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Location Input */}
                  <div className="md:col-span-4 flex items-center bg-surface-container-low px-space-md py-space-sm rounded-lg">
                    <span className="material-symbols-outlined text-outline mr-space-sm text-[22px]">location_on</span>
                    <div className="flex flex-col w-full text-left">
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="search-location">
                        Location Preference
                      </label>
                      <input
                        className="w-full bg-transparent font-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                        id="search-location"
                        placeholder="City, country, or Remote"
                        type="text"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Search Action Button */}
                  <div className="md:col-span-3 flex h-full">
                    <button
                      className="w-full h-12 bg-on-secondary-fixed hover:bg-secondary text-on-secondary font-label-lg text-label-lg rounded-lg shadow-md transition-all flex items-center justify-center gap-space-xs cursor-pointer"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">search</span>
                      <span>Search Jobs</span>
                    </button>
                  </div>
                </form>

                {/* Popular Searches Tags */}
                <div className="mt-space-md pt-space-sm flex flex-wrap items-center gap-space-sm">
                  <span className="font-label-sm text-label-sm text-tertiary mr-space-xs font-medium">Popular Searches:</span>
                  {["Electrician", "Heavy Truck Driver", "Farm Worker", "Welder", "Software Engineer", "Registered Nurse", "Warehouse Associate", "Customer Service"].map((tag, tIdx) => (
                    <Link
                      key={tIdx}
                      className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:bg-primary/10 hover:text-primary transition-colors inline-flex items-center"
                      href="/find-jobs"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Credibility & Value Proposition Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[26px]">public</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Global Reach</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Connecting qualified labor across verified regional and cross-border jurisdictions.</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[26px]">engineering</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">All Employment Types</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Dedicated pipelines for full-time, seasonal, licensed trades, and contract roles.</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-tertiary-container/20 flex items-center justify-center shrink-0 text-tertiary">
                    <span className="material-symbols-outlined text-[26px]">handshake</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Direct Employer Connect</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Engage directly with certified hiring teams without intermediaries or obscure channels.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 3. DYNAMIC ANIMATED CATEGORIES CAROUSEL SECTION                */}
          {/* ============================================================== */}
          <section className="w-full bg-surface-container-low py-space-xl border-y border-surface-container-highest" id="categories-carousel-section">
            <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1920px] mx-auto">
              {/* Header Bar with Controls */}
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-space-lg gap-space-md">
                <div>
                  <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary/10 text-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[16px]">explore</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Explore by Sector</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-headline-lg font-headline-lg text-on-surface font-extrabold tracking-tight">
                    Featured Career Sectors &amp; Disciplines
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Explore high-demand opportunities across global sectors. Auto-advancing every 4 seconds.
                  </p>
                </div>
                {/* Carousel Controls */}
                <div className="flex items-center gap-space-sm shrink-0 self-stretch sm:self-auto justify-between sm:justify-end">
                  <div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded-xl shadow-sm border border-outline-variant/30">
                    <button
                      aria-label="Previous Category"
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container hover:text-primary transition-colors cursor-pointer"
                      onClick={handlePrev}
                    >
                      <span className="material-symbols-outlined text-[22px]">chevron_left</span>
                    </button>
                    <button
                      aria-label="Pause or Play Auto-advance"
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container hover:text-primary transition-colors cursor-pointer"
                      onClick={() => setIsPlaying(!isPlaying)}
                      title="Pause / Play Slideshow"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {isPlaying ? "pause" : "play_arrow"}
                      </span>
                    </button>
                    <button
                      aria-label="Next Category"
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container hover:text-primary transition-colors cursor-pointer"
                      onClick={handleNext}
                    >
                      <span className="material-symbols-outlined text-[22px]">chevron_right</span>
                    </button>
                  </div>
                  <Link
                    className="hidden sm:inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-primary-container transition-colors pl-space-xs"
                    href="/categories"
                  >
                    <span>View All Categories</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Interactive Quick-Selector Navigation Pills */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-space-md">
                {categoriesData.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => handleGoTo(idx)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      idx === currentIndex
                        ? "bg-primary text-on-primary shadow-sm"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px]">{cat.icon}</span>
                    <span>{cat.title}</span>
                  </button>
                ))}
              </div>

              {/* Main Carousel Display Stage */}
              <div
                className="relative w-full rounded-2xl bg-on-secondary-fixed border border-surface-container-highest shadow-2xl overflow-hidden min-h-[500px] md:min-h-[480px] flex items-stretch"
              >
                {/* Outgoing (Exiting) Slide Layer if Transitioning */}
                {previousCat && (
                  <div
                    key={`prev-${previousCat.id}`}
                    className={`absolute inset-0 w-full h-full z-10 pointer-events-none ${
                      direction === "next" ? "anim-slide-out-left" : "anim-slide-out-right"
                    }`}
                  >
                    {/* Background Image */}
                    <img
                      src={previousCat.image}
                      alt={previousCat.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-on-secondary-fixed/95 via-on-secondary-fixed/85 to-on-secondary-fixed/40 md:to-black/30 pointer-events-none"></div>

                    {/* Exiting Text content (Moving towards bottom) */}
                    <div className="anim-text-exit relative z-10 w-full h-full p-6 sm:p-8 md:p-12 flex flex-col justify-between max-w-3xl pb-20 md:pb-12">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-sm text-label-sm font-bold uppercase tracking-wider backdrop-blur-md ${previousCat.badgeColor}`}>
                            <span className="material-symbols-outlined text-[15px]">{previousCat.icon}</span>
                            SECTOR {previousCat.number} OF 12 • {previousCat.badgeText}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-md text-white font-label-sm text-label-sm font-semibold border border-white/20">
                            <span className="material-symbols-outlined text-[13px]">work</span>
                            {previousCat.openings}
                          </span>
                        </div>
                        <h3 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mt-1 leading-tight">
                          {previousCat.title}
                        </h3>
                        <p className="text-white/90 font-body-md text-body-md leading-relaxed max-w-xl">
                          {previousCat.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {previousCat.specialties.map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/15 text-white/90 font-label-sm text-label-sm font-medium"
                            >
                              ${spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/20">
                        <div className="flex items-center gap-4 text-xs text-white/85">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[18px] text-primary-fixed">payments</span>
                            <span>Avg Wage: <strong className="text-primary-fixed font-bold">{previousCat.avgSalary}</strong></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[18px] text-secondary-fixed">flight_takeoff</span>
                            <span>{previousCat.visaSponsorship}</span>
                          </div>
                        </div>
                        <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shrink-0 w-full sm:w-auto">
                          <span>Explore Roles</span>
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Active / Incoming Slide Layer */}
                <div
                  key={`curr-${currentCat.id}`}
                  className={`absolute inset-0 w-full h-full z-20 ${
                    isTransitioning
                      ? direction === "next"
                        ? "anim-slide-in-right"
                        : "anim-slide-in-left"
                      : ""
                  }`}
                >
                  {/* Full Cover Background Image */}
                  <img
                    src={currentCat.image}
                    alt={currentCat.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  />

                  {/* Dark & Navy Gradient Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-on-secondary-fixed/95 via-on-secondary-fixed/85 to-on-secondary-fixed/40 md:to-black/30 pointer-events-none"></div>

                  {/* Top-right Glassmorphic Demand Badge */}
                  <div className="absolute top-5 right-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white font-label-sm text-label-sm border border-white/20 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-semibold text-white/95">Verified Global Demand</span>
                  </div>

                  {/* Overlaid Content Structure (Text slides down from top to bottom) */}
                  <div className={`relative z-10 w-full h-full p-6 sm:p-8 md:p-12 flex flex-col justify-between max-w-3xl pb-20 md:pb-12 ${isTransitioning ? "anim-text-enter" : ""}`}>
                    <div className="flex flex-col gap-2">
                      {/* Slide Badge & Meta */}
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-sm text-label-sm font-bold uppercase tracking-wider backdrop-blur-md ${currentCat.badgeColor}`}>
                          <span className="material-symbols-outlined text-[15px]">{currentCat.icon}</span>
                          SECTOR {currentCat.number} OF 12 • {currentCat.badgeText}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-md text-white font-label-sm text-label-sm font-semibold border border-white/20">
                          <span className="material-symbols-outlined text-[13px]">work</span>
                          {currentCat.openings}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mt-1 leading-tight">
                        {currentCat.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/90 font-body-md text-body-md leading-relaxed max-w-xl">
                        {currentCat.description}
                      </p>

                      {/* Key Specialty Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {currentCat.specialties.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/15 text-white/90 font-label-sm text-label-sm font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Wage Metric & CTA Action Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/20">
                      <div className="flex items-center gap-4 text-xs text-white/85">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-primary-fixed">payments</span>
                          <span>
                            Avg Wage: <strong className="text-primary-fixed font-bold">{currentCat.avgSalary}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-secondary-fixed">flight_takeoff</span>
                          <span>{currentCat.visaSponsorship}</span>
                        </div>
                      </div>
                      <Link
                        href={currentCat.link}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-lg hover:shadow-xl transition-all group shrink-0 w-full sm:w-auto"
                      >
                        <span>Explore Roles</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Progress & Pagination Dots */}
                <div className="absolute bottom-5 left-6 md:left-8 right-6 md:right-8 z-30 flex items-center justify-between pointer-events-none">
                  {/* Pagination Dots */}
                  <div className="flex items-center gap-1.5 pointer-events-auto bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/15">
                    {categoriesData.map((cat, idx) => (
                      <button
                        key={cat.id}
                        aria-label={`Go to slide ${idx + 1}: ${cat.title}`}
                        onClick={() => handleGoTo(idx)}
                        className={`rounded-full transition-all duration-300 cursor-pointer ${
                          idx === currentIndex
                            ? "w-6 h-2 bg-primary-fixed"
                            : "w-2 h-2 bg-white/40 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Timer indicator badge */}
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white/90 font-label-sm text-label-sm border border-white/15 shadow-lg pointer-events-auto">
                    <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
                    <span>
                      {currentCat.number} / 12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 4. LATEST & FEATURED JOBS SECTION                              */}
          {/* ============================================================== */}
          <section className="w-full bg-surface py-space-xl">
            <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1920px] mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-space-lg">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-space-xs">
                    Current Openings
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-headline-lg font-headline-lg text-on-surface">
                    Latest &amp; Featured Opportunities
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs sm:mt-0">
                  Verified postings updated across all jurisdictions
                </p>
              </div>

              {/* Job Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {/* Job Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-space-sm mb-space-sm flex-wrap">
                      <span className="px-space-sm py-space-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold inline-flex items-center">
                        Featured
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">Posted 2d ago</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs line-clamp-1">
                      Industrial Electrician
                    </h3>
                    <p className="font-body-sm text-body-sm text-primary font-medium mb-space-md">
                      Apex Power Systems
                    </p>
                    <div className="flex flex-col gap-space-xs mb-space-md">
                      <div className="flex items-center gap-space-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">location_on</span>
                        <span className="font-body-sm text-body-sm">Munich, Germany</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">payments</span>
                        <span className="font-body-sm text-body-sm">€42,000 - €50,000 / yr</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Full-time
                      </span>
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Onsite
                      </span>
                    </div>
                  </div>
                  <Link
                    className="w-full py-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-center transition-all inline-flex items-center justify-center"
                    href="/jobs/industrial-electrician"
                  >
                    View Job
                  </Link>
                </div>

                {/* Job Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-space-sm mb-space-sm flex-wrap">
                      <span className="px-space-sm py-space-xs rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm font-semibold inline-flex items-center">
                        Verified Carrier
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">Posted 1d ago</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs line-clamp-1">
                      Long-Haul Freight Driver (Class A)
                    </h3>
                    <p className="font-body-sm text-body-sm text-primary font-medium mb-space-md">
                      TransGlobal Logistics
                    </p>
                    <div className="flex flex-col gap-space-xs mb-space-md">
                      <div className="flex items-center gap-space-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">location_on</span>
                        <span className="font-body-sm text-body-sm">Chicago, IL, USA</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">payments</span>
                        <span className="font-body-sm text-body-sm">$65,000 - $80,000 / yr</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Full-time
                      </span>
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Onsite
                      </span>
                    </div>
                  </div>
                  <Link
                    className="w-full py-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-center transition-all inline-flex items-center justify-center"
                    href="/find-jobs"
                  >
                    View Job
                  </Link>
                </div>

                {/* Job Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-space-sm mb-space-sm flex-wrap">
                      <span className="px-space-sm py-space-xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold inline-flex items-center">
                        Seasonal Opportunity
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">Posted 3d ago</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs line-clamp-1">
                      Senior Greenhouse Technician
                    </h3>
                    <p className="font-body-sm text-body-sm text-primary font-medium mb-space-md">
                      SunCrest Agro
                    </p>
                    <div className="flex flex-col gap-space-xs mb-space-md">
                      <div className="flex items-center gap-space-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">location_on</span>
                        <span className="font-body-sm text-body-sm">Almería, Spain</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">payments</span>
                        <span className="font-body-sm text-body-sm">€26,000 - €31,000 / yr</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Seasonal / Full-time
                      </span>
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Onsite
                      </span>
                    </div>
                  </div>
                  <Link
                    className="w-full py-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-center transition-all inline-flex items-center justify-center"
                    href="/find-jobs"
                  >
                    View Job
                  </Link>
                </div>

                {/* Job Card 4 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-space-sm mb-space-sm flex-wrap">
                      <span className="px-space-sm py-space-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold inline-flex items-center">
                        Featured
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">Posted 4h ago</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs line-clamp-1">
                      Registered Staff Nurse (ICU)
                    </h3>
                    <p className="font-body-sm text-body-sm text-primary font-medium mb-space-md">
                      Saint Jude Healthcare
                    </p>
                    <div className="flex flex-col gap-space-xs mb-space-md">
                      <div className="flex items-center gap-space-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">location_on</span>
                        <span className="font-body-sm text-body-sm">Manchester, UK</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">payments</span>
                        <span className="font-body-sm text-body-sm">£36,000 - £44,000 / yr</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Full-time
                      </span>
                      <span className="px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm inline-flex items-center">
                        Hybrid/Onsite
                      </span>
                    </div>
                  </div>
                  <Link
                    className="w-full py-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-center transition-all inline-flex items-center justify-center"
                    href="/find-jobs"
                  >
                    View Job
                  </Link>
                </div>

                {/* Job Card 5 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-space-sm mb-space-sm flex-wrap">
                      <span className="px-space-sm py-space-xs rounded-full bg-primary-fixed-dim/30 text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold inline-flex items-center">
                        Remote Global
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">Posted 1d ago</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs line-clamp-1">
                      Full-Stack Systems Developer
                    </h3>
                    <p className="font-body-sm text-body-sm text-primary font-medium mb-space-md">
                      CloudPulse Media
                    </p>
                    <div className="flex flex-col gap-space-xs mb-space-md">
                      <div className="flex items-center gap-space-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">public</span>
                        <span className="font-body-sm text-body-sm">Remote (Global)</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">payments</span>
                        <span className="font-body-sm text-body-sm">$85,000 - $110,000 / yr</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Full-time
                      </span>
                      <span className="px-space-sm py-space-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm inline-flex items-center">
                        Remote
                      </span>
                    </div>
                  </div>
                  <Link
                    className="w-full py-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-center transition-all inline-flex items-center justify-center"
                    href="/find-jobs"
                  >
                    View Job
                  </Link>
                </div>

                {/* Job Card 6 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-space-sm mb-space-sm flex-wrap">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold inline-flex items-center">
                        Certified Trade
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">Posted 3d ago</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs line-clamp-1">
                      Heavy Machinery Welder &amp; Fabricator
                    </h3>
                    <p className="font-body-sm text-body-sm text-primary font-medium mb-space-md">
                      Nordic Metalworks
                    </p>
                    <div className="flex flex-col gap-space-xs mb-space-md">
                      <div className="flex items-center gap-space-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">location_on</span>
                        <span className="font-body-sm text-body-sm">Gothenburg, Sweden</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">payments</span>
                        <span className="font-body-sm text-body-sm">Kr 420,000 - 480,000 / yr</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-space-xs mb-space-md">
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Full-time
                      </span>
                      <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm inline-flex items-center">
                        Onsite
                      </span>
                    </div>
                  </div>
                  <Link
                    className="w-full py-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-label-lg text-label-lg text-center transition-all inline-flex items-center justify-center"
                    href="/find-jobs"
                  >
                    View Job
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 5. REMOTE & FLEXIBLE WORK SPOTLIGHT                            */}
          {/* ============================================================== */}
          <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 2xl:px-12 pb-space-xl">
            <div className="max-w-[1920px] mx-auto rounded-xl bg-on-secondary-fixed text-on-secondary p-space-lg md:p-space-xl relative overflow-hidden shadow-xl">
              <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary/20 text-primary-fixed mb-space-sm">
                    <span className="material-symbols-outlined text-[16px]">devices</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">Borderless Mobility</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-headline-lg font-headline-lg text-on-secondary mb-space-sm font-bold">
                    Work From Anywhere, On Your Terms
                  </h2>
                  <p className="font-body-md text-body-md text-surface-container-highest max-w-xl">
                    Discover thousands of remote, part-time, freelance, and flexible contractor openings across tech, administration, healthcare consulting, and distributed operations.
                  </p>
                </div>
                <div className="shrink-0 w-full sm:w-auto">
                  <Link
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-lg py-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md transition-all cursor-pointer"
                    href="/find-jobs"
                  >
                    <span className="material-symbols-outlined text-[20px]">explore</span>
                    <span>Browse Remote Jobs</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 6. BROWSE BY LOCATION (GLOBAL SCOPE)                           */}
          {/* ============================================================== */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1920px] mx-auto">
              <div className="mb-space-lg">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-space-xs">
                  Jurisdiction Search
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-headline-lg font-headline-lg text-on-surface">
                  Explore Opportunities Worldwide
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
                {/* United States */}
                <Link className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs group" href="/find-jobs">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    US
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">United States</span>
                  <span className="font-body-sm text-body-sm text-outline">Industrial &amp; Corporate</span>
                </Link>
                {/* United Kingdom */}
                <Link className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs group" href="/find-jobs">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    UK
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">United Kingdom</span>
                  <span className="font-body-sm text-body-sm text-outline">NHS &amp; Tech Services</span>
                </Link>
                {/* Germany */}
                <Link className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs group" href="/find-jobs">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    DE
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Germany</span>
                  <span className="font-body-sm text-body-sm text-outline">Engineering &amp; Logistics</span>
                </Link>
                {/* Canada */}
                <Link className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs group" href="/find-jobs">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    CA
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Canada</span>
                  <span className="font-body-sm text-body-sm text-outline">Trades &amp; Healthcare</span>
                </Link>
                {/* United Arab Emirates */}
                <Link className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs group" href="/find-jobs">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    AE
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">United Arab Emirates</span>
                  <span className="font-body-sm text-body-sm text-outline">Hospitality &amp; Infrastructure</span>
                </Link>
                {/* Australia */}
                <Link className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs group" href="/find-jobs">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    AU
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Australia</span>
                  <span className="font-body-sm text-body-sm text-outline">Agriculture &amp; Skilled Trades</span>
                </Link>
                {/* Saudi Arabia */}
                <Link className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs group" href="/find-jobs">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    SA
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Saudi Arabia</span>
                  <span className="font-body-sm text-body-sm text-outline">Energy &amp; Construction</span>
                </Link>
                {/* Spain */}
                <Link className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs group" href="/find-jobs">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    ES
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Spain</span>
                  <span className="font-body-sm text-body-sm text-outline">Agri-tech &amp; Tourism</span>
                </Link>
                {/* Global / All */}
                <Link className="p-space-md bg-primary-fixed/20 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs group col-span-2 sm:col-span-1 lg:col-span-2 justify-center items-center text-center" href="/find-jobs">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Explore All Countries</span>
                  <span className="font-body-sm text-body-sm text-primary font-medium">120+ International Hubs →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 7. JOB ALERT PROMOTIONAL BANNER                                */}
          {/* ============================================================== */}
          <section className="w-full bg-surface py-space-xl">
            <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1920px] mx-auto">
              <div className="bg-surface-container rounded-xl p-space-lg md:p-space-xl shadow-sm">
                <div className="max-w-3xl mx-auto text-center mb-space-lg">
                  <span className="material-symbols-outlined text-primary text-[36px] mb-space-xs">notifications_active</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-headline-lg font-headline-lg text-on-surface mb-space-xs">
                    Don&apos;t Miss Your Next Opportunity
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Stay informed about new opportunities that match your interests.
                  </p>
                </div>
                <form className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-space-sm" onSubmit={(e) => e.preventDefault()}>
                  <div className="sm:col-span-4 bg-surface-container-lowest px-space-md py-space-sm rounded-lg flex items-center">
                    <input
                      className="w-full bg-transparent font-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                      placeholder="Keywords (e.g. Electrician)"
                      type="text"
                      value={alertKeyword}
                      onChange={(e) => setAlertKeyword(e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-5 bg-surface-container-lowest px-space-md py-space-sm rounded-lg flex items-center">
                    <input
                      className="w-full bg-transparent font-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                      placeholder="Your email address"
                      type="email"
                      value={alertEmail}
                      onChange={(e) => setAlertEmail(e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <button
                      className="w-full h-full py-space-sm px-space-md bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
                      type="submit"
                    >
                      Create Job Alert
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 8. EMPLOYER HIRING BANNER                                      */}
          {/* ============================================================== */}
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1920px] mx-auto">
              <div className="rounded-xl bg-surface-container-low p-space-lg md:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm">
                <div className="flex items-start gap-space-md max-w-2xl">
                  <div className="w-12 h-12 rounded-xl bg-on-secondary-fixed text-on-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px]">domain_add</span>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-headline-lg font-headline-lg text-on-surface mb-space-xs font-bold">
                      Find the Right People for Your Team
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Reach candidates across industries and connect with people who match your hiring needs.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-space-sm w-full md:w-auto">
                  <Link
                    className="w-full md:w-auto px-space-xl py-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-space-xs"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[20px]">post_add</span>
                    <span>Post a Job</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ============================================================== */}
      {/* 9. GLOBAL FOOTER (Reusable Component)                          */}
      {/* ============================================================== */}
      <Footer />
    </div>
  );
}
