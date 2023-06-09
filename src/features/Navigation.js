import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const Navigation = () => {
  const title = "Space Travelers' Hub";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid py-2">
        <a className="navbar-brand d-flex align-items-center gap-3 fw-semibold" href="/">
          <img src={logo} width="50px" alt={title} />
          <span className="d-none d-sm-none d-md-block d-lg-block">{title}</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-2 gap-sm-2 gap-md-2 gap-lg-4">
            <li className="nav-link">
              <NavLink to="/"> Rockets</NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="missions"> Missions</NavLink>
            </li>
          </ul>
          <div className="nav-link">
            <NavLink to="profile" className="px-0 px-sm-0 px-md-3 px-lg-3 border-0 border-sm-0 border-md-2 border-lg-2 border-dark border-start" style={{ marginLeft: '10px' }}> Profile</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
