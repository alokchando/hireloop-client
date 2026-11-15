"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useSession } from "@/lib/auth-client";
import { dashboardMenu } from "@/lib/dashboard-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function AppSidebar() {
  const { data: session, isPending } = useSession();

  const pathname = usePathname();

  if (isPending) {
    return <Sidebar />;
  }

  if (!session) {
    return null;
  }

  const role = session.user.role;
  const menuItems = dashboardMenu[role];

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="p-4 text-xl font-bold">HireLoop</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive = pathname === item.url;

              return (
                <SidebarMenuItem key={item.url}>
                  <Link href={item.url}>
                    <SidebarMenuButton isActive={isActive}>
                      <Icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
