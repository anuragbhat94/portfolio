"use client"; // Required if you have onClick handlers

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-100 via-green-300 to-emerald-700 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* 1) Brand on the left */}
        <Link href="#home">
          <span className="text-2xl font-bold text-gray-900 hover:text-amber-300 transition">
            Anurag Bhat
          </span>
        </Link>

        {/* 2) Desktop navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex space-x-8">
          <Link
            href="#about"
            className="text-gray-900 hover:text-amber-300 transition"
          >
            About
          </Link>

          <Link
            href="#projects"
            className="text-gray-900 hover:text-amber-300 transition"
          >
            Projects
          </Link>

          <Link
            href="#experience"
            className="text-gray-900 hover:text-amber-300 transition"
          >
            Experience
          </Link>

          <Link
            href="#contact"
            className="text-gray-900 hover:text-amber-300 transition"
          >
            Contact
          </Link>
        </nav>

        {/* 3) “Get In Touch” button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-4 py-2 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg shadow-sm transition"
          >
            Get In Touch
          </Link>
        </div>

        {/* 4) Mobile “hamburger” for small screens */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            className="rounded p-1 text-gray-900 hover:bg-emerald-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 5) Mobile dropdown nav (initially hidden) */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`border-t border-emerald-800 bg-emerald-900 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="#about"
          onClick={() => setIsMenuOpen(false)}
          className="block px-6 py-3 text-white transition hover:bg-emerald-800"
        >
          About
        </Link>
        <Link
          href="#projects"
          onClick={() => setIsMenuOpen(false)}
          className="block px-6 py-3 text-white transition hover:bg-emerald-800"
        >
          Projects
        </Link>
        <Link
          href="#experience"
          onClick={() => setIsMenuOpen(false)}
          className="block px-6 py-3 text-white transition hover:bg-emerald-800"
        >
          Experience
        </Link>
        <Link
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="block px-6 py-3 text-white transition hover:bg-emerald-800"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
