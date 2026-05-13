"use client"

import { getWhatsAppUrl } from "@/lib/whatsapp"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactoSection() {
  return (
    <section id="contacto" className="bg-dark-3">
      {/* Image Header */}
      <div className="relative h-[30vh]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-scaled-LSuiWHew4TjEn2sPxJ0xGPQvUBn7eq.jpg"
          alt="Baño moderno NOOK"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-3 via-dark-3/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="px-6 py-12">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-[36px] md:text-[48px] font-serif text-foreground leading-none tracking-[0.08em] mb-2">
            NOOK
          </h2>
          <div className="text-[11px] tracking-[0.2em] text-foreground/50 mb-8">
            SAN ISIDRO
          </div>

          <div className="w-12 h-px bg-gold mx-auto mb-8" />

          <p className="text-[14px] text-foreground/70 leading-relaxed mb-10 font-serif">
            Tu próximo paso empieza con una conversación.
            <br />
            Contanos qué estás buscando.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-center gap-3 text-foreground/60">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-[12px]">Centenario 2400, San Isidro</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground/60">
              <Phone className="w-4 h-4 text-gold" />
              <span className="text-[12px]">+54 11 XXXX-XXXX</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground/60">
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-[12px]">info@nooksanisidro.com</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <button
              onClick={() => window.open(getWhatsAppUrl("general"), "_blank")}
              className="w-full bg-gold text-background py-4 text-[11px] tracking-[0.18em] font-medium active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ESCRIBINOS POR WHATSAPP
            </button>
            
            <button
              onClick={() => window.open("mailto:info@nooksanisidro.com", "_blank")}
              className="w-full border border-foreground/20 text-foreground/70 py-4 text-[11px] tracking-[0.18em] active:scale-[0.98] transition-transform"
            >
              ENVIAR EMAIL
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-foreground/10">
            <div className="text-[9px] tracking-[0.2em] text-foreground/30 mb-2">
              UN DESARROLLO DE
            </div>
            <div className="text-[12px] tracking-[0.15em] text-gold">
              AUREO DESARROLLOS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
