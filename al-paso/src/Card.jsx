import React from "react";
import "./Card.css"; // Importing a CSS file for styling

const Card = ({ imgsrc, title }) => {
  const whatsappLink = `https://wa.me/+593990390020?text=Estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(title)}`;

  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card compact-card"> {/* Added a class for compact styling */}
        <img src={imgsrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Solicitar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;