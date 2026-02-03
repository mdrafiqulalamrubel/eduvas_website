import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function CustomerReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="mb-6">
            <Link href="/" className="text-brand-primary hover:text-brand-action font-medium flex items-center gap-2">
              &larr; Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Hear from educational institutions worldwide who have transformed their operations with Eduvas. 
            Real stories from real customers about their journey to digital excellence.
          </p>
          
          {/* Sample Review Cards */}
          <div className="space-y-6 mt-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#2a75d4] to-[#23a7a6] rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-gray-700 italic mb-4">
                    &quot;Implementing Eduvas has completely transformed how we manage our university operations. 
                    The integrated system has improved efficiency across all departments.&quot;
                  </p>
                  <p className="font-semibold text-gray-900">Dr. Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">Vice Chancellor, Modern University</p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#23a7a6] to-[#2a75d4] rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-gray-700 italic mb-4">
                    &quot;The support team is exceptional, and the platform&apos;s scalability has allowed us 
                    to grow seamlessly from 500 to 5000 students.&quot;
                  </p>
                  <p className="font-semibold text-gray-900">Prof. Michael Chen</p>
                  <p className="text-gray-600 text-sm">Dean, International Institute of Technology</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <Link href="/contact" className="bg-brand-action hover:bg-brand-primary text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all">
              Share Your Experience
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
