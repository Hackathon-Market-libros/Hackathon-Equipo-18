import { useState } from 'react';
import '../Styles/NavBar.css';
import logo from '../../media/logo3.png';

import Btn from './Btn';
import Menu from './menu';

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return(
        <header className="nav">
            <nav>
                <img className="logo" src={logo} alt="Librother.com" />
                <Btn onToggle={handleToggle}/>
                <Menu show={toggle}/>
            </nav>          
        </header>
        
    );
}

export default NavBar;