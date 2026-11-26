/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BenefitsSection } from './components/BenefitsSection';
import { CatalogSection } from './components/CatalogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IdentitySection } from './components/IdentitySection';
import { IntroStrip } from './components/IntroStrip';
import { Navbar } from './components/Navbar';
import { CASE_DESIGNS } from './data/designs';

export default function App() {
  const [selectedDesignName, setSelectedDesignName] = useState<string>(
    CASE_DESIGNS[0]?.name ?? 'Bandera & Sol de Mayo'
  );

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C1F22]">
      <Navbar />
      <main>
        <Hero />
        <IntroStrip />
        <CatalogSection onSelectDesignForInquiry={setSelectedDesignName} />
        <IdentitySection />
        <BenefitsSection />
        <ContactSection
          selectedDesignName={selectedDesignName}
          onSelectedDesignChange={setSelectedDesignName}
        />
      </main>
      <Footer />
    </div>
  );
}
