"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.role || !formData.email || !formData.phone) {
      alert('Please fill in all required fields marked with *');
      return;
    }

    // TODO: connect form endpoint (Netlify Forms / Formspree / CRM)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-ink mb-4">Request a Demo</h1>
      <p className="text-muted text-lg mb-8">
        Tell us about your solar workflow — we'll show pvNXT in action.
      </p>

      {submitted ? (
        <div className="bg-pvnxt/10 border border-pvnxt/20 p-8 rounded-2xl text-center">
          <p className="text-xl font-medium text-ink">Thanks — we'll be in touch.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-line bg-white text-ink focus:ring-2 focus:ring-pvnxt outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-ink">
                Company / EPC name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-line bg-white text-ink focus:ring-2 focus:ring-pvnxt outline-none transition-all"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-sm font-medium text-ink">
                Role <span className="text-red-500">*</span>
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-line bg-white text-ink focus:ring-2 focus:ring-pvnxt outline-none transition-all"
              >
                <option value="">Select role</option>
                <option value="EPC">EPC</option>
                <option value="Installer">Installer</option>
                <option value="Homeowner">Homeowner</option>
                <option value="O&M">O&M</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-line bg-white text-ink focus:ring-2 focus:ring-pvnxt outline-none transition-all"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-ink">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-line bg-white text-ink focus:ring-2 focus:ring-pvnxt outline-none transition-all"
              placeholder="+91 ..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-line bg-white text-ink focus:ring-2 focus:ring-pvnxt outline-none transition-all"
              placeholder="Tell us more about your needs..."
            />
          </div>

          <button
            type="submit"
            className="bg-[#047a88] text-white px-6 py-3.5 rounded-xl font-medium min-h-[44px] hover:bg-[#036572] transition-colors"
          >
            Request a Demo
          </button>
        </form>
      )}
    </div>
  );
}
