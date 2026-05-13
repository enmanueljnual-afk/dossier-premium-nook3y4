import { cn } from "@/lib/utils"

interface CornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export function Corner({ position }: CornerProps) {
  const isTop = position.includes("top")
  const isLeft = position.includes("left")

  return (
    <>
      <div
        className={cn(
          "absolute w-12 h-px bg-gold opacity-70",
          isTop ? "top-8" : "bottom-8",
          isLeft ? "left-8" : "right-8"
        )}
      />
      <div
        className={cn(
          "absolute w-px h-12 bg-gold opacity-70",
          isTop ? "top-8" : "bottom-8",
          isLeft ? "left-8" : "right-8"
        )}
      />
    </>
  )
}
