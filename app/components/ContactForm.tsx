"use client";

import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "TU_SERVICE_ID";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "TU_TEMPLATE_ID";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "TU_PUBLIC_KEY";

    if (serviceId === "TU_SERVICE_ID" || publicKey === "TU_PUBLIC_KEY") {
      const mailtoUrl = `mailto:Martinegs2012@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Contacto desde Portfolio"
      )}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="cyber-panel cyber-cut-corner p-6 sm:p-8 border border-[#00f0ff]/30 bg-[#0d0e15]/90 space-y-5">
      <div className="border-b border-[#1e2436] pb-3 mb-2 flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-100 font-mono tracking-wider uppercase flex items-center gap-2">
          <span className="text-[#fcee09]">//</span> CANAL DE DESPACHO DIRECTO
        </h3>
        <span className="text-[10px] text-[#00f0ff] font-mono font-medium flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#fcee09] animate-hud-blink" />
          RESPONSE_LATENCY &lt; 24H
        </span>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-[11px] font-bold text-[#00f0ff] uppercase tracking-wider mb-2 font-mono">
          // TU NOMBRE O ENTIDAD CORPORATIVA
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#07080c] border border-[#1e2436] text-gray-100 placeholder-slate-600 focus:border-[#fcee09] outline-none transition text-xs font-mono"
          placeholder="Ej: Arasaka Corp / Sofía Pérez"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-[11px] font-bold text-[#00f0ff] uppercase tracking-wider mb-2 font-mono">
          // CORREO DE RETORNO (EMAIL)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#07080c] border border-[#1e2436] text-gray-100 placeholder-slate-600 focus:border-[#fcee09] outline-none transition text-xs font-mono"
          placeholder="sofia@empresa.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-[11px] font-bold text-[#00f0ff] uppercase tracking-wider mb-2 font-mono">
          // ASUNTO / TRANSMISIÓN
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#07080c] border border-[#1e2436] text-gray-100 placeholder-slate-600 focus:border-[#fcee09] outline-none transition text-xs font-mono"
          placeholder="Ej: Oportunidad Laboral Backend PHP / Desarrollo Laravel"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-[11px] font-bold text-[#00f0ff] uppercase tracking-wider mb-2 font-mono">
          // PAYLOAD DEL MENSAJE
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-[#07080c] border border-[#1e2436] text-gray-100 placeholder-slate-600 focus:border-[#fcee09] outline-none transition resize-none text-xs font-mono"
          placeholder="Detalles sobre el proyecto, puesto o propuesta..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full cyber-btn-yellow py-3.5 px-6 disabled:opacity-50 disabled:cursor-not-allowed text-xs uppercase font-mono flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>ENVIANDO TRANSMISIÓN...</span>
        ) : (
          <>
            <span>DESPACHAR MENSAJE</span>
            <span>➔</span>
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-3 bg-[#07080c] border border-[#00f0ff] text-[#00f0ff] text-xs text-center font-mono animate-in fade-in">
          ✓ TRANSMISIÓN ENVIADA CON ÉXITO. RESPUESTA EN CAMINO.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-3 bg-[#07080c] border border-[#ff0055] text-[#ff0055] text-xs text-center font-mono animate-in fade-in">
          ⚠️ FALLO DE CONEXIÓN DIRECTA. ESCRIBIR A: <a href="mailto:Martinegs2012@gmail.com" className="underline font-bold">Martinegs2012@gmail.com</a>.
        </div>
      )}
    </form>
  );
}
