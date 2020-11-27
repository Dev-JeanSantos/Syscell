import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

type Props = {
    link:string;
    nameMenu: string
}

const ButtonFormCancel = ( {nameMenu, link}:Props) => (
    <Link to={link}>
        <button className="btn-men">
            <p 
            className="btn-text-cancel"
            
            >
                {nameMenu}
            </p>
        </button>
    </Link>
    
)

export default ButtonFormCancel;