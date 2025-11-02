import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { PlayerSidebar } from "./PlayerSidebar";

export function PlayerConfigPage() {
  
  const [formData, setFormData] = useState({
    nomeJogador: "Rebecca Silva",
    apelidoInGame: "Becks",
    timeVinculado: "Team Phoenix",
    email: "rebecca.silva@teamphoenix.gg"
  });

  const [senhaData, setSenhaData] = useState({
    senhaAtual: "",
    novaSenha: "",
    confirmarSenha: ""
  });

  const [showPasswords, setShowPasswords] = useState({
    atual: false,
    nova: false,
    confirmar: false
  });

  const [feedbackMessage, setFeedbackMessage] = useState<{
    type: 'success' | 'error' | null;
    text: string;
  }>({ type: null, text: '' });

  const handleSaveInfo = () => {
    toast.success("✅ Informações atualizadas com sucesso!", {
      description: "Suas alterações foram salvas.",
      duration: 3000,
    });
  };

  const handleChangePassword = () => {
    // Validação
    if (!senhaData.senhaAtual || !senhaData.novaSenha || !senhaData.confirmarSenha) {
      setFeedbackMessage({
        type: 'error',
        text: '⚠️ Preencha todos os campos de senha.'
      });
      return;
    }

    if (senhaData.novaSenha !== senhaData.confirmarSenha) {
      setFeedbackMessage({
        type: 'error',
        text: '⚠️ As senhas não coincidem.'
      });
      return;
    }

    if (senhaData.novaSenha.length < 6) {
      setFeedbackMessage({
        type: 'error',
        text: '⚠️ A senha deve ter no mínimo 6 caracteres.'
      });
      return;
    }

    // Sucesso
    setFeedbackMessage({
      type: 'success',
      text: '✅ Senha alterada com sucesso.'
    });

    toast.success("✅ Senha alterada com sucesso!", {
      description: "Sua senha foi atualizada.",
      duration: 3000,
    });

    // Limpar campos
    setSenhaData({
      senhaAtual: "",
      novaSenha: "",
      confirmarSenha: ""
    });

    // Limpar mensagem após 5 segundos
    setTimeout(() => {
      setFeedbackMessage({ type: null, text: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex">
      
      {/* Sidebar */}
      <PlayerSidebar />

      {/* Main Content */}
      <main className="flex-1 p-12 ml-[240px]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#FDFDFD] mb-2" style={{ fontSize: '36px' }}>
            Configurações
          </h1>
          <p className="text-[#B3AAFF]" style={{ fontSize: '18px' }}>
            Gerencie suas informações e preferências de conta.
          </p>
        </div>

        {/* Card Central - Informações Pessoais */}
        <div 
          className="bg-[#FDFDFD] rounded-3xl p-8 mb-6 max-w-3xl"
          style={{ boxShadow: '0 10px 40px rgba(179, 170, 255, 0.3)' }}
        >
          <h2 className="text-[#380361] mb-6" style={{ fontSize: '24px' }}>
            Informações Pessoais
          </h2>

          <div className="space-y-6">
            {/* Nome do Jogador */}
            <div>
              <label className="block text-[#49007F] mb-2" style={{ fontSize: '14px' }}>
                Nome do Jogador
              </label>
              <input
                type="text"
                value={formData.nomeJogador}
                onChange={(e) => setFormData({ ...formData, nomeJogador: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DAD6FF] text-[#1E1E1E] outline-none focus:border-[#49007F] transition-all"
                style={{ fontSize: '16px' }}
              />
            </div>

            {/* Apelido In-Game */}
            <div>
              <label className="block text-[#49007F] mb-2" style={{ fontSize: '14px' }}>
                Apelido In-Game
              </label>
              <input
                type="text"
                value={formData.apelidoInGame}
                onChange={(e) => setFormData({ ...formData, apelidoInGame: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DAD6FF] text-[#1E1E1E] outline-none focus:border-[#49007F] transition-all"
                style={{ fontSize: '16px' }}
              />
            </div>

            {/* Time Vinculado - Bloqueado */}
            <div>
              <label className="block text-[#49007F] mb-2" style={{ fontSize: '14px' }}>
                Time Vinculado
              </label>
              <input
                type="text"
                value={formData.timeVinculado}
                disabled
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DAD6FF] bg-[#F6F4FF] text-[#4B4B4B] cursor-not-allowed"
                style={{ fontSize: '16px' }}
              />
              <p className="text-[#4B4B4B] mt-1 text-xs">
                Gerenciado pelo seu coach
              </p>
            </div>

            {/* E-mail - Bloqueado */}
            <div>
              <label className="block text-[#49007F] mb-2" style={{ fontSize: '14px' }}>
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DAD6FF] bg-[#F6F4FF] text-[#4B4B4B] cursor-not-allowed"
                style={{ fontSize: '16px' }}
              />
              <p className="text-[#4B4B4B] mt-1 text-xs">
                Somente leitura
              </p>
            </div>
          </div>

          {/* Botão Salvar Informações */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSaveInfo}
              className="px-8 py-3 rounded-xl bg-[#49007F] text-[#FDFDFD] hover:bg-[#B3AAFF] hover:text-[#380361] transition-all transform hover:scale-105"
              style={{ fontSize: '16px' }}
            >
              Salvar Alterações
            </button>
          </div>
        </div>

        {/* Seção: Segurança da Conta */}
        <div 
          className="bg-[#FDFDFD] rounded-3xl p-8 max-w-3xl"
          style={{ boxShadow: '0 10px 40px rgba(179, 170, 255, 0.3)' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Lock size={24} className="text-[#380361]" />
            <h2 className="text-[#380361]" style={{ fontSize: '24px' }}>
              Segurança da Conta
            </h2>
          </div>

          <div className="space-y-6">
            {/* Senha Atual */}
            <div>
              <label className="block text-[#49007F] mb-2" style={{ fontSize: '14px' }}>
                Senha Atual
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#49007F]">
                  <Lock size={18} />
                </div>
                <input
                  type={showPasswords.atual ? "text" : "password"}
                  value={senhaData.senhaAtual}
                  onChange={(e) => setSenhaData({ ...senhaData, senhaAtual: e.target.value })}
                  placeholder="Digite sua senha atual"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-[#DAD6FF] text-[#1E1E1E] outline-none focus:border-[#49007F] transition-all"
                  style={{ fontSize: '16px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords({ ...showPasswords, atual: !showPasswords.atual })}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#49007F] hover:text-[#380361]"
                >
                  {showPasswords.atual ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Nova Senha */}
            <div>
              <label className="block text-[#49007F] mb-2" style={{ fontSize: '14px' }}>
                Nova Senha
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#49007F]">
                  <Lock size={18} />
                </div>
                <input
                  type={showPasswords.nova ? "text" : "password"}
                  value={senhaData.novaSenha}
                  onChange={(e) => setSenhaData({ ...senhaData, novaSenha: e.target.value })}
                  placeholder="Digite a nova senha"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-[#DAD6FF] text-[#1E1E1E] outline-none focus:border-[#49007F] transition-all"
                  style={{ fontSize: '16px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords({ ...showPasswords, nova: !showPasswords.nova })}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#49007F] hover:text-[#380361]"
                >
                  {showPasswords.nova ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirmar Nova Senha */}
            <div>
              <label className="block text-[#49007F] mb-2" style={{ fontSize: '14px' }}>
                Confirmar Nova Senha
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#49007F]">
                  <Lock size={18} />
                </div>
                <input
                  type={showPasswords.confirmar ? "text" : "password"}
                  value={senhaData.confirmarSenha}
                  onChange={(e) => setSenhaData({ ...senhaData, confirmarSenha: e.target.value })}
                  placeholder="Confirme a nova senha"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-[#DAD6FF] text-[#1E1E1E] outline-none focus:border-[#49007F] transition-all"
                  style={{ fontSize: '16px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords({ ...showPasswords, confirmar: !showPasswords.confirmar })}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#49007F] hover:text-[#380361]"
                >
                  {showPasswords.confirmar ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Feedback Visual */}
            {feedbackMessage.type && (
              <div
                className={`p-4 rounded-xl border-2 ${
                  feedbackMessage.type === 'success'
                    ? 'bg-green-50 border-green-300 text-green-800'
                    : 'bg-red-50 border-red-300 text-red-800'
                }`}
              >
                <p style={{ fontSize: '14px' }}>
                  {feedbackMessage.text}
                </p>
              </div>
            )}
          </div>

          {/* Botão Alterar Senha */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleChangePassword}
              className="px-8 py-3 rounded-xl bg-[#B3AAFF] text-[#380361] hover:shadow-[0_0_30px_rgba(179,170,255,0.6)] transition-all transform hover:scale-105"
              style={{ fontSize: '16px' }}
            >
              Alterar Senha
            </button>
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-8 max-w-3xl">
          <p className="text-[#B3AAFF] text-center" style={{ fontSize: '14px' }}>
            As alterações são salvas automaticamente e aplicadas nas próximas sessões.
          </p>
        </div>

        {/* Mascote com Glow */}
        <div 
          className="fixed bottom-8 right-8 text-[60px] opacity-50 hover:opacity-100 transition-all cursor-pointer animate-float"
          style={{ filter: 'drop-shadow(0 0 25px rgba(179, 170, 255, 0.8))' }}
        >
          👾
        </div>
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
