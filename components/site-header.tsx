import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarFooter, SidebarTrigger } from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Bell, Maximize, Search } from "lucide-react"
import { Input } from "./ui/input"
import { IconHelp, IconSearch, IconSettings } from "@tabler/icons-react"
import { ModeToggle } from "./mode-toggle"
import { NavUser } from "./nav-user"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconListDetails,
  IconReport,
  IconUsers,
} from "@tabler/icons-react"
import { SwitchingLanguage } from "./switching-language"
import { CommandPalette } from "./headers/search-modal"
import { FullscreenButton } from "./headers/fullscreen-button"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
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
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

// NavSecondary items that were moved from sidebar
const navSecondaryItems = [
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
]


export function SiteHeader() {
  return (
    // <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <header className="sticky top-0 z-50 w-full border-bs shadow-xs bg-header">
      {/* <div className="container flex flex-1 gap-2 justify-between h-14 max-w-[100rem] items-center"> */}
      <div className="flex h-14 w-full items-center justify-between px-4 lg:px-6">
        {/* <div className="mr-4 flex"> */}
        {/* Left side - Sidebar trigger and Search */}
        <div className="flex items-center gap-3 flex-1">
          <SidebarTrigger className="-ml-9 shrink-0 bg-[#696cff] rounded-full" />
          <div className="min-w-[384px] max-w-[800px] w-full lg:w-[600px]">
            <CommandPalette />
          </div>
        </div>

        {/* Center Search */}
        {/* <div className="flex-1 max-w-md mx-4">
          <CommandPalette />
        </div> */}
        {/* Right side items */}
        <div className="flex items-center space-x-2 shrink-0">
          <SwitchingLanguage />

          <FullscreenButton />

          <div className="flex items-center space-x-2">
            {/* NavSecondary items moved from sidebar */}
            {navSecondaryItems.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                size="icon"
                asChild
                className="h-8 w-8"
              >
                <a href={item.url} title={item.title}>
                  <item.icon className="h-4 w-4" />
                  <span className="sr-only">{item.title}</span>
                </a>
              </Button>
            ))}

            <Button variant="ghost" size="icon" className="relative h-8 w-8 cursor-pointer">
              <span
                className="absolute top-[2px] right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"
              ></span>
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>

            <ModeToggle />

            {/* <SidebarFooter>
              <NavUser user={data.user} />
            </SidebarFooter> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@johndoe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john@example.com
                    </p>
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
      </div>
    </header>
  )
  // return (
  //   <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
  //     <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
  //       <SidebarTrigger className="-ml-1" />
  //       <Separator
  //         orientation="vertical"
  //         className="mx-2 data-[orientation=vertical]:h-4"
  //       />
  //       <h1 className="text-base font-medium">Documents</h1>
  //       <div className="ml-auto flex items-center gap-2">
  //         <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
  //           <a
  //             href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
  //             rel="noopener noreferrer"
  //             target="_blank"
  //             className="dark:text-foreground"
  //           >
  //             GitHub
  //           </a>
  //         </Button>
  //       </div>
  //     </div>
  //   </header>
  // )
}
