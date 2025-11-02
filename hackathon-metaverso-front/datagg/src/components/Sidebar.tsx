import { Home, FileText, Users, ClipboardList, Bot, Settings, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

interface SidebarProps {
  userType: "coach" | "player";
}

export function Sidebar({ userType }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const coachItems = [
    { icon: Home, label: "Dashboard", path: "/coach/dashboard" },
    { icon: FileText, label: "Relatórios", path: "/coach/relatorios" },
    { icon: Users, label: "Jogadores", path: "/coach/jogadores" },
    { icon: ClipboardList, label: "Formulário", path: "/coach/formulario" },
    { icon: Bot, label: "Assistente IA", path: "/coach/assistente" },
    { icon: Settings, label: "Configurações", path: "/coach/configuracoes" },
  ];

  const playerItems = [
    { icon: Home, label: "Dashboard", path: "/player/dashboard" },
    { icon: ClipboardList, label: "Formulário", path: "/player/formulario" },
    { icon: Bot, label: "GGMind Chat", path: "/player/chatbot" },
    { icon: Settings, label: "Configurações", path: "/player/configuracoes" },
  ];

  const items = userType === "coach" ? coachItems : playerItems;

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#49007F] to-[#380361] p-6 flex flex-col">
      <div 
        className="flex items-center gap-3 mb-12 cursor-pointer ml-6"
        onClick={() => navigate("/")}
      >
        <span className="text-[28px]">👾</span>
        <Logo variant="light" size="medium" />
      </div>

      <nav className="flex-1 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ease-out ${
                isActive
                  ? "bg-gradient-to-r from-[#6E00FF] to-[#B3AAFF] text-white shadow-lg"
                  : "text-[#B3AAFF] hover:bg-[#FDFDFD]/10"
              }`}
              style={isActive ? { boxShadow: '0 0 20px rgba(179, 170, 255, 0.4)' } : {}}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#B3AAFF] hover:bg-[#FDFDFD]/10 transition-all mt-auto"
      >
        <LogOut size={20} />
        <span>Sair</span>
      </button>
    </div>
  );
}
