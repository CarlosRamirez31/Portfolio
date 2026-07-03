import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import Reveal from './Reveal';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="term-block">
      <Reveal className="section-cmd">{t.projCmd}</Reveal>

      <Reveal className="proj-list">
        {projects.map((project, i) => (
          <a
            key={project.name}
            className="proj-row"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="proj-arrow">▸</span>
            <span className="proj-name">{project.name}</span>
            <span className="proj-desc">{t.projectDesc[i]}</span>
            <span className="proj-tech">{project.tech}</span>
            <span className="proj-year">{project.year}</span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
