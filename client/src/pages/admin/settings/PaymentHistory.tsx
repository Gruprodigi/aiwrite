import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Download, Eye, Filter } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockTransactions = [
  {
    id: "TXN-2024-001",
    date: "2024-12-25",
    method: "Stripe",
    plan: "Professional",
    amount: 49.00,
    status: "completed",
    receipt: "REC-2024-001",
  },
  {
    id: "TXN-2024-002",
    date: "2024-11-25",
    method: "PIX",
    plan: "Professional",
    amount: 49.00,
    status: "completed",
    receipt: "REC-2024-002",
  },
  {
    id: "TXN-2024-003",
    date: "2024-10-25",
    method: "Stripe",
    plan: "Professional",
    amount: 49.00,
    status: "completed",
    receipt: "REC-2024-003",
  },
  {
    id: "TXN-2024-004",
    date: "2024-09-25",
    method: "PayPal",
    plan: "Professional",
    amount: 49.00,
    status: "completed",
    receipt: "REC-2024-004",
  },
  {
    id: "TXN-2024-005",
    date: "2024-08-25",
    method: "Stripe",
    plan: "Professional",
    amount: 49.00,
    status: "completed",
    receipt: "REC-2024-005",
  },
  {
    id: "TXN-2024-006",
    date: "2024-07-25",
    method: "PIX",
    plan: "Professional",
    amount: 49.00,
    status: "completed",
    receipt: "REC-2024-006",
  },
  {
    id: "TXN-2024-007",
    date: "2024-06-25",
    method: "Stripe",
    plan: "Free",
    amount: 0.00,
    status: "completed",
    receipt: "REC-2024-007",
  },
];

export default function PaymentHistory() {
  const [filterMethod, setFilterMethod] = useState<string>("all");

  const filteredTransactions =
    filterMethod === "all"
      ? mockTransactions
      : mockTransactions.filter((t) => t.method === filterMethod);

  const totalPaid = filteredTransactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const getMethodColor = (method: string) => {
    switch (method) {
      case "Stripe":
        return "bg-blue-100 text-blue-700";
      case "PIX":
        return "bg-purple-100 text-purple-700";
      case "PayPal":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
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
    <AdminLayout title="Histórico de Pagamentos">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-6">
            <p className="text-sm text-[#64748b] mb-1">Total Pago</p>
            <p className="text-3xl font-bold text-primary">R$ {totalPaid.toFixed(2)}</p>
            <p className="text-xs text-[#64748b] mt-2">{filteredTransactions.filter((t) => t.amount > 0).length} transações</p>
          </Card>

          <Card className="p-6">
            <p className="text-sm text-[#64748b] mb-1">Próximo Pagamento</p>
            <p className="text-2xl font-bold text-[#1e293b]">2025-01-25</p>
            <p className="text-xs text-[#64748b] mt-2">R$ 49,00</p>
          </Card>

          <Card className="p-6">
            <p className="text-sm text-[#64748b] mb-1">Plano Ativo</p>
            <p className="text-2xl font-bold text-[#1e293b]">Professional</p>
            <Badge className="bg-green-100 text-green-700 border-0 mt-2">✓ Ativo</Badge>
          </Card>
        </div>

        {/* Transactions Table */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#1e293b]">Transações</h3>
            <div className="flex gap-2">
              <select
                value={filterMethod}
                onChange={(e) => setFilterMethod(e.target.value)}
                className="px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="all">Todos os Métodos</option>
                <option value="Stripe">Stripe</option>
                <option value="PIX">PIX</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>
          </div>

          <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#f8f9fa] border-b border-[#e2e8f0]">
                  <TableHead className="text-[#1e293b] font-semibold">Data</TableHead>
                  <TableHead className="text-[#1e293b] font-semibold">ID Transação</TableHead>
                  <TableHead className="text-[#1e293b] font-semibold">Método</TableHead>
                  <TableHead className="text-[#1e293b] font-semibold">Plano</TableHead>
                  <TableHead className="text-[#1e293b] font-semibold text-right">Valor</TableHead>
                  <TableHead className="text-[#1e293b] font-semibold">Status</TableHead>
                  <TableHead className="text-[#1e293b] font-semibold">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-[#64748b]">
                      Nenhuma transação encontrada
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="text-[#1e293b]">
                        {new Date(transaction.date).toLocaleDateString("pt-BR")}
                      </TableCell>
                      <TableCell className="text-[#1e293b] font-mono text-sm">
                        {transaction.id}
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getMethodColor(transaction.method)} border-0`}>
                          {transaction.method}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#1e293b]">{transaction.plan}</TableCell>
                      <TableCell className="text-[#1e293b] font-semibold text-right">
                        {transaction.amount === 0 ? "Grátis" : `R$ ${transaction.amount.toFixed(2)}`}
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(transaction.status)} border-0`}>
                          {getStatusLabel(transaction.status)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:bg-blue-50"
                            title="Ver Detalhes"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-green-600 hover:bg-green-50"
                            title="Download Recibo"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Additional Info */}
        <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
          <h3 className="text-lg font-bold text-[#1e293b] mb-3">Informações de Pagamento</h3>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[#64748b] mb-1">Ciclo de Cobrança</p>
              <p className="font-semibold text-[#1e293b]">25 de cada mês</p>
            </div>
            <div>
              <p className="text-[#64748b] mb-1">Próxima Fatura</p>
              <p className="font-semibold text-[#1e293b]">2025-01-25</p>
            </div>
            <div>
              <p className="text-[#64748b] mb-1">Método Padrão</p>
              <p className="font-semibold text-[#1e293b]">💳 Stripe</p>
            </div>
            <div>
              <p className="text-[#64748b] mb-1">Recibos</p>
              <p className="font-semibold text-[#1e293b]">Enviados por email</p>
            </div>
          </div>

          <Link href="/admin/settings/payment">
            <Button className="mt-4 bg-primary hover:bg-primary/90 text-white">
              Alterar Método de Pagamento
            </Button>
          </Link>
        </Card>
      </div>
    </AdminLayout>
  );
}
