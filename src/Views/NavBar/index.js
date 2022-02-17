import navStyle from './NavBar.module.css'

const NavBar = () => {

    return(
        <header className={navStyle.nav}>
            <nav>
                librother.com
            </nav>
        </header>
    );
}

export {NavBar}