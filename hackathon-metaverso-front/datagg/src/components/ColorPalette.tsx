export function ColorPalette() {
  const colorGroups = [
    {
      title: "🎨 Cores Principais do DataGG",
      subtitle: "Paleta de identidade visual gamer-tech",
      colors: [
        {
          name: "Purple Dark",
          hex: "#380361",
          usage: "Fundos primários, degradês, sidebar dark mode",
          variable: "--datagg-purple-dark"
        },
        {
          name: "Purple Mid",
          hex: "#49007F",
          usage: "Fundos secundários, botões, degradês",
          variable: "--datagg-purple-mid"
        },
        {
          name: "Purple Light / Lilás",
          hex: "#B3AAFF",
          usage: "Destaques, hover, bordas, ícones ativos, glow effects",
          variable: "--datagg-purple-light"
        },
        {
          name: "White / Off-White",
          hex: "#FDFDFD",
          usage: "Textos principais (modo escuro), cards, fundos claros",
          variable: "--datagg-white"
        },
        {
          name: "Black / Dark Background",
          hex: "#121111",
          usage: "Fundos escuros, texto (modo claro)",
          variable: "--datagg-black"
        }
      ]
    },
    {
      title: "🌙 Modo Escuro (Dark Mode)",
      subtitle: "Paleta utilizada quando o tema escuro está ativo",
      colors: [
        {
          name: "Background Gradient",
          hex: "#380361 → #49007F",
          usage: "Degradê de fundo principal das telas",
          variable: "N/A"
        },
        {
          name: "Cards & Panels",
          hex: "#FDFDFD",
          usage: "Fundo dos cards principais e painéis de conteúdo",
          variable: "--card"
        },
        {
          name: "Secondary Cards",
          hex: "#2B0E57",
          usage: "Cards de formulário, seções secundárias",
          variable: "N/A"
        },
        {
          name: "Sidebar Background",
          hex: "#49007F → #380361",
          usage: "Degradê da barra lateral de navegação",
          variable: "N/A"
        },
        {
          name: "Text Primary",
          hex: "#FDFDFD",
          usage: "Títulos e texto principal em fundos escuros",
          variable: "--foreground"
        },
        {
          name: "Text Secondary",
          hex: "#B3AAFF",
          usage: "Subtítulos, descrições, labels secundários",
          variable: "N/A"
        },
        {
          name: "Borders & Dividers",
          hex: "#B3AAFF (30-50% opacity)",
          usage: "Bordas de cards, separadores, outlines",
          variable: "N/A"
        },
        {
          name: "Inputs Focus",
          hex: "#49007F",
          usage: "Estado de foco em campos de entrada",
          variable: "N/A"
        },
        {
          name: "Button Gradient",
          hex: "#49007F → #380361",
          usage: "Botões primários (salvar, enviar, confirmar)",
          variable: "N/A"
        },
        {
          name: "Active State",
          hex: "#6E00FF → #B3AAFF",
          usage: "Item ativo na sidebar (com glow lilás)",
          variable: "N/A"
        }
      ]
    },
    {
      title: "🌞 Modo Claro (Light Mode)",
      subtitle: "Paleta utilizada quando o tema claro está ativo",
      colors: [
        {
          name: "Background Gradient",
          hex: "#F6F4FF → #E8E4FF",
          usage: "Degradê de fundo principal das telas (claro)",
          variable: "N/A"
        },
        {
          name: "Sidebar Background",
          hex: "#5E4BFF",
          usage: "Barra lateral em roxo médio vibrante",
          variable: "N/A"
        },
        {
          name: "Cards & Panels",
          hex: "#FFFFFF",
          usage: "Fundo dos cards principais (branco puro)",
          variable: "--card"
        },
        {
          name: "Borders & Dividers",
          hex: "#DAD6FF",
          usage: "Bordas de cards, separadores",
          variable: "N/A"
        },
        {
          name: "Text Primary",
          hex: "#1E1E1E",
          usage: "Títulos e texto principal",
          variable: "N/A"
        },
        {
          name: "Text Secondary",
          hex: "#4B4B4B",
          usage: "Subtítulos, descrições, texto auxiliar",
          variable: "N/A"
        },
        {
          name: "Primary Accent",
          hex: "#5E4BFF",
          usage: "Destaques, ícones ativos, hover primário",
          variable: "N/A"
        },
        {
          name: "Secondary Accent",
          hex: "#B3AAFF",
          usage: "Hover secundário, estados intermediários",
          variable: "N/A"
        },
        {
          name: "Active State Background",
          hex: "#EEE9FF",
          usage: "Fundo de botões ativos e selecionados",
          variable: "N/A"
        },
        {
          name: "Button Gradient",
          hex: "#6A3BCC → #49007F",
          usage: "Botões primários (mais vibrante que dark mode)",
          variable: "N/A"
        },
        {
          name: "Section Background",
          hex: "#F6F4FF",
          usage: "Seções de destaque, painéis informativos",
          variable: "N/A"
        }
      ]
    },
    {
      title: "🎯 Cores Funcionais",
      subtitle: "Estados, feedbacks e elementos especiais",
      colors: [
        {
          name: "Success / Confirmation",
          hex: "#4ADE80 → #22C55E",
          usage: "Feedback de sucesso, confirmações, checkmarks",
          variable: "N/A"
        },
        {
          name: "Error / Destructive",
          hex: "#D4183D",
          usage: "Erros, avisos críticos, ações destrutivas",
          variable: "--destructive"
        },
        {
          name: "Warning / Alert",
          hex: "#F59E0B → #EAB308",
          usage: "Avisos, alertas de atenção",
          variable: "N/A"
        },
        {
          name: "Info / Neutral",
          hex: "#60A5FA → #3B82F6",
          usage: "Informações neutras, tooltips",
          variable: "N/A"
        },
        {
          name: "Glow Effect (Purple)",
          hex: "rgba(179, 170, 255, 0.4-0.6)",
          usage: "Efeitos de brilho, sombras coloridas, halos",
          variable: "N/A"
        },
        {
          name: "Overlay Background",
          hex: "rgba(56, 3, 97, 0.9)",
          usage: "Modais, overlays, backdrop blur",
          variable: "N/A"
        },
        {
          name: "Input Background (Dark)",
          hex: "rgba(56, 3, 97, 0.5)",
          usage: "Fundo de inputs em modo escuro",
          variable: "N/A"
        },
        {
          name: "Particles & Decorations",
          hex: "#B3AAFF (40% opacity)",
          usage: "Partículas flutuantes de fundo",
          variable: "N/A"
        }
      ]
    },
    {
      title: "📊 Cores de Gráficos (Charts)",
      subtitle: "Paleta para visualizações de dados (Recharts)",
      colors: [
        {
          name: "Chart Primary",
          hex: "#B3AAFF",
          usage: "Barras, linhas e áreas principais",
          variable: "--chart-1"
        },
        {
          name: "Chart Secondary",
          hex: "#8B7FFF",
          usage: "Elementos secundários em gráficos",
          variable: "--chart-2"
        },
        {
          name: "Chart Accent 1",
          hex: "#6E60FF",
          usage: "Destaques e variações",
          variable: "--chart-3"
        },
        {
          name: "Chart Accent 2",
          hex: "#5648E8",
          usage: "Contraste e múltiplas séries",
          variable: "--chart-4"
        },
        {
          name: "Chart Grid",
          hex: "#49007F",
          usage: "Grids e linhas auxiliares",
          variable: "N/A"
        }
      ]
    },
    {
      title: "🖼️ Elementos Especiais",
      subtitle: "Componentes e detalhes visuais",
      colors: [
        {
          name: "Mascote Glow",
          hex: "rgba(179, 170, 255, 0.6)",
          usage: "Brilho do mascote 👾",
          variable: "N/A"
        },
        {
          name: "Sidebar Active Glow",
          hex: "0 0 20px rgba(179, 170, 255, 0.4)",
          usage: "Box-shadow do item ativo na sidebar",
          variable: "N/A"
        },
        {
          name: "Button Hover Shadow",
          hex: "0 10px 30px rgba(179, 170, 255, 0.4)",
          usage: "Sombra dos botões principais ao hover",
          variable: "N/A"
        },
        {
          name: "Card Shadow (Dark)",
          hex: "0 8px 32px rgba(179, 170, 255, 0.15)",
          usage: "Sombra dos cards em modo escuro",
          variable: "N/A"
        },
        {
          name: "Card Shadow (Light)",
          hex: "0 10px 30px rgba(94, 75, 255, 0.15)",
          usage: "Sombra dos cards em modo claro",
          variable: "N/A"
        },
        {
          name: "Scrollbar Thumb",
          hex: "#B3AAFF",
          usage: "Alça customizada da barra de rolagem",
          variable: "N/A"
        },
        {
          name: "Scrollbar Track",
          hex: "rgba(56, 3, 97, 0.3)",
          usage: "Trilha da barra de rolagem",
          variable: "N/A"
        },
        {
          name: "Range Slider",
          hex: "#B3AAFF (gradient preenchimento)",
          usage: "Preenchimento de sliders de range",
          variable: "N/A"
        }
      ]
    }
  ];

  const ColorCard = ({ color }: { color: typeof colorGroups[0]['colors'][0] }) => {
    const isGradient = color.hex.includes("→");
    const isShadow = color.hex.includes("0 ");
    const hexValue = isGradient ? color.hex.split(" → ")[0] : color.hex;
    
    return (
      <div className="bg-white rounded-2xl border-2 border-[#DAD6FF] p-5 hover:shadow-lg transition-all hover:border-[#B3AAFF]">
        <div className="flex gap-4 items-start">
          <div 
            className="w-20 h-20 rounded-xl flex-shrink-0 border-2 border-gray-200"
            style={{
              background: isGradient 
                ? `linear-gradient(135deg, ${color.hex.replace(" → ", ", ")})`
                : isShadow
                ? "#B3AAFF"
                : color.hex,
              boxShadow: isShadow ? color.hex : "none"
            }}
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-[#1E1E1E] mb-1" style={{ fontSize: '16px' }}>
              {color.name}
            </h4>
            <p className="text-[#5E4BFF] mb-2" style={{ fontSize: '13px' }}>
              {color.hex}
            </p>
            <p className="text-[#4B4B4B] mb-2 text-xs leading-relaxed">
              {color.usage}
            </p>
            {color.variable !== "N/A" && (
              <code className="text-xs bg-[#F6F4FF] text-[#5E4BFF] px-2 py-1 rounded">
                {color.variable}
              </code>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F4FF] to-[#E8E4FF] p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[64px]">👾</span>
            <h1 className="text-[#1E1E1E]" style={{ fontSize: '48px' }}>
              DataGG
            </h1>
          </div>
          <h2 className="text-[#5E4BFF] mb-3" style={{ fontSize: '32px' }}>
            Paleta de Cores Completa
          </h2>
          <p className="text-[#4B4B4B] max-w-3xl mx-auto" style={{ fontSize: '18px' }}>
            Sistema de design gamer-tech com suporte para modo claro e escuro.
            <br />
            Todas as cores, gradientes e efeitos visuais utilizados no projeto.
          </p>
        </div>

        {/* Tipografia e Ícones */}
        <div className="bg-white rounded-3xl border-2 border-[#DAD6FF] p-8 mb-8 shadow-lg">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#1E1E1E] mb-3" style={{ fontSize: '20px' }}>
                🔤 Tipografia
              </h3>
              <p className="text-[#4B4B4B]">
                <span className="block mb-2">Fonte: <strong>Poppins</strong></span>
                <span className="block text-sm">• Bold (700) - Títulos</span>
                <span className="block text-sm">• Medium (500) - Labels</span>
                <span className="block text-sm">• Regular (400) - Texto</span>
              </p>
            </div>
            <div>
              <h3 className="text-[#1E1E1E] mb-3" style={{ fontSize: '20px' }}>
                🎭 Mascote
              </h3>
              <p className="text-[#4B4B4B]">
                <span className="block mb-2 text-4xl">👾</span>
                <span className="block text-sm">Estilo pixelado minimalista</span>
                <span className="block text-sm">Glow lilás característico</span>
              </p>
            </div>
            <div>
              <h3 className="text-[#1E1E1E] mb-3" style={{ fontSize: '20px' }}>
                📐 Dimensões
              </h3>
              <p className="text-[#4B4B4B]">
                <span className="block text-sm mb-2">Desktop: <strong>1920×1080</strong></span>
                <span className="block text-sm">Bordas: 16-20px arredondadas</span>
                <span className="block text-sm">Transições: 200-300ms</span>
              </p>
            </div>
          </div>
        </div>

        {/* Color Groups */}
        <div className="space-y-12">
          {colorGroups.map((group, idx) => (
            <div key={idx}>
              <div className="mb-6">
                <h3 className="text-[#1E1E1E] mb-2" style={{ fontSize: '28px' }}>
                  {group.title}
                </h3>
                <p className="text-[#4B4B4B]" style={{ fontSize: '16px' }}>
                  {group.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.colors.map((color, colorIdx) => (
                  <ColorCard key={colorIdx} color={color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 bg-[#EEE9FF]/60 border-2 border-[#DAD6FF] rounded-2xl p-8 text-center">
          <p className="text-[#4B4B4B]" style={{ fontSize: '16px' }}>
            💡 <strong>Nota:</strong> Esta paleta foi desenvolvida para garantir acessibilidade, contraste adequado
            e identidade visual consistente em todas as telas do DataGG. Os valores em opacidade (rgba) são utilizados
            para criar profundidade e hierarquia visual através de camadas e sobreposições.
          </p>
        </div>

        {/* Mascote flutuante */}
        <div 
          className="fixed bottom-8 right-8 text-[80px] opacity-40 hover:opacity-100 transition-opacity cursor-pointer animate-float"
          style={{ filter: 'drop-shadow(0 0 20px rgba(94, 75, 255, 0.6))' }}
        >
          👾
        </div>
      </div>

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
