import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Flames Voice. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
