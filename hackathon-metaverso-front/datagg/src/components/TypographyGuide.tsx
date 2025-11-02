export function TypographyGuide() {
  const fontWeights = [
    {
      name: "Regular",
      weight: "400",
      usage: "Corpo de texto, parágrafos, descrições, inputs",
      examples: [
        { text: "Texto corrido e parágrafos descritivos", size: "16px" },
        { text: "Labels de formulário e campos de entrada", size: "14px" },
        { text: "Informações secundárias e notas de rodapé", size: "12px" }
      ]
    },
    {
      name: "Medium",
      weight: "500",
      usage: "Labels, botões, navegação, subtítulos",
      examples: [
        { text: "Botões de ação e navegação", size: "16px" },
        { text: "Labels de campos e categorias", size: "14px" },
        { text: "Itens de menu e tabs", size: "16px" }
      ]
    },
    {
      name: "Semi-Bold",
      weight: "600",
      usage: "Subtítulos importantes, cards destacados",
      examples: [
        { text: "Subtítulos de seções", size: "18px" },
        { text: "Títulos de cards e painéis", size: "20px" },
        { text: "Números e métricas destacadas", size: "24px" }
      ]
    },
    {
      name: "Bold",
      weight: "700",
      usage: "Títulos principais, headers, chamadas de atenção",
      examples: [
        { text: "Títulos de páginas principais (H1)", size: "36px" },
        { text: "Títulos de seções (H2)", size: "28px" },
        { text: "Subtítulos de destaque (H3)", size: "24px" }
      ]
    }
  ];

  const typographyScale = [
    { label: "Display Large", size: "48px", weight: "700", usage: "Hero sections, landing pages" },
    { label: "Display Medium", size: "36px", weight: "700", usage: "Títulos principais de página (H1)" },
    { label: "Title Large", size: "32px", weight: "600-700", usage: "Títulos de destaque" },
    { label: "Title Medium", size: "28px", weight: "600", usage: "Títulos de seção (H2)" },
    { label: "Title Small", size: "24px", weight: "600", usage: "Subtítulos importantes (H3)" },
    { label: "Headline", size: "20px", weight: "500-600", usage: "Títulos de cards, painéis" },
    { label: "Body Large", size: "18px", weight: "400-500", usage: "Texto de destaque, intros" },
    { label: "Body Medium", size: "16px", weight: "400", usage: "Corpo de texto padrão" },
    { label: "Body Small", size: "14px", weight: "400", usage: "Descrições, labels secundários" },
    { label: "Caption", size: "12px", weight: "400", usage: "Notas de rodapé, timestamps" },
  ];

  const useCases = [
    {
      component: "Dashboard Header",
      elements: [
        { element: "Título da página", example: "Bem-vindo, Marcus 👋", size: "32px", weight: "700" },
        { element: "Subtítulo", example: "Acompanhe suas métricas e evolução", size: "18px", weight: "400" }
      ]
    },
    {
      component: "Cards de Métricas",
      elements: [
        { element: "Label do card", example: "⚡ Energia do dia", size: "14px", weight: "400" },
        { element: "Valor da métrica", example: "87%", size: "32px", weight: "700" }
      ]
    },
    {
      component: "Formulários",
      elements: [
        { element: "Label do campo", example: "Nome do Coach", size: "18px", weight: "500" },
        { element: "Input de texto", example: "Digite seu nome...", size: "16px", weight: "400" },
        { element: "Texto de ajuda", example: "Mínimo 3 caracteres", size: "12px", weight: "400" }
      ]
    },
    {
      component: "Botões",
      elements: [
        { element: "Botão principal", example: "Salvar Alterações", size: "18px", weight: "500" },
        { element: "Botão secundário", example: "Cancelar", size: "16px", weight: "500" },
        { element: "Botão pequeno", example: "Editar", size: "14px", weight: "500" }
      ]
    },
    {
      component: "Sidebar/Navegação",
      elements: [
        { element: "Item de menu", example: "Dashboard", size: "16px", weight: "500" },
        { element: "Logo/Título", example: "DataGG", size: "24px", weight: "700" }
      ]
    },
    {
      component: "Tabelas e Listas",
      elements: [
        { element: "Header da tabela", example: "Nome do Jogador", size: "14px", weight: "600" },
        { element: "Célula da tabela", example: "Rebecca Silva", size: "14px", weight: "400" },
        { element: "Badge/Tag", example: "Ativo", size: "12px", weight: "500" }
      ]
    }
  ];

  const colorModes = [
    {
      mode: "Modo Escuro",
      icon: "🌙",
      backgrounds: [
        { name: "Fundo principal", color: "#380361 → #49007F" },
        { name: "Cards", color: "#FDFDFD" }
      ],
      textColors: [
        { name: "Texto em fundo escuro", color: "#FDFDFD", contrast: "Branco quase puro" },
        { name: "Texto em cards claros", color: "#121111 / #1E1E1E", contrast: "Preto/cinza escuro" },
        { name: "Texto secundário", color: "#B3AAFF", contrast: "Lilás" }
      ]
    },
    {
      mode: "Modo Claro",
      icon: "🌞",
      backgrounds: [
        { name: "Fundo principal", color: "#F6F4FF → #E8E4FF" },
        { name: "Cards", color: "#FFFFFF" }
      ],
      textColors: [
        { name: "Texto principal", color: "#1E1E1E", contrast: "Preto suave" },
        { name: "Texto secundário", color: "#4B4B4B", contrast: "Cinza médio" },
        { name: "Texto de destaque", color: "#5E4BFF", contrast: "Roxo vibrante" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F4FF] to-[#E8E4FF] p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[64px]">🔤</span>
            <h1 className="text-[#1E1E1E]" style={{ fontSize: '48px', fontWeight: 700 }}>
              Tipografia
            </h1>
          </div>
          <h2 className="text-[#5E4BFF] mb-3" style={{ fontSize: '32px', fontWeight: 600 }}>
            Sistema de Tipos - DataGG
          </h2>
          <p className="text-[#4B4B4B] max-w-3xl mx-auto" style={{ fontSize: '18px', fontWeight: 400 }}>
            Guia completo de tipografia utilizando a fonte Poppins.
            <br />
            Todos os tamanhos, pesos e aplicações no projeto.
          </p>
        </div>

        {/* Fonte Principal */}
        <div className="bg-white rounded-3xl border-2 border-[#DAD6FF] p-10 mb-12 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-[#1E1E1E] mb-2" style={{ fontSize: '36px', fontWeight: 700 }}>
              Poppins
            </h2>
            <p className="text-[#4B4B4B]" style={{ fontSize: '16px', fontWeight: 400 }}>
              Fonte geométrica sans-serif do Google Fonts, otimizada para interfaces digitais
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-[#5E4BFF]" style={{ fontSize: '20px', fontWeight: 600 }}>
                Características
              </h3>
              <ul className="space-y-2 text-[#4B4B4B]" style={{ fontSize: '14px' }}>
                <li>✓ Excelente legibilidade em telas</li>
                <li>✓ Formas geométricas e modernas</li>
                <li>✓ Suporte completo a caracteres especiais</li>
                <li>✓ 4 pesos utilizados no projeto</li>
                <li>✓ Otimizada para dispositivos de alta resolução</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#5E4BFF]" style={{ fontSize: '20px', fontWeight: 600 }}>
                Import CSS
              </h3>
              <code className="block bg-[#F6F4FF] text-[#5E4BFF] p-4 rounded-xl text-sm">
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
              </code>
              <code className="block bg-[#F6F4FF] text-[#5E4BFF] p-4 rounded-xl text-sm mt-2">
                font-family: 'Poppins', sans-serif;
              </code>
            </div>
          </div>
        </div>

        {/* Pesos da Fonte */}
        <div className="mb-12">
          <h3 className="text-[#1E1E1E] mb-6" style={{ fontSize: '28px', fontWeight: 700 }}>
            ⚖️ Pesos da Fonte
          </h3>
          <div className="grid gap-6">
            {fontWeights.map((weight, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-[#DAD6FF] p-6 shadow-lg">
                <div className="flex items-start gap-6 mb-4">
                  <div className="min-w-[200px]">
                    <h4 className="text-[#1E1E1E] mb-1" style={{ fontSize: '20px', fontWeight: 600 }}>
                      {weight.name}
                    </h4>
                    <p className="text-[#5E4BFF]" style={{ fontSize: '14px', fontWeight: 500 }}>
                      font-weight: {weight.weight}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4B4B4B] mb-4" style={{ fontSize: '14px', fontWeight: 400 }}>
                      {weight.usage}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 border-t-2 border-[#F6F4FF] pt-4">
                  {weight.examples.map((example, exIdx) => (
                    <div key={exIdx} className="flex items-center gap-4">
                      <span 
                        className="text-[#1E1E1E] flex-1"
                        style={{ fontSize: example.size, fontWeight: weight.weight }}
                      >
                        {example.text}
                      </span>
                      <span className="text-[#B3AAFF] text-xs font-mono bg-[#F6F4FF] px-3 py-1 rounded">
                        {example.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Escala Tipográfica */}
        <div className="mb-12">
          <h3 className="text-[#1E1E1E] mb-6" style={{ fontSize: '28px', fontWeight: 700 }}>
            📏 Escala Tipográfica
          </h3>
          <div className="bg-white rounded-3xl border-2 border-[#DAD6FF] p-8 shadow-lg">
            <div className="space-y-6">
              {typographyScale.map((scale, idx) => (
                <div key={idx} className="border-b border-[#F6F4FF] last:border-0 pb-6 last:pb-0">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <p className="text-[#5E4BFF]" style={{ fontSize: '14px', fontWeight: 600 }}>
                        {scale.label}
                      </p>
                      <p className="text-[#4B4B4B] text-xs mt-1">
                        {scale.size} · {scale.weight}
                      </p>
                    </div>
                    <div className="col-span-6">
                      <p 
                        className="text-[#1E1E1E]"
                        style={{ 
                          fontSize: scale.size, 
                          fontWeight: scale.weight.split('-')[0] 
                        }}
                      >
                        Exemplo de Texto
                      </p>
                    </div>
                    <div className="col-span-3">
                      <p className="text-[#4B4B4B] text-xs">
                        {scale.usage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Casos de Uso */}
        <div className="mb-12">
          <h3 className="text-[#1E1E1E] mb-6" style={{ fontSize: '28px', fontWeight: 700 }}>
            🎯 Casos de Uso no Projeto
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-[#DAD6FF] p-6 shadow-lg">
                <h4 className="text-[#5E4BFF] mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>
                  {useCase.component}
                </h4>
                <div className="space-y-4">
                  {useCase.elements.map((elem, elemIdx) => (
                    <div key={elemIdx} className="border-l-4 border-[#B3AAFF] pl-4">
                      <p className="text-[#4B4B4B] text-xs mb-2">
                        {elem.element}
                      </p>
                      <p 
                        className="text-[#1E1E1E] mb-1"
                        style={{ fontSize: elem.size, fontWeight: elem.weight }}
                      >
                        {elem.example}
                      </p>
                      <code className="text-xs text-[#5E4BFF] bg-[#F6F4FF] px-2 py-1 rounded">
                        {elem.size} · {elem.weight}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cores de Texto por Modo */}
        <div className="mb-12">
          <h3 className="text-[#1E1E1E] mb-6" style={{ fontSize: '28px', fontWeight: 700 }}>
            🎨 Cores de Texto por Modo
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {colorModes.map((mode, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-[#DAD6FF] p-6 shadow-lg">
                <h4 className="text-[#5E4BFF] mb-4 flex items-center gap-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                  <span className="text-2xl">{mode.icon}</span>
                  {mode.mode}
                </h4>
                
                <div className="mb-4">
                  <p className="text-[#4B4B4B] text-sm mb-2" style={{ fontWeight: 600 }}>
                    Fundos:
                  </p>
                  {mode.backgrounds.map((bg, bgIdx) => (
                    <p key={bgIdx} className="text-[#4B4B4B] text-xs mb-1">
                      • {bg.name}: <code className="text-[#5E4BFF] bg-[#F6F4FF] px-2 py-0.5 rounded">{bg.color}</code>
                    </p>
                  ))}
                </div>

                <div>
                  <p className="text-[#4B4B4B] text-sm mb-2" style={{ fontWeight: 600 }}>
                    Cores de Texto:
                  </p>
                  <div className="space-y-2">
                    {mode.textColors.map((text, textIdx) => (
                      <div key={textIdx} className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg border-2 border-gray-200 flex-shrink-0"
                          style={{ background: text.color.includes('→') ? `linear-gradient(135deg, ${text.color.replace(' → ', ', ')})` : text.color }}
                        />
                        <div className="flex-1">
                          <p className="text-[#1E1E1E] text-xs" style={{ fontWeight: 500 }}>
                            {text.name}
                          </p>
                          <code className="text-[10px] text-[#5E4BFF]">{text.color}</code>
                        </div>
                        <span className="text-[10px] text-[#4B4B4B] bg-[#F6F4FF] px-2 py-1 rounded">
                          {text.contrast}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boas Práticas */}
        <div className="bg-gradient-to-br from-[#5E4BFF] to-[#6A3BCC] rounded-3xl p-10 text-white shadow-2xl mb-12">
          <h3 className="mb-6" style={{ fontSize: '28px', fontWeight: 700 }}>
            ✨ Boas Práticas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-3" style={{ fontSize: '18px', fontWeight: 600 }}>
                ✓ Faça
              </h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Use Bold (700) apenas para títulos principais</li>
                <li>• Mantenha hierarquia clara de tamanhos</li>
                <li>• Regular (400) para corpo de texto</li>
                <li>• Medium (500) para elementos interativos</li>
                <li>• Contraste adequado: mín. 4.5:1 (WCAG AA)</li>
                <li>• Line-height 1.5 para melhor legibilidade</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3" style={{ fontSize: '18px', fontWeight: 600 }}>
                ✗ Evite
              </h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Misturar mais de 3 pesos na mesma tela</li>
                <li>• Usar tamanhos menores que 12px</li>
                <li>• Texto em ALL CAPS com mais de 3 palavras</li>
                <li>• Line-height menor que 1.3</li>
                <li>• Baixo contraste em fundos coloridos</li>
                <li>• Múltiplos estilos sem hierarquia clara</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Acessibilidade */}
        <div className="bg-[#EEE9FF]/60 border-2 border-[#DAD6FF] rounded-2xl p-8">
          <h3 className="text-[#1E1E1E] mb-4" style={{ fontSize: '24px', fontWeight: 700 }}>
            ♿ Acessibilidade e Contraste
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-[#4B4B4B]">
            <div>
              <p className="mb-2" style={{ fontWeight: 600 }}>
                Texto Normal
              </p>
              <p className="text-sm">
                Contraste mínimo de <strong>4.5:1</strong> para corpo de texto (14-16px)
              </p>
            </div>
            <div>
              <p className="mb-2" style={{ fontWeight: 600 }}>
                Texto Grande
              </p>
              <p className="text-sm">
                Contraste mínimo de <strong>3:1</strong> para títulos (≥24px ou 18px bold)
              </p>
            </div>
            <div>
              <p className="mb-2" style={{ fontWeight: 600 }}>
                Elementos Interativos
              </p>
              <p className="text-sm">
                Contraste de <strong>3:1</strong> para bordas e estados de foco
              </p>
            </div>
          </div>
        </div>

        {/* Mascote */}
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
