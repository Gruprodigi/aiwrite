import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRoute, Link } from "wouter";
import { ArrowLeft, Plus, X, GripVertical } from "lucide-react";
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

interface MenuItem {
  id: string;
  label: string;
  type: "page" | "post" | "url" | "custom";
  value: string;
  target?: string;
  children: MenuItem[];
}

const mockMenuItems: MenuItem[] = [
  {
    id: "1",
    label: "Home",
    type: "url",
    value: "/",
    children: [],
  },
  {
    id: "2",
    label: "Blog",
    type: "url",
    value: "/blog",
    children: [
      {
        id: "2-1",
        label: "Últimos Posts",
        type: "url",
        value: "/blog/latest",
        children: [],
      },
      {
        id: "2-2",
        label: "Categorias",
        type: "url",
        value: "/blog/categories",
        children: [],
      },
    ],
  },
  {
    id: "3",
    label: "Sobre",
    type: "page",
    value: "sobre-nos",
    children: [],
  },
];

function MenuItemComponent({
  item,
  onDelete,
  onAddChild,
  depth = 0,
}: {
  item: MenuItem;
  onDelete: (id: string) => void;
  onAddChild: (parentId: string) => void;
  depth?: number;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "page":
        return "📄";
      case "post":
        return "📝";
      case "url":
        return "🔗";
      default:
        return "✨";
    }
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div
        className="flex items-center gap-2 p-3 bg-white border border-[#e2e8f0] rounded-lg mb-2"
        style={{ marginLeft: `${depth * 20}px` }}
      >
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-[#64748b]"
        >
          <GripVertical className="h-4 w-4" />
        </button>

        <span className="text-lg">{getTypeIcon(item.type)}</span>

        <div className="flex-1">
          <p className="font-medium text-[#1e293b]">{item.label}</p>
          <p className="text-xs text-[#64748b]">{item.value}</p>
        </div>

        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAddChild(item.id)}
            className="text-blue-600 hover:bg-blue-50"
            data-testid={`button-add-child-${item.id}`}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(item.id)}
            className="text-red-600 hover:bg-red-50"
            data-testid={`button-delete-${item.id}`}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {item.children.length > 0 && (
        <div>
          {item.children.map((child) => (
            <MenuItemComponent
              key={child.id}
              item={child}
              onDelete={onDelete}
              onAddChild={onAddChild}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MenuBuilder() {
  const [match, params] = useRoute("/admin/menus/:id/edit");
  const [menuItems, setMenuItems] = useState<MenuItem[]>(mockMenuItems);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState<{
    label: string;
    type: "url" | "page" | "post";
    value: string;
  }>({
    label: "",
    type: "url",
    value: "",
  });
  const [menuInfo, setMenuInfo] = useState({
    name: "Menu Principal",
    slug: "main-menu",
    location: "header",
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (!match) return null;

  const handleAddItem = () => {
    if (newItem.label.trim() && newItem.value.trim()) {
      setMenuItems([
        ...menuItems,
        {
          id: Math.random().toString(36).substr(2, 9),
          label: newItem.label,
          type: newItem.type,
          value: newItem.value,
          children: [],
        },
      ]);
      setNewItem({ label: "", type: "url", value: "" });
      setShowAddForm(false);
    }
  };

  const handleDeleteItem = (id: string) => {
    const deleteRecursive = (items: MenuItem[]): MenuItem[] => {
      return items
        .filter((item) => item.id !== id)
        .map((item) => ({
          ...item,
          children: deleteRecursive(item.children),
        }));
    };
    setMenuItems(deleteRecursive(menuItems));
  };

  const handleAddChildItem = (parentId: string) => {
    const addChild = (items: MenuItem[]): MenuItem[] => {
      return items.map((item) => {
        if (item.id === parentId) {
          return {
            ...item,
            children: [
              ...item.children,
              {
                id: Math.random().toString(36).substr(2, 9),
                label: "Novo Item",
                type: "url" as const,
                value: "/novo",
                children: [],
              },
            ],
          };
        }
        return {
          ...item,
          children: addChild(item.children),
        };
      });
    };
    setMenuItems(addChild(menuItems));
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = menuItems.findIndex((item) => item.id === active.id);
      const newIndex = menuItems.findIndex((item) => item.id === over.id);
      setMenuItems(arrayMove(menuItems, oldIndex, newIndex));
    }
  };

  return (
    <AdminLayout title={`Editar Menu - ${menuInfo.name}`}>
      {/* Header */}
      <div className="mb-6">
        <Link href="/admin/menus">
          <Button
            variant="ghost"
            className="mb-4 text-primary hover:text-primary/90"
            data-testid="button-back"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Voltar para Menus
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Menu Items */}
        <div className="col-span-2 space-y-6">
          {/* Add New Item Form */}
          {showAddForm && (
            <Card className="p-6 border-primary border-2">
              <h3 className="text-lg font-bold text-[#1e293b] mb-4">Adicionar Item</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="label">Rótulo *</Label>
                  <Input
                    id="label"
                    value={newItem.label}
                    onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
                    placeholder="Nome do item"
                    className="mt-1"
                    autoFocus
                  />
                </div>

                <div>
                  <Label htmlFor="type">Tipo *</Label>
                  <select
                    id="type"
                    value={newItem.type}
                    onChange={(e) =>
                      setNewItem({ 
                        ...newItem, 
                        type: e.target.value as "url" | "page" | "post"
                      })
                    }
                    className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg mt-1"
                  >
                    <option value="url">🔗 URL Customizada</option>
                    <option value="page">📄 Página</option>
                    <option value="post">📝 Post</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="value">Valor *</Label>
                  {newItem.type === "url" && (
                    <Input
                      id="value"
                      value={newItem.value}
                      onChange={(e) => setNewItem({ ...newItem, value: e.target.value })}
                      placeholder="/url"
                      className="mt-1"
                    />
                  )}
                  {newItem.type === "page" && (
                    <select
                      value={newItem.value}
                      onChange={(e) => setNewItem({ ...newItem, value: e.target.value })}
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg mt-1"
                    >
                      <option value="">Selecione uma página</option>
                      <option value="sobre-nos">Sobre Nós</option>
                      <option value="privacidade">Política de Privacidade</option>
                      <option value="termos">Termos de Uso</option>
                    </select>
                  )}
                  {newItem.type === "post" && (
                    <select
                      value={newItem.value}
                      onChange={(e) => setNewItem({ ...newItem, value: e.target.value })}
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg mt-1"
                    >
                      <option value="">Selecione um post</option>
                      <option value="como-usar-ia">Como Usar IA para Escrever</option>
                      <option value="tendencias-2025">Tendências 2025</option>
                    </select>
                  )}
                </div>

                <div className="flex gap-2 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowAddForm(false);
                      setNewItem({ label: "", type: "url", value: "" });
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={handleAddItem}
                  >
                    Adicionar
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Menu Items List */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#1e293b]">Itens do Menu</h3>
              {!showAddForm && (
                <Button
                  className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                  onClick={() => setShowAddForm(true)}
                  data-testid="button-add-item"
                >
                  <Plus className="h-4 w-4" /> Adicionar Item
                </Button>
              )}
            </div>

            {menuItems.length === 0 ? (
              <p className="text-[#64748b] text-center py-8">
                Nenhum item no menu. Adicione um para começar.
              </p>
            ) : (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={menuItems.map((m) => m.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {menuItems.map((item) => (
                    <MenuItemComponent
                      key={item.id}
                      item={item}
                      onDelete={handleDeleteItem}
                      onAddChild={handleAddChildItem}
                    />
                  ))}
                </SortableContext>
              </DndContext>
            )}
          </Card>
        </div>

        {/* Menu Settings Sidebar */}
        <Card className="p-6 h-fit sticky top-6">
          <h3 className="text-lg font-bold text-[#1e293b] mb-6">Configurações</h3>

          <div className="space-y-4">
            <div>
              <Label htmlFor="menu-name">Nome do Menu</Label>
              <Input
                id="menu-name"
                value={menuInfo.name}
                onChange={(e) =>
                  setMenuInfo({ ...menuInfo, name: e.target.value })
                }
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="menu-slug">Slug</Label>
              <Input
                id="menu-slug"
                value={menuInfo.slug}
                onChange={(e) =>
                  setMenuInfo({ ...menuInfo, slug: e.target.value })
                }
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="menu-location">Localização</Label>
              <select
                id="menu-location"
                value={menuInfo.location}
                onChange={(e) =>
                  setMenuInfo({ ...menuInfo, location: e.target.value })
                }
                className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg mt-1"
              >
                <option value="header">Header</option>
                <option value="footer">Footer</option>
                <option value="mobile">Mobile</option>
                <option value="sidebar">Sidebar</option>
              </select>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0]">
              <p className="text-sm text-[#64748b] mb-2">
                <strong>Total de itens:</strong> {menuItems.length}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white" data-testid="button-save">
              ✓ Salvar Menu
            </Button>
            <Button variant="outline" className="w-full" data-testid="button-preview">
              👁️ Visualizar
            </Button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
