"use client"

import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"
import { SwitchingLanguage } from "./switching-language"
import { CommandPalette } from "./headers/search-modal"
import { FullscreenButton } from "./headers/fullscreen-button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-header shadow-sm">
      <div className="flex h-14 w-full items-center justify-between px-4 lg:px-6">

        {/* Left section */}
        <div className="flex items-center gap-3">
          {/* FIXED: removed negative margins */}
          <SidebarTrigger className="shrink-0" />

          {/* Search */}
          {/* <div className="hidden md:block w-[280px] lg:w-[380px]">
            <CommandPalette />
          </div> */}

          {/* Mobile search icon */}
          <div className="md:hidden">
            <CommandPalette />
          </div>

          {/* Desktop search input */}
          <div className="hidden md:block w-[280px] lg:w-[380px]">
            <CommandPalette />
          </div>


        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2 shrink-0">
          <SwitchingLanguage />
          <FullscreenButton />

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative h-8 w-8">
            <span className="absolute top-[2px] right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"></span>
            <Bell className="h-5 w-5" />
          </Button>

          <ModeToggle />

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://avatar.iran.liara.run/public/28" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
