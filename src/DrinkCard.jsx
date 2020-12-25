import React from "react";

const DrinkCard = ({ buyer, name, options, onDelete }) => {
  const handleDelete = () => {
    const order = { buyer, name, options };
    onDelete && onDelete(order);
  };
  return (
    <div className="card mb-1">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <button
            className="btn btn-outline-danger mr-3"
            onClick={handleDelete}
          >
            X
          </button>
          <h5 className="card-title m-0 mr-1">{name}</h5>
          <div className="card-text m-0">{options}</div>
        </div>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            <cite>{buyer}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default DrinkCard;
