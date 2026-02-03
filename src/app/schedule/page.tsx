"use client";

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-transparent text-slate-900">
            <main className="overflow-hidden">
                {/* Elite Hero Section - Reverted to Eduvas Light Theme */}
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-transparent">
                    {/* Abstract background elements */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />

                    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
                        <AnimatedSection animation="slideInRight">
                            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.5em] text-brand-primary uppercase bg-brand-primary/5 border border-brand-primary/10 rounded-full">
                                By Invitation Only
                            </div>
                            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.85] text-brand-purple mb-12 tracking-tighter">
                                Executive <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-teal to-brand-primary bg-[length:200%_auto] animate-gradient-flow">Briefing.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-12 italic">
                                "A strategic 45-minute summit designed for Board Directors and Institutional Leaders to architect digital sovereignty."
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="#reserve" className="px-12 py-6 bg-brand-purple text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-brand-primary transition-all shadow-xl hover:-translate-y-1">
                                    Secure Priority Slot
                                </Link>
                                <Link href="/services" className="px-12 py-6 border-2 border-slate-100 text-slate-500 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-slate-50 transition-all">
                                    View Framework
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* The Briefing Pillars - Themed */}
                <section className="py-24 md:py-40 bg-transparent">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <AnimatedSection>
                                    <h2 className="text-4xl md:text-6xl font-black text-brand-purple mb-8 tracking-tighter leading-tight">
                                        Strategic <br /> <span className="text-brand-primary">Alignment</span> for <br /> Global Excellence.
                                    </h2>
                                    <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-12">
                                        Our executive briefings are collaborative sessions where we map your institutional goals to the Eduvas ecosystem.
                                    </p>

                                    <div className="space-y-8">
                                        {[
                                            { icon: "01", title: "Institutional Sovereignty", desc: "Regain control of your data and digital infrastructure." },
                                            { icon: "02", title: "Global Scaling", desc: "Frameworks for expansion without administrative friction." },
                                            { icon: "03", title: "AI Augmentation", desc: "Deploying intelligent systems across the academic lifecycle." }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex gap-6 items-start group">
                                                <span className="text-brand-primary font-black text-xl flex-shrink-0 pt-1 group-hover:scale-125 transition-transform">{item.icon}</span>
                                                <div>
                                                    <h4 className="text-xl font-bold text-brand-purple mb-2">{item.title}</h4>
                                                    <p className="text-slate-500">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AnimatedSection>
                            </div>

                            <div className="relative">
                                <AnimatedSection animation="scale">
                                    <div className="relative aspect-square rounded-[80px] overflow-hidden border-8 border-white shadow-2xl">
                                        <Image
                                            src="/images/executive-view.png"
                                            alt="Briefing Room"
                                            fill
                                            className="object-cover transition-all duration-1000 scale-105 hover:scale-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 via-transparent to-transparent opacity-60" />
                                    </div>

                                    {/* Floating Stat Card - Eduvas Style */}
                                    <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-slate-50 max-w-[280px]">
                                        <div className="text-5xl font-black text-brand-primary mb-2">98%</div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Strategic Decision <br /> Speed Improvement</p>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tactical Scheduling Section - Themed with 3D Forms */}
                <section id="reserve" className="py-24 md:py-40 relative bg-transparent">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                        <div className="bg-[#f8fafc] rounded-[80px] p-12 md:p-24 border border-slate-100 shadow-[0_60px_100px_-40px_rgba(0,0,0,0.05)] relative overflow-hidden group/container hover:shadow-[0_0_80px_-10px_rgba(0,102,179,0.15)] transition-all duration-700">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

                            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-black text-brand-purple mb-8 tracking-tighter">Request a Summit.</h3>
                                    <p className="text-slate-500 mb-12 max-w-md italic border-l-4 border-brand-teal pl-6">"Our executive team personally reviews all briefing requests to ensure alignment with our current institutional roadmap."</p>

                                    <div className="space-y-6">
                                        <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                            <div className="text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-3">Current Openings</div>
                                            <div className="text-2xl font-black text-brand-purple">Q1 2026 Strategy Slots</div>
                                            <div className="text-sm text-slate-400 mt-2 font-medium">4 sessions remaining for Bangladesh Region</div>
                                        </div>
                                        <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                            <div className="text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-3">Location</div>
                                            <div className="text-2xl font-black text-brand-purple">Global V-Suite</div>
                                            <div className="text-sm text-slate-400 mt-2 font-medium">Remote-first or Physical HQ in Sukrabad</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-10 md:p-12 rounded-[60px] border border-slate-100 shadow-inner relative overflow-hidden group/form transition-all duration-700">
                                    <form className="space-y-8">
                                        <div className="relative group/field">
                                            <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest block mb-3 ml-1">Full Name</label>
                                            <div className="relative transition-all duration-300 transform group-hover/field:-translate-y-1">
                                                <input
                                                    type="text"
                                                    placeholder="Executive Name"
                                                    className="w-full bg-white border-2 border-slate-50 px-6 py-4 rounded-2xl font-bold text-brand-purple placeholder:text-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all shadow-[6px_6px_0px_0px_rgba(0,102,179,0.03)] focus:shadow-[8px_8px_20px_0px_rgba(0,102,179,0.1)] text-base"
                                                />
                                            </div>
                                        </div>
                                        <div className="relative group/field">
                                            <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest block mb-3 ml-1">Institutional Email</label>
                                            <div className="relative transition-all duration-300 transform group-hover/field:-translate-y-1">
                                                <input
                                                    type="email"
                                                    placeholder="name@university.edu"
                                                    className="w-full bg-white border-2 border-slate-50 px-6 py-4 rounded-2xl font-bold text-brand-purple placeholder:text-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all shadow-[6px_6px_0px_0px_rgba(0,102,179,0.03)] focus:shadow-[8px_8px_20px_0px_rgba(0,102,179,0.1)] text-base"
                                                />
                                            </div>
                                        </div>
                                        <div className="relative group/field">
                                            <label className="text-[10px] font-black text-brand-primary uppercase tracking-widest block mb-3 ml-1">Proposed Subject</label>
                                            <div className="relative transition-all duration-300 transform group-hover/field:-translate-y-1">
                                                <select className="w-full bg-white border-2 border-slate-50 px-6 py-4 rounded-2xl font-bold text-brand-purple focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all shadow-[6px_6px_0px_0px_rgba(0,102,179,0.03)] focus:shadow-[8px_8px_20px_0px_rgba(0,102,179,0.1)] text-base appearance-none cursor-pointer">
                                                    <option>ERP Modernization</option>
                                                    <option>Institutional Re-branding</option>
                                                    <option>Campus-wide AI Policy</option>
                                                    <option>Cloud Infrastructure Migration</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-300">
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="group relative w-full h-20 rounded-[30px] bg-brand-purple text-white font-black uppercase tracking-[0.4em] text-[11px] overflow-hidden active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(50,0,112,0.2)] hover:shadow-[0_30px_60px_-15px_rgba(50,0,112,0.3)] hover:-translate-y-1">
                                            <span className="relative z-10">Request Reservation</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        </button>
                                        <p className="text-[9px] text-center text-slate-400 uppercase tracking-widest mt-4 font-bold">Security clearance required for physical Hub visit.</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
