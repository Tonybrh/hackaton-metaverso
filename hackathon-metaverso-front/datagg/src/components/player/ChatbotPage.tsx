import { useState } from "react";
import { PlayerSidebar } from "./PlayerSidebar";
import { Send, TrendingUp, MessageCircle } from "lucide-react";

interface Message {
  type: "ai" | "user";
  text: string;
}

export function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "ai",
      text: "Oi, Rebecca! Quantas horas você dormiu ontem?",
    },
    {
      type: "user",
      text: "6 horas",
    },
    {
      type: "ai",
      text: "Certo. E quanto tempo de treino você fez hoje?",
    },
    {
      type: "user",
      text: "2 horas",
    },
    {
      type: "ai",
      text: "Perfeito. Suas métricas foram atualizadas. Recomendo treino leve amanhã para recuperação. Como está se sentindo hoje?",
    },
  ]);
  
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");
    
    setTimeout(() => {
      const responses = [
        "Entendi! Vou registrar essa informação.",
        "Ótimo! Continue assim.",
        "Suas métricas foram atualizadas com sucesso!",
        "Que bom saber! Vou ajustar suas recomendações.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: randomResponse },
      ]);
    }, 1000);
  };

  const quickHistory = [
    { date: "05/11", focus: 82, sleep: "6h" },
    { date: "04/11", focus: 78, sleep: "7h" },
    { date: "03/11", focus: 75, sleep: "5h" },
  ];

  const quickActions = [
    "Como foi seu sono?",
    "Quanto treinou hoje?",
    "Como está seu humor?",
    "Teve algum desconforto?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex">
      <PlayerSidebar />
      
      <div className="flex-1 ml-[240px] p-8">
        <div className="mb-8">
          <h1 className="text-[#FDFDFD] flex items-center gap-3" style={{ fontSize: '32px' }}>
            <span className="text-[40px]">👾</span>
            GGMind Chatbot
          </h1>
          <p className="text-[#B3AAFF] mt-2">
            Converse com a IA sobre sua rotina e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-[#380361]/30 rounded-2xl border border-[#49007F]/50 flex flex-col h-[650px]">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.type === "ai"
                        ? "bg-gradient-to-br from-[#49007F] to-[#380361] text-[#FDFDFD]"
                        : "bg-[#B3AAFF] text-[#121111]"
                    }`}
                  >
                    {message.type === "ai" && <span className="mr-2">👾</span>}
                    <span>{message.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#49007F]/50">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Digite sua resposta..."
                  className="flex-1 px-4 py-3 rounded-lg bg-[#49007F]/20 border border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-lg hover:shadow-[#49007F]/50 transition-all flex items-center justify-center"
                >
                  <Send size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(action)}
                    className="px-3 py-2 rounded-lg bg-[#49007F]/20 text-[#B3AAFF] hover:bg-[#49007F]/30 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-6 rounded-2xl border border-[#B3AAFF]/20">
              <h3 className="text-[#FDFDFD] mb-4 flex items-center gap-2">
                🗓️ Histórico Rápido
              </h3>
              <div className="space-y-3">
                {quickHistory.map((day, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-[#FDFDFD]/10"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[#FDFDFD]">{day.date}</span>
                      <span className="text-[#B3AAFF]">Foco {day.focus}%</span>
                    </div>
                    <p className="text-[#B3AAFF]">Sono: {day.sleep}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#380361]/30 p-6 rounded-2xl border border-[#49007F]/50 space-y-3">
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-lg hover:shadow-[#49007F]/50 transition-all flex items-center justify-center gap-2">
                <TrendingUp size={18} />
                Ver evolução completa
              </button>
              <button className="w-full py-3 rounded-lg bg-[#49007F]/20 text-[#B3AAFF] hover:bg-[#49007F]/30 transition-colors flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Falar com coach
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-6 rounded-2xl border border-[#B3AAFF]/20 relative overflow-hidden">
              <h3 className="text-[#FDFDFD] mb-2">Dica do dia</h3>
              <p className="text-[#B3AAFF]">
                Mantenha-se hidratado durante os treinos. Beba pelo menos 2L de água por dia!
              </p>
              <div className="absolute -bottom-2 -right-2 text-[60px] opacity-20">💧</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
