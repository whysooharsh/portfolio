import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


// UI component for contact form
const ContactForm: React.FC = () => {
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
          Free free to connect with me.
        </p>
       
       
      </div>

      <motion.div
        className="bg-black/50 p-5 rounded-lg border border-white/5 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
       
        <form className="space-y-3">
          <div>
          
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-1.5 bg-neutral-800/70 text-white text-sm rounded-md border border-white/10 focus:ring-1 focus:ring-white/20 focus:border-white/20 outline-none"
              placeholder="Full Name"
            />
          </div>
          <div>
           
            <input
              type="email"
              id="emailAddress"
              className="w-full px-3 py-1.5 bg-neutral-800/70 text-white text-sm rounded-md border border-white/10 focus:ring-1 focus:ring-white/20 focus:border-white/20 outline-none"
              placeholder="Email Address"
            />
          </div>
          
          <div>
           
            <textarea
              id="message"
              rows={3}
              className="w-full px-3 py-1.5 bg-neutral-800/70 text-white text-sm rounded-md border border-white/10 focus:ring-1 focus:ring-white/20 focus:border-white/20 outline-none resize-y"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-md hover:bg-white/20 transition-colors border border-white/10"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm; 