import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import Navbar from "./Navbar";

const FormAudioLibro = () => {
    return (

        <div>

            <div className="container shadow" style={{ maxWidth: '800px'}}>
                <form className="row g-3 needs-validation" noValidate>

                    {/* Primera linea */}

                    <div className="col-md-3" style={{ maxWidth: '220px', margin:"auto"}}>
                        <img src="./images/img1.png" className="d-block w-100 shadow" alt="Imagen 1"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom05" className="form-label" style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Área de conocimiento</label>
                        <label htmlFor="validationCustom05" className="form-label" style={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Ciencias sociales, periodismo, información y derecho</label>
                        <label htmlFor="validationCustom05" className="form-label" style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Subárea de conocimiento</label>
                        <label htmlFor="validationCustom05" className="form-label" style={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Derecho</label>
                        <label htmlFor="validationCustom05" className="form-label" style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Año de Publicacion</label>
                        <label htmlFor="validationCustom05" className="form-label" style={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'left', display: 'block' }}>2021</label>
                        <div className="valid-feedback"></div>
                    </div>
                    <div className="col-md-5">
                        <h6 className="msg-pnl-search text-rigth">Audios por Capitulos</h6>
                        <div style={{ maxWidth: '600px', height: '25px' }}>
                        <ReactAudioPlayer
                            src="https://www.example.com/audio.mp3"
                            autoPlay
                            controls
                            style={{ width: '90%',height: '25px' }}
                        />
                        </div>
                    </div>
                </form>

            </div>


        </div>
    )
}

export default FormAudioLibro