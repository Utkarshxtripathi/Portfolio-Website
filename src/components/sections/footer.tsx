import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-8 bg-canvas">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-dim">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Built with Next.js 16 · Tailwind v4 · Framer Motion</span>
          </div>
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Utkarsh Tripathi</span>
            <a href="#hero" className="hover:text-accent transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}


