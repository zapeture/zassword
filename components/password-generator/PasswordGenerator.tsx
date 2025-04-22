"use client";

import { useState, useEffect, useCallback } from "react";
import zxcvbn from "zxcvbn";

import { PasswordDisplay } from "@/components/password-generator/PasswordDisplay";
import { PasswordStrength } from "@/components/password-generator/PasswordStrength";
import { PasswordLengthSlider } from "@/components/password-generator/PasswordLengthSlider";
import { CharacterOptions } from "@/components/password-generator/CharacterOptions";
import { GenerateButton } from "@/components/password-generator/GenerateButton";

function Header() {
  return (
    <>
      <h1 className="mb-3 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent">
        Zassword
      </h1>
      <p className="mb-6 text-center text-gray-400">
        Instant Password Generator
      </p>
    </>
  );
}

export function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [strength, setStrength] = useState<number>(0);
  const [strengthLabel, setStrengthLabel] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = useCallback(() => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charPool = "";
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (charPool.length === 0) {
      setPassword("Select at least one character type");
      setStrength(0);
      setStrengthLabel("");
      return;
    }

    let generatedPassword = "";
    // Use window.crypto for modern browsers, fallback for older ones (e.g., IE 11)
    const crypto =
      window.crypto ||
      (window as Window & typeof globalThis & { msCrypto: Crypto }).msCrypto;
    const randomValues = new Uint32Array(length);

    if (!crypto || !crypto.getRandomValues) {
      console.error("Secure random number generation is not available.");
      // Fallback to Math.random (less secure)
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        generatedPassword += charPool[randomIndex];
      }
    } else {
      crypto.getRandomValues(randomValues);
      for (let i = 0; i < length; i++) {
        generatedPassword += charPool[randomValues[i] % charPool.length];
      }
    }

    setPassword(generatedPassword);
    setCopied(false); // Reset copied state when new password is generated
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  const copyToClipboard = () => {
    if (
      !password ||
      password === "Select at least one character type" ||
      !navigator.clipboard
    )
      return;
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  useEffect(() => {
    if (password && password !== "Select at least one character type") {
      const result = zxcvbn(password);
      setStrength(result.score);
      const labels = ["Very Weak", "Weak", "Okay", "Good", "Strong"];
      setStrengthLabel(labels[result.score] || "");
    } else {
      setStrength(0);
      setStrengthLabel("");
    }
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]); // Generate on initial load and when options/length change

  const getStrengthColor = (currentStrength: number): string => {
    switch (currentStrength) {
      case 0:
        return "bg-red-500";
      case 1:
        return "bg-orange-500";
      case 2:
        return "bg-yellow-500";
      case 3:
        return "bg-green-400";
      case 4:
        return "bg-green-600";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg border border-gray-700 bg-gray-800 p-8 shadow-xl">
      <Header />

      <PasswordDisplay
        password={password}
        copied={copied}
        onCopy={copyToClipboard}
      />

      <PasswordStrength
        password={password}
        strength={strength}
        strengthLabel={strengthLabel}
        getStrengthColor={getStrengthColor}
      />

      <PasswordLengthSlider length={length} onLengthChange={setLength} />

      <CharacterOptions
        includeUppercase={includeUppercase}
        setIncludeUppercase={setIncludeUppercase}
        includeLowercase={includeLowercase}
        setIncludeLowercase={setIncludeLowercase}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSymbols={includeSymbols}
        setIncludeSymbols={setIncludeSymbols}
      />

      <GenerateButton onGenerate={generatePassword} />
    </div>
  );
}
