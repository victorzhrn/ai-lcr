"use client";

import { useState } from "react";

const CMD = "npm install ai-lcr";

export default function CopyInstall() {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="install"
      onClick={() => {
        navigator.clipboard?.writeText(CMD);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      aria-label="Copy install command"
    >
      <span className="install__prompt">$</span>
      <code>{CMD}</code>
      <span className="install__copy">{copied ? "copied ✓" : "copy"}</span>
    </button>
  );
}
