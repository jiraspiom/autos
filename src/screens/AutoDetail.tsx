import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Printer, 
  Share2, 
  FileText, 
  Paperclip, 
  Bell, 
  CheckCircle2, 
  Link as LinkIcon,
  Plus,
  MoreHorizontal,
  Download,
  Eye,
  History,
  Trash2,
  ExternalLink,
  Clock,
  StickyNote
} from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_AUTOS, MOCK_MOVIMENTOS, MOCK_TAREFAS } from '../mockData';
import { cn } from '../lib/utils';

export const AutoDetail = () => {
  const { id } = useParams();
  const auto = MOCK_AUTOS.find(a => a.id === id) || MOCK_AUTOS[0];
  const [activeTab, setActiveTab] = useState('movimentos');

  const tabs = [
    { id: 'movimentos', label: 'Movimentos', count: 12 },
    { id: 'anexos', label: 'Anexos / Documentos', count: 15 },
    { id: 'intimacoes', label: 'Intimações', count: 2 },
    { id: 'tarefas', label: 'Post-it', count: MOCK_TAREFAS.length },
    { id: 'historico', label: 'Histórico Completo', count: 0 },
    { id: 'vinculados', label: 'Projudi (TJGO)', count: 1 },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Top Bar with Back and Actions */}
      <div className="flex items-center justify-between">
        <Link 
          to="/autos/posse" 
          className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Posse do Órgão
        </Link>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 shadow-sm hover:bg-slate-50">
            <Printer className="w-4 h-4" />
            Imprimir Capa
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-bold shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light transition-all">
            <Plus className="w-4 h-4" />
            Novo Movimento
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
        {/* Accent decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full opacity-50"></div>
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-slate-900 tracking-tight">{auto.numero}</span>
              <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-wide">
                <CheckCircle2 className="w-3 h-3" />
                Digital
              </span>
              <span className={cn(
                "text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wide",
                auto.sigilo === 'Público' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
              )}>
                {auto.sigilo}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Classe do Auto</p>
                <p className="text-sm font-bold text-slate-800">{auto.classe}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Órgão / Promotoria</p>
                <p className="text-sm font-bold text-slate-800">{auto.órgão}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Assunto Principal</p>
                <p className="text-sm font-bold text-slate-800">{auto.assunto}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Posse Atual</p>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  {auto.posse}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner w-full md:w-auto">
             <div className="space-y-3">
                <div className="flex items-center justify-between gap-8">
                  <span className="text-xs text-slate-500 font-medium tracking-tight">Data de Ingresso:</span>
                  <span className="text-xs font-bold text-slate-800">{auto.dataIngressso}</span>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span className="text-xs text-slate-500 font-medium tracking-tight">Relevância:</span>
                  <span className="text-xs font-bold text-red-600 uppercase">Institucional</span>
                </div>
                <div className="h-px bg-slate-200"></div>
                <button className="flex items-center gap-2 text-brand-blue text-xs font-bold hover:underline">
                  <LinkIcon className="w-3.5 h-3.5" />
                  Ver Processo no TJGO (Projudi)
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-slate-200 flex flex-wrap gap-8 px-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "pb-4 text-xs font-bold uppercase tracking-widest transition-all relative",
              activeTab === tab.id 
                ? "text-brand-blue" 
                : "text-slate-400 hover:text-slate-600"
            )}
          >
            {tab.label}
            {tab.count > 0 && (
              <span className={cn(
                "ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold",
                activeTab === tab.id ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-500"
              )}>
                {tab.count}
              </span>
            )}
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === 'movimentos' && (
            <motion.div 
              key="movimentos"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              {MOCK_MOVIMENTOS.map((mov, index) => (
                <div key={mov.id} className="relative pl-8 group">
                  {/* Timeline Line */}
                  {index < MOCK_MOVIMENTOS.length - 1 && (
                    <div className="absolute left-3 top-8 bottom-0 w-px bg-slate-200"></div>
                  )}
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-slate-200 bg-white group-hover:border-brand-blue transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 bg-slate-200 rounded-full group-hover:bg-brand-blue transition-colors"></div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-brand-blue/30 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-base font-bold text-slate-900">{mov.tipo}</h4>
                          <span className={cn(
                            "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase",
                            mov.status === 'Consolidado' ? 'bg-brand-blue text-white' : 'bg-slate-200 text-slate-600'
                          )}>
                            {mov.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 font-medium flex items-center gap-2">
                          <span className="font-bold text-slate-700">{mov.autor}</span>
                          • {new Date(mov.data).toLocaleString('pt-BR')}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-brand-blue hover:bg-slate-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2 italic">{mov.resumo}</p>
                    
                    {mov.anexos.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {mov.anexos.map(anexo => (
                          <div key={anexo.id} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:border-brand-blue/30 transition-all cursor-pointer group/file">
                            <FileText className="w-3.5 h-3.5 text-red-500" />
                            <span>{anexo.nome}</span>
                            <span className="text-[10px] text-slate-400">({anexo.tamanho})</span>
                            <Download className="w-3.5 h-3.5 opacity-0 group-hover/file:opacity-100 transition-opacity ml-1" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'tarefas' && (
            <motion.div 
               key="tarefas"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
               <div className="bg-[#fff9c4] border border-[#fbc02d] rounded-[4px] p-6 shadow-sm min-h-[200px] flex flex-col group relative">
                  <StickyNote className="absolute top-2 right-2 w-4 h-4 text-[#fbc02d]/50" />
                  <div className="flex-1">
                     <p className="text-[13px] font-bold text-[#5d4037] mb-2 uppercase tracking-tighter">Lembrete Interno</p>
                     <p className="text-sm text-[#5d4037] italic">"Revisar o depoimento da testemunha X antes da audiência de instrução na próxima terça."</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#fbc02d]/20 flex items-center justify-between">
                     <span className="text-[10px] font-bold text-[#5d4037]/50 uppercase tracking-widest">19/04/2024</span>
                     <button className="text-red-600 hover:text-red-800 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
               </div>

                <div className="bg-white border border-[#d1d9e0] rounded-[4px] p-6 shadow-sm flex flex-col gap-4">
                  <h4 className="text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Tarefas da Equipe</h4>
                  <div className="space-y-3 flex-1 overflow-y-auto">
                     {MOCK_TAREFAS.map((t: any) => (
                       <div key={t.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-[4px] group">
                          <input type="checkbox" checked={t.concluida} readOnly className="rounded-[2px] border-slate-200 text-brand-blue focus:ring-0" />
                          <div className="flex-1 min-w-0">
                             <p className={cn("text-[13px] font-medium truncate", t.concluida ? "text-slate-400 line-through" : "text-[#2c3e50]")}>{t.texto}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase">{t.data}</p>
                          </div>
                       </div>
                     ))}
                  </div>
                  <button className="w-full py-2 bg-slate-900 text-white rounded-[4px] text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2">
                     <Plus className="w-3.5 h-3.5" />
                     Adicionar Tarefa
                  </button>
               </div>
            </motion.div>
          )}

          {activeTab === 'historico' && (
            <motion.div 
               key="historico"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="space-y-6"
            >
               <h4 className="text-[13px] font-bold text-[#2c3e50] uppercase tracking-tight">Timeline Completa de Tramitação</h4>
               <div className="relative pl-6 space-y-8">
                  <div className="absolute left-2.5 top-2 bottom-2 w-px bg-slate-100"></div>
                  {[
                    { title: 'Remessa ao Tribunal de Justiça', user: 'Ricardo Santos', date: '19/04/2024 09:12', type: 'out' },
                    { title: 'Recebimento de Intimação via Projudi', user: 'Sistema Autos', date: '18/04/2024 18:30', type: 'in' },
                    { title: 'Publicação em Diário Oficial', user: 'Ana Paula Lima', date: '15/04/2024 11:45', type: 'system' },
                  ].map((h, i) => (
                    <div key={i} className="relative group">
                       <div className="absolute -left-6 top-1 w-5 h-5 rounded-full border-2 border-slate-100 bg-white z-10 group-hover:border-brand-blue transition-colors flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-blue transition-colors"></div>
                       </div>
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pl-4">
                          <div>
                             <p className="text-sm font-bold text-[#2c3e50]">{h.title}</p>
                             <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[11px] text-slate-500 font-medium">Por: <strong className="text-slate-700">{h.user}</strong></span>
                             </div>
                          </div>
                          <span className="text-[11px] font-bold text-[#7f8c8d] uppercase bg-slate-100 px-2 py-0.5 rounded shrink-0">{h.date}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {activeTab === 'vinculados' && (
            <motion.div 
               key="vinculados"
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               className="space-y-6"
            >
               <div className="bg-white border border-[#d1d9e0] rounded-[4px] p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#004a80] rounded-[4px] flex items-center justify-center text-white font-black text-xs">PJD</div>
                        <div>
                           <h4 className="text-[13px] font-bold text-[#2c3e50]">Integração Projudi / TJGO</h4>
                           <p className="text-[11px] text-[#7f8c8d]">Conexão estabelecida via Webservice do Tribunal.</p>
                        </div>
                     </div>
                     <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-[4px] text-[11px] font-bold text-[#2c3e50] hover:bg-slate-100 transition-all">
                        <ExternalLink className="w-3.5 h-3.5" />
                        ABRIR NO PROJUDI
                     </button>
                  </div>

                                       <div className="p-4 bg-slate-50 rounded-[4px] border border-slate-100">
                        <p className="text-[11px] font-bold text-[#7f8c8d] uppercase mb-2">Processo Vinculado</p>
                        <div className="flex items-center justify-between">
                           <span className="text-base font-black text-[#2c3e50]">5432109-87.2024.8.09.0051</span>
                           <span className="bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-widest uppercase">RECONHECIDO</span>
                        </div>
                        <div className="mt-4 flex items-center gap-6">
                           <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">Última Sincronização</p>
                              <p className="text-xs font-bold text-slate-700">Há 45 minutos</p>
                           </div>
                           <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">Status Projudi</p>
                              <p className="text-xs font-bold text-slate-700">Aguardando Conclusão</p>
                           </div>
                        </div>
                     </div>

                     <button className="w-full py-3 bg-brand-blue text-white rounded-[4px] font-bold text-xs hover:bg-brand-blue-dark shadow-sm transition-all flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        REALIZAR PETICIONAMENTO DIRETO
                     </button>
                  </div>
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Action Buttons Area for specific detailed actions */}
      <div className="fixed bottom-8 right-8 z-30 flex flex-col gap-3">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 pr-6"
        >
          <div className="bg-white/10 p-2 rounded-full">
            <Plus className="w-5 h-5" />
          </div>
          <span className="text-sm font-bold">Novo Movimento</span>
        </motion.button>
      </div>
    </div>
  );
};
