import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  UserPlus, 
  Shield, 
  Edit2, 
  Trash2, 
  Search,
  CheckCircle,
  XCircle,
  ShieldAlert
} from 'lucide-react';
import { MOCK_USUARIOS } from '../mockData';
import { cn } from '../lib/utils';

export const UserManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Gerenciamento de Usuários</h2>
          <p className="text-slate-500 text-sm">Controle de acessos e permissões por perfil de usuário.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-bold shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light transition-all">
          <UserPlus className="w-4 h-4" />
          Novo Usuário
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-[4px] shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por nome ou CPF..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-[4px] text-sm outline-none"
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white border-b border-slate-100">
              <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Usuário</th>
              <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Perfil / Cargo</th>
              <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider">Setor</th>
              <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider text-center">Status</th>
              <th className="px-6 py-3 text-[11px] font-bold text-[#7f8c8d] uppercase tracking-wider text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_USUARIOS.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold text-xs">
                      {user.nome.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#2c3e50]">{user.nome}</p>
                      <p className="text-[11px] text-[#7f8c8d]">CPF: ***.452.121-**</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-brand-green" />
                    <span className="text-[13px] font-medium text-[#2c3e50]">{user.cargo}</span>
                  </div>
                  <span className="text-[11px] font-bold text-brand-blue uppercase tracking-tight">{user.perfil}</span>
                </td>
                <td className="px-6 py-4 text-[13px] text-[#7f8c8d]">
                  {user.setor}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-brand-green/10 text-brand-green">
                    <CheckCircle className="w-3 h-3" />
                    Ativo
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-[#7f8c8d] hover:text-brand-blue transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-[#7f8c8d] hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border border-red-100 p-4 rounded-[4px] flex items-start gap-4">
        <ShieldAlert className="w-5 h-5 text-red-600 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-red-900">Segurança de Acesso</h4>
          <p className="text-xs text-red-700">Qualquer alteração de perfil de 'Administrador' gera log de auditoria imediato na corregedoria-geral. Certifique-se da necessidade da alteração.</p>
        </div>
      </div>
    </div>
  );
};
