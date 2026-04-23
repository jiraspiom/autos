import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  History, 
  MoreVertical,
  ChevronDown,
  Download,
  AlertCircle
} from 'lucide-react';
import { MOCK_AUTOS } from '../mockData';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface AutoListProps {
  title: string;
  subtitle: string;
}

export const AutoList = ({ title, subtitle }: AutoListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          <p className="text-slate-500 text-sm">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" />
            Exportar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-bold shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light transition-all">
            Novo Registro
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Filtro rápido na lista..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue/30 transition-all font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:border-slate-300">
              <Filter className="w-3.5 h-3.5" />
              Filtros Avançados
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:border-slate-300">
              Classe: Todas
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider w-10">
                  <input type="checkbox" className="rounded-[2px] border-[#d1d9e0]" />
                </th>
                <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Número do Auto</th>
                <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Assunto / Classe</th>
                <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Último Movimento</th>
                <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_AUTOS.map((auto) => (
                <motion.tr 
                  key={auto.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-slate-50 group transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded-[2px] border-[#d1d9e0]" />
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/auto/${auto.id}`} className="block">
                      <span className="text-[13px] font-bold text-[#2c3e50] group-hover:text-brand-blue transition-colors">
                        {auto.numero}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        {auto.relevancia && (
                           <span className="text-[10px] bg-[#f8d7da] text-[#721c24] font-bold px-1.5 py-0.5 rounded uppercase tracking-tight">
                             Urgente
                           </span>
                        )}
                        <span className={cn(
                          "text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tight",
                          auto.sigilo === 'Público' ? 'bg-slate-100 text-slate-600' : 
                          auto.sigilo === 'Restrito' ? 'bg-[#fff3cd] text-[#856404]' : 'bg-red-100 text-red-700'
                        )}>
                          {auto.sigilo}
                        </span>
                        {auto.status === 'Físico' ? (
                          <span className="text-[10px] bg-slate-900 text-white font-bold px-1.5 py-0.5 rounded uppercase tracking-tight">Físico</span>
                        ) : (
                          <span className="text-[10px] bg-brand-blue text-white font-bold px-1.5 py-0.5 rounded uppercase tracking-tight">Digital</span>
                        )}
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded font-bold uppercase shrink-0",
                          auto.tipo === 'Judicial' ? 'bg-[#cce5ff] text-[#004085]' : 'bg-[#d1e7dd] text-[#0f5132]'
                        )}>
                          {auto.tipo === 'Judicial' ? 'JUDICIAL' : auto.tipo === 'Extrajudicial' ? 'EXTRA' : 'ADMIN'}
                        </span>
                        <p className="text-[13px] text-[#2c3e50] font-medium truncate">{auto.classe}</p>
                      </div>
                      <p className="text-[12px] text-[#7f8c8d] truncate">{auto.assunto}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-700 font-medium">{auto.ultimoMovimento}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <History className="w-3 h-3" />
                        {auto.dataUltimoMovimento}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight",
                      auto.status === 'Digital' ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-700/10' : 'bg-slate-100 text-slate-600'
                    )}>
                      {auto.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination mock */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Mostrando 3 de 45 autos</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded-md disabled:opacity-50" disabled>Anterior</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded-md">Próxima</button>
          </div>
        </div>
      </div>
    </div>
  );
};
