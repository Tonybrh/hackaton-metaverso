import { useLocation } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Send } from "lucide-react";
import { useState } from "react";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export function AssistenteIAPage() {
  const location = useLocation();
  const coachName = location.state?.coachName || "Marcus";
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Olá, Coach! Deseja ver os jogadores com queda de desempenho?",
      timestamp: "14:23"
    },
    {
      id: 2,
      sender: "user",
      text: "Sim, mostre os três piores da semana.",
      timestamp: "14:24"
    },
    {
      id: 3,
      sender: "ai",
      text: "Rebecca, Aramis e Antonio apresentaram oscilação de foco. Recomendo revisar a rotina de descanso e aumentar sessões de comunicação em equipe.",
      timestamp: "14:24"
    },
  ]);

  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: inputText,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newUserMessage]);
    setInputText("");

    // Simula resposta da IA após 1 segundo
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        sender: "ai",
        text: "Entendi sua pergunta! Estou analisando os dados dos jogadores... (Esta é uma resposta mockada para demonstração)",
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex">
      <Sidebar userType="coach" />
      
      <div className="flex-1 ml-64 p-8 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[#FDFDFD]" style={{ fontSize: '36px' }}>
            Assistente IA - GGMind
          </h1>
          <p className="text-[#B3AAFF] mt-2" style={{ fontSize: '18px' }}>
            Converse com a IA para análises e recomendações personalizadas
          </p>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-[#FDFDFD] rounded-3xl shadow-xl p-8 flex flex-col max-w-5xl" style={{ boxShadow: '0 10px 30px rgba(179, 170, 255, 0.3)', maxHeight: 'calc(100vh - 280px)' }}>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[70%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                  <div
                    className={`p-4 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-[#380361] to-[#49007F] text-[#FDFDFD]"
                        : "bg-[#B3AAFF]/20 text-[#121111]"
                    }`}
                  >
                    {message.sender === "ai" && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[20px]">👾</span>
                        <span className="text-[#380361]" style={{ fontSize: '14px' }}>
                          GGMind
                        </span>
                      </div>
                    )}
                    <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
                      {message.text}
                    </p>
                    <p 
                      className={`mt-2 text-right ${
                        message.sender === "user" ? "text-[#B3AAFF]" : "text-[#49007F]/50"
                      }`}
                      style={{ fontSize: '12px' }}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>

                {message.sender === "ai" && (
                  <div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#380361] to-[#49007F] flex items-center justify-center mr-3 order-0"
                    style={{ minWidth: '48px' }}
                  >
                    <span className="text-[24px]">👾</span>
                  </div>
                )}

                {message.sender === "user" && (
                  <div 
                    className="w-12 h-12 rounded-full bg-[#B3AAFF]/30 flex items-center justify-center ml-3 order-3 text-[#380361]"
                    style={{ minWidth: '48px', fontSize: '20px' }}
                  >
                    👤
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#B3AAFF]/10 border border-[#B3AAFF]/30">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua pergunta..."
              className="flex-1 bg-transparent text-[#121111] placeholder-[#49007F]/50 outline-none"
              style={{ fontSize: '16px' }}
            />
            <button
              onClick={handleSendMessage}
              className="p-3 rounded-xl bg-gradient-to-br from-[#380361] to-[#49007F] text-[#FDFDFD] hover:shadow-lg transition-all transform hover:scale-110"
            >
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Mascote animado */}
        <div 
          className="fixed bottom-8 right-8 text-[80px] opacity-40 hover:opacity-70 transition-opacity cursor-pointer animate-float"
          style={{ filter: 'drop-shadow(0 0 25px rgba(179, 170, 255, 0.8))' }}
        >
          👾
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
