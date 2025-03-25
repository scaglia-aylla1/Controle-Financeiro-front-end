import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Despesas() {
    const [despesas, setDespesas] = useState([]);

    useEffect(() => {
        // Chamar API para buscar despesas
        axios.get('http://localhost:8080/api/despesas') // Altere para sua URL de backend
            .then(response => setDespesas(response.data))
            .catch(error => console.error('Erro ao buscar despesas:', error));
    }, []);

    return (
        <div>
            <h2>Despesas</h2>
            <ul>
                {despesas.map(despesa => (
                    <li key={despesa.id}>
                        {despesa.descricao} - {despesa.valor} - {despesa.data}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Despesas;