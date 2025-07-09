import React from 'react';
import ContactForm from '../features/ContactForm';

export function ContactSection() {
  return (
    <div className="w-full py-6 px-4 md:px-8 md:py-10">
      <div className="w-full md:max-w-2xl md:mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold dark:font-light dark:text-white text-black mb-3">
          Contact Me
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Want to collaborate or just say hi?
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
