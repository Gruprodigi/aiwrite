import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Mail, TestTube } from "lucide-react";

export default function EmailSettings() {
  const [smtpHost, setSmtpHost] = useState("smtp.gmail.com");
  const [smtpPort, setSmtpPort] = useState("587");
  const [smtpUser, setSmtpUser] = useState("your-email@gmail.com");
  const [smtpPassword, setSmtpPassword] = useState("");
  const [fromEmail, setFromEmail] = useState("noreply@writerai.com");
  const [fromName, setFromName] = useState("WriterAI");
  const [testEmail, setTestEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Configurações de email salvas!");
  };

  const handleTestEmail = () => {
    if (testEmail) {
      alert(`Email de teste enviado para ${testEmail}`);
    }
  };

  return (
    <AdminLayout title="Configurações de Email">
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
            <h3 className="font-semibold text-lg">Configuração SMTP</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="host">Host SMTP</Label>
                <Input
                  id="host"
                  value={smtpHost}
                  onChange={(e) => setSmtpHost(e.target.value)}
                  placeholder="smtp.gmail.com"
                />
              </div>

              <div>
                <Label htmlFor="port">Porta</Label>
                <Input
                  id="port"
                  type="number"
                  value={smtpPort}
                  onChange={(e) => setSmtpPort(e.target.value)}
                  placeholder="587"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="user">Usuário SMTP</Label>
              <Input
                id="user"
                type="email"
                value={smtpUser}
                onChange={(e) => setSmtpUser(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password">Senha SMTP</Label>
              <Input
                id="password"
                type="password"
                value={smtpPassword}
                onChange={(e) => setSmtpPassword(e.target.value)}
                placeholder="••••••••"
              />
              <p className="text-xs text-gray-500 mt-1">Para Gmail, use uma senha de aplicativo</p>
            </div>

            <h3 className="font-semibold text-lg pt-4">Email Padrão</h3>

            <div>
              <Label htmlFor="fromEmail">Email do Remetente</Label>
              <Input
                id="fromEmail"
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="fromName">Nome do Remetente</Label>
              <Input
                id="fromName"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
              />
            </div>

            <Button type="submit" className="mt-4">
              Salvar Configurações
            </Button>
          </div>
        </form>

        {/* Test Email */}
        <Card className="p-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <TestTube className="h-5 w-5" />
              Testar Email
            </h3>

            <div>
              <Label htmlFor="testEmail">Email para Teste</Label>
              <div className="flex gap-2">
                <Input
                  id="testEmail"
                  type="email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="seu-email@exemplo.com"
                />
                <Button type="button" onClick={handleTestEmail}>
                  Enviar Teste
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
