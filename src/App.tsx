import { useState } from 'react';
import Hero from './components/Hero';
import BrandShowcase from './components/BrandShowcase';
import Services from './components/Services';
import Work from './components/Work';
import Features from './components/Features';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import SEOSection from './components/SEOSection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <div id="home">
        <Hero />
      </div>
      <BrandShowcase />
      <Services />
      <Work />
      <Features />
      <Process />
      <Pricing />
      <CTA />
      <SEOSection />
      <Footer />
    </div>
  );
}

export default App;
