"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

// Stats data - easily replaceable with CMS data
const statsData = {
  title: "Built for Scale. Trusted for Impact",
  cards: [
    {
      id: 1,
      type: 'image-card',
      stat: '2,800',
      label: 'Customers',
      image: '/students-working.jpg',
      position: { gridColumn: '1 / 3', gridRow: '1 / 3' }
    },
    {
      id: 2,
      type: 'colored-text',
      stat: '200K+',
      label: 'students',
      color: 'var(--brand-primary)',
      labelColor: 'var(--brand-purple)',
      position: { gridColumn: '1 / 2', gridRow: '3 / 4' }
    },
    {
      id: 3,
      type: 'solid-bg',
      stat: '100+',
      label: 'modules',
      bgColor: 'var(--brand-teal)',
      position: { gridColumn: '2 / 3', gridRow: '3 / 5' }
    },
    {
      id: 4,
      type: 'colored-text',
      stat: '54+',
      label: 'Legacy Built',
      color: 'var(--brand-primary)',
      labelColor: 'var(--brand-purple)',
      position: { gridColumn: '3 / 4', gridRow: '1 / 2' }
    },
    {
      id: 5,
      type: 'solid-bg',
      stat: '100K+',
      label: 'Global Impact',
      bgColor: 'var(--brand-primary)',
      position: { gridColumn: '4 / 6', gridRow: '1 / 3' }
    },
    {
      id: 6,
      type: 'image-card',
      stat: '26+',
      label: 'years of education development ',
      image: '/success-looks-like.jpg',
      position: { gridColumn: '3 / 6', gridRow: '2 / 5' }
    }
  ]
};

export default function WhyEduvasPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Executive Ready, Student First Technology",
      content: "Our AI-powered platform delivers predictive insights, automation, and personalized experiences that keep institutions ahead of the curve. Built on the richest dataset in higher education.",
      image: "/images/team-member-1.jpg"
    },
    {
      title: "Proven Success Metrics",
      content: "We track and deliver measurable results. From enrollment growth to student retention, our solutions are designed to hit your institutional KPIs and drive long-term success.",
      image: "/images/team-member-2.jpg"
    },
    {
      title: "Collaborative Change Strategy",
      content: "Innovation isn't just about software; it's about people. We work alongside your team to ensure smooth transitions, high adoption rates, and a culture of continuous improvement.",
      image: "/images/student-backpack.jpg"
    }
  ];

  const awards = [
    { name: "Award 1", logo: "/images/institutions/diit.png" },
    { name: "Award 2", logo: "/images/institutions/daffodil-college.png" },
    { name: "Award 3", logo: "/images/institutions/daffodil-school.png" },
    { name: "Award 4", logo: "/images/institutions/diit.png" },
    { name: "Award 5", logo: "/images/institutions/daffodil-college.png" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#f2f8f7] to-[#fdfbf7]">
          {/* Abstract Background Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <AnimatedSection animation="slideInRight" className="flex-1 max-w-2xl order-2 lg:order-1">
                <nav className="flex items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-brand-purple/40">
                  <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
                  <span>/</span>
                  <span className="text-brand-primary">Why Eduvas</span>
                </nav>

                {/* <h1 className="text-brand-primary font-montserrat text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-4">
                  Powering education through one platform
                </h1> */}

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-brand-purple mb-8 tracking-tighter">
                  Powering education through <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">one platform</span>
                </h2>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl font-medium">
                  With unmatched expertise and purpose-built solutions, Eduvas empowers institutions to navigate change, drive measurable results, and support learners for life.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    href="/contact"
                    className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-brand-primary text-white rounded-2xl font-montserrat text-sm font-black uppercase tracking-widest transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,102,179,0.3)] hover:-translate-y-1"
                  >
                    <span className="relative z-10">Request a Demo</span>
                    <div className="relative z-10 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-brand-teal transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideInLeft" className="flex-1 relative order-1 lg:order-2">
                <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-teal/10 rounded-full blur-3xl animate-pulse" />
                  <Image
                    src="/images/student-hero.png"
                    alt="Higher Education Innovation"
                    fill
                    className="object-contain relative z-10"
                    priority
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Institutions Section - Refined Slider */}
        <section className="py-16 bg-white border-y border-black/5 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6">
            <AnimatedSection>
              <p className="text-center text-brand-purple/30 font-black mb-12 uppercase tracking-[0.4em] text-[10px]">
                Moving Higher Education Forward Together
              </p>
              <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="opacity-80  hover:opacity-100 hover:grayscale-0 transition-all duration-200"
                  >
                    <Image
                      src={`/images/institutions/inst-${i}.png`}
                      alt={`Partner Institution ${i}`}
                      width={120}
                      height={60}
                      className="h-8 md:h-12 w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Purpose-Built Section - Grid Refinement */}
        <section className="py-24 md:py-32 bg-[#fdfbf7]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <AnimatedSection>
              <p className="text-brand-teal font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4">The Methodology</p>
              <h2 className="text-4xl md:text-6xl font-black text-brand-purple tracking-tighter leading-tight mb-20 max-w-3xl">
                Precision Engineered for <br /><span className="text-brand-primary italic">Institutional Velocity</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  title: "Putting Students First",
                  desc: "Student experience isn't a feature — it's the foundation. Eduvas' approach ensures your technology puts learners at the center, because student success drives institutional success.",
                  icon: "people-user.svg",
                  color: "brand-primary"
                },
                {
                  title: "Advanced AI-Driven Ecosystem",
                  desc: "Built on the richest dataset in higher education, our AI-powered platform delivers predictive insights, automation, and personalized experiences that keep institutions ahead.",
                  icon: "lightbulb.svg",
                  color: "brand-teal"
                },
                {
                  title: "Higher Ed Specificity",
                  desc: "Eduvas understands the unique structures, systems, and challenges institutions face. Our solutions are made to simplify the complex and adapt to how education works.",
                  icon: "tools.svg",
                  color: "brand-purple"
                },
                {
                  title: "Infinite Scalability",
                  desc: "With over $1B invested in SaaS R&D, Eduvas is constantly evolving to meet the future of higher education. We deliver faster, smarter, and more impactful solutions every day.",
                  icon: "scalable-icon.svg",
                  color: "brand-action"
                }
              ].map((item, idx) => (
                <AnimatedCard key={idx} delay={idx * 0.1} className="group relative p-8 md:p-12 bg-white rounded-3xl border border-black/5 hover:border-brand-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className={`w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-primary transition-all duration-500`}>
                    <Image src={`/icons/${item.icon}`} alt="" width={32} height={32} className="group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-purple mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-base text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Grid Section - Premium Card Overhaul */}
        <section className="py-20 md:py-24 relative overflow-hidden bg-[#fdfbf7]">
          {/* Animated background shapes */}
          <motion.div
            className="absolute top-20 right-20 w-48 md:w-64 h-48 md:h-64 bg-brand-primary/5 rounded-full blur-3xl opacity-40"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-48 md:w-64 h-48 md:h-64 bg-brand-teal/5 rounded-full blur-3xl opacity-40"
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[120px] 2xl:px-[250px] relative z-10">
            <AnimatedSection animation="slideUp">
              <h2 className="text-center bg-gradient-to-r from-brand-action to-brand-teal bg-clip-text text-transparent font-montserrat text-[36px] md:text-[50px] font-bold mb-12">
                {statsData.title}
              </h2>
            </AnimatedSection>

            {/* Picjumbo Masonry Grid Layout - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {statsData.cards.map((card, index) => {
                // Image card with overlay
                if (card.type === 'image-card' && card.image) {
                  return (
                    <AnimatedCard
                      key={card.id}
                      delay={index * 0.1}
                      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow min-h-[250px] lg:min-h-0"
                      style={{
                        gridColumn: mounted && window.innerWidth >= 1024 ? card.position.gridColumn : 'span 1',
                        gridRow: mounted && window.innerWidth >= 1024 ? card.position.gridRow : 'span 1'
                      }}
                    >
                      <Image src={card.image} alt={card.label} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 text-white">
                        <p className="font-montserrat text-4xl md:text-[80px] font-semibold tracking-tighter leading-none mb-2 md:mb-4">
                          {card.stat}
                        </p>
                        <p className="font-inter text-sm md:text-xl tracking-tight opacity-80">{card.label}</p>
                      </div>
                    </AnimatedCard>
                  );
                }

                // Solid background card
                if (card.type === 'solid-bg') {
                  return (
                    <AnimatedCard
                      key={card.id}
                      delay={index * 0.1}
                      style={{
                        backgroundColor: card.bgColor,
                        gridColumn: mounted && window.innerWidth >= 1024 ? card.position.gridColumn : 'span 1',
                        gridRow: mounted && window.innerWidth >= 1024 ? card.position.gridRow : 'span 1'
                      }}
                      className="rounded-2xl flex flex-col justify-center px-8 md:px-10 shadow-lg hover:shadow-2xl h-[200px] lg:h-auto"
                    >
                      <p className="text-white font-montserrat text-4xl md:text-[80px] font-semibold tracking-tighter leading-none mb-2 md:mb-4">
                        {card.stat}
                      </p>
                      <p className="text-white font-inter text-sm md:text-xl tracking-tight opacity-80">{card.label}</p>
                    </AnimatedCard>
                  );
                }

                // Colored text card (no background)
                if (card.type === 'colored-text') {
                  return (
                    <div
                      key={card.id}
                      className="flex flex-col justify-center p-8 md:p-10"
                      style={{
                        gridColumn: mounted && window.innerWidth >= 1024 ? card.position.gridColumn : 'span 1',
                        gridRow: mounted && window.innerWidth >= 1024 ? card.position.gridRow : 'span 1'
                      }}
                    >
                      <p
                        className="font-montserrat text-4xl md:text-[80px] font-semibold tracking-tighter leading-none mb-2 md:mb-4"
                        style={{ color: card.color }}
                      >
                        {card.stat}
                      </p>
                      <p className="font-inter text-sm md:text-xl tracking-tight" style={{ color: card.labelColor }}>
                        {card.label}
                      </p>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </section>

        {/* Platform Diagram Section - Glassmorphism Enhancement */}
        <section className="py-24 md:py-40 bg-[#fdfbf7] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(35,167,166,0.05),transparent)] pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
            <AnimatedSection className="text-center mb-24 max-w-3xl">
              <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em] mb-6">The Unified Core</p>
              <h2 className="text-4xl md:text-6xl font-black text-brand-purple mb-8 tracking-tighter leading-[1.1]">
                The All-in-One Platform for <span className="text-brand-teal">Higher Education</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                From recruitment to retirement, our integrated ecosystem supports every stage of the student and faculty lifecycle.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale" className="relative w-full aspect-[16/9] max-w-6xl bg-white rounded-[50px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-white/50 backdrop-blur-sm group">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/10 to-brand-teal/10 rounded-[60px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/images/ecosystem-diagram.png"
                alt="Eduvas Unified Ecosystem Diagram"
                fill
                className="object-contain p-8 md:p-12 relative z-10"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* Tabs Section - Interactive Refinement */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <AnimatedSection>
              <h2 className="text-center text-4xl md:text-6xl font-black text-brand-purple mb-24 tracking-tighter">
                What Sets <span className="text-brand-primary">Eduvas Apart</span>
              </h2>
            </AnimatedSection>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              <div className="w-full lg:w-[400px] flex flex-col gap-4">
                {tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`text-left p-8 rounded-3xl transition-all duration-500 border-2 relative overflow-hidden group ${activeTab === idx
                      ? "bg-white border-brand-primary shadow-2xl -translate-y-1"
                      : "bg-slate-50 border-transparent text-slate-500 hover:bg-slate-100"
                      }`}
                  >
                    {activeTab === idx && (
                      <motion.div layoutId="tabMarker" className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-brand-primary rounded-r-full" />
                    )}
                    <h4 className={`text-xl font-black transition-colors ${activeTab === idx ? "text-brand-purple" : "text-slate-400 group-hover:text-slate-600"}`}>
                      {tab.title}
                    </h4>
                  </button>
                ))}
              </div>

              <div className="flex-1 bg-[#f2f8f7] rounded-[50px] p-10 md:p-20 shadow-inner relative overflow-hidden border border-brand-teal/10 min-h-[600px] flex items-center">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full"
                  >
                    <div className="space-y-8">
                      <p className="text-2xl text-slate-600 font-medium leading-relaxed">
                        {tabs[activeTab].content}
                      </p>
                      <Link href="/contact" className="inline-flex items-center gap-4 bg-brand-primary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-purple hover:shadow-xl transition-all group/btn">
                        Learn More
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                    <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                      <Image
                        src={tabs[activeTab].image}
                        alt={tabs[activeTab].title}
                        fill
                        className="object-cover transition-transform duration-1000 hover:scale-110"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section - Cinema Refinement */}
        <section className="relative h-[700px] flex items-center overflow-hidden">
          <Image src="/images/university/discover-impact-bg.svg" alt="Visionary Education" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-purple/80 to-transparent" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
            <AnimatedSection className="max-w-2xl">
              <p className=" font-black text-xs uppercase tracking-[0.5em] mb-6 text-white">Our Vision</p>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95] mb-10 tracking-tighter">
                Where Innovation <br />Meets <span className=" italic">Results</span>
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-xl">
                We don't just provide software; we provide a vision for the future of higher education. Join the movement towards a smarter, more connected campus.
              </p>
              <button className="flex items-center gap-6 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 rounded-3xl bg-brand-teal text-white flex items-center justify-center shadow-[0_20px_40px_-5px_rgba(35,167,166,0.3)] transition-all"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 3l14 9-14 9V3z" /></svg>
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-1">Executive Session</span>
                  <span className="text-lg font-black text-white uppercase tracking-widest">Watch Our Story</span>
                </div>
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* Awards Section - Refined Grid */}
        <section className="py-24 bg-[#fdfbf7]">
          <div className="max-w-[1440px] mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-center text-2xl md:text-3xl font-black text-brand-purple mb-20 tracking-tight">
                Recognized for <span className="text-brand-primary">Excellence</span> and Digital Innovation
              </h2>
            </AnimatedSection>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
              {awards.map((award, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="opacity-80 hover:opacity-100 transition-all duration-500  hover:grayscale-0 scale-90 hover:scale-110">
                    <Image src={award.logo} alt={award.name} width={140} height={70} className="h-10 md:h-12 w-auto object-contain" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Modern Service Cards */}
        <section className="py-24 md:py-40 bg-white relative">
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-black/5 to-transparent" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <AnimatedSection>
              <p className="text-center text-brand-teal font-black text-xs uppercase tracking-[0.5em] mb-6">Partnership Ecosystem</p>
              <h2 className="text-center text-4xl md:text-6xl font-black text-brand-purple mb-24 tracking-tighter leading-tight">
                Architecting Success Through <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Deep Domain Expertise</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Professional Services",
                  desc: "Strategic consulting and high-impact implementation to align technology with your institutional legacy.",
                  icon: "people-group.svg"
                },
                {
                  title: "Foundation Services",
                  desc: "The mission-critical infrastructure and elite support needed to sustain peak system performance.",
                  icon: "tools.svg"
                },
                {
                  title: "Managed Systems",
                  desc: "Expert daily operations management, allowing your leadership to focus on academic and faculty growth.",
                  icon: "scalable-icon.svg"
                }
              ].map((service, idx) => (
                <AnimatedCard key={idx} delay={idx * 0.1} className="relative bg-white p-12 rounded-[50px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col items-center text-center group border border-slate-100 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-brand-primary group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-brand-primary/20">
                    <Image src={`/icons/${service.icon}`} alt={service.title} width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-purple mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 font-medium mb-10 leading-relaxed text-sm">{service.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-3 text-brand-primary font-black uppercase tracking-[0.2em] text-[10px] py-4 px-10 border-2 border-brand-primary/10 rounded-full hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all group/btn">
                    Explore Vertical
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - Premium Modal Style */}
        <section className="py-24 md:py-40 bg-[#fdfbf7]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <AnimatedSection className="relative bg-brand-purple rounded-[60px] md:rounded-[80px] p-12 md:p-32 text-white text-center overflow-hidden shadow-[0_50px_100px_-20px_rgba(50,0,112,0.3)]">
              <Image src="/images/university/lets-talk-bg.svg" alt="" fill className="object-cover opacity-10 pointer-events-none scale-110" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(35,167,166,0.3),transparent)] pointer-events-none" />

              <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                  Ready to <span className="">Architect</span> Your Legacy?
                </h2>
                <p className="text-xl md:text-2xl opacity-70 max-w-2xl mx-auto font-medium leading-relaxed">
                  Our strategic architects are prepared to align our ecosystem with your institutional goals for permanent impact.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-12 py-6 bg-brand-teal text-white rounded-2xl font-montserrat font-black uppercase tracking-widest text-sm hover:shadow-[0_20px_40px_-10px_rgba(35,167,166,0.5)] transition-all hover:-translate-y-1"
                  >
                    Initiate Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-12 py-6 border-2 border-white/20 text-white rounded-2xl font-montserrat font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all hover:-translate-y-1"
                  >
                    Consult Our Team
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

