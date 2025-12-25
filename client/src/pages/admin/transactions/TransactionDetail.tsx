import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useRoute, Link } from "wouter";
import { ArrowLeft, Download, Copy, Check } from "lucide-react";
import { useState } from "react";

const mockTransactionDetail = {
  id: 3,
  txnId: "TXN-2024-003",
  user: "Pedro Costa",
  userId: 3,
  email: "pedro@example.com",
  method: "PayPal",
  plan: "Enterprise",
  amount: 199.00,
  currency: "BRL",
  status: "completed",
  date: "2024-12-23",
  time: "14:35:22",
  receipt: "REC-2024-003",
  orderId: "ORD-2024-003",
  
  // User Info
  userPhone: "+55 11 98765-4321",
  userCountry: "Brazil",
  userCity: "São Paulo",
  
  // Payment Details
  paymentMethod: "PayPal Account",
  paymentEmail: "pedro.costa@paypal.com",
  transactionFee: 5.97,
  discount: 0,
  tax: 0,
  
  // Billing Info
  billingCycle: "Mensal",
  nextBillingDate: "2025-01-23",
  autoRenewal: true,
  
  // Invoice Details
  description: "WriterAI Premium - Enterprise Plan - Monthly Subscription",
  invoiceNumber: "INV-2024-003",
  invoiceDate: "2024-12-23",
  
  // Metadata
  ipAddress: "192.168.1.1",
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  refundable: true,
  notes: "Payment successful. Customer verified.",
};

export default function TransactionDetail() {
  const [match, params] = useRoute("/admin/transactions/:id");
  const [copied, setCopied] = useState(false);

  if (!match) return null;

  const handleCopyTxnId = () => {
    navigator.clipboard.writeText(mockTransactionDetail.txnId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "✓ Concluído";
      case "pending":
        return "⏳ Pendente";
      case "failed":
        return "✗ Falhou";
      default:
        return "Desconhecido";
    }
  };

  return (
    <AdminLayout title={`Detalhes da Transação - ${mockTransactionDetail.txnId}`}>
      {/* Header */}
      <div className="mb-6">
        <Link href="/admin/transactions">
          <Button variant="ghost" className="mb-4 text-primary hover:text-primary/90" data-testid="button-back">
            <ArrowLeft className="h-4 w-4 mr-2" /> Voltar para Transações
          </Button>
        </Link>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#1e293b]">{mockTransactionDetail.txnId}</h1>
            <p className="text-[#64748b] mt-1">ID do Pedido: {mockTransactionDetail.orderId}</p>
          </div>
          <div className="flex gap-2">
            <Badge className={`${getStatusColor(mockTransactionDetail.status)} border-0 text-base px-4 py-2`}>
              {getStatusLabel(mockTransactionDetail.status)}
            </Badge>
            <Button className="bg-primary hover:bg-primary/90 text-white" data-testid="button-download-receipt">
              <Download className="h-4 w-4 mr-2" /> Download Recibo
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Transaction Summary */}
        <div className="col-span-2 space-y-6">
          {/* Transaction Summary */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-[#1e293b] mb-6">Resumo da Transação</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#64748b] mb-1">Método de Pagamento</p>
                <p className="text-lg font-semibold text-[#1e293b]">🅿️ {mockTransactionDetail.paymentMethod}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] mb-1">Data e Hora</p>
                <p className="text-lg font-semibold text-[#1e293b]">
                  {new Date(mockTransactionDetail.date).toLocaleDateString("pt-BR")} às {mockTransactionDetail.time}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] mb-1">Ciclo de Cobrança</p>
                <p className="text-lg font-semibold text-[#1e293b]">{mockTransactionDetail.billingCycle}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] mb-1">Próxima Cobrança</p>
                <p className="text-lg font-semibold text-[#1e293b]">
                  {new Date(mockTransactionDetail.nextBillingDate).toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
          </Card>

          {/* Amount Breakdown */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-[#1e293b] mb-6">Detalhamento do Valor</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#64748b]">Valor do Plano</span>
                <span className="font-semibold text-[#1e293b]">R$ {mockTransactionDetail.amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b]">Desconto</span>
                <span className="font-semibold text-[#1e293b]">- R$ {mockTransactionDetail.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b]">Imposto</span>
                <span className="font-semibold text-[#1e293b]">R$ {mockTransactionDetail.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b]">Taxa de Transação</span>
                <span className="font-semibold text-[#1e293b]">R$ {mockTransactionDetail.transactionFee.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between pt-2">
                <span className="font-bold text-[#1e293b]">Total Cobrado</span>
                <span className="text-2xl font-bold text-primary">
                  R$ {(mockTransactionDetail.amount + mockTransactionDetail.transactionFee).toFixed(2)}
                </span>
              </div>
            </div>
          </Card>

          {/* User Information */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-[#1e293b] mb-6">Informações do Usuário</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#64748b] mb-1">Nome</p>
                <p className="text-base font-semibold text-[#1e293b]">{mockTransactionDetail.user}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] mb-1">Email</p>
                <p className="text-base font-semibold text-[#1e293b]">{mockTransactionDetail.email}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] mb-1">Telefone</p>
                <p className="text-base font-semibold text-[#1e293b]">{mockTransactionDetail.userPhone}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] mb-1">Localização</p>
                <p className="text-base font-semibold text-[#1e293b]">
                  {mockTransactionDetail.userCity}, {mockTransactionDetail.userCountry}
                </p>
              </div>
            </div>
          </Card>

          {/* Payment Method Details */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-[#1e293b] mb-6">Detalhes do Método de Pagamento</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b] mb-1">Conta PayPal</p>
                <p className="text-base font-semibold text-[#1e293b] font-mono">{mockTransactionDetail.paymentEmail}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-[#64748b] mb-1">IP do Cliente</p>
                <p className="text-base font-semibold text-[#1e293b] font-mono">{mockTransactionDetail.ipAddress}</p>
              </div>
            </div>
          </Card>

          {/* Invoice Details */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-[#1e293b] mb-6">Nota Fiscal</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#64748b] mb-1">Número da NF</p>
                <p className="text-base font-semibold text-[#1e293b] font-mono">{mockTransactionDetail.invoiceNumber}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] mb-1">Data da NF</p>
                <p className="text-base font-semibold text-[#1e293b]">
                  {new Date(mockTransactionDetail.invoiceDate).toLocaleDateString("pt-BR")}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-[#64748b] mb-1">Descrição</p>
                <p className="text-base font-semibold text-[#1e293b]">{mockTransactionDetail.description}</p>
              </div>
            </div>
          </Card>

          {/* Notes */}
          <Card className="p-6 bg-blue-50 border border-blue-200">
            <h2 className="text-lg font-bold text-[#1e293b] mb-3">Notas Admin</h2>
            <p className="text-[#1e293b]">{mockTransactionDetail.notes}</p>
          </Card>
        </div>

        {/* Right Column - Summary Card */}
        <Card className="p-6 h-fit sticky top-6">
          <h2 className="text-lg font-bold text-[#1e293b] mb-6">Resumo</h2>

          {/* Transaction ID */}
          <div className="mb-6 p-4 bg-[#f8f9fa] rounded-lg">
            <p className="text-xs text-[#64748b] mb-2">ID da Transação</p>
            <div className="flex items-center gap-2">
              <p className="font-mono font-semibold text-[#1e293b]">{mockTransactionDetail.txnId}</p>
              <button
                onClick={handleCopyTxnId}
                className="text-[#64748b] hover:text-primary transition-colors"
                data-testid="button-copy-txn-id"
              >
                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Plan Info */}
          <div className="mb-6">
            <p className="text-xs text-[#64748b] mb-2">Plano</p>
            <p className="text-lg font-bold text-[#1e293b]">{mockTransactionDetail.plan}</p>
          </div>

          {/* Amount */}
          <div className="mb-6 pb-6 border-b border-[#e2e8f0]">
            <p className="text-xs text-[#64748b] mb-2">Valor Total</p>
            <p className="text-3xl font-bold text-primary">
              R$ {(mockTransactionDetail.amount + mockTransactionDetail.transactionFee).toFixed(2)}
            </p>
          </div>

          {/* Status */}
          <div className="mb-6">
            <p className="text-xs text-[#64748b] mb-2">Status</p>
            <Badge className={`${getStatusColor(mockTransactionDetail.status)} border-0 w-full justify-center py-2 text-sm`}>
              {getStatusLabel(mockTransactionDetail.status)}
            </Badge>
          </div>

          {/* Auto Renewal */}
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              ✓ Renovação Automática Ativa
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white" data-testid="button-send-receipt">
              📧 Enviar Recibo
            </Button>
            {mockTransactionDetail.refundable && (
              <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50" data-testid="button-refund">
                💰 Reembolsar
              </Button>
            )}
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
