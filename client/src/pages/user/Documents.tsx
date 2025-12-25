import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Input } from "@/components/ui/input";
import { FileText, MoreHorizontal, Star, Trash2, Download, Share2, Plus, Search } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const mockDocuments = [
  { id: 1, title: "Artigo sobre IA e Futuro", date: "2 horas atrás", words: 1250, status: "Rascunho", starred: true },
  { id: 2, title: "Email Marketing - Lançamento", date: "Ontem", words: 450, status: "Finalizado", starred: false },
  { id: 3, title: "Post LinkedIn - Tecnologia", date: "3 dias atrás", words: 300, status: "Rascunho", starred: true },
  { id: 4, title: "Roteiro de Vídeo YouTube", date: "15/12/2025", words: 2100, status: "Rascunho", starred: false },
  { id: 5, title: "Descrição de Produto - SmartWatch", date: "10/12/2025", words: 150, status: "Finalizado", starred: false },
  { id: 6, title: "Políticas de Privacidade", date: "08/12/2025", words: 800, status: "Finalizado", starred: false },
];

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "rascunho" | "finalizado">("all");
  const [starredOnly, setStarredOnly] = useState(false);

  const filteredDocuments = mockDocuments.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || doc.status.toLowerCase() === filterStatus;
    const matchesStarred = !starredOnly || doc.starred;
    return matchesSearch && matchesStatus && matchesStarred;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Meus Documentos" />

        <div className="p-6 max-w-7xl mx-auto space-y-6 pb-20">
          {/* Header with Create Button */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Meus Documentos</h1>
              <p className="text-gray-600 mt-1">Gerencie seus documentos criados com IA</p>
            </div>
            <Link href="/user/document/new">
              <a>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Novo Documento
                </Button>
              </a>
            </Link>
          </div>

          {/* Filters */}
          <Card className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesquisar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Pesquisar documentos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">Todos</option>
                  <option value="rascunho">Rascunho</option>
                  <option value="finalizado">Finalizado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filtros</label>
                <button
                  onClick={() => setStarredOnly(!starredOnly)}
                  className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                    starredOnly
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <Star className="inline h-4 w-4 mr-2" />
                  Apenas Favoritos
                </button>
              </div>
            </div>
          </Card>

          {/* Documents Grid */}
          {filteredDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc) => (
                <Link key={doc.id} href={`/user/document/${doc.id}`}>
                  <a className="block group">
                    <Card className="h-full p-6 hover:shadow-lg transition-shadow cursor-pointer border-gray-200 hover:border-primary/30">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 truncate group-hover:text-primary transition-colors">
                              {doc.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{doc.date}</p>
                          </div>
                          <button className="flex-shrink-0 p-2 text-gray-400 hover:text-yellow-500 transition-colors">
                            <Star className="h-4 w-4" fill={doc.starred ? "currentColor" : "none"} />
                          </button>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{doc.words.toLocaleString()} palavras</span>
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                doc.status === "Finalizado"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {doc.status}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <div className="flex gap-1">
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                              <Download className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                          <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum documento encontrado</h3>
              <p className="text-gray-500 mb-6">Crie seu primeiro documento clicando no botão acima</p>
              <Link href="/user/document/new">
                <a>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Documento
                  </Button>
                </a>
              </Link>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
