import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Save, 
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

export const NewAuto = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('Judicial');

  const types = ['Judicial', 'Extrajudicial', 'Administrativo'];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Cancelar Cadastro
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-blue text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light transition-all">
          <CheckCircle2 className="w-4 h-4" />
          Criar Novo Auto
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 bg-slate-50/30">
          <h2 className="text-2xl font-bold text-slate-800">Novo Registro de Auto</h2>
          <p className="text-slate-500 text-sm mt-1">Preencha os campos abaixo para protocolar um novo auto no sistema.</p>
        </div>

        <div className="p-8 space-y-8">
          {/* Aba Selector */}
          <div className="flex p-1 bg-slate-100 rounded-2xl w-fit">
            {types.map(t => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-bold transition-all",
                  type === t ? "bg-white text-brand-blue shadow-sm" : "text-slate-500 hover:text-slate-700"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Classe do Auto (Taxonomia CNMP)</label>
              <select className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all font-medium">
                <option>Selecione uma classe...</option>
                <option>Inquérito Civil</option>
                <option>Ação Civil Pública</option>
                <option>Procedimento Preparatório</option>
                <option>Notícia de Fato</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Assunto Principal</label>
              <select className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all font-medium">
                <option>Selecione um assunto...</option>
                <option>Meio Ambiente</option>
                <option>Patrimônio Público</option>
                <option>Consumidor</option>
                <option>Educação</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Unidade / Órgão</label>
              <input 
                type="text" 
                defaultValue="Unidade Padrão"
                className="w-full bg-slate-100 border border-slate-200 px-4 py-3 rounded-xl text-slate-500 font-medium cursor-not-allowed"
                disabled
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Nível de Sigilo</label>
              <select className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all font-medium">
                <option>Público</option>
                <option>Restrito</option>
                <option>Sigilo Pessoal</option>
                <option>Sigilo Absoluto</option>
              </select>
            </div>

            <div className="col-span-full space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Número do Auto (Judicial se aplicável)</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Busque pelo número do Projudi/PJD..."
                  className="w-full bg-slate-50 border border-slate-200 pl-11 pr-4 py-3 rounded-xl outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all font-medium"
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-bold text-orange-900 uppercase tracking-tighter">Atenção ao Sigilo</p>
              <p className="text-xs text-orange-700 leading-relaxed">
                Certifique-se de que o nível de sigilo selecionado está de acordo com as diretrizes do CNMP e da Corregedoria-Geral. Autos com Sigilo Absoluto exigem justificativa fundamentada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
