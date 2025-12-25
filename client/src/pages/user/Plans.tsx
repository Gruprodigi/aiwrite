import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Para quem está começando a experimentar IA.",
    features: [
      { name: "5.000 palavras/mês", included: true },
      { name: "5 documentos", included: true },
      { name: "Acesso a templates básicos", included: true },
      { name: "Geração em PT-BR", included: true },
      { name: "Suporte prioritário", included: false },
      { name: "Modo equipe", included: false },
    ]
  },
  {
    name: "Pro",
    price: 49,
    popular: true,
    description: "Para criadores de conteúdo e freelancers.",
    features: [
      { name: "50.000 palavras/mês", included: true },
      { name: "Documentos ilimitados", included: true },
      { name: "Todos os templates", included: true },
      { name: "30+ idiomas", included: true },
      { name: "Suporte prioritário", included: true },
      { name: "Exportação em PDF/HTML", included: true },
    ]
  },
  {
    name: "Enterprise",
    price: 199,
    description: "Para agências e times de marketing.",
    features: [
      { name: "Palavras ilimitadas", included: true },
      { name: "Tudo do Pro", included: true },
      { name: "Até 5 usuários", included: true },
      { name: "API Access", included: true },
      { name: "Gerente de conta dedicado", included: true },
      { name: "Treinamento personalizado", included: true },
    ]
  },
];

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-200 ease-in-out">
        <Header title="Planos e Assinatura" />
        
        <div className="p-6 max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Escolha o plano ideal para você</h2>
            <p className="text-gray-500 mt-4">Desbloqueie todo o potencial da sua criatividade com nossos planos flexíveis.</p>
            
            <div className="flex items-center justify-center mt-8 gap-4">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Mensal</span>
              <button 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${billingCycle === 'yearly' ? 'bg-primary' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Anual <span className="text-green-600 text-xs font-bold ml-1">(-20%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <Card key={i} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg scale-105 z-10' : 'hover:shadow-md transition-shadow'}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-3 -mr-3">
                    <Badge className="bg-primary hover:bg-primary text-white px-3 py-1 text-sm shadow-sm">Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-4xl font-extrabold tracking-tight">R$ {billingCycle === 'yearly' ? (plan.price * 12 * 0.8 / 12).toFixed(0) : plan.price}</span>
                    <span className="ml-1 text-xl font-semibold text-gray-500">/mês</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300" />
                          )}
                        </div>
                        <p className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={plan.price === 0 ? "/user/dashboard" : "/payment/success"} className="w-full">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-white text-primary border-2 border-primary hover:bg-blue-50'}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.price === 0 ? "Começar Grátis" : "Assinar Agora"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
