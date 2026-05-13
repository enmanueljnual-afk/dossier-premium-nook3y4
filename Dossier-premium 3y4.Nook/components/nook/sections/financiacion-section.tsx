"use client"

import { getWhatsAppUrl } from "@/lib/whatsapp"

const steps = [
  { num: "01", title: "Elegí tu unidad", desc: "2 o 3 ambientes según tu objetivo" },
  { num: "02", title: "Definí el anticipo", desc: "Flexible según tu disponibilidad" },
  { num: "03", title: "Cuotas en pesos", desc: "Hasta 72 cuotas ajustadas por CAC" },
  { num: "04", title: "Posesión 2027", desc: "Entrega estimada del proyecto" },
]

export function FinanciacionSection() {
  return (
    <section id="financiacion" className="bg-background px-6 py-16">
      <div className="max-w-lg mx-auto">
        <div className="text-[10px] tracking-[0.3em] text-gold mb-4">FINANCIACIÓN</div>
        <h2 className="text-[28px] md:text-[36px] font-serif text-foreground leading-tight mb-2">
          Sin banco.
        </h2>
        <h2 className="text-[28px] md:text-[36px] font-serif text-gold leading-tight mb-8">
          Sin garante.
        </h2>

        {/* Steps */}
        <div className="space-y-4 mb-10">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-gold text-background font-serif text-[14px] flex-shrink-0">
                {step.num}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-[14px] text-foreground font-medium">{step.title}</h3>
                <p className="text-[12px] text-foreground/60">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="p-5 bg-gold/5 border border-gold/20 mb-6">
          <div className="text-[10px] tracking-[0.15em] text-gold mb-2">LA CLAVE</div>
          <p className="text-[13px] text-foreground/80 leading-relaxed font-serif">
            ¿Con qué cuota mensual estarías cómodo? 
            Eso define qué unidad te conviene. Nosotros armamos el plan.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => window.open(getWhatsAppUrl("general"), "_blank")}
          className="w-full bg-gold text-background py-4 text-[11px] tracking-[0.18em] font-medium active:scale-[0.98] transition-transform"
        >
          SIMULAR MI FINANCIACIÓN
        </button>
      </div>
    </section>
  )
}
