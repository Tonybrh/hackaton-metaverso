import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Target, Brain, MessageSquare, Star, Check, X, User } from "lucide-react";

interface Player {
  id: number;
  name: string;
}

const availablePlayers: Player[] = [
  { id: 1, name: "Rebecca" },
  { id: 2, name: "Aramis" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Antonio" },
  { id: 5, name: "Kawan" },
];

export function FormularioCoachPage() {
  const location = useLocation();
  const coachName = location.state?.coachName || "Marcus";
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePlayerSelect = (playerId: number) => {
    setSelectedPlayer(playerId);
  };

  const handleStartEvaluation = () => {
    if (selectedPlayer !== null) {
      setCurrentStep(2);
    }
  };

  const handleSaveEvaluation = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const getSelectedPlayerName = () => {
    const player = availablePlayers.find((p) => p.id === selectedPlayer);
    return player ? player.name : "";
  };

  const renderStars = (count: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className={index < count ? "fill-[#B3AAFF] text-[#B3AAFF]" : "text-[#B3AAFF]/30"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex">
      <Sidebar userType="coach" />
      
      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#FDFDFD]" style={{ fontSize: '32px' }}>
            Avaliação de Treino — Coach {coachName} 👋
          </h1>
          <p className="text-[#B3AAFF] mt-2">
            {currentStep === 1 
              ? "Selecione o jogador que deseja avaliar" 
              : "Formulário de avaliação diária do desempenho"}
          </p>
        </div>

        {/* Etapa 1: Seleção de Jogador */}
        {currentStep === 1 && (
          <div className="max-w-5xl mx-auto animate-fadeIn">
            <div className="bg-[#FDFDFD] rounded-3xl shadow-2xl p-10">
              <h2 className="text-[#380361] mb-8 text-center" style={{ fontSize: '28px' }}>
                Selecione o jogador que deseja avaliar:
              </h2>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {availablePlayers.map((player) => (
                  <div
                    key={player.id}
                    onClick={() => handlePlayerSelect(player.id)}
                    className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl ${
                      selectedPlayer === player.id
                        ? "bg-[#B3AAFF] border-[#49007F] shadow-2xl shadow-[#B3AAFF]/50"
                        : "bg-[#B3AAFF]/20 border-[#49007F]/40 hover:border-[#B3AAFF] hover:bg-[#B3AAFF]/30"
                    }`}
                    style={{
                      filter: selectedPlayer === player.id ? 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.4))' : 'none'
                    }}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div 
                        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                          selectedPlayer === player.id
                            ? "bg-gradient-to-br from-[#49007F] to-[#380361]"
                            : "bg-[#49007F]/20"
                        }`}
                      >
                        <User 
                          size={40} 
                          className={selectedPlayer === player.id ? "text-[#FDFDFD]" : "text-[#49007F]"} 
                        />
                      </div>
                      <span
                        className={`text-center ${
                          selectedPlayer === player.id
                            ? "text-[#380361]"
                            : "text-[#121111]"
                        }`}
                        style={{ fontSize: '20px' }}
                      >
                        {player.name}
                      </span>
                      {selectedPlayer === player.id && (
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#49007F] flex items-center justify-center">
                          <Check size={18} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleStartEvaluation}
                  disabled={selectedPlayer === null}
                  className={`px-12 py-4 rounded-xl text-[#FDFDFD] transition-all transform ${
                    selectedPlayer !== null
                      ? "bg-gradient-to-r from-[#49007F] to-[#380361] hover:shadow-2xl hover:shadow-[#49007F]/50 hover:scale-105 cursor-pointer"
                      : "bg-gray-400 cursor-not-allowed opacity-50"
                  }`}
                  style={{ fontSize: '18px' }}
                >
                  Avaliar Jogador Selecionado
                </button>
              </div>

              {selectedPlayer === null && (
                <p className="text-center text-[#49007F]/70 mt-4">
                  Selecione um jogador para continuar
                </p>
              )}
            </div>

            {/* Mascote no canto */}
            <div 
              className="fixed bottom-8 right-8 text-[60px] opacity-30 hover:opacity-60 transition-opacity cursor-pointer"
              style={{ filter: 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.6))' }}
            >
              👾
            </div>
          </div>
        )}

        {/* Etapa 2: Formulário de Avaliação */}
        {currentStep === 2 && (
          <div className="max-w-5xl mx-auto animate-fadeIn">
            <div className="bg-[#FDFDFD] rounded-3xl shadow-2xl p-10 relative">
              {/* Tag de dados mockados */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-[#B3AAFF]/20 border border-[#B3AAFF]/40">
                <span className="text-[#380361]" style={{ fontSize: '12px' }}>
                  DADOS MOCKADOS
                </span>
              </div>

              {/* Botão voltar */}
              <button
                onClick={() => setCurrentStep(1)}
                className="mb-6 px-4 py-2 rounded-lg text-[#49007F] border border-[#49007F]/30 hover:bg-[#49007F]/10 transition-all"
              >
                ← Voltar à seleção
              </button>

              {/* Título */}
              <div className="mb-8">
                <h2 className="text-[#380361]" style={{ fontSize: '28px' }}>
                  Avaliando: {getSelectedPlayerName()}
                </h2>
                <p className="text-[#49007F]/70 mt-2">
                  Data: 02/11/2025
                </p>
              </div>

              {/* Seção 1: Desempenho Técnico */}
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-[#380361]/5 to-[#49007F]/5 border border-[#380361]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#380361] to-[#49007F] flex items-center justify-center">
                    <Target className="text-[#FDFDFD]" size={24} />
                  </div>
                  <h3 className="text-[#380361]" style={{ fontSize: '22px' }}>
                    🎯 Desempenho Técnico
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Desempenho técnico:
                    </p>
                    {renderStars(4)}
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Cumpriu objetivos:
                    </p>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700">
                      <Check size={20} />
                      <span>Sim</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Execução das mecânicas:
                    </p>
                    {renderStars(5)}
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Melhora em relação ao último treino:
                    </p>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700">
                      <Check size={20} />
                      <span>Sim</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção 2: Foco e Comportamento */}
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-[#380361]/5 to-[#49007F]/5 border border-[#380361]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#380361] to-[#49007F] flex items-center justify-center">
                    <Brain className="text-[#FDFDFD]" size={24} />
                  </div>
                  <h3 className="text-[#380361]" style={{ fontSize: '22px' }}>
                    🧠 Foco e Comportamento
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Foco e concentração:
                    </p>
                    {renderStars(4)}
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Engajamento:
                    </p>
                    {renderStars(4)}
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Desmotivação ou cansaço:
                    </p>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-100 text-red-700">
                      <X size={20} />
                      <span>Não</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção 3: Comunicação e Entrosamento */}
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-[#380361]/5 to-[#49007F]/5 border border-[#380361]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#380361] to-[#49007F] flex items-center justify-center">
                    <MessageSquare className="text-[#FDFDFD]" size={24} />
                  </div>
                  <h3 className="text-[#380361]" style={{ fontSize: '22px' }}>
                    💬 Comunicação e Entrosamento
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Comunicação com o time:
                    </p>
                    {renderStars(5)}
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Colaboração em decisões:
                    </p>
                    {renderStars(4)}
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111]">
                      Entrosamento geral:
                    </p>
                    {renderStars(5)}
                  </div>
                </div>
              </div>

              {/* Seção 4: Avaliação Geral */}
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-[#380361]/5 to-[#49007F]/5 border border-[#380361]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#380361] to-[#49007F] flex items-center justify-center">
                    <Star className="text-[#FDFDFD]" size={24} />
                  </div>
                  <h3 className="text-[#380361]" style={{ fontSize: '22px' }}>
                    ⭐ Avaliação Geral
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111] mb-3">
                      Nota geral:
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="text-[#380361]" style={{ fontSize: '48px' }}>
                        9<span className="text-[#B3AAFF]">/10</span>
                      </div>
                      <div className="flex-1 h-3 bg-[#380361]/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#380361] to-[#49007F] rounded-full transition-all" 
                          style={{ width: '90%' }} 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/80">
                    <p className="text-[#121111] mb-3">
                      Observação:
                    </p>
                    <div className="p-4 rounded-lg bg-[#B3AAFF]/10 border border-[#B3AAFF]/30">
                      <p className="text-[#380361]">
                        "Bom progresso técnico, manter ritmo e consistência."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão Salvar */}
              <div className="flex items-center justify-center pt-4">
                <button
                  onClick={handleSaveEvaluation}
                  className="px-12 py-4 rounded-xl bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-2xl hover:shadow-[#49007F]/50 transition-all transform hover:scale-105"
                  style={{ fontSize: '18px' }}
                >
                  Salvar Avaliação do Coach
                </button>
              </div>

              {/* Feedback de Sucesso */}
              {showSuccess && (
                <div className="absolute inset-0 bg-[#380361]/90 backdrop-blur-sm rounded-3xl flex items-center justify-center animate-fadeIn z-50">
                  <div className="bg-[#FDFDFD] p-8 rounded-2xl shadow-2xl text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center animate-bounce">
                      <Check size={40} className="text-white" />
                    </div>
                    <h3 className="text-[#380361]" style={{ fontSize: '24px' }}>
                      ✅ Avaliação salva
                    </h3>
                    <p className="text-[#49007F]/70">
                      (dados simulados)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Mascote no canto */}
            <div 
              className="fixed bottom-8 right-8 text-[60px] opacity-30 hover:opacity-60 transition-opacity cursor-pointer"
              style={{ filter: 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.6))' }}
            >
              👾
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
