"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import styles from "./Footer.module.css";

const services = [
  { name: "Obra Civil Industrial", href: "/servicios/obra-civil" },
  { name: "Instalaciones Eléctricas", href: "/servicios/instalaciones-electricas" },
  { name: "Fabricación Estructural", href: "/servicios/fabricacion-estructural" },
  { name: "Mantenimiento Industrial", href: "/servicios/mantenimiento-industrial" },
  { name: "Automatización", href: "/servicios/automatizacion" },
  { name: "Diseño e Ingeniería", href: "/servicios/diseno-ingenieria" },
  { name: "Proyectos Llave en Mano", href: "/servicios/llave-en-mano" },
];

const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Contacto", href: "/contacto" },
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className={styles.footer}>
      <motion.div
        className={`container ${styles.grid}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Brand */}
        <motion.div variants={itemVariants} className={styles.colBrand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo-elcco-new.webp"
              alt="ELCCO Group Logo"
              width={180}
              height={55}
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>
          <p className={styles.brandDesc}>
            Más de 40 años ofreciendo soluciones industriales integrales para
            la industria automotriz en México.
          </p>
          <div className={styles.contactInfo}>
            <a href="tel:+528444273301" className={styles.contactItem}>
              <Phone size={14} /> (844) 427-3301
            </a>
            <a href="mailto:ventas@elccogroup.com" className={styles.contactItem}>
              <Mail size={14} /> ventas@elccogroup.com
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className={styles.colTitle}>ENLACES</h4>
          <ul className={styles.list}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h4 className={styles.colTitle}>SERVICIOS</h4>
          <ul className={styles.list}>
            {services.map((service) => (
              <li key={service.name}>
                <Link href={service.href} className={styles.link}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Locations */}
        <motion.div variants={itemVariants}>
          <h4 className={styles.colTitle}>UBICACIONES</h4>
          <div className={styles.locations}>
            <div className={styles.location}>
              <MapPin size={14} />
              <div>
                <strong>Saltillo</strong>
                <span>Blvd. Vito Alessio Robles 3720-8, Col. Valle Industrial, C.P. 25100</span>
              </div>
            </div>
            <div className={styles.location}>
              <MapPin size={14} />
              <div>
                <strong>San Luis Potosí</strong>
                <span>Eje 130 #150 int. 16, Col. Industrial, C.P. 78395</span>
              </div>
            </div>
            <div className={styles.location}>
              <MapPin size={14} />
              <div>
                <strong>Silao</strong>
                <span>Circuito Logístico #152, Predio Bustamante, C.P. 36270</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} ELCCO Group. Todos los derechos reservados.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>
          <span className={styles.sep}>·</span>
          <a href="https://lunavalos.com" target="_blank" rel="noopener noreferrer">
            Creado por LunAvalos
          </a>
        </div>
      </div>
    </footer>
  );
}
