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

        <div className="w-1/2 relative bg-gradient-to-br from-start-gradient to-end-gradient p-8 flex items-center justify-center">
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full opacity-20 bg-[#7b1aff] rotate-45 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full opacity-30 bg-[#2b0055] rotate-12 shadow-inner"></div>

          <div className="relative z-10">
            <svg
              width="200"
              height="200"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              <rect width="16" height="16" fill="transparent" />
              <g transform="scale(8) translate(0,0)">
                <rect
                  x="0"
                  y="0"
                  width="2"
                  height="2"
                  fill="#160026"
                  stroke="#ffffff"
                  strokeWidth="0.1"
                />
                <rect x="2" y="1" width="2" height="1" fill="#5b0af0" />
                <rect x="0" y="2" width="4" height="1" fill="#5b0af0" />
                <rect x="0" y="3" width="1" height="1" fill="#160026" />
                <rect x="3" y="3" width="1" height="1" fill="#160026" />
                <rect x="1" y="2" width="1" height="1" fill="#7cff4d" />
                <rect x="2" y="2" width="1" height="1" fill="#7cff4d" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
