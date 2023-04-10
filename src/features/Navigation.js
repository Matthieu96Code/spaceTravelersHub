import React from 'react';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
      </div>
    </div>
  </nav>
);

export default Navigation;
