"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>FunFlags - Privacy Policy</title>
        <meta name="description" content="Privacy policy for FunFlags mobile application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">FunFlags</span>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center">
              <Link href="/" className="px-3 py-2 rounded-md text-white font-medium hover:bg-green-700">
                Home
              </Link>
              <Link href="/privacy" className="px-3 py-2 rounded-md text-white font-medium hover:bg-green-700">
                Privacy Policy
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showMobileMenu ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-green-700">
                Home
              </Link>
              <Link href="/privacy" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-green-700">
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-green-600">Welcome to FunFlags</h1>
              <p className="mt-4 text-lg text-gray-600">An interactive learning platform to learn and practice the knowledge of country flags.</p>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="bg-green-50 p-6 rounded-lg w-full">
                <h2 className="text-xl font-semibold text-green-800 mb-3">About Our App</h2>
                <p className="text-gray-700">
                  FunFlags is a mobile app that provides an interactive learning platform to learn and practice the knowledge of country flags.
                  Perfect for travelers, geography enthusiasts, and anyone looking to expand their global knowledge.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg w-full">
                <h2 className="text-xl font-semibold text-green-800 mb-3">Privacy First</h2>
                <p className="text-gray-700">
                  We believe in protecting your privacy. Our app doesn&apos;t require an account and stores all progress locally on your device.
                </p>
                <div className="mt-4">
                  <Link 
                    href="/privacy" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Read Our Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 FunFlags. All rights reserved.</p>
            </div>
            <div>
              <Link href="/privacy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}