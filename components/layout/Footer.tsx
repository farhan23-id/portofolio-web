'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setExpanded(entry.intersectionRatio >= 0.9),
      { threshold: [0.9] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="relative text-white w-full h-98">
      {/* Background: melebar saat footer sudah terlihat */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 bg-[#0d0c0a] transition-all duration-700 ease-in-out
    ${expanded ? 'w-screen rounded-t-none' : 'w-full rounded-t-3xl'}`}
      />

      {/* Konten: di atas background */}
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
    </footer>
  );
}

export default Footer;
