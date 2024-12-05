import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A brief description of the project.",
        images: [
          "/pr1.3.png",
          "/pr1.2.png",
          "/pr1.3.png"
        ],
        tags: ["React", "Node.js"],
        demoLink: "https://demo-link.com",
        repoLink: "https://github.com/repo",
      },

      {
        id: 2,
        title: "Project One",
        description: "A brief description of the project.",
        images: [
          "/pr1.3.png",
          "/pr1.2.png",
          "/pr1.3.png"
        ],
        tags: ["React", "Node.js"],
        demoLink: "https://demo-link.com",
        repoLink: "https://github.com/repo",
      },

      {
        id: 3,
        title: "Project One",
        description: "A brief description of the project.",
        images: [
          "/pr1.3.png",
          "/pr1.2.png",
          "/pr1.3.png"
        ],
        tags: ["React", "Node.js"],
        demoLink: "https://demo-link.com",
        repoLink: "https://github.com/repo",
      },

      {
        id: 4,
        title: "Project One",
        description: "A brief description of the project.",
        images: [
          "/pr1.3.png",
          "/pr1.2.png",
          "/pr1.3.png"
        ],
        tags: ["React", "Node.js"],
        demoLink: "https://demo-link.com",
        repoLink: "https://github.com/repo",
      },

      {
        id: 5,
        title: "Project One",
        description: "A brief description of the project.",
        images: [
          "/pr1.3.png",
          "/pr1.2.png",
          "/pr1.3.png"
        ],
        tags: ["React", "Node.js"],
        demoLink: "https://demo-link.com",
        repoLink: "https://github.com/repo",
      },

      {
        id: 6,
        title: "Project One",
        description: "A brief description of the project.",
        images: [
          "/pr1.3.png",
          "/pr1.2.png",
          "/pr1.3.png"
        ],
        tags: ["React", "Node.js"],
        demoLink: "https://demo-link.com",
        repoLink: "https://github.com/repo",
      },
    
    
    

      
    ]

export default function Projects() {
  return (
    <div className={styles.projectsPage}>
      <header className={styles.hero}>
        <h1>My Projects</h1>
        <p>Explore some of the projects I've worked on.</p>
      </header>
      
      <section className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}
