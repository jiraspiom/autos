import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  X, 
  CheckCircle2, 
  AlertCircle,
  Lock,
  Globe,
  Eye,
  FileSignature
} from 'lucide-react';
import { cn } from '../lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const BaseModal = ({ isOpen, onClose, title, children }: ModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white w-full max-w-lg rounded-[4px] shadow-2xl overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-[#2c3e50] uppercase tracking-wider text-xs">{title}</h3>
            <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded transition-colors text-slate-400">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export const SecrecyModal = ({ isOpen, onClose, currentSigilo, targetSigilo }: any) => (
  <BaseModal isOpen={isOpen} onClose={onClose} title="Confirmação de Alteração de Sigilo">
    <div className="space-y-6">
      <div className="flex items-center gap-4 p-4 bg-orange-50 border border-orange-100 rounded-[4px]">
        <ShieldAlert className="w-8 h-8 text-orange-600 shrink-0" />
        <div>
          <h4 className="text-sm font-bold text-orange-900">Atenção ao Nível de Sigilo</h4>
          <p className="text-xs text-orange-700">Você está alterando o sigilo de <strong className="uppercase">{currentSigilo}</strong> para <strong className="uppercase">{targetSigilo}</strong>.</p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-[#2c3e50]">Esta ação afetará a visibilidade do auto por outros órgãos e pelos advogados via integração externa. Deseja prosseguir?</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border border-slate-100 rounded-[4px] text-center bg-slate-50">
             <Globe className="w-5 h-5 mx-auto mb-2 text-slate-400" />
             <p className="text-[10px] font-bold text-slate-500 uppercase">Visibilidade Atual</p>
             <p className="font-bold text-slate-800">{currentSigilo}</p>
          </div>
          <div className="p-4 border border-brand-blue/20 rounded-[4px] text-center bg-brand-blue/5">
             <Lock className="w-5 h-5 mx-auto mb-2 text-brand-blue" />
             <p className="text-[10px] font-bold text-brand-blue uppercase">Nova Visibilidade</p>
             <p className="font-bold text-brand-blue">{targetSigilo}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4">
        <button onClick={onClose} className="flex-1 py-2 bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-widest rounded-[4px] hover:bg-slate-100">Cancelar</button>
        <button onClick={onClose} className="flex-1 py-2 bg-brand-blue text-white font-bold text-xs uppercase tracking-widest rounded-[4px] hover:bg-brand-blue-dark">Confirmar Alteração</button>
      </div>
    </div>
  </BaseModal>
);

export const ConsolidationModal = ({ isOpen, onClose, autoId }: any) => (
  <BaseModal isOpen={isOpen} onClose={onClose} title="Consolidação de Movimento">
    <div className="space-y-6 text-center">
      <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto text-brand-blue">
         <FileSignature className="w-8 h-8" />
      </div>
      
      <div>
        <h4 className="text-lg font-bold text-[#2c3e50]">Confirmar Consolidação?</h4>
        <p className="text-sm text-slate-500 mt-2">Uma vez consolidado, o movimento será publicado e não poderá mais ser editado no rascunho.</p>
      </div>

      <div className="bg-slate-50 p-4 rounded-[4px] text-left space-y-2 border border-slate-100">
         <div className="flex justify-between text-xs">
            <span className="text-slate-500 font-medium">Auto:</span>
            <span className="font-bold text-[#2c3e50]">2024.0012.3456</span>
         </div>
         <div className="flex justify-between text-xs">
            <span className="text-slate-500 font-medium">Tipo:</span>
            <span className="font-bold text-[#2c3e50]">Parecer de Mérito</span>
         </div>
         <div className="flex justify-between text-xs">
            <span className="text-slate-500 font-medium">Data:</span>
            <span className="font-bold text-[#2c3e50]">19/04/2024 14:20</span>
         </div>
      </div>

      <div className="flex items-center gap-3 pt-4">
        <button onClick={onClose} className="flex-1 py-2 bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-widest rounded-[4px] hover:bg-slate-100">Revisar</button>
        <button onClick={onClose} className="flex-1 py-2 bg-brand-blue text-white font-bold text-xs uppercase tracking-widest rounded-[4px] hover:bg-brand-blue-dark shadow-lg shadow-brand-blue/20">CONSOLIDAR E TRAMITAR</button>
      </div>
    </div>
  </BaseModal>
);
