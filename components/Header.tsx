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
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-surface-container-highest shadow-[0_1px_8px_rgba(23,59,103,0.04)]">
      <div className="h-20 w-full px-margin flex items-center justify-between">
        {/* Brand Logo & Desktop Nav Links */}
        <div className="flex items-center gap-space-lg">
          <Link className="flex items-center gap-space-sm" href="/">
            <Image
              alt="Jobzeta Vector Brand Logo"
              className="h-8 w-auto object-contain"
              src="/jobzeta-icon.png"
              width={36}
              height={32}
              priority
            />
            <span className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
              Jobzeta
            </span>
          </Link>
          <nav className="hidden xl:flex items-center gap-space-lg">
            {navLinks.map((link, idx) => {
              const active = isCurrentActive(link.href);
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`font-label-lg text-label-lg transition-colors ${
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
        <div className="flex items-center gap-space-md">
          <div className="hidden sm:flex items-center gap-space-sm">
            <Link
              className="inline-flex items-center justify-center px-space-md py-space-sm rounded-lg border border-outline-variant font-label-lg text-label-lg text-on-surface hover:bg-surface-container hover:text-on-surface transition-all"
              href="#"
            >
              Sign In
            </Link>
            <Link
              className="inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all"
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
            className="xl:hidden p-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg cursor-pointer"
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
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container-highest px-margin py-space-md flex flex-col gap-space-sm shadow-md animate-slide-down">
          {navLinks.map((link, idx) => {
            const active = isCurrentActive(link.href);
            return (
              <Link
                key={idx}
                className={`font-label-lg text-label-lg py-space-xs transition-colors ${
                  active
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-space-xs flex flex-col sm:hidden gap-space-xs border-t border-surface-container-highest mt-space-xs">
            <Link
              className="w-full text-center py-space-sm rounded-lg border border-outline-variant font-label-lg text-label-lg text-on-surface"
              href="#"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              className="w-full text-center py-space-sm rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-sm"
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
