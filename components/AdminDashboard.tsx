"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  FolderGit2,
  CheckCircle2,
} from "lucide-react";

const AdminDashboard = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null); // Changed to string for MongoDB _id
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    desc: "",
    image: "",
    tech: "",
    liveLink: "",
    githubLink: "",
    featured: false,
  });

  // 1. FETCH PROJECTS (GET)
  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/projects");
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({
      title: "",
      category: "",
      desc: "",
      image: "",
      tech: "",
      liveLink: "",
      githubLink: "",
      featured: false,
    });
    setIsModalOpen(true);
  };

  const handleEdit = (project: any) => {
    setEditingId(project._id); // Use MongoDB _id
    setFormData({
      ...project,
      tech: project.tech.join(", "),
    });
    setIsModalOpen(true);
  };

  // 2. DELETE PROJECT (DELETE)
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        const res = await fetch(`/api/projects/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          // Remove from local state to update UI instantly
          setProjects(projects.filter((p) => p._id !== id));
        } else {
          alert("Failed to delete project");
        }
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  // 3. SAVE PROJECT (POST or PUT)
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const payload = {
      ...formData,
      tech: formData.tech
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== ""),
    };

    try {
      if (editingId) {
        // UPDATE (PUT)
        const res = await fetch(`/api/projects/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          const updatedProject = await res.json();
          setProjects(
            projects.map((p) => (p._id === editingId ? updatedProject : p)),
          );
          setIsModalOpen(false);
        }
      } else {
        // CREATE (POST)
        const res = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          const newProject = await res.json();
          setProjects([newProject, ...projects]); // Add to top of list
          setIsModalOpen(false);
        }
      }
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Something went wrong!");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#051814] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FolderGit2 className="text-emerald-500" />
              Project Management
            </h1>
            <p className="text-gray-400 mt-1">
              Manage your portfolio projects dynamically.
            </p>
          </div>
          <button
            onClick={handleAddNew}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-500/20"
          >
            <Plus size={18} /> Add New Project
          </button>
        </div>

        {/* Projects Table */}
        <div className="bg-[#0a241d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="p-5 font-semibold">Project Details</th>
                  <th className="p-5 font-semibold">Category</th>
                  <th className="p-5 font-semibold">Status</th>
                  <th className="p-5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">
                      Loading projects...
                    </td>
                  </tr>
                ) : projects.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">
                      No projects found. Add one!
                    </td>
                  </tr>
                ) : (
                  projects.map((project) => (
                    <tr
                      key={project._id}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="p-5">
                        <div className="flex items-center gap-4">
                          <img
                            src={
                              project.image || "https://via.placeholder.com/150"
                            }
                            alt={project.title}
                            className="w-12 h-12 rounded-lg object-cover bg-gray-800"
                          />
                          <div>
                            <p className="font-bold text-white text-base">
                              {project.title}
                            </p>
                            <p className="text-xs text-gray-500 line-clamp-1 w-48 sm:w-auto">
                              {project.desc}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 text-emerald-400 text-sm font-medium">
                        {project.category}
                      </td>
                      <td className="p-5">
                        {project.featured ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <CheckCircle2 size={12} /> Featured
                          </span>
                        ) : (
                          <span className="text-gray-500 text-xs">
                            Standard
                          </span>
                        )}
                      </td>
                      <td className="p-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button
                            onClick={() => handleEdit(project)}
                            className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors"
                          >
                            <Pencil size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(project._id)}
                            className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal - SAME AS BEFORE, just added disabled state to button while saving */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a241d] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <h2 className="text-xl font-bold text-white">
                  {editingId ? "Edit Project" : "Add New Project"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Form Content - Same as previous code */}
              <div className="p-6 overflow-y-auto">
                <form
                  id="project-form"
                  onSubmit={handleSave}
                  className="flex flex-col gap-5"
                >
                  {/* ... All input fields remain exactly the same as the previous response ... */}
                  {/* Re-paste the inputs here from the previous code block for brevity */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        Project Title
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        className="bg-[#051814] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                        placeholder="e.g. E-commerce App"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        Category
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="bg-[#051814] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                        placeholder="e.g. Web Development"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      Image URL
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                      className="bg-[#051814] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                      placeholder="https://..."
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      Technologies (Comma separated)
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.tech}
                      onChange={(e) =>
                        setFormData({ ...formData, tech: e.target.value })
                      }
                      className="bg-[#051814] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                      placeholder="React, Node.js, Tailwind..."
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        Live Link
                      </label>
                      <input
                        type="text"
                        value={formData.liveLink}
                        onChange={(e) =>
                          setFormData({ ...formData, liveLink: e.target.value })
                        }
                        className="bg-[#051814] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        GitHub Link
                      </label>
                      <input
                        type="text"
                        value={formData.githubLink}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            githubLink: e.target.value,
                          })
                        }
                        className="bg-[#051814] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      Description
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.desc}
                      onChange={(e) =>
                        setFormData({ ...formData, desc: e.target.value })
                      }
                      className="bg-[#051814] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none resize-none"
                      placeholder="Short description of the project..."
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer mt-2">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) =>
                        setFormData({ ...formData, featured: e.target.checked })
                      }
                      className="w-5 h-5 accent-emerald-500 rounded bg-[#051814] border-white/10"
                    />
                    <span className="text-sm font-medium text-white">
                      Mark as Featured Project
                    </span>
                  </label>
                </form>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="project-form"
                  disabled={isSaving}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : "Save Project"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
