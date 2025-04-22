"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";

interface PasswordDisplayProps {
  password: string;
  copied: boolean;
  onCopy: () => void;
}

export function PasswordDisplay({
  password,
  copied,
  onCopy,
}: PasswordDisplayProps) {
  return (
    <div className="relative mb-6">
      <Input
        readOnly
        value={password}
        className="h-12 border-gray-600 bg-gray-700 pr-10 text-lg text-gray-50 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
        placeholder="Your generated password"
        aria-label="Generated Password"
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-1 h-9 w-9 -translate-y-1/2 transform text-gray-400 hover:bg-gray-600 hover:text-gray-100"
        onClick={onCopy}
        aria-label="Copy password"
        disabled={
          !password || password === "Select at least one character type"
        }
      >
        <Copy className="h-5 w-5" />
      </Button>
      {copied && (
        <span className="absolute top-1/2 right-12 -translate-y-1/2 transform text-xs text-green-400">
          Copied!
        </span>
      )}
    </div>
  );
}
