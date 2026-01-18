import { useState } from 'react';

export default function ProjectForm({ addProject }) {
  const [formData, setFormData] = useState({ title: "", category: "", desc: "", image: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.desc) return;
    addProject(formData);
    setFormData({ title: "", category: "", desc: "", image: "" });
  };

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit} className="styled-form">
        <h3>Submit New Project</h3>
        <div className="input-grid">
          <input 
            placeholder="Project Name" 
            value={formData.title} 
            onChange={(e) => setFormData({...formData, title: e.target.value})} 
          />
          <input 
            placeholder="Category (e.g. Branding)" 
            value={formData.category} 
            onChange={(e) => setFormData({...formData, category: e.target.value})} 
          />
        </div>
        <input 
          placeholder="Image URL" 
          value={formData.image} 
          onChange={(e) => setFormData({...formData, image: e.target.value})} 
        />
        <textarea 
          placeholder="Project Description" 
          rows="3"
          value={formData.desc} 
          onChange={(e) => setFormData({...formData, desc: e.target.value})} 
        />
        <button type="submit">Upload to Portfolio</button>
      </form>
    </section>
  );
}