import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { 
  PenTool, Mail, Share2, Youtube, 
  MessageSquare, HelpCircle, FileText, Briefcase 
} from "lucide-react";
import { Link } from "wouter";

const templates = [
  {
    icon: PenTool,
    name: "Artigo de Blog",
    description: "Crie artigos completos otimizados para SEO em minutos.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Share2,
    name: "Post para Redes Sociais",
    description: "Legendas engajadoras para Instagram, LinkedIn e Twitter.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Mail,
    name: "Email Marketing",
    description: "Emails que convertem para vendas e newsletters.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Briefcase,
    name: "Descrição de Produto",
    description: "Destaque os benefícios do seu produto de forma persuasiva.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Youtube,
    name: "Roteiro de Vídeo",
    description: "Estruturas virais para YouTube, TikTok e Reels.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: FileText,
    name: "Carta de Apresentação",
    description: "Personalize sua candidatura para vagas de emprego.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: MessageSquare,
    name: "Press Release",
    description: "Anuncie novidades da sua empresa para a mídia.",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: HelpCircle,
    name: "FAQ Generator",
    description: "Perguntas frequentes claras e úteis para seus clientes.",
    color: "bg-teal-100 text-teal-600"
  }
];

export default function Templates() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Templates" />
        
        <div className="p-6 max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">O que você vai criar hoje?</h2>
            <p className="text-gray-500">Escolha um template para começar a gerar conteúdo de alta qualidade com IA.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {templates.map((template, i) => (
              <Card key={i} className="hover:shadow-md transition-all hover:border-primary/50 group cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${template.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <template.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Usar Template
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
