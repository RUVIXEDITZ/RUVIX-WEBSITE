import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Showcase from "./components/Showcase";
import Audience from "./components/Audience";
import Contact from "./components/Contact";
import SmoothScroll from "./components/SmoothScroll";
import LoadingScreen from "./components/LoadingScreen";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Reveal animations on scroll
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((elem) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <SmoothScroll>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <div className="reveal">
          <Stats />
        </div>
        <div className="reveal">
          <Showcase />
        </div>
        <div className="reveal">
          <Audience />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-[10px] font-mono uppercase tracking-[0.5em]">
        © 2026 RUVIX MEDIA GROUP // ALL RIGHTS RESERVED
      </footer>
    </SmoothScroll>
  );
}
