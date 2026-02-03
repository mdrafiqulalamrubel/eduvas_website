"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';


interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const [activeExplore, setActiveExplore] = useState(1);

  const deliveryServices = [
    {
      title: "Academic System Integration",
      desc: "We integrate admissions, academic management, examination, grading, electricity, and student services.",
      icon: "graduation-cap"
    },
    {
      title: "Student Lifecycle Integration",
      desc: "From inquiry and admission to enrollment, progression, and completion, Eduvas ensures a student clear flow seamlessly.",
      icon: "user-check"
    },
    {
      title: "Finance & Operational Integration",
      desc: "Eduvas aligns the management, accounting, procurement, assets, and budgeting systems to maintain.",
      icon: "bank"
    },
    {
      title: "Human Resource & Workforce Integration",
      desc: "HR, attendance, payroll, performance, and employee self-service systems are integrated to support efficient.",
      icon: "users"
    },
    {
      title: "Data Synchronization & Institutional Reporting",
      desc: "We ensure structured data exchange across systems, enabling consistent reporting, audit readiness.",
      icon: "database"
    },
    {
      title: "Third-Party & Legacy System Integration",
      desc: "Eduvas connects legacy software, government systems, payment gateways, and learning tools.",
      icon: "link"
    }
  ];

  const engagementCards = [
    {
      title: "Foundation Integration Support",
      desc: "For institutions beginning digital alignment – focused on essential system connections, data mapping, and initial operations.",
      icon: "refresh-cw"
    },
    {
      title: "Growth-Focused Integration Support",
      desc: "Designed for institutions expanding digitally – covering cross-department workflows, automation, and process optimization.",
      icon: "file-text"
    },
    {
      title: "Strategic Integration Partnership",
      desc: "A long-term engagement model where Eduvas works as a technology partner – supporting strategic planning, system evolution, and continuous optimization.",
      icon: "briefcase"
    },
    {
      title: "Specialized Integration Add-Ons",
      desc: "Targeted services available at any stage:\n• Data migration and validation\n• Custom API development\n• Workflow and approval alignment\n• Security and access integration",
      icon: "user-plus"
    }
  ];

  const exploreItems = [
    {
      id: 0,
      title: "Ask the Expert",
      desc: "Join live webinars with Eduvas experts to get answers, tips, and guidance on critical topics.",
      bg: "bg-[#E5E7EB]"
    },
    {
      id: 1,
      title: "Instructor-Led Training",
      desc: "Participate in premium virtual classes led by instructors who bring real-world expertise to each session.",
      bg: "bg-[#2A75D4]",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Curated User Experience",
      desc: "Quickly find relevant content with personalized recommendations designed to guide your learning journey.",
      bg: "bg-[#E5E7EB]"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <motion.nav
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"
                >
                  <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link>
                  <span>/</span>
                  <span className="text-brand-primary capitalize">{slug.replace(/-/g, ' ')}</span>
                </motion.nav>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-purple mb-8 leading-[0.9] tracking-tighter">
                  {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-teal">Excellence</span>
                </h1>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
                  Tailored solutions for modern institutional <br className="hidden md:block" /> challenges and digital evolution
                </h2>

                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
                  Our {slug.replace(/-/g, ' ')} services are engineered to address the specific complexities of higher education, ensuring your institution stays at the forefront of digital transformation
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-10 py-5 bg-brand-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-brand-primary/20 hover:bg-brand-purple transition-all hover:-translate-y-1"
                  >
                    Request a Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-10 py-5 border-2 border-brand-primary/20 text-brand-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-primary/5 transition-all"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>

              <div className="flex-1 relative w-full aspect-[4/3] max-w-[600px]">
                <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <Image
                  src="/images/integration-hero.png"
                  alt="Service Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Services Section */}
        <section className="py-24 md:py-40 bg-slate-50/50">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1 relative w-full aspect-[3/4] max-w-[480px] rounded-[60px] overflow-hidden border-[16px] border-white shadow-2xl">
                <Image
                  src="/images/student-hero.png"
                  alt="Student Excellence"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-[1.5]">
                <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-brand-primary uppercase bg-brand-primary/5 rounded-full">
                  Deliverables
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-brand-purple mb-12 tracking-tighter">
                  What our <span className="text-brand-teal">{slug.replace(/-/g, ' ')}</span> <br /> service delivers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Strategic Planning", desc: "Developing a roadmap for successful implementation and growth.", icon: "🎯" },
                    { title: "System Configuration", desc: "Expert setup tailored to your institution's specific requirements.", icon: "⚙️" },
                    { title: "Data Security", desc: "Ensuring the highest standards of data protection and privacy.", icon: "🔐" },
                    { title: "User Training", desc: "Empowering your staff with the knowledge to use tools effectively.", icon: "📖" }
                  ].map((service, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="group p-8 rounded-[32px] bg-white border border-slate-100 hover:border-brand-primary/20 hover:shadow-xl transition-all"
                    >
                      <div className="text-4xl mb-6">{service.icon}</div>
                      <h3 className="text-xl font-bold text-brand-purple mb-3">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                        {service.desc}
                      </p>
                      <button className="text-brand-primary font-black text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 hover:gap-3 transition-all">
                        Deep Dive <span>&rarr;</span>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-brand-primary uppercase bg-brand-primary/5 rounded-full">
                Partnership Models
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-purple mb-4 tracking-tighter">
                How Institutions Engage
              </h2>
              <p className="text-lg text-slate-500 font-medium">with our <span className="text-brand-primary capitalize">{slug.replace(/-/g, ' ')}</span> services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {engagementCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-brand-primary/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 text-2xl">
                    {idx === 0 ? "🚀" : idx === 1 ? "📈" : idx === 2 ? "🤝" : "➕"}
                  </div>
                  <h4 className="text-xl font-black text-brand-purple mb-4 leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-medium italic">
                    {card.desc}
                  </p>
                  <button className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] border-b-2 border-brand-primary/10 pb-1 hover:border-brand-primary transition-all">
                    Inquire Model
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-24 md:py-40 bg-slate-50/50">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-brand-purple mb-4 tracking-tighter">
                Explore <span className="text-brand-primary capitalize">{slug.replace(/-/g, ' ')}</span> resources
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                Access live, on-demand, and role-based training with expert-led classes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {exploreItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-12 rounded-[48px] shadow-xl flex flex-col justify-center transition-all duration-500 h-full ${item.bg === 'bg-[#2A75D4]' ? 'bg-brand-primary text-white' : 'bg-white text-brand-purple border border-slate-100'}`}
                >
                  <h4 className="text-2xl font-black mb-6 tracking-tight">{item.title}</h4>
                  <p className={`text-sm leading-relaxed mb-10 font-medium opacity-80`}>
                    {item.desc}
                  </p>
                  <div className="mt-auto">
                    <div className={`w-10 h-10 rounded-full border-2 border-current flex items-center justify-center hover:bg-white hover:text-brand-primary transition-colors`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/university/discover-impact-bg.svg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-6">
            <h2 className="text-[48px] md:text-[64px] font-bold mb-12">
              Eduvas was with <br />us all the while
            </h2>
            <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 mx-auto">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#2A75D4] border-b-[10px] border-b-transparent ml-1" />
            </button>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-[#F1F5F9]">
          <div className="max-w-[1440px] mx-auto px-6 flex flex-wrap items-center justify-center gap-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: -2 }}
                className="opacity-50 hover:opacity-100 transition-all cursor-pointer"
              >
                <Image
                  src={`/images/institutions/inst-${i}.png`}
                  alt={`Institution ${i}`}
                  width={120}
                  height={60}
                  className="h-8 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="bg-brand-primary rounded-[80px] p-12 md:p-32 text-white text-center relative overflow-hidden shadow-2xl shadow-brand-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-teal to-brand-primary opacity-50" />
              <div className="absolute inset-0 bg-[url('/images/university/lets-talk-bg.svg')] opacity-20 bg-cover mix-blend-overlay" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                  Ready to Transform Your Institution?
                </h2>
                <p className="text-lg md:text-xl font-medium opacity-90 mb-12 max-w-xl mx-auto">
                  Our team is committed to helping you implement the right tools for lasting success. Get started today with our <span className="capitalize underline">{slug.replace(/-/g, ' ')}</span> experts.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-12 py-6 bg-white text-brand-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-xl"
                  >
                    Request a Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-12 py-6 border-2 border-white/40 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all hover:-translate-y-1"
                  >
                    Contact Experts
                  </Link>
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
