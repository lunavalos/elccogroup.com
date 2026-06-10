"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";
import styles from "./Contacto.module.css";

const servicesDropdown = [
  "Obra Civil Industrial",
  "Instalaciones Eléctricas",
  "Fabricación Estructural",
  "Mantenimiento Industrial",
  "Naves Industriales",
  "Automatización",
  "Diseño e Ingeniería",
  "Proyectos Llave en Mano",
  "Otro Asunto / Consulta General"
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("servicio") || "";
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, servicio: serviceParam }));
    }
  }, [serviceParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      empresa: "",
      servicio: serviceParam || "",
      mensaje: ""
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className={styles.successScreen}>
        <div className={styles.successIconWrapper}>
          <CheckCircle2 size={36} />
        </div>
        <h3 className={styles.successTitle}>¡Mensaje Enviado!</h3>
        <p className={styles.successDesc}>
          Gracias por ponerte en contacto. Un asesor de ELCCO Group se comunicará contigo a la brevedad.
        </p>
        <button onClick={handleReset} className={styles.successBtn}>
          <span>Enviar otro mensaje</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.inputGroup}>
          <label htmlFor="nombre" className={styles.label}>Nombre Completo *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className={styles.input}
            placeholder="Ej. Juan Pérez"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Correo Electrónico *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="juan@empresa.com"
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.inputGroup}>
          <label htmlFor="telefono" className={styles.label}>Teléfono de Contacto</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={styles.input}
            placeholder="(844) 123-4567"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="empresa" className={styles.label}>Empresa / Razón Social</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className={styles.input}
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="servicio" className={styles.label}>Servicio de Interés *</label>
        <select
          id="servicio"
          name="servicio"
          required
          value={formData.servicio}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="" disabled>-- Selecciona una opción --</option>
          {servicesDropdown.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="mensaje" className={styles.label}>Mensaje / Requerimientos *</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          value={formData.mensaje}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Escribe aquí los detalles de tu proyecto o consulta..."
        />
      </div>

      <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
        <span>
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          <span className={styles.submitIconWrapper}>
            <Send size={14} />
          </span>
        </span>
      </button>
    </form>
  );
}
