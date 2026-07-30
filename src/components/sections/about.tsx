"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-hairline">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-mono text-sm text-accent tracking-widest mb-12">
            ABOUT
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-6 max-w-[68ch]">
              <p className="text-lg leading-relaxed text-text-hi">
                I&apos;m a Computer Science graduate with a <strong className="text-accent font-medium">Bachelor of Engineering (B.E.)</strong> from <strong className="text-text-hi">Chandigarh University</strong> (May 2026).
                My passion for CS was first sparked by watching <em>The Matrix</em>—a fascination with how code can build and shape digital worlds.
              </p>

              <p className="text-lg leading-relaxed text-text-mid">
                Most of my work revolves around <strong className="text-text-hi font-medium">data engineering</strong>, <strong className="text-text-hi font-medium">ETL automation</strong>, and <strong className="text-text-hi font-medium">SQL optimization</strong>.
                I presented my research at <strong className="text-teal font-medium">IEEE IAS / ICSSCNA 2026</strong> on real-time fintech anomaly detection and co-authored a comparative study for <strong className="text-text-hi font-medium">ICICC 2024</strong>.
              </p>

              <p className="text-lg leading-relaxed text-text-mid">
                I write clean, reliable code for real-world impact. Off the keyboard, I sing, listen to cinema, hit the gym for weightlifting, and play football—keeping life balanced and grounded.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Matrix Terminal Widget replacing the empty photo placeholder */}
              <div className="w-full rounded-2xl bg-surface border border-hairline p-5 shadow-xl font-mono text-xs overflow-hidden">
                <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-text-dim text-[11px] ml-2">utkarsh@matrix-node:~</span>
                  </div>
                  <span className="text-[10px] text-accent bg-accent-soft px-2 py-0.5 rounded">
                    TERMINAL
                  </span>
                </div>

                <div className="space-y-2 text-text-mid">
                  <p><span className="text-accent">$</span> whoami</p>
                  <p className="text-text-hi pl-3">↳ Utkarsh Tripathi [Data Eng / SDE]</p>

                  <p className="pt-1"><span className="text-accent">$</span> cat current_focus.json</p>
                  <div className="pl-3 text-text-dim text-[11px] space-y-1">
                    <p>{'{'}</p>
                    <p className="pl-3">&quot;degree&quot;: &quot;B.E. CS @ Chandigarh Univ (2026)&quot;,</p>
                    <p className="pl-3">&quot;internship&quot;: &quot;IBM SkillsBuild / 1M1B Virtual Intern&quot;,</p>
                    <p className="pl-3">&quot;research&quot;: &quot;IEEE IAS / ICSSCNA 2026 Presenter&quot;,</p>
                    <p className="pl-3">&quot;status&quot;: &quot;Open to Full-Time Engineering Roles&quot;</p>
                    <p>{'}'}</p>
                  </div>

                  <p className="pt-1 flex items-center gap-1.5">
                    <span className="text-accent">$</span>
                    <span className="w-2 h-4 bg-accent/80 animate-pulse inline-block" />
                  </p>
                </div>
              </div>

              {/* CURRENTLY STATUS CARD */}
              <div className="w-full rounded-2xl border border-hairline bg-surface/60 backdrop-blur-md p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="font-mono text-xs text-text-hi tracking-wider font-semibold">CURRENTLY</span>
                  </div>
                  <span className="font-mono text-[10px] text-text-dim">JULY 2026</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-text-mid">
                    <span className="font-mono text-accent text-xs shrink-0 font-bold">05/2026</span>
                    <span className="w-1 h-1 rounded-full bg-text-dim" />
                    <span>Graduated — B.E. CS (Chandigarh University)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-mid">
                    <span className="font-mono text-teal text-xs shrink-0 font-bold">NOW</span>
                    <span className="w-1 h-1 rounded-full bg-text-dim" />
                    <span>Virtual Intern @ 1M1B (IBM SkillsBuild)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-mid">
                    <span className="font-mono text-text-hi text-xs shrink-0 font-bold">OPEN</span>
                    <span className="w-1 h-1 rounded-full bg-text-dim" />
                    <span>Actively interviewing for Data Eng / SDE roles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

