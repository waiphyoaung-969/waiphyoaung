"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Kanban Flow",
    description:
      "A real-time project management board with drag-and-drop, WebSocket sync, and dark mode. Inspired by Trello.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Anime Tracker",
    description:
      "Track your anime watchlist, rate series, and get AI-powered recommendations based on your taste profile.",
    tags: ["React", "Node.js", "MongoDB", "TensorFlow"],
    github: "#",
    live: "#",
  },
  {
    title: "Pixel Shelf",
    description:
      "A digital bookshelf for manga collectors — scan barcodes, organize volumes, and track your reading progress.",
    tags: ["React Native", "Firebase", "Vision API"],
    github: "#",
  },
  {
    title: "Waveform",
    description:
      "A minimal audio visualization library built with Web Audio API and Canvas. Plug and play for any project.",
    tags: ["TypeScript", "Web Audio", "Canvas"],
    github: "#",
    live: "#",
  },
  {
    title: "DevLog",
    description:
      "A markdown-powered developer blog with syntax highlighting, RSS feed, and an interactive code playground.",
    tags: ["Next.js", "MDX", "Tailwind", "Vercel"],
    github: "#",
    live: "#",
  },
  {
    title: "ChatCord",
    description:
      "Real-time chat application with rooms, typing indicators, and emoji support. Built as a Discord clone.",
    tags: ["Socket.io", "Express", "React", "Redis"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-dark">
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
              Projects
            </span>
          </h2>
          <p className="text-text-muted text-sm font-mono tracking-widest uppercase">
            プロジェクト
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-surface border border-teal-500/10 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-500/5 to-mint-500/5 pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-600/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                  </svg>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-teal-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-teal-400 transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
