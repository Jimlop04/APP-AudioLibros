import React from 'react';
import FormBusquedaLibros from './FormBusquedaLibros';

const Carrucel = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }} className="shadow">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col">
                <img src="./images/img1.png" className="d-block w-100" alt="Imagen 1" />
              </div>
              <div className="col">
                <img src="./images/img2.png" className="d-block w-100" alt="Imagen 2" />
              </div>
              <div className="col">
                <img src="./images/img4.png" className="d-block w-100" alt="Imagen 4" />
              </div>
              <div className="col">
                <img src="./images/img3.png" className="d-block w-100" alt="Imagen 3" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img src="./images/img3.png" className="d-block w-100" alt="Imagen 3" />
              </div>
              <div className="col">
                <img src="./images/img4.png" className="d-block w-100" alt="Imagen 4" />
              </div>
              <div className="col">
                <img src="./images/img1.png" className="d-block w-100" alt="Imagen " />
              </div>
              <div className="col">
                <img src="./images/img2.png" className="d-block w-100" alt="Imagen 2" />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div style={{ marginBottom: '25px' }}>
                <FormBusquedaLibros /> {/*componente importado */}
            </div>
    </div>
  );
};

export default Carrucel;
