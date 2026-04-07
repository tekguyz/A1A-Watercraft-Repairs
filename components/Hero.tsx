import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1649790798352-ac9e29c76d54?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="High performance jet ski on the water" 
          fill 
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        {/* 60% black base */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Radial navy spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,15,40,0.8)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 mb-6">
            <Clock size={16} className="text-warning-red" aria-hidden="true" />
            <span className="font-heading uppercase tracking-wider text-sm font-medium text-chrome-silver">Pompano Beach&apos;s Fastest Turnaround</span>
          </div>
          
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[1.1] mb-8 text-safety-white drop-shadow-2xl">
            3 MONTHS AT THE DEALER? <span className="text-warning-red block mt-2">OR SAME-DAY WITH WES?</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-chrome-silver mb-10 max-w-xl leading-relaxed">
            Expert diagnostics, engine tuning, and dockside repairs. We get you back on the water in hours, not months.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-shimmer bg-warning-red text-safety-white px-10 py-5 font-heading uppercase tracking-wider font-bold text-xl sm:text-2xl flex items-center justify-center gap-3 hover:bg-red-700 transition-all group shadow-2xl shadow-warning-red/20">
              <span className="relative z-10 flex items-center gap-3">
                GET A FREE ESTIMATE
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
