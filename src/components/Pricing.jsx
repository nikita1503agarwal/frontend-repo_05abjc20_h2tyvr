import { Check } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$49/mo",
      highlight: "Best for solos and small teams",
      features: [
        "1 agent, 500 minutes",
        "Inbound calls",
        "Basic FAQ + routing",
        "Email summaries",
      ],
      cta: "Start free",
      popular: false,
    },
    {
      name: "Growth",
      price: "$199/mo",
      highlight: "Most popular for growing teams",
      features: [
        "3 agents, 3,000 minutes",
        "Inbound & outbound",
        "Bookings + reminders",
        "WhatsApp + integrations",
      ],
      cta: "Start free",
      popular: true,
    },
    {
      name: "Scale",
      price: "Custom",
      highlight: "For high-volume and enterprise",
      features: [
        "Unlimited agents",
        "Priority routing",
        "SLA + SSO + audit logs",
        "Custom integrations",
      ],
      cta: "Talk to sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Flexible pricing that scales with you</h2>
          <p className="mt-3 text-slate-600">Transparent plans with minutes included. Upgrade anytime as your volume grows.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-6 rounded-2xl border ${
                tier.popular ? "border-purple-400 shadow-xl" : "border-slate-200 shadow-sm"
              } bg-white/70 backdrop-blur-sm`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-2 py-1 rounded-full bg-purple-600 text-white">
                  Most popular
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{tier.highlight}</p>
                <p className="mt-4 text-3xl font-bold text-slate-900">{tier.price}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-700">
                    <Check size={16} className="mt-0.5 text-green-600" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#get-started" className={`w-full inline-block text-center px-4 py-2 rounded-lg ${
                  tier.popular
                    ? "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white"
                    : "border border-slate-300 text-slate-700 hover:border-slate-400"
                }`}>
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
