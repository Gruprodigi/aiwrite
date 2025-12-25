import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function SEOSettings() {
  const [defaultTitle, setDefaultTitle] = useState("WriterAI - Crie Documentos com IA");
  const [defaultDescription, setDefaultDescription] = useState("Platform para criar documentos com inteligência artificial");
  const [allowIndex, setAllowIndex] = useState(true);
  const [allowFollow, setAllowFollow] = useState(true);
  const [robotsContent, setRobotsContent] = useState("User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: https://writerai.com/sitemap.xml");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Configurações SEO salvas!");
  };

  return (
    <AdminLayout title="Configurações SEO">
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <h3 className="font-semibold text-lg">Meta Tags Padrão</h3>

          <div>
            <Label htmlFor="title">Title Padrão</Label>
            <Input
              id="title"
              value={defaultTitle}
              onChange={(e) => setDefaultTitle(e.target.value)}
              placeholder="Título que aparece nos buscadores"
            />
            <p className="text-xs text-gray-500 mt-1">Máximo 60 caracteres recomendado</p>
          </div>

          <div>
            <Label htmlFor="description">Meta Description</Label>
            <Textarea
              id="description"
              value={defaultDescription}
              onChange={(e) => setDefaultDescription(e.target.value)}
              rows={3}
              placeholder="Descrição que aparece nos buscadores"
            />
            <p className="text-xs text-gray-500 mt-1">Máximo 160 caracteres recomendado</p>
          </div>

          <h3 className="font-semibold text-lg pt-4">Configuração de Robôs</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="index"
                checked={allowIndex}
                onChange={(checked) => setAllowIndex(checked as boolean)}
              />
              <Label htmlFor="index" className="cursor-pointer">
                Permitir Indexação (index)
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="follow"
                checked={allowFollow}
                onChange={(checked) => setAllowFollow(checked as boolean)}
              />
              <Label htmlFor="follow" className="cursor-pointer">
                Permitir Seguimento de Links (follow)
              </Label>
            </div>
          </div>

          <h3 className="font-semibold text-lg pt-4">robots.txt</h3>

          <div>
            <Label htmlFor="robots">Conteúdo do robots.txt</Label>
            <Textarea
              id="robots"
              value={robotsContent}
              onChange={(e) => setRobotsContent(e.target.value)}
              rows={6}
              className="font-mono text-sm"
            />
          </div>

          <Button type="submit" className="mt-4">
            Salvar Configurações SEO
          </Button>
        </div>
      </form>
    </AdminLayout>
  );
}
