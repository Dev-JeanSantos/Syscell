import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import{ ReactComponent as Icon} from '../../assets/imagens/cruz.svg';
import ButtonMenu from '../ButtonMenu';
import './styles.scss'

const Navbar = () => (
    <nav className="row bg-primary nav-container">
        <div className="col-1 nav-icon">
               <Link to="/" className="nav-logo"  >
                  <Icon/>
               </Link>
        </div>
        <div className="col-2 nav-icon2">
            Vidas em Células
        </div >
        <div className="col-6">
            <ul className="main-menu">
                <li>
                 <NavLink to="/sistema" activeClassName="active">
                   Conhecendo o Sistema
                 </NavLink>
                </li>
                <li>
                 <NavLink to="/igreja"  activeClassName="active">
                    Conhecendo a Igreja
                 </NavLink>
                </li>
                <li>
                 <NavLink to="/celula"  activeClassName="active">
                    Conhecendo às Células
                 </NavLink>
                </li>
            </ul>
        </div>
        <div className="col-1 icon-menu">
          <ButtonMenu/>
        </div>

    </nav>
)

export default Navbar;