import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useLocation } from "wouter";
import { useState } from "react";

interface PlanFormProps {
  plan?: any;
  onSubmit?: (data: any) => void;
}

export function PlanForm({ plan, onSubmit }: PlanFormProps) {
  const [_, setLocation] = useLocation();
  const [formData, setFormData] = useState(plan || {
    name: "",
    slug: "",
    description: "",
    status: "draft",
    icon: "📦",
    price: 0,
    period: "mês",
    billing: "monthly",
    annualDiscount: 20,
    wordLimit: 10000,
    unlimitedWords: false,
    documentLimit: 5,
    unlimitedDocuments: false,
    features: ["Acesso básico", "Suporte por email"],
    maxTeamMembers: 1,
    customBranding: false,
    apiAccess: false,
    advancedAnalytics: false,
    customDomain: false,
    prioritySupport: false,
    ssoIntegration: false,
    customData: "{}",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleFeaturesChange = (newFeatures: string) => {
    setFormData({
      ...formData,
      features: newFeatures.split("\n").filter((f) => f.trim()),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    setLocation("/admin/plans");
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Section 1: Basic Information */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Informações Básicas</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nome do Plano *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => {
                handleChange(e);
                setFormData({
                  ...formData,
                  slug: generateSlug(e.target.value),
                });
              }}
              placeholder="Professional Plan"
              required
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="slug">Slug (URL amigável) *</Label>
              <Input
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="professional-plan"
                required
                className="mt-1"
              />
              <p className="text-xs text-[#64748b] mt-1">Auto-gerado, editável</p>
            </div>
            <div>
              <Label htmlFor="icon">Ícone</Label>
              <Input
                id="icon"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                placeholder="⭐"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Descrição Curta</Label>
            <Input
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Ideal para profissionais independentes..."
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="status">Status *</Label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
              >
                <option value="draft">● Rascunho</option>
                <option value="published">✓ Publicado</option>
                <option value="archived">■ Arquivado</option>
              </select>
            </div>
            <div>
              <Label htmlFor="billing">Tipo de Cobrança</Label>
              <select
                id="billing"
                name="billing"
                value={formData.billing}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
              >
                <option value="monthly">Mensal</option>
                <option value="annual">Anual</option>
                <option value="both">Ambos</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Section 2: Pricing */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Preços</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="price">Preço Mensal *</Label>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#64748b]">R$</span>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="49.90"
                  step="0.01"
                  required
                  className="flex-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="period">Período</Label>
              <select
                id="period"
                name="period"
                value={formData.period}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
              >
                <option value="mês">Mês</option>
                <option value="ano">Ano</option>
              </select>
            </div>
            <div>
              <Label htmlFor="annualDiscount">Desconto Anual %</Label>
              <Input
                id="annualDiscount"
                name="annualDiscount"
                type="number"
                value={formData.annualDiscount}
                onChange={handleChange}
                placeholder="20"
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Section 3: Resource Limits */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Limites de Recursos</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="wordLimit">Limite de Palavras</Label>
            <div className="flex items-center gap-4 mt-1">
              <Input
                id="wordLimit"
                name="wordLimit"
                type="number"
                value={formData.wordLimit}
                onChange={handleChange}
                className="flex-1"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="unlimitedWords"
                  checked={formData.unlimitedWords}
                  onChange={handleChange}
                  className="rounded"
                />
                <span className="text-sm">Ilimitado</span>
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor="documentLimit">Limite de Documentos</Label>
            <div className="flex items-center gap-4 mt-1">
              <Input
                id="documentLimit"
                name="documentLimit"
                type="number"
                value={formData.documentLimit}
                onChange={handleChange}
                className="flex-1"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="unlimitedDocuments"
                  checked={formData.unlimitedDocuments}
                  onChange={handleChange}
                  className="rounded"
                />
                <span className="text-sm">Ilimitado</span>
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor="maxTeamMembers">Máx. de Membros do Time</Label>
            <Input
              id="maxTeamMembers"
              name="maxTeamMembers"
              type="number"
              value={formData.maxTeamMembers}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
        </div>
      </Card>

      {/* Section 4: Features */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Features (1 por linha)</h3>
        <textarea
          value={formData.features.join("\n")}
          onChange={(e) => handleFeaturesChange(e.target.value)}
          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          rows={6}
        />
      </Card>

      {/* Section 5: Features Advanced */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Features Avançadas</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="customBranding"
              checked={formData.customBranding}
              onChange={handleChange}
              className="rounded"
            />
            <span className="text-[#1e293b]">Custom Branding</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="apiAccess"
              checked={formData.apiAccess}
              onChange={handleChange}
              className="rounded"
            />
            <span className="text-[#1e293b]">Acesso à API</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="advancedAnalytics"
              checked={formData.advancedAnalytics}
              onChange={handleChange}
              className="rounded"
            />
            <span className="text-[#1e293b]">Analytics Avançados</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="customDomain"
              checked={formData.customDomain}
              onChange={handleChange}
              className="rounded"
            />
            <span className="text-[#1e293b]">Domínio Customizado</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="prioritySupport"
              checked={formData.prioritySupport}
              onChange={handleChange}
              className="rounded"
            />
            <span className="text-[#1e293b]">Suporte Prioritário</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="ssoIntegration"
              checked={formData.ssoIntegration}
              onChange={handleChange}
              className="rounded"
            />
            <span className="text-[#1e293b]">SSO Integration</span>
          </label>
        </div>
      </Card>

      {/* Section 6: Custom Data */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Dados Customizados (JSON)</h3>
        <textarea
          name="customData"
          value={formData.customData}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          rows={6}
        />
      </Card>

      {/* Submit Buttons */}
      <div className="flex gap-3 justify-end">
        <Button variant="outline" onClick={() => setLocation("/admin/plans")}>
          Cancelar
        </Button>
        <Button variant="outline">Salvar como Rascunho</Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
          💾 Salvar Plano
        </Button>
      </div>
    </form>
  );
}
