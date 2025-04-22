import { PasswordGenerator } from "@/components/password-generator/PasswordGenerator";

export default function Home() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center p-4 text-gray-100">
      <PasswordGenerator />
    </main>
  );
}
