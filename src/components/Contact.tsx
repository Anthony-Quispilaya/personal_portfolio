"use client";

import React from 'react';
import ContactForm from './contact/contact';

export default function Contact() {
  return (
    <section className="w-full py-16 px-4 bg-[#111111]" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#ff2828]">Contact Me</h2>
        <p className="text-center text-white mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
