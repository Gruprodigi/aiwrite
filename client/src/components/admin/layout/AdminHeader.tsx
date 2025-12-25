import { Bell, Search, User, LogOut } from "lucide-react";
import { Link } from "wouter";

interface AdminHeaderProps {
  title?: string;
}

export function AdminHeader({ title }: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-40">
      <div className="px-8 py-4 flex items-center justify-between">
        <div>
          {title && <h1 className="text-2xl font-bold text-[#1e293b]">{title}</h1>}
        </div>

        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-[#f8f9fa] px-4 py-2 rounded-lg">
            <Search className="h-4 w-4 text-[#64748b]" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent outline-none text-sm text-[#1e293b] placeholder-[#64748b] w-48"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-[#f8f9fa] rounded-lg transition-colors">
            <Bell className="h-5 w-5 text-[#64748b]" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-[#1e293b]">Admin</p>
              <p className="text-xs text-[#64748b]">Super Admin</p>
            </div>
          </div>

          {/* Logout */}
          <Link href="/login">
            <a className="p-2 hover:bg-[#f8f9fa] rounded-lg transition-colors">
              <LogOut className="h-5 w-5 text-[#64748b]" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
