import { Anchor, PhoneCall, Waves } from 'lucide-react';
import Image from 'next/image';

export default function MobileService() {
  return (
    <section id="mobile" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/dock/1920/1080" 
          alt="Dockside jet ski repair" 
          fill 
          className="object-cover opacity-20 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-fuel-slate/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warning-red p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-1.5 mb-6">
              <Anchor size={16} className="text-safety-white" aria-hidden="true" />
              <span className="font-heading uppercase tracking-wider text-sm font-bold text-safety-white">Mobile Dockside Unit</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-6 text-safety-white leading-tight">
              Wes Comes To <span className="text-black">Your Dock</span>
            </h2>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Don&apos;t deal with the hassle of towing. Whether your ski is on a lift, at your private dock, or in your driveway, Wes brings the full shop to you. We serve all of Pompano Beach and surrounding coastal areas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 text-safety-white font-heading uppercase font-bold">
                <Waves className="text-black" size={24} />
                <span>At Your House</span>
              </div>
              <div className="flex items-center gap-3 text-safety-white font-heading uppercase font-bold">
                <Anchor className="text-black" size={24} />
                <span>At Your Dock</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3 w-full">
            <a href="tel:5619299163" className="block w-full bg-fuel-slate text-safety-white p-8 text-center hover:bg-black transition-colors border border-transparent hover:border-white/20 group">
              <PhoneCall size={48} className="mx-auto mb-4 text-warning-red group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="block font-heading text-2xl uppercase font-bold mb-2">Call For Dockside</span>
              <span className="block text-chrome-silver">561-929-9163</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
