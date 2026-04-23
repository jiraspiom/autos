import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  Signature, 
  Bell, 
  BarChart3, 
  Settings, 
  LogOut, 
  Search,
  BookOpen,
  Mail,
  Users,
  Copy,
  Video,
  FileSearch,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: FileSearch, label: 'Busca Avançada', path: '/busca' },
    { icon: PlusCircle, label: 'Novos Registros', path: '/novo' },
    { icon: FileText, label: 'Livro de Registros', path: '/autos/posse' },
    { icon: Signature, label: 'Pendências de Assinatura', path: '/autos/pendentes' },
    { icon: Mail, label: 'Intimações', path: '/intimacoes' },
    { icon: Copy, label: 'Modelos de Movimento', path: '/modelos' },
    { icon: Video, label: 'Mídia e Evidências', path: '/midia' },
    { icon: BarChart3, label: 'Relatórios', path: '/estatisticas' },
    { icon: Users, label: 'Administração', path: '/admin' },
  ];

  return (
    <aside className="w-[240px] bg-brand-blue-dark text-white flex flex-col h-screen fixed left-0 top-0 z-50">
      <div className="p-6 font-bold text-lg tracking-[2px] border-b border-white/10 flex items-center gap-2">
        AUTOS <span className="text-brand-green text-[10px] items-start flex">v1.1</span>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item, index) => {
          const Icon = item.icon!;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-6 py-3 transition-colors text-[13px] opacity-80",
                isActive 
                  ? "bg-brand-blue opacity-100 border-l-4 border-brand-green" 
                  : "hover:bg-white/5"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="nav-label">{item.label}</span>
              {item.label === 'Intimações' && (
                <div className="ml-auto bg-brand-green rounded-full w-4 h-4 text-[9px] flex items-center justify-center font-bold">12</div>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/10 mt-auto text-[10px] opacity-50 font-medium tracking-tight uppercase">
        Institucional • Gestão de Autos
      </div>
    </aside>
  );
};

export const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-[60px] bg-white border-b border-[#d1d9e0] fixed top-0 right-0 left-[240px] z-40 flex items-center justify-between px-6">
      <div className="flex-1">
        <div className="relative group max-w-[400px]">
          <div className="bg-[#f0f2f5] border border-[#d1d9e0] rounded-[4px] px-3 py-1.5 flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400 opacity-50" />
            <input 
              type="text" 
              placeholder="Pesquisa rápida de autos..."
              className="w-full bg-transparent border-none text-[13px] outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={cn(
              "text-[#7f8c8d] hover:text-[#2c3e50] transition-colors p-1 relative",
              showNotifications && "text-brand-blue"
            )}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-4 w-80 bg-white border border-[#d1d9e0] shadow-2xl rounded-[4px] z-50 overflow-hidden">
               <div className="bg-slate-50 p-4 border-b border-[#d1d9e0] flex items-center justify-between font-bold text-xs uppercase tracking-wider text-[#2c3e50]">
                  <span>NOTIFICAÇÕES (2)</span>
                  <button onClick={() => setShowNotifications(false)} className="text-[#7f8c8d] hover:text-brand-blue"><X className="w-4 h-4" /></button>
               </div>
               <div className="max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors bg-brand-blue/5">
                     <p className="text-[13px] font-bold text-[#2c3e50]">Urgente: Prazo Vencendo</p>
                     <p className="text-[12px] text-[#7f8c8d] mt-1 line-clamp-2">O auto 202400123456 precisa de manifestação em 24h.</p>
                     <span className="text-[10px] text-brand-blue font-bold uppercase mt-2 block">HABILITAR RESPOSTA</span>
                  </div>
                  <div className="p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                     <p className="text-[13px] font-bold text-[#2c3e50]">Manifestação Assinada</p>
                     <p className="text-[12px] text-[#7f8c8d] mt-1 line-clamp-2">Dr. João da Silva assinou a denúncia nos autos 2023.0881.002.</p>
                     <span className="text-[10px] text-slate-400 font-bold uppercase mt-2 block">HÁ 15 MINUTOS</span>
                  </div>
               </div>
               <button className="w-full py-3 text-[11px] font-bold text-brand-blue hover:bg-brand-blue/5 uppercase tracking-widest border-t border-[#d1d9e0]">
                  Ver todas as notificações
               </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 pl-4 border-l border-[#f0f0f0]">
          <div className="text-right flex flex-col">
            <span className="text-[13px] font-bold text-[#2c3e50]">Dr. Ricardo Santos</span>
            <span className="text-[11px] text-[#7f8c8d] font-medium">Promotor de Justiça</span>
          </div>
          <div className="w-8 h-8 rounded-full border border-brand-blue flex items-center justify-center text-brand-blue font-bold text-xs bg-brand-blue/5 shadow-sm">
            RS
          </div>
        </div>
      </div>
    </header>
  );
};
