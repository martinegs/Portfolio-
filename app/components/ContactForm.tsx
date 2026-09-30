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
    <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl space-y-5">
      <div className="border-b border-slate-800 pb-3 mb-2 flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-100 font-sans tracking-tight flex items-center gap-2">
          <span>💬</span> Enviame un mensaje directo
        </h3>
        <span className="text-xs text-emerald-400 font-mono font-medium flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Respuesta rápida (&lt; 24hs)
        </span>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">
          Tu Nombre o Empresa
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-gray-100 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition text-xs font-sans"
          placeholder="Ej: Sofía Pérez / Tech Solutions"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">
          Tu Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-gray-100 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition text-xs font-sans"
          placeholder="sofia@empresa.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">
          Asunto del Mensaje
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-gray-100 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition text-xs font-sans"
          placeholder="Ej: Oportunidad laboral Backend PHP / Consulta de proyecto"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-gray-100 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition resize-none text-xs font-sans"
          placeholder="Contame brevemente sobre la propuesta o idea..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Enviando mensaje...</span>
        ) : (
          <>
            <span>Enviar Mensaje</span>
            <span>➔</span>
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs text-center font-sans animate-in fade-in">
          ✓ ¡Mensaje enviado con éxito! Te responderé lo antes posible.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-950/60 border border-red-500/50 rounded-xl text-red-300 text-xs text-center font-sans animate-in fade-in">
          ⚠️ Ocurrió una interrupción. Escribime directamente a: <a href="mailto:Martinegs2012@gmail.com" className="underline font-bold">Martinegs2012@gmail.com</a>.
        </div>
      )}
    </form>
  );
}




