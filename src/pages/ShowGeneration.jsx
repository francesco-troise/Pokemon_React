import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ShowGeneration() {
    const { id } = useParams();
    const [generation, setGeneration] = useState(null);
    const [loading, setLoading] = useState(true);

    const BASE_URL_IMG = "http://127.0.0.1:8000/storage/";

    useEffect(() => {
        setLoading(true);
        axios.get(`http://127.0.0.1:8000/api/generations/${id}`)
            .then(res => {

                setGeneration(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Errore nel recupero della generazione:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center py-5">Caricamento dettagli...</div>;

    if (!generation) return <div className="text-center py-5">Generazione non trovata.</div>;

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">

                    {/* Pulsante per tornare indietro */}
                    <Link to="/generations" className="btn btn-sm btn-outline-secondary mb-4">
                        &larr; Torna a tutte le generazioni
                    </Link>

                    {/* Card Dettaglio Generazione */}
                    <div className="card shadow-lg border-0 overflow-hidden">
                        <div className="position-relative">
                            <img
                                src={`${BASE_URL_IMG}${generation.region_image}`}
                                className="card-img-top"
                                alt={generation.region}
                                style={{ height: '350px', objectFit: 'cover' }}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/800x400?text=Immagine+Regione' }}
                            />
                            <div className="position-absolute top-0 end-0 m-3">
                                <span className="badge bg-dark fs-6 shadow">
                                    ID #{generation.id}
                                </span>
                            </div>
                        </div>

                        <div className="card-body p-4">
                            <div className="d-flex align-items-center mb-3">
                                <span className="badge bg-primary me-2 px-3 py-2">
                                    Generazione {generation.number}
                                </span>
                            </div>

                            <h1 className="card-title display-5 fw-bold text-capitalize mb-3">
                                {generation.region}
                            </h1>

                            <hr />

                            <h5 className="fw-bold mt-4">Descrizione della Regione</h5>
                            <p className="card-text text-secondary lh-lg">
                                {generation.description || "In questa regione inizierai il tuo viaggio per diventare un Maestro Pokémon. Ogni regione offre sfide uniche, nuovi capipalestra e Pokémon leggendari da scoprire."}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}