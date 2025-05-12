import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      {/* Navigation Bar */}
      <nav className="h-14 bg-black/80 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-8">
              <Link 
                href="/"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-200 hover:scale-105"
              >
                <FaArrowLeft className="w-5 h-5" />
                <span>Back to Portfolio</span>
              </Link>
              <span className="text-xl font-semibold transition-transform duration-200 hover:scale-105">Basic Volleyball Website</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="h-[calc(100vh-3.5rem)]">
        {children}
      </main>
    </div>
  );
} 