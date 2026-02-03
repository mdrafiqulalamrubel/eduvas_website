'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  id?: string;
  'aria-labelledby'?: string;
}

function DropdownContainer({ children, isOpen, onClose, id, 'aria-labelledby': ariaLabelledBy }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      onClose();
      timeoutRef.current = undefined;
    }, 150);
  }, [onClose]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute left-0 z-50 pt-4"
          id={id}
          aria-labelledby={ariaLabelledBy}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDropdown = useCallback(() => setActiveDropdown(null), []);

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out flex justify-center pt-4 md:pt-6 px-4 md:px-6 pointer-events-none`}
        role="banner"
      >
        <motion.div
          className={`relative pointer-events-auto flex items-center justify-between w-full max-w-[1440px] px-6 md:px-10 rounded-2xl md:rounded-[35px] border transition-all duration-500 ${isScrolled
            ? 'h-[70px] md:h-[80px] bg-white/80 backdrop-blur-2xl border-brand-teal/10 shadow-[0_20px_40px_-15px_rgba(35,167,166,0.1)]'
            : 'h-[80px] md:h-[100px] bg-white/40 backdrop-blur-md border-white/20 shadow-none'
            }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle Branded Background Glow inside the header bar */}
          <div className="absolute inset-0 rounded-2xl md:rounded-[35px] overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-1/2 -left-20 w-64 h-64 bg-brand-primary/20 blur-[60px]" />
            <div className="absolute -bottom-1/2 -right-20 w-64 h-64 bg-brand-purple/20 blur-[60px]" />
          </div>

          {/* Logo with Status Pulse */}
          <div className="relative z-10 flex items-center gap-2 md:gap-4">
            <Link
              href="/"
              className="flex-shrink-0 group"
              aria-label="Eduvas - Home"
            >
              <Image
                src="/Logo.png"
                alt="Eduvas"
                width={160}
                height={45}
                className="h-[30px] md:h-[40px] w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <div className="h-4 md:h-6 w-[1px] bg-brand-purple/10 mx-1 md:mx-2 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              <span className="text-[7px] md:text-[9px] font-black text-brand-purple/40 uppercase tracking-widest">Sync Active</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-8 xl:gap-12 relative z-10"
            role="navigation"
          >
            {[
              { id: 'products', label: 'Products', hasItems: true },
              { id: 'services', label: 'Services', hasItems: true },
              { id: 'why', label: 'Why Eduvas', link: '/why-eduvas' },
              { id: 'resource', label: 'Resource', hasItems: true }
            ].map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasItems && handleMouseEnter(item.id)}
                onMouseLeave={closeDropdown}
              >
                {item.link ? (
                  <Link
                    href={item.link}
                    className="group relative py-2 font-montserrat text-[14px] font-bold text-brand-purple hover:text-brand-primary transition-colors tracking-wide"
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform shadow-[0_0_10px_#320070]"
                    />
                  </Link>
                ) : (
                  <button
                    className="group relative flex items-center gap-2 py-2 font-montserrat text-[14px] font-bold text-brand-purple tracking-wide cursor-pointer text-left"
                    onClick={() => activeDropdown === item.id ? closeDropdown() : handleMouseEnter(item.id)}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: activeDropdown === item.id ? 180 : 0 }}
                      className="text-brand-teal/60"
                    >
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </motion.span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform shadow-[0_0_10px_#320070]"
                    />
                  </button>
                )}

                {item.id === 'products' && (
                  <DropdownContainer isOpen={activeDropdown === 'products'} onClose={closeDropdown}>
                    <GlassDropdown width="w-[480px]">
                      <ProductsGrid onItemClick={closeDropdown} />
                    </GlassDropdown>
                  </DropdownContainer>
                )}
                {item.id === 'services' && (
                  <DropdownContainer isOpen={activeDropdown === 'services'} onClose={closeDropdown}>
                    <GlassDropdown width="w-[600px]">
                      <ServicesGrid onItemClick={closeDropdown} />
                    </GlassDropdown>
                  </DropdownContainer>
                )}
                {item.id === 'resource' && (
                  <DropdownContainer isOpen={activeDropdown === 'resource'} onClose={closeDropdown}>
                    <GlassDropdown width="w-[400px]">
                      <ResourceGrid onItemClick={closeDropdown} />
                    </GlassDropdown>
                  </DropdownContainer>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Call to Action & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="hidden sm:flex relative items-center gap-3 px-6 md:px-8 h-[44px] md:h-[50px] rounded-full bg-brand-purple text-white font-montserrat text-[11px] md:text-[13px] font-black tracking-widest uppercase overflow-hidden transition-all shadow-lg hover:shadow-brand-purple/20 hover:scale-105"
            >
              <span className="relative z-10">Contact</span>
              <motion.div
                className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-brand-teal"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </motion.div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 rounded-xl bg-brand-purple/5 flex flex-col items-center justify-center gap-1.5 transition-colors hover:bg-brand-purple/10"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-brand-purple rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-brand-purple rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-brand-purple rounded-full"
              />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <Image src="/Logo.png" alt="Eduvas" width={120} height={35} className="h-[30px] w-auto" />
              <button
                onClick={toggleMobileMenu}
                className="w-10 h-10 rounded-xl bg-brand-purple text-white flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {[
                { label: 'Products', items: ['University', 'School', 'Institute'] },
                { label: 'Services', items: ['Integration', 'Managed System', 'Implementation', 'Customized', 'Data Migration'] },
                { label: 'Resources', items: ['Blog', 'Customer Review', 'Case Study'] },
                { label: 'Company', items: ['Why Eduvas', 'Contact Us'] }
              ].map((section) => (
                <div key={section.label} className="space-y-4">
                  <h3 className="text-[10px] font-black text-brand-purple/30 uppercase tracking-[0.3em]">{section.label}</h3>
                  <div className="grid gap-4">
                    {section.items.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        onClick={toggleMobileMenu}
                        className="text-xl font-black text-brand-purple hover:text-brand-primary transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-black/5 bg-[#f2f8f7]">
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="w-full flex items-center justify-center gap-4 h-[60px] rounded-2xl bg-brand-purple text-white font-montserrat font-black uppercase tracking-widest text-sm"
              >
                Start Your Journey
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GlassDropdown({ children, width }: { children: React.ReactNode; width: string }) {
  return (
    <div className={`${width} relative p-8 bg-white/95 backdrop-blur-3xl rounded-[40px] border border-brand-teal/10 shadow-[0_40px_80px_-20px_rgba(0,0,20,0.15)] overflow-hidden`}>
      {/* Background accent inside dropdown */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl rounded-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function ProductsGrid({ onItemClick }: { onItemClick: () => void }) {
  const items = [
    { name: 'University', href: '/products/university', desc: 'Global campus management' },
    { name: 'School', href: '/products/schools', desc: 'Next-gen K12 ecosystem' },
    { name: 'Institute', href: '/products/institute', desc: 'Smart vocational hub' }
  ];
  return (
    <div className="grid gap-6">
      <p className="text-[10px] font-black text-brand-purple/30 uppercase tracking-[0.3em] mb-2">Our Solutions</p>
      {items.map(item => (
        <Link key={item.name} href={item.href} onClick={onItemClick} className="group block">
          <h4 className="text-brand-purple font-montserrat font-bold text-lg group-hover:text-brand-primary transition-colors">{item.name}</h4>
          <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
        </Link>
      ))}
      <div className="mt-6 p-6 rounded-[30px] bg-brand-primary/5 border border-brand-primary/10">
        <p className="text-brand-purple text-sm font-bold mb-4">Ready to innovate?</p>
        <Link href="/contact" className="text-brand-teal text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
          Schedule a Consult <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}

function ServicesGrid({ onItemClick }: { onItemClick: () => void }) {
  const items = [
    'Integration', 'Managed System', 'Implementation', 'Customized', 'Data Migration'
  ];
  return (
    <div>
      <p className="text-[10px] font-black text-brand-purple/30 uppercase tracking-[0.3em] mb-6">Expert Services</p>
      <div className="grid grid-cols-2 gap-4">
        {items.map(item => (
          <Link key={item} href={`/services/${item.toLowerCase().replace(' ', '-')}`} onClick={onItemClick} className="group text-brand-purple font-montserrat font-bold text-sm hover:text-brand-teal transition-all flex items-center gap-2 text-left">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/20 group-hover:bg-brand-teal transition-color" />
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ResourceGrid({ onItemClick }: { onItemClick: () => void }) {
  const items = ['Blog', 'Customer Review', 'Case Study'];
  return (
    <div className="grid gap-6">
      <p className="text-[10px] font-black text-brand-purple/30 uppercase tracking-[0.3em] mb-2">Knowledge Space</p>
      {items.map(item => (
        <Link key={item} href={`/resource/${item.toLowerCase().replace(' ', '-')}`} onClick={onItemClick} className="text-brand-purple font-montserrat font-bold text-lg hover:text-brand-primary transition-colors block text-left">
          {item}
        </Link>
      ))}
    </div>
  );
}

