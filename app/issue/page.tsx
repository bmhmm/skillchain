"use client";

import { useState } from "react";

import { hashFile } from "@/utils/hashFile";

import { useWriteContract } from "wagmi";

import { parseAbi } from "viem";

import { v4 as uuidv4 } from "uuid";

import {
  CONTRACT_ADDRESS
} from "@/constants/contract";


import {
  skillChainAbi
} from "@/constants/abi";

export default function IssuePage() {

  const [hash, setHash] = useState("");

  async function handleFileUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    const generatedHash = await hashFile(file);

    setHash(generatedHash);
  }

    const { writeContractAsync } =
  useWriteContract();

    async function issueCertificate() {

  if (!hash) return;

  try {

    const certId =
      `0x${uuidv4().replace(/-/g, "").padEnd(64, "0")}`;

    await writeContractAsync({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: skillChainAbi,
      functionName: "issueCertificate",
      args: [
        certId as `0x${string}`,
        hash as `0x${string}`,
        "0x0000000000000000000000000000000000000000"
      ]
    });

    alert("Certificate issued!");

  } catch (error) {
    console.error(error);
  }
}

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        Issue Certificate
      </h1>

      <input
        type="file"
        onChange={handleFileUpload}
      />

     {hash && (
  <div className="mt-8">

    <p className="text-blue-400 break-all">
      {hash}
    </p>

    <button
      onClick={issueCertificate}
      className="mt-6 px-6 py-3 bg-blue-600 rounded-xl"
    >
      Issue Certificate
    </button>

  </div>
)}

    </main>
  );
}