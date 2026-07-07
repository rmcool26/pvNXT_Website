"use client"
import Link from "next/link"
type Props = {name:string; tagline:string; href:string; status?:string}
export default function ProductCard({name,tagline,href,status="Live"}:Props){
  const statusStyles: Record<string, string> = {
    "Live": "bg-[#e6f7f9] text-[#047a88]",
    "Internal": "bg-amber-50 text-amber-700",
    "In progress": "bg-blue-50 text-blue-700"
  };
  const style = statusStyles[status] || statusStyles["Live"];

  return (<div className="rounded-2xl border border-line bg-white p-6 shadow-sm hover:border-[#069fb1] hover:-translate-y-1 transition duration-200 h-full flex flex-col">
    <div className="flex justify-between items-start gap-3">
      <h3 className="text-[18px] font-semibold text-ink">{name}</h3>
      <span className={`text-[11px] px-2.5 py-1 rounded-full ${style} font-medium whitespace-nowrap`}>{status}</span>
    </div>
    <p className="text-sm text-muted mt-2 flex-1">{tagline}</p>
    <Link href={href} className="text-[#047a88] font-medium text-sm mt-4 hover:underline">Explore →</Link>
  </div>)
}
