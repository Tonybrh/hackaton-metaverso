import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PlayerLoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login e navegar para o dashboard do player
    console.log("Login:", formData);
  };

  const handleForgotPassword = () => {
    console.log("Esqueceu senha - abrir modal");
  };

  const handleActivateAccount = () => {
    console.log("Ativar conta - redirecionar");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121111] via-[#380361] to-[#49007F] flex items-center justify-center overflow-hidden relative">
      {/* Partículas de fundo animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#B3AAFF] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center relative z-10">
        {/* Card de Login - Esquerda */}
        <div 
          className="bg-[#FDFDFD]/10 backdrop-blur-lg p-12 rounded-[20px] shadow-2xl relative border border-[#B3AAFF]/20"
          style={{ boxShadow: '0 20px 60px rgba(179, 170, 255, 0.4)' }}
        >
          {/* Logo/Marca */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span style={{ fontSize: '48px' }}>👾</span>
              <h1 
                className="text-[#FDFDFD]"
                style={{ fontSize: '32px', letterSpacing: '-0.5px' }}
              >
                DataGG
              </h1>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-[#B3AAFF] to-[#49007F] rounded-full" />
          </div>

          {/* Título */}
          <div className="mb-10">
            <h2 className="text-[#FDFDFD]" style={{ fontSize: '36px' }}>
              Bem-vindo, Player 👾
            </h2>
            <p className="text-[#B3AAFF]" style={{ fontSize: '16px' }}>
              Acesse seu painel e acompanhe sua evolução.
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Campo E-mail */}
            <div>
              <label className="block text-[#FDFDFD] mb-2" style={{ fontSize: '14px' }}>
                E-mail
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ fontSize: '20px' }}>
                  ✉️
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-[#B3AAFF]/40 bg-[#FDFDFD]/5 text-[#FDFDFD] placeholder-[#B3AAFF]/60 outline-none focus:border-[#B3AAFF] focus:bg-[#FDFDFD]/10 transition-all"
                  placeholder="Digite o e-mail cadastrado pelo seu Coach"
                  style={{ fontSize: '16px' }}
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <label className="block text-[#FDFDFD] mb-2" style={{ fontSize: '14px' }}>
                Senha
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ fontSize: '20px' }}>
                  🔒
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-[#B3AAFF]/40 bg-[#FDFDFD]/5 text-[#FDFDFD] placeholder-[#B3AAFF]/60 outline-none focus:border-[#B3AAFF] focus:bg-[#FDFDFD]/10 transition-all"
                  placeholder="Senha criada durante a ativação do link recebido por e-mail"
                  style={{ fontSize: '16px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#B3AAFF] hover:text-[#FDFDFD] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Checkbox Lembrar */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 rounded border-2 border-[#B3AAFF] text-[#49007F] focus:ring-2 focus:ring-[#B3AAFF] cursor-pointer accent-[#49007F]"
              />
              <label 
                htmlFor="remember" 
                className="text-[#FDFDFD] cursor-pointer select-none"
                style={{ fontSize: '14px' }}
              >
                ☑️ Lembrar acesso
              </label>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#49007F] text-[#FDFDFD] hover:bg-[#B3AAFF] hover:text-[#121111] transition-all transform active:scale-98 shadow-lg"
              style={{ 
                fontSize: '18px',
                boxShadow: '0 10px 30px rgba(179, 170, 255, 0.4)',
                transition: 'all 0.3s ease, transform 0.15s ease'
              }}
            >
              Acessar Conta
            </button>

            {/* Links */}
            <div className="flex flex-col gap-3 pt-4">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-[#B3AAFF] hover:text-[#D3CFFF] transition-colors text-center"
                style={{ fontSize: '14px' }}
              >
                Esqueceu sua senha?
              </button>
              <button
                type="button"
                onClick={handleActivateAccount}
                className="text-[#B3AAFF] hover:text-[#D3CFFF] transition-colors text-center"
                style={{ fontSize: '14px' }}
              >
                Ativar minha conta
              </button>
            </div>
          </form>
        </div>

        {/* Área Visual - Direita */}
        <div className="relative flex items-center justify-center">
          {/* Círculo de fundo com glow */}
          <div 
            className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#B3AAFF]/20 to-[#49007F]/20 blur-3xl animate-pulse"
            style={{ animationDuration: '3s' }}
          />

          {/* Mascote principal */}
          <div className="relative z-10">
            <div 
              className="text-center animate-float"
              style={{ animationDuration: '4s' }}
            >
              <div 
                className="text-[200px] filter drop-shadow-2xl"
                style={{ 
                  filter: 'drop-shadow(0 0 40px rgba(179, 170, 255, 0.8))',
                  textShadow: '0 0 60px rgba(179, 170, 255, 0.6)'
                }}
              >
                👾
              </div>
            </div>

            {/* Gráficos holográficos flutuantes */}
            <div className="absolute -top-20 -left-20 w-32 h-32 border-2 border-[#B3AAFF]/50 rounded-2xl rotate-12 animate-float" 
              style={{ animationDelay: '0.5s', animationDuration: '5s' }}
            />
            <div className="absolute -bottom-16 -right-16 w-40 h-40 border-2 border-[#B3AAFF]/40 rounded-full animate-float" 
              style={{ animationDelay: '1s', animationDuration: '6s' }}
            />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#B3AAFF]/20 to-transparent rounded-lg rotate-45 animate-float blur-sm" 
              style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}
            />

            {/* Linhas de dados holográficos */}
            <div className="absolute -left-32 top-1/2 space-y-2 opacity-60">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#B3AAFF] to-transparent animate-pulse" />
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B3AAFF] to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#B3AAFF] to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="absolute -right-32 top-1/3 space-y-2 opacity-60">
              <div className="h-1 w-28 bg-gradient-to-r from-transparent via-[#B3AAFF] to-transparent animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#B3AAFF] to-transparent animate-pulse" style={{ animationDelay: '0.8s' }} />
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B3AAFF] to-transparent animate-pulse" style={{ animationDelay: '1.3s' }} />
            </div>
          </div>

          {/* Texto decorativo */}
          <div className="absolute bottom-0 text-center">
            <p className="text-[#B3AAFF]/60" style={{ fontSize: '14px', letterSpacing: '2px' }}>
              ANALYTICS • PERFORMANCE • EVOLUTION
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .active\\:scale-98:active {
          transform: scale(0.98) !important;
        }

        input[type="checkbox"] {
          accent-color: #49007F;
        }
      `}</style>
    </div>
  );
}
