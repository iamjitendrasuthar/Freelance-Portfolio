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
  const [editingId, setEditingId] = useState<string | null>(null);
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
    <div className="min-h-screen bg-[#051814] text-white pt-24 pb-12 sm:py-32 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4">
          <div className="w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 sm:gap-3">
              <FolderGit2 className="text-emerald-500 w-6 h-6 sm:w-8 sm:h-8" />
              Project Management
            </h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              Manage your portfolio projects dynamically.
            </p>
          </div>
          <button
            onClick={handleAddNew}
            className="w-full sm:w-auto justify-center cursor-pointer flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-500/20"
          >
            <Plus size={18} /> Add New Project
          </button>
        </div>

        {/* Projects Table Wrapper */}
        <div className="bg-[#0a241d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full">
          {/* overflow-x-auto ensures the table scrolls horizontally on small screens */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <th className="p-4 sm:p-5 font-semibold">Project Details</th>
                  <th className="p-4 sm:p-5 font-semibold">Category</th>
                  <th className="p-4 sm:p-5 font-semibold">Status</th>
                  <th className="p-4 sm:p-5 font-semibold text-right">
                    Actions
                  </th>
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
                      <td className="p-4 sm:p-5 max-w-[200px] sm:max-w-xs">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <img
                            src={
                              project.image || "https://via.placeholder.com/150"
                            }
                            alt={project.title}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover bg-gray-800 flex-shrink-0"
                          />
                          <div className="overflow-hidden">
                            <p className="font-bold text-white text-sm sm:text-base truncate">
                              {project.title}
                            </p>
                            <p className="text-xs text-gray-500 truncate w-full">
                              {project.desc}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-400 text-xs sm:text-sm font-medium whitespace-nowrap">
                        {project.category}
                      </td>
                      <td className="p-4 sm:p-5">
                        {project.featured ? (
                          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 rounded-full text-[10px] sm:text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                            <CheckCircle2 size={12} /> Featured
                          </span>
                        ) : (
                          <span className="text-gray-500 text-[10px] sm:text-xs whitespace-nowrap">
                            Standard
                          </span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-right">
                        <div className="flex items-center justify-end gap-2 sm:gap-3">
                          <button
                            onClick={() => handleEdit(project)}
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors cursor-pointer"
                          >
                            <Pencil
                              size={16}
                              className="sm:w-[18px] sm:h-[18px]"
                            />
                          </button>
                          <button
                            onClick={() => handleDelete(project._id)}
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2
                              size={16}
                              className="sm:w-[18px] sm:h-[18px]"
                            />
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

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 mt-16 sm:mt-0">
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
              className="relative w-full max-w-2xl bg-[#0a241d] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {editingId ? "Edit Project" : "Add New Project"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white cursor-pointer p-1"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Modal Form Content */}
              <div className="p-4 sm:p-6 overflow-y-auto">
                <form
                  id="project-form"
                  onSubmit={handleSave}
                  className="flex flex-col gap-4 sm:gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                        Project Title
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        className="bg-[#051814] border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:border-emerald-500 focus:outline-none"
                        placeholder="e.g. E-commerce App"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                        Category
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="bg-[#051814] border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:border-emerald-500 focus:outline-none"
                        placeholder="e.g. Web Development"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                      Image URL
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                      className="bg-[#051814] border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:border-emerald-500 focus:outline-none"
                      placeholder="https://..."
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                      Technologies (Comma separated)
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.tech}
                      onChange={(e) =>
                        setFormData({ ...formData, tech: e.target.value })
                      }
                      className="bg-[#051814] border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:border-emerald-500 focus:outline-none"
                      placeholder="React, Node.js, Tailwind..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                        Live Link
                      </label>
                      <input
                        type="text"
                        value={formData.liveLink}
                        onChange={(e) =>
                          setFormData({ ...formData, liveLink: e.target.value })
                        }
                        className="bg-[#051814] border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
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
                        className="bg-[#051814] border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                      Description
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.desc}
                      onChange={(e) =>
                        setFormData({ ...formData, desc: e.target.value })
                      }
                      className="bg-[#051814] border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:border-emerald-500 focus:outline-none resize-none"
                      placeholder="Short description of the project..."
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer mt-1 sm:mt-2">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) =>
                        setFormData({ ...formData, featured: e.target.checked })
                      }
                      className="w-4 h-4 sm:w-5 sm:h-5 accent-emerald-500 rounded bg-[#051814] border-white/10"
                    />
                    <span className="text-xs sm:text-sm font-medium text-white">
                      Mark as Featured Project
                    </span>
                  </label>
                </form>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="cursor-pointer px-5 py-2.5 rounded-lg sm:rounded-xl font-medium text-gray-300 hover:text-white transition-colors w-full sm:w-auto order-2 sm:order-1 border border-white/10 sm:border-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="project-form"
                  disabled={isSaving}
                  className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg sm:rounded-xl font-medium transition-colors shadow-lg shadow-emerald-500/20 disabled:opacity-50 w-full sm:w-auto order-1 sm:order-2"
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
