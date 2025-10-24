"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Brand / Name */}
        <h1 className="text-lg font-semibold text-white mb-4 md:mb-0">
          © {new Date().getFullYear()} Adriel Espiritu
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>

      {/* Optional divider */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500">
        Built with <span className="text-blue-400">Next.js</span> & Tailwind CSS 🚀
      </div>
    </footer>
  );
}