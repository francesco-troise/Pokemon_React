import { Link } from 'react-router-dom';

export default function TypeCard({ type }) {
    // URL di base per lo storage (assicurati di aver lanciato 'php artisan storage:link')
    const BASE_URL = "http://127.0.0.1:8000/storage/";

    return (
        <div className="col">
            <div className="card h-100 shadow-sm border-0 text-center p-3 hover-shadow transition-all">
                <div className="card-body d-flex flex-column align-items-center">

                    <div
                        className="mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: '120px', height: '120px' }}
                    >
                        <img

                            src={`${BASE_URL}${type.image}`}
                            alt={type.name}
                            className="img-fluid"
                            style={{ maxHeight: '100%', objectFit: 'contain' }}

                        />
                    </div>

                    <h4 className="card-title text-capitalize fw-bold mb-3">
                        {type.name}
                    </h4>



                    <Link
                        to={`/types/${type.id}`}
                        className="btn btn-outline-primary w-100 rounded-pill fw-bold mt-auto"
                    >
                        Vedi dettagli
                    </Link>
                </div>
            </div>
        </div>
    );
}