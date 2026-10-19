import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-container-highest pt-space-xl pb-space-lg">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-gutter mb-space-xl">
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-space-sm pr-0 lg:pr-space-lg mb-4 lg:mb-0">
            <Link className="flex items-center gap-space-sm" href="/">
              <Image
                alt="Jobzeta Vector Brand Logo"
                className="h-8 w-auto object-contain"
                src="/jobzeta-icon.png"
                width={36}
                height={32}
              />
              <span className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
                Jobzeta
              </span>
            </Link>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Global job discovery connecting candidates across trades, transportation,
              agriculture, healthcare, technology, and all industries worldwide.
            </p>
            <div className="mt-space-md">
              <span className="font-label-sm text-label-sm text-tertiary">
                © 2025 Jobzeta. All rights reserved.
              </span>
            </div>
          </div>

          {/* Job Seekers */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-space-xs font-semibold">
              Job Seekers
            </span>
            <ul className="flex flex-col gap-space-xs">
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="/find-jobs"
                >
                  Find Jobs
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="/categories"
                >
                  Browse Categories
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Browse Locations
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="/find-jobs"
                >
                  Remote Jobs
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Career Resources
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Job Alerts
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-space-xs font-semibold">
              Employers
            </span>
            <ul className="flex flex-col gap-space-xs">
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Post a Job
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Browse Companies
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Hiring Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-space-xs font-semibold">
              Company
            </span>
            <ul className="flex flex-col gap-space-xs">
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  About Jobzeta
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Contact Us
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-space-xs font-semibold">
              Legal
            </span>
            <ul className="flex flex-col gap-space-xs">
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer status strip */}
        <div className="pt-space-md border-t border-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <span className="font-label-sm text-label-sm text-tertiary">
            Global workforce exchange and compliance infrastructure across 120+ territories.
          </span>
          <div className="flex items-center gap-space-md">
            <span className="font-label-sm text-label-sm text-tertiary">
              System Status: Optimal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
