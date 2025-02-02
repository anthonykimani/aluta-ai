'use client'

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ScrambleText } from "./scramble";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "home",
    url: "#",
    icon: Home,
  },
  {
    title: "inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "search",
    url: "#",
    icon: Search,
  },
  {
    title: "settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <ScrambleText
              text="aluta ai"
              className="whitespace-pre-wrap md:whitespace-nowrap"
            />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      href={item.url}
                    >
                      <item.icon />
                      {hoveredIndex === index ? (
                        <ScrambleText
                          text={item.title}
                          className="whitespace-pre-wrap md:whitespace-nowrap"
                        />
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
