"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, Calendar, MapPin } from "lucide-react";
import styles from "./Stats.module.css";

const stats = [
  {
    icon: Calendar,
    value: "40+",
    label: "Años de Experiencia",
    desc: "Trayectoria sólida liderando proyectos de infraestructura y automatización industrial."
  },
  {
    icon: Shield,
    value: "500+",
    label: "Proyectos Completados",
    desc: "Obras de gran escala ejecutadas con los más altos estándares de calidad y seguridad."
  },
  {
    icon: MapPin,
    value: "5",
    label: "Ubicaciones en México",
    desc: "Presencia estratégica para atender con agilidad y cercanía a todo México."
  },
  {
    icon: Award,
    value: "100%",
    label: "Compromiso de Calidad",
    desc: "Procesos rigurosos y certificaciones que garantizan el éxito en cada desarrollo."
  },
];

function AnimatedNumber({ value, trigger }) {
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    const suffix = value.replace(numericMatch[0], "");
    setDisplayValue(`0${suffix}`);

    if (!trigger) return;

    const target = parseInt(numericMatch[0], 10);
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const updateNumber = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * target);

      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateNumber);
  }, [value, trigger]);

  return <span>{displayValue}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="stats" className={styles.section} ref={ref}>
      {/* Decorative Grid Pattern */}
      <div className={styles.gridPattern}></div>

      {/* Decorative Gears */}
      <div className={`${styles.gear} ${styles.gear1}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      </div>
      <div className={`${styles.gear} ${styles.gear2}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      </div>

      <div className={`container ${styles.grid}`}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <div className={styles.numberWrapper}>
              <AnimatedNumber value={stat.value} trigger={isInView} />
            </div>
            <div className={styles.textBlock}>
              <h3 className={styles.titleRow}>
                <span className={styles.iconInline}>
                  <stat.icon size={20} strokeWidth={1.8} />
                </span>
                <span className={styles.label}>{stat.label}</span>
              </h3>
              <p className={styles.description}>{stat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
