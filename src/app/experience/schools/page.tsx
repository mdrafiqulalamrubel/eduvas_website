'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const phases = [
    {
        id: 1,
        title: "The Inquiry Maze",
        subtitle: "Admission & Enrollment",
        painPoint: "Missed phone calls and lost registration forms.",
        solution: "24/7 Digital Inquiry Hub and Paperless Admissions.",
        icon: "🏠",
        color: "#23A7A6",
        narrative: "Choosing a school is an emotional milestone. We replace the stress of paperwork with a digital red carpet."
    },
    {
        id: 2,
        title: "The Silent Classroom",
        subtitle: "Attendance & Monitoring",
        painPoint: "Parents wondering if their child arrived safely.",
        solution: "Real-time SMS alerts and automated RFID/Biometric attendance.",
        icon: "🔔",
        color: "#2A75D4",
        narrative: "Safety is the heartbeat of education. We bridge the classroom and the home with instant transparency."
    },
    {
        id: 3,
        title: "The Teacher's Burden",
        subtitle: "Gradebook & Learning",
        painPoint: "Hours spent on manual calculations and report cards.",
        solution: "Smart Gradebook with automated mark computation and digital reports.",
        icon: "📝",
        color: "#320070",
        narrative: "We empower the icons of education—the teachers—by liberating them from the weight of administrative chaos."
    },
    {
        id: 4,
        title: "The Communication Gap",
        subtitle: "Parent Collaboration",
        painPoint: "Important notices lost in backpacks and printed circulars.",
        solution: "Dedicated Parent App for instant feedback and school updates.",
        icon: "📱",
        color: "#23A7A6",
        narrative: "A connected community is a thriving school. We ensure every parent is a partner in their child's success."
    },
    {
        id: 5,
        title: "The Success Story",
        subtitle: "Promotions & Graduation",
        painPoint: "Stressful year-end processing and manual record migration.",
        solution: "One-click mass promotion and permanent digital transcripts.",
        icon: "🌟",
        color: "#2A75D4",
        narrative: "Celebrating milestones should be joyful, not administrative. We make the transition to the next grade effortless."
    }
];

export default function SchoolsJourney() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const [activePhase, setActivePhase] = useState(0);

    // Background elements parallax
    const floatY1 = useTransform(smoothProgress, [0, 1], [0, -200]);
    const floatY2 = useTransform(smoothProgress, [0, 1], [0, 300]);

    return (
        <main className="min-h-[600vh] bg-[#F8FAFC] relative overflow-hidden" ref={containerRef}>

            {/* --- REFINED ATMSOPHERE: THE CALIMING EDUCATIONAL HUB --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Clean, warm background base */}
                <div className="absolute inset-0 bg-[#FDFDFD]" />

                {/* Large, Ethereal Gradients */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#23A7A6]/10 blur-[180px] rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#2A75D4]/10 blur-[140px] rounded-full animate-pulse" style={{ animationDuration: '15s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F8FAFC] opacity-40 blur-[100px] rounded-full" />

                {/* Subtle Organic Floating Shapes (Replaces the sharp dots) */}
                <motion.div
                    style={{ y: floatY1, rotate: 15 }}
                    className="absolute top-[15%] left-[10%] w-32 h-32 border border-[#23A7A6]/10 rounded-full flex items-center justify-center"
                >
                    <div className="w-2 h-2 bg-[#23A7A6]/20 rounded-full" />
                </motion.div>
                <motion.div
                    style={{ y: floatY2, rotate: -20 }}
                    className="absolute top-[60%] right-[15%] w-48 h-48 border border-[#2A75D4]/5 rounded-[40px] flex items-center justify-center transform -rotate-12"
                >
                    <div className="w-1.5 h-1.5 bg-[#2A75D4]/10 rounded-full" />
                </motion.div>

                {/* The Path Line - Softer and more integrated */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M 50,0 V 100"
                        stroke="url(#lineGradient)"
                        strokeWidth="0.1"
                        fill="none"
                        style={{ pathLength: smoothProgress }}
                    />
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#23A7A6" />
                            <stop offset="50%" stopColor="#2A75D4" />
                            <stop offset="100%" stopColor="#23A7A6" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Noise overlay for texture (Stops it from feeling 'sterile') */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none contrast-150 brightness-100 mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
            </div>

            {/* --- PREMIUM HEADER --- */}
            <header className="fixed top-0 left-0 right-0 z-[100] p-8 flex justify-between items-center bg-white/30 backdrop-blur-2xl border-b border-black/5 pointer-events-none">
                <Link href="/" className="flex items-center gap-3 pointer-events-auto">
                    <div className="w-12 h-12 rounded-2xl bg-[#23A7A6] flex items-center justify-center p-2 shadow-lg shadow-[#23A7A6]/20">
                        <Image src="/Logo.png" alt="Eduvas" width={32} height={32} />
                    </div>
                    <span className="font-montserrat font-black text-[#141D38] tracking-widest text-2xl uppercase">Eduvas <span className="text-[#23A7A6]">Schools</span></span>
                </Link>
                <div className="flex items-center gap-8 pointer-events-auto">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-[10px] font-black text-[#64748B] uppercase tracking-[0.4em] mb-1">Infrastructure Level</span>
                        <div className="w-32 h-1 bg-black/5 rounded-full overflow-hidden">
                            <motion.div style={{ scaleX: smoothProgress }} className="h-full bg-[#23A7A6] origin-left" />
                        </div>
                    </div>
                    <Link href="/?journey=open" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </Link>
                </div>
            </header>

            {/* --- THE INTERACTIVE LEARNING HUB --- */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10 px-6">
                <div className="w-full max-w-[1600px] grid lg:grid-cols-2 gap-32 items-center">

                    {/* Visual Side: The 3D Glass Slate */}
                    <div className="relative pointer-events-auto hidden lg:block">
                        <AnimatePresence mode="wait">
                            {phases.map((phase, idx) => (
                                (activePhase === idx) && (
                                    <motion.div
                                        key={phase.id}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10, filter: 'blur(20px)' }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, scale: 1.2, rotate: 10, filter: 'blur(20px)' }}
                                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                        className="relative w-full max-w-[600px] mx-auto"
                                    >
                                        <div className="relative aspect-square flex items-center justify-center">
                                            {/* Multi-layered Glass Card */}
                                            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[100px] border border-white/60 shadow-[0_80px_120px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                                                <div className="absolute top-20 left-20 w-40 h-40 bg-[#23A7A6]/10 blur-[80px] rounded-full" />
                                                <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#2A75D4]/10 blur-[100px] rounded-full" />
                                            </div>

                                            {/* The Floating Icon */}
                                            <motion.div
                                                animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
                                                transition={{ duration: 6, repeat: Infinity }}
                                                className="text-[320px] relative z-10 drop-shadow-[0_45px_65px_rgba(0,0,0,0.1)]"
                                            >
                                                {phase.icon}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Content Side: The Minimalist Narrative */}
                    <div className="pointer-events-auto overflow-hidden">
                        {phases.map((phase, idx) => (
                            <div key={phase.id} className="h-screen flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    onViewportEnter={() => setActivePhase(idx)}
                                    viewport={{ amount: 0.7 }}
                                    className="space-y-12"
                                >
                                    <div>
                                        <span className="text-xl font-black text-[#23A7A6] uppercase tracking-[0.5em] mb-6 block">Legacy Milestone 0{phase.id}</span>
                                        <h2 className="text-[#141D38] font-montserrat text-[72px] font-black tracking-tighter leading-[0.9] mb-4">
                                            {phase.subtitle}
                                        </h2>
                                        <div className="flex items-center gap-6">
                                            <div className="h-2 w-24 bg-gradient-to-r from-[#23A7A6] to-[#2A75D4] rounded-full" />
                                            <span className="text-[#64748B] text-xl font-bold italic">{phase.title}</span>
                                        </div>
                                    </div>

                                    <p className="text-[#64748B] text-2xl font-medium leading-[1.4] max-w-[600px] border-l-4 border-black/5 pl-10">
                                        {phase.narrative}
                                    </p>

                                    {/* Progress Pips - Clickable navigation */}
                                    <div className="flex gap-4">
                                        {phases.map((_, pIdx) => (
                                            <button
                                                key={pIdx}
                                                onClick={() => {
                                                    const element = document.getElementById(`checkpoint-${pIdx}`);
                                                    element?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className={`h-2 transition-all duration-700 rounded-full cursor-pointer hover:bg-[#23A7A6]/50 ${pIdx === idx ? 'w-20 bg-[#23A7A6]' : 'w-4 bg-black/5'}`}
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

            {/* --- THE LEGACY CATALOG FINALE --- */}
            <section className="relative z-20 pt-[100vh]">
                {/* Replaced hero-pattern with a cleaner, more premium look */}
                <div className="bg-[#FDFDFD] py-64 relative border-t border-black/5 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#F8FAFC] to-transparent pointer-events-none" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#23A7A6]/5 blur-[120px] rounded-full" />
                    <div className="absolute top-1/2 -left-24 w-80 h-80 bg-[#2A75D4]/5 blur-[100px] rounded-full" />

                    <div className="max-w-[1440px] mx-auto px-12 relative z-10">

                        <div className="max-w-4xl mb-40">
                            <h2 className="text-[#141D38] font-montserrat text-[84px] font-black tracking-tighter mb-8 leading-[0.8]">
                                The Architecture <br /> of <span className="text-[#23A7A6]">Simplicity</span>.
                            </h2>
                            <p className="text-[#64748B] text-2xl font-medium leading-relaxed">
                                Modern schooling shouldn't feel like navigating a maze. We've untangled the most critical friction points of K-12 administration.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-20">
                            {phases.map((phase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="flex gap-12 items-center p-16 bg-white rounded-[60px] border border-black/5 hover:border-[#23A7A6]/30 transition-all duration-500 shadow-xl shadow-black/[0.02]">
                                        <div className="text-8xl group-hover:scale-125 transition-transform duration-700 flex-shrink-0">
                                            {phase.icon}
                                        </div>
                                        <div className="space-y-6">
                                            <div>
                                                <span className="text-[#EF4444] font-black text-xs uppercase tracking-widest mb-2 block">The Friction</span>
                                                <h4 className="text-[#141D38] text-3xl font-black tracking-tight leading-tight">{phase.painPoint}</h4>
                                            </div>
                                            <div className="h-[1px] w-full bg-black/5" />
                                            <div>
                                                <span className="text-[#23A7A6] font-black text-xs uppercase tracking-widest mb-2 block">The Solution</span>
                                                <p className="text-[#64748B] text-xl font-medium leading-snug">{phase.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Hyper-Visual Call to Action */}
                        <div className="mt-64 text-center relative py-40 bg-[#141D38] rounded-[80px] overflow-hidden text-white shadow-2xl">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#23A7A633,transparent)]" />
                            <div className="relative z-10 max-w-3xl mx-auto px-6">
                                <h3 className="text-6xl font-black tracking-tighter mb-12 leading-none">Your School's Digital Hub is Ready.</h3>
                                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                    <Link href="/" className="px-16 py-6 bg-[#23A7A6] text-white rounded-[32px] font-black uppercase tracking-widest text-sm shadow-2xl hover:translate-y-[-10px] transition-all">Request Deployment</Link>
                                    <Link href="/" className="px-16 py-6 border border-white/20 text-white rounded-[32px] font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">Tour the Platform</Link>
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
