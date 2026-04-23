import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar, Header } from './components/Navigation';
import { Dashboard } from './screens/Dashboard';
import { AutoList } from './screens/AutoList';
import { AutoDetail } from './screens/AutoDetail';
import { NewMovement, IntimationsScreen } from './screens/MovementAndIntimations';
import { NewAuto } from './screens/NewAuto';
import { UserManagement } from './screens/AdminScreens';
import { AdvancedSearch, CustomReports } from './screens/SearchAndReports';
import { MovementTemplates, MediaManagement } from './screens/TemplatesAndMedia';
import { motion, AnimatePresence } from 'motion/react';
import { LogIn } from 'lucide-react';

const Login = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background signals */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 z-10"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-brand-blue rounded-2xl mx-auto flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-brand-blue/30 mb-6">
            A
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">AUTOS</h1>
          <p className="text-slate-400 mt-2 font-medium">Sistema de autos</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-2xl space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Identificação / Login</label>
            <input 
              type="text" 
              placeholder="Digite seu usuário..."
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all font-medium"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Senha de Acesso</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all font-medium"
            />
          </div>
          
          <div className="flex items-center justify-between px-1">
             <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="rounded text-brand-blue focus:ring-brand-blue" />
                <label htmlFor="remember" className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Lembrar-me</label>
             </div>
             <button className="text-xs font-bold text-brand-blue hover:underline">Esqueci minha senha</button>
          </div>

          <button 
            onClick={onLogin}
            className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light transition-all"
          >
            <LogIn className="w-5 h-5" />
            AUTENTICAR NO SISTEMA
          </button>
        </div>

        <div className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          © 2026 • Diretoria de Tecnologia da Informação
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col pl-64">
          <Header />
          <main className="mt-16 p-8 overflow-y-auto">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/novo" element={<NewAuto />} />
                <Route path="/autos/posse" element={<AutoList title="Posse do Órgão" subtitle="Autos que se encontram atualmente vinculados ao seu órgão ministerial." />} />
                <Route path="/autos/pendentes" element={<AutoList title="Aguardando Assinatura" subtitle="Movimentos pendentes de assinatura digital ou revisão." />} />
                <Route path="/autos/assinados" element={<AutoList title="Assinados / Revisados" subtitle="Histórico de autos com movimentos recentemente assinados." />} />
                <Route path="/auto/:id" element={<AutoDetail />} />
                <Route path="/auto/:id/novo-movimento" element={<NewMovement />} />
                <Route path="/intimacoes" element={<IntimationsScreen />} />
                <Route path="/busca" element={<AdvancedSearch />} />
                <Route path="/modelos" element={<MovementTemplates />} />
                <Route path="/midia" element={<MediaManagement />} />
                <Route path="/estatisticas" element={<CustomReports />} />
                <Route path="/admin" element={<UserManagement />} />
                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
