"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
// import { NavSecondary } from "@/components/nav-secondary"
// import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { fa } from "zod/v4/locales"
import { SiteLogo } from "./site-logo"
import { usePathname } from "next/navigation"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: IconDashboard,
        isActive: pathname.startsWith("/dashboard") || pathname === "/",
      },
      {
        title: "Lifecycle",
        url: "#",
        icon: IconListDetails,
        isActive: false,
      },
      {
        title: "Analytics",
        url: "#",
        icon: IconChartBar,
        isActive: false,
      },
      {
        title: "Projects",
        url: "#",
        icon: IconFolder,
        isActive: false,
      },
      {
        title: "Team",
        url: "#",
        icon: IconUsers,
        isActive: false,
      },
      {
        title: "User Management",
        url: "#",
        icon: IconFolder,
        isActive: pathname.startsWith("/user-management") || pathname === "/users",
        items: [
          {
            title: "Users",
            url: "/user-management/users",
            isActive: pathname.startsWith("/users") || pathname === "/user-management/users",
          },
          {
            title: "Roles",
            url: "/user-management/roles",
            isActive: pathname.startsWith("/roles") || pathname === "/user-management/roles",
          },
          {
            title: "Permissions",
            url: "/user-management/permissions",
            isActive: pathname.startsWith("/permissions") || pathname === "/user-management/permissions",
          },
        ],
      },
    ],
    navClouds: [
      {
        title: "Capture",
        icon: IconCamera,
        isActive: false,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
            isActive: false,
          },
          {
            title: "Archived",
            url: "#",
            isActive: false,
          },
        ],
      },
      {
        title: "Proposal",
        icon: IconFileDescription,
        url: "#",
        isActive: false,
        items: [
          {
            title: "Active Proposals",
            url: "#",
            isActive: false,
          },
          {
            title: "Archived",
            url: "#",
            isActive: false,
          },
        ],
      },
      {
        title: "Prompts",
        icon: IconFileAi,
        isActive: false,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
            isActive: false,
          },
          {
            title: "Archived",
            url: "#",
            isActive: false,
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: IconSettings,
      },
      {
        title: "Get Help",
        url: "#",
        icon: IconHelp,
      },
      {
        title: "Search",
        url: "#",
        icon: IconSearch,
      },
    ],
    documents: [
      {
        name: "Data Library",
        url: "#",
        icon: IconDatabase,
        isActive: false,
      },
      {
        name: "Reports",
        url: "#",
        icon: IconReport,
        isActive: false,
      },
      {
        name: "Word Assistant",
        url: "#",
        icon: IconFileWord,
        isActive: false,
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              // className="data-[slot=sidebar-menu-button]:!p-1.5"
              className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-transparent"
            >
              <a href="#">
                <SiteLogo />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}
