"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with all form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}
    `.trim();

    // Create mailto link with subject and body
    const mailtoLink = `mailto:anthonyquispilaya@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-[#111111] rounded-lg p-12 shadow-lg border border-white/20">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2 tracking-wide uppercase">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff2828] text-white placeholder-gray-500 text-base transition-colors duration-200"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2 tracking-wide uppercase">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff2828] text-white placeholder-gray-500 text-base transition-colors duration-200"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2 tracking-wide uppercase">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff2828] text-white placeholder-gray-500 text-base transition-colors duration-200"
            placeholder="Your Company Name"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2 tracking-wide uppercase">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff2828] text-white placeholder-gray-500 text-base transition-colors duration-200"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2 tracking-wide uppercase">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff2828] text-white placeholder-gray-500 text-base resize-none transition-colors duration-200"
            placeholder="Your message here..."
          />
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="px-10 py-4 bg-[#ff2828] text-white rounded-lg hover:bg-[#ff4040] transition-all duration-200 text-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
} 