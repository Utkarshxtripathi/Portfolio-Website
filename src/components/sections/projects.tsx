"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { projects } from "@/content/data/projects";

const categories = ["All", "Featured", "Data & Python", "Full-Stack & Web"];

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCaseStudy = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredProjects = projects.filter((project) => {
    // Category match
    const matchesCategory =
      selectedCategory === "All"
        ? true
        : selectedCategory === "Featured"
        ? project.featured
        : selectedCategory === "Data & Python"
        ? project.language === "Python" || project.language === "TSQL"
        : project.language === "JavaScript" || project.language === "TypeScript" || project.language === "Java";

    // Search match
    const matchesSearch =
      searchQuery.trim() === ""
        ? true
        : project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-hairline">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="font-mono text-sm text-accent tracking-widest mb-3">
                PROJECTS & CASE STUDIES
              </h2>
              <p className="text-text-mid text-sm max-w-xl">
                Shipped open-source libraries, production data pipelines, and full-stack software.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 ${
                    selectedCategory === cat
                      ? "bg-accent text-canvas font-semibold shadow-[0_0_15px_-3px_rgba(245,165,36,0.3)]"
                      : "bg-surface border border-hairline text-text-mid hover:text-text-hi hover:border-hairline-bright"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-10 relative max-w-md">
            <input
              type="text"
              placeholder="Search projects by tech (e.g. Python, SQL, Selenium, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-hairline rounded-xl px-4 py-2.5 text-xs font-mono text-text-hi placeholder:text-text-dim focus:outline-none focus:border-accent transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs font-mono text-text-dim hover:text-accent"
              >
                clear
              </button>
            )}
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center border border-hairline rounded-xl bg-surface/40 font-mono text-xs text-text-dim">
                No projects match your filter query.
              </div>
            ) : (
              filteredProjects.map((project, index) => {
                const isFeatured = project.featured;
                const isExpanded = expandedId === project.id;

                return (
                  <div key={project.id}>
                    <div
                      className={`rounded-2xl border transition-all duration-200 ${
                        isFeatured
                          ? "border-accent/30 bg-surface/90 shadow-lg shadow-accent/5"
                          : "border-hairline bg-surface/60 hover:border-hairline-bright"
                      } ${project.caseStudy ? "cursor-pointer hover:border-accent/50" : ""}`}
                      onClick={() => project.caseStudy && toggleCaseStudy(project.id)}
                    >
                      <div className="p-6 sm:p-8">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-text-dim">
                              {String(index + 1).padStart(2, "0")}/{String(filteredProjects.length).padStart(2, "0")}
                            </span>
                            {isFeatured && (
                              <span className="font-mono text-[10px] uppercase tracking-widest text-accent bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
                                FEATURED
                              </span>
                            )}
                          </div>
                          {project.caseStudy && (
                            <span className="font-mono text-xs text-accent shrink-0 ml-4 bg-accent-soft/80 px-2.5 py-1 rounded-lg border border-accent/30 hover:bg-accent/20 transition-colors">
                              {isExpanded ? "− Close Case Study" : "+ View Case Study"}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-semibold text-text-hi mb-3">
                          {project.title}
                        </h3>
                        <p className="text-text-mid leading-relaxed mb-4 text-sm sm:text-base">
                          {project.longDescription}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <Pill variant="teal">{project.language}</Pill>
                          <Pill>{project.date}</Pill>
                          <Pill>{project.license}</Pill>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-mono text-text-mid bg-canvas rounded-md border border-hairline"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs text-text-dim font-mono pt-3 border-t border-hairline/60">
                          {project.highlights.map((h) => (
                            <span key={h} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {h}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 pt-3 flex items-center justify-between">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-xs font-mono text-text-hi hover:text-accent transition-colors bg-canvas px-3 py-1.5 rounded-lg border border-hairline hover:border-accent/40"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            View Repository →
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Case Study Drawer */}
                    <AnimatePresence>
                      {isExpanded && project.caseStudy && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border border-t-0 border-accent/40 rounded-b-2xl bg-canvas p-6 sm:p-8 -mt-2 shadow-inner">
                            <h4 className="font-mono text-xs text-accent mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-accent" />
                              DEEP DIVE CASE STUDY
                            </h4>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="bg-surface/80 p-4 rounded-xl border border-hairline">
                                <h5 className="font-mono text-xs text-signal mb-2 uppercase tracking-wider font-semibold">
                                  01. The Problem
                                </h5>
                                <p className="text-xs text-text-mid leading-relaxed">
                                  {project.caseStudy.problem}
                                </p>
                              </div>
                              <div className="bg-surface/80 p-4 rounded-xl border border-hairline">
                                <h5 className="font-mono text-xs text-teal mb-2 uppercase tracking-wider font-semibold">
                                  02. The Approach
                                </h5>
                                <p className="text-xs text-text-mid leading-relaxed">
                                  {project.caseStudy.approach}
                                </p>
                              </div>
                              <div className="bg-surface/80 p-4 rounded-xl border border-hairline">
                                <h5 className="font-mono text-xs text-accent mb-2 uppercase tracking-wider font-semibold">
                                  03. Measurable Outcome
                                </h5>
                                <p className="text-xs text-text-mid leading-relaxed">
                                  {project.caseStudy.outcome}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/Utkarshxtripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-text-dim hover:text-accent transition-colors bg-surface px-4 py-2 rounded-xl border border-hairline hover:border-hairline-bright"
            >
              See all repositories on GitHub →
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

