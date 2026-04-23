import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Plus, 
  Search, 
  Copy, 
  Trash2, 
  Play, 
  Video, 
  Mic, 
  Image as ImageIcon,
  Download,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import { MOCK_MODELOS } from '../mockData';
import { cn } from '../lib/utils';

export const MovementTemplates = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Modelos de Movimentos</h2>
          <p className="text-slate-500 text-sm">Gerencie e utilize textos padronizados para acelerar sua produtividade.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-bold shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light transition-all">
          <Plus className="w-4 h-4" />
          Novo Modelo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_MODELOS.map((modelo) => (
          <div key={modelo.id} className="bg-white border border-[#d1d9e0] rounded-[4px] p-6 hover:border-brand-blue/50 transition-all group flex flex-col h-full shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <span className="text-[10px] font-bold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded uppercase tracking-wider">{modelo.tipo}</span>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-400 hover:text-brand-blue transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="font-bold text-[#2c3e50] text-base mb-2">{modelo.titulo}</h3>
            <p className="text-[13px] text-[#7f8c8d] line-clamp-3 mb-6 flex-1 italic">"{modelo.conteudo}"</p>
            <button className="w-full flex items-center justify-center gap-2 py-2 bg-slate-50 border border-slate-200 rounded-[4px] text-xs font-bold text-slate-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
              <Play className="w-3 h-3" />
              USAR MODELO
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MediaManagement = () => {
  return (
    <div className="space-y-6">
       <div>
          <h2 className="text-2xl font-bold text-slate-800">Gerenciamento de Mídia</h2>
          <p className="text-slate-500 text-sm">Visualização e controle de evidências em áudio e vídeo vinculadas aos movimentos.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: 'Depoimento_Testemunha_01.mp4', type: 'video', size: '156 MB', date: '19/04/2024' },
             { title: 'Audio_Interceptacao_022.mp3', type: 'audio', size: '12 MB', date: '18/04/2024' },
             { title: 'Fotos_Local_Crime.zip', type: 'image', size: '45 MB', date: '15/04/2024' },
             { title: 'Video_Seguranca_Rua_A.mp4', type: 'video', size: '890 MB', date: '12/04/2024' },
           ].map((media, i) => (
             <div key={i} className="bg-white border border-[#d1d9e0] rounded-[4px] overflow-hidden group shadow-sm">
                <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-400 relative">
                   {media.type === 'video' ? <Video className="w-12 h-12 opacity-20" /> : <Mic className="w-12 h-12 opacity-20" />}
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-lg">
                        <Play className="w-4 h-4 translate-x-0.5" />
                      </button>
                   </div>
                </div>
                <div className="p-4">
                   <div className="flex items-start justify-between mb-2">
                      <h4 className="text-[13px] font-bold text-[#2c3e50] line-clamp-1">{media.title}</h4>
                      <MoreVertical className="w-4 h-4 text-slate-400 cursor-pointer" />
                   </div>
                   <div className="flex items-center justify-between text-[11px] font-bold text-[#7f8c8d] uppercase tracking-tighter">
                      <span>{media.size}</span>
                      <span>{media.date}</span>
                   </div>
                   <button className="w-full mt-4 flex items-center justify-center gap-2 py-1.5 bg-slate-50 border border-slate-100 rounded-[4px] text-[10px] font-bold text-slate-500 hover:text-brand-blue transition-colors">
                      <Download className="w-3.5 h-3.5" />
                      DOWNLOAD
                   </button>
                </div>
             </div>
           ))}
        </div>
    </div>
  );
};
