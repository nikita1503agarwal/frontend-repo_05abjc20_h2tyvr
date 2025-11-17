import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How fast can I get set up?",
      a: "Most customers are live the same day. Connect your number and add a few FAQs to get started.",
    },
    {
      q: "Does it work with my phone system?",
      a: "Yes. We integrate with common PBX and VoIP providers or use simple call forwarding.",
    },
    { q: "Can it make outbound calls?", a: "Yes on Growth and Scale plans, including power-dialing and cadences." },
    {
      q: "Is the agent human-like?",
      a: "It uses advanced speech synthesis and latency-optimized streaming for natural conversation.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">If you can’t find what you’re looking for, we’re happy to help.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="p-6 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-tr from-purple-600/10 via-blue-600/10 to-orange-400/10 ring-1 ring-slate-200">
                  <HelpCircle className="text-slate-700" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{f.q}</h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
