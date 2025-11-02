"use client";

import { FaUser, FaLock, FaEye } from "react-icons/fa6";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-2">
      <h1 className="text-4xl font-bold text-[#3b0b66] mb-6">Log in</h1>

      <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaUser />
          </span>
          <input
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-gray-50 placeholder-gray-400"
            placeholder="E‑mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="E-mail"
          />
        </div>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaLock />
          </span>
          <input
            className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-200 bg-gray-50 placeholder-gray-400"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Senha"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            aria-label="mostrar senha"
          >
            <FaEye />
          </button>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Entrar como Coach
          </label>
          <a className="underline">Esqueceu a senha?</a>
        </div>

        <div>
          <button className="w-48 bg-primary text-white rounded-full py-3 hover:brightness-95">
            Log in
          </button>
        </div>

        <p className="text-sm text-gray-500">
          ou <a className="text-primary underline">Criar Conta</a>
        </p>
      </form>
    </div>
  );
}
