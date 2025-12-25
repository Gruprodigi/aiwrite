import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { StatCard } from "@/components/admin/StatCard";
import { AreaChartComponent } from "@/components/admin/charts/AreaChartComponent";
import { LineChartComponent } from "@/components/admin/charts/LineChartComponent";
import { Button } from "@/components/ui/button";
import { FileText, Zap, BarChart3, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const contentData = [
  { name: "Jan", value: 450 },
  { name: "Fev", value: 520 },
  { name: "Mar", value: 680 },
  { name: "Abr", value: 820 },
  { name: "Mai", value: 1020 },
  { name: "Jun", value: 1243 },
];

const aiUsageData = [
  { name: "Semana 1", Gerações: 2450, Palavras: 120000 },
  { name: "Semana 2", Gerações: 2890, Palavras: 142000 },
  { name: "Semana 3", Gerações: 3210, Palavras: 165000 },
  { name: "Semana 4", Gerações: 3650, Palavras: 189000 },
];

export default function AnalyticsContent() {
  const [period, setPeriod] = useState("30d");

  return (
    <AdminLayout title="Analytics - Conteúdo">
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
              item.href === "/admin/analytics/content"
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
          label="Documentos Totais"
          value="1.243"
          change={28}
          icon={<FileText className="h-6 w-6" />}
          color="blue"
        />
        <StatCard
          label="Gerações de IA"
          value="14.590"
          change={35}
          icon={<Zap className="h-6 w-6" />}
          color="purple"
        />
        <StatCard
          label="Palavras Geradas"
          value="618.5K"
          change={42}
          icon={<BarChart3 className="h-6 w-6" />}
          color="green"
        />
        <StatCard
          label="Taxa de Uso"
          value="76%"
          change={5}
          icon={<TrendingUp className="h-6 w-6" />}
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChartComponent data={contentData} title="Crescimento de Documentos" />
        <LineChartComponent
          data={aiUsageData}
          lines={[
            { key: "Gerações", stroke: "#667eea", name: "Gerações de IA" },
            { key: "Palavras", stroke: "#764ba2", name: "Palavras Geradas (K)" },
          ]}
          title="Uso de IA Semanal"
        />
      </div>
    </AdminLayout>
  );
}
