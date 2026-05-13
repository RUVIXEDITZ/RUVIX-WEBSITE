import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">
              RU<span className="text-brand-red">VIX</span>
            </h1>
          </motion.div>

          <div className="w-full max-w-md h-px bg-white/10 relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute inset-0 bg-brand-red shadow-[0_0_15px_rgba(226,29,44,1)]"
            />
          </div>
          
          <div className="mt-4 flex justify-between w-full max-w-md">
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">System Initialization</p>
            <p className="text-[10px] font-mono text-brand-red uppercase tracking-widest">{Math.round(progress)}%</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">Establishing Secure Uplink</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
