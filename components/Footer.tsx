import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pvnxt-deep text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="text-2xl font-bold mb-4">
            <span className="font-medium text-white">pv</span>
            <span className="text-pvnxt">NXT</span>
          </div>
          <p className="text-sm text-pvnxt-soft mb-2">pvNXT is a product by Terranxt</p>
          <p className="text-sm text-pvnxt-soft">Incubated at IIT Delhi – FITT</p>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Products</h4>
          <ul className="space-y-3 text-sm text-pvnxt-soft">
            <li><Link href="/products/studio" className="hover:text-white transition">Studio</Link></li>
            <li><Link href="/products/connect" className="hover:text-white transition">Connect</Link></li>
            <li><Link href="/products/go" className="hover:text-white transition">Go</Link></li>
            <li><Link href="/products/proposal" className="hover:text-white transition">Proposal</Link></li>
            <li><Link href="/products/field-app" className="hover:text-white transition">Field App</Link></li>
            <li><Link href="/products/scada" className="hover:text-white transition">SCADA</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Live Portals</h4>
          <ul className="space-y-3 text-sm text-pvnxt-soft">
            <li><a href="https://epc.pvnxt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">epc.pvnxt.com</a></li>
            <li><a href="https://consumer.pvnxt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">consumer.pvnxt.com</a></li>
            <li><a href="https://installer.pvnxt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">installer.pvnxt.com</a></li>
            <li><a href="https://scada.pvnxt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">scada.pvnxt.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Contact</h4>
          <p className="text-sm text-pvnxt-soft mb-4">Let’s chat and see how Terranxt can power your future.</p>
          <ul className="space-y-2 text-sm text-pvnxt-soft">
            <li><a href="mailto:support@terranxt.com" className="hover:text-white transition">support@terranxt.com</a></li>
            <li><a href="tel:+918447444157" className="hover:text-white transition">+91-8447444157</a></li>
            <li className="leading-relaxed">12A, M3M Urbana Premium, Sector 67, Gurugram 122101</li>
            <li><a href="https://maps.app.goo.gl/Jyn11jgyqLdDVydn7" target="_blank" rel="noopener noreferrer" className="text-pvnxt hover:text-white transition underline underline-offset-4">View on Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 border-t border-pvnxt-deep/50 text-center text-xs text-pvnxt-soft">
        © 2026 Terranxt Pvt Ltd
      </div>
    </footer>
  );
}
