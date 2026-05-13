"use client"

import { getWhatsAppUrl } from "@/lib/whatsapp"

interface WhatsAppButtonProps {
  label: string
  type: "investor" | "living" | "general"
  gold?: boolean
  className?: string
}

export function WhatsAppButton({ label, type, gold = false, className = "" }: WhatsAppButtonProps) {
  const handleClick = () => {
    window.open(getWhatsAppUrl(type), "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className={`
        text-center cursor-pointer transition-colors
        ${gold 
          ? "bg-gold text-background py-3.5 px-5 border border-gold font-medium" 
          : "bg-transparent text-gold py-3 px-5 border border-gold"
        }
        ${className}
      `}
    >
      <span className="text-[10px] tracking-[0.18em] leading-snug">
        {label}
      </span>
    </button>
  )
}
