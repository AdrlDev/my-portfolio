"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      </div>

      {/* Optional divider */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AE. All rights reserved.
      </div>
    </footer>
  );
}