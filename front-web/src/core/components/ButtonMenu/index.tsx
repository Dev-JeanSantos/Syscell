import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

const ButtonMenu = () => (
    <Link to="/auth/login">
        <button className="btn-menu">
            <p className="text-btn-menu">Cadastre-se em uma célula</p>
        </button>
    </Link>
    
)

export default ButtonMenu;