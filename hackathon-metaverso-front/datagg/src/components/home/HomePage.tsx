import { Navbar } from "../Navbar";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Logo } from "../Logo";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121111]">
      <Navbar />
      
      <div className="container mx-auto px-8 pt-32 pb-16">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-[48px]">👾</span>
              <Logo variant="light" size="hero" />
            </div>
            
            <h2 className="text-[#FDFDFD]" style={{ fontSize: '42px', lineHeight: '1.3' }}>
              A inteligência dos bastidores do e-sports
            </h2>
            
            <p className="text-[#B3AAFF]" style={{ fontSize: '20px', lineHeight: '1.6' }}>
              Transforma dados pós-partida em mapas, insights e narrativas automáticas.
            </p>

            <button 
              onClick={() => navigate("/login")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-2xl hover:shadow-[#49007F]/50 transition-all transform hover:scale-105 flex items-center justify-center"
              style={{ fontSize: '18px' }}
            >
              Comece Agora
            </button>

            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#49007F] to-[#B3AAFF] border-2 border-[#121111]"
                  />
                ))}
              </div>
              <p className="text-[#B3AAFF]">
                +500 jogadores já confiam na DataGG
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#49007F] to-[#B3AAFF] rounded-3xl blur-3xl opacity-30" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760999896198-b7e780e42500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMHB1cnBsZSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2MjA0MDYxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gaming Setup"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-32">
          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-8 rounded-2xl border border-[#B3AAFF]/20">
            <div className="text-[40px] mb-4">📊</div>
            <h3 className="text-[#FDFDFD] mb-3">Análise Inteligente</h3>
            <p className="text-[#B3AAFF]">
              IA transforma dados brutos em insights acionáveis sobre performance e bem-estar
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-8 rounded-2xl border border-[#B3AAFF]/20">
            <div className="text-[40px] mb-4">🎯</div>
            <h3 className="text-[#FDFDFD] mb-3">Relatórios Automáticos</h3>
            <p className="text-[#B3AAFF]">
              Documentação completa de cada sessão com métricas técnicas e humanas
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-8 rounded-2xl border border-[#B3AAFF]/20">
            <div className="text-[40px] mb-4">💬</div>
            <h3 className="text-[#FDFDFD] mb-3">Assistente IA</h3>
            <p className="text-[#B3AAFF]">
              Chatbot inteligente que acompanha rotina e fornece recomendações personalizadas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
