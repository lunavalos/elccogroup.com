import React, { Suspense } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import styles from "./Contacto.module.css";

export const metadata = {
  title: "Contacto | ELCCO Group - Servicios Industriales",
  description: "Ponte en contacto con ELCCO Group para cotizaciones de obra civil industrial, instalaciones eléctricas, fabricación estructural y automatización en México.",
};

const offices = [
  {
    city: "Saltillo, Coahuila",
    address: "Blvd. Vito Alessio Robles 3720-8, Col. Valle Industrial, C.P. 25100",
    mapLink: "https://maps.google.com/?q=Blvd.+Vito+Alessio+Robles+3720-8,+Col.+Valle+Industrial,+C.P.+25100,+Saltillo,+Coahuila"
  },
  {
    city: "San Luis Potosí, S.L.P.",
    address: "Eje 130 #150 int. 16, Col. Industrial, C.P. 78395",
    mapLink: "https://maps.google.com/?q=Eje+130+%23150+int.+16,+Col.+Industrial,+C.P.+78395,+San+Luis+Potosi"
  },
  {
    city: "Silao, Guanajuato",
    address: "Circuito Logístico #152, Predio Bustamante, C.P. 36270",
    mapLink: "https://maps.google.com/?q=Circuito+Logistico+%23152,+Predio+Bustamante,+C.P.+36270,+Silao,+Guanajuato"
  }
];

export default function ContactoPage() {
  return (
    <main className={styles.main}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>
              Inicio
            </Link>
            <span style={{ color: "#94a3b8", margin: "0 0.5rem", fontSize: "0.85rem" }}>/</span>
            <span style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase" }}>
              Contacto
            </span>
          </div>

          <h1 className={styles.heroTitle}>Contacto</h1>
          <p className={styles.heroSubtitle}>
            Estamos listos para colaborar en tu próximo proyecto industrial. Escríbenos o comunícate con nosotros a través de nuestros canales oficiales.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.splitGrid}>
            {/* Info Column */}
            <div className={styles.infoCol}>
              <div className={styles.infoGroup}>
                <h2 className={styles.sectionSubtitle}>Contacto Directo</h2>
                <p className={styles.sectionDesc}>
                  Comunícate directamente a nuestro departamento de ventas y cotizaciones para recibir atención personalizada de inmediato.
                </p>
                
                <div className={styles.directContactGrid}>
                  <a href="tel:+528444273301" className={styles.contactCard}>
                    <div className={styles.contactIconWrapper}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className={styles.contactCardTitle}>Llámanos</span>
                      <span className={styles.contactCardValue}>(844) 427-3301</span>
                    </div>
                  </a>

                  <a href="mailto:ventas@elccogroup.com" className={styles.contactCard}>
                    <div className={styles.contactIconWrapper}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className={styles.contactCardTitle}>Escríbenos</span>
                      <span className={styles.contactCardValue}>ventas@elccogroup.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className={styles.infoGroup}>
                <h2 className={styles.sectionSubtitle}>Nuestras Oficinas</h2>
                <p className={styles.sectionDesc}>
                  Contamos con presencia estratégica en zonas de alto desarrollo industrial en México.
                </p>

                <div className={styles.locationsGrid}>
                  {offices.map((office) => (
                    <div key={office.city} className={styles.locationCard}>
                      <div className={styles.locationIconWrapper}>
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h3 className={styles.locationTitle}>{office.city}</h3>
                        <p className={styles.locationAddress}>{office.address}</p>
                        <a
                          href={office.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            fontSize: "0.8rem",
                            fontWeight: "700",
                            color: "var(--primary)",
                            marginTop: "0.75rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px"
                          }}
                        >
                          Ver en Google Maps <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className={styles.formCol}>
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Formulario de Contacto</h2>
                <p className={styles.formDesc}>
                  Completa el siguiente formulario y un ejecutivo técnico se pondrá en contacto contigo para analizar tus requerimientos de obra o servicio.
                </p>
                <Suspense fallback={<div style={{ padding: "3rem", textAlign: "center", color: "var(--muted)" }}>Cargando formulario...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
