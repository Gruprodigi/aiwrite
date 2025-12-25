import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Pagamento Aprovado!</h1>
          <p className="text-gray-500">
            Obrigado pela sua compra. Seu plano <span className="font-semibold text-gray-900">Professional</span> foi ativado com sucesso.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 text-left text-sm space-y-2 border border-gray-100">
          <div className="flex justify-between">
            <span className="text-gray-500">Valor</span>
            <span className="font-medium text-gray-900">R$ 49,90</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Válido até</span>
            <span className="font-medium text-gray-900">18/01/2026</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">ID Transação</span>
            <span className="font-mono text-gray-900">#TRX-882910</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/user/dashboard">
            <Button className="w-full h-11 text-base">Ir para Dashboard</Button>
          </Link>
          <Button variant="outline" className="w-full">Baixar Recibo</Button>
        </div>
      </div>
    </div>
  );
}
