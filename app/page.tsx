import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />

      <main className="font-funnel w-full flex-1">
        <section className="relative flex items-center min-h-screen w-full">
          <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-[url('/images/Hero_2.jpeg')] bg-cover bg-center bg-no-repeat" />
          <div className="relative border mx-auto w-full max-w-346.25 px-10  text-black">
            FUFUFAFA
          </div>
        </section>

        <section className="mx-auto w-full max-w-346.25 px-10">OWI</section>
      </main>

      <div className="relative mx-auto w-full max-w-346.25 px-10">
        <Footer />
      </div>
    </div>
  );
}
