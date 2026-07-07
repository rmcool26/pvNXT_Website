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
       <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f7f9] via-[#dff3f5] to-white min-h-[82vh] flex items-center">
         {/* Motion overlay */}
        <SolarHeroCanvas />
        {/* content wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#047a88] font-medium text-sm">Incubated at IIT Delhi – FITT</span>
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
            <div className="flex flex-wrap gap-x-5 mt-6 text-sm text-muted">
              <span>Satellite-based 3D roof modeling</span>
              <span>•</span>
              <span>Shadow analysis – accurate site data</span>
              <span>•</span>
              <span>BOQ + proposal – auto-generated</span>
            </div>
          </div>
          <div>
            <PlaceholderBox
              label="[ pvNXT Suite — connected dashboard preview | client screenshot yaha aayega | ratio 16:9 | 1280x720px | bg: #e6f7f9 ]"
              ratio="16/9"
              bg="#e6f7f9"
            />
          </div>
        </div>
      </section>

      {/* 2. WHAT IS pvNXT */}
      <section className="bg-white py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-ink font-sora">One connected suite for solar operations.</h2>
          <p className="text-muted max-w-2xl mx-auto mt-3 text-base md:text-lg">
            pvNXT gives every solar role its own workspace – EPC, consumer, installer, O&M – with shared project data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-12 text-left">
            {[
              { title: "Design & Sell", desc: "EPC workspace – Studio + Proposal", code: "D&S", icon: "/assets/icons/ico-solar-panel.svg", href: "/products/studio" },
              { title: "Install & Track", desc: "Field teams – Go + Field App", code: "I&T", icon: "/assets/icons/ico-installer.svg", href: "/products/go" },
              { title: "Monitor & Maintain", desc: "Plant owners – Connect + SCADA", code: "M&M", icon: "/assets/icons/ico-monitoring.svg", href: "/products/connect" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-2xl border border-line p-6 bg-white hover:border-pvnxt hover:shadow-md transition duration-200">
                <img 
                  src={item.icon} 
                  width="48" 
                  height="48" 
                  alt={`${item.title} icon – pvNXT`} 
                  className="w-12 h-12" 
                />
                <h3 className="font-medium text-ink mt-4">{item.title}</h3>
                <p className="text-sm text-muted mt-1">{item.desc}</p>
                <span className="text-[#047a88] font-medium text-sm mt-4 inline-block group-hover:underline">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS */}
      <section id="products" className="py-16 md:py-20 bg-[#f8fcfd]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-ink font-sora">6 products. One connected data layer.</h2>
            <p className="text-muted mt-3 text-base md:text-lg max-w-xl mx-auto">Each product connects to shared project data — no silos, no double entry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
       <section id="how-it-works" className="py-16 md:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center">
             <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-ink font-sora">From site capture to plant monitoring — connected.</h2>
             <p className="text-muted mt-3 text-lg">Satellite imagery to installed modules to live monitoring — one suite.</p>
           </div>
           <div className="hidden md:grid md:grid-cols-4 gap-4 mt-12 items-start">
             {[
               { step: "1", title: "Capture", desc: "Satellite imagery → accurate 3D roof/site model. Minimal site visits needed." },
               { step: "2", title: "Design and Sell", desc: "Layout, shadow analysis, SLD in Studio. Auto-generated BOQ and proposals." },
               { step: "3", title: "Install", desc: "pvNXT Go guides installers on-site. Field App captures survey data." },
               { step: "4", title: "Monitor and Maintain", desc: "Connect portal for consumers. SCADA for real-time plant monitoring and alerts." },
             ].map((item, index, array) => (
               <div key={item.step} className="flex items-start gap-3">
                 <div className="flex-1">
                   <div className="w-10 h-10 rounded-full bg-pvnxt-tint text-pvnxt-dark font-semibold flex items-center justify-center">
                     {item.step}
                   </div>
                   <h3 className="font-medium text-ink mt-3">{item.title}</h3>
                   <p className="text-sm text-muted mt-1">{item.desc}</p>
                 </div>
                 {index < array.length - 1 && (
                   <svg className="w-6 h-6 text-pvnxt mt-3 flex-shrink-0 -mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 )}
               </div>
             ))}
           </div>
           <div className="md:hidden flex flex-col gap-0 mt-12">
             {[
               { step: "1", title: "Capture", desc: "Satellite imagery → accurate 3D roof/site model. Minimal site visits needed." },
               { step: "2", title: "Design and Sell", desc: "Layout, shadow analysis, SLD in Studio. Auto-generated BOQ and proposals." },
               { step: "3", title: "Install", desc: "pvNXT Go guides installers on-site. Field App captures survey data." },
               { step: "4", title: "Monitor and Maintain", desc: "Connect portal for consumers. SCADA for real-time plant monitoring and alerts." },
             ].map((item, index, array) => (
               <div key={item.step} className="flex gap-4">
                 <div className="flex flex-col items-center">
                   <div className="w-10 h-10 rounded-full bg-pvnxt-tint text-pvnxt-dark font-semibold flex items-center justify-center shrink-0 z-10">
                     {item.step}
                   </div>
                   {index < array.length - 1 && (
                     <div className="w-px flex-1 bg-line"></div>
                   )}
                 </div>
                 <div className="pb-10">
                   <h3 className="font-medium text-ink">{item.title}</h3>
                   <p className="text-sm text-muted mt-1">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
          <div className="mt-12">
              <img
               src="/assets/img-3d-photogrammetry.webp"
               alt="pvNXT satellite photogrammetry – 7 steps from stereo imagery to 3D roof model"
               width="1400"
               height="600"
               className="w-full rounded-2xl border border-line"
               loading="lazy"
               decoding="async"
             />
             <p className="text-center text-xs text-muted mt-3">
               Satellite capture → 3D roof model — automated, accurate, no repeated site visits.
             </p>
           </div>
           <div className="text-center mt-8">
             <Link href="/products/studio" className="text-[#047a88] font-medium hover:underline">See how Studio works →</Link>
           </div>
         </div>
       </section>

      {/* 5. ECOSYSTEM & WORKSPACES */}
      <section className="py-16 md:py-20 bg-[#f8fcfd] relative overflow-hidden">
        <PatternBg opacity={0.06} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-ink mb-4 font-sora">
            One suite. Every role. Connected data.
          </h2>
          <p className="text-muted text-base md:text-lg mb-10">
            Find your workspace — every product shares the same project data.
          </p>
          <div className="max-w-4xl mx-auto mb-12">
            <img
               src="/assets/eco-diagram.webp"
               alt="pvNXT connected ecosystem – Project Data center connected to Studio, Connect, Go, Proposal, Field App, SCADA"
               width="1200"
               height="680"
               className="w-full h-auto rounded-2xl"
               loading="lazy"
               decoding="async"
             />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "EPC", hint: "Design and Sell", href: "/products/studio" },
              { label: "Homeowner", hint: "Track your solar", href: "/products/connect" },
              { label: "Installer", hint: "Field execution", href: "/products/go" },
              { label: "Proposal Creator", hint: "Auto proposals", href: "/products/proposal" },
              { label: "O&M", hint: "Monitor and maintain", href: "/products/scada" },
            ].map((role) => (
              <Link 
                key={role.label} 
                href={role.href} 
                className="group flex flex-col items-center px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-white border border-line hover:border-pvnxt hover:shadow-md transition duration-200 min-w-[120px]"
              >
                <span className="font-bold text-ink">{role.label}</span>
                <span className="text-xs text-muted mt-1">{role.hint}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <div className="relative overflow-hidden">
        <PatternBg opacity={0.05} />
        <div className="relative z-10">
           <CTASection 
             heading="See pvNXT in action." 
             sub="Book a demo for your team — EPC, installer, or O&M." 
             primaryText="Request a Demo" 
             primaryHref="/contact" 
             secondaryText="Explore products"
             secondaryHref="#products"
           />
        </div>
      </div>
    </main>
  )
}
