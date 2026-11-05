'use client';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuOverlay from '../sections/MenuOverlay';
import { useLenis } from 'lenis/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  // Kunci scroll di html, karena aturan overflow di globals.css
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => lenis?.start();
  }, [isOpen, lenis]);

  const handleOpenChange = (open: boolean) => {
    if (open) window.scrollTo({ top: 0 });
    setIsOpen(open);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <header className="absolute top-0 left-1/2 z-60 flex h-27.75 w-full max-w-346.25 -translate-x-1/2 items-center justify-between px-12">
        <Link href="/" className="relative h-5 w-40">
          <Image
            src="/icons/Logo.svg"
            alt="FARHAN.DEV"
            fill
            loading="eager"
            className="object-contain object-left"
          />
        </Link>

        <Dialog.Trigger
          data-menu-toggle
          aria-label="Toggle Menu"
          className="group pointer-events-auto relative flex h-3 w-8 flex-col items-center justify-between"
        >
          <span className="h-0.5 w-full origin-center bg-gray-600 transition-all duration-300 ease-in-out group-data-[state=open]:absolute group-data-[state=open]:top-1/2 group-data-[state=open]:-translate-y-1/2 group-data-[state=open]:rotate-45" />
          <span className="h-0.5 w-full origin-center bg-gray-600 transition-all duration-300 ease-in-out group-data-[state=open]:absolute group-data-[state=open]:top-1/2 group-data-[state=open]:-translate-y-1/2 group-data-[state=open]:-rotate-45" />
        </Dialog.Trigger>
      </header>
      <MenuOverlay />
    </Dialog.Root>
  );
}

export default Navbar;
