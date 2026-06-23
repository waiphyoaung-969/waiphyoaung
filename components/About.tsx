"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto animate-glow-pulse rounded-2xl overflow-hidden border border-teal-500/30 bg-surface flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-6xl md:text-7xl mb-4">🐱</div>
                <p className="text-teal-400 text-sm font-mono tracking-wider">
                  &lt; dev /&gt;
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-mint-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-teal-400 to-mint-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-text-muted text-sm font-mono tracking-widest uppercase mb-8">
              Who I Am
            </p>

            <div className="space-y-5 text-text-muted leading-relaxed">
              <p>
                Hey! I&apos;m a second-year Computer Science student who fell in love
                with building things for the web — and now I&apos;m diving deep into
                blockchain and Web3. I enjoy turning ideas into working apps,
                from clean frontends to smart contracts on-chain.
              </p>
              <p>
                When I&apos;m not studying or coding, you&apos;ll find me watching anime,
                reading manga, sketching UI designs, exploring blockchain docs,
                or tinkering with Web3 side projects. I believe every great
                project starts with curiosity.
              </p>
              <p>
                Currently looking for{" "}
                <span className="text-teal-400 font-medium">blockchain</span> and{" "}
                <span className="text-teal-400 font-medium">Web3 internship</span>{" "}
                opportunities to grow as a developer.
              </p>
            </div>

            <div className="mt-8 flex gap-8">
              {[
                { label: "Year", value: "2nd" },
                { label: "Projects", value: "10+" },
                { label: "Skills", value: "10+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
