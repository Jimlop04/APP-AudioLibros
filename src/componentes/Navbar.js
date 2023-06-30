import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#025A27' }}>
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src="images/logo-nav.png" width="300px" height="60px" alt="Logo en la Barra principal" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="d-flex" role="Casa">
                            <NavLink to="/administrador" className="btn btn-outline-warning" type="submit">
                            <FontAwesomeIcon icon={faHome} />
                            </NavLink>
                        </form>
                    </div>
                </div>
            </nav>

            <nav className="navbar justify-content-center" style={{ backgroundColor: '#while', border: '2px solid green' }}>
                <div className="container-fluid">
                    <span className="navbar-brand mx-auto" style={{ fontSize: '20px', fontWeight: 'bold', color: '#009E50' }}>Audio Libros</span>
                </div>
            </nav>

        </div>
    )
}
export default Navbar