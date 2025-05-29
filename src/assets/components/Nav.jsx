import React from 'react'
import { NavLink } from 'react-router-dom';
import EventIcon from '../images/nav-link-events.svg'
import Logo from '../images/ventixe-logo.svg'

const Nav = () => {
  return (
      <nav className="nav-wrapper">
      <a className="logo-link" href="#">
        <img src={Logo} alt="Ventixe logo" />
        <span className="ventixe-title">Ventixe</span>
      </a>

     
    
      <h1 className="nav-title">Events</h1>
      <button className="hamburger" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars"></i>
      </button>

         <ul id="nav-menu" className="nav-links">
          <li>
            <a className="nav-link active" href="#">
              <img className="event-icon" src={EventIcon} />
              <NavLink to="/" className="section-name">Events</NavLink>
            </a>
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
