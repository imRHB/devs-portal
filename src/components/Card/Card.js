import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, img, position, country } = props.dev;

    const shortCardStyle = {
        margin: 0,
    }
    return (
        <div className="details-card">
            <div>
                <img className="card-img" src={img} alt="" />
            </div>
            <div className="dev-short-info">
                <h2 style={shortCardStyle}>{name}</h2>
                <p style={shortCardStyle}>{position}, {country}</p>
            </div>
        </div>
    );
};

export default Card;