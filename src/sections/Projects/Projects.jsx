import styles from './ProjectsStyles.module.css';
import multiagent from '../../assets/multiagent.png';
import siam from '../../assets/siam.png';
import system from '../../assets/system.png';
import scatter from '../../assets/scatter.png';
import ProjectCard from '../../common/ProjectCard';
import p1icon from "../../assets/P1_icon.png";
import p2icon from "../../assets/P2_icon.png";
import p3icon from "../../assets/P3_icon.png";
import p4icon from "../../assets/P4_icon.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={p1icon}
          link="https://www.artstation.com/artwork/XJ2L30"
          h3="Eclipse: Rise of the Mutant World"
          p="School Grad Film"
        />
        <ProjectCard
          src={p2icon}
          link="https://www.artstation.com/artwork/EzXyzq"
          h3="Personal Project1"
          p="Reference-based Modeling"
        />
        <ProjectCard
          src={p3icon}
          link="https://www.artstation.com/artwork/nJOV4o"
          h3="Personal Project2"
          p="Stylized Environment Modeling"
        />
        <ProjectCard
          src={p4icon}
          link="https://www.artstation.com/artwork/Jr86Dd"
          h3="Personal Project3"
          p="Reference-based Modeling"
        />
      </div>
    </section>
  );
}

export default Projects;
