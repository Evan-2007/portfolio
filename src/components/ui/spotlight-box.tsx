"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SpotlightBoxProps extends React.ComponentProps<"div"> {
  spotlightColor?: string
}

export function SpotlightBox({
  className,
  children,
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  ...props
}: SpotlightBoxProps) {
  const boxRef = React.useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current) return

    const rect = boxRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative overflow-visible rounded-xl border bg-card p-6 transition-colors", className)}
      {...props}
    >
      {/* effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
