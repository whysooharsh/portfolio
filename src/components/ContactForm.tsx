import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/5">
      <div className="space-y-6">
        <div className="flex items-center justify-center md:justify-start">
          <div className="bg-neutral-800/50 p-4 rounded-full text-white w-10 h-10 flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white text-center md:text-left">Get in touch</h2>
        <p className="text-sm text-gray-400 text-center md:text-left leading-relaxed">
          Feel free to connect with me.
        </p>

        {status === 'success' && (
          <p className="text-green-400 text-sm text-center md:text-left">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center md:text-left">Failed to send message. Try again.</p>
        )}
      </div>

      <motion.div
        className="bg-black/50 p-5 rounded-lg border border-white/5 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
          <input
            type="text"
            name="from_name" 
            required
            className="w-full px-3 py-1.5 bg-neutral-800/70 text-white text-sm rounded-md border border-white/10 focus:ring-1 focus:ring-white/20 focus:border-white/20 outline-none"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="from_email"
            required
            className="w-full px-3 py-1.5 bg-neutral-800/70 text-white text-sm rounded-md border border-white/10 focus:ring-1 focus:ring-white/20 focus:border-white/20 outline-none"
            placeholder="Email Address"
          />
          <textarea
            name="message"
            rows={3}
            required
            className="w-full px-3 py-1.5 bg-neutral-800/70 text-white text-sm rounded-md border border-white/10 focus:ring-1 focus:ring-white/20 focus:border-white/20 outline-none resize-y"
            placeholder="Type your message here"
          ></textarea>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-md hover:bg-white/20 transition-colors border border-white/10"
          >
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
