"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "How it works", href: "/#how-it-works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const products = [
  { name: "Studio", href: "/products/studio" },
  { name: "Connect", href: "/products/connect" },
  { name: "Go", href: "/products/go" },
  { name: "Proposal", href: "/products/proposal" },
  { name: "Field App", href: "/products/field-app" },
  { name: "SCADA", href: "/products/scada" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProdOpen, setIsProdOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl tracking-tight">
          <span className="font-medium text-ink">pv</span>
          <span className="font-bold text-pvnxt">NXT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button 
              onClick={() => setIsProdOpen(!isProdOpen)}
              className="flex items-center gap-1 text-ink font-medium hover:text-pvnxt transition"
            >
              Products <ChevronDown className={`w-4 h-4 transition-transform ${isProdOpen ? "rotate-180" : ""}`} />
            </button>
            {isProdOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-line rounded-2xl shadow-xl py-2">
                {products.map((p) => (
                  <Link 
                    key={p.href} 
                    href={p.href} 
                    className="block px-4 py-2 text-sm text-ink hover:bg-pvnxt-tint hover:text-pvnxt transition"
                    onClick={() => setIsProdOpen(false)}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink font-medium hover:text-pvnxt transition">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="bg-pvnxt-dark text-white px-5 py-3 rounded-xl font-medium min-h-[44px] hover:bg-pvnxt-deep transition">
            Request a Demo
          </Link>
        </nav>

        <button className="md:hidden p-2 text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-line p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-muted uppercase tracking-wider">Products</p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((p) => (
                <Link key={p.href} href={p.href} className="text-ink py-2" onClick={() => setIsOpen(false)}>{p.name}</Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-ink font-medium" onClick={() => setIsOpen(false)}>{link.name}</Link>
            ))}
          </div>
        </div>
      )}

      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white border-t border-line z-50">
        <Link href="/contact" className="bg-pvnxt-dark text-white px-5 py-3 rounded-xl font-medium min-h-[44px] block text-center">
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
