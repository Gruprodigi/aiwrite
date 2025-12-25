import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const themes = [
  { id: "light", name: "Claro", preview: "bg-white border-gray-300" },
  { id: "dark", name: "Escuro", preview: "bg-slate-900 border-slate-700" },
  { id: "system", name: "Sistema", preview: "bg-gradient-to-r from-white to-slate-900" },
];

export default function AppearanceSettings() {
  const [theme, setTheme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState("#667eea");
  const [fontFamily, setFontFamily] = useState("inter");
  const [accentColor, setAccentColor] = useState("#764ba2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Configurações de aparência salvas!");
  };

  return (
    <AdminLayout title="Aparência">
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">Tema</h3>
            <div className="grid grid-cols-3 gap-4">
              {themes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    theme === t.id
                      ? "border-primary bg-primary/5"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <div className={`h-16 rounded mb-2 border ${t.preview}`} />
                  <p className="font-medium text-sm">{t.name}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Cores</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="primary">Cor Primária</Label>
                <div className="flex gap-3 items-center">
                  <input
                    id="primary"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-12 h-10 rounded cursor-pointer"
                  />
                  <Input
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="accent">Cor de Acentuação</Label>
                <div className="flex gap-3 items-center">
                  <input
                    id="accent"
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-12 h-10 rounded cursor-pointer"
                  />
                  <Input
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Tipografia</h3>
            <div>
              <Label htmlFor="font">Fonte Principal</Label>
              <select
                id="font"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="inter">Inter</option>
                <option value="poppins">Poppins</option>
                <option value="roboto">Roboto</option>
                <option value="open-sans">Open Sans</option>
                <option value="nunito">Nunito</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-3">Pré-visualização</h4>
            <Card className="p-4 bg-white">
              <h2 style={{ color: primaryColor }} className="text-2xl font-bold mb-2">
                Título em Destaque
              </h2>
              <p className="text-gray-600 mb-3">
                Este é um parágrafo de exemplo mostrando como o texto ficará com as configurações selecionadas.
              </p>
              <Button style={{ backgroundColor: primaryColor }}>
                Botão Exemplo
              </Button>
            </Card>
          </div>

          <Button type="submit">
            Salvar Configurações de Aparência
          </Button>
        </div>
      </form>
    </AdminLayout>
  );
}
