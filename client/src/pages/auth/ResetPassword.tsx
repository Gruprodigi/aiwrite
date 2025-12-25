import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ResetPassword() {
  const [_, setLocation] = useLocation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 8) {
      setSubmitted(true);
      setTimeout(() => setLocation("/login"), 2000);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md border-gray-200 shadow-xl text-center">
          <CardContent className="pt-12 pb-8">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Senha Redefinida!</h2>
            <p className="text-gray-600">
              Sua senha foi alterada com sucesso. Redirecionando para login...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary/30">
              W
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Criar Nova Senha</CardTitle>
          <CardDescription>
            Digite uma nova senha para sua conta WriterAI
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Nova Senha</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Mínimo 8 caracteres" 
                required 
                className="bg-gray-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirmar Senha</Label>
              <Input 
                id="confirm" 
                type="password" 
                required 
                className="bg-gray-50"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {password && confirmPassword && password !== confirmPassword && (
              <p className="text-xs text-red-600">As senhas não correspondem</p>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-11"
              disabled={password !== confirmPassword || password.length < 8}
            >
              Redefinir Senha
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
