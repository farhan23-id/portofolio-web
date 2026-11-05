'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

const TEXT =
  "Hi, I'm Farhan — a fullstack web developer who bridges complex engineering and thoughtful interfaces. I build reliable systems people can depend on and products that feel effortless to use. From the first component to deployment, the whole experience gets built here.";

const WORDS = TEXT.split(' ');

const GRAY = '#9ca3af';
const RED = '#ef4444';
const BLACK = '#000000';

// efek selesai di 85% scroll, sisanya teks tetap hitam sebelum section lepas
const END_AT = 0.85;

function Word({ active, children }: Readonly<{ active: boolean; children: string }>) {
  return (
    <motion.span
      initial={{ color: GRAY }}
      animate={{
        color: active ? [null as unknown as string, RED, BLACK] : GRAY,
      }}
      transition={
        active
          ? { duration: 0.7, times: [0, 0.35, 1], ease: 'easeOut' } // abu → merah → hitam
          : { duration: 0.25, ease: 'easeOut' } // hitam → abu langsung
      }
    >
      {children}{' '}
    </motion.span>
  );
}

function AboutMe() {
  const trackRef = useRef<HTMLElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const progress = Math.min(1, v / END_AT);
    const n = Math.min(WORDS.length, Math.floor(progress * (WORDS.length + 1)));
    setActiveCount((prev) => (prev === n ? prev : n));
  });

  return (
    <section ref={trackRef} className="h-[300vh]">
      <div className="sticky top-0 h-screen">
        <div className="mx-auto flex h-full w-full max-w-346.25 flex-col justify-center px-10">
          <div className="block mb-10">
            <div className="border bg-black size-40 float-end ml-1 -rotate-5">
              gambar
            </div>

            <p className="font-funnel text-[2.5rem] font-medium">
              {WORDS.map((word, i) => (
                <Word key={"word" + i} active={i < activeCount}>
                  {word}
                </Word>
              ))}
            </p>
          </div>
          <hr className="border-t-2 my-6 border-gray-300" />
          <div>foto</div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
