import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { StatCard } from "@/components/admin/StatCard";
import { AreaChartComponent } from "@/components/admin/charts/AreaChartComponent";
import { LineChartComponent } from "@/components/admin/charts/LineChartComponent";
import { Button } from "@/components/ui/button";
import { CreditCard, TrendingUp, PieChart as PieChartIcon, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const revenueData = [
  { name: "Jan", value: 4000 },
  { name: "Fev", value: 3200 },
  { name: "Mar", value: 5100 },
  { name: "Abr", value: 6400 },
  { name: "Mai", value: 8200 },
  { name: "Jun", value: 9500 },
];

const arpaData = [
  { name: "Semana 1", ARPU: 45, LTV: 1200 },
  { name: "Semana 2", ARPU: 48, LTV: 1280 },
  { name: "Semana 3", ARPU: 52, LTV: 1380 },
  { name: "Semana 4", ARPU: 55, LTV: 1450 },
];

export default function AnalyticsRevenue() {
  const [period, setPeriod] = useState("30d");

  return (
    <AdminLayout title="Analytics - Receita">
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
              item.href === "/admin/analytics/revenue"
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
          label="Receita Total"
          value="R$ 45.200"
          change={23}
          icon={<CreditCard className="h-6 w-6" />}
          color="green"
        />
        <StatCard
          label="MRR"
          value="R$ 9.500"
          change={18}
          icon={<TrendingUp className="h-6 w-6" />}
          color="blue"
        />
        <StatCard
          label="ARPU"
          value="R$ 55,23"
          change={7}
          icon={<BarChart3 className="h-6 w-6" />}
          color="purple"
        />
        <StatCard
          label="LTV"
          value="R$ 1.450"
          change={12}
          icon={<PieChartIcon className="h-6 w-6" />}
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChartComponent data={revenueData} title="Receita Mensal" />
        <LineChartComponent
          data={arpaData}
          lines={[
            { key: "ARPU", stroke: "#667eea", name: "ARPU (R$)" },
            { key: "LTV", stroke: "#764ba2", name: "LTV (R$)" },
          ]}
          title="ARPU vs LTV"
        />
      </div>
    </AdminLayout>
  );
}
