"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2.2 }}
    >
      <div className={styles.navContainer}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo-elcco-new-blanco.webp"
              alt="ELCCO Group Logo"
              width={130}
              height={40}
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className={styles.navItem}
              onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
              {link.submenu && activeSubmenu === link.name && (
                <motion.div
                  className={styles.submenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {link.submenu.map((sub) => (
                    <Link key={sub.name} href={sub.href} className={styles.submenuLink}>
                      {sub.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Right content: Phone & CTA Button */}
        <div className={styles.rightContent}>
          <div className={styles.ctaWrapper}>
            <Link href="/contacto" className={styles.ctaBtn}>
              <span>Cotizar</span>
              <span className={styles.ctaIconWrapper}>
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          className={styles.mobileNav}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className={styles.mobileSubmenu}>
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={styles.mobileSubmenuLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contacto" className={styles.mobileCta} onClick={() => setIsOpen(false)}>
            Solicitar Cotización
          </Link>
        </motion.nav>
      )}
    </motion.header>
  );
}
