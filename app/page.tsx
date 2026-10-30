import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="w-full max-w-346.25 flex flex-col items-center border px-10">
      <Navbar />
      <main className="font-funnel w-full pt-27.75">
        <div className="border size-40"></div>
      </main>
      <Footer />
    </div>
  );
}
