import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Phone, MapPin, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-14 md:py-20 border-b-3 border-neo-border dark:border-neo-darkborder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-block px-3 py-1 font-mono text-xs font-bold uppercase bg-neo-pink text-white border-2 border-neo-border shadow-neo-sm mb-3">
            04 // GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neo-black dark:text-zinc-100">
            LET'S COLLABORATE
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 font-sans text-sm sm:text-base max-w-2xl">
            Interested in discussing web automation pipelines, data analytics, or open internship/freelance opportunities? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="neo-box p-6 bg-white dark:bg-neo-darkcard">
              <h3 className="font-mono font-bold text-base text-neo-black dark:text-zinc-100 mb-4">
                Direct Contact Information
              </h3>

              {/* Email Card */}
              <div className="p-3 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800/80 flex items-center justify-between gap-2 shadow-neo-sm mb-3">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-neo-orange shrink-0" />
                  <span className="font-mono text-xs sm:text-sm font-bold truncate text-neo-black dark:text-zinc-100">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 border-2 border-neo-border dark:border-neo-darkborder bg-neo-yellow text-neo-black text-xs font-mono font-bold flex items-center gap-1 shadow-neo-sm cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-3 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800/80 flex items-center gap-2.5 shadow-neo-sm mb-4">
                <Phone className="w-4 h-4 text-neo-green shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-bold text-neo-black dark:text-zinc-100">
                  {PERSONAL_INFO.phone}
                </span>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs font-bold">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-zinc-800 flex items-center gap-2 shadow-neo-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-neo-black dark:text-zinc-100" />
                  <span>GITHUB</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-zinc-800 flex items-center gap-2 shadow-neo-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-neo-black dark:text-zinc-100" />
                  <span>LINKEDIN</span>
                </a>
              </div>

            </div>

            {/* Status Card */}
            <div className="neo-box p-5 bg-neo-yellow text-neo-black">
              <div className="font-mono text-[11px] font-extrabold uppercase mb-1">
                AVAILABILITY
              </div>
              <h4 className="text-lg font-black leading-tight">
                {PERSONAL_INFO.status}
              </h4>
              <p className="text-xs mt-2 font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.location}</span>
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="neo-box p-6 sm:p-7 bg-white dark:bg-neo-darkcard">
              
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-neo-border dark:border-neo-darkborder">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-neo-black dark:text-zinc-100">
                  <MessageSquare className="w-4 h-4 text-neo-cyan" />
                  <span>MESSAGE TRANSMISSION FORM</span>
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  QUICK RESPONSE
                </span>
              </div>

              {status === 'success' && (
                <div className="p-3.5 mb-5 border-2 border-neo-border bg-neo-green text-neo-black font-mono text-xs sm:text-sm font-bold shadow-neo">
                  [SUCCESS]: Your message has been sent successfully. I will get back to you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 mb-5 border-2 border-neo-border bg-[#E29578] text-neo-black font-mono text-xs sm:text-sm font-bold shadow-neo">
                  [NOTICE]: {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase mb-1 text-neo-black dark:text-zinc-200">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Full Name"
                      disabled={status === 'submitting'}
                      className="w-full px-3 py-2 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800 text-neo-black dark:text-zinc-100 font-sans text-sm focus:outline-none focus:bg-white shadow-neo-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase mb-1 text-neo-black dark:text-zinc-200">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="email@domain.com"
                      disabled={status === 'submitting'}
                      className="w-full px-3 py-2 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800 text-neo-black dark:text-zinc-100 font-sans text-sm focus:outline-none focus:bg-white shadow-neo-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase mb-1 text-neo-black dark:text-zinc-200">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Scraping Project Discussion / Internship Opportunity"
                    disabled={status === 'submitting'}
                    className="w-full px-3 py-2 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800 text-neo-black dark:text-zinc-100 font-sans text-sm focus:outline-none focus:bg-white shadow-neo-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase mb-1 text-neo-black dark:text-zinc-200">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message or project requirements here..."
                    disabled={status === 'submitting'}
                    className="w-full px-3 py-2 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800 text-neo-black dark:text-zinc-100 font-sans text-sm focus:outline-none focus:bg-white shadow-neo-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full neo-btn bg-neo-yellow hover:opacity-90 text-neo-black font-extrabold text-xs sm:text-sm font-mono py-3 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-neo"
                >
                  {status === 'submitting' ? (
                    <span>SENDING MESSAGE...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
