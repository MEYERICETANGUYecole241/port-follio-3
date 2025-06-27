import React from 'react'
import { Card, CardContent } from "@/components/ui/card";

export default function Projets() {
  return (
    <div>
        {/* Projets */}
        <section className="py-10 text-gray-900 relative min-h-screen bg-blue-100" style={{ fontFamily: 'Times New Roman, serif' }}> 
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 underline underline-offset-4 decoration-blue-500 mb-12">
  Mes projets
</h1>

          <div className="grid gap-6 sm:grid-cols-2 ">
            {[
 {
  title: "🌍 EcoConnect",
  desc: "Landing page Next.js HTML/CSS pour une plateforme communautaire dédiée à l'environnement et au développement durable.",
  tag: "Énergie, développement durable, frontend",
  link: "https://ecoconnect-seven.vercel.app/" 
},
  {
  title: "🧮 SEEG",
  desc: "Refonte du site vitrine de la SEEG avec Next.js 14",
  tag: "Next.js / Tailwind CSS/ Shadcn UI",
  link: "https://seeg-refonte.vercel.app/"
},

  {
    title: "🚚 Logistique - Mousse Industrie",
    desc: "Coordination transport",
    tag: "Logistique, gestion d’équipe",
    link: "https://ton-lien.com"
  },

  {
  title: "💻 Projet hôtelier",
  desc: "Site vitrine d'un établissement hôtelier fictif avec mise en page responsive",
  tag: "HTML / CSS / UX Design",
  link: "https://i-tan-tau.vercel.app/"
},

{
  title: "🌐 Projet de site immobilier",
  desc: "Création de wireframe, zoning et maquettes pour un site immobilier",
  tag: "UX/UI Design / HTML / CSS",
  link: "https://elie-three.vercel.app/"
},

{
  title: "📄 Projet Xori-Group (en cours)",
  desc: "Développement d'une interface moderne avec Next.js, Shadcn UI et NextAuth",
  tag: "Next.js / Shadcn UI / Authentification",
  link: "https://xori-group.vercel.app/"
}


].map((proj, i) => (
  // bloc Card avec le bouton comme ci-dessus

  <Card key={i}>
  <CardContent className="p-4 bg-white bg-opacity-90 rounded-lg space-y-2">
    <h3 className="text-xl font-bold">{proj.title}</h3>
    <p>{proj.desc}</p>
    <p className="text-sm text-gray-500">{proj.tag}</p>
    <a
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Consulter
    </a>
  </CardContent>
</Card>

))}

             
          </div>
        </section>
    </div>
  )
}
