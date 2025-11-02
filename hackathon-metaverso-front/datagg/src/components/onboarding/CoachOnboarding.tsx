import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
import { Logo } from "../Logo";

export function CoachOnboarding() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  
  // Pega o nome do coach passado pela rota
  const coachName = location.state?.coachName || "Coach";
  
  // Dados do formulário
  const [teamName, setTeamName] = useState("Minha Equipe");
  const [numberOfPlayers, setNumberOfPlayers] = useState("");
  const [teamGoal, setTeamGoal] = useState("");
  const [reportFrequency, setReportFrequency] = useState("");

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setCompleted(true);
    setTimeout(() => {
      navigate("/coach/dashboard");
    }, 2500);
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#121111] via-[#380361] to-[#49007F] flex items-center justify-center p-8">
        <div className="w-full max-w-2xl space-y-8 text-center">
          <div className="flex items-center justify-center gap-4">
            <span 
              className="text-[80px] animate-bounce" 
              style={{ filter: 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.6))' }}
            >
              👾
            </span>
          </div>

          <div className="bg-[#121111]/60 backdrop-blur-lg p-12 rounded-2xl border border-[#B3AAFF]/30 space-y-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#49007F] to-[#B3AAFF] flex items-center justify-center">
              <Check size={48} className="text-[#FDFDFD]" />
            </div>
            
            <h2 className="text-[#FDFDFD]" style={{ fontSize: '32px' }}>
              Tudo pronto!
            </h2>
            
            <p className="text-[#B3AAFF]" style={{ fontSize: '18px' }}>
              Agora você pode adicionar jogadores e acompanhar seus relatórios.
            </p>

            <div className="flex items-center justify-center gap-2 text-[#B3AAFF]/70">
              <div className="w-2 h-2 bg-[#B3AAFF] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-[#B3AAFF] rounded-full animate-pulse delay-100" />
              <div className="w-2 h-2 bg-[#B3AAFF] rounded-full animate-pulse delay-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    {
      title: "Boas-vindas!",
      subtitle: `Antes de começarmos, ${coachName}, me conte um pouco sobre o seu time.`,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <span 
              className="text-[100px]" 
              style={{ filter: 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.5))' }}
            >
              👾
            </span>
          </div>
          <p className="text-[#B3AAFF] text-center" style={{ fontSize: '20px' }}>
            Vamos configurar seu ambiente em poucos passos!
          </p>
        </div>
      )
    },
    {
      title: "Nome do Time",
      subtitle: "Como você gostaria de chamar sua equipe?",
      content: (
        <div className="space-y-4">
          <label className="block text-[#B3AAFF]">Nome ou apelido do time</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Digite o nome da equipe"
            className="w-full px-6 py-4 rounded-xl bg-[#380361]/40 border-2 border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-all"
            style={{ fontSize: '18px' }}
          />
        </div>
      )
    },
    {
      title: "Tamanho da Equipe",
      subtitle: "Quantos jogadores você tem atualmente?",
      content: (
        <div className="space-y-4">
          <label className="block text-[#B3AAFF]">Número de jogadores (opcional)</label>
          <input
            type="number"
            value={numberOfPlayers}
            onChange={(e) => setNumberOfPlayers(e.target.value)}
            placeholder="Ex: 5"
            min="0"
            className="w-full px-6 py-4 rounded-xl bg-[#380361]/40 border-2 border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-all"
            style={{ fontSize: '18px' }}
          />
        </div>
      )
    },
    {
      title: "Objetivo Principal",
      subtitle: "Qual o foco da sua equipe?",
      content: (
        <div className="space-y-4">
          <label className="block text-[#B3AAFF]">Objetivo principal do time</label>
          <select
            value={teamGoal}
            onChange={(e) => setTeamGoal(e.target.value)}
            className="w-full px-6 py-4 rounded-xl bg-[#380361]/40 border-2 border-[#49007F]/50 text-[#FDFDFD] focus:outline-none focus:border-[#B3AAFF] transition-all cursor-pointer"
            style={{ fontSize: '18px' }}
          >
            <option value="">Selecione uma opção</option>
            <option value="competitivo">🏆 Competitivo</option>
            <option value="treino">💪 Treino e Desenvolvimento</option>
            <option value="equilibrio">🧠 Equilíbrio Mental</option>
            <option value="misto">🎯 Misto (Competição + Bem-estar)</option>
          </select>
        </div>
      )
    },
    {
      title: "Frequência de Relatórios",
      subtitle: "Com que frequência deseja receber os insights?",
      content: (
        <div className="space-y-4">
          <label className="block text-[#B3AAFF]">Frequência dos relatórios</label>
          <div className="grid grid-cols-1 gap-3">
            {[
              { value: "diario", label: "📅 Diário", desc: "Análises todos os dias" },
              { value: "semanal", label: "📊 Semanal", desc: "Resumo a cada semana" },
              { value: "personalizado", label: "⚙️ Personalizado", desc: "Defina sua frequência" }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setReportFrequency(option.value)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  reportFrequency === option.value
                    ? "bg-gradient-to-r from-[#49007F] to-[#380361] border-[#B3AAFF] shadow-lg shadow-[#49007F]/30"
                    : "bg-[#380361]/20 border-[#49007F]/50 hover:border-[#B3AAFF]/50"
                }`}
              >
                <div className="text-[#FDFDFD]" style={{ fontSize: '18px' }}>{option.label}</div>
                <div className="text-[#B3AAFF]/70 mt-1">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121111] via-[#380361] to-[#49007F] flex items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[40px]">👾</span>
            <Logo variant="light" size="xlarge" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-[#B3AAFF]">
            <span>Passo {currentStep + 1} de {steps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-[#380361]/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#B3AAFF] to-[#49007F] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#121111]/60 backdrop-blur-lg p-10 rounded-2xl border border-[#B3AAFF]/20 space-y-8">
          <div className="text-center space-y-3">
            {currentStep === 0 && (
              <h1 className="text-[#FDFDFD]" style={{ fontSize: '36px' }}>
                👾 Olá, Coach {coachName}! 👋
              </h1>
            )}
            <h2 className="text-[#FDFDFD]" style={{ fontSize: currentStep === 0 ? '24px' : '28px' }}>
              {currentStep === 0 ? "Aqui começa o controle total do seu time." : `${currentStep}. ${currentStepData.title}`}
            </h2>
            <p className="text-[#B3AAFF]" style={{ fontSize: '16px' }}>
              {currentStepData.subtitle}
            </p>
          </div>

          <div className="py-6">
            {currentStepData.content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-8 py-3 rounded-xl border-2 border-[#49007F]/50 text-[#B3AAFF] hover:border-[#B3AAFF] hover:bg-[#380361]/30 transition-all"
              >
                Voltar
              </button>
            )}
            
            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex-1 px-8 py-3 rounded-xl bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-xl hover:shadow-[#49007F]/50 transition-all flex items-center justify-center gap-2"
              >
                Próximo
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleComplete}
                disabled={!reportFrequency}
                className="flex-1 px-8 py-3 rounded-xl bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-xl hover:shadow-[#49007F]/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Concluir Configuração
                <Check size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index <= currentStep 
                  ? "w-8 bg-gradient-to-r from-[#B3AAFF] to-[#49007F]" 
                  : "w-2 bg-[#380361]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
