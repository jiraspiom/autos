import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Signature, 
  Mail, 
  Activity, 
  ArrowUpRight,
  Clock,
  ExternalLink
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { MOCK_STATS_PRODUTIVIDADE, MOCK_AUTOS } from '../mockData';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const StatCard = ({ label, value, color, percent }: any) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="metric-card bg-white border border-[#d1d9e0] p-4 rounded-[4px] shadow-none flex flex-col"
  >
    <span className="metric-label text-[11px] uppercase text-[#7f8c8d] font-semibold tracking-[0.5px]">
      {label}
    </span>
    <span className={cn("metric-val text-2xl font-bold my-1 text-brand-blue")}>
      {value}
    </span>
    <div className="h-[3px] w-full bg-[#eee] mt-2">
      <div className={cn("h-full", color)} style={{ width: `${percent}%` }}></div>
    </div>
  </motion.div>
);

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* Top Metrics Row - Span across all columns */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          label="Autos em Posse" 
          value="42" 
          color="bg-brand-blue" 
          percent={60}
        />
        <StatCard 
          label="Aguardando Assinatura" 
          value="08" 
          color="bg-brand-green" 
          percent={20}
        />
        <StatCard 
          label="Intimações Pendentes" 
          value="15" 
          color="bg-orange-500" 
          percent={40}
        />
        <StatCard 
          label="Movimentos Hoje" 
          value="124" 
          color="bg-brand-blue-dark" 
          percent={85}
        />
      </div>

      {/* Main Content Areas */}
      <div className="lg:col-span-2 space-y-5">
        <div className="card bg-white border border-[#d1d9e0] rounded-[4px] overflow-hidden flex flex-col">
          <div className="card-header px-6 py-3 border-b border-[#d1d9e0] font-bold text-[14px] flex justify-between items-center bg-white">
            <span>Lista de Autos Recentes</span>
            <Link to="/autos/posse" className="font-normal text-[12px] text-brand-blue hover:underline">Ver todos</Link>
          </div>
          <div className="overflow-hidden">
            <div className="grid grid-cols-[100px_1fr_100px] px-6 py-2.5 bg-[#f8fafc] border-b border-[#f0f0f0] font-bold text-[11px] uppercase text-[#7f8c8d]">
              <div>NÚMERO</div>
              <div>ASSUNTO / CLASSE</div>
              <div>SIGILO</div>
            </div>
            {MOCK_AUTOS.map((auto) => (
              <Link 
                key={auto.id}
                to={`/auto/${auto.id}`}
                className="grid grid-cols-[100px_1fr_100px] px-6 py-3 border-b border-[#f0f0f0] last:border-b-0 text-[13px] hover:bg-slate-50 transition-colors"
              >
                <div className="font-bold text-[#2c3e50]">{auto.numero}</div>
                <div className="flex items-center gap-2 truncate">
                  <span className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded font-bold uppercase shrink-0",
                    auto.tipo === 'Judicial' ? 'bg-[#cce5ff] text-[#004085]' : 'bg-[#d1e7dd] text-[#0f5132]'
                  )}>
                    {auto.tipo === 'Judicial' ? 'JUDICIAL' : auto.tipo === 'Extrajudicial' ? 'EXTRA' : 'ADMIN'}
                  </span>
                  <span className="truncate">{auto.assunto} - {auto.classe}</span>
                </div>
                <div>
                  <span className={cn(
                    "tag text-[10px] px-1.5 py-0.5 rounded font-bold uppercase",
                    auto.sigilo === 'Restrito' ? 'tag-restrito bg-[#fff3cd] text-[#856404]' : 
                    auto.sigilo === 'Público' ? 'bg-slate-100 text-slate-600' : 'bg-red-100 text-red-700'
                  )}>
                    {auto.sigilo === 'Sigilo Absoluto' ? 'SIGILO ABS.' : auto.sigilo}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Batch Card */}
        <div className="card bg-white border border-[#d1d9e0] rounded-[4px] overflow-hidden">
          <div className="card-header px-6 py-3 border-b border-[#d1d9e0] font-bold text-[14px] bg-white">
             Pendências de Assinatura (Lote Disponível)
          </div>
          <div className="flex px-6 py-3 gap-4 items-center bg-[#fffdf0] border-b border-[#ffeeba]">
            <input type="checkbox" className="rounded-[2px]" />
            <span className="text-[13px] text-[#2c3e50]">
              <strong>Selecionar todos (8 documentos)</strong>
            </span>
            <button className="bg-brand-blue text-white border-none py-1.5 px-3 rounded-[4px] text-[12px] font-bold cursor-pointer hover:bg-brand-blue-dark transition-colors">
              Assinar em Lote
            </button>
          </div>
          <div className="table-row grid grid-cols-[80px_1fr_100px] px-6 py-2.5 border-b border-[#f0f0f0] text-[13px]">
            <div className="flex items-center gap-2"><input type="checkbox" className="rounded-[2px]" /> 10:24</div>
            <div className="font-medium">Minuta de Denúncia - Autos 202400123456</div>
            <div className="text-right text-slate-400">
               <span className="tag-pendente bg-[#f8d7da] text-[#721c24] text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">REVISÃO</span>
            </div>
          </div>
          <div className="table-row grid grid-cols-[80px_1fr_100px] px-6 py-2.5 border-b border-[#f0f0f0] last:border-b-0 text-[13px]">
            <div className="flex items-center gap-2"><input type="checkbox" className="rounded-[2px]" /> 09:15</div>
            <div className="font-medium">Parecer Final - Autos 202300987654</div>
            <div className="text-right text-slate-400">
               <span className="tag-pendente bg-[#f8d7da] text-[#721c24] text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">URGENTE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-5">
        <div className="card bg-white border border-[#d1d9e0] rounded-[4px] overflow-hidden">
          <div className="card-header px-6 py-3 border-b border-[#d1d9e0] font-bold text-[14px] bg-white">
            Produtividade Semanal
          </div>
          <div className="h-[180px] p-4 flex items-end justify-around gap-2">
            {[40, 65, 50, 90, 75, 30, 10].map((h, i) => (
              <div 
                key={i} 
                className={cn("bar w-[12%] rounded-t-[2px] opacity-80", i > 4 ? "bg-orange-400" : "bg-brand-blue")} 
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
          <div className="p-4 border-t border-[#d1d9e0]">
            <div className="text-[11px] font-bold text-[#7f8c8d] uppercase mb-2 tracking-wider">RESUMO DE ATIVIDADES</div>
            <div className="space-y-1.5 text-[13px] text-[#2c3e50]">
              <div className="flex justify-between"><span>Pareceres</span><strong>24</strong></div>
              <div className="flex justify-between"><span>Denúncias</span><strong>07</strong></div>
              <div className="flex justify-between border-t border-slate-100 pt-1.5 mt-1.5"><span>Arquivamentos</span><strong>12</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
