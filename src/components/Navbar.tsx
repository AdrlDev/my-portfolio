"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ✅ Navbar (fixed height only) */}
      <nav aria-label="Global" className="shadow-md relative z-20">
        <div className="mx-auto flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white-800">aeDev</span>
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold text-white-800 hover:text-indigo-600">
              Home
            </Link>
            <Link href="/about" className="text-sm font-semibold text-white-800 hover:text-indigo-600">
              About
            </Link>
            <Link href="/projects" className="text-sm font-semibold text-white-800 hover:text-indigo-600">
              Projects
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-white-800 hover:text-indigo-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Menu (below navbar) */}
      <div
        className={`absolute left-0 w-full bg-white shadow-md border-t border-gray-200 transition-all duration-300 ease-in-out transform origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 scale-y-100"
            : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-3 py-4">
          <Link href="/" className="block text-gray-800 font-medium hover:text-indigo-600">
            Home
          </Link>
          <Link href="/about" className="block text-gray-800 font-medium hover:text-indigo-600">
            About
          </Link>
          <Link href="/projects" className="block text-gray-800 font-medium hover:text-indigo-600">
            Projects
          </Link>
          <Link href="/contact" className="block text-gray-800 font-medium hover:text-indigo-600">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
