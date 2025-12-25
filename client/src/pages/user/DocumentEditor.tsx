import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/layout/Sidebar";
import { 
  Bold, Italic, List, ListOrdered, 
  ChevronLeft, Save, Sparkles, 
  Download, MoreVertical, Type,
  Undo, Redo, Quote, Code
} from "lucide-react";
import { Link, useRoute } from "wouter";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 p-2 flex flex-wrap gap-1 bg-white sticky top-16 z-10">
      <div className="flex items-center border-r border-gray-200 pr-2 mr-2 gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'bg-gray-100 text-primary' : 'text-gray-600'}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'bg-gray-100 text-primary' : 'text-gray-600'}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'bg-gray-100 text-primary' : 'text-gray-600'}
        >
          <span className="line-through text-xs font-bold">S</span>
        </Button>
      </div>

      <div className="flex items-center border-r border-gray-200 pr-2 mr-2 gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'bg-gray-100 text-primary' : 'text-gray-600'}
        >
          <span className="font-bold text-xs">H1</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-100 text-primary' : 'text-gray-600'}
        >
          <span className="font-bold text-xs">H2</span>
        </Button>
      </div>

      <div className="flex items-center border-r border-gray-200 pr-2 mr-2 gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'bg-gray-100 text-primary' : 'text-gray-600'}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'bg-gray-100 text-primary' : 'text-gray-600'}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'bg-gray-100 text-primary' : 'text-gray-600'}
        >
          <Quote className="h-4 w-4" />
        </Button>
         <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'bg-gray-100 text-primary' : 'text-gray-600'}
        >
          <Code className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex items-center ml-auto gap-1">
        <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().undo().run()}>
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().redo().run()}>
          <Redo className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default function DocumentEditor() {
  const [match, params] = useRoute("/user/document/:id");
  const [isGenerating, setIsGenerating] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Comece a escrever ou use a IA para gerar conteúdo...',
      }),
    ],
    content: '<p>Este é o início do seu incrível artigo sobre inteligência artificial...</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none min-h-[500px] p-8 max-w-none',
      },
    },
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      editor?.chain().focus().insertContent(`
        <h2>O Futuro da IA Generativa</h2>
        <p>A inteligência artificial generativa está transformando a maneira como criamos conteúdo. Com ferramentas avançadas, é possível escalar a produção sem perder a qualidade.</p>
        <p>Esta tecnologia não veio para substituir escritores, mas para empoderá-los com superpoderes criativos.</p>
      `).run();
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Mobile Sidebar Toggle would go here, but we'll assume desktop first for this view */}
      <div className="hidden md:block w-16 lg:w-64 shrink-0 border-r border-gray-200">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Editor Header */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-4 bg-white shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <Link href="/user/dashboard">
              <Button variant="ghost" size="icon" className="shrink-0 text-gray-500">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex flex-col min-w-0">
              <input 
                type="text" 
                defaultValue="Artigo sobre IA e Futuro" 
                className="font-semibold text-gray-900 border-none p-0 h-6 focus:ring-0 text-sm md:text-base truncate bg-transparent hover:bg-gray-50 rounded px-1 transition-colors"
              />
              <span className="text-xs text-gray-400">Salvo há 2 minutos</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline-block text-xs text-gray-400 mr-2">
              {editor?.storage.characterCount?.words() || 0} palavras
            </span>
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2 text-gray-600">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-sm">
              <Save className="h-4 w-4" />
              <span className="hidden sm:inline">Salvar</span>
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Editor Area */}
          <div className="flex-1 flex flex-col overflow-hidden relative">
            <MenuBar editor={editor} />
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-8 flex justify-center">
              <div className="w-full max-w-3xl bg-white shadow-sm border border-gray-200 min-h-[800px] rounded-lg">
                 <EditorContent editor={editor} />
              </div>
            </div>
          </div>

          {/* AI Panel - Right Sidebar */}
          <div className="w-80 border-l border-gray-200 bg-white flex flex-col shrink-0 overflow-y-auto hidden xl:flex">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Sparkles className="h-5 w-5" />
                WriterAI Assistant
              </div>
            </div>

            <div className="p-5 space-y-6 flex-1">
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">O que você quer fazer?</label>
                <Select defaultValue="continue">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma ação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="continue">Continuar escrevendo</SelectItem>
                    <SelectItem value="rewrite">Reescrever seleção</SelectItem>
                    <SelectItem value="summarize">Resumir</SelectItem>
                    <SelectItem value="ideas">Gerar ideias</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">Tom de voz</label>
                <Select defaultValue="professional">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Profissional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="creative">Criativo</SelectItem>
                    <SelectItem value="academic">Acadêmico</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">Instruções extras (Opcional)</label>
                <Textarea 
                  placeholder="Ex: Foque nos benefícios para pequenas empresas..." 
                  className="resize-none h-24 text-sm"
                />
              </div>

              <Button 
                className="w-full gap-2 mt-4 bg-gradient-to-r from-primary to-secondary text-white border-0" 
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>Gerando...</>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Gerar Conteúdo
                  </>
                )}
              </Button>
              
              <div className="p-4 bg-blue-50 rounded-lg text-xs text-blue-700 leading-relaxed mt-6">
                💡 <strong>Dica:</strong> Selecione um texto no editor para que a IA reescreva ou expanda especificamente aquele trecho.
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Créditos de IA</span>
                <span>850 / 1000</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
