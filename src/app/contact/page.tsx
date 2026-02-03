"use client";

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="overflow-hidden">
        {/* Compact Hero Section with Integrated Form */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-transparent">
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">

              {/* Left Column: Text Content */}
              <AnimatedSection animation="slideInRight" className="flex-1 max-w-xl lg:pt-12">
                {/* Breadcrumb */}
                <motion.nav
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400"
                >
                  <Link href="/" className="hover:text-brand-primary transition-colors">Digital Home</Link>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="text-brand-primary">Portal</span>
                </motion.nav>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-[84px] font-black leading-[0.95] text-brand-purple mb-8 tracking-tighter">
                  Let’s Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-teal to-brand-primary bg-[length:200%_auto] animate-gradient-flow">The Future.</span>
                </h1>

                {/* Elite Subheading */}
                <div className="flex items-start gap-4 border-l-3 border-brand-teal pl-6 py-1 mb-8">
                  <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-md italic">
                    "A partnership in institutional excellence and digital sovereignty."
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <Link href="#labs" className="px-8 py-4 border-2 border-slate-100 text-slate-500 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-slate-50 transition-all">
                    Explore Labs
                  </Link>
                </div>

                {/* Social Links - Relocated */}
                <div className="flex gap-3">
                  {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
                    <Link key={social} href="#" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center hover:bg-brand-primary transition-all group active:scale-95">
                      <Image
                        src={`/icons/${social}.svg`}
                        alt={social}
                        width={14}
                        height={14}
                        className="group-hover:brightness-0 group-hover:invert transition-all"
                      />
                    </Link>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right Column: Intelligence Form (Integrated into Hero) */}
              <div className="flex-1 w-full max-w-2xl">
                <AnimatedSection animation="scale" className="h-full">
                  <div className="bg-white rounded-[60px] shadow-[0_60px_80px_-40px_rgba(0,0,0,0.06)] hover:shadow-[0_0_80px_-10px_rgba(0,102,179,0.2)] p-8 md:p-12 border border-slate-100 hover:border-brand-primary/20 relative overflow-hidden h-full group transition-all duration-700">
                    <div className="relative z-10">
                      <div className="mb-10 text-center lg:text-left">
                        <h3 className="text-2xl md:text-3xl font-black text-brand-purple mb-2 tracking-tighter">Initiate Dialogue.</h3>
                        <p className="text-xs text-slate-400 font-medium">Your digital revolution starts here.</p>
                      </div>

                      <form className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                          <div className="relative group/field">
                            <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-3 ml-1">Designation</label>
                            <div className="relative transition-all duration-300 transform group-hover/field:-translate-y-1">
                              <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-white border-2 border-slate-100 px-6 py-4 rounded-2xl font-bold text-brand-purple placeholder:text-slate-300 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all shadow-[6px_6px_0px_0px_rgba(0,102,179,0.05)] focus:shadow-[8px_8px_20px_0px_rgba(0,102,179,0.15)] text-base"
                              />
                            </div>
                          </div>
                          <div className="relative group/field">
                            <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-3 ml-1">Identity</label>
                            <div className="relative transition-all duration-300 transform group-hover/field:-translate-y-1">
                              <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white border-2 border-slate-100 px-6 py-4 rounded-2xl font-bold text-brand-purple placeholder:text-slate-300 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all shadow-[6px_6px_0px_0px_rgba(0,102,179,0.05)] focus:shadow-[8px_8px_20px_0px_rgba(0,102,179,0.15)] text-base"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="relative group/field">
                          <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-3 ml-1">Institutional Domain</label>
                          <div className="relative transition-all duration-300 transform group-hover/field:-translate-y-1">
                            <select className="w-full bg-white border-2 border-slate-100 px-6 py-4 rounded-2xl font-bold text-brand-purple focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all shadow-[6px_6px_0px_0px_rgba(0,102,179,0.05)] focus:shadow-[8px_8px_20px_0px_rgba(0,102,179,0.15)] text-base appearance-none cursor-pointer">
                              <option>University / Higher Ed</option>
                              <option>K-12 School Systems</option>
                              <option>Vocational / Polytechnic</option>
                              <option>Corporate Learning Hub</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-300">
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="relative group/field">
                          <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-3 ml-1">Inquiry</label>
                          <div className="relative transition-all duration-300 transform group-hover/field:-translate-y-1">
                            <textarea
                              placeholder="Tell us about your digital goals..."
                              rows={3}
                              className="w-full bg-white border-2 border-slate-100 px-6 py-4 rounded-2xl font-bold text-brand-purple placeholder:text-slate-300 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all shadow-[6px_6px_0px_0px_rgba(0,102,179,0.05)] focus:shadow-[8px_8px_20px_0px_rgba(0,102,179,0.15)] text-base resize-none"
                            />
                          </div>
                        </div>

                        <div className="pt-6">
                          <button
                            type="submit"
                            className="group relative w-full h-20 rounded-[30px] bg-brand-purple text-white font-black uppercase tracking-[0.4em] text-[11px] overflow-hidden active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(50,0,112,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(50,0,112,0.4)] hover:-translate-y-1"
                          >
                            <span className="relative z-10">Establish Connection</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                          </button>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                          <div className="h-[1px] flex-1 bg-slate-50" />
                          <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">or</span>
                          <div className="h-[1px] flex-1 bg-slate-50" />
                        </div>

                        <Link href="/schedule" className="flex items-center justify-center gap-3 py-3 rounded-xl border border-slate-100 hover:border-brand-primary/20 hover:bg-slate-50 transition-all text-[10px] font-black uppercase tracking-widest text-slate-500">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                          Executive Briefing
                        </Link>
                      </form>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Hub - Compacted channels */}
        <section id="labs" className="py-16 md:py-24 bg-transparent">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-brand-purple mb-4 tracking-tighter">Operational <span className="text-brand-teal">Intelligence.</span></h2>
              <p className="text-base text-slate-400 font-medium max-w-xl mx-auto">Access direct channels to our specialized departments.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
              {[
                {
                  title: "+880 1764-912323",
                  cat: "Advisory",
                  desc: "Strategic planning for institutional leaders.",
                  cta: "Call Now",
                  href: "tel:+8801764912323",
                  icon: "📞"
                },
                {
                  title: "hq@eduvas.com",
                  cat: "Relations",
                  desc: "Sales and cloud partnership inquiries.",
                  cta: "Message",
                  href: "mailto:hq@eduvas.com",
                  icon: "📬"
                },
                {
                  title: "Dhaka, BD",
                  cat: "Hub",
                  desc: "Visit our technology center Sukrabad.",
                  cta: "Locate",
                  href: "#",
                  icon: "📍"
                }
              ].map((card, idx) => (
                <AnimatedCard key={idx} delay={idx * 0.1} className="group relative bg-white p-10 rounded-[48px] border border-transparent hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
                  <p className="text-[9px] font-black text-brand-primary uppercase tracking-[0.4em] mb-3">{card.cat}</p>
                  <h3 className="text-xl font-black text-brand-purple mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed mb-8 italic">
                    {card.desc}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-3 text-[10px] font-black text-brand-purple uppercase tracking-[0.3em] group/link"
                  >
                    <span className="relative pb-1">
                      {card.cta}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover/link:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
