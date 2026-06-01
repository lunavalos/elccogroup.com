import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutIntro from "@/components/AboutIntro";
import ServicesGrid from "@/components/ServicesGrid";
import ProjectTypes from "@/components/ProjectTypes";
import CTA from "@/components/CTA";

export const metadata = {
  title: "ELCCO Group | Soluciones Industriales Integrales en México desde 1983",
  description:
    "Más de 40 años ofreciendo soluciones industriales integrales: obra civil, fabricación estructural, instalaciones eléctricas y automatización para la industria automotriz en México.",
};

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Hero />
      <div style={{ position: "relative", zIndex: 2, background: "var(--background)" }}>
        <Stats />
        <AboutIntro />
        <ServicesGrid />
        <ProjectTypes />
        <CTA />
      </div>
    </main>
  );
}
