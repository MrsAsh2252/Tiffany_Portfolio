import styles from './HeroStyles.module.css';
import Spline from '@splinetool/react-spline';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import { useEffect, useRef } from "react";
import scholarLight from '../../assets/google-scholar-light.svg';
import scholarDark from '../../assets/google-scholar-dark.svg';
import artstationLight from '../../assets/ArtStation_light.svg';
import artstationDark from '../../assets/ArtStation_dark.svg';
import instagramLight from '../../assets/Instagram_light.svg';
import instagramDark from '../../assets/Instagram_dark.svg';
import CV from '../../assets/ChingyanYu_resume_3DModeler.pdf';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const heroRef = useRef(null);

useEffect(() => {
  const el = heroRef.current;
  if (!el) return;

  const onWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  el.addEventListener("wheel", onWheel, { passive: false });
  return () => el.removeEventListener("wheel", onWheel);
}, []);

  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const artstationIcon = theme === 'light' ? artstationLight : artstationDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div ref={heroRef} className={styles.hero}>

          <Spline
  scene="https://prod.spline.design/ro9xlWMputW59o8y/scene.splinecode"
  style={{ width: "100%", height: "100%", background: "transparent" }}
  events={{
    wheel: false,
    zoom: false,
    pan: false,
    orbit: true
  }}
/>

        </div>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
        CHING YAN <span>(<span className={styles.pink}>TIFFANY</span>)</span>
        YU
        </h1>
        <h2>3D Artist/3D Modeler</h2>
        <span>
            <a href="https://scholar.google.com/citations?user=TLM2V2EAAAAJ&hl=en" target="_blank">
            <img src={artstationIcon} alt="ArtStation icon" />
          </a>
          <a href="https://www.instagram.com/mrs.ash_modelart/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="www.linkedin.com/in/chengxinyu" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          3D Artist focused on character modeling, stylized design, and digital storytelling.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;