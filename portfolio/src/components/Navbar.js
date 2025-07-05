import { useEffect, useState } from 'react'
import { NavLink, useLocation, Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder'
import ClearIcon from '@mui/icons-material/Clear'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [expandNavbar, setExpandNavbar] = useState(false);

  const button_logic = () => {
    setExpandNavbar(prev => !prev);
  };

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className='navbarContainer' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button className='hamburger' onClick={button_logic}><ReorderIcon /></button>
        <button className='cross' onClick={button_logic}><ClearIcon /></button>
      </div>

      <Link to={'/Portfolio-react'} className="navbar-name">Eero Kantonen</Link>

      <div className='linkss'>
        <NavLink to={'/Portfolio-react'}>{t('nav.home')}</NavLink>
        <NavLink to={"/projects"}>{t('nav.projects')}</NavLink>
        <NavLink to={"/experience"}>{t('nav.experience')}</NavLink>
        <div className="lang-toggle">
          <select
            value={i18n.language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="lang-select"
          >
            <option value="en">EN</option>
            <option value="fi">FI</option>
          </select>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
