import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import EventIcon from '../images/nav-link-events.svg'
import Logo from '../images/ventixe-logo.svg'


//Code from Chat GPT for the hamburger button.
// using useState to remember if the mobile menu is open or not.
// menuOpen is true when the menu is open, and false when it's closed.
// The toggleMenu function changes menuOpen from true to false or from false to true when the button is clicked.
// If menuOpen is true, we add the "show" class to the <ul>, which makes the menu visible using CSS.


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
      <nav className="nav-wrapper">
      <a className="logo-link" href="#">
        <img src={Logo} alt="Ventixe logo" />
        <span className="ventixe-title">Ventixe</span>
      </a>

     
    
      <h1 className="nav-title">Events</h1>
      <button
       onClick={toggleMenu}
       className="hamburger" 
       aria-controls="nav-menu" 
       aria-expanded={menuOpen} 
       aria-label="Toggle navigation"
       >
        <i className="fa-solid fa-bars"></i>
      </button>

         <ul id="nav-menu" className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li>
            <NavLink to="/" className="nav-link active">
              <img className="event-icon" src={EventIcon} alt="Events icon" />
              <span className="section-name">Events</span>
          </NavLink>
          </li>
        </ul>

        <button className="sign-out-btn">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          Sign Out
        </button>
    </nav>
  )
}

export default Nav
