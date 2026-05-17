import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

export default function AllPokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes] = useState([]);
    const [generations, setGenerations] = useState([]);

    const [filters, setFilters] = useState({
        name: '',
        type_id: '',
        region: '',
        generation_id: ''
    });

    const API_BASE_URL = 'http://127.0.0.1:8000/api';

    // 1. Corretto l'accesso ai dati: res.data.data invece di res.data
    const fetchPokemon = (currentFilters = {}) => {
        axios.get(`${API_BASE_URL}/pokemon`, { params: currentFilters })
            .then(res => {
                setPokemon(res.data.data);
            })
            .catch(err => {
                console.error("Errore API Pokemon:", err);
            });
    };

    const fetchSelectData = () => {
        axios.get(`${API_BASE_URL}/types`)
            .then(res => setTypes(res.data.data))
            .catch(err => console.error("Errore tipi:", err));

        axios.get(`${API_BASE_URL}/generations`)
            .then(res => setGenerations(res.data.data))
            .catch(err => console.error("Errore generazioni:", err));
    };

    useEffect(() => {
        fetchPokemon();
        fetchSelectData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPokemon(filters);
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4 fw-bold">Pokédex</h1>

            <form onSubmit={handleSubmit} className="row g-3 mb-5 p-4 bg-light rounded shadow-sm border-0">

                <div className="col-md-3">
                    <label className="form-label small fw-bold">Nome</label>
                    <input name="name" type="text" className="form-control" placeholder="Es: Pikachu"
                           value={filters.name} onChange={handleInputChange} />
                </div>
                {/*Filtra Nome */}


                <div className="col-md-3">
                    <label className="form-label small fw-bold">Regione</label>
                    <select name="region" className="form-select text-capitalize"
                            value={filters.region} onChange={handleInputChange}>
                        <option value="">Tutte le Regioni</option>
                        {Array.isArray(generations) && generations.map(gen => (
                            <option key={gen.id} value={gen.region}>{gen.region}</option>
                        ))}
                    </select>
                    {/* SELECT REGIONI */}
                </div>


                <div className="col-md-2">
                    <label className="form-label small fw-bold">Tipo</label>
                    <select name="type_id" className="form-select text-capitalize"
                            value={filters.type_id} onChange={handleInputChange}>
                        <option value="">Tutti i Tipi</option>
                        {Array.isArray(types) && types.map(type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                    {/* SELECT TIPI */}
                </div>


                <div className="col-md-2">
                    <label className="form-label small fw-bold">Gen</label>
                    <select name="generation_id" className="form-select"
                            value={filters.generation_id} onChange={handleInputChange}>
                        <option value="">Tutte</option>
                        {Array.isArray(generations) && generations.map(gen => (
                            <option key={gen.id} value={gen.id}>Gen {gen.number}</option>
                        ))}
                    </select>
                    {/* SELECT GENERAZIONI */}
                </div>

                <div className="col-md-2 d-flex align-items-end">
                    <button type="submit" className="btn btn-primary w-100 fw-bold">Filtra</button>
                </div>
            </form>


            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {pokemon.length > 0 ? (
                    pokemon.map(pkm => (
                        <div className="col" key={pkm.id}>
                            <PokemonCard pokemon={pkm} />
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center py-5">
                        <p className="text-muted italic">Nessun Pokemon trovato con questi filtri.</p>
                    </div>
                )}
            </div>
        </div>
    );
}