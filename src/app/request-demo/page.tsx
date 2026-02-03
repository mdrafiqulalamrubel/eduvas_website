'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

export default function RequestDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 flex flex-col overflow-hidden relative">
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100 flex items-center h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <img src="/Logo.png" alt="Eduvas Logo" className="h-10 w-auto" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Section */}
            <div className="flex flex-col">
              {/* Main Heading */}
              <h1 
                className="font-montserrat font-semibold text-[50px] leading-[60px] mb-[15px]"
                style={{ color: '#141d38' }}
              >
                Transform Your Institution Today.
              </h1>

              {/* Description */}
              <p 
                className="font-inter font-normal text-[16px] leading-[45px] mb-[39px]"
                style={{ color: '#000000' }}
              >
                Get a personalized onboarding roadmap and price quote designed for your specific curriculum needs.
              </p>

              {/* Info Box */}
              <div 
                className="rounded-[24px] px-[35px] py-[24px]"
                style={{ 
                  backgroundColor: '#e6f2ff',
                  border: '3px solid #2a75d4',
                  borderLeftWidth: '8px'
                }}
              >
                <p 
                  className="font-inter font-normal text-[16px] leading-[32px]"
                  style={{ color: '#000000' }}
                >
                  Eduvas is a leading global provider of educational technology solutions. We empower 500+ institutions across 20 countries with cloud-native management tools.
                </p>
              </div>
            </div>

            {/* Right Section - Form Card */}
            <div 
              className="rounded-[16px] bg-white p-[40px]"
              style={{
                boxShadow: '0px 10px 30px rgba(2, 6, 23, 0.06), 0px 0px 0px 1px rgba(15, 23, 42, 0.05)'
              }}
            >
              {/* Form Header */}
              <h2 
                className="font-inter font-bold text-[22.5px] mb-[4px]"
                style={{ 
                  color: '#0f172a',
                  letterSpacing: '-0.6px'
                }}
              >
                Send us a message
              </h2>
              <p 
                className="font-inter font-normal text-[13.8px] mb-[44px]"
                style={{ color: '#64748b' }}
              >
                We'll get back within 24h.
              </p>

              {/* Form */}
              <form className="space-y-[20px]">
                {/* First Row - Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-[16px] py-[14px] rounded-[8px] border border-gray-200 font-inter font-normal text-[15px] outline-hidden focus:ring-2 focus:ring-brand-action/20 focus:border-brand-action transition-all placeholder:text-[#64748b]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-[16px] py-[14px] rounded-[8px] border border-gray-200 font-inter font-normal text-[15px] outline-hidden focus:ring-2 focus:ring-brand-action/20 focus:border-brand-action transition-all placeholder:text-[#64748b]"
                    />
                  </div>
                </div>

                {/* Second Row - Phone and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-[16px] py-[14px] rounded-[8px] border border-gray-200 font-inter font-normal text-[14.8px] outline-hidden focus:ring-2 focus:ring-brand-action/20 focus:border-brand-action transition-all placeholder:text-[#64748b]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-[16px] py-[14px] rounded-[8px] border border-gray-200 font-inter font-normal text-[15px] outline-hidden focus:ring-2 focus:ring-brand-action/20 focus:border-brand-action transition-all placeholder:text-[#64748b]"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-[16px] py-[14px] rounded-[8px] border border-gray-200 font-inter font-normal text-[14.6px] outline-hidden focus:ring-2 focus:ring-brand-action/20 focus:border-brand-action transition-all resize-none placeholder:text-[#64748b]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-[12px] py-[17px] flex items-center justify-center gap-[8px] font-inter font-bold text-[15.1px] text-white transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#2a75d4',
                    boxShadow: '0px 4px 6px rgba(76, 29, 149, 0.15), 0px 10px 15px rgba(76, 29, 149, 0.15)'
                  }}
                >
                  Send message
                  <Image 
                    src="/arrow-send.svg" 
                    alt="" 
                    width={5} 
                    height={9}
                    className="ml-[2px]"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
