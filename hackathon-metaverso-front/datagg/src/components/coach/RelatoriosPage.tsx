import { useLocation } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Eye, Trash2 } from "lucide-react";
import { useState } from "react";

interface Relatorio {
  id: number;
  data: string;
  jogador: string;
  tipoTreino: string;
}

export function RelatoriosPage() {
  const location = useLocation();
  const coachName = location.state?.coachName || "Marcus";
  
  const [relatorios, setRelatorios] = useState<Relatorio[]>([
    { id: 1, data: "02/11/2025", jogador: "Rebecca", tipoTreino: "Treino Técnico" },
    { id: 2, data: "01/11/2025", jogador: "Aramis", tipoTreino: "Treino de Comunicação" },
    { id: 3, data: "01/11/2025", jogador: "Pedro", tipoTreino: "Treino de Estratégia" },
    { id: 4, data: "31/10/2025", jogador: "Antonio", tipoTreino: "Treino Físico" },
  ]);

  const handleDelete = (id: number) => {
    setRelatorios(relatorios.filter(rel => rel.id !== id));
  };

  const handleView = (relatorio: Relatorio) => {
    alert(`Visualizando relatório de ${relatorio.jogador} - ${relatorio.tipoTreino}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#380361] to-[#49007F] flex">
      <Sidebar userType="coach" />
      
      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#FDFDFD]" style={{ fontSize: '36px' }}>
            Últimos Relatórios Gerados
          </h1>
          <p className="text-[#B3AAFF] mt-2" style={{ fontSize: '18px' }}>
            Histórico de relatórios de treino da sua equipe
          </p>
        </div>

        {/* Relatórios Cards */}
        <div className="space-y-4 max-w-6xl">
          {relatorios.map((relatorio) => (
            <div
              key={relatorio.id}
              className="bg-[#FDFDFD] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-between"
              style={{ boxShadow: '0 8px 25px rgba(179, 170, 255, 0.25)' }}
            >
              <div className="flex items-center gap-8 flex-1">
                <div className="flex flex-col items-center justify-center w-24">
                  <div className="text-[#380361]" style={{ fontSize: '28px' }}>
                    {relatorio.data.split('/')[0]}
                  </div>
                  <div className="text-[#49007F]/70" style={{ fontSize: '14px' }}>
                    {relatorio.data.split('/')[1]}/{relatorio.data.split('/')[2]}
                  </div>
                </div>

                <div className="h-16 w-px bg-[#B3AAFF]/30" />

                <div className="flex-1">
                  <p className="text-[#380361] mb-1" style={{ fontSize: '20px' }}>
                    {relatorio.jogador}
                  </p>
                  <p className="text-[#49007F]/70" style={{ fontSize: '16px' }}>
                    {relatorio.tipoTreino}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleView(relatorio)}
                  className="p-3 rounded-xl bg-[#B3AAFF]/20 hover:bg-[#B3AAFF]/40 text-[#380361] transition-all transform hover:scale-110"
                  title="Visualizar"
                >
                  <Eye size={20} />
                </button>
                <button
                  onClick={() => handleDelete(relatorio.id)}
                  className="p-3 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 transition-all transform hover:scale-110"
                  title="Excluir"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {relatorios.length === 0 && (
          <div className="bg-[#FDFDFD] p-12 rounded-3xl text-center shadow-xl max-w-6xl" style={{ boxShadow: '0 10px 30px rgba(179, 170, 255, 0.3)' }}>
            <div className="text-[80px] mb-4">📊</div>
            <p className="text-[#380361]" style={{ fontSize: '24px' }}>
              Nenhum relatório encontrado
            </p>
            <p className="text-[#49007F]/70 mt-2" style={{ fontSize: '16px' }}>
              Crie avaliações para gerar relatórios automaticamente
            </p>
          </div>
        )}

        {/* Mascote no canto */}
        <div 
          className="fixed bottom-8 right-8 text-[60px] opacity-30 hover:opacity-60 transition-opacity cursor-pointer"
          style={{ filter: 'drop-shadow(0 0 20px rgba(179, 170, 255, 0.6))' }}
        >
          👾
        </div>
      </div>
    </div>
  );
}
