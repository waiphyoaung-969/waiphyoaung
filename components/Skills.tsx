"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 82 },
  { name: "Docker", level: 75 },
  { name: "Figma", level: 70 },
  { name: "GraphQL", level: 78 },
  { name: "AWS", level: 72 },
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
            スキル
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface border border-teal-500/10 rounded-xl p-5 hover:border-teal-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-text group-hover:text-teal-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-teal-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-dark-light rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-teal-600 via-teal-400 to-mint-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
