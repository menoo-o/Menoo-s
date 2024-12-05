import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const projects = [
    {
        id: 1,
        title: "Grains & Essentials",
        description: "A modern grocery store application built with the MERN stack, offering seamless product browsing, cart management, and checkout for everyday essentials.",
         tags: ["React", "Node.js", "Express Js", "Canva"],
        demoLink: "https://demo-link.com",
        repoLink: "https://github.com/repo",
      },

      {
        id: 2,
        title: "Chess-Drag & Drop with JS",
        description: "A dynamic chess game implemented in JavaScript, showcasing intuitive drag-and-drop functionality for moving pieces seamlessly across the board.",
        tags: ["HTML", "CSS", "JS"],
        demoLink: "https://hilarious-cranachan-7e9369.netlify.app/",
        repoLink: "https://github.com/menoo-o/chess-game",
      },

      {
        id: 3,
        title: "Weather API",
        description: "A web app that fetches and displays real-time weather data for random cities by interacting with a weather API, offering a simple and dynamic way to explore forecasts.",
        tags: ["React", "Node.js"],
        demoLink: "https://vocal-sorbet-783909.netlify.app/",
        repoLink: "https://github.com/menoo-o/Weather-API",
      },

      {
        id: 4,
        title: "Solar Flare Warning",
        description: "A visually captivating landing page built with Three.js, utilizing SphereGeometry to create an immersive 3D illusion of a solar flare, blending design and interactivity",
        tags: ["HTML", "CSS", "three.js"],
        demoLink: "https://aaagh.netlify.app/",
        repoLink: "https://github.com/menoo-o/solar-flare",
      },



      {
        id: 6,
        title: "ToDo App",
        description: "A task management app built with Next.js and Zod, offering client-side validation and persistent local storage to keep tasks saved even after a page refresh",
          tags: ["React", "Node.js", "ZOD"],
        demoLink: "https://todo-zod.vercel.app/",
        repoLink: "https://github.com/menoo-o/todo_ZOD.git",
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
