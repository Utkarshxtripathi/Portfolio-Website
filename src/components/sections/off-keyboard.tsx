"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function OffKeyboard() {
  return (
    <section id="off-the-keyboard" className="py-24 md:py-32 border-b border-hairline">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[68ch]"
        >
          <h2 className="font-mono text-sm text-accent tracking-widest mb-8">
            OFF THE KEYBOARD
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I sing. Mostly in the bathroom, occasionally in front of people. I&apos;m
              working on a small setlist I want to record properly this year — no
              Spotify link yet, but soon.
            </p>

            <p className="text-text-mid">
              Other things I do when the laptop closes:
            </p>

            <ul className="space-y-3 text-text-mid">
              {[
                "Cooking dal the way my mom does (still off by a pinch)",
                "Watching cinema",
                "Listening to music",
                "Hitting the gym for weightlifting",
                "Playing football",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-2">·</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-text-hi mt-8">
              This side of me is why I take my work seriously and myself less so.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
