import { motion } from "motion/react";
import { Globe, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/src/lib/utils";

const regions = [
  { name: "Brazil", percent: "32.4%", color: "bg-green-500", pos: "top-[65%] left-[32%]" },
  { name: "United States", percent: "28.1%", color: "bg-blue-500", pos: "top-[35%] left-[20%]" },
  { name: "Philippines", percent: "18.5%", color: "bg-red-500", pos: "top-[50%] left-[82%]" },
];

export default function Audience() {
  return (
    <section id="audience" className="py-32 relative overflow-hidden">
      {/* Background World Map SVG (Simplified Dots) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg viewBox="0 0 1000 500" className="w-full h-full fill-white">
            {/* Very simple dot pattern representing continents */}
            <circle cx="200" cy="180" r="2" /><circle cx="210" cy="190" r="2" />
            <circle cx="220" cy="170" r="2" /><circle cx="230" cy="185" r="2" />
            <circle cx="320" cy="350" r="2" /><circle cx="330" cy="360" r="2" />
            <circle cx="340" cy="340" r="2" /><circle cx="820" cy="250" r="2" />
            <circle cx="830" cy="260" r="2" /><circle cx="840" cy="245" r="2" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-red rounded-full glow-red">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-brand-red">Global Footprint</h3>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase leading-none">
                Reaching <br /> Millions <br /> <span className="text-brand-red">Internationally</span>
              </h2>
              <p className="text-white/40 text-lg mb-10 max-w-md italic">
                From the bustling streets of São Paulo to the tech hubs of San Francisco, the RUVIX brand resonates across cultural boundaries.
              </p>

              <div className="space-y-6">
                {regions.map((region, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 glass-card border-white/5 hover:border-white/20 transition-all cursor-default group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn("w-2 h-2 rounded-full glow-red", region.color)} />
                      <span className="font-bold uppercase tracking-widest text-sm">{region.name}</span>
                    </div>
                    <span className="text-xl font-black font-mono text-brand-red">{region.percent}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
            {/* Interactive Animated Map Visualization */}
            <div className="relative w-full h-full glass-card border-white/5 flex items-center justify-center p-12 overflow-hidden">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[150%] h-[150%] opacity-20"
               >
                 <div className="absolute inset-0 rounded-full border-[0.5px] border-dashed border-white/40" />
                 <div className="absolute inset-10 rounded-full border-[0.5px] border-dashed border-white/20" />
                 <div className="absolute inset-20 rounded-full border-[0.5px] border-dashed border-white/10" />
               </motion.div>

               <div className="relative w-full h-full">
                  {regions.map((region, i) => (
                    <motion.div 
                      key={i}
                      className={cn("absolute flex flex-col items-center gap-2", region.pos)}
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className={cn("w-4 h-4 rounded-full glow-red blur-[1px]", region.color)} 
                      />
                      <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10"
                      >
                         <p className="text-[10px] font-black uppercase whitespace-nowrap">{region.name}</p>
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Connecting lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-brand-red/30" viewBox="0 0 100% 100%">
                    <motion.path 
                      d="M 230 185 Q 280 260 330 355" 
                      fill="none" 
                      strokeWidth="0.5" 
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                    />
                    <motion.path 
                      d="M 330 355 Q 570 300 825 255" 
                      fill="none" 
                      strokeWidth="0.5" 
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                    />
                  </svg>
               </div>
            </div>
            
            {/* Floating UI Elements for Map */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 p-6 glass-card shadow-2xl z-20"
            >
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-tight">Active Reach</h4>
                    <p className="text-[10px] text-white/40 font-mono">LIVE_LATENCY: 42ms</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
