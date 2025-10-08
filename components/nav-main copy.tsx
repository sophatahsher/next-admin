"use client"

import { IconChevronRight, IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { useState } from "react"
import { set } from "zod"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

export function NavMain1({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
    isActive?: boolean
    items?: {
      title: string
      url: string
      isActive?: boolean
    }[]
  }[]
}) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (title: string) => {
    setOpenItems(prev => prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title])
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary-test text-primary-foreground-test hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu> */}
        <SidebarMenu>
          {items.map((item) => {
            const hasChildren = item.items && item.items.length > 0
            const isOpen = openItems.includes(item.title)
            const hasActiveChild = item.items?.some(child => child.isActive)

            return (
              <SidebarMenuItem key={item.title}>
                {hasChildren ? (
                  <Collapsible open={isOpen} onOpenChange={() => toggleItem(item.title)}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        className={cn(
                          "w-full justify-between",
                          hasActiveChild && "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {item.icon && <item.icon size={16} />}
                          <span>{item.title}</span>
                        </div>
                        <IconChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isOpen && "rotate-90"
                          )}
                        />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className={cn(
                                "relative pl-0 hover:bg-sidebar-accent/10",
                                subItem.isActive ? "bg-sidebar-accents text-sidebar-accent-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              <a href={subItem.url}>
                                <div
                                  className={cn(
                                    "absolute left-1 top-1/2 -translate-y-1/2 rounded-full",
                                    subItem.isActive
                                      ? "h-2 w-2 bg-sidebar-accent-foreground ring-3 ring-[#696cff]/50"
                                      : "h-1.5 w-1.5 bg-muted-foreground/40"
                                  )}
                                />
                                <span className={`ml-5 ${cn(subItem.isActive && "ml-5")}`}>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={cn(
                      item.isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                    )}
                    asChild
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
