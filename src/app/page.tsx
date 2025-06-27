import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ModernNav from "@/components/navigation/ModernNav";

export default function Home() {
  console.log("Rendering main Home component");
  
  return (
    <div className="relative">
      <ModernNav />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
