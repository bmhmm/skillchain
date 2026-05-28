"use client";

import { useState } from "react";

import { hashFile } from "@/utils/hashFile";

export default function VerifyPage() {

  const [hash, setHash] = useState("");

  async function handleFileUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    const generatedHash = await hashFile(file);

    setHash(generatedHash);
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        Verify Certificate
      </h1>

      <input
        type="file"
        onChange={handleFileUpload}
        className="mb-6"
      />

      {hash && (
        <div className="mt-6 p-4 border border-white/10 rounded-xl bg-white/5">

          <p className="text-sm text-zinc-400 mb-2">
            Generated SHA-256 Hash
          </p>

          <p className="break-all text-blue-400">
            {hash}
          </p>

        </div>
      )}

    </main>
  );
}