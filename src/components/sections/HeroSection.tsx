"use client";

import { motion } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Mail, Phone, Linkedin, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FloatingParticles from '../3d/FloatingParticles';
import FloatingCard from '../3d/FloatingCard';

export default function HeroSection() {
  console.log("Rendering HeroSection component");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videop.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/30 z-10" />

      {/* 3D Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-blue-400 font-mono text-lg"
              >
                console.log("Hello World");
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-orange-400 bg-clip-text text-transparent leading-tight"
              >
                Meyer Ice
                <br />
                <span className="text-4xl lg:text-6xl text-orange-400">
                  Tanguy
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="space-y-4"
              >
                <p className="text-xl lg:text-2xl text-blue-100 font-light">
                  Développeur Frontend Passionné
                </p>
                <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                  Créateur d'expériences digitales innovantes, alliant 
                  <span className="text-blue-400 font-semibold"> expertise technique </span>
                  et 
                  <span className="text-orange-400 font-semibold"> vision durable</span>. 
                  Transformant les idées en solutions web modernes et responsables.
                </p>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/cv Meyer ice tanguy (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-3 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1"
              >
                <Download size={20} />
                Télécharger CV
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Popover>
                <PopoverTrigger asChild>
                  <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center gap-3 hover:-translate-y-1">
                    <Mail size={20} />
                    Me Contacter
                  </button>
                </PopoverTrigger>
                <PopoverContent className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 space-y-4 text-white">
                  <div className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                    <Mail className="text-blue-400" size={20} />
                    <a href="mailto:icetanguy065@gmail.com" className="font-semibold">
                      icetanguy065@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-green-400" size={20} />
                    <span className="font-semibold">+241 065 51 09 46</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-green-400" size={20} />
                    <span className="font-semibold">+241 074 15 99 70</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                    <Linkedin className="text-blue-500" size={20} />
                    <a
                      href="https://www.linkedin.com/feed/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold"
                    >
                      Profil LinkedIn
                    </a>
                  </div>
                </PopoverContent>
              </Popover>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <FloatingCard delay={1.3}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6">
                  <Image
                    src="/profil.2.jpeg"
                    alt="Meyer Ice Tanguy"
                    width={300}
                    height={300}
                    className="rounded-2xl object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}