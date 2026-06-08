"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, 
  Award, 
  Handshake, 
  Smile, 
  MessageSquare, 
  Users, 
  Leaf, 
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import styles from "./Nosotros.module.css";

const objectives = [
  {
    icon: Shield,
    title: "Seguridad",
    desc: "La integridad física de nuestros colaboradores y clientes es la prioridad absoluta en cada obra e instalación.",
  },
  {
    icon: Award,
    title: "Calidad",
    desc: "Diseñamos y ejecutamos proyectos robustos que cumplen con los más altos estándares internacionales y de la industria automotriz.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    desc: "Asumimos con total responsabilidad cada contrato, garantizando el cumplimiento en tiempo, presupuesto y forma.",
  },
  {
    icon: Smile,
    title: "Actitud Positiva",
    desc: "Afrontamos los retos técnicos y operativos con entusiasmo y con un enfoque constructivo orientado a la solución.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación",
    desc: "Fomentamos canales de comunicación transparentes, continuos y claros con nuestros clientes y entre nuestros equipos.",
  },
  {
    icon: Users,
    title: "Integración",
    desc: "Sinergia interna y alineación de objetivos para que la fuerza de trabajo colabore de manera unificada y exitosa.",
  },
];

export default function NosotrosPage() {
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
            Nuestra Esencia y Compromiso
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Conoce la visión, misión, objetivos y políticas ambientales y de calidad que guían a ELCCO Group en el desarrollo industrial de México.
          </motion.p>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className={`section ${styles.missionVisionSection}`}>
        <div className="container">
          <div className={styles.gridSplit}>
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={styles.cardInfo}
            >
              <div className={styles.accentLinePrimary}></div>
              <span className={styles.cardLabel}>Propósito</span>
              <h2 className={styles.cardTitle}>Nuestra Misión</h2>
              <p className={styles.cardText}>
                En <strong>ELCCO Group</strong> estamos comprometidos en ofrecer proyectos para la industria con calidad y seguridad; manteniendo una integración entre los colaboradores con la mejor actitud para lograr el éxito de cada proyecto cuidando el medio ambiente.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={styles.cardInfo}
            >
              <div className={styles.accentLineAccent}></div>
              <span className={styles.cardLabel}>Futuro</span>
              <h2 className={styles.cardTitle}>Nuestra Visión</h2>
              <p className={styles.cardText}>
                Ser una empresa líder, con permanencia en el mercado, reconocidos por el talento y profesionalismo de nuestra gente, garantizando seguridad y calidad a todas las partes interesadas, aplicando la mejora continua en nuestros procesos, productos y servicios, comprometidos con la sociedad y el medio ambiente con un alto sentido humano.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objetivos Section */}
      <section className={`section ${styles.objectivesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="sectionLabel">Pilares Operativos</span>
            <h2 className="sectionTitle">Nuestros Objetivos</h2>
            <p className="sectionDescription">
              Definimos nuestro rumbo de trabajo a través de principios clave que aseguran la excelencia técnica y humana.
            </p>
          </div>

          <div className={styles.objectivesGrid}>
            {objectives.map((obj, i) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={styles.objCard}
              >
                <div className={styles.objIconWrapper}>
                  <obj.icon size={22} className={styles.objIcon} />
                </div>
                <h3 className={styles.objTitle}>{obj.title}</h3>
                <p className={styles.objDesc}>{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Políticas Section */}
      <section className={`section ${styles.policiesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="sectionLabel">Normativas y Valores</span>
            <h2 className="sectionTitle">Políticas Corporativas</h2>
            <p className="sectionDescription">
              Nuestras pautas y directrices para garantizar la sustentabilidad y la mejora constante de nuestros estándares.
            </p>
          </div>

          <div className={styles.policiesGrid}>
            {/* Política de Calidad */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={styles.policyCard}
            >
              <div className={styles.policyHeader}>
                <div className={styles.policyIconWrapperQuality}>
                  <CheckCircle size={24} className={styles.policyIconQuality} />
                </div>
                <div>
                  <h3 className={styles.policyTitle}>Política de Calidad</h3>
                  <span className={styles.policySubtitle}>Compromiso con la Excelencia</span>
                </div>
              </div>
              <p className={styles.policyText}>
                Para <strong>ELCCO Group</strong> es importante lograr calidad en todo lo que hacemos, creando soluciones eficientes y eficaces e impulsando acciones de valor para superar las expectativas de nuestros clientes y partes interesadas, enfocados en la mejora continua de nuestros procesos, productos y servicios.
              </p>
            </motion.div>

            {/* Política Ambiental */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={styles.policyCard}
            >
              <div className={styles.policyHeader}>
                <div className={styles.policyIconWrapperEnv}>
                  <Leaf size={24} className={styles.policyIconEnv} />
                </div>
                <div>
                  <h3 className={styles.policyTitle}>Política Ambiental</h3>
                  <span className={styles.policySubtitle}>Compromiso Ecológico</span>
                </div>
              </div>
              <div className={styles.policyText}>
                <p style={{ marginBottom: "1rem" }}>
                  En armonía con nuestro entorno y en cumplimiento con la responsabilidad industrial, nos regimos bajo tres lineamientos clave:
                </p>
                <ul className={styles.policyList}>
                  <li>
                    <span className={styles.bullet}></span>
                    Prevenir la contaminación ambiental.
                  </li>
                  <li>
                    <span className={styles.bullet}></span>
                    Cumplir estrictamente con los requerimientos ambientales legales y normativas aplicables.
                  </li>
                  <li>
                    <span className={styles.bullet}></span>
                    Mejorar continuamente nuestro desempeño y cultura ambiental en cada una de nuestras operaciones.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
