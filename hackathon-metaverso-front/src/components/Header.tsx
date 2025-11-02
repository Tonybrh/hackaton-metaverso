"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full py-4">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo da DataGG" width={200} height={60} />
        </Link>
      </div>

      <nav className="flex items-center gap-6 text-sm">
        <Link href="/" className="text-white hover:underline">
          HOME
        </Link>
        <Link href="#" className="text-white hover:underline">
          SUPORTE
        </Link>
        <Link
          href="/login"
          className="text-white font-semibold hover:underline"
        >
          LOG IN
        </Link>
        <Link
          href="/login"
          className="bg-white rounded-full flex px-6 py-2 items-center gap-2 text-sm"
        >
          SEJA GG <FaArrowRightLong />
        </Link>
      </nav>
    </header>
  );
}
