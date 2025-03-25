// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/receitas">Receitas</Link></li>
                <li><Link to="/despesas">Despesas</Link></li>
                <li><Link to="/relatorio">Relatório</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;