"use client";
import Link from "next/link"
import dynamic from "next/dynamic"
import { Building2, Wrench, BarChart3, Users } from "lucide-react"
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

      {/* 2. OLD WAY VS PVNXT WAY */}
      <section className="py-20 md:py-28 px-6 bg-pvnxt-tint/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-sora">Old Way vs pvNXT Way</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">The solar industry runs on disconnected tools. pvNXT addresses that.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-red-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="text-red-500 font-bold">X</span>
                </div>
                <h3 className="text-lg font-semibold text-ink">The Old Way</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-500 font-semibold flex-shrink-0 mt-0.5">X</span>
                  Leads managed in WhatsApp chats
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-500 font-semibold flex-shrink-0 mt-0.5">X</span>
                  Designs done in manual CAD, takes days
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-500 font-semibold flex-shrink-0 mt-0.5">X</span>
                  Proposals typed in Word or Excel
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-500 font-semibold flex-shrink-0 mt-0.5">X</span>
                  Projects tracked on whiteboards
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-500 font-semibold flex-shrink-0 mt-0.5">X</span>
                  Site visits for every small update
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-500 font-semibold flex-shrink-0 mt-0.5">X</span>
                  Manual handoffs between teams
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red-500 font-semibold flex-shrink-0 mt-0.5">X</span>
                  Days-to-weeks of delay at each step
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-emerald-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                  <span className="text-emerald-500 font-bold">V</span>
                </div>
                <h3 className="text-lg font-semibold text-ink">The pvNXT Way</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-emerald-500 font-semibold flex-shrink-0 mt-0.5">V</span>
                  Every lead tracked in the system
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-emerald-500 font-semibold flex-shrink-0 mt-0.5">V</span>
                  Designs generated in minutes
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-emerald-500 font-semibold flex-shrink-0 mt-0.5">V</span>
                  Proposals created with one click
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-emerald-500 font-semibold flex-shrink-0 mt-0.5">V</span>
                  Projects managed in real time
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-emerald-500 font-semibold flex-shrink-0 mt-0.5">V</span>
                  Site data captured on mobile, remotely
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-emerald-500 font-semibold flex-shrink-0 mt-0.5">V</span>
                  Data flows between portals automatically
                </li>
                <li className="text-sm text-muted flex items-start gap-2">
                  <span className="text-emerald-500 font-semibold flex-shrink-0 mt-0.5">V</span>
                  Connected, faster, and accurate
                </li>
              </ul>
            </div>
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

      {/* 4. HOW THE ECOSYSTEM WORKS */}
      <section id="ecosystem" className="py-20 md:py-28 px-6 bg-pvnxt-tint/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-sora">How the Ecosystem Works</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">One connected flow from lead to commissioning. Data enters once and moves forward without re-entry.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
            {[
              { num: "1", name: "Connect", func: "Feasibility and Quote" },
              { num: "2", name: "Studio", func: "Design and Output" },
              { num: "3", name: "Proposal", func: "Auto-Generate" },
              { num: "4", name: "Go", func: "Track Installation" },
              { num: "5", name: "Field App", func: "Site Capture" },
              { num: "6", name: "SCADA", func: "Monitor and Alert" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="bg-white border border-line rounded-2xl p-4 mb-2">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-pvnxt-tint flex items-center justify-center text-pvnxt-dark font-bold text-xs">
                    {step.num}
                  </div>
                </div>
                <p className="text-xs font-semibold text-ink">{step.name}</p>
                <p className="text-[10px] text-muted mt-0.5">{step.func}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-line rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-ink mb-6">What Changes With a Connected System</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pvnxt-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pvnxt-dark text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">The customer starts the flow</p>
                    <p className="text-sm text-muted mt-1">A homeowner checks feasibility and gets a quote through Connect. When they proceed, the data moves straight to Studio - no one has to re-enter anything.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pvnxt-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pvnxt-dark text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">Design to proposal, no manual step</p>
                    <p className="text-sm text-muted mt-1">Studio produces the layout, BOQ, and report in one workspace. Proposal auto-generates from that data - no manual creation, no copy-paste, no waiting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pvnxt-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pvnxt-dark text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">Site execution stays visible</p>
                    <p className="text-sm text-muted mt-1">Field App captures complete site data in one visit and feeds it to Studio. Go gives EPC real-time progress with daily photo proofs and delay reasons - no more chasing installers on WhatsApp.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pvnxt-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pvnxt-dark text-xs font-bold">4</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">Operations stay accountable</p>
                    <p className="text-sm text-muted mt-1">SCADA gives each stakeholder the right view - live alerts, assigned work orders, and full activity history. Every issue has a clear owner, so nothing gets dropped.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pvnxt-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pvnxt-dark text-xs font-bold">5</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">The impact is cumulative</p>
                    <p className="text-sm text-muted mt-1">Each portal removes its own manual steps. The connections between them remove the handoff delays. Together, the overall project timeline shrinks significantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO USES PVNXT */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-sora">Who Uses pvNXT</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">Built for every team in the solar project lifecycle.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "EPC Companies", desc: "Manage multiple projects end-to-end with full visibility and control." },
              { icon: Wrench, title: "Solar Installers", desc: "From site survey to commissioning, execute work with digital tools." },
              { icon: BarChart3, title: "O and M Teams", desc: "Monitor plant performance, identify faults early, and maintain uptime." },
              { icon: Users, title: "Project Managers", desc: "Track milestones, allocate resources, and deliver projects on schedule." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-line rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-pvnxt-tint flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-pvnxt" />
                </div>
                <h3 className="font-semibold text-ink text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REAL RESULTS */}
      <section className="py-20 md:py-28 px-6 bg-pvnxt-tint/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-sora">Real Results</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">Measured improvements from teams using pvNXT.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "90 percent", label: "Reduction in design time" },
              { val: "0", label: "Unnecessary site visits" },
              { val: "3x", label: "Faster proposal generation" },
              { val: "40 percent", label: "Faster project delivery" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-line rounded-2xl p-8 text-center">
                <p className="text-4xl md:text-5xl font-bold text-pvnxt tracking-tight font-sora">{stat.val}</p>
                <p className="text-sm text-muted mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Full data traceability.", desc: "Every action, change, and approval is logged." },
              { title: "Better team coordination.", desc: "Teams work from the same data, not different versions." },
              { title: "Scalable operations.", desc: "Handle more projects without adding headcount." },
            ].map((point) => (
              <div key={point.title} className="flex items-start gap-3">
                <span className="text-pvnxt font-bold text-sm mt-0.5">→</span>
                <p className="text-sm text-muted">
                  <span className="font-medium text-ink">{point.title}</span>
                  {point.desc}
                </p>
              </div>
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
