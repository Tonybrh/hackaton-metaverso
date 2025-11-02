import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function BackToHomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="absolute top-6 left-6 px-5 py-3 rounded-lg bg-transparent border border-[#B3AAFF] text-[#B3AAFF] hover:bg-[#380361] hover:text-[#FDFDFD] transition-all flex items-center gap-2"
      style={{ 
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '14px'
      }}
    >
      <ArrowLeft size={16} />
      Voltar ao Início
    </button>
  );
}
