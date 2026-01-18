import { useState } from 'react';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import ProjectList from './component/ProjectList/ProjectList';
import ProjectForm from './component/ProjectForm/ProjectForm';
import './App.css';

function App() {
  const [projects, setProjects] = useState([
  {
     id: 1, 
    title: "The Journal", 
    category: "Editorial Design", 
    desc: "A premium publication focused on sustainable architecture.", 
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80" 
   },
   { 
    id: 2, 
    title: "Oasis Smart Home", 
    category: "Product Design", 
    desc: "A glass-interface ecosystem for eco-conscious living.", 
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80" 
   },
   { 
    id: 3, 
    title: "Big Coffee", 
    category: "Package Design", 
    desc: "Biodegradable packaging for Oslo's finest roasters.", 
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80" 
   },
    { 
      id: 4, 
      title: "Check Branding", 
      category: "Identity", 
      desc: "A complete visual overhaul for a space-tech startup.", 
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 5, 
      title: "Flow State App", 
      category: "UI/UX Design", 
      desc: "A minimalist productivity interface designed for deep work.", 
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 6, 
      title: "Arcade Architecture", 
      category: "3D Modeling", 
      desc: "Digital twin of a sustainable urban housing complex.", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
    }
]);
    

  const [searchQuery, setSearchQuery] = useState("");

  const addProject = (newProject) => {
    setProjects([{ ...newProject, id: Date.now() }, ...projects]);
  };

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="portfolio-app">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero />
      <main className="content-area">
        <ProjectForm addProject={addProject} />
        <div className="section-header">
          <h2>Selected Works</h2>
          <p>Displaying {filteredProjects.length} projects</p>
        </div>
        <ProjectList projects={filteredProjects} />
      </main>
      <footer className="footer">© 2026 Creative Agency. All Rights Reserved.</footer>
    </div>
  );
}

export default App;