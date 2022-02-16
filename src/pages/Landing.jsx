
import Book from "../components/Book";
import Board from "../components/Board";
import React, { useEffect } from "react";


    const Landing = () => {
        const [loading, setLoading] = React.useState(true);
        const [books, setBooks] = React.useState([]);
      
        useEffect(() => {
          console.log("mount");
          setLoading(false);
          fetch("http://localhost:8080/books")
            .then((res) => res.json())
            .then((result) => {
              setBooks(result);
              console.log(result);
              setLoading(false);
            });
        }, []);
      
        const deleteBook = (id) => {
          const updatedBooks = books.filter((books) => books.id !== id);
          setBooks(updatedBooks);
        };
      
        const renderBooks = () => {
          if (loading) {
            return <p>Loading...</p>;
          }
      
          return books.map(({ id, image, title, autor, content }) => (
            <Book
              key={id}
              image={image}
              title={title}
              autor={autor}
              content={content}
              del={() => deleteBook(id)}
            />
          ));
        };
      
        return (
          <div>
            <Board />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 movies-container">
              {renderBooks()}
            </div>
          </div>
        );
      };
      
    export default Landing;