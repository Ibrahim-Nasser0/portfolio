"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "dart",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative my-4 rounded-2xl overflow-hidden bg-[#0C0D12] border border-white/10 shadow-xl font-mono text-xs">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#15171E] border-b border-white/10">
        <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider">
          {language}
        </span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-[#E58A2B] hover:text-black text-gray-300 transition-colors text-[11px]"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <pre className="p-4 overflow-x-auto text-emerald-300 font-mono text-xs leading-relaxed">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};
