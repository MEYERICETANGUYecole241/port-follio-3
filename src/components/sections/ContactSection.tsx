"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import FloatingCard from '../3d/FloatingCard';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "icetanguy065@gmail.com",
    href: "mailto:icetanguy065@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+241 065 51 09 46",
    href: "tel:+24106551094",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Phone,
    label: "Téléphone Alt.",
    value: "+241 074 15 99 70",
    href: "tel:+24107415997",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Profil LinkedIn",
    href: "https://www.linkedin.com/feed/",
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Gabon, Libreville",
    href: "#",
    color: "from-orange-500 to-red-500"
  }
];

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  console.log("Rendering ContactSection component");

  return (
    <section id="contact" ref={ref} className="relative py-20 bg-gradient-to-br from-gray-950 via-black to-blue-950">
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
            <span className="text-blue-400 font-mono text-lg">&lt;contact&gt;</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-orange-400 bg-clip-text text-transparent mb-6">
            Travaillons Ensemble
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prêt à transformer vos idées en réalité digitale ? Contactez-moi pour discuter de votre prochain projet web innovant.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <FloatingCard delay={0.5}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informations de Contact
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    >
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                            <info.icon className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{info.label}</p>
                            <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                            <info.icon className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{info.label}</p>
                            <p className="text-white font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </FloatingCard>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <FloatingCard delay={1.2}>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <h4 className="text-white font-semibold">Disponible pour nouveaux projets</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Je suis actuellement disponible pour de nouvelles collaborations. 
                    N'hésitez pas à me contacter pour discuter de votre projet !
                  </p>
                </div>
              </FloatingCard>
            </motion.div>
          </motion.div>

          {/* Right Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <FloatingCard delay={0.7}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Votre Projet en Tête ?
                </h3>
                
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Que vous ayez besoin d'un site vitrine moderne, d'une application web interactive, 
                    ou d'une refonte complète de votre présence digitale, je suis là pour vous accompagner.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>Consultation gratuite de 30 minutes</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>Devis détaillé sous 48h</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>Accompagnement personnalisé</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href="mailto:icetanguy065@gmail.com?subject=Nouveau Projet Web&body=Bonjour Meyer, j'aimerais discuter d'un projet web avec vous."
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-1"
                    >
                      <Send size={20} />
                      Commencer la Discussion
                    </a>
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <FloatingCard delay={1.4}>
                <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="text-white font-semibold mb-2">Réponse Rapide</h4>
                  <p className="text-gray-300 text-sm">
                    Je réponds généralement dans les 2-4 heures pendant les heures ouvrables. 
                    Votre projet mérite une attention immédiate !
                  </p>
                </div>
              </FloatingCard>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-16"
        >
          <span className="text-blue-400 font-mono text-lg">&lt;/contact&gt;</span>
        </motion.div>
      </div>
    </section>
  );
}