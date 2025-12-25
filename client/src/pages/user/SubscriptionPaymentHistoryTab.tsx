import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowDownLeft, Download, Eye } from "lucide-react";
import { useState } from "react";

const payments = [
  {
    id: 1,
    date: "2025-12-20",
    description: "Plano Pro - Renovação",
    amount: 49.90,
    method: "Stripe",
    status: "completed" as const,
  },
  {
    id: 2,
    date: "2025-12-15",
    description: "Créditos de IA",
    amount: 29.90,
    method: "PIX",
    status: "completed" as const,
  },
  {
    id: 3,
    date: "2025-12-10",
    description: "Plano Pro - Renovação",
    amount: 49.90,
    method: "PayPal",
    status: "completed" as const,
  },
  {
    id: 4,
    date: "2025-12-05",
    description: "Templates Premium",
    amount: 19.90,
    method: "Stripe",
    status: "completed" as const,
  },
];

export default function PaymentHistoryContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "completed" | "pending" | "failed">("all");

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch = payment.description.toLowerCase().includes(searchTerm.toLowerCase()) || payment.id.toString().includes(searchTerm);
    const matchesStatus = filterStatus === "all" || payment.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluído";
      case "pending":
        return "Pendente";
      case "failed":
        return "Falhou";
      default:
        return status;
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Histórico de Pagamentos</h3>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pesquisar</label>
          <Input placeholder="Pesquisar por descrição ou ID..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as any)} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
            <option value="all">Todos</option>
            <option value="completed">Concluído</option>
            <option value="pending">Pendente</option>
            <option value="failed">Falhou</option>
          </select>
        </div>
      </div>

      {/* Table */}
      {filteredPayments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Data</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Descrição</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Método</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Valor</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-4 text-gray-900">{new Date(payment.date).toLocaleDateString("pt-BR")}</td>
                  <td className="py-3 px-4 text-gray-900">{payment.description}</td>
                  <td className="py-3 px-4 text-gray-600">{payment.method}</td>
                  <td className="py-3 px-4 font-medium text-gray-900">R$ {payment.amount.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(payment.status)}`}>
                      {getStatusLabel(payment.status)}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <ArrowDownLeft className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Nenhum pagamento encontrado</p>
        </div>
      )}
    </Card>
  );
}
