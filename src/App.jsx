import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import profile from "./assets/profile.png";

const skills = [
  "HTML", 
  "CSS",
  "React JS",
  "Redux",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node JS",
  "Express JS",
  "MongoDB",
  "MySQL",
];

const projects = [
  {
    title: "Price Engine - TVS Motors",
    description:
      "Built scalable pricing management application with dynamic tax calculations and configurable pricing logic.",
  },
  {
    title: "School Management Application",
    description:
      "Developed modules for lesson planning, progress reports, and online student management.",
  },
  {
    title: "Chicken Master",
    description:
      "Employee work tracking application with notifications and work order management.",
  },
];

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 mb-3">Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nikhil
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Yaraguddi
              </span>
            </h1>

            <h2 className="mt-4 text-2xl text-slate-300">
              Senior Software Engineer
            </h2>

            <p className="mt-6 text-slate-400 leading-7">
              Frontend Developer with 4 years of experience building scalable,
              modern, high-performance web applications using React.js,
              TypeScript and modern JavaScript ecosystems.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/nikhil-yaraguddi-090840196"
                target="_blank"
                className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl flex items-center gap-2 transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <button className="border border-slate-600 px-5 py-3 rounded-xl flex items-center gap-2">
                <FaGithub />
                GitHub
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={profile}
              alt="profile"
              className="w-[320px] h-[420px] object-cover rounded-3xl border border-slate-700 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Key Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
              >
                <p className="text-lg font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-6 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            <div className="border border-slate-800 rounded-2xl p-6 bg-slate-900">
              <h3 className="text-2xl font-semibold">
                Exathought Technology Consulting
              </h3>

              <p className="text-cyan-400 mt-2">
                Senior Software Engineer • 2024 - Present
              </p>

              <p className="mt-4 text-slate-400 leading-7">
                Building scalable enterprise applications using React,
                TypeScript, Redux and Tailwind CSS with focus on performance
                and reusable architecture.
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl p-6 bg-slate-900">
              <h3 className="text-2xl font-semibold">
                SoftSuave Technologies
              </h3>

              <p className="text-cyan-400 mt-2">
                Software Engineer • 2021 - 2024
              </p>

              <p className="mt-4 text-slate-400 leading-7">
                Worked on React-based applications, feature development,
                debugging and UI optimization while collaborating in Agile
                teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Icons */}
      <section className="py-20 px-6 bg-slate-900/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-10 text-5xl text-cyan-400">
            <FaReact />
            <SiTypescript />
            <SiTailwindcss />
            <SiRedux />
            <FaNodeJs />
            <SiExpress />
            <SiMongodb />
            <SiMysql />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Let's Connect
          </h2>

          <p className="text-slate-400 mt-6 leading-7">
            Open to frontend engineering opportunities, collaborations and
            innovative product development.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <a
              href="mailto:nikhildy3@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil-yaraguddi-090840196"
              target="_blank"
              className="border border-slate-700 px-6 py-3 rounded-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}