import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { DataTable } from "@/components/admin/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Trash2, Ban, Download } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

const mockUsers = [
  { id: 1, name: "João Silva", email: "joao@example.com", plan: "Pro", documents: 45, status: "active", joined: "18/12/2025", verified: true, lastLogin: "Hoje" },
  { id: 2, name: "Maria Santos", email: "maria@example.com", plan: "Enterprise", documents: 120, status: "active", joined: "15/12/2025", verified: true, lastLogin: "Ontem" },
  { id: 3, name: "Pedro Costa", email: "pedro@example.com", plan: "Free", documents: 8, status: "active", joined: "10/12/2025", verified: false, lastLogin: "7 dias atrás" },
  { id: 4, name: "Ana Oliveira", email: "ana@example.com", plan: "Pro", documents: 62, status: "inactive", joined: "05/12/2025", verified: true, lastLogin: "15 dias atrás" },
  { id: 5, name: "Carlos Souza", email: "carlos@example.com", plan: "Pro", documents: 34, status: "active", joined: "01/12/2025", verified: true, lastLogin: "Há 2 horas" },
  { id: 6, name: "Fernanda Lima", email: "fernanda@example.com", plan: "Enterprise", documents: 89, status: "suspended", joined: "28/11/2025", verified: true, lastLogin: "3 dias atrás" },
  { id: 7, name: "Bruno Dias", email: "bruno@example.com", plan: "Free", documents: 5, status: "active", joined: "25/11/2025", verified: false, lastLogin: "5 dias atrás" },
  { id: 8, name: "Juliana Martins", email: "juliana@example.com", plan: "Pro", documents: 56, status: "active", joined: "20/11/2025", verified: true, lastLogin: "4 horas atrás" },
];

export default function UsersList() {
  const [_, setLocation] = useLocation();
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState<"name" | "joined">("joined");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [planFilter, setPlanFilter] = useState<string>("all");

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    const matchesPlan = planFilter === "all" || user.plan === planFilter;
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-700";
      case "inactive": return "bg-gray-100 text-gray-700";
      case "suspended": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "Ativo";
      case "inactive": return "Inativo";
      case "suspended": return "Suspenso";
      default: return "Desconhecido";
    }
  };

  const columns = [
    {
      key: "name" as const,
      label: "Nome",
      sortable: true,
      render: (value: string, user: any) => (
        <Link href={`/admin/users/${user.id}`}>
          <a className="font-medium text-primary hover:underline">{value}</a>
        </Link>
      ),
    },
    {
      key: "email" as const,
      label: "Email",
      render: (value: string) => <span className="text-[#64748b]">{value}</span>,
    },
    {
      key: "plan" as const,
      label: "Plano",
      render: (value: string) => (
        <Badge className={`${value === "Enterprise" ? "bg-purple-100 text-purple-700" : value === "Pro" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"} border-0`}>
          {value}
        </Badge>
      ),
    },
    {
      key: "documents" as const,
      label: "Documentos",
      render: (value: number) => <span>{value}</span>,
    },
    {
      key: "status" as const,
      label: "Status",
      render: (value: string) => (
        <Badge className={`${getStatusColor(value)} border-0`}>{getStatusLabel(value)}</Badge>
      ),
    },
    {
      key: "joined" as const,
      label: "Cadastro",
      sortable: true,
      render: (value: string) => <span className="text-[#64748b] text-sm">{value}</span>,
    },
  ];

  return (
    <AdminLayout title="Gerenciar Usuários">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-[#64748b]">Total: {filteredUsers.length} usuários</p>
        </div>
        <Link href="/admin/users/create">
          <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
            <Plus className="h-4 w-4" /> Novo Usuário
          </Button>
        </Link>
      </div>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center justify-between">
          <p className="text-sm font-medium text-blue-800">{selectedIds.length} usuário(s) selecionado(s)</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
              <Trash2 className="h-4 w-4 mr-2" /> Deletar
            </Button>
            <Button variant="ghost" size="sm" className="text-orange-600 hover:bg-orange-50">
              <Ban className="h-4 w-4 mr-2" /> Suspender
            </Button>
            <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50">
              <Download className="h-4 w-4 mr-2" /> Exportar
            </Button>
          </div>
        </div>
      )}

      {/* Filters & Search */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-lg px-4 py-2">
          <Search className="h-4 w-4 text-[#64748b]" />
          <input
            type="text"
            placeholder="Buscar por nome ou email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none text-sm"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2 text-sm"
        >
          <option value="all">Todos os Status</option>
          <option value="active">Ativo</option>
          <option value="inactive">Inativo</option>
          <option value="suspended">Suspenso</option>
        </select>

        <select
          value={planFilter}
          onChange={(e) => setPlanFilter(e.target.value)}
          className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2 text-sm"
        >
          <option value="all">Todos os Planos</option>
          <option value="Free">Free</option>
          <option value="Pro">Pro</option>
          <option value="Enterprise">Enterprise</option>
        </select>

        <Button variant="outline" className="border-[#e2e8f0]">
          + Mais Filtros
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-[#e2e8f0]">
        <DataTable
          data={filteredUsers}
          columns={columns}
          selectedIds={selectedIds}
          onSelectChange={setSelectedIds}
          onSort={(key) => {
            setSortKey(key as "name" | "joined");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
          sortKey={sortKey}
          sortOrder={sortOrder}
          page={page}
          pageSize={10}
          total={filteredUsers.length}
          onPageChange={setPage}
        />
      </div>
    </AdminLayout>
  );
}
