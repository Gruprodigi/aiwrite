import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Copy } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

const mockTemplates = [
  { id: "1", name: "Boas-vindas", subject: "Bem-vindo ao WriterAI", variables: ["{{name}}", "{{email}}"], createdAt: "2025-12-20" },
  { id: "2", name: "Reset de Senha", subject: "Redefinir sua senha", variables: ["{{resetLink}}", "{{name}}"], createdAt: "2025-12-19" },
  { id: "3", name: "Confirmação de Pagamento", subject: "Pagamento confirmado", variables: ["{{amount}}", "{{date}}"], createdAt: "2025-12-18" },
];

export default function TemplatesList() {
  const [, navigate] = useLocation();
  const [search, setSearch] = useState("");
  const [templates, setTemplates] = useState(mockTemplates);

  const filteredTemplates = templates.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setTemplates(templates.filter((t) => t.id !== id));
  };

  return (
    <AdminLayout title="Templates de Email">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Input
            placeholder="Buscar templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 max-w-sm"
          />
          <Button onClick={() => navigate("/admin/templates/create")}>Criar Template</Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Assunto</TableHead>
                <TableHead>Variáveis</TableHead>
                <TableHead>Criado em</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTemplates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell className="font-medium">{template.name}</TableCell>
                  <TableCell>{template.subject}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {template.variables.map((v) => (
                        <span key={v} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          {v}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{template.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => navigate(`/admin/templates/${template.id}/edit`)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(template.id)}>
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
