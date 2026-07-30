import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Projects } from "@/components/sections/projects";
import { Writing } from "@/components/sections/writing";
import { Toolkit } from "@/components/sections/toolkit";
import { OffKeyboard } from "@/components/sections/off-keyboard";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ConsoleSignature } from "@/components/easter-eggs/console-signature";

export default function Home() {
  return (
    <>
      <ConsoleSignature />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Writing />
        <Toolkit />
        <OffKeyboard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
