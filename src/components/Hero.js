"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  const contentOpacity = useTransform(scrollY, [0, 650], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 650], [1, 0.95]);
  const contentY = useTransform(scrollY, [0, 650], [0, -60]);

  // Background and overlay animations on scroll (no opacity fadeout to keep background dark)
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.12]);
  const blurVal = useTransform(scrollY, [0, 800], [0, 10]);
  const bgFilter = useMotionTemplate`blur(${blurVal}px)`;

  const handleScrollDown = () => {
    const target = document.getElementById("stats");
    if (!target) return;

    // Temporarily disable CSS smooth scrolling to prevent programmatic scroll conflict
    const htmlEl = document.documentElement;
    const originalScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = "auto";

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const duration = 800; // Shorter duration (800ms) for a more responsive feel
    let startTime = null;

    // Smooth easeInOutCubic for natural acceleration and deceleration
    const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      window.scrollTo(0, start + (end - start) * ease(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Restore original scroll behavior
        htmlEl.style.scrollBehavior = originalScrollBehavior;
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <section ref={sectionRef} className={styles.hero}>
      {/* Static image background */}
      <motion.div 
        className={styles.background}
        style={{ scale: bgScale, filter: bgFilter }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-bg-static.jpg"
          className={styles.bgVideo}
        >
          <source src="/images/hero-video.webm" type="video/webm" />
          <img
            src="/images/hero-bg-static.jpg"
            alt="ELCCO Group Industrial Background"
            className={styles.bgImage}
          />
        </video>
      </motion.div>
      <div className={styles.overlay}></div>

      <motion.div
        className={`container ${styles.content}`}
        style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
      >
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          Más de 40 años de experiencia
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 2.3 }}
        >
          Soluciones Industriales
          <br />
          <span className={styles.titleAccent}>Integrales</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Obra civil, fabricación estructural, instalaciones eléctricas y automatización
          para la industria automotriz en México.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <Link href="/contacto" className={styles.primaryBtn}>
            <span>Solicitar Cotización</span>
            <span className={styles.btnIconWrapper}>
              <ArrowRight size={14} />
            </span>
          </Link>
          <Link href="/servicios" className={styles.secondaryBtn}>
            <span>Ver Servicios</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.button
        className={styles.scrollDown}
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.4 }}
        aria-label="Desplazar hacia abajo"
      >
        <span className={styles.scrollLabel}>Descubrir</span>
        <motion.span
          className={styles.scrollChevron}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  );
}
