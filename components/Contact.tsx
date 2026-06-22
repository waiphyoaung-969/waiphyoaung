"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-teal-400 to-mint-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-text-muted text-sm font-mono tracking-widest uppercase">
            お問い合わせ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-semibold text-text mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-8">
              Have a project in mind or just want to chat? Drop me a message —
              I&apos;d love to hear from you.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: FiMail,
                  label: "hello@aroni.dev",
                  href: "mailto:hello@aroni.dev",
                },
                {
                  icon: FiGithub,
                  label: "github.com/aroni",
                  href: "https://github.com/aroni",
                },
                {
                  icon: FiLinkedin,
                  label: "linkedin.com/in/aroni",
                  href: "https://linkedin.com/in/aroni",
                },
                {
                  icon: FiTwitter,
                  label: "twitter.com/aroni",
                  href: "https://twitter.com/aroni",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-muted hover:text-teal-400 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-teal-600/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-600/20 transition-colors">
                    <link.icon size={16} />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-teal-500/10 rounded-xl text-text placeholder-text-muted/50 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-teal-500/10 rounded-xl text-text placeholder-text-muted/50 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface border border-teal-500/10 rounded-xl text-text placeholder-text-muted/50 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className={`w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  sent
                    ? "bg-mint-600 text-white cursor-default"
                    : "bg-teal-600 hover:bg-teal-500 text-white hover:shadow-lg hover:shadow-teal-500/25 active:scale-[0.98]"
                }`}
              >
                {sent ? (
                  <>
                    <span>Message Sent!</span>
                    <span className="text-lg">&#10003;</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
