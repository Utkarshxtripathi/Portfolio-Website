"use client";

import { useState, useEffect } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Publications" },
  { id: "toolkit", label: "Toolkit" },
  { id: "off-the-keyboard", label: "Personal" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);

    const sectionElements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const el = sectionElements[i];
      const rect = el.getBoundingClientRect();
      if (rect.top <= 250) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#090B0C]/85 backdrop-blur-xl border-b border-hairline py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNav("hero")}
              className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-text-hi hover:text-accent transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse group-hover:scale-125 transition-transform" />
              <span className="font-semibold">utkarsh.dev</span>
              <span className="hidden sm:inline-block text-[10px] text-text-dim border border-hairline px-2 py-0.5 rounded-full bg-surface">
                UTKARSH TRIPATHI
              </span>
            </button>

            <div className="hidden md:flex items-center gap-5">
              {sections.slice(1).map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleNav(s.id)}
                    className={cn(
                      "relative text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 py-1 px-2 rounded-md",
                      isActive
                        ? "text-accent font-semibold"
                        : "text-text-dim hover:text-text-hi hover:bg-surface/50"
                    )}
                  >
                    {s.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}

              <div className="h-4 w-px bg-hairline mx-1" />

              <a
                href="https://github.com/Utkarshxtripathi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-text-dim hover:text-accent transition-colors p-1.5 rounded-md hover:bg-surface-hover"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="mailto:utkarsh6918@gmail.com"
                aria-label="Send Email"
                className="text-text-dim hover:text-accent transition-colors p-1.5 rounded-md hover:bg-surface-hover"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13L2 4" />
                </svg>
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-mid hover:text-text-hi transition-colors rounded-lg bg-surface border border-hairline"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#090B0C]/95 backdrop-blur-2xl flex flex-col justify-center px-8 pt-20 pb-12 md:hidden"
          >
            <div className="space-y-6">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleNav(s.id)}
                  className={cn(
                    "block w-full text-left font-mono text-xl tracking-wide transition-colors py-2 border-b border-hairline/40",
                    activeSection === s.id
                      ? "text-accent font-bold pl-2 border-accent"
                      : "text-text-mid hover:text-text-hi"
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t border-hairline flex items-center justify-between text-xs font-mono text-text-dim">
              <span>Chandigarh, IN</span>
              <span>utkarsh6918@gmail.com</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

