import { useLocation } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ConfiguracoesPage() {
  const location = useLocation();
  const coachName = location.state?.coachName || "Marcus";
  
  const [formData, setFormData] = useState({
    nomeCoach: coachName,
    nomeEquipe: "Team Phoenix",
    frequenciaRelatorios: "semanal",
    modoEscuro: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    
    toast.success("✅ Preferências atualizadas com sucesso!", {
      description: "Suas configurações foram salvas.",
      duration: 3000,
    });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  // Cores dinâmicas baseadas no tema
  const theme = {
    background: formData.modoEscuro 
      ? "from-[#380361] to-[#49007F]" 
      : "from-[#F6F4FF] to-[#E8E4FF]",
    
    cardBg: formData.modoEscuro 
      ? "bg-[#FDFDFD]" 
      : "bg-[#FFFFFF]",
    
    cardBorder: formData.modoEscuro
      ? "border-[#B3AAFF]/30"
      : "border-[#DAD6FF]",
    
    cardShadow: formData.modoEscuro
      ? "0 10px 30px rgba(179, 170, 255, 0.3)"
      : "0 10px 30px rgba(94, 75, 255, 0.15)",
    
    titleColor: formData.modoEscuro 
      ? "text-[#FDFDFD]" 
      : "text-[#1E1E1E]",
    
    subtitleColor: formData.modoEscuro 
      ? "text-[#B3AAFF]" 
      : "text-[#4B4B4B]",
    
    labelColor: formData.modoEscuro 
      ? "text-[#380361]" 
      : "text-[#1E1E1E]",
    
    inputBorder: formData.modoEscuro
      ? "border-[#B3AAFF]/30 focus:border-[#49007F]"
      : "border-[#DAD6FF] focus:border-[#5E4BFF]",
    
    inputText: formData.modoEscuro 
      ? "text-[#121111]" 
      : "text-[#1E1E1E]",
    
    buttonActive: formData.modoEscuro
      ? "border-[#49007F] bg-[#B3AAFF]/20 text-[#380361]"
      : "border-[#5E4BFF] bg-[#EEE9FF] text-[#1E1E1E]",
    
    buttonInactive: formData.modoEscuro
      ? "border-[#B3AAFF]/30 bg-white text-[#49007F]/70 hover:border-[#49007F]/50"
      : "border-[#DAD6FF] bg-white text-[#5E4BFF]/70 hover:border-[#5E4BFF]/50",
    
    toggleBg: formData.modoEscuro
      ? "bg-[#49007F]"
      : "bg-[#5E4BFF]",
    
    toggleInactive: formData.modoEscuro
      ? "bg-[#B3AAFF]/40"
      : "bg-[#DAD6FF]",
    
    sectionBg: formData.modoEscuro
      ? "bg-[#B3AAFF]/5"
      : "bg-[#F6F4FF]",
    
    sectionBorder: formData.modoEscuro
      ? "border-[#B3AAFF]/30"
      : "border-[#DAD6FF]",
    
    sectionText: formData.modoEscuro
      ? "text-[#380361]"
      : "text-[#1E1E1E]",
    
    sectionSubtext: formData.modoEscuro
      ? "text-[#49007F]/70"
      : "text-[#4B4B4B]",
    
    buttonGradient: formData.modoEscuro
      ? "from-[#49007F] to-[#380361]"
      : "from-[#6A3BCC] to-[#49007F]",
    
    infoCardBg: formData.modoEscuro
      ? "bg-[#FDFDFD]/10 border-[#B3AAFF]/20"
      : "bg-[#EEE9FF]/40 border-[#DAD6FF]/60",
    
    infoText: formData.modoEscuro
      ? "text-[#B3AAFF]"
      : "text-[#4B4B4B]"
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.background} flex transition-all duration-300`}>
      <Sidebar userType="coach" />
      
      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`${theme.titleColor} transition-colors`} style={{ fontSize: '36px' }}>
            Configurações
          </h1>
          <p className={`${theme.subtitleColor} mt-2 transition-colors`} style={{ fontSize: '18px' }}>
            Personalize suas preferências e dados do sistema
          </p>
        </div>

        {/* Settings Form */}
        <div 
          className={`${theme.cardBg} border-2 ${theme.cardBorder} rounded-3xl shadow-xl p-10 max-w-4xl relative transition-all duration-300`} 
          style={{ boxShadow: theme.cardShadow }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Nome do Coach */}
            <div>
              <label className={`block ${theme.labelColor} mb-3 transition-colors`} style={{ fontSize: '18px' }}>
                Nome do Coach
              </label>
              <input
                type="text"
                value={formData.nomeCoach}
                onChange={(e) => setFormData({ ...formData, nomeCoach: e.target.value })}
                className={`w-full p-4 rounded-xl border-2 ${theme.inputBorder} ${theme.inputText} outline-none transition-all bg-white`}
                style={{ fontSize: '16px' }}
              />
            </div>

            {/* Nome da Equipe */}
            <div>
              <label className={`block ${theme.labelColor} mb-3 transition-colors`} style={{ fontSize: '18px' }}>
                Nome da Equipe
              </label>
              <input
                type="text"
                value={formData.nomeEquipe}
                onChange={(e) => setFormData({ ...formData, nomeEquipe: e.target.value })}
                className={`w-full p-4 rounded-xl border-2 ${theme.inputBorder} ${theme.inputText} outline-none transition-all bg-white`}
                style={{ fontSize: '16px' }}
              />
            </div>

            {/* Frequência de Relatórios */}
            <div>
              <label className={`block ${theme.labelColor} mb-3 transition-colors`} style={{ fontSize: '18px' }}>
                Frequência de Relatórios
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, frequenciaRelatorios: "diario" })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.frequenciaRelatorios === "diario"
                      ? theme.buttonActive
                      : theme.buttonInactive
                  }`}
                  style={{ fontSize: '16px' }}
                >
                  📅 Diário
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, frequenciaRelatorios: "semanal" })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.frequenciaRelatorios === "semanal"
                      ? theme.buttonActive
                      : theme.buttonInactive
                  }`}
                  style={{ fontSize: '16px' }}
                >
                  📊 Semanal
                </button>
              </div>
            </div>

            {/* Modo Escuro/Claro */}
            <div>
              <label className={`block ${theme.labelColor} mb-3 transition-colors`} style={{ fontSize: '18px' }}>
                Tema da Interface
              </label>
              <div className={`flex items-center justify-between p-6 rounded-xl border-2 ${theme.sectionBorder} ${theme.sectionBg} transition-all`}>
                <div className="flex items-center gap-3">
                  <span className="text-[32px]">{formData.modoEscuro ? "🌙" : "🌞"}</span>
                  <div>
                    <p className={`${theme.sectionText} transition-colors`} style={{ fontSize: '16px' }}>
                      {formData.modoEscuro ? "Modo Escuro" : "Modo Claro"}
                    </p>
                    <p className={`${theme.sectionSubtext} transition-colors`} style={{ fontSize: '14px' }}>
                      {formData.modoEscuro ? "Interface com fundo escuro" : "Interface com fundo claro"}
                    </p>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, modoEscuro: !formData.modoEscuro })}
                  className={`relative w-16 h-8 rounded-full transition-all ${
                    formData.modoEscuro ? theme.toggleBg : theme.toggleInactive
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-lg ${
                      formData.modoEscuro ? "right-1" : "left-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Botão Salvar */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className={`px-12 py-4 rounded-xl bg-gradient-to-r ${theme.buttonGradient} text-[#FDFDFD] hover:shadow-2xl hover:opacity-90 transition-all transform hover:scale-105`}
                style={{ fontSize: '18px' }}
              >
                Salvar Alterações
              </button>
            </div>
          </form>

          {/* Feedback de Sucesso */}
          {showSuccess && (
            <div className="absolute inset-0 bg-[#380361]/90 backdrop-blur-sm rounded-3xl flex items-center justify-center z-50">
              <div className="bg-[#FDFDFD] p-8 rounded-2xl shadow-2xl text-center space-y-4 animate-bounce">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Check size={40} className="text-white" />
                </div>
                <h3 className="text-[#380361]" style={{ fontSize: '24px' }}>
                  ✅ Configurações salvas com sucesso!
                </h3>
                <p className="text-[#49007F]/70">
                  Suas preferências foram atualizadas
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Info adicional */}
        <div className={`mt-6 ${theme.infoCardBg} border p-6 rounded-2xl max-w-4xl transition-all duration-300`}>
          <p className={`${theme.infoText} transition-colors`} style={{ fontSize: '14px' }}>
            💡 Dica: As configurações são salvas automaticamente e aplicadas em todas as sessões futuras.
          </p>
        </div>

        {/* Mascote no canto */}
        <div 
          className="fixed bottom-8 right-8 text-[60px] opacity-30 hover:opacity-60 transition-opacity cursor-pointer"
          style={{ filter: formData.modoEscuro ? 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.6))' : 'drop-shadow(0 0 20px rgba(94, 75, 255, 0.6))' }}
        >
          👾
        </div>
      </div>
    </div>
  );
}
