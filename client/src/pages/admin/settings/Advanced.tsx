import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function AdvancedSettings() {
  const [cacheEnabled, setCacheEnabled] = useState(true);
  const [cacheTTL, setCacheTTL] = useState("3600");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState("O site está em manutenção. Voltaremos em breve!");
  const [apiRateLimit, setApiRateLimit] = useState("100");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Configurações avançadas salvas!");
  };

  const handleClearCache = () => {
    alert("Cache limpo com sucesso!");
  };

  const handleExportData = () => {
    alert("Exportação iniciada...");
  };

  const handleResetSettings = () => {
    alert("Todas as configurações foram redefinidas para o padrão!");
  };

  return (
    <AdminLayout title="Configurações Avançadas">
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
          <h3 className="font-semibold text-lg">Performance</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="cache"
                checked={cacheEnabled}
                onChange={(checked) => setCacheEnabled(checked as boolean)}
              />
              <Label htmlFor="cache" className="cursor-pointer">
                Habilitar Cache
              </Label>
            </div>

            <div>
              <Label htmlFor="cacheTTL">TTL do Cache (segundos)</Label>
              <Input
                id="cacheTTL"
                type="number"
                value={cacheTTL}
                onChange={(e) => setCacheTTL(e.target.value)}
                disabled={!cacheEnabled}
              />
            </div>
          </div>

          <h3 className="font-semibold text-lg pt-4">Modo de Manutenção</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="maintenance"
                checked={maintenanceMode}
                onChange={(checked) => setMaintenanceMode(checked as boolean)}
              />
              <Label htmlFor="maintenance" className="cursor-pointer">
                Ativar Modo de Manutenção
              </Label>
            </div>

            <div>
              <Label htmlFor="maintenanceMsg">Mensagem de Manutenção</Label>
              <Textarea
                id="maintenanceMsg"
                value={maintenanceMessage}
                onChange={(e) => setMaintenanceMessage(e.target.value)}
                rows={3}
                disabled={!maintenanceMode}
              />
            </div>
          </div>

          <h3 className="font-semibold text-lg pt-4">Segurança e Debug</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="debug"
                checked={debugMode}
                onChange={(checked) => setDebugMode(checked as boolean)}
              />
              <Label htmlFor="debug" className="cursor-pointer">
                Ativar Modo de Debug
              </Label>
            </div>

            <div>
              <Label htmlFor="rateLimit">Rate Limit da API (requisições/minuto)</Label>
              <Input
                id="rateLimit"
                type="number"
                value={apiRateLimit}
                onChange={(e) => setApiRateLimit(e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="mt-4">
            Salvar Configurações Avançadas
          </Button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-3">
          <h3 className="font-semibold text-lg">Manutenção do Sistema</h3>

          <div className="space-y-2">
            <Button type="button" variant="outline" onClick={handleClearCache} className="w-full">
              Limpar Cache
            </Button>

            <Button type="button" variant="outline" onClick={handleExportData} className="w-full">
              Exportar Dados
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button type="button" variant="destructive" className="w-full">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Redefinir Configurações
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Redefinir Configurações?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta ação é irreversível. Todas as configurações serão redefinidas para o padrão.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex gap-2">
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={handleResetSettings}>
                    Redefinir
                  </AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}
