import { SplineSceneBasic } from "@/components/ui/demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background p-6 md:p-12">
      <div className="w-full max-w-5xl">
        <SplineSceneBasic />
      </div>
    </main>
  );
}
