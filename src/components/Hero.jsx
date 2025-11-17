import Spline from '@splinetool/react-spline';
import { CheckCircle2, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-24" id="home">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-orange-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-purple-600/10 text-purple-700 ring-1 ring-purple-600/20">
              <PhoneCall size={14} /> AI Voice Agent for Business
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Answer every call like your best receptionist
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              A fully automated AI voice tool that answers your business phone calls day and night — faster, cheaper, and always available. It can respond to questions, book appointments, send emails & WhatsApp, and handle routine tasks so you never miss a lead.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow hover:opacity-95 transition text-center">
                Start free
              </a>
              <a href="#demo" className="px-5 py-3 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 text-center">
                Book a demo
              </a>
            </div>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="text-green-600 mt-0.5" size={18} /> 24/7 live call answering</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="text-green-600 mt-0.5" size={18} /> Appointment booking & reminders</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="text-green-600 mt-0.5" size={18} /> Sends emails & WhatsApp follow-ups</li>
            </ul>
          </div>

          <div className="relative h-[520px] rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-lg shadow-xl">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
