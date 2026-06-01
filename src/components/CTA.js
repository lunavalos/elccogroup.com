"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      {/* Video Background */}
      <div className={styles.background}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/cta-bg.jpg"
          className={styles.bgVideo}
        >
          <source src="/images/welding-job.webm" type="video/webm" />
          <img
            src="/images/cta-bg.jpg"
            alt="ELCCO Group Welding Background"
            className={styles.bgImage}
          />
        </video>
      </div>
      <div className={styles.overlay}></div>

      <div className={`container ${styles.content}`}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          ¿Tiene un proyecto en mente?
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hagamos realidad su próximo proyecto industrial
        </motion.h2>

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contáctenos para obtener una cotización personalizada. Nuestro equipo de expertos
          está listo para asesorarle.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/contacto" className={styles.primaryBtn}>
            <Phone size={16} />
            <span>Contáctenos Ahora</span>
            <span className={styles.btnIcon}>
              <ArrowRight size={14} />
            </span>
          </Link>
          <a
            href="https://wa.me/+5218444273301"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <MessageCircle size={16} />
            <span>Escribir por WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
