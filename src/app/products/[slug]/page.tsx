import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // In a real app, fetch product data based on slug
  const product = {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: `Detailed information about ${slug}. This is a placeholder for the product detailed view.`,
  };

  return (
    <div className="min-h-screen bg-gray-50">
       <nav className="fixed w-full z-50 bg-white border-b border-gray-100 flex items-center h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <img src="/Logo.png" alt="Eduvas Logo" className="h-10 w-auto" />
            </Link>
             <div className="flex items-center gap-12">
               <Link href="/request-demo" className="bg-brand-action hover:bg-brand-primary text-white pl-6 pr-1 py-1.5 rounded-full text-sm font-bold shadow-sm transition-all flex items-center gap-3">
                  Contact Us
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
             </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="mb-6">
                <Link href="/" className="text-brand-primary hover:text-brand-action font-medium flex items-center gap-2">
                    &larr; Back to Home
                </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {product.description}
            </p>
            <div className="flex gap-4">
                 <Link href="/request-demo" className="bg-brand-action hover:bg-brand-primary text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all">
                    Request Demo for {product.title}
                 </Link>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}