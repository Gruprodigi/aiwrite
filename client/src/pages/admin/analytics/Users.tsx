import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { StatCard } from "@/components/admin/StatCard";
import { AreaChartComponent } from "@/components/admin/charts/AreaChartComponent";
import { LineChartComponent } from "@/components/admin/charts/LineChartComponent";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, UserX, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const userGrowthData = [
  { name: "Jan", value: 450 },
  { name: "Fev", value: 520 },
  { name: "Mar", value: 680 },
  { name: "Abr", value: 820 },
  { name: "Mai", value: 1020 },
  { name: "Jun", value: 1234 },
];

const retentionData = [
  { name: "Semana 1", Retidos: 95, Churn: 5 },
  { name: "Semana 2", Retidos: 92, Churn: 8 },
  { name: "Semana 3", Retidos: 88, Churn: 12 },
  { name: "Semana 4", Retidos: 85, Churn: 15 },
];

export default function AnalyticsUsers() {
  const [period, setPeriod] = useState("30d");

  return (
    <AdminLayout title="Analytics - Usuários">
      {/* Navigation */}
      <div className="flex gap-4 mb-6 border-b border-[#e2e8f0]">
        {[
          { label: "Overview", href: "/admin/analytics" },
          { label: "Usuários", href: "/admin/analytics/users" },
          { label: "Receita", href: "/admin/analytics/revenue" },
          { label: "Conteúdo", href: "/admin/analytics/content" },
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <a className={`px-4 py-3 border-b-2 font-medium text-sm ${
              item.href === "/admin/analytics/users"
                ? "text-[#1e293b] border-primary"
                : "text-[#64748b] border-transparent hover:border-[#e2e8f0]"
            }`}>
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
          label="Total de Usuários"
          value="1.234"
          change={12}
          icon={<Users className="h-6 w-6" />}
          color="blue"
        />
        <StatCard
          label="Usuários Ativos"
          value="987"
          change={8}
          icon={<UserCheck className="h-6 w-6" />}
          color="green"
        />
        <StatCard
          label="Taxa de Retenção"
          value="82%"
          change={3}
          icon={<TrendingUp className="h-6 w-6" />}
          color="purple"
        />
        <StatCard
          label="Taxa Churn"
          value="2.3%"
          change={-1}
          icon={<UserX className="h-6 w-6" />}
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChartComponent data={userGrowthData} title="Crescimento Total de Usuários" />
        <LineChartComponent
          data={retentionData}
          lines={[
            { key: "Retidos", stroke: "#667eea", name: "Taxa Retenção %" },
            { key: "Churn", stroke: "#f93e3e", name: "Taxa Churn %" },
          ]}
          title="Retenção vs Churn"
        />
      </div>
    </AdminLayout>
  );
}
