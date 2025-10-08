"use client"

import { Button } from "@/components/ui/button"
import { Maximize, Minimize } from "lucide-react"
import { useFullscreen } from "@/hooks/use-fullscreen"
import { cn } from "@/lib/utils"

interface FullscreenButtonProps {
  className?: string
  variant?: "ghost" | "outline" | "default" | "destructive" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
}

export function FullscreenButton({
  className,
  variant = "ghost",
  size = "icon"
}: FullscreenButtonProps) {
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "relative h-8 w-8 cursor-pointer group transition-all duration-200 hover:bg-muted",
        className
      )}
      onClick={toggleFullscreen}
      title={isFullscreen ? "Exit Fullscreen (F11)" : "Enter Fullscreen (F11)"}
    >
      {isFullscreen ? (
        <Minimize className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 group-hover:text-primary" />
      ) : (
        <Maximize className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 group-hover:text-primary" />
      )}
      <span className="sr-only">
        {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      </span>
    </Button>
  )
}