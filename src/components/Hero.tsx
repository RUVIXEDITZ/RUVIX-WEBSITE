import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { TrendingUp, Users, Play, ArrowRight } from "lucide-react";
import React, { useRef } from "react";

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[100px] animate-pulse" />
        
        {/* Particle/Light Streaks */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-brand-red to-transparent"
              style={{
                width: Math.random() * 300 + 100 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                x: [0, 500, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity }}
        >
          <div className="mb-4 px-3 py-1 bg-brand-red/20 border border-brand-red/30 rounded-full w-fit mx-auto scale-90 md:scale-100">
            <span className="text-xs font-semibold text-brand-red uppercase tracking-widest leading-none">Viral Anime Shorts Brand</span>
          </div>

          <h1 className="text-[80px] md:text-[130px] leading-[0.85] font-black tracking-tighter mb-8 select-none">
            RU<span className="text-brand-red">VIX</span>
          </h1>

          <p className="max-w-[420px] mx-auto text-lg md:text-xl text-white/50 mb-12 font-medium leading-relaxed">
            Scaling digital influence through cinematic short-form storytelling. Captivating millions of viewers monthly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors text-black">View Analytics</span>
                <ArrowRight className="relative z-10 group-hover:text-white transition-colors" size={20} />
              </motion.button>
            </MagneticButton>
            
            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-brand-red text-white rounded-full font-bold flex items-center gap-2 glow-red"
              >
                Contact Agent
              </motion.button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Floating Glass Cards */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[20%] left-[10%] hidden xl:block"
      >
        <div className="glass-card p-6 min-w-[240px] glow-red animate-bounce-slow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-brand-red/20 rounded-2xl text-brand-red">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase font-bold tracking-wider">Monthly Views</p>
              <h3 className="text-2xl font-black">20.2M+</h3>
            </div>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-brand-red" 
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-[30%] right-[10%] hidden xl:block"
      >
        <div className="glass-card p-6 min-w-[240px] border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/10 rounded-2xl text-white">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase font-bold tracking-wider">Subscribers</p>
              <h3 className="text-2xl font-black text-white">105K+</h3>
            </div>
          </div>
          <p className="text-[10px] text-white/40 italic">Global audience spanning 3 continents</p>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
