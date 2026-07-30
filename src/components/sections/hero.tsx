"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DataLine } from "@/components/dataline/data-line";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Background Matrix/Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f242915_1px,transparent_1px),linear-gradient(to_bottom,#1f242915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-8"
          >
            {/* Live Role Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/30 text-accent font-mono text-xs mb-6 shadow-[0_0_15px_-3px_rgba(245,165,36,0.25)]">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>Available for Data Engineering & SDE Roles</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold leading-[1.08] tracking-tight text-text-hi">
              Utkarsh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-hi via-text-hi to-text-mid">
                Tripathi
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-text-mid mt-6 max-w-2xl leading-relaxed font-sans font-normal">
              Building scalable data pipelines, resilient backends, and full-stack web applications.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4 font-mono text-xs sm:text-sm text-text-dim">
              <span className="text-text-hi font-medium">Data Engineer · SDE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              <span>B.E. CS (Chandigarh University)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              <span>Chandigarh, IN</span>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Button variant="glow" href="#work">
                View Work ↓
              </Button>
              <Button variant="outline" href="#projects">
                Explore Projects
              </Button>
              <Button variant="ghost" href="mailto:utkarsh6918@gmail.com">
                Email Me ✉
              </Button>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-hairline max-w-xl">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-accent">2026</div>
                <div className="font-mono text-[11px] text-text-dim uppercase tracking-wider mt-0.5">
                  IEEE Presenter
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-teal">8+</div>
                <div className="font-mono text-[11px] text-text-dim uppercase tracking-wider mt-0.5">
                  Shipped Repos
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-text-hi">1M1B / IBM</div>
                <div className="font-mono text-[11px] text-text-dim uppercase tracking-wider mt-0.5">
                  Virtual Intern
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Interactive Data Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-4"
          >
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden border border-hairline shadow-2xl">
              <div className="flex items-center justify-between border-b border-hairline pb-4 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-text-mid font-semibold">sys.data_stream</span>
                </div>
                <span className="text-accent text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-accent-soft">
                  LIVE METRICS
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-text-dim">Pipeline Throughput</span>
                  <span className="text-teal font-medium">99.98% clean</span>
                </div>

                <div className="h-16 flex items-center justify-center my-2">
                  <DataLine className="w-full text-accent" peaks={[30, 65, 45, 80, 55, 95, 40, 70, 85, 90]} />
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-hairline/60">
                  <div className="bg-canvas p-2.5 rounded border border-hairline">
                    <div className="text-text-dim text-[10px]">PRIMARY STACK</div>
                    <div className="text-text-hi font-medium mt-0.5">Python · SQL · JS</div>
                  </div>
                  <div className="bg-canvas p-2.5 rounded border border-hairline">
                    <div className="text-text-dim text-[10px]">WORKFLOW</div>
                    <div className="text-text-hi font-medium mt-0.5">ETL · Azure · React</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

