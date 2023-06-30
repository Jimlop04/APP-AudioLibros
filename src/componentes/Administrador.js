import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Administrador = () => {
    return (
        <div>
            <div>
                <div className="container" style={{ maxWidth: "700px", border: "2px dashed green", padding: "20px", fontSize: '14px' }}>
                    <form className="row g-3 needs-validation" noValidate>
                    <label htmlFor="validationCustom03" className="form-label"
                    style={{ fontSize: '20px', fontWeight: 'bold', color: '#009E50' }}>Ingresar Nuevos Libros</label>

                        {/* Primera linea */}

                        <div className="col-md-12">
                            <label htmlFor="validationCustom03" className="form-label">Nombre del Libro</label>
                            <select className="form-select" id="validationCustom04" required placeholder="Selecciona una opción">
                               
                            </select>
                            <div className="invalid-feedback">
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom03" className="form-label">Año</label>
                            <select className="form-select" id="validationCustom04" required>
                                <option selected disabled value="">2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                            </select>
                            <div className="invalid-feedback">
                            </div>
                        </div>

                        {/* Segunda linea */}

                        <div className="col-md-2">
                            <label htmlFor="validationCustom03" className="form-label">Recursos</label>
                            <select className="form-select" id="validationCustom04" required placeholder="Selecciona una opción">
                                <option selected disabled value=""></option>
                                <option>.</option>
                            </select>
                            <div className="invalid-feedback">
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">Área de Conocimiento</label>
                            <select className="form-select" id="validationCustom04" required placeholder="Selecciona una opción">
                                <option selected disabled value=""></option>
                                <option>.</option>
                            </select>
                            <div className="invalid-feedback">
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label ">Subárea Conocimiento</label>
                            <select className="form-select" id="validationCustom04" required placeholder="Selecciona una opción">
                                <option selected disabled value=""></option>
                                <option>.</option>
                            </select>
                            <div className="invalid-feedback">
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="validationCustom05" className="form-label">Subárea especifica</label>
                            <select className="form-select" id="validationCustom04" required placeholder="Selecciona una opción">
                                <option selected disabled value=""></option>
                                <option>.</option>
                            </select>
                            <div className="invalid-feedback">
                            </div>
                        </div>
                        <div className="col-1">
                            <label htmlFor="validationCustom03" className="form-label" style={{ opacity: 0 }}>.</label>
                            <button className="btn btn-success" >
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>

                    </form>




                </div>

            </div>

        </div>


    )
}

export default Administrador