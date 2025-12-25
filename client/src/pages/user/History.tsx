import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, Sparkles, CreditCard, Settings } from "lucide-react";

const historyData = [
  { id: 1, date: "22/12/2025 10:30", type: "document", description: "Criou 'Artigo sobre IA'", words: 0 },
  { id: 2, date: "22/12/2025 10:35", type: "ai_generation", description: "Gerou parágrafo de introdução", words: 150 },
  { id: 3, date: "21/12/2025 15:45", type: "ai_generation", description: "Reescreveu seção de conclusão", words: 85 },
  { id: 4, date: "20/12/2025 09:00", type: "payment", description: "Renovação Plano Pro", words: 0 },
  { id: 5, date: "18/12/2025 14:20", type: "document", description: "Exportou 'Email Marketing'", words: 0 },
  { id: 6, date: "15/12/2025 11:10", type: "ai_generation", description: "Gerou ideias de blog post", words: 200 },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'document': return <FileText className="h-4 w-4 text-blue-500" />;
    case 'ai_generation': return <Sparkles className="h-4 w-4 text-purple-500" />;
    case 'payment': return <CreditCard className="h-4 w-4 text-green-500" />;
    default: return <Settings className="h-4 w-4 text-gray-500" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'document': return "Documento";
    case 'ai_generation': return "IA";
    case 'payment': return "Pagamento";
    default: return "Sistema";
  }
};

export default function History() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Histórico de Atividades" />
        
        <div className="p-6 max-w-7xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableHead className="w-[180px]">Data & Hora</TableHead>
                  <TableHead className="w-[150px]">Tipo</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead className="text-right">Palavras Consumidas</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {historyData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium text-gray-600">{item.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(item.type)}
                        <span className="capitalize text-sm">{getTypeLabel(item.type)}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-800">{item.description}</TableCell>
                    <TableCell className="text-right font-medium">
                      {item.words > 0 ? (
                        <span className="text-red-500">-{item.words}</span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-gray-50">
               <span className="text-xs text-gray-500">Mostrando últimos 6 itens</span>
               <div className="space-x-2">
                  <button className="text-xs px-3 py-1 border rounded bg-white disabled:opacity-50" disabled>Anterior</button>
                  <button className="text-xs px-3 py-1 border rounded bg-white hover:bg-gray-50">Próximo</button>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
