"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden bg-zinc-950 border border-zinc-800/50 cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
          onError={(e) => {
            // Fallback to mqdefault if maxres doesn't exist
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.videoId}/mqdefault.jpg`;
          }}
        />
      </div>

      {/* Overlay / Glass */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-100 transition-opacity duration-300">
        {/* Top HUD */}
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Details */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-[10px] text-cyan-400/80 uppercase tracking-widest mb-1 font-semibold">{project.roles.join(" | ")}</p>
          <h3 className="text-xl font-bold text-white leading-tight mb-1">{project.title}</h3>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Client: {project.client}</p>
        </div>
      </div>

      {/* Hover Crosshair corners */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan-400/0 group-hover:border-cyan-400/80 transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cyan-400/0 group-hover:border-cyan-400/80 transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-cyan-400/0 group-hover:border-cyan-400/80 transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan-400/0 group-hover:border-cyan-400/80 transition-colors duration-300" />
      
      {/* Scanline effect on hover */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
    </motion.div>
  );
}
