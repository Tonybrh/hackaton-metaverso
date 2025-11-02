import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121111]/80 backdrop-blur-md border-b border-[#49007F]/30">
      <div className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center gap-4 cursor-pointer"
            style={{ 
              marginLeft: '32px',
              filter: 'drop-shadow(0 0 8px rgba(179, 170, 255, 0.2))'
            }}
          >
            <span className="text-[45px]">👾</span>
            <Logo variant="light" size="navbar" />
          </div>

          <div className="flex items-center gap-8 mr-8">
            <button 
              onClick={() => navigate("/")}
              className="text-[#FDFDFD] hover:text-[#B3AAFF] transition-colors"
            >
              Home
            </button>
            <button className="text-[#FDFDFD] hover:text-[#B3AAFF] transition-colors">
              Suporte
            </button>
            <button 
              onClick={() => navigate("/login")}
              className="text-[#FDFDFD] hover:text-[#B3AAFF] transition-colors"
            >
              Login
            </button>
            <button 
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-lg hover:shadow-[#49007F]/50 transition-all flex items-center justify-center"
            >
              Seja GG
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
