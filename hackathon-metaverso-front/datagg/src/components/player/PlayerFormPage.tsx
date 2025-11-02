import { useState } from "react";
import { PlayerSidebar } from "./PlayerSidebar";
import { ArrowLeft, Clock, UtensilsCrossed, Brain, Target, Save, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner@2.0.3";

export function PlayerFormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Rotina e descanso
    wakeUpTime: "",
    sleepTime: "",
    sleepHours: "",
    sleepQuality: 3,
    tookBreaks: "",
    // Alimentação e energia
    mealsCount: "",
    energyLevel: 3,
    drankWater: "",
    ateBeforeTraining: "",
    // Humor e estado mental
    mood: 3,
    feltStress: "",
    emotionalImpact: "",
    // Foco e motivação
    maintainedFocus: "",
    feltMotivated: 3,
    performanceIssues: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    
    // Feedback visual de sucesso
    toast.success("✅ Formulário enviado com sucesso!", {
      description: "Seus dados serão analisados e refletirão no seu painel de desempenho.",
      duration: 4000,
    });
  };

  const handleReset = () => {
    setFormData({
      wakeUpTime: "",
      sleepTime: "",
      sleepHours: "",
      sleepQuality: 3,
      tookBreaks: "",
      mealsCount: "",
      energyLevel: 3,
      drankWater: "",
      ateBeforeTraining: "",
      mood: 3,
      feltStress: "",
      emotionalImpact: "",
      maintainedFocus: "",
      feltMotivated: 3,
      performanceIssues: ""
    });
  };

  const renderStars = (value: number, onChange: (val: number) => void) => {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="transition-all transform hover:scale-110"
          >
            <span 
              style={{ fontSize: '28px' }}
              className={star <= value ? "opacity-100" : "opacity-30"}
            >
              ⭐
            </span>
          </button>
        ))}
      </div>
    );
  };

  const renderEmojiScale = (value: number, onChange: (val: number) => void) => {
    const emojis = ["😢", "😕", "😐", "😊", "😄"];
    return (
      <div className="flex gap-3">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onChange(index + 1)}
            className={`transition-all transform hover:scale-110 ${
              value === index + 1 ? "scale-125" : "opacity-50"
            }`}
          >
            <span style={{ fontSize: '36px' }}>{emoji}</span>
          </button>
        ))}
      </div>
    );
  };

  const renderYesNo = (value: string, onChange: (val: string) => void) => {
    return (
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => onChange("sim")}
          className={`px-8 py-3 rounded-xl transition-all ${
            value === "sim"
              ? "bg-[#49007F] text-[#FDFDFD] shadow-lg"
              : "bg-[#FDFDFD]/10 text-[#B3AAFF] border-2 border-[#B3AAFF]/40 hover:bg-[#FDFDFD]/20"
          }`}
        >
          Sim
        </button>
        <button
          type="button"
          onClick={() => onChange("nao")}
          className={`px-8 py-3 rounded-xl transition-all ${
            value === "nao"
              ? "bg-[#49007F] text-[#FDFDFD] shadow-lg"
              : "bg-[#FDFDFD]/10 text-[#B3AAFF] border-2 border-[#B3AAFF]/40 hover:bg-[#FDFDFD]/20"
          }`}
        >
          Não
        </button>
      </div>
    );
  };

  const renderYesNoPartial = (value: string, onChange: (val: string) => void) => {
    return (
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => onChange("sim")}
          className={`px-6 py-3 rounded-xl transition-all ${
            value === "sim"
              ? "bg-[#49007F] text-[#FDFDFD] shadow-lg"
              : "bg-[#FDFDFD]/10 text-[#B3AAFF] border-2 border-[#B3AAFF]/40 hover:bg-[#FDFDFD]/20"
          }`}
        >
          Sim
        </button>
        <button
          type="button"
          onClick={() => onChange("parcialmente")}
          className={`px-6 py-3 rounded-xl transition-all ${
            value === "parcialmente"
              ? "bg-[#49007F] text-[#FDFDFD] shadow-lg"
              : "bg-[#FDFDFD]/10 text-[#B3AAFF] border-2 border-[#B3AAFF]/40 hover:bg-[#FDFDFD]/20"
          }`}
        >
          Parcialmente
        </button>
        <button
          type="button"
          onClick={() => onChange("nao")}
          className={`px-6 py-3 rounded-xl transition-all ${
            value === "nao"
              ? "bg-[#49007F] text-[#FDFDFD] shadow-lg"
              : "bg-[#FDFDFD]/10 text-[#B3AAFF] border-2 border-[#B3AAFF]/40 hover:bg-[#FDFDFD]/20"
          }`}
        >
          Não
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex">
      <PlayerSidebar />
      
      <div className="flex-1 ml-[240px] p-8 relative overflow-hidden">
        {/* Partículas de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#B3AAFF] rounded-full opacity-40 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-[#FDFDFD] mb-2" style={{ fontSize: '36px' }}>
                Formulário Diário — Rotina e Bem-Estar
              </h1>
              <p className="text-[#B3AAFF]" style={{ fontSize: '16px' }}>
                Responda sobre seu dia para aprimorar sua performance e equilíbrio.
              </p>
            </div>
            <button
              onClick={() => navigate("/player/dashboard")}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent border-2 border-[#B3AAFF] text-[#B3AAFF] hover:bg-[#B3AAFF]/20 transition-all"
            >
              <ArrowLeft size={20} />
              Voltar ao Dashboard
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Seção 1: Rotina e Descanso */}
            <div 
              className="bg-[#2B0E57] rounded-[20px] p-8 border border-[#B3AAFF]/30"
              style={{ boxShadow: '0 8px 32px rgba(179, 170, 255, 0.15)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-[#B3AAFF]" size={28} />
                <h2 className="text-[#FDFDFD]" style={{ fontSize: '24px' }}>
                  Rotina e Descanso
                </h2>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-[#FDFDFD] mb-2" style={{ fontSize: '14px' }}>
                      <span>⏰</span>
                      A que horas você acordou hoje?
                    </label>
                    <input
                      type="time"
                      value={formData.wakeUpTime}
                      onChange={(e) => setFormData({ ...formData, wakeUpTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#380361]/50 border-2 border-[#B3AAFF]/40 text-[#FDFDFD] outline-none focus:border-[#B3AAFF] focus:bg-[#380361]/70 transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[#FDFDFD] mb-2" style={{ fontSize: '14px' }}>
                      <span>🌙</span>
                      A que horas você dormiu ontem?
                    </label>
                    <input
                      type="time"
                      value={formData.sleepTime}
                      onChange={(e) => setFormData({ ...formData, sleepTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#380361]/50 border-2 border-[#B3AAFF]/40 text-[#FDFDFD] outline-none focus:border-[#B3AAFF] focus:bg-[#380361]/70 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-2" style={{ fontSize: '14px' }}>
                    <span>😴</span>
                    Quantas horas de sono teve na última noite?
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="24"
                    step="0.5"
                    value={formData.sleepHours}
                    onChange={(e) => setFormData({ ...formData, sleepHours: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#380361]/50 border-2 border-[#B3AAFF]/40 text-[#FDFDFD] outline-none focus:border-[#B3AAFF] focus:bg-[#380361]/70 transition-all"
                    placeholder="Ex: 8"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-3" style={{ fontSize: '14px' }}>
                    <span>⭐</span>
                    Como avalia a qualidade do seu sono? (1 = péssima / 5 = excelente)
                  </label>
                  {renderStars(formData.sleepQuality, (val) => setFormData({ ...formData, sleepQuality: val }))}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-3" style={{ fontSize: '14px' }}>
                    <span>⏸️</span>
                    Você fez pausas durante o treino de hoje?
                  </label>
                  {renderYesNo(formData.tookBreaks, (val) => setFormData({ ...formData, tookBreaks: val }))}
                </div>
              </div>
            </div>

            {/* Seção 2: Alimentação e Energia */}
            <div 
              className="bg-[#2B0E57] rounded-[20px] p-8 border border-[#B3AAFF]/30"
              style={{ boxShadow: '0 8px 32px rgba(179, 170, 255, 0.15)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <UtensilsCrossed className="text-[#B3AAFF]" size={28} />
                <h2 className="text-[#FDFDFD]" style={{ fontSize: '24px' }}>
                  Alimentação e Energia
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-2" style={{ fontSize: '14px' }}>
                    <span>🍽️</span>
                    Quantas refeições você fez hoje?
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={formData.mealsCount}
                    onChange={(e) => setFormData({ ...formData, mealsCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#380361]/50 border-2 border-[#B3AAFF]/40 text-[#FDFDFD] outline-none focus:border-[#B3AAFF] focus:bg-[#380361]/70 transition-all"
                    placeholder="Ex: 3"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-3" style={{ fontSize: '14px' }}>
                    <span>⚡</span>
                    Em uma escala de 1 a 5, como estava seu nível de energia durante o dia?
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={formData.energyLevel}
                      onChange={(e) => setFormData({ ...formData, energyLevel: Number(e.target.value) })}
                      className="flex-1 h-2 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #B3AAFF 0%, #B3AAFF ${(formData.energyLevel - 1) * 25}%, rgba(253, 253, 253, 0.2) ${(formData.energyLevel - 1) * 25}%, rgba(253, 253, 253, 0.2) 100%)`
                      }}
                    />
                    <span className="text-[#B3AAFF] min-w-[40px] text-center" style={{ fontSize: '24px' }}>
                      {formData.energyLevel}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-3" style={{ fontSize: '14px' }}>
                    <span>💧</span>
                    Você consumiu água suficiente durante o dia?
                  </label>
                  {renderYesNo(formData.drankWater, (val) => setFormData({ ...formData, drankWater: val }))}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-3" style={{ fontSize: '14px' }}>
                    <span>🥗</span>
                    Você se alimentou antes do treino?
                  </label>
                  {renderYesNo(formData.ateBeforeTraining, (val) => setFormData({ ...formData, ateBeforeTraining: val }))}
                </div>
              </div>
            </div>

            {/* Seção 3: Humor e Estado Mental */}
            <div 
              className="bg-[#2B0E57] rounded-[20px] p-8 border border-[#B3AAFF]/30"
              style={{ boxShadow: '0 8px 32px rgba(179, 170, 255, 0.15)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Brain className="text-[#B3AAFF]" size={28} />
                <h2 className="text-[#FDFDFD]" style={{ fontSize: '24px' }}>
                  Humor e Estado Mental
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-3" style={{ fontSize: '14px' }}>
                    <span>😊</span>
                    Como está seu humor hoje?
                  </label>
                  {renderEmojiScale(formData.mood, (val) => setFormData({ ...formData, mood: val }))}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-3" style={{ fontSize: '14px' }}>
                    <span>😵</span>
                    Você sentiu estresse, ansiedade ou cansaço mental durante o treino?
                  </label>
                  {renderYesNoPartial(formData.feltStress, (val) => setFormData({ ...formData, feltStress: val }))}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-2" style={{ fontSize: '14px' }}>
                    <span>💭</span>
                    O que mais te afetou emocionalmente hoje?
                  </label>
                  <textarea
                    value={formData.emotionalImpact}
                    onChange={(e) => setFormData({ ...formData, emotionalImpact: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#380361]/50 border-2 border-[#B3AAFF]/40 text-[#FDFDFD] placeholder-[#B3AAFF]/60 outline-none focus:border-[#B3AAFF] focus:bg-[#380361]/70 transition-all resize-none"
                    rows={3}
                    placeholder="Descreva brevemente..."
                  />
                </div>
              </div>
            </div>

            {/* Seção 4: Foco e Motivação */}
            <div 
              className="bg-[#2B0E57] rounded-[20px] p-8 border border-[#B3AAFF]/30"
              style={{ boxShadow: '0 8px 32px rgba(179, 170, 255, 0.15)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-[#B3AAFF]" size={28} />
                <h2 className="text-[#FDFDFD]" style={{ fontSize: '24px' }}>
                  Foco e Motivação
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-3" style={{ fontSize: '14px' }}>
                    <span>🎮</span>
                    Você conseguiu manter o foco durante todo o treino?
                  </label>
                  {renderYesNo(formData.maintainedFocus, (val) => setFormData({ ...formData, maintainedFocus: val }))}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-3" style={{ fontSize: '14px' }}>
                    <span>💪</span>
                    O treino de hoje te motivou a continuar evoluindo?
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={formData.feltMotivated}
                      onChange={(e) => setFormData({ ...formData, feltMotivated: Number(e.target.value) })}
                      className="flex-1 h-2 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #B3AAFF 0%, #B3AAFF ${(formData.feltMotivated - 1) * 25}%, rgba(253, 253, 253, 0.2) ${(formData.feltMotivated - 1) * 25}%, rgba(253, 253, 253, 0.2) 100%)`
                      }}
                    />
                    <span className="text-[#B3AAFF] min-w-[40px] text-center" style={{ fontSize: '24px' }}>
                      {formData.feltMotivated}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#FDFDFD] mb-2" style={{ fontSize: '14px' }}>
                    <span>⚠️</span>
                    Algo dificultou seu desempenho hoje? (ex: distrações, cansaço, problemas externos)
                  </label>
                  <textarea
                    value={formData.performanceIssues}
                    onChange={(e) => setFormData({ ...formData, performanceIssues: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#380361]/50 border-2 border-[#B3AAFF]/40 text-[#FDFDFD] placeholder-[#B3AAFF]/60 outline-none focus:border-[#B3AAFF] focus:bg-[#380361]/70 transition-all resize-none"
                    rows={3}
                    placeholder="Descreva brevemente..."
                  />
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex gap-4 justify-center pt-6">
              <button
                type="submit"
                className="flex items-center gap-3 px-10 py-4 rounded-xl bg-[#49007F] text-[#FDFDFD] hover:bg-[#B3AAFF] hover:text-[#121111] transition-all transform active:scale-98 shadow-lg"
                style={{ 
                  fontSize: '18px',
                  boxShadow: '0 10px 30px rgba(179, 170, 255, 0.4)'
                }}
              >
                <Save size={20} />
                Enviar Respostas
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-3 px-10 py-4 rounded-xl bg-transparent border-2 border-[#B3AAFF] text-[#FDFDFD] hover:bg-[#B3AAFF]/20 transition-all"
                style={{ fontSize: '18px' }}
              >
                <X size={20} />
                Limpar Formulário
              </button>
            </div>
          </form>
        </div>

        {/* Mascote no canto inferior direito */}
        <div className="fixed bottom-8 right-8 z-50">
          <div 
            className="text-[80px] filter drop-shadow-2xl animate-float"
            style={{ 
              filter: 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.6))',
              animationDuration: '3s'
            }}
          >
            👾
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .active\\:scale-98:active {
          transform: scale(0.98) !important;
        }

        /* Estilização do input range */
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #B3AAFF;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(179, 170, 255, 0.5);
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #B3AAFF;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(179, 170, 255, 0.5);
        }

        /* Estilização dos inputs de hora */
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.7;
          cursor: pointer;
        }

        input[type="time"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }

        /* Scrollbar customizada */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(56, 3, 97, 0.3);
        }

        ::-webkit-scrollbar-thumb {
          background: #B3AAFF;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #D3CFFF;
        }
      `}</style>
    </div>
  );
}
