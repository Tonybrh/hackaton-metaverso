import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "../Logo";

export function WelcomeScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Pega o nome do coach que foi passado pela rota (se houver)
  const coachName = location.state?.coachName || "Coach";

  useEffect(() => {
    // Atualiza a barra de progresso gradualmente
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 80); // Completa em ~4 segundos

    // Após 4 segundos, inicia o fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Após 5 segundos (4s + 1s de fade), redireciona para o dashboard
    const redirectTimer = setTimeout(() => {
      navigate("/coach/dashboard", { state: { coachName } });
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate, coachName]);

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex items-center justify-center p-8 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-3xl space-y-16 text-center">
        {/* Logo no topo */}
        <div className="flex items-center justify-center gap-4 opacity-90">
          <span className="text-[40px]">👾</span>
          <Logo variant="light" size="xlarge" />
        </div>

        {/* Mascote principal com animação de flutuação */}
        <div className="relative">
          <div 
            className="text-[180px]"
            style={{ 
              filter: 'drop-shadow(0 0 40px rgba(179, 170, 255, 0.8))',
              animation: 'float 3s ease-in-out infinite'
            }}
          >
            👾
          </div>
          
          {/* Círculos decorativos ao redor do mascote */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full border-2 border-[#B3AAFF]/20 animate-ping" 
                 style={{ animationDuration: '3s' }} 
            />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full border border-[#B3AAFF]/10 animate-pulse" 
                 style={{ animationDuration: '2s' }} 
            />
          </div>
        </div>

        {/* Texto principal */}
        <div className="space-y-4">
          <h1 
            className="text-[#FDFDFD]"
            style={{ fontSize: '42px' }}
          >
            Estamos preparando seu ambiente, aguarde!
          </h1>
          
          <p 
            className="text-[#B3AAFF]"
            style={{ fontSize: '20px' }}
          >
            Carregando painel do Coach...
          </p>
        </div>

        {/* Barra de progresso */}
        <div className="space-y-4 px-12">
          <div className="w-full h-3 bg-[#380361]/50 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-[#B3AAFF] via-[#49007F] to-[#B3AAFF] rounded-full transition-all duration-300 ease-out relative"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(179, 170, 255, 0.5)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
          
          <div className="text-[#B3AAFF]/80 text-center">
            {progress}%
          </div>
        </div>

        {/* Partículas decorativas */}
        <div className="flex items-center justify-center gap-3">
          <div 
            className="w-2 h-2 bg-[#B3AAFF] rounded-full animate-pulse"
            style={{ animationDelay: '0ms', animationDuration: '1.5s' }}
          />
          <div 
            className="w-2 h-2 bg-[#B3AAFF] rounded-full animate-pulse"
            style={{ animationDelay: '200ms', animationDuration: '1.5s' }}
          />
          <div 
            className="w-2 h-2 bg-[#B3AAFF] rounded-full animate-pulse"
            style={{ animationDelay: '400ms', animationDuration: '1.5s' }}
          />
          <div 
            className="w-2 h-2 bg-[#B3AAFF] rounded-full animate-pulse"
            style={{ animationDelay: '600ms', animationDuration: '1.5s' }}
          />
          <div 
            className="w-2 h-2 bg-[#B3AAFF] rounded-full animate-pulse"
            style={{ animationDelay: '800ms', animationDuration: '1.5s' }}
          />
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
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
