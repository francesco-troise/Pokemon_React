import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PokemonCard from '../components/Card';

export default function AllPokemon() {
    const [pokemon, setpokemon] = useState([]);

    // NUOVI STATI PER LE SELECT
    const [types, setTypes] = useState([]);
    const [generations, setGenerations] = useState([]);

    const [filters, setFilters] = useState({
        name: '',
        type_id: '',
        region: '',
        generation_id: ''
    });

    const API_URL = 'http://127.0.0.1:8000/api/pokemon';

    const fetchpokemon = (Filters = {}) => {
        axios.get(API_URL, { params: Filters })
            .then(res => setpokemon(res.data.data))
            .catch(err => console.error("Errore API:", err));
    };


    const fetchSelectdata = () => {
        axios.get('http://127.0.0.1:8000/api/types').then(res => setTypes(res.data));
        axios.get('http://127.0.0.1:8000/api/generations').then(res => setGenerations(res.data));
    };
    // FUNZIONE PER RECUPERARE DATI DELLE SELECT

    useEffect(() => {
        fetchpokemon();
        fetchSelectdata();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchpokemon(filters);
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4">Pokedex</h1>

            <form onSubmit={handleSubmit} className="row g-3 mb-5 p-4 bg-light rounded shadow-sm">
                {/* Cerca Nome */}
                <div className="col-md-3">
                    <input name="name" type="text" className="form-control" placeholder="Cerca nome..."
                           value={filters.name} onChange={handleInputChange} />
                </div>

                {/* SELECT REGIONI */}
                <div className="col-md-3">
                    <select name="region" className="form-select text-capitalize"
                            value={filters.region} onChange={handleInputChange}>
                        <option value="">Tutte le Regioni</option>
                        {generations.map(gen => (
                            <option key={gen.id} value={gen.region}>{gen.region}</option>
                        ))}
                    </select>
                </div>

                {/* SELECT TIPI */}
                <div className="col-md-2">
                    <select name="type_id" className="form-select text-capitalize"
                            value={filters.type_id} onChange={handleInputChange}>
                        <option value="">Tutti i Tipi</option>
                        {types.map(type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                </div>

                {/* SELECT GENERAZIONI */}
                <div className="col-md-2">
                    <select name="generation_id" className="form-select"
                            value={filters.generation_id} onChange={handleInputChange}>
                        <option value="">Tutte le Gen</option>
                        {generations.map(gen => (
                            <option key={gen.id} value={gen.id}>Generazione {gen.id}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-2">
                    <button type="submit" className="btn btn-primary w-100">Filtra</button>
                </div>
            </form>

            {/* Griglia Pokemon */}
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {pokemon.length > 0 ? (
                    pokemon.map(p => (
                        <div className="col" key={p.id}>
                            <PokemonCard pokemon={p} />
                        </div>
                    ))
                ) : (
                    <p className="text-center w-100">Nessun Pokemon trovato.</p>
                )}
            </div>
        </div>
    );
}