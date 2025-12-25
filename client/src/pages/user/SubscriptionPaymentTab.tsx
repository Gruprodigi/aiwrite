import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Copy, Check } from "lucide-react";

export default function PaymentContent() {
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

    setCardData({ ...cardData, [name]: formattedValue });
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText("00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-1234-567890abcdef5204000053039865802BR5913WRITER AI6009SAO PAULO62410503***63041D3F");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayment = () => {
    alert(`Processando pagamento via ${paymentMethod.toUpperCase()}...`);
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Selecione um Método de Pagamento</h3>

          {/* Stripe */}
          <div
            className={`p-4 rounded-lg border-2 mb-4 cursor-pointer transition-all ${
              paymentMethod === "stripe" ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setPaymentMethod("stripe")}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === "stripe" ? "border-primary" : "border-gray-300"
                }`}
              >
                {paymentMethod === "stripe" && <div className="w-2 h-2 bg-primary rounded-full" />}
              </div>
              <CreditCard className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">💳 Stripe (Cartão de Crédito)</p>
                <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
              </div>
            </div>
          </div>

          {/* PIX */}
          <div
            className={`p-4 rounded-lg border-2 mb-4 cursor-pointer transition-all ${
              paymentMethod === "pix" ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setPaymentMethod("pix")}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === "pix" ? "border-primary" : "border-gray-300"
                }`}
              >
                {paymentMethod === "pix" && <div className="w-2 h-2 bg-primary rounded-full" />}
              </div>
              <span className="text-xl">🟦</span>
              <div>
                <p className="font-semibold text-gray-900">PIX (Transferência Instantânea)</p>
                <p className="text-sm text-gray-600">QR Code ou chave PIX</p>
              </div>
            </div>
          </div>

          {/* PayPal */}
          <div
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              paymentMethod === "paypal" ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setPaymentMethod("paypal")}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === "paypal" ? "border-primary" : "border-gray-300"
                }`}
              >
                {paymentMethod === "paypal" && <div className="w-2 h-2 bg-primary rounded-full" />}
              </div>
              <span className="text-xl">🅿️</span>
              <div>
                <p className="font-semibold text-gray-900">PayPal</p>
                <p className="text-sm text-gray-600">Conta PayPal</p>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="mt-6 pt-6 border-t">
            {paymentMethod === "stripe" && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Informações do Cartão</h4>
                <div>
                  <Label htmlFor="number">Número do Cartão</Label>
                  <Input id="number" name="number" value={cardData.number} onChange={handleCardChange} placeholder="1234 5678 9012 3456" />
                </div>
                <div>
                  <Label htmlFor="holderName">Nome do Titular</Label>
                  <Input id="holderName" name="holderName" value={cardData.holderName} onChange={handleCardChange} placeholder="João Silva" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryMonth">Mês</Label>
                    <Input id="expiryMonth" name="expiryMonth" value={cardData.expiryMonth} onChange={handleCardChange} placeholder="MM" maxLength={2} />
                  </div>
                  <div>
                    <Label htmlFor="expiryYear">Ano</Label>
                    <Input id="expiryYear" name="expiryYear" value={cardData.expiryYear} onChange={handleCardChange} placeholder="YY" maxLength={2} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" name="cvv" value={cardData.cvv} onChange={handleCardChange} placeholder="123" maxLength={4} />
                </div>
              </div>
            )}

            {paymentMethod === "pix" && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Código PIX</h4>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">Escaneie o QR Code ou copie a chave abaixo:</p>
                  <div className="flex items-center gap-2">
                    <code className="text-xs bg-white p-2 rounded flex-1 overflow-auto">00020126580014br.gov.bcb.pix0136...</code>
                    <Button size="sm" variant="outline" onClick={handleCopyPix}>
                      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Redirecionando para PayPal</h4>
                <p className="text-sm text-gray-600">Você será redirecionado para completar o pagamento de forma segura.</p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Summary */}
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Resumo do Pagamento</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Plano Pro</span>
              <span className="font-medium">R$ 49,90</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Imposto</span>
              <span className="font-medium">R$ 0,00</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-base font-bold">
              <span>Total</span>
              <span className="text-primary">R$ 49,90</span>
            </div>
          </div>

          <Button onClick={handlePayment} className="w-full mt-6">
            Confirmar Pagamento
          </Button>
        </Card>
      </div>
    </div>
  );
}
