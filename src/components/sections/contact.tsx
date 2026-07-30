"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/30 text-accent font-mono text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>LET&apos;S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-text-hi tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-text-mid mb-10 text-base max-w-md mx-auto leading-relaxed">
            I read every email. Whether you have an open Data Engineering / SDE role, a project idea, or just want to chat—reach out!
          </p>

          <div className="space-y-4">
            {/* Email Copy Card */}
            <div className="glass-panel-hover rounded-2xl border border-hairline bg-surface p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 font-mono text-sm sm:text-base text-text-hi font-semibold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13L2 4" />
                </svg>
                <span>utkarsh6918@gmail.com</span>
              </div>
              <button
                onClick={() => copyToClipboard("utkarsh6918@gmail.com")}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                  copied
                    ? "bg-teal/20 text-teal border-teal/40 font-semibold"
                    : "bg-canvas text-text-mid border-hairline hover:text-accent hover:border-accent/40"
                }`}
              >
                {copied ? "Copied! ✓" : "copy email"}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/Utkarshxtripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-hover rounded-2xl border border-hairline bg-surface p-5 flex items-center justify-between gap-4 hover:border-accent/40 group"
            >
              <div className="flex items-center gap-3 font-mono text-sm sm:text-base text-text-hi font-semibold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-text-dim group-hover:text-accent transition-colors">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>github.com/Utkarshxtripathi</span>
              </div>
              <span className="text-xs font-mono text-text-dim group-hover:text-accent transition-colors">
                open profile →
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/utkarsh-tripathi-74bb03219"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-hover rounded-2xl border border-hairline bg-surface p-5 flex items-center justify-between gap-4 hover:border-accent/40 group"
            >
              <div className="flex items-center gap-3 font-mono text-sm sm:text-base text-text-hi font-semibold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-text-dim group-hover:text-accent transition-colors">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>linkedin.com/in/utkarsh-tripathi</span>
              </div>
              <span className="text-xs font-mono text-text-dim group-hover:text-accent transition-colors">
                connect →
              </span>
            </a>
          </div>

          {/* Live Location & Clock Widget */}
          <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-canvas border border-hairline font-mono text-xs text-text-dim">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chandigarh, IN (IST)</span>
            <span>·</span>
            <span className="text-text-hi font-medium">{currentTime || "11:38 PM"}</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

