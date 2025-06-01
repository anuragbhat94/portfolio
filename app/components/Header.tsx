"use client"; // Required if you have onClick handlers

import Link from "next/link";

export default function Header() {
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
        <nav className="hidden md:flex space-x-8">
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
            className="text-white hover:text-amber-300 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-nav");
              menu?.classList.toggle("hidden");
            }}
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
        className="md:hidden hidden bg-amber-700 border-t border-amber-600"
      >
        <Link
          href="#about"
          className="block px-6 py-3 text-white hover:text-amber-300 hover:bg-amber-600 transition"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="block px-6 py-3 text-white hover:text-amber-300 hover:bg-amber-600 transition"
        >
          Projects
        </Link>
        <Link
          href="#experience"
          className="block px-6 py-3 text-white hover:text-amber-300 hover:bg-amber-600 transition"
        >
          Experience
        </Link>
        <Link
          href="#contact"
          className="block px-6 py-3 text-white hover:text-amber-300 hover:bg-amber-600 transition"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
