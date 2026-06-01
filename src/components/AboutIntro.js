"use client";
import { motion } from "framer-motion";
import styles from "./AboutIntro.module.css";

const clientLogos = [
  { name: "Audi", src: "/images/clientes/audi.webp" },
  { name: "General Motors", src: "/images/clientes/gm.webp" },
  { name: "Magna", src: "/images/clientes/magna.webp" },
  { name: "Stellantis", src: "/images/clientes/stellantis.webp" },
];

const extendedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

export default function AboutIntro() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="sectionLabel">Sobre Nosotros</span>
          <h2 className="sectionTitle">
            Construimos el Futuro de la Industria en México
          </h2>
          <p className={styles.text}>
            ELCCO Group es una empresa mexicana fundada en 1983 por Francisco Octavio Díaz Vadillo (†).
            Lo que comenzó como un servicio de instalaciones eléctricas residenciales en Saltillo,
            Coahuila, hoy se ha transformado en un grupo empresarial líder en soluciones industriales
            integrales para el sector automotriz.
          </p>
          <p className={styles.text}>
            Con presencia en Saltillo, San Luis Potosí y Silao, atendemos a las principales
            armadoras y proveedores de la industria automotriz con los más altos estándares
            de calidad y seguridad.
          </p>

          <div className={styles.values}>
            <div className={styles.valueItem}>
              <div className={styles.valueDot}></div>
              <div>
                <strong>Seguridad</strong>
                <span>La integridad de nuestro equipo es prioridad absoluta</span>
              </div>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueDot}></div>
              <div>
                <strong>Calidad</strong>
                <span>Estándares que superan las expectativas</span>
              </div>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueDot}></div>
              <div>
                <strong>Compromiso</strong>
                <span>Cumplimos lo que prometemos, siempre</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className={styles.visualCard}>
            <div className={styles.visualAccent}></div>
            <div className={styles.visualContent}>
              <span className={styles.visualYear}>1983</span>
              <p className={styles.visualText}>
                Año de fundación en Saltillo, Coahuila — más de cuatro décadas
                de experiencia respaldando a la industria mexicana.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Logos Marquee */}
      <div className={styles.marqueeSection}>
        <div className={`container ${styles.marqueeTitleContainer}`}>
          <p className={styles.marqueeTitle}>Clientes que confían en nosotros</p>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {extendedLogos.map((logo, index) => (
              <div key={index} className={styles.logoWrapper}>
                <img src={logo.src} alt={logo.name} className={styles.logoImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
