import { Star } from "lucide-react";

export default function SocialProof() {
  const logos = [
    { name: "Acme", text: "Acme" },
    { name: "Pulse", text: "Pulse" },
    { name: "Northwind", text: "Northwind" },
    { name: "Vertex", text: "Vertex" },
    { name: "Nimbus", text: "Nimbus" },
    { name: "Aurora", text: "Aurora" },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="#F59E0B" className="text-amber-500" />
            ))}
          </div>
          <p className="mt-2 text-sm text-slate-500">Loved by growing sales and support teams</p>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((l) => (
            <div
              key={l.name}
              className="h-12 rounded-xl border border-slate-200 bg-white/60 backdrop-blur grid place-items-center text-slate-500 text-sm font-medium"
            >
              {l.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
