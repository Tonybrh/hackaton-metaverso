import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-8">
      <div className="w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden flex bg-white">
        <div className="w-1/2 p-12 pl-16">
          <Header />
          <div className="mt-6">
            <LoginForm />
          </div>
        </div>

        <div className="w-1/2 relative p-0 flex items-center justify-center">
          {/* background image fills the panel */}
          <Image
            src="/images/background.png"
            alt="login background"
            fill
            className="object-cover"
          />

          {/* smaller centered image on top of background */}
          <div className="relative z-10">
            <Image
              src="/images/bonequinho.png"
              alt="pixel icon"
              width={160}
              height={160}
              className="drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
