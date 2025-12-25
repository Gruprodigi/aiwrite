import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPassword() {
  const [_, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Enviado!</h2>
            <p className="text-gray-600 mb-6">
              Verifique sua caixa de entrada. Enviamos um link para redefinir sua senha para <span className="font-medium">{email}</span>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              O link expira em 24 horas. Se você não receber o email, verifique sua pasta de spam.
            </p>
            <Link href="/login">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Voltar para Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-xl">
        <CardHeader className="space-y-1">
          <Link href="/login">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4 text-sm font-medium">
              <ArrowLeft className="h-4 w-4" /> Voltar
            </a>
          </Link>
          <CardTitle className="text-2xl font-bold text-gray-900">Recuperar Senha</CardTitle>
          <CardDescription>
            Digite seu email para receber um link de recuperação
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com" 
                required 
                className="bg-gray-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p className="text-xs text-gray-500">
              Você receberá um email com instruções para redefinir sua senha.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-11">
              Enviar Link de Recuperação
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/login">
                <a>Cancelar</a>
              </Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
