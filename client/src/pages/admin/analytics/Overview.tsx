import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { StatCard } from "@/components/admin/StatCard";
import { AreaChartComponent } from "@/components/admin/charts/AreaChartComponent";
import { LineChartComponent } from "@/components/admin/charts/LineChartComponent";
import { Button } from "@/components/ui/button";
import { Users, CreditCard, FileText, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Fev", value: 3500 },
  { name: "Mar", value: 5000 },
  { name: "Abr", value: 6500 },
  { name: "Mai", value: 8000 },
  { name: "Jun", value: 9500 },
];

const growthData = [
  { name: "Semana 1", Usuários: 120, Documentos: 450 },
  { name: "Semana 2", Usuários: 165, Documentos: 620 },
  { name: "Semana 3", Usuários: 210, Documentos: 780 },
  { name: "Semana 4", Usuários: 280, Documentos: 950 },
];

export default function AnalyticsOverview() {
  const [period, setPeriod] = useState("30d");

  return (
    <AdminLayout title="Analytics - Overview">
      {/* Navigation */}
      <div className="flex gap-4 mb-6 border-b border-[#e2e8f0]">
        {[
          { label: "Overview", href: "/admin/analytics" },
          { label: "Usuários", href: "/admin/analytics/users" },
          { label: "Receita", href: "/admin/analytics/revenue" },
          { label: "Conteúdo", href: "/admin/analytics/content" },
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <a className="px-4 py-3 border-b-2 font-medium text-sm text-[#1e293b] border-primary">
              {item.label}
            </a>
          </Link>
        ))}
      </div>

      {/* Period Filter */}
      <div className="flex gap-2 mb-6">
        {[
          { label: "7 dias", value: "7d" },
          { label: "30 dias", value: "30d" },
          { label: "3 meses", value: "3m" },
          { label: "1 ano", value: "1y" },
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
          label="Novos Usuários"
          value="234"
          change={15}
          icon={<Users className="h-6 w-6" />}
          color="blue"
        />
        <StatCard
          label="Receita MRR"
          value="R$ 12.450"
          change={8}
          icon={<CreditCard className="h-6 w-6" />}
          color="green"
        />
        <StatCard
          label="Documentos"
          value="1.243"
          change={25}
          icon={<FileText className="h-6 w-6" />}
          color="purple"
        />
        <StatCard
          label="Taxa Churn"
          value="2.3%"
          change={-5}
          icon={<TrendingUp className="h-6 w-6" />}
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChartComponent data={data} title="Receita (Últimos 6 meses)" />
        <LineChartComponent
          data={growthData}
          lines={[
            { key: "Usuários", stroke: "#667eea", name: "Novos Usuários" },
            { key: "Documentos", stroke: "#764ba2", name: "Documentos Criados" },
          ]}
          title="Crescimento Semanal"
        />
      </div>
    </AdminLayout>
  );
}
