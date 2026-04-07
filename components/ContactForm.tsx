'use client';

import { useState } from 'react';
import { Send, Camera, Upload, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="lg:sticky lg:top-32">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-6 leading-none">
              Get A <span className="text-warning-red">Free Estimate</span>
            </h2>
            <p className="text-chrome-silver text-lg mb-10 leading-relaxed max-w-lg">
              Describe your issue and upload a photo for a faster diagnostic. We aim to respond within 1 hour during normal business hours.
            </p>
            
            <div className="space-y-8 text-chrome-silver">
              <div className="flex items-start gap-4">
                <div className="bg-warning-red/10 p-3 border border-warning-red/20">
                  <Upload className="text-warning-red" size={24} />
                </div>
                <div>
                  <h4 className="font-heading uppercase font-bold text-safety-white mb-1">Shop Location</h4>
                  <p>4699 N Dixie Hwy, Pompano Beach, FL 33064</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-warning-red/10 p-3 border border-warning-red/20">
                  <Camera className="text-warning-red" size={24} />
                </div>
                <div>
                  <h4 className="font-heading uppercase font-bold text-safety-white mb-1">Direct Line</h4>
                  <p className="text-warning-red font-bold text-2xl">561-929-9163</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-fuel-slate p-1 sm:p-1.5 shadow-2xl relative">
            {/* Racing Red Top Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-warning-red z-10"></div>
            
            <div className="bg-fuel-slate p-6 sm:p-10 border border-white/5">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 bg-warning-red/20 text-warning-red flex items-center justify-center rounded-full mb-8 animate-bounce">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="font-heading text-4xl uppercase font-bold mb-4">Request Sent!</h3>
                  <p className="text-chrome-silver text-lg">Wes will review your details and call you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-warning-red font-heading uppercase font-bold hover:underline"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                  name="a1a-repair-quote"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  encType="multipart/form-data"
                >
                  <input type="hidden" name="form-name" value="a1a-repair-quote" />
                  <p className="hidden">
                    <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label htmlFor="name" className="block font-heading uppercase text-xs font-bold mb-2 text-chrome-silver group-focus-within:text-warning-red transition-colors">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="w-full bg-black/40 border border-white/10 text-safety-white px-4 py-4 focus:outline-none focus:border-warning-red focus:ring-1 focus:ring-warning-red transition-all"
                        placeholder="JOHN DOE"
                      />
                    </div>
                    <div className="relative group">
                      <label htmlFor="phone" className="block font-heading uppercase text-xs font-bold mb-2 text-chrome-silver group-focus-within:text-warning-red transition-colors">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        className="w-full bg-black/40 border border-white/10 text-safety-white px-4 py-4 focus:outline-none focus:border-warning-red focus:ring-1 focus:ring-warning-red transition-all"
                        placeholder="561-000-0000"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label htmlFor="make" className="block font-heading uppercase text-xs font-bold mb-2 text-chrome-silver group-focus-within:text-warning-red transition-colors">Watercraft Make/Model</label>
                      <input 
                        type="text" 
                        id="make" 
                        name="make"
                        required
                        placeholder="E.G. SEA-DOO RXT-X"
                        className="w-full bg-black/40 border border-white/10 text-safety-white px-4 py-4 focus:outline-none focus:border-warning-red focus:ring-1 focus:ring-warning-red transition-all"
                      />
                    </div>
                    <div className="relative group">
                      <label htmlFor="service" className="block font-heading uppercase text-xs font-bold mb-2 text-chrome-silver group-focus-within:text-warning-red transition-colors">Service Type</label>
                      <select 
                        id="service" 
                        name="service"
                        required
                        defaultValue=""
                        className="w-full bg-black/40 border border-white/10 text-safety-white px-4 py-4 focus:outline-none focus:border-warning-red focus:ring-1 focus:ring-warning-red transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>SELECT SERVICE</option>
                        <option value="engine-repair">ENGINE REPAIR</option>
                        <option value="sluggish-performance">SLUGGISH PERFORMANCE</option>
                        <option value="routine-maintenance">ROUTINE MAINTENANCE</option>
                        <option value="trailer-repair">TRAILER REPAIR</option>
                        <option value="mobile-service">MOBILE/DOCKSIDE SERVICE</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="issue" className="block font-heading uppercase text-xs font-bold mb-2 text-chrome-silver group-focus-within:text-warning-red transition-colors">Problem Description</label>
                    <textarea 
                      id="issue" 
                      name="problem-description"
                      rows={4}
                      required
                      placeholder="DESCRIBE THE ISSUE IN DETAIL..."
                      className="w-full bg-black/40 border border-white/10 text-safety-white px-4 py-4 focus:outline-none focus:border-warning-red focus:ring-1 focus:ring-warning-red transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Photo Vault Section */}
                  <div className="relative group">
                    <label className="block font-heading uppercase text-xs font-bold mb-2 text-chrome-silver group-focus-within:text-warning-red transition-colors">Upload Photo of Watercraft/Issue</label>
                    <div className="relative border-2 border-dashed border-white/10 hover:border-warning-red/50 transition-colors bg-black/20 p-8 text-center cursor-pointer">
                      <input 
                        type="file" 
                        name="vessel-photo" 
                        id="vessel-photo"
                        accept="image/*" 
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="flex flex-col items-center gap-3">
                        <Camera className="text-warning-red" size={32} />
                        <p className="font-heading uppercase text-sm font-bold text-safety-white">
                          {fileName ? fileName : 'TAP TO UPLOAD OR DRAG PHOTO'}
                        </p>
                        <p className="text-chrome-silver text-xs uppercase tracking-widest">JPG, PNG, OR HEIC (MAX 10MB)</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-shimmer w-full bg-warning-red text-safety-white font-heading uppercase font-bold tracking-widest py-5 text-lg hover:bg-red-700 transition-all disabled:opacity-70 flex justify-center items-center gap-3 group hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_0_rgba(204,51,51,0)] hover:shadow-[0_10px_30px_rgba(204,51,51,0.3)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? 'PROCESSING...' : 'SUBMIT FOR SAME-DAY INSPECTION'}
                      {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
