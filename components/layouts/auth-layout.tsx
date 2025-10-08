"use client"

import * as React from "react"
import { SiteLogo } from "@/components/site-logo"
import { ModeToggle } from "@/components/mode-toggle"

interface AuthLayoutProps {
  children: React.ReactNode
  className?: string
}

export function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted/20">
      {/* Auth Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <SiteLogo />
          <span className="text-lg font-semibold">Xonex Admin</span>
        </div>
        <ModeToggle />
      </header>

      {/* Auth Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className={`w-full max-w-md space-y-6 ${className || ''}`}>
          {children}
        </div>
      </div>

      {/* Auth Footer */}
      <footer className="p-6 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Xonex Admin. All rights reserved.</p>
      </footer>
    </div>
  )
}