import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Check } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

const mockLanguages = [
  { id: "1", code: "pt-BR", name: "Português", nativeName: "Português (Brasil)", isEnabled: true, isDefault: true },
  { id: "2", code: "en-US", name: "English", nativeName: "English (US)", isEnabled: true, isDefault: false },
  { id: "3", code: "es-ES", name: "Spanish", nativeName: "Español", isEnabled: false, isDefault: false },
];

export default function LanguagesList() {
  const [, navigate] = useLocation();
  const [search, setSearch] = useState("");
  const [languages, setLanguages] = useState(mockLanguages);

  const filteredLanguages = languages.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.code.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setLanguages(languages.filter((l) => l.id !== id));
  };

  const handleToggleEnabled = (id: string) => {
    setLanguages(
      languages.map((l) =>
        l.id === id ? { ...l, isEnabled: !l.isEnabled } : l
      )
    );
  };

  return (
    <AdminLayout title="Gestão de Idiomas">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Input
            placeholder="Buscar idiomas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 max-w-sm"
          />
          <Button onClick={() => navigate("/admin/languages/create")}>Adicionar Idioma</Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Nome (EN)</TableHead>
                <TableHead>Nome Nativo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Padrão</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLanguages.map((language) => (
                <TableRow key={language.id}>
                  <TableCell className="font-medium">{language.code}</TableCell>
                  <TableCell>{language.name}</TableCell>
                  <TableCell>{language.nativeName}</TableCell>
                  <TableCell>
                    <Badge
                      variant={language.isEnabled ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleToggleEnabled(language.id)}
                    >
                      {language.isEnabled ? "Ativo" : "Inativo"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {language.isDefault && (
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-600">Padrão</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => navigate(`/admin/languages/${language.id}/edit`)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(language.id)}>
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
