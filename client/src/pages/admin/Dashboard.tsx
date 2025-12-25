import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { StatCard } from "@/components/admin/StatCard";
import { AreaChartComponent } from "@/components/admin/charts/AreaChartComponent";
import { LineChartComponent } from "@/components/admin/charts/LineChartComponent";
import { PieChartComponent } from "@/components/admin/charts/PieChartComponent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, CreditCard, FileText, TrendingUp, Clock } from "lucide-react";
import { useState } from "react";

const revenueData = [
  { name: "Jan", value: 4000 },
  { name: "Fev", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Abr", value: 6000 },
  { name: "Mai", value: 8000 },
  { name: "Jun", value: 9000 },
];

const usersGrowthData = [
  { name: "01", Ativos: 120, Inativos: 30 },
  { name: "05", Ativos: 145, Inativos: 28 },
  { name: "10", Ativos: 178, Inativos: 25 },
  { name: "15", Ativos: 210, Inativos: 22 },
  { name: "20", Ativos: 245, Inativos: 18 },
  { name: "25", Ativos: 280, Inativos: 15 },
  { name: "30", Ativos: 312, Inativos: 12 },
];

const topPlansData = [
  { name: "Free", value: 60 },
  { name: "Professional", value: 30 },
  { name: "Enterprise", value: 10 },
];

const recentTransactions = [
  { id: "#T001", user: "João Silva", plan: "Pro", amount: "R$ 49,90", status: "success", date: "22/12/2025" },
  { id: "#T002", user: "Maria Santos", plan: "Enterprise", amount: "R$ 199,90", status: "success", date: "21/12/2025" },
  { id: "#T003", user: "Pedro Costa", plan: "Pro", amount: "R$ 49,90", status: "pending", date: "20/12/2025" },
  { id: "#T004", user: "Ana Oliveira", plan: "Professional", amount: "R$ 49,90", status: "success", date: "19/12/2025" },
];

const recentActivities = [
  { icon: "👤", action: "Novo usuário cadastrado", description: "Carlos Souza se registrou", time: "há 2 horas" },
  { icon: "📄", action: "Post publicado", description: "IA e o Futuro do Conteúdo", time: "há 4 horas" },
  { icon: "💳", action: "Pagamento recebido", description: "R$ 199,90 de Maria Santos", time: "há 6 horas" },
  { icon: "⭐", action: "Upgrade de plano", description: "João Silva subiu para Enterprise", time: "há 8 horas" },
  { icon: "🔧", action: "Ajuste de limites", description: "Limite de palavras aumentado", time: "há 12 horas" },
];

export default function AdminDashboard() {
  const [period, setPeriod] = useState("30d");

  return (
    <AdminLayout title="Dashboard">
      {/* Period Filter */}
      <div className="flex gap-2 mb-6">
        {[
          { label: "Hoje", value: "today" },
          { label: "7 dias", value: "7d" },
          { label: "30 dias", value: "30d" },
          { label: "3 meses", value: "3m" },
        ].map((p) => (
          <Button
            key={p.value}
            variant={period === p.value ? "default" : "outline"}
            onClick={() => setPeriod(p.value)}
            className={period === p.value ? "bg-primary text-white" : ""}
          >
            {p.label}
          </Button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          label="Total de Usuários"
          value="1.234"
          change={12}
          icon={<Users className="h-6 w-6" />}
          color="blue"
        />
        <StatCard
          label="Receita Total"
          value="R$ 45.200"
          change={23}
          icon={<CreditCard className="h-6 w-6" />}
          color="green"
        />
        <StatCard
          label="Documentos Criados"
          value="8.920"
          change={18}
          icon={<FileText className="h-6 w-6" />}
          color="purple"
        />
        <StatCard
          label="Transações"
          value="892"
          change={5}
          icon={<TrendingUp className="h-6 w-6" />}
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AreaChartComponent data={revenueData} title="Receita (Últimos 30 dias)" />
        <LineChartComponent
          data={usersGrowthData}
          lines={[
            { key: "Ativos", stroke: "#667eea", name: "Usuários Ativos" },
            { key: "Inativos", stroke: "#764ba2", name: "Usuários Inativos" },
          ]}
          title="Crescimento de Usuários"
        />
      </div>

      {/* Plans & Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <PieChartComponent
          data={topPlansData}
          title="Distribuição por Plano"
          colors={["#667eea", "#764ba2", "#f93e3e"]}
        />

        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#1e293b] mb-4">Transações Recentes</h3>
          <div className="space-y-3">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-[#1e293b]">{tx.user}</p>
                  <p className="text-xs text-[#64748b]">{tx.plan} • {tx.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1e293b]">{tx.amount}</p>
                  <Badge
                    className={`text-xs border-0 ${
                      tx.status === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {tx.status === "success" ? "✓ Sucesso" : "⏳ Pendente"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#1e293b] mb-6">Atividades Recentes</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, i) => (
            <div key={i} className="flex gap-4 pb-4 border-b border-[#e2e8f0] last:border-0">
              <div className="text-2xl">{activity.icon}</div>
              <div className="flex-1">
                <p className="font-medium text-[#1e293b]">{activity.action}</p>
                <p className="text-sm text-[#64748b]">{activity.description}</p>
              </div>
              <span className="text-xs text-[#64748b] flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
