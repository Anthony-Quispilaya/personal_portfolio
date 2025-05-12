"use client";

import React from 'react';
import ContactForm from './contact/contact';
import ScrollAnimation from './ui/ScrollAnimation';
import SocialLinks from './contact/SocialLinks';

export default function Contact() {
  return (
    <section className="w-full py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-[2px] rounded-lg p-12 border border-white/20 shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/5">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-8 text-center text-[#ff2828]">Contact Me</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-center text-white mb-8 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.3}>
            <SocialLinks />
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <ContactForm />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
