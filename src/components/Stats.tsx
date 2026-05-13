import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Users, Eye, Clock, TrendingUp } from "lucide-react";
import { cn } from "@/src/lib/utils";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const viewData = [
  { name: "Week 1", views: 4.2 },
  { name: "Week 2", views: 5.8 },
  { name: "Week 3", views: 3.9 },
  { name: "Week 4", views: 6.3 },
];

export default function Stats() {
  return (
    <section id="analytics" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic"
          >
            Real-Time <span className="text-brand-red">Metrics</span>
          </motion.h2>
          <div className="w-24 h-1 bg-brand-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: "Total Subscribers", value: 105000, suffix: "+", icon: Users, color: "text-blue-400" },
            { label: "Views (28 Days)", value: 20200000, suffix: "+", icon: Eye, color: "text-brand-red" },
            { label: "Watch Time (Hrs)", value: 81300, suffix: "", icon: Clock, color: "text-yellow-400" },
            { label: "Growth Rate", value: 142, suffix: "%", icon: TrendingUp, color: "text-green-400" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:bg-white/10 transition-all duration-500 cursor-default"
            >
              <stat.icon className={cn("mb-6 opacity-50 group-hover:opacity-100 transition-opacity", stat.color)} size={32} />
              <h3 className="text-4xl font-black mb-2 flex items-baseline gap-1">
                <Counter value={stat.value} />
                <span className="text-white/40 text-xl">{stat.suffix}</span>
              </h3>
              <p className="text-sm text-white/40 font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-8 h-[400px]"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold uppercase tracking-tight">Weekly View Velocity</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-red" />
                <span className="text-xs font-mono text-white/50">Millions of Views</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={viewData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#ffffff40" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                   stroke="#ffffff40" 
                   fontSize={12}
                   tickLine={false}
                   axisLine={false}
                   tickFormatter={(val) => `${val}M`}
                />
                <Tooltip 
                  cursor={{ fill: '#ffffff05' }}
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid #ffffff10', borderRadius: '12px' }}
                />
                <Bar dataKey="views" radius={[6, 6, 0, 0]}>
                  {viewData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? '#E21D2C' : '#ffffff20'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Audience Gender</h3>
              <p className="text-sm text-white/40 mb-8 italic">Perfectly balanced demographics for mass market appeal.</p>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold uppercase">Female</span>
                  <span className="text-sm font-mono text-brand-red">51.8%</span>
                </div>
                <div className="h-4 bg-white/5 rounded-full overflow-hidden p-1">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "51.8%" }}
                     transition={{ duration: 1, delay: 0.2 }}
                     className="h-full bg-brand-red rounded-full glow-red"
                   />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold uppercase">Male</span>
                  <span className="text-sm font-mono text-white/60">48.2%</span>
                </div>
                <div className="h-4 bg-white/5 rounded-full overflow-hidden p-1">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "48.2%" }}
                     transition={{ duration: 1, delay: 0.4 }}
                     className="h-full bg-white/20 rounded-full"
                   />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
              <div className="p-2 bg-brand-red/10 rounded-lg text-brand-red">
                <Users size={16} />
              </div>
              <p className="text-xs text-white/40 font-medium">Data verified via YouTube Studio Creator Analytics</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
