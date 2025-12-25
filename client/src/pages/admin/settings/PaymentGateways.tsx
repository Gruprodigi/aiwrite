import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PaymentGateways() {
  const [stripeEnabled, setStripeEnabled] = useState(true);
  const [stripePublic, setStripePublic] = useState("pk_live_abc123...");
  const [stripeSecret, setStripeSecret] = useState("sk_live_xyz789...");
  const [showStripeSecret, setShowStripeSecret] = useState(false);

  const [paypalEnabled, setPaypalEnabled] = useState(true);
  const [paypalClientId, setPaypalClientId] = useState("AcPKN2VaL5...");
  const [paypalSecret, setPaypalSecret] = useState("EPH1N9hqH2...");
  const [showPaypalSecret, setShowPaypalSecret] = useState(false);

  const [pixEnabled, setPixEnabled] = useState(true);
  const [pixKey, setPixKey] = useState("a1b2c3d4-e5f6-7890-1234-567890abcdef");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gateways de pagamento configurados com sucesso!");
  };

  return (
    <AdminLayout title="Gateways de Pagamento">
      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        {/* Stripe */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Stripe</h3>
              <p className="text-sm text-gray-600">Aceite cartões de crédito (Visa, Mastercard, AmEx)</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="stripeEnabled"
                checked={stripeEnabled}
                onChange={(e) => setStripeEnabled(e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <label htmlFor="stripeEnabled" className="text-sm font-medium cursor-pointer">
                {stripeEnabled ? "Ativo" : "Inativo"}
              </label>
            </div>
          </div>

          {stripeEnabled && (
            <div className="space-y-4">
              <Separator />
              <div>
                <Label htmlFor="stripePublic">Chave Pública (Publishable Key)</Label>
                <Input
                  id="stripePublic"
                  value={stripePublic}
                  onChange={(e) => setStripePublic(e.target.value)}
                  placeholder="pk_live_..."
                />
              </div>

              <div>
                <Label htmlFor="stripeSecret">Chave Secreta (Secret Key)</Label>
                <div className="flex gap-2">
                  <Input
                    id="stripeSecret"
                    type={showStripeSecret ? "text" : "password"}
                    value={stripeSecret}
                    onChange={(e) => setStripeSecret(e.target.value)}
                    placeholder="sk_live_..."
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setShowStripeSecret(!showStripeSecret)}
                  >
                    {showStripeSecret ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Obtenha em: <a href="https://dashboard.stripe.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    dashboard.stripe.com
                  </a>
                </p>
              </div>

              <Card className="bg-blue-50 border-blue-200 p-4">
                <p className="text-sm text-blue-800">
                  ✓ Stripe configurado | 5 transações de teste realizadas | Taxa: 2.9% + R$ 0,30
                </p>
              </Card>
            </div>
          )}
        </div>

        {/* PayPal */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">PayPal</h3>
              <p className="text-sm text-gray-600">Aceite pagamentos via conta PayPal</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="paypalEnabled"
                checked={paypalEnabled}
                onChange={(e) => setPaypalEnabled(e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <label htmlFor="paypalEnabled" className="text-sm font-medium cursor-pointer">
                {paypalEnabled ? "Ativo" : "Inativo"}
              </label>
            </div>
          </div>

          {paypalEnabled && (
            <div className="space-y-4">
              <Separator />
              <div>
                <Label htmlFor="paypalClientId">Client ID</Label>
                <Input
                  id="paypalClientId"
                  value={paypalClientId}
                  onChange={(e) => setPaypalClientId(e.target.value)}
                  placeholder="AcPKN2VaL5..."
                />
              </div>

              <div>
                <Label htmlFor="paypalSecret">Secret</Label>
                <div className="flex gap-2">
                  <Input
                    id="paypalSecret"
                    type={showPaypalSecret ? "text" : "password"}
                    value={paypalSecret}
                    onChange={(e) => setPaypalSecret(e.target.value)}
                    placeholder="EPH1N9hqH2..."
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setShowPaypalSecret(!showPaypalSecret)}
                  >
                    {showPaypalSecret ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Obtenha em: <a href="https://developer.paypal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    developer.paypal.com
                  </a>
                </p>
              </div>

              <Card className="bg-blue-50 border-blue-200 p-4">
                <p className="text-sm text-blue-800">
                  ✓ PayPal configurado | Status: Conectado | Taxa: 2.49% + R$ 0,49
                </p>
              </Card>
            </div>
          )}
        </div>

        {/* PIX */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">PIX (Brasil)</h3>
              <p className="text-sm text-gray-600">Transferências instantâneas via PIX</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="pixEnabled"
                checked={pixEnabled}
                onChange={(e) => setPixEnabled(e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <label htmlFor="pixEnabled" className="text-sm font-medium cursor-pointer">
                {pixEnabled ? "Ativo" : "Inativo"}
              </label>
            </div>
          </div>

          {pixEnabled && (
            <div className="space-y-4">
              <Separator />
              <div>
                <Label htmlFor="pixKey">Chave PIX (CPF, Email, Telefone ou Chave Aleatória)</Label>
                <Input
                  id="pixKey"
                  value={pixKey}
                  onChange={(e) => setPixKey(e.target.value)}
                  placeholder="a1b2c3d4-e5f6-7890-1234-567890abcdef"
                />
              </div>

              <Card className="bg-blue-50 border-blue-200 p-4">
                <p className="text-sm text-blue-800">
                  ✓ PIX configurado | 12 transações realizadas | Taxa: 0% (sem taxa adicional)
                </p>
              </Card>
            </div>
          )}
        </div>

        {/* Summary */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 p-6">
          <h3 className="font-semibold mb-3 text-gray-900">Resumo da Configuração</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>✓ Gateways ativos: {[stripeEnabled, paypalEnabled, pixEnabled].filter(Boolean).length} de 3</p>
            <p>✓ Total de transações processadas: 17</p>
            <p>✓ Volume processado: R$ 2.847,30</p>
            <p>✓ Taxa média de aprovação: 98,5%</p>
          </div>
        </Card>

        <Button type="submit" className="w-full">
          Salvar Gateways de Pagamento
        </Button>
      </form>
    </AdminLayout>
  );
}
