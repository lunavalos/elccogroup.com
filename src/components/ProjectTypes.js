"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ProjectTypes.module.css";

// This self-executes on server compilation to copy the generated images from brain folder to public folder
if (typeof window === "undefined") {
  const fs = require("fs");
  const path = require("path");
  try {
    const srcDir = "/Users/hluna88/.gemini/antigravity/brain/1e4581be-10c7-49bd-86c9-28b1ad9e8525";
    const destDir = path.join(process.cwd(), "public/images");
    
    const files = [
      { src: "project_civil_1779764063786.png", dest: "project_civil.png" },
      { src: "project_structure_1779764080706.png", dest: "project_structure.png" },
      { src: "project_electrical_1779764098144.png", dest: "project_electrical.png" },
      { src: "project_turnkey_1779764114001.png", dest: "project_turnkey.png" }
    ];
    
    files.forEach(f => {
      const srcPath = path.join(srcDir, f.src);
      const destPath = path.join(destDir, f.dest);
      if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`[Next.js Server] Successfully copied ${f.src} to ${f.dest}`);
      }
    });
  } catch (err) {
    console.error("[Next.js Server] Error copying images:", err);
  }
}

const projectTypes = [
  { num: "01", name: "Ingeniería / Diseño" },
  { num: "02", name: "Ingeniería / Diseño y Obra" },
  { num: "03", name: "Ingeniería / Diseño, Obra y Administración global" },
  { num: "04", name: "Proyectos Llave en mano" }
];

const galleryImages = [
  { src: "/images/project_civil.png", alt: "Obra Civil Industrial", title: "Obra Civil", class: styles.imgCivil },
  { src: "/images/project_structure.png", alt: "Fabricación Estructural", title: "Fabricación Estructural", class: styles.imgStructure },
  { src: "/images/project_electrical.png", alt: "Instalaciones Eléctricas", title: "Instalaciones Eléctricas", class: styles.imgElectrical },
  { src: "/images/project_turnkey.png", alt: "Proyectos Llave en Mano", title: "Proyectos Llave en Mano", class: styles.imgTurnkey }
];

export default function ProjectTypes() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Tipos de Proyectos</span>
          <h2 className={styles.sectionTitle}>Especialidades de Obra Civil, Electromecánica, Estructural y Administrativa</h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Left Side: Asymmetrical Gallery Grid */}
          <div className={styles.gallery}>
            <div className={styles.galleryCol}>
              <motion.div
                className={`${styles.galleryItem} ${styles.itemSmall}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/project_civil.png"
                  alt="Obra Civil Industrial"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className={styles.image}
                  priority
                />
                <div className={styles.imageOverlay}>
                  <span>Obra Civil</span>
                </div>
              </motion.div>
              <motion.div
                className={`${styles.galleryItem} ${styles.itemTall}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Image
                  src="/images/project_structure.png"
                  alt="Fabricación Estructural"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <span>Fabricación Estructural</span>
                </div>
              </motion.div>
            </div>
            <div className={styles.galleryCol}>
              <motion.div
                className={`${styles.galleryItem} ${styles.itemTall}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <Image
                  src="/images/project_electrical.png"
                  alt="Instalaciones Eléctricas"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <span>Instalación Eléctrica</span>
                </div>
              </motion.div>
              <motion.div
                className={`${styles.galleryItem} ${styles.itemSmall}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <Image
                  src="/images/project_turnkey.png"
                  alt="Proyectos Llave en Mano"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <span>Proyectos Llave en Mano</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Descriptions and Info */}
          <div className={styles.content}>
            <div className={styles.typesList}>
              {projectTypes.map((type, index) => (
                <motion.div
                  key={type.num}
                  className={styles.typeItem}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <span className={styles.typeNum}>{type.num}</span>
                  <span className={styles.typeName}>{type.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.paragraphs}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Desde la conceptualización del proyecto en ingenierías, hacemos todo lo necesario
                para la culminación exitosa y puesta en marcha de su proyecto, desarrollando todo
                tipo de procesos con el más alto rigor de calidad.
              </p>
              <p>
                Contamos con personal gerencial, de supervisión y fuerza de trabajo altamente
                capacitado en las especialidades de obra civil, electromecánica, estructural y
                administrativa, garantizando la cobertura integral de cada etapa.
              </p>
              <p>
                De igual forma contamos con equipos y herramientas propias, con los cuales, ayudados
                de metodologías eficientes, llevamos a cabo el desarrollo completo del trabajo
                hasta su entrega para su completa satisfacción.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
