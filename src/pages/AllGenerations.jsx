import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import GenerationCard from '../components/GenerationCard';

export default function AllGenerations() {
    const [generations, setGenerations] = useState([]);

    const [filterNumber, setFilterNumber] = useState('');
    const [filterRegion, setFilterRegion] = useState('');

    const BASE_URL_IMG = "http://127.0.0.1:8000/storage/";


    useEffect(() => {
        fetchGenerations();
    }, [filterNumber, filterRegion]);

    const fetchGenerations = () => {


        axios.get('http://127.0.0.1:8000/api/generations', {
            params: {
                number: filterNumber,
                region: filterRegion
            }
        })
        .then(res => {
            setGenerations(res.data.data);

        })
        .catch(err => {
            console.error("Errore nel caricamento generazioni:", err);

        });
    };

   return(
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {generations.map((gen) => (
        <GenerationCard key={gen.id} gen={gen} />
    ))}
</div>
   );
}