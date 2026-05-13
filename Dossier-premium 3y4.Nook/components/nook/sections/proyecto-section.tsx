"use client"

const stats = [
  { value: "10", label: "PISOS" },
  { value: "48", label: "UNIDADES" },
  { value: "2-3", label: "AMBIENTES" },
  { value: "72", label: "CUOTAS EN $" },
]

export function ProyectoSection() {
  return (
    <section id="proyecto" className="bg-background px-6 py-16 md:py-24">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-[10px] tracking-[0.3em] text-primary mb-4">EL PROYECTO</div>
        <h2 className="text-[28px] md:text-[36px] font-serif text-foreground leading-tight mb-2">
          Un edificio diseñado
        </h2>
        <h2 className="text-[28px] md:text-[36px] font-serif text-primary leading-tight mb-6">
          para vivir bien.
        </h2>
        
        <div className="w-12 h-px bg-primary mb-8" />
        
        <p className="text-[14px] text-muted-foreground leading-relaxed mb-10">
          NOOK es un proyecto residencial premium en el corazón de San Isidro. 
          48 unidades exclusivas pensadas para quienes buscan calidad de vida 
          sin resignar ubicación ni accesibilidad.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-4 border border-border bg-card rounded-sm">
              <div className="text-[24px] md:text-[28px] font-serif text-primary leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-[8px] md:text-[9px] tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-sm">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-scaled-igMXGILVltPQEWTXD8aI5C7JknpDYy.jpg"
            alt="Living de NOOK con vista panorámica"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-[11px] text-white/90">
              Amplios living-comedor con ventanales de piso a techo
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["SAN ISIDRO", "EN POZO", "FINANCIACIÓN DIRECTA", "SIN BANCO"].map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-[0.12em] text-primary border border-primary/30 px-3 py-1.5 rounded-sm bg-primary/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
