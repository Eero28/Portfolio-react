import React from 'react'
import Picture from "../Assets/Jeero.jpg"
import { skillList } from "../helpers/Skills"
import { SocialIcon } from 'react-social-icons'
import '../Assets/i18n.js'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation();

  return (
    <main className='home'>
      <section className='about'>
        <img src={Picture} alt="Eero" />
        <h3>{t('home.greeting')}</h3>
        <p>{t('home.role')}</p>
        <span>{t('home.email')}: eero.kantonen11@gmail.com</span>
        <span>{t('home.phone')}: +358 451 361 822</span>
      </section>

      <div className='prompt'>
        <div className='d-flex flex-column align-items-center socialContainer'>
          <span className='hiddenTip mb-3'>{t('home.social.github')}</span>
          <SocialIcon className='socialLink' target="_blank" url="https://github.com/Eero28" fgColor='white' />
        </div>
        <div className='d-flex flex-column align-items-center ml-4 socialContainer'>
          <span className='hiddenTip mb-3'>{t('home.social.email')}</span>
          <SocialIcon className='socialLink' target="_blank" url="mailto: eero.kantonen11@gmail.com" />
        </div>
        <div className='d-flex flex-column align-items-center socialContainer'>
          <span className='hiddenTip mb-3'>{t('home.social.linkedin')}</span>
          <SocialIcon className='socialLink' target="_blank" url="https://www.linkedin.com/in/eero-kantonen-7389a3209/" fgColor='white' />
        </div>
      </div>

      <h1 className='skills-title'>{t('home.skills')}</h1>
      <section className='skills'>
        {skillList.map((skill, index) => (
          <div key={index} className='skillsItem'>
            <li>
              <h2 className='skill-title'>{t(skill.Title)}</h2>
              <span className='skill-desc'>{skill.Desc}</span>
            </li>
          </div>
        ))}
      </section>

    </main>
  );
}

export default Home;
