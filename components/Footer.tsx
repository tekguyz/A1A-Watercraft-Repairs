import { Wrench } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <Wrench className="text-warning-red" size={24} aria-hidden="true" />
            <span className="font-heading text-xl font-bold tracking-tight text-safety-white uppercase">
              A1A Watercraft
            </span>
          </div>

          <div className="text-chrome-silver text-sm text-center md:text-left">
            <p className="mb-1">4699 N Dixie Hwy, Pompano Beach, FL 33064</p>
            <p className="mb-2 font-bold text-safety-white">561-929-9163</p>
            &copy; {new Date().getFullYear()} A1A Watercraft Repairs. All rights reserved.
          </div>

          <div className="flex gap-6 font-heading uppercase text-sm font-bold tracking-wider text-chrome-silver">
            <Link href="#" className="hover:text-warning-red transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-warning-red transition-colors">Terms</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
