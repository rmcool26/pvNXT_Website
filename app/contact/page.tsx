import React from 'react';
import ContactForm from './ContactForm';

export const metadata = {
  title: "Contact pvNXT – Request a Demo",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ContactForm />

        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-ink mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pvnxt/10 rounded-lg text-pvnxt">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a href="mailto:support@terranxt.com" className="text-ink font-medium hover:text-pvnxt transition-colors">support@terranxt.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pvnxt/10 rounded-lg text-pvnxt">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Phone</p>
                  <a href="tel:+918447444157" className="text-ink font-medium hover:text-pvnxt transition-colors">+91-8447444157</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pvnxt/10 rounded-lg text-pvnxt">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Address</p>
                  <p className="text-ink font-medium">12A, M3M Urbana Premium, Sector 67, Gurugram 122101</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=12A,M3M+Urbana+Premium,Sector+67,Gurugram+122101" target="_blank" rel="noopener noreferrer" className="text-pvnxt text-sm hover:underline inline-block mt-1">View on Google Maps</a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-ink text-white rounded-2xl">
            <p className="text-xl font-medium mb-4">Talk to us</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/company/terranxt" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm">LinkedIn</a>
              <a href="mailto:support@terranxt.com" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm">Email us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
