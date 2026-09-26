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

    // If EmailJS env/keys are not configured, open default mail client as smooth fallback
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "TU_SERVICE_ID";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "TU_TEMPLATE_ID";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "TU_PUBLIC_KEY";

    if (serviceId === "TU_SERVICE_ID" || publicKey === "TU_PUBLIC_KEY") {
      // Direct mailto fallback
      const mailtoUrl = `mailto:Martinegs2012@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Consulta desde Portfolio"
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
    <form onSubmit={handleSubmit} className="space-y-5 bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
          Nombre Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition text-sm"
          placeholder="Ej: Juan Pérez"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition text-sm"
          placeholder="tu@correo.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition text-sm"
          placeholder="Ej: Propuesta de proyecto / Oportunidad laboral"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition resize-none text-sm"
          placeholder="Escribe tu mensaje o consulta..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Enviando mensaje...</span>
          </>
        ) : (
          <>
            <span>Enviar Mensaje</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs text-center font-medium animate-in fade-in">
          ✅ ¡Mensaje preparado/enviado con éxito! Gracias por contactarme.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs text-center font-medium animate-in fade-in">
          ⚠️ Ocurrió un inconveniente. Podés escribirme directamente a <a href="mailto:Martinegs2012@gmail.com" className="underline">Martinegs2012@gmail.com</a>.
        </div>
      )}
    </form>
  );
}

