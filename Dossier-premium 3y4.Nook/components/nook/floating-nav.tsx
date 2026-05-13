"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "proyecto", label: "Proyecto" },
  { id: "unidades", label: "Unidades" },
  { id: "vivir", label: "Vivir acá" },
  { id: "inversion", label: "Inversión" },
  { id: "financiacion", label: "Financiación" },
  { id: "contacto", label: "Contacto" },
]

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-50 w-12 h-12 flex items-center justify-center transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-background border border-foreground/10 shadow-lg"
            : "bg-background/50 backdrop-blur-sm border border-foreground/10"
        }`}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Logo - visible when scrolled */}
      {scrolled && !isOpen && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed top-4 left-4 z-50 bg-background/90 backdrop-blur-sm border border-foreground/10 px-4 py-3 shadow-lg"
        >
          <span className="text-[16px] font-serif text-foreground tracking-[0.1em]">NOOK</span>
        </button>
      )}

      {/* Full Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center animate-in fade-in duration-200">
          <div className="text-center">
            <div className="text-[48px] font-serif text-foreground tracking-[0.1em] mb-8">NOOK</div>
            
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full py-3 text-[14px] tracking-[0.15em] text-foreground/70 hover:text-gold transition-colors"
                >
                  {item.label.toUpperCase()}
                </button>
              ))}
            </nav>

            <div className="mt-10 pt-8 border-t border-foreground/10">
              <div className="text-[9px] tracking-[0.2em] text-foreground/30">
                CENTENARIO 2400 · SAN ISIDRO
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
