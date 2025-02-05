import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';



function Navbar() {
  const location = useLocation();

  // To open navbar from burgericon
  const button_logic = () => {
    setExpandNavbar((prev) => !prev);
  }
  const [expandNavbar, setExpandNavbar] = useState("false")
 
  // if location changes then set navbar variable to false(collapse)
  useEffect(() => {
    setExpandNavbar(false);
  }, [location])

  return (
    <nav className='navbarContainer' id={expandNavbar ? "open" : "close"}>

      <div className='toggleButton'>
        <button className='hamburger' onClick={button_logic}><ReorderIcon /></button>
        <button onClick={button_logic} className='cross'><ClearIcon /></button>
      </div>
      <Link to={'/Portfolio-react'} className="navbar-name">Eero Kantonen</Link>
      <div className='linkss'>
        <NavLink to={'/Portfolio-react'}>Home</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/experience"}>Experience</NavLink>
        
      </div>

    </nav>
  )
}

export default Navbar