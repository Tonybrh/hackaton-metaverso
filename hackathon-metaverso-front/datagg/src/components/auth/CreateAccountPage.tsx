import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Logo } from "../Logo";
import { BackToHomeButton } from "../BackToHomeButton";

export function CreateAccountPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica de senha
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    setSuccess(true);
    // Redireciona para a tela de boas-vindas após 2 segundos
    setTimeout(() => {
      navigate("/welcome", {
        state: { coachName: name.split(" ")[0] },
      });
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#121111] flex items-center justify-center p-8 relative">
        <BackToHomeButton />
        <div className="w-full max-w-md space-y-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[40px]">👾</span>
            <Logo variant="light" size="xlarge" />
          </div>

          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-12 rounded-2xl border border-[#B3AAFF]/20 space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#B3AAFF]/20 flex items-center justify-center">
              <Check size={40} className="text-[#B3AAFF]" />
            </div>

            <h2 className="text-[#FDFDFD]" style={{ fontSize: "28px" }}>
              Conta criada com sucesso!
            </h2>

            <p className="text-[#B3AAFF]" style={{ fontSize: "18px" }}>
              Bem-vindo à DataGG, Coach.
            </p>

            <p className="text-[#B3AAFF]/70">Preparando seu painel...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121111] flex relative">
      <BackToHomeButton />

      {/* Lado esquerdo - Formulário */}
      <div className="flex-1 flex items-center justify-center p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span
                className="text-[60px]"
                style={{
                  filter: "drop-shadow(0 0 12px rgba(179, 170, 255, 0.4))",
                }}
              >
                👾
              </span>
              <Logo variant="light" size="xxlarge" />
            </div>
            <h2 className="text-[#FDFDFD]" style={{ fontSize: "28px" }}>
              Criar Conta de Coach
            </h2>
            <p className="text-[#B3AAFF]">
              Comece a analisar o desempenho da sua equipe
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-[#B3AAFF] mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#380361]/30 border border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#B3AAFF] mb-2">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#380361]/30 border border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#B3AAFF] mb-2">
                  Nome da equipe
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Nome da sua equipe"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#380361]/30 border border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#B3AAFF] mb-2">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#380361]/30 border border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#B3AAFF] mb-2">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#380361]/30 border border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-colors"
                />
              </div>
            </div>

            <div className="bg-[#380361]/20 border border-[#49007F]/30 rounded-lg p-4">
              <p className="text-[#B3AAFF]">
                Ao criar sua conta, você concorda com os{" "}
                <span className="text-[#FDFDFD] underline cursor-pointer">
                  Termos da DataGG
                </span>{" "}
                e com o uso dos seus dados para gerar análises e insights.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-xl hover:shadow-[#49007F]/50 transition-all flex items-center justify-center"
            >
              Criar Conta de Coach
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-[#B3AAFF] hover:text-[#FDFDFD] transition-colors"
              >
                Já tem conta? <span className="underline">Fazer Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Lado direito - Mascote */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#49007F] to-[#380361] opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[300px] opacity-30">👾</span>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(179,170,255,0.1),transparent_50%)]" />
      </div>
    </div>
  );
}
