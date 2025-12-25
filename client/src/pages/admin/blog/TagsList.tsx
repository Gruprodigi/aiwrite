import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit2, Trash2, Plus, X } from "lucide-react";
import { useState } from "react";

const mockTags = [
  { id: 1, name: "Inteligência Artificial", posts: 15 },
  { id: 2, name: "Escrita", posts: 22 },
  { id: 3, name: "Marketing", posts: 18 },
  { id: 4, name: "SEO", posts: 12 },
];

export default function TagsList() {
  const [tags, setTags] = useState(mockTags);
  const [isCreating, setIsCreating] = useState(false);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([
        ...tags,
        {
          id: Math.max(...tags.map((t) => t.id)) + 1,
          name: newTag,
          posts: 0,
        },
      ]);
      setNewTag("");
      setIsCreating(false);
    }
  };

  const handleDelete = (id: number) => {
    setTags(tags.filter((t) => t.id !== id));
  };

  return (
    <AdminLayout title="Gerenciar Tags">
      <div className="space-y-6">
        {/* Add New Tag */}
        {isCreating && (
          <Card className="p-6 border-primary border-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#1e293b]">Nova Tag</h3>
              <button onClick={() => setIsCreating(false)}>
                <X className="h-5 w-5 text-[#64748b]" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="tag">Nome da Tag *</Label>
                <Input
                  id="tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleAddTag();
                  }}
                  placeholder="Digite a tag"
                  className="mt-1"
                  autoFocus
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setIsCreating(false)}>
                  Cancelar
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={handleAddTag}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#64748b]">{tags.length} tags</p>
          {!isCreating && (
            <Button
              className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
              onClick={() => setIsCreating(true)}
            >
              <Plus className="h-4 w-4" /> Nova Tag
            </Button>
          )}
        </div>

        {/* Tags Cloud */}
        <Card className="p-6">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-2 px-4 py-2 bg-[#f1f5f9] rounded-full border border-[#e2e8f0] group hover:bg-primary/10 transition-colors"
              >
                <span className="text-[#1e293b] font-medium">#{tag.name}</span>
                <span className="text-xs text-[#64748b]">({tag.posts})</span>
                <div className="flex gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-purple-600 hover:text-purple-700">
                    <Edit2 className="h-3 w-3" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDelete(tag.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
