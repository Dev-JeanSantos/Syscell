import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

type Props = {
    link:string;
    nameMenu: string
}

const ButtonForm = ( {nameMenu, link}:Props) => (
    <Link to={link}>
        <button className="btn-form">
            <p 
            className="btn-text"
            >
                {nameMenu}
            </p>
        </button>
    </Link>
    
)

export default ButtonForm;