import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { UserForm } from "./UserForm";
import { useRoute } from "wouter";

const mockUser = {
  id: 1,
  name: "João Silva",
  email: "joao@example.com",
  phone: "+55 11 99999-9999",
  birthDate: "1990-05-15",
  bio: "Desenvolvedor apaixonado por tecnologia",
  role: "user",
  status: "active",
  verified: true,
  plan: "Pro",
  expiresAt: "2026-01-18",
  neverExpires: false,
  wordLimit: 100000,
  customLimit: false,
  documentLimit: 50,
  unlimitedDocuments: false,
  language: "pt-BR",
  timezone: "America/Sao_Paulo",
  marketingEmails: true,
  productUpdates: true,
  securityAlerts: false,
  customData: '{"betaTester": true}',
};

export default function UserEdit() {
  const [match, params] = useRoute("/admin/users/:id/edit");

  return (
    <AdminLayout title={`Editar Usuário - ${mockUser.name}`}>
      <UserForm user={mockUser} />
    </AdminLayout>
  );
}
