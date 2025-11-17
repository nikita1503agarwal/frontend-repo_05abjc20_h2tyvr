import { Calendar, Mail, MessageCircle, Headphones, Shield, Zap } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Headphones,
      title: 'Human-like call handling',
      desc: 'Understands intent, asks clarifying questions, and responds naturally — no robotic pauses.'
    },
    {
      icon: Calendar,
      title: 'Bookings & reservations',
      desc: 'Connect your calendar and let it book, reschedule, and send confirmations automatically.'
    },
    {
      icon: Mail,
      title: 'Email follow-ups',
      desc: 'Sends summaries, quotes, and confirmations instantly while the lead is still warm.'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp messages',
      desc: 'Answers on WhatsApp, sends reminders and updates, and keeps conversations in one place.'
    },
    {
      icon: Shield,
      title: 'Secure & compliant',
      desc: 'Enterprise-grade security with audit logs, PII redaction, and role-based access.'
    },
    {
      icon: Zap,
      title: 'Plug-and-play',
      desc: 'Works with your existing phone system and tools. Set up in minutes, not weeks.'
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything your callers need, instantly</h2>
          <p className="mt-3 text-slate-600">Replace hold music with real answers. Your AI agent handles common requests and routes the rest to your team.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition">
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
