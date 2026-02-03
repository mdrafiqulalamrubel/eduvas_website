import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="mb-6">
            <Link href="/" className="text-brand-primary hover:text-brand-action font-medium flex items-center gap-2">
              &larr; Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Explore in-depth case studies showcasing how educational institutions have successfully 
            implemented Eduvas to achieve their strategic goals and overcome operational challenges.
          </p>
          
          {/* Sample Case Study Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-[#2a75d4] to-[#23a7a6] h-48"></div>
              <div className="p-6">
                <span className="text-brand-primary text-sm font-semibold uppercase tracking-wide">University</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">Transforming University Operations at Scale</h3>
                <p className="text-gray-600 mb-4">
                  How Bangladesh University of Textiles streamlined operations for 10,000+ students 
                  across multiple departments.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📊 50% efficiency gain</span>
                  <span>👥 10K+ users</span>
                </div>
                <button className="mt-4 text-brand-primary font-medium hover:text-brand-action">
                  Read full case study →
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-[#23a7a6] to-[#2a75d4] h-48"></div>
              <div className="p-6">
                <span className="text-brand-primary text-sm font-semibold uppercase tracking-wide">School</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">Modernizing K-12 Education</h3>
                <p className="text-gray-600 mb-4">
                  A leading international school&apos;s journey to digital transformation with 
                  seamless parent-teacher collaboration.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📈 85% satisfaction</span>
                  <span>🏫 Multi-campus</span>
                </div>
                <button className="mt-4 text-brand-primary font-medium hover:text-brand-action">
                  Read full case study →
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <Link href="/contact" className="bg-brand-action hover:bg-brand-primary text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all">
              Request Detailed Case Studies
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
