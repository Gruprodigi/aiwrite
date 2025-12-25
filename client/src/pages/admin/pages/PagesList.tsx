import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Eye, Edit2, Trash2, Plus } from "lucide-react";
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockPages = [
  {
    id: 1,
    title: "Sobre Nós",
    slug: "sobre-nos",
    author: "Admin",
    status: "published",
    visibility: "public",
    date: "2024-12-20",
  },
  {
    id: 2,
    title: "Política de Privacidade",
    slug: "politica-privacidade",
    author: "Admin",
    status: "published",
    visibility: "public",
    date: "2024-12-15",
  },
  {
    id: 3,
    title: "Termos de Uso",
    slug: "termos-uso",
    author: "Admin",
    status: "published",
    visibility: "public",
    date: "2024-12-10",
  },
  {
    id: 4,
    title: "Página de Testes",
    slug: "testes",
    author: "Admin",
    status: "draft",
    visibility: "private",
    date: "2024-12-05",
  },
];

export default function PagesList() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredPages = useMemo(() => {
    return mockPages.filter((page) => {
      const matchesSearch = page.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus = filterStatus === "all" || page.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [search, filterStatus]);

  const getStatusColor = (status: string) => {
    return status === "published"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";
  };

  const getVisibilityColor = (visibility: string) => {
    switch (visibility) {
      case "public":
        return "bg-blue-100 text-blue-700";
      case "private":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <AdminLayout title="Gestão de Páginas">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#64748b]">{filteredPages.length} páginas</p>
          <Link href="/admin/pages/create">
            <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
              <Plus className="h-4 w-4" /> Nova Página
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[#64748b] mb-2 block">Buscar</label>
              <Input
                placeholder="Título da página..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-[#e2e8f0]"
              />
            </div>
            <div>
              <label className="text-sm text-[#64748b] mb-2 block">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg"
              >
                <option value="all">Todos</option>
                <option value="published">✓ Publicado</option>
                <option value="draft">● Rascunho</option>
              </select>
            </div>
          </div>
        </Card>
      </div>

      {/* Pages Table */}
      <Card className="p-6">
        <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#f8f9fa] border-b border-[#e2e8f0]">
                <TableHead className="text-[#1e293b] font-semibold">Título</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Slug</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Autor</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Status</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Visibilidade</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Data</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPages.map((page) => (
                <TableRow
                  key={page.id}
                  className="border-b border-[#e2e8f0] hover:bg-[#f8f9fa]"
                >
                  <TableCell className="text-[#1e293b] font-medium">
                    {page.title}
                  </TableCell>
                  <TableCell className="text-[#64748b] text-sm font-mono">
                    /{page.slug}
                  </TableCell>
                  <TableCell className="text-[#64748b]">{page.author}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(page.status)} border-0`}>
                      {page.status === "published" ? "✓ Publicado" : "● Rascunho"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getVisibilityColor(page.visibility)} border-0`}
                    >
                      {page.visibility === "public" ? "🌍 Pública" : "🔒 Privada"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#64748b] text-sm">
                    {new Date(page.date).toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:bg-blue-50"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Link href={`/admin/pages/${page.id}/edit`}>
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
