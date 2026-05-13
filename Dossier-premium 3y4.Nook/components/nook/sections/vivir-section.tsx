"use client"

import { getWhatsAppUrl } from "@/lib/whatsapp"

const features = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-scaled-pZaYRNZOoaYdASrj4jhWvG5WZsAUvI.jpg",
    title: "Despertar con vista",
    desc: "Ventanales de piso a techo orientados al verde de San Isidro."
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-scaled-thbfx0JXndyT2OKp06AgQ9zsO794mu.jpg",
    title: "Tu balcón, tu refugio",
    desc: "Cada unidad con balcón propio para extender tu living."
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-scaled-auSgVnqFpU4AWAEVm1ePctlTAaCdzl.jpg",
    title: "Espacios que fluyen",
    desc: "Diseño abierto donde cada metro está pensado para vivir."
  },
]

const locations = [
  { place: "Centro San Isidro", time: "5 min" },
  { place: "Estación de tren", time: "8 min" },
  { place: "Colegios", time: "10 min" },
  { place: "Autopista", time: "7 min" },
]

export function VivirSection() {
  return (
    <section id="vivir" className="bg-background">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-scaled-VTGsFMRQh9bvkkyeRcJY9wbr2EIKWc.jpg"
          alt="Interior de departamento NOOK"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-lg mx-auto">
            <div className="text-[10px] tracking-[0.3em] text-gold mb-3">VIVIR EN NOOK</div>
            <h2 className="text-[28px] md:text-[36px] font-serif text-foreground leading-tight">
              El barrio que conocés.
              <br />
              <span className="text-gold">La casa que merecés.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-12">
        <div className="max-w-lg mx-auto space-y-6">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-[14px] text-foreground font-medium mb-1">{feature.title}</h3>
                <p className="text-[12px] text-foreground/60 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="px-6 pb-12">
        <div className="max-w-lg mx-auto">
          <div className="bg-dark-3 p-5 border border-foreground/10">
            <div className="text-[10px] tracking-[0.2em] text-gold mb-4">UBICACIÓN PRIVILEGIADA</div>
            <div className="text-[13px] text-foreground/70 mb-4">
              Centenario 2400, San Isidro
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {locations.map((loc) => (
                <div key={loc.place} className="flex justify-between items-center py-2 border-b border-foreground/5">
                  <span className="text-[11px] text-foreground/70">{loc.place}</span>
                  <span className="text-[11px] text-gold">{loc.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => window.open(getWhatsAppUrl("living"), "_blank")}
            className="w-full mt-4 bg-gold text-background py-4 text-[11px] tracking-[0.18em] font-medium active:scale-[0.98] transition-transform"
          >
            COORDINAR VISITA
          </button>
        </div>
      </div>
    </section>
  )
}
