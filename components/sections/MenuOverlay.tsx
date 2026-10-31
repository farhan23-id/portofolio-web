'use client';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';

const links = [
  { label: 'Home', href: '#' },
  { label: 'About Me', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Skillsets', href: '#' },
  { label: 'Contact Me', href: '#' },
];

function MenuOverlay() {
  return (
    <Dialog.Portal>
      <Dialog.Content
        aria-describedby={undefined}
        // Klik pada tombol toggle jangan dianggap "klik di luar"
        onInteractOutside={(e) => {
          if ((e.target as HTMLElement).closest('[data-menu-toggle]')) {
            e.preventDefault();
          }
        }}
        className="fixed inset-0 z-50 bg-white data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out"
      >
        <Dialog.Title className="sr-only">Menu</Dialog.Title>

        <div className="mx-auto flex h-full w-full max-w-346.25 flex-col justify-between p-12 pt-39.75">
          <nav className="flex flex-col gap-6 text-5xl font-medium tracking-tight text-black md:text-7xl">
            {links.map((l) => (
              <Dialog.Close asChild key={l.label}>
                <Link href={l.href} className="transition-opacity hover:opacity-60">
                  {l.label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>

          <div className="w-max border-b border-black pb-1 text-sm tracking-wider text-black">
            <a href="mailto:DOR@PAMIDORDESIGN.CO">FUFUFAFA@DESIGN</a>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default MenuOverlay;