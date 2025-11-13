"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

interface AdminLayoutProps {
  children: React.ReactNode
  className?: string
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <AppSidebar collapsible="offcanvas" variant="sidebar" />

      {/* Main content inset */}
      <SidebarInset>
        <SiteHeader />

        {/* Page content */}
        <div className="flex flex-1 flex-col @container">
          <div className="flex flex-col gap-4 px-4 md:px-8 py-4 md:gap-6 md:py-6">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
