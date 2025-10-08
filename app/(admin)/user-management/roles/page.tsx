"use client"

import { DataTable } from "@/components/common/data-table"
import { columns, Payment } from "./columns"
import { useLanguage } from "@/hooks/use-language";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DemoPage() {
  const { t } = useLanguage();
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">
          Manage your users and their permissions
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">User Management</h2>
        <p className="text-sm text-muted-foreground">
          Your user table and management components will go here.
        </p>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
    // <SidebarProvider
    //   style={
    //     {
    //       "--sidebar-width": "calc(var(--spacing) * 72)",
    //       "--header-height": "calc(var(--spacing) * 12)",
    //     } as React.CSSProperties
    //   }
    // >
    //   <AppSidebar variant="inset" />
    //   <SidebarInset>
    //     <SiteHeader />
    //     <div className="flex flex-1 flex-col">
    //       <div className="@container/main flex flex-1 flex-col gap-2">
    //         <div className="flex flex-col gap-4 px-6 md:px-8 py-4 md:gap-6 md:py-6">
    //           <DataTable columns={columns} data={data} />
    //         </div>
    //       </div>
    //     </div>
    //   </SidebarInset>
    // </SidebarProvider>
  )
}