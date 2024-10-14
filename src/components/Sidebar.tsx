// Path: src\components\Sidebar.tsx
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { sidebarLinks } from "@/constants/sidebarLinks"; // Import your sidebar links

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ sidebarOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <TooltipProvider>
      <aside
        className={`${
          sidebarOpen ? "w-64 xl:w-72" : "w-20"
        } bg-white transition-all border-r duration-300 ease-in-out flex flex-col p-3 h-screen justify-between`}
      >
        <div>
          <div className="flex items-center mb-4">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Image
                src="/images/logo_admin.png"
                alt="Logo"
                width={33}
                height={33}
              />
            </Button>
            {sidebarOpen && (
              <span className="ml-2 text-xl font-bold text-gray-500">
                Rhyno Admin
              </span>
            )}
          </div>

          <nav className="mt-6 flex-grow flex flex-col text-gray-500">
            {/* Dynamically map sidebar links */}
            {sidebarLinks.map((link, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`w-full py-5 mb-2 ${
                      sidebarOpen ? "justify-start" : "justify-center"
                    } ${isActive(link.href) ? "bg-gray-100" : ""}`} // Highlight active link
                  >
                    <link.icon
                      className={`h-5 w-5 ${sidebarOpen ? "mr-4" : ""}`}
                    />
                    {sidebarOpen && <span>{link.label}</span>}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side={sidebarOpen ? "right" : "right"}>
                  <p>{link.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </div>

        {/* User profile box at the bottom */}
        <div
          className={`mt-auto p-4 ${
            sidebarOpen ? "flex" : "flex justify-center"
          } items-center bg-gray-100 rounded-lg`}
        >
          <Image
            src="/images/user-1.jpg" // Add the correct path to your user avatar image
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          {sidebarOpen && (
            <div className="ml-3">
              <p className="text-sm font-bold text-gray-700">
                Reinier varkevisser
              </p>
              <p className="text-xs text-gray-400">Designer</p>
            </div>
          )}
        </div>
      </aside>
    </TooltipProvider>
  );
}
