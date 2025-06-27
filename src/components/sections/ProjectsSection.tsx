"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import FloatingCard from '../3d/FloatingCard';

const projects = [
  {
    title: "🌍 EcoConnect",
    desc: "Plateforme communautaire moderne dédiée à l'environnement et au développement durable avec interface responsive et animations fluides.",
    tag: "Next.js • Tailwind CSS • Framer Motion",
    link: "https://ecoconnect-seven.vercel.app/",
    color: "from-green-500 to-emerald-600",
    featured: true
  },
  {
    title: "⚡ SEEG Refonte",
    desc: "Refonte complète du site vitrine SEEG avec architecture moderne, performance optimisée et expérience utilisateur repensée.",
    tag: "Next.js 14 • Shadcn UI • TypeScript",
    link: "https://seeg-refonte.vercel.app/",
    color: "from-blue-500 to-cyan-600",
    featured: true
  },
  {
    title: "🏨 Projet Hôtelier",
    desc: "Site vitrine élégant pour établissement hôtelier avec galerie interactive, système de réservation et design responsive.",
    tag: "HTML5 • CSS3 • JavaScript • UX Design",
    link: "https://i-tan-tau.vercel.app/",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "🏢 Site Immobilier",
    desc: "Interface immobilière complète avec recherche avancée, visualisation 3D et gestion de biens immobiliers.",
    tag: "React • CSS Grid • UX/UI Design",
    link: "https://elie-three.vercel.app/",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "🔐 Xori-Group Platform",
    desc: "Plateforme d'entreprise sécurisée avec authentification avancée, dashboard analytique et interface administrateur.",
    tag: "Next.js • NextAuth • Prisma • PostgreSQL",
    link: "https://xori-group.vercel.app/",
    color: "from-indigo-500 to-purple-600",
    badge: "En cours"
  },
  {
    title: "🚚 Logistique Industrielle",
    desc: "Solution de coordination transport et gestion d'équipe pour optimiser les flux logistiques en temps réel.",
    tag: "Gestion d'équipe • Logistique • Analytics",
    link: "#",
    color: "from-gray-600 to-gray-800"
  }
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  console.log("Rendering ProjectsSection component");

  return (
    <section id="projects" ref={ref} className="relative py-20 bg-gradient-to-br from-gray-950 via-black to-blue-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-blue-400 font-mono text-lg">&lt;projects&gt;</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-orange-400 bg-clip-text text-transparent mb-6">
            Mes Réalisations
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une sélection de projets web modernes, alliant innovation technique et impact visuel pour créer des expériences utilisateur exceptionnelles.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <FloatingCard delay={index * 0.1} className="h-full group">
                <Card className={`h-full bg-gradient-to-br ${project.color} p-0.5 rounded-2xl group-hover:shadow-2xl transition-all duration-500`}>
                  <CardContent className="h-full bg-black/90 backdrop-blur-sm rounded-2xl p-6 flex flex-col">
                    
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-sm font-mono text-blue-400 bg-blue-400/10 px-3 py-2 rounded-lg">
                        {project.tag}
                      </p>
                    </div>

                    {/* Project Actions */}
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:transform group-hover:-translate-y-1"
                      >
                        <ExternalLink size={18} />
                        Voir le projet
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ Featured
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </FloatingCard>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Envie de collaborer sur votre prochain projet ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-600/25"
          >
            Discutons de votre projet
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-8"
        >
          <span className="text-blue-400 font-mono text-lg">&lt;/projects&gt;</span>
        </motion.div>
      </div>
    </section>
  );
}