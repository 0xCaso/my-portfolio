import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <div className="flex items-center justify-center z-10 overflow-auto h-[calc(100vh-16rem)]">
      <div className="relative w-full max-w-4xl rounded-2xl bg-zinc-800 bg-opacity-50 overflow-hidden">
        <div
          className={cn(
            "text-white p-8 flex flex-col items-center justify-center h-full",
          )}
        >
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
