import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex items-center justify-center z-10 overflow-auto h-[calc(100vh-16rem)] m-auto animate-appear">
      <div className="relative w-full max-w-4xl rounded-2xl bg-zinc-800 bg-opacity-50 overflow-hidden">
        <div
          className={cn(
            "text-white p-8 flex flex-col items-center justify-center h-full",
          )}
        >
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Matteo</h1>
          <p className="text-xl mb-6">
            A passionate software developer with a knack for creating innovative
            solutions.
          </p>
          <p className="text-lg">
            I specialize in building robust and scalable applications, always
            eager to tackle new challenges and learn cutting-edge technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
