"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-canvas">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <h1 className="font-mono text-6xl text-accent mb-4">404</h1>
          <p className="font-mono text-sm text-text-dim mb-8">
            you found a bug in the data
          </p>
          <p className="text-text-mid mb-10">
            This page doesn&apos;t exist. Either I haven&apos;t built it yet, or
            something went wrong.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-accent text-canvas hover:bg-accent/90 transition-all duration-200"
          >
            ↩ back to home
          </Link>
        </div>
      </Container>
    </div>
  );
}
