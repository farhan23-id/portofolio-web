import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Home() {
  return (
    <div
      className={cn(
        'flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans'
      )}
    >
      <main className={cn('font-funnel')}>Hello</main>
      <Image src="/icons/Logo.svg" alt="Logo" width={100} height={100} />
    </div>
  );
}
