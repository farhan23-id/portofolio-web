import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div
      className={cn(
        'flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans'
      )}
    >
      <main className={cn("font-funnel")}>Hello</main>
    </div>
  );
}
