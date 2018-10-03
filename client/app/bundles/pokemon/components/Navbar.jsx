import { Link } from 'react-router';
import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">Pokedex</Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className=""><Link to="/">Home</Link></li>
          <li className=""><Link to="/favorites">Favorites</Link></li>
          <li><a href="https://github.com/nickharvey27/Pokedex">About</a></li>
          <li><a href="mailto:nharvey278@gmail.com">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
