interface DotProps {
  active: boolean
}

export function Dot({ active }: DotProps) {
  return (
    <div
      className={`h-[7px] rounded transition-all duration-300 ${
        active ? "w-7 bg-gold" : "w-[7px] bg-light/[0.18]"
      }`}
    />
  )
}
