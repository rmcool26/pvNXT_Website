import Link from "next/link";
import { Metadata } from "next";
import PlaceholderBox from "@/components/PlaceholderBox";

export const metadata: Metadata = {
  title: "About pvNXT – Terranxt",
  description: "Learn more about Terranxt and the pvNXT connected workflow suite for solar EPC and O&M teams.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 space-y-20">
      {/* Hero */}
      <div className="text-center space-y-6">
        <p className="text-pvnxt font-medium uppercase tracking-wider text-sm">
          About Terranxt
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-ink tracking-tight">
          pvNXT is built by Terranxt.
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          A connected workflow suite for solar EPC and O&M teams.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-ink">Why we exist</h2>
          <p className="text-lg text-muted leading-relaxed">
            Solar EPC work still happens across phone calls, WhatsApp groups and spreadsheets. Details get missed, proposals take days, and no one has a single view of a project. Terranxt built pvNXT to put that work in one system — every team in its own workspace, on one set of project data.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-ink">What pvNXT is</h2>
          <p className="text-lg text-muted leading-relaxed">
            Six connected products on one data layer — Studio, Connect, Go, Proposal, Field App and SCADA. Each one replaces a manual step in the solar workflow, from design to monitoring.
          </p>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="max-w-5xl mx-auto">
        <PlaceholderBox 
          label="[ Terranxt / pvNXT team or office photo | client image | 16:9 ]" 
          ratio="16/9" 
        />
      </div>

      {/* Trust Strip */}
      <div className="text-center py-12 border-y border-line">
        <p className="text-muted font-medium">
          Incubated at IIT Delhi – FITT &nbsp;·&nbsp; Built in India &nbsp;·&nbsp; Six products, one data layer.
        </p>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <Link 
          href="/contact" 
          className="bg-[#047a88] text-white px-6 py-3.5 rounded-xl font-medium min-h-[44px] inline-flex items-center justify-center transition-colors hover:bg-pvnxt-dark"
        >
          Request a Demo
        </Link>
      </div>
    </div>
  );
}
