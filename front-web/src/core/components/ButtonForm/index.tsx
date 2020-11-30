import React from 'react';
import './styles.scss'

type Props = {
    link?: string;
    nameMenu: string;
}

const ButtonForm = ({ nameMenu, link}: Props) => (
    <button className="btn-form">
        <p className="btn-text">
            {nameMenu}
        </p>
    </button>

)

export default ButtonForm;