'use client';

import { useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const phases = [
    {
        id: 1,
        title: "The Fragmented Start",
        subtitle: "Admission & Enrollment",
        painPoint: "Scattered data, long queues, and manual paper trails.",
        solution: "One-click digital admissions with automated verification.",
        icon: "📝",
        color: "#2A75D4",
        narrative: "Our student starts their journey. We transform the sea of paperwork into a single, elegant digital stream."
    },
    {
        id: 2,
        title: "The Identity Crisis",
        subtitle: "Student Records & ID",
        painPoint: "Lost IDs and disconnected departmental databases.",
        solution: "Unified digital student profile with 1-card biometric integration.",
        icon: "🆔",
        color: "#23A7A6",
        narrative: "Every student needs a central identity. We provide a single source of truth that travels with them."
    },
    {
        id: 3,
        title: "The Learning Labyrinth",
        subtitle: "Academics & LMS",
        painPoint: "Inaccessible syllabi and manual attendance tracking.",
        solution: "AI-driven attendance and real-time learning management.",
        icon: "📚",
        color: "#320070",
        narrative: "Education is why they're here. We remove the clinical friction from the learning process."
    },
    {
        id: 4,
        title: "The Financial Fog",
        subtitle: "Finance & Payments",
        painPoint: "Manual fee collection and reconciliation errors.",
        solution: "Automated billing and online payment orchestration.",
        icon: "💰",
        color: "#2A75D4",
        narrative: "Transparent, automated finance keeps the pulse of the institution steady and stress-free."
    },
    {
        id: 5,
        title: "The Final Hurdle",
        subtitle: "Examination & Results",
        painPoint: "Slow grading cycles and prone-to-error result processing.",
        solution: "Smart grading engines and instant digital transcripts.",
        icon: "🎓",
        color: "#23A7A6",
        narrative: "The climax of the journey. We ensure a flawless, fast, and secure path to the finish line."
    },
    {
        id: 6,
        title: "The Lifelong Bond",
        subtitle: "Alumni & Convocation",
        painPoint: "Post-graduation disconnection from the institution.",
        solution: "Alumni management and lifelong career service support.",
        icon: "🎉",
        color: "#320070",
        narrative: "The journey doesn't end. It evolves into a legacy of success that we nurture forever."
    }
];

export default function UniversityJourney() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const [activePhase, setActivePhase] = useState(0);

    // Parallax Values
    const bgRotation = useTransform(smoothProgress, [0, 1], [0, 120]);
    const dashOffset = useTransform(smoothProgress, [0, 1], [1000, 0]);

    return (
        <main className="min-h-[700vh] bg-[#020617] relative selection:bg-[#2A75D4] selection:text-white" ref={containerRef}>

            {/* --- HYPER-CREATIVE BACKGROUND: THE Trajectory Engine --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Deep Space Atmosphere */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#020617_100%)]" />

                {/* Dynamic Grid */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#2A75D4 1px, transparent 1px), linear-gradient(90deg, #2A75D4 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                {/* The Living Path - SVG Trajectory */}
                <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <motion.path
                        d="M 100,200 Q 300,500 500,200 T 900,500"
                        fill="none"
                        stroke="#2A75D4"
                        strokeWidth="2"
                        strokeDasharray="10 10"
                        style={{ pathLength: smoothProgress }}
                    />
                </svg>

                {/* Rotating Galactic Glows */}
                <motion.div
                    style={{ rotate: bgRotation }}
                    className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] pointer-events-none"
                >
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2A75D4]/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#23A7A6]/10 blur-[120px] rounded-full" />
                </motion.div>
            </div>

            {/* --- CINEMATIC HEADER --- */}
            <header className="fixed top-0 left-0 right-0 z-[100] p-8 flex justify-between items-center bg-transparent pointer-events-none">
                <Link href="/" className="flex items-center gap-3 group pointer-events-auto">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center p-2 group-hover:bg-[#2A75D4] transition-all duration-500">
                        <Image src="/Logo.png" alt="Eduvas" width={32} height={32} className="brightness-200" />
                    </div>
                    <span className="font-montserrat font-black text-white tracking-widest text-2xl uppercase">Eduvas</span>
                </Link>
                <div className="flex items-center gap-6 pointer-events-auto">
                    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-2 rounded-full">
                        <span className="text-[10px] font-black text-[#2A75D4] uppercase tracking-[0.3em]">Trajectory Protocol</span>
                        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div style={{ scaleX: smoothProgress }} className="h-full bg-[#2A75D4] origin-left" />
                        </div>
                    </div>
                    <Link href="/?journey=open" className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </Link>
                </div>
            </header>

            {/* --- THE HOLOGRAPHIC FOCUS CHAMBER --- */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-full max-w-[1700px] px-12 lg:px-24 grid lg:grid-cols-2 gap-24 items-center">

                    {/* Stage: Visual Transformation */}
                    <div className="relative pointer-events-auto hidden lg:block perspective-1000">
                        <AnimatePresence mode="wait">
                            {phases.map((phase, idx) => (
                                (activePhase === idx) && (
                                    <motion.div
                                        key={phase.id}
                                        initial={{ opacity: 0, rotateY: -30, scale: 0.8, x: -100 }}
                                        animate={{ opacity: 1, rotateY: 0, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, rotateY: 30, scale: 1.2, x: 100 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="relative aspect-square w-full max-w-[600px] mx-auto"
                                    >
                                        {/* The Glass Chamber */}
                                        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-[80px] shadow-[0_0_100px_rgba(42,117,212,0.2)] border border-white/10 overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                                            {/* Floating Data Nodes */}
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{
                                                        y: [0, -40, 0],
                                                        opacity: [0.2, 0.5, 0.2]
                                                    }}
                                                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                                                    className="absolute w-2 h-2 bg-[#2A75D4] rounded-full blur-[1px]"
                                                    style={{ top: `${20 + i * 15}%`, left: `${10 + (i % 3) * 30}%` }}
                                                />
                                            ))}

                                            <div className="h-full w-full flex items-center justify-center">
                                                <motion.span
                                                    animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                                                    transition={{ duration: 5, repeat: Infinity }}
                                                    className="text-[280px] drop-shadow-[0_0_50px_rgba(255,255,255,0.3)] select-none"
                                                >
                                                    {phase.icon}
                                                </motion.span>
                                            </div>

                                            {/* Information Overlay Shimmer */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#2A75D4]/20 to-transparent" />
                                        </div>

                                        {/* Outer Glow Halo */}
                                        <div className="absolute -inset-20 bg-[#2A75D4]/5 blur-[100px] rounded-full -z-10 animate-pulse" />
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Stage: Content Navigation */}
                    <div className="pointer-events-auto h-screen relative">
                        {phases.map((phase, idx) => (
                            <div key={phase.id} className="h-screen flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 100, filter: 'blur(20px)' }}
                                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    onViewportEnter={() => setActivePhase(idx)}
                                    viewport={{ amount: 0.8 }}
                                    className="space-y-12"
                                >
                                    {/* Identity Header */}
                                    <div className="relative">
                                        <motion.span
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            className="text-[180px] font-black text-white/[0.03] absolute -top-32 -left-12 leading-none"
                                        >
                                            0{phase.id}
                                        </motion.span>
                                        <div className="relative z-10">
                                            <span className="text-xl font-black text-[#2A75D4] uppercase tracking-[0.5em] mb-6 block">Sector Protocol</span>
                                            <h2 className="text-white font-montserrat text-[80px] font-black tracking-tighter leading-[0.9] mb-4 ">
                                                {phase.subtitle}
                                            </h2>
                                            <div className="flex items-center gap-4">
                                                <div className="h-[1px] w-24 bg-gradient-to-r from-[#2A75D4] to-transparent" />
                                                <span className="text-white/70 font-black uppercase tracking-widest text-xs uppercase">{phase.title}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Narrative Engine */}
                                    <div className="max-w-[550px]">
                                        <p className="text-white text-2xl font-medium leading-relaxed mb-12 border-l-2 border-[#2A75D4] pl-8 drop-shadow-lg">
                                            {phase.narrative}
                                        </p>

                                        {/* Interactive Phase Indicator - Clickable navigation */}
                                        <div className="flex gap-2">
                                            {phases.map((_, pIdx) => (
                                                <button
                                                    key={pIdx}
                                                    onClick={() => {
                                                        const element = document.getElementById(`checkpoint-${pIdx}`);
                                                        element?.scrollIntoView({ behavior: 'smooth' });
                                                    }}
                                                    className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer hover:bg-[#2A75D4]/50 ${pIdx === idx ? 'w-12 bg-[#2A75D4]' : 'w-4 bg-white/10'}`}
                                                    aria-label={`Go to checkpoint ${pIdx + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Adding IDs for scroll targeting */}
            <div className="absolute top-0 left-0 w-full pointer-events-none">
                {phases.map((_, i) => (
                    <div key={i} id={`checkpoint-${i}`} className="h-screen" />
                ))}
            </div>

            {/* --- THE CHAOS FINALE: SHATTERED REALITY 2.0 --- */}
            <section className="relative z-20 pt-[100vh]">
                {/* Background Bridge */}
                <div className="h-[200px] bg-gradient-to-b from-transparent to-[#020617]" />

                <div className="bg-[#020617] py-40 border-t border-white/5">
                    <div className="max-w-[1440px] mx-auto px-12">
                        <div className="text-center mb-40 relative">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="absolute inset-0 bg-[#2A75D4]/10 blur-[200px] -z-10"
                            />
                            <h2 className="text-white font-montserrat text-[80px] font-black tracking-tighter mb-8 leading-none">
                                The Chaos We <span className="text-[#2A75D4]">Dismantled</span>.
                            </h2>
                            <p className="text-white/40 text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                                Every seamless experience in Eduvas is the result of thousands of legacy friction points being identified, isolated, and permanently resolved.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {phases.map((phase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative"
                                >
                                    {/* The Shattered Card */}
                                    <div className="relative z-10 bg-white/[0.02] border border-white/10 rounded-[48px] p-12 hover:bg-white/[0.04] transition-all duration-700 overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all text-5xl">
                                            {phase.icon}
                                        </div>

                                        <div className="space-y-10">
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-2 h-10 bg-[#EF4444] rounded-full" />
                                                    <span className="text-[#EF4444] font-black text-xs uppercase tracking-widest">Legacy Entropy</span>
                                                </div>
                                                <p className="text-white text-3xl font-black leading-tight tracking-tight">{phase.painPoint}</p>
                                            </div>

                                            <div className="pt-10 border-t border-white/5">
                                                <span className="text-[#23A7A6] font-black text-xs uppercase tracking-widest mb-4 block">Transformation Applied</span>
                                                <p className="text-white/50 text-xl font-medium leading-relaxed italic">
                                                    "{phase.solution}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Shard Elements */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl rotate-12 -z-10 group-hover:rotate-45 transition-transform duration-1000" />
                                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2A75D4]/10 blur-xl rounded-full -z-10" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Final Galactic CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-64 relative p-[2px] bg-gradient-to-r from-[#2A75D4] via-[#23A7A6] to-[#2A75D4] rounded-[60px] overflow-hidden group"
                        >
                            <div className="bg-[#020617]/95 rounded-[58px] p-32 text-center backdrop-blur-3xl m-0.5">
                                <h3 className="text-white font-montserrat text-6xl font-black mb-12 tracking-tighter leading-none">
                                    Ready to Orbit Your <br /> Institutional Excellence?
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                    <Link href="/" className="px-16 py-6 bg-white text-[#020617] rounded-3xl font-black uppercase tracking-widest text-sm shadow-[0_30px_60px_rgba(255,255,255,0.2)] hover:scale-110 transition-all">Launch Transformation</Link>
                                    <Link href="/" className="text-white/60 font-black uppercase tracking-widest text-xs hover:text-[#2A75D4] transition-colors group/btn flex items-center gap-4">
                                        View Mission Parameters
                                        <svg className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }
        .perspective-1000 {
          perspective: 1500px;
        }
        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
        </main>
    );
}
