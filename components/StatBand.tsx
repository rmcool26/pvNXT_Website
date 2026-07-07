export default function StatBand() {
  const stats = [
    { value: "Astron Green", label: "Pilot EPC partner" },
    { value: "Pilot", label: "Live and successful" },
    { value: "6", label: "Connected products" },
    { value: "0", label: "Repeated site visits" },
    { value: "IIT Delhi", label: "FITT incubated" },
  ];

  return (
    <section className="py-12 md:py-14 border-y border-line bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-semibold text-pvnxt font-sora text-[28px] md:text-[32px]">
                {stat.value}
              </div>
              <div className="text-[13px] md:text-sm text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
