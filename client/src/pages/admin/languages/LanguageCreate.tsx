import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLocation } from "wouter";
import { useState } from "react";

export default function LanguageCreate() {
  const [, navigate] = useLocation();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [nativeName, setNativeName] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);
  const [isDefault, setIsDefault] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/admin/languages");
  };

  return (
    <AdminLayout title="Adicionar Novo Idioma">
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
          <div>
            <Label htmlFor="code">Código do Idioma</Label>
            <Input
              id="code"
              placeholder="ex: pt-BR"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              required
            />
            <p className="text-xs text-gray-500 mt-1">Formato: pt-BR, en-US, es-ES</p>
          </div>

          <div>
            <Label htmlFor="name">Nome em Inglês</Label>
            <Input
              id="name"
              placeholder="ex: Portuguese"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="nativeName">Nome Nativo</Label>
            <Input
              id="nativeName"
              placeholder="ex: Português"
              value={nativeName}
              onChange={(e) => setNativeName(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Checkbox
                id="enabled"
                checked={isEnabled}
                onChange={(checked) => setIsEnabled(checked as boolean)}
              />
              <Label htmlFor="enabled" className="cursor-pointer">
                Idioma Ativo
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="default"
                checked={isDefault}
                onChange={(checked) => setIsDefault(checked as boolean)}
              />
              <Label htmlFor="default" className="cursor-pointer">
                Definir como Padrão
              </Label>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit">Criar Idioma</Button>
            <Button type="button" variant="outline" onClick={() => navigate("/admin/languages")}>
              Cancelar
            </Button>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}
