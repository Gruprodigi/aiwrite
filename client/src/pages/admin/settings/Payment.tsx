import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { CreditCard, Copy, Check, Link2 } from "lucide-react";
import { Link } from "wouter";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "pix" | "paypal">("stripe");
  const [cardData, setCardData] = useState({
    number: "",
    holderName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });
  const [copied, setCopied] = useState(false);

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "number") {
      formattedValue = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim();
    } else if (name === "expiryMonth" || name === "expiryYear") {
      formattedValue = value.replace(/\D/g, "");
    } else if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setCardData({
      ...cardData,
      [name]: formattedValue,
    });
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText("00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-1234-567890abcdef5204000053039865802BR5913WRITER AI6009SAO PAULO62410503***63041D3F");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AdminLayout title="Pagamento">
      <div className="grid grid-cols-3 gap-6">
        {/* Payment Methods */}
        <div className="col-span-2 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-[#1e293b] mb-4">Selecione um Método de Pagamento</h3>

            {/* Stripe */}
            <div
              className={`p-4 rounded-lg border-2 mb-4 cursor-pointer transition-all ${
                paymentMethod === "stripe"
                  ? "border-primary bg-primary/5"
                  : "border-[#e2e8f0] hover:border-[#cbd5e1]"
              }`}
              onClick={() => setPaymentMethod("stripe")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "stripe" ? "border-primary" : "border-[#cbd5e1]"
                  }`}
                >
                  {paymentMethod === "stripe" && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <CreditCard className="h-5 w-5 text-[#667eea]" />
                <div>
                  <p className="font-semibold text-[#1e293b]">💳 Stripe (Cartão de Crédito)</p>
                  <p className="text-sm text-[#64748b]">Visa, Mastercard, American Express</p>
                </div>
              </div>
            </div>

            {/* PIX */}
            <div
              className={`p-4 rounded-lg border-2 mb-4 cursor-pointer transition-all ${
                paymentMethod === "pix"
                  ? "border-primary bg-primary/5"
                  : "border-[#e2e8f0] hover:border-[#cbd5e1]"
              }`}
              onClick={() => setPaymentMethod("pix")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "pix" ? "border-primary" : "border-[#cbd5e1]"
                  }`}
                >
                  {paymentMethod === "pix" && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <span className="text-xl">🟦</span>
                <div>
                  <p className="font-semibold text-[#1e293b]">PIX (Transferência Instantânea)</p>
                  <p className="text-sm text-[#64748b]">QR Code ou chave PIX</p>
                </div>
              </div>
            </div>

            {/* PayPal */}
            <div
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                paymentMethod === "paypal"
                  ? "border-primary bg-primary/5"
                  : "border-[#e2e8f0] hover:border-[#cbd5e1]"
              }`}
              onClick={() => setPaymentMethod("paypal")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "paypal" ? "border-primary" : "border-[#cbd5e1]"
                  }`}
                >
                  {paymentMethod === "paypal" && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <span className="text-xl">🅿️</span>
                <div>
                  <p className="font-semibold text-[#1e293b]">PayPal</p>
                  <p className="text-sm text-[#64748b]">Conta PayPal global</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Stripe Payment Form */}
          {paymentMethod === "stripe" && (
            <Card className="p-6">
              <h3 className="text-lg font-bold text-[#1e293b] mb-6">Informações do Cartão</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="holderName">Nome do Titular *</Label>
                  <Input
                    id="holderName"
                    name="holderName"
                    value={cardData.holderName}
                    onChange={handleCardChange}
                    placeholder="João Silva"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="number">Número do Cartão *</Label>
                  <input
                    id="number"
                    name="number"
                    value={cardData.number}
                    onChange={handleCardChange}
                    placeholder="4532 1234 5678 9010"
                    maxLength={19}
                    className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono mt-1"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="expiryMonth">Mês *</Label>
                    <input
                      id="expiryMonth"
                      name="expiryMonth"
                      value={cardData.expiryMonth}
                      onChange={handleCardChange}
                      placeholder="12"
                      maxLength={2}
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiryYear">Ano *</Label>
                    <input
                      id="expiryYear"
                      name="expiryYear"
                      value={cardData.expiryYear}
                      onChange={handleCardChange}
                      placeholder="2025"
                      maxLength={4}
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV *</Label>
                    <input
                      id="cvv"
                      name="cvv"
                      value={cardData.cvv}
                      onChange={handleCardChange}
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono mt-1"
                    />
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-6">
                  Processar Pagamento
                </Button>
              </div>
            </Card>
          )}

          {/* PIX Payment */}
          {paymentMethod === "pix" && (
            <Card className="p-6">
              <h3 className="text-lg font-bold text-[#1e293b] mb-6">Escaneie o QR Code ou copie a chave</h3>
              <div className="space-y-6">
                {/* QR Code Mock */}
                <div className="flex justify-center">
                  <div className="w-48 h-48 bg-[#f8f9fa] border-2 border-[#e2e8f0] rounded-lg flex items-center justify-center text-[#64748b]">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🟫🟪🟫</div>
                      <div className="text-4xl mb-2">🟫⬜🟫</div>
                      <div className="text-4xl">🟫🟪🟫</div>
                      <p className="text-xs mt-4">QR Code</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label>Chave PIX Aleatória</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      value="00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-1234-567890abcdef5204000053039865802BR5913WRITER AI6009SAO PAULO62410503***63041D3F"
                      readOnly
                      className="font-mono text-xs"
                    />
                    <Button
                      onClick={handleCopyPix}
                      variant="outline"
                      className="border-[#e2e8f0]"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    ✓ Após escanear o QR Code ou usar a chave, sua transação será processada em segundos.
                  </p>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Confirmar Pagamento PIX
                </Button>
              </div>
            </Card>
          )}

          {/* PayPal Payment */}
          {paymentMethod === "paypal" && (
            <Card className="p-6">
              <h3 className="text-lg font-bold text-[#1e293b] mb-6">Prosseguir com PayPal</h3>
              <div className="space-y-6">
                <div className="p-6 bg-[#003087]/5 border border-[#003087]/20 rounded-lg">
                  <p className="text-sm text-[#1e293b] mb-4">
                    Você será redirecionado para o site do PayPal de forma segura. Seus dados bancários nunca serão compartilhados conosco.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>✓ Pagamento seguro via PayPal</p>
                    <p>✓ Sem compartilhamento de dados bancários</p>
                    <p>✓ Proteção do comprador</p>
                  </div>
                </div>

                <Button className="w-full bg-[#003087] hover:bg-[#003087]/90 text-white h-12 font-semibold">
                  <Link2 className="h-4 w-4 mr-2" /> Pagar com PayPal
                </Button>
              </div>
            </Card>
          )}
        </div>

        {/* Summary Sidebar */}
        <Card className="p-6 h-fit sticky top-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-6">Resumo</h3>

          <div className="space-y-4 mb-6 pb-6 border-b border-[#e2e8f0]">
            <div className="flex justify-between">
              <p className="text-[#64748b]">Plano Professional</p>
              <p className="font-semibold text-[#1e293b]">R$ 49,00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#64748b]">Imposto</p>
              <p className="font-semibold text-[#1e293b]">R$ 0,00</p>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <p className="font-bold text-[#1e293b]">Total</p>
            <p className="text-2xl font-bold text-primary">R$ 49,00</p>
          </div>

          <div className="space-y-2 text-xs text-[#64748b]">
            <p>✓ Renovação automática</p>
            <p>✓ Cancelar a qualquer momento</p>
            <p>✓ Sem contrato de longa duração</p>
          </div>

          <Link href="/admin/settings/payment-history">
            <Button variant="outline" className="w-full border-[#e2e8f0] mt-6">
              Ver Histórico de Pagamentos
            </Button>
          </Link>
        </Card>
      </div>
    </AdminLayout>
  );
}
