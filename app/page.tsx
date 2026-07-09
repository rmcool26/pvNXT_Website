"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Building2, Wrench, BarChart3, Users } from "lucide-react";
import PlaceholderBox from "@/components/PlaceholderBox";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import PatternBg from "@/components/PatternBg";

const SolarHeroCanvas = dynamic(() => import("@/components/SolarHeroCanvas"), { ssr: false });

export default function HomePage() {
  const oldWayItems = [
    "Leads managed in WhatsApp chats",
    "Designs done in manual CAD, takes days",
    "Proposals typed in Word or Excel",
    "Projects tracked on whiteboards",
    "Site visits for every small update",
    "Manual handoffs between teams",
    "Days-to-weeks of delay at each step",
  ];

  const pvnxtWayItems = [
    "Every lead tracked in the system",
    "Designs generated in minutes",
    "Proposals created with one click",
    "Projects managed in real time",
    "Site data captured on mobile, remotely",
    "Data flows between portals automatically",
    "Connected, faster, and accurate",
  ];

  const timelineSteps = [
    { step: "1", name: "Atlas", func: "Satellite to 3D Model" },
    { step: "2", name: "Field App", func: "Site Verify" },
    { step: "3", name: "Connect", func: "Feasibility and Quote" },
    { step: "4", name: "Studio", func: "Design and Output" },
    { step: "5", name: "Proposal", func: "Auto-Generate" },
    { step: "6", name: "Go", func: "Track Installation" },
    { step: "7", name: "SCADA", func: "Monitor and Alert" },
  ];

  const roles = [
    { icon: Building2, title: "EPC Companies", desc: "Manage multiple projects end-to-end with full visibility and control." },
    { icon: Wrench, title: "Solar Installers", desc: "From site survey to commissioning, execute work with digital tools." },
    { icon: BarChart3, title: "O and M Teams", desc: "Monitor plant performance, identify faults early, and maintain uptime." },
    { icon: Users, title: "Project Managers", desc: "Track milestones, allocate resources, and deliver projects on schedule." },
  ];

  const stats = [
    { val: "90%", label: "Reduction in design time" },
    { val: "0", label: "Unnecessary site visits" },
    { val: "3x", label: "Faster proposal generation" },
    { val: "40%", label: "Faster project delivery" },
  ];

  const resultsPoints = [
    { title: "Full data traceability.", desc: " Every action, change, and approval is logged." },
    { title: "Better team coordination.", desc: " Teams work from the same data, not different versions." },
    { title: "Scalable operations.", desc: " Handle more projects without adding headcount." },
  ];

  return (
    <main>
      <div className="relative">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f7f9] via-[#dff3f5] to-white min-h-[82vh] flex items-center">
          <SolarHeroCanvas />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-pvnxt-dark font-medium text-sm">Incubated at IIT Delhi - FITT</span>
              <h1 className="text-[36px] md:text-[40px] lg:text-[56px] font-semibold text-ink leading-tight mt-2 font-sora">
                Solar operations, connected.
              </h1>
              <p className="text-base md:text-lg text-muted max-w-xl mt-4">
                pvNXT connects EPC design, sales, installation and monitoring in one workflow suite. Built for solar teams in India.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/contact" className="btn-primary">Request a Demo</Link>
                <Link href="#products" className="btn-secondary">Explore products</Link>
              </div>
            </div>
            <div>
              <PlaceholderBox
                label="[ pvNXT Suite - connected dashboard preview | client screenshot | 16:9 | 1280x720px | bg:#e6f7f9 ]"
                ratio="16/9"
                bg="#e6f7f9"
              />
            </div>
          </div>
        </section>
        <div className="border-y border-line bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[11px] text-muted uppercase tracking-wider">Incubation</span>
              <strong className="text-sm text-ink font-semibold">IIT Delhi Incubated</strong>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[11px] text-muted uppercase tracking-wider">Core Engine</span>
              <strong className="text-sm text-ink font-semibold">AI + Geo-spatial Design</strong>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[11px] text-muted uppercase tracking-wider">Workflow</span>
              <strong className="text-sm text-ink font-semibold">Zero Site Visit</strong>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[11px] text-muted uppercase tracking-wider">Output</span>
              <strong className="text-sm text-ink font-semibold">Layouts, Yields, BOQs</strong>
            </div>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-10 text-center pt-12 md:pt-16 pointer-events-none">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-sora drop-shadow-sm">
            The gap we close.
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto drop-shadow-sm">
            Solar runs on calls, WhatsApp, Excel. pvNXT runs on connected data.
          </p>
        </div>
        <div className="grid md:grid-cols-2 min-h-[500px]">
          <div className="bg-pvnxt-deep flex items-center justify-center px-8 py-20 md:py-0">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-400 font-bold text-lg">X</span>
                </div>
                <h3 className="text-2xl font-semibold text-white font-sora">The Old Way</h3>
              </div>
              <ul className="space-y-4">
                {oldWayItems.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-3">
                    <span className="text-red-400 font-semibold flex-shrink-0 mt-0.5">X</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-pvnxt-tint flex items-center justify-center px-8 py-20 md:py-0">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-lg">V</span>
                </div>
                <h3 className="text-2xl font-semibold text-ink font-sora">The pvNXT Way</h3>
              </div>
              <ul className="space-y-4">
                {pvnxtWayItems.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-3">
                    <span className="text-emerald-600 font-semibold flex-shrink-0 mt-0.5">V</span>
                    <span className="text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-20 bg-[#f8fcfd]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-ink font-sora">
              6 products. One connected data layer.
            </h2>
            <p className="text-muted mt-3 text-base md:text-lg max-w-xl mx-auto">
              Each product connects to shared project data - no silos, no double entry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard name="pvNXT Studio" tagline="EPC design and proposal workspace" href="/products/studio" status="Live" />
            <ProductCard name="pvNXT Connect" tagline="Consumer solar portal" href="/products/connect" status="Live" />
            <ProductCard name="pvNXT Go" tagline="Installer field portal" href="/products/go" status="Live" />
            <ProductCard name="Proposal System" tagline="Automated customer proposals" href="/products/proposal" status="Live" />
            <ProductCard name="Field App" tagline="Site survey capture" href="/products/field-app" status="Internal" />
            <ProductCard name="SCADA Monitoring" tagline="Plant operations monitoring" href="/products/scada" status="In progress" />
          </div>
          <div className="mt-10 bg-pvnxt-tint border border-pvnxt/20 rounded-2xl py-4 text-center">
            <p className="text-pvnxt-dark font-semibold text-sm tracking-wide">ONE DATA LAYER</p>
            <p className="text-pvnxt-dark/60 text-xs mt-1">All six portals read and write to the same unified data source</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28 px-6 bg-gradient-to-b from-white via-pvnxt-tint/10 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-sora">From satellite to solar.</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              pvNXT Atlas captures site data from space. The rest follows - connected.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mb-16">
            <PlaceholderBox
              label="[ pvNXT Atlas - Satellite to 3D roof model pipeline | client illustration | ratio 16:5 | 1280x400px | bg: #ffffff ]"
              ratio="16/5"
              bg="#ffffff"
            />
            <p className="text-center text-xs text-muted mt-3">Stereo satellite imagery to photogrammetry to 3D roof model. Zero physical site visits.</p>
          </div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wide text-center mb-6">Connected Flow</p>
          <div className="hidden md:block relative">
            <div className="absolute top-5 left-[7%] right-[7%] h-0.5 bg-pvnxt/20 rounded-full" />
            <div className="grid grid-cols-7 gap-2 items-start relative z-10">
              {timelineSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-white border-2 border-pvnxt flex items-center justify-center text-pvnxt-dark font-bold text-xs">
                    {item.step}
                  </div>
                  <p className="text-xs font-semibold text-ink mt-2">{item.name}</p>
                  <p className="text-[10px] text-muted mt-0.5">{item.func}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden flex flex-col gap-0">
            {timelineSteps.map((item, index) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-pvnxt flex items-center justify-center text-pvnxt-dark font-bold text-xs shrink-0 z-10">
                    {item.step}
                  </div>
                  {index < timelineSteps.length - 1 && <div className="w-0.5 flex-1 bg-pvnxt/20" />}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-muted mt-0.5">{item.func}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted mt-12 max-w-2xl mx-auto">
            Each portal reads from the same project data. No re-entry. No broken handoffs. One connected system.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-sora">Built for every solar team.</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">Four roles. One connected platform.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-pvnxt/5">
                <div className="w-12 h-12 rounded-xl bg-pvnxt-tint flex items-center justify-center mb-5 group-hover:bg-pvnxt group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-pvnxt group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-ink text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-pvnxt-tint/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-sora">Measured. Not promised.</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">Improvements from teams using pvNXT.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group cursor-default">
                <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-pvnxt tracking-tight font-sora group-hover:scale-105 transition-transform duration-300">
                  {stat.val}
                </p>
                <p className="text-sm text-muted mt-3 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {resultsPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-3">
                <span className="text-pvnxt font-bold mt-0.5">{"->"}</span>
                <p className="text-sm text-muted">
                  <span className="font-medium text-ink">{point.title}</span>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <PatternBg opacity={0.05} />
        <div className="relative z-10">
          <CTASection
            heading="See pvNXT in action."
            sub="Book a demo for your team - EPC, installer, or O&M."
            primaryText="Request a Demo"
            primaryHref="/contact"
            secondaryText="Explore products"
            secondaryHref="#products"
          />
        </div>
      </div>
    </main>
  );
}
