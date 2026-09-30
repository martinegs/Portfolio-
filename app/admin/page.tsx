"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Project,
  ExperienceItem,
  SkillCategory,
  initialProjects,
  initialExperiences,
  initialSkills,
} from "@/lib/initialData";
import {
  getStoredProjects,
  saveStoredProjects,
  getStoredExperiences,
  saveStoredExperiences,
  getStoredSkills,
  saveStoredSkills,
  resetAllToDefault,
} from "@/lib/storage";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<"projects" | "experience" | "skills" | "backup">("projects");

  // Data States
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [skills, setSkills] = useState<SkillCategory[]>([]);

  // Editing Modal States
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingExperience, setEditingExperience] = useState<ExperienceItem | null>(null);

  // New Project Form State
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "Full-Stack",
    image: "/projects/ordenestiemporeal.png",
    technologiesStr: "PHP, Laravel, MySQL",
    githubUrl: "",
    demoUrl: "",
    caseStudyUrl: "",
    hideGithub: false,
  });

  // New Experience Form State
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    period: "",
    description: "",
    location: "Mendoza, Argentina",
    mode: "Presencial",
    type: "job" as "job" | "education",
  });

  // New Skill Form State
  const [newSkillCategory, setNewSkillCategory] = useState({
    category: "",
    icon: "⚡",
    itemsStr: "",
  });

  // Notification Toast State
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Auth Check on Mount
  useEffect(() => {
    const sessionToken = localStorage.getItem("mg_admin_auth_token");
    if (sessionToken === "admin_authenticated_session_mg_2026") {
      setIsAuthenticated(true);
    }
  }, []);

  // Load Data
  useEffect(() => {
    setProjects(getStoredProjects());
    setExperiences(getStoredExperiences());
    setSkills(getStoredSkills());
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

    if (passwordInput === validPassword || passwordInput === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem("mg_admin_auth_token", "admin_authenticated_session_mg_2026");
      setPasswordInput("");
      showNotification("✓ Acceso concedido al Panel de Administración");
    } else {
      setAuthError("Contraseña de administrador incorrecta");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("mg_admin_auth_token");
  };

  // --- PROJECT ACTIONS ---
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title.trim()) return;

    const created: Project = {
      id: Date.now().toString(),
      title: newProject.title.trim(),
      description: newProject.description.trim(),
      category: newProject.category,
      image: newProject.image.trim() || "/projects/ordenestiemporeal.png",
      technologies: newProject.technologiesStr
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      githubUrl: newProject.githubUrl.trim() || undefined,
      demoUrl: newProject.demoUrl.trim() || undefined,
      caseStudyUrl: newProject.caseStudyUrl.trim() || undefined,
      hideGithub: newProject.hideGithub,
    };

    const updated = [created, ...projects];
    setProjects(updated);
    saveStoredProjects(updated);

    setNewProject({
      title: "",
      description: "",
      category: "Full-Stack",
      image: "/projects/ordenestiemporeal.png",
      technologiesStr: "PHP, Laravel, MySQL",
      githubUrl: "",
      demoUrl: "",
      caseStudyUrl: "",
      hideGithub: false,
    });
    showNotification("✓ Proyecto agregado exitosamente");
  };

  const handleDeleteProject = (id: string) => {
    if (confirm("¿Estás seguro de eliminar este proyecto?")) {
      const updated = projects.filter((p) => p.id !== id);
      setProjects(updated);
      saveStoredProjects(updated);
      showNotification("✓ Proyecto eliminado");
    }
  };

  const handleSaveEditProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    const updated = projects.map((p) => (p.id === editingProject.id ? editingProject : p));
    setProjects(updated);
    saveStoredProjects(updated);
    setEditingProject(null);
    showNotification("✓ Proyecto actualizado con éxito");
  };

  const handleMoveProject = (index: number, direction: "up" | "down") => {
    const updated = [...projects];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= updated.length) return;

    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;

    setProjects(updated);
    saveStoredProjects(updated);
  };

  // --- EXPERIENCE ACTIONS ---
  const handleAddExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExperience.title.trim() || !newExperience.company.trim()) return;

    const created: ExperienceItem = {
      id: "exp-" + Date.now().toString(),
      title: newExperience.title.trim(),
      company: newExperience.company.trim(),
      period: newExperience.period.trim(),
      description: newExperience.description.trim(),
      location: newExperience.location.trim(),
      mode: newExperience.mode.trim(),
      type: newExperience.type,
    };

    const updated = [created, ...experiences];
    setExperiences(updated);
    saveStoredExperiences(updated);

    setNewExperience({
      title: "",
      company: "",
      period: "",
      description: "",
      location: "Mendoza, Argentina",
      mode: "Presencial",
      type: "job",
    });
    showNotification("✓ Registro de experiencia agregado");
  };

  const handleDeleteExperience = (id: string) => {
    if (confirm("¿Estás seguro de eliminar este registro de experiencia?")) {
      const updated = experiences.filter((e) => e.id !== id);
      setExperiences(updated);
      saveStoredExperiences(updated);
      showNotification("✓ Registro eliminado");
    }
  };

  const handleSaveEditExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExperience) return;

    const updated = experiences.map((exp) => (exp.id === editingExperience.id ? editingExperience : exp));
    setExperiences(updated);
    saveStoredExperiences(updated);
    setEditingExperience(null);
    showNotification("✓ Experiencia actualizada con éxito");
  };

  // --- SKILLS ACTIONS ---
  const handleAddSkillCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillCategory.category.trim()) return;

    const created: SkillCategory = {
      id: "skill-" + Date.now().toString(),
      category: newSkillCategory.category.trim(),
      icon: newSkillCategory.icon.trim() || "⚡",
      items: newSkillCategory.itemsStr
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    const updated = [...skills, created];
    setSkills(updated);
    saveStoredSkills(updated);

    setNewSkillCategory({ category: "", icon: "⚡", itemsStr: "" });
    showNotification("✓ Categoría de habilidades agregada");
  };

  const handleDeleteSkillCategory = (id: string) => {
    if (confirm("¿Estás seguro de eliminar esta categoría de habilidades?")) {
      const updated = skills.filter((s) => s.id !== id);
      setSkills(updated);
      saveStoredSkills(updated);
      showNotification("✓ Categoría eliminada");
    }
  };

  // --- BACKUP & EXPORT ---
  const handleExportJSON = () => {
    const backupData = {
      projects,
      experiences,
      skills,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification("✓ Copia de seguridad JSON descargada");
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.projects && Array.isArray(parsed.projects)) {
          setProjects(parsed.projects);
          saveStoredProjects(parsed.projects);
        }
        if (parsed.experiences && Array.isArray(parsed.experiences)) {
          setExperiences(parsed.experiences);
          saveStoredExperiences(parsed.experiences);
        }
        if (parsed.skills && Array.isArray(parsed.skills)) {
          setSkills(parsed.skills);
          saveStoredSkills(parsed.skills);
        }
        showNotification("✓ Datos importados exitosamente desde JSON");
      } catch {
        alert("Error al importar el archivo JSON. Estructura no válida.");
      }
    };
    reader.readAsText(file);
  };

  const handleResetData = () => {
    if (confirm("¿Deseas restablecer todos los datos a la configuración original de fábrica?")) {
      resetAllToDefault();
      setProjects(initialProjects);
      setExperiences(initialExperiences);
      setSkills(initialSkills);
      showNotification("✓ Datos restablecidos por defecto");
    }
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030712] text-gray-100 flex items-center justify-center p-4 font-mono">
        <div className="cyber-panel p-8 rounded-2xl border border-cyan-500/40 bg-slate-950/90 max-w-md w-full shadow-2xl space-y-6 relative overflow-hidden">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold text-base mx-auto">
              MG_
            </div>
            <h1 className="text-lg font-bold text-gray-100 uppercase tracking-widest">// ACCESO ADMINISTRADOR</h1>
            <p className="text-xs text-slate-400 font-sans">
              Ingresá la clave de acceso para gestionar tu portafolio en tiempo real.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="pass" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                CONTRASEÑA DE SEGURIDAD
              </label>
              <input
                type="password"
                id="pass"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Ingresar contraseña..."
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-gray-100 text-xs font-mono outline-none focus:border-cyan-400 transition"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Clave por defecto: admin123</span>
            </div>

            {authError && (
              <div className="p-3 bg-red-950/70 border border-red-500/50 text-red-300 text-xs rounded text-center">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-3 rounded-lg text-xs uppercase tracking-widest shadow-lg transition"
            >
              INGRESAR AL PANEL ➔
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs text-slate-400 hover:text-cyan-400 transition">
              ← Volver a la Portada Pública
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN ADMIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Cyber Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 sticky top-0 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
              MG_
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-100 font-mono tracking-wider">PANEL DE ADMINISTRACIÓN</h1>
              <span className="text-[10px] text-cyan-400 font-mono uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SISTEMA EN VIVO // MODIFICACIONES EN TIEMPO REAL
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <Link
              href="/"
              target="_blank"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 px-3.5 py-1.5 rounded-lg transition"
            >
              👁️ VER PORTADA ↗
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-950/80 hover:bg-red-900 border border-red-700/60 text-red-300 px-3.5 py-1.5 rounded-lg transition"
            >
              SALIR
            </button>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-cyan-400 text-cyan-300 font-mono text-xs px-5 py-3 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          {notification}
        </div>
      )}

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3 font-mono text-xs">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 rounded-lg font-bold uppercase transition border ${
              activeTab === "projects"
                ? "bg-cyan-600 border-cyan-400 text-slate-950 shadow-lg"
                : "bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400"
            }`}
          >
            📂 PROYECTOS ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 rounded-lg font-bold uppercase transition border ${
              activeTab === "experience"
                ? "bg-cyan-600 border-cyan-400 text-slate-950 shadow-lg"
                : "bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400"
            }`}
          >
            💼 EXPERIENCIA & ESTUDIOS ({experiences.length})
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-4 py-2 rounded-lg font-bold uppercase transition border ${
              activeTab === "skills"
                ? "bg-cyan-600 border-cyan-400 text-slate-950 shadow-lg"
                : "bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400"
            }`}
          >
            ⚡ HABILIDADES ({skills.length})
          </button>
          <button
            onClick={() => setActiveTab("backup")}
            className={`px-4 py-2 rounded-lg font-bold uppercase transition border ${
              activeTab === "backup"
                ? "bg-cyan-600 border-cyan-400 text-slate-950 shadow-lg"
                : "bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400"
            }`}
          >
            💾 BACKUP & RESTAURAR
          </button>
        </div>

        {/* TAB 1: PROJECTS */}
        {activeTab === "projects" && (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Add Project Form */}
            <div className="lg:col-span-5">
              <form onSubmit={handleAddProject} className="cyber-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-950/80 space-y-4 font-mono text-xs">
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                  // AGREGAR NUEVO PROYECTO
                </h2>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">TÍTULO DEL PROYECTO *</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    placeholder="Ej: Sistema de Control de Stock"
                    required
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">DESCRIPCIÓN *</label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    rows={3}
                    placeholder="Explicación detallada de las funciones y tecnologías..."
                    required
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400 font-sans text-xs resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">CATEGORÍA</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                    >
                      <option value="Full-Stack">Full-Stack</option>
                      <option value="Backend">Backend</option>
                      <option value="Frontend">Frontend</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">IMAGEN (URL O RUTA)</label>
                    <input
                      type="text"
                      value={newProject.image}
                      onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                      placeholder="/projects/ordenestiemporeal.png"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">TECNOLOGÍAS (Separadas por comas)</label>
                  <input
                    type="text"
                    value={newProject.technologiesStr}
                    onChange={(e) => setNewProject({ ...newProject, technologiesStr: e.target.value })}
                    placeholder="PHP, Laravel, Vue 3, MySQL"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">URL GITHUB</label>
                    <input
                      type="url"
                      value={newProject.githubUrl}
                      onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                      placeholder="https://github.com/..."
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">URL DEMO LIVE</label>
                    <input
                      type="url"
                      value={newProject.demoUrl}
                      onChange={(e) => setNewProject({ ...newProject, demoUrl: e.target.value })}
                      placeholder="https://midemo.com"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">URL CASO DE ESTUDIO (OPCIONAL)</label>
                  <input
                    type="text"
                    value={newProject.caseStudyUrl}
                    onChange={(e) => setNewProject({ ...newProject, caseStudyUrl: e.target.value })}
                    placeholder="/proyectos/tareas-pendientes"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="hideGit"
                    checked={newProject.hideGithub}
                    onChange={(e) => setNewProject({ ...newProject, hideGithub: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-800 text-cyan-500 focus:ring-0"
                  />
                  <label htmlFor="hideGit" className="text-slate-300 text-[11px]">
                    Es un repositorio privado / ERP Empresarial
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-3 rounded text-xs uppercase tracking-wider shadow-lg transition mt-2"
                >
                  + AGREGAR PROYECTO
                </button>
              </form>
            </div>

            {/* List of Existing Projects */}
            <div className="lg:col-span-7 space-y-4 font-mono text-xs">
              <h2 className="text-sm font-bold text-gray-100 uppercase tracking-wider border-b border-slate-800 pb-2">
                // PROYECTOS ACTUALES EN PORTADA ({projects.length})
              </h2>

              <div className="space-y-4 max-h-[750px] overflow-y-auto pr-2">
                {projects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="cyber-panel p-4 rounded-xl border border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row justify-between items-start gap-4 hover:border-slate-700 transition"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">#{idx + 1}</span>
                        <h3 className="text-sm font-bold text-gray-100 font-mono">{proj.title}</h3>
                        <span className="bg-slate-900 border border-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded">
                          {proj.category}
                        </span>
                      </div>
                      <p className="text-slate-300 font-sans text-xs leading-relaxed line-clamp-2">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.map((t, i) => (
                          <span key={i} className="text-[10px] bg-slate-900 text-cyan-300 px-2 py-0.5 rounded border border-slate-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto">
                      <div className="flex gap-1 w-full sm:w-auto">
                        <button
                          onClick={() => handleMoveProject(idx, "up")}
                          disabled={idx === 0}
                          className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 disabled:opacity-30 rounded"
                          title="Subir posición"
                        >
                          ▲
                        </button>
                        <button
                          onClick={() => handleMoveProject(idx, "down")}
                          disabled={idx === projects.length - 1}
                          className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 disabled:opacity-30 rounded"
                          title="Bajar posición"
                        >
                          ▼
                        </button>
                      </div>

                      <button
                        onClick={() => setEditingProject(proj)}
                        className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded text-[11px] font-bold w-full"
                      >
                        EDITAR
                      </button>
                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="px-3 py-1 bg-red-950/80 hover:bg-red-900 text-red-300 rounded text-[11px] font-bold w-full"
                      >
                        ELIMINAR
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EXPERIENCE */}
        {activeTab === "experience" && (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Add Experience Form */}
            <div className="lg:col-span-5">
              <form onSubmit={handleAddExperience} className="cyber-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-950/80 space-y-4 font-mono text-xs">
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                  // AGREGAR EXPERIENCIA O ESTUDIO
                </h2>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">PUESTO / CARGO / TITULACIÓN *</label>
                  <input
                    type="text"
                    value={newExperience.title}
                    onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
                    placeholder="Ej: Desarrollador Backend PHP"
                    required
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">EMPRESA / INSTITUCIÓN *</label>
                  <input
                    type="text"
                    value={newExperience.company}
                    onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                    placeholder="Ej: Necta"
                    required
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">PERÍODO / FECHAS *</label>
                  <input
                    type="text"
                    value={newExperience.period}
                    onChange={(e) => setNewExperience({ ...newExperience, period: e.target.value })}
                    placeholder="Ej: Ene 2026 - Presente"
                    required
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">DESCRIPCIÓN DE TAREAS</label>
                  <textarea
                    value={newExperience.description}
                    onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                    rows={3}
                    placeholder="Desarrollo de lógica backend con Laravel, consultas MySQL..."
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400 font-sans text-xs resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">TIPO DE REGISTRO</label>
                    <select
                      value={newExperience.type}
                      onChange={(e) => setNewExperience({ ...newExperience, type: e.target.value as "job" | "education" })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                    >
                      <option value="job">Empleo / Experiencia</option>
                      <option value="education">Educación / Grado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">MODALIDAD</label>
                    <input
                      type="text"
                      value={newExperience.mode}
                      onChange={(e) => setNewExperience({ ...newExperience, mode: e.target.value })}
                      placeholder="Presencial / Remoto"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-3 rounded text-xs uppercase tracking-wider shadow-lg transition mt-2"
                >
                  + AGREGAR REGISTRO DE EXPERIENCIA
                </button>
              </form>
            </div>

            {/* List of Experience */}
            <div className="lg:col-span-7 space-y-4 font-mono text-xs">
              <h2 className="text-sm font-bold text-gray-100 uppercase tracking-wider border-b border-slate-800 pb-2">
                // EXPERIENCIA Y EDUCACIÓN ACTUAL ({experiences.length})
              </h2>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="cyber-panel p-4 rounded-xl border border-slate-800 bg-slate-950/80 flex justify-between items-start gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-gray-100">{exp.title}</h3>
                        <span className="text-cyan-400 font-bold">@ {exp.company}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{exp.period} • {exp.mode}</p>
                      <p className="text-slate-300 font-sans text-xs leading-relaxed mt-1">
                        {exp.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setEditingExperience(exp)}
                        className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded text-[11px] font-bold"
                      >
                        EDITAR
                      </button>
                      <button
                        onClick={() => handleDeleteExperience(exp.id)}
                        className="px-3 py-1 bg-red-950/80 hover:bg-red-900 text-red-300 rounded text-[11px] font-bold"
                      >
                        ELIMINAR
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SKILLS */}
        {activeTab === "skills" && (
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <form onSubmit={handleAddSkillCategory} className="cyber-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-950/80 space-y-4 font-mono text-xs">
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                  // AGREGAR CATEGORÍA DE HABILIDADES
                </h2>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">NOMBRE CATEGORÍA *</label>
                  <input
                    type="text"
                    value={newSkillCategory.category}
                    onChange={(e) => setNewSkillCategory({ ...newSkillCategory, category: e.target.value })}
                    placeholder="Ej: Backend Development"
                    required
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">ÍCONO / EMOJI</label>
                  <input
                    type="text"
                    value={newSkillCategory.icon}
                    onChange={(e) => setNewSkillCategory({ ...newSkillCategory, icon: e.target.value })}
                    placeholder="⚡"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">TECNOLOGÍAS / ÍTEMS (Separadas por comas)</label>
                  <input
                    type="text"
                    value={newSkillCategory.itemsStr}
                    onChange={(e) => setNewSkillCategory({ ...newSkillCategory, itemsStr: e.target.value })}
                    placeholder="PHP 8+, Laravel, CodeIgniter, MySQL"
                    required
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-3 rounded text-xs uppercase tracking-wider shadow-lg transition mt-2"
                >
                  + AGREGAR CATEGORÍA
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 space-y-4 font-mono text-xs">
              <h2 className="text-sm font-bold text-gray-100 uppercase tracking-wider border-b border-slate-800 pb-2">
                // MATRIZ DE HABILIDADES ACTUAL ({skills.length})
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.id} className="cyber-panel p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <span>{skillGroup.icon}</span>
                        <h3 className="font-bold text-cyan-400">{skillGroup.category}</h3>
                      </div>
                      <button
                        onClick={() => handleDeleteSkillCategory(skillGroup.id)}
                        className="text-red-400 hover:text-red-300 font-bold text-[10px]"
                      >
                        [ELIMINAR]
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((item, idx) => (
                        <span key={idx} className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: BACKUP & UTILS */}
        {activeTab === "backup" && (
          <div className="max-w-2xl mx-auto font-mono text-xs space-y-6">
            <div className="cyber-panel p-6 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4">
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                // HERRAMIENTAS DE COPIA DE SEGURIDAD
              </h2>
              <p className="text-slate-300 font-sans text-xs leading-relaxed">
                Podés exportar toda la información actual de tu portafolio en un archivo JSON o importar un respaldo para restaurar o transferir tus datos.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={handleExportJSON}
                  className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider shadow"
                >
                  📥 EXPORTAR BACKUP EN JSON
                </button>

                <label className="bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider cursor-pointer border border-slate-700">
                  📤 IMPORTAR DESDE JSON
                  <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                </label>
              </div>
            </div>

            <div className="cyber-panel p-6 rounded-2xl border border-red-500/40 bg-slate-950/80 space-y-4">
              <h2 className="text-sm font-bold text-red-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                ⚠️ RESTABLECER DATOS DE FÁBRICA
              </h2>
              <p className="text-slate-300 font-sans text-xs leading-relaxed">
                Si cometiste algún error o querés volver al contenido inicial por defecto, podés restablecer el portafolio completo con un solo clic.
              </p>

              <button
                onClick={handleResetData}
                className="bg-red-950 hover:bg-red-900 border border-red-700 text-red-300 font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider"
              >
                🔄 RESTABLECER DATOS POR DEFECTO
              </button>
            </div>
          </div>
        )}
      </main>

      {/* EDIT PROJECT MODAL */}
      {editingProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 font-mono text-xs">
          <form onSubmit={handleSaveEditProject} className="cyber-panel p-6 rounded-2xl border border-cyan-500/50 bg-slate-950 max-w-xl w-full space-y-4 shadow-2xl">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              // EDITAR PROYECTO
            </h2>

            <div>
              <label className="block text-slate-300 mb-1 font-semibold">TÍTULO</label>
              <input
                type="text"
                value={editingProject.title}
                onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                required
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-semibold">DESCRIPCIÓN</label>
              <textarea
                value={editingProject.description}
                onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                rows={3}
                required
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400 font-sans text-xs resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 mb-1 font-semibold">CATEGORÍA</label>
                <input
                  type="text"
                  value={editingProject.category}
                  onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">IMAGEN URL</label>
                <input
                  type="text"
                  value={editingProject.image}
                  onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-semibold">TECNOLOGÍAS (Comas)</label>
              <input
                type="text"
                value={editingProject.technologies.join(", ")}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    technologies: e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
                  })
                }
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 mb-1 font-semibold">URL GITHUB</label>
                <input
                  type="text"
                  value={editingProject.githubUrl || ""}
                  onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">URL DEMO LIVE</label>
                <input
                  type="text"
                  value={editingProject.demoUrl || ""}
                  onChange={(e) => setEditingProject({ ...editingProject, demoUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setEditingProject(null)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700"
              >
                CANCELAR
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-cyan-600 text-slate-950 font-bold rounded hover:bg-cyan-500"
              >
                GUARDAR CAMBIOS
              </button>
            </div>
          </form>
        </div>
      )}

      {/* EDIT EXPERIENCE MODAL */}
      {editingExperience && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 font-mono text-xs">
          <form onSubmit={handleSaveEditExperience} className="cyber-panel p-6 rounded-2xl border border-cyan-500/50 bg-slate-950 max-w-xl w-full space-y-4 shadow-2xl">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              // EDITAR REGISTRO DE EXPERIENCIA
            </h2>

            <div>
              <label className="block text-slate-300 mb-1 font-semibold">CARGO / TITULACIÓN</label>
              <input
                type="text"
                value={editingExperience.title}
                onChange={(e) => setEditingExperience({ ...editingExperience, title: e.target.value })}
                required
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-semibold">EMPRESA / INSTITUCIÓN</label>
              <input
                type="text"
                value={editingExperience.company}
                onChange={(e) => setEditingExperience({ ...editingExperience, company: e.target.value })}
                required
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-semibold">PERÍODO</label>
              <input
                type="text"
                value={editingExperience.period}
                onChange={(e) => setEditingExperience({ ...editingExperience, period: e.target.value })}
                required
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-semibold">DESCRIPCIÓN</label>
              <textarea
                value={editingExperience.description}
                onChange={(e) => setEditingExperience({ ...editingExperience, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-gray-100 outline-none focus:border-cyan-400 font-sans text-xs resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setEditingExperience(null)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700"
              >
                CANCELAR
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-cyan-600 text-slate-950 font-bold rounded hover:bg-cyan-500"
              >
                GUARDAR CAMBIOS
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
