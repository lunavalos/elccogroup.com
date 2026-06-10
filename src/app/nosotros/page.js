"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Handshake,
  TrendingUp,
  Trophy,
  Globe,
  CheckCircle,
  Leaf,
  ArrowLeft,
  Shield,
  MessageSquare,
  Smile,
  Users
} from "lucide-react";
import styles from "./Nosotros.module.css";

const objectives = [
  {
    icon: Handshake,
    title: "Compromiso",
    desc: "Contar con talento comprometido, crecimiento sostenible y liderazgo en conjunto.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento",
    desc: "Diversificar clientes, expandir mercados, asegurar el crecimiento de la empresa.",
  },
  {
    icon: Trophy,
    title: "Excelencia",
    desc: "Tener excelencia constructiva con procesos sólidos que generan confianza y resultados.",
  },
  {
    icon: Globe,
    title: "Expansión",
    desc: "Tener rentabilidad en crecimiento, conquistar y expandirnos hacia nuevos horizontes y mercados.",
  },
  {
    icon: CheckCircle,
    title: "Calidad",
    desc: "Ser excelentes y disciplinados diariamente para garantizar el cumplimiento de cada proyecto con cero retrabajos.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Seguridad y Calidad",
    desc: "Priorizamos la integridad de nuestro equipo y la excelencia técnica en cada obra.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación",
    desc: "Fomentamos la transparencia, claridad y retroalimentación constante con nuestros socios.",
  },
  {
    icon: Smile,
    title: "Actitud Positiva",
    desc: "Enfrentamos cada reto con entusiasmo y un enfoque constructivo hacia las soluciones.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    desc: "Asumimos con total responsabilidad cada proyecto y entregamos resultados de valor.",
  },
  {
    icon: Users,
    title: "Integración",
    desc: "Promovemos el trabajo en equipo y la colaboración unificada para el éxito compartido.",
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
                Ejecutar proyectos de construcción y nuevos negocios, con excelencia operativa, calidad total y disciplina en costo, tiempo y seguridad, generando valor constante para nuestros clientes y socios mediante procesos sólidos, talento humano altamente capacitado y una cultura de mejora continua que genere confianza y seguridad cuidando el medio ambiente.
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
                Ser un corporativo líder en construcción y proyectos innovadores, conquistando nuevos mercados siempre distinguidos por su ejecución impecable, crecimiento rentable y disciplina operativa, basada en talento capacitado, procesos sólidos con la confianza y seguridad para nuestros clientes y partes interesadas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className="sectionLabel">Nuestra Cultura</span>
            <h2 className="sectionTitle">Nuestros Valores</h2>
            <p className="sectionDescription">
              Los pilares éticos y de colaboración que definen el actuar diario en todos nuestros proyectos.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={styles.valueCard}
              >
                <div className={styles.valueIconWrapper}>
                  <val.icon size={24} className={styles.valueIcon} />
                </div>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.desc}</p>
              </motion.div>
            ))}
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

            {/* Política de Seguridad */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={styles.policyCard}
            >
              <div className={styles.policyHeader}>
                <div className={styles.policyIconWrapperSafety}>
                  <Shield size={24} className={styles.policyIconSafety} />
                </div>
                <div>
                  <h3 className={styles.policyTitle}>Política de Seguridad</h3>
                  <span className={styles.policySubtitle}>Protección e Integridad</span>
                </div>
              </div>
              <p className={styles.policyText}>
                En <strong>ELCCO Group</strong> nuestro compromiso es preservar la <strong>seguridad e integridad de nuestros colaboradores y socios de negocio</strong>, siendo cada uno responsables de cumplir con los estándares aplicables en materia de seguridad, salud y medio ambiente, a través de prácticas seguras y una concientización y capacitación continua.
              </p>
            </motion.div>

            {/* Política Ambiental */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
