import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const extensions = [
  StarterKit,
  Placeholder.configure({
    placeholder: "Comece a editar a página...",
  }),
];

export default function PageFormComponent() {
  const [_, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    visibility: "public",
    status: "draft",
    meta: "",
  });

  const editor = useEditor({
    extensions,
    content: "<p></p>",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/admin/pages");
  };

  return (
    <AdminLayout title="Criar Nova Página">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-4">
            Informações da Página
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Título da Página *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={(e) => {
                  handleChange(e);
                  setFormData({
                    ...formData,
                    slug: generateSlug(e.target.value),
                  });
                }}
                placeholder="Digite o título"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="slug">URL Amigável</Label>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#64748b]">sitio.com/</span>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="url-amigavel"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="visibility">Visibilidade</Label>
                <select
                  id="visibility"
                  name="visibility"
                  value={formData.visibility}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg mt-1"
                >
                  <option value="public">🌍 Pública</option>
                  <option value="private">🔒 Privada</option>
                  <option value="draft">● Rascunho</option>
                </select>
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg mt-1"
                >
                  <option value="draft">● Rascunho</option>
                  <option value="published">✓ Publicado</option>
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* Page Content */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-4">
            Conteúdo da Página
          </h3>
          <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
            <div className="bg-[#f8f9fa] p-3 border-b border-[#e2e8f0] flex gap-2">
              <button
                onClick={() => editor?.chain().focus().toggleBold().run()}
                className="px-3 py-1 bg-white border border-[#e2e8f0] rounded hover:bg-[#f1f5f9]"
                type="button"
              >
                <strong>B</strong>
              </button>
              <button
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                className="px-3 py-1 bg-white border border-[#e2e8f0] rounded hover:bg-[#f1f5f9]"
                type="button"
              >
                <em>I</em>
              </button>
              <button
                onClick={() =>
                  editor?.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className="px-3 py-1 bg-white border border-[#e2e8f0] rounded hover:bg-[#f1f5f9]"
                type="button"
              >
                H2
              </button>
              <button
                onClick={() =>
                  editor?.chain().focus().toggleBulletList().run()
                }
                className="px-3 py-1 bg-white border border-[#e2e8f0] rounded hover:bg-[#f1f5f9]"
                type="button"
              >
                • Lista
              </button>
            </div>
            <EditorContent
              editor={editor}
              className="prose prose-sm min-h-96 p-4 focus:outline-none"
            />
          </div>
        </Card>

        {/* Meta Info */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-4">Meta Informações</h3>
          <div>
            <Label htmlFor="meta">Meta Tags Customizadas (JSON)</Label>
            <textarea
              id="meta"
              name="meta"
              value={formData.meta}
              onChange={(e) =>
                setFormData({ ...formData, meta: e.target.value })
              }
              placeholder='{"robots": "index,follow"}'
              className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg font-mono text-sm mt-1"
              rows={4}
            />
          </div>
        </Card>

        {/* Submit Buttons */}
        <div className="flex gap-3 justify-end">
          <Button
            variant="outline"
            onClick={() => setLocation("/admin/pages")}
          >
            Cancelar
          </Button>
          <Button variant="outline">Salvar como Rascunho</Button>
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
            ✓ Publicar Página
          </Button>
        </div>
      </form>
    </AdminLayout>
  );
}
