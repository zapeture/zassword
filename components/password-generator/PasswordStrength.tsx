"use client";

import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface PasswordStrengthProps {
  password: string;
  strength: number;
  strengthLabel: string;
  getStrengthColor: (strength: number) => string;
}

export function PasswordStrength({
  password,
  strength,
  strengthLabel,
  getStrengthColor,
}: PasswordStrengthProps) {
  if (!password || password === "Select at least one character type") {
    return null; // Don't render if no valid password
  }

  return (
    <div className="mb-6">
      <div className="mb-1 flex items-center justify-between">
        <Label className="text-sm font-medium text-gray-300">Strength</Label>
        <span
          className={`text-sm font-semibold ${
            strength <= 1
              ? "text-red-400"
              : strength === 2
                ? "text-yellow-400"
                : "text-green-400"
          }`}
        >
          {strengthLabel}
        </span>
      </div>
      <Progress
        value={(strength + 1) * 20} // Map score 0-4 to percentage 20-100
        className={`h-2 [&>*]:${getStrengthColor(strength)}`}
        aria-label={`Password strength: ${strengthLabel}`}
      />
    </div>
  );
}
