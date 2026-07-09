import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderBox from "@/components/PlaceholderBox";
import { products } from "@/lib/products";

interface ProductPageTemplateProps {
  slug: string;
}

export default function ProductPageTemplate({ slug }: ProductPageTemplateProps) {
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const otherProducts = products.filter((p) => p.slug !== slug);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      {/* HERO */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm text-[#5b6b73]">Products / {product.name.replace("pvNXT ", "")}</p>
          <h1 className="text-4xl font-bold text-[#0f1720] mt-2">{product.name}</h1>
          <p className="text-[#047a88] font-medium mt-2">{product.tagline}</p>
          
          <div className="text-xs text-[#5b6b73] mt-4 flex items-center gap-2">
            <span>For: {product.users}</span>
            <span>•</span>
            <span className="px-2.5 py-1 rounded-full bg-[#e6f7f9] text-[#047a88]">{product.status}</span>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Link 
              href="/contact" 
              className="bg-[#047a88] text-white px-6 py-3.5 rounded-xl font-medium min-h-[44px] inline-flex items-center justify-center"
            >
              Request a Demo
            </Link>
            {product.livePortal && (
              <a 
                href={product.livePortal} 
                target="_blank" 
                rel="noopener" 
                className="border border-[#069fb1] text-[#047a88] px-6 py-3.5 rounded-xl font-medium min-h-[44px] inline-flex items-center justify-center"
              >
                Visit live portal ↗
              </a>
            )}
          </div>
        </div>

        <div className="w-full">
          <PlaceholderBox 
            label={product.screenshotLabel} 
            ratio={product.screenshot.ratio} 
            bg={product.screenshot.bg} 
          />
        </div>
      </div>

      {/* Overview */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-[#0f1720]">What is {product.name}?</h2>
        <p className="mt-3 text-[#5b6b73] max-w-3xl">
          {product.overview}
        </p>
      </div>

      {/* Capabilities */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-[#0f1720]">What it does</h3>
        <ul className="list-disc pl-5 space-y-2 text-[15px] mt-3 text-[#5b6b73]">
          {product.capabilities.map((cap) => (
            <li key={cap}>{cap}</li>
          ))}
        </ul>
      </div>

      {/* Before vs After */}
      {(product.before || product.beforeList) && (product.after || product.afterList) && (
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-red-100 bg-white">
            <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-3">Before</p>
            {product.beforeList ? (
              <ul className="space-y-2">
                {product.beforeList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-red-500 font-semibold flex-shrink-0 mt-0.5">X</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted">{product.before}</p>
            )}
          </div>
          <div className="p-6 rounded-xl border border-emerald-100 bg-white">
            <p className="text-xs font-semibold text-emerald-500 uppercase tracking-wide mb-3">After</p>
            {product.afterList ? (
              <ul className="space-y-2">
                {product.afterList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-emerald-500 font-semibold flex-shrink-0 mt-0.5">V</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted">{product.after}</p>
            )}
          </div>
        </div>
      )}
 
      {/* Outcome + Process Impact */}
      {product.outcome && product.processImpact && (
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-pvnxt-tint border border-pvnxt/20 rounded-2xl p-6">
            <p className="text-xs font-semibold text-pvnxt-dark uppercase tracking-wide mb-2">Outcome You Get</p>
            <p className="text-sm text-ink font-medium">{product.outcome}</p>
          </div>
          <div className="bg-white border border-line rounded-2xl p-6">
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">How It Makes the Overall Process Faster</p>
            <p className="text-sm text-ink font-medium">{product.processImpact}</p>
          </div>
        </div>
      )}
 
      {/* Key Features */}
      <div className="bg-[#f8fcfd] py-12 -mx-6 px-6 lg:-mx-8 lg:px-8 mt-12">
        <h3 className="text-xl font-semibold text-[#0f1720]">Key features</h3>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {product.features.map((feature) => (
            <div key={feature} className="bg-white border border-[#dbe8ea] rounded-xl p-4 text-sm text-[#0f1720]">
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Who it's for */}
      <div className="py-10">
        <p className="font-medium text-[#0f1720]">Who it's for</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {product.userChips.map((chip) => (
            <span key={chip} className="px-3 py-1.5 rounded-full bg-[#e6f7f9] text-[#047a88] text-sm">
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Ecosystem Navigation */}
      <div className="border-t border-[#dbe8ea] pt-10 mt-12">
        <p className="text-sm text-[#5b6b73]">Part of the pvNXT suite</p>
        <div className="flex flex-wrap gap-3 mt-3 text-sm">
          {otherProducts.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="text-[#047a88] hover:underline">
              {p.name.replace("pvNXT ", "")}
            </Link>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 text-center">
        <h3 className="text-2xl font-semibold text-[#0f1720]">See {product.name} in action.</h3>
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
