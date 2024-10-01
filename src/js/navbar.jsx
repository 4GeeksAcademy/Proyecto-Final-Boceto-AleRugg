import React from "react";
import ReactDOM from 'react-dom/client';



const Navbar = () => {
    return (    
        <nav className="navbar navbar-expand-lg navbar-dark navbarBorder">
          <a className="navbar-brand" href="#">Sistema Nacional de Votaciones</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Encuestas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-primary text-white"
                  href="authentication.html"
                  >Autenticate</a>                
              </li>
            </ul>
          </div>
        </nav>
        );
};

export {Navbar}
