"use client";

import { motion } from "framer-motion";
import { Category } from "@/data/projects";

interface Props {
  categories: Category[];
  selected: Category;
  onSelect: (cat: Category) => void;
}

export default function CategorySelector({ categories, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          onMouseEnter={() => onSelect(cat)}
          className={`relative px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium transition-colors duration-300 ${
            selected === cat ? "text-cyan-400" : "text-gray-500 hover:text-gray-200"
          }`}
        >
          {selected === cat && (
            <motion.div
              layoutId="active-weapon"
              className="absolute inset-0 border border-cyan-500/50 bg-cyan-500/10"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Sci-Fi HUD Corners */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
            </motion.div>
          )}
          <span className="relative z-10 uppercase tracking-widest">{cat}</span>
        </button>
      ))}
    </div>
  );
}
