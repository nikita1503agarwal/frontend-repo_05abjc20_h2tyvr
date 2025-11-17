import { Menu, Phone, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 grid place-items-center text-white">
              <Sparkles size={16} />
            </div>
            <span className="font-semibold tracking-tight">Flames Voice</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="px-4 py-2 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700">Book a demo</a>
            <a href="#get-started" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow hover:opacity-95 transition">Start free</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
