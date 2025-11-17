import { PhoneCall, Bot, Calendar, MessageSquare } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: PhoneCall,
      title: "Connect your phone",
      desc: "Plug into your existing number or forwarding rules with a simple setup.",
    },
    {
      icon: Bot,
      title: "Train your agent",
      desc: "Add FAQs, integrations, and workflows. No code required.",
    },
    {
      icon: Calendar,
      title: "Automate bookings",
      desc: "Sync calendars to schedule calls, meetings, and reminders automatically.",
    },
    {
      icon: MessageSquare,
      title: "Follow up everywhere",
      desc: "Send email and WhatsApp summaries, quotes, and next steps instantly.",
    },
  ];

  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">From first ring to booked meeting, your AI agent handles the workflow end-to-end.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm shadow-sm">
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-tr from-purple-600/10 via-blue-600/10 to-orange-400/10 ring-1 ring-slate-200 mb-4">
                <Icon className="text-slate-700" size={18} />
              </div>
              <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
