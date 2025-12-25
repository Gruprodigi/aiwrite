import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function GeneralSettings() {
  const [siteName, setSiteName] = useState("WriterAI");
  const [siteDescription, setSiteDescription] = useState("Platform para criar documentos com IA");
  const [contactEmail, setContactEmail] = useState("contact@writerai.com");
  const [supportPhone, setSupportPhone] = useState("+55 (11) 98765-4321");
  const [address, setAddress] = useState("São Paulo, SP - Brasil");
  const [logo, setLogo] = useState("logo.png");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Configurações gerais salvas!");
  };

  return (
    <AdminLayout title="Configurações Gerais">
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <h3 className="font-semibold text-lg">Informações do Site</h3>

          <div>
            <Label htmlFor="siteName">Nome do Site</Label>
            <Input
              id="siteName"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={siteDescription}
              onChange={(e) => setSiteDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="logo">URL da Logo</Label>
            <Input
              id="logo"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
            />
          </div>

          <h3 className="font-semibold text-lg pt-4">Informações de Contato</h3>

          <div>
            <Label htmlFor="contactEmail">Email de Contato</Label>
            <Input
              id="contactEmail"
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Telefone de Suporte</Label>
            <Input
              id="phone"
              value={supportPhone}
              onChange={(e) => setSupportPhone(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <Button type="submit" className="mt-4">
            Salvar Configurações
          </Button>
        </div>
      </form>
    </AdminLayout>
  );
}
