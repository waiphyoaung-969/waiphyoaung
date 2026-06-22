"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer",
    company: "TechCorp Ltd.",
    description:
      "Leading the frontend architecture for a SaaS platform serving 100k+ users. Built design system from scratch with React and Tailwind.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    description:
      "Developed end-to-end features for an e-commerce platform. Improved page load times by 40% through code splitting and lazy loading.",
    tags: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    period: "2021 — 2022",
    title: "Junior Developer",
    company: "Digital Agency Co.",
    description:
      "Built responsive websites and web apps for diverse clients. Collaborated with designers to bring pixel-perfect UIs to life.",
    tags: ["HTML/CSS", "JavaScript", "Figma", "WordPress"],
  },
  {
    period: "2020 — 2021",
    title: "CS Student & Freelancer",
    company: "Self-employed",
    description:
      "Completed Computer Science degree while freelancing on small web projects. Fell in love with building things for the web.",
    tags: ["Python", "Java", "Git", "Linux"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-dark-light">
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
              Experience
            </span>
          </h2>
          <p className="text-text-muted text-sm font-mono tracking-widest uppercase">
            経験
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:flex flex-1" />

              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-teal-500 rounded-full border-4 border-dark-light z-10 mt-1 shadow-lg shadow-teal-500/30" />

              <div className="flex-1 ml-10 md:ml-0">
                <div className="bg-surface border border-teal-500/10 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300">
                  <span className="text-xs font-mono text-teal-400 tracking-widest">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-text mt-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-teal-300 mb-3">{exp.company}</p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-teal-600/10 text-teal-400 border border-teal-600/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
