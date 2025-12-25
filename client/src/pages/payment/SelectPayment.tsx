import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft, Copy, Check } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useState } from "react";

export default function SelectPayment() {
  const [match, params] = useRoute("/payment/select/:planId");
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [copied, setCopied] = useState(false);

  const planNames: Record<string, string> = {
    "1": "Free",
    "2": "Professional",
    "3": "Enterprise"
  };

  const planPrices: Record<string, string> = {
    "1": "Grátis",
    "2": "R$ 49,90/mês",
    "3": "R$ 199,90/mês"
  };

  const planId = params?.planId || "2";
  const planName = planNames[planId] || "Professional";
  const planPrice = planPrices[planId] || "R$ 49,90/mês";

  const handleCopyPix = () => {
    navigator.clipboard.writeText("00020126580014br.gov.bcb.pix0136550e8422-73ee-46a0-a8d5-b5cd50d3f03552040000530398654061234.565802BR5913JOHN DOE6009SAO PAULO62410503***63041D3D");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Header */}
        <Link href="/user/plans">
          <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm">
            <ChevronLeft className="h-4 w-4" /> Voltar aos Planos
          </a>
        </Link>

        {/* Plan Summary */}
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Plano Selecionado</p>
                <h2 className="text-2xl font-bold text-gray-900">{planName}</h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Valor Mensal</p>
                <p className="text-2xl font-bold text-primary">{planPrice}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Escolha o Método de Pagamento</CardTitle>
            <CardDescription>
              Selecione como você gostaria de pagar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              {/* Stripe */}
              <div className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'stripe' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                <RadioGroupItem value="stripe" id="stripe" />
                <Label htmlFor="stripe" className="cursor-pointer flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💳</span>
                    <div>
                      <p className="font-medium text-gray-900">Cartão de Crédito</p>
                      <p className="text-xs text-gray-500">Visa, Mastercard, Elo</p>
                    </div>
                  </div>
                </Label>
              </div>

              {/* PIX */}
              <div className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'pix' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                <RadioGroupItem value="pix" id="pix" />
                <Label htmlFor="pix" className="cursor-pointer flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔷</span>
                    <div>
                      <p className="font-medium text-gray-900">PIX</p>
                      <p className="text-xs text-gray-500">Transferência instantânea</p>
                    </div>
                  </div>
                </Label>
              </div>

              {/* PayPal */}
              <div className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'paypal' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="cursor-pointer flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🅿️</span>
                    <div>
                      <p className="font-medium text-gray-900">PayPal</p>
                      <p className="text-xs text-gray-500">Carteira digital segura</p>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Payment Form - Stripe */}
        {paymentMethod === 'stripe' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dados do Cartão</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardholder">Nome no Cartão</Label>
                <Input id="cardholder" placeholder="João Silva" className="bg-gray-50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardnumber">Número do Cartão</Label>
                <Input id="cardnumber" placeholder="0000 0000 0000 0000" className="bg-gray-50 font-mono" maxLength={19} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Validade (MM/AA)</Label>
                  <Input id="expiry" placeholder="12/26" className="bg-gray-50" maxLength={5} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="000" className="bg-gray-50" maxLength={3} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipcode">CEP de Cobrança</Label>
                <Input id="zipcode" placeholder="01234-567" className="bg-gray-50" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/payment/success" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-11">
                  Pagar Agora
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )}

        {/* Payment Form - PIX */}
        {paymentMethod === 'pix' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pagamento via PIX</CardTitle>
              <CardDescription>Escaneie o QR Code ou copie a chave PIX</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white border-4 border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">QR Code</p>
                    <div className="w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs">▓▓▓▓▓▓▓▓▓▓</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Chave PIX (Copiar)</Label>
                <div className="flex gap-2">
                  <Input 
                    value="00020126580014br.gov.bcb.pix..." 
                    readOnly 
                    className="bg-gray-50 text-xs font-mono"
                  />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleCopyPix}
                    className="shrink-0"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Status:</strong> Aguardando pagamento... A transação pode levar alguns minutos para ser confirmada.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/payment/success" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-11">
                  Já Paguei
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )}

        {/* Payment Form - PayPal */}
        {paymentMethod === 'paypal' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pagamento via PayPal</CardTitle>
              <CardDescription>Você será redirecionado para completar o pagamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  Ao clicar no botão abaixo, você será levado para o site seguro do PayPal para completar o pagamento.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/payment/success" className="w-full">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white h-11 font-semibold">
                  Pagar com PayPal
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
