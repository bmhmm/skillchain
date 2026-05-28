import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-6xl font-bold">
          SkillChain
        </h1>

        <p className="mt-6 text-zinc-400 max-w-xl">
          Blockchain-powered verifiable skills and credentials platform.
        </p>
      </section>
    </main>
  );
}