"use client";


import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Mail, Phone, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-gray-900" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Video de fond */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="videop.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Contenu principal aligné à droite */}
<div className="relative z-20 p-6 flex justify-end">
<section className="py-10 text-white max-w-xl w-full text-right">
  {/* Image centrée */}
  <div className="flex justify-center">
    <Image
      src="/profil.2.jpeg"
      alt="Meyer Ice Tanguy"
      width={160}
      height={160}
      className="rounded-full object-cover shadow-lg border-4 border-white"
    />
  </div>

  {/* Bloc texte aligné à droite */}
  <div className="bg-white/20 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/30 space-y-4 mt-6">
    <h1 className="text-5xl font-bold">MEYER ICE TANGUY</h1>
    <p className="text-xl text-gray-200">
      Développeur web frontend issu d’une formation en économie du développement durable, 
      j’allie rigueur analytique, sens de l’impact sociétal et maîtrise des technologies 
      modernes pour accompagner les entreprises dans leur transformation numérique responsable.
    
    </p>
  </div>

  {/* Boutons centrés */}
  <div className="flex justify-center gap-4 mt-6 flex-col sm:flex-row">
    {/* Bouton CV */}
   <Link
  href="/cv Meyer ice tanguy (2).pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition text-center"
>
  Mon CV
</Link>


    {/* Bouton Contact (Popover) */}
    <Popover>
      <PopoverTrigger asChild>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition inline-flex items-center justify-center">
          <Mail className="mr-2" />
          Contacts
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 text-left space-y-4 text-sm">
        <div className="flex items-center gap-3">
          <Mail className="text-blue-600" />
          <a href="mailto:icetanguy065@gmail.com" className="font-semibold hover:underline">
            icetanguy065@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-green-600" />
          <span className="font-semibold">+241 065 51 09 46</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-green-600" />
          <span className="font-semibold">+241 074 15 99 70</span>
        </div>
        <div className="flex items-center gap-3">
          <Linkedin className="text-blue-700" />
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Profil LinkedIn
          </a>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</section>

</div>      
   
    </main>
  );
}
