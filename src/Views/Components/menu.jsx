import '../Styles/menu.css';
const Menu = (props) => {

    const {show} = props;

    return (
        <ul className={`${"menuCont"} ${show ? "show" : "hide"}`}>
            <li>Inicio</li>
            <li>Favoritos</li>
            <li>Contacto</li>
        </ul>
    );
}

export default Menu;