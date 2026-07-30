"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { roles } from "@/content/data/roles";

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 border-b border-hairline">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-mono text-sm text-accent tracking-widest mb-4">
            WORK EXPERIENCE
          </h2>
          <p className="text-text-mid text-sm mb-16 max-w-xl">
            Hands-on software engineering, data pipeline development, and enterprise technical internships.
          </p>

          <div className="relative">
            {/* Glowing Vertical Timeline Line */}
            <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-accent via-hairline to-hairline hidden md:block" />

            <div className="space-y-12">
              {roles.map((role, index) => (
                <div key={role.id} className="relative md:pl-10">
                  {/* Glowing Node */}
                  <div className="hidden md:flex absolute left-0 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent border-2 border-canvas shadow-[0_0_12px_rgba(245,165,36,0.6)]" />

                  <div className="glass-panel-hover rounded-2xl border border-hairline bg-surface/70 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-text-hi">
                          {role.title}
                        </h3>
                        <span className="text-sm font-mono text-accent font-medium mt-0.5 inline-block">
                          {role.company}
                        </span>
                      </div>

                      <div className="font-mono text-xs text-text-dim bg-canvas/80 px-3 py-1 rounded-full border border-hairline shrink-0 w-fit">
                        {role.period} · {role.duration}
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-5 pt-2">
                      {role.description.map((desc, i) => (
                        <p key={i} className="text-text-mid text-sm sm:text-base leading-relaxed flex items-start gap-2">
                          <span className="text-accent mt-1.5 font-bold text-xs">›</span>
                          <span>{desc}</span>
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-hairline/60">
                      {role.stack.map((tech) => (
                        <Pill key={tech}>{tech}</Pill>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

