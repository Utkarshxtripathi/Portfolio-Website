"use client";

import { useEffect } from "react";

export function ConsoleSignature() {
  useEffect(() => {
    console.log(
      `%c ╔══════════════════════════════════╗
  ║   utkarsh.dev                  ║
  ║   "Data is just a love letter  ║
  ║    to a future you."           ║
  ╚══════════════════════════════════╝`,
      "color: #F5A524; font-family: monospace; font-size: 12px;"
    );
  }, []);

  return null;
}
