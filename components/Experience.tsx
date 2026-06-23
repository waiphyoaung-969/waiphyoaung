"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2024 — Present",
    title: "CS Student",
    company: "University (2nd Year)",
    description:
      "Pursuing a degree in Computer Science. Coursework covers data structures, algorithms, databases, web development, and software engineering fundamentals.",
    tags: ["Java", "Python", "Data Structures", "Algorithms"],
  },
  {
    period: "2025",
    title: "Participant / Developer",
    company: "Monad Blitz Hackathon",
    description:
      "Collaborated in a small team during an intense, fast-paced blockchain hackathon. Focused on exploring Web3 infrastructure and studying the architecture of Monad's ultra-fast parallel EVM chain. Gained valuable hands-on experience with high-throughput smart contract environments, understanding transaction speed scaling (up to 10,000 TPS), and decentralized deployment.",
    tags: ["Web3", "Blockchain", "Monad Architecture", "Team Collaboration", "Smart Contracts"],
  },
  {
    period: "2020 — 2022",
    title: "HND in Computing & Networking",
    company: "Y-Max Private University (Myanmar) • Certified by SQA (Scottish Qualifications Authority)",
    description:
      "Earned a Higher National Diploma with a core focus on network infrastructure, systems administration, and protocol management. Gained hands-on experience in configuring secure networks, managing server environments, and troubleshooting hardware-to-software connectivity.",
    tags: ["Networking", "TCP/IP", "Routing & Switching", "Linux Systems Admin"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-teal-400 to-mint-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-text-muted text-sm font-mono tracking-widest uppercase">
            My Journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative bg-surface border border-teal-500/10 rounded-2xl p-6 hover:border-teal-500/40 transition-all duration-500 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-teal-400 tracking-widest px-3 py-1 rounded-full bg-teal-600/10 border border-teal-600/20">
                  {exp.period}
                </span>
                <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
              </div>

              <h3 className="text-lg font-bold text-text group-hover:text-teal-300 transition-colors mb-1">
                {exp.title}
              </h3>
              <p className="text-sm text-teal-400/70 mb-4">
                {exp.company}
              </p>
              <p className="text-sm text-text-muted leading-relaxed flex-1">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-teal-500/10">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-teal-600/10 text-teal-400 border border-teal-600/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
