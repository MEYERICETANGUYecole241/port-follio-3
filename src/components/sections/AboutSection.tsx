"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Lightbulb, Target, Heart } from 'lucide-react';
import FloatingCard from '../3d/FloatingCard';

const skills = [
  { name: "React/Next.js", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-indigo-600" },
  { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-teal-500" },
  { name: "Node.js", level: 75, color: "from-green-500 to-emerald-500" },
  { name: "Three.js", level: 70, color: "from-purple-500 to-pink-500" },
  { name: "Framer Motion", level: 80, color: "from-orange-500 to-red-500" }
];

const values = [
  {
    icon: Code2,
    title: "Excellence Technique",
    description: "Code propre, performance optimisée et standards modernes pour des solutions durables."
  },
  {
    icon: Lightbulb,
    title: "Innovation Continue",
    description: "Veille technologique constante et adoption des dernières tendances du développement web."
  },
  {
    icon: Target,
    title: "Impact Mesurable",
    description: "Focus sur les résultats concrets et l'amélioration de l'expérience utilisateur."
  },
  {
    icon: Heart,
    title: "Développement Durable",
    description: "Approche responsable intégrant l'impact environnemental et sociétal des projets."
  }
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  console.log("Rendering AboutSection component");

  return (
    <section id="about" ref={ref} className="relative py-20 bg-gradient-to-br from-blue-950 via-black to-gray-950">
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
            <span className="text-blue-400 font-mono text-lg">&lt;about&gt;</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-orange-400 bg-clip-text text-transparent mb-6">
            Mon Parcours
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <FloatingCard delay={0.5}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  De l&apos;Économie au Code
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Mon parcours unique démarre par une formation en 
                    <span className="text-blue-400 font-semibold"> économie du développement durable</span>, 
                    me donnant une vision globale des enjeux sociétaux et environnementaux.
                  </p>
                  <p>
                    Cette base m&apos;a naturellement orienté vers le développement web, où je peux allier 
                    <span className="text-orange-400 font-semibold"> innovation technologique </span>
                    et 
                    <span className="text-green-400 font-semibold"> impact positif</span>.
                  </p>
                  <p>
                    Aujourd&apos;hui, je crée des expériences digitales qui ne se contentent pas d&#39;être belles et fonctionnelles, 
                    mais qui contribuent aussi à un avenir plus durable et inclusif.
                  </p>
                </div>
              </div>
            </FloatingCard>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <FloatingCard delay={0.7 + index * 0.1}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
                      <value.icon className="text-blue-400 mb-3" size={24} />
                      <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </FloatingCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <FloatingCard delay={0.7}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Compétences Techniques
                </h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-mono text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FloatingCard>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <FloatingCard delay={1.5}>
                <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="text-white font-semibold mb-2">Fun Fact</h4>
                  <p className="text-gray-300 text-sm">
                    J&apos;adore intégrer des animations 3D et des micro-interactions dans mes projets 
                    pour créer des expériences mémorables !
                  </p>
                </div>
              </FloatingCard>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center mt-16"
        >
          <span className="text-blue-400 font-mono text-lg">&lt;/about&gt;</span>
        </motion.div>
      </div>
    </section>
  );
}