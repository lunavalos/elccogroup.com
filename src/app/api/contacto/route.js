import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, empresa, servicio, mensaje } = body;

    // Validación básica de campos obligatorios
    if (!nombre || !email || !servicio || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos marcados con * son obligatorios." },
        { status: 400 }
      );
    }

    // Validar que las variables de entorno estén presentes
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.EMAIL_TO || !process.env.EMAIL_FROM) {
      console.error("Faltan variables de entorno en el servidor para configurar el correo.");
      return NextResponse.json(
        { error: "Error de configuración de correo en el servidor. Asegúrate de configurar las Variables de Entorno en el hosting." },
        { status: 500 }
      );
    }

    // Configuración del transportador de correo usando SMTP de Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true para puerto 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Contenido del correo en texto plano y HTML
    const mailOptions = {
      from: `"Elcco Group Website" <${process.env.EMAIL_FROM}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de contacto: ${servicio} - ${empresa || nombre}`,
      text: `
Nuevo mensaje de contacto recibido a través de elccogroup.com:

Nombre Completo: ${nombre}
Correo Electrónico: ${email}
Teléfono: ${telefono || "No especificado"}
Empresa: ${empresa || "No especificada"}
Servicio de interés: ${servicio}

Mensaje / Requerimientos:
${mensaje}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-top: 0; font-size: 20px;">
            Nuevo Mensaje de Contacto
          </h2>
          <p style="margin: 10px 0; font-size: 14px; line-height: 1.5;">
            <strong>Nombre Completo:</strong> ${nombre}
          </p>
          <p style="margin: 10px 0; font-size: 14px; line-height: 1.5;">
            <strong>Correo Electrónico:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
          </p>
          <p style="margin: 10px 0; font-size: 14px; line-height: 1.5;">
            <strong>Teléfono:</strong> ${telefono || "No especificado"}
          </p>
          <p style="margin: 10px 0; font-size: 14px; line-height: 1.5;">
            <strong>Empresa:</strong> ${empresa || "No especificada"}
          </p>
          <p style="margin: 10px 0; font-size: 14px; line-height: 1.5;">
            <strong>Servicio de interés:</strong> <span style="background-color: #eff6ff; color: #1e40af; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 13px;">${servicio}</span>
          </p>
          
          <div style="margin-top: 25px; padding: 20px; background-color: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 6px;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #475569; font-size: 14px;">Mensaje / Requerimientos:</p>
            <p style="margin: 0; white-space: pre-wrap; color: #334155; font-size: 14px; line-height: 1.6;">${mensaje}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 15px;">
            Este mensaje fue enviado de manera automática desde el formulario de contacto de elccogroup.com.
          </div>
        </div>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: `Error del servidor: ${error.message || error}` },
      { status: 500 }
    );
  }
}
