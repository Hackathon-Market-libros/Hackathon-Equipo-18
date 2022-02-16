import React from "react";

const Book = ({ image, title, autor, content, del}) => {
  console.log(image);
  return (
    <div className="card p-1 m-3 " style={{ width: "16rem" }}>
      <img className="card-img-top" src={image} alt="" />
    
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center">{`${title}`}</h5>

        <i className="card-text">Autor: {autor}</i>
        <p>
          <i className="fs-6 text">Content: {content}</i>
        </p>

        <div
          className="btn-group d-flex justify-content-center"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-success">
            Update
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={del}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
