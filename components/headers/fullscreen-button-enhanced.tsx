"use client"

import { Button } from "@/components/ui/button"
import { Maximize, Minimize } from "lucide-react"
import { useFullscreen } from "@/hooks/use-fullscreen"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface FullscreenButtonProps {
  className?: string
  variant?: "ghost" | "outline" | "default" | "destructive" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  showTooltip?: boolean
  animated?: boolean
}

export function FullscreenButtonEnhanced({
  className,
  variant = "ghost",
  size = "icon",
  showTooltip = true,
  animated = true
}: FullscreenButtonProps) {
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  const buttonContent = (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "relative h-8 w-8 cursor-pointer group transition-all duration-200",
        "hover:bg-muted hover:scale-105 active:scale-95",
        animated && "transform-gpu",
        className
      )}
      onClick={toggleFullscreen}
    >
      <div className={cn(
        "relative transition-all duration-300",
        isFullscreen ? "rotate-180" : "rotate-0"
      )}>
        {isFullscreen ? (
          <Minimize className={cn(
            "h-4 w-4 transition-all duration-200",
            "group-hover:scale-110 group-hover:text-blue-500",
            animated && "group-hover:rotate-12"
          )} />
        ) : (
          <Maximize className={cn(
            "h-4 w-4 transition-all duration-200",
            "group-hover:scale-110 group-hover:text-blue-500",
            animated && "group-hover:-rotate-12"
          )} />
        )}
      </div>

      {/* Animated background effect */}
      {animated && (
        <div className={cn(
          "absolute inset-0 rounded-md opacity-0 transition-opacity duration-300",
          "group-hover:opacity-10",
          isFullscreen
            ? "bg-gradient-to-br from-red-400 to-red-600"
            : "bg-gradient-to-br from-blue-400 to-blue-600"
        )} />
      )}

      <span className="sr-only">
        {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      </span>
    </Button>
  )

  if (showTooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {buttonContent}
        </TooltipTrigger>
        <TooltipContent side="bottom" className="flex items-center gap-2">
          <span>{isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            F11
          </kbd>
        </TooltipContent>
      </Tooltip>
    )
  }

  return buttonContent
}