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
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string; previewUrl?: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to send message');
      }
      setResult({ ok: true, message: 'Message sent successfully. I will get back to you soon!', previewUrl: data.previewUrl });
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch (err: any) {
      setResult({ ok: false, message: err.message || 'Something went wrong. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
  <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 tracking-wide uppercase text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-[#ff2828] text-black placeholder-gray-500 text-base transition-colors duration-200"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 tracking-wide uppercase text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-[#ff2828] text-black placeholder-gray-500 text-base transition-colors duration-200"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2 tracking-wide uppercase text-gray-700">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-[#ff2828] text-black placeholder-gray-500 text-base transition-colors duration-200"
            placeholder="Your Company Name"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2 tracking-wide uppercase text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-[#ff2828] text-black placeholder-gray-500 text-base transition-colors duration-200"
            placeholder="What&apos;s this about?"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 tracking-wide uppercase text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-[#ff2828] text-black placeholder-gray-500 text-base resize-none transition-colors duration-200"
            placeholder="Your message here..."
          />
        </div>

        {result && (
          <div className={`text-center text-sm ${result.ok ? 'text-green-600' : 'text-red-600'}`}>
            <div>{result.message}</div>
            {result.previewUrl && (
              <a href={result.previewUrl} target="_blank" rel="noreferrer" className="underline text-gray-700 block mt-1">
                Preview email (development)
              </a>
            )}
          </div>
        )}

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={submitting}
            className={`px-10 py-4 bg-[#ff2828] text-white rounded-lg transition-all duration-200 text-lg font-semibold tracking-wide shadow-lg ${submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#ff4040] hover:shadow-xl transform hover:-translate-y-0.5'}`}
          >
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
} 