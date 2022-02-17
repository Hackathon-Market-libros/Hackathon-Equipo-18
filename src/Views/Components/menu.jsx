import '../Styles/menu.css';
const Menu = (props) => {

    const {show} = props;

    return (
        <ul className={`${"menuCont"} ${show ? "show" : "hide"}`}>
            <li>Contácto</li>
            <li>Ver Libros</li>
        </ul>
    );
}

export default Menu;