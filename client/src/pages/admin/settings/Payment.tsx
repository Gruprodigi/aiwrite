import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CreditCard, Link2 } from "lucide-react";
import { Link } from "wouter";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "mercadopago" | "paypal">("stripe");
  const [cardData, setCardData] = useState({
    number: "",
    holderName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

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

            {/* Mercado Pago */}
            <div
              className={`p-4 rounded-lg border-2 mb-4 cursor-pointer transition-all ${
                paymentMethod === "mercadopago"
                  ? "border-primary bg-primary/5"
                  : "border-[#e2e8f0] hover:border-[#cbd5e1]"
              }`}
              onClick={() => setPaymentMethod("mercadopago")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "mercadopago" ? "border-primary" : "border-[#cbd5e1]"
                  }`}
                >
                  {paymentMethod === "mercadopago" && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <span className="text-xl">💳</span>
                <div>
                  <p className="font-semibold text-[#1e293b]">Mercado Pago</p>
                  <p className="text-sm text-[#64748b]">Cartão, débito, boleto, Pix</p>
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

          {/* Mercado Pago Payment */}
          {paymentMethod === "mercadopago" && (
            <Card className="p-6">
              <h3 className="text-lg font-bold text-[#1e293b] mb-6">Prosseguir com Mercado Pago</h3>
              <div className="space-y-6">
                <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-[#1e293b] mb-4">
                    Você será redirecionado para a plataforma segura do Mercado Pago, onde poderá escolher a melhor forma de pagamento:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>✓ Cartão de crédito e débito</p>
                    <p>✓ PIX (transferência instantânea)</p>
                    <p>✓ Boleto bancário</p>
                    <p>✓ Dinheiro na conta Mercado Pago</p>
                    <p>✓ Proteção do comprador</p>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-semibold">
                  Pagar com Mercado Pago
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
