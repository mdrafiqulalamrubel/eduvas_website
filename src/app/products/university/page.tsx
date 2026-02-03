'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

export default function UniversityPage() {
  const [activeModule, setActiveModule] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('recommended');

  const modules = [
    {
      id: 'admissions',
      label: 'Admissions',
      title: 'Global Scale Admissions',
      color: '#2A75D4',
      gradient: 'from-[#2A75D4] to-[#23A7A6]',
      desc: 'Simplify the complex journey from application to enrollment. Our AI-assisted portal handles massive applicant volumes while ensuring a personalized student experience.',
      features: [
        { title: 'Online Application', desc: 'Customizable forms with automated document validation.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Exam Management', desc: 'Secure online/offline entrance exam Coordination.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
        { title: 'Blockchain-Based Degree Verification', desc: 'Automated ranking based on multi-criteria algorithms.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        { title: 'Curriculum Management', desc: 'Integrated multi-currency fee collection for applications.', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' }
      ]
    },
    {
      id: 'student-aid',
      label: 'Student AID',
      title: 'Financial Aid & Scholarship',
      color: '#23A7A6',
      gradient: 'from-[#23A7A6] to-[#2A75D4]',
      desc: 'Manage scholarships, grants, and financial assistance programs with transparency and precision, ensuring aid reaching the most deserving candidates.',
      features: [
        { title: 'Grant Allocation', desc: 'Process and track government and private grants.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1c-1.11 0-2.08-.402-2.599-1M12 8V7m0 11c-1.11 0-2.08-.402-2.599-1M12 18v1m0-1c1.11 0 2.08.402 2.599 1M12 18v1m4-4.44V4.504c0-.426-.23-.819-.611-1.012a3.023 3.023 0 00-3.38.309L10.22 5.51a1 1 0 01-1.28.1l-1.969-1.554a1 1 0 00-1.574.806V14.44M11 9H4v5h7V9z' },
        { title: 'Need Analysis', desc: 'AI-driven assessment of financial aid requirements.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { title: 'Fund Tracking', desc: 'Real-time visibility into endowment and aid budgets.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
        { title: 'Automated Renewal', desc: 'Condition-based scholarship renewal tracking.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
      ]
    },
    {
      id: 'curriculum',
      label: 'Curriculum',
      title: 'Dynamic Academic Planning',
      color: '#320070',
      gradient: 'from-[#320070] to-[#2A75D4]',
      desc: 'Design and manage complex academic structures, credit systems, and multi-departmental course offerings with a high degree of flexibility.',
      features: [
        { title: 'Course Mapping', desc: 'Inter-disciplinary credit and prerequisite management.', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
        { title: 'Syllabus Designer', desc: 'Centralized repository for outcome-based education.', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
        { title: 'Credit Management', desc: 'Automated tracking of ECTS and custom credit units.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { title: 'Faculty Assignment', desc: 'Optimized workload distribution for teaching staff.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' }
      ]
    },
    {
      id: 'student-portal',
      label: 'Student Portal',
      title: 'Unified Student Experience',
      color: '#2A75D4',
      gradient: 'from-[#2A75D4] to-[#320070]',
      desc: 'A 360-degree digital campus for every student. Access grades, attendance, payments, and campus services from a single intuitive dashboard.',
      features: [
        { title: 'Personalized Feed', desc: 'Academic alerts, campus news, and event reminders.', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 7 7.388 7 11v3.159c0 .538-.214 1.055-.595 1.436L5 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9' },
        { title: 'Digital Repository', desc: '24/7 access to course materials and lecture notes.', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
        { title: 'Online Registration', desc: 'Self-service course enrollment and elective picking.', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
        { title: 'Mobile Companion', desc: 'Full-featured app for on-the-go campus management.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' }
      ]
    },
    {
      id: 'faculty',
      label: 'Faculty Manage',
      title: 'Empowered Teaching',
      color: '#23A7A6',
      gradient: 'from-[#23A7A6] to-[#320070]',
      desc: 'Give your faculty the tools they need to excel. From automated grading to research tracking, we simplify administrative tasks so they can focus on education.',
      features: [
        { title: 'Smart Attendance', desc: 'Bio-metric or mobile-based presence tracking.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
        { title: 'Grading Console', desc: 'Flexible mark-entry system with curves and rubrics.', icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z' },
        { title: 'Research Tracker', desc: 'Manage publications, citations, and grant funding.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
        { title: 'Workload Planner', desc: 'Visual dashboard for teaching and admin duties.', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' }
      ]
    },
    {
      id: 'accounting',
      label: 'Accounting Manage',
      title: 'Institutional Finance',
      color: '#320070',
      gradient: 'from-[#320070] to-[#23A7A6]',
      desc: 'Maintain robust financial health with integrated accounting. Handles everything from departmental budgets to multi-campus consolidated reporting.',
      features: [
        { title: 'Budget Control', desc: 'Real-time monitoring of departmental expenditures.', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
        { title: 'Audit Readiness', desc: 'Automated logs and compliant financial statements.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { title: 'Asset Ledger', desc: 'Track physical assets across all campus locations.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
        { title: 'Payroll Engine', desc: 'Complex salary structures with tax compliance.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#f2f8f7] to-[#fdfbf7]">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <AnimatedSection animation="slideInRight" className="flex-1 max-w-2xl order-2 lg:order-1">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-brand-purple/40">
                <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-brand-primary transition-colors">Products</Link>
                <span>/</span>
                <span className="text-brand-primary">University</span>
              </nav>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-brand-purple mb-8 tracking-tighter">
                Eduvas <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">University</span>
              </h1>

              {/* Subheading */}
              <h2 className="text-xl md:text-2xl text-brand-teal font-montserrat font-bold tracking-tight mb-8 uppercase leading-tight">
                Revolutionizing Higher Education Excellence.
              </h2>

              {/* Description */}
              {/* <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl font-medium">
                Universities manage complex academic structures, multiple departments, large student populations, and strict compliance requirements. EDUVAS simplifies this complexity by bringing all academic, administrative, and financial operations into a single, integrated platform.
              </p> */}
              <p className="text-lg text-slate-600 leading-relaxed mb-1 max-w-xl font-medium">
                Universities manage complex academic structures, multiple departments, large student populations, and strict compliance requirements. IUMS simplifies this complexity by bringing all academic, administrative, and financial operations into a single, integrated platform.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl font-medium">
                It supports the complete student journey from admission to graduation while ensuring transparency, accuracy, and coordination across faculties, offices, and campuses.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-brand-primary text-white rounded-2xl font-montserrat font-black uppercase tracking-widest text-sm shadow-lg shadow-brand-primary/20 hover:bg-brand-purple hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Request a Demo
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>

                <Link
                  href="#"
                  className="w-full sm:w-auto px-10 py-5 border-2 border-brand-primary/20 text-brand-primary rounded-2xl font-montserrat font-black uppercase tracking-widest text-sm hover:bg-brand-primary/5 transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  See Brochure
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                </Link>
              </div>

              {/* Glass Morphism Stats */}
              <div className="flex items-center gap-6">
                <div className="bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 p-6 shadow-xl shadow-brand-primary/5 transition-transform hover:scale-105">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Active Users</p>
                  <p className="text-3xl font-black text-brand-purple">50,000+</p>
                </div>

                <div className="bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 p-6 shadow-xl shadow-brand-teal/5 transition-transform hover:scale-105">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Efficiency</p>
                  <p className="text-3xl font-black text-brand-teal">+85%</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Hero Illustration */}
            <AnimatedSection animation="slideInLeft" className="flex-1 relative order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[650px] mx-auto group">
                <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-3xl group-hover:bg-brand-teal/20 transition-colors duration-1000" />
                <Image
                  src="/images/university/hero-illustration.svg"
                  alt="University Management Ecosystem"
                  fill
                  className="object-contain relative z-10"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-brand-primary/5 blur-[120px] -z-10" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16 md:mb-24">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-purple mb-6 tracking-tighter">
                Core <span className="text-brand-primary">Modules</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                Elevate your institution with our sophisticated suite of modules, engineered for the complexities of modern higher education.
              </p>
            </AnimatedSection>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {modules.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveModule(idx)}
                className={`relative px-6 py-3 rounded-xl font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${activeModule === idx
                  ? 'text-white shadow-xl scale-105'
                  : 'bg-slate-50 text-slate-400 border border-slate-100 hover:border-brand-primary hover:text-brand-primary'}`}
              >
                <div
                  className={`absolute inset-0 rounded-xl transition-opacity duration-300 -z-10 ${activeModule === idx ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundColor: m.color }}
                />
                {m.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 bg-white rounded-[48px] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-8 md:p-12 lg:p-16">

                {/* Left Panel: High Impact Visual/Preview */}
                <div className="lg:col-span-5 relative group/visual flex flex-col justify-center text-center lg:text-left">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-teal/5 rounded-[32px] -z-10" />

                  <div className="mb-10 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto lg:mx-0 border border-slate-50 transition-transform group-hover/visual:scale-110 duration-500">
                    <Image src="/Logo.png" alt="Eduvas" width={48} height={24} className="opacity-80" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-brand-purple mb-6 tracking-tight">
                    {modules[activeModule].title}
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
                    {modules[activeModule].desc}
                  </p>

                  <div>
                    <Link
                      href="/contact"
                      style={{ backgroundColor: modules[activeModule].color }}
                      className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1 brightness-90 hover:brightness-110"
                    >
                      Explore Modular Logic
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>

                {/* Right Panel: Features Grid */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {modules[activeModule].features.map((f, i) => (
                      <AnimatedCard
                        key={i}
                        delay={i * 0.1}
                        className="group/item relative p-8 rounded-[32px] bg-slate-50/50 border border-transparent transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-black/5"
                        style={{ borderColor: activeModule !== null ? `${modules[activeModule].color}15` : 'transparent' }}
                      >
                        <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-500 border border-slate-50">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-colors duration-500" style={{ color: modules[activeModule].color }}>
                            <path d={f.icon} />
                          </svg>
                        </div>
                        <h4 className="text-xl font-black text-brand-purple mb-3 transition-colors" style={{ color: activeModule !== null ? undefined : 'inherit' }}>
                          <span className="group-hover/item:text-brand-primary" style={{ color: undefined }}>{f.title}</span>
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                          {f.desc}
                        </p>
                        <div
                          className="absolute top-6 right-8 font-black text-5xl transition-colors pointer-events-none opacity-5"
                          style={{ color: modules[activeModule].color }}
                        >
                          0{i + 1}
                        </div>
                        {/* Interactive dynamic glow */}
                        <div
                          className="absolute -bottom-2 -right-2 w-24 h-24 blur-3xl rounded-full opacity-0 group-hover/item:opacity-20 transition-opacity pointer-events-none"
                          style={{ backgroundColor: modules[activeModule].color }}
                        />
                      </AnimatedCard>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Key Advantages Section - REDESIGNED as The Blueprint of Excellence */}
      <section className="py-24 md:py-40 bg-[#f8fafc] relative overflow-hidden">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#2A75D4 1px, transparent 1px), linear-gradient(90deg, #2A75D4 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#fdfbf7] to-transparent" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <AnimatedSection className="max-w-2xl text-left">
              <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-brand-primary uppercase border-l-4 border-brand-primary bg-brand-primary/5">
                Strategic Benchmarks
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-brand-purple mb-6 tracking-tighter leading-[0.9]">
                The Blueprint of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal text-brand-primary">Institutional Sovereignty</span>
              </h2>
            </AnimatedSection>
            <div className="hidden lg:block h-px flex-1 bg-gradient-to-r from-brand-primary/20 to-transparent mx-12 mb-6" />
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-brand-purple/20 font-black text-xl italic">01</div>
              <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-brand-purple/20 font-black text-xl italic">02</div>
              <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-brand-purple/20 font-black text-xl italic">03</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-black/5 rounded-[40px] overflow-hidden bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)]">
            {/* Advantage 1 */}
            <div className="lg:col-span-4 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-black/5 group hover:bg-brand-primary/[0.01] transition-colors">
              <div className="relative mb-12">
                <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
                <div className="absolute -top-4 -right-4 font-inter font-black text-5xl text-black/[0.03] group-hover:text-brand-primary/5 transition-colors">A1</div>
              </div>
              <h4 className="text-2xl font-black text-brand-purple mb-6 tracking-tight">Eco-Centric Infrastructure</h4>
              <p className="text-[#64748B] text-base leading-relaxed font-medium mb-10">
                Eliminate administrative waste with 100% digital workflows. Our system is engineered to reduce carbon footprints while maximizing operational velocity.
              </p>
              <ul className="space-y-4">
                {['Paperless Credentialing', 'Zero-Waste Admissions', 'Green Data Storage'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-brand-purple/40">
                    <div className="w-1 h-1 rounded-full bg-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Advantage 2 */}
            <div className="lg:col-span-4 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-black/5 group hover:bg-brand-primary/[0.01] transition-colors bg-slate-50/30">
              <div className="relative mb-12">
                <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className="absolute -top-4 -right-4 font-inter font-black text-5xl text-black/[0.03] group-hover:text-brand-primary/5 transition-colors">A2</div>
              </div>
              <h4 className="text-2xl font-black text-brand-purple mb-6 tracking-tight">Fortress-Grade Security</h4>
              <p className="text-[#64748B] text-base leading-relaxed font-medium mb-10">
                Institutional data is protected by multi-layer encryption and biometric verification protocols, ensuring absolute privacy for every student and faculty member.
              </p>
              <ul className="space-y-4">
                {['AES-256 Encryption', 'Biometric SSO Sync', 'SOC2 Compliant Core'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-brand-purple/40">
                    <div className="w-1 h-1 rounded-full bg-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Advantage 3 */}
            <div className="lg:col-span-4 p-10 md:p-14 group hover:bg-brand-primary/[0.01] transition-colors">
              <div className="relative mb-12">
                <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
                </div>
                <div className="absolute -top-4 -right-4 font-inter font-black text-5xl text-black/[0.03] group-hover:text-brand-primary/5 transition-colors">A3</div>
              </div>
              <h4 className="text-2xl font-black text-brand-purple mb-6 tracking-tight">Infinite Elasticity</h4>
              <p className="text-[#64748B] text-base leading-relaxed font-medium mb-10">
                From a single department to a multi-national campus network, Eduvas scales horizontally with your growth without performance degradation.
              </p>
              <ul className="space-y-4">
                {['Global Load Balancing', 'Multi-Tenant Logic', 'Unlimited User Pools'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-brand-purple/40">
                    <div className="w-1 h-1 rounded-full bg-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Eduvas Impact Section */}
      <section className="relative py-24 md:py-40 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=920&fit=crop"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
          {/* Dark Cinematic Overlay */}
          <div className="absolute inset-0 bg-brand-purple/60 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <AnimatedSection animation="scale">
            {/* Play Button */}
            <button
              className="mb-12 w-24 h-24 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl group mx-auto"
              aria-label="Play video"
            >
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-brand-primary border-b-[12px] border-b-transparent ml-2 group-hover:border-l-brand-purple transition-colors" />
            </button>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white max-w-4xl mx-auto leading-[1.1]">
              Discover Eduvas Impact
            </h2>
            <p className="mt-8 text-lg md:text-xl text-white/70 font-medium max-w-2xl mx-auto">
              See how our ecosystem transforms complex institutional data into meaningful educational growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

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

      {/* Deep Feature Comparison */}
      <section className="py-24 md:py-40 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-primary">Deep Feature</span> <span className="text-brand-primary">Comparison</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                Discover the granular capabilities of the EDUVAS ecosystem across all institutional tiers.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slideUp">
            <div className="rounded-[48px] border border-slate-100 overflow-hidden bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100">
                      <th className="text-left font-black text-brand-purple py-10 px-12 text-sm uppercase tracking-widest">Capabilities</th>
                      <th className="text-center font-black text-slate-400 py-10 px-6 text-sm uppercase tracking-widest">Starter</th>
                      <th className="text-center font-black text-brand-primary py-10 px-6 text-sm uppercase tracking-widest">Standard</th>
                      <th className="text-center py-10 px-6 bg-brand-primary/5">
                        <div className="inline-block bg-brand-teal text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">Enterprise choice</div>
                        <div className="text-sm font-black text-brand-purple uppercase tracking-widest">Premium</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {/* Institutional Portals */}
                    <tr className="bg-brand-primary/5">
                      <td colSpan={4} className="font-black text-[10px] uppercase tracking-[0.3em] text-brand-primary py-4 px-12">Institutional Portals</td>
                    </tr>
                    {[
                      { name: "User Portal (Student, Teacher, Staff)", starter: true, standard: true, premium: true },
                      { name: "Admission Counselling Management", starter: true, standard: true, premium: true },
                      { name: "Faculty and Department Management", starter: true, standard: true, premium: true },
                      { name: "Curriculum and Course Management", starter: true, standard: true, premium: true }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="font-medium text-slate-600 py-6 px-12">{row.name}</td>
                        <td className="text-center py-6 border-l border-slate-50">{row.starter && <div className="w-2.5 h-2.5 rounded-full bg-slate-300 mx-auto" />}</td>
                        <td className="text-center py-6 border-l border-slate-50">{row.standard && <div className="w-2.5 h-2.5 rounded-full bg-brand-primary/60 mx-auto" />}</td>
                        <td className="text-center py-6 border-l border-brand-primary/10 bg-brand-primary/5">
                          {row.premium && (
                            <svg className="w-5 h-5 text-brand-teal mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </td>
                      </tr>
                    ))}

                    {/* Academic Center */}
                    <tr className="bg-brand-teal/5">
                      <td colSpan={4} className="font-black text-[10px] uppercase tracking-[0.3em] text-brand-teal py-4 px-12">Academic Excellence Center</td>
                    </tr>
                    {[
                      { name: "Classroom and Routine Management", starter: true, standard: true, premium: true },
                      { name: "Course Evaluation & Analytics", starter: false, standard: true, premium: true },
                      { name: "Smart Attendance Systems", starter: false, standard: true, premium: true },
                      { name: "Examination & Grading Hub", starter: true, standard: true, premium: true },
                      { name: "Outcome Based Education (OBE)", starter: false, standard: false, premium: true },
                      { name: "Research & Publication Tracker", starter: false, standard: false, premium: true }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="font-medium text-slate-600 py-6 px-12">{row.name}</td>
                        <td className="text-center py-6 border-l border-slate-50">{row.starter ? <div className="w-2.5 h-2.5 rounded-full bg-slate-300 mx-auto" /> : "-"}</td>
                        <td className="text-center py-6 border-l border-slate-50">{row.standard ? <div className="w-2.5 h-2.5 rounded-full bg-brand-primary/60 mx-auto" /> : "-"}</td>
                        <td className="text-center py-6 border-l border-brand-primary/10 bg-brand-primary/5">
                          {row.premium && (
                            <svg className="w-5 h-5 text-brand-teal mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </td>
                      </tr>
                    ))}

                    {/* Operations & Finance */}
                    <tr className="bg-brand-purple/5">
                      <td colSpan={4} className="font-black text-[10px] uppercase tracking-[0.3em] text-brand-purple py-4 px-12">Operations & Infrastructure</td>
                    </tr>
                    {[
                      { name: "HR & Payroll Engine", starter: false, standard: true, premium: true },
                      { name: "Accounting & Budget Control", starter: false, standard: true, premium: true },
                      { name: "Inventory & Procurement", starter: false, standard: false, premium: true },
                      { name: "Library & Digital Asset Management", starter: true, standard: true, premium: true },
                      { name: "Hostel & Transport Logistics", starter: false, standard: true, premium: true }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="font-medium text-slate-600 py-6 px-12">{row.name}</td>
                        <td className="text-center py-6 border-l border-slate-50">{row.starter ? <div className="w-2.5 h-2.5 rounded-full bg-slate-200 mx-auto" /> : "-"}</td>
                        <td className="text-center py-6 border-l border-slate-50">{row.standard ? <div className="w-2.5 h-2.5 rounded-full bg-brand-primary/50 mx-auto" /> : "-"}</td>
                        <td className="text-center py-6 border-l border-brand-primary/10 bg-brand-primary/5">
                          {row.premium && (
                            <svg className="w-5 h-5 text-brand-teal mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trusted By Leading Institutions */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <h2 className="text-[40px] md:text-[50px] font-black text-center mb-4 text-brand-purple tracking-tighter">
              Trusted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Leading Institutions</span>
            </h2>
            <p className="text-lg text-slate-500 text-center mb-16 font-medium">
              Powering education across prestigious universities and academic centers.
            </p>
          </AnimatedSection>

          <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
            {[
              { src: '/Excellence_ Innovation/image1.png', w: 100, h: 100 },
              { src: '/Excellence_ Innovation/image2.png', w: 100, h: 100 },
              { src: '/Excellence_ Innovation/image3.png', w: 100, h: 100 },
              { src: '/Excellence_ Innovation/image4.png', w: 100, h: 100 },
              { src: '/Excellence_ Innovation/image5.png', w: 100, h: 100 },
              { src: '/Excellence_ Innovation/image6.png', w: 100, h: 100 },
              { src: '/Excellence_ Innovation/image7.png', w: 100, h: 100 },
              { src: '/Excellence_ Innovation/image8.png', w: 100, h: 100 },
              // { src: '/Excellence_ Innovation/image9.png', w: 100, h: 100 },
            ].map((inst, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, rotate: -2 }}
                className="opacity-100 hover:opacity-100 transition-all duration-500 transform cursor-pointer"
              >
                <Image
                  src={inst.src}
                  alt={`Partner ${i + 1}`}
                  width={inst.w}
                  height={inst.h}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Higher-Ed LMS Section - Cognitive Campus */}
      <section className="py-24 md:py-40 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.4em] text-brand-primary uppercase bg-brand-primary/5 rounded-full">
                  Adaptive Intelligence
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-brand-purple mb-8 tracking-tighter leading-[0.95]">
                  The Cognitive Campus <br />
                  <span className="text-brand-teal">LMS Reimagined</span>
                </h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-2xl">
                  Move beyond static repositories. Our LMS is a living ecosystem that adapts to every student's heartbeat,
                  aligning academic rigor with personalized professional goals.
                </p>

                <div className="space-y-6 max-w-2xl">
                  {[
                    {
                      title: "AI-Driven Learning Paths",
                      desc: "Analyzing student engagement metrics... Generating custom roadmap... Adjusting difficulty level based on sub-second interactions.",
                      icon: "🧠",
                      bot: true,
                      // anim: "path"
                    },
                    {
                      title: "Virtual Academic Tutorship",
                      desc: "I've analyzed your research paper. Would you like me to suggest three alternative methodologies for your thesis?",
                      icon: "🤖",
                      bot: true
                    },
                    {
                      title: "Strategic Career Mapping",
                      desc: "Cross-referencing global job market trends with your current academic credit score... Probability of success in AI Engineering: 94%.",
                      icon: "🎯",
                      bot: true
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-start gap-4"
                    >
                      {/* Bot Avatar */}
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                        <span className="text-lg">{item.icon}</span>
                      </div>

                      {/* Message Bubble */}
                      <div className="relative group">
                        <div className="p-6 rounded-2xl rounded-tl-none bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all max-w-md relative overflow-hidden">
                          {/* AI Scanning Beam for "AI-Driven" */}
                          {/* {item.anim === "path" && (
                            <motion.div
                              className="absolute top-0 left-0 w-full h-[2px] bg-brand-teal/30 z-0"
                              animate={{ top: ["0%", "100%", "0%"] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                          )} */}

                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">{item.title}</span>
                            <div className="w-1 h-1 rounded-full bg-brand-teal animate-ping" />
                          </div>

                          <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">
                            {item.desc}
                          </p>

                          {/* Typing Indicator if it was a real chat */}
                          <div className="mt-3 flex gap-1 opacity-40">
                            <div className="w-1 h-1 bg-brand-primary rounded-full animate-bounce" />
                            <div className="w-1 h-1 bg-brand-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                            <div className="w-1 h-1 bg-brand-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>

                        {/* Bubble Tail */}
                        <div className="absolute top-0 -left-2 w-2 h-4 bg-white border-l border-t border-slate-100 rotate-[15deg] hidden md:block" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Compliance Card - Secondary Style */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-10 p-6 rounded-[32px] bg-brand-purple/5 border border-brand-purple/10 flex items-center justify-between group cursor-help"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">🛡️</div>
                      <div>
                        <h4 className="text-sm font-black text-brand-purple uppercase tracking-widest mb-1">Legacy & Global Compliance</h4>
                        <p className="text-xs text-brand-purple/60 font-medium">Full SCORM 1.2/2004, xAPI, and LTI 1.3 Adaptive Core.</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-brand-purple/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="brand-purple" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[650px] w-full">
                {/* Main Dashboard Preview - Curiosity Trigger */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="absolute top-0 right-0 w-[85%] aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-20 group"
                >
                  <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&fit=crop" alt="LMS Dashboard" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-purple/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </motion.div>

                {/* Mobile Learning Insight */}
                <motion.div
                  initial={{ opacity: 0, x: -40, y: 100 }}
                  whileInView={{ opacity: 1, x: 0, y: 80 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-0 w-[45%] aspect-[9/16] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white z-30"
                >
                  <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&fit=crop" alt="Mobile Learning" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[8px] font-black text-white uppercase tracking-widest opacity-60">Mobile First</p>
                    <p className="text-[10px] font-bold text-white">Anywhere Access</p>
                  </div>
                </motion.div>

                {/* Social/Collaborative Element */}
                <motion.div
                  initial={{ opacity: 0, x: 60, y: 300 }}
                  whileInView={{ opacity: 1, x: 0, y: 280 }}
                  transition={{ delay: 0.4 }}
                  className="absolute right-0 w-[60%] aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-10"
                >
                  <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&fit=crop" alt="Collaborative Learning" fill className="object-cover" />
                </motion.div>

                {/* Testimonial Badge - Floating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-8 -right-8 z-40 p-6 rounded-[32px] bg-white shadow-2xl border border-slate-100 max-w-[280px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-[10px] font-black text-white ring-4 ring-brand-teal/10">MA</div>
                    <p className="text-[10px] font-black text-brand-purple uppercase tracking-widest">Student Voice</p>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    "The AI predicted my struggle with Calculus and suggested a prep module that saved my grades."
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Technical Ecosystem Section */}
      {/* <section className="py-24 md:py-40 bg-brand-purple relative overflow-hidden">

        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-brand-primary/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-teal/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-24">
            <AnimatedSection>
              <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-white uppercase bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                Enterprise Infrastructure
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Ecosystem.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto font-medium leading-relaxed">
                A high-precision modular architecture engineered for global educational standards,
                scalable to millions of users with zero-compromise security.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Deployment",
                icon: "M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z",
                items: ["On-Premise Private", "Cloud Native", "Hybrid Sync"],
                color: "brand-primary"
              },
              {
                title: "Environment",
                icon: "M11 7h-2v1h2V7zm-2 4h2v1H9v-1zM20 1H4C2.9 1 2 1.9 2 3v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM4 21V3h16v18H4z",
                items: ["Industrial Linux", "Windows Server", "Dockerized Core"],
                color: "brand-teal"
              },
              {
                title: "Data Layer",
                icon: "M12 2C6.48 2 2 4.69 2 8s4.48 6 10 6 10-2.69 10-6-4.48-6-10-6zm0 10c-4.42 0-8-1.79-8-4s3.58-4 8-4 8 1.79 8 4-3.58 4-8 4zM2 12c0 3.31 4.48 6 10 6s10-2.69 10-6v-2c0 3.31-4.48 6-10 6s-10-2.69-10-6v2zm0 4c0 3.31 4.48 6 10 6s10-2.69 10-6v-2c0 3.31-4.48 6-10 6s-10-2.69-10-6v2z",
                items: ["Oracle 19c+", "MySQL 8.0+", "PostgreSQL 15+"],
                color: "brand-primary"
              },
              {
                title: "Security",
                icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
                items: ["SAML 2.0 Auth", "AES-256 Crypto", "Real-time WAF"],
                color: "brand-teal"
              }
            ].map((pillar, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.1}
                className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d={pillar.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-black text-white mb-6 uppercase tracking-widest">{pillar.title}</h4>
                <div className="space-y-4">
                  {pillar.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/40 group-hover:text-white/70 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section> */}

      {/* Global CTA - REDESIGNED for Higher Education Excellence */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

            {/* Right Side (Moving to Left for variety): University Collage */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative w-full aspect-square max-w-[700px] mx-auto">
                {/* 1. Large Center Heritage - The Foundation */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute inset-[20%] z-20 rounded-[80px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[16px] border-white group"
                >
                  <Image src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&fit=crop" alt="Campus Heritage" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>

                {/* 2. Top Left: Innovation & Research */}
                <motion.div
                  initial={{ opacity: 0, x: -100, rotate: -15 }}
                  whileInView={{ opacity: 1, x: -40, y: -20, rotate: -8 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-[5%] left-0 w-[45%] aspect-video z-30 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group"
                >
                  <Image src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&fit=crop" alt="Research Lab" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>

                {/* 3. Bottom Right: Student Hub & Culture */}
                <motion.div
                  initial={{ opacity: 0, x: 100, rotate: 15 }}
                  whileInView={{ opacity: 1, x: 40, y: 20, rotate: 8 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-[5%] right-0 w-[50%] aspect-video z-30 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group"
                >
                  <Image src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&fit=crop" alt="Campus Life" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </motion.div>

                {/* 4. Top Right: The Library (Focus) */}
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: -50 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-0 right-[10%] w-[35%] aspect-square z-10 rounded-[40px] overflow-hidden shadow-xl border-8 border-white group"
                >
                  <Image src="https://images.unsplash.com/photo-1497633762265-9a177c809852?w=600&fit=crop" alt="Library" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                </motion.div>

                {/* 5. Bottom Left: Graduation (The Result) */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 50 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-0 left-[10%] w-[35%] aspect-square z-10 rounded-[40px] overflow-hidden shadow-xl border-8 border-white group"
                >
                  <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&fit=crop" alt="Graduation" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                </motion.div>

                {/* 6. Precision Floating Data Card - Lucrative UX Element */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-[5%] z-50 p-6 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-3 h-3 rounded-full bg-brand-teal animate-pulse" />
                    <p className="text-[10px] font-black text-brand-purple uppercase tracking-[0.2em]">Live Intelligence</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-32 bg-brand-purple/10 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-brand-purple" />
                    </div>
                    <div className="h-2 w-24 bg-brand-teal/10 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-brand-teal" />
                    </div>
                  </div>
                </motion.div>

                {/* Lush Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/20 blur-[140px] -z-10 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 text-center lg:text-left order-1 lg:order-2">
              <AnimatedSection>
                <div className="inline-block px-5 py-2 mb-8 text-[11px] font-black tracking-[0.5em] text-brand-purple uppercase border border-brand-purple/20 bg-brand-purple/5 rounded-full">
                  Institutional Transformation
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-brand-purple mb-10 tracking-tighter leading-[0.9]">
                  Redefining Institutional <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-teal to-blue-500">Excellence</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-500 font-medium mb-16 leading-relaxed">
                  Join the world's most innovative universities in redefining what's possible
                  with a unified, data-driven academic core.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="px-12 py-6 bg-brand-purple text-white rounded-3xl font-black uppercase text-xs tracking-[0.3em] hover:bg-brand-primary transition-all shadow-[0_30px_60px_-15px_rgba(50,0,112,0.4)] group flex items-center justify-center gap-4"
                  >
                    Initiate Demo
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-2 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="px-12 py-6 border-2 border-slate-100 text-brand-purple rounded-3xl font-black uppercase text-xs tracking-[0.3em] hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center"
                  >
                    Consult Our Team
                  </Link>
                </div>

                {/* Trust Metrics */}
                <div className="mt-20 flex flex-wrap gap-12 justify-center lg:justify-start">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Global Impact</p>
                    <p className="text-2xl font-black text-brand-purple tracking-tighter">40+ Institutions</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Uptime Core</p>
                    <p className="text-2xl font-black text-brand-teal tracking-tighter">99.99% SLA</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
