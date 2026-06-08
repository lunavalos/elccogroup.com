"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesGrid.module.css";

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

export default function ServicesGrid() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="sectionLabel">Nuestros Servicios</span>
          <h2 className="sectionTitle">Soluciones para Cada Necesidad Industrial</h2>
          <p className="sectionDescription">
            Desde obra civil hasta automatización de procesos, cubrimos todas las especialidades
            que su planta necesita con más de 40 años de experiencia comprobada.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <Link href={service.href} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  <span className={styles.cardLink}>
                    Ver más <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
