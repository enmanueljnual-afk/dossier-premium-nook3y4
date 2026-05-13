"use client"

import { useState } from "react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-scaled-igMXGILVltPQEWTXD8aI5C7JknpDYy.jpg",
    alt: "Living con panel de madera",
    label: "LIVING"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-scaled-hPbhD6nPPVxz0cS3RbTi21O50Ejdl.jpg",
    alt: "Comedor con cocina integrada",
    label: "COMEDOR"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-scaled-sGZEm8YSV2XReAzEFjv1OTygMvyYkS.jpg",
    alt: "Dormitorio principal",
    label: "DORMITORIO"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-scaled-thbfx0JXndyT2OKp06AgQ9zsO794mu.jpg",
    alt: "Balcón terraza",
    label: "BALCÓN"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07_DEPTO_02_BAN%CC%83O_01-gaDHYfRnwRpcRZAv6YN5jLqGlKKyGf.jpg",
    alt: "Baño moderno",
    label: "BAÑO"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-scaled-xddqfGs3mkVUzta6g0HKGLqpi2zAqp.jpg",
    alt: "Cocina equipada",
    label: "COCINA"
  },
]

const units = [
  {
    type: "2 AMB",
    title: "2 Ambientes",
    size: "52 a 58 m²",
    features: ["Living-comedor", "1 dormitorio", "1 baño", "Balcón"],
    highlight: false
  },
  {
    type: "3 AMB",
    title: "3 Ambientes",
    size: "78 a 86 m²",
    features: ["Living-comedor", "2 dormitorios", "2 baños", "Balcón"],
    highlight: true
  },
]

export function UnidadesSection() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section id="unidades" className="bg-secondary">
      {/* Gallery */}
      <div className="relative">
        {/* Main Image */}
        <div className="relative aspect-[3/4] md:aspect-[16/9] overflow-hidden">
          <img
            src={galleryImages[activeImage].src}
            alt={galleryImages[activeImage].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Image Label */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm">
            <span className="text-[9px] tracking-[0.2em] text-primary">
              {galleryImages[activeImage].label}
            </span>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-1 px-2 py-3 overflow-x-auto scrollbar-hide bg-background">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`flex-shrink-0 w-16 h-16 overflow-hidden transition-all rounded-sm ${
                i === activeImage ? "ring-2 ring-primary" : "opacity-50"
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Units Info */}
      <div className="px-6 py-12 bg-background">
        <div className="max-w-lg mx-auto">
          <div className="text-[10px] tracking-[0.3em] text-primary mb-4">UNIDADES DISPONIBLES</div>
          <h2 className="text-[28px] md:text-[36px] font-serif text-foreground leading-tight mb-8">
            Elegí tu espacio
          </h2>

          {/* Unit Cards */}
          <div className="space-y-4 mb-8">
            {units.map((unit) => (
              <div 
                key={unit.type}
                className={`p-5 transition-all rounded-sm ${
                  unit.highlight 
                    ? "border-2 border-primary bg-primary/5" 
                    : "border border-border bg-card"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className={`text-[9px] tracking-[0.15em] mb-1 ${unit.highlight ? "text-primary" : "text-muted-foreground"}`}>
                      {unit.type}
                    </div>
                    <div className="text-[20px] font-serif text-foreground">{unit.title}</div>
                  </div>
                  {unit.highlight && (
                    <div className="bg-primary text-white text-[8px] px-2 py-1 tracking-[0.1em] rounded-sm">
                      MÁS ELEGIDO
                    </div>
                  )}
                </div>
                
                <div className="text-[12px] text-primary mb-3 font-medium">{unit.size}</div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {unit.features.map((f) => (
                    <span key={f} className="text-[10px] text-muted-foreground bg-secondary px-2 py-1 rounded-sm">
                      {f}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => window.open(getWhatsAppUrl("general"), "_blank")}
                  className={`w-full py-3 text-[10px] tracking-[0.15em] transition-all active:scale-[0.98] rounded-sm ${
                    unit.highlight 
                      ? "bg-primary text-white hover:bg-primary/90" 
                      : "border border-primary/50 text-primary hover:bg-primary/5"
                  }`}
                >
                  CONSULTAR DISPONIBILIDAD
                </button>
              </div>
            ))}
          </div>

          {/* Premium Notice */}
          <div className="text-center p-4 border border-primary/20 bg-primary/5 rounded-sm">
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Todas las unidades incluyen <span className="text-primary font-medium">balcón con parrilla</span> y <span className="text-primary font-medium">cochera opcional</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
