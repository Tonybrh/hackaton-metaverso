import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, FileText, MessageSquare, Settings, LogOut } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function PlayerSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("👋 Até logo!", {
      description: "Você foi desconectado com sucesso.",
      duration: 2000,
    });
    setTimeout(() => {
      navigate('/player/login');
    }, 1000);
  };

  const menuItems = [
    { 
      icon: Home, 
      label: "Dashboard", 
      path: "/player/dashboard",
      emoji: "🏠"
    },
    { 
      icon: FileText, 
      label: "Formulário", 
      path: "/player/formulario",
      emoji: "📋"
    },
    { 
      icon: MessageSquare, 
      label: "GGMind Chat", 
      path: "/player/chatbot",
      emoji: "💬"
    },
    { 
      icon: Settings, 
      label: "Configurações", 
      path: "/player/configuracoes",
      emoji: "⚙️"
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside 
      className="fixed left-0 top-0 h-screen w-[240px] bg-gradient-to-b from-[#380361] to-[#49007F] overflow-y-hidden"
      style={{ 
        backdropFilter: 'blur(3px)',
        padding: '24px'
      }}
    >
      <div className="flex flex-col h-full relative">
        
        {/* Logo */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[30px]">👾</span>
            <h1 
              className="text-[#FDFDFD]" 
              style={{ 
                fontSize: '24px',
                fontWeight: '700',
                opacity: 0.95
              }}
            >
              DataGG
            </h1>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group
                  ${active 
                    ? 'bg-[rgba(179,170,255,0.2)] border-2 border-[#B3AAFF]' 
                    : 'border-2 border-transparent hover:bg-[#5E4BFF20]'
                  }
                `}
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  boxShadow: active ? '0 0 10px rgba(179,170,255,0.6)' : 'none'
                }}
              >
                <item.icon 
                  size={20} 
                  className={`transition-all duration-300 ${
                    active 
                      ? 'text-[#FDFDFD]' 
                      : 'text-[#FDFDFD] opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(179,170,255,0.8)]'
                  }`}
                />
                <span 
                  className={`transition-all duration-300 ${
                    active 
                      ? 'text-[#FDFDFD]' 
                      : 'text-[#FDFDFD] opacity-90 group-hover:opacity-100'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button - Fixed at Bottom */}
        <div className="absolute bottom-0 left-[24px] right-[24px]">
          <button
            onClick={handleLogout}
            className="
              flex items-center gap-3 px-4 py-3 rounded-xl w-full
              border-2 border-transparent
              transition-all duration-300 cursor-pointer group
              hover:bg-[#5E4BFF20]
            "
            style={{
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            <LogOut 
              size={20} 
              className="text-[#FDFDFD] opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#B3AAFF] group-hover:drop-shadow-[0_0_8px_rgba(179,170,255,0.8)]"
            />
            <span className="text-[#FDFDFD] opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#B3AAFF]">
              Sair
            </span>
          </button>
        </div>

      </div>
    </aside>
  );
}
