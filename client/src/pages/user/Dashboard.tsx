import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, MoreHorizontal, Clock, Star, TrendingUp, Zap, Plus, Loader2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

const stats = [
  { label: "Documentos", value: "12", icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Palavras este mês", value: "12,450", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
  { label: "Plano Pro", value: "18 dias restantes", icon: Zap, color: "text-purple-500", bg: "bg-purple-50" },
];

const mockDocuments = [
  { id: 1, title: "Artigo sobre IA e Futuro", date: "2 horas atrás", words: 1250, status: "Rascunho", starred: true },
  { id: 2, title: "Email Marketing - Lançamento", date: "Ontem", words: 450, status: "Finalizado", starred: false },
  { id: 3, title: "Post LinkedIn - Tecnologia", date: "3 dias atrás", words: 300, status: "Rascunho", starred: true },
  { id: 4, title: "Roteiro de Vídeo YouTube", date: "15/12/2025", words: 2100, status: "Rascunho", starred: false },
  { id: 5, title: "Descrição de Produto - SmartWatch", date: "10/12/2025", words: 150, status: "Finalizado", starred: false },
];

export default function Dashboard() {
  const [_, setLocation] = useLocation();
  const [isCreating, setIsCreating] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState("");

  const handleCreateDocument = () => {
    setIsCreating(true);
    // Simulate API call
    setTimeout(() => {
      setIsCreating(false);
      setLocation(`/user/document/new`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Dashboard" />
        
        <div className="p-6 max-w-7xl mx-auto space-y-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <h3 className="text-2xl font-bold mt-1 text-gray-900">{stat.value}</h3>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Documents */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">Documentos Recentes</h3>
              <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5">Ver todos</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDocuments.map((doc) => (
                <Link key={doc.id} href={`/user/document/${doc.id}`}>
                  <a className="block group">
                    <Card className="h-full border-gray-200 hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer group-hover:-translate-y-1">
                      <CardHeader className="pb-3 flex flex-row items-start justify-between space-y-0">
                        <div className={`p-2 rounded-lg ${doc.status === 'Finalizado' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                          <FileText className="h-5 w-5" />
                        </div>
                        {doc.starred && <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />}
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold text-gray-900 truncate pr-4">{doc.title}</h4>
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {doc.date}
                          </span>
                          <span>•</span>
                          <span>{doc.words} palavras</span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0 flex justify-between items-center">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          doc.status === 'Finalizado' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {doc.status}
                        </span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </a>
                </Link>
              ))}
              
              {/* Create New Card */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex flex-col items-center justify-center h-full min-h-[180px] border-2 border-dashed border-gray-300 rounded-xl hover:border-primary hover:bg-primary/5 transition-all group">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-white group-hover:shadow-sm transition-colors">
                      <Plus className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-medium text-gray-600 group-hover:text-primary">Novo Documento</span>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Criar Novo Documento</DialogTitle>
                    <DialogDescription>
                      Dê um nome ao seu novo projeto para começar.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nome do Documento</Label>
                      <Input 
                        id="name" 
                        placeholder="Ex: Artigo sobre Tecnologia" 
                        value={newDocTitle}
                        onChange={(e) => setNewDocTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleCreateDocument} disabled={isCreating || !newDocTitle}>
                      {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Criar Documento
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
