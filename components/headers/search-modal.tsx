"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Hash, User, Settings, CreditCard, Bell, Link, Shield, Users, FolderOpen, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"
import * as Dialog from "@radix-ui/react-dialog"

interface SearchItem {
  id: string
  title: string
  category: string
  icon: React.ReactNode
  url?: string
  action?: () => void
}

const searchItems: SearchItem[] = [
  // Dashboards
  { id: "dashboard", title: "Dashboard", category: "Dashboards", icon: <LayoutDashboard className="h-4 w-4" />, url: "/dashboard" },

  // Pages
  { id: "user-profile", title: "User Profile", category: "Pages", icon: <User className="h-4 w-4" />, url: "/profile" },
  { id: "user-profile-teams", title: "User Profile - Teams", category: "Pages", icon: <Users className="h-4 w-4" />, url: "/profile/teams" },
  { id: "user-profile-projects", title: "User Profile - Projects", category: "Pages", icon: <FolderOpen className="h-4 w-4" />, url: "/profile/projects" },
  { id: "user-profile-connections", title: "User Profile - Connections", category: "Pages", icon: <Link className="h-4 w-4" />, url: "/profile/connections" },
  { id: "account-settings-account", title: "Account Settings - Account", category: "Pages", icon: <Settings className="h-4 w-4" />, url: "/settings/account" },
  { id: "account-settings-security", title: "Account Settings - Security", category: "Pages", icon: <Shield className="h-4 w-4" />, url: "/settings/security" },
  { id: "account-settings-billing", title: "Account Settings - Billing & Plans", category: "Pages", icon: <CreditCard className="h-4 w-4" />, url: "/settings/billing" },
  { id: "account-settings-notifications", title: "Account Settings - Notifications", category: "Pages", icon: <Bell className="h-4 w-4" />, url: "/settings/notifications" },
  { id: "account-settings-connections", title: "Account Settings - Connections", category: "Pages", icon: <Link className="h-4 w-4" />, url: "/settings/connections" },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [filteredItems, setFilteredItems] = useState(searchItems)
  const { t } = useLanguage()

  // Filter items based on search
  useEffect(() => {
    if (!search) {
      setFilteredItems(searchItems)
      return
    }

    const filtered = searchItems.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredItems(filtered)
  }, [search])

  // Keyboard shortcut to open
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Group items by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, SearchItem[]>)

  const handleItemSelect = (item: SearchItem) => {
    if (item.action) {
      item.action()
    } else if (item.url) {
      window.location.href = item.url
    }
    setOpen(false)
    setSearch("")
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-10 w-full justify-start bg-transparent text-sm font-medium text-muted-foreground/50 hover:text-sidebar-accent-foreground hover:border-[#696cff] focus-within:ring-2 focus:ring-[#696cff] focus:ring-offset-2 focus:border-[#696cff] shadow-none border-0 sm:pr-12 lg:w-56"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-5 w-5" />
        <span className="hidden lg:inline-flex">Search [CTRL + K]</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd
          className="shadow-none outline-none focus-visible:ring-0 bg-transparent placeholder:text-muted-foreground/60"
        >
          <span className="text-md">⌘</span>K
        </kbd>
      </Button>

      {/* Command Palette Dialog */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          {/* Custom Overlay */}
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-200 ease-out" />

          {/* Modal Content */}
          <Dialog.Content className={cn(
            "fixed left-[50%] top-[1%] z-50 grid w-full max-w-2xl translate-x-[-50%]",
            "bg-background shadow-2xl border rounded-2xl overflow-hidden",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            "transition-all duration-200 ease-out"
          )}>
            <div className="flex flex-col">
              {/* Search Input */}
              <div id="search" className="flex items-center px-4 py-3 border-b border-border/50">
                <div className="flex w-full items-center gap-3 rounded-md px-3 focus-within:ring-2 focus-within:ring-[#696cff] focus-within:ring-offset-2">
                  <Search className="mr-3 h-5 w-5 shrink-0 text-muted-foreground" />
                  <Input
                    placeholder="Search or type a command"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-input:transparent border-0 p-0 text-base shadow-none outline-none focus-visible:ring-0 bg-transparent placeholder:text-muted-foreground/60"
                    autoFocus
                  />
                  <div className="ml-auto">
                    <div className="h-6 w-6 rounded-full border-2 border-muted-foreground/20 flex items-center justify-center">
                      <button
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground/60 hover:text-foreground transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-[500px] overflow-y-auto">
                {Object.keys(groupedItems).length === 0 ? (
                  <div className="py-12 text-center text-sm text-muted-foreground">
                    No results found.
                  </div>
                ) : (
                  Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category} className="px-4 py-2">
                      <div className="py-2">
                        <h4 className="text-xs font-medium text-muted-foreground mb-2">
                          {category}
                        </h4>
                      </div>
                      <div className="space-y-1">
                        {items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleItemSelect(item)}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors duration-150",
                              "hover:bg-muted/50 text-foreground",
                              "focus:bg-muted/50 focus:outline-none",
                              "active:scale-[0.98] transition-transform"
                            )}
                          >
                            <div className="flex-shrink-0 text-muted-foreground">
                              {item.icon}
                            </div>
                            <span className="flex-1 text-left font-medium">{item.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border/50 bg-muted/20 px-6 py-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <kbd className="inline-flex h-5 min-w-[24px] items-center justify-center rounded bg-background border px-2 font-mono text-[10px] font-medium shadow-sm">
                      esc
                    </kbd>
                    <span>To close</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="inline-flex h-5 min-w-[24px] items-center justify-center rounded bg-background border px-2 font-mono text-[10px] font-medium shadow-sm">
                      ↵
                    </kbd>
                    <span>To Select</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex h-5 min-w-[24px] items-center justify-center rounded bg-background border px-2 font-mono text-[10px] font-medium shadow-sm">
                    ↑
                  </kbd>
                  <kbd className="inline-flex h-5 min-w-[24px] items-center justify-center rounded bg-background border px-2 font-mono text-[10px] font-medium shadow-sm">
                    ↓
                  </kbd>
                  <span>To Navigate</span>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}