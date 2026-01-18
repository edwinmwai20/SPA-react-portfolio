function ProjectCard({ project }) {
    return (
        <div className="project-card">
      <div className="image-container">
        <img src={project.image || "https://via.placeholder.com/600"} alt={project.title} />
      </div>
      <div className="project-info">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <a href="#" className="view-link">View Project →</a>
      </div>
    </div>
  );
}
export default ProjectCard