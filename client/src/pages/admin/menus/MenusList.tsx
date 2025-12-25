import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Edit2, Trash2, Plus, Copy, Eye } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockMenus = [
  {
    id: 1,
    name: "Menu Principal",
    slug: "main-menu",
    location: "header",
    items: 3,
    status: "active",
  },
  {
    id: 2,
    name: "Menu Rodapé",
    slug: "footer-menu",
    location: "footer",
    items: 8,
    status: "active",
  },
  {
    id: 3,
    name: "Menu Mobile",
    slug: "mobile-menu",
    location: "mobile",
    items: 5,
    status: "active",
  },
  {
    id: 4,
    name: "Menu Sidebar",
    slug: "sidebar-menu",
    location: "sidebar",
    items: 12,
    status: "inactive",
  },
];

export default function MenusList() {
  const [menus, setMenus] = useState(mockMenus);

  const handleDelete = (id: number) => {
    setMenus(menus.filter((m) => m.id !== id));
  };

  const getLocationLabel = (location: string) => {
    const labels: Record<string, string> = {
      header: "📍 Header",
      footer: "📍 Footer",
      mobile: "📱 Mobile",
      sidebar: "📋 Sidebar",
    };
    return labels[location] || location;
  };

  return (
    <AdminLayout title="Gestão de Menus">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#64748b]">{menus.length} menus</p>
          <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
            <Plus className="h-4 w-4" /> Novo Menu
          </Button>
        </div>
      </div>

      {/* Menus Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {menus.map((menu) => (
          <Card key={menu.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#1e293b]">{menu.name}</h3>
                <p className="text-sm text-[#64748b] mt-1">
                  {getLocationLabel(menu.location)}
                </p>
              </div>
              <Badge
                className={
                  menu.status === "active"
                    ? "bg-green-100 text-green-700 border-0"
                    : "bg-gray-100 text-gray-700 border-0"
                }
              >
                {menu.status === "active" ? "✓ Ativo" : "○ Inativo"}
              </Badge>
            </div>

            <div className="mb-4 p-3 bg-[#f8f9fa] rounded-lg">
              <p className="text-xs text-[#64748b] mb-1">Slug</p>
              <p className="font-mono text-sm text-[#1e293b]">{menu.slug}</p>
            </div>

            <div className="mb-6 pb-6 border-b border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">
                <strong>{menu.items} itens</strong> no menu
              </p>
            </div>

            <div className="flex gap-2">
              <Link href={`/admin/menus/${menu.id}/edit`}>
                <Button
                  variant="outline"
                  className="flex-1 border-[#e2e8f0]"
                  data-testid={`button-edit-${menu.id}`}
                >
                  <Edit2 className="h-4 w-4 mr-2" /> Editar
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-[#e2e8f0]"
                data-testid={`button-copy-${menu.id}`}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#e2e8f0]"
                data-testid={`button-preview-${menu.id}`}
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-red-300 text-red-600 hover:bg-red-50"
                onClick={() => handleDelete(menu.id)}
                data-testid={`button-delete-${menu.id}`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* All Menus Table */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-6">Todos os Menus</h3>
        <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#f8f9fa] border-b border-[#e2e8f0]">
                <TableHead className="text-[#1e293b] font-semibold">Nome</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Slug</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Localização</TableHead>
                <TableHead className="text-[#1e293b] font-semibold text-right">Itens</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Status</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menus.map((menu) => (
                <TableRow
                  key={menu.id}
                  className="border-b border-[#e2e8f0] hover:bg-[#f8f9fa]"
                >
                  <TableCell className="text-[#1e293b] font-medium">
                    {menu.name}
                  </TableCell>
                  <TableCell className="text-[#64748b] font-mono text-sm">
                    {menu.slug}
                  </TableCell>
                  <TableCell className="text-[#64748b]">
                    {getLocationLabel(menu.location)}
                  </TableCell>
                  <TableCell className="text-[#1e293b] font-semibold text-right">
                    {menu.items}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        menu.status === "active"
                          ? "bg-green-100 text-green-700 border-0"
                          : "bg-gray-100 text-gray-700 border-0"
                      }
                    >
                      {menu.status === "active" ? "✓ Ativo" : "○ Inativo"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link href={`/admin/menus/${menu.id}/edit`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-600 hover:bg-purple-50"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:bg-red-50"
                        onClick={() => handleDelete(menu.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </AdminLayout>
  );
}
