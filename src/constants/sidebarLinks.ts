// Path: src\constants\sidebarLinks.ts
import {
  LucideIcon,
  HomeIcon,
  CarIcon,
  UserIcon,
  SettingsIcon,
} from "lucide-react";

interface SidebarLink {
  icon: LucideIcon;
  label: string;
  tooltip: string;
  href: string; // Add href for navigation
}

export const sidebarLinks: SidebarLink[] = [
  {
    icon: HomeIcon,
    label: "Home",
    tooltip: "Home Dashboard",
    href: "/dashboard",
  },
  {
    icon: CarIcon,
    label: "Vehicles",
    tooltip: "Car Dashboard",
    href: "/vehicles",
  },
  {
    icon: UserIcon,
    label: "Profile",
    tooltip: "User Profile",
    href: "/profile",
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    tooltip: "App Settings",
    href: "/settings",
  },
  // Add more links as needed
];
