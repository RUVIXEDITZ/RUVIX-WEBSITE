import { motion } from "motion/react";
import { Youtube, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 glass-card bg-black/40 border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rotate-45"></div>
          </div>
          <motion.span 
            className="text-xl font-bold tracking-tighter text-white"
            whileHover={{ scale: 1.05 }}
          >
            RUVIX
          </motion.span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["Analytics", "Videos", "Audience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-wide uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, color: "#E21D2C" }}
            className="p-2 bg-white/5 rounded-full border border-white/10"
          >
            <Youtube size={18} />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-brand-red text-white rounded-full text-sm font-semibold glow-red hover:bg-brand-red/90 transition-all"
          >
            Acquire Channel
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-6 right-6 mt-4 p-8 glass-card bg-black/95 md:hidden"
        >
          <div className="flex flex-col gap-6 items-center">
            {["Analytics", "Videos", "Audience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white"
              >
                {item}
              </a>
            ))}
            <button className="w-full py-4 bg-brand-red text-white rounded-full font-bold">
              Acquire Channel
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
