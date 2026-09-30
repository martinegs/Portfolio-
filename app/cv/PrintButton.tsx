"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
      className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer"
    >
      <span>🖨️ Imprimir / Guardar PDF</span>
    </button>
  );
}
