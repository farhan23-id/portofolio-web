'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MenuOverlay from '../sections/MenuOverlay';

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Background putih: terpisah, full lebar layar */}
      <div
        className={`fixed top-0 left-0 w-full h-27.75 bg-white z-49 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      />

      {/* Header: sama persis seperti sebelumnya, tanpa div background di dalamnya */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-346.25 h-27.75 z-50 flex items-center px-12 bg-transparent">
        <nav className="flex items-center justify-between w-full h-3">
          <Link href="/" className="relative w-40 h-5">
            <Image
              src="/icons/Logo.svg"
              alt="FARHAN.DEV"
              fill
              loading="eager"
              className="object-contain object-left"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}

            className={`relative z-50 w-8 h-3 flex flex-col justify-between items-center group`}
            aria-label="Toggle Menu"
          >
            {/* Garis Atas */}
            <span
              className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ease-in-out transform-gpu origin-center
            ${isOpen ? 'absolute top-1/2 -translate-y-1/2 rotate-45' : ''}`}
            />

            {/* Garis Bawah */}
            <span
              className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ease-in-out transform-gpu origin-center
            ${isOpen ? 'absolute top-1/2 -translate-y-1/2 -rotate-45' : ''}`}
            />
          </button>
        </nav>
      </header>
      <MenuOverlay isOpen={isOpen} />
    </>
  );
}

export default Navbar;
