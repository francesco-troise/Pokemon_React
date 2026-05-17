import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ShowType() {

    const { id } = useParams();
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(true);

    const BASE_URL = "http://127.0.0.1:8000/storage/";
    useEffect(() => {
        setLoading(true);
        axios.get(`http://127.0.0.1:8000/api/types/${id}`)
            .then(res => {
                // LOG DI DEBUG: Apri la console del browser (F12) per vedere cosa arriva
                console.log("Risposta API:", res.data);

                // Proviamo a estrarre i dati in ordine di probabilità
                const fetchData = res.data.data || res.data;

                setType(fetchData);
                setLoading(false);
            })
            .catch(err => {
                console.error("Errore API:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center py-5">Caricamento in corso...</div>;
    if (!type) return <div className="text-center py-5">Tipo non trovato.</div>;


    const imageName = type.name.charAt(0).toUpperCase() + type.name.slice(1).toLowerCase() + ".jpg";

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">

                    {/* Navigazione */}
                    <Link to="/types" className="btn btn-sm btn-outline-secondary mb-4">
                        &larr; Torna a tutte le tipologie
                    </Link>

                    {/* Card Dettaglio Tipo */}
                    <div className="card shadow-lg border-0 overflow-hidden text-center">
                        <div className="py-5 bg-light border-bottom">
                            <div
                                className="mx-auto bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                                style={{ width: '160px', height: '160px' }}
                            >
                                <img
                                    src={`${BASE_URL}types_img/${imageName}`}
                                    alt={type.name}
                                    style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                                />
                            </div>
                        </div>

                        <div className="card-body p-4 p-md-5">
                            {/* Badge ID */}
                            <div className="mb-3">
                                <span className="badge bg-dark px-3 py-2 rounded-pill">
                                    ID CATEGORIA #{type.id}
                                </span>
                            </div>

                            {/* Nome del Tipo */}
                            <h1 className="display-4 fw-bold text-capitalize mb-4">
                                {type.name}
                            </h1>

                            <hr className="my-4 mx-auto" style={{ width: '30%', opacity: '0.1' }} />

                            {/* Descrizione */}
                            <h5 className="text-uppercase fw-bold text-muted small mb-3">Descrizione</h5>
                            <p className="card-text text-secondary fs-5 lh-base">
                                {type.description || `I Pokémon appartenenti alla categoria ${type.name} possiedono abilità innate legate ai loro elementi naturali. Ogni allenatore deve conoscere le loro debolezze per trionfare nelle sfide più difficili.`}
                            </p>
                        </div>

                        <div className="card-footer bg-white border-0 pb-4">
                            <small className="text-muted italic">
                                Sincronizzato con Pokédex Database 2026
                            </small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}