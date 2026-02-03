'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedSection from '@/components/AnimatedSection';

export default function InstitutePage() {
    const [activeModule, setActiveModule] = useState(0);
    const [calculatorValues, setCalculatorValues] = useState({
        institutionType: 'Vocational Center',
        totalUsers: 300,
        supportLevel: 'Standard'
    });

    const modules = [
        {
            id: 'enrollment',
            label: 'Smart Enrollment',
            title: 'Effortless Course Enrollment',
            desc: 'Streamline the registration process for short-term and long-term vocational courses. Manage batches, intake capacities, and student onboarding with a single click.',
            features: [
                { title: 'Batch Management', desc: 'Create and monitor multiple course sessions easily.' },
                { title: 'Digital Onboarding', desc: 'Automated welcome kits and portal access for new students.' },
                { title: 'Waitlist Automation', desc: 'Internal queues for high-demand specialized programs.' },
                { title: 'Document Verification', desc: 'Secure upload and audit trail for prerequisite certificates.' }
            ]
        },
        {
            id: 'training',
            label: 'Course & Training',
            title: 'Vocational Excellence',
            desc: 'Design hands-on curriculum, track practical sessions, and manage workshop resources for technical and professional training programs.',
            features: [
                { title: 'Skill Tracking', desc: 'Monitor competency levels across specific technical trades.' },
                { title: 'Workshop Scheduling', desc: 'Manage lab equipment and practical session timings.' },
                { title: 'Resource Hub', desc: 'Share blueprints, manuals, and technical guides digitally.' },
                { title: 'Instructor Console', desc: 'Real-time monitoring of student progress in labs.' }
            ]
        },
        {
            id: 'certifications',
            label: 'Certifications',
            title: 'Global Standard Certification',
            desc: 'Automate the issuance of certificates, digital badges, and competency reports, ensuring all graduates meet industry standards and compliance.',
            features: [
                { title: 'QR Verified Certificates', desc: 'Tamper-proof digital certificates with instant verification.' },
                { title: 'Transcript Generation', desc: 'Comprehensive academic and practical performance logs.' },
                { title: 'Compliance Tracking', desc: 'Ensure courses meet local and international accreditation.' },
                { title: 'Graduation Portal', desc: 'Dedicated space for alumni and certificate management.' }
            ]
        },
        {
            id: 'placement',
            label: 'Placements',
            title: 'Career & Industry Connect',
            desc: 'Bridge the gap between training and employment with integrated job boards, industry partnership tools, and student career tracking.',
            features: [
                { title: 'Employer Portal', desc: 'Allow partners to search for skilled graduates directly.' },
                { title: 'Internship Tracker', desc: 'Manage off-site training and employer feedback.' },
                { title: 'Resume Builder', desc: 'Automated skill-based resume generation for students.' },
                { title: 'Interview Scheduler', desc: 'Coordinate with industry recruiters within the platform.' }
            ]
        },
        {
            id: 'lms',
            label: 'Learning Management',
            title: 'Blended Learning Solutions',
            desc: 'Combine physical classroom training with powerful digital tools, providing students with 24/7 access to materials and online assessments.',
            features: [
                { title: 'Online Assessments', desc: 'Secure testing environment for theoretical knowledge.' },
                { title: 'Video Lessons', desc: 'Host recorded practical demonstrations and tutorials.' },
                { title: 'Interactive Forums', desc: 'Collaborative spaces for student-instructor interaction.' },
                { title: 'Mobile Learning', desc: 'On-the-go access to course content via dedicated app.' }
            ]
        },
        {
            id: 'finance',
            label: 'Finance & Payments',
            title: 'Commercial Efficiency',
            desc: 'Scale your institute with automated billing, recursive fee management, and detailed financial forecasting for single or multi-branch operations.',
            features: [
                { title: 'Installment Plans', desc: 'Flexible payment structures for professional courses.' },
                { title: 'Partner Commissions', desc: 'Manage payouts for consulting and recruitment partners.' },
                { title: 'Asset Management', desc: 'Track technical equipment lifecycle and maintenance.' },
                { title: 'Financial Analytics', desc: 'Profitability reports by course and department.' }
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-inter">
            <main>
                {/* Hero Section */}
                <section className="relative h-[840px] overflow-hidden">
                    <div className="absolute inset-0">
                        <Image src="/images/hero-bg-university.png" alt="" fill className="object-cover opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#92C2FF]/15 to-white/70 backdrop-blur-[110px]" />
                    </div>

                    <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[120px] h-full flex items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full pt-12">
                            <div className="max-w-[680px]">
                                <p className="text-[14px] font-semibold tracking-[1.5px] uppercase text-[#0F172A] mb-12">
                                    Home / Products / EduVas Institute
                                </p>

                                <h1 className="text-[50px] lg:text-[64px] font-bold leading-[1.1] mb-2 bg-gradient-to-r from-[#2A75D4] to-[#23A7A6] bg-clip-text text-transparent">
                                    EduVas Institute
                                </h1>

                                <h2 className="text-[20px] font-semibold tracking-[1.5px] uppercase text-[#0F172A] mb-8">
                                    Empowering Technical, Vocational, and Specialized Training Centers
                                </h2>

                                <p className="text-lg text-[#1E293B] leading-relaxed mb-10">
                                    Specialized institutes require agile management systems that handle dynamic course lengths, practical training resources, and direct industry connectivity. EduVas Institute provides the backbone for scalable, modern training operations.
                                    <br /><br />
                                    From skill-based enrollment to verified certifications and employment tracking, our platform ensures your institute stays relevant in a rapidly evolving job market.
                                </p>

                                <div className="flex items-center gap-4 mb-10">
                                    <Link href="/contact" className="h-[48px] px-8 bg-gradient-to-r from-[#2A75D4] to-[#23A7A6] text-white rounded-full font-bold uppercase text-sm tracking-widest flex items-center gap-3 hover:opacity-90 transition-all">
                                        Request a Demo
                                        <Image src="/icons/circle-right.svg" alt="" width={24} height={24} className="brightness-0 invert" />
                                    </Link>
                                    <Link href="#" className="h-[48px] px-8 border border-[#2A75D4] text-[#2A75D4] rounded-full font-bold uppercase text-sm tracking-widest flex items-center gap-3 hover:bg-[#2A75D4] hover:text-white transition-all group">
                                        See Brochure
                                        <Image src="/icons/document-icon.svg" alt="" width={24} height={24} className="group-hover:brightness-0 group-hover:invert" />
                                    </Link>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-black/5 border-2 border-white rounded-[20px] px-6 py-4 backdrop-blur-sm">
                                        <p className="text-xs text-[#0F172A] mb-2">Graduated Pro</p>
                                        <p className="text-2xl font-bold">120,000+</p>
                                    </div>
                                    <div className="bg-black/5 border-2 border-white rounded-[20px] px-6 py-4 backdrop-blur-sm">
                                        <p className="text-xs text-[#0F172A] mb-2">Placement Success</p>
                                        <p className="text-2xl font-bold text-[#23A7A6]">92%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative w-full aspect-[4/3] max-w-[600px]"
                                >
                                    <Image src="/images/university/hero-illustration.svg" alt="Institute Platform" fill className="object-contain" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Modules Section - COMMAND CENTER REDESIGN */}
                <section className="py-24 md:py-40 relative overflow-hidden bg-transparent">
                    {/* Atmospheric Glows */}
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/5 blur-[140px] rounded-full -z-10 animate-pulse" />
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-teal/5 blur-[120px] rounded-full -z-10" />

                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] relative z-10">
                        <div className="text-center mb-20 md:mb-32">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-[10px] font-black uppercase tracking-[0.5em] mb-8"
                            >
                                <span className="w-2 h-2 rounded-full bg-brand-purple animate-ping" />
                                Ecosystem Architecture
                            </motion.div>
                            <h2 className="text-[48px] md:text-[84px] font-black text-brand-purple leading-[0.9] tracking-tighter mb-8">
                                Core <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Intelligence</span>
                            </h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed italic border-x-2 border-brand-primary/10 px-8">
                                Scalable, secure, and intuitive modules designed to unify every aspect of your professional training operations.
                            </p>
                        </div>

                        {/* High-End Tab System */}
                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-20">
                            {modules.map((m, idx) => (
                                <button
                                    key={m.id}
                                    onClick={() => setActiveModule(idx)}
                                    className={`group relative px-8 py-4 rounded-2xl font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-500 flex items-center gap-3 ${activeModule === idx
                                        ? 'text-white'
                                        : 'text-slate-400 bg-white/40 border border-slate-100 hover:border-brand-primary hover:text-brand-primary'}`}
                                >
                                    {activeModule === idx && (
                                        <motion.div
                                            layoutId="activeModuleInstitute"
                                            className="absolute inset-0 bg-brand-purple rounded-2xl shadow-[0_20px_40px_-10px_rgba(6,130,175,0.4)]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{m.label}</span>
                                    {activeModule === idx && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="relative z-10 w-2 h-2 rounded-full bg-brand-teal"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeModule}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="relative"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                                    {/* Left Panel: Feature Highlight (Glass Card) */}
                                    <div className="lg:col-span-4 flex flex-col">
                                        <div className="h-full bg-white/60 backdrop-blur-xl rounded-[48px] border border-white p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] flex flex-col justify-between group/panel overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover/panel:bg-brand-primary/10 transition-colors" />

                                            <div className="relative z-10">
                                                <div className="mb-12 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-50 group-hover/panel:scale-110 transition-transform duration-500">
                                                    <Image src="/Logo.png" alt="" width={44} height={22} className="opacity-80" />
                                                </div>
                                                <h3 className="text-3xl font-black text-brand-purple mb-6 leading-tight tracking-tight">
                                                    {modules[activeModule].title}
                                                </h3>
                                                <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                                                    {modules[activeModule].desc}
                                                </p>
                                            </div>

                                            <div className="relative z-10 mt-12">
                                                <Link href="/contact" className="group/btn flex items-center gap-4 text-brand-primary font-black uppercase text-[11px] tracking-widest hover:gap-6 transition-all">
                                                    Request Configuration
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover/btn:translate-x-2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Panel: Feature Grid (Neural Style) */}
                                    <div className="lg:col-span-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                                            {modules[activeModule].features.map((f, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 + 0.3 }}
                                                    className="group/item relative p-10 rounded-[40px] bg-white border border-slate-100/50 hover:border-brand-primary/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-20px_rgba(0,102,179,0.08)] transition-all duration-500"
                                                >
                                                    <div className="absolute top-6 right-8 text-brand-primary/10 font-black text-5xl group-hover/item:text-brand-primary/20 transition-colors select-none">
                                                        0{i + 1}
                                                    </div>
                                                    <div className="mb-8 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover/item:bg-brand-primary/5 group-hover/item:scale-110 transition-all duration-500">
                                                        <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-brand-primary to-brand-teal animate-pulse" />
                                                    </div>
                                                    <h4 className="text-xl font-black text-brand-purple mb-3 group-hover/item:text-brand-primary transition-colors">{f.title}</h4>
                                                    <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                                        {f.desc}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* Key Advantages Section - DYNAMIC BENTO REDESIGN */}
                <section className="py-24 md:py-40 relative overflow-hidden bg-transparent">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] relative z-10">
                        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16 md:mb-24">
                            <div className="max-w-2xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6"
                                >
                                    Operational Excellence
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[40px] md:text-[64px] font-black text-brand-purple leading-[0.95] tracking-tighter"
                                >
                                    Strategic <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Advantages</span>
                                </motion.h2>
                            </div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-500 max-w-md font-medium leading-relaxed italic border-l-3 border-brand-teal pl-6"
                            >
                                "Our architecture is engineered for the high-velocity requirements of modern technical and vocational training ecosystems."
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                            {/* Advantage 1: Compliance (Tall Card) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-4 group relative rounded-[48px] bg-white/60 backdrop-blur-xl border border-white p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_100px_-20px_rgba(0,102,179,0.1)] transition-all duration-700 overflow-hidden"
                            >
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-slate-50">
                                            <span className="text-3xl">🛡️</span>
                                        </div>
                                        <h4 className="text-2xl font-black text-brand-purple mb-4 tracking-tight">Accreditation <br />Sovereignty.</h4>
                                        <p className="text-slate-500 leading-relaxed font-medium">
                                            Automated curriculum auditing and digital logs ensure your institute stays continuously compliant with global vocational standards.
                                        </p>
                                    </div>
                                    <div className="mt-12 flex items-center gap-2">
                                        <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-brand-primary"
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 2, delay: 0.5 }}
                                            />
                                        </div>
                                        <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Secure</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Advantage 2: Multi-Branch (Wide Card) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="md:col-span-8 group relative rounded-[48px] bg-brand-purple p-12 overflow-hidden shadow-[0_40px_100px_-20px_rgba(42,117,212,0.3)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />

                                <div className="relative z-10 h-full grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            Centralized Control
                                        </div>
                                        <h4 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">Universal <br />Network Sync.</h4>
                                        <p className="text-white/70 text-lg leading-relaxed font-medium mb-10 italic">
                                            Manage 10 or 100 branches with synchronized academic quality and real-time financial transparency.
                                        </p>
                                        <Link href="/contact" className="inline-flex h-14 px-8 bg-white text-brand-purple rounded-2xl font-black uppercase tracking-widest text-[11px] items-center gap-3 hover:bg-brand-primary hover:text-white transition-all shadow-xl">
                                            Deploy Network
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </Link>
                                    </div>
                                    <div className="relative hidden lg:block">
                                        <motion.div
                                            animate={{
                                                rotate: 360,
                                                scale: [1, 1.05, 1]
                                            }}
                                            transition={{
                                                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                                                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                            }}
                                            className="w-full aspect-square border-2 border-white/10 rounded-full flex items-center justify-center relative"
                                        >
                                            <div className="w-[80%] aspect-square border-2 border-white/10 rounded-full" />
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff]" />
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-brand-teal rounded-full shadow-[0_0_15px_#23a7a6]" />
                                            <div className="w-24 h-24 bg-white/20 backdrop-blur-3xl rounded-3xl border border-white/30 flex items-center justify-center">
                                                <Image src="/Logo.png" alt="" width={60} height={30} className="brightness-0 invert" />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Advantage 3: Career Connect (Medium Card) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-7 group relative rounded-[48px] bg-white/40 backdrop-blur-md border border-slate-100 p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(35,167,166,0.1)] transition-all duration-700"
                            >
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-teal/5 blur-[80px] rounded-full group-hover:bg-brand-teal/10 transition-colors" />
                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                    <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-brand-teal to-brand-primary rounded-[32px] flex items-center justify-center shadow-xl shadow-brand-teal/20 group-hover:rotate-12 transition-transform duration-500">
                                        <span className="text-4xl">🚀</span>
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-black text-brand-purple mb-4 tracking-tighter">Industry Integration.</h4>
                                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                            Directly connect students to active job markets with automated resume building and exclusive employer-verified portals.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Advantage 4: High Performance (Small Card) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="md:col-span-5 group relative rounded-[48px] bg-gradient-to-br from-brand-primary to-brand-action p-10 text-white overflow-hidden shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative z-10 h-full flex flex-col justify-center text-center">
                                    <h4 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">92.4%</h4>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-8">Placement Velocity</p>
                                    <div className="flex justify-center gap-1.5 h-12">
                                        {[60, 80, 45, 90, 70, 100].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-1.5 bg-white/30 rounded-full self-end"
                                                animate={{ height: [`${h / 2}%`, `${h}%`, `${h / 2}%`] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Video Impact Section */}
                <section className="relative h-[800px] flex items-center justify-center">
                    <div className="absolute inset-0">
                        <Image src="/school-splash.jpg" alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 text-center text-white">
                        <button className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 mx-auto hover:scale-110 transition-transform shadow-2xl">
                            <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-[#2A75D4] border-b-[14px] border-b-transparent ml-2" />
                        </button>
                        <h2 className="text-[64px] font-bold leading-tight">Empowering Industry <br />Professionals</h2>
                    </div>
                </section>

                {/* Pricing Calculator Section */}
                {/* <section className="py-24 bg-[#E2F0FF]/50">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px]">
                        <h2 className="text-[40px] font-bold text-center mb-4">Pick Your Own Plan</h2>
                        <p className="text-center text-[#64748B] mb-16">Estimate our service cost according to your institute's scale</p>

                        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-[#92C2FF]/30 p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                <div className="space-y-8">
                                    <div>
                                        <label className="block text-sm font-bold text-[#64748B] uppercase mb-3">Institute Type</label>
                                        <select className="w-full h-14 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-6 appearance-none text-[#0F172A] font-medium focus:border-[#2A75D4] transition-all">
                                            <option>Vocational Center</option>
                                            <option>Technical College</option>
                                            <option>Corporate Training Hub</option>
                                            <option>Coaching Institute</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#64748B] uppercase mb-3">Total Students / Professionals</label>
                                        <input type="range" min="50" max="2000" className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2A75D4]" />
                                        <div className="flex justify-between mt-2 text-sm text-[#64748B]"><span>50</span><span>2,000+</span></div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#64748B] uppercase mb-3">Support Level</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <button className="h-14 bg-[#2A75D4] text-white rounded-full font-bold">Standard</button>
                                            <button className="h-14 border border-[#E2E8F0] text-[#0F172A] rounded-full font-bold">Premium 24/7</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#F0F7FF] rounded-[32px] p-10 flex flex-col justify-between border border-[#92C2FF]/20">
                                    <div className="space-y-4">
                                        <div className="flex justify-between"><span>Base Platform</span><span className="font-bold">$800</span></div>
                                        <div className="flex justify-between"><span>Certification Module</span><span className="font-bold">$200</span></div>
                                        <div className="flex justify-between"><span>Advanced Career Connect</span><span className="font-bold">Included</span></div>
                                        <div className="h-px bg-[#E2E8F0] my-6" />
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-xl">Total Yearly Estimate</span>
                                            <div className="text-right">
                                                <p className="text-[48px] font-bold text-[#2A75D4] leading-tight">$1,000</p>
                                                <p className="text-xs text-[#64748B]">billed annually</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full h-14 bg-[#23A7A6] text-white rounded-full font-bold uppercase tracking-widest mt-12 hover:shadow-lg transition-all">Get Detailed Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Pricing Section - REDESIGNED as The Value Matrix */}
                <section className="py-24 md:py-40 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />

                    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
                            <div className="lg:w-1/3">
                                <AnimatedSection>
                                    <div className="w-16 h-1 w bg-brand-primary mb-8" />
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-purple mb-8 tracking-tighter leading-tight">
                                        Investment <span className="text-brand-primary">Pathways</span>
                                    </h2>
                                    <p className="text-lg text-[#64748B] font-medium leading-relaxed mb-12">
                                        We believe institutional excellence should be accessible. Our tiered investment models are designed to grow with your scale and vision.
                                    </p>
                                    <div className="space-y-6">
                                        {['Transparent Pricing', 'No Data Migration Fees', 'Unlimited User Training'].map(trust => (
                                            <div key={trust} className="flex items-center gap-4 text-sm font-black text-brand-purple uppercase tracking-widest">
                                                <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                                                </div>
                                                {trust}
                                            </div>
                                        ))}
                                    </div>
                                </AnimatedSection>
                            </div>

                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Starter Package - Digital Slab Design */}
                                <AnimatedCard className="relative p-12 rounded-[40px] bg-slate-50 border border-slate-100 hover:border-brand-primary/20 transition-all group overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-10">
                                            <div>
                                                <h3 className="text-xl font-black text-brand-purple mb-2 uppercase tracking-tight">Starter</h3>
                                                <p className="text-xs font-black text-brand-primary uppercase tracking-[0.2em]">The Core Foundation</p>
                                            </div>
                                            <div className="text-4xl font-black text-brand-purple/10 group-hover:text-brand-primary/20 transition-colors tracking-tighter">01</div>
                                        </div>

                                        <div className="flex items-baseline mb-10">
                                            <span className="text-6xl font-black text-brand-purple tracking-tighter">$1500</span>
                                            <span className="text-sm font-black text-slate-400 ml-2 uppercase tracking-widest">/ Year</span>
                                        </div>

                                        <div className="space-y-4 mb-12">
                                            {['Core Campus ERP', 'Up to 100 Users', 'Essential Academic Hub', 'Standard Support'].map(feature => (
                                                <div key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-500">
                                                    <div className="w-1 h-1 rounded-full bg-brand-primary/40" /> {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <Link href="/contact" className="block w-full text-center py-5 rounded-2xl bg-white border border-slate-200 text-brand-purple font-black text-xs uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all shadow-sm">
                                            Begin Foundation
                                        </Link>
                                    </div>
                                </AnimatedCard>

                                {/* Standard Package - High Impact Slab */}
                                <AnimatedCard className="relative p-12 rounded-[40px] bg-white border border-brand-primary/20 shadow-[0_40px_80px_rgba(42,117,212,0.1)] group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/[0.03] rounded-bl-[80px]" />
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-10">
                                            <div>
                                                <h3 className="text-xl font-black text-brand-purple mb-2 uppercase tracking-tight">Standard</h3>
                                                <p className="text-xs font-black text-brand-teal uppercase tracking-[0.2em]">The Growth Catalyst</p>
                                            </div>
                                            <div className="text-4xl font-black text-brand-primary/20 transition-colors tracking-tighter">02</div>
                                        </div>

                                        <div className="flex items-baseline mb-10">
                                            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-primary tracking-tighter">$1,000</span>
                                            <span className="text-sm font-black text-slate-400 ml-2 uppercase tracking-widest">/ Year</span>
                                        </div>

                                        <div className="space-y-4 mb-12">
                                            {['Advanced Modules', 'Up to 500 Users', 'Extended Analytics', 'Priority 24/7 Desk'].map(feature => (
                                                <div key={feature} className="flex items-center gap-3 text-sm font-medium text-brand-purple/80">
                                                    <div className="w-1 h-1 rounded-full bg-brand-teal" /> {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <Link href="/contact" className="block w-full text-center py-5 rounded-2xl bg-brand-primary text-white font-black text-xs uppercase tracking-widest hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg shadow-brand-primary/20">
                                            Propel Excellence
                                        </Link>
                                    </div>
                                </AnimatedCard>
                            </div>
                        </div>

                        {/* Premium Centerpiece - Distinct Layout */}
                        <AnimatedCard className="relative w-full rounded-[48px] bg-brand-purple overflow-hidden p-12 md:p-20 shadow-[0_50px_120px_-20px_rgba(50,0,112,0.4)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 to-transparent pointer-events-none" />
                            <div className="absolute top-0 right-0 w-[1000px] h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />

                            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                                <div className="lg:w-1/2 text-left">
                                    <div className="inline-block px-4 py-1.5 mb-8 text-[9px] font-black tracking-widest text-white uppercase border border-brand-teal/30 bg-brand-teal/5">
                                        Institutional Choice
                                    </div>
                                    <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Premium</h3>
                                    <p className="text-xl text-white/60 font-medium leading-relaxed mb-10">
                                        The ultimate enterprise ecosystem for large-scale academic universes. Unlimited power, zero compromise.
                                    </p>
                                    <div className="flex items-baseline mb-12">
                                        <span className="text-8xl font-black text-white tracking-tighter">$2000</span>
                                        <span className="text-sm font-black text-white/40 ml-4 uppercase tracking-[0.3em]">/ Enterprise Yr</span>
                                    </div>
                                </div>

                                <div className="lg:w-1/2 w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                        {['Unlimited Modules', 'Unlimited Users', 'API & SSO Access', 'Dedicated Strategist'].map(item => (
                                            <div key={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-lg bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5" /></svg>
                                                </div>
                                                <span className="text-sm font-black text-white uppercase tracking-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contact" className="block w-full text-center py-6 rounded-3xl bg-white text-brand-purple font-black text-sm uppercase tracking-[0.3em] hover:scale-[1.02] transition-all shadow-2xl">
                                        Deploy Enterprise Solution
                                    </Link>
                                </div>
                            </div>
                        </AnimatedCard>

                        {/* Trust Bar */}
                        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                            {['ISO 27001', 'AES-256', 'SAML 2.0', 'GDPR Ready'].map(tag => (
                                <span key={tag} className="text-xs font-black uppercase tracking-[0.4em] text-brand-purple">{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leading Institutions Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px]">
                        <h3 className="text-center text-[#64748B] font-bold uppercase tracking-widest mb-16">Trusted By Modern Institutes</h3>
                        <div className="flex flex-wrap justify-center gap-x-20 gap-y-12 transition-all">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    className="w-[120px] h-[60px] relative opacity-80 hover:opacity-100 transition-all cursor-pointer"
                                >
                                    <Image src={`/Excellence_ Innovation/image${i}.png`} alt="" fill className="object-contain" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Global CTA */}
                <section className="py-32 bg-white">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px]">
                        <div className="bg-gradient-to-r from-[#2A75D4] to-[#23A7A6] rounded-[60px] p-24 text-center text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl -z-10" />
                            <h2 className="text-[56px] font-bold mb-8">Scale your specialized <br />training institute today.</h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                                <Link href="/contact" className="px-12 py-5 bg-white text-[#2A75D4] rounded-full font-bold uppercase tracking-widest hover:shadow-2xl transition-all">Request a Demo</Link>
                                <Link href="/contact" className="px-12 py-5 border-2 border-white text-white rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Contact Sales Team</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
