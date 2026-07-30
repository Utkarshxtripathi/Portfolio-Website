"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { skillCategories } from "@/content/data/skills";

const languages = ["Python", "SQL", "JavaScript", "TypeScript", "Java", "HTML", "CSS"];

const contributions = [
  3, 5, 2, 1, 4, 0, 2, 3, 5, 1, 2, 4,
  1, 2, 0, 3, 5, 2, 1, 4, 3, 2, 5, 1,
  4, 2, 3, 1, 5, 0, 2, 3, 1, 4, 2, 5,
  3, 1, 2, 4, 0, 3, 2, 1, 5, 2, 4, 3,
  1, 2, 5, 0, 3, 2, 4, 1, 3, 2, 5, 1,
  4, 2, 3, 0, 1, 5, 2, 3, 4, 1, 2, 0,
  5, 3, 1, 2, 4, 2, 3, 1, 5, 0, 2, 4,
  3, 1, 2, 5, 4, 0, 1, 3, 2, 4, 1, 5,
  2, 3, 0, 1, 4, 2, 5, 3, 2, 1, 4, 0,
  3, 2, 1, 5, 2, 4, 3, 0, 1, 5, 2, 3,
  4, 1, 2, 0, 3, 5, 1, 2, 4, 3, 2, 1,
  5, 0, 4, 2, 3, 1, 2, 5, 4, 0, 1, 3,
  2, 5, 1, 4, 2, 3, 0, 1, 5, 2, 4, 3,
  2, 1, 0, 3, 5, 2, 4, 1, 3, 2, 0, 5,
  1, 4, 2, 3, 1, 5, 2, 0, 4, 3, 1, 2,
  5, 3, 2, 4, 0, 1, 2, 5, 3, 1, 4, 2,
];

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function Toolkit() {
  const [hoveredCell, setHoveredCell] = useState<{ lang: string; month: string; val: number } | null>(null);

  return (
    <section id="toolkit" className="py-24 md:py-32 border-b border-hairline">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-mono text-sm text-accent tracking-widest mb-3">
            TECHNICAL TOOLKIT
          </h2>
          <p className="text-text-mid text-sm mb-12 max-w-xl">
            Technologies, frameworks, and database architectures I utilize daily in production.
          </p>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Skill Categories Grid */}
            <div className="lg:col-span-7 space-y-6">
              {skillCategories.map((cat) => (
                <div
                  key={cat.label}
                  className={`glass-panel-hover rounded-2xl border p-5 sm:p-6 transition-all ${
                    cat.accent
                      ? "border-accent/30 bg-surface/90 shadow-md shadow-accent/5"
                      : "border-hairline bg-surface/60"
                  }`}
                >
                  <h3
                    className={`font-mono text-xs tracking-wider uppercase mb-3 font-semibold ${
                      cat.accent ? "text-accent" : "text-text-hi"
                    }`}
                  >
                    {cat.label}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center px-3 py-1 text-xs font-mono rounded-lg border transition-all ${
                          cat.accent
                            ? "border-accent/40 text-accent bg-accent-soft hover:bg-accent/20"
                            : "border-hairline text-text-mid bg-canvas hover:text-text-hi hover:border-hairline-bright"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                  {cat.skills[0]?.context && (
                    <p className="text-[11px] text-text-dim font-mono mt-2 pt-2 border-t border-hairline/50">
                      ↳ {cat.skills[0].context}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Language Activity Heatmap */}
            <div className="lg:col-span-5 glass-panel rounded-2xl border border-hairline p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-xs tracking-wider text-text-hi font-semibold uppercase">
                  LANGUAGE ACTIVITY HEATMAP
                </h3>
                <span className="text-[10px] font-mono text-teal bg-teal-soft px-2 py-0.5 rounded border border-teal/20">
                  12-MONTH REPO DATA
                </span>
              </div>

              <div className="overflow-x-auto pb-2 scrollbar-none">
                <div className="min-w-[280px]">
                  <div className="flex items-start gap-1">
                    <div className="flex flex-col gap-1.5 mr-2 pt-4">
                      {languages.map((lang) => (
                        <span key={lang} className="text-[9px] font-mono text-text-dim leading-none h-3.5 flex items-center">
                          {lang.slice(0, 3)}
                        </span>
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-1 mb-2">
                        {monthLabels.map((m) => (
                          <span key={m} className="flex-1 text-[8px] font-mono text-text-dim text-center">
                            {m}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-12 gap-1.5">
                        {Array.from({ length: languages.length }, (_, row) =>
                          Array.from({ length: 12 }, (_, col) => {
                            const idx = row * 12 + col;
                            const val = contributions[idx % contributions.length];
                            const langName = languages[row];
                            const monthName = monthLabels[col];

                            return (
                              <div
                                key={`${row}-${col}`}
                                onMouseEnter={() => setHoveredCell({ lang: langName, month: monthName, val })}
                                onMouseLeave={() => setHoveredCell(null)}
                                className="aspect-square rounded-xs transition-transform hover:scale-125 cursor-pointer"
                                style={{
                                  backgroundColor:
                                    val === 0
                                      ? "rgba(255,255,255,0.03)"
                                      : val === 1
                                      ? "rgba(45, 212, 191, 0.2)"
                                      : val === 2
                                      ? "rgba(45, 212, 191, 0.4)"
                                      : val === 3
                                      ? "rgba(45, 212, 191, 0.6)"
                                      : val === 4
                                      ? "rgba(45, 212, 191, 0.8)"
                                      : "rgba(45, 212, 191, 1.0)",
                                }}
                              />
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tooltip & Legend */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-hairline text-[10px] font-mono text-text-dim">
                <div>
                  {hoveredCell ? (
                    <span className="text-teal font-medium">
                      {hoveredCell.lang} ({hoveredCell.month}): Level {hoveredCell.val}/5
                    </span>
                  ) : (
                    <span>Hover squares for details</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-xs bg-white/5 border border-hairline" />
                  <div className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: "rgba(45, 212, 191, 0.3)" }} />
                  <div className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: "rgba(45, 212, 191, 0.6)" }} />
                  <div className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: "rgba(45, 212, 191, 1.0)" }} />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

