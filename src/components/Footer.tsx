import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer Content */}
      <div
        className="py-16 md:py-24 px-6 md:px-12 lg:px-24"
        style={{
          background: 'linear-gradient(130.44deg, rgba(234,243,255,1) 22.24%, rgba(205,242,235,1) 100%)'
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {/* Left Section - Logo & Description */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Logo */}
              <div className="relative w-40 md:w-48">
                <Image
                  src="/footer-logo.png"
                  alt="Eduvas Logo"
                  width={189}
                  height={53}
                  className="w-full h-auto"
                />
              </div>

              {/* Tagline */}
              <p className="text-brand-purple text-base md:text-lg leading-relaxed max-w-xs font-medium opacity-80">
                The smarter way to manage education. Effortless, secure, and scalable.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {[
                  { name: 'facebook', icon: '/social-facebook.svg' },
                  { name: 'youtube', icon: '/social-youtube.svg' },
                  { name: 'linkedin', icon: '/social-linkedin.svg' },
                  { name: 'github', icon: '/social-github.svg' }
                ].map((social) => (
                  <Link key={social.name} href="#" className="w-8 h-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-brand-primary hover:scale-110 transition-all duration-300 shadow-sm border border-black/5">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={16}
                      height={16}
                    />
                  </Link>
                ))}
              </div>

              {/* Phone Button */}
              <Link
                href="tel:+880 1713-493107"
                className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-fit group border border-black/5"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image
                    src="/icon-phone.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-black text-brand-purple/40 uppercase tracking-widest leading-none mb-1">Call Support</p>
                  <span className="font-montserrat font-bold text-base text-brand-purple">+880 1713-493107</span>
                </div>
              </Link>
            </div>

            {/* Ways to Support */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h3 className="text-brand-purple font-montserrat font-black text-lg md:text-xl uppercase tracking-wider">Ways to Support</h3>
              <nav className="flex flex-col gap-4 md:gap-5">
                {[
                  'Make a Donation',
                  'Corporate Partnership',
                  'Volunteer Programs',
                  'Alumni Engagement'
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-brand-purple/70 font-medium text-base hover:text-brand-primary hover:translate-x-2 transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Explore */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h3 className="text-brand-purple font-montserrat font-black text-lg md:text-xl uppercase tracking-wider">Explore</h3>
              <nav className="flex flex-col gap-4 md:gap-5">
                {[
                  'Research Projects',
                  'Academic Programs',
                  'Innovation Hub',
                  'Success Stories'
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-brand-purple/70 font-medium text-base hover:text-brand-primary hover:translate-x-2 transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h3 className="text-brand-purple font-montserrat font-black text-lg md:text-xl uppercase tracking-wider">Contact</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[10px] font-black text-brand-purple/40 uppercase tracking-widest mb-2">Our Email</p>
                  <Link
                    href="mailto:support@eduvas.com"
                    className="text-brand-purple font-bold text-lg border-b-2 border-brand-teal/30 hover:border-brand-teal transition-all inline-block"
                  >
                    support@eduvas.com
                  </Link>
                </div>
                <div>
                  <p className="text-[10px] font-black text-brand-purple/40 uppercase tracking-widest mb-2">Location</p>
                  <p className="text-brand-purple font-bold text-lg">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="py-8 px-6 bg-brand-primary"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-montserrat font-medium text-white/80 text-sm md:text-base">
            © 2026 EDUVAS. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/60 text-xs font-black uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
