"use client";

import React from 'react';
import ContactForm from './contact/contact';
import ScrollAnimation from './ui/ScrollAnimation';
import SocialLinks from './contact/SocialLinks';

export default function Contact() {
  return (
    <section className="w-full py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
  <div className="card card-hover p-12">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-center mb-8 max-w-2xl mx-auto">
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
