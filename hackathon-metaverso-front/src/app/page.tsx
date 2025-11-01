import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary items-center">
      <nav className="flex justify-around items-center mt-4 w-full">
          <Image src="/logo.svg" alt="Logo da DataGG" width={220} height={65} />
        <ul>
            <li className="inline-block px-4 text-white hover:underline cursor-pointer">
                HOME
            </li>
            <li className="inline-block px-4 text-white hover:underline cursor-pointer">
                SUPORTE
            </li>
            <li className="inline-block px-4 text-white hover:underline cursor-pointer">
                LOG IN
            </li>
        </ul>
          <button className="bg-white rounded-full flex px-7 py-1 color-primary items-center gap-2">SEJA GG <FaArrowRightLong /> </button>
      </nav>
      <main className="flex justify-center h-[600px] w-full max-w-5xl mt-32 bg-gradient-to-t from-start-gradient to-end-gradient rounded-xl">
        <div className="flex flex-col w-1/2 min-h-3.5 justify-center text-white gap-5 pl-5">
            <div className="bg-tertiary p-1 w-32 text-center rounded-full">
                #DataGG
            </div>
            <h2 className="text-4xl text-white font-bold pr-5">A inteligência dos bastidores do E–Sports</h2>
            <p>
                Transforma dados pós-partida em insights e narrativas automáticas, revelando como o jogador pensa, onde o time se desorganiza e quando o foco se perde — porque vencer é mais do que ter bons números, é entender o que os dados dizem sobre você.
            </p>
        </div>
          <div className="bg-[url('/images/background.png')] bg-cover bg-center w-1/2 rounded-r-xl">

          </div>
      </main>
    </div>
  );
}
