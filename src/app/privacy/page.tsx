"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Privacy() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Privacy Policy - FunFlags</title>
        <meta name="description" content="Privacy policy for FunFlags mobile application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold hover:text-gray-200">
                FunFlags
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center">
              <Link href="/" className="px-3 py-2 rounded-md text-white font-medium hover:bg-blue-700">
                Home
              </Link>
              <Link href="/privacy" className="px-3 py-2 rounded-md text-white font-medium bg-blue-700">
                Privacy Policy
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
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
              <Link href="/" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-blue-700">
                Home
              </Link>
              <Link href="/privacy" className="block px-3 py-2 rounded-md text-white font-medium bg-blue-700">
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Privacy Policy for FunFlags</h1>
            <p className="text-gray-500 mb-8"><strong>Effective Date: May 18, 2025</strong></p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Thank you for choosing FunFlags. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application ("App"). We are committed to ensuring the privacy and security of your data.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-blue-700 mb-2">Information You Provide</h3>
              <p className="text-gray-700 mb-4">
                We do not require you to create an account or provide any personal information to use our app.
              </p>
              
              <h3 className="text-xl font-medium text-blue-700 mb-2">Information Collected Automatically</h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li className="mb-2"><strong>Usage Data</strong>: We collect anonymous usage statistics to improve our app, including which features you use most frequently and how you interact with the app.</li>
                <li className="mb-2"><strong>Device Information</strong>: We collect basic device information such as device type, operating system version, and app version for troubleshooting and optimization purposes.</li>
              </ul>
              
              <h3 className="text-xl font-medium text-blue-700 mb-2">Third-Party Services</h3>
              <p className="text-gray-700 mb-4">
                Our app uses the following third-party services:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li><strong>REST Countries API</strong>: We use this public API to fetch country flag images and country information. No personal data is sent to this API.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Improve and optimize our app's performance and user experience</li>
                <li>Diagnose technical issues and bugs</li>
                <li>Analyze usage patterns to enhance features</li>
                <li>Maintain the security and functionality of our app</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Data Storage and Security</h2>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Your quiz progress and statistics are stored locally on your device.</li>
                <li>We do not store any user data on external servers.</li>
                <li>We implement reasonable security measures to protect any information processed by our app.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your information to third parties.
              </p>
              <p className="text-gray-700 mb-4">
                We may disclose information:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>If required by law or legal process</li>
                <li>To protect our rights, property, or safety, or that of our users or others</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our App is designed to be educational and is suitable for users of all ages. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided personal information, please contact us so we can take appropriate action.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Your Choices</h2>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li><strong>Local Data</strong>: You can clear locally stored app data through your device settings.</li>
                <li><strong>Analytics Opt-Out</strong>: In future versions with analytics integration, we will provide an option to opt out of anonymous usage statistics.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
              </p>
              <p className="text-gray-700 mb-4">
                [Your Contact Email]
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Consent</h2>
              <p className="text-gray-700 mb-4">
                By using our App, you consent to our Privacy Policy and agree to its terms and conditions.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
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