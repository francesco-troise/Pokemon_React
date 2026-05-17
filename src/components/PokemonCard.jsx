import  {Link} from 'react-router-dom'

export default function PokemonCard({ pokemon }) {
    const BASE_URL = "http://127.0.0.1:8000/storage/";

    return (
        <div className="card h-100 shadow-sm hover-shadow border-0 bg-white">

            <div className="card-img-container p-3 bg-light text-center rounded-top">
                <Link to={`/pokemon/${pokemon.id}`} className="text-decoration-none text-dark">
                    <img
                        src={`${BASE_URL}${pokemon.image}`}
                        className="card-img-top img-fluid"
                        alt={pokemon.name}
                        style={{ maxHeight: '150px', objectFit: 'contain' }}
                    />
                </Link>

            </div>
            {/* Immagine Pokemon */}

            <div className="card-body d-flex flex-column">

                <small className="text-muted fw-bold mb-1">
                    #{String(pokemon.id).padStart(3, '0')}
                </small>
                <h5 className="card-title text-capitalize fw-bold mb-2 text-dark">
                    {pokemon.name}
                </h5>
                {/* ID e Nome */}


                <div className="mb-3">
                    {pokemon.types && pokemon.types.map((type) => (
                        <Link
                            key={type.id}
                            to={`/types/${type.id}`}
                            className="badge me-1 shadow-sm text-capitalize text-decoration-none"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: '#efefef',
                                color: '#333',
                                border: '1px solid #ddd',
                                cursor: 'pointer'
                            }}
                        >
                            {type.name}
                        </Link>
                    ))}
                </div>
                {/* Sezione TIPI (Badge) */}


                <div className="card-text mt-auto">
                    <div className="d-flex justify-content-between small text-secondary border-top pt-2">
                        <span>Regione:</span>
                        <Link to={`/generations/${pokemon.generation_id}`}>
                            <span className="fw-semibold text-dark text-capitalize">
                                {pokemon.generation.region}
                            </span>
                        </Link>

                    </div>
                    <div className="d-flex justify-content-between small text-secondary">
                        <span>Gen:</span>
                        <Link to={`/generations/${pokemon.generation_id}`}>
                            <span className="fw-semibold text-dark">
                                {pokemon.generation_id}
                            </span>
                        </Link>

                    </div>
                </div>
                {/*Regione e Gen*/}
            </div>
        </div>
    );
}