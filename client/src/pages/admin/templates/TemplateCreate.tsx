import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function TemplateCreate() {
  const [, navigate] = useLocation();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [variables, setVariables] = useState<string[]>([]);
  const [varInput, setVarInput] = useState("");

  const handleAddVariable = () => {
    if (varInput && !variables.includes(varInput)) {
      setVariables([...variables, varInput]);
      setVarInput("");
    }
  };

  const handleRemoveVariable = (v: string) => {
    setVariables(variables.filter((var_) => var_ !== v));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/admin/templates");
  };

  return (
    <AdminLayout title="Criar Template de Email">
      <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do Template</Label>
              <Input
                id="name"
                placeholder="ex: Boas-vindas"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="subject">Assunto do Email</Label>
              <Input
                id="subject"
                placeholder="ex: Bem-vindo ao WriterAI"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="variables">Variáveis Dinâmicas</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  id="variables"
                  placeholder="ex: {{name}}"
                  value={varInput}
                  onChange={(e) => setVarInput(e.target.value)}
                />
                <Button type="button" onClick={handleAddVariable}>
                  Adicionar
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {variables.map((v) => (
                  <div key={v} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm flex items-center gap-2">
                    {v}
                    <button
                      type="button"
                      onClick={() => handleRemoveVariable(v)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="html">Conteúdo HTML</Label>
              <Textarea
                id="html"
                placeholder="Cole seu HTML aqui..."
                value={htmlContent}
                onChange={(e) => setHtmlContent(e.target.value)}
                className="font-mono text-sm"
                rows={12}
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Use variáveis como {'{{name}}'}, {'{{email}}'} no seu HTML
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit">Salvar Template</Button>
          <Button type="button" variant="outline" onClick={() => navigate("/admin/templates")}>
            Cancelar
          </Button>
        </div>
      </form>
    </AdminLayout>
  );
}
