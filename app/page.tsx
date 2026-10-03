"use client";

import { useState } from "react";
import { projects, Category } from "@/data/projects";
import CategorySelector from "@/components/CategorySelector";
import ProjectCard from "@/components/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

const CATEGORIES: Category[] = [
  "Todos",
  "Direção de Fotografia",
  "Operação de Câmera",
  "Gaffer",
  "Produção",
  "Edição de Vídeo"
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "Todos" || p.categories.includes(selectedCategory)
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 font-inter">
      {/* Ambient background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-24 pb-12 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
              // Cinematic Viewfinder Online
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-outfit">
              THIAGO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">BANDEIRA</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-xs md:text-sm leading-relaxed">
              Cinematografia de alto impacto. Criando narrativas visuais marcantes com foco em estética minimalista, luz dramática e excelência técnica.
            </p>
          </motion.div>
        </header>

        {/* Selector - Sticky */}
        <section className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-y border-white/5 py-4 mb-12 shadow-2xl shadow-black">
          <div className="container mx-auto px-4">
            <CategorySelector
              categories={CATEGORIES}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-4 pb-24">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 py-20 font-mono text-sm uppercase tracking-widest"
            >
              Nenhum projeto encontrado.
            </motion.div>
          )}
        </section>
      </div>
    </main>
  );
}
