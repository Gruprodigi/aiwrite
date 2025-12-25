import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit2, Trash2, Plus, X } from "lucide-react";
import { useState } from "react";

const mockCategories = [
  { id: 1, name: "Tutorial", slug: "tutorial", posts: 12 },
  { id: 2, name: "Análise", slug: "analise", posts: 8 },
  { id: 3, name: "Notícia", slug: "noticia", posts: 24 },
];

export default function CategoriesList() {
  const [categories, setCategories] = useState(mockCategories);
  const [isCreating, setIsCreating] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: "", slug: "" });

  const handleAddCategory = () => {
    if (newCategory.name.trim()) {
      setCategories([
        ...categories,
        {
          id: Math.max(...categories.map((c) => c.id)) + 1,
          name: newCategory.name,
          slug: newCategory.slug || newCategory.name.toLowerCase(),
          posts: 0,
        },
      ]);
      setNewCategory({ name: "", slug: "" });
      setIsCreating(false);
    }
  };

  const handleDelete = (id: number) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
    <AdminLayout title="Gerenciar Categorias">
      <div className="space-y-6">
        {/* Add New Category */}
        {isCreating && (
          <Card className="p-6 border-primary border-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#1e293b]">Nova Categoria</h3>
              <button onClick={() => setIsCreating(false)}>
                <X className="h-5 w-5 text-[#64748b]" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  value={newCategory.name}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      name: e.target.value,
                      slug: e.target.value.toLowerCase(),
                    })
                  }
                  placeholder="Nome da categoria"
                  className="mt-1"
                  autoFocus
                />
              </div>

              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={newCategory.slug}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, slug: e.target.value })
                  }
                  placeholder="slug-categoria"
                  className="mt-1"
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setIsCreating(false)}>
                  Cancelar
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={handleAddCategory}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#64748b]">{categories.length} categorias</p>
          {!isCreating && (
            <Button
              className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
              onClick={() => setIsCreating(true)}
            >
              <Plus className="h-4 w-4" /> Nova Categoria
            </Button>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Card key={cat.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-[#1e293b]">{cat.name}</h4>
                  <p className="text-xs text-[#64748b]">/{cat.slug}</p>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:bg-red-50"
                    onClick={() => handleDelete(cat.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Badge className="bg-blue-100 text-blue-700 border-0">
                {cat.posts} posts
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
