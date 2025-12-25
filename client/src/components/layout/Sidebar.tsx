import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  FileText, 
  LayoutTemplate, 
  Settings, 
  CreditCard, 
  User, 
  LogOut, 
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/user/dashboard" },
  { icon: FileText, label: "Documentos", href: "/user/documents" },
  { icon: LayoutTemplate, label: "Templates", href: "/user/templates" },
  { icon: CreditCard, label: "Assinaturas", href: "/user/subscription" },
  { icon: User, label: "Perfil", href: "/user/profile" },
  { icon: CreditCard, label: "Planos", href: "/user/plans" },
  { icon: Settings, label: "Configurações", href: "/user/settings" },
];

export function Sidebar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="bg-primary text-white p-1 rounded-md text-sm">W</span>
              WriterAI
            </h1>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  location === item.href || location.startsWith(item.href + "/")
                    ? "bg-primary/10 text-primary" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}>
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-3 px-4 py-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                JS
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-gray-900 truncate">João Silva</p>
                <p className="text-xs text-gray-500 truncate">joao@email.com</p>
              </div>
            </div>
            <Link href="/login">
              <a className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg w-full transition-colors">
                <LogOut className="h-4 w-4" />
                Sair
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
