import { useState, useEffect } from 'react';
import axios from 'axios';
import TypeCard from '../components/TypeCard';

export default function AllType() {
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Stato per il termine di ricerca
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchTypes();
    }, []);

    const fetchTypes = () => {
        setLoading(true);
        axios.get('http://127.0.0.1:8000/api/types')
            .then(res => {
                setTypes(res.data.data || res.data || []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Errore nel caricamento dei tipi:", err);
                setLoading(false);
            });
    };

    // Filtriamo i tipi in base a quello che l'utente scrive nell'input
    const filteredTypes = types.filter(type =>
        type.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-5">
            {/* Header della pagina */}
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Tipologie Pokémon</h1>
                <p className="lead text-muted">
                    Esplora i Pokémon per il loro elemento naturale.
                </p>
                <div className="mx-auto bg-primary mb-4" style={{ height: '3px', width: '60px' }}></div>

                {/* Form di Ricerca */}
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="input-group shadow-sm">
                            <span className="input-group-text bg-white border-end-0">
                                <i className="bi bi-search text-muted"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0 ps-0"
                                placeholder="Cerca tipo (es: Fuoco, Veleno...)"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    className="btn btn-outline-secondary border-start-0"
                                    onClick={() => setSearchTerm('')}
                                >
                                    &times;
                                </button>
                            )}
                        </div>
                        <div className="form-text mt-2">
                            Trovati {filteredTypes.length} tipi
                        </div>
                    </div>
                </div>
            </div>

            {/* Griglia dei Tipi */}
            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status"></div>
                    <p className="mt-2 text-muted">Recupero categorie...</p>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {filteredTypes.length > 0 ? (
                        filteredTypes.map((type) => (
                            <TypeCard key={type.id} type={type} />
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <div className="alert alert-light shadow-sm border-0">
                                <h5>Nessun tipo corrisponde a "{searchTerm}"</h5>
                                <p className="text-muted mb-0">Prova a cercare un altro elemento.</p>
                                <button
                                    className="btn btn-link"
                                    onClick={() => setSearchTerm('')}
                                >
                                    Mostra tutti i tipi
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}