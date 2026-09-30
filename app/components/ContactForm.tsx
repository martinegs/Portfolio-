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
    <form onSubmit={handleSubmit} className="cyber-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-slate-950/80 shadow-2xl relative space-y-5 font-mono">
      <div className="border-b border-slate-800 pb-3 mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          // CANAL DE COMUNICACIÓN DIRECTO
        </h3>
        <span className="text-[10px] text-slate-500 font-mono">[SECURE_TLS]</span>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
          NOMBRE / EMPRESA
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-400 outline-none transition text-xs font-mono"
          placeholder="Ej: John Doe / Nombre Empresa"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
          CORREO ELECTRÓNICO
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-400 outline-none transition text-xs font-mono"
          placeholder="tu.email@empresa.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
          ASUNTO
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-400 outline-none transition text-xs font-mono"
          placeholder="Ej: Propuesta Laboral / Proyecto Web"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
          MENSAJE
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-400 outline-none transition resize-none text-xs font-mono"
          placeholder="Escribe los detalles de tu consulta o propuesta..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs uppercase tracking-widest flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>ENVIANDO TRANSMISIÓN...</span>
        ) : (
          <>
            <span>TRANSMITIR MENSAJE</span>
            <span>➔</span>
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-cyan-950/60 border border-cyan-500 rounded-lg text-cyan-300 text-xs text-center font-mono animate-in fade-in">
          ✓ Mensaje transmitido con éxito. Te responderé a la brevedad.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-950/60 border border-red-500 rounded-lg text-red-300 text-xs text-center font-mono animate-in fade-in">
          ⚠️ Ocurrió una interrupción. Escribe directamente a: <a href="mailto:Martinegs2012@gmail.com" className="underline">Martinegs2012@gmail.com</a>.
        </div>
      )}
    </form>
  );
}



