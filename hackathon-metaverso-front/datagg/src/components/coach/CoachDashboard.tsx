import { useLocation } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Users, FileCheck, FileText, Calendar } from "lucide-react";

export function CoachDashboard() {
  const location = useLocation();
  const coachName = location.state?.coachName || "Marcus";
  
  const stats = [
    { 
      label: "Jogadores Ativos", 
      value: "5", 
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100"
    },
    { 
      label: "Avaliações Concluídas", 
      value: "23", 
      icon: FileCheck,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100"
    },
    { 
      label: "Relatórios Gerados", 
      value: "12", 
      icon: FileText,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100"
    },
    { 
      label: "Última Atualização", 
      value: "02/11/2025", 
      icon: Calendar,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-100"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex">
      <Sidebar userType="coach" />
      
      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#FDFDFD]" style={{ fontSize: '36px' }}>
            Painel Geral do Coach 👋
          </h1>
          <p className="text-[#B3AAFF] mt-2" style={{ fontSize: '18px' }}>
            Olá, Coach {coachName}! Aqui está o resumo geral do seu time.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#FDFDFD] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                style={{ boxShadow: '0 10px 30px rgba(179, 170, 255, 0.3)' }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#49007F]/70 mb-2" style={{ fontSize: '16px' }}>
                      {stat.label}
                    </p>
                    <p className="text-[#380361]" style={{ fontSize: '48px' }}>
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon size={36} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-[#FDFDFD] p-8 rounded-3xl shadow-xl" style={{ boxShadow: '0 10px 30px rgba(179, 170, 255, 0.3)' }}>
          <h3 className="text-[#380361] mb-6" style={{ fontSize: '24px' }}>
            Ações Rápidas
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <button className="p-6 rounded-2xl bg-gradient-to-br from-[#380361] to-[#49007F] text-[#FDFDFD] hover:shadow-2xl hover:shadow-[#49007F]/50 transition-all transform hover:scale-105">
              <div className="text-[32px] mb-2">📝</div>
              <p style={{ fontSize: '16px' }}>Nova Avaliação</p>
            </button>
            <button className="p-6 rounded-2xl bg-gradient-to-br from-[#380361] to-[#49007F] text-[#FDFDFD] hover:shadow-2xl hover:shadow-[#49007F]/50 transition-all transform hover:scale-105">
              <div className="text-[32px] mb-2">📊</div>
              <p style={{ fontSize: '16px' }}>Ver Relatórios</p>
            </button>
            <button className="p-6 rounded-2xl bg-gradient-to-br from-[#380361] to-[#49007F] text-[#FDFDFD] hover:shadow-2xl hover:shadow-[#49007F]/50 transition-all transform hover:scale-105">
              <div className="text-[32px] mb-2">🤖</div>
              <p style={{ fontSize: '16px' }}>Consultar IA</p>
            </button>
          </div>
        </div>

        {/* Mascote no canto */}
        <div 
          className="fixed bottom-8 right-8 text-[60px] opacity-30 hover:opacity-60 transition-opacity cursor-pointer"
          style={{ filter: 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.6))' }}
        >
          👾
        </div>
      </div>
    </div>
  );
}
