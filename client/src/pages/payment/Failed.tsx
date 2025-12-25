import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { Link } from "wouter";

export default function PaymentFailed() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-20 w-20 bg-red-100 rounded-full flex items-center justify-center">
            <XCircle className="h-10 w-10 text-red-600" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Pagamento Não Aprovado</h1>
          <p className="text-gray-500">
            Não foi possível processar seu pagamento. Nenhuma cobrança foi realizada no seu cartão.
          </p>
        </div>

        <div className="bg-red-50 rounded-lg p-4 text-left text-sm border border-red-100 text-red-700">
          <p className="font-medium mb-1">Possíveis motivos:</p>
          <ul className="list-disc list-inside space-y-1 opacity-80">
            <li>Cartão recusado pelo banco emissor</li>
            <li>Dados do cartão incorretos</li>
            <li>Limite insuficiente</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Button className="w-full h-11 text-base bg-gray-900 hover:bg-gray-800">Tentar Novamente</Button>
          <Link href="/user/plans">
             <Button variant="ghost" className="w-full">Voltar para Planos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
