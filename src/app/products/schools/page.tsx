'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';


export default function SchoolsPage() {
    const [activeModule, setActiveModule] = useState(0);
    const [calculatorValues, setCalculatorValues] = useState({
        institutionType: 'Primary School',
        totalUsers: 500,
        supportLevel: 'Standard'
    });

    const modules = [
        {
            id: 'admissions',
            label: 'Digital Admissions',
            title: 'Simplified School Admissions',
            desc: 'Automate the entire enrollment process from inquiry to final admission. Our platform handles documents, payments, and applicant tracking for students and parents efficiently.',
            features: [
                { title: 'Online Registration', desc: 'Parents can fill forms and upload documents from home.' },
                { title: 'Entrance Management', desc: 'Manage interviews and assessment tests effortlessly.' },
                { title: 'Document Vault', desc: 'Securely store and verify student certificates digitally.' },
                { title: 'Instant Confirmation', desc: 'Notify parents of status updates via SMS and Email.' }
            ]
        },
        {
            id: 'attendance',
            label: 'Attendance & Security',
            title: 'Safe & Secure Attendance',
            desc: 'Real-time tracking of student and staff attendance with automated notifications to parents, ensuring transparency and absolute safety within campus.',
            features: [
                { title: 'RFID/Biometrics', desc: 'Integration with smart cards for automatic logging.' },
                { title: 'Parent Alerts', desc: 'Instant notification when a student enters or leaves.' },
                { title: 'Leave Management', desc: 'Apply for and approve student leaves online.' },
                { title: 'Security Logs', desc: 'Comprehensive visitor tracking at school gates.' }
            ]
        },
        {
            id: 'parent-portal',
            label: 'Parent Portal',
            title: 'Bridging the Home-School Gap',
            desc: 'Enable parents to stay connected with their child\'s progress, school events, and financial dues through a dedicated mobile app and portal.',
            features: [
                { title: 'Progress Tracking', desc: 'View grades, remarks, and performance charts.' },
                { title: 'Online Fee Payment', desc: 'Pay school fees via secure gateways with digital receipts.' },
                { title: 'Communication Hub', desc: 'Direct messaging with teachers and school admin.' },
                { title: 'Event Calendar', desc: 'Sync school holidays and events with parent mobile.' }
            ]
        },
        {
            id: 'curriculum',
            label: 'Academic Plan',
            title: 'Modern K-12 Curriculum',
            desc: 'Design and manage academic schedules, lesson plans, and assignments across elementary, junior, and senior levels with absolute ease.',
            features: [
                { title: 'Lesson Planning', desc: 'Standardized tools for teachers to plan daily activities.' },
                { title: 'Digital Library', desc: 'Share study materials and resources with students.' },
                { title: 'Assignments', desc: 'Create, collect, and grade homework digitally.' },
                { title: 'Timetable Automator', desc: 'Generate clash-free schedules for all classes.' }
            ]
        },
        {
            id: 'teacher-mgt',
            label: 'Teacher Console',
            title: 'Empowering Educators',
            desc: 'Reduce administrative burdens on teachers, allowing them to focus more on student engagement and instructional quality.',
            features: [
                { title: 'Digital Gradebook', desc: 'Quickly enter marks and generate report cards.' },
                { title: 'Class Behavior', desc: 'Track and report student conduct and participation.' },
                { title: 'Resource Sharing', desc: 'Global database of teaching aids and materials.' },
                { title: 'Professional Growth', desc: 'Monitor teacher training and performance goals.' }
            ]
        },
        {
            id: 'accounting',
            label: 'Fees & Finance',
            title: 'Efficient Financial Control',
            desc: 'Centralized management of school fees, payroll, and infrastructure expenses for better financial health and audit readiness.',
            features: [
                { title: 'Automatic Invoicing', desc: 'Generate monthly/term fee bills automatically.' },
                { title: 'Payroll Automation', desc: 'Manage staff salaries, taxes, and deductions.' },
                { title: 'Expense Tracking', desc: 'Monitor school maintenance and operational costs.' },
                { title: 'Real-time Reports', desc: 'Insightful dashboards for financial stakeholders.' }
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
                                    Home / Products / EduVas Schools
                                </p>

                                <h1 className="text-[50px] lg:text-[64px] font-bold leading-[1.1] mb-2 bg-gradient-to-r from-[#2A75D4] to-[#23A7A6] bg-clip-text text-transparent">
                                    EduVas School
                                </h1>

                                {/* <h2 className="text-[20px] font-semibold tracking-[1.5px] uppercase text-[#0F172A] mb-8">
                                    Empowering Elementary, Junior, Senior and K-12 Institutions
                                </h2> */}

                                <p className="text-lg text-[#1E293B] leading-relaxed mb-10">
                                    Schools manage complex daily operations, teacher schedules, student safety, and parent expectations. EduVas simplifies this complexity by bringing all academic, administrative, and security operations into a single, integrated platform.
                                    <br /><br />
                                    It supports the complete student lifecycle—from initial inquiry to senior graduation—ensuring safety, transparency, and school excellence.
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
                                        <p className="text-xs text-[#0F172A] mb-2">Active Students</p>
                                        <p className="text-2xl font-bold">250,000+</p>
                                    </div>
                                    <div className="bg-black/5 border-2 border-white rounded-[20px] px-6 py-4 backdrop-blur-sm">
                                        <p className="text-xs text-[#0F172A] mb-2">Safety Score</p>
                                        <p className="text-2xl font-bold text-[#23A7A6]">99.9%</p>
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
                                    <Image src="/images/university/hero-illustration.svg" alt="Schools Platform" fill className="object-contain" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Modules Section - REDESIGNED */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#2A75D4]/5 blur-[120px] -z-10" />

                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px]">
                        <div className="text-center mb-16">
                            <h2 className="text-[50px] font-bold text-[#0F172A] mb-4">Core Modules</h2>
                            <p className="text-lg text-[#64748B] max-w-[700px] mx-auto">
                                Discover the powerful tools that make EduVas the preferred choice for modern educational excellence.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                            {modules.map((m, idx) => (
                                <button
                                    key={m.id}
                                    onClick={() => setActiveModule(idx)}
                                    className={`relative px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 ${activeModule === idx
                                        ? 'bg-[#0F172A] text-white shadow-xl scale-105'
                                        : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#2A75D4] hover:text-[#2A75D4]'}`}
                                >
                                    {m.label}
                                    {activeModule === idx && (
                                        <motion.div layoutId="activeTab" className="absolute inset-0 bg-gradient-to-r from-[#2A75D4]/20 to-[#23A7A6]/20 rounded-full -z-10" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeModule}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="relative overflow-hidden group"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-[40px] border border-[#E2E8F0] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-8 md:p-12">

                                    {/* Left Panel: High Impact Visual/Preview */}
                                    <div className="lg:col-span-5 relative group/visual">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2A75D4]/10 to-[#23A7A6]/10 rounded-[30px] -z-10" />
                                        <div className="relative h-full min-h-[400px] flex items-center justify-center p-8">
                                            {/* Animated Background Rings */}
                                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#2A75D4]/20 rounded-full animate-ping" />
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#23A7A6]/10 rounded-full animate-pulse" />
                                            </div>

                                            <div className="text-center relative z-10 transition-transform duration-500 group-hover/visual:scale-110">
                                                <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-8 border border-[#F1F5F9]">
                                                    <Image src="/Logo.png" alt="" width={48} height={24} className="opacity-80" />
                                                </div>
                                                <h3 className="text-3xl font-bold text-[#0F172A] mb-4">{modules[activeModule].title}</h3>
                                                <p className="text-[#64748B] leading-relaxed">
                                                    {modules[activeModule].desc}
                                                </p>
                                            </div>

                                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                                                <Link href="/contact" className="px-6 py-3 bg-[#0F172A] text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#2A75D4] transition-colors shadow-lg">
                                                    Request Live Demo
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Panel: Features Grid */}
                                    <div className="lg:col-span-7 flex flex-col justify-center">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {modules[activeModule].features.map((f, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="group/item relative p-8 rounded-[24px] bg-[#F8FAFC] border border-transparent hover:border-[#2A75D4]/30 hover:bg-white transition-all duration-300"
                                                >
                                                    <div className="mb-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all">
                                                        <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#2A75D4] to-[#23A7A6] opacity-80" />
                                                    </div>
                                                    <h4 className="text-xl font-bold text-[#0F172A] mb-3 group-hover/item:text-[#2A75D4] transition-colors">{f.title}</h4>
                                                    <p className="text-sm text-[#64748B] leading-relaxed">
                                                        {f.desc}
                                                    </p>
                                                    <div className="absolute top-4 right-4 text-[#E2E8F0] font-bold text-4xl group-hover/item:text-[#2A75D4]/10 transition-colors pointer-events-none">
                                                        0{i + 1}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* Key Advantages Section - REDESIGNED as The Playground of Possibilities */}
                <section className="py-24 md:py-40 bg-[#FDFCF6] relative overflow-hidden">
                    {/* Whimsical Decorative Blobs */}
                    <div className="absolute top-20 -left-20 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 200C150 150 250 150 300 200S450 350 500 300" stroke="#2A75D4" strokeWidth="2" strokeDasharray="8 8" />
                            <circle cx="500" cy="300" r="5" fill="#2A75D4" />
                            <path d="M800 700C750 750 650 750 600 700S450 550 400 600" stroke="#23A7A6" strokeWidth="2" strokeDasharray="8 8" />
                            <circle cx="400" cy="600" r="5" fill="#23A7A6" />
                        </svg>
                    </div>

                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                            <div className="lg:w-1/2">
                                <AnimatedSection>
                                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-brand-primary uppercase bg-brand-primary/10 rounded-full">
                                        Nurturing Potential
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black text-brand-purple mb-8 tracking-tighter leading-tight">
                                        The Playground of <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Limitless Learning</span>
                                    </h2>
                                    <p className="text-lg md:text-xl text-[#64748B] font-medium leading-relaxed italic border-l-4 border-brand-teal/30 pl-6">
                                        "We believe school management isn't just about spreadsheets—it's about ensuring every child feels safe, seen, and inspired to reach for the stars."
                                    </p>
                                </AnimatedSection>
                            </div>
                            <div className="lg:w-1/2 relative">
                                {/* Whimsical Illustration Area */}
                                <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-teal/10 rounded-[60px] rotate-6 border-2 border-dashed border-brand-primary/20" />
                                    <div className="absolute inset-0 bg-white rounded-[60px] -rotate-3 shadow-xl flex items-center justify-center p-12">
                                        <div className="text-center">
                                            <div className="text-6xl mb-6">🚀</div>
                                            <p className="text-sm font-black text-brand-purple uppercase tracking-widest mb-2">Did You Know?</p>
                                            <p className="text-slate-500 font-medium">EduVas saves teachers 12 hours a week—time they spend 1-on-1 with their students.</p>
                                        </div>
                                    </div>
                                    {/* Floating elements */}
                                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce">⭐</div>
                                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-teal rounded-xl flex items-center justify-center text-xl shadow-lg animate-pulse">🎨</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    emoji: "✨",
                                    title: "Magic Learning Quests",
                                    desc: "Gamified learning modules that transform daily lessons into exciting quests, keeping every child engaged and curious.",
                                    color: "bg-indigo-50/50",
                                    accent: "text-indigo-600"
                                },
                                {
                                    emoji: "🛡️",
                                    title: "Invisible Shield",
                                    desc: "GPS tracking and instant campus alerts that give parents peace of mind while kids run free.",
                                    color: "bg-green-50",
                                    accent: "text-green-500"
                                },
                                {
                                    emoji: "🧩",
                                    title: "Personalized Maps",
                                    desc: "No two kids are alike. Our AI adapts learning paths to match every unique curiosity.",
                                    color: "bg-purple-50",
                                    accent: "text-purple-500"
                                },
                                {
                                    emoji: "🌱",
                                    title: "Green Legacy",
                                    desc: "Zero-paper operations to teach children the importance of a healthy, sustainable planet.",
                                    color: "bg-yellow-50",
                                    accent: "text-yellow-500"
                                }
                            ].map((adv, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`p-10 rounded-[40px] ${adv.color} border border-transparent hover:border-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group`}
                                >
                                    <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500">{adv.emoji}</div>
                                    <h4 className={`text-xl font-black text-brand-purple mb-4 tracking-tight`}>{adv.title}</h4>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                        {adv.desc}
                                    </p>
                                    <div className={`absolute bottom-6 right-8 text-4xl opacity-[0.05] font-black ${adv.accent}`}>
                                        0{idx + 1}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-24 text-center">
                            <Link href="/contact" className="inline-flex items-center gap-4 px-10 py-5 bg-brand-purple text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-primary transition-all shadow-xl group">
                                Start Their Adventure
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SCORM Animated LMS Section */}
                <section className="py-24 md:py-40 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-6">
                                <AnimatedSection>
                                    <div className="inline-block px-4 py-1 mb-6 text-[10px] font-black tracking-widest text-[#23A7A6] uppercase bg-[#23A7A6]/10 rounded-full">
                                        Interactive Mastery
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black text-brand-purple mb-8 tracking-tighter leading-tight">
                                        The Magic Library <br />
                                        <span className="text-brand-teal">SCORM Reimagined</span>
                                    </h2>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                        Why settle for PDF slides when you can have interactive story-books? Our SCORM 1.2 & 2004 engine powers thousands of funny, modern, and high-energy learning materials.
                                    </p>

                                    <div className="space-y-6">
                                        {[
                                            { title: "Gamified SCORM Content", desc: "Interactive quizzes that feel like video-games." },
                                            { title: "Progressive Storylines", desc: "Lessons that unfold based on student choices." },
                                            { title: "Universal Compatibility", desc: "Import any SCORM package with one-click magic." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform font-bold">0{i + 1}</div>
                                                <div>
                                                    <h4 className="font-black text-brand-purple uppercase text-sm mb-1 tracking-tight">{item.title}</h4>
                                                    <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AnimatedSection>
                            </div>

                            <div className="lg:col-span-6 relative">
                                <div className="relative aspect-square rounded-[60px] bg-gradient-to-br from-brand-teal to-brand-primary p-1 shadow-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&fit=crop')] bg-cover opacity-20" />
                                    <div className="relative h-full w-full bg-white/10 backdrop-blur-md rounded-[58px] flex items-center justify-center border border-white/20">
                                        <div className="text-center p-12">
                                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-pulse">
                                                <span className="text-5xl">🧸</span>
                                            </div>
                                            <p className="text-white font-black text-xl mb-4 tracking-tighter">"I learned fractions by helping Mr. Bear bake a cake!"</p>
                                            <p className="text-white/60 text-sm font-medium">— Little Leo, Grade 2</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Tags */}
                                <div className="absolute -top-6 -right-6 bg-white shadow-xl p-4 rounded-2xl border border-slate-100 flex items-center gap-3 animate-bounce">
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">SCORM Ready</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Attractive Section - 360 Safety & Parent Joy */}
                <section className="py-24 md:py-40 bg-[#0F172A] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] relative z-10">
                        <div className="text-center mb-24">
                            <AnimatedSection>
                                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                                    The Digital <span className="text-brand-teal text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Guardian Angel</span>
                                </h2>
                                <p className="text-white/40 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                                    We bridge the gap between school gates and home doorsteps, because nothing matters more than their smiles and your peace of mind.
                                </p>
                            </AnimatedSection>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Joyful Tracking", desc: "Interactive map icons that show their journey with cute avatars.", icon: "🛰️" },
                                { title: "Instant High-Fives", desc: "Send digital rewards directly to their app for good behavior.", icon: "🏆" },
                                { title: "Zero-Stress Dues", desc: "Automated fee reminders that feel like friendly notes.", icon: "💌" }
                            ].map((card, i) => (
                                <AnimatedCard key={i} className="p-12 rounded-[50px] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white transition-all duration-700">
                                    <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{card.icon}</div>
                                    <h4 className="text-2xl font-black text-white group-hover:text-brand-purple mb-4 tracking-tight transition-colors">{card.title}</h4>
                                    <p className="text-white/40 group-hover:text-slate-500 font-medium leading-relaxed transition-colors">
                                        {card.desc}
                                    </p>
                                </AnimatedCard>
                            ))}
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
                        <h2 className="text-[64px] font-bold leading-tight">Discover EduVas Impact <br />on Schools</h2>
                    </div>
                </section>

                {/* Pricing Calculator Section */}
                {/* <section className="py-24 bg-[#E2F0FF]/50">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px]">
                        <h2 className="text-[40px] font-bold text-center mb-4">Pick Your Own Plan</h2>
                        <p className="text-center text-[#64748B] mb-16">Estimate our service cost according to your school's needs</p>

                        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-[#92C2FF]/30 p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                <div className="space-y-8">
                                    <div>
                                        <label className="block text-sm font-bold text-[#64748B] uppercase mb-3">Institution Type</label>
                                        <select className="w-full h-14 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-6 appearance-none text-[#0F172A] font-medium focus:border-[#2A75D4] transition-all">
                                            <option>Primary School</option>
                                            <option>Junior Secondary</option>
                                            <option>Higher Secondary</option>
                                            <option>K-12 Collective</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#64748B] uppercase mb-3">Total Users (Students/Teachers)</label>
                                        <input type="range" min="100" max="5000" className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2A75D4]" />
                                        <div className="flex justify-between mt-2 text-sm text-[#64748B]"><span>100</span><span>5,000+</span></div>
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
                                        <div className="flex justify-between"><span>Base Platform</span><span className="font-bold">$1,200</span></div>
                                        <div className="flex justify-between"><span>Active Student License</span><span className="font-bold">$0.50 / student</span></div>
                                        <div className="flex justify-between"><span>Advanced Security Module</span><span className="font-bold">Included</span></div>
                                        <div className="h-px bg-[#E2E8F0] my-6" />
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-xl">Total Yearly Estimate</span>
                                            <div className="text-right">
                                                <p className="text-[48px] font-bold text-[#2A75D4] leading-tight">$1,450</p>
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
                        <h3 className="text-center text-[#64748B] font-bold uppercase tracking-widest mb-16">Trusted By Leading Schools</h3>
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

                {/* Technology Stack Section - REDESIGNED as High-Tech Ecosystem */}
                <section className="py-24 md:py-40 bg-[#0F172A] relative overflow-hidden">
                    {/* Neural Network Background Effect */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2A75D4 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent" />

                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] relative z-10">
                        <div className="text-center mb-24">
                            <AnimatedSection>
                                <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.4em] text-brand-teal uppercase border border-brand-teal/30 bg-brand-teal/5 rounded-full">
                                    Engineering Excellence
                                </div>
                                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                                    Built with the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-[#2A75D4]">Future-Ready Stack.</span>
                                </h2>
                                <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                                    Architected on high-performance infrastructure ensuring 99.99% uptime,
                                    military-grade encryption, and sub-second page loads.
                                </p>
                            </AnimatedSection>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {[
                                {
                                    pillar: "The Interface",
                                    title: "Vite + Next.js 14",
                                    desc: "Lightning-fast client rendering with Server-Side optimizations for instant portal access.",
                                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                                },
                                {
                                    pillar: "The Logic",
                                    title: "Node.js Core",
                                    desc: "Hyper-scalable asynchronous processing capable of handling millions of concurrent student requests.",
                                    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                },
                                {
                                    pillar: "Infrastructure",
                                    title: "AWS Hybrid Cloud",
                                    desc: "Global availability with regional data sovereignty and auto-scaling performance groups.",
                                    icon: "M19 11l-8-8-8 8m2 4l6 6 6-6"
                                },
                                {
                                    pillar: "The Security",
                                    title: "AES-256 + SSL",
                                    desc: "End-to-end data encryption with real-time WAF protection and biometric authentication sync.",
                                    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                }
                            ].map((tech, idx) => (
                                <AnimatedCard
                                    key={idx}
                                    className="p-10 rounded-[40px] bg-white/[0.02] border border-white/10 hover:border-brand-teal/30 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-0 bg-brand-teal group-hover:h-full transition-all duration-700" />
                                    <div className="mb-10 flex justify-between items-start">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal/60">{tech.pillar}</p>
                                        <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/20 transition-all">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white group-hover:text-brand-teal transition-colors">
                                            <path d={tech.icon} />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-4 group-hover:translate-x-2 transition-transform">{tech.title}</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                        {tech.desc}
                                    </p>
                                </AnimatedCard>
                            ))}
                        </div>

                        {/* High-Tech System Heartbeat */}
                        <div className="mt-20 p-8 rounded-[40px] bg-gradient-to-r from-brand-teal/5 to-transparent border border-white/5 flex flex-col md:flex-row items-center gap-12 justify-between">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-brand-teal/20 animate-ping absolute inset-0" />
                                    <div className="w-16 h-16 rounded-full bg-brand-teal/40 flex items-center justify-center relative z-10">
                                        <div className="w-8 h-8 rounded-full bg-brand-teal shadow-[0_0_20px_#23A7A6]" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white font-black uppercase text-xs tracking-widest mb-1">System Status: Optimal</p>
                                    <p className="text-brand-teal font-medium text-sm">99.99% Guaranteed Service Level</p>
                                </div>
                            </div>
                            <div className="flex gap-8 md:gap-16">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase mb-2">Scalability</p>
                                    <p className="text-2xl font-black text-white leading-none tracking-tighter">Unlimited</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase mb-2">Encryption</p>
                                    <p className="text-2xl font-black text-white leading-none tracking-tighter">AES-256</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase mb-2">Backups</p>
                                    <p className="text-2xl font-black text-white leading-none tracking-tighter">Real-time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global CTA - REDESIGNED with Innovative Photo Collage */}
                <section className="py-24 md:py-48 bg-white overflow-hidden">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-[120px]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                            {/* Left Side: Innovative Photo Collage */}
                            <div className="lg:col-span-6 relative">
                                <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                                    {/* Main Center Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="absolute inset-0 z-20 rounded-[48px] overflow-hidden shadow-2xl border-8 border-white"
                                    >
                                        <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&fit=crop" alt="School Life" fill className="object-cover" />
                                    </motion.div>

                                    {/* Sub Image 1: Top Right */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 50, y: -50, rotate: 10 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="absolute -top-12 -right-12 w-1/2 aspect-square z-30 rounded-[40px] overflow-hidden shadow-xl border-4 border-white hidden md:block"
                                    >
                                        <Image src="https://images.unsplash.com/photo-1577891772447-b2413aae30bc?w=600&fit=crop" alt="Student with Tablet" fill className="object-cover" />
                                    </motion.div>

                                    {/* Sub Image 2: Bottom Left */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -50, y: 50, rotate: -10 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="absolute -bottom-16 -left-12 w-1/2 aspect-[4/3] z-10 rounded-[40px] overflow-hidden shadow-xl border-4 border-white hidden md:block"
                                    >
                                        <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&fit=crop" alt="Teacher Mentorship" fill className="object-cover" />
                                    </motion.div>

                                    {/* Floating Decorative Elements */}
                                    <div className="absolute top-1/2 -right-20 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl -z-10" />
                                    <div className="absolute top-0 -left-20 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
                                </div>
                            </div>

                            {/* Right Side: CTA Content */}
                            <div className="lg:col-span-6 text-center lg:text-left">
                                <AnimatedSection>
                                    <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.4em] text-brand-primary uppercase bg-brand-primary/5 rounded-full">
                                        Next-Gen Education
                                    </div>
                                    <h2 className="text-4xl md:text-7xl font-black text-brand-purple mb-8 tracking-tighter leading-[0.95]">
                                        Ready to <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Modernize?</span>
                                    </h2>
                                    <p className="text-xl text-slate-500 font-medium mb-12 max-w-[500px] mx-auto lg:mx-0 leading-relaxed">
                                        Join hundreds of schools already redefining the classroom. Your journey to excellence starts with a single click.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                        <Link
                                            href="/contact"
                                            className="px-10 py-5 bg-brand-purple text-white rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-brand-primary transition-all shadow-[0_20px_40px_-10px_rgba(50,0,112,0.3)] group flex items-center justify-center gap-3"
                                        >
                                            Request a Demo
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="px-10 py-5 border-2 border-slate-100 text-slate-600 rounded-3xl font-black uppercase text-xs tracking-widest hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center gap-3"
                                        >
                                            Talk to Sales
                                        </Link>
                                    </div>

                                    {/* Trust Badge Pin */}
                                    <div className="mt-16 flex items-center justify-center lg:justify-start gap-4">
                                        <div className="flex -space-x-4">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden ring-2 ring-brand-primary/10">
                                                    <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" width={40} height={40} />
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm font-bold text-slate-400 trackers-tight">
                                            <span className="text-brand-purple">500+</span> Principals Trust EduVas
                                        </p>
                                    </div>
                                </AnimatedSection>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
