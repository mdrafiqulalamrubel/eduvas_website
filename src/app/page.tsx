'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

// Stats data - easily replaceable with CMS data
const statsData = {
  title: "Built for Scale. Trusted for Impact",
  cards: [
    {
      id: 2,
      type: 'colored-text',
      stat: '200K+',
      label: 'students',
      color: 'var(--brand-primary)',
      labelColor: 'var(--brand-purple)',
      position: { gridColumn: '1 / 3', gridRow: '1 / 2' }
    },
    {
      id: 3,
      type: 'solid-bg',
      stat: '100+',
      label: 'modules',
      bgColor: 'var(--brand-teal)',
      position: { gridColumn: '3 / 5', gridRow: '1 / 2' }
    },
    {
      id: 4,
      type: 'colored-text',
      stat: '54+',
      label: 'Legacy Built',
      color: 'var(--brand-primary)',
      labelColor: 'var(--brand-purple)',
      position: { gridColumn: '5 / 7', gridRow: '1 / 2' }
    },
    {
      id: 5,
      type: 'solid-bg',
      stat: '100K+',
      label: 'Global Impact',
      bgColor: 'var(--brand-primary)',
      position: { gridColumn: '1 / 3', gridRow: '2 / 3' }
    },
    {
      id: 6,
      type: 'image-card',
      stat: '26+',
      label: 'years of education development ',
      image: '/success-looks-like.jpg',
      position: { gridColumn: '3 / 7', gridRow: '2 / 8' }
    }
  ]
};

// Products/Solutions data - CMS-ready
const productsData = [
  {
    id: 'university',
    name: 'Eduvas University',
    subtitle: 'Enterprise Higher Ed ERP',
    slug: 'products/university',
    image: '/landing_page/Eduvas_University_Core.png',
    features: ['Student Lifecycle', 'Unified Finance', 'Smart Examination', 'Research Hub'],
    description: 'A comprehensive university ERP managing the full student lifecycle, academics, examinations, finance, research, hostel, HR, inventory, and analytics in a single integrated system.',
    color: 'var(--brand-action)'
  },
  {
    id: 'school',
    name: 'Eduvas School',
    subtitle: 'Modern K-12 Management',
    slug: 'products/schools',
    image: '/dashboard-screenshot.png',
    features: ['Digital Gradebook', 'Parent Portal', 'Attendance AI', 'Admissions CRM'],
    description: 'Complete school management system designed for K-12 education, handling admissions, attendance, gradebook, parent communication, and administrative operations seamlessly.',
    color: 'var(--brand-teal)'
  },
  {
    id: 'institute',
    name: 'Eduvas Institute',
    subtitle: 'Skills & Training Core',
    slug: 'products/institute',
    image: '/dashboard-screenshot.png',
    features: ['Course Management', 'Certification', 'Schedule Sync', 'Revenue Analytics'],
    description: 'Specialized solution for training institutes and vocational centers, managing courses, certifications, instructor scheduling, and student progress tracking efficiently.',
    color: 'var(--brand-purple)'
  },
];

export default function Home() {
  // Education Tabs Data with Interactive Hotspots
  const educationTabs = [
    {
      id: 0,
      subtitle: "Institution-Trusted",
      title: "Education-Focused",
      description: "Eduvas is built exclusively for education serving universities, schools, colleges, training institutes, and education groups through one unified ecosystem. Our platform is actively deployed across 40+ real-world educational organizations, ensuring stability, trust, and proven performance at scale.",
      image: "/dashboard-carousel.svg",
      hotspots: [
        { x: "22%", y: "35%", label: "Student Lifecycle Management", detail: "Track admission to graduation" },
        { x: "65%", y: "45%", label: "Curriculum Planning", detail: "Dynamic course mapping" }
      ]
    },
    // {
    //   id: 1,
    //   subtitle: "",
    //   title: "Student-Centered by Design",
    //   description: "Student success is not treated as a module it is embedded across the ecosystem. From first inquiry to academic progression and lifelong engagement, Eduvas enables institutions to deliver consistent, supportive, and personalized learner experiences across the entire education lifecycle.",
    //   image: "/dashboard-carousel.svg",
    //   hotspots: [
    //     { x: "22%", y: "35%", label: "Student Lifecycle Management", detail: "Track admission to graduation" },
    //     { x: "65%", y: "45%", label: "Curriculum Planning", detail: "Dynamic course mapping" }
    //   ]
    // },
    // {
    //   id: 2,
    //   subtitle: "",
    //   title: "One Ecosystem. Every Stage of Education.",
    //   description: "Eduvas eliminates fragmentation by unifying admissions, academics, finance, operations, learning, and analytics into one modular platform. Institutions can start small and scale seamlessly from a single classroom to a multi-institution education group without changing systems.",
    //   image: "/dashboard-carousel.svg",
    //   hotspots: [
    //     { x: "22%", y: "35%", label: "Student Lifecycle Management", detail: "Track admission to graduation" },
    //     { x: "65%", y: "45%", label: "Curriculum Planning", detail: "Dynamic course mapping" }
    //   ]
    // },
    {
      id: 1,
      subtitle: "Data-Driven strategy",
      title: "AI Enabled Analytics",
      description: "Eduvas transforms institutional data into actionable insight. Through integrated analytics and AI-enabled capabilities, leaders gain visibility into performance, trends, and outcomes supporting proactive decisions that improve efficiency, retention, and institutional growth.",
      image: "/dashboard-carousel.svg",
      hotspots: [
        { x: "22%", y: "35%", label: "Student Lifecycle Management", detail: "Track admission to graduation" },
        { x: "65%", y: "45%", label: "Curriculum Planning", detail: "Dynamic course mapping" }
      ]
    },
    // {
    //   id: 4,
    //   subtitle: "",
    //   title: "Purpose-Built for Growth and Stability",
    //   description: "Designed with enterprise-grade reliability, Eduvas supports continuous growth without disruption. Its modular, micro-to-macro architecture ensures institutions can adapt, expand, and innovate while maintaining operational clarity and long-term system stability",
    //   image: "/dashboard-carousel.svg",
    //   hotspots: [
    //     { x: "22%", y: "35%", label: "Student Lifecycle Management", detail: "Track admission to graduation" },
    //     { x: "65%", y: "45%", label: "Curriculum Planning", detail: "Dynamic course mapping" }
    //   ]
    // },
    {
      id: 2,
      subtitle: "Backed by Expertise",
      title: "Ensured ROI",
      description: "Eduvas is supported by structured Success Services including consultation, implementation, integration, migration, customization, and managed services. This ensures institutions achieve faster time-to-value, reduced operational risk, and sustained success beyond deployment.",
      image: "/dashboard-carousel.svg",
      hotspots: [
        { x: "22%", y: "35%", label: "Student Lifecycle Management", detail: "Track admission to graduation" },
        { x: "65%", y: "45%", label: "Curriculum Planning", detail: "Dynamic course mapping" }
      ]
    },
    // {
    //   id: 0,
    //   subtitle: "Institution-Trusted",
    //   title: "Education-Focused",
    //   description: "Eduvas is built exclusively for education serving universities, schools, colleges, training institutes, and education groups through one unified ecosystem. Our platform is actively deployed across 40+ real-world educational organizations, ensuring stability, trust, and proven performance at scale.",
    //   image: "/dashboard-carousel.svg",
    //   hotspots: [
    //     { x: "22%", y: "35%", label: "Student Lifecycle Management", detail: "Track admission to graduation" },
    //     { x: "65%", y: "45%", label: "Curriculum Planning", detail: "Dynamic course mapping" }
    //   ]
    // },
    // {
    //   id: 1,
    //   subtitle: "Data-Driven Strategy",
    //   title: "Unified Analytics",
    //   description: "Harness the power of real-time insights. Our integrated analytics suite provides a 360-degree view of institutional performance, student success metrics, and financial health, enabling smarter, faster decisions for leadership.",
    //   image: "/dashboard-preview.svg",
    //   hotspots: [
    //     { x: "15%", y: "25%", label: "Financial ROI", detail: "Real-time revenue tracking" },
    //     { x: "78%", y: "55%", label: "Success Predictive", detail: "AI-driven student outcomes" }
    //   ]
    // },
    // {
    //   id: 2,
    //   subtitle: "Zero-Compromise Security",
    //   title: "Technical Ecosystem",
    //   description: "A robust, enterprise-grade architecture built for unlimited scalability. Whether on-premise or in the cloud, Eduvas adapts to your infrastructure, security policies, and growing institutional needs across the globe.",
    //   image: "/landing_page/Technical_Ecosystem.png",
    //   hotspots: [
    //     { x: "45%", y: "65%", label: "Identity Vault", detail: "SAML 2.0 / SSO Secure Access" },
    //     { x: "32%", y: "15%", label: "Scalable Infrastructure", detail: "Multi-tenant cloud core" }
    //   ]
    // }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextTab = () => setActiveTab((prev) => (prev + 1) % educationTabs.length);
  const prevTab = () => setActiveTab((prev) => (prev - 1 + educationTabs.length) % educationTabs.length);

  // Auto-play Logic
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextTab, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentTab = educationTabs[activeTab];
  const lastTab = educationTabs[(activeTab - 1 + educationTabs.length) % educationTabs.length];
  const nextTabInfo = educationTabs[(activeTab + 1) % educationTabs.length];

  const [activeProduct, setActiveProduct] = useState('university');
  const currentProduct = productsData.find(p => p.id === activeProduct) || productsData[0];

  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [hoveredIntegration, setHoveredIntegration] = useState<number | null>(null);

  // Handle return from journey pages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('journey') === 'open') {
        setIsJourneyModalOpen(true);
        // Clean up the URL to avoid re-opening on manual refreshes
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, []);

  // Journey Options
  const journeyOptions = [
    { id: 'university', title: 'University', icon: '🏛️', color: 'var(--brand-action)', viewers: '1.2k', path: '/experience/university' },
    { id: 'school', title: 'School', icon: '🏫', color: 'var(--brand-teal)', viewers: '850', path: '/experience/schools' },
    { id: 'institute', title: 'Institute', icon: '🏢', color: 'var(--brand-purple)', viewers: '420', path: '/experience/institute' }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header provided by layout.tsx; no duplicate nav here */}

      {/* Hero Section: The Liquid Intelligence Hub (Light Mode Evolution) */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden bg-transparent">
        {/* Dynamic Branded Background: Superlight Teal & Creamy Mist */}
        <div className="absolute inset-0 z-0">
          {/* Base: Superlight Secondary Mixture */}
          <div className="absolute inset-0 bg-transparent" />
          <div className="absolute inset-0 bg-transparent" />

          {/* Soft Brand Teal Glows (Distant & Subtle) */}
          <motion.div
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-brand-teal/5 rounded-full blur-[160px]"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[0%] -left-[10%] w-[60%] h-[60%] bg-brand-primary/5 rounded-full blur-[140px]"
            animate={{
              scale: [1.1, 1, 1.1],
              x: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Interactive Micro-Grid (Softened for Light Mode) */}
          <div className="absolute inset-0 opacity-[0.2] md:opacity-[0.4]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-teal) 0.5px, transparent 0)`,
              backgroundSize: '48px 48px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[120px] 2xl:px-[250px] w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            {/* Left Content: The Intellectual Narrative */}
            <div className="lg:col-span-6 2xl:col-span-5 relative text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
              >
                <div className="relative inline-block mb-8 md:mb-12">
                  {/* Purple Glowing Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-brand-purple/20 blur-2xl rounded-full"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="relative flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white border border-brand-purple/10 shadow-sm z-10 mx-auto lg:mx-0"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex -space-x-2">
                      <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-brand-purple"></span>
                      </span>
                    </div>
                    <span className="text-[8px] md:text-[10px] font-black text-brand-purple uppercase tracking-[0.4em]">The Educational Core</span>
                  </motion.div>
                </div>

                <h1 className="text-brand-purple font-montserrat text-[64px]  font-black leading-[1.1] md:leading-[0.95] tracking-tighter mb-6 md:mb-8">
                  All Education,<br/> One Ecosystem
                </h1>
                <h2 className="text-brand-teal font-montserrat text-[30px]  font-black leading-[1.1] md:leading-[0.95] tracking-tighter mb-6 md:mb-10">
                  Powering education through one platform
                </h2>

                <p className="text-[#475569] font-inter text-sm md:text-xl lg:text-2xl leading-relaxed mb-10 md:mb-16 max-w-[540px] font-medium opacity-80 mx-auto lg:mx-0">
                  Eduvas is an AI-driven, integrated education platform built to automate and manage the complete operations of
                  universities, schools, professional institutes, and e-learning organizations worldwide. Designed for scale and
                  flexibility, Eduvas seamlessly supports institutions ranging from a single classroom to large, multi-campus
                  global education groups.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center lg:items-center justify-center lg:justify-start">
                  <div className="relative group w-full sm:w-auto">
                    {/* Purple Button Glow */}
                    <motion.div
                      className="absolute inset-0 bg-brand-purple/30 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.button
                      className="relative z-10 w-full sm:w-auto px-8 md:px-12 py-5 md:py-7 bg-brand-action text-white rounded-2xl md:rounded-3xl font-montserrat text-sm md:text-[17px] font-black tracking-widest uppercase overflow-hidden shadow-[0_30px_60px_-15px_rgba(42,117,212,0.3)] transition-all"
                      whileHover={{ y: -8, scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-action opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10">Request a DEMO</span>
                    </motion.button>
                  </div>

                  {/* <div className="relative group w-full sm:w-auto">
                    <motion.button
                      className="relative z-10 flex items-center justify-center gap-4 w-full sm:w-auto text-brand-purple font-montserrat text-sm md:text-[15px] font-black tracking-[0.2em] uppercase hover:text-brand-primary transition-all transform hover:translate-x-3"
                    >
                      The Roadmap
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-brand-purple/20 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple/5 transition-all">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      </div>
                    </motion.button>
                   
                    <motion.div
                      className="absolute -inset-4 bg-brand-purple/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div> */}
                </div>
              </motion.div>

              {/* Innovative Feature: The Neural Connection Line (Refined for Light Mode) */}
              <div className="absolute top-1/2 -right-32 bottom-0 w-[400px] pointer-events-none hidden xl:block">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                  <motion.path
                    d="M0 200 C 150 200, 250 50, 400 50"
                    stroke="url(#lineGradLight)"
                    strokeWidth="2"
                    strokeDasharray="8 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="lineGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--brand-teal)" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Right Content: The Suspended Holographic Dashboard */}
            <div className="lg:col-span-6 relative flex justify-center perspective-2000 md:perspective-4000 mt-12 lg:mt-0">
              <motion.div
                className="relative group w-full max-w-[900px]"
                initial={{ opacity: 0, rotateY: 35, rotateX: 10, scale: 0.85 }}
                animate={{ opacity: 1, rotateY: -15, rotateX: 5, scale: 1 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
              >
                {/* Outer Floating UI Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 md:-top-12 md:-left-12 p-3 md:p-6 bg-white/90 backdrop-blur-3xl border border-brand-teal/10 rounded-2xl md:rounded-[32px] shadow-xl z-20 hidden sm:block"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <p className="text-brand-teal text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">Impact Velocity</p>
                  <p className="text-brand-purple text-lg md:text-2xl font-black">94.8%</p>
                </motion.div>

                <div className="relative rounded-3xl md:rounded-[48px] overflow-hidden border border-brand-teal/5 bg-white shadow-[0_50px_100px_-30px_rgba(35,167,166,0.15)] md:shadow-[0_100px_140px_-40px_rgba(35,167,166,0.15)]">
                  <Image
                    src="/home_page.png"
                    // src="/intelligence-hub.png"
                    alt="Intelligence Hub"
                    width={1200}
                    height={1000}
                    className="w-full h-auto opacity-100 mix-blend-normal transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Perspective Depth Overlay (Soft White) */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-60" />

                  {/* High-Tech Pulse Spots */}
                  {[
                    { t: "30%", l: "40%", id: "erp" },
                    { t: "50%", l: "70%", id: "ai" },
                    { t: "20%", l: "80%", id: "crm" },
                  ].map((spot, i) => (
                    <motion.div
                      key={i}
                      className="absolute z-10"
                      style={{ top: spot.t, left: spot.l }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    >
                      <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-brand-teal/20 flex items-center justify-center">
                        <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-brand-teal shadow-[0_0_15px_#23a7a6]" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none rounded-3xl md:rounded-[48px]" />
              </motion.div>

              {/* Sub-UI: The Analytics Float */}
              <motion.div
                className="absolute -bottom-8 -right-4 md:-bottom-16 md:-right-8 w-48 md:w-64 p-4 md:p-8 bg-white/95 backdrop-blur-3xl border border-brand-teal/10 rounded-2xl md:rounded-[40px] hidden md:block z-30 shadow-2xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <div className="flex gap-2 mb-4 md:mb-6">
                  {[3, 5, 2, 4].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-1 md:w-1.5 bg-brand-teal/60 rounded-full"
                      animate={{ height: [10, h * 6, 10] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
                <p className="text-brand-purple/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Global Data Sync</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Cinematic Floor Indicator (Light Theme) */}
        <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-20 flex justify-center px-6">
          <div className="flex items-center gap-6 md:gap-12">
            <span className="text-[8px] md:text-[10px] font-black text-brand-purple/20 uppercase tracking-[0.3em] md:tracking-[0.5em] whitespace-nowrap">2026 Innovation</span>
            <motion.div
              className="w-8 md:w-16 h-px bg-brand-teal/10 hidden sm:block"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-brand-teal/20 flex items-center justify-center p-1"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-px h-full bg-brand-teal/30" />
            </motion.div>
            <div className="w-8 md:w-16 h-px bg-brand-teal/10 hidden sm:block" />
            <span className="text-[8px] md:text-[10px] font-black text-brand-purple/20 uppercase tracking-[0.3em] md:tracking-[0.5em] whitespace-nowrap">Scroll to Discover</span>
          </div>
        </div>
      </section>




      {/* Partners Section - Auto Slider */}
      <section className="py-10 md:py-14 bg-white overflow-hidden border-b border-black/5">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-slide">
              {/* First set of logos */}
              <div className="flex items-center gap-12 md:gap-[70px] min-w-max">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                  <motion.div
                    key={id}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    // opacity for all organizations to be fully visible on hover
                    className="relative w-16 h-16 md:w-24 md:h-30 opacity-100 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={`/partners/partner-${id}.png`}
                      alt="Partner"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-12 md:gap-[70px] min-w-max ml-12 md:ml-[70px]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                  <motion.div
                    key={`dup-${id}`}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    className="relative w-16 h-16 md:w-24 md:h-24 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={`/partners/partner-${id}.png`}
                      alt="Partner"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education-Focused Section - REDESIGNED */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-[#F8FAFC]">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-primary/5 blur-[80px] md:blur-[120px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-secondary/5 blur-[100px] md:blur-[150px] rounded-full translate-x-1/2" />

        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[120px] 2xl:px-[250px] relative z-10">
          <div className="relative max-w-[1440px] mx-auto">
            {/* dynamic Header with Next/Prev Previews */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12 md:mb-20">
              {/* Left Navigation Label */}
              <motion.button
                onClick={prevTab}
                className="group relative hidden xl:flex flex-col items-start text-left max-w-[280px]"
                whileHover={{ x: -10 }}
              >
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary/40 mb-3 group-hover:text-brand-primary transition-colors">Previous Insight</span>
                <span className="text-xl font-bold text-[#141D38]/40 group-hover:text-[#141D38] transition-colors leading-tight">
                  {lastTab.title}
                </span>
                <div className="mt-4 w-12 h-1.5 bg-brand-primary/10 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-brand-primary" initial={{ width: "0%" }} whileHover={{ width: "100%" }} />
                </div>
              </motion.button>

              {/* Main Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="text-center flex-1"
                >
                  <p className="text-brand-teal font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4">
                    {currentTab.subtitle}
                  </p>
                  <h2 className="text-brand-purple font-montserrat text-[32px] sm:text-[40px] md:text-[64px] font-black tracking-tighter mb-6 md:mb-8 leading-tight">
                    {currentTab.title.split(' ')[0]} <span className="text-brand-primary">{currentTab.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-[#1a1a1a]/60 font-inter text-base md:text-lg leading-relaxed max-w-[700px] mx-auto font-medium">
                    {currentTab.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Right Navigation Label */}
              <motion.button
                onClick={nextTab}
                className="group relative hidden xl:flex flex-col items-end text-right max-w-[280px]"
                whileHover={{ x: 10 }}
              >
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary/40 mb-3 group-hover:text-brand-secondary transition-colors">Digital Roadmap</span>
                <span className="text-xl font-bold text-[#141D38]/40 group-hover:text-[#141D38] transition-colors leading-tight">
                  {nextTabInfo.title}
                </span>
                <div className="mt-4 w-12 h-1.5 bg-brand-secondary/10 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-brand-secondary" initial={{ width: "0%" }} whileHover={{ width: "100%" }} />
                </div>
              </motion.button>
            </div>

            {/* Dashboard Display - Handier & Richer UX */}
            <div
              className="relative group max-w-[1280px] mx-auto perspective-1000 md:perspective-2000"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-brand-primary to-brand-teal rounded-[32px] md:rounded-[48px] opacity-5 md:opacity-10 blur-2xl md:blur-3xl group-hover:opacity-15 transition-opacity" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98, rotateX: 5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, rotateX: -5, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  className="relative rounded-2xl md:rounded-[32px] border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] md:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] overflow-hidden"
                >
                  {/* Browser-style Top Bar */}
                  <div className="h-8 md:h-10 border-b border-black/5 bg-white/30 flex items-center px-4 md:px-6 gap-2">
                    <div className="flex gap-1 md:gap-1.5">
                      <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FF5F56]/40" />
                      <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FFBD2E]/40" />
                      <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#27C93F]/40" />
                    </div>
                    <div className="mx-auto w-32 md:w-64 h-3 md:h-5 bg-black/5 rounded-md" />
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] md:text-[10px] uppercase font-black text-[#141D38]/30 tracking-widest hidden sm:block">{isHovered ? "Paused" : "Live View"}</span>
                      <div className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full ${isHovered ? 'bg-amber-400' : 'bg-[#27C93F] animate-pulse'}`} />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent pointer-events-none" />
                  <div className="relative aspect-[16/10] md:aspect-[16/8] overflow-hidden cursor-grab active:cursor-grabbing">
                    <Image
                      src={currentTab.image}
                      alt={currentTab.title}
                      fill
                      className="object-cover object-top transform transition-transform duration-1000 ease-out"
                    />

                    {/* Interactive Hotspots */}
                    {currentTab.hotspots?.map((spot, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute z-20"
                        style={{ left: spot.x, top: spot.y }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.2 }}
                      >
                        <div className="relative group/spot">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-brand-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                            <div className="w-2 h-2 bg-white rounded-full animate-ping absolute" />
                            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full relative z-10" />
                          </div>

                          {/* Tooltip Content */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-40 md:w-48 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-2xl border border-black/5 opacity-0 invisible group-hover/spot:opacity-100 group-hover/spot:visible transition-all duration-300 transform translate-y-2 group-hover/spot:translate-y-0">
                            <p className="text-[10px] md:text-xs font-black text-brand-primary uppercase tracking-wider mb-1">{spot.label}</p>
                            <p className="text-[9px] md:text-[11px] text-[#64748B] font-medium leading-relaxed">{spot.detail}</p>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Micro-UI Element */}
                  <div className="absolute top-12 md:top-20 left-4 md:left-10 w-40 md:w-48 p-3 md:p-4 bg-white/90 backdrop-blur-2xl rounded-xl md:rounded-2xl shadow-lg border border-white/50 hidden md:block z-10">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-brand-teal" />
                      <span className="text-[8px] md:text-[9px] font-black uppercase text-[#141D38]/60 tracking-wider">System Health</span>
                    </div>
                    <div className="h-1 md:h-1.5 w-full bg-[#F1F5F9] rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "94%" }} transition={{ delay: 0.8, duration: 1.5 }} className="h-full bg-brand-teal" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Navigation Arrows */}
              <button
                onClick={prevTab}
                className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/80 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center border border-[#E2E8F0] hover:bg-brand-primary hover:text-white transition-all duration-300 z-30 transform hover:-translate-x-2 translate-x-1/2 md:translate-x-0"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><path d="m15 18-6-6 6-6" /></svg>
              </button>

              <button
                onClick={nextTab}
                className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/80 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center border border-[#E2E8F0] hover:bg-brand-secondary hover:text-white transition-all duration-300 z-30 transform hover:translate-x-2 -translate-x-1/2 md:translate-x-0"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </div>

            {/* Handier Progress Indicators with Auto-play Visualizer */}
            <div className="flex justify-center gap-4 md:gap-6 mt-12 md:mt-16">
              {educationTabs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className="group relative py-2"
                >
                  <div className={`h-1 md:h-1.5 rounded-full transition-all duration-500 overflow-hidden ${activeTab === idx ? "w-10 md:w-16 bg-[#E2E8F0]" : "w-6 md:w-10 bg-[#E2E8F0]/60 hover:bg-[#CBD5E1]"}`}>
                    {activeTab === idx && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isHovered ? { width: "100%" } : { width: "100%" }}
                        key={isHovered ? 'paused' : 'active'}
                        transition={isHovered ? { duration: 0 } : { duration: 6, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-brand-primary to-brand-teal"
                      />
                    )}
                  </div>
                  <span className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[8px] md:text-[9px] font-black uppercase tracking-tighter transition-opacity duration-300 ${activeTab === idx ? "opacity-100 text-brand-primary" : "opacity-0"}`}>
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Dynamic CMS-Ready */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
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

      {/* Solutions Section - REDESIGNED as The Solutions Prism */}
      <section className="py-20 md:py-32 bg-[#fdfbf7] relative overflow-hidden border-t border-black/5">
        {/* Background Innovation: Floating Prism Elements */}
        <div className="absolute top-0 right-0 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-gradient-to-br from-brand-primary/5 to-transparent blur-[80px] md:blur-[160px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-tr from-brand-teal/5 to-transparent blur-[60px] md:blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[120px] 2xl:px-[250px] relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 md:mb-24">
            <div className="max-w-[850px]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-4 md:mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                Industry Vertical Specialist
              </motion.div>
              <h2 className="text-brand-purple font-montserrat text-[28px] sm:text-[32px] md:text-[56px] font-black tracking-tighter leading-tight">
                No One Knows Education Like Us,
                {/* <br className="hidden md:block" /> */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal"> Because Education Is All We Do</span>
              </h2>
            </div>
            <motion.a
              // href={`/${currentProduct.slug}`}
              href="/why-eduvas"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 bg-brand-purple text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold tracking-wider uppercase text-xs md:text-sm overflow-hidden shadow-2xl transition-all w-full sm:w-auto justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Explore the Ecosystem</span>
              <svg className="relative z-10 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Ultra Modern Magnetic Sidebar */}
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32">
              <div className="mb-8 md:mb-12">
                <h3 className="text-brand-purple font-montserrat text-2xl md:text-3xl font-black mb-4 tracking-tight">Dedicated Verticals</h3>
                <p className="text-[#64748B] font-inter text-base md:text-lg leading-relaxed font-medium">
                  We don't believe in "generic" ERPs. Our systems are precision-engineered for specific educational requirements.
                </p>
              </div>

              <div className="flex lg:flex-col gap-2 md:gap-3 overflow-x-auto lg:overflow-x-visible pb-4 scrollbar-hide snap-x p-2 bg-black/[0.03] md:bg-black/5 rounded-2xl md:rounded-[32px] backdrop-blur-sm ">
                {productsData.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveProduct(product.id)}
                    className="group relative flex-shrink-0 w-[240px] lg:w-full text-left px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl transition-all duration-500 overflow-hidden snap-center"
                  >
                    {activeProduct === product.id && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-white shadow-lg md:shadow-xl shadow-black/5 rounded-xl md:rounded-2xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="min-w-0 pr-4">
                        <p className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1 transition-colors duration-500 truncate ${activeProduct === product.id ? "text-brand-primary" : "text-[#7B8A9E]"}`}>
                          {product.subtitle}
                        </p>
                        <h4 className={`text-base md:text-xl font-black transition-colors duration-500 truncate ${activeProduct === product.id ? "text-brand-purple" : "text-[#475569]"}`}>
                          {product.name}
                        </h4>
                      </div>
                      <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-500 ${activeProduct === product.id ? "bg-brand-primary text-white rotate-0" : "bg-black/5 text-[#94A3B8] rotate-[-45deg] group-hover:rotate-0"}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 md:w-5 md:h-5"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* The Creative Spotlight Area */}
            <div className="lg:col-span-8 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  initial={{ opacity: 0, scale: 0.98, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.02, x: -30 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-[32px] md:rounded-[48px] p-6 md:p-16 border border-white shadow-[0_50px_80px_-30px_rgba(0,0,0,0.08)] relative overflow-hidden"
                >
                  {/* Thematic Background Glow */}
                  <div
                    className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] blur-[100px] md:blur-[150px] opacity-10 transition-colors duration-500"
                    style={{ backgroundColor: currentProduct.color }}
                  />

                  {/* Holographic Dashboard Frame */}
                  <div className="relative mb-10 md:mb-16 perspective-1000 md:perspective-2000">
                    <motion.div
                      className="rounded-xl md:rounded-3xl overflow-hidden border border-black/5 shadow-2xl relative"
                      whileHover={{ rotateY: -3, rotateX: 3, scale: 1.01 }}
                    >
                      {/* Dedicated Verticals images */}
                      <Image
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        // width={900}
                        // height={500}
                        width={600}
                        height={350}
                        className="w-full h-auto brightness-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Active Feature Chips */}
                    {/* <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 md:gap-3 z-20 w-full px-4">
                      {currentProduct.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="px-4 md:px-6 py-2 md:py-3 bg-white/90 backdrop-blur-xl border border-white rounded-full shadow-lg text-[9px] md:text-[11px] font-black uppercase tracking-widest text-brand-purple whitespace-nowrap"
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div> */}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-8 space-y-4 md:space-y-6">
                      <h5 className="text-2xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-teal">{currentProduct.name} Core</h5>
                      <p className="text-[#64748B] font-inter text-base md:text-lg leading-relaxed font-medium">
                        {currentProduct.description}
                      </p>
                    </div>
                    <div className="md:col-span-4 flex justify-center md:justify-end">
                      <a
                        href={`/${currentProduct.slug}`}
                        className="group flex flex-col items-center gap-3 md:gap-4 text-center"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#E2E8F0] flex items-center justify-center group-hover:border-brand-primary group-hover:scale-110 transition-all duration-500">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-brand-purple/30 group-hover:text-brand-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-purple">Details</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Student Lifecycle Section - REDESIGNED as The Story of a Student */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/5 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-brand-teal/5 blur-[60px] md:blur-[100px] rounded-full" />

        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[120px] 2xl:px-[250px] relative z-10">
          <div className="text-center mb-16 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-4 md:mb-6"
            >
              The Eduvas Experience
            </motion.div>
            <h2 className="text-brand-purple font-montserrat text-[36px] sm:text-[48px] md:text-[64px] font-black tracking-tighter leading-tight mb-6 md:mb-8">
              Ignite Outcomes Across the<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Education Lifecycle</span>
            </h2>
            <p className="text-[#64748B] font-inter text-base md:text-xl max-w-[800px] mx-auto font-medium leading-relaxed">
              We don't just manage data; we nurture potential. Follow the journey of a student empowered by the Eduvas ecosystem.
            </p>
          </div>

          {/* Interactive Story Path */}
          <div className="relative max-w-[1200px] mx-auto">
            {/* The Main Connecting Line (The "Path") */}
            <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-primary/20 via-brand-teal/20 to-transparent" />

            <div className="space-y-24 md:space-y-40 relative">
              {/* Phase 1: The Spark */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 group">
                <div className="lg:flex-1 lg:text-right pl-16 lg:pl-0 order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 md:space-y-6"
                  >
                    <span className="text-[60px] md:text-[100px] font-black text-brand-purple/5 absolute -top-10 md:-top-16 left-4 md:left-auto md:-right-8 lg:left-auto">01</span>
                    <h3 className="text-2xl md:text-4xl font-black text-brand-purple tracking-tight">The First Impression</h3>
                    <p className="text-[#64748B] text-base md:text-lg leading-relaxed font-medium">
                      It starts with curiosity. Our CRM and Admissions portals ensure a frictionless first contact, making every prospective student feel seen and valued from the moment they apply.
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 lg:justify-end">
                      {['Digital CRM', 'Smart Admissions', 'Portals'].map(tag => (
                        <span key={tag} className="px-3 md:px-4 py-1.5 bg-[#F1F5F9] rounded-full text-[8px] md:text-[10px] font-bold text-[#475569] uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 lg:left-auto lg:relative lg:order-2 lg:mx-auto z-20 flex-shrink-0 lg:transform-none">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-brand-primary to-brand-teal shadow-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                  </div>
                </div>

                <div className="lg:flex-1 pl-16 lg:pl-0 order-3 lg:order-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-xl border border-black/5"
                  >
                    {/* <div className="aspect-video bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent" />
                      <div className="p-6 md:p-8 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="w-10 md:w-12 h-1.5 md:h-2 bg-brand-primary/20 rounded-full" />
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white shadow-sm" />
                        </div>
                        <div className="space-y-2 md:space-y-3">
                          <div className="w-3/4 h-2 md:h-3 bg-brand-primary/10 rounded-full" />
                          <div className="w-1/2 h-2 md:h-3 bg-brand-primary/10 rounded-full" />
                        </div>
                      </div>
                    </div> */}
                    {/* show image  */}
                    <Image
                      src="/landing_page/The_First_Impression.jpg"
                      alt="Phase 1 Dashboard"
                      width={600}
                      height={338}
                      className="w-full h-auto rounded-xl md:rounded-2xl"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Phase 2: Growth */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between gap-10 md:gap-12 group">
                <div className="lg:flex-1 text-left pl-16 lg:pl-0 order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 md:space-y-6"
                  >
                    <span className="text-[60px] md:text-[100px] font-black text-brand-purple/5 absolute -top-10 md:-top-16 left-4 md:left-auto md:-right-8 lg:left-auto">02</span>
                    <h3 className="text-2xl md:text-4xl font-black text-brand-purple tracking-tight">Integrated Academics & LMS</h3>
                    <p className="text-[#64748B] text-base md:text-lg leading-relaxed font-medium">
                      As learning begins, Eduvas acts as the navigator. Our integrated Academics and LMS systems track progress, attendance, and feedback in real-time. Students aren't just names; they are thriving learners.
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {['Learning Hub', 'Auto Attendance', 'Result Ops'].map(tag => (
                        <span key={tag} className="px-3 md:px-4 py-1.5 bg-[#F1F5F9] rounded-full text-[8px] md:text-[10px] font-bold text-[#475569] uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 lg:left-auto lg:relative lg:order-2 lg:mx-auto z-20 flex-shrink-0 lg:transform-none">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-brand-teal to-brand-purple shadow-2xl flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-500">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                </div>

                <div className="lg:flex-1 pl-16 lg:pl-0 order-3 lg:order-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-xl border border-black/5"
                  >
                    {/* <div className="aspect-video bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent" />
                      <div className="p-6 md:p-8 h-full flex flex-col justify-center gap-4 md:gap-6">
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map(i => <div key={i} className="flex-1 h-8 md:h-12 bg-white rounded-lg shadow-sm" />)}
                        </div>
                        <div className="w-full h-6 md:h-8 bg-brand-teal/20 rounded-lg animate-pulse" />
                      </div>
                    </div> */}
                    {/* show image  */}
                    <Image
                      src="/landing_page/The_Academic_Voyage.png"
                      alt="Phase 2 Dashboard"
                      width={600}
                      height={338}
                      className="w-full h-auto rounded-xl md:rounded-2xl"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Phase 3: Legacy */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 group">
                <div className="lg:flex-1 lg:text-right pl-16 lg:pl-0 order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 md:space-y-6"
                  >
                    <span className="text-[60px] md:text-[100px] font-black text-brand-purple/5 absolute -top-10 md:-top-16 left-4 md:left-auto md:-right-8 lg:left-auto">03</span>
                    <h3 className="text-2xl md:text-4xl font-black text-brand-purple tracking-tight">Beyond Graduation: Career and Alumni Success</h3>
                    <p className="text-[#64748B] text-base md:text-lg leading-relaxed font-medium">
                      Success is the goal. Graduation is just the beginning. Our Career Services and Alumni modules ensure that the bond between student and institution lasts a lifetime, securing a legacy of impact.
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 lg:justify-end">
                      {['Career Services', 'Alumni Dev', 'Outreach'].map(tag => (
                        <span key={tag} className="px-3 md:px-4 py-1.5 bg-[#F1F5F9] rounded-full text-[8px] md:text-[10px] font-bold text-[#475569] uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 lg:left-auto lg:relative lg:order-2 lg:mx-auto z-20 flex-shrink-0 lg:transform-none">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-brand-primary to-brand-purple shadow-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" /></svg>
                  </div>
                </div>

                <div className="lg:flex-1 pl-16 lg:pl-0 order-3 lg:order-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-xl border border-black/5"
                  >
                    {/* <div className="aspect-video bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent" />
                      <div className="p-6 md:p-8 h-full flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center mb-4">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-brand-primary to-brand-teal" />
                        </div>
                        <div className="w-32 md:w-48 h-1.5 md:h-2 bg-brand-primary/20 rounded-full" />
                      </div>
                    </div> */}
                    {/* show image  */}
                    <Image
                      src="/landing_page/The_Professional_Leap.png"
                      alt="Phase 3 Dashboard"
                      width={600}
                      height={338}
                      className="w-full h-auto rounded-xl md:rounded-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* CTA Button at the end of the journey */}
            <div className="mt-24 md:mt-40 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsJourneyModalOpen(true)}
                className="bg-gradient-to-r from-brand-primary to-brand-teal text-white font-montserrat text-base md:text-lg font-bold tracking-wider uppercase px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_-5px_rgba(42,117,212,0.3)] transition-all w-full sm:w-auto"
              >
                Experience the Full Journey
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Journey Modal - Live Stream Themed */}
      <AnimatePresence>
        {isJourneyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsJourneyModalOpen(false)} />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20"
            >
              <div className="flex flex-col lg:flex-row h-[700px]">
                {/* Left Side: Live Feed Preview */}
                <div className="lg:w-7/12 bg-[#0F172A] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-[#EF4444] px-3 py-1 rounded-md">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Live Preview</span>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">Select Your Path</span>
                    </div>
                  </div>

                  {/* Dynamic Background based on selected path */}
                  <motion.div className="absolute inset-0 opacity-40">
                    <Image src="/hero-bg.png" alt="" fill className="object-cover grayscale" />
                  </motion.div>

                  <div className="absolute bottom-12 left-12 z-20 max-w-[400px]">
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tight leading-tight">Which journey should we stream?</h3>
                    <p className="text-white/60 text-lg font-medium">Select a vertical to experience the full life-cycle transformation in an interactive, animated walk-through.</p>
                  </div>
                </div>

                {/* Right Side: Navigation Console */}
                <div className="lg:w-5/12 bg-white p-12 flex flex-col">
                  <div className="flex justify-between items-center mb-12">
                    <h4 className="text-[#141D38] text-sm font-black uppercase tracking-[0.3em]">Channel Selector</h4>
                    <button onClick={() => setIsJourneyModalOpen(false)} className="w-10 h-10 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </button>
                  </div>

                  <div className="space-y-4 flex-1">
                    {journeyOptions.map((opt) => (
                      <Link
                        key={opt.id}
                        href={opt.path}
                        className="group block relative p-6 rounded-3xl border border-[#F1F5F9] hover:border-transparent hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-transparent group-hover:to-gray-50 transition-all" />

                        <div className="relative z-10 flex items-center gap-6">
                          <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: `${opt.color}10` }}>
                            {opt.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="text-xl font-black text-[#141D38]">{opt.title} Journey</h5>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{opt.viewers} watching now</span>
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#141D38] group-hover:text-white transition-all">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-[#F1F5F9] text-center">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">Integrated Education Ecosystem</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Integration Nexus - High-Intensity Laser Beams */}
      <section className="relative py-20 lg:py-32 bg-[#fdfbf7] overflow-hidden min-h-[700px] md:min-h-[90vh] flex flex-col justify-center border-y border-black/5">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--brand-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-brand-primary/5 blur-[100px] md:blur-[160px] rounded-full" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-24 relative z-10 w-full">
          <div className="text-center mb-12 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/5 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
            >
              Real-time Ecosystem Sync
            </motion.div>
            <h2 className="font-montserrat text-[32px] md:text-[56px] font-black tracking-tighter leading-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-teal">Integrated Solutions</span>
            </h2>
            <p className="text-[#64748B] text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Experience the unwavering power of high-precision laser data transmission across your entire ecosystem.
            </p>
          </div>

          <div className="relative h-[450px] md:h-[650px] flex items-center justify-center scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 transition-transform origin-center">
            <div className="relative z-50 w-44 h-44 md:w-52 md:h-52 rounded-full bg-white border-[6px] border-brand-primary/10 flex items-center justify-center shadow-[0_20px_50px_rgba(42,117,212,0.15)] overflow-visible">
              <div className="absolute -inset-16 rounded-full bg-brand-action/10 blur-[80px] animate-pulse" />
              <div className="absolute -inset-8 rounded-full border-2 border-brand-action/20 animate-[spin_30s_linear_infinite]" />

              <div className="text-center group cursor-pointer relative z-10">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-brand-primary to-brand-teal p-1 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image src="/Logo.png" alt="Eduvas Core" width={60} height={60} className="z-10" />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-brand-primary font-black text-[10px] uppercase tracking-widest bg-white px-5 py-2 rounded-full shadow-lg border border-brand-primary/10">The Neural Core</span>
                </div>
              </div>
            </div>

            <svg viewBox="0 0 1200 650" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <filter id="beamGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {[
                { id: 1, name: "Koha Library System", icon: "📚", radius: 460, angle: -150 },
                { id: 2, name: "E-Learning (Moodle)", icon: "🎓", radius: 400, angle: -120 },
                { id: 3, name: "Blockchain Certificates", icon: "🔒", radius: 400, angle: -60 },
                { id: 4, name: "AI Proctor", icon: "🎦", radius: 460, angle: -30 },
                { id: 5, name: "AI Professor", icon: "🤖", radius: 460, angle: 0 },
                { id: 6, name: "1 Card System", icon: "💳", radius: 460, angle: 30 },
                { id: 7, name: "Hall Management", icon: "🏢", radius: 400, angle: 60 },
                { id: 8, name: "Study Abroad ERP", icon: "🌐", radius: 400, angle: 120 },
                { id: 9, name: "DSpace Repository", icon: "📊", radius: 460, angle: 150 },
                { id: 10, name: "Electronic Journals", icon: "📖", radius: 460, angle: 180 },
                { id: 11, name: "HR Management", icon: "👥", radius: 350, angle: -90 },
                { id: 12, name: "Campus Medical", icon: "🏥", radius: 350, angle: 90 },
              ].map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const startX = 600 + Math.cos(rad) * node.radius;
                const startY = 325 + Math.sin(rad) * node.radius;
                const isActive = hoveredIntegration === node.id;

                return (
                  <g key={node.id}>
                    <motion.path
                      d={`M ${startX} ${startY} L 600 325`}
                      stroke="#EF4444"
                      strokeWidth="2"
                      animate={{
                        strokeOpacity: isActive ? 0.7 : 0.08,
                        strokeWidth: isActive ? 4 : 2
                      }}
                      filter="url(#beamGlow)"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                    />

                    <AnimatePresence>
                      {isActive && (
                        <motion.path
                          d={`M ${startX} ${startY} L 600 325`}
                          stroke="#EF4444"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray="40, 200"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          filter="url(#beamGlow)"
                          className="drop-shadow-[0_0_20px_var(--component-accent)]"
                        >
                          <motion.animate
                            attributeName="stroke-dashoffset"
                            from="500"
                            to="0"
                            dur="0.5s"
                            repeatCount="indefinite"
                          />
                        </motion.path>
                      )}
                    </AnimatePresence>

                    <foreignObject
                      x={startX - 110}
                      y={startY - 40}
                      width="220"
                      height="80"
                      className="overflow-visible"
                    >
                      <motion.div
                        onMouseEnter={() => setHoveredIntegration(node.id)}
                        onMouseLeave={() => setHoveredIntegration(null)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className={`bg-white border p-3.5 rounded-2xl flex items-center gap-4 w-[220px] transition-all duration-500 group cursor-pointer pointer-events-auto ${isActive
                          ? "shadow-[0_25px_60px_rgba(239,68,68,0.2)] border-[#EF4444]/60 -translate-y-2 scale-110"
                          : "border-brand-primary/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                          }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-500 border shadow-inner ${isActive ? "bg-[#EF4444] text-white scale-110 border-[#EF4444]" : "bg-brand-primary/5 text-brand-primary border-brand-primary/5"
                          }`}>
                          {node.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-bold text-[11px] uppercase tracking-tight leading-tight transition-colors ${isActive ? "text-[#EF4444]" : "text-brand-purple"}`}>{node.name}</p>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#EF4444] animate-[ping_0.6s_infinite]" : "bg-brand-primary opacity-30"}`} />
                            <span className={`text-[8px] font-black uppercase tracking-widest transition-opacity ${isActive ? "text-[#EF4444] opacity-100" : "text-brand-primary opacity-40"}`}>
                              {isActive ? "Beaming Data" : "Secure Link"}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* <div className="mt-12 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4 md:px-0">
            {[
              { l: "Beam Connectivity", v: "Verified" },
              { l: "Uplink State", v: "Synchronized" },
              { l: "Node Response", v: "Sub-ms" },
              { l: "Core Status", v: "Receptive" }
            ].map((s, i) => (
              <div key={i} className="bg-white border border-black/5 p-4 md:p-6 rounded-2xl text-center shadow-sm hover:border-[#EF4444]/20 transition-colors duration-500">
                <div className="text-[8px] md:text-[9px] font-black text-[#EF4444] uppercase tracking-[0.3em] mb-2 opacity-50">{s.l}</div>
                <div className="text-xl md:text-2xl font-black text-brand-purple">{s.v}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Executive Insight Showcase - Leadership Perspective */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-transparent">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/[0.02] -skew-x-12 translate-x-1/4" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
          <div className="text-center mb-12 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
            >
              Institutional Excellence
            </motion.div>
            <h2 className="font-montserrat text-[32px] md:text-[56px] font-black tracking-tighter leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-teal">Strategic Voices</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-stretch">
            <div className="lg:col-span-5 relative flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative group"
              >
                <div className="relative aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                  <Image src="/landing_page/Hosne_Ara_Begum.svg" alt="Dr. Hosne Ara Begum" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 md:top-8 right-6 md:right-8 bg-white/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50">
                    <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    <span className="text-[8px] md:text-[10px] font-black text-brand-purple uppercase tracking-widest">Verified Project</span>
                  </div>
                  <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 right-8 md:right-10">
                    <p className="text-white text-2xl md:text-3xl font-black mb-1">Dr. Hosne Ara Begum</p>
                    <p className="text-white/70 text-xs md:text-sm font-medium uppercase tracking-[0.2em]">Professor, BUTEX</p>
                  </div>
                </div>
              </motion.div>
              <div className="mt-8 md:mt-12 grid grid-cols-2 gap-4">
                {[
                  { l: "Efficiency Gain", v: "40%", c: "var(--brand-primary)" },
                  { l: "Data Sovereignty", v: "100%", c: "var(--brand-teal)" }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-black/5 p-4 md:p-6 rounded-[24px] shadow-sm"
                  >
                    <div className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] mb-2" style={{ color: s.c }}>{s.l}</div>
                    <div className="text-3xl md:text-4xl font-black text-brand-purple leading-tight">{s.v}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center mt-8 lg:mt-0">
              <div className="relative">
                <p className="text-brand-primary/10 font-karma text-[100px] md:text-[240px] leading-none absolute -top-12 md:-top-32 -left-4 md:-left-12 pointer-events-none">"</p>
                <motion.blockquote initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="relative z-10">
                  {/* <p className="text-brand-purple text-[20px] md:text-[34px] font-black leading-tight tracking-tight mb-6 md:mb-12">
                    "Implementing a fully integrated university ecosystem is a <span className="text-brand-primary">strategic imperative</span>, not just a technical upgrade. Eduvas understood our institutional scale and global vision from day one."
                  </p> */}
                  <p className="text-brand-purple text-[20px] md:text-[34px] font-black leading-tight tracking-tight mb-6 md:mb-12">
                    Implementing a fully integrated university system is not easy, but Daffodil Software handled it
                    with confidence and clarity. They understood our institutional scale and public-university
                    responsibilities from day one. Today, our academic and administrative operations move faster
                    and work together seamlessly.
                  </p>
                  <div className="space-y-6 md:space-y-8">
                    <p className="text-[#64748B] text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                      Daffodil Software delivered with confidence and clarity, ensuring our academic and administrative operations move faster and work together seamlessly. Today, our data drives every decision we make.
                    </p>
                    <div className="h-px w-full bg-gradient-to-r from-black/10 to-transparent" />
                    <div className="flex flex-wrap gap-2 md:gap-4">
                      {["Public University Standard", "Governance Ready", "Global Scalability"].map(tag => (
                        <span key={tag} className="px-3 md:px-5 py-2 md:py-2.5 bg-black/5 rounded-full text-[8px] md:text-[11px] font-black text-brand-purple/60 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Transformation Portal - Strategic Contact (Premium Evolution) */}
      {/* Institutional Transformation Portal - Unified Tablet/Desktop (1024x1366 & 1404x1370) */}
      <section className="py-20 md:py-24 2xl:py-32 relative overflow-hidden bg-[#f2f8f7] min-h-screen flex items-center">
        {/* Dynamic Backgrounds */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--brand-teal) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] bg-gradient-to-l from-brand-primary/10 to-transparent blur-[120px] lg:blur-[180px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] bg-brand-purple/5 blur-[100px] lg:blur-[150px] rounded-full" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 relative z-10 w-full">
          {/* Grid Logic: 
        - Stays 1 column (stacked) until 2xl (1536px).
        - This provides the best experience for 1024px and 1404px widths.
    */}
          <div className="grid grid-cols-1 2xl:grid-cols-12 gap-16 2xl:gap-32 items-start 2xl:items-center">

            {/* Left Side: The Value Narrative */}
            <div className="2xl:col-span-5 space-y-10 md:space-y-14 max-w-4xl 2xl:max-w-none mx-auto 2xl:mx-0">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-brand-purple/10 bg-white shadow-sm mb-8">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-ping" />
                  <span className="text-brand-purple text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em]">Phase 01: Strategic Discovery</span>
                </div>

                <h3 className="font-montserrat text-[40px] md:text-[56px] lg:text-[72px] 2xl:text-[64px] font-black tracking-tighter leading-[1] md:leading-[0.9] mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-primary">Your Journey to</span> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-teal to-brand-action">Digital Sovereignty</span> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-purple">Starts Here</span>
                </h3>

                <p className="text-[#475569] text-xl md:text-2xl 2xl:text-xl font-medium leading-relaxed opacity-80 max-w-2xl">
                  Secure a personalized institutional roadmap and a precision-engineered deployment quote for your scaling requirements.
                </p>
              </motion.div>

              {/* Success Roadmap Visualization */}
              <div className="space-y-10 relative">
                <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-brand-primary/20 via-brand-teal/20 to-transparent" />

                {[
                  { t: "Strategic Ecosystem Audit", d: "We analyze your current curriculum, ERP, and financial logic.", i: "🔍" },
                  { t: "The Sovereign Roadmap", d: "A 360° digital transition plan tailored for board submission.", i: "🗺️" },
                  { t: "Zero-Downtime Migration", d: "Parallel deployment ensuring uninterrupted academic operations.", i: "🚀" }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-10 group"
                  >
                    <div className="relative z-10 w-16 h-16 shrink-0 rounded-[24px] bg-white shadow-xl flex items-center justify-center text-3xl border border-brand-teal/5 group-hover:scale-110 group-hover:border-brand-teal/20 transition-all duration-500">
                      {step.i}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-brand-purple font-black text-2xl mb-2">{step.t}</h4>
                      <p className="text-[#64748B] text-base md:text-lg 2xl:text-sm font-medium leading-relaxed max-w-md">{step.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: The Interactive Portal Form */}
            <div className="2xl:col-span-7 w-full max-w-4xl mx-auto 2xl:mx-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white/90 backdrop-blur-3xl rounded-[48px] md:rounded-[64px] p-10 md:p-20 2xl:p-16 border border-white shadow-[0_60px_100px_-30px_rgba(35,167,166,0.15)] overflow-hidden"
              >
                {/* Internal Accents */}
                <div className="absolute -top-12 -right-12 w-80 h-80 bg-brand-primary/5 blur-3xl rounded-full" />
                <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-brand-purple/5 blur-3xl rounded-full" />

                <div className="relative z-10 mb-12 text-center 2xl:text-left">
                  <h3 className="text-3xl md:text-5xl 2xl:text-3xl font-black text-brand-purple mb-4">Request Institutional Consult</h3>
                  {/* <p className="text-[#64748B] text-base md:text-lg 2xl:text-sm font-medium opacity-60">Complete the initial profile to unlock your transformation dashboard.</p> */}
                </div>

                <form className="relative z-10 space-y-8 md:space-y-10 2xl:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Form inputs use larger padding/text for the bigger screens */}
                    {[
                      { label: "Executive Lead Name", ph: "Dr. Sarah Mitchell", type: "text" },
                      { label: "Institutional Email", ph: "sarah@mit.edu", type: "email" },
                      { label: "Institution Name", ph: "Global University System", type: "text" }
                    ].map((field, idx) => (
                      <div key={idx} className="space-y-3 group">
                        <label className="text-[10px] md:text-[12px] font-black text-brand-purple uppercase tracking-[0.2em] ml-2 group-focus-within:text-brand-primary transition-colors">{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.ph}
                          className="w-full px-8 py-5 md:py-6 rounded-[28px] bg-white border border-brand-teal/10 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all text-brand-purple font-bold placeholder:text-slate-300 outline-none text-lg"
                        />
                      </div>
                    ))}

                    <div className="space-y-3 group">
                      <label className="text-[10px] md:text-[12px] font-black text-brand-purple uppercase tracking-[0.2em] ml-2 group-focus-within:text-brand-primary transition-colors">Vertical Category</label>
                      <div className="relative">
                        <select className="w-full px-8 py-5 md:py-6 rounded-[28px] bg-white border border-brand-teal/10 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all text-brand-purple font-bold outline-none appearance-none cursor-pointer text-lg">
                          <option>Public University</option>
                          <option>Private College</option>
                          <option>K12 Group</option>
                          <option>Research Institute</option>
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-brand-teal">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-[10px] md:text-[12px] font-black text-brand-purple uppercase tracking-[0.2em] ml-2 group-focus-within:text-brand-primary transition-colors">Strategic Objectives</label>
                    <textarea
                      placeholder="Briefly describe your institutional goals..."
                      rows={4}
                      className="w-full px-8 py-6 rounded-[40px] bg-white border border-brand-teal/10 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all text-brand-purple font-bold placeholder:text-slate-300 outline-none resize-none text-lg"
                    />
                  </div>

                  <div className="relative pt-6 group">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full bg-brand-purple text-white font-montserrat font-black text-[16px] md:text-[18px] uppercase tracking-[0.25em] py-7 md:py-9 rounded-[32px] md:rounded-[40px] flex items-center justify-center gap-8 group overflow-hidden shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10">Get Strategic Consultation</span>
                      <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-purple transition-all">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      </div>
                    </motion.button>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-[10px] md:text-[12px] font-black text-brand-purple/30 uppercase tracking-[0.4em]">Integrated Institutional Intelligence Service</p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
