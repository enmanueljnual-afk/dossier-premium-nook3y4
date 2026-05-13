export const WHATSAPP_NUMBER = "5491173697105"

export const MESSAGES = {
  investor: "Hola Enmanuel, vi la presentación de NOOK San Isidro. Quiero invertir y saber más sobre la oportunidad.",
  living: "Hola Enmanuel, vi la presentación de NOOK San Isidro. Estoy buscando un departamento para vivir y quiero conocer las unidades.",
  general: "Hola Enmanuel, vi la presentación de NOOK San Isidro y quiero más información.",
}

export function getWhatsAppUrl(type: "investor" | "living" | "general") {
  const message = encodeURIComponent(MESSAGES[type])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}
