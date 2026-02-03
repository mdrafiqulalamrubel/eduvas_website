'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function IntegrationPage() {
  return (
    <div className="bg-[#f8f9fa]">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-[700px] text-center lg:text-left">
              {/* Breadcrumb */}
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"
              >
                <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link>
                <span>/</span>
                <span className="text-brand-primary">Integration</span>
              </motion.nav>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-brand-purple"
              >
                Deep <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Integration</span>
              </motion.h1>

              {/* Subheading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Integrating Education into One Connected, <br className="hidden md:block" /> Intelligence-Driven Ecosystem.
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0"
              >
                Eduvas Integration Services operate alongside the educational ecosystem, helping institutions connect existing systems, external platforms, and operational processes into a single, reliable digital environment.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-brand-purple text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-brand-primary transition-all shadow-xl hover:-translate-y-1 group"
                >
                  Request Integration Demo
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-2 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full lg:w-1/2 aspect-[4/3] max-w-[600px]"
            >
              <div className="absolute inset-0 bg-brand-primary/10 rounded-[60px] blur-3xl -z-10" />
              <Image
                src="/images/integration-hero.png"
                alt="Integration"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Image Section */}
      {/* Delivery Section */}
      <section className="py-24 md:py-40 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12 mb-16">
              <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-brand-primary uppercase bg-brand-primary/5 rounded-full">
                Service Delivery
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-purple tracking-tighter">
                What Integration <br /> <span className="text-brand-teal">Services Deliver</span>
              </h2>
            </div>

            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] rounded-[60px] overflow-hidden border-[16px] border-white shadow-2xl group">
                <Image
                  src="/images/student-backpack.jpg"
                  alt="Student"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Academic System Integration",
                    desc: "We integrate admissions, academic management, examinations, and student services into one core.",
                    icon: "🏛️"
                  },
                  {
                    title: "Student Lifecycle Integration",
                    desc: "From inquiry to completion, EduVas ensures student data flows seamlessly across touchpoints.",
                    icon: "🔄"
                  },
                  {
                    title: "Finance & Operational Integration",
                    desc: "Aligning fee management, accounting, procurement, and budgeting for total transparency.",
                    icon: "💰"
                  },
                  {
                    title: "Human Resource Integration",
                    desc: "HR, attendance, payroll, and performance systems integrated to support workforce efficiency.",
                    icon: "👥"
                  },
                  {
                    title: "Data Synchronization",
                    desc: "Structured data exchange across legacy and modern systems for consistent reporting.",
                    icon: "📊"
                  },
                  {
                    title: "Third-Party & Legacy Connect",
                    desc: "Connecting government systems, payment gateways, and learning tools effortlessly.",
                    icon: "🔌"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-[32px] bg-white border border-slate-100 hover:border-brand-primary/20 hover:shadow-xl transition-all group"
                  >
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="text-xl font-black text-brand-purple mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brand-purple mb-6 tracking-tighter">
              Trusted By Leading <span className="text-brand-primary">Institutions</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
              Powering education across prestigious universities and institutions through seamless digital ecosystem integration.
            </p>
          </div>

          <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, rotate: 2 }}
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all cursor-pointer  hover:grayscale-0"
              >
                <Image
                  src={`/images/institutions/inst-${i}.png`}
                  alt={`Institution ${i}`}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
