"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./Servicios.module.css";

const services = [
  {
    image: "/images/service_civil.png",
    title: "Obra Civil Industrial",
    desc: "Construcción de fosas, trincheras, remodelaciones y demoliciones dentro de naves industriales en operación.",
    href: "/servicios/obra-civil",
  },
  {
    image: "/images/service_electrical.png",
    title: "Instalaciones Eléctricas",
    desc: "Instalación de equipos automáticos, robots de pintura, tuberías industriales y celdas robotizadas.",
    href: "/servicios/instalaciones-electricas",
  },
  {
    image: "/images/service_structural.png",
    title: "Fabricación Estructural",
    desc: "Diseño y fabricación de mezzanines, escaleras industriales y plataformas de acero a medida.",
    href: "/servicios/fabricacion-estructural",
  },
  {
    image: "/images/service_maintenance.png",
    title: "Mantenimiento Industrial",
    desc: "Mantenimiento preventivo y correctivo de edificios, vialidades, techos y subestaciones eléctricas.",
    href: "/servicios/mantenimiento-industrial",
  },
  {
    image: "/images/service_naves.png",
    title: "Naves Industriales",
    desc: "Construcción de canopies, techumbres de acero, fachadas metálicas y naves industriales completas.",
    href: "/servicios/naves-industriales",
  },
  {
    image: "/images/service_automation.png",
    title: "Automatización",
    desc: "Programación PLC, integración de sistemas, Pokayoke, sistemas de visión y dispositivos inteligentes.",
    href: "/servicios/automatizacion",
  },
  {
    image: "/images/service_design.png",
    title: "Diseño e Ingeniería",
    desc: "Modelado 3D en SolidWorks, cálculos estructurales, diseño eléctrico y renders fotorrealistas.",
    href: "/servicios/diseno-ingenieria",
  },
  {
    image: "/images/service_turnkey.png",
    title: "Proyectos Llave en Mano",
    desc: "Gestión integral desde la ingeniería conceptual hasta la puesta en marcha de su proyecto.",
    href: "/servicios/llave-en-mano",
  },
];

export default function ServiciosPage() {
  return (
    <main className={styles.main}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.breadcrumbs}
          >
            <Link href="/" className={styles.breadcrumbLink}>
              <ArrowLeft size={14} /> Volver a Inicio
            </Link>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={styles.heroTitle}
          >
            Nuestros Servicios Industriales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Soluciones integrales de ingeniería, obra civil, automatización y mantenimiento industrial con la calidad y seguridad que exige la industria en México.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              >
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className={styles.image}
                      priority={i < 2}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div>
                      <h2 className={styles.cardTitle}>{service.title}</h2>
                      <p className={styles.cardDesc}>{service.desc}</p>
                    </div>

                    <div className={styles.cardFooter}>
                      <Link 
                        href={service.href} 
                        className={styles.ctaLink}
                      >
                        Ver Servicio
                        <span className={styles.ctaIconWrapper}>
                          <ArrowRight size={14} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
