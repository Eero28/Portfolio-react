import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import AtmIcon from "@mui/icons-material/Atm";

function Experience() {
  const { t } = useTranslation();

  return (
    <section className="experience">
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.highschool")}
          </h3>
          <p>{t("experience.highschool_diploma")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.kesko_position")} – {t("experience.kesko_title")}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t("experience.kesko_dates")}
          </h4>
          <p>{t("experience.kesko_description")}</p>
          <h4>{t("experience.referee")}: {t("experience.kesko_referee_name")}</h4>
          <span>{t("experience.ask_contact")}</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.jamk")}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t("experience.jamk_degree")}
          </h4>
          <p>
            {t("experience.jamk_major")}<br />
            {t("experience.jamk_dates")}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.wartsila_title")}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t("experience.wartsila_dates")}
          </h4>
          <p>{t("experience.wartsila_description")}</p>
          <h4>{t("experience.referee")}: {t("experience.wartsila_referee_name")}</h4>
          <span>{t("experience.ask_contact")}</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.valmet_title")}
          </h3>
          <p>{t("experience.valmet_description")}</p>
          <h4>{t("experience.referee")}: {t("experience.valmet_referee_name")}</h4>
          <span>{t("experience.ask_contact")}</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<AtmIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("experience.looking_for_job")}
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
