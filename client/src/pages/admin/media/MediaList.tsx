import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Upload, Trash2, Eye } from "lucide-react";
import { useState } from "react";
const formatBytes = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

const mockMedia = [
  { id: "1", filename: "logo.png", url: "/api/media/1", type: "image", mimetype: "image/png", size: 45000, uploadedAt: "2025-12-20" },
  { id: "2", filename: "banner.jpg", url: "/api/media/2", type: "image", mimetype: "image/jpeg", size: 320000, uploadedAt: "2025-12-19" },
  { id: "3", filename: "guide.pdf", url: "/api/media/3", type: "document", mimetype: "application/pdf", size: 1024000, uploadedAt: "2025-12-18" },
];

export default function MediaList() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [media, setMedia] = useState(mockMedia);

  const filteredMedia = media.filter(
    (m) => (typeFilter === "all" || m.type === typeFilter) && m.filename.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setMedia(media.filter((m) => m.id !== id));
  };

  return (
    <AdminLayout title="Biblioteca de Mídia">
      <div className="space-y-6">
        {/* Upload Section */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12">
            <div className="text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Arraste arquivos aqui ou</p>
              <Button className="mt-3">Selecionar Arquivos</Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <Input
            placeholder="Buscar por nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
          >
            <option value="all">Todos os tipos</option>
            <option value="image">Imagens</option>
            <option value="video">Vídeos</option>
            <option value="document">Documentos</option>
          </select>
        </div>

        {/* Media Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome do Arquivo</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Tamanho</TableHead>
                <TableHead>Data de Upload</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMedia.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.filename}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.type}</Badge>
                  </TableCell>
                  <TableCell>{formatBytes(item.size)}</TableCell>
                  <TableCell>{item.uploadedAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(item.id)}>
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
