import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { PlanForm } from "./PlanForm";

export default function PlanCreate() {
  return (
    <AdminLayout title="Criar Novo Plano">
      <PlanForm />
    </AdminLayout>
  );
}
