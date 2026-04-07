import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Services from '@/components/Services';
import MobileService from '@/components/MobileService';
import DealerComparison from '@/components/DealerComparison';
import ContactForm from '@/components/ContactForm';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import { Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <MobileService />
      <DealerComparison />
      <ContactForm />
      <Location />
      <Footer />

      {/* Mobile Hotline Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-warning-red text-safety-white flex justify-between items-center px-6 py-4 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
        <span className="font-heading uppercase font-bold tracking-wider text-sm">Need Same-Day Repair?</span>
        <a href="tel:5619299163" className="bg-black text-safety-white px-4 py-2 font-heading uppercase font-bold tracking-wider text-sm flex items-center gap-2 animate-pulse">
          <Phone size={16} />
          Call Now
        </a>
      </div>
    </main>
  );
}
