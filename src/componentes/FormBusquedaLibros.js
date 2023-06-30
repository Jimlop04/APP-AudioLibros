import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const FormBusquedaLibros = () => {
    return (
        <div className="container" style={{ maxWidth: "700px", border: "2px dashed green", padding: "20px", fontSize: '14px' }}>
            <form className="row g-3 needs-validation" noValidate>

                {/* Primera linea */}

                <div className="col-md-8">
                    <label htmlFor="validationCustom03" className="form-label" style={{ opacity: 0 }}>.</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Buscar libro" required />
                    <div className="valid-feedback">
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom03" className="form-label">Año</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option value="" defaultValue disabled>2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                    <div className="invalid-feedback">
                    </div>
                </div>

                {/* Segunda linea */}

                <div className="col-md-2">
                    <label htmlFor="validationCustom03" className="form-label">Recursos</label>
                    <select className="form-select" id="validationCustom04" required placeholder="Selecciona una opción">
                        <option value="" defaultValue disabled></option>
                        <option value="."></option>
                    </select>
                    <div className="invalid-feedback">
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom03" className="form-label">Área de Conocimiento</label>
                    <select className="form-select" id="validationCustom04" required placeholder="Selecciona una opción">
                        <option defaultValue disabled></option>
                        <option>.</option>
                    </select>
                    <div className="invalid-feedback">
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom03" className="form-label ">Subárea Conocimiento</label>
                    <select className="form-select" id="validationCustom04" required placeholder="Selecciona una opción">
                        <option defaultValue disabled></option>
                        <option>.</option>
                    </select>
                    <div className="invalid-feedback">
                    </div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Subárea especifica</label>
                    <select className="form-select" id="validationCustom04" required placeholder="Selecciona una opción">
                        <option defaultValue disabled ></option>
                        <option>.</option>
                    </select>
                    <div className="invalid-feedback">
                    </div>
                </div>
                <div className="col-1">
                    <label htmlFor="validationCustom03" className="form-label" style={{ opacity: 0 }}>.</label>
                    <NavLink to="/formaudiolibro" className="btn btn-success">
                        <FontAwesomeIcon icon={faSearch} />
                    </NavLink>
                </div>
                <label htmlFor="validationCustom05" className="form-label text-center"
                    style={{ fontSize: '18px', fontWeight: 'bold', color: '#009E50', marginBottom: '10px' }}>Lista de los libros Encontrados</label>
            </form>


        </div>
    )
}
export default FormBusquedaLibros