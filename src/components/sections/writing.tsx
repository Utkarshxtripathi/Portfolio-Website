"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { publications } from "@/content/data/publications";

export function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32 border-b border-hairline">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-mono text-sm text-accent tracking-widest mb-3">
            PUBLICATIONS & RESEARCH
          </h2>
          <p className="text-text-mid text-sm mb-12 max-w-xl">
            Peer-reviewed papers, conference presentations, and technical comparative studies.
          </p>

          <div className="space-y-6 max-w-3xl">
            {publications.map((pub) => {
              const isNew = pub.year === "2026";
              return (
                <div
                  key={pub.title}
                  className={`glass-panel-hover rounded-2xl border p-6 sm:p-8 transition-all ${
                    isNew
                      ? "border-accent/40 bg-surface/90 shadow-lg shadow-accent/5"
                      : "border-hairline bg-surface/60"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-accent bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
                        {pub.venue} ({pub.year})
                      </span>
                      <span className="font-mono text-xs text-text-dim border border-hairline px-2 py-0.5 rounded-full bg-canvas">
                        {pub.role}
                      </span>
                    </div>

                    {isNew && (
                      <span className="font-mono text-[10px] text-teal bg-teal-soft px-2.5 py-0.5 rounded-full border border-teal/30 tracking-wider uppercase font-semibold">
                        UPCOMING PRESENTATION
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-text-hi mb-2">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-text-mid leading-relaxed mb-4">
                    {pub.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-hairline/60 font-mono text-xs">
                    <span className="text-text-dim">{pub.venue} · {pub.year}</span>
                    {pub.link && (
                      <a
                        href={pub.link}
                        className="text-accent hover:text-accent-hover transition-colors flex items-center gap-1 font-medium"
                      >
                        <span>{pub.linkLabel}</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

