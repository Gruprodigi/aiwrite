import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Key, Globe, Download, Database } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Configurações" />
        
        <div className="p-6 max-w-4xl mx-auto space-y-6">
          <Tabs defaultValue="integrations" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="api">API Keys</TabsTrigger>
              <TabsTrigger value="integrations">Integrações</TabsTrigger>
              <TabsTrigger value="privacy">Privacidade & Dados</TabsTrigger>
            </TabsList>
            
            <TabsContent value="api">
              <Card>
                <CardHeader>
                  <CardTitle>API Keys Pessoais</CardTitle>
                  <CardDescription>
                    Gerencie suas chaves de API para integrar o WriterAI em seus próprios apps.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Key className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-mono text-sm font-medium">pk_live_51Mz...92xY</p>
                        <p className="text-xs text-gray-500">Criada em 10 Dez 2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Revogar</Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="gap-2">
                    <Key className="h-4 w-4" />
                    Gerar Nova Chave
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="integrations">
              <Card>
                <CardHeader>
                  <CardTitle>Integrações Conectadas</CardTitle>
                  <CardDescription>
                    Conecte suas ferramentas favoritas para agilizar seu fluxo de trabalho.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">W</div>
                      <div>
                        <p className="font-medium text-gray-900">WordPress</p>
                        <p className="text-sm text-gray-500">Publicar artigos diretamente no seu blog.</p>
                      </div>
                    </div>
                    <Button variant="outline">Conectar</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold">M</div>
                      <div>
                        <p className="font-medium text-gray-900">Medium</p>
                        <p className="text-sm text-gray-500">Sincronizar drafts com sua conta Medium.</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Conectado</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">D</div>
                      <div>
                        <p className="font-medium text-gray-900">Dropbox</p>
                        <p className="text-sm text-gray-500">Salvar backups automáticos dos documentos.</p>
                      </div>
                    </div>
                    <Button variant="outline">Conectar</Button>
                  </div>

                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Privacidade e Exportação</CardTitle>
                  <CardDescription>
                    Gerencie seus dados e preferências de privacidade.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Compartilhar dados de uso</Label>
                        <p className="text-sm text-gray-500">Ajude-nos a melhorar a IA com dados anônimos.</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-medium mb-4 flex items-center gap-2">
                       <Database className="h-4 w-4" /> Exportar Dados
                    </h4>
                    <div className="flex gap-4">
                      <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Exportar Documentos (ZIP)
                      </Button>
                       <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Exportar Conta (JSON)
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

// Simple Badge component wrapper
function Badge({ children, className, variant = "default" }: { children: React.ReactNode, className?: string, variant?: "default" | "outline" }) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variantStyles = variant === "outline" ? "border" : "border-transparent bg-primary text-primary-foreground hover:bg-primary/80";
  
  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  )
}
