"use client"

import { FloatingNav } from "./floating-nav"
import { HeroSection } from "./sections/hero-section"
import { ProyectoSection } from "./sections/proyecto-section"
import { UnidadesSection } from "./sections/unidades-section"
import { VivirSection } from "./sections/vivir-section"
import { InversionSection } from "./sections/inversion-section"
import { FinanciacionSection } from "./sections/financiacion-section"
import { ContactoSection } from "./sections/contacto-section"

export function NookPresentation() {
  return (
    <div className="bg-background text-foreground font-serif">
      <h1 className="sr-only">NOOK San Isidro — Unidades exclusivas de 2 y 3 ambientes</h1>
      
      <FloatingNav />
      
      <main className="scroll-smooth">
        <HeroSection />
        <ProyectoSection />
        <UnidadesSection />
        <VivirSection />
        <InversionSection />
        <FinanciacionSection />
        <ContactoSection />
      </main>
    </div>
  )
}
