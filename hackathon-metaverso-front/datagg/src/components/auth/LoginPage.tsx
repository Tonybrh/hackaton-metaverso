import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Logo } from "../Logo";
import { BackToHomeButton } from "../BackToHomeButton";

export function LoginPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"coach" | "player">("player");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === "coach") {
      navigate("/coach/dashboard");
    } else {
      navigate("/player/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#121111] flex relative">
      <BackToHomeButton />
      <div className="flex-1 flex items-center justify-center p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span 
                className="text-[60px]"
                style={{ 
                  filter: 'drop-shadow(0 0 12px rgba(179, 170, 255, 0.3))'
                }}
              >
                👾
              </span>
              <Logo variant="light" size="xxlarge" />
            </div>
            <h2 className="text-[#FDFDFD]" style={{ fontSize: '28px' }}>
              Bem-vindo de volta
            </h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setUserType("coach")}
                className={`flex-1 py-3 rounded-lg transition-all flex items-center justify-center ${
                  userType === "coach"
                    ? "bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD]"
                    : "bg-[#380361]/30 text-[#B3AAFF] hover:bg-[#380361]/50"
                }`}
              >
                👨‍💼 Coach
              </button>
              <button
                type="button"
                onClick={() => setUserType("player")}
                className={`flex-1 py-3 rounded-lg transition-all flex items-center justify-center ${
                  userType === "player"
                    ? "bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD]"
                    : "bg-[#380361]/30 text-[#B3AAFF] hover:bg-[#380361]/50"
                }`}
              >
                🎮 Jogador
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[#B3AAFF] mb-2">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
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
                  className="w-full px-4 py-3 rounded-lg bg-[#380361]/30 border border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#380361]/30 border-[#49007F]/50"
                />
                <span className="text-[#B3AAFF]">Lembrar acesso</span>
              </label>
              <button
                type="button"
                onClick={() => navigate("/esqueceu-senha")}
                className="text-[#B3AAFF] hover:text-[#FDFDFD] transition-colors"
              >
                Esqueceu a senha?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-xl hover:shadow-[#49007F]/50 transition-all flex items-center justify-center"
            >
              Entrar
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate("/criar-conta")}
                className="text-[#B3AAFF] hover:text-[#FDFDFD] transition-colors"
              >
                Não tem conta? <span className="underline">Criar Conta</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#49007F] to-[#380361] opacity-40" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwNDA2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="AI Technology"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
