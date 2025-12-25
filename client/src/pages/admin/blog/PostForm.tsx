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
    placeholder: "Comece a escrever seu post...",
  }),
];

export default function BlogPostForm() {
  const [_, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Tutorial",
    tags: "",
    featured: false,
    metaDescription: "",
    metaKeywords: "",
    featuredImage: "",
  });

  const editor = useEditor({
    extensions,
    content: "<p></p>",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/admin/blog/posts");
  };

  return (
    <AdminLayout title="Criar Novo Post">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-4">Informações Básicas</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Título do Post *</Label>
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
                placeholder="Título atrativo do post..."
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug (URL amigável)</Label>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#64748b]">blog.com/</span>
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
                <Label htmlFor="category">Categoria *</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg mt-1"
                >
                  <option value="Tutorial">Tutorial</option>
                  <option value="Análise">Análise</option>
                  <option value="Notícia">Notícia</option>
                  <option value="Caso de Uso">Caso de Uso</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 mt-1">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="rounded"
                  />
                  <span className="text-sm text-[#1e293b]">⭐ Destaque na home</span>
                </label>
              </div>
            </div>

            <div>
              <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
              <Input
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="tag1, tag2, tag3"
                className="mt-1"
              />
            </div>
          </div>
        </Card>

        {/* Post Content */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-4">Conteúdo do Post</h3>
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
                onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                className="px-3 py-1 bg-white border border-[#e2e8f0] rounded hover:bg-[#f1f5f9]"
                type="button"
              >
                H2
              </button>
              <button
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
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

        {/* Featured Image */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-4">Imagem em Destaque</h3>
          <div className="border-2 border-dashed border-[#e2e8f0] rounded-lg p-8 text-center">
            <p className="text-[#64748b] mb-3">🖼️ Clique para fazer upload da imagem</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="featured-image"
            />
            <Button type="button" variant="outline" onClick={() => document.getElementById("featured-image")?.click()}>
              Selecionar Imagem
            </Button>
          </div>
        </Card>

        {/* SEO */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-4">SEO</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="metaDescription">Meta Descrição</Label>
              <textarea
                id="metaDescription"
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                placeholder="Descrição para mecanismos de busca..."
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg mt-1"
                rows={2}
              />
              <p className="text-xs text-[#64748b] mt-1">
                {formData.metaDescription.length}/160 caracteres
              </p>
            </div>

            <div>
              <Label htmlFor="metaKeywords">Palavras-chave</Label>
              <Input
                id="metaKeywords"
                name="metaKeywords"
                value={formData.metaKeywords}
                onChange={handleChange}
                placeholder="palavra1, palavra2, palavra3"
                className="mt-1"
              />
            </div>
          </div>
        </Card>

        {/* Submit Buttons */}
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={() => setLocation("/admin/blog/posts")}>
            Cancelar
          </Button>
          <Button variant="outline">Salvar como Rascunho</Button>
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
            ✓ Publicar Post
          </Button>
        </div>
      </form>
    </AdminLayout>
  );
}
