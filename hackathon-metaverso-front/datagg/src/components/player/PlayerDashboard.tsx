import { PlayerSidebar } from "./PlayerSidebar";
import { Edit2, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export function PlayerDashboard() {
  const performanceData = [
    { metric: "Foco", value: 87 },
    { metric: "Técnica", value: 92 },
    { metric: "Comunicação", value: 78 },
    { metric: "Humor", value: 85 },
  ];

  const timelineData = [
    { date: "29/10", focus: 75 },
    { date: "30/10", focus: 78 },
    { date: "31/10", focus: 82 },
    { date: "01/11", focus: 87 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex">
      <PlayerSidebar />
      
      <div className="flex-1 ml-[240px] p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[#FDFDFD]" style={{ fontSize: '32px' }}>
              Bem-vindo, Rebecca 👋
            </h1>
            <p className="text-[#B3AAFF] mt-2">
              Acompanhe seu desempenho e evolução
            </p>
          </div>
          <button className="px-6 py-3 rounded-lg bg-[#380361]/30 border border-[#49007F]/50 text-[#B3AAFF] hover:bg-[#380361]/50 transition-colors flex items-center gap-2">
            <Edit2 size={18} />
            Editar Dados
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-6 rounded-2xl border border-[#B3AAFF]/20">
            <p className="text-[#B3AAFF] mb-2">⚡ Energia do dia</p>
            <p className="text-[#FDFDFD]" style={{ fontSize: '32px' }}>Alta</p>
          </div>
          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-6 rounded-2xl border border-[#B3AAFF]/20">
            <p className="text-[#B3AAFF] mb-2">🎯 Foco</p>
            <p className="text-[#FDFDFD]" style={{ fontSize: '32px' }}>87%</p>
          </div>
          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-6 rounded-2xl border border-[#B3AAFF]/20">
            <p className="text-[#B3AAFF] mb-2">😎 Humor</p>
            <p className="text-[#FDFDFD]" style={{ fontSize: '32px' }}>4/5</p>
          </div>
          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-6 rounded-2xl border border-[#B3AAFF]/20">
            <p className="text-[#B3AAFF] mb-2">🕹️ Último treino</p>
            <p className="text-[#FDFDFD]" style={{ fontSize: '20px' }}>Ontem</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-[#380361]/30 p-6 rounded-2xl border border-[#49007F]/50">
            <h3 className="text-[#FDFDFD] mb-6">Métricas de Desempenho</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#49007F" />
                <XAxis dataKey="metric" stroke="#B3AAFF" />
                <YAxis stroke="#B3AAFF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#380361', 
                    border: '1px solid #B3AAFF',
                    borderRadius: '8px',
                    color: '#FDFDFD'
                  }}
                />
                <Bar dataKey="value" fill="#B3AAFF" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-[#380361]/30 p-6 rounded-2xl border border-[#49007F]/50">
            <h3 className="text-[#FDFDFD] mb-6">Evolução do Foco</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#49007F" />
                <XAxis dataKey="date" stroke="#B3AAFF" />
                <YAxis stroke="#B3AAFF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#380361', 
                    border: '1px solid #B3AAFF',
                    borderRadius: '8px',
                    color: '#FDFDFD'
                  }}
                />
                <Line type="monotone" dataKey="focus" stroke="#B3AAFF" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-6 rounded-2xl border border-[#B3AAFF]/20 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-[40px]">👾</span>
              <div>
                <h3 className="text-[#FDFDFD] mb-2">Insight da IA</h3>
                <p className="text-[#B3AAFF]">
                  Seu foco aumentou 12% em relação à semana passada. Continue nesse ritmo!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-400 mt-4">
              <TrendingUp size={20} />
              <span>Tendência positiva</span>
            </div>
          </div>

          <div className="bg-[#380361]/30 p-6 rounded-2xl border border-[#49007F]/50">
            <h3 className="text-[#FDFDFD] mb-4">Recomendações Automáticas</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#49007F]/20">
                <p className="text-[#B3AAFF]">
                  💪 Priorize treinos coletivos nos próximos 3 dias
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#49007F]/20">
                <p className="text-[#B3AAFF]">
                  😴 Mantenha 7-8h de sono para performance ideal
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#49007F]/20">
                <p className="text-[#B3AAFF]">
                  🎯 Continue com aquecimento de 20min antes de treinar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
