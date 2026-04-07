import { Settings, Zap, Anchor, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Engine Tuning & Rebuilds',
    description: 'From routine maintenance to full engine overhauls. We restore lost power and ensure peak RPMs.',
    icon: Settings,
  },
  {
    title: 'Sluggish Performance Fixes',
    description: 'Bogging down? Cavitation? We diagnose fuel systems, jet pumps, and wear rings to get your holeshot back.',
    icon: Zap,
  },
  {
    title: 'Trailer Repair',
    description: 'Bearings, bunks, winches, and lights. Don\'t let a bad trailer keep your ski off the water.',
    icon: Anchor,
  },
  {
    title: 'Electrical Diagnostics',
    description: 'Solving complex wiring issues, dead batteries, and faulty sensors with precision testing equipment.',
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-6">
            Comprehensive <span className="text-warning-red">Services</span>
          </h2>
          <p className="text-chrome-silver text-lg">
            We handle everything from 2-stroke classics to modern supercharged beasts. No job is too complex for our diagnostic team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-fuel-slate border border-white/10 p-8 hover:border-warning-red/50 transition-colors group">
                <div className="bg-white/5 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-warning-red/10 transition-colors">
                  <Icon size={32} className="text-warning-red" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl uppercase font-bold mb-4">{service.title}</h3>
                <p className="text-chrome-silver leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
