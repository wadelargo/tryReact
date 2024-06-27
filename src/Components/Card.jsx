import React from 'react';

const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" />
      <p>{text}</p>
    </div>
  );
};

export default Card;
