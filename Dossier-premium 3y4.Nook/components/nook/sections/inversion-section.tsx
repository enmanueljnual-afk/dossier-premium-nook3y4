"use client"

import { getWhatsAppUrl } from "@/lib/whatsapp"
import { TrendingUp, Shield, Wallet } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Valor en ascenso",
    desc: "San Isidro lidera la revalorización en zona norte. Invertir en pozo multiplica el retorno."
  },
  {
    icon: Shield,
    title: "Respaldo sólido",
    desc: "Aureo Desarrollos con trayectoria comprobada en proyectos residenciales premium."
  },
  {
    icon: Wallet,
    title: "Sin intermediarios",
    desc: "Financiación directa. Sin banco, sin garante. Anticipo flexible + cuotas en pesos."
  },
]

const comparison = [
  { label: "CABA Premium", price: "USD 4.500/m²" },
  { label: "San Isidro Centro", price: "USD 3.200/m²" },
  { label: "NOOK (en pozo)", price: "USD 2.400/m²", highlight: true },
]

export function InversionSection() {
  return (
    <section id="inversion" className="bg-dark-3">
      {/* Header with gradient */}
      <div className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent" />
        
        <div className="relative max-w-lg mx-auto text-center">
          <div className="text-[10px] tracking-[0.3em] text-gold mb-4">OPORTUNIDAD DE INVERSIÓN</div>
          <h2 className="text-[28px] md:text-[36px] font-serif text-foreground leading-tight mb-4">
            El momento es ahora
          </h2>
          <p className="text-[13px] text-foreground/60 leading-relaxed">
            Precio de pozo, ubicación premium, financiación accesible.
            La ecuación que los inversores buscan.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="px-6 pb-12">
        <div className="max-w-lg mx-auto space-y-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-4 p-4 bg-background border border-foreground/10">
              <div className="w-10 h-10 flex items-center justify-center bg-gold/10 flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-[13px] text-foreground font-medium mb-1">{benefit.title}</h3>
                <p className="text-[11px] text-foreground/60 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Comparison */}
      <div className="px-6 pb-12">
        <div className="max-w-lg mx-auto">
          <div className="text-[10px] tracking-[0.2em] text-gold mb-4 text-center">COMPARATIVA DE PRECIOS</div>
          
          <div className="space-y-2">
            {comparison.map((item) => (
              <div 
                key={item.label}
                className={`flex justify-between items-center p-4 ${
                  item.highlight 
                    ? "bg-gold text-background" 
                    : "bg-background border border-foreground/10"
                }`}
              >
                <span className={`text-[12px] ${item.highlight ? "font-medium" : "text-foreground/70"}`}>
                  {item.label}
                </span>
                <span className={`text-[14px] font-serif ${item.highlight ? "font-medium" : "text-foreground"}`}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-foreground/40 text-center mt-3">
            *Valores referenciales al m² cubierto. Mayo 2025.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-12">
        <div className="max-w-lg mx-auto">
          <div className="text-center p-6 border border-gold/30 bg-gold/5">
            <p className="text-[13px] text-foreground/80 leading-relaxed mb-4 font-serif">
              ¿Querés analizar números concretos para tu inversión?
            </p>
            <button
              onClick={() => window.open(getWhatsAppUrl("investor"), "_blank")}
              className="w-full bg-gold text-background py-4 text-[11px] tracking-[0.18em] font-medium active:scale-[0.98] transition-transform"
            >
              SOLICITAR ANÁLISIS DE INVERSIÓN
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
