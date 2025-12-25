import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, AlertCircle, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Account() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Minha Conta" />
        
        <div className="p-6 max-w-4xl mx-auto space-y-6">
          {/* Plan Status */}
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Plano Professional</CardTitle>
                  <CardDescription>Sua assinatura está ativa e funcionando perfeitamente</CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-600">Renovação em</p>
                  <p className="text-2xl font-bold text-primary">18 dias</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Ativado em</p>
                    <p className="font-medium text-gray-900">18 de Dezembro de 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Próxima renovação</p>
                    <p className="font-medium text-gray-900">18 de Janeiro de 2026</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Link href="/user/plans">
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/5">
                  Fazer Upgrade
                </Button>
              </Link>
              <Link href="/payment/history">
                <Button variant="ghost" className="text-primary hover:bg-primary/5">
                  Ver Histórico de Pagamentos
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Resource Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Uso de Recursos</CardTitle>
              <CardDescription>Acompanhe seu consumo neste mês</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Palavras Usadas</label>
                  <span className="text-sm font-semibold text-gray-900">12.450 / 50.000</span>
                </div>
                <Progress value={24.9} className="h-2" />
                <p className="text-xs text-gray-500">24.9% do seu limite mensal</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Documentos Criados</label>
                  <span className="text-sm font-semibold text-gray-900">12 / Ilimitados</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Gerações de IA</label>
                  <span className="text-sm font-semibold text-gray-900">34 / Ilimitadas</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>Últimas 5 ações na sua conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <span className="text-sm font-bold">📄</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Documento criado</p>
                  <p className="text-xs text-gray-500">Artigo sobre IA e Futuro • 2 horas atrás</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Geração de IA</p>
                  <p className="text-xs text-gray-500">Parágrafo gerado • Ontem</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <span className="text-sm font-bold">💳</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Pagamento processado</p>
                  <p className="text-xs text-gray-500">Renovação Plano Pro • R$ 49,90 • 3 dias atrás</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0">
                  <span className="text-sm font-bold">⚡</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Limite próximo</p>
                  <p className="text-xs text-gray-500">Você usou 80% das suas palavras • 5 dias atrás</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                  <span className="text-sm font-bold">🎉</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Bem-vindo!</p>
                  <p className="text-xs text-gray-500">Sua conta foi criada • 18/12/2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
