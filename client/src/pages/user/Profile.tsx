import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save, Trash2 } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Meu Perfil" />
        
        <div className="p-6 max-w-4xl mx-auto space-y-8 pb-20">
          
          {/* Profile Header */}
          <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="relative group cursor-pointer">
              <Avatar className="h-24 w-24 border-4 border-white shadow-sm">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">JS</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">João Silva</h2>
              <p className="text-gray-500">Membro desde Dezembro 2025</p>
              <Badge className="mt-2 bg-purple-100 text-purple-700 hover:bg-purple-200 border-none">Plano Pro</Badge>
            </div>
          </div>

          <div className="grid gap-8">
            {/* Personal Info */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Informações Pessoais</h3>
                <p className="text-sm text-gray-500">Atualize seus dados de contato e informações públicas.</p>
              </div>
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Nome Completo</Label>
                  <Input id="fullname" defaultValue="João Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="joao@email.com" disabled className="bg-gray-50 text-gray-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="+55 (11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="https://seu-site.com" />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <Label htmlFor="bio">Biografia</Label>
                  <Textarea id="bio" placeholder="Escreva um pouco sobre você..." className="resize-none h-24" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Salvar Alterações
                </Button>
              </div>
            </section>

            {/* Password */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Segurança</h3>
                <p className="text-sm text-gray-500">Gerencie sua senha e segurança da conta.</p>
              </div>
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="current_password">Senha Atual</Label>
                  <Input id="current_password" type="password" />
                </div>
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="new_password">Nova Senha</Label>
                    <Input id="new_password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm_password">Confirmar Nova Senha</Label>
                    <Input id="confirm_password" type="password" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline">Atualizar Senha</Button>
              </div>
            </section>

            {/* Notifications */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Preferências e Notificações</h3>
                <p className="text-sm text-gray-500">Controle como nos comunicamos com você.</p>
              </div>
              <Separator />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Novidades do Produto</Label>
                    <p className="text-sm text-gray-500">Receba atualizações sobre novas features.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Dicas de Uso</Label>
                    <p className="text-sm text-gray-500">Tutoriais e dicas para melhorar sua escrita.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Alertas de Limite</Label>
                    <p className="text-sm text-gray-500">Avise-me quando meu limite de palavras estiver acabando.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </section>

             {/* Danger Zone */}
             <section className="bg-red-50 p-6 rounded-lg border border-red-100 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-red-900">Zona de Perigo</h3>
                <p className="text-sm text-red-600">Ações irreversíveis.</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-red-900">Deletar Conta</p>
                  <p className="text-sm text-red-600">Todos os seus documentos e dados serão perdidos permanentemente.</p>
                </div>
                <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Deletar Minha Conta
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

// Simple Badge component wrapper since it might be missing in primitives or need import
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </span>
  )
}
