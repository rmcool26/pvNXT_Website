"use client";
import Link from "next/link"
import dynamic from "next/dynamic"
import PlaceholderBox from "@/components/PlaceholderBox"
import ProductCard from "@/components/ProductCard"
import StatBand from "@/components/StatBand"
import CTASection from "@/components/CTASection"
import PatternBg from "@/components/PatternBg"

const SolarHeroCanvas = dynamic(() => import("@/components/SolarHeroCanvas"), { ssr: false })

export default function HomePage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-[#e6f7f9] min-h-[82vh] flex items-center">
        {/* Background image – static fallback */}
        <img
          src="/assets/hero-bg-aurora.webp"
          alt="pvNXT solar aurora background – teal gradient with solar panel pattern"
          className="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            if (!t.src.endsWith(".png")) t.src = "/assets/hero-bg-aurora.png";
          }}
        />
        {/* Motion overlay */}
        <SolarHeroCanvas />
        {/* content wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#047a88] font-medium text-sm">Incubated at IIT Delhi – FITT</span>
            <h1 className="text-[40px] lg:text-[56px] font-semibold text-ink leading-tight mt-2" style={{ fontFamily: "Sora, sans-serif" }}>
              Solar operations, connected.
            </h1>
            <p className="text-lg text-muted max-w-xl mt-4">
              pvNXT connects EPC design, sales, installation and monitoring in one workflow suite. Built for solar teams in India.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="btn-primary">Request a Demo</Link>
              <Link href="#products" className="btn-secondary">Explore products</Link>
            </div>
            <div className="flex flex-wrap gap-x-5 mt-6 text-sm text-muted">
              <span>Satellite-based 3D roof modeling</span>
              <span>•</span>
              <span>Shadow analysis – accurate site data</span>
              <span>•</span>
              <span>BOQ + proposal – auto-generated</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <PlaceholderBox
              label="[ pvNXT Suite — connected dashboard preview | client screenshot yaha aayega | ratio 16:9 | 1280x720px | bg: #e6f7f9 ]"
              ratio="16/9"
              bg="#e6f7f9"
            />
          </div>
        </div>
      </section>

      {/* 2. WHAT IS pvNXT */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-[32px] lg:text-[40px] font-semibold text-ink">One connected suite for solar operations.</h2>
          <p className="text-muted max-w-2xl mx-auto mt-3 text-lg">
            pvNXT gives every solar role its own workspace – EPC, consumer, installer, O&M – with shared project data.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            {[
              { title: "Design & Sell", desc: "EPC workspace – Studio + Proposal", code: "D&S", icon: "/assets/icons/ico-solar-panel.svg" },
              { title: "Install & Track", desc: "Field teams – Go + Field App", code: "I&T", icon: "/assets/icons/ico-installer.svg" },
              { title: "Monitor & Maintain", desc: "Plant owners – Connect + SCADA", code: "M&M", icon: "/assets/icons/ico-monitoring.svg" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-line p-6 bg-white">
                <img 
                  src={item.icon} 
                  width="48" 
                  height="48" 
                  alt={`${item.title} icon – pvNXT`} 
                  className="w-12 h-12" 
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.outerHTML = `<div class="w-12 h-12 rounded-xl bg-[#e6f7f9] border border-[#baf0f5] flex items-center justify-center text-[#047a88] text-xs font-600">${item.code}</div><!-- ICON: ${item.icon} – Rajat to replace -->`;
                  }} 
                />
                <h3 className="font-medium text-ink mt-4">{item.title}</h3>
                <p className="text-sm text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS */}
      <section id="products" className="py-20 bg-[#f8fcfd]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-[32px] lg:text-[40px] font-semibold text-ink mb-10">6 products. One connected data layer.</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <ProductCard name="pvNXT Studio" tagline="EPC design and proposal workspace" href="/products/studio" status="Live" />
            <ProductCard name="pvNXT Connect" tagline="Consumer solar portal" href="/products/connect" status="Live" />
            <ProductCard name="pvNXT Go" tagline="Installer field portal" href="/products/go" status="Live" />
            <ProductCard name="Proposal System" tagline="Automated customer proposals" href="/products/proposal" status="Live" />
            <ProductCard name="Field App" tagline="Site survey capture" href="/products/field-app" status="Internal" />
            <ProductCard name="SCADA Monitoring" tagline="Plant operations monitoring" href="/products/scada" status="In progress" />
          </div>
        </div>
      </section>

      {/* 4. HOW pvNXT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[32px] lg:text-[40px] font-semibold text-ink">Accurate solar design – without repeated site visits.</h2>
            <p className="text-muted mt-3 text-lg">Satellite imagery to installed modules – connected.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { step: "1", title: "Capture – Satellite 3D", desc: "Stereo satellite imagery → photogrammetry → accurate 3D roof/site model. 0–1 site visit." },
              { step: "2", title: "Design & Analyze", desc: "Layout, shadow analysis, SLD – in pvNXT Studio – on accurate 3D data." },
              { step: "3", title: "Propose & Sell", desc: "Auto-generated BOQ, proposal and reports – customer-ready." },
              { step: "4", title: "Install & Monitor", desc: "pvNXT Go guides installers on-site. SCADA monitors post-install." },
            ].map((item) => (
              <div key={item.step}>
                <div className="w-10 h-10 rounded-full bg-pvnxt-tint text-pvnxt-dark font-semibold flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-medium text-ink mt-3">{item.title}</h3>
                <p className="text-sm text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <img
              src="/assets/img-3d-photogrammetry.png"
              alt="pvNXT satellite photogrammetry – 7 steps from stereo imagery to 3D roof model"
              width="1400"
              height="600"
              className="w-full rounded-2xl border border-line"
              loading="lazy"
              decoding="async"
              onError={(e)=>{const t=e.currentTarget as HTMLImageElement; t.style.background="#e6f7f9"; t.style.padding="24px"}}
            />
            <p className="text-center text-xs text-muted mt-3">
              Acquire stereo satellite imagery → Import images → Align & orient → 3D view → Dense point cloud → Model & texture → Final 3D output
            </p>
          </div>
        </div>
      </section>

      {/* 5. ECOSYSTEM */}
      <section className="py-20 bg-[#f8fcfd] relative overflow-hidden">
        <PatternBg opacity={0.06} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[32px] lg:text-[40px] font-semibold text-ink mb-10">One suite. Every role. Connected data.</h2>
          <div className="max-w-4xl mx-auto mt-10 relative">
            <img
              src="/assets/eco-diagram.png"
              alt="pvNXT connected ecosystem – Project Data center connected to Studio, Connect, Go, Proposal, Field App, SCADA"
              width="1200"
              height="680"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
              onError={(e)=>{const t=e.currentTarget as HTMLImageElement; if(!t.src.includes('/assets/')) t.src='/assets/eco-diagram.png'}}
            />
            <p className="text-xs text-muted text-center mt-3">Project Data center – Studio · Connect · Go · Proposal · Field App · SCADA</p>
          </div>
        </div>
      </section>

      {/* 6. STAT BAND */}
      <StatBand />

      {/* 7. FINAL CTA */}
      <div className="relative overflow-hidden">
        <PatternBg opacity={0.05} />
        <div className="relative z-10">
          <CTASection 
            heading="See pvNXT in action." 
            sub="Request a demo for your EPC team." 
            primaryText="Request a Demo" 
            primaryHref="/contact" 
          />
        </div>
      </div>
    </main>
  )
}
