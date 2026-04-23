import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  BarChart3, 
  FileDown, 
  Calendar,
  User,
  Hash,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  PieChart
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { MOCK_STATS_PRODUTIVIDADE } from '../mockData';
import { cn } from '../lib/utils';

export const AdvancedSearch = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Busca Avançada Global</h2>
        <p className="text-slate-500 text-sm">Refine sua busca utilizando múltiplos critérios de filtragem.</p>
      </div>

      <div className="bg-white border border-[#d1d9e0] rounded-[4px] p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Número do Auto</label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Ex: 2024.001..." className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-[4px] outline-none focus:border-brand-blue transition-all" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Promotor / Responsável</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Nome do promotor..." className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-[4px] outline-none focus:border-brand-blue transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Classe CNMP</label>
            <select className="w-full px-4 py-2 border border-slate-200 rounded-[4px] outline-none focus:border-brand-blue transition-all">
              <option>Todas</option>
              <option>Inquérito Civil</option>
              <option>Ação Civil Pública</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Data de Ingressso (De)</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="date" className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-[4px] outline-none focus:border-brand-blue transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Data de Ingressso (Até)</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="date" className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-[4px] outline-none focus:border-brand-blue transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Nível de Sigilo</label>
            <div className="relative">
              <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-[4px] outline-none focus:border-brand-blue transition-all appearance-none">
                <option>Todos</option>
                <option>Público</option>
                <option>Sigilo Absoluto</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <button className="px-6 py-2 text-slate-500 font-bold hover:text-slate-800 transition-all uppercase text-xs">Limpar</button>
          <button className="px-8 py-2 bg-brand-blue text-white rounded-[4px] font-bold flex items-center gap-2 hover:bg-brand-blue-dark shadow-lg shadow-brand-blue/10 transition-all">
            <Search className="w-4 h-4" />
            REALIZAR BUSCA
          </button>
        </div>
      </div>
    </div>
  );
};

export const CustomReports = () => {
  const COLORS = ['#003366', '#004a80', '#2ecc71', '#e67e22', '#e74c3c'];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Relatórios e Estatísticas</h2>
          <p className="text-slate-500 text-sm">Análise de produtividade e métricas de tramitação do órgão.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d1d9e0] rounded-[4px] text-xs font-bold text-[#2c3e50] hover:bg-slate-50 transition-all">
          <FileDown className="w-4 h-4" />
          EXPORTAR PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:flex-row lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 border border-[#d1d9e0] rounded-[4px]">
           <p className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider mb-2">Média de Resposta</p>
           <p className="text-2xl font-bold text-brand-blue">4.5 dias</p>
           <div className="mt-4 flex items-center gap-1 text-[11px] text-brand-green font-bold">
              <TrendingUp className="w-3 h-3" />
              12% melhor que o mês anterior
           </div>
        </div>
        <div className="bg-white p-6 border border-[#d1d9e0] rounded-[4px]">
           <p className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider mb-2">Novas Denúncias</p>
           <p className="text-2xl font-bold text-brand-blue">18</p>
           <p className="text-[11px] text-[#7f8c8d] font-medium mt-4 italic">No período selecionado</p>
        </div>
        <div className="bg-white p-6 border border-[#d1d9e0] rounded-[4px]">
           <p className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider mb-2">Taxa de Arquivamento</p>
           <p className="text-2xl font-bold text-brand-blue">24%</p>
           <p className="text-[11px] text-[#7f8c8d] font-medium mt-4 italic">Conformidade CNMP</p>
        </div>
        <div className="bg-white p-6 border border-[#d1d9e0] rounded-[4px]">
           <p className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider mb-2">Total de Movimentos</p>
           <p className="text-2xl font-bold text-brand-blue">412</p>
           <p className="text-[11px] text-[#7f8c8d] font-medium mt-4 italic">Assinados e Consolidados</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 border border-[#d1d9e0] rounded-[4px]">
           <h3 className="font-bold text-[14px] text-[#2c3e50] mb-8 uppercase tracking-tight flex items-center gap-2">
             <TrendingUp className="w-4 h-4 text-brand-blue" />
             Volume de Movimentos por Dia
           </h3>
           <div className="h-72">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={MOCK_STATS_PRODUTIVIDADE}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="dia" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                 <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                 <Tooltip cursor={{ fill: '#f8fafc' }} />
                 <Bar dataKey="movimentos" radius={[4, 4, 0, 0]}>
                   {MOCK_STATS_PRODUTIVIDADE.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-white p-6 border border-[#d1d9e0] rounded-[4px] flex flex-col">
           <h3 className="font-bold text-[14px] text-[#2c3e50] mb-8 uppercase tracking-tight flex items-center gap-2">
             <PieChart className="w-4 h-4 text-brand-blue" />
             Distribuição por Classe
           </h3>
           <div className="flex-1 space-y-4">
              {[
                { label: 'Inquérito Civil', value: 45, color: 'bg-[#003366]' },
                { label: 'Ação Civil Pública', value: 30, color: 'bg-[#004a80]' },
                { label: 'Criminal', value: 15, color: 'bg-[#2ecc71]' },
                { label: 'Administrativo', value: 10, color: 'bg-[#e67e22]' },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                   <div className="flex justify-between text-xs font-bold text-[#2c3e50]">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                   </div>
                   <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full", item.color)} style={{ width: `${item.value}%` }}></div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
