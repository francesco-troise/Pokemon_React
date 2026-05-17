import { Link } from 'react-router-dom';

export default function GenerationCard({ gen }) {
    // Definiamo la costante per l'URL di base dello storage di Laravel
    const BASE_URL_IMG = "http://127.0.0.1:8000/storage/";

    return (
        <div className="col">
            <div className="card h-100 shadow border-0 overflow-hidden">
                {/* Contenitore Immagine */}
                <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                        // Costruiamo il percorso usando la cartella specifica vista nel filesystem
                        src={`${BASE_URL_IMG}${gen.region_image}`}
                        className="card-img-top w-100 h-100"
                        alt={gen.region}
                        style={{ objectFit: 'cover' }}
                        // Fallback in caso l'immagine non venga trovata
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=Immagine+Regione'; }}
                    />
                </div>

                {/* Corpo della Card */}
                <div className="card-body text-center d-flex flex-column justify-content-between">
                    <div>
                        <span className="badge bg-primary mb-2 shadow-sm">Gen {gen.number}</span>
                        <h4 className="card-title text-capitalize fw-bold mb-3">{gen.region}</h4>
                    </div>

                    {/* Link dinamico basato sull'ID della generazione */}
                    <Link
                        to={`/generations/${gen.id}`}
                        className="btn btn-outline-primary w-100 fw-bold mt-auto"
                    >
                        Dettagli generazione
                    </Link>
                </div>
            </div>
        </div>
    );
}