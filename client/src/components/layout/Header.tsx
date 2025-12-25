import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header({ title }: { title: string }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 md:ml-0 ml-12">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Buscar documentos..." 
            className="pl-9 h-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
          />
        </div>

        <Button size="icon" variant="ghost" className="relative text-gray-500 hover:text-gray-700">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>

        <Button className="hidden sm:flex gap-2 bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow transition-all">
          <Plus className="h-4 w-4" />
          Novo Documento
        </Button>
      </div>
    </header>
  );
}
