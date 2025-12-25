import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { UserForm } from "./UserForm";

export default function UserCreate() {
  return (
    <AdminLayout title="Criar Novo Usuário">
      <UserForm />
    </AdminLayout>
  );
}
