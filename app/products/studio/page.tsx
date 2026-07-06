import PlaceholderBox from "@/components/PlaceholderBox";
import Link from "next/link";

export const metadata = {
  title: "pvNXT Studio – pvNXT | Terranxt",
  description: "pvNXT Studio is the EPC workspace for solar system design. Create layouts, run roof analysis, generate BOQ and reports, and prepare proposal-ready outputs – in one place.",
};

export default function StudioPage() {
  const features = [
    "Solar layout creation",
    "Roof and shadow analysis",
    "BOQ generation",
    "Project reports",
    "Proposal-ready design export",
    "Project tracking",
  ];

  const users = ["EPC designers", "Sales teams", "Solar businesses"];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm text-[#5b6b73]">Products / Studio</p>
          <h1 className="text-4xl font-bold text-[#0f1720] mt-2">pvNXT Studio</h1>
          <p className="text-[#047a88] font-medium mt-2">EPC design and proposal workspace.</p>
          
          <div className="text-xs text-[#5b6b73] mt-4 flex items-center gap-2">
            <span>For: EPC designers, sales teams, solar businesses</span>
            <span>•</span>
            <span className="px-2.5 py-1 rounded-full bg-[#e6f7f9] text-[#047a88]">Live</span>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Link 
              href="/contact" 
              className="bg-[#047a88] text-white px-6 py-3.5 rounded-xl font-medium min-h-[44px] inline-flex items-center justify-center"
            >
              Request a Demo
            </Link>
            <a 
              href="https://epc.pvnxt.com" 
              target="_blank" 
              rel="noopener" 
              className="border border-[#069fb1] text-[#047a88] px-6 py-3.5 rounded-xl font-medium min-h-[44px] inline-flex items-center justify-center"
            >
              Visit live portal ↗
            </a>
          </div>
        </div>

        <div className="w-full">
          <PlaceholderBox
            label="[ pvNXT Studio — layout & BOQ screen | client screenshot yaha aayega | ratio 16:9 | 1280x720px | bg: #ffffff ]"
            ratio="16/9"
            bg="#ffffff"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-[#0f1720]">What is pvNXT Studio?</h2>
        <p className="mt-3 text-[#5b6b73] max-w-3xl">
          pvNXT Studio is the EPC workspace for solar system design. Create layouts, run roof analysis, generate BOQ and reports, and prepare proposal-ready outputs – in one place.
        </p>
      </div>

      {/* Capabilities Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-[#0f1720]">What it does</h3>
        <ul className="list-disc pl-5 space-y-2 text-[15px] mt-3 text-[#5b6b73]">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Key Features Grid */}
      <div className="bg-[#f8fcfd] py-12 -mx-6 px-6 lg:-mx-8 lg:px-8 mt-12">
        <h3 className="text-xl font-semibold text-[#0f1720]">Key features</h3>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {features.map((feature) => (
            <div key={feature} className="bg-white border border-[#dbe8ea] rounded-xl p-4 text-sm text-[#0f1720]">
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Who it's for Section */}
      <div className="py-10">
        <p className="font-medium text-[#0f1720]">Who it's for</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {users.map((user) => (
            <span key={user} className="px-3 py-1.5 rounded-full bg-[#e6f7f9] text-[#047a88] text-sm">
              {user}
            </span>
          ))}
        </div>
      </div>

      {/* Ecosystem Navigation */}
      <div className="border-t border-[#dbe8ea] pt-10 mt-12">
        <p className="text-sm text-[#5b6b73]">Part of the pvNXT suite</p>
        <div className="flex flex-wrap gap-3 mt-3 text-sm">
          <Link href="/products/connect" className="text-[#047a88] hover:underline">Connect</Link>
          <Link href="/products/go" className="text-[#047a88] hover:underline">Go</Link>
          <Link href="/products/proposal" className="text-[#047a88] hover:underline">Proposal</Link>
          <Link href="/products/field-app" className="text-[#047a88] hover:underline">Field App</Link>
          <Link href="/products/scada" className="text-[#047a88] hover:underline">SCADA</Link>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 text-center">
        <h3 className="text-2xl font-semibold text-[#0f1720]">See pvNXT Studio in action.</h3>
        <Link 
          href="/contact" 
          className="bg-[#047a88] text-white px-6 py-3.5 rounded-xl font-medium min-h-[44px] mt-4 inline-block"
        >
          Request a Demo
        </Link>
      </div>
    </div>
  );
}
