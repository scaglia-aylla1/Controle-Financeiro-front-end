import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Receitas() {
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        // Chamar API para buscar receitas
        axios.get('http://localhost:8080/api/receitas') // Altere para sua URL de backend
            .then(response => setReceitas(response.data))
            .catch(error => console.error('Erro ao buscar receitas:', error));
    }, []);

    return (
        <div>
            <h2>Receitas</h2>
            <ul>
                {receitas.map(receita => (
                    <li key={receita.id}>
                        {receita.descricao} - {receita.valor} - {receita.data}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Receitas;