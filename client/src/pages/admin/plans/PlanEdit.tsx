import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { PlanForm } from "./PlanForm";

const mockPlan = {
  id: 2,
  name: "Professional",
  slug: "professional",
  description: "Para profissionais independentes",
  status: "published",
  icon: "⭐",
  price: 49,
  period: "mês",
  billing: "monthly",
  annualDiscount: 20,
  wordLimit: 100000,
  unlimitedWords: false,
  documentLimit: 50,
  unlimitedDocuments: false,
  features: [
    "100K palavras/mês",
    "Até 50 documentos",
    "Suporte prioritário",
    "Templates premium",
    "Análise de performance",
  ],
  maxTeamMembers: 3,
  customBranding: false,
  apiAccess: true,
  advancedAnalytics: true,
  customDomain: false,
  prioritySupport: true,
  ssoIntegration: false,
  customData: '{"popular": true}',
};

export default function PlanEdit() {
  return (
    <AdminLayout title={`Editar Plano - ${mockPlan.name}`}>
      <PlanForm plan={mockPlan} />
    </AdminLayout>
  );
}
