"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md shadow-lg shadow-teal-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 group/logo"
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover/logo:scale-110 group-hover/logo:rotate-3"
          >
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="38" y2="38">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#6EE7B7" />
              </linearGradient>
              <filter id="logoGlow">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M19 2L35.5 11V29L19 38L2.5 29V11L19 2Z"
              stroke="url(#logoGrad)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#logoGlow)"
              className="opacity-70 group-hover/logo:opacity-100 transition-opacity"
            />
            <path
              d="M19 5L32.5 12.5V26.5L19 34L5.5 26.5V12.5L19 5Z"
              stroke="url(#logoGrad)"
              strokeWidth="0.5"
              fill="none"
              className="opacity-30 group-hover/logo:opacity-60 transition-opacity"
            />
            <text
              x="19"
              y="23"
              textAnchor="middle"
              fill="url(#logoGrad)"
              fontSize="10"
              fontWeight="700"
              fontFamily="var(--font-geist-mono), monospace"
              letterSpacing="0.5"
            >
              WPA
            </text>
          </svg>
          <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-mint-400 bg-clip-text text-transparent hidden sm:block">
            WPA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-teal-400 transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-text hover:text-teal-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md border-t border-surface">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-muted hover:text-teal-400 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
