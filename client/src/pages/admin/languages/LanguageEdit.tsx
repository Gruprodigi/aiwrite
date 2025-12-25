import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "wouter";
import { useState } from "react";

const mockStrings = [
  { key: "welcome", value: "Bem-vindo", context: "ui" },
  { key: "goodbye", value: "Adeus", context: "ui" },
  { key: "error_404", value: "Página não encontrada", context: "error" },
];

export default function LanguageEdit() {
  const [, navigate] = useLocation();
  const [code, setCode] = useState("pt-BR");
  const [name, setName] = useState("Portuguese");
  const [nativeName, setNativeName] = useState("Português");
  const [isEnabled, setIsEnabled] = useState(true);
  const [isDefault, setIsDefault] = useState(true);
  const [strings, setStrings] = useState(mockStrings);
  const [newStringKey, setNewStringKey] = useState("");
  const [newStringValue, setNewStringValue] = useState("");
  const [newStringContext, setNewStringContext] = useState("ui");

  const handleAddString = () => {
    if (newStringKey && newStringValue) {
      setStrings([...strings, { key: newStringKey, value: newStringValue, context: newStringContext }]);
      setNewStringKey("");
      setNewStringValue("");
    }
  };

  const handleRemoveString = (key: string) => {
    setStrings(strings.filter((s) => s.key !== key));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/admin/languages");
  };

  return (
    <AdminLayout title="Editar Idioma">
      <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
        {/* Language Settings */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <h3 className="font-semibold">Configurações do Idioma</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="code">Código</Label>
              <Input id="code" value={code} disabled className="bg-gray-50" />
            </div>
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>

          <div>
            <Label htmlFor="nativeName">Nome Nativo</Label>
            <Input
              id="nativeName"
              value={nativeName}
              onChange={(e) => setNativeName(e.target.value)}
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
                Ativo
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="default"
                checked={isDefault}
                onChange={(checked) => setIsDefault(checked as boolean)}
              />
              <Label htmlFor="default" className="cursor-pointer">
                Padrão
              </Label>
            </div>
          </div>
        </div>

        {/* Translation Strings */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <h3 className="font-semibold">Strings de Tradução</h3>

          <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
            <div>
              <Label htmlFor="stringKey">Chave</Label>
              <Input
                id="stringKey"
                placeholder="ex: welcome"
                value={newStringKey}
                onChange={(e) => setNewStringKey(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="stringValue">Valor</Label>
              <Textarea
                id="stringValue"
                placeholder="Tradução..."
                value={newStringValue}
                onChange={(e) => setNewStringValue(e.target.value)}
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="context">Contexto</Label>
              <select
                id="context"
                value={newStringContext}
                onChange={(e) => setNewStringContext(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="ui">UI</option>
                <option value="email">Email</option>
                <option value="error">Erro</option>
              </select>
            </div>
            <Button type="button" onClick={handleAddString}>
              Adicionar String
            </Button>
          </div>

          {/* Strings List */}
          <div className="space-y-2">
            {strings.map((str) => (
              <div key={str.key} className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                <div className="flex-1">
                  <p className="font-medium text-sm">{str.key}</p>
                  <p className="text-sm text-gray-600">{str.value}</p>
                  <p className="text-xs text-gray-500">{str.context}</p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveString(str.key)}
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit">Salvar Alterações</Button>
          <Button type="button" variant="outline" onClick={() => navigate("/admin/languages")}>
            Cancelar
          </Button>
        </div>
      </form>
    </AdminLayout>
  );
}
