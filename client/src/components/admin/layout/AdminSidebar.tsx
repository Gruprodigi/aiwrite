import { BarChart3, Users, FileText, CreditCard, Settings, LogOut, Zap, TrendingUp, ChevronDown, BookOpen, Layers, Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

interface MenuSection {
  icon: React.ComponentType<any>;
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}

const menuItems: MenuSection[] = [
  { icon: BarChart3, label: "Dashboard", href: "/admin/dashboard" },
  {
    icon: TrendingUp,
    label: "Analytics",
    submenu: [
      { label: "Overview", href: "/admin/analytics/overview" },
      { label: "Usuários", href: "/admin/analytics/users" },
      { label: "Receita", href: "/admin/analytics/revenue" },
      { label: "Conteúdo", href: "/admin/analytics/content" },
    ],
  },
  {
    icon: Users,
    label: "Usuários",
    submenu: [
      { label: "Lista", href: "/admin/users" },
      { label: "Criar", href: "/admin/users/create" },
    ],
  },
  {
    icon: Zap,
    label: "Planos",
    submenu: [
      { label: "Lista", href: "/admin/plans" },
      { label: "Criar", href: "/admin/plans/create" },
    ],
  },
  { icon: CreditCard, label: "Transações", href: "/admin/transactions" },
  {
    icon: BookOpen,
    label: "Blog",
    submenu: [
      { label: "Posts", href: "/admin/blog/posts" },
      { label: "Categorias", href: "/admin/blog/categories" },
      { label: "Tags", href: "/admin/blog/tags" },
    ],
  },
  {
    icon: FileText,
    label: "Páginas",
    href: "/admin/pages",
  },
  {
    icon: Menu,
    label: "Menus",
    href: "/admin/menus",
  },
  {
    icon: Settings,
    label: "Configurações",
    submenu: [
      { label: "Pagamentos", href: "/admin/settings/payment" },
      { label: "Histórico de Pagamentos", href: "/admin/settings/payment-history" },
    ],
  },
];

export function AdminSidebar() {
  const [location] = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

  const toggleMenu = (label: string) => {
    const newExpanded = new Set(expandedMenus);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedMenus(newExpanded);
  };

  const isMenuActive = (item: MenuSection) => {
    if (item.href) return location === item.href;
    if (item.submenu) {
      return item.submenu.some((sub) => location === sub.href);
    }
    return false;
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1e293b] text-white flex flex-col border-r border-[#0f172a] overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-[#334155] flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center font-bold">
            W
          </div>
          <h2 className="text-lg font-bold">WriterAI</h2>
        </div>
        <p className="text-xs text-[#94a3b8] mt-1">Panel de Admin</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = isMenuActive(item);
          const hasSubmenu = !!item.submenu;
          const isExpanded = expandedMenus.has(item.label);

          return (
            <div key={item.label}>
              {hasSubmenu ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "text-[#cbd5e1] hover:bg-[#334155]"
                    }`}
                    data-testid={`button-menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link key={subitem.href} href={subitem.href}>
                          <a
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${
                              location === subitem.href
                                ? "bg-primary text-white"
                                : "text-[#94a3b8] hover:bg-[#334155] hover:text-[#cbd5e1]"
                            }`}
                            data-testid={`link-${subitem.href.replace(/\//g, '-')}`}
                          >
                            <span>→</span>
                            <span>{subitem.label}</span>
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href!}>
                  <a
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-[#cbd5e1] hover:bg-[#334155]"
                    }`}
                    data-testid={`link-${item.href?.replace(/\//g, '-')}`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#334155] flex-shrink-0">
        <Link href="/login">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#cbd5e1] hover:bg-[#334155] transition-colors" data-testid="link-logout">
            <LogOut className="h-5 w-5" />
            <span className="text-sm font-medium">Sair</span>
          </a>
        </Link>
      </div>
    </aside>
  );
}
