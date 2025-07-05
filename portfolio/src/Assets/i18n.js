import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: {
            greeting: "Hi, My Name is Eero Kantonen",
            role: "Software Developer",
            email: "Email",
            phone: "Phone",
            social: {
              github: "Github",
              email: "Email",
              linkedin: "Linkedin"
            },
            skills: "Skills"
          },
          skills: {
            frontend: "Front-End",
            backend: "Back-End",
            languages: "Languages",
            databases: "Databases",
            cloud: "Cloud Services",
            other: "Other"
          },
          nav: {
            home: "Home",
            projects: "Projects",
            experience: "Experience"
          },
          experience: {
            highschool: "Martinlaakso high school 2014 → 2017",
            highschool_diploma: "High School Diploma",
            kesko_title: "Kesko",
            kesko_position: "Warehouse worker",
            kesko_dates: "Fulltime 2018 → 2020 + Summer jobs",
            kesko_description: "Managing and packing customer orders",
            kesko_referee_name: "Antti Heikkinen",
            jamk: "Jamk University of Applied Sciences",
            jamk_dates: "Graduated (2020 → 2024)",
            jamk_degree: "Bachelor's Degree",
            jamk_major: "Information and Communication Technology",
            wartsila_title: "Wärtsilä as software developer trainee",
            wartsila_dates: "2.5.2023 → 30.9.2023",
            wartsila_description: "Software Development",
            wartsila_referee_name: "Sachie Yoshizumi",
            valmet_title: "Thesis at Valmet",
            valmet_description: "Implement Rek.ai to Valmet.com",
            valmet_referee_name: "Niko Siltanen",
            referee: "Referee",
            ask_contact: "Ask for contact information",
            looking_for_job: "Seeking a junior or entry-level software development opportunities"
          },
          projects: {
            bowshop: {
              name: "Bowshop App",
              about: "Uses CRUD operations and displays items to the screen"
            },
            golf: {
              name: "Golfcourses App",
              about: "Uses Leaflet to display courses with markers from API data"
            },
            weather: {
              name: "Weather App",
              about: "Fetches weather data from OpenWeather and displays it"
            },
            moviedb: {
              name: "MovieDB App",
              about: "Search and display movies using MovieDB API"
            },
            crypto: {
              name: "Crypto Tracker",
              about: "Track live prices of cryptocurrencies using Chart.js"
            },
            youtube: {
              name: "YouTube to MP3",
              about: "Convert YouTube videos to MP3 and host with AWS"
            },
            review: {
              name: "Review App",
              about: "Users can create and comment on reviews"
            },
            coming: {
              name: "Coming soon!"
            }
          },
          projectDisplay: {
            noVideo: "No video available yet!",
            technologies: "Used Technologies",
            about: "About",
            sourceCode: "Source Code",
            backToProjects: "Back to Projects",
            notFound: "Project not found.",
            videoLinkNotWorking: "Video is not working?"
          }
        }
      },
      fi: {
        translation: {
          home: {
            greeting: "Hei, nimeni on Eero Kantonen",
            role: "Ohjelmistokehittäjä",
            email: "Sähköposti",
            phone: "Puhelin",
            social: {
              github: "Github",
              email: "Sähköposti",
              linkedin: "LinkedIn"
            },
            skills: "Taidot"
          },
          skills: {
            frontend: "Käyttöliittymä",
            backend: "Taustajärjestelmät",
            languages: "Kielet",
            databases: "Tietokannat",
            cloud: "Pilvipalvelut",
            other: "Muut"
          },
          nav: {
            home: "Etusivu",
            projects: "Projektit",
            experience: "Kokemus"
          },
          experience: {
            highschool: "Martinlaakson lukio 2014 → 2017",
            highschool_diploma: "Lukion päättötodistus",
            kesko_title: "Kesko",
            kesko_position: "Varastotyöntekijä",
            kesko_dates: "Kokoaikainen 2018 → 2020 + kesätyöt",
            kesko_description: "Asiakastilausten hallinta ja pakkaus",
            kesko_referee_name: "Antti Heikkinen",
            jamk: "Jamkin ammattikorkeakoulu",
            jamk_dates: "Valmistunut (2020–2024)",
            jamk_degree: "Insinöörin tutkinto",
            jamk_major: "Tieto- ja viestintätekniikka",
            wartsila_title: "Wärtsilä – ohjelmistokehitysharjoittelija",
            wartsila_dates: "2.5.2023 → 30.9.2023",
            wartsila_description: "Ohjelmistokehitys",
            wartsila_referee_name: "Sachie Yoshizumi",
            valmet_title: "Opinnäytetyö Valmetilla",
            valmet_description: "Rek.ai-toteutus Valmet.com-sivustolle",
            valmet_referee_name: "Niko Siltanen",
            referee: "Suosittelija",
            ask_contact: "Kysy yhteystietoja",
            looking_for_job: "Etsin juniori- tai aloittelevan ohjelmistokehittäjän tehtäviä"
          },
          projects: {
            bowshop: {
              name: "Bowshop-sovellus",
              about: "CRUD-toiminnot ja tuotteiden näyttö käyttöliittymässä"
            },
            golf: {
              name: "Golfkentät-sovellus",
              about: "Käyttää Leaflet-kirjastoa ja näyttää API-datasta markkerit"
            },
            weather: {
              name: "Sääsovellus",
              about: "Hakee säätiedot OpenWeatherista ja näyttää ne"
            },
            moviedb: {
              name: "MovieDB-sovellus",
              about: "Hae ja näytä elokuvia MovieDB API:n avulla"
            },
            crypto: {
              name: "Kryptovaluuttaseuranta",
              about: "Seuraa kryptovaluuttojen hintoja Chart.js:n avulla"
            },
            youtube: {
              name: "YouTube → MP3",
              about: "Muunna YouTube-videot MP3-muotoon ja hostaa AWS:ssä"
            },
            review: {
              name: "Arvostelu-sovellus",
              about: "Käyttäjät voivat luoda ja kommentoida arvosteluita"
            },
            coming: {
              name: "Tulossa pian!"
            }
          },
          projectDisplay: {
            noVideo: "Videota ei ole vielä saatavilla!",
            technologies: "Käytetyt teknologiat",
            about: "Tietoa projektista",
            sourceCode: "Lähdekoodi",
            backToProjects: "Takaisin projekteihin",
            notFound: "Projektia ei löytynyt.",
            videoLinkNotWorking: "Video ei toimi?"
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
