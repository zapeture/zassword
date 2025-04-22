"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CharacterOptionsProps {
  includeUppercase: boolean;
  setIncludeUppercase: (checked: boolean) => void;
  includeLowercase: boolean;
  setIncludeLowercase: (checked: boolean) => void;
  includeNumbers: boolean;
  setIncludeNumbers: (checked: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (checked: boolean) => void;
}

export function CharacterOptions({
  includeUppercase,
  setIncludeUppercase,
  includeLowercase,
  setIncludeLowercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
}: CharacterOptionsProps) {
  return (
    <div className="mb-6 grid grid-cols-2 gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="uppercase"
          checked={includeUppercase}
          onCheckedChange={(checked) => setIncludeUppercase(Boolean(checked))}
          className="border-gray-600 focus:ring-purple-500 data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500"
          aria-label="Include uppercase letters"
        />
        <Label htmlFor="uppercase" className="cursor-pointer text-gray-300">
          Include Uppercase
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="lowercase"
          checked={includeLowercase}
          onCheckedChange={(checked) => setIncludeLowercase(Boolean(checked))}
          className="border-gray-600 focus:ring-purple-500 data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500"
          aria-label="Include lowercase letters"
        />
        <Label htmlFor="lowercase" className="cursor-pointer text-gray-300">
          Include Lowercase
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="numbers"
          checked={includeNumbers}
          onCheckedChange={(checked) => setIncludeNumbers(Boolean(checked))}
          className="border-gray-600 focus:ring-purple-500 data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500"
          aria-label="Include numbers"
        />
        <Label htmlFor="numbers" className="cursor-pointer text-gray-300">
          Include Numbers
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="symbols"
          checked={includeSymbols}
          onCheckedChange={(checked) => setIncludeSymbols(Boolean(checked))}
          className="border-gray-600 focus:ring-purple-500 data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500"
          aria-label="Include symbols"
        />
        <Label htmlFor="symbols" className="cursor-pointer text-gray-300">
          Include Symbols
        </Label>
      </div>
    </div>
  );
}
