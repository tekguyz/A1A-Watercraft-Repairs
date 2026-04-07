export default function Location() {
  return (
    <section className="py-24 bg-[#111] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-4 text-warning-red">
          Visit The Shop
        </h2>
        <p className="text-chrome-silver text-xl font-heading uppercase tracking-wider">
          4699 N Dixie Hwy, Pompano Beach, FL 33064
        </p>
      </div>
      <div className="w-full h-[450px] grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14308.680680034819!2d-80.1295008128418!3d26.28858289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d42befb4fad%3A0xa64dd1b282e9ca36!2sA1A%20Watercraft%20Repairs!5e0!3m2!1sen!2sus!4v1775561303901!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="A1A Watercraft Repairs Location"
        ></iframe>
      </div>
    </section>
  );
}
