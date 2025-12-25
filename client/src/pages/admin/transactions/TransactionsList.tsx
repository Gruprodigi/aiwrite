import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Eye, Download, Filter } from "lucide-react";
import { useState, useMemo } from "react";
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
    id: 1,
    txnId: "TXN-2024-001",
    user: "Ana Silva",
    userId: 1,
    email: "ana@example.com",
    method: "Stripe",
    plan: "Professional",
    amount: 49.00,
    status: "completed",
    date: "2024-12-25",
    receipt: "REC-2024-001",
  },
  {
    id: 2,
    txnId: "TXN-2024-002",
    user: "Bruno Santos",
    userId: 2,
    email: "bruno@example.com",
    method: "PIX",
    plan: "Professional",
    amount: 49.00,
    status: "completed",
    date: "2024-12-24",
    receipt: "REC-2024-002",
  },
  {
    id: 3,
    txnId: "TXN-2024-003",
    user: "Pedro Costa",
    userId: 3,
    email: "pedro@example.com",
    method: "PayPal",
    plan: "Enterprise",
    amount: 199.00,
    status: "completed",
    date: "2024-12-23",
    receipt: "REC-2024-003",
  },
  {
    id: 4,
    txnId: "TXN-2024-004",
    user: "Mariana Oliveira",
    userId: 4,
    email: "mariana@example.com",
    method: "Stripe",
    plan: "Professional",
    amount: 49.00,
    status: "pending",
    date: "2024-12-22",
    receipt: "REC-2024-004",
  },
  {
    id: 5,
    txnId: "TXN-2024-005",
    user: "Lucas Ferreira",
    userId: 5,
    email: "lucas@example.com",
    method: "Stripe",
    plan: "Free",
    amount: 0.00,
    status: "completed",
    date: "2024-12-21",
    receipt: "REC-2024-005",
  },
  {
    id: 6,
    txnId: "TXN-2024-006",
    user: "Juliana Pereira",
    userId: 6,
    email: "juliana@example.com",
    method: "PIX",
    plan: "Professional",
    amount: 49.00,
    status: "completed",
    date: "2024-12-20",
    receipt: "REC-2024-006",
  },
  {
    id: 7,
    txnId: "TXN-2024-007",
    user: "Rafael Alves",
    userId: 7,
    email: "rafael@example.com",
    method: "Stripe",
    plan: "Enterprise",
    amount: 199.00,
    status: "failed",
    date: "2024-12-19",
    receipt: "REC-2024-007",
  },
];

export default function TransactionsList() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterMethod, setFilterMethod] = useState<string>("all");

  const filteredTransactions = useMemo(() => {
    return mockTransactions.filter((txn) => {
      const matchesSearch =
        txn.user.toLowerCase().includes(search.toLowerCase()) ||
        txn.email.toLowerCase().includes(search.toLowerCase()) ||
        txn.txnId.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = filterStatus === "all" || txn.status === filterStatus;
      const matchesMethod = filterMethod === "all" || txn.method === filterMethod;

      return matchesSearch && matchesStatus && matchesMethod;
    });
  }, [search, filterStatus, filterMethod]);

  const totalAmount = filteredTransactions
    .filter((t) => t.status === "completed")
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
    <AdminLayout title="Gestão de Transações">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-[#64748b]">
              Total: {filteredTransactions.length} transações
            </p>
            <p className="text-sm text-[#64748b]">
              Valor Total: R$ {totalAmount.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-[#64748b] mb-2 block">Buscar</label>
              <Input
                placeholder="Nome, email ou ID da transação..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-[#e2e8f0]"
                data-testid="input-search"
              />
            </div>
            <div>
              <label className="text-sm text-[#64748b] mb-2 block">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="select-status"
              >
                <option value="all">Todos</option>
                <option value="completed">✓ Concluído</option>
                <option value="pending">⏳ Pendente</option>
                <option value="failed">✗ Falhou</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-[#64748b] mb-2 block">Método</label>
              <select
                value={filterMethod}
                onChange={(e) => setFilterMethod(e.target.value)}
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="select-method"
              >
                <option value="all">Todos</option>
                <option value="Stripe">💳 Stripe</option>
                <option value="PIX">🟦 PIX</option>
                <option value="PayPal">🅿️ PayPal</option>
              </select>
            </div>
          </div>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="p-6">
        <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#f8f9fa] border-b border-[#e2e8f0]">
                <TableHead className="text-[#1e293b] font-semibold">ID Transação</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Usuário</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Email</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Plano</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Método</TableHead>
                <TableHead className="text-[#1e293b] font-semibold text-right">Valor</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Status</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Data</TableHead>
                <TableHead className="text-[#1e293b] font-semibold">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-8 text-[#64748b]">
                    Nenhuma transação encontrada
                  </TableCell>
                </TableRow>
              ) : (
                filteredTransactions.map((txn) => (
                  <TableRow key={txn.id} className="border-b border-[#e2e8f0] hover:bg-[#f8f9fa]">
                    <TableCell className="text-[#1e293b] font-mono font-semibold">
                      {txn.txnId}
                    </TableCell>
                    <TableCell className="text-[#1e293b]">{txn.user}</TableCell>
                    <TableCell className="text-[#64748b] text-sm">{txn.email}</TableCell>
                    <TableCell className="text-[#1e293b]">{txn.plan}</TableCell>
                    <TableCell>
                      <Badge className={`${getMethodColor(txn.method)} border-0`}>
                        {txn.method}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-[#1e293b] font-semibold text-right">
                      {txn.amount === 0 ? "Grátis" : `R$ ${txn.amount.toFixed(2)}`}
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(txn.status)} border-0`}>
                        {getStatusLabel(txn.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-[#64748b] text-sm">
                      {new Date(txn.date).toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Link href={`/admin/transactions/${txn.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:bg-blue-50"
                            data-testid={`button-view-${txn.id}`}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-600 hover:bg-green-50"
                          data-testid={`button-download-${txn.id}`}
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
    </AdminLayout>
  );
}
