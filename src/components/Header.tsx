// Path: src\components\Header.tsx
import { useState, useEffect } from "react";
import { Bell, Menu, Moon, Search, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TopNavigationProps {
  onToggleSidebar: () => void;
}

export default function TopNavigation({ onToggleSidebar }: TopNavigationProps) {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolled:", window.scrollY); // Debug
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-white flex items-center justify-between px-6 py-4"
      style={{ boxShadow: hasShadow ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none" }}
    >
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="ml-4 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input type="text" placeholder="Search..." className="pl-8" />
        </div>
      </div>
      <nav className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Moon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/images/avatar.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
}
