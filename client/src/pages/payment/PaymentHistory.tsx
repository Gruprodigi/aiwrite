import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const paymentHistory = [
  { id: 1, date: "22/12/2025", transactionId: "TRX-882910", method: "Cartão Crédito", amount: "R$ 49,90", status: "approved" },
  { id: 2, date: "22/11/2025", transactionId: "TRX-881234", method: "PIX", amount: "R$ 49,90", status: "approved" },
  { id: 3, date: "22/10/2025", transactionId: "TRX-879567", method: "Cartão Crédito", amount: "R$ 49,90", status: "approved" },
  { id: 4, date: "15/10/2025", transactionId: "TRX-878901", method: "PayPal", amount: "R$ 49,90", status: "pending" },
  { id: 5, date: "22/09/2025", transactionId: "TRX-877234", method: "Cartão Crédito", amount: "R$ 49,90", status: "approved" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'approved': return "bg-green-100 text-green-700 border-green-200";
    case 'pending': return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case 'failed': return "bg-red-100 text-red-700 border-red-200";
    default: return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'approved': return "Aprovado";
    case 'pending': return "Pendente";
    case 'failed': return "Falhou";
    default: return "Desconhecido";
  }
};

export default function PaymentHistory() {
  const totalPaid = paymentHistory
    .filter(p => p.status === 'approved')
    .reduce((sum, p) => sum + parseFloat(p.amount.replace(/[^0-9.]/g, '')), 0);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Histórico de Pagamentos" />
        
        <div className="p-6 max-w-7xl mx-auto space-y-6">
          
          {/* Summary Card */}
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Pago</p>
                  <h3 className="text-3xl font-bold mt-1 text-gray-900">R$ {totalPaid.toFixed(2)}</h3>
                  <p className="text-xs text-gray-500 mt-2">Últimos 5 pagamentos aprovados</p>
                </div>
                <div className="text-right space-y-2">
                  <p className="text-sm text-gray-600">Status da Assinatura</p>
                  <Badge className="bg-green-100 text-green-700 border-green-200">Ativa</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transactions Table */}
          <Card className="border-none shadow-sm overflow-hidden">
            <CardHeader>
              <CardTitle>Todas as Transações</CardTitle>
              <CardDescription>Histórico completo de pagamentos da sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                      <TableHead>Data</TableHead>
                      <TableHead>ID da Transação</TableHead>
                      <TableHead>Método</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentHistory.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.date}</TableCell>
                        <TableCell className="font-mono text-sm text-gray-600">{payment.transactionId}</TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell className="font-semibold">{payment.amount}</TableCell>
                        <TableCell>
                          <Badge className={`border ${getStatusColor(payment.status)}`}>
                            {getStatusLabel(payment.status)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0 hover:bg-gray-100"
                              title="Ver detalhes"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0 hover:bg-gray-100"
                              title="Download do recibo"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
