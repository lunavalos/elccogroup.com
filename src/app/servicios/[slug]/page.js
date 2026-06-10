import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import styles from "./SingleServicio.module.css";

const servicesData = {
  "obra-civil": {
    title: "Obra Civil Industrial",
    image: "/images/service_civil.png",
    subtitle: "Cimentación, fosas, trincheras y pavimentación industrial de alta complejidad.",
    desc: "En ELCCO Group diseñamos y ejecutamos obras civiles industriales de alta complejidad. Nos especializamos en la construcción de infraestructura robusta dentro de plantas en operación, garantizando la continuidad de su producción mediante planes de trabajo rigurosos y altos estándares de seguridad.",
    specialties: [
      "Cimentación de equipo pesado y prensas",
      "Fosas, trincheras y túneles tecnológicos",
      "Demoliciones técnicas y remodelaciones internas",
      "Pisos industriales de alta resistencia y acabados epóxicos",
      "Caminos de acceso y pavimentación industrial",
      "Sistemas de drenaje pluvial y sanitario"
    ],
    benefits: [
      {
        title: "Cero Interrupciones",
        desc: "Trabajamos bajo metodologías de construcción que respetan al 100% los flujos operativos de su planta."
      },
      {
        title: "Seguridad Certificada",
        desc: "Alineación estricta a normativas de seguridad industrial y requerimientos EHS de las armadoras."
      },
      {
        title: "Calidad Estructural",
        desc: "Utilizamos materiales certificados y mano de obra experta con supervisión de ingeniería continua."
      }
    ]
  },
  "instalaciones-electricas": {
    title: "Instalaciones Eléctricas",
    image: "/images/service_electrical.png",
    subtitle: "Sistemas de distribución eléctrica industrial en media y baja tensión.",
    desc: "Ofrecemos soluciones eléctricas integrales para el sector industrial. Desde sistemas de distribución de media tensión hasta la conexión final de maquinaria y celdas robotizadas, aseguramos una infraestructura eléctrica segura, eficiente y normada.",
    specialties: [
      "Subestaciones eléctricas y transformadores",
      "Alimentación eléctrica a celdas robotizadas y robots de pintura",
      "Sistemas de canalización, charolas portacables y Conduit",
      "Sistemas de tierras físicas y pararrayos",
      "Tableros de distribución de fuerza y alumbrado",
      "Estudios de calidad de la energía y factor de potencia"
    ],
    benefits: [
      {
        title: "Eficiencia Energética",
        desc: "Optimizamos y dimensionamos sus cargas para reducir costos de facturación y pérdidas de energía."
      },
      {
        title: "Cumplimiento Normativo",
        desc: "Desarrollamos instalaciones eléctricas alineadas a la NOM-001-SEDE y estándares de seguridad industrial."
      },
      {
        title: "Garantía Operativa",
        desc: "Pruebas de aislamiento, continuidad y puesta en marcha segura para evitar paros no programados."
      }
    ]
  },
  "fabricacion-estructural": {
    title: "Fabricación Estructural",
    image: "/images/service_structural.png",
    subtitle: "Diseño, fabricación y montaje de mezzanines, plataformas y acero industrial.",
    desc: "Diseñamos, fabricamos y montamos estructuras metálicas industriales a la medida de sus necesidades. Contamos con procesos de soldadura certificados y personal altamente calificado para garantizar la integridad estructural y durabilidad de cada elemento fabricado.",
    specialties: [
      "Mezzanines industriales y tapancos metálicos",
      "Escaleras de emergencia y pasarelas de seguridad",
      "Plataformas de soporte para equipos y tanques",
      "Herrería industrial y pailería pesada",
      "Racks y soportes estructurales para tuberías (Pipe Racks)",
      "Sistemas de protección y guardas de seguridad en líneas"
    ],
    benefits: [
      {
        title: "Diseño de Precisión",
        desc: "Modelamos y validamos todas nuestras piezas en 3D antes de la fabricación para asegurar un ajuste perfecto."
      },
      {
        title: "Soldadores Certificados",
        desc: "Nuestros procesos de soldadura y soldadores están calificados bajo normas estructurales AWS."
      },
      {
        title: "Instalación Planificada",
        desc: "Montajes rápidos y limpios diseñados para minimizar el uso de grúas e interferencia en planta."
      }
    ]
  },
  "mantenimiento-industrial": {
    title: "Mantenimiento Industrial",
    desc: "Aseguramos la vida útil y el estado óptimo de sus instalaciones industriales. Proporcionamos servicios de mantenimiento preventivo y correctivo de infraestructura para que su planta opere siempre en las mejores condiciones.",
    image: "/images/service_maintenance.png",
    subtitle: "Mantenimiento integral a infraestructura, techos, vialidades y subestaciones.",
    specialties: [
      "Impermeabilización técnica de naves industriales",
      "Mantenimiento a cubiertas metálicas y domos traslúcidos",
      "Pintura de estructuras, fachadas y delimitación de vialidades",
      "Reparación de pisos de concreto y juntas frías",
      "Mantenimiento preventivo a subestaciones y redes eléctricas",
      "Limpieza de drenajes industriales y desazolve"
    ],
    benefits: [
      {
        title: "Prevención de Paros",
        desc: "Identificamos deterioros a tiempo en techos, pisos e instalaciones para evitar filtraciones y paros costosos."
      },
      {
        title: "Atención Inmediata",
        desc: "Cuadrillas listas para resolver urgencias operativas en infraestructura a la brevedad."
      },
      {
        title: "Preservación del Activo",
        desc: "Rutinas continuas que incrementan la plusvalía y vida útil de sus activos industriales."
      }
    ]
  },
  "naves-industriales": {
    title: "Naves Industriales",
    image: "/images/service_naves.png",
    subtitle: "Construcción de naves industriales, ampliaciones, techumbres y canopies.",
    desc: "Construimos naves industriales completas y ampliaciones a la medida de su negocio. Brindamos soluciones integrales de diseño y edificación que combinan eficiencia de costos, rapidez de ejecución y altos estándares de calidad.",
    specialties: [
      "Estructuras metálicas principales de marco rígido",
      "Instalación de techumbres de lámina SSR (Standing Seam Roof)",
      "Fachadas arquitectónicas y paneles térmicos (Multypanel)",
      "Construcción de Canopies y cobertizos exteriores",
      "Sistemas de ventilación natural y domos de iluminación",
      "Cimentaciones profundas y terracerías"
    ],
    benefits: [
      {
        title: "Proyectos a Tiempo",
        desc: "Gerencia estricta de tiempos de entrega para cumplir con las fechas contractuales acordadas."
      },
      {
        title: "Eficiencia Térmica",
        desc: "Integramos aislamientos y domos de luz para reducir consumos de aire acondicionado e iluminación artificial."
      },
      {
        title: "Estructuras Modulares",
        desc: "Diseños que facilitan futuras expansiones físicas de la nave de forma rápida."
      }
    ]
  },
  "automatizacion": {
    title: "Automatización",
    image: "/images/service_automation.png",
    subtitle: "Programación de PLC, integración de celdas robotizadas y Pokayokes.",
    desc: "Llevamos sus procesos productivos al siguiente nivel a través de la automatización industrial. Diseñamos e integramos sistemas inteligentes para aumentar la productividad, mejorar la calidad del producto y garantizar la seguridad de los operadores.",
    specialties: [
      "Programación de PLCs, HMIs y SCADA (Allen Bradley, Siemens, Mitsubishi)",
      "Integración de celdas de soldadura y ensamble robotizado",
      "Sistemas de visión artificial y Pokayokes para control de calidad",
      "Diseño y armado de tableros de control y automatización",
      "Migración y actualización de sistemas de control obsoletos",
      "Sensores, actuadores e instrumentación industrial"
    ],
    benefits: [
      {
        title: "Cero Errores",
        desc: "Desarrollo de sistemas Pokayoke y visión artificial que detienen mermas y productos defectuosos."
      },
      {
        title: "Trazabilidad Total",
        desc: "Sistemas SCADA y de adquisición de datos para monitoreo de productividad y KPIs en tiempo real."
      },
      {
        title: "Soporte Especializado",
        desc: "Ingenieros con amplia experiencia técnica disponibles para puesta en marcha y resolución de problemas."
      }
    ]
  },
  "diseno-ingenieria": {
    title: "Diseño e Ingeniería",
    image: "/images/service_design.png",
    subtitle: "Modelado 3D, memorias de cálculo, planos de detalle y renderizado.",
    desc: "Desarrollamos la ingeniería básica y de detalle que da vida a sus proyectos industriales. Utilizamos herramientas tecnológicas avanzadas para simular, diseñar y validar cada elemento antes de su construcción o fabricación física.",
    specialties: [
      "Diseño y modelado 3D de piezas y ensambles (SolidWorks)",
      "Cálculo estructural mediante Elemento Finito (FEA)",
      "Planos de fabricación y ensamble bajo normas ASME/ISO",
      "Diseño eléctrico y diagramas de control (AutoCAD Electrical)",
      "Modelado de infraestructura y naves industriales (BIM)",
      "Renders fotorrealistas e ingeniería conceptual"
    ],
    benefits: [
      {
        title: "Ahorro de Costos",
        desc: "La validación digital previa elimina retrabajos por colisiones o errores en el sitio de montaje."
      },
      {
        title: "Validación Computacional",
        desc: "Generamos memorias de cálculo que garantizan la resistencia del diseño frente a cargas y vientos."
      },
      {
        title: "Claridad Técnica",
        desc: "Planos detallados que facilitan las compras de material exactas y procesos de fabricación ordenados."
      }
    ]
  },
  "llave-en-mano": {
    title: "Proyectos Llave en Mano",
    image: "/images/service_turnkey.png",
    subtitle: "Gestión integral desde la ingeniería conceptual hasta la puesta en marcha.",
    desc: "Nos encargamos de la gestión completa de su proyecto de principio a fin. Desde la conceptualización y diseño técnico hasta la adquisición de suministros, construcción, montaje y puesta en marcha, le entregamos un proyecto listo para operar.",
    specialties: [
      "Gerencia y administración integral de proyectos (Project Management)",
      "Coordinación de disciplinas (Obra civil, eléctrica, mecánica, automatización)",
      "Procuración de suministros nacionales e internacionales",
      "Comisionamiento y pruebas de funcionamiento en vacío y con carga",
      "Capacitación de personal y entrega de manuales de operación",
      "Trámites regulatorios y gestión de permisos"
    ],
    benefits: [
      {
        title: "Punto Único de Contacto",
        desc: "Nosotros resolvemos toda la integración técnica de especialidades, eliminando disputas entre contratistas."
      },
      {
        title: "Presupuestos Firmes",
        desc: "Establecemos un costo total predeterminado para evitar variaciones financieras y sorpresas."
      },
      {
        title: "Mitigación de Riesgos",
        desc: "ELCCO Group absorbe la responsabilidad del calendario, normativas de seguridad y puesta en marcha."
      }
    ]
  }
};

const servicesList = [
  { name: "Obra Civil Industrial", slug: "obra-civil" },
  { name: "Instalaciones Eléctricas", slug: "instalaciones-electricas" },
  { name: "Fabricación Estructural", slug: "fabricacion-estructural" },
  { name: "Mantenimiento Industrial", slug: "mantenimiento-industrial" },
  { name: "Naves Industriales", slug: "naves-industriales" },
  { name: "Automatización", slug: "automatizacion" },
  { name: "Diseño e Ingeniería", slug: "diseno-ingenieria" },
  { name: "Proyectos Llave en Mano", slug: "llave-en-mano" }
];

export async function generateStaticParams() {
  return [
    { slug: "obra-civil" },
    { slug: "instalaciones-electricas" },
    { slug: "fabricacion-estructural" },
    { slug: "mantenimiento-industrial" },
    { slug: "naves-industriales" },
    { slug: "automatizacion" },
    { slug: "diseno-ingenieria" },
    { slug: "llave-en-mano" }
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return {
      title: "Servicio no encontrado | ELCCO Group"
    };
  }

  return {
    title: `${service.title} | Servicios Industriales`,
    description: service.desc.substring(0, 155) + "..."
  };
}

export default async function DynamicServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* Hero Header */}
      <section 
        className={styles.hero}
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.92)), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>
              Inicio
            </Link>
            <span style={{ color: "#94a3b8", margin: "0 0.5rem", fontSize: "0.85rem" }}>/</span>
            <Link href="/servicios" className={styles.breadcrumbLink}>
              Servicios
            </Link>
            <span style={{ color: "#94a3b8", margin: "0 0.5rem", fontSize: "0.85rem" }}>/</span>
            <span style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase" }}>
              {service.title}
            </span>
          </div>

          <h1 className={`${styles.heroTitle} ${styles.fadeInUp1}`}>
            {service.title}
          </h1>
          <p className={`${styles.heroSubtitle} ${styles.fadeInUp2}`}>
            {service.subtitle || "Soluciones industriales avanzadas con experiencia certificada."}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.splitLayout}>
            {/* Main Content Column */}
            <article className={styles.mainContent}>


              {/* Description Block */}
              <div className={`${styles.contentBlock} ${styles.fadeInUp3}`}>
                <p className={styles.descriptionText}>
                  {service.desc}
                </p>
              </div>

              {/* Specialties Block */}
              <div className={`${styles.contentBlock} ${styles.fadeInUp4}`}>
                <h2 className={styles.sectionSubtitle}>Áreas de Especialidad</h2>
                <div className={styles.specialtiesGrid}>
                  {service.specialties.map((spec, index) => (
                    <div key={spec} className={styles.specialtyCard}>
                      <span className={styles.specialtyNumber}>
                        {index + 1}
                      </span>
                      <span className={styles.specialtyText}>
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Block */}
              <div className={`${styles.contentBlock} ${styles.fadeInUp4}`}>
                <h2 className={styles.sectionSubtitle}>¿Por qué elegir a ELCCO Group?</h2>
                <div className={styles.benefitsContainer}>
                  {service.benefits.map((benefit) => (
                    <div key={benefit.title} className={styles.benefitItem}>
                      <div className={styles.benefitIconWrapper}>
                        <Check size={18} />
                      </div>
                      <div className={styles.benefitTextWrapper}>
                        <h3 className={styles.benefitTitle}>
                          {benefit.title}
                        </h3>
                        <p className={styles.benefitDesc}>
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className={styles.sidebar}>
              {/* Navigation links */}
              <div className={`${styles.sidebarNav} ${styles.fadeInUp2}`}>
                <h3 className={styles.sidebarTitle}>Nuestros Servicios</h3>
                {servicesList.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/servicios/${item.slug}`}
                    className={`${styles.sidebarLink} ${
                      item.slug === slug ? styles.sidebarLinkActive : ""
                    }`}
                  >
                    {item.name}
                    <ChevronRight size={14} />
                  </Link>
                ))}
              </div>

              {/* Call to action sidebar block */}
              <div className={`${styles.sidebarContactCard} ${styles.fadeInUp3}`}>
                <h4 className={styles.sidebarContactTitle}>
                  ¿Listo para iniciar tu proyecto?
                </h4>
                <p className={styles.sidebarContactDesc}>
                  Contáctanos para realizar un levantamiento técnico en tu planta o solicitar una cotización formal.
                </p>
                <Link
                  href={`/contacto?servicio=${encodeURIComponent(service.title)}`}
                  className={styles.sidebarContactBtn}
                >
                  <span>Cotizar {service.title}</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
