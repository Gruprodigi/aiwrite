import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Plus, Edit2, Trash2, GripVertical } from "lucide-react";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const mockPlans = [
  {
    id: 1,
    name: "Free",
    slug: "free",
    description: "Para começar",
    price: 0,
    period: "mês",
    wordLimit: 10000,
    documentLimit: 5,
    status: "published",
    users: 2450,
    icon: "📦",
  },
  {
    id: 2,
    name: "Professional",
    slug: "professional",
    description: "Para profissionais",
    price: 49,
    period: "mês",
    wordLimit: 100000,
    documentLimit: 50,
    status: "published",
    users: 1234,
    badge: "Popular",
    icon: "⭐",
  },
  {
    id: 3,
    name: "Enterprise",
    slug: "enterprise",
    description: "Para grandes equipes",
    price: 199,
    period: "mês",
    wordLimit: -1,
    documentLimit: -1,
    status: "published",
    users: 456,
    icon: "🚀",
  },
];

function PlanCard({ plan, onEdit, onDelete }: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: plan.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-700";
      case "draft":
        return "bg-yellow-100 text-yellow-700";
      case "archived":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "published":
        return "✓ Publicado";
      case "draft":
        return "● Rascunho";
      case "archived":
        return "■ Arquivado";
      default:
        return "Desconhecido";
    }
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4 mb-4">
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing text-[#64748b] hover:text-[#1e293b]"
          >
            <GripVertical className="h-5 w-5" />
          </button>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{plan.icon}</span>
              <h3 className="text-xl font-bold text-[#1e293b]">{plan.name}</h3>
              {plan.badge && (
                <Badge className="bg-purple-100 text-purple-700 border-0">
                  {plan.badge}
                </Badge>
              )}
            </div>
            <p className="text-sm text-[#64748b]">{plan.description}</p>
          </div>

          <div className="text-right">
            <div className="flex gap-2">
              <Link href={`/admin/plans/${plan.id}/edit`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:bg-blue-50"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:bg-red-50"
                onClick={() => onDelete(plan.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-[#e2e8f0]">
          <div>
            <p className="text-xs text-[#64748b]">Preço</p>
            <p className="text-lg font-bold text-[#1e293b]">
              {plan.price === 0 ? "Grátis" : `R$ ${plan.price}`}
            </p>
            <p className="text-xs text-[#64748b]">/{plan.period}</p>
          </div>
          <div>
            <p className="text-xs text-[#64748b]">Limite</p>
            <p className="text-lg font-bold text-[#1e293b]">
              {plan.wordLimit === -1 ? "Ilimitado" : `${(plan.wordLimit / 1000).toFixed(0)}K`}
            </p>
            <p className="text-xs text-[#64748b]">palavras</p>
          </div>
          <div>
            <p className="text-xs text-[#64748b]">Documentos</p>
            <p className="text-lg font-bold text-[#1e293b]">
              {plan.documentLimit === -1 ? "Ilimitado" : plan.documentLimit}
            </p>
            <p className="text-xs text-[#64748b]">máx</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#64748b]">Usuários</p>
            <p className="text-lg font-bold text-[#1e293b]">{plan.users.toLocaleString()}</p>
          </div>
          <Badge className={`${getStatusColor(plan.status)} border-0`}>
            {getStatusLabel(plan.status)}
          </Badge>
        </div>
      </Card>
    </div>
  );
}

export default function PlansList() {
  const [plans, setPlans] = useState(mockPlans);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = plans.findIndex((p) => p.id === active.id);
      const newIndex = plans.findIndex((p) => p.id === over.id);
      setPlans(arrayMove(plans, oldIndex, newIndex));
    }
  };

  const handleDelete = (id: number) => {
    setPlans(plans.filter((p) => p.id !== id));
  };

  return (
    <AdminLayout title="Gerenciar Planos">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-[#64748b]">Total: {plans.length} planos</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-[#e2e8f0]">
            📊 Reordenar
          </Button>
          <Link href="/admin/plans/create">
            <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
              <Plus className="h-4 w-4" /> Novo Plano
            </Button>
          </Link>
        </div>
      </div>

      {/* Plans Grid with Drag & Drop */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={plans.map((p) => p.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </AdminLayout>
  );
}
