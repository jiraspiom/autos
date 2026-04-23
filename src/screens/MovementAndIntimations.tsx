import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Save, 
  Signature as SignIcon, 
  FileCheck, 
  FileText, 
  Paperclip, 
  X,
  Bold,
  Italic,
  List,
  Type,
  Mail
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

export const NewMovement = () => {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState('');
  const [content, setContent] = useState('');

  const movementTypes = [
    'Promoção de Arquivamento',
    'Cota Ministerial',
    'Denúncia',
    'Despacho',
    'Manifestação',
    'Ofício',
    'Petição de Juntada',
  ];

  return (
    <div className="space-y-6 pb-20 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Cancelar e Voltar
        </button>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 shadow-sm hover:bg-slate-50">
            <Save className="w-4 h-4" />
            Salvar Rascunho
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-bold shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light transition-all">
            <SignIcon className="w-4 h-4" />
            Assinar e Enviar
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col min-h-[600px]">
        <div className="p-8 border-b border-slate-100 bg-slate-50/30">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Novo Movimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tipo de Movimento (CNMP)</label>
              <select 
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/5 transition-all"
                value={activeType}
                onChange={(e) => setActiveType(e.target.value)}
              >
                <option value="">Selecione o tipo...</option>
                {movementTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Descrição Breve</label>
              <input 
                type="text" 
                placeholder="Ex: Manifestação acerca da réplica..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/5 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Editor Mock */}
        <div className="flex-1 flex flex-col">
          <div className="px-8 py-4 border-b border-slate-100 flex items-center gap-1 bg-slate-50/50">
            <button className="p-2 text-slate-500 hover:text-brand-blue hover:bg-white rounded-lg transition-all"><Bold className="w-4 h-4" /></button>
            <button className="p-2 text-slate-500 hover:text-brand-blue hover:bg-white rounded-lg transition-all"><Italic className="w-4 h-4" /></button>
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            <button className="p-2 text-slate-500 hover:text-brand-blue hover:bg-white rounded-lg transition-all"><List className="w-4 h-4" /></button>
            <button className="p-2 text-slate-500 hover:text-brand-blue hover:bg-white rounded-lg transition-all"><Type className="w-4 h-4" /></button>
            <div className="ml-auto text-[10px] font-bold text-slate-400 uppercase tracking-widest">Editor de Texto ATENA 2.0</div>
          </div>
          <textarea 
            className="flex-1 px-8 py-6 text-slate-800 text-base leading-relaxed outline-none resize-none bg-white placeholder:text-slate-300"
            placeholder="Digite o texto do movimento aqui..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="p-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
             <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-200 transition-all border border-slate-200">
               <Paperclip className="w-3.5 h-3.5" />
               Anexar PDF (Max 10MB)
             </button>
             <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-200 transition-all border border-slate-200">
               <FileText className="w-3.5 h-3.5" />
               Adicionar Documento Médio
             </button>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
               <input type="checkbox" id="diario" className="rounded text-brand-blue focus:ring-brand-blue" />
               <label htmlFor="diario" className="text-xs font-bold text-slate-500 uppercase tracking-tighter cursor-pointer">Publicar no Diário Oficial</label>
             </div>
             <div className="flex items-center gap-2">
               <input type="checkbox" id="consolidar" className="rounded text-brand-blue focus:ring-brand-blue" />
               <label htmlFor="consolidar" className="text-xs font-bold text-slate-500 uppercase tracking-tighter cursor-pointer">Consolidar após assinatura</label>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IntimationsScreen = () => {
  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Intimações Pendentes</h2>
            <p className="text-slate-500 text-sm">Gerencie intimações recebidas via integração PJD/Projudi.</p>
          </div>
          <div className="flex items-center gap-2">
             <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all flex items-center gap-2">
               <FileCheck className="w-4 h-4" />
               Confirmar Leitura em Lote
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 gap-4">
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "bg-white border p-6 rounded-2xl flex items-center justify-between gap-6 group hover:shadow-md transition-all",
                i === 0 ? "border-brand-blue ring-1 ring-brand-blue/10" : "border-slate-200"
              )}
            >
               <div className="flex items-center gap-6">
                 <div className={cn(
                   "w-12 h-12 rounded-xl flex items-center justify-center",
                   i === 0 ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-400"
                 )}>
                   <Mail className={cn("w-6 h-6", i === 0 && "animate-pulse")} />
                 </div>
                 <div>
                   <div className="flex items-center gap-3">
                     <p className="text-sm font-bold text-slate-900">Intimação para Audiência de Instrução - Auto 2024.0099.{i+1234}</p>
                     {i === 0 && <span className="bg-orange-100 text-orange-600 text-[9px] font-bold px-1.5 py-0.5 rounded tracking-tighter uppercase">Novo</span>}
                   </div>
                   <div className="flex items-center gap-4 mt-1">
                      <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1 uppercase tracking-wider">
                        <FileText className="w-3 h-3" />
                        Ação Civil Pública
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wider">
                        <History className="w-3 h-3" />
                        Recebido há {i + 1} horas
                      </span>
                   </div>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                  <button className="text-xs font-bold text-brand-blue px-3 py-1.5 hover:bg-brand-blue/5 rounded-lg transition-all">Visualizar Auto</button>
                  <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-800 transition-all">Confirmar Leitura</button>
               </div>
            </motion.div>
          ))}
       </div>
    </div>
  );
};
