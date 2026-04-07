import { Star, ShieldCheck, Award, Zap, Coins, Anchor, Gauge } from 'lucide-react';
import Image from 'next/image';

export default function Trust() {
  return (
    <section id="reviews" className="py-24 bg-fuel-slate border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: The Visual Monument */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-warning-red/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-square w-full max-w-xl mx-auto border border-white/10 bg-black overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1000&auto=format&fit=crop" 
                alt="Industrial high-performance mechanical detail" 
                fill 
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              
              {/* Custom Forged Emblem Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-gradient-to-br from-black/40 via-transparent to-warning-red/20">
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={32} className="text-warning-red fill-warning-red drop-shadow-[0_0_15px_rgba(204,51,51,0.8)]" />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <p className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tighter text-safety-white drop-shadow-lg">
                      145+ REVIEWS
                    </p>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-warning-red to-transparent my-2"></div>
                    <p className="font-heading text-xl font-bold uppercase tracking-[0.2em] text-warning-red">
                      GOOGLE VERIFIED
                    </p>
                  </div>
                </div>
              </div>

              {/* Industrial Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-warning-red/50 m-4"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-warning-red/50 m-4"></div>
            </div>
          </div>

          {/* Column 2: The Trust Pillars */}
          <div className="relative z-10">
            <div className="inline-block bg-warning-red text-safety-white px-4 py-1 font-heading uppercase font-bold text-sm tracking-widest mb-6">
              Unmatched Reputation
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl font-bold uppercase leading-none mb-6">
              THE POMPANO <br />
              <span className="text-warning-red">DEALER ALTERNATIVE.</span>
            </h2>
            <p className="font-heading text-xl sm:text-2xl uppercase font-bold text-chrome-silver mb-12 tracking-wide">
              Certified Expertise. 5-Star Service. <br className="hidden sm:block" />
              Zero Dealership Wait Times.
            </p>
            
            {/* Trust Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-warning-red/10 p-3 border border-warning-red/20 group-hover:bg-warning-red/20 transition-colors">
                  <Zap className="text-warning-red" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-lg uppercase font-bold mb-1 text-safety-white">Same-Day Availability</h3>
                  <p className="text-chrome-silver text-sm leading-relaxed">We prioritize urgent repairs to get you back on the water fast.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-warning-red/10 p-3 border border-warning-red/20 group-hover:bg-warning-red/20 transition-colors">
                  <ShieldCheck className="text-warning-red" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-lg uppercase font-bold mb-1 text-safety-white">Certified Techs</h3>
                  <p className="text-chrome-silver text-sm leading-relaxed">Factory-trained experts for Yamaha, Sea-Doo, and Kawasaki.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-warning-red/10 p-3 border border-warning-red/20 group-hover:bg-warning-red/20 transition-colors">
                  <Coins className="text-warning-red" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-lg uppercase font-bold mb-1 text-safety-white">Fair Pricing Guarantee</h3>
                  <p className="text-chrome-silver text-sm leading-relaxed">Transparent estimates without the dealership markup.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-warning-red/10 p-3 border border-warning-red/20 group-hover:bg-warning-red/20 transition-colors">
                  <Anchor className="text-warning-red" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-lg uppercase font-bold mb-1 text-safety-white">Mobile & Dockside</h3>
                  <p className="text-chrome-silver text-sm leading-relaxed">We bring the shop to your dock or driveway for maximum convenience.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
