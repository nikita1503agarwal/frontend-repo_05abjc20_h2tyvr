export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white/70 backdrop-blur-sm p-10">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-orange-400/10" />
          <h3 className="relative text-3xl font-bold tracking-tight text-slate-900">Turn missed calls into booked revenue</h3>
          <p className="relative mt-3 text-slate-600 max-w-2xl mx-auto">Launch your AI voice receptionist in minutes. No code. No new phone numbers. Just connect and go.</p>
          <div className="relative mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#demo" className="px-5 py-3 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700">Book a live demo</a>
            <a href="#" className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow hover:opacity-95 transition">Start free</a>
          </div>
        </div>
      </div>
    </section>
  );
}
