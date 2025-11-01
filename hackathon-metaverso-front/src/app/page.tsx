import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary items-center">
      <div className="w-full max-w-6xl mt-4 px-6">
        <Header />
      </div>

      <main className="flex justify-center h-[600px] w-full max-w-5xl mt-12 bg-gradient-to-t from-start-gradient to-end-gradient rounded-xl overflow-hidden">
        <div className="flex flex-col w-1/2 min-h-3.5 justify-center text-white gap-5 pl-10 pr-6">
          <div className="bg-tertiary p-1 w-32 text-center rounded-full text-primary font-semibold">
            #DataGG
          </div>
          <h2 className="text-4xl text-white font-bold pr-5">
            A inteligência dos bastidores do E-Sports
          </h2>
          <p>
            Transforma dados pós-partida em insights e narrativas automáticas,
            revelando como o jogador pensa, onde o time se desorganiza e quando
            o foco se perde — porque vencer é mais do que ter bons números, é
            entender o que os dados dizem sobre você.
          </p>
        </div>

        <div className="bg-[url('/images/background.png')] bg-cover bg-center w-1/2 rounded-r-xl"></div>
      </main>
    </div>
  );
}
