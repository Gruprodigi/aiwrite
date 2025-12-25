import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function AISettings() {
  const [provider, setProvider] = useState("openai");
  const [apiKey, setApiKey] = useState("sk-...");
  const [model, setModel] = useState("gpt-4");
  const [maxTokens, setMaxTokens] = useState("2000");
  const [temperature, setTemperature] = useState("0.7");
  const [monthlyLimit, setMonthlyLimit] = useState("100000");
  const [dailyLimit, setDailyLimit] = useState("10000");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Configurações de IA salvas!");
  };

  return (
    <AdminLayout title="Configurações de IA">
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
          <h3 className="font-semibold text-lg">Provedor de IA</h3>

          <div>
            <Label htmlFor="provider">Provedor</Label>
            <select
              id="provider"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="openai">OpenAI</option>
              <option value="anthropic">Anthropic (Claude)</option>
              <option value="google">Google Gemini</option>
              <option value="mistral">Mistral</option>
            </select>
          </div>

          <div>
            <Label htmlFor="apiKey">Chave API</Label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
            />
            <p className="text-xs text-gray-500 mt-1">Sua chave API será criptografada</p>
          </div>

          <h3 className="font-semibold text-lg pt-4">Configuração do Modelo</h3>

          <div>
            <Label htmlFor="model">Modelo</Label>
            <select
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-4-turbo">GPT-4 Turbo</option>
              <option value="gpt-3.5">GPT-3.5 Turbo</option>
              <option value="claude-3-opus">Claude 3 Opus</option>
            </select>
          </div>

          <div>
            <Label htmlFor="temperature">Temperatura ({temperature})</Label>
            <input
              id="temperature"
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              0 = determinístico, 2 = criativo
            </p>
          </div>

          <div>
            <Label htmlFor="maxTokens">Máximo de Tokens</Label>
            <Input
              id="maxTokens"
              type="number"
              value={maxTokens}
              onChange={(e) => setMaxTokens(e.target.value)}
            />
          </div>

          <h3 className="font-semibold text-lg pt-4">Limites de Uso</h3>

          <div>
            <Label htmlFor="monthlyLimit">Limite Mensal de Tokens</Label>
            <Input
              id="monthlyLimit"
              type="number"
              value={monthlyLimit}
              onChange={(e) => setMonthlyLimit(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="dailyLimit">Limite Diário de Tokens</Label>
            <Input
              id="dailyLimit"
              type="number"
              value={dailyLimit}
              onChange={(e) => setDailyLimit(e.target.value)}
            />
          </div>

          <Button type="submit" className="mt-4">
            Salvar Configurações de IA
          </Button>
        </div>
      </form>
    </AdminLayout>
  );
}
