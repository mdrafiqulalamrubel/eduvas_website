'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const phases = [
    {
        id: 1,
        title: "The Lead Leak",
        subtitle: "Inquiry & CRM",
        painPoint: "Interested students drifting away due to slow response times.",
        solution: "Instant CRM integration with automated follow-ups and lead scoring.",
        icon: "🎯",
        color: "#320070",
        narrative: "In a high-stakes training market, speed is the only advantage. We turn instant curiosity into immediate enrollment."
    },
    {
        id: 2,
        title: "The Scheduling Shuffle",
        subtitle: "Course & Batch Management",
        painPoint: "Conflict-heavy schedules and under-utilized training facilities.",
        solution: "Smart Batch Scheduling with real-time resource and trainer tracking.",
        icon: "📅",
        color: "#2A75D4",
        narrative: "Maximum capacity is our benchmark. We optimize every physical and human asset to ensure zero-waste training."
    },
    {
        id: 3,
        title: "The Skill Mastery",
        subtitle: "Training & Assessment",
        painPoint: "Manual grading and disconnected student progress metrics.",
        solution: "Continuous assessment engines with real-time skills gap analysis.",
        icon: "⚙️",
        color: "#23A7A6",
        narrative: "Training is about tangible outcomes. We provide the forensic data to ensure every student masters their craft."
    },
    {
        id: 4,
        title: "The Paper Trust",
        subtitle: "Certification & Verification",
        painPoint: "Easy-to-forge paper certificates and manual verification requests.",
        solution: "Immutible Blockchain Certificates for instant digital verification.",
        icon: "🔗",
        color: "#320070",
        narrative: "Trust is the currency of skills. Our blockchain-backed credentials are the industry's ultimate gold standard."
    },
    {
        id: 5,
        title: "The Career Launch",
        subtitle: "Workforce Entry & Alumni",
        painPoint: "Students losing touch with the institute after completion.",
        solution: "Dedicated Alumni Portal and job placement orchestration.",
        icon: "🚀",
        color: "#2A75D4",
        narrative: "Institutional success is measured by career impact. We maintain the high-velocity bridge to employment."
    }
];

export default function InstituteJourney() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const [activePhase, setActivePhase] = useState(0);

    // High-velocity background effects
    const travelX = useTransform(smoothProgress, [0, 1], [-500, 500]);
    const bgSkew = useTransform(smoothProgress, [0, 1], [10, -10]);

    return (
        <main className="min-h-[600vh] bg-[#0F172A] relative overflow-hidden" ref={containerRef}>

            {/* --- HYPER-CREATIVE ATMOSPHERE: THE SKILL-FLOW CONDUIT --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#1e1b4b_0%,#0f172a_100%)]" />

                {/* The Energy Tubes - Visualizing Flow */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <motion.div
                        style={{ x: travelX, skewX: bgSkew }}
                        className="absolute top-1/4 left-1/2 w-[2000px] h-[2px] bg-gradient-to-r from-transparent via-[#320070] to-transparent blur-[2px]"
                    />
                    <motion.div
                        style={{ x: travelX, skewX: -bgSkew }}
                        className="absolute top-3/4 left-1/3 w-[1500px] h-[4px] bg-gradient-to-r from-transparent via-[#23A7A6] to-transparent blur-[4px]"
                    />
                </div>

                {/* Pulsing Core Gradients */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#320070]/10 blur-[200px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2A75D4]/10 blur-[180px] rounded-full" />
                </div>

                {/* Subtle Binary Static */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #320070, #320070 1px, transparent 1px, transparent 2px)', backgroundSize: '100% 4px' }} />
            </div>

            {/* --- FUTURISTIC HEADER --- */}
            <header className="fixed top-0 left-0 right-0 z-[100] p-8 flex justify-between items-center bg-[#0F172A]/40 backdrop-blur-3xl border-b border-white/5 pointer-events-none">
                <Link href="/" className="flex items-center gap-3 pointer-events-auto">
                    <div className="w-12 h-12 rounded-xl bg-[#320070] flex items-center justify-center p-2 shadow-[0_0_30px_rgba(50,0,112,0.4)] border border-white/10">
                        <Image src="/Logo.png" alt="Eduvas" width={32} height={32} className="brightness-200" />
                    </div>
                    <span className="font-montserrat font-black text-white tracking-[0.2em] text-2xl uppercase italic">Eduvas <span className="text-[#22D3EE]">INSTITUTE</span></span>
                </Link>
                <div className="flex items-center gap-8 pointer-events-auto">
                    <div className="hidden lg:flex flex-col items-end">
                        <span className="text-[10px] font-black text-[#22D3EE] uppercase tracking-[0.5em] mb-1">Flow Velocity</span>
                        <div className="w-40 h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div style={{ scaleX: smoothProgress }} className="h-full bg-gradient-to-r from-[#320070] to-[#23A7A6] origin-left" />
                        </div>
                    </div>
                    <Link href="/?journey=open" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white shadow-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </Link>
                </div>
            </header>

            {/* --- THE DATA-CORE INTERFACE --- */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10 px-6">
                <div className="w-full max-w-[1700px] grid lg:grid-cols-2 gap-32 items-center">

                    {/* Visual Column: The Futuristic Core */}
                    <div className="relative pointer-events-auto hidden lg:block perspective-2000">
                        <AnimatePresence mode="wait">
                            {phases.map((phase, idx) => (
                                (activePhase === idx) && (
                                    <motion.div
                                        key={phase.id}
                                        initial={{ opacity: 0, rotateX: 45, scale: 0.5, y: 100 }}
                                        animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, rotateX: -45, scale: 1.5, y: -100 }}
                                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                        className="relative w-full max-w-[650px] mx-auto"
                                    >
                                        {/* The Core Container */}
                                        <div className="relative aspect-square flex items-center justify-center">

                                            {/* Orbiting Tech Rings */}
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                                className="absolute inset-x-0 inset-y-0 border-2 border-dashed border-[#320070]/20 rounded-full"
                                            />
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                                className="absolute inset-x-12 inset-y-12 border border-[#23A7A6]/10 rounded-full"
                                            />

                                            {/* The Glass Nucleus */}
                                            <div className="w-full h-full bg-[#1e293b]/40 backdrop-blur-3xl rounded-[100px] shadow-[0_100px_150px_-30px_rgba(50,0,112,0.4)] border border-white/10 flex flex-col items-center justify-center group overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#320070]/20 via-transparent to-transparent" />

                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.1, 1],
                                                        filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
                                                    }}
                                                    transition={{ duration: 3, repeat: Infinity }}
                                                    className="text-[340px] drop-shadow-[0_0_80px_rgba(255,255,255,0.2)]"
                                                >
                                                    {phase.icon}
                                                </motion.div>

                                                <div className="h-1 w-24 bg-[#320070]/40 rounded-full mt-4" />
                                            </div>

                                            {/* Floating HUD Labels */}
                                            <motion.div
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                                className="absolute top-20 right-10 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl"
                                            >
                                                <span className="text-white text-[8px] font-black uppercase tracking-widest">Protocol Active</span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Narrative Column: Futuristic Typography */}
                    <div className="pointer-events-auto overflow-hidden">
                        {phases.map((phase, idx) => (
                            <div key={phase.id} className="h-screen flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 200, skewX: 20 }}
                                    whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                                    onViewportEnter={() => setActivePhase(idx)}
                                    viewport={{ amount: 0.7 }}
                                    className="space-y-12"
                                >
                                    <div>
                                        <span className="text-xl font-black text-[#22D3EE] uppercase tracking-[0.8em] mb-8 block font-mono drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">FLOW_ID: 0{phase.id}</span>
                                        <h2 className="text-white font-montserrat text-[84px] font-black tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl">
                                            {phase.subtitle}
                                        </h2>
                                        <div className="flex items-center gap-8">
                                            <div className="h-0.5 flex-1 bg-gradient-to-r from-[#22D3EE] to-transparent" />
                                            <span className="text-white/80 text-sm font-black uppercase tracking-widest">[{phase.title}]</span>
                                        </div>
                                    </div>

                                    <p className="text-white text-2xl font-medium leading-relaxed max-w-[550px] drop-shadow-lg">
                                        "{phase.narrative}"
                                    </p>

                                    {/* Progress Conduit - Clickable navigation */}
                                    <div className="flex gap-2">
                                        {phases.map((_, pIdx) => (
                                            <button
                                                key={pIdx}
                                                onClick={() => {
                                                    const element = document.getElementById(`checkpoint-${pIdx}`);
                                                    element?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className={`h-1.5 transition-all duration-700 rounded-full cursor-pointer hover:bg-[#320070]/50 ${pIdx === idx ? 'w-16 bg-[#320070]' : 'w-4 bg-white/10'}`}
                                                aria-label={`Go to checkpoint ${pIdx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll targets */}
            <div className="absolute top-0 left-0 w-full pointer-events-none">
                {phases.map((_, i) => (
                    <div key={i} id={`checkpoint-${i}`} className="h-screen" />
                ))}
            </div>

            {/* --- THE DISMANTLE FINALE --- */}
            <section className="relative z-20 pt-[100vh]">
                <div className="bg-[#0f172a] py-64 relative border-t border-white/5">
                    <div className="max-w-[1440px] mx-auto px-12">

                        <div className="text-center mb-40">
                            <h2 className="text-white font-montserrat text-[80px] font-black tracking-tighter mb-8 leading-none">
                                Optimizing the <span className="text-[#22D3EE]">Enterprise</span>.
                            </h2>
                            <p className="text-white/60 text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
                                Traditional institutes are bogged down by administrative sludge. We've built the digital centrifuge that separates the chaos from the excellence.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {phases.map((phase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="group relative"
                                >
                                    <div className="p-16 bg-white/[0.02] border border-white/5 rounded-[60px] hover:bg-white/[0.05] hover:border-[#320070]/40 transition-all duration-700 flex flex-col md:flex-row gap-12 items-center">
                                        <div className="w-32 h-32 rounded-[40px] bg-white/5 flex items-center justify-center text-7xl group-hover:rotate-12 transition-transform duration-700 flex-shrink-0">
                                            {phase.icon}
                                        </div>
                                        <div className="flex-1 space-y-6 text-center md:text-left">
                                            <div>
                                                <span className="text-[#EF4444] font-black text-[10px] uppercase tracking-widest mb-2 block">System Bottleneck</span>
                                                <h4 className="text-white text-3xl font-black tracking-tight leading-tight">{phase.painPoint}</h4>
                                            </div>
                                            <div className="h-[1px] w-full bg-white/5" />
                                            <div>
                                                <span className="text-[#23A7A6] font-black text-[10px] uppercase tracking-widest mb-2 block">Eduvas Optimization</span>
                                                <p className="text-white/80 text-xl font-medium leading-snug">{phase.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Absolute Destruction of White Space - Final High-Energy CTA */}
                        <div className="mt-64 relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#320070] via-[#23A7A6] to-[#320070] rounded-[80px] opacity-20 blur group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-[#1e293b]/90 backdrop-blur-3xl rounded-[78px] p-40 text-center border border-white/10 overflow-hidden">
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#320070]/10 blur-[150px] rounded-full" />
                                <h3 className="text-white font-montserrat text-7xl font-black mb-12 tracking-tighter leading-none">Enable High-Velocity Growth.</h3>
                                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                    <Link href="/" className="px-16 py-6 bg-[#320070] text-white rounded-[40px] font-black uppercase tracking-[0.2em] text-sm shadow-[0_30px_60px_rgba(50,0,112,0.5)] transform hover:scale-110 active:scale-95 transition-all">Go Live Now</Link>
                                    <Link href="/" className="px-16 py-6 border border-white/10 text-white rounded-[40px] font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all">Download Flowchart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .perspective-2000 {
                    perspective: 2000px;
                }
            `}</style>
        </main>
    );
}
