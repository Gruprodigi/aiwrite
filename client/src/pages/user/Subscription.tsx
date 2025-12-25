import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { CreditCard, Calendar, CheckCircle2, AlertCircle, Download, RefreshCw } from "lucide-react";
import PaymentContent from "./SubscriptionPaymentTab";
import PaymentHistoryContent from "./SubscriptionPaymentHistoryTab";

export default function Subscription() {
  const [activeTab, setActiveTab] = useState("overview");

  const subscriptionData = {
    plan: "Pro",
    status: "Ativa",
    price: "R$ 49,90",
    billingCycle: "Mensal",
    startDate: "20/11/2025",
    nextBillingDate: "20/01/2026",
    daysRemaining: 18,
    features: [
      "Até 100.000 palavras/mês",
      "Modelos de IA avançados",
      "Análise de conteúdo ilimitada",
      "Suporte prioritário",
      "Exportação em múltiplos formatos",
    ],
    paymentMethod: {
      type: "Cartão de Crédito",
      lastDigits: "4242",
      brand: "Visa",
      expiryDate: "12/2027",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Minhas Assinaturas" />

        <div className="p-6 max-w-4xl mx-auto space-y-6 pb-20">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Minhas Assinaturas</h1>
              <p className="text-gray-600 mt-1">Gerencie sua assinatura e pagamentos</p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="payment">Realizar Pagamento</TabsTrigger>
              <TabsTrigger value="history">Histórico</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Plan Card */}
              <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold text-gray-900">Plano {subscriptionData.plan}</h2>
                      <Badge className="bg-green-100 text-green-700 border-none">Ativa</Badge>
                    </div>
                    <p className="text-gray-600">Sua assinatura está ativa e funcionando normalmente</p>
                  </div>
                  <Button variant="outline">Alterar Plano</Button>
                </div>

                <Separator className="my-6" />

                {/* Billing Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Valor Mensal</p>
                    <p className="text-2xl font-bold text-gray-900">{subscriptionData.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Ciclo de Faturamento</p>
                    <p className="text-lg font-semibold text-gray-900">{subscriptionData.billingCycle}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Próximo Faturamento</p>
                    <p className="text-lg font-semibold text-gray-900">{subscriptionData.nextBillingDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Dias Restantes</p>
                    <p className="text-2xl font-bold text-primary">{subscriptionData.daysRemaining} dias</p>
                  </div>
                </div>
              </Card>

              {/* Features */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recursos Inclusos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subscriptionData.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Payment Method */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Método de Pagamento
                </h3>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 text-white mb-4">
                  <p className="text-sm opacity-75 mb-2">Cartão em arquivo</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-semibold tracking-wider">•••• •••• •••• {subscriptionData.paymentMethod.lastDigits}</p>
                      <p className="text-sm opacity-75 mt-2">{subscriptionData.paymentMethod.type}</p>
                    </div>
                    <span className="text-lg font-semibold">{subscriptionData.paymentMethod.brand}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Vence em: {subscriptionData.paymentMethod.expiryDate}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Alterar Cartão</Button>
                  <Button variant="ghost">Adicionar Cartão</Button>
                </div>
              </Card>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Renovar Agora
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="text-red-600 hover:text-red-700">
                      Cancelar Assinatura
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Cancelar Assinatura?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Ao cancelar sua assinatura, você perderá acesso aos recursos premium em 18 dias. Esta ação pode ser desfeita.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex gap-2">
                      <AlertDialogCancel>Manter</AlertDialogCancel>
                      <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                        Cancelar
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TabsContent>

            {/* Payment Tab */}
            <TabsContent value="payment">
              <PaymentContent />
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history">
              <PaymentHistoryContent />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
