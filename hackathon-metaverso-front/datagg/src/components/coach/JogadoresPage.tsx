import { useLocation } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Zap, Search, Plus, X } from "lucide-react";
import { useState } from "react";

interface Player {
  id: number;
  name: string;
  foco: number;
  humor: "feliz" | "neutro" | "triste";
  energia: "Alta" | "Média" | "Baixa";
  status: "estavel" | "alerta" | "queda";
}

export function JogadoresPage() {
  const location = useLocation();
  const coachName = location.state?.coachName || "Marcus";
  
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: "Rebecca", foco: 87, humor: "feliz", energia: "Alta", status: "estavel" },
    { id: 2, name: "Aramis", foco: 72, humor: "neutro", energia: "Média", status: "alerta" },
    { id: 3, name: "Pedro", foco: 65, humor: "triste", energia: "Baixa", status: "queda" },
    { id: 4, name: "Antonio", foco: 81, humor: "feliz", energia: "Alta", status: "estavel" },
    { id: 5, name: "Kawan", foco: 78, humor: "neutro", energia: "Média", status: "alerta" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showResendNotification, setShowResendNotification] = useState(false);
  const [lastPlayerEmail, setLastPlayerEmail] = useState("");
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    nickname: "",
    email: "",
    time: "",
    funcao: ""
  });

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPlayer = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      nomeCompleto: "",
      nickname: "",
      email: "",
      time: "",
      funcao: ""
    });
  };

  const handleSavePlayer = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Adicionar novo jogador com dados mockados de desempenho
    const newPlayer: Player = {
      id: players.length + 1,
      name: formData.nickname || formData.nomeCompleto,
      foco: 75,
      humor: "neutro",
      energia: "Média",
      status: "estavel"
    };

    setPlayers([...players, newPlayer]);
    setLastPlayerEmail(formData.email);
    handleCloseModal();
    
    // Mostrar modal de sucesso
    setShowSuccessModal(true);
  };

  const handleResendEmail = () => {
    setShowResendNotification(true);
    setTimeout(() => {
      setShowResendNotification(false);
    }, 3000);
  };

  const handleBackToPlayers = () => {
    setShowSuccessModal(false);
  };

  const getHumorEmoji = (humor: string) => {
    switch (humor) {
      case "feliz": return "😊";
      case "neutro": return "😐";
      case "triste": return "😞";
      default: return "😐";
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "estavel":
        return { emoji: "🟢", label: "Estável", color: "text-green-600", bg: "bg-green-100" };
      case "alerta":
        return { emoji: "🟡", label: "Alerta", color: "text-yellow-600", bg: "bg-yellow-100" };
      case "queda":
        return { emoji: "🔴", label: "Queda", color: "text-red-600", bg: "bg-red-100" };
      default:
        return { emoji: "🟢", label: "Estável", color: "text-green-600", bg: "bg-green-100" };
    }
  };

  const getEnergiaColor = (energia: string) => {
    switch (energia) {
      case "Alta": return "text-green-600";
      case "Média": return "text-yellow-600";
      case "Baixa": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex">
      <Sidebar userType="coach" />
      
      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-[#FDFDFD]" style={{ fontSize: '36px' }}>
                Visão Geral dos Jogadores
              </h1>
              <p className="text-[#B3AAFF] mt-2" style={{ fontSize: '18px' }}>
                Gerencie seus jogadores e acompanhe seus indicadores de desempenho.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Campo de busca */}
              <div className="relative">
                <Search 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B3AAFF]" 
                  size={20} 
                />
                <input
                  type="text"
                  placeholder="Pesquisar jogador..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 rounded-xl bg-[#FDFDFD]/10 border border-[#B3AAFF]/30 text-[#FDFDFD] placeholder-[#B3AAFF]/50 outline-none focus:border-[#B3AAFF] transition-all"
                  style={{ fontSize: '16px', width: '280px' }}
                />
              </div>

              {/* Botão Adicionar Jogador */}
              <button
                onClick={handleAddPlayer}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#B3AAFF] text-[#380361] hover:bg-[#D5CFFF] transition-all transform hover:scale-105 shadow-lg"
                style={{ fontSize: '16px' }}
              >
                <Plus size={20} />
                <span>Adicionar Jogador</span>
              </button>
            </div>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filteredPlayers.map((player) => {
            const statusConfig = getStatusConfig(player.status);
            return (
              <div
                key={player.id}
                className="bg-[#FDFDFD] p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                style={{ boxShadow: '0 10px 30px rgba(179, 170, 255, 0.3)' }}
              >
                {/* Player Name & Status */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[#380361]" style={{ fontSize: '24px' }}>
                    {player.name}
                  </h3>
                  <div className={`px-3 py-1 rounded-lg ${statusConfig.bg} flex items-center gap-2`}>
                    <span>{statusConfig.emoji}</span>
                    <span className={`${statusConfig.color}`} style={{ fontSize: '12px' }}>
                      {statusConfig.label}
                    </span>
                  </div>
                </div>

                {/* Foco */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#49007F]/70" style={{ fontSize: '14px' }}>
                      Foco
                    </span>
                    <span className="text-[#380361]" style={{ fontSize: '18px' }}>
                      {player.foco}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#B3AAFF]/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#380361] to-[#49007F] rounded-full transition-all"
                      style={{ width: `${player.foco}%` }}
                    />
                  </div>
                </div>

                {/* Humor */}
                <div className="mb-5 flex items-center justify-between p-4 rounded-xl bg-[#B3AAFF]/10">
                  <span className="text-[#49007F]/70" style={{ fontSize: '14px' }}>
                    Humor
                  </span>
                  <span style={{ fontSize: '28px' }}>
                    {getHumorEmoji(player.humor)}
                  </span>
                </div>

                {/* Energia */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#B3AAFF]/10">
                  <span className="text-[#49007F]/70" style={{ fontSize: '14px' }}>
                    Energia
                  </span>
                  <div className="flex items-center gap-2">
                    <Zap size={20} className={getEnergiaColor(player.energia)} />
                    <span className={`${getEnergiaColor(player.energia)}`} style={{ fontSize: '16px' }}>
                      {player.energia}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal de Cadastro */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
            <div 
              className="bg-gradient-to-br from-[#380361] to-[#49007F] p-8 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 relative"
              style={{ boxShadow: '0 20px 60px rgba(179, 170, 255, 0.4)' }}
            >
              {/* Botão fechar */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-2 rounded-lg hover:bg-[#FDFDFD]/10 transition-all"
              >
                <X className="text-[#FDFDFD]" size={24} />
              </button>

              {/* Título do Modal */}
              <div className="mb-8">
                <h2 className="text-[#FDFDFD]" style={{ fontSize: '32px' }}>
                  Cadastrar Novo Jogador 🎮
                </h2>
                <p className="text-[#B3AAFF] mt-2" style={{ fontSize: '16px' }}>
                  Preencha os dados do jogador para adicioná-lo ao seu time
                </p>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSavePlayer} className="space-y-5">
                <div>
                  <label className="block text-[#FDFDFD] mb-2" style={{ fontSize: '16px' }}>
                    Nome completo do jogador *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nomeCompleto}
                    onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#FDFDFD]/10 border border-[#B3AAFF]/30 text-[#FDFDFD] placeholder-[#B3AAFF]/50 outline-none focus:border-[#B3AAFF] transition-all"
                    placeholder="Ex: João Silva"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label className="block text-[#FDFDFD] mb-2" style={{ fontSize: '16px' }}>
                    Nickname (opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.nickname}
                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#FDFDFD]/10 border border-[#B3AAFF]/30 text-[#FDFDFD] placeholder-[#B3AAFF]/50 outline-none focus:border-[#B3AAFF] transition-all"
                    placeholder="Ex: JohnGamer"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label className="block text-[#FDFDFD] mb-2" style={{ fontSize: '16px' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#FDFDFD]/10 border border-[#B3AAFF]/30 text-[#FDFDFD] placeholder-[#B3AAFF]/50 outline-none focus:border-[#B3AAFF] transition-all"
                    placeholder="Ex: jogador@email.com"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label className="block text-[#FDFDFD] mb-2" style={{ fontSize: '16px' }}>
                    Time / Equipe *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#FDFDFD]/10 border border-[#B3AAFF]/30 text-[#FDFDFD] placeholder-[#B3AAFF]/50 outline-none focus:border-[#B3AAFF] transition-all"
                    placeholder="Ex: Team Phoenix"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label className="block text-[#FDFDFD] mb-2" style={{ fontSize: '16px' }}>
                    Função / Posição no jogo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.funcao}
                    onChange={(e) => setFormData({ ...formData, funcao: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#FDFDFD]/10 border border-[#B3AAFF]/30 text-[#FDFDFD] placeholder-[#B3AAFF]/50 outline-none focus:border-[#B3AAFF] transition-all"
                    placeholder="Ex: Suporte, Atirador, Top, Mid, Jungle..."
                    style={{ fontSize: '16px' }}
                  />
                </div>

                {/* Botões */}
                <div className="flex items-center justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-8 py-3 rounded-xl border-2 border-[#B3AAFF] text-[#FDFDFD] hover:bg-[#FDFDFD]/10 transition-all"
                    style={{ fontSize: '16px' }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-[#6E00FF] text-[#FDFDFD] hover:bg-[#8A2BE2] transition-all transform hover:scale-105 shadow-lg"
                    style={{ fontSize: '16px' }}
                  >
                    Salvar Jogador
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal de Convite Enviado */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
            <div 
              className="bg-gradient-to-br from-[#380361] to-[#49007F] p-10 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 relative animate-scaleIn"
              style={{ 
                boxShadow: '0 20px 60px rgba(179, 170, 255, 0.4)',
                opacity: 0.95
              }}
            >
              {/* Ícone animado central */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#B3AAFF] to-[#6E00FF] flex items-center justify-center animate-bounce shadow-xl">
                  <span style={{ fontSize: '48px' }}>📧</span>
                </div>
              </div>

              {/* Título */}
              <div className="text-center mb-6">
                <h2 className="text-[#FDFDFD] mb-3" style={{ fontSize: '32px' }}>
                  Convite enviado com sucesso! 🎉
                </h2>
                <p className="text-[#B3AAFF]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  O jogador recebeu um e-mail com o link para ativar a conta e acessar seu painel na DataGG.
                </p>
              </div>

              {/* Informação do e-mail */}
              <div className="bg-[#FDFDFD]/10 border border-[#B3AAFF]/30 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span style={{ fontSize: '20px' }}>✅</span>
                  </div>
                  <div>
                    <p className="text-[#FDFDFD] mb-2" style={{ fontSize: '16px' }}>
                      Enviamos o link de acesso para o e-mail:
                    </p>
                    <p 
                      className="text-[#B3AAFF]" 
                      style={{ 
                        fontSize: '18px',
                        textShadow: '0 0 10px rgba(179, 170, 255, 0.5)'
                      }}
                    >
                      {lastPlayerEmail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mensagem auxiliar */}
              <div className="bg-[#B3AAFF]/10 border border-[#B3AAFF]/20 rounded-xl p-4 mb-8">
                <p className="text-[#B3AAFF]/90 text-center" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  💡 Se o jogador não receber o e-mail em até 5 minutos, verifique a caixa de spam ou reenvie o link abaixo.
                </p>
              </div>

              {/* Botões */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handleResendEmail}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#B3AAFF] text-[#380361] hover:bg-[#D3CFFF] transition-all transform hover:scale-105 shadow-lg"
                  style={{ fontSize: '16px' }}
                >
                  <span style={{ fontSize: '20px' }}>📨</span>
                  <span>Reenviar E-mail</span>
                </button>
                
                <button
                  onClick={handleBackToPlayers}
                  className="px-8 py-3 rounded-xl bg-[#380361] text-[#FDFDFD] hover:bg-[#49007F] transition-all border border-[#B3AAFF]/30"
                  style={{ 
                    fontSize: '16px',
                    boxShadow: '0 0 20px rgba(179, 170, 255, 0.2)'
                  }}
                >
                  Voltar para Jogadores
                </button>
              </div>

              {/* Mascote decorativo */}
              <div 
                className="absolute -bottom-4 -right-4 text-[80px] opacity-20 animate-float"
                style={{ filter: 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.6))' }}
              >
                👾
              </div>
            </div>
          </div>
        )}

        {/* Notificação de Reenvio */}
        {showResendNotification && (
          <div 
            className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slideIn z-50"
            style={{ boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)' }}
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span style={{ fontSize: '20px' }}>✅</span>
            </div>
            <div>
              <p style={{ fontSize: '16px' }}>
                E-mail reenviado com sucesso!
              </p>
              <p style={{ fontSize: '12px', opacity: 0.9 }}>
                {lastPlayerEmail}
              </p>
            </div>
          </div>
        )}

        {/* Mascote no canto */}
        <div 
          className="fixed bottom-8 right-8 text-[60px] opacity-30 hover:opacity-60 transition-opacity cursor-pointer"
          style={{ filter: 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.6))' }}
        >
          👾
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
