import { XCircle, CheckCircle2 } from 'lucide-react';

export default function DealerComparison() {
  return (
    <section className="py-24 bg-fuel-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-6">
            The <span className="text-warning-red">A1A</span> Difference
          </h2>
          <p className="text-chrome-silver text-lg max-w-2xl mx-auto">
            Why wait months for the dealership when you can be back on the water this weekend?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto border border-white/10">
          
          {/* Dealership Column */}
          <div className="bg-[#111] p-8 sm:p-12 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="font-heading text-2xl uppercase font-bold text-chrome-silver/50 text-center mb-8 pb-4 border-b border-white/5">
              The Dealer &quot;Standard&quot;
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <XCircle className="text-red-900 shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <span className="text-chrome-silver block font-bold uppercase text-sm">3-Month Wait List</span>
                  <span className="text-chrome-silver/60 text-xs">Your ski sits in the sun while summer passes you by.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="text-red-900 shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <span className="text-chrome-silver block font-bold uppercase text-sm">High Overhead Cost</span>
                  <span className="text-chrome-silver/60 text-xs">You pay for their showroom and sales staff commissions.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="text-red-900 shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <span className="text-chrome-silver block font-bold uppercase text-sm">Inflexible Drop-off</span>
                  <span className="text-chrome-silver/60 text-xs">You tow it, you wait in line, you hope for a call.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* A1A Column */}
          <div className="bg-warning-red p-8 sm:p-12 relative shadow-[0_0_50px_rgba(255,0,0,0.2)] md:-ml-4 md:-my-4 z-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/30"></div>
            <h3 className="font-heading text-3xl uppercase font-bold text-safety-white text-center mb-8 pb-4 border-b border-white/20">
              The A1A Advantage
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-safety-white shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <span className="text-safety-white block font-bold uppercase text-lg">Same-Day Service</span>
                  <span className="text-white/80 text-sm">Most diagnostics and repairs completed within 24-48 hours.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-safety-white shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <span className="text-safety-white block font-bold uppercase text-lg">Fair, Direct Pricing</span>
                  <span className="text-white/80 text-sm">No dealer markup. You pay for expert labor and quality parts.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-safety-white shrink-0 mt-1" size={24} aria-hidden="true" />
                <div>
                  <span className="text-safety-white block font-bold uppercase text-lg">Wes Comes To You</span>
                  <span className="text-white/80 text-sm">Dockside or driveway service. We handle the logistics.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
