"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Find Jobs", href: "/find-jobs" },
    { label: "Categories", href: "/categories" },
    { label: "Locations", href: "#" },
    { label: "Companies", href: "#" },
    { label: "Career Resources", href: "#" },
  ];

  const isCurrentActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && href !== "#" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container-highest shadow-[0_1px_8px_rgba(23,59,103,0.04)]">
      <div className="h-16 sm:h-20 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex items-center justify-between">
        {/* Brand Logo & Desktop Nav Links */}
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-space-lg">
          <Link className="flex items-center gap-2 sm:gap-space-sm" href="/">
            <Image
              alt="Jobzeta Vector Brand Logo"
              className="h-7 sm:h-8 w-auto object-contain"
              src="/jobzeta-icon.png"
              width={36}
              height={32}
              priority
            />
            <span className="font-headline-md text-xl sm:text-headline-md text-on-surface tracking-tight font-bold">
              Jobzeta
            </span>
          </Link>
          <nav className="hidden xl:flex items-center gap-4 lg:gap-space-lg">
            {navLinks.map((link, idx) => {
              const active = isCurrentActive(link.href);
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`font-label-lg text-label-lg transition-colors whitespace-nowrap ${
                    active
                      ? "text-primary font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Buttons & Avatar */}
        <div className="flex items-center gap-2 sm:gap-space-md">
          <div className="hidden sm:flex items-center gap-2 sm:gap-space-sm">
            <Link
              className="inline-flex items-center justify-center px-3 sm:px-space-md py-2 sm:py-space-sm rounded-lg border border-outline-variant font-label-lg text-label-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-all whitespace-nowrap"
              href="#"
            >
              Sign In
            </Link>
            <Link
              className="inline-flex items-center justify-center px-3 sm:px-space-md py-2 sm:py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all whitespace-nowrap font-semibold"
              href="#"
            >
              Post a Job
            </Link>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
          <button
            aria-label="Toggle Mobile Menu"
            className="xl:hidden p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg cursor-pointer"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container-highest px-4 sm:px-6 py-4 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link, idx) => {
            const active = isCurrentActive(link.href);
            return (
              <Link
                key={idx}
                className={`font-label-lg text-label-lg py-2 px-2 rounded-lg transition-colors ${
                  active
                    ? "bg-surface-container text-primary font-bold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                }`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 flex flex-col sm:hidden gap-2 border-t border-surface-container-highest mt-1">
            <Link
              className="w-full text-center py-2.5 rounded-lg border border-outline-variant font-label-lg text-label-lg text-on-surface hover:bg-surface-container"
              href="#"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              className="w-full text-center py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-sm font-semibold"
              href="#"
              onClick={() => setMobileMenuOpen(false)}
            >
              Post a Job
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
