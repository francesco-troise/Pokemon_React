import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

export default function ShowPokemon() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/pokemon/${id}`)
            .then(res => {
                setPokemon(res.data.data);
            })
            .catch(err => {
                console.error("Errore nel recupero del Pokemon:", err);
            });
    }, [id]);

    if (!pokemon) return <div className="container py-5 text-center"><h3>Pokemon non trovato!</h3></div>;

    return (
        <div className="container py-5">
            <div className="mb-4">
                <Link to="/pokemon" className="btn btn-outline-secondary btn-sm">
                    ← Torna al Pokedex
                </Link>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                    <h3 className="mb-3">Anteprima</h3>
                    <PokemonCard pokemon={pokemon} />
                </div>

                <div className="col-md-8">
                    <div className="card shadow-sm border-0 p-4">
                        <h2 className="text-capitalize mb-4 border-bottom pb-2">Dettagli Completi</h2>

                        <div className="row">

                            <div className="col-sm-6 mb-3">
                                <h6 className="text-muted">Informazioni Fisiche</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Altezza:</strong> {pokemon.pokemon_details?.height || 'N/D'} m</li>
                                    <li className="list-group-item"><strong>Peso:</strong> {pokemon.pokemon_details?.weight || 'N/D'} kg</li>
                                </ul>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <h6 className="text-muted">Classificazione</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Generazione:</strong> {pokemon.generation_id}</li>
                                    <li className="list-group-item"><strong>Regione:</strong> {pokemon.generation?.region}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h6 className="text-muted">Descrizione Pokedex</h6>
                            <p className="p-3 bg-light rounded border">
                                {pokemon.pokemon_details?.description || "Non ci sono descrizioni disponibili per questo esemplare nel database."}
                            </p>
                        </div>

                        <div className="mt-3">
                            <h6 className="text-muted">Debolezze e Resistenze</h6>
                            <p className="small text-secondary">
                                Questo Pokémon appartiene ai tipi: {pokemon.types.map(type => type.name).join(', ')}.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}