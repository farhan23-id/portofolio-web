'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'motion/react';

function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  // 0 = selebar container, 1 = selebar layar
  const p = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
  const width = useMotionTemplate`calc(100% + (100vw - 100%) * ${p})`;
  const radius = useTransform(p, [0, 1], [24, 0]);

  return (
    <footer ref={ref} className="relative h-98 w-full text-white">
      <motion.div
        aria-hidden
        style={{
          width,
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        }}
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 bg-[#0d0c0a]"
      />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-346.25 flex-col justify-between px-12 pb-12 pt-5">
        <div className="relative z-10 mx-auto flex h-full w-full max-w-346.25 flex-col justify-between px-12 pb-12 pt-5">
          <div className="flex justify-between">
            <Image
              src="/icons/Logo.svg"
              alt="Logo"
              width={750}
              height={750}
              loading="eager"
              className="invert brightness-0"
            />
          </div>
          <div className="flex justify-between">
            <div className="font-funnel text-2xl">
              Membuat website sepenuh hati
            </div>
            <div className="invert flex flex-row gap-4">
              <Link href={'#'}>
                <Image
                  src="/icons/Instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src="/icons/Github.svg"
                  alt="Github"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src="/icons/Linkedin.svg"
                  alt="Linkedin"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div>copyright</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
