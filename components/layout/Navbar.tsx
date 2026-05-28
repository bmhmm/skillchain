"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 border-b border-white/10">
      <h1 className="text-xl font-bold text-white">
        SkillChain
      </h1>

      <ConnectButton />
    </nav>
  );
}