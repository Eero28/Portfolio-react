import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projectList } from '../helpers/ProjectList';

function ProjectDisplay() {
  const { id } = useParams();
  const { t } = useTranslation();
  const project = projectList[id];

  if (!project) {
    return <p>{t("projectDisplay.notFound")}</p>;
  }

  return (
    <section className="project">
      <h1>{t(project.nameKey)}</h1>

      {project.video ? (
        <>
          <iframe
            className="videoframe"
            src={project.video}
            title="Project Demo Video"
            allowFullScreen
          />
          <p>{t("projectDisplay.videoLinkNotWorking")}</p>
          <p className='videoLink'><a href={project.videoLink}>Video link</a></p>
        </>
      ) : (
        <p>{t("projectDisplay.noVideo")}</p>
      )}
      {project.skills && (
        <>
          <h2>{t("projectDisplay.technologies")}</h2>
          <p>{project.skills}</p>
        </>
      )}

      {project.aboutKey && (
        <>
          <h2>{t("projectDisplay.about")}</h2>
          <p>{t(project.aboutKey)}</p>
        </>
      )}

      {project.link && (
        <div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ color: "white" }} />
            <label>{t("projectDisplay.sourceCode")}</label>
          </a>
        </div>
      )}

      <Link className="link" to="/projects">
        <button>{t("projectDisplay.backToProjects")}</button>
      </Link>
    </section>
  );
}

export default ProjectDisplay;
