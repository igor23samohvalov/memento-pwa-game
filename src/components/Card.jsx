import React from 'react';

function Card({ image, selected, onClick }) {

  return (
    <div className="card">
      <div className={selected && 'selected'}>
        <img src={image} className="card-face" alt="card face" />
        <img
          src={'/assets/fireship.png'}
          alt="card back"
          className="card-back"
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default Card;