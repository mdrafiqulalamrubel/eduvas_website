import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="mb-6">
            <Link href="/" className="text-brand-primary hover:text-brand-action font-medium flex items-center gap-2">
              &larr; Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Stay updated with the latest insights, trends, and best practices in educational technology. 
            Our blog features articles on digital transformation, student success strategies, and innovative solutions for modern institutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-[#2a75d4] to-[#23a7a6] h-40 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Latest in EdTech</h3>
              <p className="text-gray-600 mb-4">Discover how technology is transforming education worldwide.</p>
              <span className="text-brand-primary font-medium">Coming soon</span>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-[#23a7a6] to-[#2a75d4] h-40 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
              <p className="text-gray-600 mb-4">Read about institutions thriving with Eduvas.</p>
              <span className="text-brand-primary font-medium">Coming soon</span>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <Link href="/contact" className="bg-brand-action hover:bg-brand-primary text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
