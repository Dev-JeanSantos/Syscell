import React from 'react';
import ButtonMenu from '../ButtonMenu';
import './styles.scss'

const Navbar = () => (
    <nav className="row bg-primary nav-container">
        <div className="col-1 nav-icon">
               <a href="link" className="nav-logo">
                 Logo
               </a>
        </div>
        <div className="col-2 nav-icon2">
            Vidas em Celulas
        </div >
        <div className="col-6">
            <ul className="main-menu">
                <li>
                 <a href="link">
                   Conhecendo o Sistema
                 </a>
                </li>
                <li>
                 <a href="link">
                    Conhecendo a Igreja
                 </a>
                </li>
                <li>
                 <a href="link">
                    Conhecendo à Célula
                 </a>
                </li>
            </ul>
        </div>
        <div className="col-1 icon-menu">
          <ButtonMenu/>
        </div>

    </nav>
)

export default Navbar;