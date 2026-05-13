"use client"

import { getWhatsAppUrl } from "@/lib/whatsapp"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("proyecto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[100dvh] flex flex-col">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-1229x2048-t8dZxzHg2RMF9GKUWSNzcNYHQcLshm.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-end px-6 pb-8 pt-20">
        {/* Top Badge */}
        <div className="absolute top-6 left-0 right-0 flex justify-center">
          <div className="text-[9px] tracking-[0.3em] text-white/80 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-sm">
            AUREO DESARROLLOS
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-8">
          <h1 className="text-[72px] md:text-[100px] font-serif text-white leading-none tracking-[0.08em] mb-4">
            NOOK
          </h1>
          <div className="text-[11px] md:text-[13px] tracking-[0.25em] text-white/70 mb-6">
            CENTENARIO 2400 · SAN ISIDRO
          </div>
          
          <div className="w-16 h-px bg-white/40 mx-auto mb-6" />
          
          <p className="text-[13px] md:text-[15px] text-white/80 leading-relaxed max-w-[280px] mx-auto mb-8 font-serif">
            Unidades exclusivas de 2 y 3 ambientes.
            <br />
            En pozo. Hasta 72 cuotas en pesos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 max-w-[280px] mx-auto">
            <button
              onClick={() => window.open(getWhatsAppUrl("investor"), "_blank")}
              className="w-full bg-primary text-white py-4 text-[11px] tracking-[0.2em] font-medium active:scale-[0.98] transition-all hover:bg-primary/90 rounded-sm"
            >
              QUIERO INVERTIR
            </button>
            <button
              onClick={() => window.open(getWhatsAppUrl("living"), "_blank")}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white py-4 text-[11px] tracking-[0.2em] active:scale-[0.98] transition-all hover:bg-white/20 rounded-sm"
            >
              QUIERO VIVIR ACÁ
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-white/50 animate-bounce mx-auto"
          aria-label="Ver más"
        >
          <span className="text-[9px] tracking-[0.2em]">DESCUBRÍ MÁS</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
