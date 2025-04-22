"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface PasswordLengthSliderProps {
  length: number;
  onLengthChange: (value: number) => void;
}

export function PasswordLengthSlider({
  length,
  onLengthChange,
}: PasswordLengthSliderProps) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between">
        <Label htmlFor="length" className="text-gray-300">
          Password Length
        </Label>
        <span className="text-lg font-semibold text-purple-400">{length}</span>
      </div>
      <Slider
        id="length"
        min={6}
        max={32}
        step={1}
        value={[length]}
        onValueChange={(value) => onLengthChange(value[0])}
        className="[&>span:first-child]:h-1 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-purple-500 [&>span:first-child]:to-pink-500 [&>span:first-child>span]:bg-gray-100"
        aria-label="Password Length"
      />
    </div>
  );
}
