
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto flex h-[76px]  items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 group-hover:bg-blue-500 group-hover:shadow-blue-500/30">
            K
          </span>

          <span className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
              Koli Khatun
            </span>

            <span className="text-[11px] font-medium tracking-[0.15em] text-slate-400">
              FRONTEND DEVELOPER
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 sm:inline-flex"
        >
          Contact Me
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-800 bg-slate-950 px-5 py-5 shadow-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-slate-800 hover:bg-slate-900 hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
            >
              Contact Me
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
