import React from "react";
import "../Styles/cardItem.css";

const CardItem = (props) => {
    const { title, author, cover } = props
    return (
        <div>
            <section className='card'>
                <img src={cover} alt="Imagen Libro" />
                <h1>{title}</h1>
                <p>{author}</p>
                
            </section>
        </div>
    );
}
export default CardItem;