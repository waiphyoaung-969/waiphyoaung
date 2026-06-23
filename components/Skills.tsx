"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 78 },
  { name: "React", level: 70 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Python", level: 72 },
  { name: "Java", level: 65 },
  { name: "Git & GitHub", level: 80 },
  { name: "Linux Systems", level: 60 },
  { name: "Networking", level: 65 },
  { name: "Solidity", level: 30 },
  { name: "Web3 / Blockchain", level: 35 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-dark">
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
              Skills
            </span>
          </h2>
          <p className="text-text-muted text-sm font-mono tracking-widest uppercase">
            My Stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-surface border border-teal-500/10 rounded-xl px-5 py-4 hover:border-teal-500/20 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text group-hover:text-teal-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-teal-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-dark rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-teal-500 to-mint-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
