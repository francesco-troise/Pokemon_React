import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container py-5">
            {/* Header Hero */}
            <div className="text-center mb-5 p-5 bg-dark text-white rounded shadow">
                <h1 className="display-4 fw-bold">Benvenuto nel Pokédex Project</h1>
                <p className="lead">Esplora il mondo dei Pokémon, le loro regioni e i loro tipi.</p>
            </div>

            <div className="row g-4 justify-content-center">

                {/* Sezione ALL POKEMON */}
                <div className="col-md-4">
                    <div className="card h-100 shadow border-0 hover-scale">
                        <div className="card-body text-center p-4">
                            <div className="display-1 mb-3">🐾</div>
                            <h3 className="card-title fw-bold">Pokédex</h3>
                            <p className="card-text text-muted">
                                Visualizza la lista completa dei Pokémon, cerca per nome e filtra i risultati.
                            </p>
                            <Link to="/pokemon" className="btn btn-primary w-100 py-2 fw-bold">
                                Esplora Pokémon
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sezione ALL GENERATIONS / REGIONS */}
                <div className="col-md-4">
                    <div className="card h-100 shadow border-0 hover-scale">
                        <div className="card-body text-center p-4">
                            <div className="display-1 mb-3">🌍</div>
                            <h3 className="card-title fw-bold">Regioni</h3>
                            <p className="card-text text-muted">
                                Scopri le diverse generazioni e le regioni storiche come Kanto, Johto e Hoenn.
                            </p>
                            <Link to="/generations" className="btn btn-success w-100 py-2 fw-bold">
                                Esplora Regioni
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sezione ALL TYPES */}
                <div className="col-md-4">
                    <div className="card h-100 shadow border-0 hover-scale">
                        <div className="card-body text-center p-4">
                            <div className="display-1 mb-3">🔥</div>
                            <h3 className="card-title fw-bold">Tipologie</h3>
                            <p className="card-text text-muted">
                                Analizza i tipi elementali: Fuoco, Acqua, Erba e tutti gli altri 18 tipi.
                            </p>
                            <Link to="/types" className="btn btn-warning w-100 py-2 fw-bold text-white">
                                Esplora Tipi
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}