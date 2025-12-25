import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link, useRoute } from "wouter";
import { useState } from "react";
import { Edit2, Trash2, Ban } from "lucide-react";

const mockUser = {
  id: 1,
  name: "João Silva",
  email: "joao@example.com",
  phone: "+55 11 99999-9999",
  city: "São Paulo, SP",
  lastLogin: "Há 2 horas",
  status: "active",
  plan: "Pro",
  documents: 45,
  wordUsed: 12500,
  wordLimit: 100000,
  memberSince: "há 6 meses",
};

const mockDocuments = [
  { id: 1, name: "Artigo sobre IA", date: "20/12/2025", words: 2450, status: "published" },
  { id: 2, name: "Guia de Marketing", date: "18/12/2025", words: 1890, status: "draft" },
  { id: 3, name: "Tutorial de Python", date: "15/12/2025", words: 3210, status: "published" },
];

const mockTransactions = [
  { id: 1, date: "22/12/2025", type: "Plano Anual", value: "R$ 490,00", status: "approved" },
  { id: 2, date: "22/11/2025", type: "Renovação Mensal", value: "R$ 49,90", status: "approved" },
  { id: 3, date: "22/10/2025", type: "Renovação Mensal", value: "R$ 49,90", status: "approved" },
];

const mockActivities = [
  { date: "22/12/2025 10:30", action: "Login", ip: "192.168.1.1", userAgent: "Chrome 120 (Windows)" },
  { date: "22/12/2025 09:15", action: "Documento criado", ip: "192.168.1.1", userAgent: "Chrome 120 (Windows)" },
  { date: "21/12/2025 18:45", action: "Login", ip: "192.168.1.2", userAgent: "Safari 17 (iPhone)" },
  { date: "21/12/2025 14:20", action: "Plano atualizado", ip: "192.168.1.1", userAgent: "Chrome 120 (Windows)" },
];

export default function UserView() {
  const [match, params] = useRoute("/admin/users/:id");
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <AdminLayout title={`${mockUser.name} - Detalhes`}>
      {/* Header with Actions */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-[#1e293b] mb-1">{mockUser.name}</h2>
          <p className="text-[#64748b]">{mockUser.email} • ID: #{mockUser.id}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/users/${mockUser.id}/edit`}>
            <Button className="flex items-center gap-2">
              <Edit2 className="h-4 w-4" /> Editar
            </Button>
          </Link>
          <Button variant="outline" className="text-orange-600 hover:bg-orange-50">
            <Ban className="h-4 w-4 mr-2" /> Suspender
          </Button>
          <Button variant="outline" className="text-red-600 hover:bg-red-50">
            <Trash2 className="h-4 w-4 mr-2" /> Deletar
          </Button>
        </div>
      </div>

      {/* Status Badges */}
      <div className="flex gap-2 mb-6">
        <Badge className={`${mockUser.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"} border-0`}>
          {mockUser.status === "active" ? "✓ Ativo" : "● Inativo"}
        </Badge>
        <Badge className="bg-blue-100 text-blue-700 border-0">Plano: {mockUser.plan}</Badge>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-[#e2e8f0]">
        {[
          { id: "overview", label: "Visão Geral" },
          { id: "documents", label: "Documentos" },
          { id: "transactions", label: "Transações" },
          { id: "activities", label: "Atividades" },
          { id: "notes", label: "Notas Admin" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 border-b-2 font-medium text-sm transition-colors ${
              activeTab === tab.id
                ? "text-primary border-primary"
                : "text-[#64748b] border-transparent hover:text-[#1e293b]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content - Overview */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">{mockUser.documents}</p>
              <p className="text-sm text-[#64748b] mt-1">Documentos</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">12.5K</p>
              <p className="text-sm text-[#64748b] mt-1">Palavras Usadas</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">6</p>
              <p className="text-sm text-[#64748b] mt-1">Meses de Membro</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">45</p>
              <p className="text-sm text-[#64748b] mt-1">Posts Gerados</p>
            </Card>
          </div>

          {/* Personal Information */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-[#1e293b] mb-4">Informações Pessoais</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#64748b]">Email</p>
                <p className="text-[#1e293b] font-medium mt-1">{mockUser.email}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Telefone</p>
                <p className="text-[#1e293b] font-medium mt-1">{mockUser.phone}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Localização</p>
                <p className="text-[#1e293b] font-medium mt-1">{mockUser.city}</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Último Login</p>
                <p className="text-[#1e293b] font-medium mt-1">{mockUser.lastLogin}</p>
              </div>
            </div>
          </Card>

          {/* Resource Usage */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-[#1e293b] mb-4">Uso de Recursos</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm font-medium text-[#1e293b]">Palavras</p>
                  <p className="text-sm text-[#64748b]">{mockUser.wordUsed.toLocaleString()} / {mockUser.wordLimit.toLocaleString()}</p>
                </div>
                <Progress value={(mockUser.wordUsed / mockUser.wordLimit) * 100} />
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Tab Content - Documents */}
      {activeTab === "documents" && (
        <Card className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#f8f9fa]">
                  <TableHead>Nome</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Palavras</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.name}</TableCell>
                    <TableCell>{doc.date}</TableCell>
                    <TableCell>{doc.words.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge className={`${doc.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} border-0`}>
                        {doc.status === "published" ? "Publicado" : "Rascunho"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Tab Content - Transactions */}
      {activeTab === "transactions" && (
        <Card className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#f8f9fa]">
                  <TableHead>Data</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell>{tx.date}</TableCell>
                    <TableCell>{tx.type}</TableCell>
                    <TableCell className="font-medium">{tx.value}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-700 border-0">✓ Aprovado</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Tab Content - Activities */}
      {activeTab === "activities" && (
        <Card className="p-6">
          <div className="space-y-4">
            {mockActivities.map((activity, i) => (
              <div key={i} className="pb-4 border-b border-[#e2e8f0] last:border-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-[#1e293b]">{activity.action}</p>
                    <p className="text-xs text-[#64748b] mt-1">IP: {activity.ip}</p>
                    <p className="text-xs text-[#64748b]">Device: {activity.userAgent}</p>
                  </div>
                  <p className="text-sm text-[#64748b]">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tab Content - Notes */}
      {activeTab === "notes" && (
        <Card className="p-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-4">Notas Administrativas</h3>
          <textarea
            placeholder="Adicione notas sobre este usuário (visível apenas para admins)..."
            className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows={6}
          />
          <Button className="mt-4 bg-primary hover:bg-primary/90 text-white">Salvar Notas</Button>
        </Card>
      )}
    </AdminLayout>
  );
}
