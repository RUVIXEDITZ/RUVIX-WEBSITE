import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Play, Eye, Share2, Heart, ArrowRight } from "lucide-react";
import React from "react";

const videoCards = [
  {
    title: "The Ultimate Stand",
    views: "12.5M",
    likes: "1.2M",
    image: "https://picsum.photos/seed/anime1/400/700",
    color: "from-brand-red to-transparent",
  },
  {
    title: "God Mode Unleashed",
    views: "1.1M",
    likes: "82K",
    image: "https://picsum.photos/seed/anime2/400/700",
    color: "from-blue-600 to-transparent",
  },
  {
    title: "Shadow Realm",
    views: "824K",
    likes: "45K",
    image: "https://picsum.photos/seed/anime3/400/700",
    color: "from-purple-600 to-transparent",
  },
  {
    title: "Final Form",
    views: "695K",
    likes: "38K",
    image: "https://picsum.photos/seed/anime4/400/700",
    color: "from-yellow-600 to-transparent",
  },
];

function TiltCard({ card }: { card: typeof videoCards[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[500px] w-full rounded-3xl group cursor-pointer"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-[2rem] bg-brand-black/20 backdrop-blur-sm border border-white/10 group-hover:bg-brand-red/10 transition-colors duration-500 overflow-hidden"
      >
        <img 
          src={card.image} 
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-80`} />
        
        <div 
           style={{ transform: "translateZ(50px)" }}
           className="absolute bottom-6 left-6 right-6"
        >
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1 italic">Viral Short</p>
          <h4 className="text-2xl font-black mb-4 leading-none">{card.title}</h4>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
              <Eye size={12} className="text-brand-red" />
              <span className="text-[10px] font-bold font-mono">{card.views}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
              <Heart size={12} className="text-pink-500" />
              <span className="text-[10px] font-bold font-mono">{card.likes}</span>
            </div>
          </div>
        </div>

        <motion.div 
           style={{ transform: "translateZ(100px)" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500"
        >
            <div className="p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <Play className="fill-white text-white ml-1" size={32} />
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section id="videos" className="py-32 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-6 uppercase italic leading-none"
            >
              Viral <span className="text-brand-red">Hall of Fame</span>
            </motion.h2>
            <p className="text-white/40 text-lg md:text-xl font-medium">
              Every creation is optimized for the algorithm. These are the peak performance benchmarks of the RUVIX content system.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 group text-white/50 hover:text-brand-red transition-colors font-bold uppercase tracking-widest text-xs">
            View All Content <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videoCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
