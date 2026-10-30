'use client';

import Link from 'next/link';

type ModalProps = {
  isOpen: boolean;
};

function MenuOverlay({ isOpen }: Readonly<ModalProps>) {
  return (
    <div
      className={`fixed inset-x-0 top-27.75 bottom-0 z-40 bg-white transform transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="mx-auto flex h-full w-full max-w-346.25 flex-col justify-between p-12">
        {/* Spacing Atas agar menu tidak tertutup header */}
        <div className="h-16"></div>

        <nav className="flex flex-col gap-6 text-5xl font-medium tracking-tight text-black md:text-7xl">
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Home
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">
            About Me
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Projects
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Skillsets
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">
            Contact Me
          </Link>
        </nav>

        <div className="text-sm tracking-wider text-black border-b border-black w-max pb-1">
          <a href="mailto:DOR@PAMIDORDESIGN.CO">FUFUFAFA@DESIGN</a>
        </div>
      </div>
    </div>
  );
}

export default MenuOverlay;
