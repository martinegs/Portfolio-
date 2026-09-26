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
        formData.subject || "Pergamino desde Portfolio AoE2"
      )}&body=${encodeURIComponent(
        `Mensajero: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
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
    <form onSubmit={handleSubmit} className="space-y-5 bg-[#1c1917]/90 border-2 border-amber-700/60 p-6 sm:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] relative">
      {/* Corner Ornaments */}
      <div className="absolute top-2 left-2 text-[10px] text-amber-500/50">❖</div>
      <div className="absolute top-2 right-2 text-[10px] text-amber-500/50">❖</div>
      <div className="absolute bottom-2 left-2 text-[10px] text-amber-500/50">❖</div>
      <div className="absolute bottom-2 right-2 text-[10px] text-amber-500/50">❖</div>

      <div className="border-b border-amber-800/60 pb-3 mb-4 text-center">
        <h3 className="text-lg font-bold text-amber-200 font-serif uppercase tracking-widest flex items-center justify-center gap-2">
          <span>📜</span> Enviar Pergamino Mensajero
        </h3>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2 font-serif">
          Nombre del Emisario
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black/60 border border-amber-700/50 rounded-lg text-amber-100 placeholder-stone-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-400 outline-none transition text-sm font-sans"
          placeholder="Ej: Lord William / Tu Nombre"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2 font-serif">
          Correo Electrónico de la Casa
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black/60 border border-amber-700/50 rounded-lg text-amber-100 placeholder-stone-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-400 outline-none transition text-sm font-sans"
          placeholder="tu@reino.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2 font-serif">
          Asunto del Decreto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black/60 border border-amber-700/50 rounded-lg text-amber-100 placeholder-stone-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-400 outline-none transition text-sm font-sans"
          placeholder="Ej: Propuesta de Alianza / Proyecto Web"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2 font-serif">
          Contenido del Pergamino
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-black/60 border border-amber-700/50 rounded-lg text-amber-100 placeholder-stone-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-400 outline-none transition resize-none text-sm font-sans"
          placeholder="Escribe tu propuesta o mensaje para el castillo..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:to-amber-700 text-amber-950 font-extrabold py-3.5 px-6 rounded-lg shadow-xl hover:shadow-amber-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider font-serif border border-amber-300/60 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>🕊️ Despachando Palomo Mensajero...</span>
        ) : (
          <>
            <span>🕊️ Despachar Pergamino</span>
            <span>➔</span>
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-amber-950/80 border border-amber-500 rounded-lg text-amber-200 text-xs text-center font-serif animate-in fade-in">
          ✅ ¡Pergamino enviado con éxito! El Palomo Mensajero va en camino.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-950/80 border border-red-500 rounded-lg text-red-200 text-xs text-center font-serif animate-in fade-in">
          ⚠️ Ocurrió una interrupción. Escribe directamente al maestre: <a href="mailto:Martinegs2012@gmail.com" className="underline">Martinegs2012@gmail.com</a>.
        </div>
      )}
    </form>
  );
}


