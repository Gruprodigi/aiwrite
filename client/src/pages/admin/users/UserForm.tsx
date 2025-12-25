import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useLocation } from "wouter";
import { useState } from "react";

interface UserFormProps {
  user?: any;
  onSubmit?: (data: any) => void;
}

export function UserForm({ user, onSubmit }: UserFormProps) {
  const [_, setLocation] = useLocation();
  const [formData, setFormData] = useState(user || {
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    bio: "",
    role: "user",
    status: "active",
    verified: false,
    password: "",
    confirmPassword: "",
    plan: "Free",
    expiresAt: "",
    neverExpires: false,
    wordLimit: 10000,
    customLimit: false,
    documentLimit: 50,
    unlimitedDocuments: false,
    language: "pt-BR",
    timezone: "America/Sao_Paulo",
    marketingEmails: true,
    productUpdates: true,
    securityAlerts: false,
    customData: "{}",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    setLocation("/admin/users");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Section 1: Personal Information */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Informações Pessoais</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="João Silva"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="joao@example.com"
              required
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+55 11 99999-9999"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="birthDate">Data de Nascimento</Label>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="bio">Biografia</Label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Breve descrição sobre o usuário..."
              className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
              rows={3}
            />
          </div>
        </div>
      </Card>

      {/* Section 2: Account & Access */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Conta e Acesso</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="role">Função *</Label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
              >
                <option value="user">Usuário</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <Label htmlFor="status">Status da Conta *</Label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
              >
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
                <option value="suspended">Suspenso</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="verified"
              name="verified"
              checked={formData.verified}
              onChange={handleChange}
              className="rounded"
            />
            <Label htmlFor="verified">Email Verificado</Label>
          </div>

          <div>
            <Label htmlFor="password">Senha (deixe vazio para manter)</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1"
            />
          </div>
        </div>
      </Card>

      {/* Section 3: Plan & Limits */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Plano e Limites</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="plan">Plano Atual *</Label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
            >
              <option value="Free">Free</option>
              <option value="Pro">Pro</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Label htmlFor="expiresAt">Data de Expiração</Label>
              <Input
                id="expiresAt"
                name="expiresAt"
                type="date"
                value={formData.expiresAt}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="neverExpires"
                name="neverExpires"
                checked={formData.neverExpires}
                onChange={handleChange}
                className="rounded"
              />
              <Label htmlFor="neverExpires">Nunca expira</Label>
            </div>
          </div>

          <div>
            <Label htmlFor="wordLimit">Limite de Palavras</Label>
            <Input
              id="wordLimit"
              name="wordLimit"
              type="number"
              value={formData.wordLimit}
              onChange={handleChange}
              className="mt-1"
            />
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
                <span>Ilimitado</span>
              </label>
            </div>
          </div>
        </div>
      </Card>

      {/* Section 4: Preferences */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Preferências</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="language">Idioma Padrão</Label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
              >
                <option value="pt-BR">Português (BR)</option>
                <option value="en-US">English (US)</option>
                <option value="es">Español</option>
              </select>
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <select
                id="timezone"
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
              >
                <option value="America/Sao_Paulo">São Paulo</option>
                <option value="America/New_York">New York</option>
                <option value="Europe/London">London</option>
              </select>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="font-medium text-[#1e293b]">Notificações</p>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="marketingEmails"
                checked={formData.marketingEmails}
                onChange={handleChange}
                className="rounded"
              />
              <span className="text-sm text-[#64748b]">Email de marketing</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="productUpdates"
                checked={formData.productUpdates}
                onChange={handleChange}
                className="rounded"
              />
              <span className="text-sm text-[#64748b]">Atualizações do produto</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="securityAlerts"
                checked={formData.securityAlerts}
                onChange={handleChange}
                className="rounded"
              />
              <span className="text-sm text-[#64748b]">Alertas de segurança</span>
            </label>
          </div>
        </div>
      </Card>

      {/* Section 5: Custom Data */}
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
        <Button variant="outline" onClick={() => setLocation("/admin/users")}>
          Cancelar
        </Button>
        <Button variant="outline">Salvar como Rascunho</Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
          💾 Salvar
        </Button>
      </div>
    </form>
  );
}
