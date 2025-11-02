import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Logo } from "../Logo";
import { BackToHomeButton } from "../BackToHomeButton";

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-[#121111] flex items-center justify-center p-8 relative">
        <BackToHomeButton />
        <div className="w-full max-w-md space-y-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[40px]">👾</span>
            <Logo variant="light" size="xlarge" />
          </div>

          <div className="bg-gradient-to-br from-[#380361] to-[#49007F] p-12 rounded-2xl border border-[#B3AAFF]/20 space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#B3AAFF]/20 flex items-center justify-center">
              <Check size={40} className="text-[#B3AAFF]" />
            </div>
            
            <h2 className="text-[#FDFDFD]" style={{ fontSize: '28px' }}>
              Link enviado!
            </h2>
            
            <p className="text-[#B3AAFF]">
              Confira seu e-mail e siga as instruções para redefinir sua senha.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-xl hover:shadow-[#49007F]/50 transition-all flex items-center justify-center"
            >
              Voltar ao Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121111] flex items-center justify-center p-8 relative">
      <BackToHomeButton />
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[40px]">👾</span>
            <Logo variant="light" size="xlarge" />
          </div>
          <h2 className="text-[#FDFDFD]" style={{ fontSize: '28px' }}>
            Esqueceu a senha?
          </h2>
          <p className="text-[#B3AAFF]">
            Digite seu e-mail e enviaremos instruções para redefinir sua senha
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#B3AAFF] mb-2">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg bg-[#380361]/30 border border-[#49007F]/50 text-[#FDFDFD] placeholder-[#B3AAFF]/50 focus:outline-none focus:border-[#B3AAFF] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#49007F] to-[#380361] text-[#FDFDFD] hover:shadow-xl hover:shadow-[#49007F]/50 transition-all flex items-center justify-center"
          >
            Solicitar Redefinição
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[#B3AAFF] hover:text-[#FDFDFD] transition-colors"
            >
              Voltar ao Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
