"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface GenerateButtonProps {
  onGenerate: () => void;
}

export function GenerateButton({ onGenerate }: GenerateButtonProps) {
  return (
    <Button
      onClick={onGenerate}
      className="flex h-12 w-full transform items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:from-purple-600 hover:to-pink-600"
      aria-label="Generate new password"
    >
      <RefreshCw className="h-5 w-5" />
      Generate Password
    </Button>
  );
}
