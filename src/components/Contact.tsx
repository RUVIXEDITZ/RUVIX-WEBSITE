import { motion } from "motion/react";
import { Mail, MessageSquare, Send, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-brand-black overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card max-w-5xl mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-5 border-white/5">
          <div className="md:col-span-2 bg-brand-red p-12 flex flex-col justify-between text-white relative">
            <div className="absolute top-0 right-0 p-8 opacity-20">
               <Mail size={120} strokeWidth={1} />
            </div>
            
            <div>
              <h2 className="text-4xl font-black uppercase mb-6 italic">Secure <br /> the Acquisition</h2>
              <p className="text-white/80 font-medium mb-8 leading-relaxed">
                RUVIX is ready for its next chapter. Connect with our distribution agents to discuss acquisition opportunities or brand partnerships.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Mail size={18} />
                   </div>
                   <span className="font-bold text-sm">deals@ruvix.media</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageSquare size={18} />
                   </div>
                   <span className="font-bold text-sm">@ruvix_official (Telegram)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-12">
               <motion.a whileHover={{ y: -5 }} href="#" className="hover:text-white/60 transition-colors"><Instagram size={20} /></motion.a>
               <motion.a whileHover={{ y: -5 }} href="#" className="hover:text-white/60 transition-colors"><Twitter size={20} /></motion.a>
               <motion.a whileHover={{ y: -5 }} href="#" className="hover:text-white/60 transition-colors"><Youtube size={20} /></motion.a>
            </div>
          </div>

          <div className="md:col-span-3 p-12 bg-white/5">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/50 px-2">Partner Name</label>
                    <input 
                      type="text" 
                      placeholder="Alex Mercer"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all placeholder:text-white/20 font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/50 px-2">Corporate Email</label>
                    <input 
                      type="email" 
                      placeholder="alex@agency.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all placeholder:text-white/20 font-bold"
                    />
                  </div>
               </div>

               <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/50 px-2">Subject of Interest</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all appearance-none cursor-pointer font-bold text-white/60">
                    <option>Complete Channel Acquisition</option>
                    <option>Sponsorship / Brand Integration</option>
                    <option>Custom Content Production</option>
                    <option>Other / General Inquiry</option>
                  </select>
               </div>

               <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/50 px-2">Detailed Proposal</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your brand goals..."
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all placeholder:text-white/20 font-bold"
                  />
               </div>

               <motion.button
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-red hover:text-white transition-colors glow-red"
               >
                 Transmit Message
                 <Send size={18} />
               </motion.button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 text-center">
           <p className="text-white/20 text-xs font-mono mb-8 uppercase tracking-[0.3em]">Built for the future of digital assets</p>
           <div className="flex items-center justify-center gap-12 grayscale opacity-30">
              <span className="font-bold tracking-tighter text-2xl">YOUTUBE</span>
              <span className="font-bold tracking-tighter text-2xl">ADENSE</span>
              <span className="font-bold tracking-tighter text-2xl">MAINFRAME</span>
           </div>
        </div>
      </div>
    </section>
  );
}

import { Youtube } from "lucide-react";
