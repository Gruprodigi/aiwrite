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

const mockPosts = [
  {
    id: 1,
    title: "Como Usar IA para Escrever Melhor",
    slug: "como-usar-ia-escrever",
    author: "Ana Silva",
    category: "Tutorial",
    status: "published",
    date: "2024-12-25",
    views: 1250,
    featured: true,
  },
  {
    id: 2,
    title: "Tendências de Conteúdo em 2025",
    slug: "tendencias-conteudo-2025",
    author: "Bruno Santos",
    category: "Análise",
    status: "published",
    date: "2024-12-23",
    views: 890,
    featured: false,
  },
  {
    id: 3,
    title: "Guia Completo de SEO para Blogs",
    slug: "guia-seo-blogs",
    author: "Mariana Costa",
    category: "Tutorial",
    status: "draft",
    date: "2024-12-20",
    views: 0,
    featured: false,
  },
];

export default function BlogPostsList() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    return mockPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = filterStatus === "all" || post.status === filterStatus;
      const matchesCategory = filterCategory === "all" || post.category === filterCategory;
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [search, filterStatus, filterCategory]);

  const getStatusColor = (status: string) => {
    return status === "published"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";
  };

  const getStatusLabel = (status: string) => {
    return status === "published" ? "✓ Publicado" : "● Rascunho";
  };

  return (
    <AdminLayout title="Gestão de Posts do Blog">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#64748b]">{filteredPosts.length} posts</p>
          <Link href="/admin/blog/posts/create">
            <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
              <Plus className="h-4 w-4" /> Novo Post
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-[#64748b] mb-2 block">Buscar</label>
              <Input
                placeholder="Título do post..."
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
            <div>
              <label className="text-sm text-[#64748b] mb-2 block">Categoria</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg"
              >
                <option value="all">Todas</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Análise">Análise</option>
                <option value="Notícia">Notícia</option>
              </select>
            </div>
          </div>
        </Card>
      </div>

      {/* Posts Table */}
      <Card className="p-6">
        <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#f8f9fa] border-b border-[#e2e8f0]">
                <TableHead className="text-[#1e293b] font-semibold">Título</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Autor</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Categoria</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Status</TableHead>
                <TableHead className="text-[#1e293b] font-semibold text-right">Visualizações</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Data</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id} className="border-b border-[#e2e8f0] hover:bg-[#f8f9fa]">
                  <TableCell className="text-[#1e293b] font-medium">
                    {post.featured && <span className="mr-2">⭐</span>}
                    {post.title}
                  </TableCell>
                  <TableCell className="text-[#64748b]">{post.author}</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-700 border-0">
                      {post.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(post.status)} border-0`}>
                      {getStatusLabel(post.status)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#1e293b] text-right font-semibold">
                    {post.views}
                  </TableCell>
                  <TableCell className="text-[#64748b] text-sm">
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Link href={`/admin/blog/posts/${post.id}/edit`}>
                        <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
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
